const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const usersTableName = process.env.USERS_TABLE || "";

module.exports.createUser = async (event) => {
  return new Promise(((resolve, reject) => {
    if (event.queryStringParameters == null || event.queryStringParameters.username == null) {
      return resolve({
        statusCode: 400,
        body: JSON.stringify({ message: "bad request: username query param needed" }, null, 2),
      });
    }

    const params = {
      Item: {
        id: Math.floor(Math.random() * 101).toString(),
        username: event.queryStringParameters.username,
      },
      TableName: usersTableName,
      ReturnValues: 'NONE',
    };

    dynamodb.put(params).promise().then(() => {
      resolve({
        statusCode: 201,
        body: JSON.stringify({ message: "user created" }, null, 2),
      });
    }).catch(reject);
  }));
};
