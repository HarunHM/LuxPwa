import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about_content:string;
  harun_mbaabu:string;
 

  constructor() { 

    this. about_content = `
   Lux Tech Academy is a free online training BootCamp Developed by 
   two Software Engineers and tech enthusiast Harun Mbaabu Mwenda(GrayHat)
   and Emma Wilison Kawira (Sallie) with a major focus in  Training software development,
   modern web application developmment and data science. You can also hire 
   our team of software developers or download our free available
   and ready to use softwares and code snippets. It is free  edit to fit your
   need and use for production. Our Training mode involves self paced 
   learning or instructor lead training which  after completing you will 
   be required to solve 100 questions and submit 3 real time capstone
   projects. 
   Certification will be offered to anyone who scores 80% and 2/3 of the capstone projects 
   work @ a fee of 1000ksh.
    `;
    this.harun_mbaabu=`Am a Python and JavaScript developer, with more than 4 years full stack web development experience using ReactJS,NodeJs, Flask, Django, GraphQl, Cascading style sheets(CSS) and Html Bootstarp. I also have been involved in many design thinking panels, i have worked with Toptal and Gitlab as a remote engineer in the past, i believe in small code for optmal tasks.`;
  }
  ngOnInit(): void {
  }

}
