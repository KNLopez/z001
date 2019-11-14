import DOMPurify from "dompurify";
import _ from "lodash";

export const sanitizeHtml = (html: string) => DOMPurify.sanitize(html);
