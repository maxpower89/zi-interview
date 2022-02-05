import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ListItem} from '../../common/models/list-item';
import {Observable, Subscription} from 'rxjs';
import {Member} from '../../common/models/member';
import {getMembersSelector, MembersState} from "../../ngrx/state/members.state";
import {FetchMembers} from "../../ngrx/action/members.actions";
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";


@Component({
  selector: 'zi-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {

  listItems$: Observable<ListItem[]>;
  subscriptions: Subscription = new Subscription();
  selectedMember: ListItem;
  isLoading: boolean;

  constructor(private membersStore: Store<MembersState>) {}

  ngOnInit() {
    this.membersStore.dispatch(FetchMembers());
    this.listItems$=this.membersStore.select(getMembersSelector).pipe(
      map((memberState): ListItem[] => (
        memberState.map((member:Member)=>{
          return {
            id: member.id ,
            label: member.name
          }
        })
      ))
    );


  }

  memberSelected(member) {
    console.log("selected",member);
    this.selectedMember=member;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
