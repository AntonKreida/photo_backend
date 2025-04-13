import type { Core } from "@strapi/strapi";
import { EntityPrice, EntityFileImg, EntityAbout } from "../../entity/";

import {
  UploadRepository,
  PriceRepositories,
  ReviewsRepositories,
  AboutRepository,
  EducationRepositories,
} from "../../repositories";
import { EntityEducation } from "../../entity/education";

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
        type: 'Review',
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
            resolve: async (_, args) => {
              const repositories = new PriceRepositories(strapi)

              const priceResponse = await repositories.findOne({ idPrice: args.id })
              const price = new EntityPrice(priceResponse).convertDescriptionMarkdownToHtml();

              return price;
            },
          });
          t.list.field('prices', {
            type: 'Price',
            args: {
              type: "String",
            },
            resolve: async (_, args) => {
              const repositories = new PriceRepositories(strapi)

              if(args?.type && args.type !== "all") {
                const prices = await repositories.findMany({
                  filters: {
                    type_price: {
                      type: args.type
                    },
                  },
                  sort: {
                    ...args.sortArgs,
                  }
                });

                const mappedConvertedPrices = prices.map((price) => (
                  new EntityPrice(price).convertDescriptionMarkdownToHtml()
                ));

                return mappedConvertedPrices
              }

              const prices = await repositories.findMany({
                sort: {
                  ...args.sortArgs,
                }
              });

              const mappedConvertedPrices = prices.map((price) => (
                new EntityPrice(price).convertDescriptionMarkdownToHtml()
              ))

              return mappedConvertedPrices
            }
          }),
          t.field("review", {
            type: "Review",
            args: {
              isActiveReview: nexus.nonNull(nexus.booleanArg()),
              id: nexus.nonNull(nexus.intArg())
            },
            resolve: async (_, args) => {
              const repositories = new ReviewsRepositories(strapi)

              const reviewsResponse = await repositories.findMany({
                filters: {
                  $and: [
                    {
                      id: args.id
                    },
                    {
                      isActiveReview: args.isActiveReview
                    }
                  ]
                }
              })
              return reviewsResponse.length > 0 ? reviewsResponse[0] : null;
            }
          }),
          t.list.field("reviews", {
            type: "Review",
            args: {
              isActiveReview: nexus.nonNull(nexus.booleanArg()),
            },
            resolve: async (_, args) => (
              await new ReviewsRepositories(strapi).findMany({
                filters: {
                  isActiveReview: args.isActiveReview
                },
                sort: {
                  ...args.sort,
                }
              })
            )
          })
        }
      })
    ],
    typeDefs:`
      scalar Upload

      enum Sort {
        asc
        desc
      }

      input LinkReviewByInput {
        createdAt: Sort
      }

      input PricesByInput {
        cost: Sort
      }

      input OptionUploadImg {
        width: Int
        height: Int
      }

      type Query {
        reviews(sort: LinkReviewByInput): [Review!]
        prices(type: String, sortArgs: PricesByInput): [Price!]
      }

      type FileImg {
        id: ID!
        documentId: String
        name: String
        alternativeText: String
        caption: String
        width: Int
        height: Int
        hash: String
        ext: String
        mime: String
        size: Int
        url: String
        provider: String
        folderPath: String
      }

      type Mutation {
        singleUploadImg(file: Upload! options: OptionUploadImg): FileImg
      }
    `,
    resolvers: {
      Query: {
        about: async () => {
          try {
            const aboutPage = await new AboutRepository(strapi).findMany();
            const aboutEntity = new EntityAbout(aboutPage).convertDescriptionMarkdownToHtml();

            return aboutEntity;
          } catch (error) {
            console.log(error);
          }
        },
        education: async (_, args) => {
          const education = await new EducationRepositories(strapi).findOne({
            documentId: args.documentId
          });

          const educationEntity = new EntityEducation(education).convertDescriptionMarkdownToHtml();

          return educationEntity;
        }
      },
      Mutation: {
        singleUploadImg: async (_, args) => {
         try {
          const uploadRepository = new UploadRepository(strapi);
          const folder = await uploadRepository.createFolder(args.file.folder);

          let newImg = new EntityFileImg(args.file)

          if(args.options.width && args.options.height) {
            newImg = await newImg.setResizeFile({
              width: args.options.width,
              height: args.options.height,
              background: "transparent",
              fit: "cover",
              position: "center"
            })
          }

          const file = await uploadRepository.uploadFileImg(newImg, folder?.path);

          return file
         } catch (error) {
          console.log(error);
         }
        },
      },
    },
    resolversConfig: {
      "Mutation.singleUploadImg": {
        auth: false,
      },
    },
  });
}
