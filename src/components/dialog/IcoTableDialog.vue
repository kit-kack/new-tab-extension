<template>
  <el-dialog v-model="$store.icoTableDialog"
             title="图标获取API管理" :show-close="false" class="ico-dialog">
    <template #header>
      <div class="my-header">
        <p>图标获取API管理</p>
        <el-button text @click="$store.index = -1;$store.itemUrlDialog = true">
          <template #icon>
            <el-icon :size="32">
              <svg t="1687788806412" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41080" width="200" height="200"><path d="M256 544a32.213333 32.213333 0 0 1-32-32 32.213333 32.213333 0 0 1 32-32h512a32.213333 32.213333 0 0 1 32 32 32.213333 32.213333 0 0 1-32 32z" fill="#8a8a8a" p-id="41081"></path><path d="M480 768V256a32.213333 32.213333 0 0 1 32-32 32.213333 32.213333 0 0 1 32 32v512a32.213333 32.213333 0 0 1-32 32 32.213333 32.213333 0 0 1-32-32z" fill="#8a8a8a" p-id="41082"></path></svg>
            </el-icon>
          </template>
        </el-button>
      </div>
    </template>
    <template #footer>
      <span style="font-size: 12px">Cacheable: 由于一些网站跨域策略限制，导致无法将图标缓存下来，只能在线显示，无法离线显示</span>
      <h6 style="font-weight: normal">😘：在这里,感谢上述网站提供的API；其中一些网站为个人运营（未来可能无法访问），若不可用时请切换或新添其他API网站</h6>
    </template>
    <el-table :data="icos.apis" style="width: 100%;" max-height="250">
      <el-table-column property="value" label="API网站">
        <template #default="scope">
          {{scope.row.value}}{{ scope.$index === icos.index ? ' （😍默认）':icos.apis[scope.$index].tip??''}}
        </template>
      </el-table-column>
      <el-table-column property="url" label="Url" width="280"  />
      <el-table-column label="Cacheable" width="100">
        <template #default="scope" >
          {{icos.apis[scope.$index].nonCacheable?'❌':'✅'}}
        </template>
      </el-table-column>
      <el-table-column width="140">
        <template #default="scope">
          <el-button :disabled="icos.apis[scope.$index].default??false" size="small" text @click="  $store.index = scope.$index;$store.itemUrlDialog = true;">
            {{icos.apis[scope.$index].default? '内置': '编辑'}}
          </el-button>
          <el-button type="success" :disabled="scope.$index === icos.index" size="small" text @click="handleUseApi(scope.$index)">
            {{scope.$index === icos.index? '已启用':'启用'}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <template v-if="$store.itemUrlDialog">
      <input-url-dialog title="图标获取API" keyword="%u" info="网址" type="ico"/>
    </template>

  </el-dialog>
</template>

<script setup>

import {$store} from "../../js/store.js";
import {icos, restoreIcos} from "../../js/db.js";

function handleUseApi(index){
  icos.value.index = index;
  restoreIcos()
}
</script>

<style>
.ico-dialog > .el-dialog__body{
  padding-bottom: 0 !important;
}
</style>