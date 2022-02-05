import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './components/list/list.component';
import {MembersComponent} from './members/members.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {PagesComponent} from './pages.component';
import {ZiCommonModule} from '../common/common.module';
import {EffectsModule} from '@ngrx/effects';
import {MembersEffects} from '../ngrx/effect/members.effects';
import {MembersService} from './services/members.service';
import {HierarchyComponent} from "src/app/pages/components/hierarchy/hierarchy.component";
import {HierarchyEffects} from "src/app/ngrx/effect/hierarchy.effects";
import {HierarchyService} from "src/app/pages/services/hierarchy.service";



@NgModule({
  imports: [
    CommonModule,
    ZiCommonModule,
    EffectsModule.forRoot([MembersEffects,HierarchyEffects]),
  ],
  declarations: [
    ListComponent,
    MembersComponent,
    NavBarComponent,
    PagesComponent,
    HierarchyComponent
  ],
  providers: [
    MembersService,
    HierarchyService
  ]
})
export class PagesModule { }
