import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from 'src/app/models/car';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = `${environment.baserUrl}${environment.port}/api`;

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('title', 'title');
    formData.append('image', file);

    const req = new HttpRequest(
      'POST',
      `${this.baseUrl}/photos/add`,
      formData,
      {
        reportProgress: true,
        responseType: 'json'
      }
    );

    return this.http.request(req);
  }

  getFiles(): Observable<CarImage[]> {
    return this.http.get<CarImage[]>(`${this.baseUrl}/`);
  }
}