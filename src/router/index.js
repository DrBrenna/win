
import App from '../javascripts/components/App'
import Home from '../javascripts/components/containers/Home/Home.js' 
import Detail from '../javascripts/components/containers/Detail/Detail.js'
import Mine from '../javascripts/components/containers/Mine/Mine'
import Login from '../javascripts/components/containers/Login/Login'
import Register from '../javascripts/components/containers/Register/Register'
import ShoppingCart from '../javascripts/components/containers/ShoppingCart/shoppingcar/ShoppingCart'
import Xianggou from '../javascripts/components/containers/ShoppingCart/xiangqinggou/Xianggou'
const routeConfig = [
    { path: '/',
      component: App,
      indexRoute:{ component: Home },
      childRoutes: [
        { path: 'home', component: Home},
        { path: 'detail', component: Detail },
        { path: 'login', component: Login },
        { path: 'register', component: Register },
        { path: 'shoppingcart', component: ShoppingCart },
        { path: 'mine', component:Mine},
        { path:'xianggou',component:Xianggou}
      ]
    } 
  ]

export default routeConfig