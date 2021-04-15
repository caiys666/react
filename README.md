# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# React学习

## 一、react的生命周期回调函数或生命周期钩子函数

##### 1、卸载组件

```js
ReactDOM.unmountComponentAtNode(document.getElementById('root'))
```

`componentDidMount`组件挂载完毕后调用

##### 2、组件挂载生命周期 `componentDidMount`

**组件挂载完毕后调用**

##### 3、render 初始化渲染、状态更新之后会调用

##### 4、状态更新`setState()`是一个更新操作  调用`shouldComponentUpdate`、`componentWillUpdate`、`render`、`componentDidUpdate`

##### 5、强制更新`forceUpdate`之后调用`componentWillUpdate`、`render`、`componentDidUpdate`

##### 6、组件新的生命周期

* `getDerivedStateFromProps`
* `getSnapshotBeforeUpdate`介于`render`与`componentDidUpdate`之间

7、react的`DOM diff`算法

* 逐层进行对比，找到发生变化的节点才进行更新，没有发生变化的不会进行更行

## 二、react脚手架

使用`cnpm i -g create-react-app`全局安装脚手架，使用`create-react-app my_project`去创建一个react项目。

## 三、消息订阅与发布

* 使用`import Pubsub from 'pubsub-js'`引入消息发布订阅的库，然后使用`Pubsub.publish('cabbage', { name: '迪丽热巴', age: 26 })`进行消息的发布，第一个参数是消息发布的`key`，第二个参数是消息发布传递的参数。

* 使用

  ```
  Pubsub.subscribe('cabbage', (_, data) => {
        console.log(_)
        console.log(data)
      })
  ```

  进行消息的订阅，接收到两个参数，第一个是订阅消息的`key`，第二个参数是一个回调函数，回调函数中接收到两个参数，第一个参数是订阅消息的`key`第二个参数是消息发布中传过来的数据。

## 四、在React中使用路由

* 明确号界面的导航区和内容区

* 导航区的a标签改为Link标签

  ```js
  <Link className="item" to="/about">
      About
  </Link>
  <Link className="item" to="/home">
      Home
  </Link>
  ```

* 内容区为Route标签进行路由路径的分配

  ```js
  <Route path="/about" component={About}></Route>
  <Route path="/home" component={Home}></Route>
  ```

* <App>的最外层包裹一个<BrowserRouter>或者<HashRouter>

##### 路由组件和一般组件的区别

* 写法不同

  * 一般组件：<Home>
  * 路由组件：<Route path="/home" component={Home}></Route>

* 存放的位置不同

  * 一般组件：components
  * 路由组件：pages

* 接收到的props不同

  * 一般组件：些组件标签时传递了什么，就能接收到什么

  * 路由组件：接收到三个固定的属性

    ```json
    history:
        go: ƒ go(n)
        goBack: ƒ goBack()
        goForward: ƒ goForward()
        push: ƒ push(path, state)
        replace: ƒ replace(path, state)
    location:
        pathname: "/home"
        search: ""
        state: undefined
    match:
        params: {}
        path: "/home"
        url: "/home"
    ```

## 5、解决多级路径刷新页面样式丢失的问题

* 在`public/index.html`中引入样式时不写`./`写`/`（常用）
* 在`public/index.html`中引入样式时不写`./`写`%PUBLIC_URL%`（常用）
* 使用`HashRouter`

## 6、Redirect的使用

* 一般写在所有路由的最下方，当所有的路由都无法匹配的时候，跳转到Redirect指定的路由

* ```jsx
  <Switch>
      <Route path="/about" component={About}></Route>
      <Route path="/home" component={Home}></Route>
      <Redirect to="/about" />
  </Switch>
  ```

  ## 7、嵌套路由或多级路由

* 注册子路由时要写上父路由的path值
* 路由的匹配是按照注册路由的顺序进行的

## 8、向路由组件传递`params`参数

* `params`参数

  * 路由链接（携带参数）：

    ```jsx
    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>
        {msgObj.title}
    </Link>
    ```

  * 注册路由（声明接收）：

    ```jsx
    <Route path="/home/message/detail/:id/:title" component={Detail} />
    ```

  * 接收参数：

    ```jsx
    const { id, title } = this.props.match.params
    ```

* search参数

  * 路由链接（携带参数）：

    ```jsx
    <Link
        to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}
        >
        {msgObj.title}
    </Link>
    ```

  * 注册路由（无需声明，正常注册即可）：

    ```jsx
    <Route path="/home/message/detail" component={Detail} />
    ```

  * 接收参数：

    ```jsx
    const { search } = this.props.location
    const { id, title } = qs.parse(search.slice(1))
    ```

  * 备注：获取到的search是`urlencode`编码的字符串，需要借助`querystring`解析

* state参数

  * 路由链接（携带参数）：

    ```jsx
    <Link
        to={{
            pathname: '/home/message/detail',
                state: { id: msgObj.id, title: msgObj.title },
        }}
        >
        {msgObj.title}
    </Link>
    ```

  * 注册路由（无需声明，正常注册即可）：

    ```jsx
    <Route path="/home/message/detail" component={Detail} />
    ```

  * 接收参数：

    ```jsx
    const { id, title } = this.props.location.state || {}
    ```

  * 备注：刷新也可以保留参数

  

