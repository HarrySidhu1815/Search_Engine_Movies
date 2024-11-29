import Image from "next/image";

// Home Page
// All the pages are inside the different directories inside the app folder 
// For example: about directory will have page.js that is reponsible for showcasing the content when user will navigate to /about
// Similarly, home page i.e. this page is showed when / and /search-engine page.js when /search-engine in the URL

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center p-5 h-376 flex flex-col items-center">
      {/* Hero Section */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">Movie Search Engine</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Discover your favorite movies instantly. Powered by cutting-edge search technology.
        </p>
      </header>

      {/* Featured Image */}
      <div className="mt-4">
        <Image
          src="/movie.webp"
          alt="Movies"
          width={200}
          height={200}
          className="rounded-lg"
          priority
        />
      </div>

      {/* Categories Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Popular Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["Action", "Drama", "Comedy", "Romance", "Horror", "Sci-Fi"].map((category, index) => (
            <div
              key={index}
              className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-400">
        © 2024 COMP-455 Project. All rights reserved.
      </footer>
    </div>
  );
}
