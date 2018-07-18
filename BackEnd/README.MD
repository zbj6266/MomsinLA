****

这是FrontEnd调用Backend的代码。前端留好空的函数，把这些填进去就可以了。
方法还是上次跟你说的New，Get，Put..这些可以当做普通的JS函数调用，但其底层是Socket协议。
所以Backend是不需要再写什么代码了，前端把需要的数据整理出来就可以了。
BackEnd为NoSql，不需要数据结构。所以前端随便存任何格式数据进去都可以。存任何格式数据的代码均为：
```
New({任意Json对象});。
```
参数为任意Json对象，底层会编译为二进制后使用Socket传输到服务器，
因此Backend也不需要改什么代码。

***

项目完成后，会给大家提供培训。但不要期望可以在几年内学会底层。
能够短时间学会的一定不是真正的技术，因为所有人都可以快速学会它。
你毕生奋斗的终点可能只是高手的起点。高手极力谦虚仍是别人眼中的狂妄
---
---
——————

# BackEnd Help

## 1 HTML code
### Only need reference two Javascript Libraries in HTML
```html

  <script src=http://13.59.120.88:80/tml.js></script>
Reference the client function library. This‘s a dynamic library, so don't save to local.



  <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js"></script>
Using third-party socket library from CDN.

```

## 2 Javascript code
### (1) Create a client instance
```Javascript

  tim = tml(); //Create a client instance
```
#### If you connect multiple servers at the same time, you can create multiple client instances.

### (2) Connect a server
```Javascript

  tim.Load(tml.Net(io('13.59.120.88:80'))); 
```

### (3) Load authentication module
```Javascript

  tim.Load(tml.Auth());
```
#### Provide offline login, multi-server login, automatic login, user cache and other functions. If you don't need these features, you should not execute this line of code.




### (4) eXpand a new feature
```Javascript
  tim.X('feature name')
```
 


### (5) Signup a new user
```Javascript

  tim.X('user').New({
      email: "test email",
      password: "test"
    });
```

### (6) Login code
```Javascript
      tim.Login({
            email: "test email",
            password: "test"
          });
```
 
### (7) Logout code
```Javascript
    tim.Logout();
```
 
### (8) Monitor user registration
```Javascript
    tim.X('user').on('add', function(msg){
      console.log(msg);
     });
```
#### Listen for real-time messages registered by users

### (9) Query users
```Javascript
console.log(await tim.X('user').Get());//List top 10 users

//List top 50 users
console.log(await tim.X('user').Get({query: {  
      $limit: 50
    }}))

//Query the user whose email is 'a'
console.log(await tim.X('user').Get({query: { 
      email: 'a'
}}))
```
#### Can also be written as

```Javascript
 //List top 10 users
 tim.X('user').Get().then(data => console.log(data));
    
 //List top 50 users
 tim.X('user').Get({query: {
     $limit: 50
    }}).then(data => console.log(data));
    
//Query the user whose email is 'a'
 tim.X('user').Get({query: {
      email: 'a'
    }}).then(data => console.log(data));
    
```

