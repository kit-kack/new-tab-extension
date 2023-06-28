<template>
  <div class="container">
    <input
        class="input"
        :class="{error: errorValue}"
        @focus="push_from_bottom = true"
        @blur="onBlur"
        @input="handleInput"
        :value="modelValue"
    >
    <div
        class="bar"
    ></div>
    <label
        class="label"
        :class="{ 'push-from-bottom': push_from_bottom }"
    >{{ label }}</label>
    <div class="error-info" v-if="errorValue">{{errorText}}</div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const props = defineProps(['label','modelValue','errorValue','errorText'])
const emit = defineEmits(['update:modelValue','update:errorValue'])
const input_value = ref()
const push_from_bottom = ref(false)
function handleInput(event) {
  input_value.value = event.target.value;
  emit("update:modelValue",input_value.value);
  emit("update:errorValue",false)
}
function onBlur() {
  if(!props.modelValue) push_from_bottom.value= false;
}
onMounted(()=>{
  if(props.modelValue){
    push_from_bottom.value= true;
  }
})
</script>

<style scoped>
.container {
  position: relative;
  width: 258px;
  margin-top: 25px;
  margin-left: 21px;
  user-select: none;
}
.input {
  padding: 10px 15px 5px 0;
  display: block;
  border: none;
  border-bottom: 2px solid #D4D4D4;
  background-color: transparent;
  width: 100%;
  font-size: 14px;
}
.error.input{
  border-bottom-color: indianred;
}
.input:focus {
  border-bottom: none;
  outline: none;
}
.bar:before, .bar:after {
  background-color: grey;
  content: "";
  height: 2px;
  position: absolute;
  transition: all ease 0.30s;
  width: 0;
}
.bar:before { left: 50% }
.bar:after { right: 50% }
.input:focus ~ .bar:before, .input:focus ~ .bar:after { width: 50% }
.label {
  bottom: 10px;
  font-size: 13px;
  left: 0;
  pointer-events: none;
  position: absolute;
  transition: all ease 0.30s;
  color: rgba(0,0,0,.4);
  user-select: none;
}
.dark .label{
  color: #8d9095;
}
.push-from-bottom {
  bottom: 25px;
  font-size: 12px;
  color: grey;
}
.dark .push-from-bottom{
  color: grey;
}
.error-info{
  position: absolute;
  color: indianred;
  font-size: 13px;
}
</style>