import { Data } from "@strapi/strapi";

export type FileImage = Data.Entity & {
    id: Data.ID;
    documentId: Data.DocumentID;
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    hash?: string;
    ext?: string;
    mime?: string;
    size?: number;
    url?: string;
    provider?: string;
    folderPath?: string;
}
