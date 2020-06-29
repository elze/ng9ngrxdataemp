import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { EntityDataModule, DefaultDataServiceConfig } from "@ngrx/data";

import { EmployeeCollectionService } from "./employees/employee-collection.service";
import { TodoCollectionService } from "./todos/todo-collection.service";

import * as fromEmployees from "./employees";
import * as fromTodos from "./todos";

const NGRX_STORE_CONFIGURATION = {};

const REGISTERED_EFFECTS = [];

const ENTITY_METADATA = {
    [fromEmployees.entityCollectionName]: {},
    [fromTodos.entityCollectionName]: {}
};

const ENTITY_PLURAL_NAMES = {
    [fromEmployees.entityCollectionName]: fromEmployees.pluralizedEntityName,
    [fromTodos.entityCollectionName]: fromTodos.pluralizedEntityName
};

const NGRX_DATA_SERVICE_CONFIGURATION = {
    //root: "http://dummy.restapiexample.com/api/v1"
    root: "https://jsonplaceholder.typicode.com/"
};

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(NGRX_STORE_CONFIGURATION),
    EffectsModule.forRoot(REGISTERED_EFFECTS),
    EntityDataModule.forRoot({
      entityMetadata: ENTITY_METADATA,
      pluralNames: ENTITY_PLURAL_NAMES
    })
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: NGRX_DATA_SERVICE_CONFIGURATION
    },
    EmployeeCollectionService,
    TodoCollectionService
  ]
})
export class AppStoreModule {}
