<template>
  <div class="Category">
    <el-container>
	  <el-header class="header">Header</el-header>
	  <el-container>
	    <el-aside style="width:15%;" class="aside">Aside</el-aside>
	    <el-main class="main">Main</el-main>
	  </el-container>
	</el-container>
  </div>
</template>

<script>
export default {
  name: 'Category'
}
</script>

<style scoped>
.Shop{
	text-align: center;
}
.header,.aside,.main{
	border:1px solid red;
}
</style>