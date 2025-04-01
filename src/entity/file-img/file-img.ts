import sharp from "sharp";
import { FileImgRequest } from "../../lib";


type TArgument <T> = T extends (args: infer U) => any ? U : never;

type TResizeOptions = TArgument<ReturnType<typeof sharp>["resize"]>;

export class EntityFileImg {
    buffer: Buffer;
    name: string;
    extension: "png" | "jpeg" | "jpg";
    mime: string;
    width: number;
    height: number;

    constructor(fileImgRequest: FileImgRequest) {
        this.buffer = Buffer.from(fileImgRequest.buffer.data, 'base64');
        this.name = fileImgRequest.name;
        this.extension = fileImgRequest.extension as "png" | "jpeg" | "jpg";
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

    public async setResizeFile(options: TResizeOptions): Promise<EntityFileImg> {
        const resultSharpTransform = sharp(this.buffer).resize({
            ...options,
        }).toFormat(this.extension)

        this.width = options.width;
        this.height = options.height;
        this.buffer = await resultSharpTransform.toBuffer();


        return this;
    }

    public getBuffer() {
        return this.buffer;
    };
}
