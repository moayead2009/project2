export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h1>Welcome to Grocery Inventory</h1>
      <a href="/collection">Go to Collection</a>
      <a href="/admin">Go to Admin Panel</a>
    </div>
  );
}
