import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from 'src/app/tutorial/tutorial.value';

const baseUrl = 'http://localhost:8080/api/tutorial';

// 전역에서 사용하고자하는 경우 아래와 같이 설정
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class TutorialService {

  constructor(private http: HttpClient) {}

  getTutorialList(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  getTutorial(id: string): Observable<Tutorial> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  searchTutorial(keyword: string): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?keyword=${keyword}`);
  }

  createTutorial(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateTutorial(id: string, data: Tutorial): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteTutorial(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}
