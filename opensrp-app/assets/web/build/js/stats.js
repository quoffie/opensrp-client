google.maps.__gjsload__('stats', function(_){'use strict';var f3=function(a,b,c){var d=[];_.Fc(a,function(a,c){d.push(c+b+a)});return d.join(c)},g3=function(a,b,c,d){var e={};e.host=window.document.location&&window.document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},Bea=function(a){var b={};_.Fc(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return f3(b,":",",")},Cea=function(a,b,c,d){var e=_.R.j[23],f=_.R.j[22];this.ma=a;this.qa=
b;this.ua=null!=e?e:500;this.U=null!=f?f:2;this.W=c;this.V=d;this.R=new _.wj;this.j=0;this.S=_.Fa();h3(this)},h3=function(a){window.setTimeout(function(){Dea(a);h3(a)},Math.min(a.ua*Math.pow(a.U,a.j),2147483647))},i3=function(a,b,c){a.R.set(b,c)},Dea=function(a){var b=g3(a.qa,a.W,a.V,void 0);b.t=a.j+"-"+(_.Fa()-a.S);a.R.forEach(function(a,d){var e=a();0<e&&(b[d]=+e.toFixed(2)+(_.Bl()?"":"-if"))});a.ma.j({ev:"api_snap"},b);++a.j},j3=function(a,b,c,d,e){this.V=a;this.ma=b;this.U=c;this.R=d;this.S=e;
this.j=new _.wj;this.W=_.Fa()},k3=function(a,b,c){this.U=b;this.R=a+"/maps/gen_204";this.S=c},l3=function(){this.j=new _.wj},Eea=function(a){var b=0,c=0;a.j.forEach(function(a){b+=a.Dr;c+=a.br});return c?b/c:0},m3=function(a,b,c,d,e){this.W=a;this.ma=b;this.V=c;this.S=d;this.U=e;this.R={};this.j=[]},n3=function(a,b,c,d){this.S=a;_.I.bind(this.S,"set_at",this,this.U);_.I.bind(this.S,"insert_at",this,this.U);this.W=b;this.ma=c;this.V=d;this.R=0;this.j={};this.U()},o3=function(){this.j={}},Fea=function(){this.j=
[];this.R=[]},p3=function(a,b,c){this.j=a;this.R=b;this.S=c},Gea=function(a,b){a.j.j.push(b);var c=a.R,d=_.qb(b),c=c.j;d in c||(c[d]=0);++c[d];d=a.j;if(d.j.length+d.R.length>a.S){c=a.j;d=c.R;c=c.j;if(!d.length)for(;c.length;)d.push(c.pop());(d=d.pop())&&a.R.remove(d)}},q3=function(a,b){this.V=new p3(new Fea,new o3,100);this.R=null;this.Fa=[];this.U=a;_.I.bind(a,"insert_at",this,this.kf);_.I.bind(a,"set_at",this,this.kf);_.I.bind(a,"remove_at",this,this.kf);this.kf();this.j=0;this.va=b;this.S=0},r3=
function(){this.R=_.gf(_.R);var a;_.T[35]?(a=_.Ye(_.R).j[11],a=null!=a?a:""):a=_.Qx;this.j=new k3(a,_.Hi,window.document);new n3(_.Di,(0,_.u)(this.j.j,this.j),_.Wf,!!this.R);a=_.cf(_.mf());this.W=a.split(".")[1]||a;_.Gi&&(this.S=new Cea(this.j,this.W,this.ua,this.R));this.ma={};this.V={};this.U={};this.qa={};this.ua=_.ff()};
j3.prototype.qa=function(a,b){var c=_.sa(b)?b:1;this.j.isEmpty()&&window.setTimeout((0,_.u)(function(){var a=g3(this.ma,this.U,this.R,this.S);a.t=_.Fa()-this.W;var b=this.j;_.xj(b);for(var c={},g=0;g<b.j.length;g++){var h=b.j[g];c[h]=b.va[h]}_.rB(a,c);this.j.clear();this.V.j({ev:"api_maprft"},a)},this),500);c=this.j.get(a,0)+c;this.j.set(a,c)};
k3.prototype.j=function(a,b){var c=b||{},d=_.ok().toString(36);c.src="apiv3";c.token=this.U;c.ts=d.substr(d.length-6);a.cad=Bea(c);c=f3(a,"=","&");c=this.R+"?target=api&"+c;this.S.createElement("img").src=c;(d=_.fd.__gm_captureCSI)&&d(c)};l3.prototype.R=function(a,b,c){this.j.set(_.qb(a),{Dr:b,br:c})};m3.prototype.qa=function(a){this.R[a]||(this.R[a]=!0,this.j.push(a),2>this.j.length&&_.JB(this,this.ua,500))};
m3.prototype.ua=function(){for(var a=g3(this.ma,this.V,this.S,this.U),b=0,c;c=this.j[b];++b)a[c]="1";a.hybrid=+((_.Xk()||!_.Wk())&&_.Wk());this.j.length=0;this.W.j({ev:"api_mapft"},a)};n3.prototype.U=function(){for(var a;a=this.S.removeAt(0);){var b=a.Kq;a=a.timestamp-this.ma;++this.R;this.j[b]||(this.j[b]=0);++this.j[b];if(20<=this.R&&!(this.R%5)){var c={};c.s=b;c.sr=this.j[b];c.tr=this.R;c.te=a;c.hc=this.V?"1":"0";this.W({ev:"api_services"},c)}}};o3.prototype.remove=function(a){a=_.qb(a);var b=this.j;a in b&&(--b[a],b[a]||delete b[a])};p3.prototype.contains=function(a){return!!this.R.j[_.qb(a)]};_.v(q3,_.J);_.t=q3.prototype;_.t.kf=function(){_.G(this.Fa,_.I.removeListener);this.Fa.length=0;var a=this.Fa,b=(0,_.u)(this.Yg,this);this.U.forEach(function(c){a.push(_.I.addListener(c.data,"insert",b))});b()};
_.t.Yg=function(){var a=this.get("bounds");if(this.get("projection")&&a&&this.R){var b={};this.U.forEach((0,_.u)(function(c){c.data.forEach((0,_.u)(function(c){var d=c.rawData;if(0==(""+d.layer).indexOf(this.R.substr(0,5))&&d.features){c=d.id.length;for(var e=_.tJ(d.id),d=d.features,k=0,n;n=d[k];k++){var p=n.id,q;a:{q=n;if(!q.latLngCached){var r=q.a;if(!r){q=null;break a}var w=new _.M(r[0],r[1]),r=e,w=[w.x,w.y],x=(1<<c)/8388608;w[0]/=x;w[1]/=x;w[0]+=r.Aa;w[1]+=r.ya;w[0]/=8388608;w[1]/=8388608;r=new _.M(w[0],
w[1]);w=this.get("projection");q.latLngCached=w&&w.fromPointToLatLng(r)}q=q.latLngCached}q&&a.contains(q)&&(b[p]=n)}}},this))},this));var c=this.V,d;for(d in b)c.contains(d)||(++this.j,Gea(c,d));!this.S&&this.j&&(this.S=_.JB(this,this.Xo,0))}else _.JB(this,this.Yg,1E3)};_.t.Xo=function(){this.S=0;this.j&&(_.qm(this.va,"smni",this.j),this.j=0)};_.t.mapType_changed=function(){var a=this.get("mapType");this.R=a&&a.mg};_.t.bounds_changed=function(){this.Yg()};_.t=r3.prototype;_.t.On=function(a,b){var c=new q3(b,a);c.bindTo("mapType",a.__gm);c.bindTo("zoom",a);c.bindTo("bounds",a);c.bindTo("projection",a)};_.t.po=function(a){a=_.qb(a);this.ma[a]||(this.ma[a]=new m3(this.j,this.W,this.ua,this.R));return this.ma[a]};_.t.no=function(a){a=_.qb(a);this.V[a]||(this.V[a]=new j3(this.j,this.W,1,this.R));return this.V[a]};_.t.Df=function(a){if(this.S){this.U[a]||(this.U[a]=new _.MC,i3(this.S,a,function(){return b.Hc()}));var b=this.U[a];return b}};
_.t.lo=function(a){if(this.S){this.qa[a]||(this.qa[a]=new l3,i3(this.S,a,function(){return Eea(b)}));var b=this.qa[a];return b}};var Hea=new r3;_.qc("stats",Hea);});