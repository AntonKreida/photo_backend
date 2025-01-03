import { FileImgRequest } from "../../lib";

export class EntityFileImg {
    buffer: Buffer;
    name: string;
    extension: string;
    mime: string;
    width: number;
    height: number;

    constructor(fileImgRequest: FileImgRequest) {
        this.buffer = Buffer.from(fileImgRequest.buffer.data, 'base64');
        this.name = fileImgRequest.name;
        this.extension = fileImgRequest.extension;
        this.mime = fileImgRequest.mimeType;
        this.width = fileImgRequest.width;
        this.height = fileImgRequest.height;
    }

    public getFileData(folderPath?: string) {
        return {
            name: this.name,
            alternativeText: this.name,
            caption: this.name,
            hash: this.name.replace(/\.[^/.]+$/, ""),
            ext: this.extension,
            provider: "local",
            mime: this.mime,
            folderPath: folderPath ? folderPath : "/",
            url: `/uploads/${ this.name }`,
            size: this.buffer.length / 1024,
            width: this.width,
            height: this.height,
        }
    };
    public getBuffer() {
        return this.buffer;
    };
}
