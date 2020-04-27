import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  email:any='luxtechacademy@gmail.com';
  phone:any='0798166628';
  logo:string  = 'Lux Tech';

  constructor() { }

  ngOnInit(): void {
  }

}
