/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CUUn2qgc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { u as useLanguage, c as content, $ as $$Layout } from '../chunks/Layout_ByNtRisF.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { Image } from '@unpic/react';
export { renderers } from '../renderers.mjs';

const MenuPage = () => {
  useState(false);
  const { language } = useLanguage();
  const t = content[language].menu;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("main", { className: "container mx-auto my-5 p-4 bg-white/30 rounded-lg", children: [
    /* @__PURE__ */ jsx("title", { children: t.pagetitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: t.title }),
    /* @__PURE__ */ jsx("h1", { className: "mb-8 text-3xl font-bold text-center", children: t.title }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: t.items.map((item, index) => /* @__PURE__ */ jsx("div", { className: "col", id: `item-${index}`, children: /* @__PURE__ */ jsxs("div", { className: "card h-full bg-white shadow-md rounded-lg overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        Image,
        {
          src: item.image,
          alt: "",
          width: 1108,
          height: 1477
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsx("h5", { className: "text-xl font-semibold", children: item.name }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 mt-2", children: item.description }),
        /* @__PURE__ */ jsx("h6", { className: "text-lg font-bold mt-4", children: item.price })
      ] })
    ] }) })) })
  ] }) });
};

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layout, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/yuuki/Github/astro-test/src/layouts/Layout.astro", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MenuPageContent", MenuPage, {})} ` })}`;
}, "/home/yuuki/Github/astro-test/src/pages/menu.astro", void 0);

const $$file = "/home/yuuki/Github/astro-test/src/pages/menu.astro";
const $$url = "/menu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Menu,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
