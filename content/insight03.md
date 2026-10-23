# 第三章 Insight：函数是什么，以及怎样让一个定义真正工作

第三章的任务，是让你从“拿到公式就代入”走向**把函数当作一个完整的数学对象**。作者先让你使用一个暂定定义，随后才追问：不同规则何时算同一个函数？怎样保证符号 $f(x)$ 只有一个意义？一个定义究竟需要保存哪些信息？

下面的英文引文来自本章，页码均为**原书印刷页码**。中文结构划分、推导与前瞻联系是课程解读。章末的“有序对”附录也属于这次精读的范围。

## 第三章的结构：从直觉规则到可检验的对象

| 位置 | 作者安排的内容 | 要读出的推进 |
|---|---|---|
| 第 39–40 页 | 暂定定义与八个差异很大的例子 | 打破“函数必须是一条熟悉公式”的限制 |
| 第 40–42 页 | 定义域、函数值、记号、嵌套计算 | 区分函数与数；追踪每次输入是否有效 |
| 第 42–45 页 | 多项式、有理函数、逐点运算、复合 | 用少数操作看见复杂表达式的结构 |
| 第 45–47 页 | “规则”定义的缺陷，有序对集合与唯一性 | 从直觉的不足中产生严格定义 |
| 第 47–48 页 | 定义的地位，严格性与图像直觉 | 知道何时必须准确，何时可以借助直观 |
| 习题 1–5 | 记号、定义域、数与函数的区别 | 把符号训练成可靠的语言 |
| 习题 6–7 | 多项式插值、因式分解、根的数目 | 构造满足要求的函数，证明自由度受到怎样的限制 |
| 习题 8–19 | 函数方程、特征函数、奇偶分解 | 使用“对所有输入成立”的强约束；由数的关系建立函数的关系 |
| 习题 20–22 | 变化估计、复合运算、分解成 $h\circ f$ | 从局部控制得到整体结论；检查定义是否无歧义 |
| 习题 23–28 | 单侧逆、交换关系、函数的代数与次序 | 检查熟悉的数字运算法则能迁移多少 |
| 第 54–55 页附录 | 用集合构造有序对及其证明 | 按所需性质选择定义，并验证定义确实有效 |

**这一章的顺序本身就是教学思想：先获得足够多的使用经验，才有能力看见原定义为什么不够。** 严格定义出现得晚，并不意味着它不重要；作者正在让你先产生需要它的理由。

## 1．函数的范围，比“能够写出公式、算出答案”广得多

> One thing should be abundantly clear from these examples—a function is *any* rule that assigns numbers to certain other numbers, not just a rule which can be expressed by an algebraic formula, or even by one uniform condition which applies to every number; nor is it necessarily a rule which you, or anybody else, can actually apply in practice (no one knows, for example, what rule 8 associates to $\pi$).

