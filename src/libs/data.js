let appid = '61633';
let screct = '97b728aa7da744aa97baa0b9969590a4';
function formatterDateTime() {
    var date=new Date()
    var month=date.getMonth() + 1
    var datetime = date.getFullYear()
        + ""// "年"
        + (month >= 10 ? month : "0"+ month)
        + ""// "月"
        + (date.getDate() < 10 ? "0" + date.getDate() : date
            .getDate())
        + ""
        + (date.getHours() < 10 ? "0" + date.getHours() : date
            .getHours())
        + ""
        + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
            .getMinutes())
        + ""
        + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
            .getSeconds());
    return datetime;
}
function getUrl(type='list'){
    let url = "";
    if(type == 'list'){
        url = "http://route.showapi.com/955-1"
    }else{
        url = "http://route.showapi.com/955-2"
    }
    url += "?showapi_timestamp="+ formatterDateTime() + "&showapi_appid="+appid + "&showapi_sign="+screct;
    return url;
}

function getList(type,pages){
    let  url = getUrl();
    url += "&type="+type +"&page="+pages;

    return  fetch(url).then(res=>res.json())
}

function getContent(id){
   let url = getUrl('content');
   url +='&id=' + id +"&page=1";
   return  fetch(url).then(res=>res.json())
}




function cate (){
    return [
        {type:'cp',value:'长篇'},
        {type:'dp',value:'短篇'},
        {type:'xy',value:'校园'},
        {type:'yy',value:'医院'},
        {type:'jl',value:'家里'},
        {type:'mj',value:'民间'},
        {type:'ly',value:'灵异'},
        {type:'yc',value:'原创'},
    ]
}

exports.cate = cate();
exports.getList = getList;
exports.getContent = getContent