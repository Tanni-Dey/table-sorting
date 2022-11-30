import logo from './logo.svg';
import './App.css';
import TableComponent from './components/TableComponent/TableComponent';
import { useEffect, useState } from 'react';

function App() {
  const [tabledata, settabledata] = useState([]);
  const [sorting, setSorting] = useState({ key: "name", ascending: true });
  const [n, setn] = useState(tabledata);
  let newdata
  useEffect(() => {
    fetch('tabledata.json')
      .then(res => res.json())
      .then(data => settabledata(data))
  }, [newdata])

  const sortByName = () => {
    const sortData = tabledata.sort((a, b) => a.person["name"].localeCompare(b.person["name"]))
    // setn();
    newdata = [...sortData]
    settabledata(sorting.ascending ? newdata : newdata.reverse());
    setSorting({ ascending: !sorting.ascending });
    // console.log(tabledata);
    // console.log(sorting.ascending);
  }
  const sortByJoin = (property) => {
    const sortData = tabledata.sort((a, b) => a[property].localeCompare(b[property]))
    // setn();
    newdata = [...sortData]
    settabledata(sorting.ascending ? newdata : newdata.reverse());
    setSorting({ ascending: !sorting.ascending });
  }
  const sortByRole = () => { }
  const sortByCity = () => { }
  return (
    <div className="App">
      <TableComponent data={tabledata} tableConfig={sortByName} />
      <TableComponent data={tabledata} tableConfig={sortByJoin} />
      <TableComponent data={tabledata} />
    </div>
  );
}

export default App;
