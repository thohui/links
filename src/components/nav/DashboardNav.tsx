import Link from "next/link";
import { useRouter } from "next/router";

export const DashboardNav = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  if (currentPath === "/dashboard/create") {
    return (
      <div className="flex flex-row">
        <Link href="/dashboard">
          <a className="btn btn-ghost normal-case ">My links</a>
        </Link>
        <Link href="/dashboard/create">
          <a className="btn normal-case">Create Link</a>
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-row">
      <Link href="/dashboard">
        <a className="btn normal-case ">My links</a>
      </Link>
      <Link href="/dashboard/create">
        <a className="btn btn-ghost normal-case">Create Link</a>
      </Link>
    </div>
  );
};
