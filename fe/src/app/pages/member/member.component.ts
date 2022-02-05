import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Member} from '../../common/models/member';
import {getHasPermissionSelector, getSelectedMemberSelector, MembersState} from "../../ngrx/state/members.state";
import {FetchMember} from "../../ngrx/action/members.actions";
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";


@Component({
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  @Input() memberId: string;
  member$: Observable<Member>;
  hasPermission$:Observable<boolean>;

  constructor(private membersStore: Store<MembersState>,private router:Router) {
  }

  ngOnInit(): void {
    this.membersStore.dispatch(FetchMember({id: this.memberId}))
    this.member$ = this.membersStore.select(getSelectedMemberSelector).pipe(
      map((memberState): Member => {
          return memberState;
        }
      )
    )

    this.hasPermission$=this.membersStore.select(getHasPermissionSelector).pipe(
      map((permission): boolean => {
          return permission;
        }
      )
    )
  }

  back():void{
    this.router.navigate(["/app"])
  }


}
