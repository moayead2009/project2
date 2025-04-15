'use client';

import { useState, useEffect } from 'react';

export default function AdminPage() {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const res = await fetch('http://localhost:4000/items', { cache: 'no-store' });
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
            <div className="table-container">
                <div className="table-header">
                    <div>ID</div>
                    <div>Name</div>
                    <div>Category</div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div>Actions</div>
                </div>

                {items.map(item => (
                    <div className="table-row" key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.item_name}</div>
                        <div>{item.category}</div>
                        <div>{item.quantity}</div>
                        <div>{item.price}</div>
                        <div className="actions">
                            <button onClick={() => handleDelete(item.id)}>D</button>
                            <a href={`/admin/edit/${item.id}`} className="edit-button">E</a>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
