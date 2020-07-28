import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'; 
import { AppState } from './../app.state'; 
import { Tutorial } from './../models/tutorial.model' 
import * as TutorialActions from './../actions/tutorial.actions'; 
import { Observable } from 'rxjs'; 
@Component({
  selector: 'app-schreiben',
  templateUrl: './schreiben.component.html',
  styleUrls: ['./schreiben.component.css']
})
export class SchreibenComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTutorial(name, url) { 
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) ) 
  } 

}
