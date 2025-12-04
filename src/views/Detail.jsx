import React from "react";

export default function Detail({ item, onBack }) {
  if (!item) return <div>No item selected</div>;

  return (
    <div>
      <h3>Detail Screen</h3>

      <h4>{item.title}</h4>
      <p>{item.body}</p>

      <button onClick={onBack}>Back</button>
    </div>
  );
}
