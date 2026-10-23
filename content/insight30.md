# 第 30 章 Insight：构造可以不同，实数的数学结构却只有一个

## 1．结构：先修正问题，再证明修正后的答案

> The answer to this question, if taken literally, is “yes.”

[原文第 601 页](#chapter/30/original/original-p-601)

“是否存在不同于 $\mathbf R$ 的完备有序域？”若把“不同”理解为集合不同，答案当然是有：把 $a$ 换成 $(a,a)$ 就得到第 28 章的例子。作者没有掩饰这个反例，而是借它重新精确化问题：不同对象是否只是同一种运算与次序结构的不同名字？

因此本章先扩展函数概念，定义同构；再对任意完备有序域 $F$ 实际构造 $f:\mathbf R\to F$，验证它是一一、到上、保持运算与次序的映射；最后通过习题研究哪些性质能传递、同构本身是否唯一。结论不是所有实数构造的集合逐字相同，而是它们在同构意义下相同。

这延续了作者一贯的路线：自然问题 → 简单反例揭露歧义 → 新定义 → 可以精确证明的定理。第 29 章解决存在，本章解决结构唯一，二者缺一不可。

## 2．为什么微积分书的最后，又要重新定义函数？

> a function is a collection of ordered pairs (of objects of any sort) which does not contain two distinct pairs with the same first element.

[原文第 601 页](#chapter/30/original/original-p-601)

现在输入可能是实数，输出却是另一个域里的任意对象，不再一定是平面上的点或普通数。函数的核心始终只是每个输入有唯一输出；有序对允许我们精确表达这件事，不要求输入输出属于特定数系。

作者列举 $\sin:\mathbf R\to\mathbf R$ 与 $\sin:\mathbf R\to[-1,1]$，以及 $\exp:\mathbf C\to\mathbf C$ 与 $\exp:\mathbf C\to\mathbf C\setminus\{0\}$。这提醒我们：陪域可以大于实际像集，且“到上”要相对于指定陪域判断。同一个指数函数对前一个陪域不是满射，对后一个则是。

把 $a$ 送到 $(a,a)$ 也是同样正当的函数。函数概念在全书最后走出了“数值公式”的外壳，成为比较数学结构的语言。

## 3．同构的四项条件，各排除一种不合格的改名

> this means that the renaming procedure is consistent with the operations of the field.

[原文第 602 页](#chapter/30/original/original-p-602)

一一性排除两个旧元素合用一个新名字；到上性排除目标域存在没被命名的元素；保持加法、乘法确保先运算再改名与先改名再运算得到相同结果；有序域还要求保持次序。只建立双射远远不够：$x\mapsto x^3$ 是实数到自身的保序双射，但 $f(1+1)=8\ne2=f(1)+f(1)$，所以不是域同构。

第 1 题要求把定义没有单独列出的性质推出来。由 $f(0)=f(0)+f(0)$ 消去得到 $f(0)=0$；利用到上性和乘法，$f(1)$ 充当目标域所有元素的单位元，所以 $f(1)=1$。再由 $a+(-a)=0$、$aa^{-1}=1$ 及逆元唯一性，得到相反数、倒数也被保持。

严格区分左右两边的操作很重要：$f(x\oplus y)=f(x)+f(y)$ 中，$\oplus$ 在源域内做，$+$ 在目标域内做。等式比较的是两个走不同路线最终抵达的目标域元素。

## 4．先定义整数、有理数：这部分其实没有选择余地

> This definition makes sense because if $m/n=k/l$, then $ml=nk$

[原文第 603 页](#chapter/30/original/original-p-603)

任何同构都必须把 $1$ 送到 $\mathbf1$，于是正整数只能送到相应次数的 $\mathbf1$ 之和，负整数由取负决定，有理数 $m/n$ 只能送到 $\mathbf m\mathbf n^{-1}$。为避免把正在扩展的函数混写，下面把这个先建好的有理映射记作 $j:\mathbf Q\to F$。

这一步有两个必须检验的细节。第一，$\mathbf n\ne\mathbf0$：目标域是有序域，每个正整数个 $\mathbf1$ 的和都为正，所以可以取逆。第二，同一个有理数的不同分数表示给出同一个像：$m/n=k/l$ 意味着 $ml=nk$，把整数运算搬到 $F$ 后，再合法地乘逆元即可。

完成后，$j$ 保持加法、乘法和严格次序。这个共同的有理数骨架并不是任意选出的嵌入，而是单位元与运算法则强制确定的。

## 5．用有理数定位任意实数，再让目标域的完备性接住它

> The definition of $f(x)$ for arbitrary $x$ is based on the now familiar idea that any real number is determined by the rational numbers less than it.

[原文第 603 页](#chapter/30/original/original-p-603)

对任意实数 $x$，收集目标域中所有对应于 $r<x$ 的有理像：

$$A_x=\{j(r):r\in\mathbf Q,r<x\},\qquad f(x)=\sup_F A_x.$$

源域中的有理数上下界保证 $A_x$ 非空且有上界；目标域的完备性保证这个上确界存在。第 29 章把“一个数左边的有理数”做成对象，现在用同一信息在任何完备有序域中定位它。

这里 $\sup_F$ 的下标不是装饰：上确界在目标域内取。后面证明满射时还会在 $\mathbf R$ 内取另一个上确界，两边的完备性各有作用。也不能因为这个定义很自然，就断言它已经保持运算；接下来的每一步仍是独立的证明责任。

## 6．扩展必须与旧定义一致：完备性先推出有理像稠密

> This is not automatic, but depends on the completeness of $F$

[原文第 603 页](#chapter/30/original/original-p-603)

对有理数 $x$，旧定义给出 $j(x)$，新定义给出 $\sup_F A_x$；必须证明二者相等。作者先从目标域的完备性推出 Archimedean 性：若 $\{\mathbf n:n\in\mathbf N\}$ 有上确界 $s$，则 $s-\mathbf1$ 不是上界，选 $\mathbf n>s-\mathbf1$ 后便得到 $\mathbf n+\mathbf1>s$，矛盾。

由此，任意 $a<b$ 之间有有理像 $j(r)$。具体做法是取自然数 $n$ 使 $\mathbf n(b-a)>\mathbf1$，再找整数 $m$ 满足 $\mathbf m-\mathbf1\le\mathbf n a<\mathbf m$，于是 $a<j(m/n)<b$。这样的整数位置由 Archimedean 性与整数的离散性保证。

现在所有 $j(r)$（$r<x$）都小于 $j(x)$，所以 $\sup_F A_x\le j(x)$。若严格小于，稠密性就在二者之间插入 $j(r)$；$j(r)<j(x)$ 推出 $r<x$，所以 $j(r)\in A_x$，却又超过该集合的上确界，矛盾。扩展到这里才真正成为与原定义相容的函数。

## 7．保持次序：为什么作者要插入两个有理数？

> To rule out the possibility of equality, notice that there are rational numbers $r$ and $s$

[原文第 604 页](#chapter/30/original/original-p-604)

从 $x<y$ 得到 $A_x\subseteq A_y$，只能推出 $f(x)\le f(y)$。真包含的集合也可能有相同上确界，不能把这里的“$\le$”直接改成“$<$”。

作者选择 $x<r<s<y$，于是

$$f(x)\le j(r)<j(s)\le f(y).$$

两边都容许等号，中间的严格间隔却确保 $f(x)<f(y)$。两个有理数的作用就是给严格性提供一段不会消失的间距。随后一一性立刻成立：不同实数总有一个小于另一个，其像也不同。

这个小技巧可迁移到很多通过上确界构造的映射：包含关系提供弱单调性，稠密子集中的两个分隔点提供严格单调性。

## 8．到上性：在另一边把同一套定位方法反过来

> Let $x$ be the least upper bound of $B$; we claim that $f(x)=a$.

[原文第 604 页](#chapter/30/original/original-p-604)

给定任意 $a\in F$，定义实有理数集合 $B=\{r\in\mathbf Q:j(r)<a\}$。目标域的有理像稠密性使 $B$ 非空、有上界；取 $x=\sup_{\mathbf R}B$。这一次用的是源域的完备性。

若 $f(x)<a$，在中间插入 $j(r)$。严格保序性给出 $x<r$，但 $j(r)<a$ 又说明 $r\in B$，与 $x$ 为上界矛盾。若 $a<f(x)$，插入 $a<j(r)<f(x)$，得到 $r<x$。因为 $r$ 小于上确界，存在 $s\in B$ 满足 $r<s$，故 $j(r)<j(s)<a$，再次矛盾。

两种不相等都不可能，所以 $f(x)=a$。这证明每个目标元素都已被命名。注意第二种情况用的是上确界的逼近性质，不能误写成“$r<x$ 所以 $r\in B$”而不说明理由。

## 9．保持加法和乘法：把潜在的错误挤回有理数层

> using the facts checked about $f$ for *rational* numbers

[原文第 605 页](#chapter/30/original/original-p-605)

假设 $f(x+y)<f(x)+f(y)$，在中间插入 $j(r)$。保序性给出 $x+y<r$。作者接着把有理数 $r$ 写成 $r_1+r_2$，且 $x<r_1,y<r_2$。这个分解的具体理由是：在非空区间 $(x,r-y)$ 中选有理 $r_1$，再令 $r_2=r-r_1$。

于是有理层已经证明的加法性给出 $j(r)=j(r_1)+j(r_2)>f(x)+f(y)$，与插入时的不等式矛盾。另一个方向也可以补全：若 $f(x)+f(y)<f(x+y)$，插入 $j(r)$ 后有 $r<x+y$；选 $r-y<r_1<x$，令 $r_2=r-r_1<y$，得到相反矛盾。

正数乘法的简写也能用同样结构展开。若插入的正有理数满足 $xy<r$，选 $x<r_1<r/y$，令 $r_2=r/r_1>y$，利用有理乘法性制造矛盾；若 $0<r<xy$，则选 $r/y<r_1<x$，得到 $0<r_2<y$。先证明加法性后已知 $f(-x)=-f(x)$，再把零与负数乘法归约到正数情形。

这个证明没有假设 $f$ 连续，也没有把上确界当作可以任意穿过加法、乘法的符号。它只使用稠密性、保序性和已经建立的有理运算法则，把任何可能的偏差压缩成一个有理数反例。

## 10．同构保留什么？把“显然”逐项翻译出来

> The point of this problem is to write out very formal proofs until you are certain that all statements of this sort are obvious.

[原文第 606 页](#chapter/30/original/original-p-606)

第 2 题给了四个层次。如果 $a^2+1=0$，则 $f(a)^2+1=f(a^2+1)=0$；一般多项式也一样，但要先把目标域的系数经 $f^{-1}$ 搬回源域，求根后再映过去。特征由有限次相加得到，因此同样保留。

对完备性，要搬运的是整个集合。若 $A\subseteq F_2$ 非空且有上界，则 $B=f^{-1}(A)$ 在 $F_1$ 非空、有上界。设 $s=\sup B$，保序性说明 $f(s)$ 是 $A$ 的上界；若 $u$ 是另一个上界，则 $f^{-1}(u)$ 是 $B$ 的上界，故 $s\le f^{-1}(u)$，再映回得到 $f(s)\le u$。所以 $f(s)=\sup A$。

保留的是用运算、次序及相应集合关系表达的结构事实，而不是某一种实现的偶然外观。例如“这个实数恰好是一个有理数集合”对分割模型有意义，对有序对模型可能没有同样的字面意义；它也不该出现在求导定理的证明中。

## 11．唯一的不只是结构，这个对应本身也被确定了

第 3 题证明同构可以复合；连同逆同构，才能严密地把“相同结构”当作等价关系。第 4 题更强：从 $\mathbf R$ 到某个给定完备有序域的同构只有一个。

若 $f,g$ 都是这样的同构，考虑 $h=g^{-1}\circ f:\mathbf R\to\mathbf R$。它固定所有有理数且严格保序。若 $h(x)>x$，选有理 $x<r<h(x)$，保序性却给出 $h(x)<h(r)=r$，矛盾；若 $h(x)<x$，同理矛盾。所以 $h(x)=x$，从而 $f=g$。

这回扣第 3 章第 17 题：在有理数上已知的行为，加上单调性，足以钉住所有实数的行为。这里不是说任意域之间都至多有一个同构。第 5 题立即给出对照：复共轭 $z\mapsto\bar z$ 是 $\mathbf C$ 的一个非恒等同构，它保持和与积，并将 $i$ 变成 $-i$。它作为复函数不可导，与它作为域同构完全不矛盾，因为两种性质问的是不同问题。

## 12．全书最后的主张：懂得构造，才能有根据地不再依赖构造

> It is an important part of a mathematical education to follow a construction of the real numbers in detail, but it is not necessary to refer ever again to this particular construction.

[原文第 605 页](#chapter/30/original/original-p-605)

作者的终点并不是要求今后每次写 $2+3=5$ 都还原为分割的并与和。他希望读者既知道基础能够兑现，又能在工作时使用恰当的抽象层。第 1 章列出运算法则，第 8 章揭示完备性对分析的必要性，第 29 章构造模型，本章证明结构唯一，于是“实数是完备有序域”成为有根据的工作方式。

自检可以沿着证明倒走：为什么实数自同构只能是恒等？为什么 $\sup$ 的定义不足以自动证明加法性？满射证明在哪一边使用完备性？为什么先要证明新旧有理定义一致？为什么严格保序证明插入两个有理点？为什么双射不等于同构？再向前走一遍，尝试仅用整数、有理数、上确界和稠密性重建整条映射。

最后把结构唯一性与“所有问题都可机械求解”区分开。定理说明所有完备有序域具有相同的实数结构；它没有给出自动发现所有定理或判定所有数学问题的算法。原文最后将“重要性质应与具体构造无关”坦率地称为作者与多数数学家共有的取向。这份克制，也是全书数学品味的一部分：把定义精确到足以支持证明，同时知道定理真正说到了哪里。
