import { c as createComponent, r as renderTemplate, b as renderHead, a as renderComponent, d as renderSlot } from './astro/server_CUUn2qgc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Image } from '@unpic/react';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
/* empty css                          */

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/sns", label: "SNS" },
  { href: "/access", label: "Access" }
];
const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const MobileNavbar = () => /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 w-full z-50 rounded-3xl overflow-hidden bg-slate-950/80 h-20 font-Dela text-2xl mt-2 pt-4 font-monomaniacone", children: [
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-0", children: [
      /* @__PURE__ */ jsx("ul", { className: "flex justify-center items-center pt-1.0", children: /* @__PURE__ */ jsx("li", { className: "flex flex-col items-center ml-0", children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(
        Image,
        {
          src: "/images/icon.png",
          alt: "第33回茨香祭のロゴ",
          width: 45,
          height: 45,
          loading: "lazy"
        }
      ) }) }) }),
      navItems.map((item, index) => /* @__PURE__ */ jsx(
        "ul",
        {
          className: `flex justify-center items-center relative ${index === 0 ? "right-[0%]" : index === 1 ? "right-[0%] transform translate-x-[10%]" : index === 2 ? "left-[0%] transform translate-x-[37%]" : "left-[0%] transform translate-x-[30%]"}`,
          children: /* @__PURE__ */ jsx("li", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsx("a", { href: item.href, className: "text-white", children: item.label }) })
        },
        item.href
      ))
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 w-full h-2 bg-transparent flex", children: [
      /* @__PURE__ */ jsx("div", { className: "w-1/5 border-b-8 border-yellow-400/80" }),
      /* @__PURE__ */ jsx("div", { className: "w-1/5 border-b-8 border-red-400/80" }),
      /* @__PURE__ */ jsx("div", { className: "w-1/5 border-b-8 border-blue-400/80" }),
      /* @__PURE__ */ jsx("div", { className: "w-1/5 border-b-8 border-green-400/80" }),
      /* @__PURE__ */ jsx("div", { className: "w-1/5 border-b-8 border-purple-400/80" })
    ] })
  ] });
  const DesktopNavbar = () => /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 w-full z-50 bg-slate-950/80 h-24 font-Dela", children: [
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 h-full", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center h-full", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "flex text-white text-4xl transition duration-10000 ease-in-out", children: "ドン・クレープ" }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: toggleMenu,
          className: "text-white focus:outline-none relative w-8 h-8 z-50 transition duration-10000 ease-in-out",
          "aria-label": isMenuOpen ? "メニューを閉じる" : "メニューを開く",
          children: [
            /* @__PURE__ */ jsx("span", { className: `block absolute h-1 w-8 bg-white transform transition duration-10000 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}` }),
            /* @__PURE__ */ jsx("span", { className: `block absolute h-1 w-8 bg-white transform transition duration-10000 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}` }),
            /* @__PURE__ */ jsx("span", { className: `block absolute h-1 w-8 bg-white transform transition duration-10000 ease-in-out ${isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}` })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `fixed top-0 right-0 w-64 h-full bg-slate-950/80 shadow-lg transform transition-transform duration-10000 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`, children: /* @__PURE__ */ jsx("ul", { className: "mt-24 px-4", children: navItems.map((item) => /* @__PURE__ */ jsx("li", { className: "mb-4", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: item.href,
        className: "text-white text-xl hover:text-yellow-400 transition-colors block py-2 transition duration-10000 ease-in-out",
        onClick: toggleMenu,
        children: item.label
      }
    ) }, item.href)) }) })
  ] });
  return isDesktop ? /* @__PURE__ */ jsx(DesktopNavbar, {}) : /* @__PURE__ */ jsx(MobileNavbar, {});
};

const languageStore = atom("ja");
if (typeof window !== "undefined") {
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage && (savedLanguage === "ja" || savedLanguage === "en")) {
    languageStore.set(savedLanguage);
  }
}
function setLanguage(newLanguage) {
  if (newLanguage !== languageStore.get()) {
    languageStore.set(newLanguage);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", newLanguage);
      window.dispatchEvent(new CustomEvent("languageChange", { detail: newLanguage }));
    }
  }
}

function useLanguage() {
  const language = useStore(languageStore);
  return { language, setLanguage };
}

