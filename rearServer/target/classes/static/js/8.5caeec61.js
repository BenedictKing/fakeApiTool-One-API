"use strict";(self["webpackChunkfakeapitoolweb"]=self["webpackChunkfakeapitoolweb"]||[]).push([[8],{6008:function(e,l,a){a.r(l),a.d(l,{default:function(){return we}});var n=a(2876),o=(a(492),a(5185)),t=(a(3349),a(6907)),u=(a(4746),a(5267)),i=(a(1645),a(3164)),r=(a(6335),a(157)),s=(a(1897),a(4188)),d=(a(9846),a(6252)),m=a(2262),c=a(3577),p=a(1094),w=a(5781),v=a(2201),h=a(6154),f=a(451),_=a(1348),g=a(844);const k={class:"content"},b=(0,d._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"},null,-1),y=(0,d._)("div",{class:"flex-grow"},null,-1),W=(0,d._)("a",{href:"https://github.com/Yanyutin753/fakeApiTool-One-API"},"fakeApiTool地址",-1),T={style:{display:"block",transform:"translate(5vw, 2.5vh)"}},A={class:"flex items-center"},x=(0,d._)("span",{class:"text-large font-600 mr-3"},"One-API",-1),V=(0,d._)("span",{class:"text-sm mr-2",style:{color:"var(--el-text-color-regular)"}}," fakeApiTool ",-1),O={class:"under"},U={class:"search"},z={style:{display:"flex",margin:"0px 0px -17px 0px"}},H={style:{display:"flex",width:"83vw",height:"85%",transform:"translateX(0vw)"}},S={style:{display:"flex","align-items":"center"}},C={style:{"margin-left":"7px"}},q=(0,d._)("div",{style:{display:"flex","margin-top":"3vh"}},null,-1),N=(0,d.uE)('<div class="bottom-component"><div style="text-align:center;transform:translateY(0vh);"><h2> 欢迎大家来扩展 <a href="https://github.com/Yanyutin753/fakeApiTool-One-API">fakeApiToolv0.1.0-oneApi </a> 获取token <a href="https://chat.openai.com/api/auth/session">官网地址 </a><a href="https://ai.fakeopen.com/auth">Pandora地址</a></h2></div><br></div>',1),$={style:{display:"block"}},j=(0,d._)("br",null,null,-1),B=(0,d._)("br",null,null,-1),D=(0,d._)("br",null,null,-1),P=(0,d._)("br",null,null,-1),I={style:{margin:"5.2px"}},Y=(0,d._)("br",null,null,-1),Z={style:{display:"block"}},E=(0,d._)("br",null,null,-1),J=(0,d._)("br",null,null,-1),M=(0,d._)("br",null,null,-1),K=(0,d._)("br",null,null,-1),X=(0,d._)("br",null,null,-1),F={style:{margin:"5.2px"}},G=(0,d._)("br",null,null,-1),L=(0,d._)("br",null,null,-1),Q=(0,d._)("br",null,null,-1),R=(0,d._)("br",null,null,-1),ee=(0,d._)("br",null,null,-1),le=(0,d._)("br",null,null,-1),ae=(0,d._)("br",null,null,-1),ne={style:{margin:"11.2px",transform:"translateY(14px)"}},oe=(0,d._)("br",null,null,-1),te={style:{display:"block"}},ue=(0,d._)("br",null,null,-1),ie=(0,d._)("br",null,null,-1),re=(0,d._)("br",null,null,-1),se=(0,d._)("br",null,null,-1),de=(0,d._)("br",null,null,-1),me=(0,d._)("br",null,null,-1);var ce=(0,d.aZ)({__name:"homeIphone",setup(e){const l=(0,m.iH)(!1),a=(0,m.iH)(!1),ce=(0,m.iH)(!1),pe=(0,m.iH)(!1),we=f,ve=(0,v.tv)(),he=(0,m.iH)(""),fe=(0,m.iH)(""),_e=(0,m.iH)(""),ge=(0,m.iH)(""),ke=(0,m.iH)([]),be=(0,m.iH)(""),ye=(0,m.iH)("");let We="";var Te=.09*window.innerHeight,Ae=.842*window.innerWidth;(0,m.iH)(.1*window.innerHeight);console.log(window.innerHeight.toString());const xe=(0,m.iH)({x:Ae,y:Te}),Ve=(0,m.iH)(""),Oe=localStorage.getItem("jwtToken");Oe||ve.replace("/login");const Ue={Authorization:`Bearer ${Oe}`},ze=()=>{h.Z.post("/api/loginToken?token="+Oe).then((e=>{if(0==e.data.code)return console.error(e.data.data),void ve.replace("/login");console.log(e.data.data)})).catch((e=>{console.error("请求loginToken接口失败",e),ve.replace("/login")}))},He=e=>{Se(e)},Se=async e=>{try{const l=await h.Z.get(`/api/seleteToken?name=${e}`,{headers:Ue}),a=l.data.data;if(console.log(a),Array.isArray(a)){const e=a.map((e=>({name:e.name,userName:e.userName,password:e.password,value:e.value,updateTime:e.updateTime})));ke.value=e}}catch(l){console.error("获取数据失败",l),(0,_.z8)("获取数据失败")}};(0,d.bv)((()=>{ze(),He(Ve.value)}));const Ce=(0,m.iH)("-1"),qe=(e,l)=>{console.log(e,l)},Ne=(e,a)=>{console.log(e,a),We=a.name,_e.value=a.userName,ge.value=a.password,fe.value=a.value,l.value=!0},$e=()=>{a.value=!0},je=()=>{const e={name:he.value,value:fe.value,userName:_e.value,password:ge.value,updateTime:(new Date).toString()};fetch("/api/addToken",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Oe}`},body:JSON.stringify(e)}).then((e=>e.json())).then((l=>{1==l.code?(console.log(l.data),ke.value.unshift(e),(0,_.z8)(l.data)):(0,_.z8)(l.msg)})).catch((e=>{console.error("请求addToken接口失败",e),(0,_.z8)("添加失败！")})),he.value="",_e.value="",ge.value="",fe.value="",a.value=!1},Be=e=>{he.value=e.name,_e.value=e.userName,ge.value=e.password,fe.value=e.value,pe.value=!0},De=()=>{const e={name:We,value:fe.value,userName:_e.value,password:ge.value};fetch("/api/requiredToken",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Oe}`},body:JSON.stringify(e)}).then((e=>e.json())).then((l=>{if(1==l.code){console.log(l.data),(0,_.z8)(l.data);for(let l=0;l<ke.value.length;l++)if(ke.value[l].name===e.name){ke.value[l].value=e.value,ke.value[l].userName=e.userName,ke.value[l].password=e.password;break}}else(0,_.z8)(l.msg)})).catch((e=>{console.error("请求requireToken接口失败",e),(0,_.z8)("修改失败！")})),We="",fe.value="",_e.value="",ge.value="",l.value=!1},Pe=()=>{ce.value=!0},Ie=()=>{h.Z.post(`/api/requiredUser?userName=${be.value}&password=${ye.value}`,null,{headers:Ue}).then((e=>{1==e.data.code?(console.log("修改成功",e.data.data),(0,_.z8)("修改成功！")):(console.error("修改失败"),(0,_.z8)("修改失败"))})).catch((e=>{console.error("修改时出现错误:",e),(0,_.z8)("修改时出现错误")})),ce.value=!1},Ye=async e=>{const l=await h.Z.get(`/api/updateToken?name=${e.name}`,{headers:Ue}),a=l.data.data;console.log(a),null!=a&&""!=a?(e.value=a,g.T.alert("更新成功!","温馨提醒",{confirmButtonText:"OK",callback:()=>{(0,_.z8)({type:"info",message:"感谢Pandora大佬！"})}})):(0,_.z8)("更新错误！")},Ze=(e,l)=>{let a="";g.T.confirm("您确定要删除这个Token吗，删除之后就找不到咯，请您要仔细认真考虑哦！","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{h.Z.put(`/api/deleteToken?name=${l.name}`,null,{headers:Ue}).then((l=>{a="删除成功！",console.log(l.data.data),ke.value.splice(e,1),(0,_.z8)({type:"success",message:a})})).catch((e=>{console.error("删除失败",e)}))})).catch((()=>{(0,_.z8)({type:"info",message:"删除取消！"})}))},Ee=e=>{if(!e)return"";var l=new Date,a=new Date(e);let n=Math.ceil(l.getTime()-a.getTime())/864e5;return n>=15?"已经过去了至少15天":Math.ceil(15-n)+"天"},Je=e=>e.substring(0,40)+"...",Me=()=>{localStorage.removeItem("jwtToken"),ve.replace("/login")};return(e,v)=>{const h=(0,d.up)("el-menu-item"),f=(0,d.up)("el-sub-menu"),_=(0,d.up)("el-menu"),g=(0,d.up)("el-avatar"),ve=(0,d.up)("el-tag"),We=(0,d.up)("el-page-header"),Te=s.e$,Ae=r.ol,Oe=(0,d.up)("el-icon"),Ue=(0,d.up)("el-table-column"),ze=(0,d.up)("el-popover"),Se=(0,d.up)("el-button"),Ke=(0,d.up)("el-table"),Xe=i.gN,Fe=u.TS,Ge=t.zx,Le=o.l0,Qe=n.Vq;return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("div",k,[b,(0,d.Wm)(_,{"default-active":Ce.value,class:"el-menu-demo",mode:"horizontal",ellipsis:!1,onSelect:qe,"active-text-color":"#0ea27e","text-color":"#0ea27e"},{default:(0,d.w5)((()=>[(0,d.Wm)(h,null,{default:(0,d.w5)((()=>[(0,d._)("img",{style:{width:"34px"},src:p,alt:"Element logo",onClick:v[0]||(v[0]=(...l)=>e.acc&&e.acc(...l))})])),_:1}),y,(0,d.Wm)(h,{index:"1"},{default:(0,d.w5)((()=>[W])),_:1}),(0,d.Wm)(f,{index:"4"},{title:(0,d.w5)((()=>[(0,d.Uk)("用户设置")])),default:(0,d.w5)((()=>[(0,d.Wm)(h,{index:"4-1",onClick:Pe},{default:(0,d.w5)((()=>[(0,d.Uk)("修改用户信息")])),_:1}),(0,d.Wm)(h,{index:"4-2",onClick:Me},{default:(0,d.w5)((()=>[(0,d.Uk)("退出登录")])),_:1})])),_:1})])),_:1},8,["default-active"]),(0,d._)("div",T,[(0,d.Wm)(We,{icon:null,title:" "},{content:(0,d.w5)((()=>[(0,d._)("div",A,[(0,d.Wm)(g,{size:"52.6px",class:"mr-3",src:(0,m.SU)(we)},null,8,["src"]),x,V,(0,d.Wm)(ve,null,{default:(0,d.w5)((()=>[(0,d.Uk)("made by Yang")])),_:1})])])),_:1})]),(0,d.Wm)(Te,{offset:xe.value,"onUpdate:offset":v[1]||(v[1]=e=>xe.value=e),axis:"xy",icon:"add-o",onClick:$e},null,8,["offset"]),(0,d._)("div",O,[(0,d._)("div",U,[(0,d._)("div",z,[(0,d.Wm)(Ae,{modelValue:Ve.value,"onUpdate:modelValue":v[2]||(v[2]=e=>Ve.value=e),shape:"round",placeholder:"请输入搜索任务关键词",onSearch:He},null,8,["modelValue"])]),(0,d._)("div",H,[(0,d.Wm)(Ke,{data:ke.value,style:{width:"100%"},height:"100%"},{default:(0,d.w5)((()=>[(0,d.Wm)(Ue,{label:"名称",width:"126"},{default:(0,d.w5)((e=>[(0,d._)("div",S,[(0,d.Wm)(Oe,null,{default:(0,d.w5)((()=>[(0,d.Wm)((0,m.SU)(w.B7y))])),_:1}),(0,d._)("span",C,(0,c.zw)(e.row.name),1)])])),_:1}),(0,d.Wm)(Ue,{label:"账号信息",width:"190"},{default:(0,d.w5)((e=>[(0,d.Wm)(ze,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:(0,d.w5)((()=>[(0,d._)("div",null,"账号: "+(0,c.zw)(e.row.userName),1),(0,d._)("div",null,"密码: "+(0,c.zw)(e.row.password),1)])),reference:(0,d.w5)((()=>[(0,d.Wm)(ve,null,{default:(0,d.w5)((()=>[(0,d.Uk)((0,c.zw)(e.row.userName),1)])),_:2},1024)])),_:2},1024)])),_:1}),(0,d.Wm)(Ue,{label:"Token值",width:"318"},{default:(0,d.w5)((e=>[(0,d.Wm)(ze,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:(0,d.w5)((()=>[(0,d._)("div",null,"token: "+(0,c.zw)(e.row.value),1)])),reference:(0,d.w5)((()=>[(0,d.Wm)(ve,null,{default:(0,d.w5)((()=>[(0,d.Uk)((0,c.zw)(Je(e.row.value)),1)])),_:2},1024)])),_:2},1024)])),_:1}),(0,d.Wm)(Ue,{label:"有效时间",width:"167"},{default:(0,d.w5)((e=>[(0,d.Wm)(ze,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:(0,d.w5)((()=>[(0,d._)("div",null,"注册时间："+(0,c.zw)(e.row.updateTime),1)])),reference:(0,d.w5)((()=>[(0,d.Wm)(ve,null,{default:(0,d.w5)((()=>[(0,d.Uk)("距离过期还有："+(0,c.zw)(Ee(e.row.updateTime)),1)])),_:2},1024)])),_:2},1024)])),_:1}),(0,d.Wm)(Ue,{label:"操作方法",width:"268"},{default:(0,d.w5)((e=>[(0,d.Wm)(Se,{size:"small",onClick:l=>Ne(e.$index,e.row)},{default:(0,d.w5)((()=>[(0,d.Uk)("编辑")])),_:2},1032,["onClick"]),(0,d.Wm)(Se,{size:"small",type:"primary",onClick:l=>Be(e.row)},{default:(0,d.w5)((()=>[(0,d.Uk)("查看")])),_:2},1032,["onClick"]),(0,d.Wm)(Se,{size:"small",type:"danger",onClick:l=>Ze(e.$index,e.row)},{default:(0,d.w5)((()=>[(0,d.Uk)("删除")])),_:2},1032,["onClick"]),(0,d.Wm)(Se,{size:"small",type:"success",onClick:l=>Ye(e.row)},{default:(0,d.w5)((()=>[(0,d.Uk)("刷新")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),q]),N])]),(0,d.Wm)(Qe,{show:l.value,"onUpdate:show":v[7]||(v[7]=e=>l.value=e),title:"修改token信息",width:"80vw",height:"50vh","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,class:"requireTokenDialog"},{default:(0,d.w5)((()=>[(0,d._)("div",$,[(0,d.Wm)(Le,{onSubmit:v[6]||(v[6]=e=>De())},{default:(0,d.w5)((()=>[(0,d.Wm)(Fe,{inset:""},{default:(0,d.w5)((()=>[j,(0,d.Wm)(Xe,{modelValue:_e.value,"onUpdate:modelValue":v[3]||(v[3]=e=>_e.value=e),name:"OpenAi用户名",label:"OpenAi用户名",placeholder:"OpenAi用户名",rules:[{required:!0,message:"请填写OpenAi用户名"}]},null,8,["modelValue"]),B,(0,d.Wm)(Xe,{modelValue:ge.value,"onUpdate:modelValue":v[4]||(v[4]=e=>ge.value=e),type:"password",name:"OpenAi密码",label:"OpenAi密码",placeholder:"OpenAi密码",rules:[{required:!0,message:"请填写OpenAi密码"}]},null,8,["modelValue"]),D,(0,d.Wm)(Fe,{inset:""},{default:(0,d.w5)((()=>[(0,d.Wm)(Xe,{modelValue:fe.value,"onUpdate:modelValue":v[5]||(v[5]=e=>fe.value=e),rows:"5",label:"OpenAi的Token",type:"textarea",maxlength:"10000",placeholder:"请填写OpenAi的Token","show-word-limit":""},null,8,["modelValue"]),P])),_:1})])),_:1}),(0,d._)("div",I,[(0,d.Wm)(Ge,{round:"",block:"",color:"#0ea27e","native-type":"submit"},{default:(0,d.w5)((()=>[(0,d.Uk)(" 提交 ")])),_:1})])])),_:1})]),Y])),_:1},8,["show"]),(0,d.Wm)(Qe,{show:a.value,"onUpdate:show":v[13]||(v[13]=e=>a.value=e),title:"添加token信息",width:"80vw",height:"50vh","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,class:"addTokenDialog"},{default:(0,d.w5)((()=>[(0,d._)("div",Z,[(0,d.Wm)(Le,{onSubmit:v[12]||(v[12]=e=>je())},{default:(0,d.w5)((()=>[(0,d.Wm)(Fe,{inset:""},{default:(0,d.w5)((()=>[E,(0,d.Wm)(Xe,{modelValue:he.value,"onUpdate:modelValue":v[8]||(v[8]=e=>he.value=e),name:"Token用户名",label:"Token用户名",placeholder:"Token用户名",rules:[{required:!0,message:"请填写Token用户名"}]},null,8,["modelValue"]),J,(0,d.Wm)(Xe,{modelValue:_e.value,"onUpdate:modelValue":v[9]||(v[9]=e=>_e.value=e),name:"OpenAi用户名",label:"OpenAi用户名",placeholder:"OpenAi用户名",rules:[{required:!0,message:"请填写OpenAi用户名"}]},null,8,["modelValue"]),M,(0,d.Wm)(Xe,{modelValue:ge.value,"onUpdate:modelValue":v[10]||(v[10]=e=>ge.value=e),type:"password",name:"OpenAi密码",label:"OpenAi密码",placeholder:"OpenAi密码",rules:[{required:!0,message:"请填写OpenAi密码"}]},null,8,["modelValue"]),K,(0,d.Wm)(Fe,{inset:""},{default:(0,d.w5)((()=>[(0,d.Wm)(Xe,{modelValue:fe.value,"onUpdate:modelValue":v[11]||(v[11]=e=>fe.value=e),rows:"5",label:"OpenAi的Token",type:"textarea",maxlength:"10000",placeholder:"请填写OpenAi的Token","show-word-limit":""},null,8,["modelValue"]),X])),_:1})])),_:1}),(0,d._)("div",F,[(0,d.Wm)(Ge,{round:"",block:"",color:"#0ea27e","native-type":"submit"},{default:(0,d.w5)((()=>[(0,d.Uk)(" 提交 ")])),_:1})])])),_:1})]),G])),_:1},8,["show"]),(0,d.Wm)(Qe,{show:ce.value,"onUpdate:show":v[17]||(v[17]=e=>ce.value=e),title:"修改User信息",width:"80vw","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,class:"requireDialog"},{default:(0,d.w5)((()=>[(0,d.Wm)(Le,{onSubmit:v[16]||(v[16]=e=>Ie())},{default:(0,d.w5)((()=>[(0,d.Wm)(Fe,{inset:""},{default:(0,d.w5)((()=>[L,(0,d.Wm)(Xe,{modelValue:be.value,"onUpdate:modelValue":v[14]||(v[14]=e=>be.value=e),name:"登录用户名",label:"登录用户名",placeholder:"修改登录用户名"},null,8,["modelValue"]),Q,R,ee,(0,d.Wm)(Xe,{modelValue:ye.value,"onUpdate:modelValue":v[15]||(v[15]=e=>ye.value=e),type:"password",name:"登录密码",label:"登录密码",placeholder:"修改登录密码"},null,8,["modelValue"])])),_:1}),le,ae,(0,d._)("div",ne,[(0,d.Wm)(Ge,{round:"",block:"",color:"#0ea27e","native-type":"submit"},{default:(0,d.w5)((()=>[(0,d.Uk)(" 提交 ")])),_:1})])])),_:1}),oe])),_:1},8,["show"]),(0,d.Wm)(Qe,{show:pe.value,"onUpdate:show":v[23]||(v[23]=e=>pe.value=e),title:"token信息",width:"80vw",height:"50vh","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1},{default:(0,d.w5)((()=>[(0,d._)("div",te,[(0,d.Wm)(Le,{onSubmit:v[22]||(v[22]=e=>je())},{default:(0,d.w5)((()=>[(0,d.Wm)(Fe,{inset:""},{default:(0,d.w5)((()=>[ue,(0,d.Wm)(Xe,{modelValue:he.value,"onUpdate:modelValue":v[18]||(v[18]=e=>he.value=e),name:"Token用户名",label:"Token用户名",placeholder:"Token用户名",rules:[{required:!0,message:"请填写Token用户名"}]},null,8,["modelValue"]),ie,(0,d.Wm)(Xe,{modelValue:_e.value,"onUpdate:modelValue":v[19]||(v[19]=e=>_e.value=e),name:"OpenAi用户名",label:"OpenAi用户名",placeholder:"OpenAi用户名",rules:[{required:!0,message:"请填写OpenAi用户名"}]},null,8,["modelValue"]),re,(0,d.Wm)(Xe,{modelValue:ge.value,"onUpdate:modelValue":v[20]||(v[20]=e=>ge.value=e),type:"password",name:"OpenAi密码",label:"OpenAi密码",placeholder:"OpenAi密码",rules:[{required:!0,message:"请填写OpenAi密码"}]},null,8,["modelValue"]),se,(0,d.Wm)(Fe,{inset:""},{default:(0,d.w5)((()=>[(0,d.Wm)(Xe,{modelValue:fe.value,"onUpdate:modelValue":v[21]||(v[21]=e=>fe.value=e),rows:"3",label:"OpenAi的Token",type:"textarea",maxlength:"10000",placeholder:"请填写OpenAi的Token","show-word-limit":""},null,8,["modelValue"]),de])),_:1})])),_:1}),me])),_:1})])])),_:1},8,["show"])],64)}}});const pe=ce;var we=pe},1094:function(e,l,a){e.exports=a.p+"img/openAi.c25d9926.jpg"}}]);
//# sourceMappingURL=8.5caeec61.js.map