import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss'],
})
export class AnimaisComponent implements OnInit {
  private urlOrginal = '';
  @Input() descricao = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOrginal = url;
    } else {
      this.urlOrginal = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.urlOrginal;
  }
  constructor() {}

  ngOnInit(): void {}
}
