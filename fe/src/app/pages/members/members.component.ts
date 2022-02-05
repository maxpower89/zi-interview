import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ListItem} from '../../common/models/list-item';
import {Observable, Subscription} from 'rxjs';
import {Member} from '../../common/models/member';
import {getMembersSelector, MembersState} from "../../ngrx/state/members.state";
import {FetchMembers} from "../../ngrx/action/members.actions";
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {getHierarchySelector, HierarchyState} from "src/app/ngrx/state/hierarchy.state";
import {FetchHierarchy} from "src/app/ngrx/action/hierarchy.actions";
import {HierarchyMember} from "src/app/common/models/hierarchyMember";


@Component({
  selector: 'zi-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {

  listItems$: Observable<ListItem[]>;
  hierarchy$: Observable<ListItem[]>;
  subscriptions: Subscription = new Subscription();
  selectedMember: ListItem;
  isLoading: boolean;

  constructor(private membersStore: Store<MembersState>, private hierarchyStore:Store<HierarchyState>) {}

  ngOnInit() {
    this.membersStore.dispatch(FetchMembers());
    this.listItems$=this.membersStore.select(getMembersSelector).pipe(
      map((memberState): ListItem[] => {
        return memberState.map((member: Member) => {
          return {
            id: member.id,
            label: member.name
          }
        })
      })
    );

    this.hierarchy$=this.hierarchyStore.select(getHierarchySelector).pipe(
      map((hierarchyState): ListItem[] => {
        return hierarchyState.map((member: HierarchyMember) => {
          return {
            id: member.id,
            label: member.name
          }
        })
      })
    );


  }

  memberSelected(member) {
    this.selectedMember=member;
    this.hierarchyStore.dispatch(FetchHierarchy(member))

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
