/**
 *
 * @param {Promise} promise
 * @returns
 */
export default function handleResponseFromAPI(promise) {
  const resBody = {
    status: 200,
    body: 'success',
  };
  return promise
    .then(() => (resBody))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
