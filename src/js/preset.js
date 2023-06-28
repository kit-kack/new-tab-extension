export const DEFAULT_ICO_APIS = [
    {
        value: "xinac.net",
        url: "https://api.xinac.net/icon/?url=%u",
        default: true,
    },{
        value: "yandex.net",
        url: "https://favicon.yandex.net/favicon/%u",
        default: true,
        tip: " （啥都能搜🤫）"
    },{
        value: "uomg.com",
        url: "https://api.uomg.com/api/get.favicon?url=%u",
        default: true,
    },{
        value: "qqsuu.cn",
        url: "https://api.qqsuu.cn/api/dm-get?url=%u",
        default: true,
    },{
        value: "cccyun.cc",
        url: "http://favicon.cccyun.cc/%u",
        default: true,
    },{
        value: "google.com",
        url: "https://www.google.com/s2/favicons?domain=%u",
        nonCacheable: true,
        default: true,
        tip: " （有墙啊😫）"
    },{
        value: "iowen.cn",
        url: "https://api.iowen.cn/favicon/%u.png",
        default: true,
        nonCacheable: true,
    },{
        value: "cxr.cool",
        url: "https://api.cxr.cool/get.php?url=%u",
        default: true,
        nonCacheable: true,
    },{
        value: "15777.cn",
        url: "https://api.15777.cn/get.php?url=%u",
        default: true,
        nonCacheable: true,
    },{
        value: "ly522.com",
        url: "https://tools.ly522.com/ico/favicon.php?url=%u",
        default: true,
        nonCacheable: true,
    }
]

export const DEFAULT_SEARCH_ENGINES = [
    {
        value: "Bing",
        url: "https://www.bing.com/search?q=%s"
    },
    {
        value: "Baidu",
        url: "https://www.baidu.com/s?wd=%s"
    },
    {
        value: "Google",
        url: "https://www.google.com/search?q=%s"
    },
    {
        value: "Github",
        url: "https://github.com/search?q=%s&ref=opensearch"
    }
]
export function getHostname(url){
    try{
        return new URL(url).hostname
    }catch (_){
        return null;
    }
}