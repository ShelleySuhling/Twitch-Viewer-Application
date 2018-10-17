// import firebase from "firebase";
// var config = {
//   apiKey: "AIzaSyBQLdu33tHDbRavR_SrlGajjafoajT381Y",
//   authDomain: "twitch-project-2.firebaseapp.com",
//   databaseURL: "https://twitch-project-2.firebaseio.com",
//   projectId: "twitch-project-2",
//   storageBucket: "twitch-project-2.appspot.com",
//   messagingSenderId: "1027517745569"
// };
// var fire = firebase.initializeApp(config);
// export default fire;


export var getStreams = () => {
    return fetch("https://firestore.googleapis.com/v1beta1/projects/twitch-project-2/databases/(default)/documents/new-viewer-data")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            return data.documents
        })
}
