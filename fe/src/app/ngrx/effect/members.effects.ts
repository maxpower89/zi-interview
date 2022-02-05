import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {MembersService} from '../../pages/services/members.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, finalize, map, mergeMap} from 'rxjs/operators';
import {
  FetchMember,
  FetchMemberFailure,
  FetchMembers,
  FetchMembersFailure,
  FetchMembersSuccess,
  FetchMemberSuccess
} from '../action/members.actions';

import * as _ from 'lodash';
import {HttpClient} from "@angular/common/http";
import {environment} from "src/environments/environment";

@Injectable()
export class MembersEffects {

  private BASE_DOMAIN = environment.MEMBERS_API_BASE_DOMAIN;

  constructor(private actions$: Actions,
              private membersService: MembersService,private http: HttpClient) {
  }


  public fetchMembers$ = createEffect((): Observable<Action> =>
    this.actions$
      .pipe(
        ofType(FetchMembers),
        mergeMap(() => {
          return this.membersService.getMembers()
            .pipe(
              map((resp) => FetchMembersSuccess({total: _.get(resp, 'total'), members: _.get(resp, 'members')})),
              catchError((err) => of(FetchMembersFailure()))
            );
        })
      ));


  public fetchMember$ = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(FetchMember),
    mergeMap((action) => {
        return this.membersService.getMember(action.id)
          .pipe(
            map((resp) => FetchMemberSuccess({
                member: {
                  id: _.get(resp, 'id'),
                  name: _.get(resp, 'name'),
                  email: _.get(resp, 'email'),
                  description: _.get(resp, 'description')
                }
              }),
              catchError((err) => of(FetchMemberFailure({hasPermission: err.status!=403})))
            )
          )
      }
    )))
}
