import React from "react";

export default function text({ data }) {
  const listItems = data.map((item) => (
    <p style={{ ...item.style }}>{item.text}</p>
  ));
  return listItems;
}
