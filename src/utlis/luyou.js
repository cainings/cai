// export function beforeRouteEnter(to, from, next) {
//     console.log('进入路由')
//     if(to.name!='login'){
//         let user = sessionStorage.getItem('isLogin');
//         if (user == null) {
//             next('/login')
//         } else if (user == 'admin') {
//             next()
//         } else {
//             next(false)
//         }
//     }else{
//         next()
//     }
    
// }