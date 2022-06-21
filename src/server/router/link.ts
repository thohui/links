import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma } from "../../db/client";
import { URLRegex } from "../../utils/regex";
import { createProtectedRouter } from "../context";
export const linkRouter = createProtectedRouter()
  .mutation("create-link", {
    input: z.object({
      slug: z.string(),
      url: z.string().regex(URLRegex),
    }),
    resolve: async ({ ctx, input }) => {
      const { slug, url } = input;
      try {
        await prisma.link.create({
          data: {
            slug: slug,
            url: url,
            user: { connect: { id: ctx.session.user.id } },
          },
        });
      } catch (e: unknown) {
        if (e instanceof PrismaClientKnownRequestError) {
          if (e.code === "P2002") {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Slug already exists",
            });
          }
        }
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Internal server error",
        });
      }
    },
  })
  .query("get-link-stats", {
    async resolve({ ctx }) {
      let stats = await prisma.link.aggregate({
        _sum: {
          hits: true,
        },
        _count: {
          _all: true,
        },
        where: {
          user: { id: ctx.session.user.id },
        },
      });
      return {
        totalLinks: stats._count._all,
        totalHits: stats._sum.hits ? stats._sum.hits : 0,
      };
    },
  })
  .query("get-all-links", {
    async resolve({ ctx }) {
      let links = await prisma.link.findMany({
        select: {
          slug: true,
          url: true,
          hits: true,
        },
        where: {
          user: { id: ctx.session.user.id },
        },
      });
      return links ? links : [];
    },
  });
