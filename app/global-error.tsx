'use client';
 
import { useEffect } from 'react';
import { inter } from '@/app/ui/fonts';
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <html lang="en">
        <body className={`${inter.className} antialiased`}>
            <main className="flex h-full flex-col items-center justify-center">
                <h2 className="text-center">Something went wrong, catastrophic error!</h2>
                <button
                    className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                    onClick={
                    // Attempt to recover by trying to re-render the invoices route
                    () => reset()
                    }
                >
                    Try again
                </button>
            </main>
        </body>
    </html>
  );
}