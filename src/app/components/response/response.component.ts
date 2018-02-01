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
responseForm: FormGroup;
items: any = [];
res: string;
param: string;

  constructor(private js: JsonService) { }

  ngOnInit() {
    this.createForm();
    this.js.getResponse().subscribe(res => {
      this.items = res;
      console.log(this.items);
    });
  }

  fireMe(event) {
    const _this = event.srcElement.value;
    this.items.filter(function(company, index) {
      if (_this === company.name) {
        this.items.push(company);
      }
    });
  }

  toggleCardBody(event) {
    const _this = event.srcElement.parentElement.parentElement.nextSibling.nextSibling;
    $(_this).toggle();
  }

  toggleContacts(event) {
    const _this = event.srcElement.nextSibling.nextSibling;
    $(_this).toggle();
  }

  createForm() {
    this.responseForm = new FormGroup({
      companyId: new FormControl(),
      companyName: new FormControl(),
      companyCity: new FormControl(),
      companyState: new FormControl()
    });
  }

  searchSubmit(event) {
    event.preventDefault();
    const payload = {
      companyId: this.responseForm.get('companyId').value,
      companyName: this.responseForm.get('companyName').value,
      companyCity: this.responseForm.get('companyCity').value,
      companyState: this.responseForm.get('companyState').value
    };
    console.log(payload);
    // for loop, map, filter
    // return new filtered API response
    // display it on the view
    this.responseForm.reset();
  }

}
