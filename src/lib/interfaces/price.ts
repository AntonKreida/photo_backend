import type { Schema } from '@strapi/strapi';
import { Params } from '@strapi/types/dist/modules/entity-service';

export interface IPrice {
    id: Params.Attribute.ID;
    documentId: string;
    locale?: string;
    title?: string;
    description?: string;
    subDescription?: string;
    cost?: number;
    createdAt?: Schema.Attribute.DateTimeValue;
    updatedAt?: Schema.Attribute.DateTimeValue;
    publishedAt?: Schema.Attribute.DateTimeValue;
    type_price?: Schema.Attribute.Relation<'oneToMany', 'api::price.price'>;
}
