import router from "@r"
import { componentsPlugin } from "./components.js"
import "@a/css/tailwind.css"

/**
 * 插件集合
 *  @type {import("vue").Plugins[]} 
 */

const plugins = [router, componentsPlugin]

/**
 * 批量组册插件
 * @param {import("vue").App} app 
 * @returns 
 */
export const usePlugins = app => 
    plugins.forEach(app.use, app)