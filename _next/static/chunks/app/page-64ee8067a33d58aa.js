(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3566:function(e,n,t){Promise.resolve().then(t.bind(t,6839))},6839:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var i=t(7090),o=t(3882),s=t(7486),r=t(6246),l=t(8979),c=function(e,n,t,i){let o;let r=l=>{o||(o=l);let c=Math.min((l-o)/t,1),a=new s.Pa4().lerpVectors(e,n,c);i.object.position.copy(a),c<1&&requestAnimationFrame(r)};requestAnimationFrame(r)},a=function(){let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let n=e.current;if(!n)return;let t=new s.xsS;t.background=new s.Ilk("black");let i=new s.CP7({canvas:n});i.setSize(n.clientWidth,n.clientHeight);let o=new s.cPb(30,1);o.position.set(0,1,3);let a=new s.Ox3("purple",10),d=new s.Ox3("purple",10),w=new s.Ox3("white",5),u=new s.Ox3("white",5);u.position.set(0,20,0),w.position.set(0,-20,0),a.position.set(-10,-20,5),d.position.set(10,-20,5),t.add(w),t.add(u),t.add(a),t.add(d);let p=new r.z(o,n);p.enableDamping=!0,p.dampingFactor=.2;let m=new l.E,f=()=>{m.load("blog/genie/scene.gltf",e=>{e.scene.scale.set(1.5,1.5,1.5),e.scene.position.set(0,1.9,0),e.scene.rotation.set(1.2,0,0),t.add(e.scene)})};m.load("blog/lamp/scene.gltf",e=>{t.add(e.scene);let n=()=>{p.update(),i.render(t,o),requestAnimationFrame(n)};n()});let h=()=>{let e=window.innerWidth,n=window.innerHeight;i.setSize(e,n),o.aspect=e/n,o.updateProjectionMatrix()},b=()=>{c(p.object.position.clone(),new s.Pa4(0,-6,3),2e3,p)},g=e=>{let n=new s.FM8(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight*2)+1),i=new s.iMs;i.setFromCamera(n,o);let r=i.intersectObjects(t.children,!0);r.length>0&&"LampBottom_0"===r[0].object.name&&(f(),b())};return window.addEventListener("click",g),window.addEventListener("resize",h),h(),()=>{window.removeEventListener("click",g),window.removeEventListener("resize",h)}},[]),(0,i.jsx)("canvas",{ref:e,className:"w-full h-screen"})}}},function(e){e.O(0,[116,894,546,538,744],function(){return e(e.s=3566)}),_N_E=e.O()}]);