import { Component,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from  '@angular/material/dialog';
import { MatIconModule} from  '@angular/material/icon';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  hide = true;
  public  email:  string  =  "";
  public  password:  string  =  "";

  constructor(private  dialog:  MatDialog) { }

  login(){
    }
  
  
  ngOnInit(){
  }

}
