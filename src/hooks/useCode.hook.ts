import hljs from "highlight.js/lib/core";
import json from 'highlight.js/lib/languages/json';
import typescript from 'highlight.js/lib/languages/typescript';
/**
 * code展示
 */
export const useCode = () => {
    hljs.registerLanguage("typescript", typescript);
    hljs.registerLanguage("json", json);
    return hljs
}