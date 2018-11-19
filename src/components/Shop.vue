<template>
  <div class="Shop">
		<header class="header">
			<el-row type="flex">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="search"><el-button icon="el-icon-search">搜索</el-button></div>  
              </el-col>
            </el-row>
			<el-row type="flex" id="middle" :class="flag?classA:classB">
				<el-col :xs="4" :sm="4" :md="4" :lg="4" class="first-child">
					<div><router-link to="/Index">首页</router-link></div>
				</el-col>
				<el-col :xs="18" :sm="18" :md="17" :lg="17" class="second-child">
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
  	}
  },
  methods:{
  	dropDown(){
  		this.flag=!this.flag;
  	},

  }
}
</script>

<style scoped>
    .Shop{
    	width:100%;
    	height:auto;
    }
    header{
    	z-index: 5;
    	position: fixed;
    	top: 0px; 
    }
   .header .min-middle{
   	  width: 100%;
   	  max-height: 50px;
   	  overflow: hidden;
   }
   .header .max-middle{
      width: 100%;	
   }
  @media only screen and (max-width:600px){
    .header .el-row{
  	    background-color: white;
    }
    .header .search{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: rgb(243,243,243);
    } 
    .header .search>.el-button{
     	width: 100%;
        height: 40px;
        font-size: 1.2rem;
        border: none;
        color: rgb(153,153,153);
        background-color: rgb(243,243,243);
     }
    .header .first-child>div{
     	text-align:center;
     }
    .header .first-child>div>a{
     	width: 50px;
     	height: 50px;
     	line-height: 50px;
     	display: inline-block;
     	color: #333333;
     	font-size: 1.7rem;
     	text-decoration:none;
    }
    .header .second-child>ul{
     	list-style-type: none;
     	margin-top: 10px;
     	padding-left: 10px;
    }
    .header .second-child>ul>li{
     	height: 35px;
     	line-height: 35px;
     	float: left;
     	text-align: center;
     	padding: 0 10px;
    }
    .header .second-child>ul>li>a{
     	display: inline-block;
     	width: 100%;
     	height:100%;
     	text-decoration: none;
     	color: #333333;
     	font-size: 1.28rem;
    }
    .header .last-child>#dropDown{
     	width: 100%;
     	height: 30px;
     	margin:10px 0 0 -5px;
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
     	position: relative;
     	top: 90px;
     }
    }
  @media only screen and (min-width:600px) and (max-width:800px){
    .header .min-middle{
   	  width: 100%;
   	  max-height: 80px;
   	  overflow: hidden;
   }
   .header .max-middle{
      width: 100%;	
   }
    .header .el-row{
  	    background-color: white;
    }
    .header .search{
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background-color: rgb(243,243,243);
    }  
    .header .search>.el-button{
     	width: 100%;
        height: 80px;
        font-size: 2.8rem;
        border: none;
        color: rgb(153,153,153);
        background-color: rgb(243,243,243);
    }
    .header .first-child>div{
     	text-align:center;
     	margin-top: 20px;
     }
    .header .first-child>div>a{
     	width:100%;
     	height: 50px;
     	line-height: 50px;
     	display: inline-block;
     	color: #333333;
     	font-size: 3.8rem;
     	text-decoration:none;
     }
    .header .second-child>ul{
     	list-style-type: none;
     	margin-top: 20px;
     	padding-left: 15px;
     }
    .header .second-child>ul>li{
     	width: 100px;
     	height: 60px;
     	line-height: 60px;
     	float: left;
     	text-align: center;
     	padding: 0 4px;
     }
    .header .second-child>ul>li>a{
     	display: inline-block;
     	width: 100%;
     	height:100%;
     	text-decoration: none;
     	color: #333333;
     	font-size: 2.4rem;
    } 
    .header .last-child>#dropDown{
     	width: 100%;
     	height: 60px;
     	margin:15px 0 0 0;
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
     	position: relative;
     	top: 170px;
     }
    }
  @media only screen and (min-width:810px) and (max-width:1200px){
    .header .min-middle{
   	  width: 100%;
   	  max-height: 100px;
   	  overflow: hidden;
   }
   .header .max-middle{
      width: 100%;	
   }
    .header .el-row{
  	    background-color: white;
    }
    .header .search{
        width: 100%;
        height: 100px;
        line-height: 100px;
        text-align: center;
        background-color: rgb(243,243,243);
    } 
    .header .search>.el-button{
     	width: 100%;
        height: 100px;
        font-size: 3rem;
        border: none;
        color: rgb(153,153,153);
        background-color: rgb(243,243,243);
    }
    .header .first-child>div{
     	text-align:center;
     	margin-top: 20px;
    }
    .header .first-child>div>a{
     	width:100%;
     	height: 50px;
     	line-height: 50px;
     	display: inline-block;
     	color: #333333;
     	font-size: 4.4rem;
     	text-decoration:none;
    }
    .header .second-child>ul{
     	list-style-type: none;
     	margin-top: 20px;
        padding-left: 10px;
    }
    .header .second-child>ul>li{
     	width: 110px;
     	height: 70px;
     	line-height: 70px;
     	float: left;
     	text-align: center;
     	padding: 0 16px;
    }
     .header .second-child>ul>li>a{
     	display: inline-block;
     	width: 100%;
     	height:100%;
     	text-decoration: none;
     	color: #333333;
     	font-size: 3.4rem;
     } 
     .header .last-child{
     	position: relative;
     }
     .header .last-child>#dropDown{
     	width: 60%;
     	height: 70px;
     	margin-top:15px;
     	position: absolute;
     	right: 5px;
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
     	position: relative;
     	top: 210px;
     }
     }
</style>