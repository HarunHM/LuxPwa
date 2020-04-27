import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  learn: string;
  contact: string;
  hire:string; 
  About:string;
  core_values: string;
  cores:any =[
    "Honesty, Transperancy and integrity.",
    "Exellence diversity and team work.",
    "Accountability, Effectiveness and respect for human right."
  ]
  Programming:string =` Computer programming is the process of designing and building an executable computer programs for accomplishing a specific computing tasks.
  There are 5 basic programming elements, thesse are operations,  inputs, outputs, arithmetic conditional and looping and very program uses at least two of these.`;

  Datascience:string= `Data Science or data driven science is a must have IT professional. It Involves extracting knowledge and information from data. You translate business problem into a research project and then traslate the result back into practical solution which requires a deep understanding of business domain and creativity.
  `;

  Progressive:string =`A brief  defination of progressive web app would be a web app using progressive enhancement. Google—who originated and popularized the concept—defines
   a PWA as such: "A Progressive Web App uses modern web capabilities to deliver an app-like user experience.". Enroll and learn  More about these apps in Depth `;

  constructor() {

    this.learn  = `You can enroll any programming and technology course for free, We offer  beginner  to advanced courses`;                                            
     

    this.contact = `For any query and clarification you can contact us 24/7. Our help desk is always active and willing to assist.`; 
    

    this.hire = `We offer the best and affordable software development and  system maintance, Hire us today.`;
   
    this.About = `Lux Tech Academy is a free online training BootCamp which has crash and advance coding classes. 
                  Our courses are designed and organized by experienced team of DEvelopers and Engineers. You can also hire our team of
                  software developers or download our free, available and ready to use softwares and code sippets and edit to fit your
                  need and use for production. Join Lux Tech academy, Join a World class Software Engineering Team.`;
    
    this.core_values = `In pursuing of our vision and mission, we are  guided by the following
                                                core values; `;
   }


  ngOnInit(): void {
  }

}
