const nodeFetch = require('node-fetch');

exports.handler = async event => {
  const formId = process.env.CONVERTKIT_FORM_ID
  const url = `${process.env.CONVERTKIT_API_URL}/forms/${formId}/subscribe`
  const { email } = JSON.parse(event.body)

  try {
    await nodeFetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: process.env.CONVERTKIT_API_KEY,
        email
      })
    }).then(res => res.json())
      .catch(error => {
        throw new Error(error)
      })
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Account created' })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message)
    }
  }
};
