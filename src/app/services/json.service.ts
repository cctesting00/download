import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JsonService {

  constructor(private http: HttpClient) { }

  getResponse() {
    return this.http.get('assets/test.json');
  }
}
