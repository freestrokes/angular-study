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

  // Retrieve all tutorials
  public getTutorialList(keyword: string): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?keyword=${keyword}`);
  }

  // Retrieve tutorial by id
  public getTutorial(id: string): Observable<Tutorial> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  // Search tutorial by keyword
  public searchTutorial(keyword: string): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?keyword=${keyword}`);
  }

  // Create tutorial
  public createTutorial(data: Tutorial): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  // Update tutorial by id
  public updateTutorial(id: string, data: Tutorial): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // Delete tutorial by id
  public deleteTutorial(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  public deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}
