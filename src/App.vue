<template>
  <div id="GoodStoreHouse">
    <el-container>
        <el-header>
            <router-view/>
        </el-header>
        <el-footer class="footer">
            <el-row type="flex" justify="space-end" :gutter="20" class="footer-nav">
              <el-col :span="6" >
              <div class="">
                  <p></p>
                  <router-link to="/">商店</router-link>
              </div>    
              </el-col>
              <el-col :span="6" >
              <div class="">
                  <p></p>
                  <router-link to="/Category">分类</router-link>
              </div>   
              </el-col>
              <el-col :span="6" >
              <div class="">
                  <p></p>
                  <router-link to="/Shoping">购物车</router-link>
              </div>   
              </el-col>
              <el-col :span="6" >
              <div class="">
                  <p></p>
                  <router-link to="/Person">个人</router-link>
              </div>     
              </el-col>
            </el-row>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'GoodStoreHouse'
}
</script>

<style scoped="">
     .footer{
        position: absolute;
        bottom:0;
     }
     .footer-nav{
       
     }
    a{

    }
</style>
<style>
   *{
    margin:0;
    padding: 0;
   } 
   html:{
    font-size: 16px;
   }
</style>
