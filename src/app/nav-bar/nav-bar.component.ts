import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  roleParent?:string;

  constructor(private tokenStorageService: TokenStorageService,private authService: AuthService) { }

  
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }
  changeAdmin(){
    this.authService.roleType="";
    this.roleParent="admin";
    this.authService.roleType=this.roleParent;
   
}
changeUser(){
  this.authService.roleType="";
  this.roleParent="user";
  this.authService.roleType=this.roleParent;

}
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
