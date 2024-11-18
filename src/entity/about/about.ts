import { About, IAbout } from "../../lib";
import { convertMarkdownToHtml } from "../../util";

export class EntityAbout extends About {
    id: number;
    documentId: string;
    locale?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    title?: string;
    descriptions?: string;

    constructor (about: IAbout) {
       super(about);
    }

    public convertDescriptionMarkdownToHtml(this: EntityAbout): EntityAbout {
        this.descriptions = convertMarkdownToHtml(this.descriptions);
        return this;
    }
}
