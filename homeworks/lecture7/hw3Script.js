const { URLSearchParams } = require("url");

function parseQueryString(queryString) {
  const params = new URLSearchParams(queryString);
  const input = {};
  for (let [key, value] of params.entries()) {
    input[key] = value;
  }
  return input;
}

const queryString = window.location.search.substring(1);
//   console.log(queryString);
if (queryString) {
  const data = parseQueryString(queryString);
  const { title, content } = data;
  const records = document.getElementById("input-record");
  const curRecord = document.createElement("p");
  curRecord.textContent = `Title: ${title}, Content: ${content}`;
  records.appendChild(curRecord);
}
