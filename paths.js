let pathData;
async function getPaths(){
 if(!pathData){const r=await fetch('data/learning-paths.json');if(!r.ok)throw Error('研习路径加载失败，请刷新重试。');pathData=await r.json()}
 return pathData;
}
function pathMarkdown(md){return markdownCourse(md).replace(/ id="unit-\d+"/g,'')}
function pathChapterLinks(ids){return ids.map(n=>'<a href="#chapter/'+n+'/path">'+n+' · '+esc(COURSE[n-1].title)+'</a>').join('')}
async function learningPath(c){
 const p=(await getPaths()).find(p=>p.chapter===c.id);
 if(!p)return deepGuide(c);
 const count=p.cases.reduce((a,x)=>a+x.rubric.filter((_,i)=>state.pathChecks[c.id+'-'+x.id+'-'+i]).length,0);
 const total=p.cases.reduce((a,x)=>a+x.rubric.length,0);
 return `<section class="path-intro"><div class="eyebrow">IDEAS INTO PROOFS · 逐步研习</div><h2>${esc(p.title)}</h2><p class="path-thesis">${esc(p.thesis)}</p><div class="deep-lesson">${pathMarkdown(p.intro)}</div><div class="path-sequence"><span>01 先写出想法</span><span>02 检查哪里失效</span><span>03 建立完整论证</span><span>04 改变条件再试</span></div><p class="muted">这里聚焦本章的关键思想。全部定义、证明、例题、附录和延伸仍在<a href="#chapter/${c.id}/guide">完整课程</a>中；完整题组在<a href="#chapter/${c.id}/practice">习题训练</a>中。检查题和迁移任务为课程编写，出处标明原书论证的范围。</p></section><div class="path-layout"><div>${p.cases.map((x,ix)=>{
 const key=c.id+'-'+x.id,record=state.pathAnswers[key],filepage=Object.entries(COURSE_META.pageMap).find(([fp,pp])=>pp===x.source[0])?.[0];
 return `<article class="path-case deep-lesson" id="case-${x.id}"><div class="eyebrow">思想线 ${String(ix+1).padStart(2,'0')}</div><h2>${esc(x.title.replace(/^\d+\.\s*/,''))}</h2><p class="path-source">原书印刷页 ${x.source.join('–')} · ${esc(x.basis)} <a href="#library/book/${filepage}">核对出处 ↗</a></p><div class="skill-tags">${x.skills.map(s=>'<span>'+esc(s)+'</span>').join('')}</div><section class="path-try"><h3>先试：让自己的想法先出现</h3>${pathMarkdown(x.sections['先试'])}<label for="draft-${key}">我的尝试与卡住的步骤</label><textarea class="proof-draft" id="draft-${key}" data-proof-draft="${key}" maxlength="30000" placeholder="写一个自然的做法；标出还没有理由支持的那一步。">${esc(state.proofDrafts[key]||'')}</textarea><small class="draft-status" aria-live="polite">保存在此浏览器，可随学习记录导出</small></section><fieldset class="path-check" data-check-key="${key}"><legend>停下来检查一个关键判断</legend><div>${pathMarkdown(x.check.question)}</div>${x.check.options.map((o,i)=>`<label class="check-option"><input type="radio" name="check-${key}" value="${i}" ${record?.choice===i?'checked':''}><span>${pathMarkdown(o.text)}</span></label>`).join('')}<button data-path-check="${key}" class="primary">检查我的理由</button> <button data-path-reset="${key}">重新作答</button><div class="check-feedback" role="status">${record&&x.check.options[record.choice]?pathFeedback(x.check.options[record.choice]):''}</div></fieldset><div class="path-hints"><details><summary>提示一 · 把困难缩小一点</summary>${pathMarkdown(x.sections['提示一'])}</details><details><summary>提示二 · 找到证明的支点</summary>${pathMarkdown(x.sections['提示二'])}</details><details class="path-proof"><summary>完整论证 · 检查每一个条件的去向</summary>${pathMarkdown(x.sections['完整论证'])}</details></div><section class="path-transfer"><h3>改变条件，想法还能走多远？</h3>${pathMarkdown(x.sections['变式'])}</section><fieldset class="path-rubric"><legend>合上论证，自查能否独立完成</legend>${x.rubric.map((r,i)=>`<label><input type="checkbox" data-path-rubric="${key}-${i}" ${state.pathChecks[key+'-'+i]?'checked':''}><span>${esc(r)}</span></label>`).join('')}<small>自查是你对独立复现能力的记录；选择题答对不等于证明已经掌握。</small></fieldset><div class="path-bridges"><h3>把这条思想线接回全章</h3>${x.units.map((u,i)=>`<a href="#chapter/${c.id}/guide/unit-${u}">${esc(x.unitTitles[i])} →</a>`).join('')}${x.exercises.map(ex=>`<a href="#chapter/${c.id}/practice/ex-${ex}">原书第 ${ex} 题 →</a>`).join('')}</div></article>`;
 }).join('')}<div class="path-finish"><h2>完成关键思想之后，继续把全章学完整</h2><p>用完整正文补齐其余论证，再用原书习题检验能否在新的问题中使用它们。</p><a class="primary button" href="#chapter/${c.id}/guide">阅读全文与所有延伸 →</a> <a class="button" href="#chapter/${c.id}/practice">进入原书习题 →</a></div></div><aside class="deep-rail path-rail"><span class="eyebrow">本章研习路径</span>${p.cases.map(x=>`<a href="#chapter/${c.id}/path/case-${x.id}">${esc(x.title)}</a>`).join('')}<hr><p><span id="path-progress">${count}</span> / ${total} 项自查已记录</p>${p.prerequisites.length?'<h3>先前用到的思想</h3>'+pathChapterLinks(p.prerequisites):''}${p.next.length?'<h3>后面在哪里再用</h3>'+pathChapterLinks(p.next):''}<hr><a href="#chapter/${c.id}/lab">本章交互实验 →</a><button data-action="export">导出学习记录</button></aside></div>`;
}
function pathFeedback(option){return '<strong>'+(option.correct?'判断正确。':'再检查一下。')+'</strong>'+pathMarkdown(option.feedback)}
document.addEventListener('click',async e=>{
 const reset=e.target.closest('[data-path-reset]');if(reset){delete state.pathAnswers[reset.dataset.pathReset];save();const field=reset.closest('fieldset');field.querySelectorAll('input').forEach(i=>i.checked=false);field.querySelector('.check-feedback').textContent='已清除本题判断，可以重新尝试。';return}
 const b=e.target.closest('[data-path-check]');if(!b)return;
 const field=b.closest('fieldset'),selected=field.querySelector('input:checked'),feedback=field.querySelector('.check-feedback');
 if(!selected){feedback.textContent='先选择一个判断，再检查理由。';return}
 const key=b.dataset.pathCheck,n=+key.split('-')[0],id=key.slice(String(n).length+1);
 const p=(await getPaths()).find(p=>p.chapter===n),x=p.cases.find(x=>x.id===id),choice=+selected.value;
 state.pathAnswers[key]={choice,correct:x.check.options[choice].correct};save();
 feedback.innerHTML=pathFeedback(x.check.options[choice]);await queueMath();
});
document.addEventListener('input',e=>{
 const key=e.target.dataset.proofDraft;if(!key)return;
 if(e.target.value)state.proofDrafts[key]=e.target.value.slice(0,30000);else delete state.proofDrafts[key];save();
 e.target.nextElementSibling.textContent='证明草稿已保存';
});
document.addEventListener('change',e=>{
 const key=e.target.dataset.pathRubric;if(!key)return;
 if(e.target.checked)state.pathChecks[key]=true;else delete state.pathChecks[key];save();
 const progress=document.querySelector('#path-progress');
 if(progress)progress.textContent=document.querySelectorAll('[data-path-rubric]:checked').length;
});

let exerciseScaffolds;
async function getExerciseScaffolds(){
 if(!exerciseScaffolds){const r=await fetch('data/exercise-scaffolds.json');if(!r.ok)throw Error('分层提示加载失败，请刷新重试。');exerciseScaffolds=await r.json()}
 return exerciseScaffolds;
}
function renderExerciseScaffold(s){return `<div class="exercise-scaffold"><span class="eyebrow">逐步搭建 · 课程新增提示</span><details><summary>提示一 · 先定位真正的困难</summary>${pathMarkdown(s[0])}</details><details><summary>提示二 · 搭出关键的推理桥梁</summary>${pathMarkdown(s[1])}</details><details><summary>写完后自检 · 最容易漏掉的条件</summary><p>${esc(s[2])}</p></details></div>`}
