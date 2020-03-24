

## 前言
不知道大家有没有一个同感？天下产品一大抄，简直比程序员的CV大法还厉害！

产品一张图，交互全凭自己意会，比如产品经理常说的一句话："你参考一下某夕夕，某猫，某东",实际上我们没有它们的后台账号，他就点了两下给我们看。

## 效果
言归正传，想必每一家电商公司，都有自己的商品中心，今天又懒得加班了，我带你实现商品中心的SKU，效果大致如下：

![](https://user-gold-cdn.xitu.io/2020/3/24/1710d35d038d617b?w=694&h=848&f=gif&s=178636)

看到这个效果，首先要找准算法方向，一是全组合，二是对比，大致从以下两点入手：

### 算法一：多数组实现全组合，要求如下：

![](https://user-gold-cdn.xitu.io/2020/3/25/1710d5eeb20ff3a2?w=1256&h=1346&f=png&s=253100)

### 算法二：两数组对比，要求如下：
![](https://user-gold-cdn.xitu.io/2020/3/25/1710d5f158bdd0c6?w=1308&h=1562&f=png&s=254263)

### 大佬看到这么清晰的要求，估计想法："好简单!"。其实很多东西别人帮你理清楚了当然就觉得简单，实际操作时还是会棘手的。不过，我想在这儿讲个故事，就是下图啦！

![](https://user-gold-cdn.xitu.io/2020/3/25/1710d615901ccb61?w=790&h=2294&f=jpeg&s=219232)

### 算法一的实现如下：
![](https://user-gold-cdn.xitu.io/2020/3/25/1710d5f4b38bcf25?w=1312&h=914&f=png&s=182811)

### 算法二的实现如下：
![](https://user-gold-cdn.xitu.io/2020/3/25/1710d5f59ac341b1?w=1582&h=950&f=png&s=228244)


## 源代码
### 目录结构大致如下：
![](https://user-gold-cdn.xitu.io/2020/3/25/1710d8f7cde03747?w=966&h=760&f=png&s=127183)

# dynamic-form-table
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```