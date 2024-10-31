import { connect } from '@/lib/mongodb';
import Movie from '@/models/movies';

export async function GET(request) {
  try {
    await connect(); // Ensure the database connection is established

    const movies = await Movie.find(); // Fetch movies from the database

    return new Response(JSON.stringify(movies), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching movies:', error);
    return new Response(JSON.stringify({ message: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
