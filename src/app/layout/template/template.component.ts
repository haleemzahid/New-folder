import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Event, NavigationError, NavigationStart, Router, RouterEvent, ActivatedRoute, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  topBarShow: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {


      if (event instanceof RoutesRecognized) {
        this.topBarShow = event.state.root.firstChild?.data['showTopBar'];
      }
  });
  }

  ngOnInit(): void {
  }

}
