window.deepCache={};
window.markdownCourse=function(md){
 const math=[];
 const protectedText=md.replace(/\$\$[\s\S]+?\$\$|\$[^\n$]+\$/g,m=>{math.push(m);return `MATHPLACEHOLDER${math.length-1}END`});
 let html=marked.parse(protectedText,{gfm:true,breaks:false});
 html=html.replace(/MATHPLACEHOLDER(\d+)END/g,(_,i)=>`<span class="${math[i].startsWith('$$')?'math-display':'math-inline'}">${math[i].replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</span>`);
 let i=0;html=html.replace(/<h2>/g,()=>`<h2 id="unit-${i++}">`);
 html=html.replace(/<img src="(assets\/[^"]+)" alt="([^"]*)"[^>]*>/g,(_,src,alt)=>`<span class="course-figure"><button type="button" class="figure-open" data-action="figure" data-src="${src}" data-alt="${alt}" aria-label="放大图解：${alt}"><img src="${src}" alt="${alt}" decoding="async"><span class="figure-caption">${alt}<small>点击放大 ↗</small></span></button></span>`);
 return html;
};
window.deepGuide=async function(c){
 try{
  if(!deepCache[c.id]){const r=await fetch(`content/ch${String(c.id).padStart(2,'0')}.md`);if(!r.ok)return null;deepCache[c.id]=await r.text()}
  const md=deepCache[c.id],headings=[...md.matchAll(/^## (.+)$/gm)].map(m=>m[1]),units=headings.length;
  return `<div class="course-context"><span>完整课程 · ${units} 个学习单元</span><a href="#chapter/${c.id}/path">先进入本章思想研习 →</a><span>概念 · 论证 · 例题 · 习题中的延伸</span></div><div class="deep-layout"><article class="deep-lesson">${markdownCourse(md)}<div class="lesson-next"><button class="primary" data-action="complete" data-chapter="${c.id}">标记本章课程完成</button><a href="${c.id<30?'#chapter/'+(c.id+1)+'/guide':'#review'}">${c.id<30?'学习下一章':'进入全书复习'} →</a></div></article><aside class="deep-rail"><span class="eyebrow">本章内容</span>${headings.map((h,i)=>`<a href="#unit-${i}" data-scroll="unit-${i}">${h.replace(/\*\*/g,'')}</a>`).join('')}<hr><a href="#chapter/${c.id}/practice">进入习题训练 ↗</a><a href="#chapter/${c.id}/lab">进入交互实验 ↗</a><a href="#chapter/${c.id}/notes">写下证明与笔记 ↗</a><a href="#chapter/${c.id}/read">核对原书参考页 ↗</a></aside></div>`;
 }catch{return null}
};
window.insightChapter=async function(c){
 const md=await loadMD('insight'+String(c.id).padStart(2,'0'));
 const headings=[...md.matchAll(/^## (.+)$/gm)].map(m=>m[1]);
 const insightCount=(md.match(/^## \d+．/gm)||[]).length;
 const links=headings.map((h,i)=>`<a href="#chapter/${c.id}/insight/unit-${i}" data-scroll="unit-${i}">${esc(h)}</a>`).join('');
 const body=markdownCourse(md).replace(/<blockquote>/g,'<blockquote lang="en" aria-label="作者原话">');
 return `<div class="course-context insight-context"><span>原文精读 · 章节结构与 ${insightCount} 条 Insight</span><a href="#chapter/${c.id}/original">对照英文原文 →</a></div>
 <details class="insight-mobile-toc"><summary>阅读目录 · 章节结构与 ${insightCount} 条 Insight</summary><nav aria-label="Insight 阅读目录">${links}</nav></details>
 <div class="deep-layout insight-layout"><article class="deep-lesson insight-lesson">${body}<div class="lesson-next"><a class="button" href="#chapter/${c.id}/practice">进入习题训练 →</a><a href="#chapter/${c.id}/notes">写下自己的理解 →</a></div></article><aside class="deep-rail insight-rail"><span class="eyebrow">阅读目录</span>${links}<hr><a href="#chapter/${c.id}/original">对照英文原文 ↗</a></aside></div>`;
};
window.typesetCourse=async function(){if(window.MathJax?.startup?.promise){await MathJax.startup.promise;MathJax.typesetClear?.();MathJax.texReset?.();await MathJax.typesetPromise?.([document.querySelector('#content')]);}};
