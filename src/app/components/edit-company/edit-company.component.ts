import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
companyForm: FormGroup;
edit = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.edit.push(params);
      for (let i = 0; i < this.edit[0].Contacts.length; i++) {
        console.log(this.edit[0].Contacts[i]);
      }
    });
    console.log(this.edit);
    this.createCompanyForm();
    this.companyForm.setValue({
      accountId: this.edit[0].AccountId,
      companyId: this.edit[0].CompanyID,
      country: this.edit[0].Country,
      state: this.edit[0].State,
      city: this.edit[0].City,
      address: this.edit[0].StreetAddress,
      zipcode: this.edit[0].ZipCode,
      email: '',
      contactId: '',
      firstName: '',
      lastName: '',
      primaryPhone: '',
      contactState: '',
      contactCity: '',
      contactAddress: '',
      contactZipcode: ''
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

  editTheCompany(event) {
    event.preventDefault();
  }

  goBackPlease() {
    this.router.navigate(['/']);
  }





}
