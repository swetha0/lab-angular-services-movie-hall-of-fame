import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {
private data: any =[];
url = 'https://jsonplaceholder.typicode.com/photos?albumId=1';
  constructor(private http: HttpClient) { }
getImage(): Observable<any>{
  this.http.get(this.url).subscribe((res)=>{
    this.data = res;
  });
  return this.data;
}
}