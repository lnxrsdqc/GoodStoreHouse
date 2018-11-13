<template>
  <div id="GoodStoreHouse">
    <el-container>
        <el-header class="header">
            <el-row type="flex">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="search">
                  <img src="./assets/imgs/Index/search.png" alt="">
                  <input type="text" value="双11" class="searchContent" >
                </div>  
              </el-col>
            </el-row>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
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
  name: 'GoodStoreHouse'
}
</script>

<style scoped="">
    .el-header{
      margin-top:20px;
    }
    .header{
     
    }
    .el-header .search{
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      position: relative;
      background-color: rgb(243,243,243);
    } 
    .el-header .search>img{
      width: 26px;
      height: 26px;
      position: absolute;
      left: 33%;
      top:35%;
    } 
    .el-header .search>.searchContent{
      border: none;
      box-sizing: border-box;
      text-align: center;
      width:100%;
      height:60px;
      vertical-align: middle;
      color: rgb(153,153,153);
      font-size: 1rem;
      background-color: rgb(243,243,243);
    }
    .footer{
      width: 100%;
      position:fixed;
      bottom:10px;
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
    width: 100%;
    height: 100%;
    font-size: 12px;
   }
</style>
