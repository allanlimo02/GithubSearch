import { Component, OnInit } from '@angular/core';
import { Search } from '../search';
import { ServiceService } from '../servicepage/service.service';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  newSearch=new Search('')
  constructor() { }
  public searchUser(){
    return 
  }
  
  ngOnInit(): void {
    console.log('Greetings')
  }

}
