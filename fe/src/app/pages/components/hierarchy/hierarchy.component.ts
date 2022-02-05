import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ListItem} from '../../../common/models/list-item';
import {Subscription} from 'rxjs';

@Component({
  selector: 'hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {
  @Input() hierarchy: Array<ListItem>;
  @Output() itemSelected = new EventEmitter<ListItem>();
  constructor() {
  }

  ngOnInit(): void {

  }

  selectItem(item: ListItem) {
    this.itemSelected.emit(item);
  }
}
