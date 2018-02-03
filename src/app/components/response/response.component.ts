import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../services/json.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { componentFactoryName } from '@angular/compiler';

declare var $: any;

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
})
export class ResponseComponent implements OnInit {
companyForm: FormGroup;
responseForm: FormGroup;
items: any = [];
res: string;
param: string;
showForm = false;

  constructor(private js: JsonService) { }

  ngOnInit() {
    this.createCompanyForm();
    this.createForm();
    this.js.getResponse().subscribe(res => {
      this.items = res;
      console.log(this.items);
    });
  }

  // each item list toggle function hide show
  toggleCardBody(event) {
    const _this = event.srcElement.parentElement.parentElement.nextSibling.nextSibling;
    $(_this).toggle();
  }

  // each contact section toggle function hide show
  toggleContacts(event) {
    const _this = event.srcElement.nextSibling.nextSibling;
    $(_this).toggle();
  }

  // creating form for input search filter for companies names
  createForm() {
    this.responseForm = new FormGroup({
      companyId: new FormControl(),
      companyName: new FormControl(),
      companyCity: new FormControl(),
      companyState: new FormControl()
    });
  }

  // creating company form so that a user can add a new company
  createCompanyForm() {
    this.companyForm = new FormGroup({
      accountId: new FormControl(),
      companyId: new FormControl(),
      country: new FormControl(),
      state: new FormControl(),
      city: new FormControl(),
      address: new FormControl(),
      zipcode: new FormControl(),
      email: new FormControl(),
      contactId: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      primaryPhone: new FormControl(),
      contactState: new FormControl(),
      contactCity: new FormControl(),
      contactAddress: new FormControl(),
      contactZipcode: new FormControl()
    });
  }

  // getting input values and send post form
  addTheCompany(event) {
    event.preventDefault();
    const payload = {
      accountId: this.companyForm.get('accountId').value,
      companyId: this.companyForm.get('companyId').value,
      country: this.companyForm.get('country').value,
      state: this.companyForm.get('state').value,
      city: this.companyForm.get('city').value,
      address: this.companyForm.get('address').value,
      zipcode: this.companyForm.get('zipcode').value,
      contactId: this.companyForm.get('contactId').value,
      firstName: this.companyForm.get('firstName').value,
      lastName: this.companyForm.get('lastName').value,
      primaryPhone: this.companyForm.get('primaryPhone').value,
      contactState: this.companyForm.get('contactState').value,
      contactCity: this.companyForm.get('contactCity').value,
      contactAddress: this.companyForm.get('contactAddress').value,
      contactZipcode: this.companyForm.get('contactZipcode').value
    };
    // for loop, map, filter
    // return new filtered API response
    // display it on the view
    this.js.addPost(payload).subscribe(data => console.log(data));
    this.companyForm.reset();

  }

  // toggle show company form and hide input search form
  showCompanyForm() {
    this.showForm = true;
  }

  // toggle hide company form and show input search form
  hideCompanyForm() {
    this.showForm = false;
  }

  // get companyId and send http delete company
  deleteCompany(id) {
    window.location.reload();
  }

}
