<template>
  <input-dialog :title="data.title"
                v-model="$store.itemUrlDialog"
                @ok="handleOperateItem">
    <material-input label="名字" v-model="data.name"   />
    <material-input label="Url" v-model="data.url" v-model:error-value="error" error-text="Url格式不正确"/>
    <h6 class="tip" v-if="!error">提示: 其中必须存在{{keyword}}，用来替换{{info}}</h6>
  </input-dialog>
</template>

<script setup>
import {$store} from "../../js/store.js";
import {ref} from "vue";
import {engines, icos, restoreEngines, restoreIcos} from "../../js/db.js";
const props = defineProps(['title','keyword','info','type'])
const error = ref(false)
const data = ref({})
if($store.index > -1){
  let core;
  if(props.type === 'engine'){
    core = engines.value[$store.index];
  }else{
    core = icos.value.apis[$store.index];
  }
  data.value.name= core.value
  data.value.url= core.url
  data.value.title = '修改'+props.title;
}else{
  data.value.title = '添加'+props.title;
}



const isFullUrlRegex = /^\w+:\/\/.*/

/**
 *
 * @param { String } url
 */
function isValidUrl(url){
  if(url && url.match(isFullUrlRegex)){
    if(url.includes(props.keyword)){
      return true;
    }
  }
  return false;
}

function handleOperateItem(){
  if(!isValidUrl(data.value.url)){
    error.value = true;
    return;
  }
  error.value = false;
  $store.itemUrlDialog = false;
  let core = {
    value: data.value.name,
    url: data.value.url
  };
  if(props.type === 'engine'){
    if($store.index > -1){
      engines.value[$store.index] = core;
    }else{
      engines.value.push(core)
    }
    restoreEngines();
  }else{
    if($store.index > -1){
      icos.value.apis[$store.index] = core;
    }else{
      icos.value.apis.push(core)
    }
    restoreIcos();
  }
}


</script>

<style scoped>

.el-dialog{
  --el-dialog-padding-primary: 10px；
}
.tip{
  text-align: left;
  padding-left: 21px;
  padding-right: 10px;
  margin-top: 3px;
  margin-bottom: -16px;
  font-size: 12px;
}

</style>