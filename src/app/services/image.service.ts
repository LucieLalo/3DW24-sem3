import { Injectable } from '@angular/core';
import { Headers, Http, Response} from "@angular/http";
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: Http) {}

  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/add-recipe', formData);
  }
}
