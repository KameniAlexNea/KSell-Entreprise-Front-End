import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-verify-register',
  templateUrl: './verify-register.component.html',
  styleUrls: ['./verify-register.component.css']
})
export class VerifyRegisterComponent implements OnInit {
  form: FormGroup
  control: FormControl
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  constructor(private formBuilder: FormBuilder, private api: ApiService) {

  }

  ngOnInit() {

    this.control = this.formBuilder.control('', Validators.required)
    this.form = this.formBuilder.group({
      token: ['', Validators.required]
    })
  }

  onSubmit(customData) {
    console.log(customData)
    this.api.verified(customData)
      .then(value => {
        console.log(value)
      }, err => console.log(err))
      .catch(err => console.log(err))
  }

}
