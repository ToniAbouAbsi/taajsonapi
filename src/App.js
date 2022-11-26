import React, { useState } from 'react';
import HttpPost from './httpPost';
import Products from './Products';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);

  const url = 'https://taajsonapi.herokuapp.com/';

  const getData = () => {
    axios
      .get(`${url}products`)
      .then((response) => {
        const allProducts = response.data;
        setData(allProducts);
      })
      .catch((error) => console.error(`Error${error}`));
  };

  const handleDelete = (item, id) => {
    axios.delete(`${url}products/` + item.id).then(() => {
      let aux = data;
      aux.forEach((item, index) => {
        if (item.id === id) {
          aux.splice(index, 1);
          return;
        }
      });
      setData(aux);
    });
  };

  return (
    <React.Fragment>
      <Products data={data} getData={getData} handleDelete={handleDelete} />
      <HttpPost data={data} getData={getData} />
    </React.Fragment>
  );
}

export default App;
