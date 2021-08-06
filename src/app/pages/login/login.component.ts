import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('email') email : ElementRef;
  @ViewChild('password') password : ElementRef;

  constructor(
    private router : Router,
    private firebaseService : FirebaseService
  ) { }

  ngOnInit(): void {
  }

  goToCreateAccount() : void {
    this.router.navigate(['/createdAccount'])
  }

  async login() : Promise<void> {
    var result = await this.firebaseService.signIn(this.email.nativeElement.value, this.password.nativeElement.value);
    if(result)
      this.router.navigate(['/home'])
  }
}