const content = {
  ja: {
    top: {
      pagetitle: "ようこそ | ドン・クレープ",
      title: "DON CREPE",
      subtitle: "@第33回茨香祭",
      greeting: [
        "こんにちは！",
        "私達は、茨城高専1年2組「ドン・クレープ」です！",
        "第33回茨香祭でクレープを販売します！！"
      ],
      location: {
        title: "📍 場所",
        content: "8号館3F 1-2教室"
      },
      hours: {
        title: "⏰ 営業時間",
        day1: "1日目:10:00 - 17:00",
        day2: "2日目:9:00 - 16:00"
      },
      notices: {
        title: "⚠️ お知らせ",
        items: [
          "一般公開は一日目(10/26)のみになります",
          "材料がなくなり次第、営業終了となります",
          "アレルギー情報は店頭でお尋ねください",
          "お支払いは現金のみとなります"
        ]
      },
      orderProcess: {
        title: "💡 ご注文の流れ",
        steps: [
          "店頭でご注文ください",
          "お会計をお願いします",
          "お呼びしましたらクレープをお受け取りください"
        ]
      }
    },
    sns: {
      pagetitle: "SNS | ドン・クレープ",
      title: "SNSアカウント",
      instagram: {
        title: "Instagram",
        description: "最新のクレープ写真やメニューをチェック！",
        buttonText: "@don_crepe.nitic をフォロー"
      },
      twitter: {
        title: "X(Twitter)",
        description: "お得な情報や最新情報をお届け！",
        buttonText: "@don_crepe_nitic をフォロー"
      }
    },
    menu: {
      pagetitle: "メニュー | ドン・クレープ",
      title: "人気メニュー",
      items: [
        {
          name: "いちごチョコ🍓",
          description: "甘酸っぱいイチゴと濃厚クリームの絶妙なハーモニー",
          price: "¥500",
          image: "/images/strawberry-chocolate.jpg"
        },
        {
          name: "クッキーアンドクリーム🍪",
          description: "サクサクのクッキーと濃厚なクリームの絶妙なコンビネーション",
          price: "¥500",
          image: "/images/cookie-and-cream.jpg"
        },
        {
          name: "抹茶あんこ🍵",
          description: "濃厚な抹茶と甘さ控えめのあんこの絶妙なバランス",
          price: "¥500",
          image: "/images/matcha-anko.jpg"
        }
      ]
    },
    access: {
      pagetitle: "アクセス | ドン・クレープ",
      title: "アクセス情報",
      storeInfo: {
        title: "店舗情報",
        description: "ドン・クレープは、第33回茨香祭の1年2組で出店しています！",
        details: [
          {
            label: "場所",
            content: "茨城工業高等専門学校 8号館1年2組教室（3階）"
          },
          {
            label: "住所",
            content: "〒312-8508 茨城県ひたちなか市中根866"
          },
          {
            label: "最寄り駅",
            content: "JR勝田駅から徒歩約40分"
          }
        ]
      },
      map: {
        title: "アクセスマップ"
      }
    },
    footer: {
      address: [
        "〒312-8508",
        /* @__PURE__ */ jsx("br", {}, "1"),
        "茨城県ひたちなか市中根866",
        /* @__PURE__ */ jsx("br", {}, "2"),
        "茨城工業高等専門学校",
        /* @__PURE__ */ jsx("br", {}, "3"),
        "8号館1年2組教室（3階）"
      ],
      copy: [
        "© ドン・クレープ 第33回茨香祭1年2組"
      ]
    },
    countdown: {
      title: "⏳ カウントダウン",
      days: "日",
      hours: "時間",
      minutes: "分",
      seconds: "秒"
    }
  },
  en: {
    top: {
      pagetitle: "Welcome | Don Crepe",
      title: "DON CREPE",
      subtitle: "@33rd Shikosai",
      greeting: [
        "Hello!",
        "We are Don Crepe from Class 1-2 at NITIC!",
        "We will be selling crepes at the 33rd Shikosai!!"
      ],
      location: {
        title: "📍 Location",
        content: "Building 8, 3F, Class 1-2"
      },
      hours: {
        title: "⏰ Business Hours",
        day1: "Day 1: 10:00 - 17:00",
        day2: "Day 2: 9:00 - 16:00"
      },
      notices: {
        title: "⚠️ Notices",
        items: [
          "Public admission is only available on Day 1 (10/26)",
          "We will close when we run out of ingredients",
          "Please ask about allergy information at the store",
          "Cash payments only"
        ]
      },
      orderProcess: {
        title: "💡 How to Order",
        steps: [
          "Place your order at the counter",
          "Make your payment",
          "Pick up your crepe when called"
        ]
      }
    },
    sns: {
      pagetitle: "SNS | Don Crepe",
      title: "Social Media",
      instagram: {
        title: "Instagram",
        description: "Check out our latest crepe photos and menu!",
        buttonText: "Follow @don_crepe.nitic"
      },
      twitter: {
        title: "X(Twitter)",
        description: "Get the latest updates and special offers!",
        buttonText: "Follow @don_crepe_nitic"
      }
    },
    menu: {
      pagetitle: "Menu | Don Crepe",
      title: "Popular Items",
      items: [
        {
          name: "Strawberry Chocolate 🍓",
          description: "Perfect harmony of sweet-tart strawberries and rich cream",
          price: "¥500",
          image: "/images/strawberry-chocolate.jpg"
        },
        {
          name: "Cookies & Cream 🍪",
          description: "Perfect combination of crunchy cookies and rich cream",
          price: "¥500",
          image: "/images/cookie-and-cream.jpg"
        },
        {
          name: "Matcha Red Bean 🍵",
          description: "Perfect balance of rich matcha and mildly sweet red bean paste",
          price: "¥500",
          image: "/images/matcha-anko.jpg"
        }
      ]
    },
    access: {
      pagetitle: "Access | Don Crepe",
      title: "Access Information",
      storeInfo: {
        title: "Store Information",
        description: "Don Crepe is located at Class 1-2 booth during the 33rd Shikosai!",
        details: [
          {
            label: "Location",
            content: "National Institute of Technology, Ibaraki College, Building 8, Class 1-2 (3rd floor)"
          },
          {
            label: "Address",
            content: "866 Nakane, Hitachinaka-shi, Ibaraki-ken 312-8508"
          },
          {
            label: "Nearest Station",
            content: "40 min walk from JR Katsuta Station"
          }
        ]
      },
      map: {
        title: "Access Map"
      }
    },
    footer: {
      address: [
        "National Institute of Technology",
        /* @__PURE__ */ jsx("br", {}, "1"),
        "Ibaraki College, Building 8 Class 1-2 (3rd floor)",
        /* @__PURE__ */ jsx("br", {}, "2"),
        "866 Nakane",
        /* @__PURE__ */ jsx("br", {}, "3"),
        "Hitachinaka-shi Ibaraki-ken",
        /* @__PURE__ */ jsx("br", {}, "4"),
        "〒312-8508"
      ],
      copy: [
        "© Don Crepe",
        /* @__PURE__ */ jsx("br", {}, "5"),
        "33rd Shikosai",
        /* @__PURE__ */ jsx("br", {}, "6"),
        "Class 1-2"
      ]
    },
    countdown: {
      title: "⏳ Countdown",
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds"
    }
  }
};

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => setLanguage(language === "ja" ? "en" : "ja"),
      className: "bg-white/20 hover:bg-white text-gray-800 font-bold py-2 px-4 rounded-3xl shadow-lg transition-all flex flex-col items-center space-y-2",
      children: [
        /* @__PURE__ */ jsx("span", { children: language === "ja" ? "🇺🇸" : "🇯🇵" }),
        /* @__PURE__ */ jsx("span", { children: language === "ja" ? "English" : "日本語" })
      ]
    }
  );
};

