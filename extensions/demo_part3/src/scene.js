"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = exports.unload = exports.load = void 0;
function load() { }
exports.load = load;
function unload() { }
exports.unload = unload;
/** 场景事件放在此处 */
exports.methods = {
    event_template(event_) {
        console.log("场景脚本事件", event_);
        return event_ + 1;
    },
};
