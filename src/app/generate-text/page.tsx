'use client';

import { useState } from 'react';

export default function GenerateTextPage() {
  const [generation, setGeneration] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <h1>Generate Text Example</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={async () => {
          setIsLoading(true);
          await fetch('/api/generate', {
            method: 'POST',
            body: JSON.stringify({
              prompt: 'Why is the sky blue?',
            }),
          }).then(response => {
            response.json().then(json => {
              setGeneration(json.text);
              setIsLoading(false);
            });
          });
        }}
      >
        Generate
      </button>
      {isLoading ? 'Loading...' : generation}
    </div>
  );
} 