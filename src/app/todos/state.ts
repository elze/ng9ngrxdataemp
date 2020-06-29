export const entityCollectionName = "Todo";

export const pluralizedEntityName = "todos";

export const entityCollectionEndpoint = pluralizedEntityName;

export interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  }
  