'use client';

import { useState } from 'react';

export default function EditForm({ item }) {
  const [formData, setFormData] = useState(item);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = [];
    if (formData.item_name.length < 3 || formData.item_name.length > 25) {
      errs.push("Item name must be between 3 and 25 characters.");
    }
    if (parseInt(formData.quantity) < 1 || parseInt(formData.quantity) > 1000) {
      errs.push("Quantity must be between 1 and 1000.");
    }
    if (parseFloat(formData.price) <= 0.10 || parseFloat(formData.price) >= 1000) {
      errs.push("Price must be between 0.10 and 1000.");
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    await fetch(`http://localhost:4000/items/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    window.location.href = '/admin';
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <ul style={{ color: 'red' }}>
          {errors.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      )}
      <input name="item_name" value={formData.item_name} onChange={handleChange} placeholder="Item Name" /><br />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" /><br />
      <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} placeholder="Quantity" /><br />
      <input name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} placeholder="Price" /><br />
      <button type="submit">Save</button>
    </form>
  );
}
