import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RestApiService } from 'src/app/services/restAPI-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    name : ['', Validators.required],
    phoneNumber : ['', Validators.required],
    password : ['', Validators.required]
  })

  constructor(
    private restAPI : RestApiService,
    private router : Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  addUser() {
    this.restAPI.createEmployee(this.signupForm.value).subscribe((data: {}) => {
      this.router.navigate(['/account']);
    })
  }

}
