//@ts-ignore
import packageJSON from "../package.json";
/**
 * @en
 * @zh 为扩展的主进程的注册方法
 */
export const methods: { [key: string]: (...any: any) => any } = {
	open_panel() {
		Editor.Panel.open(packageJSON.name);
		setTimeout(async () => {
			console.log("与渲染进程通信");
			let result = await Editor.Message.request(packageJSON.name, "test");
			console.log("渲染进程返回", result);
		}, 3000);
	},
};

/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
export const load = function () {};

/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
export const unload = function () {};
