async function getItems() {
    const res = await fetch('http://localhost:4000/items', { cache: 'no-store' });
    const data = await res.json();
    return data;
  }
  
  export default async function CollectionPage() {
    const items = await getItems();
  
    return (
      <div>
        <h1>Grocery Items Collection</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.id} - {item.item_name} 
              <a href={`/collection/${item.id}`}> More </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  