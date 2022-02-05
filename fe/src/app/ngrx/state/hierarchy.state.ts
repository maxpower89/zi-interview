import {Member} from '../../common/models/member';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Filters} from '../../common/models/filters';
import {AppConfig} from '../../app.config';
import {HierarchyMember} from "src/app/common/models/hierarchyMember";


export interface HierarchyState {
  loading: boolean;
  loaded: boolean;
  hierarchy:HierarchyMember[];
}

export const initialHierarchyState: HierarchyState = {
  loading: false,
  loaded: false,
  hierarchy: []
};

export const hierarchyFeatureSelector = createFeatureSelector<HierarchyState>('hierarchy');
export const getHierarchySelector = createSelector(hierarchyFeatureSelector, state => state.hierarchy);


