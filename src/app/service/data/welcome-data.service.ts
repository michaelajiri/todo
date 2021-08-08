import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
    // console.log("Execute Hello World Bean Service")
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/path-variable/${name}`);
    // console.log("Execute Hello World Bean Service")

    // let basicAuthHeaderString = this.createBasicAuthenticationBasicHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    // return this.http.get<HelloWorldBean>(`http://localhost:1010/hello-world-bean/path-variable/${name}`,
    //   { headers });
  }

  // createBasicAuthenticationBasicHeader() {
  //   let username = 'Michael89'
  //   let password = 'test123'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}