import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  welcome = 'blogAngular';
 
constructor() {
  // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBN9lfUcd-TQ42j76ee6pKV6hSjfxSpEX0",
  authDomain: "finalopenclassroom.firebaseapp.com",
  databaseURL: "https://finalopenclassroom.firebaseio.com",
  projectId: "finalopenclassroom",
  storageBucket: "finalopenclassroom.appspot.com",
  messagingSenderId: "423379160821",
  appId: "1:423379160821:web:7d79f3e465588eec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
}

}