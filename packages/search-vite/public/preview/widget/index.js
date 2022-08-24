var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
/*!
* @chm/search 0.0.0
* 
* @copyright (c) 2022 
* @license undefined
* 
* published: Fri Feb 18 2022 22:16:27 GMT+0530 (India Standard Time)
*/
import { createElementVNode, openBlock, createElementBlock, toDisplayString, normalizeClass, normalizeProps, guardReactiveProps, resolveComponent, createVNode, Fragment, renderList, createBlock, mergeProps, withKeys, withModifiers, renderSlot, withDirectives, vShow, createCommentVNode, Transition, withCtx, normalizeStyle, createTextVNode, pushScopeId, popScopeId, vModelSelect, setBlockTracking } from "vue";
import n from "lodash.isnil";
import t from "lodash.omitby";
import axios from "axios";
/*!
* @chm/icons 0.0.1
* 
* @copyright (c) 2022 
* @license undefined
* 
* published: Thu Feb 17 2022 19:27:13 GMT+0530 (India Standard Time)
*/
var a$1 = (l2, e2) => {
  const c2 = l2.__vccOpts || l2;
  for (const [l3, o2] of e2)
    c2[l3] = o2;
  return c2;
};
const d$1 = { name: "AAIcons", i18n: { messages: { en: { close: "close", edit: "edit", help: "help", earth: "earth", delete: "delete", file: "file", "upload to cloud": "upload to cloud", down: "down", search: "search", filter: "filter", infoOutlined: "info-outlined", cancel: "cancel", "question-circle": "question-circle", "trash-o": "trash-o", "cloud-upload": "cloud-upload", "chevron-down": "chevron-down" }, ar: { close: "\u0642\u0631\u064A\u0628", edit: "\u062A\u0639\u062F\u064A\u0644", help: "\u064A\u0633\u0627\u0639\u062F", earth: "\u0623\u0631\u0636", delete: "\u062D\u0630\u0641", file: "\u0645\u0644\u0641", "upload to cloud": "\u062A\u062D\u0645\u064A\u0644 \u0625\u0644\u0649 \u0627\u0644\u0633\u062D\u0627\u0628\u0629", down: "\u062A\u062D\u062A", search: "\u0628\u062D\u062B", filter: "\u0645\u0646\u0642\u064A", infoOutlined: "\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0628\u064A\u0646\u0629", cancel: "\u0625\u0644\u063A\u0627\u0621", "question-circle": "\u062F\u0627\u0626\u0631\u0629 \u0627\u0644\u0633\u0624\u0627\u0644", "trash-o": "\u0633\u0644\u0629 \u0627\u0644\u0645\u0647\u0645\u0644\u0627\u062A", "cloud-upload": "\u062A\u062D\u0645\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0633\u062D\u0627\u0628\u0629", "chevron-down": "\u0634\u064A\u0641\u0631\u0648\u0646 \u0644\u0623\u0633\u0641\u0644" }, es: { close: "cerca", edit: "editar", help: "ayuda", earth: "tierra", delete: "Eliminar", file: "expediente", "upload to cloud": "subir a la nube", down: "abajo", search: "buscar", filter: "filtrar", infoOutlined: "info-delineado", cancel: "cancelar", "question-circle": "c\xEDrculo de preguntas", "trash-o": "basura-o", "cloud-upload": "carga en la nube", "chevron-down": "chevron-down" }, fr: { close: "Fermer", edit: "\xC9diter", help: "aider", earth: "Terre", delete: "effacer", file: "d\xE9poser", "upload to cloud": "t\xE9l\xE9charger dans le cloud", down: "vers le bas", search: "rechercher", filter: "filtre", infoOutlined: "info-d\xE9crit", cancel: "Annuler", "question-circle": "question-cercle", "trash-o": "poubelle-o", "cloud-upload": "t\xE9l\xE9chargement en nuage", "chevron-down": "chevron vers le bas" }, ru: { close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", edit: "\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", help: "\u043F\u043E\u043C\u043E\u0449\u044C", earth: "\u0437\u0435\u043C\u043B\u044F", delete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", file: "\u0444\u0430\u0439\u043B", "upload to cloud": "\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432 \u043E\u0431\u043B\u0430\u043A\u043E", down: "\u0432\u043D\u0438\u0437", search: "\u043F\u043E\u0438\u0441\u043A", filter: "\u0444\u0438\u043B\u044C\u0442\u0440", infoOutlined: "\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0430 \u0432 \u043E\u0431\u0449\u0438\u0445 \u0447\u0435\u0440\u0442\u0430\u0445", cancel: "\u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C", "question-circle": "\u043A\u0440\u0443\u0433 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432", "trash-o": "\u043C\u0443\u0441\u043E\u0440", "cloud-upload": "\u043E\u0431\u043B\u0430\u0447\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430", "chevron-down": "\u0448\u0435\u0432\u0440\u043E\u043D \u0432\u043D\u0438\u0437" }, zh: { close: "\u5173\u95ED", edit: "\u7F16\u8F91", help: "\u5E2E\u52A9", earth: "\u5730\u7403", delete: "\u5220\u9664", file: "\u6587\u4EF6", "upload to cloud": "\u4E0A\u4F20\u5230\u4E91\u7AEF", down: "\u4E0B", search: "\u641C\u7D22", filter: "\u7B5B\u9009", infoOutlined: "\u4FE1\u606F\u6982\u8FF0", cancel: "\u53D6\u6D88", "question-circle": "\u95EE\u9898\u5708", "trash-o": "\u5783\u573E-o", "cloud-upload": "\u4E91\u7AEF\u4E0A\u4F20", "chevron-down": "V\u5B57\u578B\u5411\u4E0B" } } } }, r$1 = { id: "aa-icons", ref: "aa-icons", "aria-hidden": "true", style: { position: "absolute", width: "0", height: "0", overflow: "hidden" }, version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, h$1 = { id: "aa-icon-info-outline", viewBox: "0 0 24 24" }, s = createElementVNode("path", { d: "M11.016 9v-2.016h1.969v2.016h-1.969zM12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93zM11.016 17.016v-6h1.969v6h-1.969z" }, null, -1), u$1 = { id: "aa-icon-cancel", viewBox: "0 0 24 24" }, v$1 = createElementVNode("path", { d: "M17.016 15.609l-3.609-3.609 3.609-3.609-1.406-1.406-3.609 3.609-3.609-3.609-1.406 1.406 3.609 3.609-3.609 3.609 1.406 1.406 3.609-3.609 3.609 3.609zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z" }, null, -1), p$1 = { id: "aa-icon-close", viewBox: "0 0 22 28" }, f$1 = createElementVNode("path", { d: "M20.281 20.656c0 0.391-0.156 0.781-0.438 1.062l-2.125 2.125c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-4.594-4.594-4.594 4.594c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-2.125-2.125c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l4.594-4.594-4.594-4.594c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.594 4.594-4.594c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062s-0.156 0.781-0.438 1.062l-4.594 4.594 4.594 4.594c0.281 0.281 0.438 0.672 0.438 1.062z" }, null, -1), w = { id: "aa-icon-edit", viewBox: "0 0 28 28" }, M = createElementVNode("path", { d: "M13.875 18.5l1.813-1.813-2.375-2.375-1.813 1.813v0.875h1.5v1.5h0.875zM20.75 7.25c-0.141-0.141-0.375-0.125-0.516 0.016l-5.469 5.469c-0.141 0.141-0.156 0.375-0.016 0.516s0.375 0.125 0.516-0.016l5.469-5.469c0.141-0.141 0.156-0.375 0.016-0.516zM22 16.531v2.969c0 2.484-2.016 4.5-4.5 4.5h-13c-2.484 0-4.5-2.016-4.5-4.5v-13c0-2.484 2.016-4.5 4.5-4.5h13c0.625 0 1.25 0.125 1.828 0.391 0.141 0.063 0.25 0.203 0.281 0.359 0.031 0.172-0.016 0.328-0.141 0.453l-0.766 0.766c-0.141 0.141-0.328 0.187-0.5 0.125-0.234-0.063-0.469-0.094-0.703-0.094h-13c-1.375 0-2.5 1.125-2.5 2.5v13c0 1.375 1.125 2.5 2.5 2.5h13c1.375 0 2.5-1.125 2.5-2.5v-1.969c0-0.125 0.047-0.25 0.141-0.344l1-1c0.156-0.156 0.359-0.187 0.547-0.109s0.313 0.25 0.313 0.453zM20.5 5l4.5 4.5-10.5 10.5h-4.5v-4.5zM27.438 7.063l-1.437 1.437-4.5-4.5 1.437-1.437c0.578-0.578 1.547-0.578 2.125 0l2.375 2.375c0.578 0.578 0.578 1.547 0 2.125z" }, null, -1), z$1 = { id: "aa-icon-question-circle", viewBox: "0 0 24 28" }, m$1 = createElementVNode("path", { d: "M14 21.5v-3c0-0.281-0.219-0.5-0.5-0.5h-3c-0.281 0-0.5 0.219-0.5 0.5v3c0 0.281 0.219 0.5 0.5 0.5h3c0.281 0 0.5-0.219 0.5-0.5zM18 11c0-2.859-3-5-5.688-5-2.547 0-4.453 1.094-5.797 3.328-0.141 0.219-0.078 0.5 0.125 0.656l2.063 1.563c0.078 0.063 0.187 0.094 0.297 0.094 0.141 0 0.297-0.063 0.391-0.187 0.734-0.938 1.047-1.219 1.344-1.437 0.266-0.187 0.781-0.375 1.344-0.375 1 0 1.922 0.641 1.922 1.328 0 0.812-0.422 1.219-1.375 1.656-1.109 0.5-2.625 1.797-2.625 3.313v0.562c0 0.281 0.219 0.5 0.5 0.5h3c0.281 0 0.5-0.219 0.5-0.5v0c0-0.359 0.453-1.125 1.188-1.547 1.188-0.672 2.812-1.578 2.812-3.953zM24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z" }, null, -1), b$1 = { id: "aa-icon-earth", viewBox: "0 0 32 32" }, x = createElementVNode("path", { d: "M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 30c-1.967 0-3.84-0.407-5.538-1.139l7.286-8.197c0.163-0.183 0.253-0.419 0.253-0.664v-3c0-0.552-0.448-1-1-1-3.531 0-7.256-3.671-7.293-3.707-0.188-0.188-0.442-0.293-0.707-0.293h-4c-0.552 0-1 0.448-1 1v6c0 0.379 0.214 0.725 0.553 0.894l3.447 1.724v5.871c-3.627-2.53-6-6.732-6-11.489 0-2.147 0.484-4.181 1.348-6h3.652c0.265 0 0.52-0.105 0.707-0.293l4-4c0.188-0.188 0.293-0.442 0.293-0.707v-2.419c1.268-0.377 2.61-0.581 4-0.581 2.2 0 4.281 0.508 6.134 1.412-0.13 0.109-0.256 0.224-0.376 0.345-1.133 1.133-1.757 2.64-1.757 4.243s0.624 3.109 1.757 4.243c1.139 1.139 2.663 1.758 4.239 1.758 0.099 0 0.198-0.002 0.297-0.007 0.432 1.619 1.211 5.833-0.263 11.635-0.014 0.055-0.022 0.109-0.026 0.163-2.541 2.596-6.084 4.208-10.004 4.208z" }, null, -1), y$1 = { id: "aa-icon-trash-o", viewBox: "0 0 22 28" }, q$1 = createElementVNode("path", { d: "M8 11.5v9c0 0.281-0.219 0.5-0.5 0.5h-1c-0.281 0-0.5-0.219-0.5-0.5v-9c0-0.281 0.219-0.5 0.5-0.5h1c0.281 0 0.5 0.219 0.5 0.5zM12 11.5v9c0 0.281-0.219 0.5-0.5 0.5h-1c-0.281 0-0.5-0.219-0.5-0.5v-9c0-0.281 0.219-0.5 0.5-0.5h1c0.281 0 0.5 0.219 0.5 0.5zM16 11.5v9c0 0.281-0.219 0.5-0.5 0.5h-1c-0.281 0-0.5-0.219-0.5-0.5v-9c0-0.281 0.219-0.5 0.5-0.5h1c0.281 0 0.5 0.219 0.5 0.5zM18 22.813v-14.812h-14v14.812c0 0.75 0.422 1.188 0.5 1.188h13c0.078 0 0.5-0.438 0.5-1.188zM7.5 6h7l-0.75-1.828c-0.047-0.063-0.187-0.156-0.266-0.172h-4.953c-0.094 0.016-0.219 0.109-0.266 0.172zM22 6.5v1c0 0.281-0.219 0.5-0.5 0.5h-1.5v14.812c0 1.719-1.125 3.187-2.5 3.187h-13c-1.375 0-2.5-1.406-2.5-3.125v-14.875h-1.5c-0.281 0-0.5-0.219-0.5-0.5v-1c0-0.281 0.219-0.5 0.5-0.5h4.828l1.094-2.609c0.313-0.766 1.25-1.391 2.078-1.391h5c0.828 0 1.766 0.625 2.078 1.391l1.094 2.609h4.828c0.281 0 0.5 0.219 0.5 0.5z" }, null, -1), $ = { id: "aa-icon-file", viewBox: "0 0 24 28" }, g$1 = createElementVNode("path", { d: "M16 8v-7.375c0.219 0.141 0.406 0.281 0.562 0.438l6.375 6.375c0.156 0.156 0.297 0.344 0.438 0.562h-7.375zM14 8.5c0 0.828 0.672 1.5 1.5 1.5h8.5v16.5c0 0.828-0.672 1.5-1.5 1.5h-21c-0.828 0-1.5-0.672-1.5-1.5v-25c0-0.828 0.672-1.5 1.5-1.5h12.5v8.5z" }, null, -1), B$1 = { id: "aa-icon-cloud-upload", viewBox: "0 0 30 28" }, O$1 = createElementVNode("path", { d: "M20 13.5c0-0.125-0.047-0.266-0.141-0.359l-5.5-5.5c-0.094-0.094-0.219-0.141-0.359-0.141-0.125 0-0.266 0.047-0.359 0.141l-5.484 5.484c-0.094 0.109-0.156 0.234-0.156 0.375 0 0.281 0.219 0.5 0.5 0.5h3.5v5.5c0 0.266 0.234 0.5 0.5 0.5h3c0.266 0 0.5-0.234 0.5-0.5v-5.5h3.5c0.281 0 0.5-0.234 0.5-0.5zM30 18c0 3.313-2.688 6-6 6h-17c-3.859 0-7-3.141-7-7 0-2.719 1.578-5.187 4.031-6.328-0.016-0.234-0.031-0.453-0.031-0.672 0-4.422 3.578-8 8-8 3.25 0 6.172 1.969 7.406 4.969 0.719-0.625 1.641-0.969 2.594-0.969 2.203 0 4 1.797 4 4 0 0.766-0.219 1.516-0.641 2.156 2.719 0.641 4.641 3.063 4.641 5.844z" }, null, -1), A$1 = { id: "aa-icon-chevron-down", viewBox: "0 0 28 28" }, I$1 = createElementVNode("path", { d: "M26.297 12.625l-11.594 11.578c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.578c-0.391-0.391-0.391-1.031 0-1.422l2.594-2.578c0.391-0.391 1.016-0.391 1.406 0l8.297 8.297 8.297-8.297c0.391-0.391 1.016-0.391 1.406 0l2.594 2.578c0.391 0.391 0.391 1.031 0 1.422z" }, null, -1), k = { id: "aa-icon-search", viewBox: "0 0 250 270", preserveAspectRatio: "xMidYMid meet" }, C$1 = createElementVNode("path", { d: "M16 254 c-20 -20 -20 -22 5 -63 14 -24 19 -44 15 -63 -7 -37 15 -90 45 -112 13 -9 43 -16 67 -16 62 0 102 40 102 104 0 64 -40 109 -100 112 -31 1 -49 9 -67 28 -27 30 -45 33 -67 10z m164 -104 c36 -36 14 -100 -34 -100 -60 1 -81 79 -29 109 26 15 41 13 63 -9z" }, null, -1), H = { id: "aa-icon-filter", viewBox: "0 0 14 18" }, E$1 = createElementVNode("path", { d: "M14.093 2.963c0.1 0.241 0.050 0.522-0.141 0.703l-4.952 4.952v7.453c0 0.261-0.161 0.492-0.392 0.593-0.080 0.030-0.171 0.050-0.251 0.050-0.171 0-0.331-0.060-0.452-0.191l-2.571-2.571c-0.121-0.121-0.191-0.281-0.191-0.452v-4.882l-4.952-4.952c-0.191-0.181-0.241-0.462-0.141-0.703 0.1-0.231 0.331-0.392 0.593-0.392h12.857c0.261 0 0.492 0.161 0.593 0.392z" }, null, -1);
var _ = a$1(d$1, [["render", function(n2, t2, i2, a2, d2, _2) {
  return openBlock(), createElementBlock("svg", r$1, [createElementVNode("defs", null, [createElementVNode("symbol", h$1, [createElementVNode("title", null, toDisplayString(n2.$t("infoOutlined")), 1), s]), createElementVNode("symbol", u$1, [createElementVNode("title", null, toDisplayString(n2.$t("cancel")), 1), v$1]), createElementVNode("symbol", p$1, [createElementVNode("title", null, toDisplayString(n2.$t("close")), 1), f$1]), createElementVNode("symbol", w, [createElementVNode("title", null, toDisplayString(n2.$t("edit")), 1), M]), createElementVNode("symbol", z$1, [createElementVNode("title", null, toDisplayString(n2.$t("help")), 1), m$1]), createElementVNode("symbol", b$1, [createElementVNode("title", null, toDisplayString(n2.$t("earth")), 1), x]), createElementVNode("symbol", y$1, [createElementVNode("title", null, toDisplayString(n2.$t("delete")), 1), q$1]), createElementVNode("symbol", $, [createElementVNode("title", null, toDisplayString(n2.$t("file")), 1), g$1]), createElementVNode("symbol", B$1, [createElementVNode("title", null, toDisplayString(n2.$t("upload to cloud")), 1), O$1]), createElementVNode("symbol", A$1, [createElementVNode("title", null, toDisplayString(n2.$t("down")), 1), I$1]), createElementVNode("symbol", k, [createElementVNode("title", null, toDisplayString(n2.$t("search")), 1), C$1]), createElementVNode("symbol", H, [createElementVNode("title", null, toDisplayString(n2.$t("filter")), 1), E$1])])], 512);
}]]);
var j$1 = a$1({
  name: "AAIcon",
  props: { name: { type: String, required: true } }
}, [["render", function(o2, a2, d2, r2, h2, s2) {
  return openBlock(), createElementBlock("svg", { class: normalizeClass([{ [`aa-icon-${d2.name}`]: true }, "aa-icon"]) }, [createElementVNode("use", normalizeProps(guardReactiveProps({ "xlink:href": `#aa-icon-${d2.name}` })), null, 16)], 2);
}]]);
const S = j$1;
var i18n = {
  messages: {
    en: {
      showing: "showing",
      to: "to",
      of: "of",
      filters: "Filters",
      View: "View",
      "Text Search": "Text Search",
      Search: "Search",
      "Free Text Searches": "Free Text Searches",
      close: "close",
      help: "help",
      earth: "earth",
      delete: "delete",
      file: "file",
      down: "down",
      search: "search",
      filter: "filter",
      page: "page",
      decision: "Decision | SCBD",
      notification: "Notification | SCBD",
      Recommendation: "Recommendation | SCBD",
      statement: "Statement | SCBD",
      meetingDocument: "Meeting Document | SCBD",
      meeting: "Meeting | SCBD",
      sideEvent: "Side Event | SCBD",
      event: "Event | SCBD",
      new: "New | SCBD",
      announcement: "Announcement | SCBD",
      pressRelease: "Press Release | SCBD",
      news: "News | SCBD",
      bbiProfile: "Provider of Assistance",
      bbiOpportunity: "Opportunity",
      capacityBuildingInitiative: "Initiative",
      bbiRequest: "Request for Assistance",
      resource: "Resource"
    }
  }
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var localforage = { exports: {} };
/*!
    localForage -- Offline Storage, Improved
    Version 1.9.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(module, exports) {
  (function(f2) {
    {
      module.exports = f2();
    }
  })(function() {
    return function e2(t2, n2, r2) {
      function s2(o3, u2) {
        if (!n2[o3]) {
          if (!t2[o3]) {
            var a2 = typeof commonjsRequire == "function" && commonjsRequire;
            if (!u2 && a2)
              return a2(o3, true);
            if (i)
              return i(o3, true);
            var f2 = new Error("Cannot find module '" + o3 + "'");
            throw f2.code = "MODULE_NOT_FOUND", f2;
          }
          var l2 = n2[o3] = { exports: {} };
          t2[o3][0].call(l2.exports, function(e3) {
            var n3 = t2[o3][1][e3];
            return s2(n3 ? n3 : e3);
          }, l2, l2.exports, e2, t2, n2, r2);
        }
        return n2[o3].exports;
      }
      var i = typeof commonjsRequire == "function" && commonjsRequire;
      for (var o2 = 0; o2 < r2.length; o2++)
        s2(r2[o2]);
      return s2;
    }({ 1: [function(_dereq_, module2, exports2) {
      (function(global2) {
        var Mutation = global2.MutationObserver || global2.WebKitMutationObserver;
        var scheduleDrain;
        {
          if (Mutation) {
            var called = 0;
            var observer = new Mutation(nextTick);
            var element = global2.document.createTextNode("");
            observer.observe(element, {
              characterData: true
            });
            scheduleDrain = function() {
              element.data = called = ++called % 2;
            };
          } else if (!global2.setImmediate && typeof global2.MessageChannel !== "undefined") {
            var channel = new global2.MessageChannel();
            channel.port1.onmessage = nextTick;
            scheduleDrain = function() {
              channel.port2.postMessage(0);
            };
          } else if ("document" in global2 && "onreadystatechange" in global2.document.createElement("script")) {
            scheduleDrain = function() {
              var scriptEl = global2.document.createElement("script");
              scriptEl.onreadystatechange = function() {
                nextTick();
                scriptEl.onreadystatechange = null;
                scriptEl.parentNode.removeChild(scriptEl);
                scriptEl = null;
              };
              global2.document.documentElement.appendChild(scriptEl);
            };
          } else {
            scheduleDrain = function() {
              setTimeout(nextTick, 0);
            };
          }
        }
        var draining;
        var queue = [];
        function nextTick() {
          draining = true;
          var i, oldQueue;
          var len = queue.length;
          while (len) {
            oldQueue = queue;
            queue = [];
            i = -1;
            while (++i < len) {
              oldQueue[i]();
            }
            len = queue.length;
          }
          draining = false;
        }
        module2.exports = immediate;
        function immediate(task) {
          if (queue.push(task) === 1 && !draining) {
            scheduleDrain();
          }
        }
      }).call(this, typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}], 2: [function(_dereq_, module2, exports2) {
      var immediate = _dereq_(1);
      function INTERNAL() {
      }
      var handlers = {};
      var REJECTED = ["REJECTED"];
      var FULFILLED = ["FULFILLED"];
      var PENDING = ["PENDING"];
      module2.exports = Promise2;
      function Promise2(resolver) {
        if (typeof resolver !== "function") {
          throw new TypeError("resolver must be a function");
        }
        this.state = PENDING;
        this.queue = [];
        this.outcome = void 0;
        if (resolver !== INTERNAL) {
          safelyResolveThenable(this, resolver);
        }
      }
      Promise2.prototype["catch"] = function(onRejected) {
        return this.then(null, onRejected);
      };
      Promise2.prototype.then = function(onFulfilled, onRejected) {
        if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) {
          return this;
        }
        var promise = new this.constructor(INTERNAL);
        if (this.state !== PENDING) {
          var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
          unwrap(promise, resolver, this.outcome);
        } else {
          this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
        }
        return promise;
      };
      function QueueItem(promise, onFulfilled, onRejected) {
        this.promise = promise;
        if (typeof onFulfilled === "function") {
          this.onFulfilled = onFulfilled;
          this.callFulfilled = this.otherCallFulfilled;
        }
        if (typeof onRejected === "function") {
          this.onRejected = onRejected;
          this.callRejected = this.otherCallRejected;
        }
      }
      QueueItem.prototype.callFulfilled = function(value) {
        handlers.resolve(this.promise, value);
      };
      QueueItem.prototype.otherCallFulfilled = function(value) {
        unwrap(this.promise, this.onFulfilled, value);
      };
      QueueItem.prototype.callRejected = function(value) {
        handlers.reject(this.promise, value);
      };
      QueueItem.prototype.otherCallRejected = function(value) {
        unwrap(this.promise, this.onRejected, value);
      };
      function unwrap(promise, func, value) {
        immediate(function() {
          var returnValue;
          try {
            returnValue = func(value);
          } catch (e2) {
            return handlers.reject(promise, e2);
          }
          if (returnValue === promise) {
            handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
          } else {
            handlers.resolve(promise, returnValue);
          }
        });
      }
      handlers.resolve = function(self2, value) {
        var result = tryCatch(getThen, value);
        if (result.status === "error") {
          return handlers.reject(self2, result.value);
        }
        var thenable = result.value;
        if (thenable) {
          safelyResolveThenable(self2, thenable);
        } else {
          self2.state = FULFILLED;
          self2.outcome = value;
          var i = -1;
          var len = self2.queue.length;
          while (++i < len) {
            self2.queue[i].callFulfilled(value);
          }
        }
        return self2;
      };
      handlers.reject = function(self2, error) {
        self2.state = REJECTED;
        self2.outcome = error;
        var i = -1;
        var len = self2.queue.length;
        while (++i < len) {
          self2.queue[i].callRejected(error);
        }
        return self2;
      };
      function getThen(obj) {
        var then = obj && obj.then;
        if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") {
          return function appyThen() {
            then.apply(obj, arguments);
          };
        }
      }
      function safelyResolveThenable(self2, thenable) {
        var called = false;
        function onError(value) {
          if (called) {
            return;
          }
          called = true;
          handlers.reject(self2, value);
        }
        function onSuccess(value) {
          if (called) {
            return;
          }
          called = true;
          handlers.resolve(self2, value);
        }
        function tryToUnwrap() {
          thenable(onSuccess, onError);
        }
        var result = tryCatch(tryToUnwrap);
        if (result.status === "error") {
          onError(result.value);
        }
      }
      function tryCatch(func, value) {
        var out = {};
        try {
          out.value = func(value);
          out.status = "success";
        } catch (e2) {
          out.status = "error";
          out.value = e2;
        }
        return out;
      }
      Promise2.resolve = resolve;
      function resolve(value) {
        if (value instanceof this) {
          return value;
        }
        return handlers.resolve(new this(INTERNAL), value);
      }
      Promise2.reject = reject;
      function reject(reason) {
        var promise = new this(INTERNAL);
        return handlers.reject(promise, reason);
      }
      Promise2.all = all;
      function all(iterable) {
        var self2 = this;
        if (Object.prototype.toString.call(iterable) !== "[object Array]") {
          return this.reject(new TypeError("must be an array"));
        }
        var len = iterable.length;
        var called = false;
        if (!len) {
          return this.resolve([]);
        }
        var values = new Array(len);
        var resolved = 0;
        var i = -1;
        var promise = new this(INTERNAL);
        while (++i < len) {
          allResolver(iterable[i], i);
        }
        return promise;
        function allResolver(value, i2) {
          self2.resolve(value).then(resolveFromAll, function(error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });
          function resolveFromAll(outValue) {
            values[i2] = outValue;
            if (++resolved === len && !called) {
              called = true;
              handlers.resolve(promise, values);
            }
          }
        }
      }
      Promise2.race = race;
      function race(iterable) {
        var self2 = this;
        if (Object.prototype.toString.call(iterable) !== "[object Array]") {
          return this.reject(new TypeError("must be an array"));
        }
        var len = iterable.length;
        var called = false;
        if (!len) {
          return this.resolve([]);
        }
        var i = -1;
        var promise = new this(INTERNAL);
        while (++i < len) {
          resolver(iterable[i]);
        }
        return promise;
        function resolver(value) {
          self2.resolve(value).then(function(response) {
            if (!called) {
              called = true;
              handlers.resolve(promise, response);
            }
          }, function(error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });
        }
      }
    }, { "1": 1 }], 3: [function(_dereq_, module2, exports2) {
      (function(global2) {
        if (typeof global2.Promise !== "function") {
          global2.Promise = _dereq_(2);
        }
      }).call(this, typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "2": 2 }], 4: [function(_dereq_, module2, exports2) {
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function getIDB() {
        try {
          if (typeof indexedDB !== "undefined") {
            return indexedDB;
          }
          if (typeof webkitIndexedDB !== "undefined") {
            return webkitIndexedDB;
          }
          if (typeof mozIndexedDB !== "undefined") {
            return mozIndexedDB;
          }
          if (typeof OIndexedDB !== "undefined") {
            return OIndexedDB;
          }
          if (typeof msIndexedDB !== "undefined") {
            return msIndexedDB;
          }
        } catch (e2) {
          return;
        }
      }
      var idb = getIDB();
      function isIndexedDBValid() {
        try {
          if (!idb || !idb.open) {
            return false;
          }
          var isSafari = typeof openDatabase !== "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
          var hasFetch = typeof fetch === "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!isSafari || hasFetch) && typeof indexedDB !== "undefined" && typeof IDBKeyRange !== "undefined";
        } catch (e2) {
          return false;
        }
      }
      function createBlob(parts, properties) {
        parts = parts || [];
        properties = properties || {};
        try {
          return new Blob(parts, properties);
        } catch (e2) {
          if (e2.name !== "TypeError") {
            throw e2;
          }
          var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
          var builder = new Builder();
          for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
          }
          return builder.getBlob(properties.type);
        }
      }
      if (typeof Promise === "undefined") {
        _dereq_(3);
      }
      var Promise$1 = Promise;
      function executeCallback(promise, callback) {
        if (callback) {
          promise.then(function(result) {
            callback(null, result);
          }, function(error) {
            callback(error);
          });
        }
      }
      function executeTwoCallbacks(promise, callback, errorCallback) {
        if (typeof callback === "function") {
          promise.then(callback);
        }
        if (typeof errorCallback === "function") {
          promise["catch"](errorCallback);
        }
      }
      function normalizeKey(key2) {
        if (typeof key2 !== "string") {
          console.warn(key2 + " used as a key, but it is not a string.");
          key2 = String(key2);
        }
        return key2;
      }
      function getCallback() {
        if (arguments.length && typeof arguments[arguments.length - 1] === "function") {
          return arguments[arguments.length - 1];
        }
      }
      var DETECT_BLOB_SUPPORT_STORE = "local-forage-detect-blob-support";
      var supportsBlobs = void 0;
      var dbContexts = {};
      var toString = Object.prototype.toString;
      var READ_ONLY = "readonly";
      var READ_WRITE = "readwrite";
      function _binStringToArrayBuffer(bin) {
        var length2 = bin.length;
        var buf = new ArrayBuffer(length2);
        var arr = new Uint8Array(buf);
        for (var i = 0; i < length2; i++) {
          arr[i] = bin.charCodeAt(i);
        }
        return buf;
      }
      function _checkBlobSupportWithoutCaching(idb2) {
        return new Promise$1(function(resolve) {
          var txn = idb2.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
          var blob = createBlob([""]);
          txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, "key");
          txn.onabort = function(e2) {
            e2.preventDefault();
            e2.stopPropagation();
            resolve(false);
          };
          txn.oncomplete = function() {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
          };
        })["catch"](function() {
          return false;
        });
      }
      function _checkBlobSupport(idb2) {
        if (typeof supportsBlobs === "boolean") {
          return Promise$1.resolve(supportsBlobs);
        }
        return _checkBlobSupportWithoutCaching(idb2).then(function(value) {
          supportsBlobs = value;
          return supportsBlobs;
        });
      }
      function _deferReadiness(dbInfo) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = {};
        deferredOperation.promise = new Promise$1(function(resolve, reject) {
          deferredOperation.resolve = resolve;
          deferredOperation.reject = reject;
        });
        dbContext.deferredOperations.push(deferredOperation);
        if (!dbContext.dbReady) {
          dbContext.dbReady = deferredOperation.promise;
        } else {
          dbContext.dbReady = dbContext.dbReady.then(function() {
            return deferredOperation.promise;
          });
        }
      }
      function _advanceReadiness(dbInfo) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = dbContext.deferredOperations.pop();
        if (deferredOperation) {
          deferredOperation.resolve();
          return deferredOperation.promise;
        }
      }
      function _rejectReadiness(dbInfo, err) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = dbContext.deferredOperations.pop();
        if (deferredOperation) {
          deferredOperation.reject(err);
          return deferredOperation.promise;
        }
      }
      function _getConnection(dbInfo, upgradeNeeded) {
        return new Promise$1(function(resolve, reject) {
          dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();
          if (dbInfo.db) {
            if (upgradeNeeded) {
              _deferReadiness(dbInfo);
              dbInfo.db.close();
            } else {
              return resolve(dbInfo.db);
            }
          }
          var dbArgs = [dbInfo.name];
          if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
          }
          var openreq = idb.open.apply(idb, dbArgs);
          if (upgradeNeeded) {
            openreq.onupgradeneeded = function(e2) {
              var db = openreq.result;
              try {
                db.createObjectStore(dbInfo.storeName);
                if (e2.oldVersion <= 1) {
                  db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                }
              } catch (ex) {
                if (ex.name === "ConstraintError") {
                  console.warn('The database "' + dbInfo.name + '" has been upgraded from version ' + e2.oldVersion + " to version " + e2.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                } else {
                  throw ex;
                }
              }
            };
          }
          openreq.onerror = function(e2) {
            e2.preventDefault();
            reject(openreq.error);
          };
          openreq.onsuccess = function() {
            resolve(openreq.result);
            _advanceReadiness(dbInfo);
          };
        });
      }
      function _getOriginalConnection(dbInfo) {
        return _getConnection(dbInfo, false);
      }
      function _getUpgradedConnection(dbInfo) {
        return _getConnection(dbInfo, true);
      }
      function _isUpgradeNeeded(dbInfo, defaultVersion) {
        if (!dbInfo.db) {
          return true;
        }
        var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
        var isDowngrade = dbInfo.version < dbInfo.db.version;
        var isUpgrade = dbInfo.version > dbInfo.db.version;
        if (isDowngrade) {
          if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + `" can't be downgraded from version ` + dbInfo.db.version + " to version " + dbInfo.version + ".");
          }
          dbInfo.version = dbInfo.db.version;
        }
        if (isUpgrade || isNewStore) {
          if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
              dbInfo.version = incVersion;
            }
          }
          return true;
        }
        return false;
      }
      function _encodeBlob(blob) {
        return new Promise$1(function(resolve, reject) {
          var reader = new FileReader();
          reader.onerror = reject;
          reader.onloadend = function(e2) {
            var base64 = btoa(e2.target.result || "");
            resolve({
              __local_forage_encoded_blob: true,
              data: base64,
              type: blob.type
            });
          };
          reader.readAsBinaryString(blob);
        });
      }
      function _decodeBlob(encodedBlob) {
        var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
        return createBlob([arrayBuff], { type: encodedBlob.type });
      }
      function _isEncodedBlob(value) {
        return value && value.__local_forage_encoded_blob;
      }
      function _fullyReady(callback) {
        var self2 = this;
        var promise = self2._initReady().then(function() {
          var dbContext = dbContexts[self2._dbInfo.name];
          if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
          }
        });
        executeTwoCallbacks(promise, callback, callback);
        return promise;
      }
      function _tryReconnect(dbInfo) {
        _deferReadiness(dbInfo);
        var dbContext = dbContexts[dbInfo.name];
        var forages = dbContext.forages;
        for (var i = 0; i < forages.length; i++) {
          var forage = forages[i];
          if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
          }
        }
        dbInfo.db = null;
        return _getOriginalConnection(dbInfo).then(function(db) {
          dbInfo.db = db;
          if (_isUpgradeNeeded(dbInfo)) {
            return _getUpgradedConnection(dbInfo);
          }
          return db;
        }).then(function(db) {
          dbInfo.db = dbContext.db = db;
          for (var i2 = 0; i2 < forages.length; i2++) {
            forages[i2]._dbInfo.db = db;
          }
        })["catch"](function(err) {
          _rejectReadiness(dbInfo, err);
          throw err;
        });
      }
      function createTransaction(dbInfo, mode, callback, retries) {
        if (retries === void 0) {
          retries = 1;
        }
        try {
          var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
          callback(null, tx);
        } catch (err) {
          if (retries > 0 && (!dbInfo.db || err.name === "InvalidStateError" || err.name === "NotFoundError")) {
            return Promise$1.resolve().then(function() {
              if (!dbInfo.db || err.name === "NotFoundError" && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                if (dbInfo.db) {
                  dbInfo.version = dbInfo.db.version + 1;
                }
                return _getUpgradedConnection(dbInfo);
              }
            }).then(function() {
              return _tryReconnect(dbInfo).then(function() {
                createTransaction(dbInfo, mode, callback, retries - 1);
              });
            })["catch"](callback);
          }
          callback(err);
        }
      }
      function createDbContext() {
        return {
          forages: [],
          db: null,
          dbReady: null,
          deferredOperations: []
        };
      }
      function _initStorage(options) {
        var self2 = this;
        var dbInfo = {
          db: null
        };
        if (options) {
          for (var i in options) {
            dbInfo[i] = options[i];
          }
        }
        var dbContext = dbContexts[dbInfo.name];
        if (!dbContext) {
          dbContext = createDbContext();
          dbContexts[dbInfo.name] = dbContext;
        }
        dbContext.forages.push(self2);
        if (!self2._initReady) {
          self2._initReady = self2.ready;
          self2.ready = _fullyReady;
        }
        var initPromises = [];
        function ignoreErrors() {
          return Promise$1.resolve();
        }
        for (var j2 = 0; j2 < dbContext.forages.length; j2++) {
          var forage = dbContext.forages[j2];
          if (forage !== self2) {
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
          }
        }
        var forages = dbContext.forages.slice(0);
        return Promise$1.all(initPromises).then(function() {
          dbInfo.db = dbContext.db;
          return _getOriginalConnection(dbInfo);
        }).then(function(db) {
          dbInfo.db = db;
          if (_isUpgradeNeeded(dbInfo, self2._defaultConfig.version)) {
            return _getUpgradedConnection(dbInfo);
          }
          return db;
        }).then(function(db) {
          dbInfo.db = dbContext.db = db;
          self2._dbInfo = dbInfo;
          for (var k2 = 0; k2 < forages.length; k2++) {
            var forage2 = forages[k2];
            if (forage2 !== self2) {
              forage2._dbInfo.db = dbInfo.db;
              forage2._dbInfo.version = dbInfo.version;
            }
          }
        });
      }
      function getItem(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var req = store.get(key2);
                req.onsuccess = function() {
                  var value = req.result;
                  if (value === void 0) {
                    value = null;
                  }
                  if (_isEncodedBlob(value)) {
                    value = _decodeBlob(value);
                  }
                  resolve(value);
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate(iterator, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var req = store.openCursor();
                var iterationNumber = 1;
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (cursor) {
                    var value = cursor.value;
                    if (_isEncodedBlob(value)) {
                      value = _decodeBlob(value);
                    }
                    var result = iterator(value, cursor.key, iterationNumber++);
                    if (result !== void 0) {
                      resolve(result);
                    } else {
                      cursor["continue"]();
                    }
                  } else {
                    resolve();
                  }
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem(key2, value, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          var dbInfo;
          self2.ready().then(function() {
            dbInfo = self2._dbInfo;
            if (toString.call(value) === "[object Blob]") {
              return _checkBlobSupport(dbInfo.db).then(function(blobSupport) {
                if (blobSupport) {
                  return value;
                }
                return _encodeBlob(value);
              });
            }
            return value;
          }).then(function(value2) {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                if (value2 === null) {
                  value2 = void 0;
                }
                var req = store.put(value2, key2);
                transaction.oncomplete = function() {
                  if (value2 === void 0) {
                    value2 = null;
                  }
                  resolve(value2);
                };
                transaction.onabort = transaction.onerror = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function removeItem(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var req = store["delete"](key2);
                transaction.oncomplete = function() {
                  resolve();
                };
                transaction.onerror = function() {
                  reject(req.error);
                };
                transaction.onabort = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function clear(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var req = store.clear();
                transaction.oncomplete = function() {
                  resolve();
                };
                transaction.onabort = transaction.onerror = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var req = store.count();
                req.onsuccess = function() {
                  resolve(req.result);
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key(n2, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          if (n2 < 0) {
            resolve(null);
            return;
          }
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var advanced = false;
                var req = store.openKeyCursor();
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (!cursor) {
                    resolve(null);
                    return;
                  }
                  if (n2 === 0) {
                    resolve(cursor.key);
                  } else {
                    if (!advanced) {
                      advanced = true;
                      cursor.advance(n2);
                    } else {
                      resolve(cursor.key);
                    }
                  }
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store = transaction.objectStore(self2._dbInfo.storeName);
                var req = store.openKeyCursor();
                var keys2 = [];
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (!cursor) {
                    resolve(keys2);
                    return;
                  }
                  keys2.push(cursor.key);
                  cursor["continue"]();
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e2) {
                reject(e2);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function dropInstance(options, callback) {
        callback = getCallback.apply(this, arguments);
        var currentConfig = this.config();
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          var isCurrentDb = options.name === currentConfig.name && self2._dbInfo.db;
          var dbPromise = isCurrentDb ? Promise$1.resolve(self2._dbInfo.db) : _getOriginalConnection(options).then(function(db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
              forages[i]._dbInfo.db = db;
            }
            return db;
          });
          if (!options.storeName) {
            promise = dbPromise.then(function(db) {
              _deferReadiness(options);
              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              db.close();
              for (var i = 0; i < forages.length; i++) {
                var forage = forages[i];
                forage._dbInfo.db = null;
              }
              var dropDBPromise = new Promise$1(function(resolve, reject) {
                var req = idb.deleteDatabase(options.name);
                req.onerror = req.onblocked = function(err) {
                  var db2 = req.result;
                  if (db2) {
                    db2.close();
                  }
                  reject(err);
                };
                req.onsuccess = function() {
                  var db2 = req.result;
                  if (db2) {
                    db2.close();
                  }
                  resolve(db2);
                };
              });
              return dropDBPromise.then(function(db2) {
                dbContext.db = db2;
                for (var i2 = 0; i2 < forages.length; i2++) {
                  var _forage = forages[i2];
                  _advanceReadiness(_forage._dbInfo);
                }
              })["catch"](function(err) {
                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                });
                throw err;
              });
            });
          } else {
            promise = dbPromise.then(function(db) {
              if (!db.objectStoreNames.contains(options.storeName)) {
                return;
              }
              var newVersion = db.version + 1;
              _deferReadiness(options);
              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              db.close();
              for (var i = 0; i < forages.length; i++) {
                var forage = forages[i];
                forage._dbInfo.db = null;
                forage._dbInfo.version = newVersion;
              }
              var dropObjectPromise = new Promise$1(function(resolve, reject) {
                var req = idb.open(options.name, newVersion);
                req.onerror = function(err) {
                  var db2 = req.result;
                  db2.close();
                  reject(err);
                };
                req.onupgradeneeded = function() {
                  var db2 = req.result;
                  db2.deleteObjectStore(options.storeName);
                };
                req.onsuccess = function() {
                  var db2 = req.result;
                  db2.close();
                  resolve(db2);
                };
              });
              return dropObjectPromise.then(function(db2) {
                dbContext.db = db2;
                for (var j2 = 0; j2 < forages.length; j2++) {
                  var _forage2 = forages[j2];
                  _forage2._dbInfo.db = db2;
                  _advanceReadiness(_forage2._dbInfo);
                }
              })["catch"](function(err) {
                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                });
                throw err;
              });
            });
          }
        }
        executeCallback(promise, callback);
        return promise;
      }
      var asyncStorage = {
        _driver: "asyncStorage",
        _initStorage,
        _support: isIndexedDBValid(),
        iterate,
        getItem,
        setItem,
        removeItem,
        clear,
        length,
        key,
        keys,
        dropInstance
      };
      function isWebSQLValid() {
        return typeof openDatabase === "function";
      }
      var BASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var BLOB_TYPE_PREFIX = "~~local_forage_type~";
      var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
      var SERIALIZED_MARKER = "__lfsc__:";
      var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
      var TYPE_ARRAYBUFFER = "arbf";
      var TYPE_BLOB = "blob";
      var TYPE_INT8ARRAY = "si08";
      var TYPE_UINT8ARRAY = "ui08";
      var TYPE_UINT8CLAMPEDARRAY = "uic8";
      var TYPE_INT16ARRAY = "si16";
      var TYPE_INT32ARRAY = "si32";
      var TYPE_UINT16ARRAY = "ur16";
      var TYPE_UINT32ARRAY = "ui32";
      var TYPE_FLOAT32ARRAY = "fl32";
      var TYPE_FLOAT64ARRAY = "fl64";
      var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
      var toString$1 = Object.prototype.toString;
      function stringToBuffer(serializedString) {
        var bufferLength = serializedString.length * 0.75;
        var len = serializedString.length;
        var i;
        var p2 = 0;
        var encoded1, encoded2, encoded3, encoded4;
        if (serializedString[serializedString.length - 1] === "=") {
          bufferLength--;
          if (serializedString[serializedString.length - 2] === "=") {
            bufferLength--;
          }
        }
        var buffer = new ArrayBuffer(bufferLength);
        var bytes = new Uint8Array(buffer);
        for (i = 0; i < len; i += 4) {
          encoded1 = BASE_CHARS.indexOf(serializedString[i]);
          encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
          encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
          encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);
          bytes[p2++] = encoded1 << 2 | encoded2 >> 4;
          bytes[p2++] = (encoded2 & 15) << 4 | encoded3 >> 2;
          bytes[p2++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return buffer;
      }
      function bufferToString(buffer) {
        var bytes = new Uint8Array(buffer);
        var base64String = "";
        var i;
        for (i = 0; i < bytes.length; i += 3) {
          base64String += BASE_CHARS[bytes[i] >> 2];
          base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
          base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
          base64String += BASE_CHARS[bytes[i + 2] & 63];
        }
        if (bytes.length % 3 === 2) {
          base64String = base64String.substring(0, base64String.length - 1) + "=";
        } else if (bytes.length % 3 === 1) {
          base64String = base64String.substring(0, base64String.length - 2) + "==";
        }
        return base64String;
      }
      function serialize(value, callback) {
        var valueType = "";
        if (value) {
          valueType = toString$1.call(value);
        }
        if (value && (valueType === "[object ArrayBuffer]" || value.buffer && toString$1.call(value.buffer) === "[object ArrayBuffer]")) {
          var buffer;
          var marker = SERIALIZED_MARKER;
          if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
          } else {
            buffer = value.buffer;
            if (valueType === "[object Int8Array]") {
              marker += TYPE_INT8ARRAY;
            } else if (valueType === "[object Uint8Array]") {
              marker += TYPE_UINT8ARRAY;
            } else if (valueType === "[object Uint8ClampedArray]") {
              marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === "[object Int16Array]") {
              marker += TYPE_INT16ARRAY;
            } else if (valueType === "[object Uint16Array]") {
              marker += TYPE_UINT16ARRAY;
            } else if (valueType === "[object Int32Array]") {
              marker += TYPE_INT32ARRAY;
            } else if (valueType === "[object Uint32Array]") {
              marker += TYPE_UINT32ARRAY;
            } else if (valueType === "[object Float32Array]") {
              marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === "[object Float64Array]") {
              marker += TYPE_FLOAT64ARRAY;
            } else {
              callback(new Error("Failed to get type for BinaryArray"));
            }
          }
          callback(marker + bufferToString(buffer));
        } else if (valueType === "[object Blob]") {
          var fileReader = new FileReader();
          fileReader.onload = function() {
            var str = BLOB_TYPE_PREFIX + value.type + "~" + bufferToString(this.result);
            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
          };
          fileReader.readAsArrayBuffer(value);
        } else {
          try {
            callback(JSON.stringify(value));
          } catch (e2) {
            console.error("Couldn't convert value into a JSON string: ", value);
            callback(null, e2);
          }
        }
      }
      function deserialize(value) {
        if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
          return JSON.parse(value);
        }
        var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
        var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
        var blobType;
        if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
          var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
          blobType = matcher[1];
          serializedString = serializedString.substring(matcher[0].length);
        }
        var buffer = stringToBuffer(serializedString);
        switch (type) {
          case TYPE_ARRAYBUFFER:
            return buffer;
          case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
          case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
          case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
          case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
          case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
          case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
          case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
          case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
          case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
          case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
          default:
            throw new Error("Unkown type: " + type);
        }
      }
      var localforageSerializer = {
        serialize,
        deserialize,
        stringToBuffer,
        bufferToString
      };
      function createDbTable(t2, dbInfo, callback, errorCallback) {
        t2.executeSql("CREATE TABLE IF NOT EXISTS " + dbInfo.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], callback, errorCallback);
      }
      function _initStorage$1(options) {
        var self2 = this;
        var dbInfo = {
          db: null
        };
        if (options) {
          for (var i in options) {
            dbInfo[i] = typeof options[i] !== "string" ? options[i].toString() : options[i];
          }
        }
        var dbInfoPromise = new Promise$1(function(resolve, reject) {
          try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
          } catch (e2) {
            return reject(e2);
          }
          dbInfo.db.transaction(function(t2) {
            createDbTable(t2, dbInfo, function() {
              self2._dbInfo = dbInfo;
              resolve();
            }, function(t3, error) {
              reject(error);
            });
          }, reject);
        });
        dbInfo.serializer = localforageSerializer;
        return dbInfoPromise;
      }
      function tryExecuteSql(t2, dbInfo, sqlStatement, args, callback, errorCallback) {
        t2.executeSql(sqlStatement, args, callback, function(t3, error) {
          if (error.code === error.SYNTAX_ERR) {
            t3.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [dbInfo.storeName], function(t4, results) {
              if (!results.rows.length) {
                createDbTable(t4, dbInfo, function() {
                  t4.executeSql(sqlStatement, args, callback, errorCallback);
                }, errorCallback);
              } else {
                errorCallback(t4, error);
              }
            }, errorCallback);
          } else {
            errorCallback(t3, error);
          }
        }, errorCallback);
      }
      function getItem$1(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "SELECT * FROM " + dbInfo.storeName + " WHERE key = ? LIMIT 1", [key2], function(t3, results) {
                var result = results.rows.length ? results.rows.item(0).value : null;
                if (result) {
                  result = dbInfo.serializer.deserialize(result);
                }
                resolve(result);
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate$1(iterator, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "SELECT * FROM " + dbInfo.storeName, [], function(t3, results) {
                var rows = results.rows;
                var length2 = rows.length;
                for (var i = 0; i < length2; i++) {
                  var item = rows.item(i);
                  var result = item.value;
                  if (result) {
                    result = dbInfo.serializer.deserialize(result);
                  }
                  result = iterator(result, item.key, i + 1);
                  if (result !== void 0) {
                    resolve(result);
                    return;
                  }
                }
                resolve();
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function _setItem(key2, value, callback, retriesLeft) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            if (value === void 0) {
              value = null;
            }
            var originalValue = value;
            var dbInfo = self2._dbInfo;
            dbInfo.serializer.serialize(value, function(value2, error) {
              if (error) {
                reject(error);
              } else {
                dbInfo.db.transaction(function(t2) {
                  tryExecuteSql(t2, dbInfo, "INSERT OR REPLACE INTO " + dbInfo.storeName + " (key, value) VALUES (?, ?)", [key2, value2], function() {
                    resolve(originalValue);
                  }, function(t3, error2) {
                    reject(error2);
                  });
                }, function(sqlError) {
                  if (sqlError.code === sqlError.QUOTA_ERR) {
                    if (retriesLeft > 0) {
                      resolve(_setItem.apply(self2, [key2, originalValue, callback, retriesLeft - 1]));
                      return;
                    }
                    reject(sqlError);
                  }
                });
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem$1(key2, value, callback) {
        return _setItem.apply(this, [key2, value, callback, 1]);
      }
      function removeItem$1(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "DELETE FROM " + dbInfo.storeName + " WHERE key = ?", [key2], function() {
                resolve();
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function clear$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "DELETE FROM " + dbInfo.storeName, [], function() {
                resolve();
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "SELECT COUNT(key) as c FROM " + dbInfo.storeName, [], function(t3, results) {
                var result = results.rows.item(0).c;
                resolve(result);
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key$1(n2, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "SELECT key FROM " + dbInfo.storeName + " WHERE id = ? LIMIT 1", [n2 + 1], function(t3, results) {
                var result = results.rows.length ? results.rows.item(0).key : null;
                resolve(result);
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t2) {
              tryExecuteSql(t2, dbInfo, "SELECT key FROM " + dbInfo.storeName, [], function(t3, results) {
                var keys2 = [];
                for (var i = 0; i < results.rows.length; i++) {
                  keys2.push(results.rows.item(i).key);
                }
                resolve(keys2);
              }, function(t3, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function getAllStoreNames(db) {
        return new Promise$1(function(resolve, reject) {
          db.transaction(function(t2) {
            t2.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t3, results) {
              var storeNames = [];
              for (var i = 0; i < results.rows.length; i++) {
                storeNames.push(results.rows.item(i).name);
              }
              resolve({
                db,
                storeNames
              });
            }, function(t3, error) {
              reject(error);
            });
          }, function(sqlError) {
            reject(sqlError);
          });
        });
      }
      function dropInstance$1(options, callback) {
        callback = getCallback.apply(this, arguments);
        var currentConfig = this.config();
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          promise = new Promise$1(function(resolve) {
            var db;
            if (options.name === currentConfig.name) {
              db = self2._dbInfo.db;
            } else {
              db = openDatabase(options.name, "", "", 0);
            }
            if (!options.storeName) {
              resolve(getAllStoreNames(db));
            } else {
              resolve({
                db,
                storeNames: [options.storeName]
              });
            }
          }).then(function(operationInfo) {
            return new Promise$1(function(resolve, reject) {
              operationInfo.db.transaction(function(t2) {
                function dropTable(storeName) {
                  return new Promise$1(function(resolve2, reject2) {
                    t2.executeSql("DROP TABLE IF EXISTS " + storeName, [], function() {
                      resolve2();
                    }, function(t3, error) {
                      reject2(error);
                    });
                  });
                }
                var operations = [];
                for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                  operations.push(dropTable(operationInfo.storeNames[i]));
                }
                Promise$1.all(operations).then(function() {
                  resolve();
                })["catch"](function(e2) {
                  reject(e2);
                });
              }, function(sqlError) {
                reject(sqlError);
              });
            });
          });
        }
        executeCallback(promise, callback);
        return promise;
      }
      var webSQLStorage = {
        _driver: "webSQLStorage",
        _initStorage: _initStorage$1,
        _support: isWebSQLValid(),
        iterate: iterate$1,
        getItem: getItem$1,
        setItem: setItem$1,
        removeItem: removeItem$1,
        clear: clear$1,
        length: length$1,
        key: key$1,
        keys: keys$1,
        dropInstance: dropInstance$1
      };
      function isLocalStorageValid() {
        try {
          return typeof localStorage !== "undefined" && "setItem" in localStorage && !!localStorage.setItem;
        } catch (e2) {
          return false;
        }
      }
      function _getKeyPrefix(options, defaultConfig) {
        var keyPrefix = options.name + "/";
        if (options.storeName !== defaultConfig.storeName) {
          keyPrefix += options.storeName + "/";
        }
        return keyPrefix;
      }
      function checkIfLocalStorageThrows() {
        var localStorageTestKey = "_localforage_support_test";
        try {
          localStorage.setItem(localStorageTestKey, true);
          localStorage.removeItem(localStorageTestKey);
          return false;
        } catch (e2) {
          return true;
        }
      }
      function _isLocalStorageUsable() {
        return !checkIfLocalStorageThrows() || localStorage.length > 0;
      }
      function _initStorage$2(options) {
        var self2 = this;
        var dbInfo = {};
        if (options) {
          for (var i in options) {
            dbInfo[i] = options[i];
          }
        }
        dbInfo.keyPrefix = _getKeyPrefix(options, self2._defaultConfig);
        if (!_isLocalStorageUsable()) {
          return Promise$1.reject();
        }
        self2._dbInfo = dbInfo;
        dbInfo.serializer = localforageSerializer;
        return Promise$1.resolve();
      }
      function clear$2(callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var keyPrefix = self2._dbInfo.keyPrefix;
          for (var i = localStorage.length - 1; i >= 0; i--) {
            var key2 = localStorage.key(i);
            if (key2.indexOf(keyPrefix) === 0) {
              localStorage.removeItem(key2);
            }
          }
        });
        executeCallback(promise, callback);
        return promise;
      }
      function getItem$2(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var result = localStorage.getItem(dbInfo.keyPrefix + key2);
          if (result) {
            result = dbInfo.serializer.deserialize(result);
          }
          return result;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate$2(iterator, callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var keyPrefix = dbInfo.keyPrefix;
          var keyPrefixLength = keyPrefix.length;
          var length2 = localStorage.length;
          var iterationNumber = 1;
          for (var i = 0; i < length2; i++) {
            var key2 = localStorage.key(i);
            if (key2.indexOf(keyPrefix) !== 0) {
              continue;
            }
            var value = localStorage.getItem(key2);
            if (value) {
              value = dbInfo.serializer.deserialize(value);
            }
            value = iterator(value, key2.substring(keyPrefixLength), iterationNumber++);
            if (value !== void 0) {
              return value;
            }
          }
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key$2(n2, callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var result;
          try {
            result = localStorage.key(n2);
          } catch (error) {
            result = null;
          }
          if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
          }
          return result;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys$2(callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var length2 = localStorage.length;
          var keys2 = [];
          for (var i = 0; i < length2; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
              keys2.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
          }
          return keys2;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length$2(callback) {
        var self2 = this;
        var promise = self2.keys().then(function(keys2) {
          return keys2.length;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function removeItem$2(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          localStorage.removeItem(dbInfo.keyPrefix + key2);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem$2(key2, value, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          if (value === void 0) {
            value = null;
          }
          var originalValue = value;
          return new Promise$1(function(resolve, reject) {
            var dbInfo = self2._dbInfo;
            dbInfo.serializer.serialize(value, function(value2, error) {
              if (error) {
                reject(error);
              } else {
                try {
                  localStorage.setItem(dbInfo.keyPrefix + key2, value2);
                  resolve(originalValue);
                } catch (e2) {
                  if (e2.name === "QuotaExceededError" || e2.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                    reject(e2);
                  }
                  reject(e2);
                }
              }
            });
          });
        });
        executeCallback(promise, callback);
        return promise;
      }
      function dropInstance$2(options, callback) {
        callback = getCallback.apply(this, arguments);
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          var currentConfig = this.config();
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          promise = new Promise$1(function(resolve) {
            if (!options.storeName) {
              resolve(options.name + "/");
            } else {
              resolve(_getKeyPrefix(options, self2._defaultConfig));
            }
          }).then(function(keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
              var key2 = localStorage.key(i);
              if (key2.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key2);
              }
            }
          });
        }
        executeCallback(promise, callback);
        return promise;
      }
      var localStorageWrapper = {
        _driver: "localStorageWrapper",
        _initStorage: _initStorage$2,
        _support: isLocalStorageValid(),
        iterate: iterate$2,
        getItem: getItem$2,
        setItem: setItem$2,
        removeItem: removeItem$2,
        clear: clear$2,
        length: length$2,
        key: key$2,
        keys: keys$2,
        dropInstance: dropInstance$2
      };
      var sameValue = function sameValue2(x2, y2) {
        return x2 === y2 || typeof x2 === "number" && typeof y2 === "number" && isNaN(x2) && isNaN(y2);
      };
      var includes2 = function includes3(array, searchElement) {
        var len = array.length;
        var i = 0;
        while (i < len) {
          if (sameValue(array[i], searchElement)) {
            return true;
          }
          i++;
        }
        return false;
      };
      var isArray = Array.isArray || function(arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
      };
      var DefinedDrivers = {};
      var DriverSupport = {};
      var DefaultDrivers = {
        INDEXEDDB: asyncStorage,
        WEBSQL: webSQLStorage,
        LOCALSTORAGE: localStorageWrapper
      };
      var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];
      var OptionalDriverMethods = ["dropInstance"];
      var LibraryMethods = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(OptionalDriverMethods);
      var DefaultConfig = {
        description: "",
        driver: DefaultDriverOrder.slice(),
        name: "localforage",
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function callWhenReady(localForageInstance, libraryMethod) {
        localForageInstance[libraryMethod] = function() {
          var _args = arguments;
          return localForageInstance.ready().then(function() {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
          });
        };
      }
      function extend() {
        for (var i = 1; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            for (var _key in arg) {
              if (arg.hasOwnProperty(_key)) {
                if (isArray(arg[_key])) {
                  arguments[0][_key] = arg[_key].slice();
                } else {
                  arguments[0][_key] = arg[_key];
                }
              }
            }
          }
        }
        return arguments[0];
      }
      var LocalForage = function() {
        function LocalForage2(options) {
          _classCallCheck(this, LocalForage2);
          for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
              var driver = DefaultDrivers[driverTypeKey];
              var driverName = driver._driver;
              this[driverTypeKey] = driverName;
              if (!DefinedDrivers[driverName]) {
                this.defineDriver(driver);
              }
            }
          }
          this._defaultConfig = extend({}, DefaultConfig);
          this._config = extend({}, this._defaultConfig, options);
          this._driverSet = null;
          this._initDriver = null;
          this._ready = false;
          this._dbInfo = null;
          this._wrapLibraryMethodsWithReady();
          this.setDriver(this._config.driver)["catch"](function() {
          });
        }
        LocalForage2.prototype.config = function config(options) {
          if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
            if (this._ready) {
              return new Error("Can't call config() after localforage has been used.");
            }
            for (var i in options) {
              if (i === "storeName") {
                options[i] = options[i].replace(/\W/g, "_");
              }
              if (i === "version" && typeof options[i] !== "number") {
                return new Error("Database version must be a number.");
              }
              this._config[i] = options[i];
            }
            if ("driver" in options && options.driver) {
              return this.setDriver(this._config.driver);
            }
            return true;
          } else if (typeof options === "string") {
            return this._config[options];
          } else {
            return this._config;
          }
        };
        LocalForage2.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
          var promise = new Promise$1(function(resolve, reject) {
            try {
              var driverName = driverObject._driver;
              var complianceError = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!driverObject._driver) {
                reject(complianceError);
                return;
              }
              var driverMethods = LibraryMethods.concat("_initStorage");
              for (var i = 0, len = driverMethods.length; i < len; i++) {
                var driverMethodName = driverMethods[i];
                var isRequired = !includes2(OptionalDriverMethods, driverMethodName);
                if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== "function") {
                  reject(complianceError);
                  return;
                }
              }
              var configureMissingMethods = function configureMissingMethods2() {
                var methodNotImplementedFactory = function methodNotImplementedFactory2(methodName) {
                  return function() {
                    var error = new Error("Method " + methodName + " is not implemented by the current driver");
                    var promise2 = Promise$1.reject(error);
                    executeCallback(promise2, arguments[arguments.length - 1]);
                    return promise2;
                  };
                };
                for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                  var optionalDriverMethod = OptionalDriverMethods[_i];
                  if (!driverObject[optionalDriverMethod]) {
                    driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                  }
                }
              };
              configureMissingMethods();
              var setDriverSupport = function setDriverSupport2(support) {
                if (DefinedDrivers[driverName]) {
                  console.info("Redefining LocalForage driver: " + driverName);
                }
                DefinedDrivers[driverName] = driverObject;
                DriverSupport[driverName] = support;
                resolve();
              };
              if ("_support" in driverObject) {
                if (driverObject._support && typeof driverObject._support === "function") {
                  driverObject._support().then(setDriverSupport, reject);
                } else {
                  setDriverSupport(!!driverObject._support);
                }
              } else {
                setDriverSupport(true);
              }
            } catch (e2) {
              reject(e2);
            }
          });
          executeTwoCallbacks(promise, callback, errorCallback);
          return promise;
        };
        LocalForage2.prototype.driver = function driver() {
          return this._driver || null;
        };
        LocalForage2.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
          var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error("Driver not found."));
          executeTwoCallbacks(getDriverPromise, callback, errorCallback);
          return getDriverPromise;
        };
        LocalForage2.prototype.getSerializer = function getSerializer(callback) {
          var serializerPromise = Promise$1.resolve(localforageSerializer);
          executeTwoCallbacks(serializerPromise, callback);
          return serializerPromise;
        };
        LocalForage2.prototype.ready = function ready(callback) {
          var self2 = this;
          var promise = self2._driverSet.then(function() {
            if (self2._ready === null) {
              self2._ready = self2._initDriver();
            }
            return self2._ready;
          });
          executeTwoCallbacks(promise, callback, callback);
          return promise;
        };
        LocalForage2.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
          var self2 = this;
          if (!isArray(drivers)) {
            drivers = [drivers];
          }
          var supportedDrivers = this._getSupportedDrivers(drivers);
          function setDriverToConfig() {
            self2._config.driver = self2.driver();
          }
          function extendSelfWithDriver(driver) {
            self2._extend(driver);
            setDriverToConfig();
            self2._ready = self2._initStorage(self2._config);
            return self2._ready;
          }
          function initDriver(supportedDrivers2) {
            return function() {
              var currentDriverIndex = 0;
              function driverPromiseLoop() {
                while (currentDriverIndex < supportedDrivers2.length) {
                  var driverName = supportedDrivers2[currentDriverIndex];
                  currentDriverIndex++;
                  self2._dbInfo = null;
                  self2._ready = null;
                  return self2.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                }
                setDriverToConfig();
                var error = new Error("No available storage method found.");
                self2._driverSet = Promise$1.reject(error);
                return self2._driverSet;
              }
              return driverPromiseLoop();
            };
          }
          var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function() {
            return Promise$1.resolve();
          }) : Promise$1.resolve();
          this._driverSet = oldDriverSetDone.then(function() {
            var driverName = supportedDrivers[0];
            self2._dbInfo = null;
            self2._ready = null;
            return self2.getDriver(driverName).then(function(driver) {
              self2._driver = driver._driver;
              setDriverToConfig();
              self2._wrapLibraryMethodsWithReady();
              self2._initDriver = initDriver(supportedDrivers);
            });
          })["catch"](function() {
            setDriverToConfig();
            var error = new Error("No available storage method found.");
            self2._driverSet = Promise$1.reject(error);
            return self2._driverSet;
          });
          executeTwoCallbacks(this._driverSet, callback, errorCallback);
          return this._driverSet;
        };
        LocalForage2.prototype.supports = function supports(driverName) {
          return !!DriverSupport[driverName];
        };
        LocalForage2.prototype._extend = function _extend(libraryMethodsAndProperties) {
          extend(this, libraryMethodsAndProperties);
        };
        LocalForage2.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
          var supportedDrivers = [];
          for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
              supportedDrivers.push(driverName);
            }
          }
          return supportedDrivers;
        };
        LocalForage2.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
          for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
          }
        };
        LocalForage2.prototype.createInstance = function createInstance(options) {
          return new LocalForage2(options);
        };
        return LocalForage2;
      }();
      var localforage_js = new LocalForage();
      module2.exports = localforage_js;
    }, { "3": 3 }] }, {}, [4])(4);
  });
})(localforage);
var e = localforage.exports;
/*!
* @houlagins/locale 1.0.0
* 
* Locale resolving service 
*
* @link https://github.com/randyhoulahan/locale/tree/master#readme
* @source git+https://github.com/randyhoulahan/locale.git
* @copyright (c) 2020 Randy Houlahan
* @license MIT
* 
*/
const unLocales = ["ar", "en", "es", "fr", "ru", "zh"];
const html5Locale = () => {
  if (typeof window === "undefined")
    return "";
  const htmlEl = document.querySelector("html");
  if (!htmlEl)
    return "";
  return htmlEl.getAttribute("lang") || "";
};
const legacyHtmlLocale = () => {
  if (typeof window === "undefined" || typeof document === "undefined")
    return "";
  const metaEl = document.querySelector("meta[http-equiv=content-language]");
  if (!metaEl)
    return "";
  return metaEl.getAttribute("content") || "";
};
const legacyBrowserLocale = () => {
  if (typeof navigator === "undefined")
    return "";
  return navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.userLanguage || navigator.language || navigator.browserLanguage || "";
};
const browserLocale = () => {
  if (typeof Intl === "undefined")
    return "";
  return new Intl.NumberFormat() ? new Intl.NumberFormat().resolvedOptions().locale : "";
};
const get = () => {
  const locale2 = html5Locale() || legacyHtmlLocale() || legacyBrowserLocale() || browserLocale();
  return locale2 ? locale2.toLowerCase().slice(0, 2) : "en";
};
const getUN = () => {
  const locale2 = get();
  for (const lang of unLocales)
    if (locale2.includes(lang))
      return lang;
  return "en";
};
const getUnLocale = getUN;
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp2.call(b2, prop))
      __defNormalProp2(a2, prop, b2[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b2)) {
      if (__propIsEnum2.call(b2, prop))
        __defNormalProp2(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps2 = (a2, b2) => __defProps2(a2, __getOwnPropDescs2(b2));
var a = { messages: { en: { Other: "Other", Draft: "Draft", Published: "Published", Rejected: "Rejected", Deleted: "Deleted", "Document States": "Document States", "Action Categories": "Action Categories", "Organization Types": "Organization Types", "Governments Types": "Governments Types", "Aichi Targets": "Aichi Targets", SDGs: "SDGs", Jurisdictions: "Jurisdictions", Subjects: "Subjects", Countries: "Countries", Regions: "Regions", "Access to benefit-sharing": "Access to benefit-sharing", "1. No Poverty": "1. No Poverty", "2. Zero Hunger": "2. Zero Hunger", "3. Good Health and Well-being": "3. Good Health and Well-being", "4. Quality Education": "4. Quality Education", "5. Gender Equality": "5. Gender Equality", "6. Clean Water and Sanitation": "6. Clean Water and Sanitation", "7. Affordable and Clean Energy": "7. Affordable and Clean Energy", "8. Decent Work and Economic Growth": "Decent Work and Economic Growth", "9. Industry, Innovation and Infrastructure": "9. Industry, Innovation and Infrastructure", "10. Reduced Inequality": "10. Reduced Inequality", "11. Sustainable Cities and Communities": "11. Sustainable Cities and Communities", "12. Responsible Consumption and Production": "12. Responsible Consumption and Production", "13. Climate Action": "13. Climate Action", "14. Life Below Water": "14. Life Below Water", "15. Life on Land": "15. Life on Land", "16. Peace and Justice Strong Institutions": "16. Peace and Justice Strong Institutions", "17. Partnerships to achieve the Goal": "17. Partnerships to achieve the Goal", "Food systems and health": "Food systems and health", "Food and health": "Food and health", "Freshwater, coastal and ocean ecosystems": "Freshwater, coastal and ocean ecosystems", "Freshwater, coastal and ocean": "Freshwater, coastal and ocean", "Conservation and restoration of land ecosystems": "Conservation and restoration of land ecosystems", "Land ecosystems": "Land ecosystems", "Climate change mitigation and adaptation": "Climate change mitigation and adaptation", "Climate mitigation and adaptation": "Climate mitigation and adaptation", "Conservation and sustainable use of species": "Conservation and sustainable use of species", Species: "Species", "Sustainable consumption and production": "Sustainable consumption and production", Stewardship: "Stewardship", "Urban sustainability": "Urban sustainability", "Green finance": "Green finance", ABS: "ABS", Biosafety: "Biosafety", "End poverty in all its forms everywhere": "End poverty in all its forms everywhere", "End hunger, achieve food security and improved nutrition and promote sustainable agriculture": "End hunger, achieve food security and improved nutrition and promote sustainable agriculture", "Ensure healthy lives and promote well-being for all at all ages": "Ensure healthy lives and promote well-being for all at all ages", "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all": "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all", "Achieve gender equality and empower all women and girls": "Achieve gender equality and empower all women and girls", "Ensure availability and sustainable management of water and sanitation for all": "Ensure availability and sustainable management of water and sanitation for all", "Ensure access to affordable, reliable, sustainable and modern energy for all": "Ensure access to affordable, reliable, sustainable and modern energy for all", "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all": "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all", "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation": "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation", "Reduce inequality within and among countries": "Reduce inequality within and among countries", "Make cities and human settlements inclusive, safe, resilient and sustainable": "Make cities and human settlements inclusive, safe, resilient and sustainable", "Ensure sustainable consumption and production patterns": "Ensure sustainable consumption and production patterns", "Take urgent action to combat climate change and its impacts": "Take urgent action to combat climate change and its impacts", "Conserve and sustainably use the oceans, seas and marine resources for sustainable development": "Conserve and sustainably use the oceans, seas and marine resources for sustainable development", "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss": "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss", "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels": "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels", "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development": "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development" }, ar: { "1. No Poverty": "1. \u0644\u0627 \u0644\u0644\u0641\u0642\u0631", "2. Zero Hunger": "2. \u0627\u0644\u0642\u0636\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u062C\u0648\u0639", "3. Good Health and Well-being": "3. \u0635\u062D\u0629 \u062C\u064A\u062F\u0629 \u0648\u0631\u0641\u0627\u0647\u064A\u0629", "4. Quality Education": "4. \u062C\u0648\u062F\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645", "5. Gender Equality": "5. \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629 \u0628\u064A\u0646 \u0627\u0644\u062C\u0646\u0633\u064A\u0646", "6. Clean Water and Sanitation": "6. \u0627\u0644\u0645\u064A\u0627\u0647 \u0627\u0644\u0646\u0638\u064A\u0641\u0629 \u0648\u0627\u0644\u0635\u0631\u0641 \u0627\u0644\u0635\u062D\u064A", "7. Affordable and Clean Energy": "7. \u0637\u0627\u0642\u0629 \u0646\u0638\u064A\u0641\u0629 \u0648\u0628\u0623\u0633\u0639\u0627\u0631 \u0645\u0639\u0642\u0648\u0644\u0629", "8. Decent Work and Economic Growth": "\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0644\u0627\u0626\u0642 \u0648\u0627\u0644\u0646\u0645\u0648 \u0627\u0644\u0627\u0642\u062A\u0635\u0627\u062F\u064A", "9. Industry, Innovation and Infrastructure": "9. \u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0648\u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0648\u0627\u0644\u0628\u0646\u064A\u0629 \u0627\u0644\u062A\u062D\u062A\u064A\u0629", "10. Reduced Inequality": "10. \u0627\u0644\u062D\u062F \u0645\u0646 \u0639\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629", "11. Sustainable Cities and Communities": "11. \u0627\u0644\u0645\u062F\u0646 \u0648\u0627\u0644\u0645\u062C\u062A\u0645\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645\u0629", "12. Responsible Consumption and Production": "12. \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643 \u0648\u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u0627\u0646", "13. Climate Action": "13. \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u0646\u0627\u062E\u064A", "14. Life Below Water": "14. \u0627\u0644\u062D\u064A\u0627\u0629 \u062A\u062D\u062A \u0627\u0644\u0645\u0627\u0621", "15. Life on Land": "15. \u0627\u0644\u062D\u064A\u0627\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636", "16. Peace and Justice Strong Institutions": "16. \u0645\u0624\u0633\u0633\u0627\u062A \u0627\u0644\u0633\u0644\u0627\u0645 \u0648\u0627\u0644\u0639\u062F\u0644 \u0627\u0644\u0642\u0648\u064A\u0629", "17. Partnerships to achieve the Goal": "17. \u0634\u0631\u0627\u0643\u0627\u062A \u0644\u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u0647\u062F\u0641", "Food systems and health": "\u0646\u0638\u0645 \u0627\u0644\u063A\u0630\u0627\u0621 \u0648\u0627\u0644\u0635\u062D\u0629", "Food and health": "\u0627\u0644\u063A\u0630\u0627\u0621 \u0648\u0627\u0644\u0635\u062D\u0629", "Freshwater, coastal and ocean ecosystems": "\u0627\u0644\u0646\u0638\u0645 \u0627\u0644\u0628\u064A\u0626\u064A\u0629 \u0644\u0644\u0645\u064A\u0627\u0647 \u0627\u0644\u0639\u0630\u0628\u0629 \u0648\u0627\u0644\u0633\u0627\u062D\u0644\u064A\u0629 \u0648\u0627\u0644\u0645\u062D\u064A\u0637\u0627\u062A", "Freshwater, coastal and ocean": "\u0627\u0644\u0645\u064A\u0627\u0647 \u0627\u0644\u0639\u0630\u0628\u0629 \u0648\u0627\u0644\u0633\u0627\u062D\u0644\u064A\u0629 \u0648\u0627\u0644\u0645\u062D\u064A\u0637\u0627\u062A", "Conservation and restoration of land ecosystems": "\u062D\u0641\u0638 \u0648\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0646\u0638\u0645 \u0627\u0644\u0628\u064A\u0626\u064A\u0629 \u0644\u0644\u0623\u0631\u0636", "Land ecosystems": "\u0627\u0644\u0646\u0638\u0645 \u0627\u0644\u0628\u064A\u0626\u064A\u0629 \u0644\u0644\u0623\u0631\u0636", "Climate change mitigation and adaptation": "\u0627\u0644\u062A\u062E\u0641\u064A\u0641 \u0645\u0646 \u062A\u063A\u064A\u0631 \u0627\u0644\u0645\u0646\u0627\u062E \u0648\u0627\u0644\u062A\u0643\u064A\u0641 \u0645\u0639\u0647", "Climate mitigation and adaptation": "\u0627\u0644\u062A\u062E\u0641\u064A\u0641 \u0645\u0646 \u062D\u062F\u0629 \u0627\u0644\u0645\u0646\u0627\u062E \u0648\u0627\u0644\u062A\u0643\u064A\u0641 \u0645\u0639\u0647", "Conservation and sustainable use of species": "\u0627\u0644\u062D\u0641\u0638 \u0648\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645 \u0644\u0644\u0623\u0646\u0648\u0627\u0639", Species: "\u0635\u0646\u0641", "Sustainable consumption and production": "\u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643 \u0648\u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645\u0627\u0646", Stewardship: "\u0627\u0644\u0648\u0643\u0627\u0644\u0629", "Urban sustainability": "\u0627\u0644\u0627\u0633\u062A\u062F\u0627\u0645\u0629 \u0627\u0644\u062D\u0636\u0631\u064A\u0629", "Green finance": "\u0627\u0644\u062A\u0645\u0648\u064A\u0644 \u0627\u0644\u0623\u062E\u0636\u0631", "Access to Benefit Sharing": "\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u062A\u0642\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u0627\u0641\u0639", ABS: "\u0627\u0644\u0642\u0637\u0627\u0639 \u0627\u0644\u062B\u0627\u0645\u0646", Biosafety: "\u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u062D\u064A\u0648\u064A\u0629", "End poverty in all its forms everywhere": "\u0627\u0644\u0642\u0636\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u0641\u0642\u0631 \u0628\u062C\u0645\u064A\u0639 \u0623\u0634\u0643\u0627\u0644\u0647 \u0641\u064A \u0643\u0644 \u0645\u0643\u0627\u0646", "End hunger, achieve food security and improved nutrition and promote sustainable agriculture": "\u0627\u0644\u0642\u0636\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u062C\u0648\u0639 \u0648\u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u063A\u0630\u0627\u0626\u064A \u0648\u0627\u0644\u062A\u063A\u0630\u064A\u0629 \u0627\u0644\u0645\u062D\u0633\u0646\u0629 \u0648\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u0632\u0631\u0627\u0639\u0629 \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645\u0629", "Ensure healthy lives and promote well-being for all at all ages": "\u0636\u0645\u0627\u0646 \u062D\u064A\u0627\u0629 \u0635\u062D\u064A\u0629 \u0648\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u0631\u0641\u0627\u0647\u064A\u0629 \u0644\u0644\u062C\u0645\u064A\u0639 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0631", "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all": "\u0636\u0645\u0627\u0646 \u062A\u0639\u0644\u064A\u0645 \u062C\u064A\u062F \u0648\u0639\u0627\u062F\u0644 \u0648\u0634\u0627\u0645\u0644 \u0648\u062A\u0639\u0632\u064A\u0632 \u0641\u0631\u0635 \u0627\u0644\u062A\u0639\u0644\u0645 \u0645\u062F\u0649 \u0627\u0644\u062D\u064A\u0627\u0629 \u0644\u0644\u062C\u0645\u064A\u0639", "Achieve gender equality and empower all women and girls": "\u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629 \u0628\u064A\u0646 \u0627\u0644\u062C\u0646\u0633\u064A\u0646 \u0648\u062A\u0645\u0643\u064A\u0646 \u0643\u0644 \u0627\u0644\u0646\u0633\u0627\u0621 \u0648\u0627\u0644\u0641\u062A\u064A\u0627\u062A", "Ensure availability and sustainable management of water and sanitation for all": "\u0636\u0645\u0627\u0646 \u0627\u0644\u062A\u0648\u0627\u0641\u0631 \u0648\u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645\u0629 \u0644\u0644\u0645\u064A\u0627\u0647 \u0648\u0627\u0644\u0635\u0631\u0641 \u0627\u0644\u0635\u062D\u064A \u0644\u0644\u062C\u0645\u064A\u0639", "Ensure access to affordable, reliable, sustainable and modern energy for all": "\u0636\u0645\u0627\u0646 \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0637\u0627\u0642\u0629 \u062D\u062F\u064A\u062B\u0629 \u0648\u0645\u0648\u062B\u0648\u0642\u0629 \u0648\u0645\u0633\u062A\u062F\u0627\u0645\u0629 \u0648\u0628\u0623\u0633\u0639\u0627\u0631 \u0645\u0639\u0642\u0648\u0644\u0629 \u0644\u0644\u062C\u0645\u064A\u0639", "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all": "\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u0646\u0645\u0648 \u0627\u0644\u0627\u0642\u062A\u0635\u0627\u062F\u064A \u0627\u0644\u0645\u0637\u0631\u062F \u0648\u0627\u0644\u0634\u0627\u0645\u0644 \u0648\u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645 \u0648\u0627\u0644\u0639\u0645\u0627\u0644\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0648\u0627\u0644\u0645\u0646\u062A\u062C\u0629 \u0648\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0644\u0627\u0626\u0642 \u0644\u0644\u062C\u0645\u064A\u0639", "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation": "\u0628\u0646\u0627\u0621 \u0628\u0646\u064A\u0629 \u062A\u062D\u062A\u064A\u0629 \u0645\u0631\u0646\u0629 \u060C \u0648\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u062A\u0635\u0646\u064A\u0639 \u0627\u0644\u0634\u0627\u0645\u0644 \u0648\u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645 \u060C \u0648\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631", "Reduce inequality within and among countries": "\u0627\u0644\u062D\u062F \u0645\u0646 \u0639\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0648\u0627\u0629 \u062F\u0627\u062E\u0644 \u0627\u0644\u0628\u0644\u062F\u0627\u0646 \u0648\u0641\u064A\u0645\u0627 \u0628\u064A\u0646\u0647\u0627", "Make cities and human settlements inclusive, safe, resilient and sustainable": "\u062C\u0639\u0644 \u0627\u0644\u0645\u062F\u0646 \u0648\u0627\u0644\u0645\u0633\u062A\u0648\u0637\u0646\u0627\u062A \u0627\u0644\u0628\u0634\u0631\u064A\u0629 \u0634\u0627\u0645\u0644\u0629 \u0648\u0622\u0645\u0646\u0629 \u0648\u0645\u0631\u0646\u0629 \u0648\u0645\u0633\u062A\u062F\u0627\u0645\u0629", "Ensure sustainable consumption and production patterns": "\u0636\u0645\u0627\u0646 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643 \u0648\u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645\u0629", "Take urgent action to combat climate change and its impacts": "\u0627\u062A\u062E\u0627\u0630 \u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0639\u0627\u062C\u0644\u0629 \u0644\u0644\u062A\u0635\u062F\u064A \u0644\u062A\u063A\u064A\u0631 \u0627\u0644\u0645\u0646\u0627\u062E \u0648\u0622\u062B\u0627\u0631\u0647", "Conserve and sustainably use the oceans, seas and marine resources for sustainable development": "\u062D\u0641\u0638 \u0627\u0644\u0645\u062D\u064A\u0637\u0627\u062A \u0648\u0627\u0644\u0628\u062D\u0627\u0631 \u0648\u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u062D\u0631\u064A\u0629 \u0648\u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627 \u0639\u0644\u0649 \u0646\u062D\u0648 \u0645\u0633\u062A\u062F\u0627\u0645 \u0644\u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645\u0629", "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss": "\u062D\u0645\u0627\u064A\u0629 \u0648\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0648\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645 \u0644\u0644\u0646\u0638\u0645 \u0627\u0644\u0625\u064A\u0643\u0648\u0644\u0648\u062C\u064A\u0629 \u0627\u0644\u0623\u0631\u0636\u064A\u0629 \u060C \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u063A\u0627\u0628\u0627\u062A \u0639\u0644\u0649 \u0646\u062D\u0648 \u0645\u0633\u062A\u062F\u0627\u0645 \u060C \u0648\u0645\u0643\u0627\u0641\u062D\u0629 \u0627\u0644\u062A\u0635\u062D\u0631 \u060C \u0648\u0648\u0642\u0641 \u062A\u062F\u0647\u0648\u0631 \u0627\u0644\u0623\u0631\u0627\u0636\u064A \u0648\u0639\u0643\u0633 \u0645\u0633\u0627\u0631\u0647 \u0648\u0648\u0642\u0641 \u0641\u0642\u062F\u0627\u0646 \u0627\u0644\u062A\u0646\u0648\u0639 \u0627\u0644\u0628\u064A\u0648\u0644\u0648\u062C\u064A", "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels": "\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u0645\u062C\u062A\u0645\u0639\u0627\u062A \u0627\u0644\u0633\u0644\u0645\u064A\u0629 \u0648\u0627\u0644\u0634\u0627\u0645\u0644\u0629 \u0644\u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645\u0629 \u060C \u0648\u062A\u0648\u0641\u064A\u0631 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0639\u062F\u0627\u0644\u0629 \u0644\u0644\u062C\u0645\u064A\u0639 \u0648\u0628\u0646\u0627\u0621 \u0645\u0624\u0633\u0633\u0627\u062A \u0641\u0639\u0627\u0644\u0629 \u0648\u062E\u0627\u0636\u0639\u0629 \u0644\u0644\u0645\u0633\u0627\u0621\u0644\u0629 \u0648\u0634\u0627\u0645\u0644\u0629 \u0639\u0644\u0649 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0633\u062A\u0648\u064A\u0627\u062A", "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development": "\u062A\u0639\u0632\u064A\u0632 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0646\u0641\u064A\u0630 \u0648\u062A\u0646\u0634\u064A\u0637 \u0627\u0644\u0634\u0631\u0627\u0643\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0645\u0646 \u0623\u062C\u0644 \u0627\u0644\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645\u0629", "Document States": "\u0648\u062B\u064A\u0642\u0629 \u0627\u0644\u062F\u0648\u0644", "Action Categories": "\u0641\u0626\u0627\u062A \u0627\u0644\u0639\u0645\u0644", "Organization Types": "\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0646\u0638\u0645\u0627\u062A", "Governments Types": "\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u062D\u0643\u0648\u0645\u0627\u062A", "Aichi Targets": "\u0623\u0647\u062F\u0627\u0641 \u0623\u064A\u0634\u064A", SDGs: "\u0623\u0647\u062F\u0627\u0641 \u0627\u0644\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645\u0629", Jurisdictions: "\u0627\u0644\u0633\u0644\u0637\u0627\u062A \u0627\u0644\u0642\u0636\u0627\u0626\u064A\u0629", Subjects: "\u0627\u0644\u0645\u0648\u0627\u0636\u064A\u0639", Countries: "\u0627\u0644\u062F\u0648\u0644", Regions: "\u0627\u0644\u0645\u0646\u0627\u0637\u0642", Draft: "\u0645\u0633\u0648\u062F\u0629", Published: "\u0646\u0634\u0631\u062A", Rejected: "\u0645\u0631\u0641\u0648\u0636", Deleted: "\u062A\u0645 \u0627\u0644\u062D\u0630\u0641", "Access to benefit-sharing": "\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u062A\u0642\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u0627\u0641\u0639", Other: "\u0622\u062E\u0631" }, es: { "1. No Poverty": "1. Sin pobreza", "2. Zero Hunger": "2. Hambre cero", "3. Good Health and Well-being": "3. Buena salud y bienestar", "4. Quality Education": "4. Educaci\xF3n de calidad", "5. Gender Equality": "5. Igualdad de g\xE9nero", "6. Clean Water and Sanitation": "6. Agua limpia y saneamiento", "7. Affordable and Clean Energy": "7. Energ\xEDa limpia y asequible", "8. Decent Work and Economic Growth": "Trabajo decente y crecimiento econ\xF3mico", "9. Industry, Innovation and Infrastructure": "9. Industria, innovaci\xF3n e infraestructura", "10. Reduced Inequality": "10. Reducci\xF3n de la desigualdad", "11. Sustainable Cities and Communities": "11. Ciudades y comunidades sostenibles", "12. Responsible Consumption and Production": "12. Producci\xF3n y consumo responsables", "13. Climate Action": "13. Acci\xF3n clim\xE1tica", "14. Life Below Water": "14. Vida submarina", "15. Life on Land": "15. Vida en la tierra", "16. Peace and Justice Strong Institutions": "16. Instituciones s\xF3lidas de paz y justicia", "17. Partnerships to achieve the Goal": "17. Alianzas para lograr el Objetivo", "Food systems and health": "Sistemas alimentarios y salud", "Food and health": "Comida y salud", "Freshwater, coastal and ocean ecosystems": "Ecosistemas de agua dulce, costeros y oce\xE1nicos", "Freshwater, coastal and ocean": "Agua dulce, costera y oce\xE1nica", "Conservation and restoration of land ecosystems": "Conservaci\xF3n y restauraci\xF3n de ecosistemas terrestres", "Land ecosystems": "Ecosistemas terrestres", "Climate change mitigation and adaptation": "Mitigaci\xF3n y adaptaci\xF3n al cambio clim\xE1tico", "Climate mitigation and adaptation": "Mitigaci\xF3n y adaptaci\xF3n clim\xE1tica", "Conservation and sustainable use of species": "Conservaci\xF3n y uso sostenible de especies", Species: "Especies", "Sustainable consumption and production": "Producci\xF3n y consumo sostenibles", Stewardship: "Administraci\xF3n", "Urban sustainability": "Sostenibilidad urbana", "Green finance": "Finanzas verdes", "Access to Benefit Sharing": "Acceso a la distribuci\xF3n de beneficios", ABS: "SECCI\xD3N", Biosafety: "Bioseguridad", "End poverty in all its forms everywhere": "Poner fin a la pobreza en todas sus formas en todo el mundo", "End hunger, achieve food security and improved nutrition and promote sustainable agriculture": "Poner fin al hambre, lograr la seguridad alimentaria y la mejora de la nutrici\xF3n y promover la agricultura sostenible", "Ensure healthy lives and promote well-being for all at all ages": "Garantizar una vida sana y promover el bienestar de todos en todas las edades.", "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all": "Garantizar una educaci\xF3n de calidad inclusiva y equitativa y promover oportunidades de aprendizaje permanente para todos.", "Achieve gender equality and empower all women and girls": "Lograr la igualdad de g\xE9nero y empoderar a todas las mujeres y ni\xF1as", "Ensure availability and sustainable management of water and sanitation for all": "Garantizar la disponibilidad y la gesti\xF3n sostenible del agua y el saneamiento para todos.", "Ensure access to affordable, reliable, sustainable and modern energy for all": "Garantizar el acceso a energ\xEDa asequible, confiable, sostenible y moderna para todos.", "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all": "Promover el crecimiento econ\xF3mico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos.", "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation": "Construir infraestructura resiliente, promover la industrializaci\xF3n inclusiva y sostenible y fomentar la innovaci\xF3n.", "Reduce inequality within and among countries": "Reducir la desigualdad dentro y entre pa\xEDses", "Make cities and human settlements inclusive, safe, resilient and sustainable": "Hacer que las ciudades y los asentamientos humanos sean inclusivos, seguros, resilientes y sostenibles", "Ensure sustainable consumption and production patterns": "Garantizar patrones de producci\xF3n y consumo sostenibles", "Take urgent action to combat climate change and its impacts": "Tomar medidas urgentes para combatir el cambio clim\xE1tico y sus impactos.", "Conserve and sustainably use the oceans, seas and marine resources for sustainable development": "Conservar y utilizar de forma sostenible los oc\xE9anos, los mares y los recursos marinos para el desarrollo sostenible.", "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss": "Proteger, restaurar y promover el uso sostenible de los ecosistemas terrestres, gestionar los bosques de forma sostenible, combatir la desertificaci\xF3n, detener y revertir la degradaci\xF3n de la tierra y detener la p\xE9rdida de biodiversidad.", "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels": "Promover sociedades pac\xEDficas e inclusivas para el desarrollo sostenible, proporcionar acceso a la justicia para todos y construir instituciones eficaces, responsables e inclusivas en todos los niveles.", "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development": "Fortalecer los medios de implementaci\xF3n y revitalizar la Alianza Global para el Desarrollo Sostenible.", "Document States": "Estados del documento", "Action Categories": "Categor\xEDas de acci\xF3n", "Organization Types": "Tipos de organizaci\xF3n", "Governments Types": "Tipos de gobiernos", "Aichi Targets": "Objetivos de Aichi", SDGs: "ODS", Jurisdictions: "Jurisdicciones", Subjects: "Asignaturas", Countries: "Pa\xEDses", Regions: "Regiones", Draft: "Sequ\xEDa", Published: "Publicado", Rejected: "Rechazado", Deleted: "Eliminado", "Access to benefit-sharing": "Acceso a la distribuci\xF3n de beneficios", Other: "Otro" }, fr: { "1. No Poverty": "1. Pas de pauvret\xE9", "2. Zero Hunger": "2. Faim Z\xE9ro", "3. Good Health and Well-being": "3. Bonne sant\xE9 et bien-\xEAtre", "4. Quality Education": "4. \xC9ducation de qualit\xE9", "5. Gender Equality": "5. \xC9galit\xE9 des genres", "6. Clean Water and Sanitation": "6. Eau propre et assainissement", "7. Affordable and Clean Energy": "7. \xC9nergie abordable et propre", "8. Decent Work and Economic Growth": "Travail d\xE9cent et croissance \xE9conomique", "9. Industry, Innovation and Infrastructure": "9. Industrie, innovation et infrastructures", "10. Reduced Inequality": "10. In\xE9galit\xE9 r\xE9duite", "11. Sustainable Cities and Communities": "11. Villes et communaut\xE9s durables", "12. Responsible Consumption and Production": "12. Consommation et production responsables", "13. Climate Action": "13. Action climatique", "14. Life Below Water": "14. La vie sous l'eau", "15. Life on Land": "15. La vie sur terre", "16. Peace and Justice Strong Institutions": "16. Paix et justice Des institutions fortes", "17. Partnerships to achieve the Goal": "17. Partenariats pour atteindre l'objectif", "Food systems and health": "Syst\xE8mes alimentaires et sant\xE9", "Food and health": "Nourriture et sant\xE9", "Freshwater, coastal and ocean ecosystems": "\xC9cosyst\xE8mes d'eau douce, c\xF4tiers et oc\xE9aniques", "Freshwater, coastal and ocean": "Eau douce, c\xF4ti\xE8re et oc\xE9anique", "Conservation and restoration of land ecosystems": "Conservation et restauration des \xE9cosyst\xE8mes terrestres", "Land ecosystems": "\xC9cosyst\xE8mes terrestres", "Climate change mitigation and adaptation": "Att\xE9nuation et adaptation au changement climatique", "Climate mitigation and adaptation": "Att\xE9nuation et adaptation au changement climatique", "Conservation and sustainable use of species": "Conservation et utilisation durable des esp\xE8ces", Species: "Esp\xE8ce", "Sustainable consumption and production": "Consommation et production durables", Stewardship: "Intendance", "Urban sustainability": "Durabilit\xE9 urbaine", "Green finance": "Finance verte", "Access to Benefit Sharing": "Acc\xE8s au partage des avantages", ABS: "SECTION", Biosafety: "Bios\xE9curit\xE9", "End poverty in all its forms everywhere": "Mettre fin \xE0 la pauvret\xE9 sous toutes ses formes partout", "End hunger, achieve food security and improved nutrition and promote sustainable agriculture": "Mettre fin \xE0 la faim, assurer la s\xE9curit\xE9 alimentaire et am\xE9liorer la nutrition et promouvoir une agriculture durable", "Ensure healthy lives and promote well-being for all at all ages": "Assurer une vie saine et promouvoir le bien-\xEAtre pour tous \xE0 tous les \xE2ges", "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all": "Assurer une \xE9ducation de qualit\xE9 inclusive et \xE9quitable et promouvoir les opportunit\xE9s d'apprentissage tout au long de la vie pour tous", "Achieve gender equality and empower all women and girls": "Atteindre l'\xE9galit\xE9 des sexes et autonomiser toutes les femmes et les filles", "Ensure availability and sustainable management of water and sanitation for all": "Assurer la disponibilit\xE9 et la gestion durable de l'eau et de l'assainissement pour tous", "Ensure access to affordable, reliable, sustainable and modern energy for all": "Garantir l'acc\xE8s \xE0 une \xE9nergie abordable, fiable, durable et moderne pour tous", "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all": "Promouvoir une croissance \xE9conomique soutenue, inclusive et durable, le plein emploi productif et un travail d\xE9cent pour tous", "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation": "Construire des infrastructures r\xE9silientes, promouvoir une industrialisation inclusive et durable et favoriser l'innovation", "Reduce inequality within and among countries": "R\xE9duire les in\xE9galit\xE9s au sein des pays et entre eux", "Make cities and human settlements inclusive, safe, resilient and sustainable": "Rendre les villes et les \xE9tablissements humains inclusifs, s\xFBrs, r\xE9silients et durables", "Ensure sustainable consumption and production patterns": "Assurer des modes de consommation et de production durables", "Take urgent action to combat climate change and its impacts": "Prendre des mesures urgentes pour lutter contre le changement climatique et ses impacts", "Conserve and sustainably use the oceans, seas and marine resources for sustainable development": "Conserver et utiliser durablement les oc\xE9ans, les mers et les ressources marines pour un d\xE9veloppement durable", "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss": "Prot\xE9ger, restaurer et promouvoir l'utilisation durable des \xE9cosyst\xE8mes terrestres, g\xE9rer durablement les for\xEAts, lutter contre la d\xE9sertification, stopper et inverser la d\xE9gradation des terres et stopper la perte de biodiversit\xE9", "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels": "Promouvoir des soci\xE9t\xE9s pacifiques et inclusives pour le d\xE9veloppement durable, fournir un acc\xE8s \xE0 la justice pour tous et mettre en place des institutions efficaces, responsables et inclusives \xE0 tous les niveaux", "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development": "Renforcer les moyens de mise en \u0153uvre et redynamiser le Partenariat mondial pour le d\xE9veloppement durable", "Document States": "\xC9tats du document", "Action Categories": "Cat\xE9gories d'actions", "Organization Types": "Types d'organisation", "Governments Types": "Types de gouvernements", "Aichi Targets": "Objectifs d'Aichi", SDGs: "ODD", Jurisdictions: "Juridictions", Subjects: "Sujets", Countries: "Des pays", Regions: "R\xE9gions", Draft: "Brouillon", Published: "Publi\xE9", Rejected: "Rejet\xE9", Deleted: "Supprim\xE9", "Access to benefit-sharing": "Acc\xE8s au partage des avantages", Other: "Autre" }, ru: { "1. No Poverty": "1. \u041D\u0435\u0442 \u0431\u0435\u0434\u043D\u043E\u0441\u0442\u0438", "2. Zero Hunger": "2. \u041D\u0443\u043B\u0435\u0432\u043E\u0439 \u0433\u043E\u043B\u043E\u0434", "3. Good Health and Well-being": "3. \u0425\u043E\u0440\u043E\u0448\u0435\u0435 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435 \u0438 \u0431\u043B\u0430\u0433\u043E\u043F\u043E\u043B\u0443\u0447\u0438\u0435", "4. Quality Education": "4. \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435", "5. Gender Equality": "5. \u0413\u0435\u043D\u0434\u0435\u0440\u043D\u043E\u0435 \u0440\u0430\u0432\u0435\u043D\u0441\u0442\u0432\u043E", "6. Clean Water and Sanitation": "6. \u0427\u0438\u0441\u0442\u0430\u044F \u0432\u043E\u0434\u0430 \u0438 \u0441\u0430\u043D\u0438\u0442\u0430\u0440\u0438\u044F", "7. Affordable and Clean Energy": "7. \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0430\u044F \u0438 \u0447\u0438\u0441\u0442\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F", "8. Decent Work and Economic Growth": "\u0414\u043E\u0441\u0442\u043E\u0439\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0438 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u043E\u0441\u0442", "9. Industry, Innovation and Infrastructure": "9. \u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u044C, \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0438 \u0438 \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430.", "10. Reduced Inequality": "10. \u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u0435 \u043D\u0435\u0440\u0430\u0432\u0435\u043D\u0441\u0442\u0432\u0430", "11. Sustainable Cities and Communities": "11. \u0423\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u044B\u0435 \u0433\u043E\u0440\u043E\u0434\u0430 \u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430", "12. Responsible Consumption and Production": "12. \u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E", "13. Climate Action": "13. \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u043E \u0431\u043E\u0440\u044C\u0431\u0435 \u0441 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u043A\u043B\u0438\u043C\u0430\u0442\u0430", "14. Life Below Water": "14. \u0416\u0438\u0437\u043D\u044C \u043F\u043E\u0434 \u0432\u043E\u0434\u043E\u0439", "15. Life on Land": "15. \u0416\u0438\u0437\u043D\u044C \u043D\u0430 \u0441\u0443\u0448\u0435", "16. Peace and Justice Strong Institutions": "16. \u0421\u0438\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u044B \u043C\u0438\u0440\u0430 \u0438 \u0441\u043F\u0440\u0430\u0432\u0435\u0434\u043B\u0438\u0432\u043E\u0441\u0442\u0438", "17. Partnerships to achieve the Goal": "17. \u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u0442\u0432\u043E \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0446\u0435\u043B\u0438.", "Food systems and health": "\u041F\u0440\u043E\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435", "Food and health": "\u0415\u0434\u0430 \u0438 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435", "Freshwater, coastal and ocean ecosystems": "\u041F\u0440\u0435\u0441\u043D\u043E\u0432\u043E\u0434\u043D\u044B\u0435, \u043F\u0440\u0438\u0431\u0440\u0435\u0436\u043D\u044B\u0435 \u0438 \u043E\u043A\u0435\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u044B", "Freshwater, coastal and ocean": "\u041F\u0440\u0435\u0441\u043D\u043E\u0432\u043E\u0434\u043D\u044B\u0439, \u043F\u0440\u0438\u0431\u0440\u0435\u0436\u043D\u044B\u0439 \u0438 \u043E\u043A\u0435\u0430\u043D\u0441\u043A\u0438\u0439", "Conservation and restoration of land ecosystems": "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430\u0437\u0435\u043C\u043D\u044B\u0445 \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C", "Land ecosystems": "\u041D\u0430\u0437\u0435\u043C\u043D\u044B\u0435 \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u044B", "Climate change mitigation and adaptation": "\u0421\u043C\u044F\u0433\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0439 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043A\u043B\u0438\u043C\u0430\u0442\u0430 \u0438 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0438\u044F", "Climate mitigation and adaptation": "\u0421\u043C\u044F\u0433\u0447\u0435\u043D\u0438\u0435 \u043A\u043B\u0438\u043C\u0430\u0442\u0430 \u0438 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0438\u044F", "Conservation and sustainable use of species": "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0438\u0434\u043E\u0432", Species: "\u0420\u0430\u0437\u043D\u043E\u0432\u0438\u0434\u043D\u043E\u0441\u0442\u044C", "Sustainable consumption and production": "\u0423\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E", Stewardship: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435", "Urban sustainability": "\u0423\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0433\u043E\u0440\u043E\u0434\u0430", "Green finance": "\u0417\u0435\u043B\u0435\u043D\u044B\u0435 \u0444\u0438\u043D\u0430\u043D\u0441\u044B", "Access to Benefit Sharing": "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044E \u0432\u044B\u0433\u043E\u0434", ABS: "\u0420\u0410\u0417\u0414\u0415\u041B", Biosafety: "\u0411\u0438\u043E\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C", "End poverty in all its forms everywhere": "\u041F\u043E\u0432\u0441\u044E\u0434\u0443 \u043F\u043E\u043A\u043E\u043D\u0447\u0438\u0442\u044C \u0441 \u043D\u0438\u0449\u0435\u0442\u043E\u0439 \u0432\u043E \u0432\u0441\u0435\u0445 \u0435\u0435 \u0444\u043E\u0440\u043C\u0430\u0445", "End hunger, achieve food security and improved nutrition and promote sustainable agriculture": "\u041B\u0438\u043A\u0432\u0438\u0434\u0430\u0446\u0438\u044F \u0433\u043E\u043B\u043E\u0434\u0430, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0438 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u044F, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u043C\u0443 \u0441\u0435\u043B\u044C\u0441\u043A\u043E\u043C\u0443 \u0445\u043E\u0437\u044F\u0439\u0441\u0442\u0432\u0443", "Ensure healthy lives and promote well-being for all at all ages": "\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0437\u0434\u043E\u0440\u043E\u0432\u044B\u0439 \u043E\u0431\u0440\u0430\u0437 \u0436\u0438\u0437\u043D\u0438 \u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0431\u043B\u0430\u0433\u043E\u043F\u043E\u043B\u0443\u0447\u0438\u044E \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0432 \u043B\u044E\u0431\u043E\u043C \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0435", "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all": "\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0432\u0441\u0435\u043E\u0445\u0432\u0430\u0442\u043D\u043E\u0433\u043E \u0438 \u0441\u043F\u0440\u0430\u0432\u0435\u0434\u043B\u0438\u0432\u043E\u0433\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043F\u043E\u043E\u0449\u0440\u0435\u043D\u0438\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0432\u0441\u0435\u0439 \u0436\u0438\u0437\u043D\u0438 \u0434\u043B\u044F \u0432\u0441\u0435\u0445", "Achieve gender equality and empower all women and girls": "\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0433\u0435\u043D\u0434\u0435\u0440\u043D\u043E\u0433\u043E \u0440\u0430\u0432\u0435\u043D\u0441\u0442\u0432\u0430 \u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432 \u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439 \u0432\u0441\u0435\u0445 \u0436\u0435\u043D\u0449\u0438\u043D \u0438 \u0434\u0435\u0432\u043E\u0447\u0435\u043A", "Ensure availability and sustainable management of water and sanitation for all": "\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438 \u0438 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0433\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432\u043E\u0434\u043D\u044B\u043C\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043C\u0438 \u0438 \u0441\u0430\u043D\u0438\u0442\u0430\u0440\u0438\u0435\u0439 \u0434\u043B\u044F \u0432\u0441\u0435\u0445", "Ensure access to affordable, reliable, sustainable and modern energy for all": "\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043D\u0435\u0434\u043E\u0440\u043E\u0433\u043E\u0439, \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0439, \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0439 \u0438 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0434\u043B\u044F \u0432\u0441\u0435\u0445", "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all": "\u0421\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u043C\u0443, \u0438\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u043E\u043C\u0443 \u0438 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u043C\u0443 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0440\u043E\u0441\u0442\u0443, \u043F\u043E\u043B\u043D\u043E\u0439 \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0437\u0430\u043D\u044F\u0442\u043E\u0441\u0442\u0438 \u0438 \u0434\u043E\u0441\u0442\u043E\u0439\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0435 \u0434\u043B\u044F \u0432\u0441\u0435\u0445", "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation": "\u0421\u043E\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u0443\u044E \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443, \u043F\u0440\u043E\u0434\u0432\u0438\u0433\u0430\u0439\u0442\u0435 \u0438\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0443\u044E \u0438 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u0443\u044E \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u0438 \u043F\u043E\u043E\u0449\u0440\u044F\u0439\u0442\u0435 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u0438", "Reduce inequality within and among countries": "\u0421\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u043D\u0435\u0440\u0430\u0432\u0435\u043D\u0441\u0442\u0432\u0430 \u0432\u043D\u0443\u0442\u0440\u0438 \u0441\u0442\u0440\u0430\u043D \u0438 \u043C\u0435\u0436\u0434\u0443 \u0441\u0442\u0440\u0430\u043D\u0430\u043C\u0438", "Make cities and human settlements inclusive, safe, resilient and sustainable": "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0433\u043E\u0440\u043E\u0434\u0430 \u0438 \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u0443\u043D\u043A\u0442\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C\u0438, \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u043C\u0438, \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u044B\u043C\u0438 \u0438 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u044B\u043C\u0438", "Ensure sustainable consumption and production patterns": "\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430", "Take urgent action to combat climate change and its impacts": "\u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0441\u0440\u043E\u0447\u043D\u044B\u0435 \u043C\u0435\u0440\u044B \u043F\u043E \u0431\u043E\u0440\u044C\u0431\u0435 \u0441 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u043A\u043B\u0438\u043C\u0430\u0442\u0430 \u0438 \u0435\u0433\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F\u043C\u0438", "Conserve and sustainably use the oceans, seas and marine resources for sustainable development": "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0438 \u0440\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u043A\u0435\u0430\u043D\u044B, \u043C\u043E\u0440\u044F \u0438 \u043C\u043E\u0440\u0441\u043A\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B \u0432 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u0445 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F", "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss": "\u0417\u0430\u0449\u0438\u0449\u0430\u0442\u044C, \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C \u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u043C\u0443 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E \u043D\u0430\u0437\u0435\u043C\u043D\u044B\u0445 \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C, \u0440\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043B\u0435\u0441\u0430\u043C\u0438, \u0431\u043E\u0440\u043E\u0442\u044C\u0441\u044F \u0441 \u043E\u043F\u0443\u0441\u0442\u044B\u043D\u0438\u0432\u0430\u043D\u0438\u0435\u043C, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0438 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u0441\u043F\u044F\u0442\u044C \u0434\u0435\u0433\u0440\u0430\u0434\u0430\u0446\u0438\u044E \u0437\u0435\u043C\u0435\u043B\u044C \u0438 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0443\u0442\u0440\u0430\u0442\u0443 \u0431\u0438\u043E\u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u044F", "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels": "\u0421\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043C\u0438\u0440\u043D\u043E\u043C\u0443 \u0438 \u0438\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u043E\u043C\u0443 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0443 \u0432 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u0445 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043F\u0440\u0430\u0432\u043E\u0441\u0443\u0434\u0438\u044E \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435, \u043F\u043E\u0434\u043E\u0442\u0447\u0435\u0442\u043D\u044B\u0435 \u0438 \u0438\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u044B \u043D\u0430 \u0432\u0441\u0435\u0445 \u0443\u0440\u043E\u0432\u043D\u044F\u0445", "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development": "\u0423\u0441\u0438\u043B\u0438\u0442\u044C \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043E\u0436\u0438\u0432\u0438\u0442\u044C \u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u0442\u0432\u043E \u0432 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u0445 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F", "Document States": "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430", "Action Categories": "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439", "Organization Types": "\u0422\u0438\u043F\u044B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", "Governments Types": "\u0422\u0438\u043F\u044B \u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432", "Aichi Targets": "\u0426\u0435\u043B\u0438 \u0410\u0439\u0442\u0438", SDGs: "\u0426\u0423\u0420", Jurisdictions: "\u042E\u0440\u0438\u0441\u0434\u0438\u043A\u0446\u0438\u0438", Subjects: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B", Countries: "\u0421\u0442\u0440\u0430\u043D\u044B", Regions: "\u0420\u0435\u0433\u0438\u043E\u043D\u044B", Draft: "\u0427\u0435\u0440\u043D\u043E\u0432\u043E\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442", Published: "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E", Rejected: "\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043D\u044B\u0439", Deleted: "\u0423\u0434\u0430\u043B\u0435\u043D\u043E", "Access to benefit-sharing": "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u043C\u0443 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E \u0432\u044B\u0433\u043E\u0434", Other: "\u0414\u0440\u0443\u0433\u043E\u0439" }, zh: { "1. No Poverty": "1. \u6CA1\u6709\u8D2B\u7A77", "2. Zero Hunger": "2. \u96F6\u9965\u997F", "3. Good Health and Well-being": "3. \u8EAB\u4F53\u5065\u5EB7", "4. Quality Education": "4. \u7D20\u8D28\u6559\u80B2", "5. Gender Equality": "5. \u6027\u522B\u5E73\u7B49", "6. Clean Water and Sanitation": "6. \u6E05\u6D01\u6C34\u548C\u536B\u751F", "7. Affordable and Clean Energy": "7. \u8D1F\u62C5\u5F97\u8D77\u7684\u6E05\u6D01\u80FD\u6E90", "8. Decent Work and Economic Growth": "\u4F53\u9762\u5DE5\u4F5C\u548C\u7ECF\u6D4E\u589E\u957F", "9. Industry, Innovation and Infrastructure": "9. \u4EA7\u4E1A\u3001\u521B\u65B0\u548C\u57FA\u7840\u8BBE\u65BD", "10. Reduced Inequality": "10. \u51CF\u5C11\u4E0D\u5E73\u7B49", "11. Sustainable Cities and Communities": "11. \u53EF\u6301\u7EED\u57CE\u5E02\u548C\u793E\u533A", "12. Responsible Consumption and Production": "12. \u8D1F\u8D23\u4EFB\u7684\u6D88\u8D39\u548C\u751F\u4EA7", "13. Climate Action": "13. \u6C14\u5019\u884C\u52A8", "14. Life Below Water": "14. \u6C34\u4E0B\u751F\u547D", "15. Life on Land": "15. \u9646\u5730\u751F\u6D3B", "16. Peace and Justice Strong Institutions": "16. \u548C\u5E73\u4E0E\u6B63\u4E49\u7684\u5F3A\u5927\u673A\u6784", "17. Partnerships to achieve the Goal": "17. \u5B9E\u73B0\u76EE\u6807\u7684\u4F19\u4F34\u5173\u7CFB", "Food systems and health": "\u7CAE\u98DF\u7CFB\u7EDF\u4E0E\u5065\u5EB7", "Food and health": "\u98DF\u54C1\u4E0E\u5065\u5EB7", "Freshwater, coastal and ocean ecosystems": "\u6DE1\u6C34\u3001\u6CBF\u6D77\u548C\u6D77\u6D0B\u751F\u6001\u7CFB\u7EDF", "Freshwater, coastal and ocean": "\u6DE1\u6C34\u3001\u6CBF\u6D77\u548C\u6D77\u6D0B", "Conservation and restoration of land ecosystems": "\u571F\u5730\u751F\u6001\u7CFB\u7EDF\u7684\u4FDD\u62A4\u548C\u6062\u590D", "Land ecosystems": "\u9646\u5730\u751F\u6001\u7CFB\u7EDF", "Climate change mitigation and adaptation": "\u51CF\u7F13\u548C\u9002\u5E94\u6C14\u5019\u53D8\u5316", "Climate mitigation and adaptation": "\u6C14\u5019\u51CF\u7F13\u548C\u9002\u5E94", "Conservation and sustainable use of species": "\u7269\u79CD\u7684\u4FDD\u62A4\u548C\u53EF\u6301\u7EED\u5229\u7528", Species: "\u7269\u79CD", "Sustainable consumption and production": "\u53EF\u6301\u7EED\u6D88\u8D39\u548C\u751F\u4EA7", Stewardship: "\u7BA1\u7406", "Urban sustainability": "\u57CE\u5E02\u53EF\u6301\u7EED\u6027", "Green finance": "\u7EFF\u8272\u91D1\u878D", "Access to Benefit Sharing": "\u83B7\u5F97\u5229\u76CA\u5206\u4EAB", ABS: "\u90E8\u5206", Biosafety: "\u751F\u7269\u5B89\u5168", "End poverty in all its forms everywhere": "\u6D88\u9664\u5404\u5730\u4E00\u5207\u5F62\u5F0F\u7684\u8D2B\u56F0", "End hunger, achieve food security and improved nutrition and promote sustainable agriculture": "\u6D88\u9664\u9965\u997F\u3001\u5B9E\u73B0\u7CAE\u98DF\u5B89\u5168\u548C\u6539\u5584\u8425\u517B\u5E76\u4FC3\u8FDB\u53EF\u6301\u7EED\u519C\u4E1A", "Ensure healthy lives and promote well-being for all at all ages": "\u786E\u4FDD\u5065\u5EB7\u751F\u6D3B\u5E76\u4FC3\u8FDB\u5404\u4E2A\u5E74\u9F84\u6BB5\u6240\u6709\u4EBA\u7684\u798F\u7949", "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all": "\u786E\u4FDD\u5305\u5BB9\u548C\u516C\u5E73\u7684\u4F18\u8D28\u6559\u80B2\uFF0C\u4FC3\u8FDB\u6240\u6709\u4EBA\u7684\u7EC8\u8EAB\u5B66\u4E60\u673A\u4F1A", "Achieve gender equality and empower all women and girls": "\u5B9E\u73B0\u6027\u522B\u5E73\u7B49\u5E76\u8D4B\u4E88\u6240\u6709\u5987\u5973\u548C\u5973\u5B69\u6743\u529B", "Ensure availability and sustainable management of water and sanitation for all": "\u786E\u4FDD\u4EBA\u4EBA\u4EAB\u6709\u6C34\u548C\u536B\u751F\u8BBE\u65BD\u5E76\u5BF9\u5176\u8FDB\u884C\u53EF\u6301\u7EED\u7BA1\u7406", "Ensure access to affordable, reliable, sustainable and modern energy for all": "\u786E\u4FDD\u6240\u6709\u4EBA\u90FD\u80FD\u83B7\u5F97\u8D1F\u62C5\u5F97\u8D77\u7684\u3001\u53EF\u9760\u7684\u3001\u53EF\u6301\u7EED\u7684\u73B0\u4EE3\u80FD\u6E90", "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all": "\u4FC3\u8FDB\u6301\u7EED\u3001\u5305\u5BB9\u548C\u53EF\u6301\u7EED\u7684\u7ECF\u6D4E\u589E\u957F\u3001\u5145\u5206\u7684\u751F\u4EA7\u6027\u5C31\u4E1A\u548C\u4EBA\u4EBA\u4EAB\u6709\u4F53\u9762\u7684\u5DE5\u4F5C", "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation": "\u5EFA\u8BBE\u6709\u5F39\u6027\u7684\u57FA\u7840\u8BBE\u65BD\uFF0C\u4FC3\u8FDB\u5305\u5BB9\u548C\u53EF\u6301\u7EED\u7684\u5DE5\u4E1A\u5316\u5E76\u4FC3\u8FDB\u521B\u65B0", "Reduce inequality within and among countries": "\u51CF\u5C11\u56FD\u5BB6\u5185\u90E8\u548C\u56FD\u5BB6\u4E4B\u95F4\u7684\u4E0D\u5E73\u7B49", "Make cities and human settlements inclusive, safe, resilient and sustainable": "\u5EFA\u8BBE\u5305\u5BB9\u3001\u5B89\u5168\u3001\u6709\u5F39\u6027\u548C\u53EF\u6301\u7EED\u7684\u57CE\u5E02\u548C\u4EBA\u7C7B\u4F4F\u533A", "Ensure sustainable consumption and production patterns": "\u786E\u4FDD\u53EF\u6301\u7EED\u7684\u6D88\u8D39\u548C\u751F\u4EA7\u6A21\u5F0F", "Take urgent action to combat climate change and its impacts": "\u91C7\u53D6\u7D27\u6025\u884C\u52A8\u5E94\u5BF9\u6C14\u5019\u53D8\u5316\u53CA\u5176\u5F71\u54CD", "Conserve and sustainably use the oceans, seas and marine resources for sustainable development": "\u4FDD\u62A4\u548C\u53EF\u6301\u7EED\u5229\u7528\u6D77\u6D0B\u548C\u6D77\u6D0B\u8D44\u6E90\u4EE5\u4FC3\u8FDB\u53EF\u6301\u7EED\u53D1\u5C55", "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss": "\u4FDD\u62A4\u3001\u6062\u590D\u548C\u4FC3\u8FDB\u9646\u5730\u751F\u6001\u7CFB\u7EDF\u7684\u53EF\u6301\u7EED\u5229\u7528\uFF0C\u53EF\u6301\u7EED\u7BA1\u7406\u68EE\u6797\uFF0C\u9632\u6CBB\u8352\u6F20\u5316\uFF0C\u5236\u6B62\u548C\u626D\u8F6C\u571F\u5730\u9000\u5316\uFF0C\u5236\u6B62\u751F\u7269\u591A\u6837\u6027\u4E27\u5931", "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels": "\u4FC3\u8FDB\u548C\u5E73\u548C\u5305\u5BB9\u7684\u793E\u4F1A\u4EE5\u4FC3\u8FDB\u53EF\u6301\u7EED\u53D1\u5C55\uFF0C\u4E3A\u6240\u6709\u4EBA\u63D0\u4F9B\u8BC9\u8BF8\u53F8\u6CD5\u7684\u673A\u4F1A\uFF0C\u5E76\u5728\u5404\u7EA7\u5EFA\u7ACB\u6709\u6548\u3001\u8D1F\u8D23\u548C\u5305\u5BB9\u7684\u673A\u6784", "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development": "\u52A0\u5F3A\u6267\u884C\u624B\u6BB5\uFF0C\u91CD\u632F\u53EF\u6301\u7EED\u53D1\u5C55\u5168\u7403\u4F19\u4F34\u5173\u7CFB", "Document States": "\u6587\u6863\u72B6\u6001", "Action Categories": "\u884C\u52A8\u7C7B\u522B", "Organization Types": "\u7EC4\u7EC7\u7C7B\u578B", "Governments Types": "\u653F\u5E9C\u7C7B\u578B", "Aichi Targets": "\u7231\u77E5\u76EE\u6807", SDGs: "\u53EF\u6301\u7EED\u53D1\u5C55\u76EE\u6807", Jurisdictions: "\u7BA1\u8F96\u6743", Subjects: "\u79D1\u76EE", Countries: "\u56FD\u5BB6", Regions: "\u5730\u533A", Draft: "\u8349\u6848", Published: "\u5DF2\u53D1\u8868", Rejected: "\u62D2\u7EDD\u4E86", Deleted: "\u5DF2\u5220\u9664", "Access to benefit-sharing": "\u83B7\u5F97\u5229\u76CA\u5206\u4EAB", Other: "\u5176\u4ED6" } } };
const o = (e2) => {
  const { messages: n2 } = a, t2 = {};
  for (const i2 in n2)
    t2[i2] = n2[i2][e2];
  return t2;
}, r = { basePath: "/" }, c = __spreadValues2({}, r), u = __spreadValues2({}, c), l = { dev: r, stg: c, prod: u }, d = { basePath: String }, m = {};
/*!
* @houlagins/default-options 1.0.2  published: Fri Dec 18 2020 11:47:32 GMT-0500 (Eastern Standard Time)
* 
* Default options service
*
* @link https://github.com/randyhoulahan/default-options/tree/master#readme
* @source git+https://github.com/randyhoulahan/default-options.git
* @copyright (c) 2020 Randy Houlahan
* @license MIT
* 
*/
class C {
  constructor({ environments: e2, validationMap: n2, forceEnv: t2, name: i2 }) {
    e2 = function(e3) {
      const n3 = Object.assign({}, l.dev, e3.dev || e3.development || {}), t3 = Object.assign({}, l.stg, e3.stg || e3.staging || {}), i3 = Object.assign({}, l.prod, e3.prod || e3.production || {});
      return { development: n3, dev: n3, staging: t3, stg: t3, production: i3, prod: i3 };
    }(e2), n2 = Object.assign(d, n2), this.props = { environments: e2, validationMap: n2, forceEnv: t2, name: i2 };
  }
  get(e2 = {}, n2 = this.env) {
    const { environments: t2 } = this.props;
    for (const i2 in e2)
      t2[n2][i2] = e2[i2];
    return this.validate(t2[n2]), t2[n2];
  }
  get env() {
    return this.props.forceEnv ? this.props.forceEnv : typeof window == "undefined" && typeof process != "undefined" && process.env ? "production" : function() {
      const e2 = window.location.href;
      return c.hostname && e2.includes(c.hostname) ? "stg" : r.hostname && e2.includes(r.hostname) ? "dev" : (u.hostname && e2.includes(u.hostname), "prod");
    }();
  }
  validate(e2) {
    return function(e3, n2) {
      for (const t2 in e3) {
        const i2 = e3[t2].constructor ? e3[t2].constructor : typeof e3[t2] == "object" ? Object : void 0, s2 = n2[t2];
        Object.keys(n2).includes(t2) || g(e3, t2), i2 !== s2 && A(t2, i2.name, s2.name);
      }
    }(e2, this.props.validationMap);
  }
}
function g(e2, n2) {
  throw new Error(`${n2} not permitted in  component: options`);
}
function A(e2, n2, t2) {
  throw new Error(`${e2} has incorrect type.  Received: ${n2} Expected: ${t2}`);
}
const p = "@scbd-chm/cached-apis".replace("https://cdn.cbd.int/", ""), E = { regions: "https://api.cbd.int/api/v2013/thesaurus/domains/regions/terms", countries: "https://api.cbd.int/api/v2013/thesaurus/domains/countries/terms", orgTypes: "https://api.cbd.int/api/v2013/thesaurus/domains/Organization%20Types/terms", govTypes: "https://api.cbd.int/api/v2013/thesaurus/domains/Organization%20Types/terms", aichis: "https://api.cbd.int/api/v2013/thesaurus/domains/AICHI-TARGETS/terms", subjects: "https://api.cbd.int/api/v2013/thesaurus/domains/CBD-SUBJECTS/terms", jurisdictions: "https://api.cbd.int/api/v2013/thesaurus/domains/50AC1489-92B8-4D99-965A-AAE97A80F38E/terms", sdgs: "https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false" }, B = { name: p, expiry: 30, apisUrls: E, dataSources: [...Object.keys(E), "geoLocations", "actionCategories", "all", "documentStates", "schemas"], version: "0.0.0" }, b = __spreadValues2({}, B);
(({ environments: e2, validationMap: n2, forceEnv: t2, name: i2 }, s2 = i2) => {
  if (!s2)
    throw new Error(" @houlagins/default-options.setDefaultOptions: no name/nameSpace passed to setDefaultOptions");
  m[s2] = new C({ environments: e2, validationMap: n2, forceEnv: t2, name: i2 });
})({ environments: { prod: __spreadValues2({}, b), stg: b, dev: B }, validationMap: { expiry: Number, name: String, apisUrls: Object, dataSources: Array, version: String }, name: p }, p);
var f, D = (f = p, (e2 = {}, n2) => m[f].get(e2, n2));
const h = "https://api.cbd.int/api/v2013/thesaurus/terms?termCode=", v = "https://attachments.cbd.int/action-agenda-categories", y = /* @__PURE__ */ new Set([{ identifier: "FOOD-AND-HEALTH", image: `${v}/FOOD-AND-HEALTH.svg`, sameAs: [`${h}CBD-SUBJECT-HH`], url: "https://www.cbd.int/action-agenda/contributions/food-and-health", name: __spreadValues2({}, I("Food systems and health")), alternateName: __spreadValues2({}, I("Food and health")) }, { identifier: "FRESHWATER-COASTAL-AND-OCEAN-ECOSYSTEMS", image: `${v}/FRESHWATER-COSTAL-AND-OCEAN-ECOSYSTEMS.svg`, sameAs: [`${h}CBD-SUBJECT-WTR`, `${h}CBD-SUBJECT-MAR`], url: "https://www.cbd.int/action-agenda/contributions/freshwater-coastal-and-ocean", name: __spreadValues2({ en: "Freshwater, coastal and ocean ecosystems" }, I("Freshwater, coastal and ocean ecosystems")), alternateName: __spreadValues2({ en: "Freshwater, coastal and ocean" }, I("Freshwater, coastal and ocean")) }, { identifier: "LAND-ECOSYSTEMS", image: `${v}/LAND-ECOSYSTEMS.svg`, sameAs: [`${h}CBD-SUBJECT-ECOA`, `${h}CBD-SUBJECT-ECORES`], url: "https://www.cbd.int/action-agenda/contributions/land-ecosystems", name: __spreadValues2({ en: "Conservation and restoration of land ecosystems" }, I("Conservation and restoration of land ecosystems")), alternateName: __spreadValues2({ en: "Land ecosystems" }, I("Land ecosystems")) }, { identifier: "CLIMATE-MITIGATION-AND-ADAPTATION", image: `${v}/CLIMATE-MITIGATION-AND-ADAPTATION.svg`, sameAs: [`${h}CBD-SUBJECT-CC`], url: "https://www.cbd.int/action-agenda/contributions/climate-mitigation-and-adaptation", name: __spreadValues2({ en: "Climate change mitigation and adaptation" }, I("Climate change mitigation and adaptation")), alternateName: __spreadValues2({ en: "Climate mitigation and adaptation" }, I("Climate mitigation and adaptation")) }, { identifier: "SPECIES", image: `${v}/SPECIES.svg`, sameAs: [`${h}CBD-SUBJECT-IAS`, `${h}CBD-SUBJECT-ENDS`], url: "https://www.cbd.int/action-agenda/contributions/species", name: __spreadValues2({ en: "Conservation and sustainable use of species" }, I("Conservation and sustainable use of species")), alternateName: __spreadValues2({ en: "Species" }, I("Species")) }, { identifier: "SUSTAINABLE-CONSUMPTION-AND-PRODUCTION", image: `${v}/SUSTAINABLE-CONSUMPTION-AND-PRODUCTION.svg`, sameAs: [`${h}CBD-SUBJECT-SUSE`, `${h}CBD-SUBJECT-SDEV`], url: "https://www.cbd.int/action-agenda/contributions/sustainable-consumption-and-production", name: __spreadValues2({ en: "Sustainable consumption and production" }, I("Sustainable consumption and production")) }, { identifier: "STEWARDSHIP", image: `${v}/STEWARDSHIP.svg`, url: "https://www.cbd.int/action-agenda/contributions/stewardship", name: __spreadValues2({ en: "Stewardship" }, I("Stewardship")) }, { identifier: "URBAN-SUSTAINABILITY", image: `${v}/URBAN-SUSTAINABILITY.svg`, url: "https://www.cbd.int/action-agenda/contributions/urban-sustainability", name: __spreadValues2({ en: "Urban sustainability" }, I("Urban sustainability")) }, { identifier: "GREEN-FINANCE", image: `${v}/GREEN-FINANCE.svg`, sameAs: [`${h}CBD-SUBJECT-FIN`], url: "https://www.cbd.int/action-agenda/contributions/green-finance", name: __spreadValues2({ en: "Green finance" }, I("Green finance")) }, { identifier: "ACCESS-TO-BENEFIT-SHARING", image: `${v}/ACCESS-TO-BENEFIT-SHARING.svg`, sameAs: [`${h}CBD-SUBJECT-ABS`], url: "https://www.cbd.int/action-agenda/contributions/access-to-benefit-sharing", name: __spreadValues2({ en: "Access and benefit-sharing" }, I("Access and benefit-sharing")), alternateName: __spreadValues2({ en: "Access and benefit-sharing" }, I("Access and benefit-sharing")) }, { identifier: "BIOSAFETY", image: `${v}/BIOSAFETY.svg`, sameAs: [`${h}CBD-SUBJECT-CPB`, `${h}CBD-SUBJECT-BTB`], url: "https://www.cbd.int/action-agenda/contributions/biosafety", name: __spreadValues2({ en: "Biosafety" }, I("Biosafety")) }]);
function I(e2) {
  const n2 = {};
  for (const t2 in a.messages)
    n2[t2] || (n2[t2] = {}), n2[t2] = a.messages[t2][e2] || e2;
  return n2;
}
const j = /* @__PURE__ */ new Set([{ identifier: "notification", name: { en: "Notifications" } }, { identifier: "pressRelease", name: { en: "Press Releases" } }, { identifier: "statement", name: { en: "Statements" } }, { identifier: "aichiTarget", name: { en: "Aichi Biodiversity Targets" } }, { identifier: "strategicPlanIndicator", name: { en: "Strategic Plan Indicators" } }, { identifier: "marineEbsa", name: { en: "Marine EBSAs" } }, { identifier: "bbiContact", name: { en: "BBI Contacts" } }, { identifier: "bbiOpportunity", name: { en: "BBI Opportunities" } }, { identifier: "bbiProfile", name: { en: "BBI Providers of Assistance" } }, { identifier: "capacityBuildingInitiative", name: { en: "Capacity-building Initiatives" } }, { identifier: "event", name: { en: "Events" } }, { identifier: "organization", name: { en: "Organizations" } }, { identifier: "resource", name: { en: "Virtual Library Resources" } }, { identifier: "undbActor", name: { en: "UNDB Actors" } }, { identifier: "undbParty", name: { en: "UNDB Country Profile" } }, { identifier: "undbPartner", name: { en: "UNDB Partner (depreciated)" } }, { identifier: "undbAction", name: { en: "UNDB Actions (depreciated)" } }, { identifier: "submission", name: { en: "Submissions" } }, { identifier: "meeting", name: { en: "Meetings" } }, { identifier: "focalPoint", name: { en: "National Focal Points" } }, { identifier: "nationalReport6", name: { en: "Sixth National Report" } }, { identifier: "nationalReport", name: { en: "National Reports and NBSAPs" } }, { identifier: "nationalTarget", name: { en: "National Targets" } }, { identifier: "nationalAssessment", name: { en: "Progress Assessments" } }, { identifier: "implementationActivity", name: { en: "Implementation Activities" } }, { identifier: "resourceMobilisation", name: { en: "Financial Reporting Framework: Reporting on baseline and progress towards 2015" } }, { identifier: "resourceMobilisation2020", name: { en: "Financial Reporting Framework: Reporting on progress towards 2020" } }]), G = __spreadValues2({ en: ["1. No Poverty", "2. Zero Hunger", "3. Good Health and Well-being", "4. Quality Education", "5. Gender Equality", "6. Clean Water and Sanitation", "7. Affordable and Clean Energy", "8. Decent Work and Economic Growth", "9. Industry, Innovation and Infrastructure", "10. Reduced Inequality", "11. Sustainable Cities and Communities", "12. Responsible Consumption and Production", "13. Climate Action", "14. Life Below Water", "15. Life on Land", "16. Peace and Justice Strong Institutions", "17. Partnerships to achieve the Goal"] }, O()), P = { identifier: "ORG-TYPE-OTHER", name: "Other", title: { en: "Other" } }, U = [{ identifier: "draft", name: o("Draft") }, { identifier: "published", name: o("Published") }, { identifier: "rejected", name: o("Rejected") }, { identifier: "deleted", name: o("Deleted") }];
function O() {
  const e2 = {};
  for (const n2 of ["ar", "es", "fr", "ru", "zh"]) {
    e2[n2] = [];
    for (const t2 of ["1. No Poverty", "2. Zero Hunger", "3. Good Health and Well-being", "4. Quality Education", "5. Gender Equality", "6. Clean Water and Sanitation", "7. Affordable and Clean Energy", "8. Decent Work and Economic Growth", "9. Industry, Innovation and Infrastructure", "10. Reduced Inequality", "11. Sustainable Cities and Communities", "12. Responsible Consumption and Production", "13. Climate Action", "14. Life Below Water", "15. Life on Land", "16. Peace and Justice Strong Institutions", "17. Partnerships to achieve the Goal"])
      e2[n2].push(a.messages[n2][t2] || t2);
  }
  return e2;
}
const R = () => {
  if (typeof window == "undefined")
    return "";
  const e2 = window.document.cookie.replace(/(?:(?:^|.*;\s*)Preferences\s*=\s*([^;]*).*$)|^.*$/, "$1");
  return e2 ? e2.replace("Locale=", "") : "";
};
new Map(Object.entries({ draft: "documentStates", published: "documentStates", rejected: "documentStates", deleted: "documentStates", "ACCESS-TO-BENEFIT-SHARING": "actionCategories", BIOSAFETY: "actionCategories", "CLIMATE-MITIGATION-AND-ADAPTATION": "actionCategories", "LAND-ECOSYSTEMS": "actionCategories", SPECIES: "actionCategories", "FOOD-AND-HEALTH": "actionCategories", "FRESHWATER-COASTAL-AND-OCEAN-ECOSYSTEMS": "actionCategories", "GREEN-FINANCE": "actionCategories", STEWARDSHIP: "actionCategories", "SUSTAINABLE-CONSUMPTION-AND-PRODUCTION": "actionCategories", "URBAN-SUSTAINABILITY": "actionCategories", "86D464C3-B5BB-4B02-85E4-1AAD8D64CD27": "orgTypes", "64432E86-23C9-4D9A-B835-962D8221E6CA": "orgTypes", "8A265B81-3973-42ED-BB06-40ACC755E496": "orgTypes", "90C29DF8-D863-4255-851D-A7A6E8FDFA8F": "orgTypes", "39EA5BC2-FEC4-4946-A543-A4F6E1A2F330": "orgTypes", "692b3eb1-a00c-437d-8903-d9b7714a7514": "orgTypes", "ORG-TYPE-OTHER": "orgTypes", "B3699A74-EF2E-467A-A82F-EF2149A2EFC5": "govTypes", "8830904C-8AF4-4C2F-AADB-363D98D854DA": "govTypes", "1C3A4FF4-9AB7-4A34-BE06-E07F575B7A32": "govTypes", "AICHI-TARGET-01": "aichis", "AICHI-TARGET-02": "aichis", "AICHI-TARGET-03": "aichis", "AICHI-TARGET-04": "aichis", "AICHI-TARGET-05": "aichis", "AICHI-TARGET-06": "aichis", "AICHI-TARGET-07": "aichis", "AICHI-TARGET-08": "aichis", "AICHI-TARGET-09": "aichis", "AICHI-TARGET-10": "aichis", "AICHI-TARGET-11": "aichis", "AICHI-TARGET-12": "aichis", "AICHI-TARGET-13": "aichis", "AICHI-TARGET-14": "aichis", "AICHI-TARGET-15": "aichis", "AICHI-TARGET-16": "aichis", "AICHI-TARGET-17": "aichis", "AICHI-TARGET-18": "aichis", "AICHI-TARGET-19": "aichis", "AICHI-TARGET-20": "aichis", "SDG-GOAL-01": "sdgs", "SDG-GOAL-02": "sdgs", "SDG-GOAL-03": "sdgs", "SDG-GOAL-04": "sdgs", "SDG-GOAL-05": "sdgs", "SDG-GOAL-06": "sdgs", "SDG-GOAL-07": "sdgs", "SDG-GOAL-08": "sdgs", "SDG-GOAL-09": "sdgs", "SDG-GOAL-10": "sdgs", "SDG-GOAL-11": "sdgs", "SDG-GOAL-12": "sdgs", "SDG-GOAL-13": "sdgs", "SDG-GOAL-14": "sdgs", "SDG-GOAL-15": "sdgs", "SDG-GOAL-16": "sdgs", "SDG-GOAL-17": "sdgs", "7437F880-7B12-4F26-AA91-CED37250DD0A": "jurisdictions", "528B1187-F1BD-4479-9FB3-ADBD9076D361": "jurisdictions", "DEBB019D-8647-40EC-8AE5-10CA88572F6E": "jurisdictions", "CBD-SUBJECT-TARGET": "subjects", "CBD-SUBJECT-25TH-ANN": "subjects", "CBD-SUBJECT-ABS": "subjects", "CBD-SUBJECT-AGR": "subjects", "CBD-SUBJECT-AICHI": "subjects", "CBD-SUBJECT-AICHI-TF": "subjects", "CBD-SUBJECT-DEV": "subjects", "CBD-SUBJECT-IND-P": "subjects", "CBD-SUBJECT-LIAISON-GROUP": "subjects", "CBD-SUBJECT-BIOMES": "subjects", "CBD-SUBJECT-BTB": "subjects", "CBD-SUBJECT-BIZ": "subjects", "CBD-SUBJECT-NAP-CB": "subjects", "CBD-SUBJECT-CPB": "subjects", "CBD-SUBJECT-CHPO": "subjects", "CBD-SUBJECT-CITY": "subjects", "CBD-SUBJECT-CHM": "subjects", "CBD-SUBJECT-CC": "subjects", "CBD-SUBJECT-COMM": "subjects", "CBD-SUBJECT-COP": "subjects", "CBD-SUBJECT-CROSS-CUTTING": "subjects", "CBD-SUBJECT-DSHL": "subjects", "CBD-SUBJECT-ETI": "subjects", "CBD-SUBJECT-ECOA": "subjects", "CBD-SUBJECT-ECOA+ECORES": "subjects", "CBD-SUBJECT-ECORES": "subjects", "CBD-SUBJECT-ENDS": "subjects", "CBD-SUBJECT-EXS": "subjects", "CBD-SUBJECT-XCH": "subjects", "BD8F75CA-32D4-427B-A9CE-55079989A0CC": "subjects", "3FEF79FF-9EA2-4E3A-BEC9-2991CCDD7F3A": "subjects", "CBD-SUBJECT-FIN": "subjects", "CBD-SUBJECT-FOR": "subjects", "CBD-SUBJECT-GEND": "subjects", "CBD-SUBJECT-GURT": "subjects", "CBD-SUBJECT-GBO": "subjects", "CBD-SUBJECT-GSPC": "subjects", "CBD-SUBJECT-GTI": "subjects", "CBD-SUBJECT-CPB-HTPI": "subjects", "CBD-SUBJECT-HH": "subjects", "CBD-SUBJECT-IMPA": "subjects", "CBD-SUBJECT-ICBD": "subjects", "CBD-SUBJECT-IMPL-MON-REPORT": "subjects", "CBD-SUBJECT-INS": "subjects", "CBD-SUBJECT-IND": "subjects", "CBD-SUBJECT-ILC": "subjects", "CBD-SUBJECT-WTR": "subjects", "CBD-SUBJECT-IPR": "subjects", "CBD-SUBJECT-IBD": "subjects", "CBD-SUBJECT-IYB": "subjects", "CBD-SUBJECT-IAS": "subjects", "CBD-SUBJECT-ISL": "subjects", "CBD-SUBJECT-JLG": "subjects", "CBD-SUBJECT-LEGAL-STRUCT": "subjects", "CBD-SUBJECT-LR": "subjects", "CBD-SUBJECT-MAR": "subjects", "CBD-SUBJECT-COOP": "subjects", "CBD-SUBJECT-MNT": "subjects", "CBD-SUBJECT-NPABS": "subjects", "CBD-SUBJECT-NBSAP": "subjects", "CBD-SUBJECT-NR": "subjects", "CBD-SUBJECT-NEW": "subjects", "CBD-SUBJECT-OUT+CEPA": "subjects", "CBD-SUBJECT-PART-INIT-COOP": "subjects", "CBD-SUBJECT-PLR": "subjects", "CBD-SUBJECT-POST2020": "subjects", "CBD-SUBJECT-PA": "subjects", "CBD-SUBJECT-STC": "subjects", "CBD-SUBJECT-CBD": "subjects", "CBD-SUBJECT-SSC": "subjects", "CBD-SUBJECT-STRAT": "subjects", "CBD-SUBJECT-STRATEGY-PLAN": "subjects", "CBD-SUBJECT-SBI": "subjects", "CBD-SUBJECT-SBSTTA": "subjects", "CBD-SUBJECT-SDEV": "subjects", "CBD-SUBJECT-SUSE": "subjects", "CBD-SUBJECT-TAXONOMY": "subjects", "CBD-SUBJECT-TOUR": "subjects", "CBD-SUBJECT-TKIP": "subjects", "CBD-SUBJECT-TTC": "subjects", "CBD-SUBJECT-UNDB": "subjects", "CBD-SUBJECT-YOUTH": "subjects", af: "countries", al: "countries", dz: "countries", ad: "countries", ao: "countries", ag: "countries", ar: "countries", am: "countries", au: "countries", at: "countries", az: "countries", bs: "countries", bh: "countries", bd: "countries", bb: "countries", by: "countries", be: "countries", bz: "countries", bj: "countries", bt: "countries", bo: "countries", ba: "countries", bw: "countries", br: "countries", bn: "countries", bg: "countries", bf: "countries", bi: "countries", cv: "countries", kh: "countries", cm: "countries", ca: "countries", cf: "countries", td: "countries", cl: "countries", cn: "countries", co: "countries", km: "countries", cg: "countries", ck: "countries", cr: "countries", ci: "countries", hr: "countries", cu: "countries", cy: "countries", cz: "countries", kp: "countries", cd: "countries", dk: "countries", dj: "countries", dm: "countries", do: "countries", ec: "countries", eg: "countries", sv: "countries", gq: "countries", er: "countries", ee: "countries", sz: "countries", et: "countries", eu: "countries", fj: "countries", fi: "countries", fr: "countries", ga: "countries", gm: "countries", ge: "countries", de: "countries", gh: "countries", gr: "countries", gd: "countries", gt: "countries", gn: "countries", gw: "countries", gy: "countries", ht: "countries", va: "countries", hn: "countries", hu: "countries", is: "countries", in: "countries", id: "countries", ir: "countries", iq: "countries", ie: "countries", il: "countries", it: "countries", jm: "countries", jp: "countries", jo: "countries", kz: "countries", ke: "countries", ki: "countries", kw: "countries", kg: "countries", la: "countries", lv: "countries", lb: "countries", ls: "countries", lr: "countries", ly: "countries", li: "countries", lt: "countries", lu: "countries", mg: "countries", mw: "countries", my: "countries", mv: "countries", ml: "countries", mt: "countries", mh: "countries", mr: "countries", mu: "countries", mx: "countries", fm: "countries", mc: "countries", mn: "countries", me: "countries", ma: "countries", mz: "countries", mm: "countries", na: "countries", nr: "countries", np: "countries", nl: "countries", nz: "countries", ni: "countries", ne: "countries", ng: "countries", nu: "countries", mk: "countries", no: "countries", om: "countries", pk: "countries", pw: "countries", pa: "countries", pg: "countries", py: "countries", pe: "countries", ph: "countries", pl: "countries", pt: "countries", qa: "countries", kr: "countries", md: "countries", ro: "countries", ru: "countries", rw: "countries", kn: "countries", lc: "countries", vc: "countries", ws: "countries", sm: "countries", st: "countries", sa: "countries", sn: "countries", rs: "countries", sc: "countries", sl: "countries", sg: "countries", sk: "countries", si: "countries", sb: "countries", so: "countries", za: "countries", ss: "countries", es: "countries", lk: "countries", sd: "countries", sr: "countries", se: "countries", ch: "countries", sy: "countries", tj: "countries", th: "countries", ps: "countries", tl: "countries", tg: "countries", to: "countries", tt: "countries", tn: "countries", tr: "countries", tm: "countries", tv: "countries", ug: "countries", ua: "countries", ae: "countries", gb: "countries", tz: "countries", us: "countries", uy: "countries", uz: "countries", vu: "countries", ve: "countries", vn: "countries", ye: "countries", zm: "countries", zw: "countries", "E0006E60-E0D9-4196-855F-8456F0C38690": "regions", "CCA4B662-8EF4-418D-B327-0D6F418AA703": "regions", "0938DB0F-E4BB-464F-ABBB-ADD615BE5371": "regions", "46358A41-9D1D-4B13-A5D2-DE9CAA1DF1C7": "regions", "21C5AE1A-B050-4EEB-8A3D-FE8BC3EB33B1": "regions", "345F2B78-DE28-475B-BA7D-81C3DA020ADF": "regions", "A23DD6C0-44C5-418D-83B5-461D79D2721A": "regions", "39AF4BA6-E769-4013-B5F2-91B2E5BACB27": "regions", "6F65B204-500B-4C56-B57D-25CC3DC809F8": "regions", "BA8BAEF5-821C-43A6-8700-5CC215D4B5B0": "regions", "99AB05D6-1FB0-4369-A673-C266A80D3004": "regions", "2c311a50-e5ba-4463-b780-2bebc578697b": "regions", "AEF6F814-52C0-4F1A-9838-5799B021BA26": "regions", "14E81A9D-73EA-4667-A699-CD78C61B3655": "regions", "005BDEA9-4063-4CD8-8E56-14D75E02D8A7": "regions", "9C5E1A4D-E8EE-4C74-B9C9-5C7BCDF6B84A": "regions", "11E24235-03ED-4D1A-A1FE-FF2798B06240": "regions", "25806FD6-C329-4878-8032-8832C92B3557": "regions", "E9E917DF-872A-4B01-B152-B019E53D046E": "regions", "90DBC1E4-AFD0-4FB4-B9EE-4CA2CB5D2C36": "regions", "89FB902F-5060-4B12-9C84-A2B8F5F45DBF": "regions", "CFCF6D60-8800-4B1F-B404-5E1FC60CEEB7": "regions", "09D072D7-6AF9-447E-85D4-F1F265FEC3C1": "regions", "0D93D0A4-3DE8-49A9-8825-1237ACBCDD60": "regions", "8317D3CB-6CAB-4C05-BC2C-2DB93A8FEC6A": "regions", "0088F30A-723A-4351-A22C-C68BEB0C56F1": "regions", "C9A535FB-8B15-4BD5-9AC7-9A9783871A5A": "regions", "6C734879-5007-47F8-A931-C9A90B17DFA5": "regions", "3BED3C61-C8C5-49D8-9AFA-0B4D03FC427F": "regions", "99724A74-6CCD-4731-B111-9EEDF2612303": "regions", "1CF17830-479B-42DD-AC6C-974E86EABE15": "regions", "8962A223-E1F2-4200-905C-51B6FEF79FFE": "regions", "57FB8FD1-7EBF-4271-9788-3716DAFEE347": "regions", "40CE7EB5-2A58-4F89-A0AF-F485BBC32F81": "regions", "6F901F3F-630D-4C4C-A3CC-BDE5C7876C68": "regions", "581432E3-4880-410D-ACBC-44B958B0E5AC": "regions", "B6C14B25-FDF6-4FA1-97A2-561D6B43FA80": "regions", "B462BE9E-38A6-4DE0-997D-2CC07853379F": "regions", "70AD3B5C-9390-4E11-B4FB-60B5591037FA": "regions", "2A2161ED-B501-4022-BDF0-8AC5F0E6A512": "regions", "613675B2-B56D-454B-8817-54FE2A0DC3AF": "regions", "3AA1250A-8715-436C-B397-75FB0C9AB472": "regions", "084D8F39-16B0-4DFC-89F9-FE1A6EE47E9F": "regions", "FFBF9DAA-79F3-4FEC-8A31-C60317BF7281": "regions", "1776454D-33DB-460B-A940-AA27A665D832": "regions", "D50FE62D-8A5E-4407-83F8-AFCAAF708EA4": "regions", "5E5B7AA4-2420-4147-825B-0820F7EC5A4B": "regions", "6BE5B5E1-1ECF-4022-924E-160092951FB8": "regions", "324EE0E0-0874-49CA-814C-7D5470193B40": "regions", "942E40CA-4C23-4D3A-A0B4-736CD0EFCD54": "regions", "3D0CCC9A-A0A1-4399-8FA2-41D4D649DB0E": "regions", "50BDFC43-84FD-4DC9-9BDD-B9C6A3C81539": "regions", "9DB40F52-ADCC-490C-9945-235CBD45CFAC": "regions", "0EC2E5AE-25F3-4D3A-B71F-8019BB62ED4B": "regions", "AB9EBE76-796B-45B3-879B-3BA009E983CC": "regions", "1C1B2D57-0F0F-423D-99C8-A048051B508C": "regions", "E5AA1403-308B-495F-9117-9F516F973C77": "regions", "B52F76F8-B8A4-4381-8A78-E0BAD505AEBE": "regions", "884FADBA-3BF3-4D76-AC7B-83E076852CD4": "regions", "7DCF92D5-8412-4CFA-A67C-C6AA7A0A69F2": "regions", "6DD4D22F-CFAE-4C2C-A2B5-4EC8386925DE": "regions", "0C201C06-3E4E-4044-85E0-DAE5DCE0F2C1": "regions", "bd12d7fb-91f7-4b2d-996c-e70f18a51f0e": "regions", "298D96B3-4BFB-4FBB-9E6E-26A40A35B5F6": "regions", "11D3515A-2C70-4766-B07C-E538AA16554B": "regions", "3C469DB7-E603-4E16-A828-A22A6E7123F1": "regions", "3B22777F-BD43-4DED-8379-EB3829BB53A5": "regions", "C595105F-C5E7-4DF3-A68D-93CC9DAB900F": "regions", "DB6CE7B5-EE86-41B1-A3A8-726E5A76C4F9": "regions", "5D13EC43-F3E0-415E-AF67-62CCC85899AF": "regions", "209A0CEA-8525-44E8-8DF5-AD8B064F2897": "regions", "12B485C4-C805-451A-A444-F6767E2E1B86": "regions", "C7E6113A-66ED-42E1-B8BB-004EC02D3D22": "regions", "948125C2-F580-4357-AA0A-B6C636279E96": "regions", "BF64EC30-A6BE-4967-959F-FFE08A6A2D0A": "regions", "293E5CA9-15DB-4D83-9CAC-F406F759727A": "regions", "8920655D-3986-465B-837A-CE055B428A74": "regions", "BE9DD6CC-F466-4735-A851-160221D6C380": "regions", "CE5B4B10-61B5-469B-961B-D541068A4098": "regions", "EFE67AA8-CB7B-4182-AAE8-A72E5A145D3B": "regions", "C5A18F9B-0E93-4FB3-B37F-67DEB5F3A696": "regions", "311A8E9C-582F-4952-A398-589073DBAC72": "regions", "AE0C442C-E11D-4CF9-AC83-4712DA612B48": "regions", "5E2E72A0-1564-4F07-B085-6409F452EA40": "regions", "50529AA0-D3B6-4F5D-97D4-436699900FBD": "regions", "D04D887E-6514-41E3-96BA-967CD3208365": "regions", "57C5F9CB-7E61-4D47-92E9-B0D3BADDAC53": "regions", "9CD6B1A8-1A47-46CF-A933-58018A093601": "regions", "E789DF4A-F71A-413C-BDFE-F33EF91AF1A0": "regions", "FB9B3E6D-C6C1-40CA-992D-2D42908FF559": "regions", "0C874AE8-1AEB-4818-A2F6-E5F7CAD6E265": "regions", "38CC1BBA-7217-4E33-B9E4-F8C063CD3FD9": "regions", "D5BEB8FF-C718-4AD7-821E-A02171F72429": "regions", "AA724727-4AF7-4D3C-9AD6-B38A45A353A1": "regions", "5E884201-FBF6-4204-923C-AAC2BF11F2E3": "regions", "07C56CEE-BFB1-41EA-972B-1B177D2AAEF7": "regions", "CDFED5B2-F60A-4C51-B00B-548606B2A41B": "regions", "1F130DD3-A710-406E-A8F3-A0A2D25EC0E1": "regions", "38126DBD-8B41-4355-B0E5-643655CBC06E": "regions", "7AE80876-D08B-4E78-AB2A-56921E1885DF": "regions", "091FD5C6-AA3D-47A7-BB61-63008D092B8B": "regions", "E5E31D9B-FE56-4807-9CF7-E1154041C5A8": "regions", "6F1D5BE4-0F37-4848-8DE4-BE83F714A2AC": "regions", "77B4AA2B-B7BF-48D5-B6CE-397207C9060F": "regions", "284697B9-D1C2-426B-890A-1ADBAC8EC477": "regions", "E9BAA797-CDAE-497E-A860-87AE784F4C53": "regions", "743D2F85-8ABA-4F35-BC83-30D295343EA8": "regions", "0451E289-BC9E-4F9D-95C0-B28A20F86BE9": "regions", "9EED1DD1-BA36-41F1-BEF9-63021AB24EBF": "regions", "952F18B8-BB83-4C7E-9232-7B3E3EA64A3C": "regions" }));
let J = {};
const L = (n2 = {}) => {
  J = D(n2);
  const { name: t2, version: i2 } = J;
  return e.config({ name: `${t2}-${i2}`, version: i2, size: 4980736, storeName: `${t2}KeyValuePairs` });
};
J.dataSources;
const q = async (n2, t2 = false) => {
  const a2 = t2 || await async function(n3) {
    const t3 = R() || getUnLocale(), s2 = `${n3}-${t3}`;
    return !await async function(n4) {
      const t4 = new Date(), i2 = await e.getItem(`${n4}-expiry`);
      if (!i2)
        return t4.setDate(t4.getDate() + J.expiry), e.setItem(`${n4}-expiry`, t4.toISOString()), false;
      if (new Date(i2) < t4)
        return console.warn(`${J.name} is expired`), await e.clear(), true;
      return false;
    }(s2) && e.getItem(s2);
  }(function(e2) {
    const { dataSources: n3 } = J;
    if (!n3)
      throw new Error("@action-agenda/cached-apis: failed to initialize module.  ensure to call initializeApiStore()");
    if (!n3.includes(e2))
      throw new Error(`Data source not valide: ${e2} - must be one of`, JSON.stringify(n3));
    return e2;
  }(n2)), o2 = n2 === "aichis" || n2 === "sdgs";
  return a2 || (n2 === "geoLocations" ? async function() {
    try {
      const n3 = await Promise.all([X(), Z()]), t3 = [...n3[0], ...n3[1]];
      return e.setItem("geoLocations", t3), t3;
    } catch (e2) {
      console.error(e2);
    }
  }() : n2 === "actionCategories" ? Array.from(y).map(De).sort((e2, n3) => e2.name.localeCompare(n3.name)) : n2 === "documentStates" ? U.map(De) : n2 === "all" ? pe() : n2 === "schemas" ? Array.from(j).map(fe) : async function(n3, t3 = "name") {
    try {
      const a3 = R() || getUnLocale(), { apisUrls: o3 } = J, r2 = { limit: 5, methods: ["get"] }, c2 = 2e4, u2 = (await axios.get(o3[n3], { timeout: c2, retry: r2 })).data.map(Be[n3]).filter((e2) => e2).sort((e2, n4) => e2[t3].localeCompare(n4[t3]));
      return e.setItem(`${n3}-${a3}`, u2), u2;
    } catch (e2) {
      console.error(e2);
    }
  }(n2, o2 ? "identifier" : void 0).then((e2) => (n2 === "orgTypes" && e2.push(ve(P)), e2)));
}, z = async (e2, n2, t2 = false) => {
  const i2 = e2 === "all" ? await async function() {
    const e3 = await q("all");
    let n3 = [];
    return e3.forEach(({ data: e4 }) => n3 = [...n3, ...e4]), n3;
  }() : await q(e2), s2 = function(e3) {
    if (typeof e3 == "string")
      return [e3];
    if (Array.isArray(e3) && function(e4) {
      return be(e4, "string");
    }(e3))
      return e3;
    if (Array.isArray(e3) && function(e4) {
      return be(e4, "object");
    }(e3))
      return e3.map((e4) => e4.identifier);
    if (Array.isArray(e3) && function(e4) {
      return be(e4, "array");
    }(e3))
      return e3.map((e4) => e4[0]);
    if (typeof e3 == "object")
      return [e3.identifier];
  }(n2) || [], a2 = i2.filter(({ identifier: e3 }) => Array.isArray(e3) ? s2.filter((n3) => e3.includes(n3)).length : s2.includes(e3));
  return a2 && a2.length === 1 && t2 ? a2[0] : a2 && a2.length ? a2 : void 0;
}, Z = () => q("countries"), X = () => q("regions"), pe = async () => {
  const n2 = R() || getUnLocale(), t2 = await Promise.all([q("documentStates"), q("actionCategories"), q("orgTypes"), q("govTypes"), q("aichis"), q("sdgs"), q("jurisdictions"), q("subjects"), q("countries"), q("regions"), q("schemas")]), s2 = [{ filter: o("Document States"), data: t2[0] || [] }, { filter: o("Action Categories"), data: t2[1] || [] }, { filter: o("Organization Types"), data: t2[2] || [] }, { filter: o("Governments Types"), data: t2[3] || [] }, { filter: o("Aichi Targets"), data: t2[4] || [] }, { filter: o("SDGs"), data: t2[5] || [] }, { filter: o("Jurisdictions"), data: t2[6] || [] }, { filter: o("Subjects"), data: t2[7] || [] }, { filter: o("Countries"), data: t2[8] || [] }, { filter: o("Regions"), data: t2[9] || [] }, { filter: o("schemas"), data: t2[10] || [] }];
  return !t2.map((e2) => e2.length).includes(0) && e.setItem(`all-${n2}`, s2), s2;
}, Be = { jurisdictions: De, aichis: function(e2) {
  const { identifier: n2 } = e2, t2 = n2.substring(13), i2 = `https://attachments.cbd.int/${t2}.svg`, s2 = `https://www.cbd.int/aichi-targets/target/${t2}`;
  return __spreadProps2(__spreadValues2({}, De(e2)), { image: i2, url: s2 });
}, subjects: De, countries: function(e2) {
  const { identifier: n2 } = e2, t2 = `https://www.cbd.int/images/flags/96/flag-${n2}-96.png`, i2 = `https://www.cbd.int/countries/?country=${n2}`;
  return __spreadProps2(__spreadValues2({}, De(e2)), { image: t2, url: i2 });
}, orgTypes: ve, govTypes: function(e2) {
  const { identifier: n2 } = e2;
  return he.includes(n2) ? De(e2) : void 0;
}, regions: De, geoLocations: De, sdgs: function(e2) {
  const { code: n2 } = e2, t2 = function(e3) {
    const { length: n3 } = e3;
    if (!["string", "number"].includes(typeof e3) || !n3)
      throw new Error("@action-agenda/cached-apis.padCode: cade passed must be string or number");
    return n3 === 1 ? `0${e3}` : e3;
  }(n2);
  return __spreadValues2({ identifier: `SDG-GOAL-${t2}`, image: `https://attachments.cbd.int/sdg-${t2}.svg`, url: `https://sustainabledevelopment.un.org/sdg${n2}` }, Fe(e2));
} };
function be(e2, n2) {
  let t2 = false;
  return e2.forEach((e3) => {
    t2 = function(e4, n3) {
      return !(!Array.isArray(e4) || n3 !== "array") || typeof e4 === n3 && !Array.isArray(e4) && e4 !== null;
    }(e3, n2);
  }), t2;
}
function fe(e2) {
  const { identifier: i2 } = e2, { name: s2 } = ye(e2);
  return t({ identifier: i2, name: s2 }, n);
}
function De(e2) {
  const { identifier: i2, image: s2, url: a2 } = e2, { name: o2, alternateName: r2 } = ye(e2);
  return t({ identifier: i2, name: o2, alternateName: r2, image: s2, url: a2 }, n);
}
const he = ["1C3A4FF4-9AB7-4A34-BE06-E07F575B7A32", "8830904C-8AF4-4C2F-AADB-363D98D854DA", "B3699A74-EF2E-467A-A82F-EF2149A2EFC5"];
function ve(e2) {
  const { identifier: n2 } = e2;
  if (!he.includes(n2))
    return De(e2);
}
function ye(e2) {
  const { name: n2, title: t2, alternateName: i2 } = e2;
  return { name: Te(n2) ? Se(n2) : Se(t2), alternateName: Se(i2) };
}
function Se(e2) {
  if (!e2)
    return;
  if (typeof e2 == "string")
    return "";
  if (!Te(e2))
    throw new Error("property is not an lstring");
  return e2[R() || getUnLocale()] || e2.en;
}
function Te(e2) {
  return e2 && typeof e2 === "object" && e2.en;
}
function Fe({ code: e2, title: n2 }) {
  const t2 = Number(e2) - 1, s2 = R() || getUnLocale();
  return { name: (G[s2] || G.en)[t2], alternateName: n2 };
}
const globalProps$1 = { options: { api: "https://api.cbd.int/api/v2013/index/select" } };
const getOptions = () => new Promise(loadingIntervalOptions);
const updateOptions = (options) => {
  globalProps$1.options = __spreadValues(__spreadValues({}, globalProps$1.options), options);
};
const initializeOptions = (options = globalProps$1.options) => {
  globalProps$1.options = options;
};
function loadingIntervalOptions(resolve, reject) {
  const timeOut = setTimeout(() => {
    clearInterval(getTimer());
    reject("Error loading api- globalProps.options not set via initializeApi");
  }, 5e3);
  const timer = setInterval(() => {
    const { options } = globalProps$1;
    if (!options)
      return;
    const { api } = options;
    clearInterval(getTimer());
    clearTimeout(getTimeOut());
    if (!api)
      throw new Error("api: you must pass an 'api' param too initializeApi");
    return resolve(Object.freeze(options));
  }, 100);
  function getTimer() {
    return timer;
  }
  function getTimeOut() {
    return timeOut;
  }
}
const cache = /* @__PURE__ */ new Map();
init();
const hasCache = (urlSearchParams) => {
  cache.has(urlSearchParams.toString());
};
const setCache = (urlSearchParams, value) => cache.set(urlSearchParams.toString(), value);
const getCache = (urlSearchParams) => cache.get(urlSearchParams.toString());
const clearCache = () => cache.clear();
function init() {
  setInterval(() => {
    clearCache();
  }, 1e3 * 60 * 5);
}
const globalProps = { page: { start: 0, rows: 10 } };
const clone = (obj) => JSON.parse(JSON.stringify(obj));
const getIsPageZero = () => globalProps.page.start < globalProps.page.rows;
const resetPaging = () => {
  globalProps.page = { start: 0, rows: 10 };
};
const getPage = () => Object.freeze(clone(globalProps.page));
const getNextPage = () => {
  globalProps.page.start = globalProps.page.rows + globalProps.page.start;
  return getPage();
};
const getSearchParams = async (next) => {
  const filters = await readSearchParams$1();
  const page = next ? getNextPage() : getPage();
  return defaultQuery({ filters, page });
};
var getQuery = (next) => Promise.all([getApi(), getSearchParams(next)]);
const getApi = async () => {
  const { api } = await getOptions();
  return `${api}`;
};
async function readSearchParams$1() {
  const params = new URL(document.location).searchParams;
  return params.getAll("filter");
}
function defaultQuery({ filters, page }) {
  const { start, rows } = page || { start: 0, rows: 10 };
  const urlSearchParams = getBaseUrlSearchParams();
  const defaultQ = "NOT version_s:* AND ( realm_ss:chm ) ";
  const textQueries = getTextQueries(filters) ? ` AND (${getTextQueries(filters)})` : "";
  const termFilters = filters ? filters.filter((identifier) => !identifier.startsWith("FREETEXT-")) : "";
  const filterQ = termFilters && termFilters.length ? Array.isArray(termFilters) ? ` AND (all_terms_ss:(${termFilters.join(" AND ")}))` : ` AND (all_terms_ss:${termFilters})` : "";
  const schemaQ = `${filterQ}${textQueries}`;
  const params = new URL(document.location).searchParams;
  const sortFilter = params.get("sort") ? params.get("sort") : "updatedDate_dt desc";
  const sort2 = sortFilter;
  urlSearchParams.set("q", `(${defaultQ}${schemaQ})`);
  urlSearchParams.set("rows", rows);
  urlSearchParams.set("start", start);
  urlSearchParams.set("sort", sort2);
  return urlSearchParams;
}
function getBaseUrlSearchParams() {
  const facetFieldsQS = "facet.field=schema_s&facet.field=all_terms_ss";
  const urlSearchParams = new URLSearchParams(facetFieldsQS);
  urlSearchParams.set("facet", "true");
  urlSearchParams.set("facet.limit", 999999);
  urlSearchParams.set("facet.mincount", 1);
  urlSearchParams.set("sort", "createdDate_dt desc");
  urlSearchParams.set("t", "json");
  return urlSearchParams;
}
function getTextFilters(filters) {
  if (!filters || !(filters == null ? void 0 : filters.length))
    return void 0;
  return filters.filter((identifier) => identifier.startsWith("FREETEXT-")).map((identifier) => identifier.replace("FREETEXT-", ""));
}
function getTextQueries(filters) {
  const textFilters = getTextFilters(filters);
  if (!textFilters)
    return "";
  let textQuery = "";
  for (const aText of textFilters) {
    textQuery += `title_t:"${aText}*" OR summary_t:"${aText}*" OR description_t:"${aText}*" OR text_EN_txt:"${aText}*" OR`;
  }
  const { length } = textQuery;
  return textQuery.slice(0, length - 3);
}
const list = async (next = false) => {
  try {
    const isNewQuery = !next && !getIsPageZero();
    if (isNewQuery)
      resetPaging();
    const [api, params] = await getQuery(next);
    const rows = hasCache(params) ? getCache(params) : await axios.get(api, { params }).then(calculateCounts);
    if (!hasCache(params))
      setCache(params, rows);
    if (next)
      setTimeout(() => emitNextPageLoaded(), 250);
    return rows;
  } catch (e2) {
    const msg = e2.response ? e2.response.status : "";
    if (msg)
      return console.error(msg, e2);
    return console.error(e2);
  }
};
async function emitNextPageLoaded() {
  const { $el } = await getOptions();
  if (!$el)
    throw new Error("api->list->emitNextPageLoaded: error $el not set vie actions-api->options->");
  const event = new Event("$nextPageLoaded", { bubbles: true });
  event.$page = getNextPage();
  $el.dispatchEvent(event);
}
function calculateCounts({ data: data2 }) {
  const { response, facet_counts: facetCounts } = data2;
  const { numFound: total, docs: rows } = response;
  const filterCounts = getFilterCounts(facetCounts.facet_fields);
  return { total, filterCounts, rows: rows.map(normalizeData) };
}
function getFilterCounts(facets) {
  const filterCounts = {};
  for (const solrField in facets) {
    if ({}.hasOwnProperty.call(facets, solrField)) {
      for (let index = 0; index < facets[solrField].length; index += 2) {
        filterCounts[facets[solrField][index]] = facets[solrField][index + 1];
      }
    }
  }
  return filterCounts;
}
function normalizeData({ id, schema_s: schema, summary_EN_t, description_EN_t, title_EN_t, url_ss, updatedDate_dt: modifiedOn, startDate_dt: startDate }) {
  const description = description_EN_t || summary_EN_t;
  const name2 = title_EN_t;
  const url = url_ss ? url_ss[0] : "";
  const dateTime = startDate || modifiedOn;
  return {
    id,
    name: name2,
    description,
    url,
    dateTime,
    schema
  };
}
const getList = list;
const initializeApi = (opts2) => {
  L(opts2);
  initializeOptions(opts2);
};
var CardBody_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a = {
  name: "CardBody",
  props: {
    name: { type: String, required: true },
    description: { type: String }
  }
};
const _hoisted_1$9 = { class: "container-fluid" };
const _hoisted_2$8 = { class: "row no-gutters" };
const _hoisted_3$6 = { class: "col-sm-12" };
const _hoisted_4$5 = { class: "card-body" };
const _hoisted_5$5 = { class: "card-title" };
const _hoisted_6$5 = { class: "card-text desc description" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    createElementVNode("div", _hoisted_2$8, [
      createElementVNode("div", _hoisted_3$6, [
        createElementVNode("div", _hoisted_4$5, [
          createElementVNode("h5", _hoisted_5$5, toDisplayString($props.name || ""), 1),
          createElementVNode("p", _hoisted_6$5, toDisplayString($props.description || ""), 1)
        ])
      ])
    ])
  ]);
}
var HorzCardAction = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-093999b6"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$9 = {
  name: "SearchListCard",
  components: { HorzCardAction },
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    dateTime: { type: String, required: false },
    schema: { type: String, required: false },
    url: { type: String, required: true },
    options: { type: Object, required: true }
  },
  computed: { status },
  methods: { loadIcons },
  filters: { dateFormat },
  data: data$3,
  created: created$2,
  updated,
  i18n
};
function data$3() {
  return { icons: [] };
}
async function updated() {
  await this.loadIcons();
}
async function created$2() {
  await this.loadIcons();
}
function status() {
  return this.meta.status;
}
function dateFormat(date) {
  const d2 = new Date(date);
  return `${d2.getUTCFullYear()}-${monthFormat(d2.getUTCMonth())}-${dayFormat(d2.getUTCDate())}  `;
}
function monthFormat(month) {
  if (month < 10)
    return `0${month + 1}`;
  return month + 1;
}
function dayFormat(day) {
  if (day < 10)
    return `0${day}`;
  return day;
}
function loadIcons() {
  const iconData = [...(this.actionDetails || {}).actionCategories || []];
  if (!iconData.length)
    return;
  for (const [index, { identifier } = {}] of iconData.entries())
    if (identifier) {
      iconData[index] = z("all", identifier, true);
      if (!iconData[index]) {
        console.error("id", this._id);
        console.error("iconData", iconData);
        throw new Error("identifier not found");
      }
    }
  this.icons = iconData;
}
const _hoisted_1$8 = { class: "card card-row mb-5" };
const _hoisted_2$7 = { class: "card-header" };
const _hoisted_3$5 = { class: "row" };
const _hoisted_4$4 = { class: "col-12 text-right" };
const _hoisted_5$4 = { class: "text-muted" };
const _hoisted_6$4 = { class: "card-footer" };
const _hoisted_7$4 = {
  class: "btn-group",
  role: "group",
  "aria-label": "Card actions, view, edit publish, reject"
};
const _hoisted_8$3 = ["href"];
const _hoisted_9$3 = { class: "text-muted float-right" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HorzCardAction = resolveComponent("HorzCardAction");
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createElementVNode("div", _hoisted_2$7, [
      createElementVNode("div", _hoisted_3$5, [
        createElementVNode("div", _hoisted_4$4, [
          createElementVNode("span", _hoisted_5$4, toDisplayString(_ctx.$t($props.schema)), 1)
        ])
      ])
    ]),
    createVNode(_component_HorzCardAction, normalizeProps(guardReactiveProps(_ctx.$props)), null, 16),
    createElementVNode("div", _hoisted_6$4, [
      createElementVNode("div", _hoisted_7$4, [
        createElementVNode("a", {
          href: $props.url,
          target: "_blank",
          rel: "nopener noreferrer",
          type: "button",
          class: "btn btn-primary btn-sm"
        }, toDisplayString(_ctx.$t("View record")), 9, _hoisted_8$3)
      ]),
      createElementVNode("small", _hoisted_9$3, toDisplayString($props.dateTime || _ctx.dateFormat), 1)
    ])
  ]);
}
var Card = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-17a9a23e"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = {
  name: "SearchList",
  components: { Card },
  props: {
    rows: { type: Array, required: true },
    options: { type: Object, required: true },
    onScroll: { type: Function, required: true }
  },
  methods: { cardProps },
  mounted: mounted$2,
  beforeDestroy
};
function mounted$2() {
  window.addEventListener("scroll", this.onScroll(this.$el));
}
function beforeDestroy() {
  window.removeEventListener("scroll", this.onScroll(this.$el));
}
function cardProps(action = {}) {
  return __spreadProps(__spreadValues({}, action), { options: this.options });
}
const _hoisted_1$7 = {
  class: "list",
  ref: "list"
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_card = resolveComponent("card");
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.rows, (action, index) => {
      return openBlock(), createBlock(_component_card, mergeProps({ key: index }, $options.cardProps(action)), null, 16);
    }), 128))
  ], 512);
}
var List = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-6f58f77a"]]);
const dev$1 = { basePath: "/" };
const stg$1 = __spreadValues({}, dev$1);
const prod$1 = __spreadValues({}, stg$1);
const ENVS = { dev: dev$1, stg: stg$1, prod: prod$1 };
const V_MAP = { basePath: String };
const globalDefaultOptions = {};
class DefaultOptions {
  constructor({ environments: environments2, validationMap: validationMap2, forceEnv, name: name2 }) {
    environments2 = assignEnvironments(environments2);
    validationMap2 = Object.assign(V_MAP, validationMap2);
    this.props = { environments: environments2, validationMap: validationMap2, forceEnv, name: name2 };
  }
  get(userOpts = {}, env = this.env) {
    const { environments: environments2 } = this.props;
    for (const propName in userOpts)
      environments2[env][propName] = userOpts[propName];
    this.validate(environments2[env]);
    return environments2[env];
  }
  get env() {
    if (this.props.forceEnv)
      return this.props.forceEnv;
    if (isServer() && (typeof process !== "undefined" && process.env))
      return "production";
    return getEnvClient();
  }
  validate(opts2) {
    return validate(opts2, this.props.validationMap);
  }
}
const setDefaultOptions = ({ environments: environments2, validationMap: validationMap2, forceEnv, name: name2 }, nameSpace = name2) => {
  if (!nameSpace)
    throw new Error(" @houlagins/default-options.setDefaultOptions: no name/nameSpace passed to setDefaultOptions");
  globalDefaultOptions[nameSpace] = new DefaultOptions({ environments: environments2, validationMap: validationMap2, forceEnv, name: name2 });
};
const getDefaultOptionsFunction = (nameSpace) => (userOpts = {}, forceEnv) => globalDefaultOptions[nameSpace].get(userOpts, forceEnv);
function getEnvClient() {
  const thisHost = window.location.href;
  if (stg$1.hostname && thisHost.includes(stg$1.hostname))
    return "stg";
  if (dev$1.hostname && thisHost.includes(dev$1.hostname))
    return "dev";
  if (prod$1.hostname && thisHost.includes(prod$1.hostname))
    return "prod";
  return "prod";
}
function isServer() {
  return typeof window === "undefined";
}
function validate(opts2, vMap) {
  for (const key in opts2) {
    const rType = opts2[key].constructor ? opts2[key].constructor : typeof opts2[key] === "object" ? Object : void 0;
    const eType = vMap[key];
    if (!Object.keys(vMap).includes(key))
      unknownKeyError(opts2, key);
    if (rType !== eType)
      errorUnknownType(key, rType.name, eType.name);
  }
}
function unknownKeyError(options, key) {
  throw new Error(`${key} not permitted in  component: options`);
}
function errorUnknownType(key, rType, eType) {
  throw new Error(`${key} has incorrect type.  Received: ${rType} Expected: ${eType}`);
}
function assignEnvironments(environments2) {
  const dev2 = Object.assign({}, ENVS.dev, environments2.dev || environments2.development || {});
  const stg2 = Object.assign({}, ENVS.stg, environments2.stg || environments2.staging || {});
  const prod2 = Object.assign({}, ENVS.prod, environments2.prod || environments2.production || {});
  const development = dev2;
  const staging = stg2;
  const production = prod2;
  return { development, dev: dev2, staging, stg: stg2, production, prod: prod2 };
}
const name$1 = "@action-agenda/search";
const basePath = "/";
const locale = "";
const smTop = "0";
const mdTop = "0";
const lgTop = "0";
const dev = {
  hostname: "cbddev.xyz",
  api: "https://api.cbd.int/api/v2013/index/select",
  basePath,
  locale,
  smTop,
  mdTop,
  lgTop,
  show: true
};
const stg = __spreadValues({ hostname: "staging.cbd.int" }, dev);
const prod = __spreadProps(__spreadValues({ hostname: "cbd.int" }, stg), { api: "https://api.cbd.int/api/v2013/index/select" });
const environments = { prod, stg, dev };
const validationMap = {
  forceEnv: String,
  basePath: String,
  locale: String,
  api: String,
  hostname: String,
  listenExternally: Boolean,
  preLoadFilter: Object,
  smTop: String,
  mdTop: String,
  lgTop: String,
  show: Boolean
};
setDefaultOptions({ environments, validationMap, name: name$1 }, name$1);
var getDefaultOptions = getDefaultOptionsFunction(name$1);
function isEmpty(opt) {
  if (opt === 0)
    return false;
  if (Array.isArray(opt) && opt.length === 0)
    return true;
  return !opt;
}
function not(fun) {
  return (...params) => !fun(...params);
}
function includes(str, query) {
  let stringTemp = str;
  if (str === void 0)
    stringTemp = "undefined";
  if (str === null)
    stringTemp = "null";
  if (str === false)
    stringTemp = "false";
  const text = stringTemp.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1;
}
function filterOptions(options, search, label, customLabel) {
  return options.filter((option) => includes(customLabel(option, label), search));
}
function stripGroups(options) {
  return options.filter((option) => !option.$isLabel);
}
function flattenOptions(values, label) {
  return (options) => options.reduce((prev, curr) => {
    if (curr[values] && curr[values].length) {
      prev.push({
        $groupLabel: curr[label],
        $isLabel: true
      });
      return prev.concat(curr[values]);
    }
    return prev;
  }, []);
}
function filterGroups(search, label, values, groupLabel, customLabel) {
  return (groups) => groups.map((group) => {
    if (!group[values]) {
      console.warn("Options passed to vue-multiselect do not contain groups, despite the config.");
      return [];
    }
    const groupOptions = filterOptions(group[values], search, label, customLabel);
    return groupOptions.length ? {
      [groupLabel]: group[groupLabel],
      [values]: groupOptions
    } : [];
  });
}
const flow = (...fns) => (x2) => fns.reduce((v2, f2) => f2(v2), x2);
var multiselectMixin = {
  data() {
    return {
      search: "",
      isOpen: false,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    internalSearch: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: {
      type: null,
      default() {
        return [];
      }
    },
    trackBy: {
      type: String
    },
    label: {
      type: String
    },
    searchable: {
      type: Boolean,
      default: true
    },
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    hideSelected: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "Select option"
    },
    allowEmpty: {
      type: Boolean,
      default: true
    },
    resetAfter: {
      type: Boolean,
      default: false
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    customLabel: {
      type: Function,
      default(option, label) {
        if (isEmpty(option))
          return "";
        return label ? option[label] : option;
      }
    },
    taggable: {
      type: Boolean,
      default: false
    },
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    tagPosition: {
      type: String,
      default: "top"
    },
    max: {
      type: [Number, Boolean],
      default: false
    },
    id: {
      default: null
    },
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    groupValues: {
      type: String
    },
    groupLabel: {
      type: String
    },
    groupSelect: {
      type: Boolean,
      default: false
    },
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    preserveSearch: {
      type: Boolean,
      default: false
    },
    preselectFirst: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (!this.multiple && this.max) {
      console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.");
    }
    if (this.preselectFirst && !this.internalValue.length && this.options.length) {
      this.select(this.filteredOptions[0]);
    }
  },
  computed: {
    internalValue() {
      return this.value || this.value === 0 ? Array.isArray(this.value) ? this.value : [this.value] : [];
    },
    filteredOptions() {
      const search = this.search || "";
      const normalizedSearch = search.toLowerCase().trim();
      let options = this.options.concat();
      if (this.internalSearch) {
        options = this.groupValues ? this.filterAndFlat(options, normalizedSearch, this.label) : filterOptions(options, normalizedSearch, this.label, this.customLabel);
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }
      options = this.hideSelected ? options.filter(not(this.isSelected)) : options;
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === "bottom") {
          options.push({ isTag: true, label: search });
        } else {
          options.unshift({ isTag: true, label: search });
        }
      }
      return options.slice(0, this.optionsLimit);
    },
    valueKeys() {
      if (this.trackBy) {
        return this.internalValue.map((element) => element[this.trackBy]);
      }
      return this.internalValue;
    },
    optionKeys() {
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return options.map((element) => this.customLabel(element, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue() {
      if (this.resetAfter && this.internalValue.length) {
        this.search = "";
        this.$emit("input", this.multiple ? [] : null);
      }
    },
    search() {
      this.$emit("search-change", this.search, this.id);
    }
  },
  methods: {
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    filterAndFlat(options, search, label) {
      return flow(filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel), flattenOptions(this.groupValues, this.groupLabel))(options);
    },
    flatAndStrip(options) {
      return flow(flattenOptions(this.groupValues, this.groupLabel), stripGroups)(options);
    },
    updateSearch(query) {
      this.search = query;
    },
    isExistingOption(query) {
      return !this.options ? false : this.optionKeys.indexOf(query) > -1;
    },
    isSelected(option) {
      const opt = this.trackBy ? option[this.trackBy] : option;
      return this.valueKeys.indexOf(opt) > -1;
    },
    isOptionDisabled(option) {
      return !!option.$isDisabled;
    },
    getOptionLabel(option) {
      if (isEmpty(option))
        return "";
      if (option.isTag)
        return option.label;
      if (option.$isLabel)
        return option.$groupLabel;
      const label = this.customLabel(option, this.label);
      if (isEmpty(label))
        return "";
      return label;
    },
    select(option, key) {
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option);
        return;
      }
      if (this.blockKeys.indexOf(key) !== -1 || this.disabled || option.$isDisabled || option.$isLabel)
        return;
      if (this.max && this.multiple && this.internalValue.length === this.max)
        return;
      if (key === "Tab" && !this.pointerDirty)
        return;
      if (option.isTag) {
        this.$emit("tag", option.label, this.id);
        this.search = "";
        if (this.closeOnSelect && !this.multiple)
          this.deactivate();
      } else {
        const isSelected = this.isSelected(option);
        if (isSelected) {
          if (key !== "Tab")
            this.removeElement(option);
          return;
        }
        this.$emit("select", option, this.id);
        if (this.multiple) {
          this.$emit("input", this.internalValue.concat([option]), this.id);
        } else {
          this.$emit("input", option, this.id);
        }
        if (this.clearOnSelect)
          this.search = "";
      }
      if (this.closeOnSelect)
        this.deactivate();
    },
    selectGroup(selectedGroup) {
      const group = this.options.find((option) => option[this.groupLabel] === selectedGroup.$groupLabel);
      if (!group)
        return;
      if (this.wholeGroupSelected(group)) {
        this.$emit("remove", group[this.groupValues], this.id);
        const newValue = this.internalValue.filter((option) => group[this.groupValues].indexOf(option) === -1);
        this.$emit("input", newValue, this.id);
      } else {
        const optionsToAdd = group[this.groupValues].filter((option) => !(this.isOptionDisabled(option) || this.isSelected(option)));
        this.$emit("select", optionsToAdd, this.id);
        this.$emit("input", this.internalValue.concat(optionsToAdd), this.id);
      }
    },
    wholeGroupSelected(group) {
      return group[this.groupValues].every((option) => this.isSelected(option) || this.isOptionDisabled(option));
    },
    wholeGroupDisabled(group) {
      return group[this.groupValues].every(this.isOptionDisabled);
    },
    removeElement(option, shouldClose = true) {
      if (this.disabled)
        return;
      if (option.$isDisabled)
        return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const index = typeof option === "object" ? this.valueKeys.indexOf(option[this.trackBy]) : this.valueKeys.indexOf(option);
      this.$emit("remove", option, this.id);
      if (this.multiple) {
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1));
        this.$emit("input", newValue, this.id);
      } else {
        this.$emit("input", null, this.id);
      }
      if (this.closeOnSelect && shouldClose)
        this.deactivate();
    },
    removeLastElement() {
      if (this.blockKeys.indexOf("Delete") !== -1)
        return;
      if (this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
      }
    },
    activate() {
      if (this.isOpen || this.disabled)
        return;
      this.adjustPosition();
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }
      this.isOpen = true;
      if (this.searchable) {
        if (!this.preserveSearch)
          this.search = "";
        this.$nextTick(() => this.$refs.search.focus());
      } else {
        this.$el.focus();
      }
      this.$emit("open", this.id);
    },
    deactivate() {
      if (this.isOpen) {
        this.isOpen = false;
        if (this.searchable) {
          this.$refs.search.blur();
        } else {
          this.$el.blur();
        }
        if (!this.preserveSearch)
          this.search = "";
        this.$emit("close", this.getValue(), this.id);
      }
    },
    toggle() {
      if (this.isOpen) {
        this.deactivate();
      } else {
        this.activate();
      }
    },
    adjustPosition() {
      if (typeof window === "undefined")
        return;
      const spaceAbove = this.$el.getBoundingClientRect().top;
      const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight;
      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === "below" || this.openDirection === "bottom") {
        this.preferredOpenDirection = "below";
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight);
      } else {
        this.preferredOpenDirection = "above";
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight);
      }
    }
  }
};
var pointerMixin = {
  data() {
    return {
      pointer: 0,
      pointerDirty: false
    };
  },
  props: {
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = false;
    }
  },
  methods: {
    optionHighlight(index, option) {
      return {
        "multiselect__option--highlight": index === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(option)
      };
    },
    groupHighlight(index, selectedGroup) {
      if (!this.groupSelect) {
        return ["multiselect__option--group", "multiselect__option--disabled"];
      }
      const group = this.options.find((option) => option[this.groupLabel] === selectedGroup.$groupLabel);
      return group && !this.wholeGroupDisabled(group) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": index === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(group) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key } = "Enter") {
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key);
      }
      this.pointerReset();
    },
    pointerForward() {
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;
        const position = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
        if (this.$refs.list.scrollTop <= position) {
          this.$refs.list.scrollTop = position;
        }
        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect)
          this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerBackward() {
      if (this.pointer > 0) {
        this.pointer--;
        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition;
        }
        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect)
          this.pointerBackward();
      } else if (this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect) {
        this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerReset() {
      if (!this.closeOnSelect)
        return;
      this.pointer = 0;
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust() {
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0;
      }
      if (this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect) {
        this.pointerForward();
      }
    },
    pointerSet(index) {
      this.pointer = index;
      this.pointerDirty = true;
    }
  }
};
var Multiselect_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = {
  name: "vue-multiselect",
  mixins: [multiselectMixin, pointerMixin],
  props: {
    name: {
      type: String,
      default: ""
    },
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    showLabels: {
      type: Boolean,
      default: true
    },
    limit: {
      type: Number,
      default: 99999
    },
    maxHeight: {
      type: Number,
      default: 300
    },
    limitText: {
      type: Function,
      default: (count) => `and ${count} more`
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    openDirection: {
      type: String,
      default: ""
    },
    showNoOptions: {
      type: Boolean,
      default: true
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      if (this.searchable || this.multiple && this.value && this.value.length) {
        return this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" };
      }
      return { width: "100%" };
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      if (this.openDirection === "above" || this.openDirection === "top") {
        return true;
      }
      if (this.openDirection === "below" || this.openDirection === "bottom") {
        return false;
      }
      return this.preferredOpenDirection === "above";
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : true);
    }
  }
};
const _hoisted_1$6 = ["tabindex"];
const _hoisted_2$6 = {
  ref: "tags",
  class: "multiselect__tags"
};
const _hoisted_3$4 = { class: "multiselect__tags-wrap" };
const _hoisted_4$3 = ["textContent"];
const _hoisted_5$3 = ["onKeypress", "onMousedown"];
const _hoisted_6$3 = ["textContent"];
const _hoisted_7$3 = { class: "multiselect__spinner" };
const _hoisted_8$2 = ["name", "id", "placeholder", "value", "disabled", "tabindex"];
const _hoisted_9$2 = { key: 0 };
const _hoisted_10$2 = { class: "multiselect__option" };
const _hoisted_11$2 = ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"];
const _hoisted_12$2 = ["data-select", "data-deselect", "onMouseenter", "onMousedown"];
const _hoisted_13$2 = { class: "multiselect__option" };
const _hoisted_14$1 = /* @__PURE__ */ createTextVNode("No elements found. Consider changing the search query.");
const _hoisted_15$1 = { class: "multiselect__option" };
const _hoisted_16$1 = /* @__PURE__ */ createTextVNode("List is empty.");
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    tabindex: _ctx.searchable ? -1 : $props.tabindex,
    class: normalizeClass([{ "multiselect--active": _ctx.isOpen, "multiselect--disabled": $props.disabled, "multiselect--above": $options.isAbove }, "multiselect"]),
    onFocus: _cache[13] || (_cache[13] = ($event) => _ctx.activate()),
    onBlur: _cache[14] || (_cache[14] = ($event) => _ctx.searchable ? false : _ctx.deactivate()),
    onKeydown: [
      _cache[15] || (_cache[15] = withKeys(withModifiers(($event) => _ctx.pointerForward(), ["self", "prevent"]), ["down"])),
      _cache[16] || (_cache[16] = withKeys(withModifiers(($event) => _ctx.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => _ctx.addPointerElement($event), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: _cache[18] || (_cache[18] = withKeys(($event) => _ctx.deactivate(), ["esc"]))
  }, [
    renderSlot(_ctx.$slots, "caret", { toggle: _ctx.toggle }, () => [
      createElementVNode("div", {
        onMousedown: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.toggle(), ["prevent", "stop"])),
        class: "multiselect__select"
      }, null, 32)
    ], true),
    renderSlot(_ctx.$slots, "clear", { search: _ctx.search }, void 0, true),
    createElementVNode("div", _hoisted_2$6, [
      renderSlot(_ctx.$slots, "selection", {
        search: _ctx.search,
        remove: _ctx.removeElement,
        values: $options.visibleValues,
        isOpen: _ctx.isOpen
      }, () => [
        withDirectives(createElementVNode("div", _hoisted_3$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.visibleValues, (option, index) => {
            return renderSlot(_ctx.$slots, "tag", {
              option,
              search: _ctx.search,
              remove: _ctx.removeElement
            }, () => [
              (openBlock(), createElementBlock("span", {
                class: "multiselect__tag",
                key: index
              }, [
                createElementVNode("span", {
                  textContent: toDisplayString(_ctx.getOptionLabel(option))
                }, null, 8, _hoisted_4$3),
                createElementVNode("i", {
                  "aria-hidden": "true",
                  tabindex: "1",
                  onKeypress: withKeys(withModifiers(($event) => _ctx.removeElement(option), ["prevent"]), ["enter"]),
                  onMousedown: withModifiers(($event) => _ctx.removeElement(option), ["prevent"]),
                  class: "multiselect__tag-icon"
                }, null, 40, _hoisted_5$3)
              ]))
            ], true);
          }), 256))
        ], 512), [
          [vShow, $options.visibleValues.length > 0]
        ]),
        _ctx.internalValue && _ctx.internalValue.length > $props.limit ? renderSlot(_ctx.$slots, "limit", { key: 0 }, () => [
          createElementVNode("strong", {
            class: "multiselect__strong",
            textContent: toDisplayString($props.limitText(_ctx.internalValue.length - $props.limit))
          }, null, 8, _hoisted_6$3)
        ], true) : createCommentVNode("", true)
      ], true),
      createVNode(Transition, { name: "multiselect__loading" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "loading", {}, () => [
            withDirectives(createElementVNode("div", _hoisted_7$3, null, 512), [
              [vShow, $props.loading]
            ])
          ], true)
        ]),
        _: 3
      }),
      _ctx.searchable ? (openBlock(), createElementBlock("input", {
        key: 0,
        ref: "search",
        name: $props.name,
        id: _ctx.id,
        type: "text",
        autocomplete: "nope",
        placeholder: _ctx.placeholder,
        style: normalizeStyle($options.inputStyle),
        value: _ctx.search,
        disabled: $props.disabled,
        tabindex: $props.tabindex,
        onInput: _cache[1] || (_cache[1] = ($event) => _ctx.updateSearch($event.target.value)),
        onFocus: _cache[2] || (_cache[2] = withModifiers(($event) => _ctx.activate(), ["prevent"])),
        onBlur: _cache[3] || (_cache[3] = withModifiers(($event) => _ctx.deactivate(), ["prevent"])),
        onKeyup: _cache[4] || (_cache[4] = withKeys(($event) => _ctx.deactivate(), ["esc"])),
        onKeydown: [
          _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => _ctx.pointerForward(), ["prevent"]), ["down"])),
          _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.pointerBackward(), ["prevent"]), ["up"])),
          _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => _ctx.removeLastElement(), ["stop"]), ["delete"]))
        ],
        onKeypress: _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => _ctx.addPointerElement($event), ["prevent", "stop", "self"]), ["enter"])),
        class: "multiselect__input"
      }, null, 44, _hoisted_8$2)) : createCommentVNode("", true),
      $options.isSingleLabelVisible ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: "multiselect__single",
        onMousedown: _cache[9] || (_cache[9] = withModifiers((...args) => _ctx.toggle && _ctx.toggle(...args), ["prevent"]))
      }, [
        renderSlot(_ctx.$slots, "singleLabel", { option: $options.singleValue }, () => [
          createElementVNode("template", null, [
            createTextVNode(toDisplayString(_ctx.currentOptionLabel), 1)
          ])
        ], true)
      ], 32)) : createCommentVNode("", true),
      $options.isPlaceholderVisible ? (openBlock(), createElementBlock("span", {
        key: 2,
        class: "multiselect__placeholder",
        onMousedown: _cache[10] || (_cache[10] = withModifiers((...args) => _ctx.toggle && _ctx.toggle(...args), ["prevent"]))
      }, [
        renderSlot(_ctx.$slots, "placeholder", {}, () => [
          createTextVNode(toDisplayString(_ctx.placeholder), 1)
        ], true)
      ], 32)) : createCommentVNode("", true)
    ], 512),
    createVNode(Transition, { name: "multiselect" }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("div", {
          class: "multiselect__content-wrapper",
          onFocus: _cache[11] || (_cache[11] = (...args) => _ctx.activate && _ctx.activate(...args)),
          tabindex: "-1",
          onMousedown: _cache[12] || (_cache[12] = withModifiers(() => {
          }, ["prevent"])),
          style: normalizeStyle({ maxHeight: _ctx.optimizedHeight + "px" }),
          ref: "list"
        }, [
          createElementVNode("ul", {
            class: "multiselect__content",
            style: normalizeStyle($options.contentStyle)
          }, [
            renderSlot(_ctx.$slots, "beforeList", {}, void 0, true),
            _ctx.multiple && _ctx.max === _ctx.internalValue.length ? (openBlock(), createElementBlock("li", _hoisted_9$2, [
              createElementVNode("span", _hoisted_10$2, [
                renderSlot(_ctx.$slots, "maxElements", {}, () => [
                  createTextVNode("Maximum of " + toDisplayString(_ctx.max) + " options selected. First remove a selected option to select another.", 1)
                ], true)
              ])
            ])) : createCommentVNode("", true),
            !_ctx.max || _ctx.internalValue.length < _ctx.max ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.filteredOptions, (option, index) => {
              return openBlock(), createElementBlock("li", {
                class: "multiselect__element",
                key: index
              }, [
                !(option && (option.$isLabel || option.$isDisabled)) ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass([_ctx.optionHighlight(index, option), "multiselect__option"]),
                  onClick: withModifiers(($event) => _ctx.select(option), ["stop"]),
                  onMouseenter: withModifiers(($event) => _ctx.pointerSet(index), ["self"]),
                  "data-select": option && option.isTag ? _ctx.tagPlaceholder : $options.selectLabelText,
                  "data-selected": $options.selectedLabelText,
                  "data-deselect": $options.deselectLabelText
                }, [
                  renderSlot(_ctx.$slots, "option", {
                    option,
                    search: _ctx.search
                  }, () => [
                    createElementVNode("span", null, toDisplayString(_ctx.getOptionLabel(option)), 1)
                  ], true)
                ], 42, _hoisted_11$2)) : createCommentVNode("", true),
                option && (option.$isLabel || option.$isDisabled) ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  "data-select": _ctx.groupSelect && $options.selectGroupLabelText,
                  "data-deselect": _ctx.groupSelect && $options.deselectGroupLabelText,
                  class: normalizeClass([_ctx.groupHighlight(index, option), "multiselect__option"]),
                  onMouseenter: withModifiers(($event) => _ctx.groupSelect && _ctx.pointerSet(index), ["self"]),
                  onMousedown: withModifiers(($event) => _ctx.selectGroup(option), ["prevent"])
                }, [
                  renderSlot(_ctx.$slots, "option", {
                    option,
                    search: _ctx.search
                  }, () => [
                    createElementVNode("span", null, toDisplayString(_ctx.getOptionLabel(option)), 1)
                  ], true)
                ], 42, _hoisted_12$2)) : createCommentVNode("", true)
              ]);
            }), 128)) : createCommentVNode("", true),
            withDirectives(createElementVNode("li", null, [
              createElementVNode("span", _hoisted_13$2, [
                renderSlot(_ctx.$slots, "noResult", { search: _ctx.search }, () => [
                  _hoisted_14$1
                ], true)
              ])
            ], 512), [
              [vShow, $props.showNoResults && (_ctx.filteredOptions.length === 0 && _ctx.search && !$props.loading)]
            ]),
            withDirectives(createElementVNode("li", null, [
              createElementVNode("span", _hoisted_15$1, [
                renderSlot(_ctx.$slots, "noOptions", {}, () => [
                  _hoisted_16$1
                ], true)
              ])
            ], 512), [
              [vShow, $props.showNoOptions && (_ctx.options.length === 0 && !_ctx.search && !$props.loading)]
            ]),
            renderSlot(_ctx.$slots, "afterList", {}, void 0, true)
          ], 4)
        ], 36), [
          [vShow, _ctx.isOpen]
        ])
      ]),
      _: 3
    })
  ], 42, _hoisted_1$6);
}
var Multiselect = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-366eaf78"]]);
var AllFiltersSelect_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = {
  name: "SCBDSelect",
  components: { Multiselect, Icon: S },
  props: {
    name: {},
    id: { type: String, required: true },
    value: { type: [Array, Object, String], required: true },
    placeholder: { type: Array },
    options: { type: Array, required: true },
    addTextSearch: { type: Function, required: true },
    onChange: { type: Function, required: true },
    countsMap: { type: Object }
  },
  methods: { update, highLight, onClose },
  computed: { counts },
  data: data$2
};
function counts() {
  return ({ identifier }) => {
    if (!this.countsMap)
      return "ZERO";
    return this.countsMap[identifier];
  };
}
function data$2() {
  return {
    values: this.value,
    isLoading: false,
    latestSearchText: ""
  };
}
function update() {
  this.$emit("input", this.values);
}
function onClose() {
  this.latestSearchText = "";
}
function highLight({ search, option }) {
  if (search)
    this.latestSearchText = search;
  if (!search || !option.name)
    return option.name;
  const regEx = new RegExp(search, "ig");
  return option.name.replace(regEx, `<span style="font-weight: 900;">${search}</span>`);
}
const _hoisted_1$5 = { key: 0 };
const _hoisted_2$5 = {
  key: 0,
  class: "row"
};
const _hoisted_3$3 = { class: "col-12" };
const _hoisted_4$2 = { class: "filter-label" };
const _hoisted_5$2 = {
  key: 1,
  class: "row"
};
const _hoisted_6$2 = { class: "col-1 text-center" };
const _hoisted_7$2 = { key: 0 };
const _hoisted_8$1 = ["src", "alt"];
const _hoisted_9$1 = { class: "col-11" };
const _hoisted_10$1 = ["innerHTML"];
const _hoisted_11$1 = {
  key: 0,
  class: "small muted"
};
const _hoisted_12$1 = /* @__PURE__ */ createTextVNode("\xA0\xA0\xA0\xA0\xA0");
const _hoisted_13$1 = { class: "badge badge-secondary" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_multiselect = resolveComponent("multiselect");
  return openBlock(), createBlock(_component_multiselect, {
    id: $props.id,
    modelValue: _ctx.values,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.values = $event),
    placeholder: $props.placeholder.join(" "),
    "track-by": "identifier",
    label: "name",
    options: $props.options,
    multiple: true,
    taggable: true,
    onTag: $props.addTextSearch,
    "group-values": "data",
    "group-label": "filter",
    "group-select": false,
    onInput: $options.update,
    onSelect: $props.onChange,
    onClose: $options.onClose,
    onRemove: $props.onChange,
    searchable: true,
    class: "fix",
    "tag-placeholder": "Press enter to apply free text search or click the Search button",
    "hide-selected": true,
    ref: "multiSelect"
  }, {
    beforeList: withCtx(() => [
      _ctx.latestSearchText ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
        createElementVNode("button", {
          class: "btn btn-outline-info my-3 mx-3",
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => {
            $props.addTextSearch(_ctx.latestSearchText);
            _ctx.$refs.multiSelect.deactivate();
          })
        }, toDisplayString(_ctx.$t("Text Search")), 1)
      ])) : createCommentVNode("", true)
    ]),
    placeholder: withCtx(() => [
      createVNode(_component_Icon, {
        height: "16",
        width: "16",
        name: "search"
      }),
      createTextVNode(" " + toDisplayString($props.placeholder[0]) + " " + toDisplayString($props.placeholder[1]) + " ", 1),
      createVNode(_component_Icon, {
        height: "16",
        width: "16",
        name: "filter"
      }),
      createTextVNode(" " + toDisplayString($props.placeholder[2]), 1)
    ]),
    props: withCtx(() => [
      _ctx.props.option.$groupLabel ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
        createElementVNode("div", _hoisted_3$3, [
          createElementVNode("span", _hoisted_4$2, toDisplayString(_ctx.props.option.$groupLabel), 1)
        ])
      ])) : createCommentVNode("", true),
      !_ctx.props.option.$groupLabel ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
        createElementVNode("div", _hoisted_6$2, [
          !_ctx.props.option.image ? (openBlock(), createElementBlock("span", _hoisted_7$2, "\xA0")) : createCommentVNode("", true),
          _ctx.props.option.image ? (openBlock(), createElementBlock("img", {
            key: 1,
            class: "option-image",
            src: _ctx.props.option.image,
            alt: _ctx.props.option.name
          }, null, 8, _hoisted_8$1)) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_9$1, [
          createElementVNode("span", {
            innerHTML: $options.highLight(_ctx.props)
          }, null, 8, _hoisted_10$1),
          _ctx.props.option.desc ? (openBlock(), createElementBlock("span", _hoisted_11$1, toDisplayString(_ctx.props.option.description), 1)) : createCommentVNode("", true),
          createElementVNode("span", null, [
            _hoisted_12$1,
            createElementVNode("span", _hoisted_13$1, toDisplayString($options.counts(_ctx.props.option)), 1)
          ])
        ])
      ])) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["id", "modelValue", "placeholder", "options", "onTag", "onInput", "onSelect", "onClose", "onRemove"]);
}
var AllFiltersSelect = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-d061874e"]]);
function removeFilter(key) {
  const url = new URL(window.location);
  const filter = url.searchParams;
  if (filter.getAll(key).length) {
    filter.delete(key);
  }
  window.history.pushState({}, "", url);
}
var FilterNav_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = {
  name: "SearchFilterNav",
  components: { AllFiltersSelect },
  methods: {
    getList,
    initialize,
    addTextSearch,
    updateSearchQuery,
    onChange,
    readSearchParams,
    addFilter,
    injectTextAsOption,
    addParam,
    resetSearchParams
  },
  data: data$1,
  created: created$1,
  errorCaptured: errorCaptured$1,
  i18n,
  mounted: mounted$1
};
async function created$1() {
  await this.initialize();
}
function mounted$1() {
  this.readSearchParams();
  setTimeout(() => {
    this.readSearchParams();
    this.$emit("$scbdFilterChange");
  }, 1e3);
}
function data$1() {
  return {
    inputText: "",
    filters: [],
    options: [],
    textFilterOptionGroup: {
      filter: "",
      data: []
    },
    countsMap: void 0
  };
}
function onChange() {
  setTimeout(this.updateSearchQuery, 100);
  setTimeout(() => this.$emit("$scbdFilterChange"), 600);
  setTimeout(() => this.initialize(), 800);
}
async function initialize() {
  const [counts2, allOptionGroups] = await Promise.all([getList(), q("all")]);
  const allFiltersUsed = new Set(Object.keys(counts2.filterCounts));
  const onlyOptionsUsed = [];
  for (const { filter, data: data2 } of [...allOptionGroups]) {
    const cloneGroup = { filter };
    cloneGroup.filter = filter.en;
    cloneGroup.data = data2.filter(({ identifier }) => allFiltersUsed.has(identifier));
    onlyOptionsUsed.push(cloneGroup);
  }
  this.textFilterOptionGroup.filter = this.$t("Free Text Searches");
  this.options = [...onlyOptionsUsed, this.textFilterOptionGroup];
  this.countsMap = counts2.filterCounts;
}
function updateSearchQuery() {
  resetSearchParams();
  this.filters.forEach(({ identifier }) => addParam(identifier));
}
const isPlainObject = (o2) => {
  var _a;
  return Object.prototype.toString.call(o2) === "[object Object]" && ((_a = o2 == null ? void 0 : o2.constructor) == null ? void 0 : _a.name) === "Object";
};
const jsonParse = (item) => {
  try {
    return JSON.parse(item);
  } catch (e2) {
    return item;
  }
};
const unique = (array) => Array.from(new Set(array.map((el) => {
  if (isPlainObject(el))
    return JSON.stringify(el);
  return el;
}))).map(jsonParse);
async function addFilter(identifier) {
  const foundFilter = await z("all", identifier, true);
  if (foundFilter && !Array.isArray(foundFilter))
    this.filters.push(foundFilter);
  if (identifier.includes("FREETEXT-"))
    this.injectTextAsOption(identifier.replace("FREETEXT-", ""));
  this.filters = unique(this.filters);
}
function readSearchParams() {
  const params = new URL(document.location).searchParams;
  const filters = params.getAll("filter");
  filters.forEach((identifier) => this.addFilter(identifier));
}
function resetSearchParams() {
  removeFilter("filter");
}
function addParam(value) {
  const { origin, search, pathname } = new URL(window.location);
  const newSearchParam = `filter=${encodeURIComponent(value)}`;
  const newSearch = !search ? `?${newSearchParam}` : `${search}&${newSearchParam}`;
  const newUrl = `${origin}${pathname}${newSearch}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
}
function injectTextAsOption(text) {
  const textFilter = createTextFilterObject(text);
  this.textFilterOptionGroup.data.push(textFilter);
  this.filters.push(textFilter);
}
function addTextSearch(text) {
  this.injectTextAsOption(text);
  setTimeout(() => this.updateSearchQuery(), 100);
  setTimeout(() => this.$emit("$scbdFilterChange"), 600);
}
function createTextFilterObject(name2) {
  return { identifier: `FREETEXT-${name2}`, name: name2 };
}
function errorCaptured$1(err) {
  console.error("SearchFilterNav error:", err);
  console.error(err);
}
const _hoisted_1$4 = { class: "filter-nav" };
const _hoisted_2$4 = { class: "position-relative navbar navbar-light bg-light px-0 px-sm-2" };
const _hoisted_3$2 = { class: "col-12" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AllFiltersSelect = resolveComponent("AllFiltersSelect");
  return openBlock(), createElementBlock("section", _hoisted_1$4, [
    createElementVNode("nav", _hoisted_2$4, [
      createElementVNode("div", _hoisted_3$2, [
        createVNode(_component_AllFiltersSelect, {
          id: "filter-all",
          modelValue: _ctx.filters,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.filters = $event),
          placeholder: "Search or Filter".split(" "),
          options: _ctx.options,
          "add-text-search": $options.addTextSearch,
          "on-change": $options.onChange,
          countsMap: _ctx.countsMap,
          ref: "allFiltersSelect"
        }, null, 8, ["modelValue", "placeholder", "options", "add-text-search", "on-change", "countsMap"])
      ])
    ])
  ]);
}
var FilterNav = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-01ce0e72"]]);
var Spinner_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = {
  name: "Spinner",
  props: ["size", "color"]
};
const _hoisted_1$3 = { class: "cont" };
const _hoisted_2$3 = { class: "slot-hold" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", {
      class: "lds-ring",
      style: normalizeStyle({ width: `${Number($props.size) + 5}px`, height: `${Number($props.size) + 5}px` })
    }, [
      createElementVNode("div", {
        style: normalizeStyle({ "border-width": `${$props.size / 100 * 3}px`, "border-top-color": $props.color })
      }, null, 4),
      createElementVNode("div", {
        style: normalizeStyle({ "border-width": `${$props.size / 100 * 3}px`, "border-top-color": $props.color })
      }, null, 4),
      createElementVNode("div", {
        style: normalizeStyle({ "border-width": `${$props.size / 100 * 3}px`, "border-top-color": $props.color })
      }, null, 4),
      createElementVNode("div", {
        style: normalizeStyle({ "border-width": `${$props.size / 100 * 3}px`, "border-top-color": $props.color })
      }, null, 4)
    ], 4),
    createElementVNode("div", _hoisted_2$3, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
var Spinner = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-782f6af6"]]);
var Loading_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = {
  name: "Loading",
  components: { Spinner },
  props: ["percent"]
};
const _withScopeId$1 = (n2) => (pushScopeId("data-v-3bdfccbd"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$2 = { class: "loading" };
const _hoisted_2$2 = { class: "cont mx-auto" };
const _hoisted_3$1 = { class: "ring" };
const _hoisted_4$1 = { class: "text-cont" };
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("img", {
  class: "leaf",
  src: "https://attachments.cbd.int/cbd-leaf-green.svg"
}, null, -1));
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_7$1 = {
  key: 0,
  class: "percent"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Spinner = resolveComponent("Spinner");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("div", _hoisted_2$2, [
      createElementVNode("div", _hoisted_3$1, [
        createVNode(_component_Spinner, {
          size: 40,
          color: "#009b48"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_4$1, [
              _hoisted_5$1,
              _hoisted_6$1,
              $props.percent ? (openBlock(), createElementBlock("span", _hoisted_7$1, toDisplayString($props.percent) + "%", 1)) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })
      ])
    ])
  ]);
}
var Loading = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-3bdfccbd"]]);
var Feedback_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = {
  name: "Feedback",
  components: { Loading },
  props: {
    total: { type: Number, required: false },
    page: { type: Number, required: false },
    totalPages: { type: Number, required: false },
    loading: { type: Boolean, required: false }
  },
  data() {
    return {
      isAscending: false,
      isSortingApply: false,
      sortType: "updated",
      selectSortBy: "updated",
      sortOrder: "desc"
    };
  },
  methods: {
    sort,
    removeSort
  },
  watch: {
    selectSortBy(value) {
      this.sort(value);
    },
    sortOrder(value) {
      this.isAscending = value === "asc";
      this.sort(null);
    }
  },
  mounted,
  i18n
};
function mounted() {
  const url = new URL(window.location).searchParams;
  const sortParam = url.get("sort");
  this.isSortingApply = !!sortParam;
  if (sortParam) {
    if (sortParam.includes("updatedDate"))
      this.selectSortBy = "updated";
    if (sortParam.includes("createdDate"))
      this.selectSortBy = "created";
    if (sortParam.includes("title"))
      this.selectSortBy = "name";
    if (sortParam.includes("asc"))
      this.sortOrder = "asc";
    if (sortParam.includes("desc"))
      this.sortOrder = "desc";
  }
}
function sort(key) {
  this.isSortingApply = true;
  this.sortType = key || this.sortType;
  const url = new URL(window.location);
  let sortBY = "updatedDate_dt";
  if (this.sortType === "name")
    sortBY = "title_t";
  if (this.sortType === "created")
    sortBY = "createdDate_dt";
  const sortParam = this.isAscending ? `${sortBY} asc` : `${sortBY} desc`;
  url.searchParams.set("sort", sortParam);
  window.history.pushState({}, "", url);
  setTimeout(() => this.$emit("$scbdFilterChange"), 600);
}
function removeSort() {
  this.isSortingApply = false;
  removeFilter("sort");
  setTimeout(() => this.$emit("$scbdFilterChange"), 600);
}
const _withScopeId = (n2) => (pushScopeId("data-v-7078f4df"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$1 = { class: "feedback mb-3" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("hr", { class: "my-0" }, null, -1));
const _hoisted_3 = {
  class: "row px-3 px-sm-4",
  style: { "min-height": "3em" }
};
const _hoisted_4 = { class: "col-4 my-auto" };
const _hoisted_5 = { class: "col-4" };
const _hoisted_6 = { class: "col-4 my-auto text-right" };
const _hoisted_7 = { class: "row" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", {
  class: "col-2 my-auto pr-0",
  style: { "font-size": "12px" }
}, [
  /* @__PURE__ */ createElementVNode("span", null, " Sort by: ")
], -1));
const _hoisted_9 = { class: "col-6 my-auto text-left pr-0" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("option", { value: "updated" }, "Updated Date", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("option", { value: "created" }, "Created Date", -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("option", { value: "name" }, "Name", -1));
const _hoisted_13 = [
  _hoisted_10,
  _hoisted_11,
  _hoisted_12
];
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("option", { value: "asc" }, "asc", -1));
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("option", { value: "desc" }, "desc", -1));
const _hoisted_16 = [
  _hoisted_14,
  _hoisted_15
];
const _hoisted_17 = { class: "col-4 my-auto text-right" };
const _hoisted_18 = {
  key: 0,
  class: "text-nowrap"
};
const _hoisted_19 = { class: "d-none d-sm-inline" };
const _hoisted_20 = { key: 0 };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("hr", { class: "my-0" }, null, -1));
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading = resolveComponent("Loading");
  return openBlock(), createElementBlock("section", _hoisted_1$1, [
    _hoisted_2$1,
    createElementVNode("div", _hoisted_3, [
      createElementVNode("div", _hoisted_4, toDisplayString($props.total) + " results", 1),
      createElementVNode("div", _hoisted_5, [
        withDirectives(createVNode(_component_Loading, null, null, 512), [
          [vShow, $props.loading]
        ])
      ]),
      createElementVNode("div", _hoisted_6, [
        createElementVNode("div", _hoisted_7, [
          _hoisted_8,
          createElementVNode("div", _hoisted_9, [
            withDirectives(createElementVNode("select", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.selectSortBy = $event),
              class: "custom-select mr-2 custom-select-sm",
              style: { "width": "60%" }
            }, _hoisted_13, 512), [
              [vModelSelect, $data.selectSortBy]
            ]),
            withDirectives(createElementVNode("select", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.sortOrder = $event),
              class: "custom-select custom-select-sm",
              style: { "width": "35%" }
            }, _hoisted_16, 512), [
              [vModelSelect, $data.sortOrder]
            ])
          ]),
          createElementVNode("div", _hoisted_17, [
            $props.totalPages && $props.totalPages > 1 ? (openBlock(), createElementBlock("span", _hoisted_18, [
              createElementVNode("span", _hoisted_19, toDisplayString(_ctx.$t("page")) + ": ", 1),
              $props.page > 1 ? (openBlock(), createElementBlock("span", _hoisted_20, "1 -")) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString($props.page) + " of " + toDisplayString($props.totalPages), 1)
            ])) : createCommentVNode("", true)
          ])
        ])
      ])
    ]),
    _hoisted_21
  ]);
}
var Feedback = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-7078f4df"]]);
var Search_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  name: "PortalAppSearch",
  components: {
    FilterNav,
    Feedback,
    List,
    Icons: _
  },
  props: {
    options: { type: Object, required: false },
    forceEnv: { type: String, required: false, default: "production" }
  },
  methods: {
    onScbdFilterChange,
    setRowsAndTotal,
    onScroll,
    onNextPageLoaded,
    preLoadFilter
  },
  computed: { opts, totalPages, top },
  created,
  data,
  errorCaptured,
  i18n
};
async function created() {
  initializeApi();
  if (this.opts.preLoadFilter)
    this.preLoadFilter(this.opts.preLoadFilter);
  await this.setRowsAndTotal();
  window.document.addEventListener("$me", async () => {
    if (!this.me || !this.me.isAuthenticated)
      return;
    await this.setRowsAndTotal();
  });
  if (this.opts.listenExternally)
    window.document.addEventListener("$scbdFilterChange", this.onScbdFilterChange);
}
function data() {
  return {
    rows: [],
    total: 0,
    page: 1,
    loading: false,
    notResized: true
  };
}
function opts() {
  return __spreadValues(__spreadValues({}, getDefaultOptions({}, this.forceEnv)), this.options);
}
function onScroll($el) {
  const self2 = this;
  updateOptions({ $el });
  return async () => {
    if (process.server)
      return;
    const { pageYOffset } = window;
    const {
      scrollHeight,
      scrollTop: scrollTopDocEl,
      offsetHeight
    } = window.document.documentElement;
    const { scrollTop: scrollTopBody } = window.document.body;
    const scrollTop = scrollTopBody || scrollTopDocEl;
    const currentScrollPosition = Math.abs(offsetHeight + (pageYOffset || scrollTop));
    const isLessThanHalfScrolled = currentScrollPosition <= scrollHeight / 2;
    const isListComplete = self2.page === self2.totalPages;
    if (isListComplete || isLessThanHalfScrolled || self2.loading)
      return;
    self2.loading = true;
    window.addEventListener("$nextPageLoaded", self2.onNextPageLoaded);
    const nextPageRows = await getList(true);
    const rows = nextPageRows.rows.filter((el) => el.name !== void 0 && el.description !== void 0);
    self2.rows.push(...rows);
  };
}
function onNextPageLoaded($event) {
  if (!this.server) {
    const {
      $page: { start }
    } = $event;
    this.page = start / 10 + 1;
    window.removeEventListener("$nextPageLoaded", this.onNextPageLoaded);
    setTimeout(() => {
      this.loading = false;
    }, 100);
  }
}
function totalPages() {
  return Math.ceil(this.total / 10);
}
async function onScbdFilterChange() {
  this.page = 1;
  this.total = 0;
  await this.setRowsAndTotal();
}
async function setRowsAndTotal() {
  this.loading = true;
  const { total, rows } = await getList();
  this.total = total;
  this.rows = rows.filter((el) => el.name !== void 0 && el.description !== void 0);
  this.loading = false;
}
function preLoadFilter(filter) {
  if (!filter)
    return;
  addSearchParam(filter);
}
function addSearchParam(value) {
  const { origin, search, pathname } = new URL(window.location);
  const newSearchParam = `filter=${encodeURIComponent(value)}`;
  const hasFilterAlready = search.includes(value);
  const newSearch = !search ? `?${newSearchParam}` : `${search}&${newSearchParam}`;
  const newUrl = `${origin}${pathname}${hasFilterAlready ? search : newSearch}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
}
function top() {
  const size = getSize();
  return this.opts[`${size}Top`] || 0;
}
function getSize() {
  const viewPort = getWidth();
  if (viewPort <= 480)
    return "sm";
  if (viewPort > 480 && viewPort <= 768)
    return "md";
  if (viewPort > 768)
    return "lg";
  return "sm";
}
function getWidth() {
  if (typeof window === "undefined")
    return 0;
  return Math.max(window.document.documentElement.clientWidth || 0, window.innerWidth || 0);
}
function errorCaptured(err) {
  console.error("Search error:", err);
  console.error(err);
}
const _hoisted_1 = { id: "app" };
const _hoisted_2 = { class: "stick" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icons = resolveComponent("Icons");
  const _component_FilterNav = resolveComponent("FilterNav");
  const _component_Feedback = resolveComponent("Feedback");
  const _component_List = resolveComponent("List");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _cache[0] || (setBlockTracking(-1), _cache[0] = createVNode(_component_Icons), setBlockTracking(1), _cache[0]),
    createElementVNode("div", _hoisted_2, [
      $options.opts.show ? (openBlock(), createBlock(_component_FilterNav, {
        key: 0,
        on$scbdFilterChange: $options.onScbdFilterChange,
        ref: "navFilter"
      }, null, 8, ["on$scbdFilterChange"])) : createCommentVNode("", true),
      createVNode(_component_Feedback, mergeProps({ total: _ctx.total, page: _ctx.page, totalPages: $options.totalPages, loading: _ctx.loading }, { on$scbdFilterChange: $options.onScbdFilterChange }), null, 16, ["on$scbdFilterChange"])
    ]),
    _ctx.total && _ctx.rows.length ? (openBlock(), createBlock(_component_List, {
      key: 0,
      rows: _ctx.rows,
      options: $options.opts,
      "on-scroll": $options.onScroll
    }, null, 8, ["rows", "options", "on-scroll"])) : createCommentVNode("", true)
  ]);
}
var ChmComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "App",
  components: {
    ChmComponent
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChmComponent = resolveComponent("ChmComponent");
  return openBlock(), createBlock(_component_ChmComponent, { id: "chm-search" });
}
var component = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function lowerCase(str) {
  return str.toLowerCase();
}
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
function noCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
  var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  var start = 0;
  var end = result.length;
  while (result.charAt(start) === "\0")
    start++;
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
function replace(input, re, value) {
  if (re instanceof RegExp)
    return input.replace(re, value);
  return re.reduce(function(input2, re2) {
    return input2.replace(re2, value);
  }, input);
}
function pascalCaseTransform(input, index) {
  var firstChar = input.charAt(0);
  var lowerChars = input.substr(1).toLowerCase();
  if (index > 0 && firstChar >= "0" && firstChar <= "9") {
    return "_" + firstChar + lowerChars;
  }
  return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return noCase(input, __assign({ delimiter: "", transform: pascalCaseTransform }, options));
}
const name = "@chm/search";
const NAME = pascalCase(name.replace("@chm/", "CHM-"));
function install(Vue) {
  if (install.installed)
    return;
  install.installed = true;
  Vue.component(NAME, component);
}
const plugin = { install, NAME };
export { component as default, install, plugin };
