<template>
  <h6>管理</h6>
  <list-item title="搜索引擎" @click="$store.searchEngineTableDialog = true">
    <template #icon>
      <el-icon :size="28">
        <svg t="1687787793985" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40287" width="200" height="200"><path d="M53.333333 469.333333A416.256 416.256 0 0 1 469.333333 53.333333a32.213333 32.213333 0 0 1 32 32 32.213333 32.213333 0 0 1-32 32A352 352 0 1 0 821.333333 469.333333a32 32 0 0 1 64 0 416 416 0 0 1-832 0z" fill="#8a8a8a" p-id="40288"></path><path d="M597.333333 245.333333a32.213333 32.213333 0 0 1-32-32 32.213333 32.213333 0 0 1 32-32h256a32.213333 32.213333 0 0 1 32 32 32.213333 32.213333 0 0 1-32 32zM597.333333 373.333333a32.213333 32.213333 0 0 1-32-32 32.213333 32.213333 0 0 1 32-32h128a32.213333 32.213333 0 0 1 32 32 32.213333 32.213333 0 0 1-32 32zM860.16 972.373333a70.656 70.656 0 0 1-9.813333-0.853333c-19.882667-2.56-56.234667-15.786667-76.8-77.226667a97.066667 97.066667 0 0 1 10.666666-88.32 97.066667 97.066667 0 0 1 80.64-37.973333 98.901333 98.901333 0 0 1 93.013334 46.08 100.650667 100.650667 0 0 1-13.226667 103.253333 102.4 102.4 0 0 1-84.48 55.04z m4.693333-140.373333a34.688 34.688 0 0 0-28.586666 11.52 34.133333 34.133333 0 0 0-1.749334 30.72c7.338667 22.357333 17.493333 33.237333 24.362667 34.133333h0.981333c6.272 0 18.389333-6.954667 31.829334-26.538666 12.330667-18.304 13.226667-31.658667 10.24-37.546667s-14.250667-12.288-37.077334-12.288z" fill="#8a8a8a" p-id="40289"></path></svg>
      </el-icon>
    </template>
  </list-item>
  <list-item title="图标获取API" @click="$store.icoTableDialog = true">
    <template #icon>
      <el-icon :size="28">
        <svg  viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"  width="16" height="16"><path d="M512 32c-265.094 0-480 214.925-480 480s214.906 480 480 480 480-214.925 480-480-214.906-480-480-480zM512 944.998c-239.146 0-432.998-193.853-432.998-432.998s193.853-432.998 432.998-432.998 432.998 193.853 432.998 432.998-193.853 432.998-432.998 432.998zM773.581 530.605l0.154-8.871h160.234c0.211-3.206 0.413-6.442 0.413-9.725s-0.202-6.48-0.413-9.725h-160.234l-0.154-8.832c-1.277-69.216-9.619-135.322-24.826-196.435l-1.977-8.064 7.814-2.659c38.314-13.085 67.277-27.197 86.726-38.045-4.205-5.203-8.525-10.301-12.941-15.322-23.203 12.729-49.411 24.115-77.971 34.032l-8.851 3.043-2.736-8.957c-16.128-53.049-37.037-99.36-62.237-137.597-11.289-4.819-22.857-9.101-34.579-12.931 31.277 39.859 57.706 93.341 77.232 156.652l2.736 8.871-8.957 2.468c-55.632 15.36-116.88 23.846-182.074 25.277l-9.245 0.192v-213.908c-3.188-0.231-6.412-0.461-9.696-0.461s-6.489 0.231-9.715 0.461v213.917l-9.245-0.192c-65.002-1.421-126.24-9.994-182.026-25.421l-8.966-2.468 2.736-8.88c19.546-63.283 45.974-116.678 77.194-156.461-11.741 3.792-23.289 8.064-34.598 12.892-25.143 38.16-46.032 84.384-62.16 137.405l-2.755 8.995-8.842-3.091c-28.474-9.869-54.643-21.293-77.923-33.994-4.454 5.088-8.823 10.224-13.037 15.475 19.44 10.838 48.413 24.96 86.717 38.045l7.814 2.659-1.968 8.064c-15.188 61.075-23.549 127.181-24.845 196.435l-0.173 8.832h-160.176c-0.221 3.235-0.413 6.432-0.413 9.715s0.202 6.518 0.413 9.725h160.205l0.173 8.871c1.315 69.869 9.802 136.551 25.219 198.134l2.045 8.064-7.872 2.659c-37.872 12.922-66.682 26.851-86.054 37.584 4.205 5.212 8.544 10.301 12.979 15.322 23.059-12.499 49.075-23.808 77.395-33.6l8.842-3.052 2.717 8.909c16.080 52.397 36.816 98.131 61.728 135.936 11.309 4.781 22.857 9.101 34.608 12.892-30.989-39.437-57.216-92.294-76.685-154.886l-2.794-8.909 9.014-2.468c55.459-15.235 116.534-23.692 181.497-25.123l9.245-0.192v212.103c3.226 0.202 6.432 0.394 9.715 0.394s6.509-0.192 9.715-0.394v-212.103l9.245 0.192c64.762 1.421 125.808 9.917 181.459 25.277l8.976 2.468-2.774 8.909c-19.469 62.506-45.706 115.334-76.617 154.733 11.741-3.792 23.309-8.112 34.608-12.892 24.874-37.805 45.609-83.463 61.671-135.744l2.736-8.957 8.842 3.082c28.253 9.763 54.211 21.024 77.299 33.532 4.522-5.049 8.88-10.186 13.094-15.428-19.354-10.732-48.125-24.653-86.035-37.584l-7.863-2.659 2.016-8.064c15.417-61.574 23.904-128.256 25.2-198.125zM502.285 702.416l-8.851 0.202c-67.181 1.383-130.195 10.023-187.306 25.651l-8.889 2.468-2.246-8.909c-15.331-60.384-23.779-124.589-25.143-190.877l-0.173-9.216h232.608v180.682zM502.285 502.275h-232.608l0.173-9.216c1.373-65.664 9.677-129.293 24.691-189.149l2.246-8.909 8.889 2.429c57.254 15.783 120.423 24.471 187.766 25.814l8.851 0.231v178.8zM521.715 323.475l8.851-0.231c67.344-1.354 130.512-10.032 187.766-25.814l8.889-2.429 2.246 8.909c15.024 59.846 23.337 123.475 24.663 189.149l0.202 9.216h-232.608v-178.8zM729.008 721.828l-2.266 8.909-8.871-2.468c-57.111-15.629-120.125-24.269-187.306-25.661l-8.851-0.202v-180.682h232.608l-0.202 9.216c-1.363 66.326-9.802 130.579-25.114 190.886z" fill="#272636" ></path></svg>
      </el-icon>
    </template>
  </list-item>
  <h6>背景</h6>
  <list-item title="换个背景图片" @click="activateFile(false)">
    <template #icon>
      <el-icon :size="28">
        <svg t="1687787682640" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27279" width="200" height="200"><path d="M640 970.666667H384c-231.765333 0-330.666667-98.901333-330.666667-330.666667V384c0-231.765333 98.901333-330.666667 330.666667-330.666667h256c231.765333 0 330.666667 98.901333 330.666667 330.666667v256c0 231.765333-98.901333 330.666667-330.666667 330.666667z m-256-853.333334C187.136 117.333333 117.333333 187.136 117.333333 384v256c0 196.864 69.802667 266.666667 266.666667 266.666667h256c196.864 0 266.666667-69.802667 266.666667-266.666667V384c0-196.864-69.76-266.666667-266.666667-266.666667z" fill="#8a8a8a" p-id="27280"></path><path d="M384 458.666667A117.333333 117.333333 0 1 1 501.333333 341.333333 117.461333 117.461333 0 0 1 384 458.666667z m0-170.666667A53.333333 53.333333 0 1 0 437.333333 341.333333 53.418667 53.418667 0 0 0 384 288zM87.509333 826.496a31.829333 31.829333 0 0 1 8.96-44.373333l210.346667-141.226667a127.488 127.488 0 0 1 151.466667 8.106667l14.08 12.373333a62.848 62.848 0 0 0 78.506666 0l177.493334-152.32a127.402667 127.402667 0 0 1 162.133333 0l69.546667 59.733333a32.085333 32.085333 0 0 1-41.813334 48.64l-69.546666-59.733333a63.488 63.488 0 0 0-78.933334 0l-177.493333 152.32a127.402667 127.402667 0 0 1-162.133333 0l-14.08-12.373333a63.445333 63.445333 0 0 0-73.813334-3.413334l-210.346666 141.226667a34.688 34.688 0 0 1-17.92 5.12 32.042667 32.042667 0 0 1-26.453334-14.08z" fill="#8a8a8a" p-id="27281"></path></svg>
      </el-icon>
    </template>
  </list-item>
  <list-item title="背景遮罩" raw>
      <el-slider v-model="mask"  size="small"  style="width: 160px" @input="handleMaskChange" />
  </list-item>
  <list-item title="模糊距离" raw>
    <el-slider v-model="distance"  :max="26" :step=".5" size="small"  style="width: 160px" @input="handleDistanceChange" />
  </list-item>
  <h6>主题</h6>
  <list-item title="选项卡" raw>
    <el-radio-group v-model="mainMode" fill="grey" @change="handleMainThemeChange" >
      <el-radio-button :label="true">亮色</el-radio-button>
      <el-radio-button :label="false">暗色</el-radio-button>
    </el-radio-group>
  </list-item>
  <list-item title="搜索框" raw>
    <el-radio-group v-model="searchMode" fill="grey" @change="handleSearchThemeChange" >
      <el-radio-button :label="true">亮色</el-radio-button>
      <el-radio-button :label="false">暗色</el-radio-button>

    </el-radio-group>
  </list-item>
  <list-item title="其他部分" raw >
    <el-radio-group v-model="settingMode" fill="grey" @change="handleSettingThemeChange">
      <el-radio-button text :label="false">亮色</el-radio-button>
      <el-radio-button text type="success" :label="true">暗色</el-radio-button>
    </el-radio-group>
  </list-item>

  <h6>备份与重置</h6>
  <list-item title="导出数据" @click="handleExport()">
    <template #icon>
      <el-icon :size="28">
        <svg t="1687787496969" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13636" width="200" height="200"><path d="M593.493333 299.946667L506.88 213.333333 420.266667 299.946667a32 32 0 0 1-45.226667-45.226667l109.226667-109.226667a32.170667 32.170667 0 0 1 45.226666 0l109.312 109.184a32.170667 32.170667 0 0 1 0 45.226667 31.914667 31.914667 0 0 1-45.226666 0z" fill="#8a8a8a" p-id="13637"></path><path d="M474.922667 605.013333V171.093333a32.213333 32.213333 0 0 1 32-32 32.213333 32.213333 0 0 1 32 32v433.92a32 32 0 0 1-64 0z" fill="#8a8a8a" p-id="13638"></path><path d="M138.666667 512a32.213333 32.213333 0 0 1 32-32 32.213333 32.213333 0 0 1 32 32A295.893333 295.893333 0 0 0 512 821.333333 295.893333 295.893333 0 0 0 821.333333 512a32 32 0 0 1 64 0A357.290667 357.290667 0 0 1 512 885.333333 357.290667 357.290667 0 0 1 138.666667 512z" fill="#8a8a8a" p-id="13639"></path></svg>      </el-icon>
    </template>
  </list-item>
  <list-item title="导入数据" @click="activateFile(true)">
    <template #icon>
      <el-icon :size="28">
        <svg t="1687787515639" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13852" width="200" height="200"><path d="M484.266667 630.229333l-109.226667-109.226666a32 32 0 0 1 45.226667-45.226667l86.613333 86.613333 86.613333-86.613333a32 32 0 0 1 45.312 45.226667l-109.226666 109.226666a31.914667 31.914667 0 0 1-45.226667 0z" fill="#8a8a8a" p-id="13853"></path><path d="M474.922667 604.586667V170.666667a32.213333 32.213333 0 0 1 32-32 32.213333 32.213333 0 0 1 32 32v433.92a32.213333 32.213333 0 0 1-32 32 32.213333 32.213333 0 0 1-32-32z" fill="#8a8a8a" p-id="13854"></path><path d="M138.666667 519.68a32.213333 32.213333 0 0 1 32-32 32.213333 32.213333 0 0 1 32 32A295.893333 295.893333 0 0 0 512 829.013333a295.893333 295.893333 0 0 0 309.333333-309.333333 32 32 0 0 1 64 0A357.290667 357.290667 0 0 1 512 893.013333a357.290667 357.290667 0 0 1-373.333333-373.333333z" fill="#8a8a8a" p-id="13855"></path></svg>      </el-icon>
    </template>
  </list-item>
  <el-popover :visible="visible" placement="top" :width="340">
    <p>搜索引擎、图标获取API、背景图片等会被重置，确定？</p>
    <div style="text-align: right; margin: 0">
      <el-button size="small" text @click="visible = false">cancel</el-button>
      <el-button size="small" type="primary" @click="visible = false;handleResetData()">confirm</el-button>
    </div>
    <template #reference>
      <list-item title="重置配置" @click="visible = true">
        <template #icon>
          <el-icon :size="28">
            <svg t="1687786416244" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1463" width="200" height="200"><path d="M511.5 437c20.5 0 39.5 8.5 53 22s22 32.5 22 53-8.5 39.5-22 53-32.5 22-53 22-39.5-8.5-53-22-22-32.5-22-53 8.5-39.5 22-53 32.5-22 53-22z" fill="#8a8a8a" p-id="1464"></path><path d="M176 345c28-56.5 70.5-105.5 123-141.5 62.5-43 136.5-66 212.5-66 99.5 0 194.5 39.5 265 110s110 165.5 110 265-39.5 194.5-110 265-165.5 110-265 110c-94 0-184-35-253.5-98.5s-112-150-120-243.5l-1.5-15 59.5-5 1.5 15c7 78.5 42.5 151.5 101 205 58 53.5 134 82.5 212.5 82.5 84 0 163.5-33 222.5-92s92-139 92-222.5c0-84-33-163.5-92-222.5s-139-92-222.5-92c-64 0-126 19.5-178.5 55.5-41 28.5-74.5 65.5-98 109l-58.5-17v-1.5z" fill="#8a8a8a" p-id="1465"></path><path d="M325.5 369.5l-141 47.5-14 4.5-5-14-47.5-141.5z" fill="#8a8a8a" p-id="1466"></path></svg>      </el-icon>
        </template>
      </list-item>
    </template>
  </el-popover>

  <input tabindex="-1"  type="file" ref="files" style="display: none;" @change="handleSelectedFile()" >
  <search-engine-table-dialog/>
  <ico-table-dialog/>
