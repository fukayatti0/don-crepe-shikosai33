/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CUUn2qgc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { u as useLanguage, c as content, $ as $$Layout } from '../chunks/Layout_ByNtRisF.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { Image } from '@unpic/react';
export { renderers } from '../renderers.mjs';

const AccessPage = () => {
  useState(false);
  const { language } = useLanguage();
  const t = content[language].access;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("main", { className: "container mx-auto my-5 px-4 bg-white/30 rounded-lg", children: [
    /* @__PURE__ */ jsx("title", { children: t.pagetitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: t.title }),
    /* @__PURE__ */ jsx("h1", { className: "mb-8 text-3xl font-bold text-center", children: t.title }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap -mx-4", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/2 px-4 mb-4", children: /* @__PURE__ */ jsx("div", { className: "bg-white shadow-md rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsx("h5", { className: "text-lg font-bold mb-2", children: t.storeInfo.title }),
        /* @__PURE__ */ jsx("h6", { className: "text-base mb-4", children: t.storeInfo.description }),
        /* @__PURE__ */ jsx("ul", { className: "list-none space-y-2", children: t.storeInfo.details.map((detail, index) => /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsxs("strong", { children: [
            detail.label,
            "："
          ] }),
          " ",
          detail.content
        ] }, index)) })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/2 px-4 mb-4", children: /* @__PURE__ */ jsx("div", { className: "bg-white shadow-md rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsx("h5", { className: "text-lg font-bold mb-2", children: t.map.title }),
        /* @__PURE__ */ jsx("div", { className: "map-container", children: /* @__PURE__ */ jsx(
          Image,
          {
            src: "/images/busmap01.jpg",
            alt: "バスマップ",
            width: 600,
            height: 600,
            className: "w-full h-auto"
          }
        ) })
      ] }) }) })
    ] })
  ] }) });
};

const $$Access = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layout, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/yuuki/Github/astro-test/src/layouts/Layout.astro", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccessPageContent", AccessPage, {})} ` })}`;
}, "/home/yuuki/Github/astro-test/src/pages/access.astro", void 0);

const $$file = "/home/yuuki/Github/astro-test/src/pages/access.astro";
const $$url = "/access";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Access,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
