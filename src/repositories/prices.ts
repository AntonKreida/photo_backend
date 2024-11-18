import { Core } from "@strapi/strapi";

interface IFindManyArgs {
    filters?: Record<string, any>;
}

export class PriceRepositories {
    constructor(public strapi: Core.Strapi) {}

    async findOne({ idPrice }) {
        return await this.strapi.entityService.findOne('api::price.price', idPrice);
    }

    async findMany(args: IFindManyArgs = {}) {
        return await this.strapi.entityService.findMany('api::price.price', args);
    }
}
