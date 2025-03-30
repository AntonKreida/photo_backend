import { Schema } from "@strapi/strapi";
import { IPrice } from "../interfaces"
import { Params } from '@strapi/types/dist/modules/entity-service';

export abstract class Price {
    id: Params.Attribute.ID;
    documentId: string;
    locale?: string;
    title?: string;
    description?: string;
    cost?: number;
    markdown?: string;
    createdAt?: Schema.Attribute.DateTimeValue;
    updatedAt?: Schema.Attribute.DateTimeValue;
    publishedAt?: Schema.Attribute.DateTimeValue;
    subDescription?: string

    constructor(price: IPrice) {
        this.id = price.id
        this.title = price.title
        this.description = price.description
        this.cost = price?.cost
        this.documentId = price.documentId
        this.locale = price.locale
        this.createdAt = price.createdAt
        this.updatedAt = price.updatedAt
        this.publishedAt = price.publishedAt
        this.subDescription = price.subDescription
    }

    public abstract convertDescriptionMarkdownToHtml(this: Price): Price
}
