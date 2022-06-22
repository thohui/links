import { trpc } from "../../../utils/trpc";
import { LinkListItem } from "./LinkListItem";

export const LinkList = () => {
  const { data } = trpc.useQuery(["link.get-all-links"]);
  if (data && !!data.length) {
    return (
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Slug</th>
              <th>URL</th>
              <th>Hits</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((curr, index) => (
              <LinkListItem
                key={index}
                index={index}
                slug={curr.slug}
                url={curr.url}
                hits={curr.hits}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return null;
};
