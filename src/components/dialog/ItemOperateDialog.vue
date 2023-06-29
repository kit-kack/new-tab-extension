<template>
  <input-dialog :title="item.title"
                v-model="$store.itemDialog"
                @ok="handleOperateItem">
    <material-input label="名字" v-model="item.name"   />
    <material-input label="URL" v-model="item.url" />
    <el-select v-model="item.pin" placeholder="类别"
               class="option"
               style="width:260px;margin-top:25px"
               default-first-option>
      <el-option
          v-for="(parent,pin) in data"
          :key="pin"
          :value="pin"
          :label="parent.name"
          style="text-align: left"
      />
    </el-select>
  </input-dialog>
</template>

<script setup>
import {$store} from "../../js/store.js";
import {ref} from "vue";
import {data, restore, restoreUnknownData, unknownData} from "../../js/db.js";
const item = ref({})
if($store.edit){
  let core;
  if($store.pin > -1){
    core = data.value[$store.pin].children[$store.index]
    item.value.pin= $store.pin
  }else{
    core = unknownData.value[$store.index]
  }
  item.value.title = '修改网站'
  item.value.name= core.name
  item.value.url= core.url
}else{
  item.value.title = '添加网站'
}


const isFullUrlRegex = /^\w+:\/\/.*/
/**
 *
 * @param { String } url
 */
function dealWithUrl(url){
    if(url.match(isFullUrlRegex)){
      return url;
    }else{
      return "https://"+url;
    }
}

function handleOperateItem(){
  if(!item.value.name || !item.value.url){
    return;
  }
  $store.itemDialog = false;
  let core = {
    name: item.value.name,
    url: dealWithUrl(item.value.url)
  }
  if($store.edit){
    if($store.pin === item.value.pin){
        // 修改
        if($store.pin > -1){
          data.value[$store.pin].children[$store.index] = core;
        }else{
          unknownData.value[$store.index] = core;
        }
      return;
    }
    // 先移除旧
    if($store.pin > -1){
      data.value[$store.pin].children.splice($store.index,1)
    }else{
      unknownData.value.splice($store.index,1)
    }
    // 添加元素
    if(item.value.pin === undefined){
      unknownData.value.push(core)
    }else{
      data.value[item.value.pin].children.push(core)
    }
    item.value = {}
  }else{
    // 添加元素
    if(item.value.pin === undefined){
      unknownData.value.push(core)
      restoreUnknownData();
    }else{
      data.value[item.value.pin].children.push(core)
      restore();
    }
    item.value = {}
  }
}


</script>

<style scoped>

.el-dialog{
  --el-dialog-padding-primary: 10px；
}

</style>