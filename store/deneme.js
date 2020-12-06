import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = ()=>( {
    message1:'soner',
    added: [],
    productID:'1',
    berat:'231',
    cartProducts: [
        { id: '1'},{ id:'2'}
      ],
    productsVS: [
        {
          id: '1',
          name: 'BALANCE HOODIE ',
           price: 219.90,
          imagesrc:"images/urun1-1.png",
          image:"images/urun1-1.png",
          image2:"images/urun1-2.png"
        },
        {
           id: '2',
          name: 'BEDEL HOODIE ',
           price: 219.90,
           imagesrc:"images/bedelurun.png",
          image:"images/bedelurun.png",
          image2:"images/urun2-2.png"
        },
        {
         id: '3',
          name: 'HOLO HOODIE ',
           price: 239.90,
           imagesrc:"images/urun3-1.png",
          image:"images/urun3-1.png",
          image2:"images/urun3-2.png"
        },
           {
         id: '4',
          name: 'HOPE HOODIE ',
           price: 230.90,
            imagesrc:"images/urun4-1.png",
          image:"images/urun4-1.png",
          image2:"images/urun4-2.png"
        }
       
        
        ],

        productsTemp:[{
            id: '1',
            name: 'BALANCE HOODIE ',
             price: 219.90,
            imagesrc:require("~/assets/images/urun1-1.png"),
            image:require("~/assets/images/urun1-1.png"),
            image2:require("~/assets/images/urun1-2.png")
          },
          {
             id: '2',
            name: 'BEDEL HOODIE ',
             price: 219.90,
             imagesrc:"images/bedelurun.png",
            image:"images/bedelurun.png",
            image2:"images/urun2-2.png"
          },
          {
             id: '4',
            name: 'BEDEL HOODIE ',
             price: 219.90,
             imagesrc:"images/bedelurun.png",
            image:"images/bedelurun.png",
            image2:"images/urun2-2.png"
          },
          
          {
           id: '3',
            name: 'HOLO HOODIE ',
             price: 239.90,
             imagesrc:"images/urun3-1.png",
            image:"images/urun3-1.png",
            image2:"images/urun3-2.png"
          }
         
          ],
          
        productsUAAZ: [
          {
            id: '1',
            name: 'BALANCE HOODIE ',
             price: 219.90,
            imagesrc:"images/urun1-1.png",
            image:"images/urun1-1.png",
            image2:"images/urun1-2.png"
          },
          {
             id: '2',
            name: 'BEDEL HOODIE ',
             price: 219.90,
             imagesrc:"images/bedelurun.png",
            image:"images/bedelurun.png",
            image2:"images/urun2-2.png"
          },
          {
           id: '3',
            name: 'HOLO HOODIE ',
             price: 239.90,
             imagesrc:"images/urun3-1.png",
            image:"images/urun3-1.png",
            image2:"images/urun3-2.png"
          },
          {
           id: '4',
            name: 'HOPE HOODIE ',
             price: 230.90,
              imagesrc:"images/urun4-1.png",
            image:"images/urun4-1.png",
            image2:"images/urun4-2.png"
          }
         
          
          ],
          productsUAZA: [
          
     
          {
           id: '1',
            name: 'HOPE HOODIE ',
            price: 230.90,
              imagesrc:"images/urun4-1.png",
            image:"images/urun4-1.png",
            image2:"images/urun4-2.png"
          }, 
           {id: '2',
            name: 'HOLO HOODIE ',
             price: 239.90,
             imagesrc:"images/urun3-1.png",
            image:"images/urun3-1.png",
            image2:"images/urun3-2.png"
          },
           {
             id: '3',
            name: 'BEDEL HOODIE ',
             price: 219.90,
             imagesrc:"images/bedelurun.png",
            image:"images/bedelurun.png",
            image2:"images/urun2-2.png"
          },{
          id: '4',
            name: 'BALANCE HOODIE ',
             price: 219.90,
            imagesrc:"images/urun1-1.png",
            image:"images/urun1-1.png",
            image2:"images/urun1-2.png"
          }
         
          
          ],
          productsUP: [
          {
            id: '1',
            name: 'BALANCE HOODIE ',
             price: 219.90,
            imagesrc:"images/urun1-1.png",
            image:"images/urun1-1.png",
            image2:"images/urun1-2.png"
          },
          {
             id: '2',
            name: 'BEDEL HOODIE ',
             price: 219.90,
             imagesrc:"images/bedelurun.png",
            image:"images/bedelurun.png",
            image2:"images/urun2-2.png"
          },{
          id: '3',
            name: 'HOPE HOODIE ',
             price: 230.90,
              imagesrc:"images/urun4-1.png",
            image:"images/urun4-1.png",
            image2:"images/urun4-2.png"
          },
          {
           id: '4',
            name: 'HOLO HOODIE ',
             price: 239.90,
             imagesrc:"images/urun3-1.png",
            image:"images/urun3-1.png",
            image2:"images/urun3-2.png"
          },
  
          ],
          productsPU: [
              {
           id: '1',
            name: 'HOLO HOODIE ',
             price: 239.90,
             imagesrc:"images/urun3-1.png",
            image:"images/urun3-1.png",
            image2:"images/urun3-2.png"
          },
              {
           id: '2',
            name: 'HOPE HOODIE ',
             price: 230.90,
              imagesrc:"images/urun4-1.png",
            image:"images/urun4-1.png",
            image2:"images/urun4-2.png"
          },
          {
            id: '3',
            name: 'BALANCE HOODIE ',
            price: 219.90,
            imagesrc:"images/urun1-1.png",
            image:"images/urun1-1.png",
            image2:"images/urun1-2.png"
          },
          {
             id: '4',
            name: 'BEDEL HOODIE ',
             price: 219.90,
             imagesrc:"images/bedelurun.png",
            image:"images/bedelurun.png",
            image2:"images/urun2-2.png"
          }
        
        
         
          
          ]

})
const getters= {}
export const mutations= {

    setProductList(state,productListName){
        state.productsTemp=productListName;
    },
    setProductID(state,productID){
        state.productID=productID;
    },
    addProductCart(state,productID){
        state.cartProducts.push(productID);
    },
    addToCart(state,item){
        state.added.push(item);
        localStorage.setItem('added1',state.added);

    },
}
export const actions= {
    updateProductList({commit},productListName){
        commit('setProductList',productListName);
    },
    updateProductID({commit},productID){
        commit('setProductID',productID);
    },
    updateProductCart({commit},productID){
        commit('addProductCart',productID);
    },

}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

});

export default store;
