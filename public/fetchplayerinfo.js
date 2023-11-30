
/* 

const https = require('https');
const url = 'https://www.whoscored.com/Regions/252/Tournaments/2/Seasons/9075/Stages/20934/PlayerStatistics/England-Premier-League-2022-2023'; // Ensure this is the correct URL

https.get(url, (res) => {
  console.log('Status Code:', res.statusCode); // Log the status code

  let html = '';
  
  res.on('data', (chunk) => {
    html += chunk;
  });

  res.on('end', () => {
    console.log('HTML Content Received');
    console.log(html); // This will output the HTML content
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

const https = require('https');


const https = require('https');


const options = {
  hostname: 'www.fbref.com',
  path: '/en/comps/9/2022-2023/stats/2022-2023-Premier-League-Stats', // The specific path you're trying to access
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
  }
};

https.get(options, (res) => {
  console.log('Status Code:', res.statusCode); // Log the status code

  let html = '';
  
  res.on('data', (chunk) => {
    html += chunk;
  });

  res.on('end', () => {
    console.log('HTML Content Received');
    console.log(html); // This will output the HTML content
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});



const https = require('https');

const options = {
  hostname: 'www.fbref.com',
  path: '/en/comps/9/2022-2023/stats/2022-2023-Premier-League-Stats',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
  }
};

const getRequest = (options, callback) => {
  https.get(options, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      console.log('Redirected to:', res.headers.location);
      const newUrl = new URL(res.headers.location);
      const newOptions = {
        hostname: newUrl.hostname,
        path: newUrl.pathname + newUrl.search,
        headers: options.headers
      };
      getRequest(newOptions, callback); // Recursively handle redirects
    } else {
      let html = '';
    
      res.on('data', (chunk) => {
        html += chunk;
      });

      res.on('end', () => {
        callback(html); // Call the callback function with the HTML content
      });
    }
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
};

getRequest(options, (html) => {
  console.log('HTML Content Received');
  console.log(html);
});



const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://fbref.com/en/players/79300479/matchlogs/2022-2023/Martin-Odegaard-Match-Logs'; // Replace with the URL of the website you want to scrape

axios.get(url)
  .then((response) => {
    if (response.status === 200) {
      const html = response.data;

      // Use Cheerio to load the HTML content
      const $ = cheerio.load(html);

      // Now you can use Cheerio selectors to extract data from the HTML
      // For example, let's extract all the text within <h1> elements:
      const headings = [];
      $('h1').each((index, element) => {
        headings.push($(element).text());
      });

      console.log(headings);
    } else {
      console.error(`HTTP GET request failed with status code ${response.status}`);
    }
  })
  .catch((error) => {
    console.error('Error fetching the web page:', error);
  });

  


  
  const axios = require('axios');
  const cheerio = require('cheerio');
  
  const url = 'https://fbref.com/en/players/79300479/matchlogs/2022-2023/Martin-Odegaard-Match-Logs'; // Replace with the URL of the website you want to scrape
  
  axios.get(url)
    .then((response) => {
      if (response.status === 200) {
        const html = response.data;

        console.log(html)
  
        // Use Cheerio to load the HTML content
        const $ = cheerio.load(html);
  
        // Example: Extract data from an element with ID "Goals"
        const goalsData = $('#Goals').text().trim();
  
        console.log(goalsData); // Log the data once it's extracted
      } else {
        console.error(`HTTP GET request failed with status code ${response.status}`);
      }
    })
    .catch((error) => {
      console.error('Error fetching the web page:', error);
    });
  
  */

const axios = require('axios');
const cheerio = require('cheerio');

// Step 1: Make an HTTP request to the website
const url = 'https://fbref.com/en/players/b400bde0/matchlogs/2022-2023/c9/Match-Logs'; // Replace with the URL of the website you want to scrape

axios.get(url)
  .then((response) => {
    if (response.status === 200) {
      const html = response.data;

      // Use Cheerio to load the HTML content
      const $ = cheerio.load(html);

      // Step 2: Extract the goals from the relevant HTML element
      const goals = $('td[data-stat="goals"]').text().trim();

      console.log(`Goals: ${goals.length}`);
    } else {
      console.error(`HTTP GET request failed with status code ${response.status}`);
    }
  })
  .catch((error) => {
    console.error('Error fetching the web page:', error);
  });
