const axios = require("axios");

const baseUrl = "http://localhost:4000/api";

const axiosSinToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === "GET") {
    return axios.get(url);
  } else {
    return axios({
      method,
      url,
      headers: {
        "Content-type": "application/json",
      },
      data: JSON.stringify(data),
    });
  }
};

export {
  axiosSinToken
}