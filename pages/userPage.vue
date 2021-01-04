<template>
<div>
     <center><v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      
      @click="pressed()"
    >
      ÇIKIŞ YAP
    </v-btn></center>
    </div>
</template>

<script>
import firebase from '@firebase/app';
require('firebase/auth');
export default {
    
    methods:{
        pressed(){
         firebase
         .auth().signOut()
    
         .then(data => {
           console.log(data)
           this.$router.push('/')

         }  ).catch(error => (this.error = error))
       }
    },
    }


</script>

<style>
.ma-2{
  color:red !important;
}
</style>