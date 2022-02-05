import {createAction, props} from '@ngrx/store';
import {Member} from '../../common/models/member';


// Fetch Members
export const FetchMembers = createAction(
  '[Members] FETCH_MEMBERS'
);
export const FetchMembersSuccess = createAction(
  '[Members] FETCH_MEMBERS_SUCCESS',
  props<{ total: number, members: Array<Member> }>()
);
export const FetchMembersFailure = createAction('[Family] FETCH_MEMBERS_FAILURE');


export const FetchMember = createAction(
  '[Members] FETCH_MEMBER',
  props<{ id: string }>()
);
export const FetchMemberSuccess = createAction(
  '[Members] FETCH_MEMBER_SUCCESS',
  props<{ member: Member }>()
);
export const FetchMemberFailure = createAction('[Family] FETCH_MEMBER_FAILURE', props<{ hasPermission: boolean }>());
