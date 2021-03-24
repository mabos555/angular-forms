import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup;
  person = {
    firstname: 'Coder',
    age: 25,
    lastname: 'Byte',
    twitter: '@coderbyte'
  };
  personProps = [];

  get firstname(): FormControl {
    return this.form.get('firstname') as FormControl;
  }

  get age(): FormControl {
    return this.form.get('age') as FormControl;
  }

  get lastname(): FormControl {
    return this.form.get('lastname') as FormControl;
  }

  get twitter(): FormControl {
    return this.form.get('twitter') as FormControl;
  }

  ngOnInit(): void {
    const formDataObj = {};
    for (const prop of Object.keys(this.person)) {
      formDataObj[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formDataObj);

    console.log("personProps:", this.personProps);
    console.log("form:", this.form);
  }
}
