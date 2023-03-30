export default function content({ data }) {
  const listItem = data.map((item) => {
    <h2>{item.titile}</h2>;
  });
  return listItem;
}
