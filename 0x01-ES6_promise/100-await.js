import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = {
    photo: null,
    user: null,
  };
  try {
    const responseFromUploadPhotoFunction = await uploadPhoto();
    const responseFromCreateUserFunction = await createUser();

    result.photo = responseFromUploadPhotoFunction;
    result.user = responseFromCreateUserFunction;
  } catch (e) {} /* eslint-disable-line no-empty */
  return result;
}
