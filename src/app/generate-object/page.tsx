'use client';

import { useState } from 'react';

export default function GenerateObjectPage() {
  const [generation, setGeneration] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <h1>Generate Object Example</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={async () => {
          setIsLoading(true);
          await fetch('/api/generateobject', {
            method: 'POST',
            body: JSON.stringify({
              prompt: 'Messages during finals week.',
            }),
          }).then(response => {
            response.json().then(json => {
              setGeneration(json.notifications);
              setIsLoading(false);
            });
          });
        }}
      >
        Generate
      </button>
      {isLoading ? 'Loading...' : <pre>{JSON.stringify(generation)}</pre>}
    </div>
  );
}
