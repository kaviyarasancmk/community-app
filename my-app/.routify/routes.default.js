

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
      "id": "_default_community",
      "_regex": {},
      "_paramKeys": {},
      "name": "community",
      "module": false,
      "file": {
        "path": "src/routes/community",
        "dir": "src/routes",
        "base": "community",
        "ext": "",
        "name": "community"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_community_cretecommunity_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "cretecommunity",
          "file": {
            "path": "src/routes/community/cretecommunity.svelte",
            "dir": "src/routes/community",
            "base": "cretecommunity.svelte",
            "ext": ".svelte",
            "name": "cretecommunity"
          },
          "asyncModule": () => import('../src/routes/community/cretecommunity.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_community_dashboard",
          "_regex": {},
          "_paramKeys": {},
          "name": "dashboard",
          "module": false,
          "file": {
            "path": "src/routes/community/dashboard",
            "dir": "src/routes/community",
            "base": "dashboard",
            "ext": "",
            "name": "dashboard"
          },
          "children": [
            {
              "meta": {},
              "id": "_default_community_dashboard_chatdashboard_svelte",
              "_regex": {},
              "_paramKeys": {},
              "name": "chatdashboard",
              "file": {
                "path": "src/routes/community/dashboard/chatdashboard.svelte",
                "dir": "src/routes/community/dashboard",
                "base": "chatdashboard.svelte",
                "ext": ".svelte",
                "name": "chatdashboard"
              },
              "asyncModule": () => import('../src/routes/community/dashboard/chatdashboard.svelte'),
              "children": []
            },
            {
              "meta": {},
              "id": "_default_community_dashboard_index_svelte",
              "_regex": {},
              "_paramKeys": {},
              "name": "index",
              "file": {
                "path": "src/routes/community/dashboard/index.svelte",
                "dir": "src/routes/community/dashboard",
                "base": "index.svelte",
                "ext": ".svelte",
                "name": "index"
              },
              "asyncModule": () => import('../src/routes/community/dashboard/index.svelte'),
              "children": []
            }
          ]
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_components",
      "_regex": {},
      "_paramKeys": {},
      "name": "components",
      "module": false,
      "file": {
        "path": "src/routes/components",
        "dir": "src/routes",
        "base": "components",
        "ext": "",
        "name": "components"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_components_hero_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "hero",
          "file": {
            "path": "src/routes/components/hero.svelte",
            "dir": "src/routes/components",
            "base": "hero.svelte",
            "ext": ".svelte",
            "name": "hero"
          },
          "asyncModule": () => import('../src/routes/components/hero.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_components_login_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "login",
          "file": {
            "path": "src/routes/components/login.svelte",
            "dir": "src/routes/components",
            "base": "login.svelte",
            "ext": ".svelte",
            "name": "login"
          },
          "asyncModule": () => import('../src/routes/components/login.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_components_navbar_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "navbar",
          "file": {
            "path": "src/routes/components/navbar.svelte",
            "dir": "src/routes/components",
            "base": "navbar.svelte",
            "ext": ".svelte",
            "name": "navbar"
          },
          "asyncModule": () => import('../src/routes/components/navbar.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_components_signup_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "signup",
          "file": {
            "path": "src/routes/components/signup.svelte",
            "dir": "src/routes/components",
            "base": "signup.svelte",
            "ext": ".svelte",
            "name": "signup"
          },
          "asyncModule": () => import('../src/routes/components/signup.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_datastore",
      "_regex": {},
      "_paramKeys": {},
      "name": "datastore",
      "module": false,
      "file": {
        "path": "src/routes/datastore",
        "dir": "src/routes",
        "base": "datastore",
        "ext": "",
        "name": "datastore"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_datastore_signupdata_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "signupdata",
          "file": {
            "path": "src/routes/datastore/signupdata.svelte",
            "dir": "src/routes/datastore",
            "base": "signupdata.svelte",
            "ext": ".svelte",
            "name": "signupdata"
          },
          "asyncModule": () => import('../src/routes/datastore/signupdata.svelte'),
          "children": []
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
      "children": []
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