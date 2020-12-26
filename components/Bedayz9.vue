<template>
  <div class="genel">
    <div id="ustkisim">
    <div class=ustbar>
      <div class=ustbaricerik>
      <div class="socialicons">
      <a href="https://www.instagram.com/bedayz"><img src="~/assets/images/instagram.png" height=16px width="16px" class="socialicon" ></a>
     <a href="https://www.twitter.com/bdyzone"> <img src="~/assets/images/twitter.png" height=16px width="16px" class="socialicon" href="https://www.twitter.com/bdyzone"></a>
     <a href="https://www.facebook.com/bedayzcom"> <img src="~/assets/images/facebook.png" height=16px width="16px" class="socialicon" href="https://www.facebook.com/bedayzcom"></a>
      </div>
      <div class="dilsecenek">
        <b-form-select v-model="selected" :options="options" size="sm" class="diff"></b-form-select>
        <b-form-select v-model="selected1" :options="options1" size="sm" class="diff1"></b-form-select>
      </div>
      <div class="hosgeldiniz">
       <p>Welcome</p>
        </div>
        
</div>
       
  </div>  
 
 </div>  
   
   <div class="ortakisim">
     <div class="arama">
      
  <v-text-field placeholder="Ne aramıştınız?..." class="md5"></v-text-field >
  <img src="images/search.png" class="aramalogo" height="15px" width="15px">

     </div>
      <div class="logo">
       <NuxtLink to="/"> <img src="~/assets/images/logo.png"></NuxtLink>
     </div>
      <div class="icons">
        <NuxtLink to="/userPage" v-if="loggedIn"><a href="#"><img src="~/assets/images/man.png" class="ortaicon" height="35px" width="35px"></a></NuxtLink>
        <NuxtLink to="/uyegiris" v-else><a href="#"><img src="~/assets/images/man.png" class="ortaicon" height="35px" width="35px"></a></NuxtLink>
        <a href="#"><img src="~/assets/images/hearth.png" class="ortaicon" height="45px" width="45px"></a>
        <NuxtLink to="/sepetim"><img src="~/assets/images/cart.png" class="ortaicon" height="45px" width="45px"></NuxtLink>
        
     </div>
     </div>
    
 </div>  
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import firebase from '@firebase/app';
require('firebase/auth');
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
  mounted(){
    this.setupFirebase()
  },
    data() {
      return {
        loggedIn:false,
        dialog : false,
        selected: null,
        options: [
          { value: null, text: 'Türkçe' },
          { value: 'a', text: 'English' }
         
        ],
        selected1: null,
        options1: [
          { value: null, text: 'Türk Lirası' },
          { value: 'a', text: 'Euro' },
          { value: 'a', text: 'US Dollar' }
         
        ]
      }
    },
    methods:{
      logout(){
        alert('test')
      },
      setupFirebase(){
        firebase.auth().onAuthStateChanged(user=>{
          if(user){
            console.log('user giriş yaptı');
            this.loggedIn = true;

          }else{
            this.loggedIn=false;
          }
        })

      },
      logout(){
        firebase.auth().signOut().then(()=>{
          this.$router.push('/')
        })
      }

    }
  }
</script>

<style scoped>

.genel{
  
  
}
.ustbar{
  background-color:black;
  height:40px;
  border-bottom-style:solid;
  border-bottom-width:0.01px;
  border-bottom-color:grey;

}
.ustbaricerik{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:200px;
  
}
.socialicon{
  margin-right:15px;
  
}

.mainmenubtn {
  
  color:white;
  border:none;
  cursor:pointer;
  background-color:black;
  
}
.mainmenubtn:hover{
   border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color:yellow;
  text-decoration: none;
}
.socialicons{
  float:left;
}
.dilsecenek{
  margin-left:60%;
  float:left;
}
.diff{
  width:70px;
  color:grey !important;
      -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: menulist;
    box-sizing: border-box;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    background-color: black;
    cursor: default;
    margin: 0em;
    font-family: 'Barlow', sans-serif;
    line-height: 26px ;
    font-size:13px;
    
}
.diff1{
  margin-left:20px;
  width:100px;
  color:grey !important;
      -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: menulist;
    box-sizing: border-box;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    background-color: black;
    cursor: default;
    font-family: 'Barlow', sans-serif;
    line-height: 26px ;
    font-size:13px;
    
}
.hosgeldiniz{
float:left;
border-left-style: solid;
border-left-color:grey;
border-left-width: 0.5px;
margin-left:1%;

}
.hosgeldiniz p {
  color:grey;
  margin-left:20%;
  font-size:13px;
  font-family: 'Barlow', sans-serif;
  line-height: 26px ;
}
.arama{
  width:245px;
  background-color:#e6e6e6;
  height:40px;
  float:left;
  margin-left:13%;
  margin-top:2.5%;
 
}
.md5{
  width:180px;
  float:left;
  margin-top:-3.5%;
  margin-left:7%;
  font-size:14px;
  font-family: 'Barlow', sans-serif;
  line-height: 22px ;
  color:#000000;

  
}
.aramalogo{
  margin-top:4%;
  margin-left:7%;
}
.ortakisim{
  background-color:black;
  height:120px;
}
.logo{
  float:left;
  margin-left:15%;
  margin-top:2%;
}
.icons{
  float:left;
  margin-top:2%;
  margin-left:24.5%;
  width:12%;
}
.ortaicon{
  margin-left:3%;
  
  
}
</style>