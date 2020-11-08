import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service'


@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.scss']
})
export class ListDocumentComponent implements OnInit {

 // variables
  subjectList: any = [];
  documentList: any = [];

  id: string = "";
  message: string = "";


  sem: string = "1";
  subject_name : string = "Choose";
  subject_id: string = "";

  constructor(
    private router: Router,
    private service: ServiceService
  ) { }

  ngOnInit() {

    var branch_id = sessionStorage.getItem("branch_id");

    // get subject by branch_id and sem
    this.service.getSubjectBranchSem(branch_id, 1).subscribe(
      response => {
        console.log(response)
        this.subjectList = response["payload"];
      }
    );
  }

  // CHANGE SEMESTER

  changeSem(sem){
    this.sem = sem;
    this.subject_name = "Choose";
    this.subjectList = [];

    var branch_id = sessionStorage.getItem("branch_id");

    // get subject by branch_id and sem
    this.service.getSubjectBranchSem(branch_id, sem).subscribe(
      response => {
        this.subjectList = response["payload"];
      }
    );
  }

  // CHANGE SUBJECT
  changeSub(subject_id){
    this.subject_id = subject_id;
    for(var i=0;i<this.subjectList.length;i++){
      if(this.subjectList[i]["subject_id"] == subject_id)
        this.subject_name = this.subjectList[i]["subject_name"] ;
     }
  }

  // APPLYING ALL THE CHANGES SELECTED IN THE ABOVE FUCNTIONS
  apply(){
    // VALIDATING THE ABOVE DATA
    if(this.subject_name == "Choose"){
      this.message = "Subject required";
      return 0;
      }

      this.message = "";

    // get document by subject_id
    this.service.getDocumentsSubject(this.subject_id).subscribe(
      response => {
        this.documentList = response["payload"];
      }
    );
  }

  // SET ID
  setid(id){
    this.id = id;
  }
}
