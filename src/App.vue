<template>
  <div id="GoodStoreHouse">
    <el-container>
        <div class="main">
          <router-view/>
        </div>
        <el-footer class="footer">
            <el-row type="flex" justify="space-around" class="footer-nav">
              <el-col :span="4">  
                <div>
                  <router-link to="/" class="shop"></router-link>  
                </div>
              </el-col>
              <el-col :span="4" :offset="2">
                <div>
                  <router-link to="/Category" class="category"></router-link>
                </div> 
              </el-col>
              <el-col :span="4" :offset="2">
                <div> 
                  <router-link to="/Shoping" class="shoping"></router-link>  
                </div> 
              </el-col>
              <el-col :span="4" :offset="2">
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
<style scoped=""> 
      .footer{
          z-index:5;
          width: 100%;
          position:fixed;
          bottom:0px; 
          background-color: white;
       }
       .footer .el-row{
        width: 100%;
        height: 100%;
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
        height: 80%;
        width:38px;
        margin: 0 15px;
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
   html{
    font-size: 12px;
   }
   
</style>
