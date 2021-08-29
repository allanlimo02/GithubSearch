import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MainFormComponent } from '../main-form/main-form.component';
import { Search } from '../search';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  uname!:string;
  

  getUser(uname:any){
    return this.Http.get("https://api.github.com/users/"+ uname +"?access_token=" + environment.githubApi)
    .pipe(((response: any) => response));
  }
  getRepos(repoName:any){
    return this.Http.get("https://api.github.com/users/"+ repoName +"+/repos?access_token=" + environment.githubApi)
    .pipe(((response: any) => response));

  }

  constructor(private Http:HttpClient) { }

  public getProfile(uname: any){
    let profileUrl=`${environment.githbUrl}+${uname}?apiKey=${environment.githubApi}`;
    let repoUrl=`${environment.githbUrl}+${uname}+/repos/?apiKey=${environment.githubApi}`;

  }
}
