import type { Schema } from '@strapi/strapi';
import { Params } from '@strapi/types/dist/modules/entity-service';

export interface IPrice {
    id: Params.Attribute.ID;
    documentId: string;
    locale?: string;
    type?: "training" | "personal " | "business ";
    title?: string;
    description?: string;
    count?: number;
    createdAt?: Schema.Attribute.DateTimeValue;
    updatedAt?: Schema.Attribute.DateTimeValue;
    publishedAt?: Schema.Attribute.DateTimeValue;

}
