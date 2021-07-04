import { useRouteNameToPage } from "@u/router"

export const appViewConfig = {
    avatar: {
        src: require("@a/img/company_Icon.png"),
        twitter: require("@a/img/twitter.png"),
        github: require("@a/img/github.png")
    },
    tags: [{
        color: "success",
        text: "vue.js"
    },
    {
        color: "blue",
        text: "Swift"
    },
    {
        color: "cyan",
        text: "Python"
    }],
    menu: [{
        text: "Blog",
        handle: useRouteNameToPage("ShowHome")
    },
    { 
      text: "About",
      handle: useRouteNameToPage("ShowAbout")
    }]
}