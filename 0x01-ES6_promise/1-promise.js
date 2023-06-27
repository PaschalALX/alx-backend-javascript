export default function getResponseFromAPI(success) {
  const resBody = {
    status: 200,
    body: 'Success',
  };
  const error = new Error('The fake API is not working currently');
  return success ? Promise.resolve(resBody) : Promise.reject(error);
}
