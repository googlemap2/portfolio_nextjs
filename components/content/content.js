export default function content({ data }) {
  const listItem = data.map((item) => (
    <div>
      {item.head && (<h2>{item.head}</h2>)}
      {item.titleChild && (<h1>{item.titleChild}</h1>)}
    </div>
    )
  );
  return listItem;
}
