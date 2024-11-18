import { Core } from "@strapi/strapi";

interface IFindManyArgs {
    filters?: Record<string, any>;
    sort?: Record<string, any>;
}

export class ReviewsRepositories {
    constructor(public strapi: Core.Strapi) {}

    findMany(args: IFindManyArgs = {}) {
        return this.strapi.entityService.findMany('api::review.review', args);
    }
}
