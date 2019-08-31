import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Products from "@/components/Products";
import Partners from "@/components/Partners";

const routes = [
    {path: '/', name: "/", component: Main},
    {path: '/products', name: "products", component: Products},
    {path: '/partners', name: "partners", component: Partners},
    {path: '/contact', name: "contact", component: Contact},
    {path: '*', name: "/"}
]

export default routes;