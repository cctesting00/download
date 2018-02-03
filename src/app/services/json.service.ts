import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JsonService {

  constructor(private http: HttpClient) { }

  getResponse() {
    return this.http.get('assets/test.json');
  }

  addPost(company) {
    return this.http.post('http://devapp.telenotes.com/api/data/luiscoello', company);
  }

  deletePost(companyId) {
    return this.http.delete('http://devapp.telenotes.com/api/data/luiscoello' + companyId);
  }
}
