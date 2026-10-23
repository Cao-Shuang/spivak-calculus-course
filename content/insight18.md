# 第 18 章 Insight：指数与对数是怎样被创造出来的

本章的核心不是再学两张函数表，而是看一个熟悉的符号怎样成为真正定义在实数上的函数。作者先让代数直觉遇到困难，再从导数与反函数找到积分定义；定义建立以后，原来想要的代数规律必须重新证明。最后，他用指数函数同时展示增长的力量、微分方程的唯一性，以及“无限光滑”所不能保证的事情。

## 1．全章结构：先创造对象，再确认身份，最后检验直觉

| 原文位置 | 作者推进的问题 | 学习时必须带走的思想 |
|---|---|---|
| [339—340 页](#chapter/18/original/original-p-339) | $10^{\sqrt2}$ 究竟是什么意思？ | 记号熟悉不等于对象已经定义；要求满足规律不等于已经构造出对象。 |
| [341—342 页](#chapter/18/original/original-p-341) | 为什么从 $\int_1^xdt/t$ 开始？ | 先造出可靠的函数，再证明它把乘法变成加法。 |
| [343—345 页](#chapter/18/original/original-p-343) | exp、$e$、$e^x$、$a^x$ 怎样依次出现？ | 每个新记号都要有存在性和与旧定义一致的证明。 |
| [346—348 页](#chapter/18/original/original-p-346) | 求导、唯一性和函数方程 | 定义可以替代公式记忆；代数条件需要分析条件的约束。 |
| [348—351 页](#chapter/18/original/original-p-348) | 指数增长能产生什么反例？ | 快速衰减能压住任意有限阶的奇异性；光滑不等于可由 Taylor 展开还原。 |
| [351—362 页](#chapter/18/original/original-p-351) | 49 组习题 | 从计算进入双曲函数、增长比较、凸性、微分方程与替代构造。 |

## 2．熟悉的代数规律其实留下了一个洞

> In algebra, $10^x$ is usually defined only for *rational* $x$, while the definition for irrational $x$ is quietly ignored.

——[原文 339 页](#chapter/18/original/original-p-339)

整数次幂来自重复相乘。要求 $10^{x+y}=10^x10^y$，会迫使我们定义 $10^0=1$、$10^{-n}=1/10^n$、$10^{1/n}=\sqrt[n]{10}$。这是很自然的扩张：新定义要保存旧结构。

但 $\sqrt2$ 不是分数，有限次开方和相乘没有给出 $10^{\sqrt2}$。说“取越来越接近 $\sqrt2$ 的有理数”也还欠着三个证明：近似所得的数是否收敛、是否与近似序列无关、代数规律是否在极限中保留。这条路线可以走，作者把它留到第 22 章习题 29。

更深的一层是：只要求乘法律与 $f(1)=10$，并不能排除不连续的解。需要连续性这样的分析条件，才能把有理数上已确定的信息传到全部实数上。开头的困难和末尾习题 38 是同一个问题的两端。

**停下来想：**“所有有理数处相等”什么时候能推出两个函数处处相等？若没有连续性，你能立即给出反例吗？

## 3．把问题变得更强，反而看见了构造方法

> One way to find such a function is suggested if we try to solve an apparently more difficult problem: find a *differentiable* function $f$ such that

——[原文 340 页](#chapter/18/original/original-p-340)

作者暂时假定目标函数可导，由乘法律算出

$$f'(x)=f'(0)f(x)=\alpha f(x).$$

表面上这没有进展：未知函数的导数仍然含未知函数。但换到反函数，未知的函数值消掉了：

$$(f^{-1})'(x)=\frac1{\alpha x}.$$

现在右侧只剩常数与一个早已认识的函数。这是本章最值得模仿的“换问题”：直接寻找对象没有线索时，寻找它的反函数、导数或满足的不变量。

必须分清逻辑角色。340 页是在**寻找定义的动机**，没有证明所假定的 $f$ 存在。真正的存在性来自下一页积分的构造。若把这段动机当成证明，就会在还没定义指数函数时使用它。

## 4．自然对数的“自然”来自归一化

> and hope that this integral will be the logarithm to *some* base, which might be determined later.

——[原文 341 页](#chapter/18/original/original-p-341)

不知道 $\alpha$，就先不追求以 10 为底，把系数取成 1：

$$\log x=\int_1^x\frac{dt}{t},\qquad x>0.$$

下限 1 保证 $\log1=0$；被积函数 $1/t$ 保证 $\log'(x)=1/x$。底数将由定义产生，而不是先指定一个神秘常数 $2.718\ldots$。

定义域也不是附注。当 $x>0$ 时，积分经过的闭区间避开 0；当 $x\le0$ 时，$1/t$ 在途中无定义或无界，不能直接使用本书已经建立的普通积分。对数负数的问题不能靠“把公式照搬”解决。

这体现了一种常见构造策略：自由参数妨碍推进时，先选一个最简单的标准化对象，最后通过缩放恢复一般情形。本章的换底公式就是这个策略的完成。

## 5．乘法变加法：证明中最关键的是固定一个变量

> Now choose a number $y>0$ and let

——[原文 342 页](#chapter/18/original/original-p-342)

要证明 $\log(xy)=\log x+\log y$，作者先固定 $y$，比较 $x\mapsto\log(xy)$ 和 $x\mapsto\log x$ 的导数。链式法则让额外的 $y$ 正好抵消：

$$\frac d{dx}\log(xy)=\frac{y}{xy}=\frac1x.$$

相同导数意味着两函数在区间 $(0,\infty)$ 上只差常数。这里的“常数”只是不随 $x$ 变化，它可以依赖固定的 $y$。再取 $x=1$，才确定它是 $\log y$。

证明不是凭函数图像猜规律，也没有把尚待证明的对数法则拿来求导。只用了积分定义、微积分基本定理、链式法则与导数为零的结论。以后遇到含两个变量的恒等式，可以尝试：固定一个变量，对另一个变量求导，用一个基准点确定常数。

## 6．增长越来越慢，为什么仍能到达任意高度？

> It is not immediately clear whether log is bounded or unbounded on $\mathbf R$.

——[原文 342 页](#chapter/18/original/original-p-342)

$\log'(x)>0$ 只说明递增，$\log'(x)\to0$ 也不能判定是否有上界。例如 $1-1/x$ 在 $x\ge1$ 上递增却有界。作者用已经证明的代数规律提供了额外信息：

$$\log(2^n)=n\log2\longrightarrow\infty,$$

$$\log(2^{-n})=-n\log2\longrightarrow-\infty.$$

这两个序列证明上下都无界，但“取遍所有实数”还需要连续性和介值定理；没有连续性，可以跳过一整段值。再结合严格递增，才得到 $\log:(0,\infty)\to\mathbf R$ 是一一对应，能够在整个实轴上定义反函数 exp。

原文这句中的 $\mathbf R$ 应结合前面的定义理解为讨论对数的整个定义域；对数本身只定义在正实数上。网页原文保留作者印刷用语，学习时不要据此把负数纳入定义域。

## 7．先有 exp，才有 $e$，最后才有实数幂

> Since exp is defined for all $x$ and $\exp(x)=e^x$ for rational $x$, it is consistent with our earlier use of the exponential notation to *define* $e^x$ as $\exp(x)$ for all $x$.

——[原文 344 页](#chapter/18/original/original-p-344)

构造顺序必须记清：

$$\int_1^x\frac{dt}{t}\ \longrightarrow\ \log\ \longrightarrow\ \exp=\log^{-1}\ \longrightarrow\ e=\exp(1)\ \longrightarrow\ e^x=\exp(x)\ \longrightarrow\ a^x=e^{x\log a}.$$

反函数求导给出 $\exp'=\exp$；对数的乘法律给出 $\exp(x+y)=\exp(x)\exp(y)$。于是 exp 在有理数处与旧的幂运算一致，才有资格接管 $e^x$ 这个记号。

同样，$a^x=e^{x\log a}$ 是定义，$(a^b)^c=a^{bc}$ 和 $a^{x+y}=a^xa^y$ 是随后的定理。不要在证明它们时无意中先用一次它们。这里要求 $a>0$，保证所有实数指数都能统一处理；负底数的某些有理次幂有意义，并不意味着存在同样的实值统一定义。

习题 17 才证明 $e=\lim_{x\to\infty}(1+1/x)^x$，习题 19 才解释连续复利。这些是本章构造的**结果**。习题 32 则研究另一套可能的起点，帮助你区分“一个对象的多种等价刻画”和“同一证明里混用尚未建立的刻画”。

## 8．遇到复杂幂函数，回到定义就有办法

> There is no point in remembering this formula—simply apply the principle behind it in any specific case that arises; it does help, however, to remember that the first factor in the derivative will be $g(x)^{h(x)}$.

——[原文 346 页](#chapter/18/original/original-p-346)

对于 $g(x)>0$，把 $g(x)^{h(x)}$ 写成 $\exp(h(x)\log g(x))$，链式法则和乘积法则会自动产生两个贡献：指数本身在变，底数也在变。

例如 $x^x=e^{x\log x}$，所以

$$\frac d{dx}x^x=x^x(1+\log x),\qquad x>0.$$

既不能把它当 $a^x$，也不能把它当 $x^a$，因为这里没有那个固定的 $a$。这正是“记原则”的实际含义：知道定义把复杂表达式拆成了哪些已掌握的运算。

习题 2 的对数求导把乘积变成和，适合减少重复运算；习题 20 的 $\log|f|$ 则提醒你，$f$ 可以为负，但必须先保证在所讨论区间里不为零。任何除以 $f$ 或取对数的步骤都带着条件。

## 9．唯一性证明为什么除以 $e^x$，而不除以 $f$？

> (This is permissible, since $e^x\ne0$ for all $x$.)

——[原文 347 页](#chapter/18/original/original-p-347)

知道 $ce^x$ 是 $f'=f$ 的解，还没有证明所有解都如此。作者构造

$$g(x)=f(x)e^{-x},\qquad g'(x)=e^{-x}(f'(x)-f(x))=0.$$

因此 $f(x)=ce^x$。妙处是除数是**已经知道处处非零的函数**。若先写 $f'/f=1$ 再积分，就默认 $f\ne0$，既丢掉零解，又需要处理可能的零点与区间之间的拼接。习题 21 正让你比较这两种证明。

乘以 $e^{-x}$ 的作用，是把微分方程变成一个导数为零的表达式。这是积分因子的雏形。习题 28 的 Gronwall 不等式沿用同样思想，把微分等式换成不等式，进而控制解的大小。

物理题也要保留符号意识：衰变模型若写成 $A'=cA$，衰减时应有 $c<0$；半衰期为 $-\log2/c>0$。原文习题 22 将 $c$ 描述为 disintegration 的 probability，不能把这个措辞误读为“方程里的 $c$ 是正概率”。冷却模型则对温差 $T-M$ 使用同一结构。

## 10．连续性是从有理数走向实数的桥

> but which are *not* the function $f(x)=10^x$!

——[原文 348 页](#chapter/18/original/original-p-348)

习题 38 的证明值得完整做一次。若 $f(x+y)=f(x)f(y)$ 且 $f$ 不恒为零，那么 $f(0)=1$，又由 $f(x)f(-x)=1$ 得到处处非零。再由 $f(x)=f(x/2)^2$ 得到处处为正。令 $a=f(1)>0$，整数与有理数的代数运算推出 $f(q)=a^q$。

到这里仍然只确定了有理数处的值。对任意实数 $x$，取有理数 $q_n\to x$，连续性才允许

$$f(x)=\lim_n f(q_n)=\lim_n a^{q_n}=a^x.$$

本章正文用前面章节已有的稠密性结论完成这一步；数列记法在这里用于说明思路，并会在第 22 章正式展开。去掉连续性，代数关系仍然成立，却不足以保证熟悉的指数函数。这不是边角条件，而是唯一性的核心。

## 11．增长比较：把粗估计放大成任意次幂的结论

> The proof consists of several steps.

——[原文 348 页](#chapter/18/original/original-p-348)

作者没有一开始就反复使用 l’Hôpital 法则。他先从积分上和得到 $\log x<x$，从而 $e^x>x$。这只是粗估计，尚不能推出 $e^x/x\to\infty$。关键是拆开指数：

$$\frac{e^x}{x}=\frac12\frac{e^{x/2}}{x/2}e^{x/2}>\frac12e^{x/2}\longrightarrow\infty.$$

再重新缩放变量：

$$\frac{e^x}{x^n}=\frac1{n^n}\left(\frac{e^{x/n}}{x/n}\right)^n\longrightarrow\infty.$$

一个粗下界加上函数自身的乘法律，就被放大成了对所有固定自然数 $n$ 的结论。这比会算一个极限更有价值。

“增长速度”也要按定义判断。习题 47 的 $f\sim g$ 表示比值趋于某个有限非零常数，并非这里必须趋于 1。两个都趋于无穷的函数也未必能比较：如 $f(x)=x(2+\sin x)$、$g(x)=x$，比值持续振荡。网页保留原书记号，别把后来常见的另一种 $\sim$ 约定带进来。

## 12．所有阶导数都为零，函数仍然可以不是零

> Hint: Consider functions $g(x)=e^{-1/x^2}P(1/x)$ for a polynomial function $P$.

——[原文 360 页，习题 40](#chapter/18/original/original-ex-40)

定义

$$f(x)=\begin{cases}e^{-1/x^2},&x\ne0,\\0,&x=0.\end{cases}$$

在非零处反复求导，只会得到 $e^{-1/x^2}$ 乘上 $1/x$ 的某个多项式。指数的衰减压过每一个固定次数的多项式增长，因此这些表达式在零附近都趋于零。

但这里还不能直接把“导数表达式趋于零”写成“零点导数为零”。必须归纳地检查差商：已知 $f^{(k)}(0)=0$，考察 $f^{(k)}(h)/h$；多除一个 $h$ 仍只增加有限的幂次，极限仍是零，于是下一阶导数存在且为零。

最终 $f^{(k)}(0)=0$ 对所有 $k$ 成立，可 $x\ne0$ 时 $f(x)>0$。零点的一切有限阶局部信息都与零函数一致，依然不能决定邻域里的函数。习题 41 还乘上 $\sin(1/x)$：无限振荡可以被更快的衰减包裹，最终成为无穷次可导函数。

这为第 20 章设置了最重要的警戒：能写出每一个 Taylor 多项式，不代表增加次数就一定还原函数；需要证明余项趋于零。

## 13．习题中的其他主线，也属于本章内容

| 题组 | 关键任务 | 要识别的结构 |
|---|---|---|
| [1—6](#chapter/18/original/original-ex-1) | 求导、对数求导、画图、极限 | 每次先说明定义域；求导规则来自定义，不靠外形套用。 |
| [7—10](#chapter/18/original/original-ex-7) | 双曲函数及反函数 | 用 $e^x,e^{-x}$ 的组合造函数；$\cosh^2-\sinh^2=1$ 对应双曲线，反函数需选择单调分支。 |
| [11—19](#chapter/18/original/original-ex-11) | 增长、$x^x$、$e$ 的极限与复利 | 分清点态不等式、无界与趋于无穷；识别已经出现过的导数定义。 |
| [20—30](#chapter/18/original/original-ex-20) | 微分方程、积分方程、Gronwall | 检查初值与零解；求导得到必要条件以后，要代回原积分方程。习题 25(i) 在 $x=0$ 就给出矛盾。 |
| [31—36](#chapter/18/original/original-ex-31) | 积分极限、另一种构造、Napier、凸性 | 先估量再算；图像单调性可解决 $x^y=y^x$；有限加权平均通向积分平均。 |
| [37—46](#chapter/18/original/original-ex-37) | 函数刻画、平坦函数、高阶微分方程 | 区分构造一个解、列出若干解、证明没有其他解。特征根提供解，唯一性证明才能说明完整性。 |
| [47—49](#chapter/18/original/original-ex-47) | 增长分类、超越给定函数列、无理性 | 比较未必形成全序；用对角式构造超越可数个既定增长尺度。 |

双曲函数的“类比”也有边界：$\cosh$ 在全实轴不是一一映射，定义 $\cosh^{-1}$ 必须先限制到 $[0,\infty)$。不要让与三角函数的形式相似遮住定义域和符号的差异。

关于原文的几处细节：习题 12 的 $F/\log$ 在 $x=1$ 是 $0/0$，讨论有界性应先在 $x>1$ 上进行；习题 32(a) 第二行印出的 $\log_a'$ 应结合推导辨认，多出的撇号不应带进实际计算；习题 35(b) 的严格小于号在所有 $z_i$ 相等时不成立，通用结论是小于等于。习题 36 若只假定正且 Riemann 可积，$\log f$ 未必是普通 Riemann 可积的；加上 $f\ge m>0$ 即可保证这点，或另行讨论广义积分。例子是 $f(0)=1$、$f(x)=e^{-1/x}$（$0<x\le1$）：$f$ 正且可积，但 $\log f=-1/x$ 在零附近无界。原文页保留这些印刷内容，Insight 单独说明数学条件。

## 14．一次真正读懂本章的自检

先完成 [习题 17](#chapter/18/original/original-ex-17)、[21](#chapter/18/original/original-ex-21)、[38](#chapter/18/original/original-ex-38)、[40](#chapter/18/original/original-ex-40)，再选择 [28](#chapter/18/original/original-ex-28)、[34](#chapter/18/original/original-ex-34)、[42—46](#chapter/18/original/original-ex-42) 深入。计算题用于熟练表达，后面这些题用于检查你是否掌握了构造和证明。

<details><summary>不看书，能说明为什么积分定义产生了全实轴上的指数函数吗？</summary>

需要依次说明：$1/t$ 在正闭区间可积；log 连续且严格递增；乘法律推出上下无界；介值定理保证值域为 $\mathbf R$；因此反函数 exp 存在于整个实轴。遗漏无界性或介值定理，就没有证明反函数的完整定义域。

</details>

<details><summary>为什么 $f'=f$ 和 $f(0)=1$ 能确定 exp，而乘法律与 $f(1)=e$ 还需要连续性？</summary>

前者直接用 $(fe^{-x})'=0$，在连通区间上得到常数，初值确定常数为 1。后者的代数运算先只能锁定有理数处的值，连续性才把这些值唯一延伸到实数。两种刻画对分析条件的需求不同。

</details>

<details><summary>平坦函数的反例究竟否定了什么，没有否定什么？</summary>

它否定“无限次可导就一定等于某点 Taylor 级数”。它没有否定有限阶 Taylor 逼近：对每个固定 $n$，$e^{-1/x^2}=o(x^n)$ 在零附近依然成立。固定阶数让 $x\to0$，与固定非零 $x$ 让阶数趋于无穷，是两个不同的问题。

</details>
