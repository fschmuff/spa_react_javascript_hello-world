import { useEffect, useState } from 'react';

export default function ProtectedMessage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedMessage = async () => {
      const res = await fetch('/api/protected'); // Your API route here
      const data = await res.json();
      setMessage(data.text);
    };

    fetchProtectedMessage();
  }, []);

  return (
    <div className="p-4 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-2">Protected Page</h1>
      <p className="mb-6">This page retrieves a protected message from an external API.</p>
      <p className="mb-4 font-semibold">Only authenticated users can access this page.</p>
      <div className="bg-gray-800 text-green-400 p-4 rounded font-mono">
        <pre>{JSON.stringify({ text: message }, null, 2)}</pre>
      </div>
    </div>
  );
}
