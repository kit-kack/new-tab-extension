<template>
  <template v-for="(parent,pin) in data">
    <div  v-if="(parent.children!== null && parent.children.length > 0) || $store.edit"  class="nav clearfix">
      <el-text truncated class="left-nav" >
        {{parent.name}}
      </el-text>
      <div orientation="horizontal" class="right-nav" @dragstart="()=>false" >
        <template v-if="parent.children!== null && parent.children.length > 0">
          <template v-if="$store.edit">
            <template v-for="(newp,newi) in splitChildren(parent.children)">
              <Container
                  orientation="horizontal"
                  group-name="web"
                  @drop-ready=""
                  @drop="result => onWebItemDrop(result,pin,newi)"
                  :get-child-payload="index => getChildPayload(index+5*newi,pin)"
                  :should-animate-drop="()=>false"
              >
                <Draggable class="drop-list" v-for="(item,index) in newp" style="margin-left: -300px !important;margin-bottom: -50px !important;" :key="pin+'-'+item.name" >
                  <web-item :index="index+5*newi" :pin="pin" />
                </Draggable>
              </Container>
            </template>
          </template>
          <template v-else >
            <el-space wrap :size="[0,0]">
              <web-item  :index="index" :pin="pin" v-for="(item,index) in parent.children"/>
            </el-space>
          </template>
        </template>
        <template v-else-if="$store.edit">
          <Container
              group-name="web"
              @drop="result => onWebItemDrop(result,pin)"
              orientation="horizontal">
            <el-button class="delete-type" text  size="small" style="padding: 0 5px" @click="handleDeleteType(parent.name)">
              <el-icon :size="16" class="close" >
                <svg t="1687659426424" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7317" width="200" height="200"><path d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM512 832c-179.2 0-320-140.8-320-320s140.8-320 320-320 320 140.8 320 320S691.2 832 512 832z" p-id="7318"></path><path d="M672 352c-12.8-12.8-32-12.8-44.8 0L512 467.2 396.8 352C384 339.2 364.8 339.2 352 352S339.2 384 352 396.8L467.2 512 352 627.2c-12.8 12.8-12.8 32 0 44.8s32 12.8 44.8 0L512 556.8l115.2 115.2c12.8 12.8 32 12.8 44.8 0s12.8-32 0-44.8L556.8 512l115.2-115.2C684.8 384 684.8 364.8 672 352z" p-id="7319"></path></svg>
              </el-icon>
              移除该类别
            </el-button>
          </Container>
        </template>
      </div>
    </div>
  </template>

  <div class="nav clearfix" v-if="unknownData && unknownData.length > 0">
    <div class="left-nav">
      <el-text truncated >
        😕unknown
      </el-text>
    </div>
    <div class="right-nav" >
      <template v-if="$store.edit">
        <template v-for="(newp,newi) in splitChildren(unknownData)">
          <Container
              orientation="horizontal"
              group-name="web"
              @drop-ready=""
              @drop="result => onWebItemDrop(result,-1,newi)"
              :get-child-payload="index => getChildPayload(index+5*newi,-1)"
              :should-animate-drop="()=>false"
          >
            <Draggable class="drop-list" v-for="(item,index) in newp" style="margin-left: -300px !important;margin-bottom: -50px !important;" :key="index">
              <web-item :index="index+5*newi"  />
            </Draggable>
          </Container>
        </template>
      </template>
      <template v-else>
        <el-space wrap :size="[0,0]">
          <web-item v-for="(item,index) in unknownData" :index="index" />
        </el-space>
      </template>
    </div>
  </div>
</template>

<script setup>

import {data, restore, restoreUnknownData, unknownData} from "../js/db.js";
import {$store} from "../js/store.js";
import { Container, Draggable } from "vue3-smooth-dnd";
function handleDeleteType(type){
  for (let i = 0; i < data.value.length; i++) {
    if(data.value[i].name === type){
      data.value.splice(i,1);
      break;
    }
  }
  restore();
}

/**
 *
 * @param {any[]} children
 * @return {*}
 */
function splitChildren(children){
  let newArray = [];
  let index = -1;
  for (let i = 0; i < children.length; i++) {
    if( i % 5 === 0){
      newArray.push([children[i]]);
      index++;
    }else{
      newArray[index].push(children[i])
    }
  }
  return newArray;
}

function dealWithDrag(payload){
  let core;
  // del from
  if(payload.from > -1){
    core = data.value[payload.from].children[payload.fromIndex]
    data.value[payload.from].children.splice(payload.fromIndex,1)
    restore();
  }else{
    core = unknownData.value[payload.fromIndex]
    unknownData.value.splice(payload.fromIndex,1)
    restoreUnknownData();
  }
  // add to
  if(payload.to > -1){
    data.value[payload.to].children.splice(payload.toIndex,0,core)
    restore();
  }else{
    unknownData.value.splice(payload.toIndex,0,core)
    restoreUnknownData();
  }
}

function onWebItemDrop(dropResult,pin,newi=0){
  if(dropResult.addedIndex !== null && dropResult.payload){
    dropResult.payload.toIndex = newi*5 + dropResult.addedIndex;
    dropResult.payload.to = pin;
    dealWithDrag(dropResult.payload)
  }
}
function getChildPayload(index,pin){
  return {
    fromIndex: index,
    from: pin
  }
}

</script>

<style scoped>
.left-nav{
  width: 120px;
  float: left;
  padding-top: 5px;
  margin-right: 10px;
  font-size: 12px;
  text-align: left;
}
.dark .left-nav{
  color: #606266;
}
#dark .left-nav{
  color: #eee;
}
.right-nav{
  max-width: 855px;
  float: left;
  text-align: left !important;
}
.clearfix:after{
  content: "";
  display: block;
  height: 0;
  clear:both;
  visibility: hidden;
}

.nav{
  text-align: left;
}
.delete-type{
  height: 36px;
  float: right;
}





</style>