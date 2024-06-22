const ITEM_MAX=15;$(function(){for(let a=1;a<=ITEM_MAX;a++)CreateInputForm(a);$("#mainform").submit(function(){return $("#result").val(GetItemString()+GetMoneyString()),!1}),$("#searchform").submit(function(){return ExecuteSearch(),!1}),$("#insertlist").click(function(){let a=$("#search_result").val();a&&AddToList(a)}),$("#converter").submit(function(){let a=parseInt($("#input_cnv").val(),parseInt($("[name=intype]:checked").val(),10));return isNaN(a)&&$("#output_cnv").val("error"),$("#output_cnv").val(ConvertByteToString(a,4)),!1}),$("input[name=intype]").change(function(){"10"===$("input[name=intype]:checked").val()?($("#input_cnv").attr("type","number"),$("#input_cnv").attr("min","0"),$("#input_cnv").attr("pattern")&&$("#input_cnv").removeAttr("pattern")):"16"===$("input[name=intype]:checked").val()&&($("#input_cnv").attr("type","text"),$("#input_cnv").attr("pattern","^([a-f,A-F,0-9]|[NUL [0-9]+])+$"),$("#input_cnv").attr("min")&&$("#input_cnv").removeAttr("min"))})});function ConvertByteToStringAsync(a,b){return new Promise(c=>{setTimeout(()=>{let d=charset[0xff&a>>8*b];c(d)},100)})}async function ConvertByteToString(c=0,a=0){let b=[];for(let e=0;e<a;e++)b.push(ConvertByteToStringAsync(c,e));const d=await Promise.all(b);return d.join("")}function CreateInputForm(a){$("#itemlist").append(`<label for=\"item${a}\">道具${("00"+a).slice(-2)}</label><select id=\"item${a}\"></select><br>`),$(`#item${a}`).append("<option value=\"0\">\u306A\u3057</option>");for(let b,c=0;c<itemset.length;c++){b="list"+a+"group"+c,$(`#item${a}`).append(`<optgroup label=\"${itemset[c].groupname}\" id=\"${b}\"></optgroup>`);for(let a=0;a<itemset[c].items.length;a++)$(`#${b}`).append(`<option value=\"${itemset[c].items[a].id}\">${itemset[c].items[a].name}</option>`)}}async function GetItemString(){let a="";for(let b,c=1;c<=ITEM_MAX;c++)b=parseInt($("#item"+c).val(),10),isNaN(b)?(a+=`[道具${c}の変換に失敗]`,console.error(`道具${c}の変換に失敗`)):a+=await ConvertByteToString(b,2);return a}async function GetMoneyString(){let a=parseInt(`${$("#money").val()}`,10);return isNaN(a)?"[\u6240\u6301\u91D1\u306E\u5909\u63DB\u306B\u5931\u6557]":await ConvertByteToString(a,4)}function SearchNextUnselected(){try{for(let a=1;a<=ITEM_MAX;a++)if(0==$(`#item${a}`).val())return a}catch(a){return console.error(`${a}`),-1}}function ExecuteSearch(){$("#search_result").html("");let a=$("#search").val();for(let b=0;b<itemset.length;b++)for(let c=0;c<itemset[b].items.length;c++)-1!=itemset[b].items[c].name.indexOf(a)&&($("#search_result").append(`<option value=\"${itemset[b].items[c].id}\" id=\"sr${itemset[b].items[c].id}\">${itemset[b].items[c].name}</option>`),$(`#sr${itemset[b].items[c].id}`).dblclick(function(a){return function(){AddToList(a)}}(itemset[b].items[c].id)));return!1}function AddToList(a){let b=SearchNextUnselected();-1!=b&&$(`#item${b}`).val(a)}
