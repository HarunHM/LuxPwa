import { Component, OnInit,Inject, Injectable } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email:any='luxtechacademy@gmail.com';
  phone:any='0798166628';
  logo:string  = 'Lux Tech';


  constructor() { }

  //building the login modals
      signup(){


    
       }

  ngOnInit(): void {
  }

}
