# 第八章 Insight：把“没有空隙”变成能推动证明的工具

第八章 *Least Upper Bounds* 为前一章欠下的三个证明补上基础：实数的最小上界性质 P13。它同时说明，自然数无上界、任意小的 $1/n$、有理数的稠密性，这些看起来不需要解释的事实，也有各自的逻辑来路。附录再把同一种证明思想推进到一致连续。

这章值得反复读的地方，是作者怎样选集合、怎样使用上确界的两个条件，以及怎样检查证明在端点、拼接处和量词顺序上有没有漏掉情形。以下英文引文链接到本章原文；中文推导、反例和补充细节属于课程解读，不改动英文原文。

## 第八章的结构：一条公理，几种不同的证明用途

| 位置 | 内容 | 必须保留的思想 |
|---|---|---|
| 第 133–135 页 | 上界、上确界、下确界、空集、P13 | 定义、唯一性、存在性是三个不同问题 |
| 第 135–136 页 | 第一个零点的存在 | 用上确界找到候选点，再用连续性排除两种错误符号 |
| 第 136–137 页 | 局部有界、闭区间有界 | 从一个点附近的控制，推到整个区间；单独处理端点 |
| 第 137–138 页 | 最大值的存在 | 把“逼近但不取得”转换成另一个连续函数无界 |
| 第 138–139 页 | Archimedean 性质、$1/n$ 任意小 | 几何直觉不能替代实数结构的证明 |
| 习题 1–7 | 上下界、零点、稠密性、函数方程 | 用已有结论组装新证明，辨别严格与非严格不等式 |
| 习题 8–13 | 单调函数、函数的大小、穷竭法、集合和 | 上确界也是制造极限和估计的工具 |
| 习题 14–17 | 套区间、二分法、切割 | 无限过程需要一个实际存在的落点 |
| 习题 18–20 | 上下极限、Rising Sun Lemma | 从“所有元素的界”走向“忽略有限例外后的界” |
| 第 144–146 页 | 一致连续、拼接引理、闭区间定理 | 一个共同的 $\delta$ 如何从逐点连续中产生 |

## 1．“最小”不是看起来最靠左，而是两份必须履行的证明责任

> A number $x$ is a **least upper bound** of $A$ if

