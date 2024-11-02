import { Schema } from "@strapi/strapi";
import { ENUM_PRICE_TYPE } from "../enums"
import { IPrice } from "../interfaces"
import { Params } from '@strapi/types/dist/modules/entity-service';

export abstract class Price {
    id: Params.Attribute.ID;
    documentId: string;
    locale?: string;
    type?: ENUM_PRICE_TYPE[keyof ENUM_PRICE_TYPE];
    title?: string;
    description?: string;
    count?: number;
    markdown?: string;
    createdAt?: Schema.Attribute.DateTimeValue;
    updatedAt?: Schema.Attribute.DateTimeValue;
    publishedAt?: Schema.Attribute.DateTimeValue;

    constructor(price: IPrice) {
        this.id = price.id
        this.title = price.title
        this.description = price.description
        this.count = price.count
        this.type = price.type
        this.documentId = price.documentId
        this.locale = price.locale
        this.createdAt = price.createdAt
        this.updatedAt = price.updatedAt
        this.publishedAt = price.publishedAt
    }

    public abstract convertDescriptionMarkdownToHtml(this: Price): Price
}
