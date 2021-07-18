import React, { useState } from "react";
import dataList from "./dataList";
import MenuItems from "./MenuItems";
import Category from "./Category";

const allCategories = [
  "all",
  ...new Set(dataList.map((item) => item.category)),
];

function App() {
  const [dataMenu, setDataMenu] = useState(dataList);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setDataMenu(dataList);
      return;
    }

    const newItems = dataList.filter((item) => item.category === category);
    setDataMenu(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Category categories={categories} filterItems={filterItems} items={dataMenu} />
        <MenuItems items={dataMenu} />
      </section>
    </main>
  );
}

export default App;
