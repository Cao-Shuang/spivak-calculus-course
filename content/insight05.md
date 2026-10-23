# 第五章 Insight：极限定义是怎样被问题逼出来的

第五章的价值，不只在于给出 $\varepsilon$–$\delta$ 定义。作者先让你尝试控制误差，让你失败几次，再把这些尝试中共同的逻辑提炼成定义；随后又用定义证明唯一性和运算法则，检验这套语言是否真正有效。

本页英文引文来自第五章，页码指向原书的英文网页。中文分析与补充证明属于课程解读。阅读目标是：**能够自己组织一个误差控制的论证，并判断一个看似正确的证明到底用了什么条件。**

## 第五章的结构：经验、定义、证明、可复用的方法

| 位置 | 作者的安排 | 读者需要完成的转变 |
|---|---|---|
| 第 90–91 页 | 暂定定义、六种图像、两个数轴上的映射 | 从“移动到某点”转向“输入邻域控制输出误差” |
| 第 92–94 页 | $3x$、$x^2$、$1/x$ 的误差估计 | 学会先限制范围，再控制误差 |
| 第 94–97 页 | 衰减振荡、不衰减振荡、有理与无理分类、符号函数 | 把图像直觉转换为可验证的成功或失败条件 |
| 第 97–99 页 | 一步步改写暂定定义，并正确否定它 | 掌握量词、依赖次序和反例的结构 |
| 第 99–100 页 | 按有理数分母定义的函数 | 发现存在性证明不必提供简洁公式 |
| 第 100–101 页 | 唯一性与极限记号 | 先保证符号有唯一意义，再使用符号 |
| 第 102–105 页 | 误差引理、运算法则、从证明提取 $\delta$ | 把一次证明变成可反复使用的方法 |
| 第 105–107 页 | 定义域、单侧极限、无穷远处的极限 | 按问题修改输入条件，而不是机械搬用记号 |
| 习题 1–21 | 计算、直接证明、局部性、夹逼、有界因子 | 同时练习应用定理与回到定义 |
| 习题 22–26 | 普遍性质、有限坏点、等价与错误定义 | 学会选择测试函数，识别量词结构 |
| 习题 27–41 | 单侧、无穷远、无穷大极限及其关系 | 在不同极限概念之间准确转换 |
| 习题 42 | 一个看似更简单的“证明” | 检查基础依赖，避免循环论证 |

## 1．定义不是突然落下来的：先做出需要定义的工作

> In order to present any sort of argument at all, we have been practically forced to invent the real definition.

