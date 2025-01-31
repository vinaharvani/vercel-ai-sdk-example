'use client';

import { experimental_useObject as useObject } from 'ai/react';
import { notificationSchema } from '../api/use-object/schema';

export default function UseObjectPage() {
  const { object, submit, isLoading, stop } = useObject({
    api: '/api/use-object',
    schema: notificationSchema,
  });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <h1>Use Object Example</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => submit('give last five updated news from praygraj.')}
        disabled={isLoading}
      >
        Generate notifications
      </button>

      {isLoading && (
        <div>
          <div>Loading...</div>
          <button 
            type="button" 
            onClick={() => stop()}
            className="px-4 py-2 bg-red-500 text-white rounded mt-2"
          >
            Stop
          </button>
        </div>
      )}

      {object?.notifications?.map((notification, index) => (
        <div key={index} className="mt-4">
          <p className="font-bold">{notification?.name}</p>
          <p>{notification?.message}</p>
        </div>
      ))}
    </div>
  );
}
