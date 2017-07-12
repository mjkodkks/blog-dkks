import React, {Component} from 'react';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAhZvtBbTsICXBq_ASd4Cb4rr_f0--Jmzk",
  authDomain: "blogdkks.firebaseapp.com",
  databaseURL: "https://blogdkks.firebaseio.com",
  projectId: "blogdkks",
  storageBucket: "blogdkks.appspot.com",
  messagingSenderId: "626999461675"
};

firebase.initializeApp(config);

export default function saveOnClick() {
  var name=document.getElementById('name');
  var name=document.getElementById('surname');
  var name=document.getElementById('email');

  insertData(name.value,surname.value,email.value);
}

window.onload=function(){
  var firebaseRef=firebase.database().ref('subscribeUser');
  firebaseRef.once('value').then(function(DataSnapshot){
    console.log(DataSnapshot.val());
  });
}

export function insertData(name,surname,email){
    var firebaseRef=firebase.database().ref("subscribeUser");
    firebaseRef.push({
      name:name,
      surname:surname,
      email:email
    });
    console.log("Insert Success");
}
