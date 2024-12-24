import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-list-switcher',
  templateUrl: './grid-list-switcher.component.html',
  styleUrls: ['./grid-list-switcher.component.scss']
})
export class GridListSwitcherComponent implements OnInit {

  // @Output() isListView = new EventEmitter();
  // _isListView: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  // toggle(){
  //   this._isListView = !this.isListView
  //   this.isListView.emit(this._isListView)
  // }

}
