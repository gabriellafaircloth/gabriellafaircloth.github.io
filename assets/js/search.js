<script>
  const options = {
    // Reference to the input field where users type their search query
    searchInput: document.getElementById('search-input'),

    // Reference to the container where search results will be displayed
    resultsContainer: document.getElementById('search-results'),

    // Path to the JSON file containing the searchable data
    json: '/assets/data/search.json', // Adjust this path if your JSON file is located elsewhere

    // Template for displaying each search result
    searchResultTemplate: function(result) {
      return `
        <div>
          <a href="${result.url}">
            <h2>${result.title}</h2>
            <p>${result.content.substring(0, 150)}...</p> <!-- Show a snippet of the content -->
          </a>
        </div>
      `;
    },

    // Text to display when no results are found
    noResultsText: "No results found.",

    // Callback function executed when the search is successful
    success: function() {
      console.log('Search successful');
    },

    // Callback function executed if there is an error during the search
    error: function(error) {
      console.error('Search error:', error);
    }
  };

  // Initialize Simple Jekyll Search with the defined options
  const search = new SimpleJekyllSearch(options);
</script>
