import { Data } from "@strapi/strapi";


export type Folder = Data.Entity & {
    id: Data.ID;
    documentId: Data.DocumentID;
    name?: string;
    pathId?: number;
    path?: string;
}
