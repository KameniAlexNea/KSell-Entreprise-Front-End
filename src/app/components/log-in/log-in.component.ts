import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  private _username: string = "";
  private _password: string = "";

  customErrors = { required: 'Please accept the terms' }

  control: FormControl;
  form: FormGroup;

  constructor(private api: ApiService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.control = this.formBuilder.control('', Validators.required);

    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    if (this.form.valid) {
      this.username = customerData['username']
      this.password = customerData['password']
      this.api.login(this.username, this.password).then(
        () => {
          // console.log(value)
          this.form.reset();
        }
      ).catch(err => {
        console.log(err)
      })
    } else {
      console.log("Not valid form")
    }

  }

  /**
   * Getter username
   * @return {string }
   */
  public get username(): string {
    return this._username;
  }

  /**
   * Setter username
   * @param {string } value
   */
  public set username(value: string) {
    this._username = value;
  }

  /**
   * Getter password
   * @return {string  }
   */
  public get password(): string {
    return this._password;
  }

  /**
   * Setter password
   * @param {string  } value
   */
  public set password(value: string) {
    this._password = value;
  }



}
