import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Province from '@/components/Province'
import ShippingAddress from '@/components/ShippingAddress'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/province',
            name: 'Province',
            component: Province
        },
        {
            path: '/shipping',
            name: 'ShippingAddress',
            component: ShippingAddress
        }
    ]
})
