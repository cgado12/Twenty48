(this.webpackJsonptwenty48=this.webpackJsonptwenty48||[]).push([[0],{23:function(e,t,r){},24:function(e,t,r){},25:function(e,t,r){},29:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},34:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var o,a,c=r(1),n=r.n(c),i=r(10),s=r.n(i),d=(r(23),r(2)),u=r(3),l=r.p+"static/media/logo.6ce24c58.svg",b=(r(24),r(25),r(14)),v=r(4),h=function(){return new f},f=function e(){var t=this;Object(v.a)(this,e),this.id=void 0,this.value=void 0,this.curRow=void 0,this.curCol=void 0,this.prevRow=void 0,this.prevCol=void 0,this.combined=void 0,this.new=void 0,this.attr=void 0,this.clear=function(){return t.value=0,t.curRow=-1,t.curCol=-1,t.prevRow=-1,t.prevCol=-1,t.new=!0,t},this.reset=function(e,r){return t.prevCol=r,t.prevRow=e,t.curRow=e,t.curCol=r,t.new=!1,t.combined=!1,t},this.setCurrentPosition=function(e,r){return t.curRow=e,t.curCol=r,t},this.notNew=function(){return t.new=!1,t},this.setNew=function(){return t.new=!0,t},this.id=Math.random(),this.value=0,this.curRow=-1,this.curCol=-1,this.prevRow=-1,this.prevCol=-1,this.combined=!1,this.new=!1,this.attr=""},j="bestScore",m=[[h(),h(),h(),h()],[h(),h(),h(),h()],[h(),h(),h(),h()],[h(),h(),h(),h()]],O=[2,4,2,2,2,4,2,2,2,2,2,4,2,2,2,2,2,2],w=O.length,p="theme";!function(e){e.DARK="dark",e.LIGHT="light"}(o||(o={})),function(e){e.TWO="two",e.FOUR="four",e.EIGHT="eight",e.SIXTEEN="sixteen",e.THIRYTWO="thirty-two",e.SIXTYFOUR="sixty-four",e.ONETWENTYEIGHT="one-twenty-eight",e.TWOFIFTYSIX="two-fifty-six",e.FIVETWELVE="five-twelve",e.TENTWENTYFOUR="ten-twenty-four",e.TWENTYFORTYEIGHT="twenty-fourty-eight"}(a||(a={}));var g=function(e){return e.map((function(e){return e.reverse()}))},T=function(e){for(var t=Object(b.cloneDeep)(m),r=0;r<4;r++)for(var o=0;o<4;o++)t[r][o]=e[o][r];return t},x=r(5),N=Object(x.b)({key:"theme",default:localStorage.getItem(p)===o.LIGHT?o.LIGHT:o.DARK}),E=(r(29),r(30),r(31),r(32),r(0)),I=function(e){var t=e.tile,r=Object(x.d)(N),o=function(e){switch(e){case 0:return"";case 2:return a.TWO;case 4:return a.FOUR;case 8:return a.EIGHT;case 16:return a.SIXTEEN;case 32:return a.THIRYTWO;case 64:return a.SIXTYFOUR;case 128:return a.ONETWENTYEIGHT;case 256:return a.TWOFIFTYSIX;case 512:return a.FIVETWELVE;case 1024:return a.TENTWENTYFOUR;case 2048:default:return a.TWENTYFORTYEIGHT}}(t.value),c=0!==t.value&&t.new?"new":"",n=t.combined?"combined":"";return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{id:"".concat(o?"".concat(o,"-").concat(r):"board-tile"),className:"board-tile board-tile-".concat(r," ").concat(c," ").concat(n," ").concat(t.attr," "),children:Object(E.jsx)("div",{className:"board-value ",children:0!==t.value?t.value:""})},"".concat(t.id))})},S=function(e){var t,r=e.gameboard,o=e.startGame,a=e.updateScore,n=e.setGameboard,i=Object(x.d)(N),s=function(e){switch("KeyR"!==e.code&&e.preventDefault(),e.code){case"ArrowLeft":n(Object(d.a)({},r.move("left")));break;case"ArrowUp":n(Object(d.a)({},r.move("up")));break;case"ArrowRight":n(Object(d.a)({},r.move("right")));break;case"ArrowDown":n(Object(d.a)({},r.move("down")))}};return Object(c.useEffect)((function(){return!0===o&&document.addEventListener("keydown",s),function(){document.removeEventListener("keydown",s)}}),[o]),Object(c.useEffect)((function(){var e=r.board;0!==r.score&&a(r.score),function(e){for(var t=0;t<4;t++)for(var r=0;r<4;r++){if(0===e[t][r].value)return!1;if(3!==t&&e[t][r].value===e[t+1][r].value)return!1;if(3!==r&&e[t][r].value===e[t][r+1].value)return!1;if(0!==t&&e[t][r].value===e[t-1][r].value)return!1;if(0!==r&&e[t][r].value===e[t][r-1].value)return!1}return!0}(e)&&alert("Game over"),function(e){for(var t=0;t<4;t++)for(var r=0;r<4;r++)if(2048===e[t][r].value)return!0;return!1}(e)&&alert("You won!")}),[r,r.board,r.score]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"gameboard-board gameboard-board-".concat(i),children:null===r||void 0===r||null===(t=r.board)||void 0===t?void 0:t.map((function(e,t){return Object(E.jsx)("div",{className:"gameboard-board-row",children:e.map((function(e,r){return Object(E.jsx)("div",{className:"underlay underlay-".concat(i),children:Object(E.jsx)(I,{tile:e,rowPos:t,colPos:r})},"".concat(r,"-").concat(Math.random()))}))},"".concat(t,"-").concat(Math.random()))}))}),Object(E.jsx)("p",{children:Object(E.jsx)("i",{children:"Use the arrow keys to combine tiles and get to 2048!"})})]})},y=(r(34),function(e){var t=e.scores,r=e.startGame,o=e.handleStartGame,a=e.removeBestScore,c=Object(x.d)(N);return Object(E.jsxs)("div",{className:"gameboard-header",children:[Object(E.jsxs)("div",{className:"gameboard-header-c1 gameboard-header-c1-".concat(c),children:[Object(E.jsx)("h1",{children:"Twenty"}),Object(E.jsx)("h1",{children:"Forty"}),Object(E.jsx)("h1",{children:"Eight"})]}),Object(E.jsxs)("div",{className:"gameboard-header-c2",children:[Object(E.jsxs)("div",{className:"score score-".concat(c),children:[Object(E.jsx)("h4",{children:" Score "}),Object(E.jsx)("h2",{children:t.score})]}),Object(E.jsx)("div",{className:"new-game new-game-".concat(c),onClick:o,children:Object(E.jsx)("span",{className:"span-".concat(c),children:r?"Restart":"New Game"})})]}),Object(E.jsxs)("div",{className:"gameboard-header-c3",children:[Object(E.jsxs)("div",{className:"best-score best-score-".concat(c),children:[Object(E.jsx)("h4",{children:" Best Score"}),Object(E.jsx)("h2",{children:t.bestScore})]}),Object(E.jsx)("div",{className:"clear clear-".concat(c),onClick:a,children:Object(E.jsx)("span",{className:"span-".concat(c),children:"Clear"})})]})]})}),R={score:0,bestScore:"0"},C=r(8),k=function e(){var t=this;Object(v.a)(this,e),this.board=void 0,this.prevBoard=void 0,this.score=void 0,this.win=void 0,this.lose=void 0,this.started=void 0,this.moved=void 0,this.isMoving=void 0,this.addNewValue=function(){var e=Math.floor(Math.random()*w),r=Math.floor(4*Math.random()),o=Math.floor(4*Math.random());0===t.board[r][o].value?(t.board[r][o].value=O[e],t.board[r][o].setNew()):t.addNewValue()},this.init=function(){return t.started=!0,t.addNewValue(),t},this.clear=function(){return t.board=t.board.map((function(e){return e.map((function(){return new f}))})),t.score=0,t.win=!1,t.lose=!1,t.init()},this.operate=function(e){return e=t.slide(e),e=t.combine(e),e=t.slide(e)},this.slide=function(e){var t=e.filter((function(e){return e.value})),r=4-t.length,o=Array(r).fill(0);return t=(o=o.map((function(){return new f}))).concat(t)},this.combine=function(e){for(var r=3;r>=1;r--){var o=e[r].value,a=e[r-1].value;o===a&&(e[r].value=o+a,e[r].combined=!0,t.score+=e[r].value,e[r-1].value=0)}return e},this.move=function(e){t.prevBoard=Object(b.cloneDeep)(t.board);for(var r=!1,o=!1,a=!0,c=0;c<4;c++)for(var n=0;n<4;n++)t.board[c][n].reset(c,n);switch(e){case"up":t.board=T(t.board),t.board=g(t.board),o=!0,r=!0;break;case"down":t.board=T(t.board),o=!0;break;case"left":t.board=g(t.board),r=!0;break;case"right":break;default:a=!1}if(a){for(var i=0;i<4;i++)t.board[i]=t.operate(t.board[i]);r&&(t.board=g(t.board)),o&&(t.board=T(t.board))}for(var s=0;s<4;s++)for(var d=0;d<4;d++)t.board[s][d].setCurrentPosition(s,d);for(var u=0;u<4;u++)for(var l=0;l<4;l++)if(t.board[u][l].value)switch(e){case"up":t.board[u][l].attr="ver-u-".concat(t.board[u][l].prevRow-t.board[u][l].curRow," overlay");break;case"down":t.board[u][l].attr="ver-d-".concat(t.board[u][l].curRow-t.board[u][l].prevRow," overlay");break;case"left":t.board[u][l].attr="hor-l-".concat(t.board[u][l].prevCol-t.board[u][l].curCol," overlay");break;default:t.board[u][l].attr="hor-r-".concat(t.board[u][l].curCol-t.board[u][l].prevCol," overlay")}return function(e,t){for(var r=0;r<4;r++)for(var o=0;o<4;o++)if(e[r][o].value!==t[r][o].value)return!0;return!1}(t.board,t.prevBoard)&&(t.addNewValue(),t.isMoving=!0),t},this.board=Object(C.a)(m),this.prevBoard=Object(C.a)(m),this.score=0,this.win=!1,this.lose=!1,this.started=!1,this.moved="noop",this.isMoving=!1},G=r(18),F=r.n(G),H=r(17),L=function(){var e=Object(x.c)(N),t=Object(u.a)(e,2),r=t[0],a=t[1],n=Object(c.useState)(new k),i=Object(u.a)(n,2),s=i[0],b=i[1],v=Object(c.useState)(!1),h=Object(u.a)(v,2),f=h[0],m=h[1],O=Object(c.useState)((function(){var e=localStorage.getItem(j);return Object(d.a)(Object(d.a)({},R),{},{bestScore:e||R.bestScore})})),w=Object(u.a)(O,2),g=w[0],T=w[1];Object(c.useEffect)((function(){var e=function(){var e=document.getElementById("board-tile"),t=null===e||void 0===e?void 0:e.offsetWidth;t&&document.documentElement.style.setProperty("--tile-size","".concat(t,"px"))};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),Object(c.useEffect)((function(){localStorage.setItem(p,r)}),[r]),f&&!(null===s||void 0===s?void 0:s.started)&&b(s.init());var I=function(e){if(e>parseInt(g.bestScore))return localStorage.setItem(j,e.toString()),void T({score:e,bestScore:e.toString()});T(Object(d.a)(Object(d.a)({},g),{},{score:e}))};return Object(E.jsxs)("div",{className:"App App-".concat(r),children:[Object(E.jsxs)("div",{children:[Object(E.jsx)(F.a,{offHandleColor:"#7e7e7e",onHandleColor:"#fee8f5",onColor:"#9e9491",offColor:"#423d33",uncheckedIcon:Object(E.jsx)(H.a,{size:"22px",className:"switch-icon"}),checkedIcon:Object(E.jsx)(H.b,{size:"22px",className:"switch-icon"}),className:"switch",onChange:function(){a(r===o.LIGHT?o.DARK:o.LIGHT)},checked:r===o.LIGHT}),Object(E.jsx)("img",{src:l,className:"App-logo",alt:"logo"})]}),Object(E.jsx)("div",{className:"content-area",children:Object(E.jsxs)("div",{className:"gameboard",children:[Object(E.jsx)(y,{scores:g,startGame:f,handleStartGame:function(){if(f)return b(Object(d.a)({},s.clear())),void I(0);m(!0)},removeBestScore:function(){window.confirm("This will REMOVE your high-score, are you sure you'd like to continue?")&&(localStorage.clear(),T(Object(d.a)(Object(d.a)({},R),{},{score:g.score})))}}),Object(E.jsx)(S,{gameboard:s,setGameboard:b,startGame:f,updateScore:I}),Object(E.jsx)("h5",{children:"Version: 0.1.0"})]})})]})},W=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,37)).then((function(t){var r=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;r(e),o(e),a(e),c(e),n(e)}))};s.a.render(Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(x.a,{children:Object(E.jsx)(L,{})})}),document.getElementById("root")),W()}},[[36,1,2]]]);
//# sourceMappingURL=main.9e4f50f5.chunk.js.map