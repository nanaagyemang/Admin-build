"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[158],{4790:(x,m,t)=>{t.d(m,{h:()=>C});var c=t(8645),e=t(9468),q=t(95),U=t(9263),d=t(8099);let h=(()=>{class n{static#o=this.\u0275fac=function(l){return new(l||n)};static#e=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-details"]],decls:7,vars:1,consts:[["mat-dialog-content","",1,"col","dialog"],[1,"cent"],["src","assets/checked.png",1,"img"],["mat-dialog-actions","",1,"action"],["type","button",1,"btn","btn-success","btn-modern",3,"mat-dialog-close"]],template:function(l,p){1&l&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e._uU(3," Thank you for shopping with us. We are pleased to confirm that we have received your order [Order Number], placed on [Order Date]. Your business is greatly appreciated, and we are committed to processing your order with the utmost efficiency. "),e.qZA(),e.TgZ(4,"div",3)(5,"button",4),e._uU(6," Confirm "),e.qZA()()),2&l&&(e.xp6(5),e.Q6J("mat-dialog-close",!1))},dependencies:[d.ZT,d.xY,d.H8],styles:[".dialog[_ngcontent-%COMP%]{margin-left:20%;width:500px;padding:30px;font-size:20px;background-color:#00f}.img[_ngcontent-%COMP%]{height:70px;width:70px;margin-bottom:10px}.cent[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.btn[_ngcontent-%COMP%]{margin:auto auto 10px}"]})}return n})(),T=(()=>{class n{constructor(r){this.dialog=r}openDetails(r){return this.dialog.open(h,{panelClass:"transparent",disableClose:!1,data:r})}static#o=this.\u0275fac=function(l){return new(l||n)(e.LFG(d.uw))};static#e=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var o=t(6814),_=t(157),g=t(2934),i=t(627),v=t(3461);function f(n,A){1&n&&e._UZ(0,"app-loader2")}const y=function(){return["/buttons/dropdowns"]};function b(n,A){if(1&n&&(e.TgZ(0,"tr")(1,"td")(2,"button",8),e._UZ(3,"i",9),e.qZA()(),e.TgZ(4,"td",10),e._uU(5,"Mark"),e.qZA(),e.TgZ(6,"td",10),e._uU(7),e.qZA(),e.TgZ(8,"td",10),e._uU(9),e.qZA(),e.TgZ(10,"td",10),e._uU(11,"6th July,2022"),e.qZA(),e.TgZ(12,"td",10)(13,"span",11),e._uU(14,"Verified"),e.qZA()(),e.TgZ(15,"td",10)(16,"button",12),e._uU(17,"Edit"),e.qZA(),e.TgZ(18,"button",13),e._uU(19,"Remove"),e.qZA()()()),2&n){const r=A.$implicit;e.xp6(2),e.Q6J("routerLink",e.DdM(3,y)),e.xp6(5),e.Oqu(r.employer_email),e.xp6(2),e.Oqu(r.mobile_phone)}}let C=(()=>{class n{constructor(r,l,p){this.formBuilder=r,this.service=l,this.dialog=p,this.dtOptions={},this.dtTrigger=new c.x,this.isLoading=!1}ngOnInit(){this.dtOptions={pagingType:"full_numbers",lengthChange:!0,searching:!0,language:{emptyTable:"Showing all the lists of reps"},info:!1},this.isLoading=!0,this.service.getReps().subscribe(r=>{this.data=r,this.isLoading=!1,this.dtTrigger.next(null),console.log(r)})}viewDetails(r){this.dialog.openDetails(r)}static#o=this.\u0275fac=function(l){return new(l||n)(e.Y36(q.QS),e.Y36(U.t),e.Y36(T))};static#e=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-button-groups"]],decls:30,vars:4,consts:[[1,"mb-4"],[1,"center"],[4,"ngIf"],["cTable","","hover",""],["datatable","",1,"row-border","hover",3,"dtOptions","dtTrigger"],["scope","col",1,"text-center"],["scope","col",1,"ctrl","text-center"],[4,"ngFor","ngForOf"],[1,"btn","btn-danger",3,"routerLink"],[1,"ti","ti-eye","text-white"],[1,"text-center"],[1,"badge","text-bg-success","text-white","font"],["cButton","","color","warning",1,"text-white"],["cButton","","color","danger",1,"mit","text-white"]],template:function(l,p){1&l&&(e.TgZ(0,"c-card",0)(1,"c-card-header")(2,"strong"),e._uU(3,"Representatives"),e.qZA()(),e.TgZ(4,"c-card-body")(5,"div",1),e.YNc(6,f,1,0,"app-loader2",2),e.qZA(),e.TgZ(7,"table",3)(8,"thead"),e._UZ(9,"tr"),e.qZA(),e._UZ(10,"tbody"),e.qZA(),e.TgZ(11,"table",4)(12,"thead")(13,"tr")(14,"th",5),e._uU(15,"View"),e.qZA(),e.TgZ(16,"th",5),e._uU(17,"Representatives"),e.qZA(),e.TgZ(18,"th",5),e._uU(19,"Email"),e.qZA(),e.TgZ(20,"th",5),e._uU(21,"Phone"),e.qZA(),e.TgZ(22,"th",5),e._uU(23,"Joining Date"),e.qZA(),e.TgZ(24,"th",5),e._uU(25,"Verification Status"),e.qZA(),e.TgZ(26,"th",6),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,b,20,4,"tr",7),e.qZA()()()()),2&l&&(e.xp6(6),e.Q6J("ngIf",p.isLoading),e.xp6(5),e.Q6J("dtOptions",p.dtOptions)("dtTrigger",p.dtTrigger),e.xp6(18),e.Q6J("ngForOf",p.data))},dependencies:[o.sg,o.O5,_.rH,g.Hq3,g.AkF,g.yue,g.nkx,g.auY,i.G,v.e],styles:[".ctrl[_ngcontent-%COMP%]{width:200px}.mit[_ngcontent-%COMP%]{margin-left:5px}.font[_ngcontent-%COMP%]{font-size:.9rem}"]})}return n})()},2158:(x,m,t)=>{t.r(m),t.d(m,{ButtonsModule:()=>S});var c=t(6814),e=t(95),q=t(8099),U=t(2328),d=t(157),h=t(3519),T=t.n(h),o=t(9468),_=t(9862),g=t(1839),i=t(2934),v=t(1905);function f(a,M){1&a&&o._UZ(0,"app-loader")}const n=[{path:"",data:{title:"Buttons"},children:[{path:"",pathMatch:"full",redirectTo:"buttons"},{path:"buttons",component:(()=>{class a{constructor(Z,u,s){this.http=Z,this.fb=u,this.loader=s,this.onfocus="(this.type='date')",this.form=this.fb.group({user_type:["REP",e.kI.required],name:["",e.kI.required],email:["",e.kI.required],title:["",e.kI.required],id_card:[null,e.kI.required],address_line_1:["",e.kI.required],address_line_2:["",e.kI.required],country:["",e.kI.required],home_phone:["",e.kI.required],mobile_phone:["",e.kI.required],work_phone:["",e.kI.required],employed:["",e.kI.required],employer:["",e.kI.required],employer_address:["",e.kI.required],employer_email:["",e.kI.required],employer_phone:["",e.kI.required],gender:[""],country_com:[""]})}ngOnInit(){this.loader.stopLoading()}onSend(){const Z=this.form.value;console.log(Z),this.loader.startLoading(),this.http.post("https://www.tradepayafrica.com/api/v1/auth/register/",Z).subscribe(u=>{T().fire({title:"Registered Successfully",icon:"success",text:"You are now a rep",position:"center",showConfirmButton:!0}),this.loader.stopLoading()},u=>{console.log(u),T().fire({title:"Registration Failed",icon:"error",text:u.error.message}),this.loader.stopLoading()})}static#o=this.\u0275fac=function(u){return new(u||a)(o.Y36(_.eN),o.Y36(e.qu),o.Y36(g.D))};static#e=this.\u0275cmp=o.Xpm({type:a,selectors:[["app-buttons"]],decls:482,vars:2,consts:[[1,"col"],[1,"contact-form","custom-form-style-1",3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group","col-md-2","mb-3"],[1,"custom-select-1","custom-select-1-arrow-position"],["formControlName","title",1,"form-select","form-control"],["value",""],["value","Mr"],["value","Ms"],["value","Mrs"],[1,"form-group","col-md-8","mb-3"],["type","text","value","","maxlength","100","formControlName","name","id","compName","required","","placeholder","Enter full name",1,"form-control"],[1,"form-check","form-check-inline"],["type","radio","name","gender","id","inlineRadio1","value","Male","formControlName","gender",1,""],["for","inlineRadio1",1,"form-check-label"],["type","radio","name","gender","id","inlineRadio2","value","Female","formControlName","gender",1,""],["for","inlineRadio2",1,"form-check-label"],[1,"form-group","col-md-4","mb-3"],["name","marital_status","data-msg-required","Please select marital status.","required","",1,"form-select","form-control"],["value","Marital Status"],["value","single"],["value","married"],["value","divorced"],[1,"form-group","col-md-4"],["type","text","value","","data-msg-required","Please select date of birth.","maxlength","100","placeholder","Select date of birth","onfocus","(this.type='date')","required","","placeholder","Date of Birth",1,"form-control","custom-datepicker"],["name","birth_country","data-msg-required","Please select country of birth",1,"form-select","form-control"],["value","Country of Birth"],["value","DZ"],["value","AO"],["value","BJ"],["value","BW"],["value","BF"],["value","BI"],["value","CM"],["value","CV"],["value","CF"],["value","TD"],["value","KM"],["value","CG"],["value","CD"],["value","CI"],["value","DJ"],["value","EG"],["value","GQ"],["value","ER"],["value","ET"],["value","GA"],["value","GM"],["value","GH"],["value","GN"],["value","GW"],["value","KE"],["value","LS"],["value","LR"],["value","LY"],["value","MG"],["value","MW"],["value","ML"],["value","MR"],["value","MU"],["value","YT"],["value","MA"],["value","MZ"],["value","NA"],["value","NE"],["value","NG"],["value","RE"],["value","RW"],["value","SH"],["value","ST"],["value","SN"],["value","SC"],["value","SL"],["value","SO"],["value","ZA"],["value","SS"],["value","SD"],["value","SZ"],["value","TZ"],["value","TG"],["value","TN"],["value","UG"],["value","EH"],["value","ZM"],["value","ZW"],["type","text","value","","data-msg-required","Please enter your place of birth.","maxlength","100","required","","placeholder","Place of Birth",1,"form-control"],["type","text","value","","data-msg-required","Please enter your first nationality.","maxlength","100","name","nationality","id","nationality","required","","placeholder","First Nationality",1,"form-control"],["type","text","value","","maxlength","100","name","nationality2","id","nationality2","placeholder","Second Nationality",1,"form-control"],["type","text","value","","data-msg-required","Please enter your address.","maxlength","100","name","address","id","address","required","","placeholder","Address Line 1","formControlName","address_line_1",1,"form-control"],["type","text","value","","maxlength","300","name","address2","id","address2","required","","formControlName","address_line_2","placeholder","Address Line 2",1,"form-control"],["type","text","value","","maxlength","300","required","","placeholder","Education level",1,"form-control"],["type","text","value","","data-msg-required","Please enter your city.","maxlength","100","name","city","id","city","required","","placeholder","City",1,"form-control"],["type","text","value","","data-msg-required","Please enter your postal code.","maxlength","100","name","postal_code","id","postal_code","required","","placeholder","Postal Code",1,"form-control"],["type","text","value","","maxlength","100","name","state/county","id","state/county","placeholder","State/County",1,"form-control"],["required","",1,"form-select","form-control"],["type","email","value","","data-msg-required","Please enter your email.","maxlength","100","required","","formControlName","email","placeholder","Email Address",1,"form-control"],["type","email","value","","maxlength","100","placeholder","Alternative Email Address",1,"form-control"],["type","phone","value","","maxlength","100","formControlName","home_phone","placeholder","Home Telephone",1,"form-control"],["type","phone","value","","data-msg-required","Please enter your mobile number.","maxlength","100","required","","formControlName","mobile_phone","placeholder","Mobile Number",1,"form-control"],["type","phone","value","","maxlength","100","formControlName","work_phone","placeholder","Work Telephone",1,"form-control"],[1,"text-color-dark","font-weight-bold","text-4-5","mb-3"],["type","radio","name","employed","id","inlineRadio1","value","Yes","formControlName","employed",1,""],["type","radio","name","employed","id","inlineRadio2","value","No","formControlName","employed",1,""],[1,"form-group","col-md-6","mb-3"],["type","text","value","","data-msg-required","Please enter your commpany name.","maxlength","100","required","","placeholder","Company/Institution Name","formControlName","employer",1,"form-control"],["type","text","value","","data-msg-required","Please enter your company address.","maxlength","300","required","","formControlName","employer_address","placeholder","Company Address",1,"form-control"],[1,"row","mb-3"],["type","email","value","","data-msg-required","Please enter your email address.","data-msg-email","Please enter a valid email address.","maxlength","100","required","","placeholder","E-mail Address","formControlName","employer_email",1,"form-control"],["type","email","value","","data-msg-required","Please enter your phone.","maxlength","100","required","","placeholder","Phone","formControlName","employer_phone",1,"form-control"],["formControlName","country","required","",1,"form-select","form-control"],[1,"col-md-6","mb-3"],["for","formFile",1,"form-label"],[1,"col-6"],["type","file","id","image","name","certificate","required","",1,"form-control"],[1,"row","pb-2"],[1,""],["color","warning"],["cButton","","color","primary","size","lg","type","submit",1,"mb-3"],[4,"ngIf"]],template:function(u,s){1&u&&(o.TgZ(0,"div",0)(1,"form",1),o.NdJ("ngSubmit",function(){return s.onSend()}),o.TgZ(2,"c-card")(3,"c-card-header")(4,"h4"),o._uU(5,"Personal Information"),o.qZA()(),o.TgZ(6,"c-card-body")(7,"div",2)(8,"div",3)(9,"div",4)(10,"select",5)(11,"option",6),o._uU(12,"Title"),o.qZA(),o.TgZ(13,"option",7),o._uU(14,"Mr"),o.qZA(),o.TgZ(15,"option",8),o._uU(16,"Ms"),o.qZA(),o.TgZ(17,"option",9),o._uU(18,"Mrs"),o.qZA()()()(),o.TgZ(19,"div",10),o._UZ(20,"input",11),o.qZA(),o.TgZ(21,"div",3)(22,"div",12),o._UZ(23,"input",13),o.TgZ(24,"label",14),o._uU(25,"Male"),o.qZA()(),o.TgZ(26,"div",12),o._UZ(27,"input",15),o.TgZ(28,"label",16),o._uU(29,"Female"),o.qZA()()()(),o.TgZ(30,"div",2)(31,"div",17)(32,"div",4)(33,"select",18)(34,"option",19),o._uU(35,"Marital Status"),o.qZA(),o.TgZ(36,"option",20),o._uU(37,"Single"),o.qZA(),o.TgZ(38,"option",21),o._uU(39,"Married"),o.qZA(),o.TgZ(40,"option",22),o._uU(41,"Divorced"),o.qZA()()()(),o.TgZ(42,"div",23),o._UZ(43,"input",24),o.qZA(),o.TgZ(44,"div",17)(45,"div",4)(46,"select",25)(47,"option",26),o._uU(48,"Country of Birth"),o.qZA(),o.TgZ(49,"option",27),o._uU(50,"Algeria"),o.qZA(),o.TgZ(51,"option",28),o._uU(52,"Angola"),o.qZA(),o.TgZ(53,"option",29),o._uU(54,"Benin"),o.qZA(),o.TgZ(55,"option",30),o._uU(56,"Botswana"),o.qZA(),o.TgZ(57,"option",31),o._uU(58,"Burkina Faso"),o.qZA(),o.TgZ(59,"option",32),o._uU(60,"Burundi"),o.qZA(),o.TgZ(61,"option",33),o._uU(62,"Cameroon"),o.qZA(),o.TgZ(63,"option",34),o._uU(64,"Cape Verde"),o.qZA(),o.TgZ(65,"option",35),o._uU(66,"Central African Republic"),o.qZA(),o.TgZ(67,"option",36),o._uU(68,"Chad"),o.qZA(),o.TgZ(69,"option",37),o._uU(70,"Comoros"),o.qZA(),o.TgZ(71,"option",38),o._uU(72,"Congo"),o.qZA(),o.TgZ(73,"option",39),o._uU(74," Congo, Democratic Republic of the Congo "),o.qZA(),o.TgZ(75,"option",40),o._uU(76,"Cote D'Ivoire"),o.qZA(),o.TgZ(77,"option",41),o._uU(78,"Djibouti"),o.qZA(),o.TgZ(79,"option",42),o._uU(80,"Egypt"),o.qZA(),o.TgZ(81,"option",43),o._uU(82,"Equatorial Guinea"),o.qZA(),o.TgZ(83,"option",44),o._uU(84,"Eritrea"),o.qZA(),o.TgZ(85,"option",45),o._uU(86,"Ethiopia"),o.qZA(),o.TgZ(87,"option",46),o._uU(88,"Gabon"),o.qZA(),o.TgZ(89,"option",47),o._uU(90,"Gambia"),o.qZA(),o.TgZ(91,"option",48),o._uU(92,"Ghana"),o.qZA(),o.TgZ(93,"option",49),o._uU(94,"Guinea"),o.qZA(),o.TgZ(95,"option",50),o._uU(96,"Guinea-Bissau"),o.qZA(),o.TgZ(97,"option",51),o._uU(98,"Kenya"),o.qZA(),o.TgZ(99,"option",52),o._uU(100,"Lesotho"),o.qZA(),o.TgZ(101,"option",53),o._uU(102,"Liberia"),o.qZA(),o.TgZ(103,"option",54),o._uU(104,"Libyan Arab Jamahiriya"),o.qZA(),o.TgZ(105,"option",55),o._uU(106,"Madagascar"),o.qZA(),o.TgZ(107,"option",56),o._uU(108,"Malawi"),o.qZA(),o.TgZ(109,"option",57),o._uU(110,"Mali"),o.qZA(),o.TgZ(111,"option",58),o._uU(112,"Mauritania"),o.qZA(),o.TgZ(113,"option",59),o._uU(114,"Mauritius"),o.qZA(),o.TgZ(115,"option",60),o._uU(116,"Mayotte"),o.qZA(),o.TgZ(117,"option",61),o._uU(118,"Morocco"),o.qZA(),o.TgZ(119,"option",62),o._uU(120,"Mozambique"),o.qZA(),o.TgZ(121,"option",63),o._uU(122,"Namibia"),o.qZA(),o.TgZ(123,"option",64),o._uU(124,"Niger"),o.qZA(),o.TgZ(125,"option",65),o._uU(126,"Nigeria"),o.qZA(),o.TgZ(127,"option",66),o._uU(128,"Reunion"),o.qZA(),o.TgZ(129,"option",67),o._uU(130,"Rwanda"),o.qZA(),o.TgZ(131,"option",68),o._uU(132,"Saint Helena"),o.qZA(),o.TgZ(133,"option",69),o._uU(134,"Sao Tome and Principe"),o.qZA(),o.TgZ(135,"option",70),o._uU(136,"Senegal"),o.qZA(),o.TgZ(137,"option",71),o._uU(138,"Seychelles"),o.qZA(),o.TgZ(139,"option",72),o._uU(140,"Sierra Leone"),o.qZA(),o.TgZ(141,"option",73),o._uU(142,"Somalia"),o.qZA(),o.TgZ(143,"option",74),o._uU(144,"South Africa"),o.qZA(),o.TgZ(145,"option",75),o._uU(146,"South Sudan"),o.qZA(),o.TgZ(147,"option",76),o._uU(148,"Sudan"),o.qZA(),o.TgZ(149,"option",77),o._uU(150,"Swaziland"),o.qZA(),o.TgZ(151,"option",78),o._uU(152,"Tanzania, United Republic of"),o.qZA(),o.TgZ(153,"option",79),o._uU(154,"Togo"),o.qZA(),o.TgZ(155,"option",80),o._uU(156,"Tunisia"),o.qZA(),o.TgZ(157,"option",81),o._uU(158,"Uganda"),o.qZA(),o.TgZ(159,"option",82),o._uU(160,"Western Sahara"),o.qZA(),o.TgZ(161,"option",83),o._uU(162,"Zambia"),o.qZA(),o.TgZ(163,"option",84),o._uU(164,"Zimbabwe"),o.qZA()()()()(),o.TgZ(165,"div",2)(166,"div",17),o._UZ(167,"input",85),o.qZA(),o.TgZ(168,"div",17),o._UZ(169,"input",86),o.qZA(),o.TgZ(170,"div",17),o._UZ(171,"input",87),o.qZA()(),o.TgZ(172,"div",2)(173,"div",17),o._UZ(174,"input",88),o.qZA(),o.TgZ(175,"div",17),o._UZ(176,"input",89),o.qZA(),o.TgZ(177,"div",17),o._UZ(178,"input",90),o.qZA()(),o.TgZ(179,"div",2)(180,"div",17),o._UZ(181,"input",91),o.qZA(),o.TgZ(182,"div",17),o._UZ(183,"input",92),o.qZA(),o.TgZ(184,"div",17),o._UZ(185,"input",93),o.qZA()(),o.TgZ(186,"div",2)(187,"div",17)(188,"div",4)(189,"select",94)(190,"option",6),o._uU(191," Country of Residence "),o.qZA(),o.TgZ(192,"option",27),o._uU(193,"Algeria"),o.qZA(),o.TgZ(194,"option",28),o._uU(195,"Angola"),o.qZA(),o.TgZ(196,"option",29),o._uU(197,"Benin"),o.qZA(),o.TgZ(198,"option",30),o._uU(199,"Botswana"),o.qZA(),o.TgZ(200,"option",31),o._uU(201,"Burkina Faso"),o.qZA(),o.TgZ(202,"option",32),o._uU(203,"Burundi"),o.qZA(),o.TgZ(204,"option",33),o._uU(205,"Cameroon"),o.qZA(),o.TgZ(206,"option",34),o._uU(207,"Cape Verde"),o.qZA(),o.TgZ(208,"option",35),o._uU(209,"Central African Republic"),o.qZA(),o.TgZ(210,"option",36),o._uU(211,"Chad"),o.qZA(),o.TgZ(212,"option",37),o._uU(213,"Comoros"),o.qZA(),o.TgZ(214,"option",38),o._uU(215,"Congo"),o.qZA(),o.TgZ(216,"option",39),o._uU(217," Congo, Democratic Republic of the Congo "),o.qZA(),o.TgZ(218,"option",40),o._uU(219,"Cote D'Ivoire"),o.qZA(),o.TgZ(220,"option",41),o._uU(221,"Djibouti"),o.qZA(),o.TgZ(222,"option",42),o._uU(223,"Egypt"),o.qZA(),o.TgZ(224,"option",43),o._uU(225,"Equatorial Guinea"),o.qZA(),o.TgZ(226,"option",44),o._uU(227,"Eritrea"),o.qZA(),o.TgZ(228,"option",45),o._uU(229,"Ethiopia"),o.qZA(),o.TgZ(230,"option",46),o._uU(231,"Gabon"),o.qZA(),o.TgZ(232,"option",47),o._uU(233,"Gambia"),o.qZA(),o.TgZ(234,"option",48),o._uU(235,"Ghana"),o.qZA(),o.TgZ(236,"option",49),o._uU(237,"Guinea"),o.qZA(),o.TgZ(238,"option",50),o._uU(239,"Guinea-Bissau"),o.qZA(),o.TgZ(240,"option",51),o._uU(241,"Kenya"),o.qZA(),o.TgZ(242,"option",52),o._uU(243,"Lesotho"),o.qZA(),o.TgZ(244,"option",53),o._uU(245,"Liberia"),o.qZA(),o.TgZ(246,"option",54),o._uU(247,"Libyan Arab Jamahiriya"),o.qZA(),o.TgZ(248,"option",55),o._uU(249,"Madagascar"),o.qZA(),o.TgZ(250,"option",56),o._uU(251,"Malawi"),o.qZA(),o.TgZ(252,"option",57),o._uU(253,"Mali"),o.qZA(),o.TgZ(254,"option",58),o._uU(255,"Mauritania"),o.qZA(),o.TgZ(256,"option",59),o._uU(257,"Mauritius"),o.qZA(),o.TgZ(258,"option",60),o._uU(259,"Mayotte"),o.qZA(),o.TgZ(260,"option",61),o._uU(261,"Morocco"),o.qZA(),o.TgZ(262,"option",62),o._uU(263,"Mozambique"),o.qZA(),o.TgZ(264,"option",63),o._uU(265,"Namibia"),o.qZA(),o.TgZ(266,"option",64),o._uU(267,"Niger"),o.qZA(),o.TgZ(268,"option",65),o._uU(269,"Nigeria"),o.qZA(),o.TgZ(270,"option",66),o._uU(271,"Reunion"),o.qZA(),o.TgZ(272,"option",67),o._uU(273,"Rwanda"),o.qZA(),o.TgZ(274,"option",68),o._uU(275,"Saint Helena"),o.qZA(),o.TgZ(276,"option",69),o._uU(277,"Sao Tome and Principe"),o.qZA(),o.TgZ(278,"option",70),o._uU(279,"Senegal"),o.qZA(),o.TgZ(280,"option",71),o._uU(281,"Seychelles"),o.qZA(),o.TgZ(282,"option",72),o._uU(283,"Sierra Leone"),o.qZA(),o.TgZ(284,"option",73),o._uU(285,"Somalia"),o.qZA(),o.TgZ(286,"option",74),o._uU(287,"South Africa"),o.qZA(),o.TgZ(288,"option",75),o._uU(289,"South Sudan"),o.qZA(),o.TgZ(290,"option",76),o._uU(291,"Sudan"),o.qZA(),o.TgZ(292,"option",77),o._uU(293,"Swaziland"),o.qZA(),o.TgZ(294,"option",78),o._uU(295,"Tanzania, United Republic of"),o.qZA(),o.TgZ(296,"option",79),o._uU(297,"Togo"),o.qZA(),o.TgZ(298,"option",80),o._uU(299,"Tunisia"),o.qZA(),o.TgZ(300,"option",81),o._uU(301,"Uganda"),o.qZA(),o.TgZ(302,"option",82),o._uU(303,"Western Sahara"),o.qZA(),o.TgZ(304,"option",83),o._uU(305,"Zambia"),o.qZA(),o.TgZ(306,"option",84),o._uU(307,"Zimbabwe"),o.qZA()()()(),o.TgZ(308,"div",17),o._UZ(309,"input",95),o.qZA(),o.TgZ(310,"div",17),o._UZ(311,"input",96),o.qZA()(),o.TgZ(312,"div",2)(313,"div",17),o._UZ(314,"input",97),o.qZA(),o.TgZ(315,"div",17),o._UZ(316,"input",98),o.qZA(),o.TgZ(317,"div",17),o._UZ(318,"input",99),o.qZA()(),o.TgZ(319,"div",2)(320,"div",0)(321,"h4",100),o._uU(322," Company Information: "),o.qZA(),o.TgZ(323,"span"),o._uU(324,"Are you currently employed?"),o.qZA()()(),o.TgZ(325,"div",3)(326,"div",12),o._UZ(327,"input",101),o.TgZ(328,"label",14),o._uU(329,"Yes"),o.qZA()(),o.TgZ(330,"div",12),o._UZ(331,"input",102),o.TgZ(332,"label",16),o._uU(333,"No"),o.qZA()()(),o.TgZ(334,"div",2)(335,"div",103),o._UZ(336,"input",104),o.qZA(),o.TgZ(337,"div",103),o._UZ(338,"input",105),o.qZA()(),o.TgZ(339,"div",106)(340,"div",17),o._UZ(341,"input",107),o.qZA(),o.TgZ(342,"div",17),o._UZ(343,"input",108),o.qZA(),o.TgZ(344,"div",17)(345,"div",4)(346,"select",109)(347,"option",6),o._uU(348," Country "),o.qZA(),o.TgZ(349,"option",27),o._uU(350,"Algeria"),o.qZA(),o.TgZ(351,"option",28),o._uU(352,"Angola"),o.qZA(),o.TgZ(353,"option",29),o._uU(354,"Benin"),o.qZA(),o.TgZ(355,"option",30),o._uU(356,"Botswana"),o.qZA(),o.TgZ(357,"option",31),o._uU(358,"Burkina Faso"),o.qZA(),o.TgZ(359,"option",32),o._uU(360,"Burundi"),o.qZA(),o.TgZ(361,"option",33),o._uU(362,"Cameroon"),o.qZA(),o.TgZ(363,"option",34),o._uU(364,"Cape Verde"),o.qZA(),o.TgZ(365,"option",35),o._uU(366,"Central African Republic"),o.qZA(),o.TgZ(367,"option",36),o._uU(368,"Chad"),o.qZA(),o.TgZ(369,"option",37),o._uU(370,"Comoros"),o.qZA(),o.TgZ(371,"option",38),o._uU(372,"Congo"),o.qZA(),o.TgZ(373,"option",39),o._uU(374," Congo, Democratic Republic of the Congo "),o.qZA(),o.TgZ(375,"option",40),o._uU(376,"Cote D'Ivoire"),o.qZA(),o.TgZ(377,"option",41),o._uU(378,"Djibouti"),o.qZA(),o.TgZ(379,"option",42),o._uU(380,"Egypt"),o.qZA(),o.TgZ(381,"option",43),o._uU(382,"Equatorial Guinea"),o.qZA(),o.TgZ(383,"option",44),o._uU(384,"Eritrea"),o.qZA(),o.TgZ(385,"option",45),o._uU(386,"Ethiopia"),o.qZA(),o.TgZ(387,"option",46),o._uU(388,"Gabon"),o.qZA(),o.TgZ(389,"option",47),o._uU(390,"Gambia"),o.qZA(),o.TgZ(391,"option",48),o._uU(392,"Ghana"),o.qZA(),o.TgZ(393,"option",49),o._uU(394,"Guinea"),o.qZA(),o.TgZ(395,"option",50),o._uU(396,"Guinea-Bissau"),o.qZA(),o.TgZ(397,"option",51),o._uU(398,"Kenya"),o.qZA(),o.TgZ(399,"option",52),o._uU(400,"Lesotho"),o.qZA(),o.TgZ(401,"option",53),o._uU(402,"Liberia"),o.qZA(),o.TgZ(403,"option",54),o._uU(404,"Libyan Arab Jamahiriya"),o.qZA(),o.TgZ(405,"option",55),o._uU(406,"Madagascar"),o.qZA(),o.TgZ(407,"option",56),o._uU(408,"Malawi"),o.qZA(),o.TgZ(409,"option",57),o._uU(410,"Mali"),o.qZA(),o.TgZ(411,"option",58),o._uU(412,"Mauritania"),o.qZA(),o.TgZ(413,"option",59),o._uU(414,"Mauritius"),o.qZA(),o.TgZ(415,"option",60),o._uU(416,"Mayotte"),o.qZA(),o.TgZ(417,"option",61),o._uU(418,"Morocco"),o.qZA(),o.TgZ(419,"option",62),o._uU(420,"Mozambique"),o.qZA(),o.TgZ(421,"option",63),o._uU(422,"Namibia"),o.qZA(),o.TgZ(423,"option",64),o._uU(424,"Niger"),o.qZA(),o.TgZ(425,"option",65),o._uU(426,"Nigeria"),o.qZA(),o.TgZ(427,"option",66),o._uU(428,"Reunion"),o.qZA(),o.TgZ(429,"option",67),o._uU(430,"Rwanda"),o.qZA(),o.TgZ(431,"option",68),o._uU(432,"Saint Helena"),o.qZA(),o.TgZ(433,"option",69),o._uU(434,"Sao Tome and Principe"),o.qZA(),o.TgZ(435,"option",70),o._uU(436,"Senegal"),o.qZA(),o.TgZ(437,"option",71),o._uU(438,"Seychelles"),o.qZA(),o.TgZ(439,"option",72),o._uU(440,"Sierra Leone"),o.qZA(),o.TgZ(441,"option",73),o._uU(442,"Somalia"),o.qZA(),o.TgZ(443,"option",74),o._uU(444,"South Africa"),o.qZA(),o.TgZ(445,"option",75),o._uU(446,"South Sudan"),o.qZA(),o.TgZ(447,"option",76),o._uU(448,"Sudan"),o.qZA(),o.TgZ(449,"option",77),o._uU(450,"Swaziland"),o.qZA(),o.TgZ(451,"option",78),o._uU(452,"Tanzania, United Republic of"),o.qZA(),o.TgZ(453,"option",79),o._uU(454,"Togo"),o.qZA(),o.TgZ(455,"option",80),o._uU(456,"Tunisia"),o.qZA(),o.TgZ(457,"option",81),o._uU(458,"Uganda"),o.qZA(),o.TgZ(459,"option",82),o._uU(460,"Western Sahara"),o.qZA(),o.TgZ(461,"option",83),o._uU(462,"Zambia"),o.qZA(),o.TgZ(463,"option",84),o._uU(464,"Zimbabwe"),o.qZA()()()()(),o.TgZ(465,"div",2)(466,"div",110)(467,"label",111)(468,"h4",100),o._uU(469," Kindly upload a picture of a valid ID "),o.qZA()(),o.TgZ(470,"div",112),o._UZ(471,"input",113),o.qZA()()(),o.TgZ(472,"div",114)(473,"div",0)(474,"div",115)(475,"c-alert",116),o._uU(476," Please note that after your details is received, a background check will be done on the details provied by Bsystems to confirm you meet the eligibilty criteria for this trade platform."),o.qZA()()()(),o.TgZ(477,"div",2)(478,"div",112)(479,"button",117),o._uU(480," Register "),o.YNc(481,f,1,0,"app-loader",118),o.qZA()()()()()()()),2&u&&(o.xp6(1),o.Q6J("formGroup",s.form),o.xp6(480),o.Q6J("ngIf",s.loader.isLoadingStatus()))},dependencies:[c.O5,i.Hq3,i.AkF,i.yue,i.nkx,e._Y,e.YN,e.Kr,e.Fj,e.EJ,e._,e.JJ,e.JL,e.Q7,e.nD,e.sg,e.u,i.wxo,v.R]})}return a})(),data:{title:"Buttons"}},{path:"button-groups",component:t(4790).h,data:{title:"Button groups"}},{path:"dropdowns",component:(()=>{class a{constructor(){}static#o=this.\u0275fac=function(u){return new(u||a)};static#e=this.\u0275cmp=o.Xpm({type:a,selectors:[["app-dropdowns"]],decls:4,vars:0,template:function(u,s){1&u&&(o.TgZ(0,"c-card")(1,"c-card-header"),o._uU(2,"Representaive Details"),o.qZA(),o._UZ(3,"c-card-body"),o.qZA())},dependencies:[i.AkF,i.yue,i.nkx],encapsulation:2})}return a})(),data:{title:"Dropdowns"}}]}];let A=(()=>{class a{static#o=this.\u0275fac=function(u){return new(u||a)};static#e=this.\u0275mod=o.oAB({type:a});static#t=this.\u0275inj=o.cJS({imports:[d.Bz.forChild(n),d.Bz]})}return a})();var r=t(1272),l=t(627),p=t(1651);let S=(()=>{class a{static#o=this.\u0275fac=function(u){return new(u||a)};static#e=this.\u0275mod=o.oAB({type:a});static#t=this.\u0275inj=o.cJS({imports:[c.ez,A,i.hJ1,i.ga2,i.zE6,r.QX,i.dTQ,i.gzQ,i.kWm,i.m81,i.ejP,e.UX,U.E,i.W4s,i.fwJ,i.dGk,i.W4s,i.U$I,i.nMh,l.T,p.b,q.Is,i.ga2]})}return a})()}}]);