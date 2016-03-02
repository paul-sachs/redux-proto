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
  return createSourceFromFirebase(contactsRef, 'value');
}

export function addContact(name) {
  contactsRef.child(name).set({
    name: name
  });
}
export function getAuth() {
  return firebaseRef.getAuth();
}

export function createThread(username) {
  const threadsRef = firebaseRef.child('threads');
  var newThreadRef = threadsRef.push();
  newThreadRef.child('participants')
    .child(username)
    .set(true);
}

export function createMessageInThread(message, threadId, author) {
  debugger;
  const newMessageRef = firebaseRef.child('threads')
    .child(threadId)
    .child('messages')
    .push();
  newMessageRef.set({
    createdAt: Firebase.ServerValue.TIMESTAMP,
    text: message,
    from: author
  })
}


export function watchThreads(callback) {
  const threads = firebaseRef.child('threads');
  return createSourceFromFirebase(threads, 'value');
}


function createSourceFromFirebase(ref, event) {
  let deferred

  ref.on(event, (snapshot) => {
    if(deferred) {
      deferred.resolve(snapshot.val())
      deferred = null 
    }
  });

  return {
    nextMessage() {
      if(!deferred) {
        deferred = {}
        deferred.promise = 
          new Promise(resolve => deferred.resolve = resolve)
      }
      return deferred.promise
    }
  }
}
