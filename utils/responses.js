/**
 * This function returns a JSON response with a success message and a single item.
 * @param res - the response object
 * @param status - HTTP status code
 * @param msg - The message you want to send back to the client
 * @param item - the item you want to return
 * @returns A function that takes in a response, status, message, and item.
 */
const singleDTOResponse = (res, status, message, item) => {
  return res.status(status).json({
    success: true,
    message,
    item
  });
}

/**
 * It returns a JSON response with a success message and an array of items.
 * @param res - the response object
 * @param status - HTTP status code
 * @param msg - The message you want to send back to the client
 * @param items - the array of items you want to return
 * @returns A function that takes in a response object, a status code, a message, and an array of
 * items.
 */
const multipleDTOsResponse = (res, status, message, items) => {
  return res.status(status).json({
    success: true,
    message,
    items
  });
}

/**
 * It returns a response object with a status code and a message.
 * @param res - The response object
 * @param status - The HTTP status code you want to return.
 * @param msg - The message you want to send back to the user
 * @returns A function that takes in a response object, a status code, and a message.
 */
const successDTOResponse = (res, status, message) => {
  return res.status(status).json({
    success: true,
    message
  });
}

/**
 * If the response is not successful, return a JSON object with a success property of false and a
 * message property of the error message.
 * @param res - The response object
 * @param status - The HTTP error status code
 * @param msg - The message you want to send to the user
 * @returns A function that takes in a response object, a status code, and a message.
 */
const errorDTOResponse = (res, status, message) => {
  return res.status(status).json({
    success: false,
    message
  });
}

export default { singleDTOResponse, multipleDTOsResponse, successDTOResponse, errorDTOResponse };