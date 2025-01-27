import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	PetMutations,
	PetQueries,
	PetTypeDef
} from './FindAPet/pets/typeDefs';

import PetResolvers from './FindAPet/pets/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		PetTypeDef
	],
	[
		PetQueries
	],
	[
		PetMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		PetResolvers
	)
});
