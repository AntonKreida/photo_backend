import { Core } from "@strapi/strapi";

export class AboutRepository {
    constructor(public strapi: Core.Strapi) {}

    async findMany() {
        return await this.strapi.entityService.findMany('api::about.about');
    }
}
