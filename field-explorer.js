/* Compare two algebraic structures on four elements, using exact tables. */
(() => {
  const fieldProduct = [[0,0,0,0],[0,1,2,3],[0,2,3,1],[0,3,1,2]];
  function operation(system, op, a, b) {
    return system === 'field4' ? (op === 'add' ? a ^ b : fieldProduct[a][b])
      : (op === 'add' ? (a+b)%4 : (a*b)%4);
  }
  const oldRender = window.renderLab, oldBind = window.bindLabs;
  window.renderLab = c => oldRender(c) + (c.id !== 28 ? '' :
    '<section class="lab-card" id="field-compare"><div class="eyebrow">同样四个元素，不同的运算</div>' +
    '<h3>模4系统与四元素域</h3><p>选择运算结构，再试着计算。观察乘法表中每个非零行是否都能找到1。</p>' +
    '<div class="lab-controls"><label for="field-system">运算结构<select id="field-system"><option value="mod4">模4剩余类：不是域</option><option value="field4">四元素域：0、1、α、β</option></select></label>' +
    '<label for="field-operation">运算<select id="field-operation"><option value="multiply">乘法</option><option value="add">加法</option></select></label>' +
    '<label for="field-a">左边的元素<select id="field-a"></select></label><label for="field-b">右边的元素<select id="field-b"></select></label></div>' +
    '<div class="lab-chart" id="field-table-view"></div><div id="field-explanation" class="lab-result" aria-live="polite"></div>' +
    '<p class="muted">绿色表示乘积为1；橙色表示两个非零元素乘积为0。边框标出你当前的计算。</p>' +
    '<a href="#chapter/28/practice/ex-3">查看四元素域的完整证明 →</a></section>');
  window.bindLabs = () => {
    oldBind();
    const root = document.querySelector('#field-compare');
    if (!root) return;
    const system = root.querySelector('#field-system'), op = root.querySelector('#field-operation');
    const a = root.querySelector('#field-a'), b = root.querySelector('#field-b');
    function names() { return system.value === 'field4' ? ['0','1','α','β'] : ['0','1','2','3']; }
    function options() {
      const av = a.value || '2', bv = b.value || '2';
      const html = names().map((s,i) => '<option value="'+i+'">'+s+'</option>').join('');
      a.innerHTML = b.innerHTML = html; a.value = av; b.value = bv;
    }
    function render() {
      const ns=names(), sign=op.value==='add'?'+':'×', av=+a.value, bv=+b.value;
      let html='<table class="field-table"><caption>'+system.options[system.selectedIndex].text+' · '+sign+'</caption><thead><tr><th scope="col">'+sign+'</th>';
      ns.forEach(s => html+='<th scope="col">'+s+'</th>');
      html+='</tr></thead><tbody>';
      for(let i=0;i<4;i++){
        html+='<tr><th scope="row">'+ns[i]+'</th>';
        for(let j=0;j<4;j++){
          const value=operation(system.value,op.value,i,j);
          const cls=op.value==='add'?'':value===1?'unit':value===0&&i&&j?'zero-divisor':'';
          const selected=i===av&&j===bv?' style="outline:2px solid var(--blue);outline-offset:-3px"':'';
          html+='<td class="'+cls+'"'+selected+'>'+ns[value]+'</td>';
        }
        html+='</tr>';
      }
      root.querySelector('#field-table-view').innerHTML=html+'</tbody></table>';
      const result=ns[av]+' '+sign+' '+ns[bv]+' = '+ns[operation(system.value,op.value,av,bv)];
      const why=system.value==='field4'?'非零元素的逆：1⁻¹=1，α⁻¹=β，β⁻¹=α。所有非零元都能除。':'1⁻¹=1，3⁻¹=3；2没有逆元，因为2乘任何元素都只能得到0或2。';
      root.querySelector('#field-explanation').textContent=result+'。'+why;
    }
    system.addEventListener('change',()=>{options();render();});
    op.addEventListener('change',render);a.addEventListener('change',render);b.addEventListener('change',render);
    options();render();
  };
  window.FIELD_COMPARE_TEST={operation};
})();
