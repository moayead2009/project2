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
        <a href="/collection" className="link-button">Back</a>
        <h1>{item.item_name} Details</h1>
        <div className="table-container">
          <div className="table-row">
            <div><strong>ID</strong></div>
            <div>{item.id}</div>
          </div>
          <div className="table-row">
            <div><strong>Name</strong></div>
            <div>{item.item_name}</div>
          </div>
          <div className="table-row">
            <div><strong>Category</strong></div>
            <div>{item.category}</div>
          </div>
          <div className="table-row">
            <div><strong>Quantity</strong></div>
            <div>{item.quantity}</div>
          </div>
          <div className="table-row">
            <div><strong>Price (CAD)</strong></div>
            <div>{item.price}</div>
          </div>
        </div>
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
  