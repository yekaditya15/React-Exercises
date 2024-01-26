// App.js

import "./App.css";
import { useState } from "react";

function App() {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];
  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();

    if (!query) {
      setFilterList(list);
      return;
    }

    const filteredValues = list.filter((item) =>
      item.toLowerCase().includes(query)
    );
    setFilterList(filteredValues);
  };

  return (
    <div className="app">
      <h1>FILTER SEARCH EXERCISE</h1>
      <div className="search-container">
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList.map((item, index) => (
        <div className="item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default App;
