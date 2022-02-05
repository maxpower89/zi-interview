import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HierarchyService} from '../../pages/services/hierarchy.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {FetchHierarchy, FetchHierarchyFailure, FetchHierarchySuccess} from '../action/hierarchy.actions';

import * as _ from 'lodash';

@Injectable()
export class HierarchyEffects {

  constructor(private actions$: Actions,
              private hierarchyService: HierarchyService) {}

  public fetchHierarchy$ = createEffect((): Observable<Action> =>
    this.actions$
      .pipe(
        ofType(FetchHierarchy),
        mergeMap((action) => {
          console.log(action)
          return this.hierarchyService.getHierarchy(action.id)
            .pipe(
              map((resp) => FetchHierarchySuccess({hierarchy: _.get(resp, 'parents')})),
              catchError((err) => of(FetchHierarchyFailure()))
            );
        })
      ));
}
