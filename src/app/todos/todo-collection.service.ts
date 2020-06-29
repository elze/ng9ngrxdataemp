import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase } from "@ngrx/data";
import { EntityCollectionServiceElementsFactory } from "@ngrx/data";

import * as fromTodos from "./";

@Injectable()
export class TodoCollectionService extends EntityCollectionServiceBase<
  fromTodos.Todo
> {
  constructor(
    readonly elementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super(fromTodos.entityCollectionName, elementsFactory);
  }
}
