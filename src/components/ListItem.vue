<template>
  <div class="list-item" :class="{ hoverable: !raw, small: small }" tabindex="1">
    <div class="list-item__left">
      <slot name="icon"></slot>
      <span style="margin-left: 10px">{{title}}</span>
    </div>
    <div class="list-item__right">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  raw: Boolean,
  small: Boolean
})
</script>

<style>
.list-item{
  display: block;
  height: 52px;
  width: 100%;
  user-select: none;
  padding: 0 5px;
  font-style: italic;
  font-size: 14px;
  color: gray;
}
.list-item.small{
  height: 24px;
  font-size: 12px;
}

.hoverable:hover{
  background-color: #e5e5e5;
}
.dark .hoverable:hover{
  background-color: #444;
}
.hoverable:active{
  background-color: #ccc;
}
.dark .hoverable:active{
  background-color: #333;
}


.list-item__left{
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  padding-left:5px;
}
.list-item__right{
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
  padding-right: 25px;
}

</style>