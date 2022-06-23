import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorizationService } from 'app/services/authorization.service';
import Validation from '../../../utils/validation';
import { User } from 'app/interface/user';
import { login } from 'app/interface/login';
import { logged_user } from 'app/interface/logged_user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})
export class LoginregisterComponent  {
  formLogin:FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthorizationService, private router:Router) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      name: [
        '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
      ],
      password: [
        '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
      ]
    });
    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid)
      return;
    this.auth.register(new User((this.form.get("name") as AbstractControl).value, (this.form.get("email") as AbstractControl).value, (this.form.get("password") as AbstractControl).value, "ROLE_USER")).subscribe().add(()=>{this.autocomplete()});
  }

  autocomplete():void
  {
    (this.formLogin.get("name") as AbstractControl).setValue((this.form.get("name") as AbstractControl).value);
    (this.formLogin.get("password") as AbstractControl).setValue((this.form.get("password") as AbstractControl).value);
  }
  
  onLogin():void
  {
    this.auth.login(new login((this.formLogin.get("name") as AbstractControl).value, (this.formLogin.get("password") as AbstractControl).value)).subscribe((logged_User) => this.auth.user_info = (logged_User as logged_user)).add(()=>{this.router.navigate([''])});
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}