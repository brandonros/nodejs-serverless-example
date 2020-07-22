const fetch = require('node-fetch')

const getStockPrice = async (ticker) => {
  const response = await fetch(`https://www.optionsprofitcalculator.com/ajax/getOptions?stock=${ticker}&reqId=1`)
  const responseBody = await response.json()
  return responseBody.price.last
}

module.exports.handle = async (event) => {
  try {
    const { ticker } = typeof event.body === 'string' ? JSON.parse(event.body) : event.body
    return {
      statusCode: 200,
      body: await getStockPrice(ticker)
    }
  } catch (err) {
    console.error({
      message: err.message,
      stack: err.stack,
      event
    })
    return {
      statusCode: 500,
      body: 'Internal error'
    }
  }
}
