import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private loadingIndicator:Boolean;

  constructor(private router: Router) {

    this.router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.setLoadingIndicator(true);
      }

      if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
        this.setLoadingIndicator(false);
      }

    });
  }

  getLoadingIndicator()
  {
    return this.loadingIndicator;
  }

  setLoadingIndicator(value)
  {
    this.loadingIndicator=value;
  }
}
