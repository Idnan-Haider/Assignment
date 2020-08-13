import { Component } from '@angular/core';
import { menu, NavLinkItem } from '../shared/modal/navigation';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public header = '';
  public menu: NavLinkItem[] = menu;

  constructor() { }


  public navigationClicked(selectedNavigation: string) {
    this.header = selectedNavigation;
  }
}
