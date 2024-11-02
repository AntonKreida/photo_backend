import { convertMarkdownToHtml } from "../../util"
import { Price, IPrice } from "../../lib"

export class EntityPrice extends Price {
    constructor(price: IPrice) {
       super(price);
    }

    public convertDescriptionMarkdownToHtml(this: EntityPrice): EntityPrice {
        this.description = convertMarkdownToHtml(this.description);
        return this;
    }
}
