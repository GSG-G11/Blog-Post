const fetchData = (url, httpMethod, data) => fetch(url, {
  method: httpMethod,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then((data) => data.json());
