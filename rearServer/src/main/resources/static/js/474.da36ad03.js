"use strict";(self["webpackChunkfakeapitoolweb"]=self["webpackChunkfakeapitoolweb"]||[]).push([[474],{3474:function(e,l,a){a.r(l),a.d(l,{default:function(){return he}});var o=a(2876),n=(a(492),a(5185)),t=(a(3349),a(6907)),u=(a(4746),a(5267)),i=(a(1645),a(3164)),r=(a(6335),a(157)),s=(a(1897),a(4188)),d=(a(9846),a(6252)),m=a(2262),c=a(3577),p=a(1094),w=a(5781),v=a(2201),h=a(6154),f=a(451),_=a(1348),g=a(844);const k={class:"content"},b=(0,d._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"},null,-1),y=(0,d._)("div",{class:"flex-grow"},null,-1),W=(0,d._)("a",{href:"https://github.com/Yanyutin753/fakeApiTool-One-API"},"fakeApiTool地址",-1),T=(0,d._)("a",{href:"https://chat.openai.com/api/auth/session"},"OpenAI官网",-1),x=(0,d._)("a",{href:"https://ai.fakeopen.com/auth"},"Pandora地址",-1),A={style:{display:"block",transform:"translate(5vw, 2.5vh)"}},V={class:"flex items-center"},O=(0,d._)("span",{class:"text-large font-600 mr-3"},"One-API",-1),z=(0,d._)("span",{class:"text-sm mr-2",style:{color:"var(--el-text-color-regular)"}}," fakeApiTool ",-1),U={class:"under"},H={class:"search"},S={style:{display:"flex",margin:"0px 35px -17px 35px"}},C={style:{display:"flex",width:"71.5vw",transform:"translateX(0.5vw)"}},q={style:{display:"flex","align-items":"center"}},N={style:{"margin-left":"7px"}},$=(0,d._)("div",{style:{display:"flex","margin-top":"3vh"}},null,-1),P=(0,d.uE)('<div class="bottom-component"><div style="text-align:center;transform:translateY(2.55vh);"><h2> 欢迎大家来扩展 <a href="https://github.com/Yanyutin753/fakeApiTool-One-API">fakeApiToolv0.1.0-oneApi </a> 获取token <a href="https://chat.openai.com/api/auth/session">官网地址 </a><a href="https://ai.fakeopen.com/auth">Pandora地址</a></h2></div><br></div>',1),j={style:{display:"block"}},B=(0,d._)("br",null,null,-1),D=(0,d._)("br",null,null,-1),I=(0,d._)("br",null,null,-1),Y=(0,d._)("br",null,null,-1),Z={style:{margin:"5.2px"}},E=(0,d._)("br",null,null,-1),J={style:{display:"block"}},M=(0,d._)("br",null,null,-1),K=(0,d._)("br",null,null,-1),X=(0,d._)("br",null,null,-1),F=(0,d._)("br",null,null,-1),G=(0,d._)("br",null,null,-1),L={style:{margin:"5.2px"}},Q=(0,d._)("br",null,null,-1),R=(0,d._)("br",null,null,-1),ee=(0,d._)("br",null,null,-1),le=(0,d._)("br",null,null,-1),ae=(0,d._)("br",null,null,-1),oe=(0,d._)("br",null,null,-1),ne=(0,d._)("br",null,null,-1),te={style:{margin:"11.2px",transform:"translateY(14px)"}},ue=(0,d._)("br",null,null,-1),ie={style:{display:"block"}},re=(0,d._)("br",null,null,-1),se=(0,d._)("br",null,null,-1),de=(0,d._)("br",null,null,-1),me=(0,d._)("br",null,null,-1),ce=(0,d._)("br",null,null,-1),pe=(0,d._)("br",null,null,-1);var we=(0,d.aZ)({__name:"homeIndex",setup(e){const l=(0,v.tv)();window.innerWidth<=700&&l.replace("/iphone");const a=(0,m.iH)(!1),we=(0,m.iH)(!1),ve=(0,m.iH)(!1),he=(0,m.iH)(!1),fe=f,_e=(0,m.iH)(""),ge=(0,m.iH)(""),ke=(0,m.iH)(""),be=(0,m.iH)(""),ye=(0,m.iH)([]),We=(0,m.iH)(""),Te=(0,m.iH)("");let xe="";var Ae=.11*window.innerHeight,Ve=.842*window.innerWidth;const Oe=(0,m.iH)(.1*window.innerHeight);console.log(window.innerHeight.toString());const ze=(0,m.iH)({x:Ve,y:Ae}),Ue=(0,m.iH)(""),He=localStorage.getItem("jwtToken");He||l.replace("/login");const Se={Authorization:`Bearer ${He}`},Ce=()=>{h.Z.post("/api/loginToken?token="+He).then((e=>{if(0==e.data.code)return console.error(e.data.data),void l.replace("/login");console.log(e.data.data)})).catch((e=>{console.error("请求loginToken接口失败",e),l.replace("/login")}))},qe=e=>{Ne(e)},Ne=async e=>{try{const l=await h.Z.get(`/api/seleteToken?name=${e}`,{headers:Se}),a=l.data.data;if(console.log(a),Array.isArray(a)){const e=a.map((e=>({name:e.name,userName:e.userName,password:e.password,value:e.value,updateTime:e.updateTime})));ye.value=e}}catch(l){console.error("获取数据失败",l),(0,_.z8)("获取数据失败")}};(0,d.bv)((()=>{Ce(),qe(Ue.value)}));const $e=(0,m.iH)("-1"),Pe=(e,l)=>{console.log(e,l)},je=(e,l)=>{console.log(e,l),xe=l.name,ke.value=l.userName,be.value=l.password,ge.value=l.value,a.value=!0},Be=()=>{we.value=!0},De=()=>{const e={name:_e.value,value:ge.value,userName:ke.value,password:be.value,updateTime:(new Date).toString()};fetch("/api/addToken",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${He}`},body:JSON.stringify(e)}).then((e=>e.json())).then((l=>{1==l.code?(console.log(l.data),ye.value.unshift(e),(0,_.z8)(l.data)):(0,_.z8)(l.msg)})).catch((e=>{console.error("请求addToken接口失败",e),(0,_.z8)("添加失败！")})),_e.value="",ke.value="",be.value="",ge.value="",we.value=!1},Ie=e=>{_e.value=e.name,ke.value=e.userName,be.value=e.password,ge.value=e.value,he.value=!0},Ye=()=>{const e={name:xe,value:ge.value,userName:ke.value,password:be.value};fetch("/api/requiredToken",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${He}`},body:JSON.stringify(e)}).then((e=>e.json())).then((l=>{if(1==l.code){console.log(l.data),(0,_.z8)(l.data);for(let l=0;l<ye.value.length;l++)if(ye.value[l].name===e.name){ye.value[l].value=e.value,ye.value[l].userName=e.userName,ye.value[l].password=e.password;break}}else(0,_.z8)(l.msg)})).catch((e=>{console.error("请求requireToken接口失败",e),(0,_.z8)("修改失败！")})),xe="",ge.value="",ke.value="",be.value="",a.value=!1},Ze=()=>{ve.value=!0},Ee=()=>{h.Z.post(`/api/requiredUser?userName=${We.value}&password=${Te.value}`,null,{headers:Se}).then((e=>{1==e.data.code?(console.log("修改成功",e.data.data),(0,_.z8)("修改成功,请重新登录！"),Fe()):(console.error("修改失败"),(0,_.z8)("修改失败"))})).catch((e=>{console.error("修改时出现错误:",e),(0,_.z8)("修改时出现错误")})),ve.value=!1},Je=async e=>{const l=await h.Z.get(`/api/updateToken?name=${e.name}`,{headers:Se}),a=l.data.data;console.log(a),null!=a&&""!=a?(e.value=a.value,e.updateTime=a.updateTime,g.T.alert("更新成功!","温馨提醒",{confirmButtonText:"OK",callback:()=>{(0,_.z8)({type:"info",message:"感谢Pandora大佬！"})}})):(0,_.z8)(l.data.msg)},Me=(e,l)=>{g.T.confirm("您确定要删除这个Token吗，删除之后就找不到咯，请您要仔细认真考虑哦！","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{h.Z.put(`/api/deleteToken?name=${l.name}`,null,{headers:Se}).then((l=>{1==l.data.code&&"删除成功！"===l.data.data?(console.log(l.data.data),ye.value.splice(e,1),(0,_.z8)({type:"success",message:l.data.data})):(console.error("删除失败"),(0,_.z8)("删除失败，请重新登录！"))})).catch((e=>{console.error("删除失败",e)}))})).catch((()=>{(0,_.z8)({type:"info",message:"删除取消！"})}))},Ke=e=>{if(!e)return"";var l=new Date,a=new Date(e);let o=Math.ceil(l.getTime()-a.getTime())/864e5;return o>=10?"已经过去了至少10天":Math.ceil(10-o)+"天"},Xe=e=>e.substring(0,40)+"...",Fe=()=>{localStorage.removeItem("jwtToken"),l.replace("/login")};return(e,l)=>{const v=(0,d.up)("el-menu-item"),h=(0,d.up)("el-sub-menu"),f=(0,d.up)("el-menu"),_=(0,d.up)("el-avatar"),g=(0,d.up)("el-tag"),xe=(0,d.up)("el-page-header"),Ae=s.e$,Ve=r.ol,He=(0,d.up)("el-icon"),Se=(0,d.up)("el-table-column"),Ce=(0,d.up)("el-popover"),Ne=(0,d.up)("el-button"),Ge=(0,d.up)("el-table"),Le=i.gN,Qe=u.TS,Re=t.zx,el=n.l0,ll=o.Vq;return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("div",k,[b,(0,d.Wm)(f,{"default-active":$e.value,class:"el-menu-demo",mode:"horizontal",ellipsis:!1,onSelect:Pe,"active-text-color":"#0ea27e","text-color":"#0ea27e"},{default:(0,d.w5)((()=>[(0,d.Wm)(v,null,{default:(0,d.w5)((()=>[(0,d._)("img",{style:{width:"45px"},src:p,alt:"Element logo",onClick:l[0]||(l[0]=(...l)=>e.acc&&e.acc(...l))})])),_:1}),y,(0,d.Wm)(v,{index:"1"},{default:(0,d.w5)((()=>[W])),_:1}),(0,d.Wm)(v,{index:"2"},{default:(0,d.w5)((()=>[T])),_:1}),(0,d.Wm)(v,{index:"3"},{default:(0,d.w5)((()=>[x])),_:1}),(0,d.Wm)(h,{index:"4"},{title:(0,d.w5)((()=>[(0,d.Uk)("用户设置")])),default:(0,d.w5)((()=>[(0,d.Wm)(v,{index:"4-1",onClick:Ze},{default:(0,d.w5)((()=>[(0,d.Uk)("修改用户信息")])),_:1}),(0,d.Wm)(v,{index:"4-2",onClick:Fe},{default:(0,d.w5)((()=>[(0,d.Uk)("退出登录")])),_:1})])),_:1})])),_:1},8,["default-active"]),(0,d._)("div",A,[(0,d.Wm)(xe,{icon:null,title:" "},{content:(0,d.w5)((()=>[(0,d._)("div",V,[(0,d.Wm)(_,{size:Oe.value,class:"mr-3",src:(0,m.SU)(fe)},null,8,["size","src"]),O,z,(0,d.Wm)(g,null,{default:(0,d.w5)((()=>[(0,d.Uk)("made by Yang")])),_:1})])])),_:1})]),(0,d.Wm)(Ae,{offset:ze.value,"onUpdate:offset":l[1]||(l[1]=e=>ze.value=e),axis:"xy",icon:"add-o",onClick:Be},null,8,["offset"]),(0,d._)("div",U,[(0,d._)("div",H,[(0,d._)("div",S,[(0,d.Wm)(Ve,{modelValue:Ue.value,"onUpdate:modelValue":l[2]||(l[2]=e=>Ue.value=e),shape:"round",placeholder:"请输入搜索任务关键词",onSearch:qe},null,8,["modelValue"])]),(0,d._)("div",C,[(0,d.Wm)(Ge,{data:ye.value,style:{width:"72vw"},height:"610px"},{default:(0,d.w5)((()=>[(0,d.Wm)(Se,{label:"名称",width:"126"},{default:(0,d.w5)((e=>[(0,d._)("div",q,[(0,d.Wm)(He,null,{default:(0,d.w5)((()=>[(0,d.Wm)((0,m.SU)(w.B7y))])),_:1}),(0,d._)("span",N,(0,c.zw)(e.row.name),1)])])),_:1}),(0,d.Wm)(Se,{label:"账号信息",width:"190"},{default:(0,d.w5)((e=>[(0,d.Wm)(Ce,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:(0,d.w5)((()=>[(0,d._)("div",null,"账号: "+(0,c.zw)(e.row.userName),1),(0,d._)("div",null,"密码: "+(0,c.zw)(e.row.password),1)])),reference:(0,d.w5)((()=>[(0,d.Wm)(g,null,{default:(0,d.w5)((()=>[(0,d.Uk)((0,c.zw)(e.row.userName),1)])),_:2},1024)])),_:2},1024)])),_:1}),(0,d.Wm)(Se,{label:"Token值",width:"318"},{default:(0,d.w5)((e=>[(0,d.Wm)(Ce,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:(0,d.w5)((()=>[(0,d._)("div",null,"token: "+(0,c.zw)(e.row.value),1)])),reference:(0,d.w5)((()=>[(0,d.Wm)(g,null,{default:(0,d.w5)((()=>[(0,d.Uk)((0,c.zw)(Xe(e.row.value)),1)])),_:2},1024)])),_:2},1024)])),_:1}),(0,d.Wm)(Se,{label:"有效时间",width:"167"},{default:(0,d.w5)((e=>[(0,d.Wm)(Ce,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:(0,d.w5)((()=>[(0,d._)("div",null,"注册时间："+(0,c.zw)(e.row.updateTime),1)])),reference:(0,d.w5)((()=>[(0,d.Wm)(g,null,{default:(0,d.w5)((()=>[(0,d.Uk)("距离过期还有："+(0,c.zw)(Ke(e.row.updateTime)),1)])),_:2},1024)])),_:2},1024)])),_:1}),(0,d.Wm)(Se,{label:"操作方法",width:"268"},{default:(0,d.w5)((e=>[(0,d.Wm)(Ne,{size:"small",onClick:l=>je(e.$index,e.row)},{default:(0,d.w5)((()=>[(0,d.Uk)("编辑")])),_:2},1032,["onClick"]),(0,d.Wm)(Ne,{size:"small",type:"primary",onClick:l=>Ie(e.row)},{default:(0,d.w5)((()=>[(0,d.Uk)("查看")])),_:2},1032,["onClick"]),(0,d.Wm)(Ne,{size:"small",type:"danger",onClick:l=>Me(e.$index,e.row)},{default:(0,d.w5)((()=>[(0,d.Uk)("删除")])),_:2},1032,["onClick"]),(0,d.Wm)(Ne,{size:"small",type:"success",onClick:l=>Je(e.row)},{default:(0,d.w5)((()=>[(0,d.Uk)("刷新")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),$]),P])]),(0,d.Wm)(ll,{show:a.value,"onUpdate:show":l[7]||(l[7]=e=>a.value=e),title:"修改token信息",width:"50vw",height:"50vh","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,class:"requireTokenDialog"},{default:(0,d.w5)((()=>[(0,d._)("div",j,[(0,d.Wm)(el,{onSubmit:l[6]||(l[6]=e=>Ye())},{default:(0,d.w5)((()=>[(0,d.Wm)(Qe,{inset:""},{default:(0,d.w5)((()=>[B,(0,d.Wm)(Le,{modelValue:ke.value,"onUpdate:modelValue":l[3]||(l[3]=e=>ke.value=e),name:"OpenAi用户名",label:"OpenAi用户名",placeholder:"OpenAi用户名",rules:[{required:!0,message:"请填写OpenAi用户名"}]},null,8,["modelValue"]),D,(0,d.Wm)(Le,{modelValue:be.value,"onUpdate:modelValue":l[4]||(l[4]=e=>be.value=e),type:"password",name:"OpenAi密码",label:"OpenAi密码",placeholder:"OpenAi密码",rules:[{required:!0,message:"请填写OpenAi密码"}]},null,8,["modelValue"]),I,(0,d.Wm)(Le,{modelValue:ge.value,"onUpdate:modelValue":l[5]||(l[5]=e=>ge.value=e),rows:"13",autosize:"",label:"OpenAi的Token",type:"textarea",maxlength:"10000",placeholder:"请填写OpenAi的Token","show-word-limit":""},null,8,["modelValue"]),Y])),_:1}),(0,d._)("div",Z,[(0,d.Wm)(Re,{round:"",block:"",color:"#0ea27e","native-type":"submit"},{default:(0,d.w5)((()=>[(0,d.Uk)(" 提交 ")])),_:1})])])),_:1})]),E])),_:1},8,["show"]),(0,d.Wm)(ll,{show:we.value,"onUpdate:show":l[13]||(l[13]=e=>we.value=e),title:"添加token信息",width:"50vw",height:"50vh","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,class:"addTokenDialog"},{default:(0,d.w5)((()=>[(0,d._)("div",J,[(0,d.Wm)(el,{onSubmit:l[12]||(l[12]=e=>De())},{default:(0,d.w5)((()=>[(0,d.Wm)(Qe,{inset:""},{default:(0,d.w5)((()=>[M,(0,d.Wm)(Le,{modelValue:_e.value,"onUpdate:modelValue":l[8]||(l[8]=e=>_e.value=e),name:"Token用户名",label:"Token用户名",autosize:"",placeholder:"Token用户名",maxlength:"10",rules:[{required:!0,message:"请填写Token用户名"}],"show-word-limit":""},null,8,["modelValue"]),K,(0,d.Wm)(Le,{modelValue:ke.value,"onUpdate:modelValue":l[9]||(l[9]=e=>ke.value=e),name:"OpenAi用户名",label:"OpenAi用户名",placeholder:"OpenAi用户名",rules:[{required:!0,message:"请填写OpenAi用户名"}]},null,8,["modelValue"]),X,(0,d.Wm)(Le,{modelValue:be.value,"onUpdate:modelValue":l[10]||(l[10]=e=>be.value=e),type:"password",name:"OpenAi密码",label:"OpenAi密码",placeholder:"OpenAi密码",rules:[{required:!0,message:"请填写OpenAi密码"}]},null,8,["modelValue"]),F,(0,d.Wm)(Le,{modelValue:ge.value,"onUpdate:modelValue":l[11]||(l[11]=e=>ge.value=e),rows:"17",autosize:"",label:"OpenAi的Token",type:"textarea",maxlength:"5000",placeholder:"请填写OpenAi的Token(选填)","show-word-limit":""},null,8,["modelValue"]),G])),_:1}),(0,d._)("div",L,[(0,d.Wm)(Re,{round:"",block:"",color:"#0ea27e","native-type":"submit"},{default:(0,d.w5)((()=>[(0,d.Uk)(" 提交 ")])),_:1})])])),_:1})]),Q])),_:1},8,["show"]),(0,d.Wm)(ll,{show:ve.value,"onUpdate:show":l[17]||(l[17]=e=>ve.value=e),title:"修改User信息",width:"50vw","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,class:"requireDialog"},{default:(0,d.w5)((()=>[(0,d.Wm)(el,{onSubmit:l[16]||(l[16]=e=>Ee())},{default:(0,d.w5)((()=>[(0,d.Wm)(Qe,{inset:""},{default:(0,d.w5)((()=>[R,(0,d.Wm)(Le,{modelValue:We.value,"onUpdate:modelValue":l[14]||(l[14]=e=>We.value=e),name:"登录用户名",label:"登录用户名",placeholder:"修改登录用户名"},null,8,["modelValue"]),ee,le,ae,(0,d.Wm)(Le,{modelValue:Te.value,"onUpdate:modelValue":l[15]||(l[15]=e=>Te.value=e),type:"password",name:"登录密码",label:"登录密码",placeholder:"修改登录密码"},null,8,["modelValue"])])),_:1}),oe,ne,(0,d._)("div",te,[(0,d.Wm)(Re,{round:"",block:"",color:"#0ea27e","native-type":"submit"},{default:(0,d.w5)((()=>[(0,d.Uk)(" 提交 ")])),_:1})])])),_:1}),ue])),_:1},8,["show"]),(0,d.Wm)(ll,{show:he.value,"onUpdate:show":l[23]||(l[23]=e=>he.value=e),title:"token信息",width:"50vw",height:"50vh","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1},{default:(0,d.w5)((()=>[(0,d._)("div",ie,[(0,d.Wm)(el,{onSubmit:l[22]||(l[22]=e=>De())},{default:(0,d.w5)((()=>[(0,d.Wm)(Qe,{inset:""},{default:(0,d.w5)((()=>[re,(0,d.Wm)(Le,{modelValue:_e.value,"onUpdate:modelValue":l[18]||(l[18]=e=>_e.value=e),name:"Token用户名",label:"Token用户名",placeholder:"Token用户名",rules:[{required:!0,message:"请填写Token用户名"}]},null,8,["modelValue"]),se,(0,d.Wm)(Le,{modelValue:ke.value,"onUpdate:modelValue":l[19]||(l[19]=e=>ke.value=e),name:"OpenAi用户名",label:"OpenAi用户名",placeholder:"OpenAi用户名",rules:[{required:!0,message:"请填写OpenAi用户名"}]},null,8,["modelValue"]),de,(0,d.Wm)(Le,{modelValue:be.value,"onUpdate:modelValue":l[20]||(l[20]=e=>be.value=e),type:"password",name:"OpenAi密码",label:"OpenAi密码",placeholder:"OpenAi密码",rules:[{required:!0,message:"请填写OpenAi密码"}]},null,8,["modelValue"]),me,(0,d.Wm)(Le,{modelValue:ge.value,"onUpdate:modelValue":l[21]||(l[21]=e=>ge.value=e),rows:"12",autosize:"",label:"OpenAi的Token",type:"textarea",maxlength:"10000",placeholder:"请填写OpenAi的Token","show-word-limit":""},null,8,["modelValue"]),ce])),_:1}),pe])),_:1})])])),_:1},8,["show"])],64)}}});const ve=we;var he=ve},1094:function(e,l,a){e.exports=a.p+"img/openAi.c25d9926.jpg"}}]);
//# sourceMappingURL=474.da36ad03.js.map