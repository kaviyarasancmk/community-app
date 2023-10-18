

export default {
  "meta": {},
  "id": "_default",
  "_regex": {},
  "_paramKeys": {},
  "file": {
    "path": "src/routes",
    "dir": "src",
    "base": "routes",
    "ext": "",
    "name": "routes"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_MessagingDashboard",
      "_regex": {},
      "_paramKeys": {},
      "name": "MessagingDashboard",
      "module": false,
      "file": {
        "path": "src/routes/MessagingDashboard",
        "dir": "src/routes",
        "base": "MessagingDashboard",
        "ext": "",
        "name": "MessagingDashboard"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_MessagingDashboard_index_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "index",
          "file": {
            "path": "src/routes/MessagingDashboard/index.svelte",
            "dir": "src/routes/MessagingDashboard",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/MessagingDashboard/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default__components",
      "_regex": {},
      "_paramKeys": {},
      "name": "_components",
      "module": false,
      "file": {
        "path": "src/routes/_components",
        "dir": "src/routes",
        "base": "_components",
        "ext": "",
        "name": "_components"
      },
      "children": [
        {
          "meta": {},
          "id": "_default__components_hero",
          "_regex": {},
          "_paramKeys": {},
          "name": "hero",
          "module": false,
          "file": {
            "path": "src/routes/_components/hero",
            "dir": "src/routes/_components",
            "base": "hero",
            "ext": "",
            "name": "hero"
          },
          "children": [
            {
              "meta": {},
              "id": "_default__components_hero_index_svelte",
              "_regex": {},
              "_paramKeys": {},
              "name": "index",
              "file": {
                "path": "src/routes/_components/hero/index.svelte",
                "dir": "src/routes/_components/hero",
                "base": "index.svelte",
                "ext": ".svelte",
                "name": "index"
              },
              "asyncModule": () => import('../src/routes/_components/hero/index.svelte'),
              "children": []
            }
          ]
        },
        {
          "meta": {},
          "id": "_default__components_navbar",
          "_regex": {},
          "_paramKeys": {},
          "name": "navbar",
          "module": false,
          "file": {
            "path": "src/routes/_components/navbar",
            "dir": "src/routes/_components",
            "base": "navbar",
            "ext": "",
            "name": "navbar"
          },
          "children": [
            {
              "meta": {},
              "id": "_default__components_navbar_index_svelte",
              "_regex": {},
              "_paramKeys": {},
              "name": "index",
              "file": {
                "path": "src/routes/_components/navbar/index.svelte",
                "dir": "src/routes/_components/navbar",
                "base": "index.svelte",
                "ext": ".svelte",
                "name": "index"
              },
              "asyncModule": () => import('../src/routes/_components/navbar/index.svelte'),
              "children": []
            }
          ]
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_index_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_pages",
      "_regex": {},
      "_paramKeys": {},
      "name": "pages",
      "module": false,
      "file": {
        "path": "src/routes/pages",
        "dir": "src/routes",
        "base": "pages",
        "ext": "",
        "name": "pages"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_pages_login",
          "_regex": {},
          "_paramKeys": {},
          "name": "login",
          "module": false,
          "file": {
            "path": "src/routes/pages/login",
            "dir": "src/routes/pages",
            "base": "login",
            "ext": "",
            "name": "login"
          },
          "children": [
            {
              "meta": {},
              "id": "_default_pages_login_index_svelte",
              "_regex": {},
              "_paramKeys": {},
              "name": "index",
              "file": {
                "path": "src/routes/pages/login/index.svelte",
                "dir": "src/routes/pages/login",
                "base": "index.svelte",
                "ext": ".svelte",
                "name": "index"
              },
              "asyncModule": () => import('../src/routes/pages/login/index.svelte'),
              "children": []
            }
          ]
        },
        {
          "meta": {},
          "id": "_default_pages_signup",
          "_regex": {},
          "_paramKeys": {},
          "name": "signup",
          "module": false,
          "file": {
            "path": "src/routes/pages/signup",
            "dir": "src/routes/pages",
            "base": "signup",
            "ext": "",
            "name": "signup"
          },
          "children": [
            {
              "meta": {},
              "id": "_default_pages_signup_index_svelte",
              "_regex": {},
              "_paramKeys": {},
              "name": "index",
              "file": {
                "path": "src/routes/pages/signup/index.svelte",
                "dir": "src/routes/pages/signup",
                "base": "index.svelte",
                "ext": ".svelte",
                "name": "index"
              },
              "asyncModule": () => import('../src/routes/pages/signup/index.svelte'),
              "children": []
            }
          ]
        }
      ]
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true
      },
      "_regex": {},
      "_paramKeys": {},
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}