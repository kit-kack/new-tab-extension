<template>
  <el-dialog v-model="$store.searchEngineTableDialog" title="搜索引擎管理" :show-close="false" style="padding: 0"
             @close-auto-focus="doRefresh()"
  >
    <template #header>
      <div class="my-header">
        <p>搜索引擎管理</p>
        <el-button text @click="$store.index = -1;$store.itemUrlDialog = true">
          <template #icon>
            <el-icon :size="32">
              <svg t="1687788806412" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41080" width="200" height="200"><path d="M256 544a32.213333 32.213333 0 0 1-32-32 32.213333 32.213333 0 0 1 32-32h512a32.213333 32.213333 0 0 1 32 32 32.213333 32.213333 0 0 1-32 32z" fill="#8a8a8a" p-id="41081"></path><path d="M480 768V256a32.213333 32.213333 0 0 1 32-32 32.213333 32.213333 0 0 1 32 32v512a32.213333 32.213333 0 0 1-32 32 32.213333 32.213333 0 0 1-32-32z" fill="#8a8a8a" p-id="41082"></path></svg>
            </el-icon>
          </template>
        </el-button>
      </div>
    </template>
    <el-table :data="engines" style="width: 100%;" max-height="250">
      <el-table-column property="value" label="搜索引擎" width="150">
        <template #default="scope">
          {{scope.row.value}}{{scope.$index === 0? ' （😍默认）':''}}
        </template>
      </el-table-column>
      <el-table-column property="url" label="Url"  />
      <el-table-column width="220">
        <template #default="scope">
          <el-button size="small"  text @click="handleEdit(scope.$index)">编辑</el-button>
          <el-button :disabled="engines.length <= 1" size="small" type="danger" text @click="handleDel(scope.$index)">删除</el-button>
          <el-button :disabled="scope.$index === 0" size="small"  text @click="handleUp(scope.$index)" >
            <template #icon>
              <svg t="1687970947327" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7373" width="200" height="200"><path d="M512.146286 454.753524l-266.849524 266.727619L193.584762 669.744762l318.585905-318.415238 318.268952 318.415238-51.736381 51.687619z" p-id="7374"></path></svg>
            </template>
          </el-button>
          <el-button :disabled="scope.$index === engines.length-1" size="small"  text @click="handleDown(scope.$index)">
            <template #icon>
              <svg t="1687970967418" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7619" width="200" height="200"><path d="M512.146286 619.52L245.296762 352.792381 193.584762 404.48l318.585905 318.415238 318.268952-318.415238-51.736381-51.687619z" p-id="7620"></path></svg>
            </template>
          </el-button>

        </template>
      </el-table-column>
    </el-table>
    <template v-if="$store.itemUrlDialog">
      <input-url-dialog title="搜索引擎" keyword="%s" info="查询词" type="engine" />
    </template>

  </el-dialog>
</template>

<script setup>

import {$store, doRefresh} from "../../js/store.js";
import {engines, restoreEngines} from "../../js/db.js";
function handleEdit(index){
  $store.index = index;
  $store.itemUrlDialog = true;
}
function handleDel(index){
  engines.value.splice(index,1)
  restoreEngines()
}
function handleUp(index){
  engines.value.splice(index-1,2,engines.value[index],engines.value[index -1])
  restoreEngines()
}
function handleDown(index){
  engines.value.splice(index,2,engines.value[index+1],engines.value[index])
  restoreEngines();
}
</script>

<style scoped>

</style>