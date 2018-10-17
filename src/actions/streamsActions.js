import * as types from "./actionTypes";
import config from '../firebase/firebase'

const admin = require("firebase-admin");

function url() {
  return "www.url.com";
}

export function receiveStreams(json) {
  return { type: types.RECEIVE_STREAMS, streams: json.streams };
}

export function fetchStuff() {
  admin.initializeApp({
    credential: admin.credential.cert(config),
    databaseURL: "https://twitch-project-c5024.firebaseio.com"
  });
  var db = admin.firestore();
  var docRef = db.collection("new-viewer-data");
  return dispatch => {
    return docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          return doc.json()
        } else {
          console.log("No such document!");
        }
      })
      .then((json)=>{
        dispatch(receiveStreams(json))
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    }
  }
