"use strict";(self["webpackChunkfakeapitoolweb"]=self["webpackChunkfakeapitoolweb"]||[]).push([[839],{7839:function(e,l,a){a.r(l),a.d(l,{default:function(){return pe}});var o=a(2876),t=(a(492),a(5185)),n=(a(3349),a(6907)),u=(a(4746),a(5267)),i=(a(1645),a(3164)),r=(a(6335),a(157)),s=(a(1897),a(4188)),d=(a(9846),a(6252)),m=a(2262),c=a(3577),p=a(1094),h=a(5781),w=a(2201),v=a(6154),f=a(451),_=a(1348),g=a(844);const k={class:"content"},b=(0,d._)("div",{class:"flex-grow"},null,-1),y=(0,d._)("a",{href:"https://github.com/Yanyutin753/fakeApiTool-One-API"},"fakeApiTool地址",-1),W={style:{display:"block",transform:"translate(5vw, 2.5vh)"}},T={class:"flex items-center"},A=(0,d._)("span",{class:"text-large font-600 mr-3"},"One-API",-1),x=(0,d._)("span",{class:"text-sm mr-2",style:{color:"var(--el-text-color-regular)"}}," fakeApiTool ",-1),V={class:"under"},O={class:"search"},U={style:{display:"flex",margin:"0px 0px -17px 0px"}},z={style:{display:"flex",width:"83vw",height:"85%",transform:"translateX(0vw)"}},H={style:{display:"flex","align-items":"center"}},S={style:{"margin-left":"7px"}},C=(0,d._)("div",{style:{display:"flex","margin-top":"3vh"}},null,-1),q=(0,d.uE)('<div class="bottom-component"><div style="text-align:center;transform:translateY(0vh);"><h2> 欢迎大家来扩展 <a href="https://github.com/Yanyutin753/fakeApiTool-One-API">fakeApiToolv0.1.0-oneApi </a> 获取token <a href="https://chat.openai.comhttp://localhost:8008/api/auth/session">官网地址 </a><a href="https://ai.fakeopen.com/auth">Pandora地址</a></h2></div><br></div>',1),N={style:{display:"block"}},$=(0,d._)("br",null,null,-1),j=(0,d._)("br",null,null,-1),B=(0,d._)("br",null,null,-1),D=(0,d._)("br",null,null,-1),P={style:{margin:"5.2px"}},I=(0,d._)("br",null,null,-1),Y={style:{display:"block"}},Z=(0,d._)("br",null,null,-1),E=(0,d._)("br",null,null,-1),J=(0,d._)("br",null,null,-1),M=(0,d._)("br",null,null,-1),K=(0,d._)("br",null,null,-1),X={style:{margin:"5.2px"}},F=(0,d._)("br",null,null,-1),G=(0,d._)("br",null,null,-1),L=(0,d._)("br",null,null,-1),Q=(0,d._)("br",null,null,-1),R=(0,d._)("br",null,null,-1),ee=(0,d._)("br",null,null,-1),le=(0,d._)("br",null,null,-1),ae={style:{margin:"11.2px",transform:"translateY(14px)"}},oe=(0,d._)("br",null,null,-1),te={style:{display:"block"}},ne=(0,d._)("br",null,null,-1),ue=(0,d._)("br",null,null,-1),ie=(0,d._)("br",null,null,-1),re=(0,d._)("br",null,null,-1),se=(0,d._)("br",null,null,-1),de=(0,d._)("br",null,null,-1);var me=(0,d.aZ)({__name:"homeIphone",setup(e){const l=(0,m.iH)(!1),a=(0,m.iH)(!1),me=(0,m.iH)(!1),ce=(0,m.iH)(!1),pe=f,he=(0,w.tv)(),we=(0,m.iH)(""),ve=(0,m.iH)(""),fe=(0,m.iH)(""),_e=(0,m.iH)(""),ge=(0,m.iH)([]),ke=(0,m.iH)(""),be=(0,m.iH)("");let ye="";var We=.09*window.innerHeight,Te=.842*window.innerWidth;(0,m.iH)(.1*window.innerHeight);console.log(window.innerHeight.toString());const Ae=(0,m.iH)({x:Te,y:We}),xe=(0,m.iH)(""),Ve=localStorage.getItem("jwtToken");Ve||he.replace("/login");const Oe={Authorization:`Bearer ${Ve}`},Ue=()=>{v.Z.post("http://localhost:8008/api/loginToken?token="+Ve).then((e=>{if(0==e.data.code)return console.error(e.data.data),void he.replace("/login");console.log(e.data.data)})).catch((e=>{console.error("请求loginToken接口失败",e),he.replace("/login")}))},ze=e=>{He(e)},He=async e=>{try{const l=await v.Z.get(`http://localhost:8008/api/seleteToken?name=${e}`,{headers:Oe}),a=l.data.data;if(console.log(a),Array.isArray(a)){const e=a.map((e=>({name:e.name,userName:e.userName,password:e.password,value:e.value,updateTime:e.updateTime})));ge.value=e}}catch(l){console.error("获取数据失败",l),(0,_.z8)("获取数据失败")}};(0,d.bv)((()=>{Ue(),ze(xe.value)}));const Se=(0,m.iH)("-1"),Ce=(e,l)=>{console.log(e,l)},qe=(e,a)=>{console.log(e,a),ye=a.name,fe.value=a.userName,_e.value=a.password,ve.value=a.value,l.value=!0},Ne=()=>{a.value=!0},$e=()=>{const e={name:we.value,value:ve.value,userName:fe.value,password:_e.value,updateTime:(new Date).toString()};fetch("http://localhost:8008/api/addToken",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Ve}`},body:JSON.stringify(e)}).then((e=>e.json())).then((l=>{1==l.code?(console.log(l.data),ge.value.unshift(e),(0,_.z8)(l.data)):(0,_.z8)(l.msg)})).catch((e=>{console.error("请求addToken接口失败",e),(0,_.z8)("添加失败！")})),we.value="",fe.value="",_e.value="",ve.value="",a.value=!1},je=e=>{we.value=e.name,fe.value=e.userName,_e.value=e.password,ve.value=e.value,ce.value=!0},Be=()=>{const e={name:ye,value:ve.value,userName:fe.value,password:_e.value};fetch("http://localhost:8008/api/requiredToken",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Ve}`},body:JSON.stringify(e)}).then((e=>e.json())).then((l=>{if(1==l.code){console.log(l.data),(0,_.z8)(l.data);for(let l=0;l<ge.value.length;l++)if(ge.value[l].name===e.name){ge.value[l].value=e.value,ge.value[l].userName=e.userName,ge.value[l].password=e.password;break}}else(0,_.z8)(l.msg)})).catch((e=>{console.error("请求requireToken接口失败",e),(0,_.z8)("修改失败！")})),ye="",ve.value="",fe.value="",_e.value="",l.value=!1},De=()=>{me.value=!0},Pe=()=>{v.Z.post(`http://localhost:8008/api/requiredUser?userName=${ke.value}&password=${be.value}`,null,{headers:Oe}).then((e=>{1==e.data.code?(console.log("修改成功",e.data.data),(0,_.z8)("修改成功！")):(console.error("修改失败"),(0,_.z8)("修改失败"))})).catch((e=>{console.error("修改时出现错误:",e),(0,_.z8)("修改时出现错误")})),me.value=!1},Ie=async e=>{const l=await v.Z.get(`http://localhost:8008/api/updateToken?name=${e.name}`,{headers:Oe}),a=l.data.data;console.log(a),null!=a&&""!=a?(e.value=a,g.T.alert("更新成功!","温馨提醒",{confirmButtonText:"OK",callback:()=>{(0,_.z8)({type:"info",message:"感谢Pandora大佬！"})}})):(0,_.z8)("更新错误！")},Ye=(e,l)=>{let a="";g.T.confirm("您确定要删除这个Token吗，删除之后就找不到咯，请您要仔细认真考虑哦！","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{v.Z.put(`http://localhost:8008/api/deleteToken?name=${l.name}`,null,{headers:Oe}).then((l=>{a="删除成功！",console.log(l.data.data),ge.value.splice(e,1),(0,_.z8)({type:"success",message:a})})).catch((e=>{console.error("删除失败",e)}))})).catch((()=>{(0,_.z8)({type:"info",message:"删除取消！"})}))},Ze=e=>{if(!e)return"";var l=new Date,a=new Date(e);let o=Math.ceil(l.getTime()-a.getTime())/864e5;return o>=15?"已经过去了至少15天":Math.ceil(15-o)+"天"},Ee=e=>e.substring(0,40)+"...",Je=()=>{localStorage.removeItem("jwtToken"),he.replace("/login")};return(e,w)=>{const v=(0,d.up)("el-menu-item"),f=(0,d.up)("el-sub-menu"),_=(0,d.up)("el-menu"),g=(0,d.up)("el-avatar"),he=(0,d.up)("el-tag"),ye=(0,d.up)("el-page-header"),We=s.e$,Te=r.ol,Ve=(0,d.up)("el-icon"),Oe=(0,d.up)("el-table-column"),Ue=(0,d.up)("el-popover"),He=(0,d.up)("el-button"),Me=(0,d.up)("el-table"),Ke=i.gN,Xe=u.TS,Fe=n.zx,Ge=t.l0,Le=o.Vq;return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("div",k,[(0,d.Wm)(_,{"default-active":Se.value,class:"el-menu-demo",mode:"horizontal",ellipsis:!1,onSelect:Ce,"active-text-color":"#0ea27e","text-color":"#0ea27e"},{default:(0,d.w5)((()=>[(0,d.Wm)(v,null,{default:(0,d.w5)((()=>[(0,d._)("img",{style:{width:"34px"},src:p,alt:"Element logo",onClick:w[0]||(w[0]=(...l)=>e.acc&&e.acc(...l))})])),_:1}),b,(0,d.Wm)(v,{index:"1"},{default:(0,d.w5)((()=>[y])),_:1}),(0,d.Wm)(f,{index:"4"},{title:(0,d.w5)((()=>[(0,d.Uk)("用户设置")])),default:(0,d.w5)((()=>[(0,d.Wm)(v,{index:"4-1",onClick:De},{default:(0,d.w5)((()=>[(0,d.Uk)("修改用户信息")])),_:1}),(0,d.Wm)(v,{index:"4-2",onClick:Je},{default:(0,d.w5)((()=>[(0,d.Uk)("退出登录")])),_:1})])),_:1})])),_:1},8,["default-active"]),(0,d._)("div",W,[(0,d.Wm)(ye,{icon:null,title:" "},{content:(0,d.w5)((()=>[(0,d._)("div",T,[(0,d.Wm)(g,{size:"52.6px",class:"mr-3",src:(0,m.SU)(pe)},null,8,["src"]),A,x,(0,d.Wm)(he,null,{default:(0,d.w5)((()=>[(0,d.Uk)("made by Yang")])),_:1})])])),_:1})]),(0,d.Wm)(We,{offset:Ae.value,"onUpdate:offset":w[1]||(w[1]=e=>Ae.value=e),axis:"xy",icon:"add-o",onClick:Ne},null,8,["offset"]),(0,d._)("div",V,[(0,d._)("div",O,[(0,d._)("div",U,[(0,d.Wm)(Te,{modelValue:xe.value,"onUpdate:modelValue":w[2]||(w[2]=e=>xe.value=e),shape:"round",placeholder:"请输入搜索任务关键词",onSearch:ze},null,8,["modelValue"])]),(0,d._)("div",z,[(0,d.Wm)(Me,{data:ge.value,style:{width:"100%"},height:"100%"},{default:(0,d.w5)((()=>[(0,d.Wm)(Oe,{label:"名称",width:"126"},{default:(0,d.w5)((e=>[(0,d._)("div",H,[(0,d.Wm)(Ve,null,{default:(0,d.w5)((()=>[(0,d.Wm)((0,m.SU)(h.B7y))])),_:1}),(0,d._)("span",S,(0,c.zw)(e.row.name),1)])])),_:1}),(0,d.Wm)(Oe,{label:"账号信息",width:"190"},{default:(0,d.w5)((e=>[(0,d.Wm)(Ue,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:(0,d.w5)((()=>[(0,d._)("div",null,"账号: "+(0,c.zw)(e.row.userName),1),(0,d._)("div",null,"密码: "+(0,c.zw)(e.row.password),1)])),reference:(0,d.w5)((()=>[(0,d.Wm)(he,null,{default:(0,d.w5)((()=>[(0,d.Uk)((0,c.zw)(e.row.userName),1)])),_:2},1024)])),_:2},1024)])),_:1}),(0,d.Wm)(Oe,{label:"Token值",width:"318"},{default:(0,d.w5)((e=>[(0,d.Wm)(Ue,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:(0,d.w5)((()=>[(0,d._)("div",null,"token: "+(0,c.zw)(e.row.value),1)])),reference:(0,d.w5)((()=>[(0,d.Wm)(he,null,{default:(0,d.w5)((()=>[(0,d.Uk)((0,c.zw)(Ee(e.row.value)),1)])),_:2},1024)])),_:2},1024)])),_:1}),(0,d.Wm)(Oe,{label:"有效时间",width:"167"},{default:(0,d.w5)((e=>[(0,d.Wm)(Ue,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:(0,d.w5)((()=>[(0,d._)("div",null,"注册时间："+(0,c.zw)(e.row.updateTime),1)])),reference:(0,d.w5)((()=>[(0,d.Wm)(he,null,{default:(0,d.w5)((()=>[(0,d.Uk)("距离过期还有："+(0,c.zw)(Ze(e.row.updateTime)),1)])),_:2},1024)])),_:2},1024)])),_:1}),(0,d.Wm)(Oe,{label:"操作方法",width:"268"},{default:(0,d.w5)((e=>[(0,d.Wm)(He,{size:"small",onClick:l=>qe(e.$index,e.row)},{default:(0,d.w5)((()=>[(0,d.Uk)("编辑")])),_:2},1032,["onClick"]),(0,d.Wm)(He,{size:"small",type:"primary",onClick:l=>je(e.row)},{default:(0,d.w5)((()=>[(0,d.Uk)("查看")])),_:2},1032,["onClick"]),(0,d.Wm)(He,{size:"small",type:"danger",onClick:l=>Ye(e.$index,e.row)},{default:(0,d.w5)((()=>[(0,d.Uk)("删除")])),_:2},1032,["onClick"]),(0,d.Wm)(He,{size:"small",type:"success",onClick:l=>Ie(e.row)},{default:(0,d.w5)((()=>[(0,d.Uk)("刷新")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),C]),q])]),(0,d.Wm)(Le,{show:l.value,"onUpdate:show":w[7]||(w[7]=e=>l.value=e),title:"修改token信息",width:"80vw",height:"50vh","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,class:"requireTokenDialog"},{default:(0,d.w5)((()=>[(0,d._)("div",N,[(0,d.Wm)(Ge,{onSubmit:w[6]||(w[6]=e=>Be())},{default:(0,d.w5)((()=>[(0,d.Wm)(Xe,{inset:""},{default:(0,d.w5)((()=>[$,(0,d.Wm)(Ke,{modelValue:fe.value,"onUpdate:modelValue":w[3]||(w[3]=e=>fe.value=e),name:"OpenAi用户名",label:"OpenAi用户名",placeholder:"OpenAi用户名",rules:[{required:!0,message:"请填写OpenAi用户名"}]},null,8,["modelValue"]),j,(0,d.Wm)(Ke,{modelValue:_e.value,"onUpdate:modelValue":w[4]||(w[4]=e=>_e.value=e),type:"password",name:"OpenAi密码",label:"OpenAi密码",placeholder:"OpenAi密码",rules:[{required:!0,message:"请填写OpenAi密码"}]},null,8,["modelValue"]),B,(0,d.Wm)(Xe,{inset:""},{default:(0,d.w5)((()=>[(0,d.Wm)(Ke,{modelValue:ve.value,"onUpdate:modelValue":w[5]||(w[5]=e=>ve.value=e),rows:"5",label:"OpenAi的Token",type:"textarea",maxlength:"10000",placeholder:"请填写OpenAi的Token","show-word-limit":""},null,8,["modelValue"]),D])),_:1})])),_:1}),(0,d._)("div",P,[(0,d.Wm)(Fe,{round:"",block:"",color:"#0ea27e","native-type":"submit"},{default:(0,d.w5)((()=>[(0,d.Uk)(" 提交 ")])),_:1})])])),_:1})]),I])),_:1},8,["show"]),(0,d.Wm)(Le,{show:a.value,"onUpdate:show":w[13]||(w[13]=e=>a.value=e),title:"添加token信息",width:"80vw",height:"50vh","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,class:"addTokenDialog"},{default:(0,d.w5)((()=>[(0,d._)("div",Y,[(0,d.Wm)(Ge,{onSubmit:w[12]||(w[12]=e=>$e())},{default:(0,d.w5)((()=>[(0,d.Wm)(Xe,{inset:""},{default:(0,d.w5)((()=>[Z,(0,d.Wm)(Ke,{modelValue:we.value,"onUpdate:modelValue":w[8]||(w[8]=e=>we.value=e),name:"Token用户名",label:"Token用户名",placeholder:"Token用户名",rules:[{required:!0,message:"请填写Token用户名"}]},null,8,["modelValue"]),E,(0,d.Wm)(Ke,{modelValue:fe.value,"onUpdate:modelValue":w[9]||(w[9]=e=>fe.value=e),name:"OpenAi用户名",label:"OpenAi用户名",placeholder:"OpenAi用户名",rules:[{required:!0,message:"请填写OpenAi用户名"}]},null,8,["modelValue"]),J,(0,d.Wm)(Ke,{modelValue:_e.value,"onUpdate:modelValue":w[10]||(w[10]=e=>_e.value=e),type:"password",name:"OpenAi密码",label:"OpenAi密码",placeholder:"OpenAi密码",rules:[{required:!0,message:"请填写OpenAi密码"}]},null,8,["modelValue"]),M,(0,d.Wm)(Xe,{inset:""},{default:(0,d.w5)((()=>[(0,d.Wm)(Ke,{modelValue:ve.value,"onUpdate:modelValue":w[11]||(w[11]=e=>ve.value=e),rows:"5",label:"OpenAi的Token",type:"textarea",maxlength:"10000",placeholder:"请填写OpenAi的Token","show-word-limit":""},null,8,["modelValue"]),K])),_:1})])),_:1}),(0,d._)("div",X,[(0,d.Wm)(Fe,{round:"",block:"",color:"#0ea27e","native-type":"submit"},{default:(0,d.w5)((()=>[(0,d.Uk)(" 提交 ")])),_:1})])])),_:1})]),F])),_:1},8,["show"]),(0,d.Wm)(Le,{show:me.value,"onUpdate:show":w[17]||(w[17]=e=>me.value=e),title:"修改User信息",width:"80vw","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,class:"requireDialog"},{default:(0,d.w5)((()=>[(0,d.Wm)(Ge,{onSubmit:w[16]||(w[16]=e=>Pe())},{default:(0,d.w5)((()=>[(0,d.Wm)(Xe,{inset:""},{default:(0,d.w5)((()=>[G,(0,d.Wm)(Ke,{modelValue:ke.value,"onUpdate:modelValue":w[14]||(w[14]=e=>ke.value=e),name:"登录用户名",label:"登录用户名",placeholder:"修改登录用户名"},null,8,["modelValue"]),L,Q,R,(0,d.Wm)(Ke,{modelValue:be.value,"onUpdate:modelValue":w[15]||(w[15]=e=>be.value=e),type:"password",name:"登录密码",label:"登录密码",placeholder:"修改登录密码"},null,8,["modelValue"])])),_:1}),ee,le,(0,d._)("div",ae,[(0,d.Wm)(Fe,{round:"",block:"",color:"#0ea27e","native-type":"submit"},{default:(0,d.w5)((()=>[(0,d.Uk)(" 提交 ")])),_:1})])])),_:1}),oe])),_:1},8,["show"]),(0,d.Wm)(Le,{show:ce.value,"onUpdate:show":w[23]||(w[23]=e=>ce.value=e),title:"token信息",width:"80vw",height:"50vh","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1},{default:(0,d.w5)((()=>[(0,d._)("div",te,[(0,d.Wm)(Ge,{onSubmit:w[22]||(w[22]=e=>$e())},{default:(0,d.w5)((()=>[(0,d.Wm)(Xe,{inset:""},{default:(0,d.w5)((()=>[ne,(0,d.Wm)(Ke,{modelValue:we.value,"onUpdate:modelValue":w[18]||(w[18]=e=>we.value=e),name:"Token用户名",label:"Token用户名",placeholder:"Token用户名",rules:[{required:!0,message:"请填写Token用户名"}]},null,8,["modelValue"]),ue,(0,d.Wm)(Ke,{modelValue:fe.value,"onUpdate:modelValue":w[19]||(w[19]=e=>fe.value=e),name:"OpenAi用户名",label:"OpenAi用户名",placeholder:"OpenAi用户名",rules:[{required:!0,message:"请填写OpenAi用户名"}]},null,8,["modelValue"]),ie,(0,d.Wm)(Ke,{modelValue:_e.value,"onUpdate:modelValue":w[20]||(w[20]=e=>_e.value=e),type:"password",name:"OpenAi密码",label:"OpenAi密码",placeholder:"OpenAi密码",rules:[{required:!0,message:"请填写OpenAi密码"}]},null,8,["modelValue"]),re,(0,d.Wm)(Xe,{inset:""},{default:(0,d.w5)((()=>[(0,d.Wm)(Ke,{modelValue:ve.value,"onUpdate:modelValue":w[21]||(w[21]=e=>ve.value=e),rows:"3",label:"OpenAi的Token",type:"textarea",maxlength:"10000",placeholder:"请填写OpenAi的Token","show-word-limit":""},null,8,["modelValue"]),se])),_:1})])),_:1}),de])),_:1})])])),_:1},8,["show"])],64)}}});const ce=me;var pe=ce},1094:function(e,l,a){e.exports=a.p+"img/openAi.c25d9926.jpg"}}]);
//# sourceMappingURL=839.c7ce6561.js.map