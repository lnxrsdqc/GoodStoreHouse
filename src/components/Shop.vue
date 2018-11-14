<template>
  <div class="Shop">
		<header class="header">
			<el-row type="flex">
              <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="search">
                	<router-link to="."><el-button icon="el-icon-search">搜索</el-button><router-link>
                </div>  
              </el-col>
            </el-row>
			<el-row type="flex" class="middle">
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
					<div><img src="../assets/imgs/Index/control.png" alt=""></div>	
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
   .header .middle{
   	  width: 100%;
   	  max-height: 50px;
   	  overflow: hidden;
   }
   /* .header{
      margin-top:-8px;
    }
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
   	text-align:left;
   }
   .header .first-child>div>a{
   	  width: 50px;
   	  height: 50px;
   	  line-height: 50px;
   	  display: inline-block;
   	  color: #333333;
   	  font-size: 1.6rem;
   	  text-decoration:none;
   }
   .header .second-child>ul{
   	  list-style-type: none;
   	  margin-top: 10px;
   }
   .header .second-child>ul>li{
   	  height: 35px;
   	  line-height: 35px;
   	  float: left;
   	  text-align: center;
   	  padding: 0 5px;
   }
   .header .second-child>ul>li>a{
   	  display: inline-block;
   	  width: 100%;
   	  height: 100%;
   	  text-decoration: none;
   	  color: #333333;
   	  font-size: 1.2rem;
   } 
   .header .last-child>div{
   	  width: 100%;
   	  height: 50px;
   	  line-height: 50px;
   	  text-align: center;
   } 
   .header .last-child>div>img{
   	  width: 30px;
   	  margin:10px 0 0 -5px;
   } */
    @media only screen and (max-width: 360px){
    .header{
	    margin-top:-8px;
	  }
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
     	text-align:left;
     }
    .header .first-child>div>a{
     	width: 50px;
     	height: 50px;
     	line-height: 50px;
     	display: inline-block;
     	color: #333333;
     	font-size: 1.6rem;
     	text-decoration:none;
     }
    .header .second-child>ul{
     	list-style-type: none;
     	margin-top: 10px;
     }
    .header .second-child>ul>li{
     	height: 35px;
     	line-height: 35px;
     	float: left;
     	text-align: center;
     	padding: 0 5px;
    }
    .header .second-child>ul>li>a{
     	display: inline-block;
     	width: 100%;
     	height: 100%;
     	text-decoration: none;
     	color: #333333;
     	font-size: 1.2rem;
     } 
    .header .last-child>div{
     	width: 100%;
     	height: 50px;
     	line-height: 50px;
     	text-align: center;
     } 
    .header .last-child>div>img{
     	width: 30px;
     	margin:10px 0 0 -5px;
     }
     }
  @media only screen and (min-width:360px) and (max-width: 370px){
    .header{
        margin-top:-8px;
	}
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
     	text-align:left;
     }
    .header .first-child>div>a{
     	width: 50px;
     	height: 50px;
     	line-height: 50px;
     	display: inline-block;
     	color: #333333;
     	font-size: 1.8rem;
     	text-decoration:none;
     }
    .header .second-child>ul{
     	list-style-type: none;
     	margin-top: 10px;
     }
    .header .second-child>ul>li{
    height: 35px;
    line-height: 35px;
    float: left;
    text-align: center;
    padding: 0 8px;
     }
    .header .second-child>ul>li>a{
     	display: inline-block;
     	width: 100%;
     	height: 100%;
     	text-decoration: none;
     	color: #333333;
     	font-size: 1.3rem;
     } 
    .header .last-child>div{
     	width: 100%;
     	height: 50px;
     	line-height: 50px;
     	text-align: center;
     } 
    .header .last-child>div>img{
     	width: 30px;
     	margin:10px 0 0 -5px;
     }
     }
  @media only screen and (min-width:370px) and (max-width:400px){
    .header{
        margin-top:-8px;
    }
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
     	text-align:left;
     }
    .header .first-child>div>a{
        width: 50px;
     	height: 50px;
     	line-height: 50px;
     	display: inline-block;
     	color: #333333;
     	font-size: 1.8rem;
     	text-decoration:none;
    }
    .header .second-child>ul{
     	list-style-type: none;
     	margin-top: 10px;
     }
    .header .second-child>ul>li{
     	height: 35px;
     	line-height: 35px;
     	float: left;
     	text-align: center;
     	padding: 0 9px;
     }
    .header .second-child>ul>li>a{
     	display: inline-block;
     	width: 100%;
     	height: 100%;
     	text-decoration: none;
     	color: #333333;
     	font-size: 1.3rem;
     } 
    .header .last-child>div{
     	width: 100%;
     	height: 50px;
     	line-height: 50px;
     	text-align: center;
     } 
    .header .last-child>div>img{
     	width: 30px;
     	margin:10px 0 0 -5px;
     }
     } 
  @media only screen and (min-width:410px) and (max-width:600px){
    .header{
        margin-top:-8px;
    }
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
     	text-align:left;
     }
    .header .first-child>div>a{
     	width: 50px;
     	height: 50px;
     	line-height: 50px;
     	display: inline-block;
     	color: #333333;
     	font-size: 1.8rem;
     	text-decoration:none;
    }
    .header .second-child>ul{
     	list-style-type: none;
     	margin-top: 10px;
    }
    .header .second-child>ul>li{
     	height: 35px;
     	line-height: 35px;
     	float: left;
     	text-align: center;
     	padding: 0 11px;
    }
    .header .second-child>ul>li>a{
     	display: inline-block;
     	width: 100%;
     	height:100%;
     	text-decoration: none;
     	color: #333333;
     	font-size: 1.4rem;
    } 
    .header .last-child>div{
     	width: 100%;
     	height: 50px;
     	line-height: 50px;
     	text-align: center;
    } 
    .header .last-child>div>img{
     	width: 30px;
     	margin:10px 0 0 -5px;
    }
    }
  @media only screen and (min-width:600px) and (max-width:800px){
    .header{
        margin-top:5px;
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
     	margin-left: 10px;
     }
    .header .second-child>ul>li{
     	width: 100px;
     	height: 60px;
     	line-height: 60px;
     	float: left;
     	text-align: center;
     	padding: 0 2px;
     }
    .header .second-child>ul>li>a{
     	display: inline-block;
     	width: 100%;
     	height:100%;
     	text-decoration: none;
     	color: #333333;
     	font-size: 2.4rem;
    } 
    .header .last-child>div{
     	width: 100%;
     	height: 50px;
     	line-height: 50px;
     	text-align: center;
     	margin:20px 0 0 0;
    }
    }
  @media only screen and (min-width:810px) and (max-width:1200px){
    .header{
        margin-top:10px;
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
     	font-size: 4.2rem;
     	text-decoration:none;
    }
    .header .second-child>ul{
     	list-style-type: none;
     	margin-top: 20px;
        margin-left: 10px;
    }
    .header .second-child>ul>li{
     	width: 110px;
     	height: 70px;
     	line-height: 70px;
     	float: left;
     	text-align: center;
     	padding: 0 15px;
    }
     .header .second-child>ul>li>a{
     	display: inline-block;
     	width: 100%;
     	height:100%;
     	text-decoration: none;
     	color: #333333;
     	font-size: 3rem;
     } 
     .header .last-child>div{
     	width: 100%;
     	height: 50px;
     	line-height: 50px;
     	text-align: center;
     	margin:20px 0 0 0;
     }
     } 
</style>