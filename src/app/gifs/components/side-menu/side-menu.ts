import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { OptionsComponent } from "./options/options.component";

@Component({
  selector: 'side-menu',
  imports: [HeaderComponent, OptionsComponent],
  templateUrl: './side-menu.html'
})
export class SideMenu { }
