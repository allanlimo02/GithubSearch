import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../servicepage/service.service';
import { Search } from '../search';
import { MainFormComponent } from '../main-form/main-form.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  

  constructor() {}
  findUser(){
    
  }

  ngOnInit(): void {
  }

}
