<template>
  <div class="Shop">
  	<el-container>
		<el-header>
			<el-row type="flex">
				<el-col :xs="4" :sm="4" :md="4" :lg="4">
					<div><router-link to="/Index">首页</router-link></div>
				</el-col>
				<el-col :xs="18" :sm="18" :md="18" :lg="18">
					<!-- <ul>
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
					</ul> -->
				</el-col>
				<el-col :xs="2" :sm="2" :md="2" :lg="2">
					<img src="../assets/imgs/Index/top.png" alt="">
				</el-col>
			</el-row>
		</el-header>
  		<el-main>
  			<router-view/>
  		</el-main>
  	</el-container>
  </div>
</template>

<script>
export default {
  name: 'Shop'
}
</script>

<style scoped>
/*.Shop{
	text-align: center;
}*/
</style>