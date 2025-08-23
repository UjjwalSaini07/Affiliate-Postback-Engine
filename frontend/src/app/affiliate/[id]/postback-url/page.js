// app/affiliate/[id]/postback-url/page.js
export default function PostbackUrlPage({ params }) {
  const { id } = params;

  const url = `https://affiliate-system.com/postback?affiliate_id=${id}&click_id={click_id}&amount={amount}&currency={currency}`;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Affiliate {id} Postback URL</h1>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <code>{url}</code>
      </div>

      <div className="mt-4">
        <p className="mb-1">Example (local test):</p>
        <code>http://localhost:4000/postback?affiliate_id={id}&click_id=abc123&amount=100&currency=USD</code>
      </div>
    </div>
  );
}
