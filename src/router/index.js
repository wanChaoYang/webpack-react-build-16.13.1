import React from "react";
import Loadable from "react-loadable"
const Home = Loadable({
    loader: () => import("../pages/home"),
    loading: () => null
})
const Pinyinjs = Loadable({
    loader: () => import("../pages/pinyinjs"),
    loading: () => null
})
const Sortablejs = Loadable({
    loader: () => import("../pages/sortablejs/sortablejs"),
    loading: () => null
})
const router = [
    {
        path: "/",
        element: Home,
        cache: true,
        exact: true,
    },
    {
        path: "/pinyinjs",
        element: Pinyinjs,
        cache: false,
        exact: false,
    },
    {
        path: "/sortablejs",
        element: Sortablejs,
        cache: false,
        exact: false,
    }
]
export default router