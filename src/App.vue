<template>
  <div id="GoodStoreHouse">
    <el-container>
        <div>
            <router-view/>
        </div>
        <el-footer class="footer">
            <el-row type="flex" justify="space-between" :gutter="20" class="footer-nav">
              <el-col :xs="6" :sm="6" :md="6" :lg="6">
                <div>
                  <router-link to="/" class="shop"></router-link>  
                </div>
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="6">
                <div>
                  <router-link to="/Category" class="category"></router-link>
                </div> 
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="6">
                <div> 
                  <router-link to="/Shoping" class="shoping"></router-link>  
                </div> 
              </el-col>
              <el-col :xs="6" :sm="6" :md="6" :lg="6">
                <div>   
                  <router-link to="/Person" class="person"></router-link>  
                </div>  
              </el-col>
            </el-row>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'GoodStoreHouse',

}
</script>

<style scoped>
    .footer{
      width: 100%;
      background-color: white;
      position:fixed;
      bottom:0px;
     }
     .footer .el-col>div{
      width: 100%;
      height:100%;
      text-align: center;
      line-height: 60px;
     }
    .footer .el-col>div>a{
      text-decoration: none;
      display:inline-block;
      width:38px;
      height:98%;
      vertical-align: middle;
    }
    .footer .el-col>div>.shop{
      background-image: url('./assets/imgs/Index/shop.png');
      background-repeat: no-repeat;
      background-size:contain; 
    }
    .footer .el-col>div>.category{
      background-image: url('./assets/imgs/Index/category.png');
      background-repeat: no-repeat;
      background-size:contain; 
    }
    .footer .el-col>div>.shoping{
      width:60px;
      height:98%;
      background-image: url('./assets/imgs/Index/shoping.png');
      background-repeat: no-repeat;
      background-size:contain; 
    }
    .footer .el-col>div>.person{
      background-image: url('./assets/imgs/Index/person.png');
      background-repeat: no-repeat;
      background-size:contain; 
    }
</style>
<style>
   *{
    margin:0;
    padding: 0;
   } 
   html:{
    font-size: 12px;
   }
</style>
