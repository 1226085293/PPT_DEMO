"use strict";
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				var desc = Object.getOwnPropertyDescriptor(m, k);
				if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
					desc = {
						enumerable: true,
						get: function () {
							return m[k];
						},
					};
				}
				Object.defineProperty(o, k2, desc);
		  }
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				o[k2] = m[k];
		  });
var __setModuleDefault =
	(this && this.__setModuleDefault) ||
	(Object.create
		? function (o, v) {
				Object.defineProperty(o, "default", { enumerable: true, value: v });
		  }
		: function (o, v) {
				o["default"] = v;
		  });
var __importStar =
	(this && this.__importStar) ||
	function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
					__createBinding(result, mod, k);
		__setModuleDefault(result, mod);
		return result;
	};
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
const fs = __importStar(require("fs"));
const config_1 = __importDefault(require("../config"));
const path_1 = __importDefault(require("path"));
const child_process_1 = __importDefault(require("child_process"));
const option = {
	template: fs.readFileSync(`${__dirname}/container.html`, "utf-8"),
	methods: {
		/** ???????????? css */
		load_css(info_as_) {
			info_as_.forEach((v) => {
				let css = document.createElement("link");
				css.rel = "stylesheet";
				css.href = v.url_s;
				v.parent.appendChild.call(v.parent, css);
			});
		},
		click_scene_script() {
			return __awaiter(this, void 0, void 0, function* () {
				const result = yield Editor.Message.request("scene", "execute-scene-script", {
					name: config_1.default.name_s,
					method: "event_template",
					args: [1],
				});
				console.log("??????????????????", result);
			});
		},
	},
	data() {
		return {};
	},
	watch: {},
	created() {},
	mounted() {
		this.load_css([
			{
				parent: document.head,
				url_s: config_1.default.path_s + "/node_modules/element-plus/dist/index.css",
			},
			{
				parent: this.$el,
				url_s: config_1.default.path_s + "/node_modules/element-plus/dist/index.css",
			},
		]);
		child_process_1.default.exec(
			`node http-server ${path_1.default.join(
				config_1.default.path_s,
				"res/web-mobile"
			)} -c-1 --cors`,
			{ cwd: path_1.default.join(config_1.default.path_s, "node_modules/http-server/bin") },
			(err, stdout, stderr) => {
				console.log(err, stdout, stderr);
			}
		);
	},
};
module.exports = option;
