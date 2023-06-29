<template>
  <el-button text style="padding: 0 4px 0 4px;margin-bottom: 3vh"
             @click="handleDirectToWeb"
            @dblclick="handleRefreshCache()"
  >
    <div class="web-item" @mouseenter="hover = true" @mouseleave="hover = false">
      <cacheable-ico-img :url="item.url" v-if="refresh"/>
      <el-text truncated
               class="text"
               :class="{ 'hover-text': hover,'edit': $store.edit}">{{item.name}}</el-text>
      <el-icon :size="16"  v-if="hover&&$store.edit" @click="handleEditItem">
        <svg t="1687663035841" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6392" width="200" height="200"><path d="M631.168 503.168a42.666667 42.666667 0 0 1 60.330667 60.330667l-320 320A42.666667 42.666667 0 0 1 341.333333 896H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667v-170.666666a42.666667 42.666667 0 0 1 12.501333-30.165334l554.666667-554.666666a42.666667 42.666667 0 0 1 60.330667 0l170.666666 170.666666a42.666667 42.666667 0 0 1 0 60.330667l-128 128a42.666667 42.666667 0 0 1-60.330666 0l-85.333334-85.333333a42.666667 42.666667 0 1 1 60.330667-60.330667L768 366.336 835.669333 298.666667 725.333333 188.330667l-512 512V810.666667h110.336l307.498667-307.498667z" p-id="6393" fill="#8a8a8a"></path></svg>      </el-icon>
      <el-icon :size="16" class="close" v-if="$store.edit" @click="handleDeleteItem">
        <svg t="1687659426424" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7317" width="200" height="200"><path d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM512 832c-179.2 0-320-140.8-320-320s140.8-320 320-320 320 140.8 320 320S691.2 832 512 832z" p-id="7318"></path><path d="M672 352c-12.8-12.8-32-12.8-44.8 0L512 467.2 396.8 352C384 339.2 364.8 339.2 352 352S339.2 384 352 396.8L467.2 512 352 627.2c-12.8 12.8-12.8 32 0 44.8s32 12.8 44.8 0L512 556.8l115.2 115.2c12.8 12.8 32 12.8 44.8 0s12.8-32 0-44.8L556.8 512l115.2-115.2C684.8 384 684.8 364.8 672 352z" p-id="7319"></path></svg>
      </el-icon>
    </div>
  </el-button>
</template>

<script setup>
import {computed, nextTick, ref} from "vue";
import {$store} from "../js/store.js";
import {data, icos, unknownData} from "../js/db.js";
import {getHostname} from "../js/preset.js";


const props = defineProps({
  index: Number,
  pin: Number
})
const item = computed(()=>{
  if(props.pin> -1){
    return data.value[props.pin].children[props.index]
  }else{
    return unknownData.value[props.index];
  }
})
const hover = ref()
const refresh = ref(true)

function doRefresh(){
  refresh.value = false;
  nextTick(()=>{
    refresh.value = true;
  })
}


function handleDeleteItem(){
  // 移除url对应的ico缓存
  localStorage.removeItem("ico-"+getHostname(item.value.url))
  if(props.pin === -1){
    unknownData.value.splice(props.index,1)
  }else{
    data.value[props.pin].children.splice(props.index,1)
  }

}
function handleEditItem(){
  $store.pin = props.pin;
  $store.index = props.index;
  $store.itemDialog = true;
}
function handleDirectToWeb(){
  if($store.edit){
    return;
  }
  document.location.href = item.value.url;
}
function handleRefreshCache(){
  if($store.edit){
    if(!icos.value.apis[icos.value.index].nonCacheable){
      const icoKey = "ico-"+getHostname(item.value.url);
      if(localStorage.getItem(icoKey)){
        localStorage.removeItem(icoKey)
        doRefresh();
      }
    }
  }
}

</script>

<style scoped>
.web-item{
  width: 162px;
  height:36px ;
  display: flex;
  align-items: center;
  position: relative;
}
.close {
  position: absolute;
  right: 2px;
}
.text{
  margin-left: 10px;
  height: 18px;
  font-size: 16px;
  text-align: left;
  font-family: Consolas;
  color: #444;
}
#dark .text{
  color: white;
}

.hover-text{
  color:white;
}
#dark .hover-text{
  color:#ccc;
}
.edit{
  width: 100px;
}
</style>