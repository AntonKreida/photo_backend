export interface FileImgRequest {
    buffer: {
        type: "Buffer";
        data: string;
    },
    name: string;
    extension: string;
    mimeType: string;
    width: number;
    height: number;
    folder?: string;
}
