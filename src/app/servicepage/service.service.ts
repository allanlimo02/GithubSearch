import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private HttpClient:HttpClient) { }

  public getProfile(uname: any){
    let profileUrl=`https://api.github.com/users/${uname}?apiKey=${environment.githubApi}`;

  }

}
