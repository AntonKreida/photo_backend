import { Core } from "@strapi/strapi";


export class EducationRepositories {
    constructor(public strapi: Core.Strapi) {}

    async findOne({ documentId }) {
        return await this.strapi.documents("api::education.education").findOne({
            documentId: documentId
        });
    }
}
