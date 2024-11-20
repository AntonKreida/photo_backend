import { Schema } from "@strapi/strapi";
import { Params } from '@strapi/types/dist/modules/entity-service';
import { IEducation } from "../interfaces";
import { FileImage } from "../types";

export abstract class Education implements IEducation {
    id: Params.Attribute.ID;
    documentId: string;
    locale?: string;
    title?: string;
    subTitle?: string;
    titleImage?: FileImage;
    description?: string;
    createdAt?: Schema.Attribute.DateTimeValue;
    updatedAt?: Schema.Attribute.DateTimeValue;
    publishedAt?: Schema.Attribute.DateTimeValue;
    price?: number;

    constructor(education: IEducation) {
        this.id = education.id
        this.title = education.title
        this.description = education.description
        this.documentId = education.documentId
        this.locale = education.locale
        this.createdAt = education.createdAt
        this.updatedAt = education.updatedAt
        this.publishedAt = education.publishedAt
        this.titleImage = education.titleImage;
        this.price = education.price;
        this.subTitle = education.subTitle
    }

    public abstract convertDescriptionMarkdownToHtml(this: Education): Education
}
