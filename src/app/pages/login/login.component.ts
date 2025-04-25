import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { FormBuilder, FormGroup } from '@angular/forms';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  LogForm: FormGroup;
  constructor(form: FormBuilder) {
    this.LogForm = form.group({
      email: [''],
      password:['']
   })
 }
  onSbmit() {
    let email = this.LogForm.get('email')?.value;
    let password = this.LogForm.get('password')?.value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      })


 }
ngOnInit(): void {
const firebaseConfig = {
  apiKey: "AIzaSyArevqIGp4LfdUkN83MktaSxyOm6JEywys",
  authDomain: "firstproject-411cc.firebaseapp.com",
  projectId: "firstproject-411cc",
  storageBucket: "firstproject-411cc.firebasestorage.app",
  messagingSenderId: "999522261017",
  appId: "1:999522261017:web:d4d402ef81212fcba9f288"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);

}


}
