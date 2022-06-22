import { NextPage } from "next";
import { DashboardNav } from "../../components/dashboard/DashboardNav";
import { LinkList } from "../../components/dashboard/link/LinkList";
import { Stats } from "../../components/dashboard/Stats";
import { DashboardLayout } from "../../layout/DashboardLayout";

const Index: NextPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center space-y-5">
        <DashboardNav />
        <Stats />
        <LinkList />
      </div>
    </DashboardLayout>
  );
};
export default Index;
