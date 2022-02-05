import {createReducer, on} from '@ngrx/store';
import {initialHierarchyState} from '../state/hierarchy.state';
import {
  FetchHierarchy,
  FetchHierarchyFailure,
  FetchHierarchySuccess,
} from '../action/hierarchy.actions';

export const HierarchyReducer = createReducer(
  initialHierarchyState,

  on(FetchHierarchy, state => ({...state, loading: true, loaded: false})),

  on(FetchHierarchySuccess, (state, { hierarchy}) => {
    return {...state,  hierarchy, loaded: true, loading: false}}),

  on(FetchHierarchyFailure, state => ({...state, loading: false, loaded: true}))
);
