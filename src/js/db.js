import {ref} from "vue";
import * as idb from "idb";
import {DEFAULT_ICO_APIS, DEFAULT_SEARCH_ENGINES} from "./preset.js";

const data = ref([])
const unknownData = ref([])
const engines = ref([])
const icos = ref({})


async function initImg(){
    try{
        let version;
        if(localStorage.getItem("kitkack-newpage")){
            version = 1;
        }else{
            version = 0;
            localStorage.setItem("kitkack-newpage",1)
        }
        let db = await idb.openDB("kitkack-newpage",version,{
            upgrade(database, oldVersion, newVersion, transaction, event) {
                try{
                    if(!db.objectStoreNames.contains("img")){
                        db.createObjectStore("img",{keyPath:"id"})
                    }
                }catch (_){

                }
            }
        })

        const value = await db.get("img","img")
        if(value !== undefined){
            document.body.style.backgroundImage = "url("+value.data+")"
        }else{
            document.body.style.backgroundImage = "url('../bg.jpg')"
        }
    }catch (_){
        document.body.style.backgroundImage = "url('../bg.jpg')"
    }
}

function init(){
    initImg().finally(()=>{
        if(localStorage.getItem("index-theme-on")){
            document.body.id = "dark";
        }
        if(localStorage.getItem("global-theme-on")){
            document.body.parentNode.classList = ['dark']
        }
        if(localStorage.getItem("search-theme-on")){
            document.documentElement.style.setProperty("--search-text-color","#fff")
            document.documentElement.style.setProperty("--search-box-shadow","rgba(255,255,255, 0.15) 0 1px 15px 0")
        }
        let num = localStorage.getItem("mask")
        if(num !== undefined){
            document.documentElement.style.setProperty("--mask",(+num)/100)
        }
        num = localStorage.getItem("distance")
        if(num !== undefined){
            document.documentElement.style.setProperty("--distance",num+'px')
        }

        chrome.storage.sync.get(["data","unknown-data","engine","icos","index-theme-on","global-theme-on","search-theme-on","mask","distance"],
            result =>{
                if(result.data){
                    data.value = Object.values(result.data)
                    // 子处理
                    for (let i = 0; i < data.value.length; i++) {
                        data.value[i].children = Object.values(data.value[i].children)
                    }
                }
                if(result["unknown-data"]){
                    unknownData.value = Object.values(result["unknown-data"])
                }
                if(result.engine){
                    engines.value = Object.values(result.engine)
                }else{
                    engines.value = DEFAULT_SEARCH_ENGINES;
                }
                if(result.icos){
                    icos.value = {
                        index: result.icos.index,
                        apis: Object.values(result.icos.apis)
                    }
                }else{
                    icos.value = {
                        index: 0,
                        apis:DEFAULT_ICO_APIS
                    }
                }
            }
        )
    })
}


function restore(){
    chrome.storage.sync.set({'data':data.value})
}
function restoreUnknownData(){
    chrome.storage.sync.set({'unknown-data': unknownData.value})
}
function restoreEngines(){
    chrome.storage.sync.set({'engine':engines.value})
}

function restoreIcos(){
    chrome.storage.sync.set({'icos':icos.value})
}



export {
    data,
    unknownData,
    engines,
    icos,
    restore,
    restoreUnknownData,
    restoreEngines,
    restoreIcos,
    init
}