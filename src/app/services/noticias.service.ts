import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getTopHeadLines() {
    return this.http.get(`
    https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=88a6780209b5472c9ce2bd5a89c96ece`)
  }

}