const Footer = () => {
  const { language } = useLanguage();
  const t = content[language].footer;
  return /* @__PURE__ */ jsx("footer", { className: "bg-gradient-to-r from-emerald-500 to-indigo-500 text-white py-8", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "contact-info mb-4 flex justify-between", children: [
      t.address,
      /* @__PURE__ */ jsx(LanguageSwitch, {})
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "border-white-700 my-4" }),
    /* @__PURE__ */ jsxs("div", { className: "footer-bottom flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsx("div", { className: "footer-text text-xl", children: t.copy }) }),
      /* @__PURE__ */ jsxs("div", { className: "social-links flex space-x-4", children: [
        /* @__PURE__ */ jsx("a", { href: "https://x.com/don_crepe_nitic", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
          Image,
          {
            src: "/images/sns-btn-x-white.png",
            alt: "X（Twitter）",
            width: 30,
            height: 30,
            className: "mx-auto"
          }
        ) }),
        /* @__PURE__ */ jsx("a", { href: "https://instagram.com/don_crepe.nitic", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
          Image,
          {
            src: "/images/sns-btn-instagram-white.png",
            alt: "Instagram",
            width: 30,
            height: 30,
            className: "mx-auto"
          }
        ) })
      ] })
    ] })
  ] }) });
};

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="ja"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <body class="min-h-screen flex flex-col bg-gradient-to-r from-purple-500 to-pink-500 font-kiwimaru"> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/yuuki/Github/astro-test/src/components/content/Navbar", "client:component-export": "default" })} <div class="navbar-offset flex-grow px-4 sm:px-6 lg:px-8 py-8"> <main> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/yuuki/Github/astro-test/src/components/content/Footer", "client:component-export": "default" })}  </body></html>`;
}, "/home/yuuki/Github/astro-test/src/layouts/Layout.astro", void 0);

export { $$Layout as $, content as c, useLanguage as u };
