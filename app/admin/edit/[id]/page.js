import EditForm from './EditForm';

async function getItem(id) {
  const res = await fetch(`http://localhost:4000/items/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function EditItemPage({ params }) {
  const item = await getItem(params.id);

  if (!item) {
    return <div><a href="/admin">Back</a><h2>Item not found.</h2></div>;
  }

  return (
    <div>
      <h1>Edit Item</h1>
      <EditForm item={item} />
    </div>
  );
}
