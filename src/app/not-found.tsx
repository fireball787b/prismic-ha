// app/not-found.tsx
export default function NotFoundPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <img
                src='/images/not-found.png'
                alt="404 - Not Found"
                className="mb-8 max-w-xs"
            />
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-gray-700 mb-8">
                The page you are looking for doesn’t exist or has been moved.
            </p>
            <a
                href="/"
                className="px-4 py-2 bg-yellow-800 hover:bg-yellow-700 text-white rounded"
            >
                Go back home
            </a>
        </main>
    );
}
