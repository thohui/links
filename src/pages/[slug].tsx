import { GetServerSideProps, NextPage } from "next";
import { prisma } from "../db/client";

const Link: NextPage = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const link = await prisma.link.findFirst({
    where: { slug: ctx.query.slug as string },
  });
  if (!link) {
    return {
      notFound: true,
    };
  }

  // TODO: track and add geolocation to the linkhit record
  await prisma.linkHit.create({
    data: {
      link: { connect: { id: link.id } },
    },
  });

  // update total hits
  await prisma.link.update({
    data: {
      hits: { increment: 1 },
    },
    where: { slug: ctx.query.slug as string },
  });

  return {
    redirect: {
      destination: link.url,
      permanent: true,
    },
  };
};

export default Link;
