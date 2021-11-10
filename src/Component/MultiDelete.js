import { useState } from "react";

const ItemsArray = [
  { id: 0, Title: "apple", checked: false },
  { id: 1, Title: "orange", checked: false },
  { id: 2, Title: "banana", checked: false },
  { id: 3, Title: "mango", checked: false },
];

export default function App() {
  const [items, setItems] = useState(ItemsArray);

  const CheckAction = (f_id, checked) => {
    console.log(f_id, checked);
    const modifiedItems = items.map((item) => {
      if (item.id === f_id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setItems(modifiedItems);
  };

  const DeleteAction = () => {
    const filteredItems = items.filter((item) => item.checked === false);
    setItems(filteredItems);
    console.log(filteredItems);
  };

  return (
    <div
      className="DeleteTest"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {items.map((item) => {
        return (
          <div
            className="ItemBg"
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 120,
              height: 70,
              backgroundColor: "#fff",
              border: "1px solid red",
              color: "red",
              fontSize: 24,
              zIndex: 100,
            }}
          >
            {item.Title}
            <input
              onChange={() => CheckAction(item.id, item.checked)}
              type="checkbox"
              checked={item.checked}
            />
          </div>
        );
      })}
      <button onClick={DeleteAction}>Delete</button>
    </div>
  );
}
