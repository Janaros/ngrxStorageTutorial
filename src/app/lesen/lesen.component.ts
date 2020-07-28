import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-lesen',
  templateUrl: './lesen.component.html',
  styleUrls: ['./lesen.component.css']
})
export class LesenComponent implements OnInit {

  
  tutorials: Observable<Tutorial[]>;

  
  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {}

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }
}
