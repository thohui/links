import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { Navbar } from "../components/nav/Navbar";

export const DashboardLayout = ({ children }: PropsWithChildren) => {
  const data = useSession();
  const router = useRouter();

  if (data.status === "loading") {
    return <p>loading...</p>;
  }
  if (data.status === "unauthenticated") {
    router.push("/api/auth/signin");
  }
  return (
    <div className="h-screen w-screen">
      <Navbar />
      {children}
    </div>
  );
};
