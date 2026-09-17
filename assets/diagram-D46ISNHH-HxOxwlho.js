import{t as e}from"./chunk-GTKDMUJJ-BbgDWR4E.js";import"./chunk-6BY5RJGC-D5OZg59P.js";import"./chunk-5ZJXQJOJ-BM1W2kV9.js";import{l as t}from"./chunk-SDI2JJQM-C58NT77P.js";import{t as n}from"./chunk-4KE642ED-CENyt1YS.js";import{Ft as r,Gt as i,Ht as a,M as o,X as s,_t as c,a as l,i as u,j as d,l as f,tt as p}from"./chunk-OR2G2HG5-DUH13KUR.js";import"./chunk-TI4EEUUG-DbrZB-iv.js";import{o as m}from"./chunk-UENA7NWE-D08VZsiE.js";import{o as h}from"./mermaid.esm.min-sxPeGTSb.js";var g={packet:[]},_=structuredClone(g),v=p.packet,y=e(()=>{let e=m({...v,...f().packet});return e.showBits&&(e.paddingY+=10),e},`getConfig`),b=e(()=>_.packet,`getPacket`),x={pushWord:e(e=>{e.length>0&&_.packet.push(e)},`pushWord`),getPacket:b,getConfig:y,clear:e(()=>{s(),_=structuredClone(g)},`clear`),setAccTitle:o,getAccTitle:c,setDiagramTitle:i,getDiagramTitle:u,getAccDescription:a,setAccDescription:d},S=1e4,C=e(e=>{n(e,x);let t=-1,i=[],a=1,{bitsPerRow:o}=x.getConfig();for(let{start:n,end:s,label:c}of e.blocks){if(s&&s<n)throw Error(`Packet block ${n} - ${s} is invalid. End must be greater than start.`);if(n!==t+1)throw Error(`Packet block ${n} - ${s??n} is not contiguous. It should start from ${t+1}.`);for(t=s??n,r.debug(`Packet block ${n} - ${t} with label ${c}`);i.length<=o+1&&x.getPacket().length<S;){let[e,t]=w({start:n,end:s,label:c},a,o);if(i.push(e),e.end+1===a*o&&(x.pushWord(i),i=[],a++),!t)break;({start:n,end:s,label:c}=t)}}x.pushWord(i)},`populate`),w=e((e,t,n)=>{if(e.end===void 0&&(e.end=e.start),e.start>e.end)throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);return e.end+1<=t*n?[e,void 0]:[{start:e.start,end:t*n-1,label:e.label},{start:t*n,end:e.end,label:e.label}]},`getNextFittingBlock`),T={parse:e(async e=>{let n=await t(`packet`,e);r.debug(n),C(n)},`parse`)},E=e((e,t,n,r)=>{let i=r.db,a=i.getConfig(),{rowHeight:o,paddingY:s,bitWidth:c,bitsPerRow:u}=a,d=i.getPacket(),f=i.getDiagramTitle(),p=o+s,m=p*(d.length+1)-(f?0:o),g=c*u+2,_=h(t);_.attr(`viewbox`,`0 0 ${g} ${m}`),l(_,m,g,a.useMaxWidth);for(let[e,t]of d.entries())D(_,t,e,a);_.append(`text`).text(f).attr(`x`,g/2).attr(`y`,m-p/2).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).attr(`class`,`packetTitle`)},`draw`),D=e((e,t,n,{rowHeight:r,paddingX:i,paddingY:a,bitWidth:o,bitsPerRow:s,showBits:c})=>{let l=e.append(`g`),u=n*(r+a)+a;for(let e of t){let t=e.start%s*o+1,n=(e.end-e.start+1)*o-i;if(l.append(`rect`).attr(`x`,t).attr(`y`,u).attr(`width`,n).attr(`height`,r).attr(`class`,`packetBlock`),l.append(`text`).attr(`x`,t+n/2).attr(`y`,u+r/2).attr(`class`,`packetLabel`).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).text(e.label),!c)continue;let a=e.end===e.start,d=u-2;l.append(`text`).attr(`x`,t+(a?n/2:0)).attr(`y`,d).attr(`class`,`packetByte start`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,a?`middle`:`start`).text(e.start),a||l.append(`text`).attr(`x`,t+n).attr(`y`,d).attr(`class`,`packetByte end`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,`end`).text(e.end)}},`drawWord`),O={draw:E},k={byteFontSize:`10px`,startByteColor:`black`,endByteColor:`black`,labelColor:`black`,labelFontSize:`12px`,titleColor:`black`,titleFontSize:`14px`,blockStrokeColor:`black`,blockStrokeWidth:`1`,blockFillColor:`#efefef`},A={parser:T,db:x,renderer:O,styles:e(({packet:e}={})=>{let t=m(k,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},`styles`)};export{A as diagram};