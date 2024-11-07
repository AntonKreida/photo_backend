import type { Core } from "@strapi/strapi";
import { EntityPrice } from "../../entity/";


export const graphqlExtension = (strapi: Core.Strapi) => {
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
        type: "TypePrice",
        definition(t) {
          t.int('id', {
            resolve: ({id}) => id,
          });
        }
      }),
      nexus.extendType({
        type: "Query",
        definition(t) {
          t.field('price', {
            type: 'Price',
            args: {
              id: nexus.nonNull(nexus.intArg())
            },
            resolve: async (_, args) => {
              const priceResponse = await strapi.entityService.findOne('api::price.price', args.id)
              const price = new EntityPrice(priceResponse).convertDescriptionMarkdownToHtml();

              return price;
            },
          });
          t.list.field('prices', {
            type: 'Price',
            args: {
              type: "String"
            },
            resolve: async (_, args) => {
              if(args?.type && args.type !== "all") {
                const prices = await strapi.entityService.findMany('api::price.price', {
                  filters: {
                    type_price: {
                      type: args.type
                    }
                  },
                })

                const mappedConvertedPrices = prices.map((price) => (
                  new EntityPrice(price).convertDescriptionMarkdownToHtml()
                ))

                return mappedConvertedPrices
              }

              const prices = await strapi.entityService.findMany('api::price.price');

              const mappedConvertedPrices = prices.map((price) => (
                new EntityPrice(price).convertDescriptionMarkdownToHtml()
              ))

              return mappedConvertedPrices
            }
          })
        }
      })
    ],
  });
}
