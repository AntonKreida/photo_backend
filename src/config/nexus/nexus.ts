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
          t.list.field('prices', {
            type: 'Price',
            args: {
              type: "ENUM_PRICE_TYPE",
            },
            resolve: async (_, args) => {
              if(args?.type) {
                const response = await strapi.entityService.findMany('api::price.price', {
                  filters: {
                    type: args.type
                  }
                })

                return response
              }

              return await strapi.entityService.findMany('api::price.price')
            }
          })
        }
      })
    ],
  });
}
