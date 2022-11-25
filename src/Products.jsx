import React, { useEffect, useState } from 'react';
import './Products.css';

const Products = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('  http://localhost:8000/products', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
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
