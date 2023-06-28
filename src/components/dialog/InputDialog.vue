<template>
  <el-dialog
      v-model="value"
      :title="title"
      width="20%"
      close-on-press-escape
      :show-close="false"
      align-center
      destroy-on-close
      style="
        --el-dialog-padding-primary:3px;
        border-radius: 10px;
        padding-top:10px;
        text-align: center;
"
  >
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button  type="info" text @click="value = false">取消</el-button>
        <el-button type="danger" text @click="$emit('ok')">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>

import {computed} from "vue";

const props = defineProps(['title','modelValue'])
const emit = defineEmits(['ok','update:modelValue'])
const value = computed({
  get(){
    return props.modelValue;
  },
  set(value){
    emit('update:modelValue',value)
  }
})

</script>

<style scoped>
.el-drawer__body{
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
}
</style>