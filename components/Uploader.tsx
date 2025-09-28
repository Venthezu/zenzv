'use client';
import { useState } from 'react';

export default function Uploader() {
  const [link, setLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    const res = await fetch('/api/upload', { method: 'POST', body: formData });
    const data = await res.json();
    setLink(data.url);
    setLoading(false);
  }

  return (
    <div className="bg-white/10 p-6 rounded-2xl text-center backdrop-blur-md">
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleUpload}
        className="mb-4"
      />
      {loading && <p>Uploading...</p>}
      {link && (
        <p>
          File URL:{" "}
          <a href={link} className="underline text-blue-300" target="_blank">{link}</a>
        </p>
      )}
    </div>
  );
}
