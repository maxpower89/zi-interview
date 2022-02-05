import {createReducer, on} from '@ngrx/store';
import {initialMembersState} from '../state/members.state';
import {
  FetchMember, FetchMemberFailure,
  FetchMembers,
  FetchMembersFailure,
  FetchMembersSuccess, FetchMemberSuccess,
} from '../action/members.actions';

export const MembersReducer = createReducer(
  initialMembersState,

  on(FetchMembers, state => ({...state, loading: true, loaded: false})),
  on(FetchMembersSuccess, (state, {total, members}) => ({...state, total, members, loaded: true, loading: false})),
  on(FetchMembersFailure, state => ({...state, loading: false, loaded: true})),

  on(FetchMember, state => ({...state, loading: true, loaded: false,hasPermission:false})),
  on(FetchMemberSuccess, (state, {member}) => {
    return {...state, selectedMember:member,hasPermission:true,loaded: true, loading: false}}),
  on(FetchMemberFailure, (state,{hasPermission}) => {
    return  {...state, loading: false, loaded: true,hasPermission}})
);
