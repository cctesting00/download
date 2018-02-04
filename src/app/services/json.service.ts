import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class JsonService {
options;

  createHeaders() {
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    });
  }

  constructor(private http: HttpClient) { }

  getResponse() {
    return this.http.get('assets/test.json');
  }

  addPost(company) {
    this.createHeaders();
    return this.http.post('http://devapp.telenotes.com/api/data/luiscoello', company, this.options);
  }

  deletePost(companyId) {
    this.createHeaders();
    return this.http.delete('http://devapp.telenotes.com/api/data/luiscoello/' + companyId, this.options);
  }
}
