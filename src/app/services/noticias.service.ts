import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headlinesPage = 0;

  categoriaActual = '';
  categoriaPage = 0;

  private ejecutarQuery<T>( query: string) {

    query = apiUrl + query;

    return this.http.get<T>( query, { headers } );

  }

  constructor( private http: HttpClient ) { }

  getTopHeadlines() {

    this.headlinesPage++;
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=ar&page=${ this.headlinesPage }`);

    // tslint:disable-next-line: max-line-length
    // return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=88a6780209b5472c9ce2bd5a89c96ece`);
  }

  getTopHeadlinesCategoria( categoria: string) {

    if ( this.categoriaActual === categoria) {
      this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }

    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=ar&category=${ categoria }&page=${ this.categoriaPage }`);

    // return this.http.get(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=88a6780209b5472c9ce2bd5a89c96ece`);
  }

}