</template>

<script setup>

import { ref} from "vue";
import {data, engines, icos, restore, restoreEngines, restoreUnknownData, unknownData} from "../js/db.js";
import {$store} from "../js/store.js";
import {DEFAULT_ICO_APIS, DEFAULT_SEARCH_ENGINES} from "../js/preset.js";
const mask = ref(+localStorage.getItem("mask")??8)
const distance = ref(+localStorage.getItem("distance")??0)
const settingMode = ref(localStorage.getItem("global-theme-on")=== 'true')
const mainMode = ref(localStorage.getItem("index-theme-on")=== 'true')
const searchMode = ref(localStorage.getItem("search-theme-on") === 'true')
const files = ref()
const visible = ref(false)
let isGetJson = false;




function handleExport(){
  const globalData = {
    "unknown-data":unknownData.value,
    "data": data.value
  }
  const domObj = document.createElement('a');
  domObj.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(globalData)));//注：如存储数组 or JSON需将其转换为JSON字符串
  domObj.setAttribute('download', 'data.json');
  if (document.createEvent) {
    const event = document.createEvent('MouseEvents');
    event.initEvent('click', true, true);
    domObj.dispatchEvent(event);
  } else {
    domObj.click();
  }
}

function activateFile(json){
  isGetJson = json;
  files.value.click();
}


