import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import login from '@/views/login.vue'
import shuju from '@/components/level3/work/shuju'
import ruku from '@/components/level3/work/rukou'
import chuku from '@/components/level3/work/chuku'
import pandian from '@/components/level3/work/pandian'
import cangku from '@/components/level3/work/cangku'
import yujing from '@/components/level3/work/kucunyujing'
import qingdan from '@/components/level3/work/qingdan'
import caiwu from '@/components/level3/work/caiwu'
import yiku from '@/components/level3/warehouse/yiku'
import baosun from '@/components/level3/warehouse/baosun'
import diaobo from '@/components/level3/warehouse/diaobou'
import caigou from '@/components/level3/business/caigou'
import tuihuo from '@/components/level3/business/tuihuo'
import xiaoshouMag from '@/components/level3/business/xiaoshouMag'
import xiaoshoutuihuo from '@/components/level3/business/xiaoshoutuihuo'
import caiwuType from '@/components/level3/finance/caiwuType'
import yingshou from '@/components/level3/finance/yingshou'
import jizhang from '@/components/level3/finance/jizhang'
import qindan from '@/components/level3/statement/qindan'
import kechukucun from '@/components/level3/statement/kechukucun'
import qichu from '@/components/level3/statement/qichu'
import kucuntaizhang from '@/components/level3/statement/kucuntaizhang'
import kucunyujing from '@/components/level3/statement/kucunyujing'
import rongliang from '@/components/level3/statement/rongliang'
import bCangku from '@/components/level3/basics/bCangku'
import bKuwei from '@/components/level3/basics/bKuwei'
import bShenbei from '@/components/level3/basics/bShenbei'
import bJiliang from '@/components/level3/basics/bJiliang'
import bgongyingshang from '@/components/level3/basics/bgongyingshang'
import bKehu from '@/components/level3/basics/bKehu'
import btype from '@/components/level3/basics/btype'
import bChanpin from '@/components/level3/basics/bChanpin'
import chengyunshang from '@/components/level3/basics/chengyunshang'
import yuangong from '@/components/level3/technology/yuangong'
import juese from '@/components/level3/technology/juese'
import bumen from '@/components/level3/technology/bumen'
import add from '@/components/add.vue'
import update from '@/components/update.vue'
import chaxunAll from '@/components/chaxunAll.vue'
import addd from '@/components/addd.vue'
import xiugai from '@/components/xiugai.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/index',
    component:index,
    redirect: '/index/shuju',
    children:[{
      path:'shuju',
      component:shuju
    },{
      path:'ruku',
      name:'ruku',
      component:ruku
    },{
      path:'chuku',
      component:chuku
    },{
      path:'pandian',
      component:pandian
    },{
      path:'cangku',
      component:cangku
    },{
      path:'yujing',
      component:yujing
    },{
      path:'qingdan',
      component:qingdan
    },{
      path:'caiwu',
      component:caiwu
    },{
      path:'yiku',
      component:yiku
    },{
      path:'baosun',
      component:baosun
    },{
      path:'diaobo',
      component:diaobo
    },{
      path:'caigou',
      component:caigou
    },{
      path:'tuihuo',
      component:tuihuo
    },{
      path:'xiaoshouMag',
      component:xiaoshouMag
    },{
      path:'xiaoshoutuihuo',
      component:xiaoshoutuihuo
    },{
      path:'caiwuType',
      component:caiwuType
    },{
      path:'yingshou',
      component:yingshou
    },{
      path:'jizhang',
      component:jizhang
    },{
      path:'qindan',
      component:qindan
    },{
      path:'kechukucun',
      component:kechukucun
    },{
      path:'qichu',
      component:qichu
    },{
      path:'kucuntaizhang',
      component:kucuntaizhang
    },{
      path:'kucunyujing',
      component:kucunyujing
    },{
      path:'rongliang',
      component:rongliang
    },{
      path:'bCangku',
      component:bCangku
    },{
      path:'bKuwei',
      component:bKuwei
    },{
      path:'bShenbei',
      component:bShenbei
    },{
      path:'bJiliang',
      component:bJiliang
    },{
      path:'bgongyingshang',
      component:bgongyingshang
    },{
      path:'bKehu',
      component:bKehu
    },{
      path:'btype',
      component:btype
    },{
      path:'bChanpin',
      component:bChanpin
    },{
      path:'chengyunshang',
      component:chengyunshang
    },{
      path:'yuangong',
      component:yuangong
    },{
      path:'juese',
      component:juese
    },{
      path:'bumen',
      component:bumen
    },{
      path:'add',
      component:add
    },
    {
      path:'update',
      name:'update',
      component:update
    },
    {
      path:'chaxunAll',
      component:chaxunAll
    },
    {
      path:'addd',
      name:'addd',
      component:addd
    },
    {
      path:'xiugai',
      name:'xiugai',
      component:xiugai
    }
  ]
  },{
    path:'/login',
    component:login
  }
]

const router = new VueRouter({
  mode:'history',//hash
  routes
})

export default router
