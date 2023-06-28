<template>
  <div id="search">
    <el-popover
        width="38vw"
        placement="bottom-start"
        :offset="0"
        :visible="visiable"
        popper-style="padding: 0;border-radius:0;"
        :show-arrow="false">
      <!-- TODO: 搜索框字体颜色随主题改变      -->
      <template #reference>
        <el-input
          v-model="searchContent"
          placeholder="Search..."
          input-style="
              background-color: transparent;
              font-size: 16px;
              border-radius:0;
              user-select:none;
              border:none;
          "
          style="width: 38vw;height: 42px;
          background-color: transparent;
          border-radius:0;
          user-select:none;border:none"
          autofocus
          @input="visiable = !isOnlyOneEngine"
          @focus="visiable = (searchContent !== ''&& !isOnlyOneEngine)"
          @keydown = "onKeyDown"
          @blur="visiable = false"
        >
          <template #prefix>
            <template v-if="engines.length > 0 && $store.refresh">
              <cacheable-ico-img :url="engines[0]?.url" circle/>
            </template>
          </template>
        </el-input>
      </template>
      <template v-for="(engine,index) in engines">
        <template v-if="index > 0 && $store.refresh">
          <list-item small
                     :title="engine.value"
                     @click="handleDirectToWeb(engine.url)">
            <template #icon>
              <cacheable-ico-img :url="engine.url" />
            </template>
            <span style="margin-right: -24px;">{{index <10? 'Alt+'+index : ''}}</span>
          </list-item>
        </template>
      </template>
    </el-popover>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {engines} from "../js/db.js";
import {$store} from "../js/store.js";

const searchContent = ref('')
const visiable = ref(false)
const isOnlyOneEngine = computed(()=>engines.value.length <=1)
function onKeyDown(e){
  switch (e.code){
    case 'Enter':
      handleDirectToWeb(engines.value[0].url)
          break;
    default:
      if( e.altKey && e.code.startsWith("Digit")){
        let num = +e.code.charAt(5)
        if(num < engines.value.length){
          handleDirectToWeb(engines.value[num].url)
        }
      }
  }
}
function handleDirectToWeb (url){
  location.href = url.replace("%s",searchContent.value)
}


</script>

<style>


#search{
  margin: 0 auto;
  margin-bottom: 50px;
  width: 38vw;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: var(--search-box-shadow);
  backdrop-filter: blur(2px);
}

#search .el-input{
  --el-input-bg-color: transparent;
  --el-input-border-color: transparent;
  --el-input-hover-border-color: transparent;
  --el-input-focus-border-color: transparent;
  --el-input-border-radius: 0;
  --el-input-text-color: var(--search-text-color) !important
}
#dark #search .el-input{
  --el-input-border-color: rgba(0,0,0,.1);
}
.dark #search .el-input{
  --el-input-border-color: rgba(0,0,0,.1);
}

</style>