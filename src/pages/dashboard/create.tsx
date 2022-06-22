import { NextPage } from "next";
import { CreateLinkForm } from "../../components/dashboard/CreateLinkForm";
import { DashboardNav } from "../../components/dashboard/DashboardNav";
import { DashboardLayout } from "../../layout/DashboardLayout";

const CreatePage: NextPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center space-y-5">
        <DashboardNav />
        <CreateLinkForm />
      </div>
    </DashboardLayout>
  );
};

export default CreatePage;
