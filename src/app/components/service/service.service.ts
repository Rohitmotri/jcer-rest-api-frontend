import { Injectable } from '@angular/core';
import { Response } from '../model/Response'
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private httpClient:HttpClient) { }

  getBranch(): Observable<Response>{
    const url = "http://localhost:8000/branch/get/branches/";

    var body = {
      "branches": []
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  // // SUBJECT

  // get all subject
  getSubjects(): Observable<Response>{
    const url = "http://localhost:8000/subject/get/subjects/";

    var body = {
      "subjects": []
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }


  // get subjects according to branch
  getSubjectBranch(branch_id): Observable<Response>{
    const url = "http://localhost:8000/subject/getBid/subjects/";

    var body = {
      "subjects": [branch_id]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  // get subject according to branch and sem
  getSubjectBranchSem(branch_id, sem): Observable<Response>{
    const url = "http://localhost:8000/subject/getSem/subjects/";

    var body = {
      "subjects": [
        {
          "branch_id": branch_id,
          "sem": sem
        }
    ]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  // DOCUMENT 

  // get all document
  getDocuments(): Observable<Response>{
    const url = "http://localhost:8000/document/get/document/";

    var body = {
      "document": []
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }

  // get document by subject_id
  getDocumentsSubject(id): Observable<Response>{
    const url = "http://localhost:8000/document/getSid/document/";

    var body = {
      "document": [id]
    }
    
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post<Response>(url, body, httpOptions);
  }
}
