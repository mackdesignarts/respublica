import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  public search(obj){
    const path = "http://localhost:8090/api/search"
    this.http.post(path, obj).subscribe(
      data => console.log(JSON.stringify(data)),
      err => console.log("There was an error: " + err)
    )
  }

}
