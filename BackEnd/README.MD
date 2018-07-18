****

这是Backend的调用的代码。登录函数和注册函数。。前端留好空的函数，把这些填进去就可以了。方法还是上次跟你说的New，Get，Put..这些可以当做普通的JS函数调用，但其底层是Socket协议。所以Backend是不需要再写什么代码了，前端把需要的数据整理出来就可以了。

BackEnd为NoSql，不需要数据结构。所以前端随便存任何格式数据进去都可以。存任何格式数据的代码均为：
```
New({
      email: u,
      password: p
    });。
```

因此Backend也不需要改什么代码。

***

项目完成后，会给大家提供培训
---
---
——————

# Help

## 1、HTML 
### Only need reference two Javascript Libraries in HTML
```html
  <script src=http://13.59.120.88:80/tml.js></script>  This is reference the client function library.

  <script src=http://13.59.120.88:80/socket.io/socket.io.js></script> Using third-party socket library.
```
