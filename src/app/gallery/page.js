import Link from "next/link";

export default function Gallery() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p>Here we will list all images.</p>
      <Link href="/" className="text-blue-600">Back to Home</Link>
    </div>
  );
}
