let  url;
window.onload = ()=>{
    url = new URL(window.location.protocol+"//"+window.localStorage.host)
}

const idUrl = window.location.href.substr(-1)
export {idUrl}
