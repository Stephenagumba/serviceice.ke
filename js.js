document.addEventListener("DOMContentLoaded", () => {
    fetchTrendingMovies();
    fetchFootballNews();
});

// Fetch Trending Movies
async function fetchTrendingMovies() {
    const apiKey = "b3dc273db8021fe43a4060481db0d0cc";
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();

        const movieContainer = document.getElementById("movies");
        movieContainer.innerHTML = "";

        data.results.slice(0, 5).forEach(movie => {
            const div = document.createElement("div");
            div.classList.add("item");
            div.innerHTML = `
                <img src="${movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'placeholder.jpg'}" alt="${movie.title}">
                <p>${movie.title}</p>
            `;
            movieContainer.appendChild(div);
        });
    } catch (error) {
        console.error("Error fetching trending movies:", error);
    }
}



   
