import router from '@/router';
import request from '@/utils/request'
import Router from 'vue-router'

let dongtaiRouter = []

export const getRouter = () =>{
    request.get('/getMenus').then(res => {
        dongtaiRouter = res.data
        dongtaiRouter.forEach(item => {
            let str = item.component;
            item.component = (item => {
                return import(`@/views${str}`)
            })
            console.log(item.component);
            // item.component = () => import(`@/views/${item.component}`);
            router.addRoute(item);
        });
    })
}

export default dongtaiRouter