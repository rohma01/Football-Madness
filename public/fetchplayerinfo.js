const axios = require('axios');
const cheerio = require('cheerio');

// Step 1: Make an HTTP request to the website
const url = 'https://fbref.com/en/players/da974c7b/matchlogs/2022-2023/c9/Match-Logs'; // Replace with the URL of the website you want to scrape

axios.get(url)
  .then((response) => {
    if (response.status === 200) {
      const html = response.data;

      // Use Cheerio to load the HTML content
      const $ = cheerio.load(html);

      // Step 2: Extract the goals from the relevant HTML element
      const goals = $('td[data-stat="goals"]').text().trim();

      console.log(`Goals: ${goals}`);
    } else {
      console.error(`HTTP GET request failed with status code ${response.status}`);
    }
  })
  .catch((error) => {
    console.error('Error fetching the web page:', error);
  });
