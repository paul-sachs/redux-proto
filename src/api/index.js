import Firebase from 'firebase';

const firebaseRef = new Firebase('https://zulu-influitive.firebaseio.com');
const contactsRef = firebaseRef.child('contact');

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
}

export function watchContacts(callback) {
  contactsRef.on('value', (snapshot, prevChildKey) => {
    var contacts = snapshot.val();
    callback(contacts);
  });
}

export function addContact(name) {
  contactsRef.child(name).set({
    name: name
  });
}
export function getAuth() {
  return firebaseRef.getAuth();
}
