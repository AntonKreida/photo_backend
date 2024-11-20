import { Education, IEducation } from "../../lib";
import { convertMarkdownToHtml } from "../../util";

export class EntityEducation extends Education {
    constructor(education: IEducation) {
        super(education)
    }

    public convertDescriptionMarkdownToHtml(this: EntityEducation): EntityEducation {
        this.description = convertMarkdownToHtml(this.description);
        return this;
    }
}
