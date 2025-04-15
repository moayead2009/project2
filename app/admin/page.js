async function getItems() {
    const res = await fetch('http://localhost:4000/items', { cache: 'no-store' });
    return res.json();
  }
  
  export default async function AdminPage() {
    const items = await getItems();
  
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
                <td><a href={`/admin/delete/${item.id}`}>D</a></td>
                <td><a href={`/admin/edit/${item.id}`}>E</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  