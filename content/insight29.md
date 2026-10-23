# 第 29 章 Insight：把“数的边界”本身做成一个数

## 1．结构：一个核心想法，后面接着全部兑现它的工作

> The mass of drudgery which this chapter necessarily contains is relieved by one truly first-rate idea.

[原文第 588 页](#chapter/29/original/original-p-588)

那个核心想法是：用一个实数左边的全部有理数来确定它，然后反过来直接把满足适当条件的有理数集合定义成实数。章节顺序也由此改变：先定义对象和包含次序，立即证明上确界存在；接着定义加法、零、相反数与正性；再构造乘法、单位元和逆元；最后验证分配律。习题给出 Cauchy 序列和无限小数两种替代构造。

作者称反复验证“繁琐”，却没有用这个理由把它们跳掉。一个好定义必须承受所有运算的检验：写出候选集合只完成了一半，还要证明它仍是允许的对象，以及它满足承诺的法则。本章最终获得的是“至少一个完备有序域存在”，唯一性要等到下一章。

## 2．先借实数得到灵感，再彻底移除实数作为前提

> some means must be found for describing “the set of rational numbers less than a real number” without mentioning real numbers

[原文第 588 页](#chapter/29/original/original-p-588)

直觉说 $r$ 应由 $\{q\in\mathbf Q:q<r\}$ 确定。但若把这句话直接当作定义，就已经使用了待构造的 $r$，形成循环。作者把这个直觉抽取成只谈有理数的四条性质：向下封闭、非空、不等于整个 $\mathbf Q$、没有最大元素。这样的集合通常称为 Dedekind 分割的下部；本书直接称它为“实数”。

四个条件各自排除一种问题：向下封闭排除中间的洞；非空与非全集排除两种无穷端点；没有最大元素统一有理边界的表示。自然想法仍负责指路，但正式定义已经不需要预先存在的实数作指针。

这正是“直觉 → 找出不精确之处 → 建立定义”的完整例子。书中允许回想第 8 章关于已有实数的结论来获得信心，却明确把这种回想视为非正式说明，而不是本章构造的证明依据。

## 3．为什么一定要去掉最大元素？

> condition (4), although quite bothersome here, is really essential in order to avoid ambiguity

[原文第 589 页](#chapter/29/original/original-p-589)

$\{q:q<1\}$ 与 $\{q:q\le1\}$ 都描述了同一个熟悉的边界，但它们是不同集合。如果两个都收下，就会为“$1$”造出两个对象。没有最大元素的规则保留前者，排除后者。这不是可有可无的美观要求，它还会在证明 $\alpha+\mathbf0=\alpha$、定义相反数和乘法逆元时继续发挥作用。

示例 $\alpha=\{q\in\mathbf Q:q<0\text{ 或 }q^2<2\}$ 的定义没有写 $\sqrt2$，所以不预设平方根存在。要验证它没有最大元素，也不能说“取它与 $\sqrt2$ 的中点”。若 $q<0$，取 $0$ 即可；若 $q\ge0,q^2<2$，可取有理数

$$q'=q+\frac{2-q^2}{q+2}=\frac{2(q+1)}{q+2}.$$

它满足 $q'>q$ 且 $2-(q')^2=2(2-q^2)/(q+2)^2>0$。这一具体计算只用了有理数运算。以后证明该分割的平方等于 $\mathbf2$，才能正式把它称为 $\sqrt2$。

## 4．三层对象要分清：有理数、分割、分割的集合

> This means, in particular, that a rational number (a member of $\mathbf Q$) is not a real number

[原文第 589 页](#chapter/29/original/original-p-589)

这句看似反常，是在提醒构造中的类型差别。$q$ 是旧的有理数；$\iota(q)=\{r\in\mathbf Q:r<q\}$ 才是新构造中的一个实数。$\alpha$ 是有理数集合，而 $A$ 是实数集合，也就是一族这样的集合。$q\in\alpha$、$\alpha\subseteq\beta$、$\alpha\in A$ 是三种不同陈述。

构造完成并验证 $\iota$ 保持运算与次序后，才可以把 $q$ 与 $\iota(q)$ 认作同一个数来使用。这与第 25 章把实数 $a$ 与复数 $(a,0)$ 对应完全平行。为帮助追踪，原文页把新的零、单位元写为 $\mathbf0,\mathbf1$：它们是集合 $\{q:q<0\},\{q:q<1\}$，而不是空集和单元素集合。

## 5．完备性为什么反而最先、最容易证明？

> We will not bother numbering theorems in this chapter, since they all add up to one big Theorem: There is a complete ordered field.

[原文第 590 页](#chapter/29/original/original-p-590)

定义 $\alpha\le\beta$ 为 $\alpha\subseteq\beta$ 后，一族非空、有上界的分割 $A$ 的上确界候选就是

$$\beta=\bigcup_{\alpha\in A}\alpha.$$

证明有两层。先证明这个并集是分割：向下封闭和无最大元素从包含某个给定成员的原分割继承；$A$ 非空保证并集非空；一个分割上界 $\gamma$ 含住整个并集，而 $\gamma\ne\mathbf Q$ 保证并集也不等于 $\mathbf Q$。再证明最小上界性：每个 $\alpha\in A$ 都包含于并集；任何含住所有 $\alpha$ 的上界都必须含住并集。

这里没有调用已有实数的上确界定理，而是把上确界**明确构造为集合的并**。读证明时逐一追踪“非空”和“有上界”分别用于哪一步，就能看到定义与定理为什么严丝合缝。

还可补齐次序的全比较性：若 $\alpha$ 不包含于 $\beta$，取 $x\in\alpha\setminus\beta$；对每个 $y\in\beta$ 必有 $y<x$，否则向下封闭会迫使 $x\in\beta$。因此 $\beta\subseteq\alpha$。一般集合包含关系只是偏序，分割的特殊结构才让它成为全序。

## 6．加法的困难是封闭性，不是把符号换个名字

> Every time we mention a new real number, we must prove that it is a real number

[原文第 591 页](#chapter/29/original/original-p-591)

定义 $\alpha+\beta=\{x+y:x\in\alpha,y\in\beta\}$ 后，不能立即使用实数加法的法则。先逐项检验四条件：若 $w<x+y$，写成 $x+(w-x)$，其中 $w-x<y$；选两个分割外的有理数作界，便排除和集合等于全集；将分割内的元素稍增大，则排除最大元素。结合律和交换律此后才从有理数运算传递上来。

证明 $\alpha+\mathbf0=\alpha$ 也有不对称的两步。和集合包含于 $\alpha$ 容易，因为加上负数只会减小；反向则要把任意 $x\in\alpha$ 写成 $y+(x-y)$，其中 $y>x$ 仍在 $\alpha$，于是 $x-y<0$。这个 $y$ 恰由“无最大元素”提供。

务必注意：$\mathbf0$ 包含所有负有理数，却仍是加法单位元。它不是在逐元素加法里只贡献一个 $0$，而是整个和集合恰好恢复原分割。新对象的行为需要证明，不能凭对象外形判断。

## 7．相反数的第一次猜测为什么失败？

> The reasonable candidate for $-\alpha$ would seem to be the set

[原文第 592 页](#chapter/29/original/original-p-592)

自然猜测是 $\{x:-x\notin\alpha\}$：把分割外部翻到数轴另一侧。但若 $\alpha=\iota(1)=\{q:q<1\}$，这个集合恰为 $\{x:x\le-1\}$，有最大元素 $-1$，不满足定义。直觉遗漏了“外部可能包含边界”这一细节。

作者因此排除补集的最小元素，再反射：$x\in-\alpha$ 要求 $-x\notin\alpha$，且 $-x$ 不是补集的最小者。等价的便于操作的说法是：存在某个 $y\notin\alpha$，使 $x<-y$。若补集没有最小者，就没有额外边界需要删掉；同一个定义同时覆盖有理与无理边界。

这段是全书定义方法的微缩版：提出看起来正确的对象 → 用简单边界例子测试 → 找出违反的条件 → 作恰好够用的修正 → 验证四条性质。记住最终公式而不经历失败，会丢掉作者真正的教学意图。

## 8．Archimedean 性在哪里不可替代？

> at this point we require the Archimedean property of $\mathbf Q$

[原文第 593 页](#chapter/29/original/original-p-593)

为了证明 $\alpha+(-\alpha)=\mathbf0$，一个包含方向很容易：一内一外相减为负。另一个方向要证明**每个**负有理数都能如此表示。作者的引理给出：对任意正有理步长 $h$，存在 $x\in\alpha,y\notin\alpha$，且 $y-x=h$，还能保证 $y$ 不是外部最小值。

证明用步长为 $h$ 的有理格点穿越边界。Archimedean 性保证正向走不会永远留在分割内，也保证负向走最终进入分割；因此有相邻两个格点一内一外。若外点正好在边界，借无最大元素把内点稍向右移，并将外点平移同样距离。于是任意负数 $z$ 可写为 $x-y$，且 $-y\in-\alpha$。

不是“定义里修补端点”就自动得到加法逆元。真正困难的是：可以以任意小的指定步长跨过边界。这也是上一章为什么专门声明有理数的 Archimedean 性的原因。

## 9．乘法不能直接把所有成员两两相乘

> Multiplication presents difficulties of its own.

[原文第 594 页](#chapter/29/original/original-p-594)

若模仿加法，取 $\{xy:x\in\alpha,y\in\beta\}$，那么两个分割都含任意小的负数；负数乘负数就会产生任意大的正数，完全破坏想要的有限边界。作者先只处理正实数，使用两个分割中的**正有理成员**相乘，再补入全部非正有理数以保证向下封闭。

对得到的正乘积 $xy$，任意更小的正数 $w$ 可写成 $((w/(xy))x)y$，第一个因子仍在原分割内。这是乘法封闭性证明中最具体的一步。随后定义绝对值，再按照符号规则扩展到零和负数。

这种分层不是先假定实数的符号运算法则，而是把它们写进乘法定义，然后验证结合律、交换律、分配律确实同时成立。还须证明最初的包含次序与“差属于正元素集合”的次序相同；作者用已经得到的加法逆元排除平移后不等式变成等式的可能。

## 10．倒数重复了边界问题，但需要乘法版本的跨越引理

> which is the multiplicative analogue of our first lemma.

[原文第 596 页](#chapter/29/original/original-p-596)

对 $\alpha>\mathbf0$，候选倒数的正成员 $x$ 应使 $1/x$ 位于 $\alpha$ 外部，并且不是外部最小者；此外补入全部非正有理数。排除最小值的理由与相反数相同：必须让所得集合没有最大成员。

为了证明 $\alpha\alpha^{-1}=\mathbf1$，要对每个 $0<z<1$ 把它写成 $x\cdot(1/y)$，其中 $x$ 在分割内，$y$ 在外，而且 $y/x=1/z>1$。这次沿几何格点 $r^k$ 走，而不是沿算术格点 $kh$ 走。

为什么几何格点能越过任何界？$r>1$ 时，Bernoulli 不等式 $r^n\ge1+n(r-1)$ 把它还原为 Archimedean 性；反方向 $r^{-n}$ 能小于任意给定正有理数。同样还需微调格点，排除外部最小值。两个引理互相照应：一个指定差，一个指定比；各自为一个逆运算提供缺少的包含方向。

## 11．分配律最有意思的一步：把两个不同因子统一起来

> The case when all numbers are positive contains an interesting point

[原文第 597 页](#chapter/29/original/original-p-597)

从 $x(y+z)=xy+xz$ 可直接得到 $\alpha(\beta+\gamma)\subseteq\alpha\beta+\alpha\gamma$。反过来，右边的典型正元素却长成 $x_1y+x_2z$，两个来自 $\alpha$ 的因子未必相同，不能直接提取一个 $x$。

作者假设 $x_1\le x_2$，写成

$$x_1y+x_2z=x_2\bigl((x_1/x_2)y+z\bigr).$$

因为 $(x_1/x_2)y\le y$，向下封闭保证这个新因子仍在 $\beta$。若次序相反，就对称地处理。**用较大的公共因子提出，再把另一因子缩小**，正好利用了分割的结构。

一个省略的小细节也值得补齐：正和的两个加数即使最初一正一负，也可重新表示为两个正加数。对正分割 $B,C$，若 $w=u+v>0$ 且 $u\le0$，则 $w\le v\in C$；选很小的正 $u'\in B$ 且 $u'<w$，便有 $w-u'\in C$。如此才可放心使用证明里的正因子表示。

混合符号时，作者将等式改写成已经证明的正数等式，再用加法逆元整理；不在验证分配律之前偷偷调用尚待证明的负号分配公式。这是构造性证明应有的依赖顺序。

## 12．Cauchy 序列构造：一个实数不能只是一条逼近路线

> Since two Cauchy sequences might converge to the same real number, however, this proposal requires some modifications.

[原文第 599 页](#chapter/29/original/original-p-599)

$1,1,1,\ldots$ 与 $1+1/n$ 应代表同一个数，所以第 1 题把差趋于零的有理 Cauchy 序列视为等价，取整个等价类作为实数。此处“差趋于零”可以只用正有理 $\varepsilon$ 定义，不必假定一般实极限存在。

逐项相加、相乘容易想到，但还要证明两件事：结果仍是 Cauchy 序列，以及换一条等价代表不会改变结果的等价类。乘法用到 Cauchy 序列有界，例如

$$|a_nb_n-a_n'b_n'|\le|a_n|\,|b_n-b_n'|+|b_n'|\,|a_n-a_n'|.$$

非零等价类的代表最终远离零：存在有理 $c>0$，最终 $|a_n|\ge c$，否则 Cauchy 性会迫使它趋于零。于是尾部可以取倒数，且 $|1/a_n-1/a_m|\le|a_n-a_m|/c^2$。开头有限项若为零，先改成任意非零有理数，等价类不会改变。正性同样应定义为“最终大于某个固定正有理数”，不能仅用“最终为正”，否则 $1/n$ 代表的零也会被判作正数。

证明新实数的 Cauchy 序列收敛时，要面对“等价类的序列”，不是普通有理数列。可从第 $n$ 个等价类选取一个误差小于 $2^{-n}$ 的有理近似 $q_n$，证明 $\{q_n\}$ 为 Cauchy，再以它的等价类作为极限。这一对角选取将两层序列降为一层。结合这里的 Archimedean 性，Cauchy 完备性才能接回上确界性质。

## 13．无限小数：表示最熟悉，运算却未必最容易建立

> how do you add infinite decimals without worrying about carrying digits infinitely far out?

[原文第 599 页](#chapter/29/original/original-p-599)

第 2 题用整数部分与数字序列定义对象，并排除最终全为 $9$ 的序列，避免 $0.999\ldots$ 与 $1.000\ldots$ 双重表示。这里 $a+\sum b_n10^{-n}$ 只是启发性解释，不能用尚未建立的无限实数和来定义对象。

次序先由整数部分及第一个不同数字决定。证明上确界时逐位选取可能的最高数字；若生成最终全为 $9$ 的形式，要向前进位为允许的标准表示。随后把每个对象截断为有限有理小数，先在有理数内计算，再取截断和对应对象的上确界来定义加法。

负数采用“整数部分加非负小数尾”的表示，例如 $-1.2=-2+0.8$。因此直接照搬带负号的日常记法容易混淆。乘法也不能对所有符号直接取截断乘积的上确界：负数的截断从下方逼近，两负相乘可能从上方逼近。应先对非负对象定义，再通过符号扩展，与本章正文同样处理。

三种构造的选择各有目的：分割让上确界容易；Cauchy 等价类让极限容易；小数让表示直观，却让进位和运算的验证更费力。熟悉的外观，并不总是最有效的基础定义。

## 14．这一章证明了什么，还没有证明什么？

> For the first time we know that we have not been operating in a vacuum

[原文第 598 页](#chapter/29/original/original-p-598)

现在已从给定的有理数结构出发，构造一个满足域、有序性与上确界性质的系统。每个原来作为假设的实数性质，在这个模型中都有了证据。但这并不说明所有可能的构造在集合意义上相同；下一章要证明它们保持结构地对应。

英文页忠实保留原文；教学上补充两点阅读精度。590页上确界证明中写了严格上界 $\alpha<\gamma$，实际只需由“有上界”直接得到的 $\alpha\le\gamma$，整个并集证明照常成立。598页关于“所有可证明事实”的结语，应读作本书所研究的实数结构可由这些性质刻画，不应扩张为一套机械程序能判定一切数学命题；证明依旧在通常的集合与逻辑框架内进行。

自检路线：不借 $\sqrt2$ 证明示例分割无最大元；逐项说明并集证明中各假设的用途；用 $\iota(1)$ 击破朴素相反数定义；解释算术格点与几何格点两个引理；重现分配律反向包含中的公共因子技巧；指出 Cauchy 构造中代表无关性与远离零的必要性。做到这些，繁琐的验证就有了清晰的组织，而不是一串需要硬记的集合公式。
