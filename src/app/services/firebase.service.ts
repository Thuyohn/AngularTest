import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { IngeniaChatUser } from '../models/IngeniaChatUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  currentUser : IngeniaChatUser = undefined;
  isLogin : boolean;
  constructor(
    private database: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  async createAccount(user: IngeniaChatUser): Promise<void> {
    try {
      this.database.collection('user').doc(user.id).set(JSON.parse(JSON.stringify(user)));
    } catch (error) {
      throw error;
    }
  }

  async signInWithEmailAndPassword(user: IngeniaChatUser, password: string) : Promise<boolean>{
    try {
      var userCredentials = await this.auth.createUserWithEmailAndPassword(user.email,password);

      if(userCredentials.user){
        user.id = userCredentials.user.uid;
        await this.createAccount(user);
        return true;
      }
      else{
        return false;
      }
    } catch (error) {
      throw error
    }
  }

  async signIn(email : string, password : string) {
    try {
      var userCredentials = await this.auth.signInWithEmailAndPassword(email,password);
      this.getUserInformation(userCredentials.user.uid).subscribe(value => {
        this.currentUser = value.data();
        this.currentUser.id = value.id;
      });

      if(userCredentials)
      {
        this.isLogin = true;
        return true;
      }
      else{
        this.isLogin = false;
        return false;
      }
    } catch (error) {
      throw error
    }
  }

  getUserInformation(userId : string) :Observable<any>{
    try {
      return this.database.collection<IngeniaChatUser>('user').doc(userId).get();
    } catch (error) {
      throw error
    }
  }
}
