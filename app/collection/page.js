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
            <div className="collection-list">
                {items.map(item => (
                    <div className="collection-item" key={item.id}>
                        <span><strong>{item.id}</strong> — {item.item_name}</span>
                        <a href={`/collection/${item.id}`}>More</a>
                    </div>
                ))}
            </div>
        </div>

    );
}
