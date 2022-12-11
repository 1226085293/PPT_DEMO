"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unload = exports.load = exports.methods = void 0;
//@ts-ignore
const package_json_1 = __importDefault(require("../package.json"));
/**
 * @en
 * @zh 为扩展的主进程的注册方法
 */
exports.methods = {
    open_panel() {
        Editor.Panel.open(package_json_1.default.name);
        setTimeout(async () => {
            console.log("与渲染进程通信");
            let result = await Editor.Message.request(package_json_1.default.name, "test");
            console.log("渲染进程返回", result);
        }, 3000);
    },
    main_test() {
        console.log("main_test");
        let temp_n = 0;
        for (let k_n = 0; k_n < 1000000000; ++k_n) {
            temp_n++;
        }
    },
};
/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
const load = function () { };
exports.load = load;
/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
const unload = function () { };
exports.unload = unload;
