async function getItem(id) {
    const res = await fetch(`http://localhost:4000/items/${id}`, { cache: 'no-store' });
  
    if (!res.ok) {
      return null;
    }
  
    return res.json();
  }
  
  export default async function ItemPage({ params }) {
    const item = await getItem(params.id);
  
    if (!item) {
      return (
        <div>
          <a href="/collection">Back</a>
          <h2>No item found with ID: {params.id}</h2>
        </div>
      );
    }
  
    return (
      <div>
        <a href="/collection">Back</a>
        <h1>{item.item_name} Details</h1>
        <table>
          <tbody>
            <tr><td><strong>ID</strong></td><td>{item.id}</td></tr>
            <tr><td><strong>Name</strong></td><td>{item.item_name}</td></tr>
            <tr><td><strong>Category</strong></td><td>{item.category}</td></tr>
            <tr><td><strong>Quantity</strong></td><td>{item.quantity}</td></tr>
            <tr><td><strong>Price (CAD)</strong></td><td>{item.price}</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
  export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/items');
    const data = await res.json();
    const first10 = data.slice(0, 10);
  
    return first10.map(item => ({
      id: item.id
    }));
  }
  