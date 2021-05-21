import { useRouteNameToPage } from "@u/router"

export const appViewConfig = {
    avatar: {
        src: require("@a/img/cat.jpg")
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
        text: "Home",
        type: "link",
        handle: useRouteNameToPage("ShowHome")
    },
    { 
        text: "iOS",
        type: "link",
        handle: useRouteNameToPage("ShowSwift")
    },
    {
        text: "AWS",
        type: "link"
    },
    { 
      text: "Vue",
      type: "link",
      handle: useRouteNameToPage("ShowSwift")
    },
    {
      text: "Python",
      type: "link"
    },
    { 
      text: "Others",
      type: "link",
      handle: useRouteNameToPage("ShowSwift")
    }]
}