import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Employe } from '../models/employe';
import { global } from './global';

@Injectable()

export class EmployeService {
    public url: string;

    constructor(
        private http: HttpClient
    ) {
        this.url = global.url;
    }
    testService() {
      return 'Service Test From Project';
    }

    saveEmploye(employe: Employe) {
        const params = JSON.stringify(employe);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post(this.url + 'save-employe', params, {headers});

    }
  }
