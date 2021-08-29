import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  @Input() githubRepos!:any[]; 
  constructor() { }

  ngOnInit(): void {
  }

}
