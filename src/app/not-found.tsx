import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4">
            <Image
                src="/images/not-found.png"
                alt="404 - Not Found"
                width={300}
                height={300}
                className="mb-8"
                priority
            />
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-gray-700 mb-8 text-center max-w-md">
                The page you are looking for doesn’t exist or has been moved.
            </p>
            <Link
                href="/"
                className="px-4 py-2 bg-yellow-800 hover:bg-yellow-700 text-white rounded">
                Go back home
            </Link>
        </main>
    );
}
