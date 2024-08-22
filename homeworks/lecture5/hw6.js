/**
 * Write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {Promise<any[]>} - a promise that resolves to an array of responses
 */
function sequencePromise(urls) {
  const results = [];

  // Start with a resolved promise to chain on the sequence
  let promise = Promise.resolve();

  // Chain each fetch operation in sequence
  urls.forEach(url => {
    promise = promise
      .then(() => getJSON(url)) // Fetch the current URL
      .then(response => results.push(response)); // Store the result
  });

  return promise.then(() => results);
}

// option 1: getJSON implementation (using Node.js https module)
const https = require('https');

function getJSON(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'request'
      }
    };
    
    https.get(url, options, (response) => {
      if (response.statusCode !== 200) {
        reject(
          new Error(`Did not get an OK from the server. Code: ${response.statusCode}`)
        );
        response.resume();
        return;
      }

      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (e) {
          reject(new Error(`Error parsing JSON: ${e.message}`));
        }
      });
    }).on('error', (err) => {
      reject(new Error(`Encountered an error trying to make a request: ${err.message}`));
    });
  });
}

// Test your code
const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];

sequencePromise(urls)
  .then(results => {
    console.log(results); // This should log an array of responses from the URLs
  })
  .catch(err => console.error(err));
