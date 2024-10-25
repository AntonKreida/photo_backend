import type { Core } from "@strapi/strapi";

export const nexusExtension = (strapi: Core.Strapi) => {
    return ({ nexus }) => ({
    types: [
      nexus.extendType({
        type: 'Price',
        definition(t) {
          t.int('id', {
            resolve: ({id}) => id,
          });
        },
      }),
      nexus.extendType({
        type: "Query",
        definition(t) {
          t.field('price', {
            type: 'Price',
            args: {
              id: nexus.nonNull(nexus.intArg())
            },
            resolve: async (_, args) => (
                await strapi.entityService.findOne('api::price.price', args.id)
            ),
          });
        }
      })
    ],
    typeDefs:`
      extend type Query {
       prices(type: ENUM_PRICE_TYPE): [Price]!
      }
    `
  })
}
