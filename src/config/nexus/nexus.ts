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
              id: 'Int',
            },
            resolve: async (_, args) => (
                await strapi.entityService.findOne('api::price.price', args.id)
            ),
          });
        }
      })
    ],
  })
}
