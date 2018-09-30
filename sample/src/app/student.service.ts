import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseContentType } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: Http) { }
  sendDetails( userDetails ){
		return this.http.post( '/UserDetails', JSON.stringify({
      "userDetails": userDetails
      }) );
  }
  
  getDetails( userDetails ){
		return this.http.post( '/getUserDetails', JSON.stringify({
      "userDetails": userDetails
      }) );
	}

}
