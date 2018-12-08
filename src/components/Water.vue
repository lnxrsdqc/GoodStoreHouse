<template>
  <div class="Water">
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
			<el-row class="el-row-img" :gutter="10">
				<el-col :span="12">
					<img src="../assets/imgs/water/topic-1.jpg" alt="" class="topick-img1">
				</el-col>
				<el-col :span="12">
					<img src="../assets/imgs/water/topic-2.jpg" alt="" class="topick-img1">
				</el-col>
			</el-row>
		</div>
		<div class="cup">
  			<el-row>
		  		<el-col :span="24">
		  			<div class="desc">水杯</div>
		  		</el-col>
		  	</el-row>
		  	<el-row class="cup-img" :gutter="10">
		  		<el-col :span="12">
		  			<div>
		  			    <img src="../assets/imgs/Water/cup-1.jpg" alt="">	
		  			    <p class="cup-desc">姆明儿童小号搪瓷珐琅杯250ml</p>
		  			    <p class="cup-desc">让可爱善良的姆明小精灵温暖你的心灵【多款可选】</p>
		  			    <p class="cup-desc2">于2009年时与芬兰国宝级童话故事MOOMIN姆明授权合作，打造出一系列的玻璃和珐琅生活器皿，以深富童趣的姆明一家人的生</p>
		  			    <p class="price"><span>¥238</span><s>¥259</s></p>
		  			    <div><input type="button" value="领券立减"></div>
		  			</div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div>
		  				<img src="../assets/imgs/Water/cup-2.jpg" alt="">
		  				<p class="cup-desc">磨砂粗陶水杯-带托盘</p>
		  				<p class="cup-desc">设计中的生活美学器具</p>
		  				<p class="cup-desc2">来自丹麦，让你在家也能手工冲泡专业的咖啡</p>
		  				<p class="price"><span>¥208</span><s>¥219</s></p>
		  				<div><input type="button" value="领券立减"></div>
		  			</div>	
		  		</el-col>
		  	</el-row>
		  	<el-row class="cup-img" :gutter="10">
		  		<el-col :span="12">
		  			<div>
		  			    <img src="../assets/imgs/Water/cup-3.jpg" alt="">	
		  			    <p class="cup-desc">故宫联名古法琉璃茶器套装</p>
		  			    <p class="cup-desc">纯手工打造 藏品级器皿</p>
		  			    <p class="cup-desc2">公道杯一个、琉璃茶盏两只，通透优雅，耐高温不含铅</p>
		  			    <p class="price"><span>¥350</span></p>
		  			    <div><input type="button" value="领券立减"></div>
		  			</div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div>
		  				<img src="../assets/imgs/Water/cup-4.jpg" alt="">
		  				<p class="cup-desc">浮雕小天使直口玻璃杯</p>
		  				<p class="cup-desc">精工限量手作 匠心独具</p>
		  				<p class="cup-desc2">灵感源自瞿广慈“彩虹天使”，艺术造型，杯身通透轻薄</p>
		  				<p class="price"><span>¥168</span></p>
		  				<div><input type="button" value="领券立减"></div>
		  			</div>	
		  		</el-col>
		  	</el-row>
		  	<el-row class="cup-img" :gutter="10">
		  		<el-col :span="12">
		  			<div>
		  			    <img src="../assets/imgs/Water/cup-5.jpg" alt="">	
		  			    <p class="cup-desc">简约创意对杯 陶瓷杯/木杯</p>
		  			    <p class="cup-desc">玄黑+素白 极简美学设计</p>
		  			    <p class="cup-desc2">良仓携手质造情侣对杯，杯底可定制私人情书，走心好礼</p>
		  			    <p class="price"><span>¥350</span></p>
		  			    <div><input type="button" value="领券立减"></div>
		  			</div>
		  		</el-col>
		  		<el-col :span="12">
		  			<div>
		  				<img src="../assets/imgs/Water/cup-6.jpg" alt="">
		  				<p class="cup-desc">浮雕小天使直口玻璃杯</p>
		  				<p class="cup-desc">精工限量手作 匠心独具</p>
		  				<p class="cup-desc2">可进洗碗机、微波炉，盖子可做小碟子，新骨瓷材质</p>
		  				<p class="price"><span>¥168</span></p>
		  				<div><input type="button" value="领券立减"></div>
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
  name: 'Water',
  data(){
  	return{//轮播图图片自适应高度,思路:获取当前图片的高度然后赋给block外部容器的高度，然后flex布局容器里面的图片居中
  		items:[
  		    {
  		    	url:require('../assets/imgs/Water/carousel-1.jpg')
  		    },
  		    {
  		    	url:require('../assets/imgs/Water/carousel-2.jpg')
  		    },
  		    {
  		    	url:require('../assets/imgs/Water/carousel-3.jpg')
  		    },
  		    {
  		    	url:require('../assets/imgs/Water/carousel-4.jpg')
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
    .Water .bannerImg{
    	width: 100%;
	    height: auto;
	    min-height: 190px;
	    min-width: 320px;
    }
    .second{
    	margin-top: 20px;
    }
    .second .topick,.second .desc{
    	font-size: 2rem;
    	font-weight: bold;
    }
    .second .cup{
    	margin-top: 20px;
    }
    .second .el-row-img,.second .cup-img{
    	margin-top: 20px;
    }
    .second .el-row-img img,.cup .cup-img img{
    	width: 100%;
    	height: 100%;
    }
    .second .cup-desc{
    	text-align: left;
    	font-size: 1.29rem;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    }
    .second .cup-desc2{
    	color: #999999;
    	text-align: left;
    	font-size: 1rem;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .cup .cup-img .el-col div>:last-child{
    	text-align: left;
    	margin-top: 5px;
    }
    .cup .cup-img .price{
    	margin-top: 5px;
    }
    .cup .cup-img .price>span{
    	color: #5781d0;
    	font-size: 1.2rem;
    	margin-right:8px;
    }
    .cup .cup-img .price>s{
    	color: rgb(153, 153, 153);
    }
    .cup .cup-img div>:last-child>input{
    	border: none;
    	color: white;
    	background-color: red;
    }
    .second .searchMore{
    	color: #999999;
    	font-size:1.8rem;
    	text-align: center; 
    	margin-top: 20px;
    }
    .second hr{
    	margin-top: 10px;
    	color: #999999;
    	width: 100%;
    	height: 100%;
    }
</style>