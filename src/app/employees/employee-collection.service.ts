import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase } from "@ngrx/data";
import { EntityCollectionServiceElementsFactory } from "@ngrx/data";

import * as fromEmployees from "./";

@Injectable()
export class EmployeeCollectionService extends EntityCollectionServiceBase<
fromEmployees.Employee
> {
  constructor(
    readonly elementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super(fromEmployees.entityCollectionName, elementsFactory);
  }
}
