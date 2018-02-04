import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../services/json.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { componentFactoryName } from '@angular/compiler';
import { Router } from '@angular/router';

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
showForm = false;

  constructor(private js: JsonService, private router: Router) { }

  ngOnInit() {
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
    const del = {
      CompanyID: id
    };
    this.js.deletePost(del);
    window.location.reload();
  }

  // add company
  addCompanyPlease() {
    this.router.navigate(['add']);
  }

}
