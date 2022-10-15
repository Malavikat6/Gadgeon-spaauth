import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { __values } from 'tslib';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm! :FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient, private route:Router) { 
    
  }

  ngOnInit(): void {
    this.signinForm=this.formbuilder.group(
      {
       
        email:[''],
        password:['']
      }
    )
  }
  signin()
  {
    this.http.get<any>('http://localhost:3000/users').subscribe(res=>{ const user=res.find((a:any)=>{
      return a.email===this.signinForm.value.email && a.password===this.signinForm.value.password
    })
    if(user){
      alert("user exists")
      this.signinForm.reset;
    }
    // alert("Successfully logged in!")
    })
  }

}
