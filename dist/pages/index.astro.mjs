/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CUUn2qgc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { u as useLanguage, c as content, $ as $$Layout } from '../chunks/Layout_ByNtRisF.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
export { renderers } from '../renderers.mjs';

const Countdown = ({ targetDate }) => {
  const { language } = useLanguage();
  const t = content[language].countdown;
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1e3);
    return () => clearInterval(timer);
  }, [targetDate]);
  return /* @__PURE__ */ jsxs("div", { className: "bg-white/80 p-6 rounded-lg shadow-lg mb-8 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: t.title }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-purple-100 p-3 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "text-xl font-bold text-purple-600 flex flex-col justify-center items-center", children: [
        timeLeft.days,
        /* @__PURE__ */ jsx("span", { className: "text-xl text-purple-700", children: t.days })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-purple-100 p-3 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "text-xl font-bold text-purple-600 flex flex-col justify-center items-center", children: [
        timeLeft.hours,
        /* @__PURE__ */ jsx("span", { className: "text-xl text-purple-700", children: t.hours })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-purple-100 p-3 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "text-xl font-bold text-purple-600 flex flex-col justify-center items-center", children: [
        timeLeft.minutes,
        /* @__PURE__ */ jsx("span", { className: "text-xl text-purple-700", children: t.minutes })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-purple-100 p-3 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "text-xl font-bold text-purple-600 flex flex-col justify-center items-center", children: [
        timeLeft.seconds,
        /* @__PURE__ */ jsx("span", { className: "text-xl text-purple-700", children: t.seconds })
      ] }) })
    ] })
  ] });
};
const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +/* @__PURE__ */ new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1e3 * 60 * 60 * 24)),
      hours: Math.floor(difference / (1e3 * 60 * 60) % 24),
      minutes: Math.floor(difference / 1e3 / 60 % 60),
      seconds: Math.floor(difference / 1e3 % 60)
    };
  }
  return timeLeft;
};

const targetDate = "2024-10-26T10:00:00";
const TopPageContent = () => {
  const { language } = useLanguage();
  const t = content[language].top;
  useEffect(() => {
    console.log("Language changed to:", language);
  }, [language]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: t.pagetitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t.title })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "h-auto bg-white/30 rounded-lg", children: [
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-12 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-6xl mb-4 font-monomaniacone", children: t.title }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl text-gray-600 mb-8", children: t.subtitle }),
        /* @__PURE__ */ jsx("div", { className: "bg-red-50/0 p-6 rounded-lg mb-8", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-lg text-xl", children: t.greeting.map((line, index) => /* @__PURE__ */ jsx("li", { children: line }, `greeting-${index}-${language}`)) }) }),
        /* @__PURE__ */ jsx(Countdown, { targetDate }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-lg mx-auto bg-yellow-50 p-6 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xl font-bold mb-4", children: t.location.title }),
          /* @__PURE__ */ jsx("p", { className: "text-3xl mb-6", children: t.location.content }),
          /* @__PURE__ */ jsx("div", { className: "text-xl font-bold mb-4", children: t.hours.title }),
          /* @__PURE__ */ jsxs("p", { className: "text-xl", children: [
            t.hours.day1,
            /* @__PURE__ */ jsx("br", {}),
            t.hours.day2
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8 max-w-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-6 rounded-lg mb-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4", children: t.notices.title }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-lg", children: t.notices.items.map((item, index) => /* @__PURE__ */ jsxs("li", { children: [
            "・",
            item
          ] }, `notice-${index}-${language}`)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4", children: t.orderProcess.title }),
          /* @__PURE__ */ jsx("ol", { className: "list-decimal list-inside space-y-3 text-lg", children: t.orderProcess.steps.map((step, index) => /* @__PURE__ */ jsx("li", { children: step }, `order-step-${index}-${language}`)) })
        ] })
      ] })
    ] })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layout, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/yuuki/Github/astro-test/src/layouts/Layout.astro", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopPageContent", TopPageContent, {})} ` })}`;
}, "/home/yuuki/Github/astro-test/src/pages/index.astro", void 0);

const $$file = "/home/yuuki/Github/astro-test/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
