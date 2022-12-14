import React, { useEffect } from 'react';
import './Products.css';

const Products = (props) => {
  const { data, getData, handleDelete } = props;

  useEffect(() => {
    getData();
  });

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
                <td>$ {item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => {
                      handleDelete(item, item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
