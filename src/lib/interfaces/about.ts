import { Params } from '@strapi/types/dist/modules/entity-service';
import type { Schema } from '@strapi/strapi';

export interface IAbout {
    id: Params.Attribute.ID;
    documentId: string;
    locale?: string;
    createdAt?: Schema.Attribute.DateTimeValue;
    updatedAt?: Schema.Attribute.DateTimeValue;
    publishedAt?: Schema.Attribute.DateTimeValue;
    title?: string;
    descriptions?: string;
}
