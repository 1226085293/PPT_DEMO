import { readFileSync } from "fs";
import { join } from "path";
import { createApp } from "vue";
//@ts-ignore
import packageJSON from "../../../../package.json";

module.exports = Editor.Panel.define({
	listeners: {
		show() {
			console.log("show");
		},
		hide() {
			console.log("hide");
		},
	},
	template: readFileSync(
		join(__dirname, "../../../../static/template/default/index.html"),
		"utf-8"
	),
	style: readFileSync(join(__dirname, "../../../../static/style/default/index.css"), "utf-8"),
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
			const app = createApp({});
			app.component("my-counter", {
				template: readFileSync(
					join(__dirname, "../../../../static/template/vue/counter.html"),
					"utf-8"
				),
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
						Editor.Message.send(packageJSON.name, "main-test");
						this.counter -= 1;
					},
				},
			});
			app.mount(this.$.app);
		}
	},
	beforeClose() {},
	close() {},
});
