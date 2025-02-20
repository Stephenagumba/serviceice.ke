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
// Your API key from API-Football
const apiKey = "3cd701bd0d80235d722ccec15ec15538"; // Replace this with your actual API key

// API endpoint for fetching live fixtures
const apiUrl = "https://v3.football.api-sports.io/fixtures?live=all";

// Function to fetch and display football fixtures
async function fetchFootballFixtures() {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "x-apisports-key": apiKey,
                "Accept": "application/json"
            }
        });

        const data = await response.json();
        console.log("API Response:", data); // Debugging log

        // Check if request was successful
        if (!data.response || data.response.length === 0) {
            console.error("No live matches found.");
            return;
        }

        // Select the container to display fixtures
        const fixturesContainer = document.getElementById("fixturesContainer");
        fixturesContainer.innerHTML = ""; // Clear previous results

        // Loop through fixtures and display them
        data.response.forEach(match => {
            const fixture = match.fixture;
            const teams = match.teams;
            const goals = match.goals;

            // Create a div for each match
            const matchDiv = document.createElement("div");
            matchDiv.classList.add("match-item");
            matchDiv.innerHTML = `
                <h3>${teams.home.name} vs ${teams.away.name}</h3>
                <p>${fixture.status.long} - ${fixture.date}</p>
                <p>Score: ${goals.home !== null ? goals.home : "N/A"} - ${goals.away !== null ? goals.away : "N/A"}</p>
            `;

            fixturesContainer.appendChild(matchDiv);
        });
    } catch (error) {
        console.error("Error fetching football fixtures:", error);
    }
}

// Call the function to fetch data when the page loads
document.addEventListener("DOMContentLoaded", fetchFootballFixtures);

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
