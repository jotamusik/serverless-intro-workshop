"use strict";

module.exports.hello = async (event) => {
  let queryParamName = "Peter";

  if (event.queryStringParameters != null && event.queryStringParameters.name != null) {
    queryParamName = event.queryStringParameters.name;
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: `Hello ${queryParamName}!` }, null, 2),
  };
};
