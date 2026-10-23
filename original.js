const originalChapterData=new Map();
const originalTranslationData=new Map();
const originalModes={en:'英文原文',zh:'中文译文',both:'中英对照'};
const originalRunningTitles={'Basic Properties of Numbers':'数的基本性质','Numbers of Various Sorts':'各种数','Continuous Functions':'连续函数','Three Hard Theorems':'三个困难的定理','Least Upper Bounds':'最小上界','Derivatives and Integrals':'导数与积分','The Conic Sections':'圆锥曲线','Polar Coordinates':'极坐标','Uniform Continuity':'一致连续','Ordered Pairs':'有序对','Significance of the Derivative':'导数的意义','Convexity and Concavity':'凸性与凹性','Inverse Functions':'反函数','Parametric Representation of Curves':'曲线的参数表示','Riemann Sums':'黎曼和','The Fundamental Theorem of Calculus':'微积分基本定理','The Trigonometric Functions':'三角函数','π is Irrational':'π 是无理数','Planetary Motion':'行星运动','The Logarithm and Exponential Functions':'对数函数与指数函数','Integration in Elementary Terms':'用初等函数求积分','The Cosmopolitan Integral':'无处不在的积分','Approximation by Polynomial Functions':'用多项式函数作近似','Infinite Sequences and Infinite Series':'无穷数列与无穷级数','e is Transcendental':'e 是超越数','Infinite Sequences':'无穷数列','Infinite Series':'无穷级数','Uniform Convergence and Power Series':'一致收敛与幂级数','Complex Numbers':'复数','Complex Functions':'复函数','Complex Power Series':'复幂级数','Fields':'域','Construction of the Real Numbers':'实数的构造','Uniqueness of the Real Numbers':'实数的唯一性','Epilogue':'尾声','Differentiation':'求导','Derivatives':'导数','Integrals':'积分','Foundations':'基础','Functions':'函数','Prologue':'序曲','Vectors':'向量','Graphs':'图像','Limits':'极限','Appendix':'附录'};
function originalRunningChinese(text){
 return Object.entries(originalRunningTitles).sort(([a],[b])=>b.length-a.length).reduce((result,[en,zh])=>result.replace(en,zh),text);
}
let originalReadingMode='both';
try{const saved=localStorage.getItem('spivak-original-mode-v1');if(Object.hasOwn(originalModes,saved))originalReadingMode=saved}catch{}
function originalModeButtons(mode){
 return `<div class="original-mode-buttons" role="group" aria-label="阅读模式">${Object.entries(originalModes).map(([value,label])=>`<button type="button" data-original-mode="${value}" aria-pressed="${mode===value}" aria-controls="original-reader">${label}</button>`).join('')}</div>`;
}
function originalModeControls(mode){
 return `<div class="original-language-toolbar"><div class="original-language-row"><span class="original-language-label">阅读模式</span>${originalModeButtons(mode)}</div><p id="original-mode-status" role="status">${mode==='both'?'逐段对照：英文在上，中文在下。':mode==='zh'?'只显示中文译文。':'只显示英文原文。'}公式、图表与原页码保留。</p></div>`;
}
let originalToolbarCleanup=()=>{};
window.bindOriginalToolbar=function(){
 originalToolbarCleanup();
 const toolbar=document.querySelector('.original-language-toolbar'),topbar=document.querySelector('.topbar');
 if(!toolbar||!topbar)return;
 const dock=document.createElement('div');
 dock.className='topbar-original-modes';dock.hidden=true;dock.innerHTML=originalModeButtons(originalReadingMode);
 topbar.insertBefore(dock,topbar.querySelector('.top-actions'));
 let frame=0;
 const update=()=>{
  frame=0;
  const compact=toolbar.getBoundingClientRect().bottom<=topbar.getBoundingClientRect().bottom;
  dock.hidden=!compact;
  topbar.classList.toggle('has-original-modes',compact);
 };
 const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
 window.addEventListener('scroll',schedule,{passive:true});
 window.addEventListener('resize',schedule);
 update();
 originalToolbarCleanup=()=>{
  window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);
  if(frame)cancelAnimationFrame(frame);
  dock.remove();topbar.classList.remove('has-original-modes');
 };
};
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-original-mode]');
 if(!button)return;
 const mode=button.dataset.originalMode,reader=document.getElementById('original-reader');
 if(!reader||!Object.hasOwn(originalModes,mode))return;
 // Keep the same paragraph in view when a long chapter changes height.
 const toolbar=document.querySelector('.original-language-toolbar');
 const threshold=Math.max(document.querySelector('.topbar')?.getBoundingClientRect().bottom||0,toolbar?.getBoundingClientRect().bottom||0)+12;
 const anchor=[...reader.querySelectorAll('.original-pair,.original-shared,.original-page-heading')].find(el=>el.getBoundingClientRect().bottom>threshold);
 const oldTop=anchor?.getBoundingClientRect().top;
 originalReadingMode=mode;
 reader.dataset.mode=mode;
 reader.lang=mode==='en'?'en':'zh-CN';
 document.querySelectorAll('[data-original-mode]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.originalMode===mode)));
 document.getElementById('original-mode-status').textContent=(mode==='both'?'逐段对照：英文在上，中文在下。':mode==='zh'?'只显示中文译文。':'只显示英文原文。')+'公式、图表与原页码保留。';
 try{localStorage.setItem('spivak-original-mode-v1',mode)}catch{}
 if(anchor&&oldTop<threshold+120)window.scrollBy({top:anchor.getBoundingClientRect().top-oldTop,behavior:'instant'});
});
window.originalCollection=function(){
 const chapters=COURSE_META.originalChapters||[];
 return `<div class="chapter-heading"><div class="eyebrow">CLOSE READING · SPIVAK</div><h1>英文原文与 Insight</h1><p>逐页读作者的论证，再回到定义的动机、证明的关键与习题中的思想。</p></div>
 <div class="original-collection">${chapters.map(d=>{
  const c=COURSE.find(x=>x.id===d.chapter);
  const hasInsight=(COURSE_META.insightChapters||[]).some(x=>x.chapter===d.chapter);
  const bilingual=(COURSE_META.translationChapters||[]).some(x=>x.chapter===d.chapter);
  return `<section class="original-collection-card"><span class="eyebrow">CHAPTER ${String(d.chapter).padStart(2,'0')}</span><h2>${esc(c.title)}</h2><p lang="en">${esc(c.en)}</p><p class="muted">印刷页 ${d.printedPages.join('–')} · ${d.problemGroups?d.problemGroups+" 组习题":"本章无独立题组"}${bilingual?' · 支持逐段中英对照':''}</p><div><a class="button" href="#chapter/${d.chapter}/original">${bilingual?'阅读原文与译文':'阅读英文原文'} →</a>${hasInsight?`<a href="#chapter/${d.chapter}/insight">进入 Insight →</a>`:''}</div></section>`;
 }).join('')}</div><p class="muted">英文正文与公式可直接在网页阅读。原图及图中标注保留原版图示，页首可打开扫描页核对。Insight 包含章节结构、作者原话、推导与自查。</p>`;
};
window.originalChapter=async function(c){
 const file='original/ch'+String(c.id).padStart(2,'0');
 if(!originalChapterData.has(c.id)){
  const r=await fetch(file+'.json');
  if(!r.ok)throw Error('英文原文加载失败，请刷新重试。');
  originalChapterData.set(c.id,await r.json());
 }
 const d=originalChapterData.get(c.id),route=`#chapter/${c.id}/original`;
 const translationMeta=(COURSE_META.translationChapters||[]).find(x=>x.chapter===c.id);
 let translated=null,translationError='';
 if(translationMeta){
  try{
   if(!originalTranslationData.has(c.id)){
    const response=await fetch(`translations/ch${String(c.id).padStart(2,'0')}.json?v=${translationMeta.sha256}`);
    if(!response.ok)throw Error('译文暂未加载，请重试。');
    const data=await response.json();
    if(data.chapter!==c.id||data.pages.length!==d.pages.length||data.pages.some((p,i)=>p.printed!==d.pages[i].printed||p.sourceSha256!==d.pages[i].transcriptionSha256))throw Error('原文已更新，译文需要重新核对。');
    originalTranslationData.set(c.id,data);
   }
   translated=originalTranslationData.get(c.id);
  }catch(error){translationError=error.message}
 }
 const pageLinks=d.pages.map(p=>`<a href="${route}/original-p-${p.printed}" data-scroll="original-p-${p.printed}" aria-label="Page ${p.printed}">${p.printed}</a>`).join('');
 const body=d.pages.map(p=>{
  // Printed equation numbers repeat across proofs; keep their DOM anchors distinct.
  let equation=0;
  const render=(text,lang='en')=>markdownCourse(text.replace(/\\tag(?=\*?\{)/g,()=>`\\label{original-ch${c.id}-p${p.printed}-${lang}-eq${++equation}}\\tag`)).replace(/ id="unit-\d+"/g,'');
  const exerciseId=text=>{const match=text.match(/^### (?:\\\*)*(\d+)\./);return match?`original-${p.appendix?'a'+p.appendix+'-':''}ex-${match[1]}`:''};
  const aligned=translated?.pages.find(page=>page.printed===p.printed);
  let html;
  if(aligned){
   html=aligned.blocks.map(block=>{
    const anchor=exerciseId(block.source);
    if(block.translation){
     return `<div class="original-pair" id="${anchor||'original-'+block.id}" data-paragraph="${block.id}"><div class="original-en" lang="en">${render(block.source)}</div><div class="original-zh" lang="zh-CN">${render(block.translation,'zh')}</div></div>`;
    }
    // Structural HTML remains in place; formulas, numeric labels and tables are shared.
    if(/^<\/?(?:div|aside)\b[^>]*>$/.test(block.source))return block.source;
    let shared=render(block.source);
    if(block.source.startsWith('<figure'))shared=shared.replace(/<figcaption>FIGURE (\d+)<\/figcaption>/g,(_,n)=>`<figcaption><span class="original-en" lang="en">FIGURE ${n}</span><span class="original-zh" lang="zh-CN">图 ${n}</span></figcaption>`);
    return `<div class="original-shared"${anchor?` id="${anchor}"`:''}>${shared}</div>`;
   }).join('\n');
  }else{
   html=render(p.markdown).replace(/<h3>((?:\\?\*)*)(\d+)\./g,(_,star,n)=>`<h3 id="original-${p.appendix?'a'+p.appendix+'-':''}ex-${n}">${star}${n}.`);
  }
  const runningZh=originalRunningChinese(p.running||'');
  return `<section class="original-page" id="original-p-${p.printed}" aria-label="Printed page ${p.printed}">
   <header class="original-page-heading"><span class="original-running">${translated?`<span class="original-en" lang="en">${esc(p.running)}</span><span class="original-zh" lang="zh-CN">${esc(runningZh)}</span>`:`<span lang="en">${esc(p.running)}</span>`}</span><button data-action="zoom" data-book="book" data-page="${p.pdf}" aria-label="核对第 ${p.printed} 页扫描图">核对扫描页 · p. ${p.printed}</button></header>
   ${p.blank?'<p class="original-blank" lang="zh-CN">此处保留原书空白页 · p. '+p.printed+'</p>':'<div class="original-body">'+html+'</div>'}
  </section>`;
 }).join('');
 return `<div class="original-intro"><div><h2>第 ${c.id} 章 · ${translated?'原文与逐段译文':'英文原文'}</h2><p>印刷页 ${d.printedPages.join('–')} · 正文、公式、脚注、图表${d.problemGroups?"与全部 "+d.problemGroups+" 组习题":"；本章原书无独立编号题组"}。${translated?'中文按原文逐段翻译；独立公式和图表共用，段内公式原样保留。':'英文措辞与数学内容按原书转写，换行随屏幕调整。'}${d.blankPages?.length?'第 '+d.blankPages.join('、')+' 页为原书空白页。':''}</p></div><a href="${file}.md" download="Spivak-Chapter-${c.id}-English.md" class="button">下载英文文本</a></div>
 ${translationError?`<p class="original-translation-error" role="alert">${esc(translationError)} 当前仍可阅读英文原文。<button data-action="retry">重新加载译文</button></p>`:''}
 <nav class="original-page-nav" aria-label="英文原文页码"><span>Pages</span>${pageLinks}${d.mainProblemGroups?`<a class="original-problems-link" href="${route}/original-ex-1" data-scroll="original-ex-1">Problems</a>`:""}${(d.appendices||[]).map(a=>`<a href="${route}/original-p-${a.printedPages[0]}" data-scroll="original-p-${a.printedPages[0]}">Appendix ${a.id} · ${esc(a.title)}</a>`).join('')}</nav>
 ${translated?originalModeControls(originalReadingMode):''}
 <article class="original-book" id="original-reader" data-mode="${translated?originalReadingMode:'en'}" lang="${translated&&originalReadingMode!=='en'?'zh-CN':'en'}" aria-label="Chapter ${c.id}: ${esc(d.title)}">${body}</article>
 <div class="original-end"><a href="${route}/original-p-${d.printedPages[0]}" data-scroll="original-p-${d.printedPages[0]}">Back to page ${d.printedPages[0]}</a><a href="#chapter/${c.id}/insight">进入本章 Insight →</a></div>`;
};
