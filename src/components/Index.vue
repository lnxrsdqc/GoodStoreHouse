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
  		<div class="todayTopic">
  			<el-row>
		  		<el-col :span="24">
		  			<div class="topick">专题</div>
		  		</el-col>
		  	</el-row>
		  	<el-row class="topick-img" :gutter="10">
		  		<el-col :span="12">
		  			<img src="../assets/imgs/Index/middle-17.jpg" alt="" class="topick-img1">
		  		</el-col>
		  		<el-col :span="12">
		  			<img src="../assets/imgs/Index/middle-18.jpg" alt="" class="topick-img1">
		  		</el-col>
		  	</el-row>
  		</div>
  		<div class="specialBenefit">
  			<el-row>
		  		<el-col :span="24">
		  			<div class="todayBenefit">今日特惠</div>
		  		</el-col>
		  	</el-row>
		  	<el-row class="todayBenefit-img" :gutter="10">
		  		<el-col :span="12">
		  			<div>
		  			    <img src="../assets/imgs/Index/Benefit-1.jpg" alt="" class="todayBenefit-img1">	
		  			    <p class="desc">天然配方 口感甘醇熬夜茶</p>
		  			    <p><span>¥238</span><s>¥259</s></p>
		  			</div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div>
		  				<img src="../assets/imgs/Index/Benefit-2.jpg" alt="" class="todayBenefit-img1">
		  				<p class="desc">优选珍贵 大马士革玫瑰茶</p>
		  				<p><span>¥208</span><s>¥219</s></p>
		  			</div>	
		  		</el-col>
		  	</el-row>
  		</div>
  		<div class="todayTopic">
  			<el-row>
		  		<el-col :span="24">
		  			<div class="topick">专题</div>
		  		</el-col>
		  	</el-row>
		  	<el-row class="topick-img" :gutter="10">
		  		<el-col :span="12">
		  			<img src="../assets/imgs/Index/today-2.1.jpg" alt="" class="topick-img1">
		  		</el-col>
		  		<el-col :span="12">
		  			<img src="../assets/imgs/Index/today-2.2.jpg" alt="" class="topick-img1">
		  		</el-col>
		  	</el-row>
  		</div>
  		<div class="newGoods">
  			<el-row>
		  		<el-col :span="24">
		  			<div class="new">新品速递</div>
		  		</el-col>
		  	</el-row>
		  	<el-row>
		  		<el-col :span="24">
		  			<div class="newdesc">in季新品抢先购</div>
		  		</el-col>
		  	</el-row>
		  	<el-row class="new-img" :gutter="10">
		  		<el-col :span="12">
		  			<div>
		  			    <img src="../assets/imgs/Index/new-1.jpg" alt="" class="new-img1">	
		  			    <p class="desc">意式浪漫 半自动咖啡机</p>
		  			    <p><span>¥888</span><s>¥1088</s></p>
		  			</div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div>
		  				<img src="../assets/imgs/Index/new-2.jpg" alt="" class="new-img1">
		  				<p class="desc">能净化空气的智能加湿器</p>
		  				<p><span>¥4699</span></p>
		  			</div>	
		  		</el-col>
		  	</el-row>
  		</div>
  		<div class="newGoods">
  			<el-row>
		  		<el-col :span="24">
		  			<div class="new">好物热卖</div>
		  		</el-col>
		  	</el-row>
		  	<el-row>
		  		<el-col :span="24">
		  			<div class="newdesc">每周TOP榜</div>
		  		</el-col>
		  	</el-row>
		  	<el-row class="new-img" :gutter="10">
		  		<el-col :span="12">
		  			<div>
		  			    <img src="../assets/imgs/Index/new-3.jpg" alt="" class="new-img1">	
		  			    <p class="desc">时尚亲肤密闭防雾霾口罩1+4超值套装</p>
		  			    <p><span>¥119</span><s>¥139</s></p>
		  			</div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div>
		  				<img src="../assets/imgs/Index/new-4.jpg" alt="" class="new-img1">
		  				<p class="desc">一只好看的电水壶-汀壶</p>
		  				<p><span>¥698</span></p>
		  			</div>	
		  		</el-col>
		  	</el-row>
  		</div>
  		<div class="newGoods">
  			<el-row>
		  		<el-col :span="24">
		  			<div class="new">崇尚自由的射手座</div>
		  		</el-col>
		  	</el-row>
		  	<el-row>
		  		<el-col :span="24">
		  			<img src="../assets/imgs/Index/射手座.jpg" alt="" class="sagittarius">
		  		</el-col>
		  	</el-row>
		  	<el-row>
		  		<el-col :span="24">
		  			<div class="newdesc">这些礼物不会让TA失望</div>
		  		</el-col>
		  	</el-row>
		  	<el-row class="new-img" :gutter="10">
		  		<el-col :span="12">
		  			<div>
		  			    <img src="../assets/imgs/Index/日历.jpg" alt="" class="new-img1">	
		  			    <p class="desc">法国木质金属月历</p>
		  			    <p><span>¥390</span></p>
		  			</div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div>
		  				<img src="../assets/imgs/Index/耳机.jpg" alt="" class="new-img1">
		  				<p class="desc">MAJOR II 头戴无线蓝牙耳机</p>
		  				<p><span>¥1299</span></p>
		  			</div>	
		  		</el-col>
		  	</el-row>
  		</div>
  		<el-row>
  			<el-col :span="24">
  				<div class="searchMore">查看更多></div>
  			</el-col>
  		</el-row>
  		<el-row>
  			<el-col :span="24">
  				<hr>
  			</el-col>
  		</el-row>				
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
	  this.imgHeight = this.$refs.image[0].height;
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
	.Index .second{
		margin-top: 10px;
	}
	.todayTopic .topick{
		margin-top: 20px;
	}
	.todayTopic :first-child>.el-col>div,.specialBenefit .todayBenefit,.newGoods .new{
    	font-size: 2rem;
    	font-weight: bold;
    }
    .specialBenefit .todayBenefit{
    	margin-top: 20px;
    }
    .todayTopic .topick-img,.specialBenefit .todayBenefit-img,.newGoods .new,.newGoods .new-img{
    	margin-top: 10px;
    }
    .second .topick-img>.el-col,.second .todayBenefit-img>.el-col{
    	width: 50%;
    	text-align: center;
    }
    .second .topick-img1,.second .todayBenefit-img1,.newGoods .new-img1{
    	width: 100%;
    	height: 100%;
    }
    .second .todayBenefit-img div>.desc,.newGoods .new-img .desc{
    	text-align: center;
    	font-size: 1.29rem;
    	max-width: 100%;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    }
    .second .todayBenefit-img div>:last-child,.newGoods .new-img div>:last-child{
    	text-align: center;
    	margin-top:5px;
    }
    .second .todayBenefit-img div>:last-child>span,.newGoods .new-img div>:last-child>span{
    	color: #5781d0;
    	font-size: 1.2rem;
    	margin-right:8px;
    }
    .second .todayBenefit-img div>:last-child>s,.newGoods .new-img div>:last-child>s{
    	color: rgb(153, 153, 153);
    }
    .second .newGoods .newdesc{
    	margin-top: 8px;
    	color: #999999;
    	font-size: 1.5rem;
    }
    .second .searchMore{
    	color: #999999;
    	font-size:1.8rem;
    	text-align: center; 
    }
    .second .sagittarius{
    	width: 100%;
    	height: 100%;
    	margin-top: 10px;
    }
    .second hr{
    	margin-top: 10px;
    	color: #999999;
    	width: 100%;
    	height: 100%;
    }
</style>