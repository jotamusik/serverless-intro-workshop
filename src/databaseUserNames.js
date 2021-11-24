const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event) => {
  return new Promise(((resolve, reject) => {
    if (event.queryStringParameters == null || event.queryStringParameters.username == null) {
      return resolve({
        statusCode: 400,
        body: JSON.stringify({ message: "bad request: username query param needed" }),
      });
    }

    const params = {
      Item: {
        id: Math.floor(Math.random() * 101).toString(),
        username: event.queryStringParameters.username,
      },
      TableName: "users",
      ReturnValues: 'NONE',
    };

    dynamodb.put(params).promise().then(() => {
      resolve({
        statusCode: 201,
        body: JSON.stringify({ message: "user created" }),
      });
    }).catch(reject);
  }));
};
