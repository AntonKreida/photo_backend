import { Core } from "@strapi/strapi";
import { EntityFileImg } from "../entity";
import { Folder, FileImage } from "../lib/types";
import fs from 'fs';
import process from 'process';



export class UploadRepository {
    constructor(public strapi: Core.Strapi) {};

    public async uploadFileImg(entityImg: EntityFileImg, folderPath?: string): Promise<FileImage> {
        try {
            const fileRecord = await strapi.entityService.create("plugin::upload.file", {
                data: entityImg.getFileData(folderPath),
            })

            const filePath = `${process.cwd()}/public/uploads/${fileRecord.name}`
            fs.writeFileSync(filePath, entityImg.getBuffer());

            return fileRecord;
        } catch(error) {
            throw new Error("Error upload file");
        }
    }

    public async createFolder(name: string): Promise<Folder> {
        try {
            const checkFolder = await strapi.entityService.findMany("plugin::upload.folder", {
                filters: {
                    name: name,
                }
            })

            if(checkFolder.length > 0) {
                return checkFolder[0];
            }

           const response = await strapi.entityService.create("plugin::upload.folder", {
                data: {
                    name: name,
                    path: "/1",
                    locale: null,
                    pathId: 1,
                }
            })

            return response;
        } catch (error) {
            throw new Error("Error create folder");
        }
    }
}
