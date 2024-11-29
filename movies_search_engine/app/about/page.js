import React from "react";

// This is About Page which is simple static HTML page with Tailwind CSS
export default function About() {
  return (
    <div className="about-page p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        About Movie Finder
      </h1>

      <p className="text-xl text-slate-200  text-center mb-8 w-3/4 mx-auto">
        Welcome to <strong>Movie Finder</strong> – your ultimate destination for
        discovering movies and TV shows tailored to your taste. With Movie
        Finder, you can easily browse and explore movies from a vast collection,
        using advanced filters to find exactly what you are looking for.
      </p>

      <section className="bg-slate-100 p-8 rounded-xl shadow-lg mb-8 w-3/4 mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-black">
          Our mission is to create an accessible and intuitive platform where
          users can explore the world of cinema effortlessly. Whether you are
          searching for the latest blockbusters, timeless classics, or hidden
          gems across genres, Movie Finder is here to enhance your
          movie-watching experience.
        </p>
      </section>

      <section className="bg-slate-100 p-8 rounded-xl shadow-lg mb-8 w-3/4 mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>Advanced Search:</strong> Easily search for movies based on
            title, genre, release year, and IMDb rating.
          </li>
          <li>
            <strong>Personalized Recommendations:</strong> Discover new movies
            tailored to your interests and viewing history.
          </li>
          <li>
            <strong>Filter by Genres:</strong> Filter through a wide range of
            genres to find the perfect movie or show for your mood.
          </li>
          <li>
            <strong>Top-rated Picks:</strong> Find the top-rated movies and
            trending selections curated just for you.
          </li>
          <li>
            <strong>User Reviews and Ratings:</strong> Access community reviews
            and IMDb ratings to make informed choices.
          </li>
        </ul>
      </section>

      <section className="bg-slate-100 p-8 rounded-xl shadow-lg mb-8 w-3/4 mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <p className="text-lg mb-4 text-black">
          At Movie Finder, we believe in delivering a seamless, enjoyable
          browsing experience. We’re committed to:
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>User Satisfaction:</strong> Ensuring a reliable and smooth
            user experience.
          </li>
          <li>
            <strong>Transparency:</strong> Providing accurate information and
            unbiased recommendations.
          </li>
          <li>
            <strong>Innovation:</strong> Continuously improving our platform
            with new features and technologies.
          </li>
        </ul>
      </section>

      <p className="text-lg text-center mb-8 w-3/4 mx-auto text-slate-200">
        Thank you for choosing Movie Finder. We’re excited to be part of your
        journey to discover amazing movies and TV shows. Enjoy exploring and
        happy viewing!
      </p>
    </div>
  );
}
