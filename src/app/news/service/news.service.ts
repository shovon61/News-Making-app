import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

const APP_API_URL = `${environment.localApiUrl}`;

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}
  getNews(): Observable<any> {
    return this.http.get<any>(`${APP_API_URL}/news`);
  }
  addNewsFn(payLoad: any): Observable<any> {
    return this.http.post(`${APP_API_URL}/news`, payLoad);
  }
  getNewsById(param: any) {
    return this.http.get(`${APP_API_URL}/news/${param}`);
  }
  updateNewsFn(NewsId: any, payLoad: any): Observable<any> {
    return this.http.patch(`${APP_API_URL}/news/${NewsId}`, payLoad);
  }
  deleteNewsFn(newsId: any, payload: any): Observable<any> {
    return this.http.delete(`${APP_API_URL}/news/${newsId}`, payload);
  }
}
