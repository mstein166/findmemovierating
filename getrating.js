document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form from submitting normally
        const movieTitle = document.getElementById('example').value;
        fetchMovieData(movieTitle);
    });
});

async function fetchMovieData(movieTitle) {
    const apiKey = '4ba3fbcf0973176da613e5a3c67ecdc2'; // Replace with your TMDB API key
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieTitle)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const voteAvg = data.results[0].vote_average; // Get the year from the release date
        displayRating(voteAvg);
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}

function displayRating(rating) {
    const output = document.createElement('div');
    if (rating) {
        output.textContent = `Raing: ${rating}`;
    } else {
        output.textContent = 'Movie not found or no rrating available.';
    }
    document.body.appendChild(output);
}
