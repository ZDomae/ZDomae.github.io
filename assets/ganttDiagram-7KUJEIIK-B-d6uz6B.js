import{a as e,n as t,t as n}from"./chunk-GTKDMUJJ-BbgDWR4E.js";import"./chunk-6BY5RJGC-D5OZg59P.js";import{At as r,Et as i,F as a,Ft as o,G as s,Gt as c,H as l,Ht as u,Kt as d,Lt as f,M as p,Nt as m,R as h,S as g,T as _,V as v,Wt as y,X as b,Yt as x,_t as S,a as C,bt as w,et as T,f as E,ht as D,i as O,j as k,nt as A,p as j,st as M,t as ee,w as te,xt as ne,zt as re}from"./chunk-OR2G2HG5-DUH13KUR.js";import{t as N}from"./chunk-TI4EEUUG-DbrZB-iv.js";import{i as ie}from"./chunk-UENA7NWE-D08VZsiE.js";var ae=t((e,t)=>{(function(n,r){typeof e==`object`&&typeof t<`u`?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_isoWeek=r()})(e,function(){return function(e,t,r){var i=n(function(e){return e.add(4-e.isoWeekday(),`day`)},`a`),a=t.prototype;a.isoWeekYear=function(){return i(this).year()},a.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),`day`);var t,n,a,o,s=i(this),c=(t=this.isoWeekYear(),n=this.$u,a=(n?r.utc:r)().year(t).startOf(`year`),o=4-a.isoWeekday(),a.isoWeekday()>4&&(o+=7),a.add(o,`day`));return s.diff(c,`week`)+1},a.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var o=a.startOf;a.startOf=function(e,t){var n=this.$utils(),r=!!n.u(t)||t;return n.p(e)===`isoweek`?r?this.date(this.date()-(this.isoWeekday()-1)).startOf(`day`):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf(`day`):o.bind(this)(e,t)}}})}),oe=t((e,t)=>{(function(n,r){typeof e==`object`&&typeof t<`u`?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_customParseFormat=r()})(e,function(){var e={LTS:`h:mm:ss A`,LT:`h:mm A`,L:`MM/DD/YYYY`,LL:`MMMM D, YYYY`,LLL:`MMMM D, YYYY h:mm A`,LLLL:`dddd, MMMM D, YYYY h:mm A`},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d/,i=/\d\d/,a=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,s={},c=n(function(e){return(e=+e)+(e>68?1900:2e3)},`a`),l=n(function(e){return function(t){this[e]=+t}},`f`),u=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||={}).offset=function(e){if(!e||e===`Z`)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return n===0?0:t[0]===`+`?-n:n}(e)}],d=n(function(e){var t=s[e];return t&&(t.indexOf?t:t.s.concat(t.f))},`u`),f=n(function(e,t){var n,r=s.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?`pm`:`PM`);return n},`d`),p={A:[o,function(e){this.afternoon=f(e,!1)}],a:[o,function(e){this.afternoon=f(e,!0)}],Q:[r,function(e){this.month=3*(e-1)+1}],S:[r,function(e){this.milliseconds=100*e}],SS:[i,function(e){this.milliseconds=10*e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[a,l(`seconds`)],ss:[a,l(`seconds`)],m:[a,l(`minutes`)],mm:[a,l(`minutes`)],H:[a,l(`hours`)],h:[a,l(`hours`)],HH:[a,l(`hours`)],hh:[a,l(`hours`)],D:[a,l(`day`)],DD:[i,l(`day`)],Do:[o,function(e){var t=s.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,``)===e&&(this.day=r)}],w:[a,l(`week`)],ww:[i,l(`week`)],M:[a,l(`month`)],MM:[i,l(`month`)],MMM:[o,function(e){var t=d(`months`),n=(d(`monthsShort`)||t.map(function(e){return e.slice(0,3)})).indexOf(e)+1;if(n<1)throw Error();this.month=n%12||n}],MMMM:[o,function(e){var t=d(`months`).indexOf(e)+1;if(t<1)throw Error();this.month=t%12||t}],Y:[/[+-]?\d+/,l(`year`)],YY:[i,function(e){this.year=c(e)}],YYYY:[/\d{4}/,l(`year`)],Z:u,ZZ:u};function m(n){for(var r=n,i=s&&s.formats,a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,n){return t||n.slice(1)})})).match(t),o=a.length,c=0;c<o;c+=1){var l=a[c],u=p[l],d=u&&u[0],f=u&&u[1];a[c]=f?{regex:d,parser:f}:l.replace(/^\[|\]$/g,``)}return function(e){for(var t={},n=0,r=0;n<o;n+=1){var i=a[n];if(typeof i==`string`)r+=i.length;else{var s=i.regex,c=i.parser,l=e.slice(r),u=s.exec(l)[0];c.call(t,u),e=e.replace(u,``)}}return function(e){var t=e.afternoon;if(t!==void 0){var n=e.hours;t?n<12&&(e.hours+=12):n===12&&(e.hours=0),delete e.afternoon}}(t),t}}return n(m,`l`),function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(c=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var o=a[1];if(typeof o==`string`){var c=a[2]===!0,l=a[3]===!0,u=c||l,d=a[2];l&&(d=a[2]),s=this.$locale(),!c&&d&&(s=n.Ls[d]),this.$d=function(e,t,n,r){try{if([`x`,`X`].indexOf(t)>-1)return new Date((t===`X`?1e3:1)*e);var i=m(t)(e),a=i.year,o=i.month,s=i.day,c=i.hours,l=i.minutes,u=i.seconds,d=i.milliseconds,f=i.zone,p=i.week,h=new Date,g=s||(a||o?1:h.getDate()),_=a||h.getFullYear(),v=0;a&&!o||(v=o>0?o-1:h.getMonth());var y,b=c||0,x=l||0,S=u||0,C=d||0;return f?new Date(Date.UTC(_,v,g,b,x,S,C+60*f.offset*1e3)):n?new Date(Date.UTC(_,v,g,b,x,S,C)):(y=new Date(_,v,g,b,x,S,C),p&&(y=r(y).week(p).toDate()),y)}catch{return new Date(``)}}(t,o,r,n),this.init(),d&&d!==!0&&(this.$L=this.locale(d).$L),u&&t!=this.format(o)&&(this.$d=new Date(``)),s={}}else if(o instanceof Array)for(var f=o.length,p=1;p<=f;p+=1){a[1]=o[p-1];var h=n.apply(this,a);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}p===f&&(this.$d=new Date(``))}else i.call(this,e)}}})}),se=t((e,t)=>{(function(n,r){typeof e==`object`&&typeof t<`u`?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_advancedFormat=r()})(e,function(){return function(e,t){var n=t.prototype,r=n.format;n.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return r.bind(this)(e);var i=this.$utils(),a=(e||`YYYY-MM-DDTHH:mm:ssZ`).replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(e){switch(e){case`Q`:return Math.ceil((t.$M+1)/3);case`Do`:return n.ordinal(t.$D);case`gggg`:return t.weekYear();case`GGGG`:return t.isoWeekYear();case`wo`:return n.ordinal(t.week(),`W`);case`w`:case`ww`:return i.s(t.week(),e===`w`?1:2,`0`);case`W`:case`WW`:return i.s(t.isoWeek(),e===`W`?1:2,`0`);case`k`:case`kk`:return i.s(String(t.$H===0?24:t.$H),e===`k`?1:2,`0`);case`X`:return Math.floor(t.$d.getTime()/1e3);case`x`:return t.$d.getTime();case`z`:return`[`+t.offsetName()+`]`;case`zzz`:return`[`+t.offsetName(`long`)+`]`;default:return e}});return r.bind(this)(a)}}})}),P=function(){var e=n(function(e,t,n,r){for(n||={},r=e.length;r--;n[e[r]]=t);return n},`o`),t=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],r=[1,26],i=[1,27],a=[1,28],o=[1,29],s=[1,30],c=[1,31],l=[1,32],u=[1,33],d=[1,34],f=[1,9],p=[1,10],m=[1,11],h=[1,12],g=[1,13],_=[1,14],v=[1,15],y=[1,16],b=[1,19],x=[1,20],S=[1,21],C=[1,22],w=[1,23],T=[1,25],E=[1,35],D={trace:n(function(){},`trace`),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:`error`,4:`gantt`,6:`EOF`,8:`SPACE`,10:`NL`,12:`weekday_monday`,13:`weekday_tuesday`,14:`weekday_wednesday`,15:`weekday_thursday`,16:`weekday_friday`,17:`weekday_saturday`,18:`weekday_sunday`,20:`weekend_friday`,21:`weekend_saturday`,22:`dateFormat`,23:`inclusiveEndDates`,24:`topAxis`,25:`axisFormat`,26:`tickInterval`,27:`excludes`,28:`includes`,29:`todayMarker`,30:`title`,31:`acc_title`,32:`acc_title_value`,33:`acc_descr`,34:`acc_descr_value`,35:`acc_descr_multiline_value`,36:`section`,38:`taskTxt`,39:`taskData`,40:`click`,41:`callbackname`,42:`callbackargs`,43:`href`},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:n(function(e,t,n,r,i,a,o){var s=a.length-1;switch(i){case 1:return a[s-1];case 2:this.$=[];break;case 3:a[s-1].push(a[s]),this.$=a[s-1];break;case 4:case 5:this.$=a[s];break;case 6:case 7:this.$=[];break;case 8:r.setWeekday(`monday`);break;case 9:r.setWeekday(`tuesday`);break;case 10:r.setWeekday(`wednesday`);break;case 11:r.setWeekday(`thursday`);break;case 12:r.setWeekday(`friday`);break;case 13:r.setWeekday(`saturday`);break;case 14:r.setWeekday(`sunday`);break;case 15:r.setWeekend(`friday`);break;case 16:r.setWeekend(`saturday`);break;case 17:r.setDateFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 18:r.enableInclusiveEndDates(),this.$=a[s].substr(18);break;case 19:r.TopAxis(),this.$=a[s].substr(8);break;case 20:r.setAxisFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 21:r.setTickInterval(a[s].substr(13)),this.$=a[s].substr(13);break;case 22:r.setExcludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 23:r.setIncludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 24:r.setTodayMarker(a[s].substr(12)),this.$=a[s].substr(12);break;case 27:r.setDiagramTitle(a[s].substr(6)),this.$=a[s].substr(6);break;case 28:this.$=a[s].trim(),r.setAccTitle(this.$);break;case 29:case 30:this.$=a[s].trim(),r.setAccDescription(this.$);break;case 31:r.addSection(a[s].substr(8)),this.$=a[s].substr(8);break;case 33:r.addTask(a[s-1],a[s]),this.$=`task`;break;case 34:this.$=a[s-1],r.setClickEvent(a[s-1],a[s],null);break;case 35:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],a[s]);break;case 36:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],null),r.setLink(a[s-2],a[s]);break;case 37:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-2],a[s-1]),r.setLink(a[s-3],a[s]);break;case 38:this.$=a[s-2],r.setClickEvent(a[s-2],a[s],null),r.setLink(a[s-2],a[s-1]);break;case 39:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-1],a[s]),r.setLink(a[s-3],a[s-2]);break;case 40:this.$=a[s-1],r.setLink(a[s-1],a[s]);break;case 41:case 47:this.$=a[s-1]+` `+a[s];break;case 42:case 43:case 45:this.$=a[s-2]+` `+a[s-1]+` `+a[s];break;case 44:case 46:this.$=a[s-3]+` `+a[s-2]+` `+a[s-1]+` `+a[s]}},`anonymous`),table:[{3:1,4:[1,2]},{1:[3]},e(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:r,13:i,14:a,15:o,16:s,17:c,18:l,19:18,20:u,21:d,22:f,23:p,24:m,25:h,26:g,27:_,28:v,29:y,30:b,31:x,33:S,35:C,36:w,37:24,38:T,40:E},e(t,[2,7],{1:[2,1]}),e(t,[2,3]),{9:36,11:17,12:r,13:i,14:a,15:o,16:s,17:c,18:l,19:18,20:u,21:d,22:f,23:p,24:m,25:h,26:g,27:_,28:v,29:y,30:b,31:x,33:S,35:C,36:w,37:24,38:T,40:E},e(t,[2,5]),e(t,[2,6]),e(t,[2,17]),e(t,[2,18]),e(t,[2,19]),e(t,[2,20]),e(t,[2,21]),e(t,[2,22]),e(t,[2,23]),e(t,[2,24]),e(t,[2,25]),e(t,[2,26]),e(t,[2,27]),{32:[1,37]},{34:[1,38]},e(t,[2,30]),e(t,[2,31]),e(t,[2,32]),{39:[1,39]},e(t,[2,8]),e(t,[2,9]),e(t,[2,10]),e(t,[2,11]),e(t,[2,12]),e(t,[2,13]),e(t,[2,14]),e(t,[2,15]),e(t,[2,16]),{41:[1,40],43:[1,41]},e(t,[2,4]),e(t,[2,28]),e(t,[2,29]),e(t,[2,33]),e(t,[2,34],{42:[1,42],43:[1,43]}),e(t,[2,40],{41:[1,44]}),e(t,[2,35],{43:[1,45]}),e(t,[2,36]),e(t,[2,38],{42:[1,46]}),e(t,[2,37]),e(t,[2,39])],defaultActions:{},parseError:n(function(e,t){if(t.recoverable)this.trace(e);else{var n=Error(e);throw n.hash=t,n}},`parseError`),parse:n(function(e){var t=this,r=[0],i=[],a=[null],o=[],s=this.table,c=``,l=0,u=0,d=0,f=2,p=1,m=o.slice.call(arguments,1),h=Object.create(this.lexer),g={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(g.yy[_]=this.yy[_]);h.setInput(e,g.yy),g.yy.lexer=h,g.yy.parser=this,typeof h.yylloc>`u`&&(h.yylloc={});var v=h.yylloc;o.push(v);var y=h.options&&h.options.ranges;this.parseError=typeof g.yy.parseError==`function`?g.yy.parseError:Object.getPrototypeOf(this).parseError;function b(e){r.length-=2*e,a.length-=e,o.length-=e}n(b,`popStack`);function x(){var e=i.pop()||h.lex()||p;return typeof e!=`number`&&(e instanceof Array&&(i=e,e=i.pop()),e=t.symbols_[e]||e),e}n(x,`lex`);for(var S,C,w,T,E,D={},O,k,A,j;;){if(w=r[r.length-1],this.defaultActions[w]?T=this.defaultActions[w]:((S===null||typeof S>`u`)&&(S=x()),T=s[w]&&s[w][S]),typeof T>`u`||!T.length||!T[0]){var M=``;for(O in j=[],s[w])this.terminals_[O]&&O>f&&j.push(`'`+this.terminals_[O]+`'`);M=h.showPosition?`Parse error on line `+(l+1)+`:
`+h.showPosition()+`
Expecting `+j.join(`, `)+`, got '`+(this.terminals_[S]||S)+`'`:`Parse error on line `+(l+1)+`: Unexpected `+(S==p?`end of input`:`'`+(this.terminals_[S]||S)+`'`),this.parseError(M,{text:h.match,token:this.terminals_[S]||S,line:h.yylineno,loc:v,expected:j})}if(T[0]instanceof Array&&T.length>1)throw Error(`Parse Error: multiple actions possible at state: `+w+`, token: `+S);switch(T[0]){case 1:r.push(S),a.push(h.yytext),o.push(h.yylloc),r.push(T[1]),S=null,C?(S=C,C=null):(u=h.yyleng,c=h.yytext,l=h.yylineno,v=h.yylloc,d>0&&d--);break;case 2:if(k=this.productions_[T[1]][1],D.$=a[a.length-k],D._$={first_line:o[o.length-(k||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(k||1)].first_column,last_column:o[o.length-1].last_column},y&&(D._$.range=[o[o.length-(k||1)].range[0],o[o.length-1].range[1]]),E=this.performAction.apply(D,[c,u,l,g.yy,T[1],a,o].concat(m)),typeof E<`u`)return E;k&&(r=r.slice(0,-1*k*2),a=a.slice(0,-1*k),o=o.slice(0,-1*k)),r.push(this.productions_[T[1]][0]),a.push(D.$),o.push(D._$),A=s[r[r.length-2]][r[r.length-1]],r.push(A);break;case 3:return!0}}return!0},`parse`)};D.lexer=function(){return{EOF:1,parseError:n(function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},`parseError`),setInput:n(function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match=``,this.conditionStack=[`INITIAL`],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},`setInput`),input:n(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},`input`),unput:n(function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},`unput`),more:n(function(){return this._more=!0,this},`more`),reject:n(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError(`Lexical error on line `+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:``,token:null,line:this.yylineno});return this},`reject`),less:n(function(e){this.unput(this.match.slice(e))},`less`),pastInput:n(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?`...`:``)+e.substr(-20).replace(/\n/g,``)},`pastInput`),upcomingInput:n(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?`...`:``)).replace(/\n/g,``)},`upcomingInput`),showPosition:n(function(){var e=this.pastInput(),t=Array(e.length+1).join(`-`);return e+this.upcomingInput()+`
`+t+`^`},`showPosition`),test_match:n(function(e,t){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),r=e[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in i)this[a]=i[a];return!1}return!1},`test_match`),next:n(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,t,n,r;this._more||(this.yytext=``,this.match=``);for(var i=this._currentRules(),a=0;a<i.length;a++)if(n=this._input.match(this.rules[i[a]]),n&&(!t||n[0].length>t[0].length)){if(t=n,r=a,this.options.backtrack_lexer){if(e=this.test_match(n,i[a]),e!==!1)return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?(e=this.test_match(t,i[r]),e!==!1&&e):this._input===``?this.EOF:this.parseError(`Lexical error on line `+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:``,token:null,line:this.yylineno})},`next`),lex:n(function(){return this.next()||this.lex()},`lex`),begin:n(function(e){this.conditionStack.push(e)},`begin`),popState:n(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},`popState`),_currentRules:n(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},`_currentRules`),topState:n(function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:`INITIAL`},`topState`),pushState:n(function(e){this.begin(e)},`pushState`),stateStackSize:n(function(){return this.conditionStack.length},`stateStackSize`),options:{"case-insensitive":!0},performAction:n(function(e,t,n,r){switch(n){case 0:return this.begin(`open_directive`),`open_directive`;case 1:return this.begin(`acc_title`),31;case 2:return this.popState(),`acc_title_value`;case 3:return this.begin(`acc_descr`),33;case 4:return this.popState(),`acc_descr_value`;case 5:this.begin(`acc_descr_multiline`);break;case 6:this.popState();break;case 7:return`acc_descr_multiline_value`;case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin(`href`);break;case 15:this.popState();break;case 16:return 43;case 17:this.begin(`callbackname`);break;case 18:this.popState();break;case 19:this.popState(),this.begin(`callbackargs`);break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin(`click`);break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return`date`;case 45:return 30;case 46:return`accDescription`;case 47:return 36;case 48:return 38;case 49:return 39;case 50:return`:`;case 51:return 6;case 52:return`INVALID`}},`anonymous`),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}}}();function O(){this.yy={}}return n(O,`Parser`),O.prototype=D,D.Parser=O,new O}();P.parser=P;var ce=P,le=e(N(),1),F=e(s(),1),ue=e(ae(),1),de=e(oe(),1),fe=e(se(),1);F.default.extend(ue.default),F.default.extend(de.default),F.default.extend(fe.default);var pe={friday:5,saturday:6},I=``,L=``,R,z=``,B=[],V=[],H=new Map,U=[],W=[],G=``,me=``,he=[`active`,`done`,`crit`,`milestone`],ge=[],K=!1,_e=!1,ve=`sunday`,q=`saturday`,ye=0,be=n(function(){U=[],W=[],G=``,ge=[],Qe=0,tt=void 0,Y=void 0,X=[],I=``,L=``,me=``,R=void 0,z=``,B=[],V=[],K=!1,_e=!1,ye=0,H=new Map,b(),ve=`sunday`,q=`saturday`},`clear`),xe=n(function(e){L=e},`setAxisFormat`),Se=n(function(){return L},`getAxisFormat`),Ce=n(function(e){R=e},`setTickInterval`),we=n(function(){return R},`getTickInterval`),Te=n(function(e){z=e},`setTodayMarker`),Ee=n(function(){return z},`getTodayMarker`),De=n(function(e){I=e},`setDateFormat`),Oe=n(function(){K=!0},`enableInclusiveEndDates`),ke=n(function(){return K},`endDatesAreInclusive`),Ae=n(function(){_e=!0},`enableTopAxis`),je=n(function(){return _e},`topAxisEnabled`),Me=n(function(e){me=e},`setDisplayMode`),Ne=n(function(){return me},`getDisplayMode`),Pe=n(function(){return I},`getDateFormat`),Fe=n(function(e){B=e.toLowerCase().split(/[\s,]+/)},`setIncludes`),Ie=n(function(){return B},`getIncludes`),Le=n(function(e){V=e.toLowerCase().split(/[\s,]+/)},`setExcludes`),Re=n(function(){return V},`getExcludes`),ze=n(function(){return H},`getLinks`),Be=n(function(e){G=e,U.push(e)},`addSection`),Ve=n(function(){return U},`getSections`),He=n(function(){let e=at(),t=0;for(;!e&&t<10;)e=at(),t++;return W=X,W},`getTasks`),Ue=n(function(e,t,n,r){return r.includes(e.format(t.trim()))?!1:n.includes(`weekends`)&&(e.isoWeekday()===pe[q]||e.isoWeekday()===pe[q]+1)||n.includes(e.format(`dddd`).toLowerCase())?!0:n.includes(e.format(t.trim()))},`isInvalidDate`),We=n(function(e){ve=e},`setWeekday`),Ge=n(function(){return ve},`getWeekday`),Ke=n(function(e){q=e},`setWeekend`),qe=n(function(e,t,n,r){if(!n.length||e.manualEndTime)return;let i;i=e.startTime instanceof Date?(0,F.default)(e.startTime):(0,F.default)(e.startTime,t,!0),i=i.add(1,`d`);let a;a=e.endTime instanceof Date?(0,F.default)(e.endTime):(0,F.default)(e.endTime,t,!0);let[o,s]=Je(i,a,t,n,r);e.endTime=o.toDate(),e.renderEndTime=s},`checkTaskDates`),Je=n(function(e,t,n,r,i){let a=!1,o=null;for(;e<=t;)a||(o=t.toDate()),a=Ue(e,n,r,i),a&&(t=t.add(1,`d`)),e=e.add(1,`d`);return[t,o]},`fixTaskDates`),Ye=n(function(e,t,n){n=n.trim();let r=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(r!==null){let e=null;for(let t of r.groups.ids.split(` `)){let n=Z(t);n!==void 0&&(!e||n.endTime>e.endTime)&&(e=n)}if(e)return e.endTime;let t=new Date;return t.setHours(0,0,0,0),t}let i=(0,F.default)(n,t.trim(),!0);if(i.isValid())return i.toDate();{o.debug(`Invalid date:`+n),o.debug(`With date format:`+t.trim());let e=new Date(n);if(e===void 0||isNaN(e.getTime())||e.getFullYear()<-1e4||e.getFullYear()>1e4)throw Error(`Invalid date:`+n);return e}},`getStartDate`),Xe=n(function(e){let t=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return t===null?[NaN,`ms`]:[Number.parseFloat(t[1]),t[2]]},`parseDuration`),Ze=n(function(e,t,n,r=!1){n=n.trim();let i=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(i!==null){let e=null;for(let t of i.groups.ids.split(` `)){let n=Z(t);n!==void 0&&(!e||n.startTime<e.startTime)&&(e=n)}if(e)return e.startTime;let t=new Date;return t.setHours(0,0,0,0),t}let a=(0,F.default)(n,t.trim(),!0);if(a.isValid())return r&&(a=a.add(1,`d`)),a.toDate();let o=(0,F.default)(e),[s,c]=Xe(n);if(!Number.isNaN(s)){let e=o.add(s,c);e.isValid()&&(o=e)}return o.toDate()},`getEndDate`),Qe=0,J=n(function(e){return e===void 0?(Qe+=1,`task`+Qe):e},`parseId`),$e=n(function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};pt(r,i,he);for(let e=0;e<r.length;e++)r[e]=r[e].trim();let a=``;switch(r.length){case 1:i.id=J(),i.startTime=e.endTime,a=r[0];break;case 2:i.id=J(),i.startTime=Ye(void 0,I,r[0]),a=r[1];break;case 3:i.id=J(r[0]),i.startTime=Ye(void 0,I,r[1]),a=r[2]}return a&&(i.endTime=Ze(i.startTime,I,a,K),i.manualEndTime=(0,F.default)(a,`YYYY-MM-DD`,!0).isValid(),qe(i,I,V,B)),i},`compileData`),et=n(function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};pt(r,i,he);for(let e=0;e<r.length;e++)r[e]=r[e].trim();switch(r.length){case 1:i.id=J(),i.startTime={type:`prevTaskEnd`,id:e},i.endTime={data:r[0]};break;case 2:i.id=J(),i.startTime={type:`getStartDate`,startData:r[0]},i.endTime={data:r[1]};break;case 3:i.id=J(r[0]),i.startTime={type:`getStartDate`,startData:r[1]},i.endTime={data:r[2]}}return i},`parseData`),tt,Y,X=[],nt={},rt=n(function(e,t){let n={section:G,type:G,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:t},task:e,classes:[]},r=et(Y,t);n.raw.startTime=r.startTime,n.raw.endTime=r.endTime,n.id=r.id,n.prevTaskId=Y,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.order=ye,ye++;let i=X.push(n);Y=n.id,nt[n.id]=i-1},`addTask`),Z=n(function(e){let t=nt[e];return X[t]},`findTaskById`),it=n(function(e,t){let n={section:G,type:G,description:e,task:e,classes:[]},r=$e(tt,t);n.startTime=r.startTime,n.endTime=r.endTime,n.id=r.id,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,tt=n,W.push(n)},`addTaskOrg`),at=n(function(){let e=n(function(e){let t=X[e],n=``;switch(X[e].raw.startTime.type){case`prevTaskEnd`:t.startTime=Z(t.prevTaskId).endTime;break;case`getStartDate`:n=Ye(void 0,I,X[e].raw.startTime.startData),n&&(X[e].startTime=n)}return X[e].startTime&&(X[e].endTime=Ze(X[e].startTime,I,X[e].raw.endTime.data,K),X[e].endTime&&(X[e].processed=!0,X[e].manualEndTime=(0,F.default)(X[e].raw.endTime.data,`YYYY-MM-DD`,!0).isValid(),qe(X[e],I,V,B))),X[e].processed},`compileTask`),t=!0;for(let[n,r]of X.entries())e(n),t&&=r.processed;return t},`compileTasks`),ot=n(function(e,t){let n=t;l().securityLevel!==`loose`&&(n=(0,le.sanitizeUrl)(t)),e.split(`,`).forEach(function(e){Z(e)!==void 0&&(lt(e,()=>{window.open(n,`_self`)}),H.set(e,n))}),st(e,`clickable`)},`setLink`),st=n(function(e,t){e.split(`,`).forEach(function(e){let n=Z(e);n!==void 0&&n.classes.push(t)})},`setClass`),ct=n(function(e,t,n){if(l().securityLevel!==`loose`||t===void 0)return;let r=[];if(typeof n==`string`){r=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let e=0;e<r.length;e++){let t=r[e].trim();t.startsWith(`"`)&&t.endsWith(`"`)&&(t=t.substr(1,t.length-2)),r[e]=t}}r.length===0&&r.push(e),Z(e)!==void 0&&lt(e,()=>{ie.runFunc(t,...r)})},`setClickFun`),lt=n(function(e,t){ge.push(function(){let n=document.querySelector(`[id="${e}"]`);n!==null&&n.addEventListener(`click`,function(){t()})},function(){let n=document.querySelector(`[id="${e}-text"]`);n!==null&&n.addEventListener(`click`,function(){t()})})},`pushFun`),ut=n(function(e,t,n){e.split(`,`).forEach(function(e){ct(e,t,n)}),st(e,`clickable`)},`setClickEvent`),dt=n(function(e){ge.forEach(function(t){t(e)})},`bindFunctions`),ft={getConfig:n(()=>l().gantt,`getConfig`),clear:be,setDateFormat:De,getDateFormat:Pe,enableInclusiveEndDates:Oe,endDatesAreInclusive:ke,enableTopAxis:Ae,topAxisEnabled:je,setAxisFormat:xe,getAxisFormat:Se,setTickInterval:Ce,getTickInterval:we,setTodayMarker:Te,getTodayMarker:Ee,setAccTitle:p,getAccTitle:S,setDiagramTitle:c,getDiagramTitle:O,setDisplayMode:Me,getDisplayMode:Ne,setAccDescription:k,getAccDescription:u,addSection:Be,getSections:Ve,getTasks:He,addTask:rt,findTaskById:Z,addTaskOrg:it,setIncludes:Fe,getIncludes:Ie,setExcludes:Le,getExcludes:Re,setClickEvent:ut,setLink:ot,getLinks:ze,bindFunctions:dt,parseDuration:Xe,isInvalidDate:Ue,setWeekday:We,getWeekday:Ge,setWeekend:Ke};function pt(e,t,n){let r=!0;for(;r;)r=!1,n.forEach(function(n){let i=`^\\s*`+n+`\\s*$`,a=new RegExp(i);e[0].match(a)&&(t[n]=!0,e.shift(1),r=!0)})}n(pt,`getTaskTags`);var Q=e(s(),1),mt=n(function(){o.debug(`Something is calling, setConf, remove the call`)},`setConf`),ht={monday:A,tuesday:x,wednesday:_,thursday:y,friday:ee,saturday:v,sunday:M},gt=n((e,t)=>{let n=[...e].map(()=>-1/0),r=[...e].sort((e,t)=>e.startTime-t.startTime||e.order-t.order),i=0;for(let e of r)for(let r=0;r<n.length;r++)if(e.startTime>=n[r]){n[r]=e.endTime,e.order=r+t,r>i&&(i=r);break}return i},`getMaxIntersections`),$,_t={parser:ce,db:ft,renderer:{setConf:mt,draw:n(function(e,t,s,c){let u=l().gantt,p=l().securityLevel,_;p===`sandbox`&&(_=r(`#i`+t));let v=r(p===`sandbox`?_.nodes()[0].contentDocument.body:`body`),y=p===`sandbox`?_.nodes()[0].contentDocument:document,b=y.getElementById(t);$=b.parentElement.offsetWidth,$===void 0&&($=1200),u.useWidth!==void 0&&($=u.useWidth);let x=c.db.getTasks(),S=[];for(let e of x)S.push(e.type);S=ce(S);let O={},k=2*u.topPadding;if(c.db.getDisplayMode()===`compact`||u.displayMode===`compact`){let e={};for(let t of x)e[t.section]===void 0?e[t.section]=[t]:e[t.section].push(t);let t=0;for(let n of Object.keys(e)){let r=gt(e[n],t)+1;t+=r,k+=r*(u.barHeight+u.barGap),O[n]=r}}else{k+=x.length*(u.barHeight+u.barGap);for(let e of S)O[e]=x.filter(t=>t.type===e).length}b.setAttribute(`viewBox`,`0 0 `+$+` `+k);let A=v.select(`[id="${t}"]`),M=T().domain([a(x,function(e){return e.startTime}),j(x,function(e){return e.endTime})]).rangeRound([0,$-u.leftPadding-u.rightPadding]);function ee(e,t){let n=e.startTime,r=t.startTime,i=0;return n>r?i=1:n<r&&(i=-1),i}n(ee,`taskCompare`),x.sort(ee),N(x,$,k),C(A,k,$,u.useMaxWidth),A.append(`text`).text(c.db.getDiagramTitle()).attr(`x`,$/2).attr(`y`,u.titleTopMargin).attr(`class`,`titleText`);function N(e,t,n){let r=u.barHeight,i=r+u.barGap,a=u.topPadding,o=u.leftPadding,s=g().domain([0,S.length]).range([`#00B9FA`,`#F95002`]).interpolate(D);ae(i,a,o,t,n,e,c.db.getExcludes(),c.db.getIncludes()),oe(o,a,t,n),ie(e,i,a,o,r,s,t,n),se(i,a,o,r,s),P(o,a,t,n)}n(N,`makeGantt`);function ie(e,n,i,a,o,s,d){let f=[...new Set(e.map(e=>e.order))].map(t=>e.find(e=>e.order===t));A.append(`g`).selectAll(`rect`).data(f).enter().append(`rect`).attr(`x`,0).attr(`y`,function(e,t){return t=e.order,t*n+i-2}).attr(`width`,function(){return d-u.rightPadding/2}).attr(`height`,n).attr(`class`,function(e){for(let[t,n]of S.entries())if(e.type===n)return`section section`+t%u.numberSectionStyles;return`section section0`});let p=A.append(`g`).selectAll(`rect`).data(e).enter(),m=c.db.getLinks();if(p.append(`rect`).attr(`id`,function(e){return e.id}).attr(`rx`,3).attr(`ry`,3).attr(`x`,function(e){return e.milestone?M(e.startTime)+a+.5*(M(e.endTime)-M(e.startTime))-.5*o:M(e.startTime)+a}).attr(`y`,function(e,t){return t=e.order,t*n+i}).attr(`width`,function(e){return e.milestone?o:M(e.renderEndTime||e.endTime)-M(e.startTime)}).attr(`height`,o).attr(`transform-origin`,function(e,t){return t=e.order,(M(e.startTime)+a+.5*(M(e.endTime)-M(e.startTime))).toString()+`px `+(t*n+i+.5*o).toString()+`px`}).attr(`class`,function(e){let t=``;e.classes.length>0&&(t=e.classes.join(` `));let n=0;for(let[t,r]of S.entries())e.type===r&&(n=t%u.numberSectionStyles);let r=``;return e.active?e.crit?r+=` activeCrit`:r=` active`:e.done?r=e.crit?` doneCrit`:` done`:e.crit&&(r+=` crit`),r.length===0&&(r=` task`),e.milestone&&(r=` milestone `+r),r+=n,r+=` `+t,`task`+r}),p.append(`text`).attr(`id`,function(e){return e.id+`-text`}).text(function(e){return e.task}).attr(`font-size`,u.fontSize).attr(`x`,function(e){let t=M(e.startTime),n=M(e.renderEndTime||e.endTime);e.milestone&&(t+=.5*(M(e.endTime)-M(e.startTime))-.5*o),e.milestone&&(n=t+o);let r=this.getBBox().width;return r>n-t?n+r+1.5*u.leftPadding>d?t+a-5:n+a+5:(n-t)/2+t+a}).attr(`y`,function(e,t){return t=e.order,t*n+u.barHeight/2+(u.fontSize/2-2)+i}).attr(`text-height`,o).attr(`class`,function(e){let t=M(e.startTime),n=M(e.endTime);e.milestone&&(n=t+o);let r=this.getBBox().width,i=``;e.classes.length>0&&(i=e.classes.join(` `));let a=0;for(let[t,n]of S.entries())e.type===n&&(a=t%u.numberSectionStyles);let s=``;return e.active&&(s=e.crit?`activeCritText`+a:`activeText`+a),e.done?s=e.crit?s+` doneCritText`+a:s+` doneText`+a:e.crit&&(s=s+` critText`+a),e.milestone&&(s+=` milestoneText`),r>n-t?n+r+1.5*u.leftPadding>d?i+` taskTextOutsideLeft taskTextOutside`+a+` `+s:i+` taskTextOutsideRight taskTextOutside`+a+` `+s+` width-`+r:i+` taskText taskText`+a+` `+s+` width-`+r}),l().securityLevel===`sandbox`){let e;e=r(`#i`+t);let n=e.nodes()[0].contentDocument;p.filter(function(e){return m.has(e.id)}).each(function(e){var t=n.querySelector(`#`+e.id),r=n.querySelector(`#`+e.id+`-text`);let i=t.parentNode;var a=n.createElement(`a`);a.setAttribute(`xlink:href`,m.get(e.id)),a.setAttribute(`target`,`_top`),i.appendChild(a),a.appendChild(t),a.appendChild(r)})}}n(ie,`drawRects`);function ae(e,t,n,r,i,a,s,l){if(s.length===0&&l.length===0)return;let d,f;for(let{startTime:e,endTime:t}of a)(d===void 0||e<d)&&(d=e),(f===void 0||t>f)&&(f=t);if(!d||!f)return;if((0,Q.default)(f).diff((0,Q.default)(d),`year`)>5){o.warn(`The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.`);return}let p=c.db.getDateFormat(),m=[],h=null,g=(0,Q.default)(d);for(;g.valueOf()<=f;)c.db.isInvalidDate(g,p,s,l)?h?h.end=g:h={start:g,end:g}:h&&=(m.push(h),null),g=g.add(1,`d`);A.append(`g`).selectAll(`rect`).data(m).enter().append(`rect`).attr(`id`,function(e){return`exclude-`+e.start.format(`YYYY-MM-DD`)}).attr(`x`,function(e){return M(e.start)+n}).attr(`y`,u.gridLineStartPadding).attr(`width`,function(e){let t=e.end.add(1,`day`);return M(t)-M(e.start)}).attr(`height`,i-t-u.gridLineStartPadding).attr(`transform-origin`,function(t,r){return(M(t.start)+n+.5*(M(t.end)-M(t.start))).toString()+`px `+(r*e+.5*i).toString()+`px`}).attr(`class`,`exclude-range`)}n(ae,`drawExcludeDays`);function oe(e,t,n,r){let a=h(M).tickSize(-r+t+u.gridLineStartPadding).tickFormat(re(c.db.getAxisFormat()||u.axisFormat||`%Y-%m-%d`)),o=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(c.db.getTickInterval()||u.tickInterval);if(o!==null){let e=o[1],t=o[2],n=c.db.getWeekday()||u.weekday;switch(t){case`millisecond`:a.ticks(te.every(e));break;case`second`:a.ticks(m.every(e));break;case`minute`:a.ticks(ne.every(e));break;case`hour`:a.ticks(i.every(e));break;case`day`:a.ticks(f.every(e));break;case`week`:a.ticks(ht[n].every(e));break;case`month`:a.ticks(d.every(e))}}if(A.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+(r-50)+`)`).call(a).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10).attr(`dy`,`1em`),c.db.topAxisEnabled()||u.topAxis){let n=E(M).tickSize(-r+t+u.gridLineStartPadding).tickFormat(re(c.db.getAxisFormat()||u.axisFormat||`%Y-%m-%d`));if(o!==null){let e=o[1],t=o[2],r=c.db.getWeekday()||u.weekday;switch(t){case`millisecond`:n.ticks(te.every(e));break;case`second`:n.ticks(m.every(e));break;case`minute`:n.ticks(ne.every(e));break;case`hour`:n.ticks(i.every(e));break;case`day`:n.ticks(f.every(e));break;case`week`:n.ticks(ht[r].every(e));break;case`month`:n.ticks(d.every(e))}}A.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+t+`)`).call(n).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10)}}n(oe,`makeGrid`);function se(e,t){let n=0,r=Object.keys(O).map(e=>[e,O[e]]);A.append(`g`).selectAll(`text`).data(r).enter().append(function(e){let t=e[0].split(w.lineBreakRegex),n=-(t.length-1)/2,r=y.createElementNS(`http://www.w3.org/2000/svg`,`text`);r.setAttribute(`dy`,n+`em`);for(let[e,n]of t.entries()){let t=y.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttribute(`alignment-baseline`,`central`),t.setAttribute(`x`,`10`),e>0&&t.setAttribute(`dy`,`1em`),t.textContent=n,r.appendChild(t)}return r}).attr(`x`,10).attr(`y`,function(i,a){if(a>0)for(let o=0;o<a;o++)return n+=r[a-1][1],i[1]*e/2+n*e+t;else return i[1]*e/2+t}).attr(`font-size`,u.sectionFontSize).attr(`class`,function(e){for(let[t,n]of S.entries())if(e[0]===n)return`sectionTitle sectionTitle`+t%u.numberSectionStyles;return`sectionTitle`})}n(se,`vertLabels`);function P(e,t,n,r){let i=c.db.getTodayMarker();if(i===`off`)return;let a=A.append(`g`).attr(`class`,`today`),o=new Date,s=a.append(`line`);s.attr(`x1`,M(o)+e).attr(`x2`,M(o)+e).attr(`y1`,u.titleTopMargin).attr(`y2`,r-u.titleTopMargin).attr(`class`,`today`),i!==``&&s.attr(`style`,i.replace(/,/g,`;`))}n(P,`drawToday`);function ce(e){let t={},n=[];for(let r=0,i=e.length;r<i;++r)Object.prototype.hasOwnProperty.call(t,e[r])||(t[e[r]]=!0,n.push(e[r]));return n}n(ce,`checkUnique`)},`draw`)},styles:n(e=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,`getStyles`)};export{_t as diagram};