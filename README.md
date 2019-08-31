# atfu-web项目
[配套SpringBoot后台项目](https://github.com/HYUANT/atfu-service)

> 本项目主要演示

1. [Vue.js的使用](https://vuejs.org/)
    - [Vue Router的使用](https://router.vuejs.org/zh/)
    - [Vuex的使用](https://vuex.vuejs.org/zh/)
2. [element-ui的使用](https://element.eleme.cn/#/)

### 界面如下，使用css @media针对手机端做了很简单的自适应
[PC端首页界面](https://github.com/HYUANT/atfu-web/tree/master/doc/index.png)
[手机端首页界面](https://github.com/HYUANT/atfu-web/tree/master/doc/phone_index.png)
[PC端产品搜索界面](https://github.com/HYUANT/atfu-web/tree/master/doc/products_search.png)
[手机端产品搜索界面](https://github.com/HYUANT/atfu-web/tree/master/doc/phone_products_search.png)

## 安装依赖包，可能要等待比较久
```
yarn install
```

### 编译和热部署启动，或者使用WebStorm导入项目，点击运行
```
yarn run serve
```

### 编译打包项目，用于生产环境 ps: 如果使用Nginx，需设置nginx.conf，[参考链接设置](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
```
yarn run build
```

### 路由配置
```js
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
```

### vuex的使用
这里只存储了接口的url
```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
    devUrl: "http://127.0.0.1:8010/atfu"
};
const store = new Vuex.Store({
    state
});

export default store;
```