function handleSelectedFile(){
  let file = files.value.files[0]
  let reader = new FileReader();
  if(isGetJson){
    reader.readAsText(file)
    reader.onload = ()=>{
      try{
        let globalData = JSON.parse(reader.result)
        data.value = globalData.data??[];
        unknownData.value = globalData["unknown-data"]??[];
        chrome.storage.sync.set({
          data:data.value,
          "unknown-data": unknownData.value
        })
        console.log(data.value)
        console.log(unknownData.value)
        chrome.storage.sync.get(["data","unknown-data"],result=>{
          console.log(result)
        })
      }catch (_){

      }
    }
  }else{
    reader.readAsDataURL(file)
    reader.onload = ()=>{
      let openRequest = indexedDB.open("kitkack-newpage",1)

      openRequest.onupgradeneeded = ()=>{
        let db = openRequest.result;
        if(!db.objectStoreNames.contains("img")){
          db.createObjectStore("img",{keyPath:"id"})
        }
      }
      openRequest.onsuccess = function (){
        let db = openRequest.result;
        let transaction = db.transaction("img","readwrite")
        let img = transaction.objectStore("img")
        img.put({
          id: 'img',
          data: reader.result
        })
      }
      document.body.style.backgroundImage = "url("+reader.result+")"
    }
  }
}
function handleResetData(){
  // 重置 遮罩和模糊
  mask.value = 8;
  localStorage.removeItem('mask')
  document.documentElement.style.setProperty("--mask",.08)
  distance.value = 0;
  localStorage.removeItem('distance')
  document.documentElement.style.setProperty("--distance","0px")
  // 重置 背景图片
  document.body.style.backgroundImage = "url('../bg.jpg')"
  let openRequest = indexedDB.open("kitkack-newpage",1)
  openRequest.onupgradeneeded = ()=>{
    let db = openRequest.result;
    console.log(db)
    if(!db.objectStoreNames.contains("img")){
      db.createObjectStore("img",{keyPath:"id"})
    }
  }
  openRequest.onsuccess = function (){
    let db = openRequest.result;
    try{
      let transaction = db.transaction("img","readwrite")
      let img = transaction.objectStore("img")
      img.delete("img")
    }catch (_){
    }
  }
  // 重置 搜索引擎
  engines.value = DEFAULT_SEARCH_ENGINES;
  // 重置 图标获取API
  icos.value = {
    index: 0,
    apis: DEFAULT_ICO_APIS
  }
  chrome.storage.sync.remove(["engine","icos"])
}
function handleMaskChange(newValue){
    document.documentElement.style.setProperty("--mask",newValue/100)
    localStorage.setItem("mask",newValue)
}

