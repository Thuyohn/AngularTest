import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IngeniaChatUser } from 'src/app/models/IngeniaChatUser';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  @ViewChild('firstName') firstName : ElementRef;
  @ViewChild('lastName') lastName : ElementRef;
  @ViewChild('email') email : ElementRef;
  @ViewChild('password') password : ElementRef;



  constructor(
    private firebaseService : FirebaseService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  async submit() : Promise<void> {
    try {
      if(this.validate()) {
        var user = new IngeniaChatUser();
        user.firstName = this.firstName.nativeElement.value;
        user.lastName = this.lastName.nativeElement.value;
        user.email = this.email.nativeElement.value;
        await this.firebaseService.signInWithEmailAndPassword(user, this.password.nativeElement.value);
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.log(error);
    }

  }

  validate() : boolean {
    var isValid = true;
    if(this.firstName.nativeElement.value === "")
      isValid = false

    if(this.lastName.nativeElement.value === "")
      isValid = false

    if(this.email.nativeElement.value === "")
      isValid = false

    if(this.password.nativeElement.value === "")
      isValid = false

    return isValid;
  }
}
