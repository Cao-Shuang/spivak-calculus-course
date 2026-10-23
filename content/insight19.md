# 第 19 章 Insight：积分方法的力量，在于把问题变成另一个问题

这一章题目很多，若只记住“分部积分、换元、部分分式”，很容易错过作者的安排。他先区分积分、原函数和初等表达式，再解释计算记号背后的定理；随后，习题把这些定理用于特殊函数、振荡、数值误差和几何。全章真正统一的思想是：找到能够控制问题的结构，而不把“写出一个熟悉的公式”当作唯一目标。

## 1．全章地图：计算技巧只是其中一层

| 原文位置 | 内容 | 要回答的问题 |
|---|---|---|
| [363—365 页](#chapter/19/original/original-p-363) | 原函数、初等函数、不定积分记号 | 存在、可表达、会计算，是不是同一件事？ |
| [366—368 页](#chapter/19/original/original-p-366) | 线性与分部积分 | 怎样把乘积求导反过来使用？ |
| [369—375 页](#chapter/19/original/original-p-369) | 换元定理与操作步骤 | 为什么换变量时必须连同微分和端点一起处理？ |
| [376—381 页](#chapter/19/original/original-p-376) | 三角积分、递推、部分分式 | 何时靠识别，何时存在系统方法？ |
| [381—388 页](#chapter/19/original/original-p-381) | 计算与方法比较 | 怎样选择变换，并通过求导验证？ |
| [389—398 页](#chapter/19/original/original-p-389) | 近似单位、曲线、Abel、Gamma、Wallis、广义积分 | 积分定理如何超出初等求积？ |
| [399—401 页](#chapter/19/original/original-p-399) | 梯形与 Simpson 公式 | “能任意逼近”怎样变成有效而有误差保证的计算？ |
| [402—408 页附录](#chapter/19/original/original-p-402) | 体积与表面积 | 为什么同一个积分运算能够表达不同维度的几何量？ |

## 2．没有初等原函数，不等于没有原函数

> Of course, **a continuous function $f$ always has a primitive**, namely,

——[原文 363 页](#chapter/19/original/original-p-363)

作者随即写出 $F(x)=\int_a^xf$。这已经是一个明确的函数定义，微积分基本定理保证它的导数是 $f$。本章继续寻找的，是能否把这个函数写成有限次代数运算、复合以及熟悉函数的表达式。

例如 $e^{-x^2}$ 连续，$F(x)=\int_0^xe^{-t^2}\,dt$ 完全存在；“没有初等原函数”否定的是某一类表达方式，不是否定这个对象。作者明确说，初等表达式不存在是一个困难的定理，不是暂时没人找到技巧。

这里有三个应当分开的任务：证明对象存在；证明它属于某一表达式类别；真正算出它的值。后面的习题 20 只要求证明初等原函数存在，特意不要求找出来。习题 42 则反过来：虽然没有初等原函数，某个特定的广义积分仍然能精确求值。

本章对 elementary function 的脚注也应读：作者说明自己采用了简化范围，标准定义还包括代数函数。学习定义时要看清作者当前约定，不能只凭名词判断范围。

## 3．积分方法值得学，因为它们是定理

> The most useful “methods” of integration are actually very important theorems (that apply to all functions, not just elementary ones).

——[原文 364 页](#chapter/19/original/original-p-364)

分部积分与换元法的价值，并不限于把某道习题变成 $\log$ 或 $\arctan$。它们能把一个未知积分与另一个积分联系起来，即使两者都没有初等答案。习题 18、19 正要求这样做。

这一点也解释了作者为什么先证明定理，再介绍简写。操作记号可以省略步骤，但它的可靠性来自已经证明的函数关系。会计算却说不出所用定理的条件，遇到零点、分支或无穷区间时就容易出错。

例如 $\int x^2e^{-x^2}\,dx$ 可通过分部积分化成 $-\frac12xe^{-x^2}+\frac12\int e^{-x^2}\,dx$。这不是失败：它把新函数的研究减少到了一个基础函数。

## 4．定积分并不是“原函数相减”的定义

> the integral $\int_a^bf(x)\,dx$ is *not* defined as “$F(b)-F(a)$, where $F$ is an indefinite integral of $f$”

——[原文 365 页](#chapter/19/original/original-p-365)

第 13 章先用上下和定义了积分，第 14 章才证明它与导数的关系。如果反过来把积分定义成原函数之差，会丢掉许多可积但没有原函数的函数，也会让基本定理变成一条循环解释。

同时，$\int f$ 在本章表示原函数或原函数族，而 $\int_a^bf$ 是一个数。省略 $+C$ 是计算约定，不是宣称所有原函数只有一个。习题 14 专门暴露这点：两次分部积分后出现同一个积分符号，若把两边当成没有常数差的同一个具体函数，就会错误地消灭常数。

比较严谨的读法是：这些不定积分等式在相差常数的意义下成立。要得到全部解，最后恢复常数；要确定唯一解，再提供一个初值。若定义域不是一个区间，还可能需要在不同连通区间分别选常数。

## 5．分部积分：把导数移到更合适的因子上

> As the following examples illustrate, integration by parts is useful when the function to be integrated can be considered as a product of a function $f$, whose derivative is simpler than $f$, and another function which is obviously of the form $g'$.

——[原文 367 页](#chapter/19/original/original-p-367)

它直接来自 $(fg)'=f'g+fg'$：

$$\int_a^bfg'=[fg]_a^b-\int_a^bf'g.$$

这不是“遇到乘积就用分部积分”，而是一次有方向的交换：$f$ 被求导，$g'$ 被还原。只有新积分更简单，或者形成可解的关系，这个交换才有收益。

作者的例子展示三种收益。$xe^x$ 中，多项式求导会降次；$\log x=1\cdot\log x$ 中，隐藏的因子 1 提供容易积分的一侧；$e^x\sin x$ 中，操作两次绕回原积分，形成线性方程。第三种不会让每一步都“看起来更简单”，却让整个过程闭合。

更广泛地看，分部积分把难以控制的导数移走。习题 34 对 $\sin(\lambda t)$ 积分，会得到一个 $1/\lambda$ 因子，由此估计高频振荡的总贡献。这时目的不是计算一个显式原函数，而是获得趋于零的界。

## 6．换元的证明里，真正被比较的是同一个端点差

> If $F$ is a primitive of $f$, then the left side is $F(g(b))-F(g(a))$.

——[原文 369 页](#chapter/19/original/original-p-369)

换元公式

$$\int_{g(a)}^{g(b)}f(u)\,du=\int_a^bf(g(x))g'(x)\,dx$$

两边看似不同，实际都等于 $F(g(b))-F(g(a))$。左边用基本定理；右边先用链式法则，确认 $F\circ g$ 是被积函数的原函数，再用基本定理。

因此，$g'(x)$ 不是“多出来的装饰”，而是复合函数求导必然带来的因子。端点也必须换，因为它们描述的是不同变量的取值。若 $g(a)>g(b)$，积分方向的约定会自动处理符号。

这一版定理不要求 $g$ 一一对应：它的证明没有用到反函数。只要相关函数在合适区间满足连续性条件，$g$ 可以来回变化。与之不同，后面把 $x$ 显式写成 $g^{-1}(u)$ 的操作确实需要选择可逆的分支，并确保反函数求导可用。不要把两种换元的条件混为一谈。

## 7．“令 $u=g(x)$”只是压缩了证明，不是新的运算法则

> (after this manipulation only the letter $u$ should appear, *not* the letter $x$).

——[原文 371 页](#chapter/19/original/original-p-371)

作者用了几页才把换元定理缩写为 $u=g(x)$、$du=g'(x)\,dx$，随后又在脚注提醒：两个不定积分代表的原函数并不是字面上相等的函数，正确关系涉及复合。

实践中可以按三个问题检查。第一，变量和微分是否全部换成了 $u$？第二，新的积分是否确实更容易处理？第三，若原问题是不定积分，是否已经把答案换回 $x$？定积分则换端点后可以直接在 $u$ 的世界里算到底。

对 $\int x/(1+x^2)\,dx$，$u=1+x^2$ 给出 $du=2x\,dx$，因而前面应有 $1/2$。不确定常数在分子还是分母，最可靠的检查是把候选答案求导。作者在 373 页明确展示了这种自检习惯。

## 8．好的换元不一定让每个符号都变短

> In this case, instead of replacing a complicated expression by a simpler one, we will replace $x$ by $\sin u$, because $\sqrt{1-\sin^2u}=\cos u$.

——[原文 375 页](#chapter/19/original/original-p-375)

$x=\sin u$ 看似把简单的 $x$ 换成复杂的函数，却把 $\sqrt{1-x^2}$ 变得可处理。换元的目标是简化整体结构，而不是减少字数。

这里隐含的分支值得说清：取 $u=\arcsin x\in[-\pi/2,\pi/2]$，才有 $\cos u\ge0$，于是 $\sqrt{\cos^2u}=\cos u$。任意角度下应为 $|\cos u|$。这个符号不是纯代数小事，而是反函数定义域提供的信息。

另一个例子是 $u=\sqrt{e^x+1}$。它同时处理指数和根式，最终把被积函数变成多项式。识别“多个麻烦表达式能否由同一个新变量表达”，比记住一张换元清单更有效。

习题 12 的半角正切换元把正弦、余弦与微分都化成有理式，说明一种通用方法确实存在。但作者故意让你用它处理 $\sin^2x$：通用不等于经济，结构简单时应优先使用简单方法。

## 9．有理函数给出了一个可以系统完成的类别

> Moreover, if a problem has been reduced to the integration of a rational function, it is then certain that an elementary primitive exists, even when the difficulty or impossibility of finding the factors of the denominator may preclude writing this primitive explicitly.

——[原文 381 页](#chapter/19/original/original-p-381)

先做多项式除法，把分子次数降到分母以下；再把实系数分母分解成一次因子和不可约二次因子的幂。部分分式定理把问题拆成标准块。

一次因子对应 $1/(x-\alpha)^k$；二次因子的分子必须允许一次式 $bx+c$，而且每一个幂次都要列出。对于二次式，先把分子分成“分母导数的倍数”与剩余常数，再配方、缩放，并使用递推公式。

这也说明为什么计算“初等原函数存在”不等于完成分解。习题 20 令 $u=e^x$，就把问题化为 $\int du/(u^5+u+1)$。知道它属于有理函数一类，已经完成存在性的任务，不必继续解五次方程。

原文 378—380 页的大例子有明显的系数和符号不一致，网页保留原样：共同分母中的 $+3$ 与前后的 $+2$ 不一致；分子在前后两处改变；“degree 8”的叙述也与展开的最高可能次数不一致；380 页配方后的分母漏了内层平方。学习方法时可从作者给出的四个部分分式重新通分核验，而不要把这些印刷不一致当成合法代数操作。方法本身是可靠的，逐项求导或通分能够检验具体表达式。

## 10．习题 26：积分可以提取一个点的信息

> Let $f$ be integrable on $[-1,1]$ and continuous at 0.

——[原文 389 页，习题 26(b)](#chapter/19/original/original-ex-26)

把非负函数 $\phi$ 压缩成 $\phi_h(x)=h^{-1}\phi(x/h)$，支撑缩到 $[-h,h]$，但积分仍是 1。于是 $\int\phi_hf$ 是越来越集中在零点附近的加权平均。

证明的要点是把目标值减掉：

$$\left|\int\phi_hf-f(0)\right|\le\sup_{|x|\le h}|f(x)-f(0)|\int\phi_h\longrightarrow0.$$

只需要 $f$ 在零点连续，远处可以不连续。积分运算通过适当权重“看见”了局部信息。

后半题的 $h/(h^2+x^2)$ 没有紧支撑，不能直接复制前面的证明。先分成 $|x|<\delta$ 与其外侧：近处靠连续性，远处靠核随 $h$ 变小且 $f$ 有界。总质量趋于 $\pi$，所以极限是 $\pi f(0)$。这一步的意义在于识别两种误差来自不同机制，分别控制。

## 11．Abel 分部求和：找到不需要导数的同类结构

> Abel’s formula can often be used as a substitute for integration by parts in situations where the functions in question aren’t differentiable.

——[原文 393 页](#chapter/19/original/original-p-393)

令 $s_k=a_1+\cdots+a_k$，则

$$\sum_{k=1}^na_kb_k=\sum_{k=1}^{n-1}s_k(b_k-b_{k+1})+s_nb_n.$$

$a_k$ 被换成累积和 $s_k$，$b_k$ 被换成差分。这与分部积分里“一个因子取原函数、另一个因子求导”对应，但有限代数恒等式可以独立验证，不需要把 Riemann 和的近似当成严格证明。

当 $b_k$ 非负且不增时，各个差分非负，因而部分和的上下界可以传给加权和。习题 36 用这种办法把习题 35 的第二积分中值定理推广到没有可导性假设的情形。它是在教你：一个证明若过度依赖导数，可以寻找更原始的有限版本。

392 页最后的下标式与开头的 Abel 恒等式不一致，实际使用应以先独立验证的恒等式为准。393 页对从第 $k$ 项开始的和给出的扩展界，也应把 $m,M$ 理解为相应尾段部分和的界，不能无条件沿用前缀部分和的同一组界。

## 12．Gamma、Wallis 与高斯积分：计算可以依靠关系和夹逼

> It is an astonishing fact that improper integrals $\int_0^\infty f(x)\,dx$ can often be computed in cases where ordinary integrals $\int_a^bf(x)\,dx$ cannot.

——[原文 397 页，习题 42](#chapter/19/original/original-ex-42)

习题 40 从 $\Gamma(x)=\int_0^\infty e^{-t}t^{x-1}\,dt$ 开始。先检查两个端点的收敛性，再通过分部积分得到 $\Gamma(x+1)=x\Gamma(x)$，结合 $\Gamma(1)=1$，把阶乘延伸到非整数。递推与整数值本身仍不足以唯一确定函数，作者继续指出对数凸性在唯一刻画中的作用。这和上一章“代数规律还需要分析条件”呼应。

习题 41 把 $\int_0^{\pi/2}\sin^nx\,dx$ 的递推拆成奇数与偶数两列，再利用 $0\le\sin x\le1$ 比较相邻积分。Wallis 乘积的关键不是形式上不断相乘，而是证明剩下的积分比值趋于 1。

习题 42 用

$$1-x^2\le e^{-x^2}\le\frac1{1+x^2}$$

在各自适用区间内升到 $n$ 次幂，再令 $y=\sqrt n\,x$，把高斯积分夹在两串已能计算的乘积之间。Wallis 的极限使两侧同趋 $\sqrt\pi/2$，于是积分值确定。

这里没有找到 $e^{-x^2}$ 的初等原函数，也没有偷换积分与极限的顺序：直接通过积分不等式夹逼目标。要学习的是这种“绕开原函数，控制整个积分”的办法。395—396 页的历史叙述是对发现过程的介绍，其中从整数向半整数插值包含额外猜测；严格证明应以习题的递推和不等式为基础。395 页阶乘形式中的 $2^n$ 也与前面的乘积不一致，代数核算应为 $2^{2n}$。

## 13．广义积分：先在有限区间合法操作，再检查极限

习题 39 的分部积分不是把无穷大直接当成端点数字。应先在 $[a,R]$ 上写公式，再说明边界项和相应积分的极限存在。习题 43 对 $\int_0^\infty\sin x/x\,dx$ 的提示尤其好：零附近用原表达式的可去奇点，无穷远处用分部积分后的 $1/x^2$ 控制尾部。同一个表达式未必适合研究两个端点。

习题 46 的差值积分还有一个容易忽略的点：$\int_0^\infty f(\alpha x)/x\,dx$ 与 $\int_0^\infty f(\beta x)/x\,dx$ 可能各自发散，不能先拆成两个广义积分再相减。先在 $[\varepsilon,N]$ 上分别换元，中间部分抵消后只剩端点区间，最后用 $f$ 的端点极限得出结果。

正文许多对数答案写成 $\log x$、$\log(\sec x+\tan x)$ 或 $\log(1-e^x)$，对应的是对数内部为正的区间。若要覆盖其他允许区间，应使用相应的 $\log|\cdot|$ 并避开奇点。不同区间的常数仍需分开处理。原文页忠实保留写法，实际求解必须补回定义域检查。

## 14．数值积分不是“差不多”，而是带有可证明的误差

> The next three problems show how more refined methods can make the calculations much more efficient.

——[原文 399 页](#chapter/19/original/original-p-399)

上下和证明可积性，但真要计算，每个小区间的最大值和最小值可能本身很难求。梯形法只用端点值，把函数换成分段线性函数。误差不是靠图像看起来贴近来判断，而是由二阶导数控制：

$$\left|\int_a^bf-\Sigma_n\right|\le\frac{(b-a)^3}{12n^2}\max_{[a,b]}|f''|.$$

区间数翻倍，这个保证的上界缩小为四分之一。旧采样点可以复用，所以作者建议按 $2,4,8,\ldots$ 递增，而不是每次重新计算。

Simpson 方法在两个相邻小区间上使用端点与中点，权重为 $1,4,1$。它由二次插值产生，却恰好也对三次多项式精确，因为剩余三次项关于中点的积分抵消。为了估计一般函数，习题 49 选择额外匹配中点导数的三次多项式，把误差落实到四阶导数。

若一共分成 $2n$ 段，书中误差界是

$$\left|\int_a^bf-S_{2n}\right|\le\frac{(b-a)^5}{2880n^4}\max_{[a,b]}|f^{(4)}|.$$

不能只比较 $1/n^2$ 和 $1/n^4$ 而不看导数大小与光滑性。阶数提高带来更强保证，也要求更多条件。本章这一段直接为第 20 章“用多项式逼近并控制余项”做准备。

## 15．附录：积分的共同语言是累积，不是二维面积

> We originally introduced integrals in order to find the area under the graph of a function, but the integral is considerably more versatile than that.

——[原文 402 页](#chapter/19/original/original-p-402)

圆盘法把体积夹在内外圆柱片之间，得到 $\pi\int_a^bf(x)^2\,dx$。壳层法则从精确的薄壳体积 $\pi m_i(t_i^2-t_{i-1}^2)$ 出发，把平方差展开为 $(t_i+t_{i-1})(t_i-t_{i-1})$，极限才出现 $2\pi xf(x)$。

作者特别提醒：壳层的那两个和并不是某个函数的普通上下和，需要调用第 13 章附录的 Riemann 和结果。不能只要看到“求和乘小宽度”就宣布证明完成。

表面积同样先用圆台侧面积 $\pi s(r_1+r_2)$，再把斜长写成横向长度乘 $\sqrt{1+(f')^2}$，得到

$$S=2\pi\int_a^bf(x)\sqrt{1+f'(x)^2}\,dx.$$

这里的 $f$ 是旋转半径，根号项描述弧长伸长；二者各有几何来源。体积、表面积与弧长公式不是互相猜出来的，而是不同局部量经累积产生的。

附录最后的 $f(x)=1/x$、$x\ge1$ 给出鲜明检验：体积 $\pi\int_1^\infty x^{-2}\,dx=\pi$，表面积却至少为 $2\pi\int_1^\infty x^{-1}\,dx=\infty$。有限体积不控制边界面积。所谓油漆悖论混合了“填满体积”和“按固定正厚度涂覆表面”，这两个要求并不相同。

## 16．学习路线与自检

先做 [1—6](#chapter/19/original/original-ex-1) 中每种结构的代表题，再做 [14](#chapter/19/original/original-ex-14)、[16](#chapter/19/original/original-ex-16)、[20—22](#chapter/19/original/original-ex-20) 检查记号、存在性和递推。第二轮选择 [26](#chapter/19/original/original-ex-26)、[34—36](#chapter/19/original/original-ex-34)，练习把方法变成估计。第三轮完成 [40—43](#chapter/19/original/original-ex-40)、[47—49](#chapter/19/original/original-ex-47)，并读完附录。整个顺序保留了作者从计算到分析的提升过程。

<details><summary>换元时为什么不能只把 $x$ 换成 $u$，保留 $dx$ 和原端点？</summary>

换元来自复合函数的链式法则，导数因子负责补偿变量变化；端点表达新变量的取值。只替换被积函数的一部分，得到的通常是另一个积分，而不是原积分的另一种表达。

</details>

<details><summary>求不出初等原函数时，这一章还提供了哪些办法？</summary>

可以用积分定义函数，研究它的导数与关系；通过分部积分减少到一个基础积分；用对称性、换元和夹逼求特定定积分；或用梯形、Simpson 公式给出带误差保证的近似。每种办法回答的是不同问题。

</details>

<details><summary>能只用求导来证明所有可积函数的积分线性吗？</summary>

不能直接这样做。利用原函数的证明需要先保证原函数存在，正文为此假定连续性。第 13 章通过上下和证明的版本适用于更一般的可积函数。证明更简短，有时是因为使用了更强假设。

</details>

<details><summary>为什么曲线“看上去贴近”仍不足以证明体积、面积或数值误差接近？</summary>

必须控制相关局部量的总和。表面积还涉及斜率，数值积分误差涉及导数；位置上的接近不会自动控制这些量。作者逐步从几何小块、Riemann 和与导数余项建立联系，正是为了补足直觉遗漏的条件。

</details>
