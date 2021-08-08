import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from 'src/app/board/board.value';
import { Page } from 'src/app/common/value/common.value';

//TODO
const baseUrl = 'http://localhost:8080/api/tutorial';
// const baseUrl = 'http://freestrokes-backend.herokuapp.com/api/tutorial';

// 전역에서 사용하고자하는 경우 아래와 같이 설정
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class BoardService {

  constructor(private http: HttpClient) {}

  // Retrieve all board items
  public getBoardList(keyword: string, page: Page): Observable<any> {
    //TODO
    // return this.http.get<Tutorial[]>(`${baseUrl}?keyword=${keyword}`);
    return this.http.get<Board[]>(`${baseUrl}?keyword=${keyword}&page=${page.currentPage-1}&size=${page.itemsPerPage}`);
  }

  // Retrieve board item by id
  public getBoard(id: string): Observable<Board> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  // Search board items by keyword
  public searchBoard(keyword: string): Observable<Board[]> {
    return this.http.get<Board[]>(`${baseUrl}?keyword=${keyword}`);
  }

  // Create board item
  public createBoard(data: Board): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  // Update board item by id
  public updateBoard(id: string, data: Board): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  // Delete board item by id
  public deleteBoard(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // Delete all board items
  public deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}
