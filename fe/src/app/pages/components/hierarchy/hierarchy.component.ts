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
  constructor() {
  }

  ngOnInit(): void {

  }
}
