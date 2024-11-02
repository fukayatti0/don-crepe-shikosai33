/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CUUn2qgc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { u as useLanguage, c as content, $ as $$Layout } from '../chunks/Layout_ByNtRisF.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useEffect, useState } from 'react';
import { Image } from '@unpic/react';
export { renderers } from '../renderers.mjs';

const InstagramEmbed = ({ postUrl }) => {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);
  useEffect(() => {
    const loadEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else if (!scriptRef.current) {
        scriptRef.current = document.createElement("script");
        scriptRef.current.src = "https://www.instagram.com/embed.js";
        scriptRef.current.async = true;
        scriptRef.current.defer = true;
        scriptRef.current.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
        document.body.appendChild(scriptRef.current);
      }
    };
    const observer = new MutationObserver(() => {
      loadEmbed();
    });
    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true
      });
      loadEmbed();
    }
    return () => {
      observer.disconnect();
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, [postUrl]);
  return /* @__PURE__ */ jsx("div", { ref: containerRef, className: "instagram-embed-container", children: /* @__PURE__ */ jsx(
    "blockquote",
    {
      className: "instagram-media",
      "data-instgrm-captioned": true,
      "data-instgrm-permalink": postUrl,
      "data-instgrm-version": "14",
      style: blockquoteStyle
    }
  ) });
};
const blockquoteStyle = {
  background: "#FFF",
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
  margin: "1px",
  maxWidth: "540px",
  minWidth: "326px",
  padding: "0",
  width: "100%"
};

const PostEmbed = ({ tweetUrl }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "twitter-embed-container", children: /* @__PURE__ */ jsx("blockquote", { className: "twitter-tweet", children: /* @__PURE__ */ jsx("a", { href: tweetUrl }) }) });
};

const SNSPage = () => {
  useState(false);
  const { language } = useLanguage();
  const t = content[language].sns;
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto bg-white/30 rounded-lg", children: [
    /* @__PURE__ */ jsx("title", { children: t.pagetitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: t.title }),
    /* @__PURE__ */ jsx("h1", { className: "mb-8 text-3xl font-bold text-center", children: t.title }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col h-full", children: /* @__PURE__ */ jsx("div", { className: "bg-white shadow-md rounded-lg flex-grow w-full mr-0.5 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
          /* @__PURE__ */ jsx(
            Image,
            {
              src: "/images/sns-logo-instagram.png",
              alt: "Instagram",
              width: 30,
              height: 30,
              className: "mr-3"
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-black", children: t.instagram.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-black", children: t.instagram.description }),
        /* @__PURE__ */ jsx("div", { className: "mb-4 aspect-square max-w-sm mx-auto", children: /* @__PURE__ */ jsx(
          InstagramEmbed,
          {
            postUrl: "https://www.instagram.com/p/DAV6PBeyhci/"
          }
        ) }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.instagram.com/don_crepe.nitic",
            className: "inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:from-purple-600 hover:to-pink-600",
            target: "_blank",
            rel: "noopener noreferrer",
            children: t.instagram.buttonText
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col h-full", children: /* @__PURE__ */ jsx("div", { className: "bg-white shadow-md rounded-lg flex-grow", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
          /* @__PURE__ */ jsx(
            Image,
            {
              src: "/images/sns-logo-x.png",
              alt: "X",
              width: 30,
              height: 30,
              className: "mr-3"
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-black", children: t.twitter.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-black", children: t.twitter.description }),
        /* @__PURE__ */ jsx("div", { className: "mb-4 w-full max-w-lg mx-auto", children: /* @__PURE__ */ jsx(
          PostEmbed,
          {
            tweetUrl: "https://twitter.com/don_crepe_nitic/status/1848174898860171359"
          }
        ) }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://twitter.com/don_crepe_nitic",
            className: "inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-blue-600",
            target: "_blank",
            rel: "noopener noreferrer",
            children: t.twitter.buttonText
          }
        )
      ] }) }) })
    ] })
  ] });
};

const $$Sns = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layouts", $$Layout, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/yuuki/Github/astro-test/src/layouts/Layout.astro", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SNSPageContent", SNSPage, {})} ` })}`;
}, "/home/yuuki/Github/astro-test/src/pages/sns.astro", void 0);

const $$file = "/home/yuuki/Github/astro-test/src/pages/sns.astro";
const $$url = "/sns";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Sns,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
