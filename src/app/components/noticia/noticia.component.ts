import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() i: number;

  constructor( private iab: InAppBrowser ) { }

  ngOnInit() {}

  abrirNoticia() {

    console.log('Noticia',);
    const browser = this.iab.create(this.noticia.url, '_system');

  }

}
