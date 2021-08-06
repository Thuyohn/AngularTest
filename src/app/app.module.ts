import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { Listen1Component } from './test/listen1/listen1.component';
import { Listen2Component } from './test/listen2/listen2.component';
import { FirebaseService } from './services/firebase.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
const firebaseConfig = {
  apiKey: "AIzaSyAkwMoOkzXE1NfIOP0wtOKbU7cnTb5p_UU",
  authDomain: "ingeniachat.firebaseapp.com",
  projectId: "ingeniachat",
  storageBucket: "ingeniachat.appspot.com",
  messagingSenderId: "864160081917",
  appId: "1:864160081917:web:6bfc54d57d882805ac5b94",
  measurementId: "G-X979X0D30K"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    CreateAccountComponent,
    Listen1Component,
    Listen2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    FirebaseService,
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