——[第 133 页 · 第二个定义](#chapter/8/original/original-p-133)，引文为定义开头。

作者先举 $A=[0,1)$：$138$、$2$、$1\frac12$ 都是上界，$1$ 才是最小上界。随后立即拆开定义：第一，$x$ 压住集合中所有元素；第二，任何别的上界都不能小于 $x$。

写证明时，这两条分别提供两种动作：

$$a\in A\Longrightarrow a\le s,$$

$$t<s\Longrightarrow\exists a\in A,\quad t<a.$$

第二条是上确界最常用的工作形式。令 $t=s-\varepsilon$，就得到

$$\forall\varepsilon>0,\quad\exists a\in A:\ s-\varepsilon<a\le s.$$

这是“可以从下面任意逼近”的精确定义。注意右端一般只能写 $\le s$：上确界可能属于集合。$[0,1)$ 的上确界是 $1$ 却没有最大元素，$[0,1]$ 的上确界仍是 $1$ 且有最大元素。判断上确界与判断它是否被取得，必须分开。

**读后自检：**若只证明每个 $a\in A$ 都满足 $a\le s$，你证明的是上界；若只找到一列逼近 $s$ 的元素，却没排除集合在 $s$ 以上还有元素，也没有证明上确界。

## 2．唯一性很容易，存在性却需要新公理

> One detail has been omitted from our discussion so far—the question of which sets have at least one, and hence exactly one, least upper bound or greatest lower bound.

——[第 134 页 · 定义之后](#chapter/8/original/original-p-134)

若 $s,t$ 都是最小上界，就有 $s\le t$ 和 $t\le s$，因此相等。这个证明只说“如果存在，就唯一”；它没有创造出任何上确界。

空集进一步迫使我们读清量词。任意数都是空集的上界，因为找不到违反不等式的元素；但任意一个上界都能再减去 $1$，所以空集没有实数上确界。无上界的集合当然也没有。P13 的准确对象因此是：**非空、上有界的实数集合**。

有理数中的反例揭示了公理的实质。集合 $\{q\in\mathbf Q:q^2<2\}$ 有有理数上界，但没有有理数上确界。不能把“它的边界是 $\sqrt2$”当成有理数系统内部的答案，因为这个候选者不在 $\mathbf Q$ 中。

本章不是从前十二条性质推出 P13，而是承认还需要一个独立的性质。只有分清定义、唯一性证明与存在性公理，才不会在后面的证明中偷偷假定所求对象已经存在。

## 3．选怎样的集合，决定证明找到怎样的零点

> Our proof is merely a rigorous version of the outline developed at the end of Chapter 7—we will locate the smallest number $x$ in $[a,b]$ with $f(x)=0$.

——[第 135 页 · 定理 7-1](#chapter/8/original/original-p-135)

作者选择

$$A=\{x\in[a,b]:f\text{ 在整个 }[a,x]\text{ 上为负}\},\qquad\alpha=\sup A.$$

关键是“整个 $[a,x]$”。$A$ 记录从左端开始，负值状态能够保持到哪里。连续性先保证它非空，并使 $a<\alpha<b$。

假设 $f(\alpha)<0$，局部保号便让负值状态越过 $\alpha$ 继续延伸，造出一个大于上界的 $A$ 中元素。假设 $f(\alpha)>0$，局部保号又会在 $\alpha$ 左边留出一段正值区，禁止 $A$ 的元素任意接近上确界。这两种可能都失败，因此 $f(\alpha)=0$。

为什么它是第一个零点？若 $t<\alpha$，上确界性质允许取 $x\in A$ 且 $t<x$，于是 $f(t)<0$。所以 $\alpha$ 之前根本没有零点。

[习题 3(b)](#chapter/8/original/original-ex-3) 改用 $B=\{x\in[a,b]:f(x)<0\}$。$\sup B$ 标记最后一段负值的右边界，也给出零点，但未必是最大的零点：函数后来还可能从正侧接触横轴，再返回正侧。**集合的定义决定你保留了哪些信息；不能只因为两种证明都用了 $\sup$，便认为它们找到同一个点。**

## 4．局部控制能够拼起来，但必须先证明“能走多远”

> It is only necessary to apply this statement to some particular $\varepsilon$ (any one will do), for example, $\varepsilon=1$.

——[第 136 页 · 局部有界的证明](#chapter/8/original/original-p-136)

这里不需要让误差趋于零。固定 $\varepsilon=1$，连续性就给出邻域内 $|f(x)-f(a)|<1$，所以 $f(x)<f(a)+1$。这是把一个强定义用于一个较弱目标的示范：只索取证明真正需要的信息。

随后作者取

$$A=\{x\in[a,b]:f\text{ 在 }[a,x]\text{ 上有上界}\}.$$

若 $\alpha=\sup A<b$，就在 $\alpha$ 附近取得一个局部界，再与某个已经受控的 $[a,x_0]$ 拼接。两块区间的界分别为 $M_1,M_2$，用 $\max(M_1,M_2)$ 就能控制并集，于是受控区间越过 $\alpha$，产生矛盾。

这解释了上确界方法的通用形式：**定义已经完成任务的范围，找到这个范围的边界，再证明边界不能停在内部。**它比单纯记住某个证明更有迁移价值。

## 5．证明“边界是右端点”，仍不等于“任务在右端点完成”

> The proof is not quite complete—we only know that $f$ is bounded on $[a,x]$ for every $x<b$, not necessarily that $f$ is bounded on $[a,b]$.

——[第 137 页 · 有界性证明的最后一步](#chapter/8/original/original-p-137)

这是全章最值得记住的警告之一。结论

$$\forall x<b,\ \exists M_x:\quad f(t)\le M_x\quad(a\le t\le x)$$

允许界 $M_x$ 随 $x$ 增大。它不能自动变成一个控制全部 $[a,b]$ 的 $M$。

例如 $f(t)=1/(1-t)$ 在每个 $[0,x]$、$x<1$ 上都有界，却在 $[0,1)$ 上无界。即使硬定义 $f(1)=0$，也不能获得闭区间有界性；缺少的正是右端点连续。

作者因此利用 $b$ 处的左连续性，单独控制 $(b-\delta,b]$，再与某段 $[a,x_0]$ 拼接。这一步让 $b$ 真正进入集合 $A$，而不仅是成为 $\sup A$。

把证明写成“由 $\sup A=b$，证毕”，就删掉了问题中最重要的逻辑区别。

## 6．倒数技巧：让“差一点取得”变成违反已知定理的现象

> To prove the third important theorem we resort to a trick.

——[第 137 页 · 最大值定理之前](#chapter/8/original/original-p-137)

有界性使值域有上确界 $\alpha$。困难在于证明某个输入真的满足 $f(y)=\alpha$。假设永远取不到，则

$$g(x)=\frac1{\alpha-f(x)}$$

在整个闭区间上有定义且连续。上确界性质使分母能够任意小而保持正数，所以 $g$ 无界；这与刚证明的闭区间有界定理冲突。

若想把“无界”也写得完全明确，给定任意 $M>0$，取 $\varepsilon=1/(M+1)$。存在 $x$ 使 $0<\alpha-f(x)<\varepsilon$，因此 $g(x)>M+1>M$。

这个技巧把“不存在最大值”的假设转换成一个新函数，再让它触犯旧定理。以后证明正连续函数在闭区间上与零保持正距离，也可以想到倒数。真正值得学的是**把坏情况编码成一个受已有定理约束的对象**。

## 7．自然数可以超过任何实数，也需要证明

> Basing the argument on a geometric picture is not a proof, however, and even the geometric picture contains an assumption:

——[第 138 页 · Archimedean 性质](#chapter/8/original/original-p-138)，引文为原句前半部分。

想象不断把单位线段接起来，似乎总能超过任何长度。作者指出，“总能超过”正是你试图证明的性质，不能借一张图把它预先放进前提。

证明只需一个非常简洁的结构：若 $\alpha=\sup\mathbf N$，因为 $n+1\in\mathbf N$，便对所有自然数有 $\alpha\ge n+1$。于是 $\alpha-1$ 也是上界，与最小性矛盾。

由此得到任意 $\varepsilon>0$ 都有 $1/n<\varepsilon$。[习题 5](#chapter/8/original/original-ex-5) 再选 $n$ 使 $n(y-x)>1$，在 $nx$ 与 $ny$ 之间找到整数 $k$，于是 $x<k/n<y$。有理数稠密性依赖的环节就在这里。

作者在第 139 页承认，前面的一些例子提前借用了这个结论，但定理的证明没有这么做。这是区分教学顺序与逻辑依赖：可以先认识有用的例子，但必须知道哪些依据尚未建立，最后还要归还这笔证明债务。

## 8．稠密集合上的信息，怎样被连续性扩展

> Can $\ge$ be replaced by $>$ throughout?

——[习题 6(c)](#chapter/8/original/original-ex-6)

若连续的 $f$ 在稠密集 $A$ 上处处为零，却在某点 $c$ 不为零，局部保号就会给出一段不含零值的邻域；稠密性又强迫这段邻域含有 $A$ 中的点，矛盾。因此 $f$ 处处为零。对 $f-g$ 应用同一论证，得到相等与非严格不等式的推广。

严格不等式却不能照搬。取 $f(x)=x^2$、$g(x)=0$、$A=\mathbf R\setminus\{0\}$，则 $A$ 稠密，$f>g$ 在 $A$ 上成立，但在零点只能得到相等。极限过程可以把正数压到零。

[习题 7](#chapter/8/original/original-ex-7) 将这点接到第三章：加法关系 $f(x+y)=f(x)+f(y)$ 先迫使有理数上 $f(q)=qf(1)$，连续性再把等式推广到所有实数。代数负责有理数，稠密性与连续性负责跨过无理数。这是一种可复用的分工。

## 9．单调性先制造单侧极限，介值性质再消除跳跃

> Hint: Why is this problem in this chapter?

——[习题 8(a)](#chapter/8/original/original-ex-8)

对非减函数，在 $a$ 左边取

$$L=\sup\{f(x):x<a\}.$$

集合非空且由 $f(a)$ 压住。上确界性质给出 $x_0<a$ 且 $f(x_0)>L-\varepsilon$；单调性则保证所有 $x_0<x<a$ 都满足

$$L-\varepsilon<f(x_0)\le f(x)\le L.$$

于是左极限存在。右边用下确界得到 $R$，并有 $L\le f(a)\le R$。这也说明单调函数不可能出现可去间断：如果两侧极限相等，中间的函数值已被夹住。

若另有介值性质，任何 $L<R$ 的跳跃都会漏掉某些中间值，因此只能 $L=R=f(a)$。这并不是“介值性质单独蕴含连续”；**单调性与介值性质的组合**才完成证明。

## 10．二分法的精华不是“切得越来越细”，而是有一个共同落点

> Use the Nested Interval Theorem to find a point $x$ where $f(x)=0$.

——[习题 15](#chapter/8/original/original-ex-15)

习题 14 先处理嵌套闭区间 $I_n=[a_n,b_n]$。左端点集合有上确界 $s$；对每个 $n$，都有 $a_n\le s\le b_n$，因此 $s$ 属于全部区间。这个共同点来自完备性。

仅有“嵌套”还不保证唯一，例如所有区间都等于 $[0,1]$。二分法增加长度 $(b-a)/2^n$ 任意小，才把共同点唯一确定。若用开区间 $(0,1/n)$，即使嵌套且长度趋零，也可能没有共同点。

寻找零点时，每次留下端点异号的一半；若共同点处的函数值为正或负，连续性的局部保号最终会使足够小的保留区间不可能继续异号。因此共同点是零点。证明有界性时，每次留下无界的一半；最终整个小区间落入共同点的有界邻域，同样矛盾。

两道题让你看到同一种方法如何分别保存“异号”和“无界”这两种性质，而不是机械重复一个算法。

## 11．习题中的第二条主线：逼近、有限例外与实数切割

> To prove that $\sup A+\sup B\le\sup(A+B)$ it suffices to prove that $\sup A+\sup B\le\sup(A+B)+\varepsilon$ for all $\varepsilon>0$;

——[第 141 页 · 习题 13 的提示](#chapter/8/original/original-p-141)，引文为提示片段。

习题 13 体现“先允许任意小误差，再消去误差”的方法。分别取 $x\in A$、$y\in B$，使两者与各自上确界相差不到 $\varepsilon/2$，则 $x+y$ 距 $\sup A+\sup B$ 不到 $\varepsilon$。如果最后的不等式仍差一个固定正数，就能选更小的 $\varepsilon$ 反驳它。

[习题 11](#chapter/8/original/original-ex-11) 用几何量每步至少减半，把穷竭法从“看起来越来越贴近”变成可达到任意误差的证明。[习题 17](#chapter/8/original/original-ex-17) 则从“向下封闭、非空、非整个实轴、没有最大元素”恢复集合 $\{x:x<\sup A\}$，为后面的实数切割埋下伏笔。

[习题 18–19](#chapter/8/original/original-ex-18) 把“界住所有元素”改成“界住除有限个之外的元素”。例如 $A=\{2\}\cup\{1/n:n\in\mathbf N\}$，$\sup A=2$，但集合意义的 $\overline{\lim}A=0$：任意正门槛以上只有有限个元素，而零以上有无限个。

这里统计的是**集合中不同的元素**。如果把同一个值在数列里无限次重复，数列的上极限可能改变；这与书中此处定义的集合上极限不是同一计数方式。[习题 9](#chapter/8/original/original-ex-9) 的函数上确界大小，也提醒我们：没有最大值仍然可以用 $\sup|f|$ 衡量函数。

## 12．Rising Sun Lemma：一张形象的图，背后仍然是极值论证

> Show that the point where $f$ takes on its maximum value on $[a,b]$ must be $a$.

——[习题 20(a)](#chapter/8/original/original-ex-20)

“影点”指右边还有更高函数值的位置。假设 $(a,b)$ 内都是影点，但两个端点都不是。因为 $a$ 不是影点，右边所有值不超过 $f(a)$，所以 $f(a)\ge f(b)$。

反设严格大于。由连续性可选 $c\in(a,b)$，使 $f(b)<f(c)<f(a)$。在闭区间 $[c,b]$ 上取最大值点 $t$。它不可能是 $b$，而 $t\in(a,b)$ 又是影点，所以某个 $y>t$ 满足 $f(y)>f(t)$。

若 $y\le b$，违反 $t$ 的最大性；若 $y>b$，则 $f(y)>f(t)\ge f(c)>f(b)$，违反 $b$ 不是影点。因此严格不等式不成立，必须 $f(a)=f(b)$。

这个证明展示了选择闭区间的技巧：直接看整段 $[a,b]$ 的最大值只定位到 $a$，再截去左边的一小段，才能让新的最大值落进有影点性质的范围。

## 13．一致连续的差别，藏在“谁先选”里面

> But $\delta$ *also depends* on $a$—the $\delta$ that works at $a$ might not work at $b$ (Figure 1).

——[第 144 页 · 一致连续的动机](#chapter/8/original/original-p-144)

逐点连续允许先指定位置，再为这个位置寻找尺度；一致连续要求先按误差选一个尺度，这个尺度随后必须适用于区间内任意两点：

$$\text{逐点连续：}\quad\forall a\ \forall\varepsilon>0\ \exists\delta>0\ \forall x,$$

$$\text{一致连续：}\quad\forall\varepsilon>0\ \exists\delta>0\ \forall x,y\in A.$$

$x^2$ 在实轴上连续，但固定 $\varepsilon=1$ 后，无论给多小的 $\delta$，都能选很大的 $a$，使距离 $\delta/2$ 的两个输入产生至少 $1$ 的输出差。反过来，在 $[-N,N]$ 上有

$$|x^2-y^2|=|x-y||x+y|\le2N|x-y|,$$

所以 $N>0$ 时取 $\delta=\varepsilon/(2N)$ 就对整段区间有效。

定义域的有界性本身仍不够：$\sin(1/x)$ 在 $(0,1]$ 上连续且有界，却在靠近零时越振越快。[附录习题 1](#chapter/8/original/original-a1-ex-1) 专门要求你把函数有界、定义域有界、连续、一致连续分开判断。

## 14．拼接处暴露漏洞，修补漏洞又产生新引理

> Our first inclination might be to choose $\delta$ as the minimum of $\delta_1$ and $\delta_2$.

——[第 145 页 · 拼接引理的动机](#chapter/8/original/original-p-145)

左右两段分别有可用的 $\delta_1,\delta_2$，自然会取最小值。但如果 $x<b<y$，两个点分别落在接点的两侧，原有两条估计都不能直接使用。这正是“自然想法—发现缺口—建立更精确工具”的完整例子。

修补靠接点 $b$ 的连续性。再选 $\delta_3$，使点靠近 $b$ 时，函数值与 $f(b)$ 相差不到 $\varepsilon/2$。跨接点的一对点便满足

$$|f(x)-f(y)|\le|f(x)-f(b)|+|f(b)-f(y)|<\varepsilon.$$

取三个 $\delta$ 的最小值，才覆盖同侧与跨侧的全部情形。随后固定一个 $\varepsilon$，定义“$\varepsilon$-good”的受控区间，再用上确界向右推进。这与有界性证明有相同骨架，但新增了处理跨接点的拼接引理。

**补足书中压缩的细节。**第 146 页由 $|y-\alpha|<\delta_0$ 的估计转向闭区间 $[\alpha-\delta_0,\alpha+\delta_0]$ 时，应先把连续性给出的半径缩小，例如先取得半径 $r$ 再令 $\delta_0<r/2$，并保证小区间在定义域内。还要由左端点连续性排除 $\alpha=a$，最后单独证明 $b\in A$。英文原文保留书上的写法，这里说明严格展开时应做的选择。

扫描页第 144 页末的句子停在 “for a particular”，下一页直接接 “the following two statements hold”；网页保持这一可见原貌。其要表达的固定 $\varepsilon>0$，在随后的引理中有明确陈述。

## 学完本章，应该能够独立完成什么

1. 不画图，写出 $s=\sup A$ 的两个条件及其 $\varepsilon$ 形式，并解释空集为何必须排除。
2. 用同一个“受控范围的上确界”思路，分别组织零点、有界性和一致连续的证明；说出每次拼接所需的工具。
3. 解释“$\alpha=b$”与“$b\in A$”的区别，并给出忘记端点时的反例。
4. 用倒数函数把“值域上确界取不到”变成无界性矛盾。
5. 从 P13 推出自然数无上界，再解释稠密性与二分法为什么不能只依赖直觉。
6. 准确写出一致连续的量词，并处理两点跨越拼接点的情形。

建议按 [习题 2、3](#chapter/8/original/original-ex-2) → [5–8](#chapter/8/original/original-ex-5) → [13–16](#chapter/8/original/original-ex-13) → [一致连续附录习题](#chapter/8/original/original-a1-ex-1) 重建本章的证明链。进阶再读切割、上下极限与 Rising Sun Lemma；它们说明本章的语言可以继续支撑后面的分析学。
