"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const vue_1 = require("vue");
//@ts-ignore
const package_json_1 = __importDefault(require("../../../../package.json"));
module.exports = Editor.Panel.define({
    listeners: {
        show() {
            console.log("show");
        },
        hide() {
            console.log("hide");
        },
    },
    template: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, "../../../../static/template/default/index.html"), "utf-8"),
    style: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, "../../../../static/style/default/index.css"), "utf-8"),
    $: {
        app: "#app",
        text: "#text",
    },
    methods: {
        hello() {
            if (this.$.text) {
                this.$.text.innerHTML = "hello";
                console.log("[cocos-panel-html.default]: hello");
            }
        },
        test() {
            return "test result";
        },
    },
    ready() {
        if (this.$.text) {
            this.$.text.innerHTML = "Hello Cocos.";
        }
        if (this.$.app) {
            const app = (0, vue_1.createApp)({});
            app.component("my-counter", {
                template: (0, fs_1.readFileSync)((0, path_1.join)(__dirname, "../../../../static/template/vue/counter.html"), "utf-8"),
                data() {
                    return {
                        counter: 0,
                    };
                },
                methods: {
                    addition() {
                        let temp_n = 0;
                        for (let k_n = 0; k_n < 1000000000; ++k_n) {
                            temp_n++;
                        }
                        this.counter += 1;
                    },
                    subtraction() {
                        Editor.Message.send(package_json_1.default.name, "main-test");
                        this.counter -= 1;
                    },
                },
            });
            app.mount(this.$.app);
        }
    },
    beforeClose() { },
    close() { },
});
