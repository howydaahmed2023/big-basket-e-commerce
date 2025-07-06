import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private _route:Router){}


  navigatehome(){
    this._route.navigate(["./home"])
  }
  navigateshop(){
    this._route.navigate(["./shop"])
  }
  navigateblog(){
    this._route.navigate(["./blog"])
  }
  navigatecontact(){
    this._route.navigate(["./contact"])
  }
}
