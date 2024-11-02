import showdown from "showdown";

const convectorMarkdownToHtml = new showdown.Converter();

export const convertMarkdownToHtml = (markdown: string): string => {
    return convectorMarkdownToHtml.makeHtml(markdown);
}
