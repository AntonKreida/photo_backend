import { Params } from '@strapi/types/dist/modules/entity-service';
import type { Schema } from '@strapi/strapi';
import { IAbout } from "../interfaces";

export abstract class About {
    id: Params.Attribute.ID;
    documentId: string;
    locale?: string;
    createdAt?: Schema.Attribute.DateTimeValue;
    updatedAt?: Schema.Attribute.DateTimeValue;
    publishedAt?: Schema.Attribute.DateTimeValue;
    title?: string;
    descriptions?: string;

    constructor(price: IAbout) {
        this.id = price.id;
        this.documentId = price.documentId;
        this.locale = price.locale;
        this.createdAt = price.createdAt;
        this.updatedAt = price.updatedAt;
        this.publishedAt = price.publishedAt;
        this.title = price.title;
        this.descriptions = price.descriptions
    }

    public abstract convertDescriptionMarkdownToHtml(this: About): About
}
