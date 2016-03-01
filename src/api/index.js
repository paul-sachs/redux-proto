import Firebase from 'firebase';

const firebaseRef = new Firebase("https://zulu-influitive.firebaseio.com");

export function authWithGoogle() {
  return new Promise((resolve, reject) => {
    firebaseRef.authWithOAuthPopup('google', (error, authData) => {
      if (error) {
        reject(error);
      }
      else {
        resolve(authData);
      }
    });
  });
};
