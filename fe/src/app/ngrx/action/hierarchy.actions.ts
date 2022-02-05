import {createAction, props} from '@ngrx/store';
import {Member} from '../../common/models/member';
import {HierarchyMember} from "src/app/common/models/hierarchyMember";


// Fetch Hierarchy
export const FetchHierarchy = createAction(
  '[Hierarchy] FETCH_HIERARCHY',
  props<{id:string}>()
);
export const FetchHierarchySuccess = createAction(
  '[Hierarchy] FETCH_HIERARCHY_SUCCESS',
  props<{ hierarchy: Array<HierarchyMember> }>()
);
export const FetchHierarchyFailure = createAction('[Family] FETCH_HIERARCHY_FAILURE');
