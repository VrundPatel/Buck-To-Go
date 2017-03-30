import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  queue: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.queue = af.database.list('/queue');
    console.log(this.queue);
  }

  ngOnInit() {
  }

}
