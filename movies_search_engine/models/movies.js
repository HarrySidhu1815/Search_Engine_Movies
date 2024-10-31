// models/Movie.js
import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true, // Automatically generates ObjectId for _id
  },
  url: {
    type: String,
    required: true, // URL is required
  },
  title: {
    type: String,
    required: true, // Title is required
  },
  type: {
    type: String,
    required: true, // Type is required (e.g., "movie" or "series")
  },
  genres: {
    type: String,
    required: true, // Genres are required (could be an array too)
  },
  releaseYear: {
    type: Number,
    required: true, // Release year is required
  },
  imdbId: {
    type: String,
    required: true, // IMDb ID is required
  },
  imdbAverageRating: {
    type: Number,
    required: true, // IMDb average rating is required
  },
  imdbNumVotes: {
    type: Number,
    required: true, // IMDb number of votes is required
  },
  availableCountries: {
    type: String,
    required: true, // Available countries are required
  },
}, { timestamps: true }); // Automatically add createdAt and updatedAt timestamps

const Movie = mongoose.models.Movie || mongoose.model('Movie', MovieSchema);
export default Movie;
