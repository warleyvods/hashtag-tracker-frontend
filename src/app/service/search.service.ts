import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment as env} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  findHashtagsLocation(search: string): Observable<any> {
    return this.httpClient.get<any>(env.baseApiUrl + 'hashtag', { params: new HttpParams().set('search', search)});
  }

  findAllHashtagsSearched(): Observable<any> {
    return this.httpClient.get<any>(env.baseApiUrl + 'findAllHashtags');
  }


}
