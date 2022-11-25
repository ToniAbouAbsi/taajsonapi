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

  return (
    <React.Fragment>
      <Products data={data} getData={getData} />
      <HttpPost data={data} getData={getData} />
    </React.Fragment>
  );
}

export default App;
