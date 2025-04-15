async function getItem(id) {
    const res = await fetch(`http://localhost:4000/items/${id}`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error("Item not found");
    }
    return res.json();
  }
  
  export default async function ItemPage({ params }) {
    const item = await getItem(params.id);
  
    return (
      <div>
        <a href="/collection">Back</a>
        <h1>{item.item_name} Details</h1>
        <table>
          <tbody>
            <tr>
              <td><strong>ID</strong></td>
              <td>{item.id}</td>
            </tr>
            <tr>
              <td><strong>Name</strong></td>
              <td>{item.item_name}</td>
            </tr>
            <tr>
              <td><strong>Category</strong></td>
              <td>{item.category}</td>
            </tr>
            <tr>
              <td><strong>Quantity</strong></td>
              <td>{item.quantity}</td>
            </tr>
            <tr>
              <td><strong>Price (CAD)</strong></td>
              <td>{item.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  