import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'header-component',
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  envs = environment;
}
