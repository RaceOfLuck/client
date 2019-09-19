import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

console.log()
firebase.initializeApp({
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID
});
  
export default firebase
