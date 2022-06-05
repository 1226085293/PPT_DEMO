"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
const config_1 = __importDefault(require("./config"));
// export function load() {}
// export function unload() {}
exports.methods = {
    /**打开面板 */
    open() {
        Editor.Panel.open(config_1.default.name_s);
    },
};
