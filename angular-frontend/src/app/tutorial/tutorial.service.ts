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

  public getTutorialList(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  public getTutorial(id: string): Observable<Tutorial> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  public searchTutorial(keyword: string): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?keyword=${keyword}`);
  }

  public createTutorial(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  public updateTutorial(id: string, data: Tutorial): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  public deleteTutorial(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  public deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}
