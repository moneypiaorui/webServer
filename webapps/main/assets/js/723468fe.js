"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[3056],{53056:(e,t,a)=>{a.r(t),a.d(t,{usePlayStore:()=>d});var i=a(84522),n=a(10435);const g=a(74003).Pl?"":"https://web.wetab.link",l=[{name:"积木切切乐",desc:"通过滑动鼠标切碎积木块",icon:"https://static.wetab.link/hitab/play-widget/g1.png",url:g+"/games/cut/index.html",homeBgStyle:"linear-gradient(135deg, #8136A9 0%, #3A2885 100%)",playBtnBgStyle:"linear-gradient(135deg, #8B4DBA 0%, #542FB9 100%)",barBgColor:"#2A3A4A",iconShadow:"0px 32px 32px -8px rgba(17,23,41,0.6)"},{name:"小飞机",desc:"鼠标控制飞机避开障碍",icon:"https://static.wetab.link/hitab/play-widget/g5.png",url:g+"/games/aircraft/index.html",homeBgStyle:"linear-gradient(135deg, #998C7E 0%, #5E4848 100%)",playBtnBgStyle:"linear-gradient(135deg, #A39185 0%, #7F6259 100%)",barBgColor:"#4E1B20",iconShadow:"0px 32px 32px -8px rgba(83,57,38, 0.6)"},{name:"2048·军旗版",desc:"经典的拼图游戏",icon:"https://static.wetab.link/hitab/play-widget/g6.png",url:g+"/games/2048/index.html",homeBgStyle:"linear-gradient(135deg, #BAAFA3 0%, #7D6D6D 100%)",playBtnBgStyle:"linear-gradient(135deg, #D0BDAE 0%, #AB9388 100%)",barBgColor:"#A18B75",iconShadow:"0px 32px 32px -8px rgba(86,74,62,0.6)"},{name:"恐龙快跑",desc:"Chrome 浏览器彩蛋小游戏 dino",icon:"https://static.wetab.link/hitab/play-widget/g4.png",url:g+"/games/dino/index.html",homeBgStyle:"linear-gradient(135deg, #A1A1A1 0%, #787878 100%)",playBtnBgStyle:"linear-gradient(135deg, #A6A6A6 0%, #999999 100%)",barBgColor:"#232323",iconShadow:"0px 32px 32px -8px rgba(82,82,82,0.6)"},{name:"扫雷",desc:"Windows经典小游戏扫雷",icon:"https://static.wetab.link/hitab/play-widget/g2.png",url:g+"/games/minesweeper/index.html",homeBgStyle:"linear-gradient(135deg, #5651B9 0%, #3E3589 100%)",playBtnBgStyle:"linear-gradient(135deg, #5E64C6 0%, #5B4BB4 100%)",barBgColor:"#171617",iconShadow:"0px 32px 32px -8px rgba(48,31,74,0.6)"},{name:"地狱闯关",desc:"简单的闯关小游戏",icon:"https://static.wetab.link/hitab/play-widget/g3.png",url:g+"/games/ori/index.html",homeBgStyle:"linear-gradient(135deg, #5D5F6A 0%, #3B3A3A 100%)",playBtnBgStyle:"linear-gradient(135deg, #848484 0%, #595959 100%)",barBgColor:"#000000",iconShadow:"0px 32px 32px -8px rgba(29,29,29,0.6)"},{name:"3D魔方",desc:"通过鼠标操作的3D魔方小游戏",icon:"https://static.wetab.link/hitab/play-widget/g7.png",url:g+"/games/cube/index.html",homeBgStyle:"linear-gradient(135deg, #5B54AE 0%, #423B8B 100%)",playBtnBgStyle:"linear-gradient(135deg, #6D65C4 0%, #6454C5 100%)",barBgColor:"#070E17",iconShadow:"0px 32px 32px -8px rgba(47,43,92,0.60)"},{name:"网上冲浪",desc:"让我们网上冲浪吧",icon:"https://static.wetab.link/hitab/play-widget/g8.png",url:g+"/games/surf/index.html",homeBgStyle:"linear-gradient(135deg, #1A859E 0%, #1B5BA6 100%)",playBtnBgStyle:"linear-gradient(135deg, #2590D8 0%, #2388C9 100%)",barBgColor:"#1B86A3",iconShadow:"0px 32px 32px -8px rgba(28,94,146,0.6)"}],d=(0,n.Q_)(i.BU.play,{state:()=>({modalShow:!1,gameList:l,homeGameItem:l[0],selectedGame:void 0,panelStatus:1}),getters:{homeGameIndex(){return this.gameList.findIndex((e=>e.name===this.homeGameItem.name))}},actions:{setModal(e){this.modalShow=e,e||(this.selectedGame=void 0,this.panelStatus=1)},setSelectedGame(e){this.selectedGame=e},setPanelStatus(e){1===e&&(this.selectedGame=void 0),this.panelStatus=e},preGameItem(){const e=this.homeGameIndex;if(0===e)return;const t=this.gameList[e-1];this.homeGameItem=t},nextGameItem(){const e=this.homeGameIndex;if(e===this.gameList.length-1)return;const t=this.gameList[e+1];this.homeGameItem=t}}})}}]);