——[第 40 页 · 阅读英文原文](#chapter/3/original/original-p-40)

作者没有用八个多项式重复说明同一件事。他刻意安排了不同障碍：限制输入的函数，按有理与无理分类的函数，零散指定若干值的函数，含参数的一族函数，以及数小数展开中 7 的个数的函数。

它们共同迫使你区分三件事：

- 是否为每个允许的输入规定了唯一输出；
- 是否有一个简洁的表达式；
- 是否能实际算出某个输入对应的值。

第一件事关乎它是不是函数，后两件事关乎表达和计算的便利。混为一谈，会使你在遇到分段函数、任意定义的函数或反例时，错误地认为它们“不是真正的函数”。

例 8 中关于 $\pi$ 的叙述是原书在该处的说明，不应把网页引文误读成一次关于当前研究进展的报告。这个例子在课程中的用途，是说明**精确规定一个对象与掌握计算它的方法，并非同一个要求**。

## 2．定义域是对象的一部分；化简不自动改变输入资格

> the two functions must be shown to have the same domain, and the same value at any number in the domain.

——[第 44 页 · 阅读英文原文](#chapter/3/original/original-p-44)，引自句子片段

作者的例 1 与例 4 都使用平方公式，但后者只允许 $-17\le x\le\pi/3$。公式相同还不够，输入范围也必须相同，才能说两个函数相等。

习题 1 让这个问题变得具体。若 $f(x)=1/(1+x)$，则计算 $f(f(x))$ 时要依次检查：

$$x\ne-1,\qquad f(x)\ne-1.$$

第二个条件排除 $x=-2$，所以

$$f(f(x))=\frac{x+1}{x+2},\qquad x\ne-1,-2.$$

右边简化后的分式在 $x=-1$ 有意义，但原来的两次调用没有意义。把缺失的点补进去，是定义一个扩充后的函数；它不是一次纯粹的代数化简。

同样，复合函数的定义域并不是两个定义域的简单交集，而是

$$\{x:x\in\operatorname{domain}g,\quad g(x)\in\operatorname{domain}f\}.$$

第二次检查的对象是 **$g(x)$**，不是原来的 $x$。以后处理极限、连续性、链式法则时，这种逐层检查仍然有用。

## 3．把函数和函数值分开，才看得见运算的结构

> Although this method of writing functions reveals their “structure” very clearly, it is hardly short or convenient.

——[第 45 页 · 阅读英文原文](#chapter/3/original/original-p-45)

作者用一个看起来很长的三角表达式说明：“复杂”可以来自少数简单操作的反复组合。表达式长，并不等于构造原则多。

例如令 $S(x)=x^2$、$s(x)=\sin x$。那么 $S\circ s$ 是一个函数，而 $(S\circ s)(x)=\sin^2x$ 是它在某个输入处的值；$s\circ S$ 则在同一输入处给出 $\sin(x^2)$。这两个构造次序不同。

习题 4 特意要求答案是一个 *number*，紧接着习题 5 要求答案是一个 *function*。这种相邻安排是在训练你识别正在谈论的对象，而不只是练习代入。

函数的逐点运算与复合也不能混用。逐点乘法把同一个 $x$ 送入两个函数，再把结果相乘；复合则把第一个输出送入下一层。复合具有结合律，因为两种括号最终都产生 $f(g(h(x)))$；一般却不具有交换律。

后续的导数规则会顺着这些构造来组织：和、积、商、复合各有对应规则。学会拆出结构，才知道一个计算应调用哪条规则。

## 4．严格定义不能靠给模糊的词换一个同义词

> But a satisfactory definition can never be constructed by finding synonyms for English words which are troublesome.

> The correct question to ask about a function is not “What is a rule?” or “What is an association?” but “What does one have to know about a function in order to know all about it?”

——[第 46 页 · 阅读英文原文](#chapter/3/original/original-p-46)

这是全书“从直觉走向定义”最鲜明的示范之一。

自然的想法是：函数是一条计算规则。但“平方”与“先平方，再加上 $3x+3$，再减去 $3(x+1)$”是不同的指令，却给出相同的输入—输出关系。若我们想把它们看作同一个函数，就不能用指令的写法来决定函数的身份。

把 “rule” 换成 “association” 只是把模糊移到另一个词上。作者于是改变问题：**完全确定一个函数，需要哪些数据？**

答案是：允许哪些输入，以及每个输入对应哪个输出。这些信息可以由一组有序对保存。再排除同一个输入对应两个不同输出的情况，就得到第 47 页的定义：

$$ (a,b)\in f,\ (a,c)\in f\quad\Longrightarrow\quad b=c.$$

注意没有要求不同输入必须有不同输出。原文中的 $(1,7)$ 与 $(3,7)$ 可以共存；不能共存的是 $(1,7)$ 与 $(1,8)$。单值性和单射性是两种不同的要求。

**这里值得模仿的不是“凡事都写成集合”，而是先找出对象的决定性信息，再把允许与不允许的情形写成可检验的条件。**

## 5．定义是证明的接口；直觉仍然可以保留

> These definitions are so important (at least as important as theorems) that it is essential to know when one is actually at hand, and to distinguish them from comments, motivating remarks, and casual explanations.

——[第 47 页 · 阅读英文原文](#chapter/3/original/original-p-47)

> neither the intuitive nor the formal definition indicates the best way of thinking about functions. The best way is to draw pictures; but this requires a chapter all by itself.

——[第 48 页 · 阅读英文原文](#chapter/3/original/original-p-48)，引自句子片段

这两句话合起来读，能避免两种偏差。一种是只依赖熟悉的形象，忘记证明到底允许使用哪些条件；另一种是以为掌握形式定义，就必须放弃图像、规则或其他直觉。

定义规定了一个对象必须满足什么，因而成为证明可以调用的准确条件。例如，要证明某个集合确实定义了函数，就检查同一输入是否可能得到两个不同输出。至于如何发现结果、如何记住构造，规则和图像仍然可能更有效。

附录进一步表明，连“有序对”也可以按需要的性质处理：可以把它当作基本对象，也可以通过集合构造它。作者选择

$$(a,b)=\{\{a\},\{a,b\}\},$$

是因为这个构造能保证 $(a,b)=(c,d)$ 时 $a=c$ 且 $b=d$。普通集合 $\{a,b\}$ 不够，因为它不记录顺序。构造以后还必须处理 $a=b$ 的退化情形；此时原本看起来有两个成员的集合会缩成一个成员。

**一个定义的价值，体现在它准确保存了什么性质，并使后续论证能够进行。** 不是名字听起来多么自然，也不是形式看起来多么复杂。

## 6．“解出唯一候选”可以帮助发现构造，但还需要验证

> If you try to do part (b) first, by “solving” for $E$ and $O$ you will probably find the solution to part (a).

——[第 51 页 · 习题 13](#chapter/3/original/original-p-51)

习题要求把任意定义在 $\mathbf R$ 上的函数写成偶函数与奇函数之和。若先假设这样的分解存在，就有

$$f(x)=E(x)+O(x),\qquad f(-x)=E(x)-O(x).$$

加减两式，唯一可能的候选便被迫出现：

$$E(x)=\frac{f(x)+f(-x)}2,\qquad
O(x)=\frac{f(x)-f(-x)}2.$$

这一步说明任何分解都必须这样写。接下来还要反向检查：按这两个公式定义的函数，确实分别为偶函数和奇函数，而且相加等于 $f$。这样才能把唯一性分析转化为存在性证明。

习题 6 的 Lagrange 插值也体现“构造可组合的零件”：先造出在 $x_i$ 处为 1、其余指定点为 0 的函数

$$L_i(x)=\prod_{j\ne i}\frac{x-x_j}{x_i-x_j},$$

再用 $\sum_i a_iL_i$ 实现全部指定值。各输入点必须互异，否则分母可能为零，且同一点可能被要求取得两个不同值。

这里所得多项式的次数是**至多** $n-1$；若数据特殊，最高次项可能消去。英文原文保留习题 6(b) 的原印措辞，课程解读则明确这一细节。再结合习题 7 的根数上限，还能证明满足这些条件、次数至多 $n-1$ 的插值多项式唯一。

## 7．“对所有输入成立”是一种强约束，不能只看几个例子

> Hint: Try to get some information about $f$ or $g$ by choosing particular values of $x$ and $y$.

——[第 52 页 · 习题 19](#chapter/3/original/original-p-52)

处理函数方程，首先可以选择能让结构显露的输入。例如假设对所有 $x,y$ 都有

$$f(x)+g(y)=xy.$$

令 $y=0$，可知 $f$ 是常函数；再令 $x=0$，可知 $g$ 是常函数。但右边的 $xy$ 并不恒定，于是这样的两个函数不可能存在。几个特殊输入在这里能得出普遍结论，是因为原条件保证它对**每一个**输入组合成立。

习题 16、17 则提醒你不要过度推广。加法关系 $f(x+y)=f(x)+f(y)$ 可以依次推出整数、倒数和有理数上的 $f(q)=qf(1)$；作者明确暂停在有理数处，尚未宣称所有实数都成立。

习题 17 额外给出乘法关系。由非零性得 $f(1)=1$；借助正数的平方根，可把正数写成非零平方，从而证明 $f(x)>0$；然后得到严格递增，再用有理数的稠密性将结论夹到所有实数。

这条推理使用了平方根存在性与有理数稠密性。它们并非突然从函数方程本身产生，也不能声称仅凭第一章的 P1–P12 就已经全部建立。学习时应像第二章那样，记录每次扩展结论究竟增加了什么依据。

## 8．把区间分细，会让误差阶数的差异变得决定性

> Prove that $f$ is a constant function. Hint: Divide the interval from $x$ to $y$ into $n$ equal pieces.

——[第 52 页 · 习题 20(b)](#chapter/3/original/original-p-52)

若只知道 $|f(y)-f(x)|\le|y-x|$，非恒定函数当然可能存在，例如 $f(x)=x$。把右边改成平方，却出现完全不同的结论：

$$|f(y)-f(x)|\le(y-x)^2\quad\text{对所有 }x,y.$$

原题先给单向不等式；交换 $x,y$ 后，才能把它写成这里的绝对值形式。

固定 $x<y$，令 $x_i=x+i(y-x)/n$。先用相消和，再用三角不等式：

$$\begin{aligned}
|f(y)-f(x)|
&\le\sum_{i=1}^n|f(x_i)-f(x_{i-1})|\\
&\le n\left(\frac{y-x}{n}\right)^2
=\frac{(y-x)^2}{n}.
\end{aligned}$$

这个界对每个正整数 $n$ 都成立。利用实数的阿基米德性质，若左侧是一个固定的正数，便可选足够大的 $n$ 使右侧更小，矛盾。因此 $f(y)=f(x)$。

这一思想很接近后续分析：**先控制每一小段，再累计成整体控制，最后利用尺度变细。** 一阶界累计后仍为 $y-x$，二阶界累计后却多出一个 $1/n$。真正起作用的是误差的阶数与分段数量之间的关系，不是一个孤立的代数技巧。

## 9．写下一个定义以后，要证明不同选择不会产生冲突

> Just try to define $h(z)$ when $z$ is of the form $z=f(x)$ (these are the only $z$ that matter) and use the hypotheses to show that your definition will not run into trouble.

——[第 52 页 · 习题 22(b)](#chapter/3/original/original-p-52)

如果希望 $g=h\circ f$，一个直接想法是规定 $h(f(x))=g(x)$。可同一个 $z$ 也许能写成 $f(x)$ 和 $f(y)$，此时究竟应该把 $h(z)$ 定义为 $g(x)$ 还是 $g(y)$？

原题条件 $f(x)=f(y)\Rightarrow g(x)=g(y)$ 恰好排除了冲突。它使 $g$ 在被 $f$ 合并的输入上保持相同输出，因此 $h$ 可以只读取 $f$ 留下的信息。这里默认相关函数的定义域按题意相容；不能在需要调用 $g(x)$ 的地方忽略其输入资格。

例如，若 $f(x)=x^2$、$g(x)=|x|$，取 $h(u)=\sqrt u$（$u\ge0$）便得到分解。如果改成 $g(x)=x$，$f$ 把 $1$ 与 $-1$ 合并，而 $g$ 区分它们，分解就不可能。

这正是第 47 页单值性定义在习题中的实际工作：**定义一个新对象，必须证明它与所作的选择无关。**

习题 23–26 从另一个角度追查信息能否恢复。$f\circ g=I$ 迫使 $g$ 不合并不同输入，且 $f$ 能达到每个目标输出；左右两侧的逆关系不能混为一谈。若两边的逆都存在，结合律直接给出

$$h=h\circ(f\circ g)=(h\circ f)\circ g=g.$$

这份短证明说明，清楚掌握对象与运算的结构，可以省掉漫长的逐值计算。

## 怎样检验自己是否读懂了第三章

1. 给出一个没有单一代数公式的函数，并明确写出定义域和输出规则。
2. 解释为什么 $\frac{x^2-1}{x-1}$ 与 $x+1$ 在采用各自最大定义域时不是同一个函数。
3. 分别证明一条逐点运算规律和一条复合规律，逐层检查输入资格。
4. 对习题 13 写出“先推导候选，再验证存在，再确认唯一”的完整过程。
5. 复现习题 20 的分段估计，指出三角不等式与阿基米德性质分别在哪里使用。
6. 完成习题 22，明确说出为什么 $h(f(x))=g(x)$ 不会因选择不同的 $x$ 而产生冲突。
7. 读完附录后，用自己的话解释有序对构造保存了什么，以及为什么必须单独考虑两个元素相同的情形。

进入第四章时，带着这个区别：**函数已经被准确规定，图像将提供另一种理解它的方式。** 图像有助于发现，但它所表达的关系仍需要由定义与论证来确认。

