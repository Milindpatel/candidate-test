import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class RugService {
  private apiUrl = 'http://localhost:3001/api/';
  showAddRugBox: boolean = true;
  constructor(private http: Http) { }
  getRugs(): Promise<any> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError)
  }
  getRug(id: string): Promise<any> {
    return this.http.get(this.apiUrl + id)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError)
  }
  createRug(rug: any): Promise<any> {
    return this.http.post(this.apiUrl, rug)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError)
  }
  updateRug(rug: any): Promise<any> {
    return this.http
      .put(this.apiUrl, rug)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleData);
  }
  deleteRug(rug: any): Promise<any> {
    return this.http
      .delete(this.apiUrl + rug._id)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }
  private handleData(res: any) {
    let body = res.json();
    console.log(body); // for development purposes only
    return body || {};
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for development purposes only
    return Promise.reject(error.message || error);
  }
}