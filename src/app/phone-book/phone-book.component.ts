import { Component, OnInit } from '@angular/core';
import { Contact } from './contact'
@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {

  defaultContact: Contact;
  contacts: Array<Contact> = [];

  constructor() {
    this.defaultContact = new Contact('Coder', 'Byte', '8885559999');
  }

  onSubmit(value: any) {
    console.log("the value is:", value);
    this.contacts.push(value);
    console.log("the array contains:", this.contacts);
  }

  ngOnInit(): void {
  }

}
