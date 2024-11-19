import { moviesData } from './Movie_Data.movies';

export function getAllGenres(moviesData){
    const genreSet = new Set();
    
    data.forEach(item => {
        if (Array.isArray(item.genres)) {
            item.genres.forEach(genre => genreSet.add(genre));
        }
    });
    
    return Array.from(genreSet);
}   