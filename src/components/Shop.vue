<template>
  <div class="Shop">
		<header class="header">
			<el-row type="flex">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="search">
                	<el-button icon="el-icon-search">搜索</el-button>
                </div>  
              </el-col>
            </el-row>
			<el-row type="flex">
				<el-col :xs="4" :sm="4" :md="4" :lg="4" class="first-child">
					<div><router-link to="/Index">首页</router-link></div>
				</el-col>
				<el-col :xs="18" :sm="18" :md="18" :lg="18" class="second-child">
					<ul>
						<li><router-link to="/Water">水具</router-link></li>
						<li><router-link to="/HouseGoods">家居</router-link></li>
						<li><router-link to="/AestheticProtection">美护</router-link></li>
						<li><router-link to="/Foods">美食</router-link></li>
						<li><router-link to="/Travel">出行</router-link></li>
						<li><router-link to="/Play">玩乐</router-link></li>
						<li><router-link to="/Cook">餐厨</router-link></li>
						<li><router-link to="/Stationery">文具</router-link></li>
						<li><router-link to="/Clothes">服装</router-link></li>
						<li><router-link to="/Interest">情趣</router-link></li>
						<li><router-link to="/Accessories">配饰</router-link></li>
						<li><router-link to="/Arts">艺术</router-link></li>
						<li><router-link to="/Sports">运动</router-link></li>
						<li><router-link to="/Book">图书</router-link></li>
						<li><router-link to="/Numeral">数码</router-link></li>
						<li><router-link to="/Shoes">鞋包</router-link></li>
						<li><router-link to="/All">全部</router-link></li>
					</ul>
				</el-col>
				<el-col :xs="2" :sm="2" :md="2" :lg="2" class="last-child">
					<div></div>
				</el-col>
			</el-row>
		</header>
		<section>
			<router-view/>
		</section>	
  </div>
</template>

<script>
export default {
  name: 'Shop'
}
</script>

<style scoped>
    .header{
      margin-top:20px;
    }
    .header .search{
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      position: relative;
      background-color: rgb(243,243,243);
    } 
   .header .search>.el-button{
   	  width: 100%;
      height: 60px;
      font-size: 1.2rem;
      border: none;
      color: rgb(153,153,153);
      background-color: rgb(243,243,243);
   }
   /*.header .first-child>div{

   }*/
   .header .first-child>div>a{
   	  width: 90px;
   	  height: 71px;
   	  display: inline-block;
   	  color: #333333;
   	  font-size: 3rem;
   }
   .header .second-child>ul{
   	  list-style-type: none;
   }
   .header .second-child>ul>li{
   	  width: 88px;
   	  height: 53px;
   }
   .header .second-child>ul>li>a{
   	  display: inline-block;
   	  width: 100%;
   	  height: 100%;
   	  text-decoration: none;
   	  color: #333333;
   }
   .header .last-child>div{
   	  width: 50px;
      height: 50px;
      background-image: url(../assets/img/Index/control.png);
      background-repeat: no-repeat;
      background-size: contain;	  	  
   }   
</style>