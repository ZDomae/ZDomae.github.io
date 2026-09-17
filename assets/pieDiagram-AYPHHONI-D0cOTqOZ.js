import{t as e}from"./chunk-GTKDMUJJ-BbgDWR4E.js";import"./chunk-6BY5RJGC-D5OZg59P.js";import"./chunk-5ZJXQJOJ-BM1W2kV9.js";import{l as t}from"./chunk-SDI2JJQM-C58NT77P.js";import{t as n}from"./chunk-4KE642ED-CENyt1YS.js";import{Ft as r,Gt as i,H as a,Ht as o,J as s,M as c,Vt as l,X as u,_t as d,a as f,i as p,j as m,tt as h,z as g}from"./chunk-OR2G2HG5-DUH13KUR.js";import"./chunk-TI4EEUUG-DbrZB-iv.js";import{c as _,o as v}from"./chunk-UENA7NWE-D08VZsiE.js";import{o as y}from"./mermaid.esm.min-sxPeGTSb.js";var b=h.pie,x={sections:new Map,showData:!1,config:b},S=x.sections,C=x.showData,w=structuredClone(b),T=e(()=>structuredClone(w),`getConfig`),E=e(()=>{S=new Map,C=x.showData,u()},`clear`),D=e(({label:e,value:t})=>{S.has(e)||(S.set(e,t),r.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),O=e(()=>S,`getSections`),k=e(e=>{C=e},`setShowData`),A=e(()=>C,`getShowData`),j={getConfig:T,clear:E,setDiagramTitle:i,getDiagramTitle:p,setAccTitle:c,getAccTitle:d,setAccDescription:m,getAccDescription:o,addSection:D,getSections:O,setShowData:k,getShowData:A},M=e((e,t)=>{n(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),N={parse:e(async e=>{let n=await t(`pie`,e);r.debug(n),M(n,j)},`parse`)},P=e(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),F=e(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return l().value(e=>e.value)(t)},`createPieArcs`),I={parser:N,db:j,renderer:{draw:e((e,t,n,i)=>{r.debug(`rendering pie chart
`+e);let o=i.db,c=a(),l=v(o.getConfig(),c.pie),u=y(t),d=u.append(`g`);d.attr(`transform`,`translate(225,225)`);let{themeVariables:p}=c,[m]=_(p.pieOuterStrokeWidth);m??=2;let h=l.textPosition,b=s().innerRadius(0).outerRadius(185),x=s().innerRadius(185*h).outerRadius(185*h);d.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+m/2).attr(`class`,`pieOuterCircle`);let S=o.getSections(),C=F(S),w=[p.pie1,p.pie2,p.pie3,p.pie4,p.pie5,p.pie6,p.pie7,p.pie8,p.pie9,p.pie10,p.pie11,p.pie12],T=g(w);d.selectAll(`mySlices`).data(C).enter().append(`path`).attr(`d`,b).attr(`fill`,e=>T(e.data.label)).attr(`class`,`pieCircle`);let E=0;S.forEach(e=>{E+=e}),d.selectAll(`mySlices`).data(C).enter().append(`text`).text(e=>(e.data.value/E*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`),d.append(`text`).text(o.getDiagramTitle()).attr(`x`,0).attr(`y`,-200).attr(`class`,`pieTitleText`);let D=d.selectAll(`.legend`).data(T.domain()).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*T.domain().length/2;return`translate(216,`+(t*22-n)+`)`});D.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,T).style(`stroke`,T),D.data(C).append(`text`).attr(`x`,22).attr(`y`,14).text(e=>{let{label:t,value:n}=e.data;return o.getShowData()?`${t} [${n}]`:t});let O=512+Math.max(...D.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0));u.attr(`viewBox`,`0 0 ${O} 450`),f(u,450,O,l.useMaxWidth)},`draw`)},styles:P};export{I as diagram};