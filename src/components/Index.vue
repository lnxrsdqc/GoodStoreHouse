<template>
  <div class="Index">
  	<div>
  		<el-row>
	  		<el-col>
	  			<div class="block">
				    <el-carousel trigger="click" :height="imgHeight+'px'">
				      <el-carousel-item v-for="(img,index) in items" :key="index">
				      	<el-row>
				          <el-col :span="24">
				          		<img ref="image" :src="img.url" class="bannerImg" @load="imageLoaded"/>
				          	</el-col>
				        </el-row>
				      </el-carousel-item>
				    </el-carousel>
				</div>
	  		</el-col>
	  	</el-row>
  	</div>
  	<div class="second">
  		<div class="specialBenefit">
  			<el-row>
		  		<el-col :span="24">
		  			<div class="topick">专题</div>
		  		</el-col>
		  	</el-row>
		  	<el-row class="topick-img" :gutter="10">
		  		<el-col :span="12">
		  			<div class="topick-img1"></div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div class="topick-img2"></div>
		  		</el-col>
		  	</el-row>
  		</div>
  				
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data(){
  	return{//轮播图图片自适应高度,思路:获取当前图片的高度然后赋给block外部容器的高度，然后flex布局容器里面的图片居中
  		items:[
  		    {
  		    	url:require('../assets/imgs/Index/carousel-1.jpg')
  		    },
  		    {
  		    	url:require('../assets/imgs/Index/middle-16.jpg')
  		    }
  		],
  		imgHeight:200
  	}
  },
  methods:{
    imageLoaded(){
    	this.count++;
    	if(this.count===1){
    		this.$nextTick(()=>{ //$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调,在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM
    			this.imgHeight=this.$refs.image[0].height;
    		})
    	}
    }
  },
  mounted(){
    window.addEventListener('resize', () => {
	  this.imgHeight = this.$refs.image[0].height
	}, false)
  }
}
</script>

<style scoped>
    .Index .bannerImg{
    	width: 100%;
	    height: auto;
	    min-height: 190px;
	    min-width: 320px;
    }
    
    @media only screen and (max-width:768px){
    	.Index{
    		max-height: 500px;
    		overflow: hidden;
    	}
    	.Index .second{
    		margin-top: 20px;
    	}
    	.Index .topick{
	    	font-size: 1.5rem;
	    	font-weight: bold;
	    }
	    .Index .topick-img>.el-col{
	    	width: 50%;
	    	height: 200px;
	    	padding: 10px 0;
	    }
	    .Index .topick-img1{
	    	width: 100%;
	    	height: 100%;
	    	background-image: url("../assets/imgs/Index/middle-17.jpg");
	    	background-repeat: no-repeat;
	    	background-size: contain;
	    }
	    .Index .topick-img2{
	    	width: 100%;
	    	height: 100%;
	    	background-image: url("../assets/imgs/Index/middle-18.jpg");
	    	background-repeat: no-repeat;
	    	background-size: contain;
	    }
    }
</style>