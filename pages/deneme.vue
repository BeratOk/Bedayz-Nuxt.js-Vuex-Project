<template>
  <div>
   <div v-for="product in Urunler " v-bind:key="product">
      <div class="itemlist">
      <div :id="product.id" :class="div1">
           
       <NuxtLink to="/productpage"><div class="image">
           
           <img class="div2" :src="getImgUrl(product.imagesrc)">
           <div :class="div3"> 
               <div class="satinalbuton">
                   <p class="mt-3" @click="addToCart(product.id)">SEPETE EKLE</p>
                   </div>
               </div> 
           </div></NuxtLink>
           <div :class="div4">
           <p :class="div5">BEDAYZ</p>
           <p :class="div6">{{product.name}}</p>
           <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
           <p :class="div7">{{product.price}}TL</p>
           <div :class="div8">
             <p class="mt-3">SEPETE EKLE</p>
             </div>
            </div>
    </div>
  
    </div>
  </div>
    
  </div>
</template>

<script>
export default {
    name: "urun",
    props:{},
    methods: {
        getImgUrl(pic) {
    return require('~/assets/images/'+pic)
}
    },
    asyncData (){
        
    },
    computed: {
        
      Urunler () {
        return this.$store.state.Urunler
      },
      
    },
   
    created() {
        this.$store.dispatch('Urunlerfetch')
    }
    
}
</script>

<style>
.urunAlanı{
    background-color:red;
    width:100px;
    height:100px;
}
</style>