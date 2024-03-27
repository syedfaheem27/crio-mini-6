import { useState } from "react";

const TABLE_DATA = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [tableData, setTableData] = useState(TABLE_DATA);

  const sortByDate = () => {
    const newData = tableData.map((el) => {
      return { ...el };
    });

    newData.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

    setTableData(newData)
    
  };
  const sortByViews = () => {
    const newData = tableData.map((el) => {
      return { ...el };
    });

    newData.sort((a,b)=>b.views-a.views);
    setTableData(newData)
  };

  return (
    <>
      <header>
        <h1>Date and Views Table</h1>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, id) => {
              return (
                <tr key={id}>
                  <td>{data.date}</td>
                  <td>{data.views}</td>
                  <td>{data.article}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </>
  );
}

export default App;
