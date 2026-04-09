function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const whereIs = pair.indexOf("=");
    if (whereIs === -1) {
      queryParams[pair] = "";
    } else {
      const key = pair.slice(0, whereIs);
      const value = pair.slice(whereIs + 1);
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
