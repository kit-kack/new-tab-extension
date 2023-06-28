import {nextTick, reactive} from "vue";

const $store = reactive({
    edit: false,
    itemDialog: false,
    itemUrlDialog: false,
    searchEngineTableDialog: false,
    icoTableDialog: false,
    index: null,
    pin: null,
    refresh: true,
})
function doRefresh(){
    $store.refresh = false;
    nextTick(()=>{
        $store.refresh = true;
    })
}

export {
    $store,
    doRefresh
}