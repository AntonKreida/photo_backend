import type { Schema } from '@strapi/strapi';
import { Params } from '@strapi/types/dist/modules/entity-service';
import { FileImage } from '../types';

export interface IEducation {
    id: Params.Attribute.ID;
    documentId: string;
    locale?: string;
    title?: string;
    description?: string;
    subTitle?: string;
    titleImage?: FileImage;
    createdAt?: Schema.Attribute.DateTimeValue;
    updatedAt?: Schema.Attribute.DateTimeValue;
    publishedAt?: Schema.Attribute.DateTimeValue;
    price?: number;
}