——[第 97 页 · 从暂定定义转向严格定义](#chapter/5/original/original-p-97)

这是理解本章教学结构的钥匙。作者先使用“as close as we like”“sufficiently close”等自然语言，随后真的去做几次计算。计算迫使你回答：接近的标准由谁给定？要把输入限制到多小？限制后是否每个允许的输入都合格？

例如对 $f(x)=3x$，若希望输出与 $15$ 的误差小于 $1/10$，输入与 $5$ 的误差小于 $1/30$ 就够。再把 $1/10$ 换成任意 $\varepsilon>0$，同一关系变成

$$|x-5|<\varepsilon/3
\quad\Longrightarrow\quad
|3x-15|<\varepsilon.$$

此时 $\varepsilon$ 和后来命名的 $\delta$，已经在做不同的工作：前者提出要求，后者提供保证。字母出现以前，这种结构就已存在于问题中。

因此，阅读时不应跳过前面的“非正式”例子。它们是在展示定义的来源，也是教你以后怎样自己创造一个有用的定义。

## 2．极限控制的是附近的值，中心点的值可以完全无关

> We are simply not interested in the value of $f(a)$, or even in the question of whether $f(a)$ is defined.

——[第 90 页 · 阅读英文原文](#chapter/5/original/original-p-90)

作者开篇就给出六幅图，前三幅在中心点的情况不同，却有相同的趋近行为。这个区别必须早于极限计算掌握。

例如

$$f(x)=\frac{x^2-1}{x-1}\qquad(x\ne1)$$

在 $x=1$ 没有定义，但在附近每个允许的输入处都等于 $x+1$，因此极限为 $2$。把中心点补成 $2$、补成 $100$，或者继续不定义，都不会改变这个极限。

定义中的 $0<|x-a|$ 正是在表达这种排除。它不是可以省略的小装饰。若把它删去，就会额外要求中心点本身也满足任意精度的误差控制，最终迫使 $f(a)=l$。

第六章的连续性会主动加入这项要求。因此现在保留中心点与附近行为的区别，是为了以后能准确讨论它们何时一致。

## 3．量词顺序就是极限的内容，字母名称却不是

> The function **$f$ approaches the limit $l$ near $a$** means: for every $\varepsilon>0$ there is some $\delta>0$ such that, for all $x$, if $0<|x-a|<\delta$, then $|f(x)-l|<\varepsilon$.

——[第 98 页 · 正式定义](#chapter/5/original/original-p-98)

把它读成一个有先后顺序的任务：

1. 先固定函数 $f$、位置 $a$ 和候选极限 $l$。
2. 对方给出任意输出误差要求 $\varepsilon>0$。
3. 你选择一个正数 $\delta$；它可以依赖前面的信息。
4. 此后，只要输入满足 $0<|x-a|<\delta$，**每一个**这样的输入都必须使输出误差小于 $\varepsilon$。

关键在于 $\delta$ 要在检查这些 $x$ 之前确定，不能针对每个 $x$ 临时改变，也不能只挑一列表现良好的输入。

习题 25 故意交换 $\varepsilon,\delta$ 的字母名字，定义依然正确。习题 26 则保留熟悉的字母，却改变了它们的职责，得到错误定义。这是一种很好的检验：你记住的是字母的外形，还是“任意要求—存在控制—所有输入”的依赖关系？

例如若错误地说“对每个输入范围，都能找一个输出容差”，$f(x)=x$ 在 $a=0$ 附近甚至可以被错误地宣称趋于 $l=100$：对给定 $\delta$ 取 $\varepsilon=\delta+101$ 就行。真正的定义不允许你自己放宽对方给出的输出要求。

## 4．寻找 $\delta$ 的核心：先建立可控范围，再分配误差

> But the only crucial thing is to make sure that we can say *something* about how big $|x+3|$ is.

——[第 92 页 · 平方函数的估计](#chapter/5/original/original-p-92)

证明 $x^2\to9$ 时，

$$|x^2-9|=|x-3||x+3|.$$

第一因子正是你能控制的输入误差，第二因子却还随 $x$ 变化。若直接写 $\delta=\varepsilon/|x+3|$，就把需要统一选择的数写成了待检查输入的函数。

作者的解决办法是先取一个粗糙限制 $|x-3|<1$。于是 $2<x<4$，所以 $|x+3|<7$。现在只要同时满足

$$|x-3|<1,\qquad |x-3|<\varepsilon/7,$$

就能得到结论。两个要求通过

$$\delta=\min(1,\varepsilon/7)$$

合并。这不是神秘的“取最小值技巧”，而是在给两个约束求共同有效的输入范围。

倒数函数体现同一种思路的另一面。对 $a\ne0$，先要求 $|x-a|<|a|/2$，便有

$$|x|>|a|/2,\qquad
\left|\frac1x-\frac1a\right|
=\frac{|x-a|}{|x||a|}
<\frac{2|x-a|}{|a|^2}.$$

所以可以取

$$\delta=\min\left(\frac{|a|}2,\frac{\varepsilon|a|^2}2\right).$$

平方函数需要控制另一个因子不要太大；倒数函数需要控制分母不要太小。它们本质上都在**先建立一个稳定的局部环境，再让输入误差承担最后的精度要求**。

## 5．证明只需要一个有效的控制方案，不需要最优方案

> We could do even better, and allow $|x|<1/\sqrt{10}$ and $x\ne0$, but there is no particular virtue in being as economical as possible.

——[第 95 页 · 衰减振荡的估计](#chapter/5/original/original-p-95)，引文省略了原句最外层括号

对 $x^2\sin(1/x)$，有

$$|x^2\sin(1/x)|\le x^2.$$

为了使误差小于 $\varepsilon$，取 $\delta=\sqrt{\varepsilon}$ 可以；取更保守的 $\delta=\min(1,\varepsilon)$ 也可以。只要保证成立，允许输入范围小一些并不会损害极限证明。

这解释了为什么作者反复先取 $1$、再取最小值。简单而可核验的界，往往比最紧的界更有用。

但“可以保守”不等于“可以随便缩放”。习题 7 特意反驳一个常见误解：容差减半时，把 $\delta$ 减半未必够。取 $f(x)=\sqrt{|x|}$、$a=l=0$，$\varepsilon=\delta=1$ 时保证成立；改成容差 $1/2$、输入范围 $1/2$ 后，$x=0.36$ 就使输出 $0.6>1/2$。这里合理的尺度关系是 $\delta=\varepsilon^2$。

**要缩小多少，由函数的误差关系决定，而不是由字母看起来对称决定。**

## 6．证明不趋于某个数，要构造一项无法满足的固定精度要求

> To show this we simply have to find *one* $\varepsilon>0$ for which the condition $|f(x)-0|<\varepsilon$ cannot be guaranteed, no matter how small we require $|x|$ to be.

——[第 96 页 · $\sin(1/x)$ 的失败](#chapter/5/original/original-p-96)

正确否定定义会得到

$$\exists\varepsilon_0>0\ \forall\delta>0\
\exists x:\quad
0<|x-a|<\delta,\quad |f(x)-l|\ge\varepsilon_0.$$

这个 $\varepsilon_0$ 必须先固定。此后无论对方把输入范围缩到多小，你都能在里面找到一个坏点。只找到一个离 $a$ 很近但距离固定的坏点，没有用：下一次可以把它排除。

对 $\sin(1/x)$，取 $\varepsilon_0=1/2$。给定任意 $\delta$，选择足够大的自然数 $n$，使

$$0<x_n=\frac1{\pi/2+2n\pi}<\delta.$$

此时函数值为 $1$，不能进入零附近半径 $1/2$ 的区间。

不过，这只证明“不趋于零”。若要证明**没有任何极限**，还要排除任意候选 $l$。作者同时在任意小邻域中找出值为 $1$ 和 $-1$ 的点；一个长度为 $1$ 的区间不可能容纳它们两个。这样才完成对所有候选极限的排除。

## 7．Thomae 函数：把无限问题压缩成有限个需要避开的点

> Note that our description of the $\delta$ which works for a given $\varepsilon$ is completely adequate—there is no reason why we must give a formula for $\delta$ in terms of $\varepsilon$.

——[第 100 页 · 接续第 99 页的证明](#chapter/5/original/original-p-100)

作者考虑 $(0,1)$ 上的函数：无理输入给出零，最简分数 $p/q$ 给出 $1/q$。它在每个内部点的极限都是零，即使这个点本身是有理数、函数值不是零。

证明的关键不是描画那些密密麻麻的点，而是固定 $\varepsilon>0$ 后重新分类。选一个足够大的整数 $N$，使 $1/N<\varepsilon$。分母大于 $N$ 的有理输入自动合格，无理输入也自动合格。只有分母不超过 $N$ 的有理点可能造成麻烦。

在 $(0,1)$ 内，这些点只有有限多个。把中心点 $a$ 本身排除后，其余每一点离 $a$ 都有正距离，而有限个正数有正的最小值。选择小于或等于这最小距离的 $\delta$，再将它限制在 $(0,1)$ 内，就同时避开所有坏点。如果坏点集合为空，直接取一个留在定义域内的正邻域即可。

这个证明展示了非常普遍的策略：

**先让无限多的对象因一个统一估计自动合格，再逐个处理剩下的有限障碍。**

$\delta$ 是通过有限集合的距离定义出来的，已经足够精确。一个存在性证明不必总是以初等闭式公式收尾。

## 8．唯一性是对定义的检验，也是使用“那个极限”的前提

> This theorem is really a test case for our definition: if the theorem could not be proved, our definition would be useless.

——[第 100 页 · 极限唯一性之前](#chapter/5/original/original-p-100)

直觉认为极限应该唯一，严格定义必须能推出这个直觉，否则定义就没有准确捕捉我们想表达的概念。

假设同一个函数在 $a$ 附近既趋于 $l$，又趋于 $m$，且 $l\ne m$。提出精度要求

$$\varepsilon=\frac{|l-m|}{2}.$$

两项极限条件分别给出 $\delta_1,\delta_2$。取 $\delta=\min(\delta_1,\delta_2)$，便能让同一个附近输入同时满足两个误差要求。三角不等式随后给出

$$|l-m|
\le|l-f(x)|+|f(x)-m|
<\frac{|l-m|}{2}+\frac{|l-m|}{2}
=|l-m|,$$

矛盾。

值得学习的不只是一条结论，而是两个动作：**用最小值同步两个局部保证；用两个候选对象之间的距离来选择反证所需精度。**

作者直到证明以后才正式引入 $\lim_{x\to a}f(x)$ 这个表示一个数的记号。先证明唯一性，再把对象命名为“那个极限”，是一种可靠的定义习惯。第 101 页还提醒你：极限记号中的 $x$ 是被绑定的变量；改变它的名字不改变这个数，但改变哪个变量在趋近，当然会改变问题。

## 9．运算法则的证明，是一套可以反向使用的误差设计方法

> If we *want* to find the $\delta$, however, the proof of Theorem 2 amounts to a prescription for doing this.

——[第 104 页 · 从定理回到具体的 $\delta$](#chapter/5/original/original-p-104)

求和法则最容易看清这件事。想使总误差小于 $\varepsilon$，可以让两个分项误差各小于 $\varepsilon/2$。分别调用两个极限条件，再取共同有效的输入范围即可。

乘积需要多做一步：

$$f(x)g(x)-lm
=f(x)[g(x)-m]+m[f(x)-l].$$

不能只说“两个误差都小”，因为其中一个误差还乘着 $f(x)$。先要求 $|f(x)-l|<1$，得到 $|f(x)|<|l|+1$，再分配两部分误差，就能统一控制乘积。引理中那些包含 $|l|+1$、$|m|+1$ 的分母，正是从这里来的。

倒数法则还必须先证明 $g(x)$ 在附近不会等于零。若 $m\ne0$，要求

$$|g(x)-m|<|m|/2$$

就保证 $|g(x)|>|m|/2$。它同时完成两件事：让 $1/g(x)$ 有意义，给分母一个正下界。

因此，运算法则不只是把极限符号移进括号的规则。**它把一次严格证明封装成了今后可复用的保证。** 需要具体精度时，又能打开这项保证，沿证明反向计算各个误差要求。

## 10．局部性、换元与有界因子：认清定理到底需要多少条件

> In other words, $\displaystyle\lim_{x\to a}f(x)$ depends only on the values of $f(x)$ for $x$ near $a$—this fact is often expressed by saying that limits are a “local property.”

——[第 109 页 · 习题 11](#chapter/5/original/original-ex-11)

如果两个函数在某个去心邻域内完全相同，它们的极限行为也相同。远处怎样定义、中心点是否补值，都可以暂时放下。这是因式分解后约去 $x-a$ 仍能求原极限的依据。

但换元要检查究竟观察了哪些输入。$x^3$ 在零附近覆盖正负两侧，而 $x^2$ 只观察正侧。因此 $\lim_{x\to0}f(x^2)$ 存在，不一定能推出 $\lim_{x\to0}f(x)$ 存在。令 $f(t)=1$（$t>0$）、$f(t)=-1$（$t<0$），就能立即看见差别。

习题 21 又告诉你：若 $g(x)\to0$，而 $h$ 在附近有界，即使 $h$ 没有极限，仍有 $g(x)h(x)\to0$。例如选 $|h(x)|\le M$，取正数 $K>M$，只要让 $|g(x)|<\varepsilon/K$，就有

$$|g(x)h(x)|<\varepsilon.$$

这里不能引用要求“两个极限都存在”的乘积法则；真正工作的条件是有界性。反过来，乘积收敛也不能随意推出某个因子收敛。零因子可以掩盖另一个因子的振荡。这些习题是在训练你辨别**充分条件、必要条件与可以削弱的条件**。

## 11．改变的是输入条件或输出要求，极限的控制结构仍然一致

> The analogy with the definition of ordinary limits should be clear: whereas the condition “$0<|x-a|<\delta$” expresses the fact that $x$ is close to $a$, the condition “$x>N$” expresses the fact that $x$ is large.

——[第 107 页 · 无穷远处的极限](#chapter/5/original/original-p-107)

作者在第 105 页明确说明了本章的约定：普通双侧极限要求函数在某个完整的去心邻域中有定义。这是当前教材的定义域约定；不要与更一般的“只沿任意定义域趋近”的定义混为一谈。

在此基础上，右极限把输入条件改为 $0<x-a<\delta$，左极限改为 $0<a-x<\delta$。两者都存在且相等，才能组合成普通双侧极限。

$x\to\infty$ 时，则把“输入足够近”换成“输入足够大”：

$$\forall\varepsilon>0\ \exists N\ \forall x>N:
\quad |f(x)-l|<\varepsilon.$$

而 $f(x)\to\infty$ 改变的是输出要求：不再靠近某个有限数，而是最终超过任意给定高度。习题 37 将其写为

$$\forall N\ \exists\delta>0:\quad
0<|x-a|<\delta\Longrightarrow f(x)>N.$$

这里的 $\infty$ 不是一个可代入运算法则的实数。比如 $x\sin^2x$ 虽然无界，却没有趋于正无穷，因为在任意大的 $n\pi$ 处仍为零。“无界”允许偶尔很大，“趋于无穷”要求最终所有输入都满足任意高度要求。

## 12．最后一道题把“证明有没有循环”变成全章的收束

> It is fortunate that these pages had already been set, so that I couldn’t make these changes, because this “proof” is completely fallacious. Wherein lies the fallacy?

——[第 114 页 · 习题 42](#chapter/5/original/original-ex-42)

作者提出一个看似更直接的选择：

$$\delta=\min\bigl(\sqrt{a^2+\varepsilon}-a,\ a-\sqrt{a^2-\varepsilon}\bigr).$$

如果这些平方根存在，且先限制 $0<\varepsilon<a^2$，这个想法确实能在 $a>0$ 时给出平方函数的误差控制。问题在于：**在本书此处的证明顺序中，凭什么知道所需正数的平方根存在？**

第二章早已说明，仅凭熟悉的代数与次序性质，不能保证每个正数都有平方根。第七章要利用连续函数的介值性质证明平方根存在；其中又需要已经知道 $x^2$ 连续，也就是这里正在建立的极限结论。

如果先偷用平方根存在，再回过头来靠平方函数的连续性证明平方根存在，依赖就绕成了圈。只指出“大 $\varepsilon$ 会使 $a^2-\varepsilon<0$”还没有抓住本题的核心；这个小问题可以通过缩小容差修补，基础依赖却不能靠同样办法消除。原书所附解答也明确把问题指向平方根的存在性。

这道题把本章与第二章、第七章连在一起：**数学证明不仅要检查每一行运算，也要检查每个使用的对象和定理是否已经有独立依据。**

## 学完这一章，应当能够亲自完成什么

- 不看书写出极限定义与否定形式，说明每个量词的职责和依赖顺序。
- 对 $x^2$ 与 $1/x$，解释“先控制范围”这一步为什么必要，并自己选出有效的 $\delta$。
- 区分“不趋于某个指定数”与“任何极限都不存在”，各写出一个完整证明。
- 重建 Thomae 函数的有限坏点证明，处理中心点本身和空坏点集。
- 从三角不等式推出唯一性，并解释取最小值的作用。
- 按输出误差要求反向设计和、积、倒数的输入控制，同时检查定义域。
- 用反例区分：有界与收敛、无界与趋于无穷、单侧与双侧、平方换元与立方换元。
- 解释习题 42 的循环依赖，而不是只修补一个根号的定义域。

**阅读原文时的校勘提示：** 英文网页保留原书。第 92 页 $f(x)=3,000,000x$ 那一句中的目标应为 $|f(x)-3,000,000a|<\varepsilon$；第 94 页 $|x-a|<|a|/2$ 表示 $x$ 到 $a$ 的距离小于 $a$ 到零距离的一半，不能按原文那句不准确的口头转述理解为 $x$ 更靠近零。课程中的估计均按公式的正确含义展开。

[完整英文原文](#chapter/5/original) · [全部 42 组习题](#chapter/5/original/original-ex-1) · [极限交互实验](#chapter/5/lab) · [返回本章学习路线](#chapter/5/path)