function handleDistanceChange(newValue){
  document.documentElement.style.setProperty("--distance",newValue+'px')
  localStorage.setItem("distance",newValue)
}
function handleSearchThemeChange(newValue){
  if(newValue){
    document.documentElement.style.setProperty("--search-text-color","#fff")
    document.documentElement.style.setProperty("--search-box-shadow","rgba(255,255,255, 0.15) 0 1px 15px 0")
    localStorage.setItem("search-theme-on",true)
  }else{
    localStorage.removeItem("search-theme-on")
    document.documentElement.style.setProperty("--search-text-color","#606367")
    document.documentElement.style.setProperty("--search-box-shadow","rgba(0, 0, 0, 0.15) 0 1px 15px 0")
  }
}
function handleMainThemeChange(newValue){
  if(newValue){
    document.body.id = "dark";
    localStorage.setItem("index-theme-on",true)
  }else{
    document.body.id = "light";
    localStorage.removeItem("index-theme-on")
  }
}
function handleSettingThemeChange(newValue){
  if(newValue){
    document.body.parentNode.classList = ['dark']
    localStorage.setItem("global-theme-on",true)
  }else{
    document.body.parentNode.classList = []
    localStorage.removeItem("global-theme-on")
  }
}


</script>

<style scoped>
h6{
  margin: 5px 0 5px 10px;
}
</style>