import {Member} from '../../common/models/member';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Filters} from '../../common/models/filters';
import {AppConfig} from '../../app.config';


export interface MembersState {
  loading: boolean;
  loaded: boolean;
  total: number;
  members: Member[];
  selectedMember?:Member;
  hasPermission:boolean;
}

export const initialMembersState: MembersState = {
  loading: false,
  loaded: false,
  total: 0,
  members: [],
  selectedMember:{id:"",name:""},
  hasPermission:false
};

export const membersFeatureSelector = createFeatureSelector<MembersState>('members');
export const getMembersSelector = createSelector(membersFeatureSelector, state => state.members);
export const getSelectedMemberSelector = createSelector(membersFeatureSelector, state => state.selectedMember);
export const getHasPermissionSelector = createSelector(membersFeatureSelector, state => state.hasPermission);

