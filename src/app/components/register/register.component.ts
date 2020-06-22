import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';
import { Country } from 'src/app/classes/country/country';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  countries: Country[];

  control: FormControl;
  form: FormGroup;

  matcher


  selectedValue: String = '';

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.api.getCountry().then(countries => {
      this.countries = countries
    })
  }

  ngOnInit() {
    this.matcher = new MyErrorStateMatcher();
    // this.selectedValue = this.Countries[0]

    this.form = this.formBuilder.group({
      pseudo: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mail: ['', [Validators.required, Validators.email]],
      pays: ['', Validators.required],
      dateNaissance: ['', Validators.required]
    })
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.log(customerData)
    this.api.register(customerData).then(
      (value) => {
        console.log(value)
        this.router.navigate(["/verified"])
        this.form.reset();
      }
    ).catch(err => {
      console.log(err)
    })
  }
}