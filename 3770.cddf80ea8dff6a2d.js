(self.webpackChunkspear=self.webpackChunkspear||[]).push([[3770],{73770:(ve,p,t)=>{t.r(p),t.d(p,{MAT_STEPPER_PROXY_FACTORY:()=>M,MaterialModule:()=>ce,ResponsiveStepperComponent:()=>y});var v=t(78069),g=t(48047),h=t(35603),u=t(94055),e=t(56718),R=t(908),z=t(51372),I=t(18142),_=t(93168),m=t(70561),O=t(33730),P=t(67726),D=t(52090),A=t(15455),w=t(1621),T=t(72049),B=t(75101),j=t(53598),V=t(53726),L=t(80584),d=t(7054),F=t(40810),E=t(5311),k=t(97040),N=t(38369),W=t(12219),Y=t(28972),Q=t(26073),Z=t(9263),H=t(75376),S=t(6606),X=t(41858),G=t(56388),K=t(36070),U=t(44039),J=t(80565),b=t(55198),$=t(92081),q=t(4856),ee=t(8312),te=t(43516),ne=t(21669),re=t(28413),ae=t(3620),oe=t(67223),ie=t(89402),se=t(43068);t(35333);var le=function(){var o=(0,g.Z)(function a(){(0,v.Z)(this,a)});return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({}),o}();function de(o,a){if(1&o){var n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"mat-horizontal-stepper",3),e.\u0275\u0275listener("animationDone",function(s){e.\u0275\u0275restoreView(n);var l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.animationDone.emit(s))})("selectionChange",function(s){e.\u0275\u0275restoreView(n);var l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.selectionChange.emit(s))}),e.\u0275\u0275elementEnd()}if(2&o){var r=e.\u0275\u0275nextContext();e.\u0275\u0275property("labelPosition",r.labelPosition)("linear",r.linear)("selected",r.selected)("selectedIndex",r.selectedIndex)}}function fe(o,a){if(1&o){var n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"mat-vertical-stepper",4),e.\u0275\u0275listener("animationDone",function(s){e.\u0275\u0275restoreView(n);var l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.animationDone.emit(s))})("selectionChange",function(s){e.\u0275\u0275restoreView(n);var l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.selectionChange.emit(s))}),e.\u0275\u0275elementEnd()}if(2&o){var r=e.\u0275\u0275nextContext();e.\u0275\u0275property("linear",r.linear)("selected",r.selected)("selectedIndex",r.selectedIndex)}}var C={provide:d.MatStepper,deps:[(0,e.forwardRef)(function(){return y}),[new e.Optional,se.Directionality],e.ChangeDetectorRef,[new e.Inject(u.DOCUMENT)]],useFactory:M},ue=(0,h.Z)((0,h.Z)({},C),{},{provide:m.CdkStepper});function M(o,a,n,r){var i=new e.ElementRef(r.createElement("mat-horizontal-stepper")),s=new d.MatStepper(a,n,i);return new Proxy(s,{get:function(f,c){return Reflect.get(o.stepper||f,c)},set:function(f,c,x){return Reflect.set(o.stepper||f,c,x)}})}var y=function(){var o=function(){function a(){(0,v.Z)(this,a),this.animationDone=new e.EventEmitter,this.selectionChange=new e.EventEmitter,this.orientationChange=new e.EventEmitter,this.needsFocus=!1,this.htmlSteps=[]}return(0,g.Z)(a,[{key:"stepper",get:function(){return this.stepperList&&this.stepperList.first}},{key:"ngAfterViewInit",value:function(){var r=this;this.reset(),this.stepperList.changes.subscribe(function(){return r.reset()}),this.selectionChange.subscribe(function(i){return r.lastSelectedIndex=i.selectedIndex}),this.syncHTMLSteps(),setTimeout(function(){return r.stepper.selectedIndex=r.selectedIndex},400)}},{key:"ngAfterViewChecked",value:function(){if(this.needsFocus){this.needsFocus=!1;var r=this.stepper,s=r._keyManager,l=r.selectedIndex;r._elementRef.nativeElement.focus(),s.setActiveItem(l)}}},{key:"isHorizontal",get:function(){return"horizontal"===this.orientation}},{key:"isVertical",get:function(){return"vertical"===this.orientation}},{key:"next",value:function(){this.stepper.next()}},{key:"previous",value:function(){this.stepper.previous()}},{key:"updateStepState",value:function(r,i){this.htmlSteps.length>0&&(this.htmlSteps[r-1].style.pointerEvents=i?"":"none")}},{key:"syncHTMLSteps",value:function(){this.htmlSteps=[];var r=1,i=document.querySelector(".mat-stepper-vertical");i||(r=2,i=document.querySelector(".mat-horizontal-stepper-header-container"));for(var s=0;s<i.children.length;s+=r)this.htmlSteps.push(i.children[s])}},{key:"reset",value:function(){var r=this;setTimeout(function(){return r.syncHTMLSteps()},100);var i=this.stepper,l=this.lastSelectedIndex;i.steps.reset(this.steps.toArray()),i.steps.notifyOnChanges(),l&&(i.selectedIndex=l,setTimeout(function(){return r.orientationChange.emit(r.orientation)},101))}}]),a}();return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["responsive-stepper"]],contentQueries:function(n,r,i){var s;1&n&&e.\u0275\u0275contentQuery(i,d.MatStep,4),2&n&&e.\u0275\u0275queryRefresh(s=e.\u0275\u0275loadQuery())&&(r.steps=s)},viewQuery:function(n,r){var i;1&n&&e.\u0275\u0275viewQuery(d.MatStepper,5),2&n&&e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(r.stepperList=i)},inputs:{labelPosition:"labelPosition",linear:"linear",orientation:"orientation",selected:"selected",selectedIndex:"selectedIndex"},outputs:{animationDone:"animationDone",selectionChange:"selectionChange",orientationChange:"orientationChange"},features:[e.\u0275\u0275ProvidersFeature([C,ue])],decls:3,vars:2,consts:[[3,"ngSwitch"],[3,"labelPosition","linear","selected","selectedIndex","animationDone","selectionChange",4,"ngSwitchDefault"],[3,"linear","selected","selectedIndex","animationDone","selectionChange",4,"ngSwitchCase"],[3,"labelPosition","linear","selected","selectedIndex","animationDone","selectionChange"],[3,"linear","selected","selectedIndex","animationDone","selectionChange"]],template:function(n,r){1&n&&(e.\u0275\u0275elementContainerStart(0,0),e.\u0275\u0275template(1,de,1,4,"mat-horizontal-stepper",1),e.\u0275\u0275template(2,fe,1,3,"mat-vertical-stepper",2),e.\u0275\u0275elementContainerEnd()),2&n&&(e.\u0275\u0275property("ngSwitch",r.orientation),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngSwitchCase","vertical"))},dependencies:[u.NgSwitch,u.NgSwitchCase,u.NgSwitchDefault,d.MatStepper],encapsulation:2,changeDetection:0}),o}(),ce=function(){var o=(0,g.Z)(function a(){(0,v.Z)(this,a)});return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[u.CommonModule,m.CdkStepperModule,d.MatStepperModule,R.A11yModule,m.CdkStepperModule,O.CdkTableModule,P.CdkTreeModule,z.DragDropModule,D.MatLegacyAutocompleteModule,A.MatBadgeModule,w.MatBottomSheetModule,T.MatLegacyButtonModule,B.MatButtonToggleModule,j.MatLegacyCardModule,V.MatLegacyCheckboxModule,L.MatLegacyChipsModule,d.MatStepperModule,F.MatDatepickerModule,E.MatLegacyDialogModule,k.MatDividerModule,N.MatExpansionModule,W.MatGridListModule,Y.MatIconModule,Q.MatLegacyInputModule,Z.MatLegacyListModule,H.MatLegacyMenuModule,S.MatNativeDateModule,X.MatLegacyPaginatorModule,G.MatLegacyProgressBarModule,K.MatLegacyProgressSpinnerModule,U.MatLegacyRadioModule,S.MatRippleModule,J.MatLegacySelectModule,b.MatSidenavModule,$.MatLegacySliderModule,q.MatLegacySlideToggleModule,ee.MatLegacySnackBarModule,te.MatSortModule,ne.MatLegacyTableModule,re.MatLegacyTabsModule,ae.MatToolbarModule,oe.MatLegacyTooltipModule,ie.MatTreeModule,I.PortalModule,_.ScrollingModule,le]}),o}()}}]);
//# sourceMappingURL=3770.cddf80ea8dff6a2d.js.map