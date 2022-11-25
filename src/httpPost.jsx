import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function HttpPost(props) {
  const [id, setId] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const url = 'https://taajsonapi.herokuapp.com/';

  const { data: data, getData: getData } = props;

  const onSubmit = async (e) => {
    e.preventDefault();
    const post = {
      id: id,
      productName: productName,
      price: price,
      quantity: quantity,
    };

    try {
      const res = await axios.post(`${url}products`, post);
      console.log(res.data);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <div className='container mt-2'>
      <h2>Add Product</h2>
      <form onSubmit={onSubmit}>
        {/* ID */}
        <div className='mb-2 mt-3'>
          <input
            type='text'
            placeholder='ID'
            className='form-control'
            onChange={(event) => {
              setId(event.target.value);
            }}
            value={id}
          />
        </div>
        {/* Product Name */}
        <div className='mb-2 mt-3'>
          <input
            type='text'
            placeholder='Product Name'
            className='form-control'
            onChange={(event) => {
              setProductName(event.target.value);
            }}
            value={productName}
          />
        </div>
        {/* Price */}
        <div className='mb-2 mt-3'>
          <input
            type='text'
            placeholder='Price'
            className='form-control'
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            value={price}
          />
        </div>
        {/* Quantity */}
        <div className='mb-2 mt-3'>
          <input
            type='text'
            placeholder='Quantity'
            className='form-control'
            onChange={(event) => {
              setQuantity(event.target.value);
            }}
            value={quantity}
          />
        </div>

        <button type='submit' className='btn btn-danger'>
          Add Product
        </button>
      </form>
    </div>
  );
}
