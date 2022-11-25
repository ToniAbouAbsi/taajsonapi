import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';

const Products = () => {
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

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='App'>
      <table>
        <thead>
          <tr>
            <th>
              <h2>ID</h2>
            </th>
            <th>
              <h2>Product Name</h2>
            </th>
            <th>
              <h2>Price</h2>
            </th>
            <th>
              <h2>Quantity</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>#{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
