import Image from "next/image";

// Home Page
// All the pages are inside the different directories inside the app folder 
// For example: about directory will have page.js that is reponsible for showcasing the content when user will navigate to /about
// Similarly, home page i.e. this page is showed when / and /search-engine page.js when /search-engine in the URL

export default function Home() {
  return (
    <div className="h-376 flex justify-center items-center flex-col gap-4">
      <h1 className="text-4xl font-bold">Hello Movies Search Engine</h1>
      <p className="text-2xl">COMP-455 Project</p>
    </div>
  );
}
