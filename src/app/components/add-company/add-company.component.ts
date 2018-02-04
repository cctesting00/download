import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonService } from '../../services/json.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
companyForm: FormGroup;

  constructor(private router: Router, private js: JsonService) { }

  ngOnInit() {
    this.createCompanyForm();
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
      this.js.addPost(payload).subscribe(data => console.log(data));
      this.companyForm.reset();
    }

  goBackPlease() {
    this.router.navigate(['/']);
  }
}
