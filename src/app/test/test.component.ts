import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  profileForm: FormGroup;

  bar1: any;
  bar2: any;
  password: any;

  

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Username: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  // onPasswordStrengthChanged(strength: any) {
  //   console.log('====================================');
  //   console.log('onPasswordStrengthChanged', strength);
  //   console.log('====================================');
  // }

  ngOnInit(): void {
    this.password = 'hiihsdfd';
  }

  onSubmit() {
    console.log();
  }
  // onStrengthChanged(strength: any) {
  //   console.log('password strength = ', strength);
  // }
}
