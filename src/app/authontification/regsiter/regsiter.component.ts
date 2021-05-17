import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.css']
})

export class RegsiterComponent implements OnInit {
  @Input() role :string;
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  
      console.log("le contenu est fffffffffffffffffff",this.authService.roleType);
   
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password,this.authService.roleType).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


}
