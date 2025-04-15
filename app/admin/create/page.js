'use client';

import { useState } from 'react';

export default function CreateItem() {
  const [formData, setFormData] = useState({
    id: '',
    item_name: '',
    category: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:4000/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    window.location.href = '/admin';
  };

  return (
    <div>
      <h1>Create New Item</h1>
      <form onSubmit={handleSubmit}>
        <input name="id" placeholder="ID" onChange={handleChange} required /><br />
        <input name="item_name" placeholder="Item Name" onChange={handleChange} required /><br />
        <input name="category" placeholder="Category" onChange={handleChange} required /><br />
        <input name="quantity" type="number" placeholder="Quantity" onChange={handleChange} required /><br />
        <input name="price" type="number" step="0.01" placeholder="Price" onChange={handleChange} required /><br />
        <button type="submit">Submit</button>
      </form>
      <a href="/admin">Back to Admin</a>
    </div>
  );
}
