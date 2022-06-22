interface Props {
  index: number;
  slug: string;
  url: string;
  hits: number;
}
export const LinkListItem = ({ index, slug, url, hits }: Props) => {
  return (
    <tr>
      <th>{index}</th>
      <td>{slug}</td>
      <td>{url}</td>
      <td>{hits}</td>
    </tr>
  );
};
