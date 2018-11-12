<template>
  <div class="Shop">
  	<el-container>
  		<el-container>
  			<el-header>
  				<el-row>
  					<el-col>
  						<div><router-link to="">首页</router-link></div>
  					</el-col>
  					<el-col>
  						<ul>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  							<li><router-link to=""></router-link></li>
  						</ul>
  					</el-col>
  					<el-col>
  						<img src="./assets/imgs/Index/control.png" alt="">
  					</el-col>
  				</el-row>
  			</el-header>
  		</el-container>
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
.Shop{
	text-align: center;
}
</style>