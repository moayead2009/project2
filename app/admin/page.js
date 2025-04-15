'use client';

import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await fetch('http://localhost:4000/items');
    const data = await res.json();
    setItems(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/items/${id}`, { method: 'DELETE' });
    fetchItems(); // Refresh the list
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <a href="/admin/create">Create New</a>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>D</th>
            <th>E</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.item_name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>D</button>
              </td>
              <td>
                <a href={`/admin/edit/${item.id}`}>E</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
