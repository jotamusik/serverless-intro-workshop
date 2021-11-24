
exports.handler = async (event) => {
  let queryParamName = "Peter";
  if (event.queryStringParameters != null && event.queryStringParameters.name != null) {
    queryParamName = event.queryStringParameters.name;
  }
  return {
    statusCode: 200,
    body: JSON.stringify(`Hola ${queryParamName}!`),
  };
};
