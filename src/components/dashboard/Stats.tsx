import { trpc } from "../../utils/trpc";

export const Stats = () => {
  const { data, isError, isLoading } = trpc.useQuery(["link.get-link-stats"]);
  return (
    <div className="stats shadow">
      <div className="stat place-items-center">
        <div className="stat-title">Total Links</div>
        <div className="stat-value">
          {isError || isLoading ? 0 : data?.totalLinks}
        </div>
      </div>
      <div className="stat place-items-center">
        <div className="stat-title">Total Hits</div>
        <div className="stat-value text-secondary">
          {isError || isLoading ? 0 : data?.totalHits}
        </div>
      </div>
    </div>
  );
};
