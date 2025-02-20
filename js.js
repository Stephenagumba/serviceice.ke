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

async function fetchFootballNews() {
    const apiKey = "77ab396bf082405e84043649d6911466";  
    const url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("API Response:", data); // Debugging

        if (data.status !== "ok") {
            console.error("API Error:", data);
            return;
        }

        const newsContainer = document.getElementById("football");
        newsContainer.innerHTML = "";

        data.articles.slice(0, 5).forEach(news => {
            const div = document.createElement("div");
            div.classList.add("news-item");
            div.innerHTML = `
                <h3>${news.title}</h3>
                <p>${news.description || "No description available."}</p>
                <a href="${news.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(div);
        });

    } catch (error) {
        console.error("Error fetching football news:", error);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const marketContainer = document.getElementById("market");
    const apiKey = "DZPKCFQ5I3TBGKNL"; // Replace with your actual API key
    const url = `https://www.alphavantage.co/query?function=GLOBAL_MARKET_OVERVIEW&apikey=${apiKey}`;

    async function fetchMarketTrends() {
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data && data.globalMarketOverview) {
                displayMarketTrends(data.globalMarketOverview);
            } else {
                marketContainer.innerHTML = "<p>Market data not available.</p>";
            }
        } catch (error) {
            console.error("Error fetching market trends:", error);
            marketContainer.innerHTML = "<p>Failed to load market trends.</p>";
        }
    }

    function displayMarketTrends(marketData) {
        marketContainer.innerHTML = ""; // Clear previous content

        const markets = [
            { name: "Dow Jones", value: marketData["Dow Jones Industrial Average"] },
            { name: "NASDAQ", value: marketData["NASDAQ Composite"] },
            { name: "S&P 500", value: marketData["S&P 500"] },
            { name: "Nikkei 225", value: marketData["Nikkei 225"] },
            { name: "FTSE 100", value: marketData["FTSE 100"] }
        ];

        markets.forEach(market => {
            if (market.value) {
                const marketItem = document.createElement("div");
                marketItem.classList.add("market-item");
                marketItem.innerHTML = `<strong>${market.name}:</strong> ${market.value}`;
                marketContainer.appendChild(marketItem);
            }
        });
    }

    fetchMarketTrends();
});