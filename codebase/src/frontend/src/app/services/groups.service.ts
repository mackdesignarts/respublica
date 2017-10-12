import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GroupsService {

  constructor(private http: Http) { }

  public getAllGroups(){
    const path = "http://localhost:8090/api/groups"
    this.http.get(path).subscribe(
      data => console.log(JSON.stringify(data)),
      err => console.log("There was an error: " + err)
    )
  }

}
