import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Navbar } from "../components/nav/Navbar";

const Home: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  if (session.status === "authenticated") {
    router.push("/dashboard");
  }
  return (
    <>
      <Navbar />
    </>
  );
};
export default Home;
