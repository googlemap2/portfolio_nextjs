export default function content({ data }) {
  const listItem = data.map((item) => (
    <div>
      {item.head && (
        <h2 className={item.className} style={item.style}>
          {item.head}
        </h2>
      )}
      {item.contents.map((child) => (
        <>
          {child.text && (
            <p className={child.className} style={child.style}>
              {child.text}
            </p>
          )}
          {child.contents &&
            child.contents.map((contentItem) => (
              <p className={contentItem.className} style={contentItem.style}>
                {contentItem.text}
              </p>
            ))}
        </>
      ))}
    </div>
  ));
  return listItem;
}
