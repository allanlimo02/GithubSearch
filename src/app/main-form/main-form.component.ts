import { Component, OnInit } from '@angular/core';
import { Search } from '../search';
import { ServiceService } from '../servicepage/service.service';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  uname:any;
  user:any;
  repos:any;

  //newSearch=new Search('','','');
 getUsername(){
    this.serviceservice.getUser(this.uname).subscribe(profile=>{
      console.log(profile);
      return this.user = profile;
    });
  }
  getRepository(){
    this.serviceservice.getRepos(this.uname).subscribe(data=>{
      console.log(data)
      return this.repos = data;
    });
  } 


  constructor(private serviceservice:ServiceService) { }
  
  ngOnInit(): void {
    
  }

}
