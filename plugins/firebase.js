import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if  (!firebase.apps.length) {
   const config = {
      apiKey: "AIzaSyCTm_dafHc8w3zNCNaehey9JgVxp40iBMI",
      authDomain: "slackcloneapp-initial.firebaseapp.com",
      projectId: "slackcloneapp-initial",
      storageBucket: "slackcloneapp-initial.appspot.com",
      messagingSenderId: "228367313662",
      appId: "1:228367313662:web:b3a136aeaaf0fc6a4913af",
      measurementId: "G-LX9X7EH09F"
   }
   firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}