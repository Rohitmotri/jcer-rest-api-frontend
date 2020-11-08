import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  BranchList: any =[];

  constructor(
    private router: Router,
    private service : ServiceService
  ) { }

  ngOnInit() {
    this.service.getBranch().subscribe(
      response =>{
        this.BranchList = response['payload'];
        
      }
    );
  }

  // Storing branch_id in the session storage//
  changeBranch(id){
    sessionStorage.setItem("branch_id", id);
  }

}
