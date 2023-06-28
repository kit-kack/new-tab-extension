<template>
  <div id="main">
    <div id="content">
      <search/>
      <el-scrollbar height="420">
        <web-view/>
      </el-scrollbar>
    </div>
    <div @mouseenter="hover = true" @mouseleave="hover = false" id="right-btn">
      <el-space direction="vertical" size="small">
        <template v-if="$store.edit">
          <el-button text circle size="large" plain  @click="createType = true">
            <template #icon>
              <svg t="1687805397564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4108" width="200" height="200"><path d="M235.9 0C105.6 0 0 105.6 0 235.9s105.6 235.9 235.9 235.9 235.9-105.6 235.9-235.9S366.1 0 235.9 0z m0 379.7C156.4 379.7 92 315.3 92 235.9S156.4 92 235.9 92s143.8 64.4 143.8 143.8-64.4 143.9-143.8 143.9zM992 174.7H607.3c-17.6 0-32-14.4-32-32v-28c0-17.6 14.4-32 32-32H992c17.6 0 32 14.4 32 32v28c0 17.6-14.4 32-32 32zM992 393.3H607.3c-17.6 0-32-14.4-32-32v-28c0-17.6 14.4-32 32-32H992c17.6 0 32 14.4 32 32v28c0 17.6-14.4 32-32 32z" p-id="4109" fill="#8a8a8a"></path><path d="M235.9 552.3C105.6 552.3 0 657.9 0 788.1S105.6 1024 235.9 1024s235.9-105.6 235.9-235.9-105.7-235.8-235.9-235.8z m0 379.7C156.4 932 92 867.6 92 788.1s64.4-143.8 143.8-143.8 143.8 64.4 143.8 143.8S315.3 932 235.9 932zM992 727H607.3c-17.6 0-32-14.4-32-32v-28c0-17.6 14.4-32 32-32H992c17.6 0 32 14.4 32 32v28c0 17.6-14.4 32-32 32zM992 945.6H607.3c-17.6 0-32-14.4-32-32v-28c0-17.6 14.4-32 32-32H992c17.6 0 32 14.4 32 32v28c0 17.6-14.4 32-32 32z" p-id="4110" fill="#8a8a8a"></path></svg>
            </template>
          </el-button>
          <el-button text plain  circle style="width: 50px;height: 50px" @click="$store.edit = false">
            <template #icon>
              <svg t="1687666590229" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8403" width="200" height="200"><path d="M878.933333 282.737778a53.475556 53.475556 0 0 0-69.973333 0L398.222222 641.706667l-162.133333-161.848889a52.906667 52.906667 0 0 0-69.973333 0 52.906667 52.906667 0 0 0 0 69.973333l197.12 197.12a53.191111 53.191111 0 0 0 69.973333 0L878.933333 352.711111a52.906667 52.906667 0 0 0 0-69.973333z" fill="#999999" p-id="8404"></path></svg>          </template>
          </el-button>
        </template>
        <template v-else>
          <template v-if="hover">
            <el-button  text circle size="large" plain @click="visiable = true" >
              <template #icon>
                <svg t="1687779922118" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2303" width="200" height="200"><path d="M170.666667 469.333333h682.666666a42.666667 42.666667 0 0 1 0 85.333334H170.666667a42.666667 42.666667 0 0 1 0-85.333334z m0-298.666666h597.333333a42.666667 42.666667 0 0 1 0 85.333333H170.666667a42.666667 42.666667 0 1 1 0-85.333333z m0 597.333333h512a42.666667 42.666667 0 0 1 0 85.333333H170.666667a42.666667 42.666667 0 0 1 0-85.333333z" fill="#8a8a8a" p-id="2304"></path></svg>
              </template>
            </el-button>
            <el-button text circle size="large" plain  @click="$store.edit = true">
              <template #icon>
                <svg t="1687663035841" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6392" width="200" height="200"><path d="M631.168 503.168a42.666667 42.666667 0 0 1 60.330667 60.330667l-320 320A42.666667 42.666667 0 0 1 341.333333 896H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667v-170.666666a42.666667 42.666667 0 0 1 12.501333-30.165334l554.666667-554.666666a42.666667 42.666667 0 0 1 60.330667 0l170.666666 170.666666a42.666667 42.666667 0 0 1 0 60.330667l-128 128a42.666667 42.666667 0 0 1-60.330666 0l-85.333334-85.333333a42.666667 42.666667 0 1 1 60.330667-60.330667L768 366.336 835.669333 298.666667 725.333333 188.330667l-512 512V810.666667h110.336l307.498667-307.498667z" p-id="6393" fill="#8a8a8a"></path></svg>
              </template>
            </el-button>
          </template>
          <el-button text plain  circle style="width: 50px;height: 50px" @click="$store.itemDialog = true">
            <template #icon>
              <svg t="1687665872152" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7424" width="200" height="200"><path d="M853.333333 533.333333C865.115407 533.333333 874.666667 523.782074 874.666667 512 874.666667 500.217926 865.115407 490.666667 853.333333 490.666667L170.666667 490.666667C158.884592 490.666667 149.333333 500.217926 149.333333 512 149.333333 523.782074 158.884592 533.333333 170.666667 533.333333L853.333333 533.333333Z" fill="#999999" p-id="7425"></path><path d="M490.666667 853.333333C490.666667 865.115407 500.217926 874.666667 512 874.666667 523.782074 874.666667 533.333333 865.115407 533.333333 853.333333L533.333333 170.666667C533.333333 158.884592 523.782074 149.333333 512 149.333333 500.217926 149.333333 490.666667 158.884592 490.666667 170.666667L490.666667 853.333333Z" fill="#979797" p-id="7426"></path></svg>
            </template>
          </el-button>
        </template>
      </el-space>
    </div>
    <template v-if="$store.edit">
      <h6 class="refresh-info">tip: 双击网站选项标签来刷新缓存图标</h6>
    </template>
    <input-dialog title="创建类别" v-model="createType" @ok="handleCreateType">
      <material-input label="类别" v-model="newTypeValue"  />
    </input-dialog>
  </div>
  <el-drawer
      v-model="visiable"
      title="更多"
      style="max-width: 380px;padding:0;user-select: none"
      @blur="visiable = false"
      append-to-body
      modal-class="drawer-modal"
  >
    <side-view/>
  </el-drawer>
  <template v-if="$store.itemDialog">
    <create-or-modify-item-dialog/>
  </template>



</template>

<script setup>
import WebView from "./view/WebView.vue";
import {ref} from "vue";
import {$store} from "./js/store.js";
import {data, restore} from "./js/db.js";
import CreateOrModifyItemDialog from "./components/dialog/ItemOperateDialog.vue";
import SideView from "./view/SideView.vue";

const hover = ref(false)
const createType = ref(false)
const newTypeValue = ref()
const visiable = ref(false)


function handleCreateType(){
  if(newTypeValue.value){
    createType.value = false;
    data.value.push({
      name: newTypeValue.value,
      children: []
    })
    restore()
    newTypeValue.value = undefined;
  }

}
</script>

<style scoped>
#main{
  overflow-x: hidden;
  overflow-y: auto;
}
#content{
  width: 985px;
  margin-left: 50%;
  transform: translateX(-50%);
  padding-top: 30vh;
  text-align: center;
}
#right-btn{
  position: fixed;
  right: 20px;
  bottom: 20px;
}
.refresh-info{
  position: fixed;
  right: 20px;
  bottom: 5px;
  font-weight: normal;
  color:#999999;
}

</style>
