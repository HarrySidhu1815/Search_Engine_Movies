export function getAllGenres(data){
    const genreSet = new Set();
    
    data.forEach(item => {
        if (Array.isArray(item.genres)) {
            item.genres.forEach(genre => genreSet.add(genre));
        }
    });
    
    return Array.from(genreSet);
}   