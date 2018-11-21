<template>
  <div class="Shop">
		<header class="header">
			<el-row type="flex"class="search-row">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" class="search-col">
                  <el-button icon="el-icon-search">搜索</el-button>  
              </el-col> 
            </el-row>
			<el-row type="flex" id="middle-row" :class="flag?classA:classB">
				<el-col :xs="4" :sm="3" :md="3" :lg="3" :xl="3" class="first-child">
					<div><router-link to="/Index">首页</router-link></div>
				</el-col>
				<el-col :xs="18" :sm="18" :md="18" :lg="18" class="second-child">
					<ul @click="">
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
				<el-col :xs="2" :sm="2" :md="3" :lg="3" class="last-child">
					<div :class="flag?classC:classD" @click="dropDown" id="dropDown"></div>	
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
  name: 'Shop',
  data(){
  	return{
  		flag:false,
  		classA:"max-middle",
  		classB:"min-middle",
  		classC:"bottom",
  		classD:"top"
  		// screenWidth:"1200px",
  		// x:0,
  		// s:24
  	}
  },
  methods:{
  	dropDown(){
  		this.flag=!this.flag;
  	},

  }
  /*mounted(){
  	const that=this;
  	window.onresize =()=>{
		window.screenWidth=document.body.clientWidth;
		if(window.screenWidth>that.screenWidth){
			that.s=18;
			that.x=3;
		}
  	}
  },*/
  /*watch:{
  	screenWidth(val){
  		if(!this.timer){
  			this.screenWidth=val
  			this.timer=true
  			let that=this
  			setTimeOut(function(){
  				console.log(that,screenWidth)
  				that.timer=false
  			},400)
  		}
  	}
  }*/
}
</script>

<style scoped>
    .Shop{
    	width:100%;
    	height: 100%;
    	position: relative;
    }
    header{
    	/*margin: auto;
    	max-width: 1200px;*/
    	width: 100%;
    	z-index: 5;
    	position: fixed;
    	top: 0px;
     	background-color: white; 
    }
    .header .min-middle{
   	    width: 100%;
   	    max-height: 45px;
   	    overflow: hidden;
    }
    .header .max-middle{
       width: 100%;	
    }
    .header .search-row .search-col{
    	width: 100%;
    	height: 100%;
    }
    .header .search-row .el-button{
     	width: 100%;
        height:100%;
        font-size: 1.6rem;
        border: none;
        color: rgb(153,153,153);
        background-color: rgb(243,243,243);
     }
     .header #middle-row{
     	width: 100%;
     	height: 100%;
     	margin-top: 10px;
     }
     .header .first-child>div{
     	width: 100%;
     	height: 100%;
     	text-align:left;
     	line-height:45px;
     }
    .header .first-child>div>a{
     	width: 100%;
     	height: 100%;
     	display:block;
     	color: #333333;
     	font-size: 2rem;
     	text-decoration:none;
    }
     .header .second-child>ul{
       	list-style-type: none;
      }
      .header .second-child>ul>li{
      	width: 20%;
       	height:100%;
       	line-height: 45px;
       	float: left;
       	text-align: center;
      }
      .header .second-child>ul>li>a{
       	display:block;
       	width: 100%;
       	height:100%;
       	text-decoration: none;
       	color: #333333;
       	font-size: 1.5rem;
      }
      .header .last-child>#dropDown{
       	width: 80%;
       	height:35px;
       	margin: 4px 0;
       	position: relative;
       	right: 0;
      }   
    .header .last-child>.top{
    	background-image: url("../assets/imgs/Index/top.png");
    	background-repeat: no-repeat;
    	background-size: contain;
    }
    .header .last-child>.bottom{
    	background-image: url("../assets/imgs/Index/control.png");
    	background-repeat: no-repeat;
    	background-size: contain;
     }
     section{
     	padding-top:105px;
     	padding-bottom: 80px; 
     	width: 100%;
     	max-width: 1200px;
     	margin: auto;
     }
</style>