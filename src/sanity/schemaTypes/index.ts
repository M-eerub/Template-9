import { type SchemaTypeDefinition } from 'sanity';
import chef from './chef';
import food from './food';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef],
};
