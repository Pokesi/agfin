(self.webpackChunkagg_fin=self.webpackChunkagg_fin||[]).push([[427,974,23],{66446:function(t,n,e){"use strict";e.r(n),e.d(n,{PhantomAdapter:function(){return k}});var r=e(15671),i=e(43144),a=e(97326),o=e(11752),c=e(61120),s=e(60136),u=e(29388),h=e(74165),l=e(15861),f=e(4942),p=e(87485),d=e(15550),v=e(62649),w=e.n(v);function Z(t,n,e){return new Promise((function(r,i){e>0?setTimeout((0,l.Z)((0,h.Z)().mark((function a(){var o;return(0,h.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t();case 2:(o=a.sent)&&r(o),o||Z(t,n,e-1).then((function(t){return r(t),t})).catch((function(t){return i(t)}));case 5:case"end":return a.stop()}}),a)}))),n):r(!1)}))}var m=function(){var t=(0,l.Z)((0,h.Z)().mark((function t(){var n,e,r=arguments;return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=r.length>0&&void 0!==r[0]?r[0]:{interval:1e3,count:3},!("undefined"!==typeof window&&!(null===(n=window.solana)||void 0===n||!n.isPhantom))){t.next=4;break}return t.abrupt("return",window.solana);case 4:return t.next=6,Z((function(){var t;return null===(t=window.solana)||void 0===t?void 0:t.isPhantom}),e.interval,e.count);case 6:if(!t.sent){t.next=9;break}return t.abrupt("return",window.solana);case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(t){(0,s.Z)(e,t);var n=(0,u.Z)(e);function e(){var t;(0,r.Z)(this,e);var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=n.call(this),(0,f.Z)((0,a.Z)(t),"name",p.rW.PHANTOM),(0,f.Z)((0,a.Z)(t),"adapterNamespace",p.yk.SOLANA),(0,f.Z)((0,a.Z)(t),"currentChainNamespace",p.EN.SOLANA),(0,f.Z)((0,a.Z)(t),"type",p.hN.EXTERNAL),(0,f.Z)((0,a.Z)(t),"status",p.MP.NOT_READY),(0,f.Z)((0,a.Z)(t),"_wallet",null),(0,f.Z)((0,a.Z)(t),"phantomProvider",null),(0,f.Z)((0,a.Z)(t),"rehydrated",!1),(0,f.Z)((0,a.Z)(t),"_onDisconnect",(function(){t._wallet&&(t._wallet.off("disconnect",t._onDisconnect),t.rehydrated=!1,t.status=t.status===p.MP.CONNECTED?p.MP.READY:p.MP.NOT_READY,t.emit(p.n2.DISCONNECTED))})),t.chainConfig=i.chainConfig||null,t}return(0,i.Z)(e,[{key:"isWalletConnected",get:function(){var t;return!(null===(t=this._wallet)||void 0===t||!t.isConnected||this.status!==p.MP.CONNECTED)}},{key:"provider",get:function(){var t;return(null===(t=this.phantomProvider)||void 0===t?void 0:t.provider)||null},set:function(t){throw new Error("Not implemented")}},{key:"setAdapterSettings",value:function(t){}},{key:"init",value:function(){var t=(0,l.Z)((0,h.Z)().mark((function t(n){return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,o.Z)((0,c.Z)(e.prototype),"checkInitializationRequirements",this).call(this),this.chainConfig||(this.chainConfig=(0,p.h2)(p.EN.SOLANA,"0x1")),t.next=4,m({interval:500,count:3});case 4:if(this._wallet=t.sent,this._wallet){t.next=7;break}throw p.Ty.notInstalled();case 7:if(this.phantomProvider=new d.PhantomInjectedProvider({config:{chainConfig:this.chainConfig}}),this.status=p.MP.READY,this.emit(p.n2.READY,p.rW.PHANTOM),t.prev=10,!n.autoConnect){t.next=15;break}return this.rehydrated=!0,t.next=15,this.connect();case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(10),w().error("Failed to connect with cached phantom provider",t.t0),this.emit("ERRORED",t.t0);case 21:case"end":return t.stop()}}),t,this,[[10,17]])})));return function(n){return t.apply(this,arguments)}}()},{key:"connect",value:function(){var t=(0,l.Z)((0,h.Z)().mark((function t(){var n,r,i=this;return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this,t.prev=1,(0,o.Z)((0,c.Z)(e.prototype),"checkConnectionRequirements",this).call(this),this.status=p.MP.CONNECTING,this.emit(p.n2.CONNECTING,{adapter:p.rW.PHANTOM}),this._wallet){t.next=7;break}throw p.Ty.notInstalled();case 7:if(this._wallet.isConnected){t.next=24;break}return r=this._wallet._handleDisconnect,t.prev=9,t.next=12,new Promise((function(t,e){var a=function(){var n=(0,l.Z)((0,h.Z)().mark((function n(){return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.connectWithProvider(i._wallet);case 2:t(i.provider);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();if(!i._wallet)return e(p.Ty.notInstalled());i._wallet.once("connect",a),i._wallet._handleDisconnect=function(){e(p.Ty.windowClosed());for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return r.apply(n._wallet,i)},i._wallet.connect().catch((function(t){e(t)}))}));case 12:t.next=19;break;case 14:if(t.prev=14,t.t0=t.catch(9),!(t.t0 instanceof p.up)){t.next=18;break}throw t.t0;case 18:throw p.RM.connectionError(null===t.t0||void 0===t.t0?void 0:t.t0.message);case 19:return t.prev=19,this._wallet._handleDisconnect=r,t.finish(19);case 22:t.next=26;break;case 24:return t.next=26,this.connectWithProvider(this._wallet);case 26:if(this._wallet.publicKey){t.next=28;break}throw p.RM.connectionError();case 28:return this._wallet.on("disconnect",this._onDisconnect),t.abrupt("return",this.provider);case 32:throw t.prev=32,t.t1=t.catch(1),this.status=p.MP.READY,this.rehydrated=!1,this.emit(p.n2.ERRORED,t.t1),t.t1;case 38:case"end":return t.stop()}}),t,this,[[1,32],[9,14,19,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=(0,l.Z)((0,h.Z)().mark((function t(){var n,e,r=arguments;return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.length>0&&void 0!==r[0]?r[0]:{cleanup:!1},this.isWalletConnected){t.next=3;break}throw p.RM.notConnectedError("Not connected with wallet");case 3:return t.prev=3,t.next=6,null===(e=this._wallet)||void 0===e?void 0:e.disconnect();case 6:n.cleanup&&(this.status=p.MP.NOT_READY,this.phantomProvider=null,this._wallet=null),this.emit(p.n2.DISCONNECTED),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),this.emit(p.n2.ERRORED,p.RM.disconnectionError(null===t.t0||void 0===t.t0?void 0:t.t0.message));case 13:case"end":return t.stop()}}),t,this,[[3,10]])})));return function(){return t.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var t=(0,l.Z)((0,h.Z)().mark((function t(){return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isWalletConnected){t.next=2;break}throw p.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connectWithProvider",value:function(){var t=(0,l.Z)((0,h.Z)().mark((function t(n){return(0,h.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.phantomProvider){t.next=2;break}throw p.RM.connectionError("No phantom provider");case 2:return t.next=4,this.phantomProvider.setupProvider(n);case 4:return this.status=p.MP.CONNECTED,this.emit(p.n2.CONNECTED,{adapter:p.rW.PHANTOM,reconnected:this.rehydrated}),t.abrupt("return",this.provider);case 7:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()}]),e}(p.J5)},11922:function(){},22399:function(){},64123:function(){},78848:function(){},71456:function(){}}]);