import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  Contries: any = ['Cameroon', 'Nigeria', 'Gabon'];

  control: FormControl;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.control = this.formBuilder.control('', Validators.required);
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
    if (this.form.valid) {
      this.api.register(customerData).then(
        (value) => {
          console.log(value)
          this.form.reset();
        }
      ).catch(err => {
        console.log(err)
      })
    } else {
      console.log("Not valid form")
    }

  }
}