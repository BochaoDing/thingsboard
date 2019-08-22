///
/// Copyright © 2016-2019 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import {AddEntityDialogComponent} from './entity/add-entity-dialog.component';
import {EntitiesTableComponent} from './entity/entities-table.component';
import {DetailsPanelComponent} from './details-panel.component';
import {EntityDetailsPanelComponent} from './entity/entity-details-panel.component';
import {ContactComponent} from './contact.component';

@NgModule({
  entryComponents: [
    AddEntityDialogComponent
  ],
  declarations:
    [
      EntitiesTableComponent,
      AddEntityDialogComponent,
      DetailsPanelComponent,
      EntityDetailsPanelComponent,
      ContactComponent,
    ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EntitiesTableComponent,
    AddEntityDialogComponent,
    DetailsPanelComponent,
    EntityDetailsPanelComponent,
    ContactComponent
  ]
})
export class HomeComponentsModule { }