import React, { useEffect, useState } from "react";

export default function Home({ user, onOpenDetail }) {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((r) => r.json())
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  function toggleFav(item) {
    let f = [...favorites];

    if (f.find((i) => i.id === item.id)) {
      f = f.filter((i) => i.id !== item.id);
    } else {
      f.push(item);
    }

    setFavorites(f);
    localStorage.setItem("favorites", JSON.stringify(f));
  }

  return (
    <div>
      <h3>Home {user ? ` - Welcome ${user.username}` : ""}</h3>

      {items.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}>
          <strong>{p.title}</strong>
          <p>{p.body.substring(0, 80)}...</p>

          <button onClick={() => onOpenDetail(p)}>Open</button>
          <button onClick={() => toggleFav(p)}>
            {favorites.find((i) => i.id === p.id) ? "Unfav" : "Fav"}
          </button>
        </div>
      ))}
    </div>
  );
}
