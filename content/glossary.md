# 符号与术语：随时回到定义

同一个符号在不同上下文可能承担不同角色。这里按概念组织原书符号表，并补上中文解释和学习入口。遇到公式读不顺，先确定每个字母表示数、集合、函数、序列还是运算。

## 1. 数、代数与顺序

| 符号 | 含义与容易混淆之处 | 章节 |
|---|---|---|
| $0,1,-a,a^{-1}$ | 加法单位元、乘法单位元、加法逆元、非零元素的乘法逆元；在一般域中首先是结构的一部分 | [1](#chapter/1/guide)、[28](#chapter/28/guide) |
| $P$ | 正元素集合；P1–P13 则表示一系列性质，须由语境区分 | [1](#chapter/1/guide)、[8](#chapter/8/guide) |
| $a<b,a\le b,a>b,a\ge b$ | 严格与非严格顺序；后者允许等号 | [1](#chapter/1/guide) |
| $|a|$ | 实数绝对值；复数时表示模 | [1](#chapter/1/guide)、[25](#chapter/25/guide) |
| $\max(x,y),\min(x,y)$ | 两个数中较大、较小者；与集合的上确界不同 | [1](#chapter/1/guide) |
| $\mathbb N,\mathbb Z,\mathbb Q,\mathbb R,\mathbb C$ | 自然数、整数、有理数、实数、复数。本书自然数从 1 开始；需要含零时明确注明 | [2](#chapter/2/guide)、[25](#chapter/25/guide) |
| $n!$ | $1\cdot2\cdots n$，并约定 $0!=1$ | [2](#chapter/2/guide) |
| $\sum_{i=1}^n a_i,\prod_{i=1}^n a_i$ | 有限求和、有限乘积；索引字母只是占位名称 | [2](#chapter/2/guide)、[3](#chapter/3/guide) |
| $\binom nk$ | 二项式系数 $n!/[k!(n-k)!]$；广义实数上标时需另行定义乘积 | [2](#chapter/2/guide)、[20](#chapter/20/guide) |

## 2. 集合、函数与坐标

| 符号 | 含义与检查点 | 章节 |
|---|---|---|
| $\varnothing$ | 空集，没有元素的集合 | [2](#chapter/2/guide) |
| $\{x:\text{条件}\}$ | 满足条件的全部对象组成的集合；冒号读作“使得” | [3](#chapter/3/guide) |
| $A\cap B,A\cup B$ | 交集、并集 | [3](#chapter/3/guide) |
| $(a,b)$ | 可以表示有序对，也可以表示开区间；由上下文决定 | [3](#chapter/3/guide)、[4](#chapter/4/guide) |
| $[a,b],(a,b),[a,b),(a,b]$ | 闭区间、开区间、两种半开区间 | [4](#chapter/4/guide) |
| $(a,\infty),(-\infty,a)$ | 无界区间；无穷不是一个可纳入端点的实数 | [4](#chapter/4/guide) |
| $f(x),x\mapsto f(x)$ | 函数在输入 $x$ 的输出；映射规则的写法 | [3](#chapter/3/guide) |
| $f:A\to B$ | 定义域 $A$、陪域 $B$ 的映射；值域可小于 $B$ | [30](#chapter/30/guide) |
| $I$ | 恒等函数 $I(x)=x$；在算子语境也可能表示恒等算子 | [3](#chapter/3/guide)、[27](#chapter/27/guide) |
| $f+g,fg,f/g,cg$ | 逐点加、乘、除及标量倍；商还需排除 $g=0$ 的输入 | [3](#chapter/3/guide) |
| $g\circ f$ | 先算 $f$ 再算 $g$ 的复合；与乘积 $gf$ 不同 | [3](#chapter/3/guide) |
| $f^{-1}$ | 单射函数的反函数；通常不是 $1/f$ | [12](#chapter/12/guide) |
| $|f|,\max(f,g),\min(f,g)$ | 对函数值逐点实施对应运算 | [3](#chapter/3/guide) |
| $f<g$ | 在约定的共同定义域上逐点严格小于；需说明所讨论的集合 | [3](#chapter/3/guide) |
| $C_A$ | 集合 $A$ 的示性函数，属于时为 1，否则为 0；课程也写 $\mathbf1_A$ | [3](#chapter/3/guide) |
| $\mathbb R^A$ | 从 $A$ 到实数的所有函数组成的集合 | [3](#chapter/3/guide) |
| $[x],\{x\}$ | 原书用于整数部分和小数部分；集合花括号的意义另由语境区分 | [4](#chapter/4/guide) |
| $v+w,cv,v\cdot w,\|v\|$ | 向量和、数乘、内积、长度；内积的结果是数 | [4](#chapter/4/guide) |
| $\det(v,w)$ | 平面向量行列式 $v_1w_2-v_2w_1$，符号包含方向信息 | [4](#chapter/4/guide)、[17](#chapter/17/guide) |
| $c(t),c'(t)$ | 参数曲线与速度向量，不把向量值函数误当单个坐标 | [12](#chapter/12/guide) |

## 3. 极限、连续与完备性

| 符号／术语 | 精确含义 | 章节 |
|---|---|---|
| $\varepsilon,\delta$ | 误差参数的惯用字母；通常先给输出容许误差 $\varepsilon$，再选择输入半径 $\delta$ | [5](#chapter/5/guide) |
| $\lim_{x\to a}f(x)=L$ | 对任意输出误差，存在输入邻域控制所有去心输入；不要求 $f(a)=L$ | [5](#chapter/5/guide) |
| $x\to a^+,x\downarrow a$ | 从大于 $a$ 的一侧趋近；极限记号不要求某条具体路径单调 | [5](#chapter/5/guide) |
| $x\to a^-,x\uparrow a$ | 从小于 $a$ 的一侧趋近 | [5](#chapter/5/guide) |
| $x\to\infty,x\to-\infty$ | 输入最终超出每个正界限或负界限 | [5](#chapter/5/guide) |
| $f(x)\to\infty$ | 输出最终大于任意给定实数；不表示收敛到某个实数 | [5](#chapter/5/guide) |
| 连续 | 在指定点极限等于该点函数值；端点用定义域内的一侧 | [6](#chapter/6/guide) |
| 上界／下界 | 比集合中所有元素都大或都小的界限，允许等号 | [8](#chapter/8/guide) |
| $\sup A=\operatorname{lub}A$ | 最小上界，不必属于 $A$ | [8](#chapter/8/guide) |
| $\inf A=\operatorname{glb}A$ | 最大下界 | [8](#chapter/8/guide) |
| $\limsup A,\liminf A$ | 原书在集合极限点讨论中使用的上、下极限记法；需区别序列的上、下极限 | [8](#chapter/8/guide)、[22](#chapter/22/guide) |
| 一致连续 | 一个 $\delta$ 对整个定义域中所有足够近的点对有效 | [8](#chapter/8/guide) |
| Archimedean 性质 | 自然数无实上界；等价地，足够小的 $1/n$ 能小于任意正实数 | [8](#chapter/8/guide) |

## 4. 导数与积分

| 符号 | 含义与条件 | 章节 |
|---|---|---|
| $f'(a),\left.\frac{df(x)}{dx}\right|_{x=a}$ | 在点 $a$ 的有限差商极限 | [9](#chapter/9/guide) |
| $f',f'',f''',f^{(k)}$ | 导函数与高阶导数；$f^{(k)}$ 不是 $f$ 的 $k$ 次幂 | [9](#chapter/9/guide) |
| $d^2f/dx^2$ | 二阶导数的 Leibniz 记号，不能当成普通分数任意约分 | [9](#chapter/9/guide) |
| $\Delta x,\Delta f$ | 输入与输出的实际有限变化；与导数的极限区别 | [9](#chapter/9/guide) |
| $P=\{t_0,\ldots,t_n\}$ | 区间分割；此处的 $P$ 不是正数集合 | [13](#chapter/13/guide) |
| $L(f,P),U(f,P)$ | 分割对应的下和、上和 | [13](#chapter/13/guide) |
| $\int_a^b f,\int_a^b f(x)\,dx$ | 定积分；$x$ 是积分的哑变量 | [13](#chapter/13/guide) |
| $\underline{\int_a^b}f,\overline{\int_a^b}f$ | 下积分为所有下和的上确界，上积分为所有上和的下确界 | [14](#chapter/14/guide) |
| 黎曼和 | 各小区间取任意采样点，求函数值乘区间宽度的和 | [13](#chapter/13/guide) |
| $R(f,a,b)$ | 原书面积构造中，由 $y=0$、$x=a$、$x=b$ 和非负函数 $y=f(x)$ 围成的平面区域；这是区域，不是黎曼和或积分数值 | [13](#chapter/13/guide) |
| $\left.F(x)\right|_a^b$ | 端点代值之差 $F(b)-F(a)$；上下标附在竖线旁，不是把 $F$ 另定义为带参数的函数 | [19](#chapter/19/guide) |
| $\ell(f,P),\mathcal L(x)$ | 分割 $P$ 对应的内接折线长度；从固定左端点到 $x$ 的曲线弧长。两者的关系通过取所有分割的上确界建立 | [13](#chapter/13/practice/ex-25) |
| 弧长 $\ell$ | 折线长度的上确界；光滑曲线可用速度长度积分计算 | [13](#chapter/13/guide)、[19](#chapter/19/guide) |
| $\int f(x)\,dx$ | 不定积分，表示一族原函数；与一个定积分数值不同 | [19](#chapter/19/guide) |
| $\int_a^\infty f,\int_{-\infty}^b f$ | 反常积分，通过有限区间积分的极限定义 | [14](#chapter/14/guide)、[19](#chapter/19/guide) |
| $\int_{-\infty}^{\infty}f$ | 通常要求左右两侧分别收敛，不能只算对称极限 | [19](#chapter/19/guide) |
| $\Gamma(x)$ | Gamma 函数，$x>0$ 时由 $\int_0^\infty t^{x-1}e^{-t}dt$ 定义 | [19](#chapter/19/guide) |

## 5. 三角函数、指数和近似

| 符号 | 含义与提醒 | 章节 |
|---|---|---|
| $\sin,\cos,\tan,\cot,\sec,\csc$ | 正弦、余弦、正切、余切、正割、余割；后四者的分母非零条件不可省略 | [15](#chapter/15/guide) |
| $\sin^\circ,\cos^\circ$ | 原书比较角度制时的记号；导数多出 $\pi/180$ 因子 | [15](#chapter/15/guide) |
| $\pi,A(x)$ | 圆周率与构造三角函数时使用的面积函数；$A$ 的具体定义以章节为准 | [15](#chapter/15/guide) |
| $e(\theta)=(\cos\theta,\sin\theta)$ | 单位圆上的向量函数；在行星运动中与径向分解相配合，和指数函数的底数 $e$ 不是同一对象 | [12](#chapter/12/guide)、[17](#chapter/17/guide) |
| $\arcsin,\arccos,\arctan$ | 限制原函数定义域后选定的反函数分支 | [15](#chapter/15/guide) |
| $\log x$ | 本书表示自然对数，不默认常用对数 | [18](#chapter/18/guide) |
| $\exp x,e^x$ | 自然对数的反函数；$e=\exp1$ | [18](#chapter/18/guide) |
| $a^x,\log_a x$ | 正底数的实数幂和对数；对数底数另需 $a\ne1$ | [18](#chapter/18/guide) |
| $\sinh,\cosh,\tanh$ | 双曲函数，由 $e^x,e^{-x}$ 组合定义 | [18](#chapter/18/guide) |
| $\operatorname{arg\,sinh},\operatorname{arg\,cosh},\operatorname{arg\,tanh}$ | 原书对反双曲函数的写法；不是复数辐角函数 | [18](#chapter/18/guide) |
| $\operatorname{Nap\,log}$ | 历史上的 Napier 对数，需与现代自然对数定义区分 | [18](#chapter/18/guide) |
| $P_{n,a},P_{n,a,f}$ | $f$ 在 $a$ 处的 $n$ 次 Taylor 多项式 | [20](#chapter/20/guide) |
| $R_{n,a}$ | 余项 $f-P_{n,a}$；必须依据具体定理估计 | [20](#chapter/20/guide) |
| $[P]_n$ | 多项式截去高于 $n$ 次的项；不是向下取整 | [20](#chapter/20/guide) |
| $o((x-a)^n)$ | 除以 $(x-a)^n$ 后趋零的余项；课程用它简写有限阶接触 | [20](#chapter/20/guide) |

## 6. 序列、级数与复数

| 符号／术语 | 含义与提醒 | 章节 |
|---|---|---|
| $\{a_n\},\lim_{n\to\infty}a_n$ | 序列与其极限；是有序的函数值列表，不只是集合 | [22](#chapter/22/guide) |
| $\limsup a_n,\liminf a_n$ | 尾集合上确界、下确界的极限 | [22](#chapter/22/guide) |
| $\gamma$ | Euler 常数，调和部分和减去 $\log n$ 的极限；不是 Gamma 函数 | [22](#chapter/22/guide) |
| $N(n;a,b)$ | 原书均匀分布习题中，前 $n$ 项落入指定区间的计数 | [22](#chapter/22/guide) |
| $\sum_{n=1}^{\infty}a_n$ | 部分和序列的极限，不是任意形式的“无穷相加” | [23](#chapter/23/guide) |
| 绝对／条件收敛 | 绝对值级数收敛／原级数收敛而绝对值级数发散 | [23](#chapter/23/guide) |
| Cauchy 乘积 | $c_n=\sum_{k=0}^na_kb_{n-k}$ 构成的级数；与逐项相乘不同 | [23](#chapter/23/guide) |
| 一致收敛 | 尾部索引对整个定义域统一有效；比逐点收敛强 | [24](#chapter/24/guide) |
| $\sum a_n(x-a)^n$ | 以 $a$ 为中心的幂级数，需讨论收敛半径与端点 | [24](#chapter/24/guide) |
| $i,\overline z,|z|,\operatorname{Re}z,\operatorname{Im}z$ | 虚数单位、共轭、模、实部、虚部 | [25](#chapter/25/guide) |
| $\arg z,\theta$ | 复数辐角，通常相差 $2k\pi$ 都可；选单值分支须说明区间 | [25](#chapter/25/guide)、[26](#chapter/26/guide) |
| $\lim_{z\to a}f(z),f'(a)$ | 复极限、复导数，必须对所有平面方向成立 | [26](#chapter/26/guide) |
| 复 $\exp,\sin,\cos$ | 用处处收敛的复幂级数延伸；实变量时与原定义一致 | [27](#chapter/27/guide) |

## 7. Euler–Maclaurin 与实数基础中的记号

| 符号／术语 | 含义与提醒 | 章节 |
|---|---|---|
| $b_n,B_n$ | 原书 Bernoulli 数及相关多项式的记号；不同书对下标与首项符号可能有不同约定 | [27](#chapter/27/guide) |
| $D,D^k$ | 求导算子及其迭代 | [27](#chapter/27/guide) |
| $e^D,\Delta$ | 与平移、差分关联的形式算子记号；使用时要说明对象与展开合法性 | [27](#chapter/27/guide) |
| $\varphi_n,\psi_n$ | $\varphi_n$ 是 Bernoulli 型多项式；$\psi_n$ 是其在 $[0,1)$ 上取值的周期延拓，用于求和公式的余项 | [27](#chapter/27/practice/ex-18) |
| 域 | 满足加法、乘法及非零逆元规则的数系，不自动带有顺序 | [28](#chapter/28/guide) |
| 特征 | 最小满足 $n\cdot1=0$ 的正整数；不存在时特征为零 | [28](#chapter/28/guide) |
| 完备有序域 | 有兼容顺序，且每个非空有上界集合都有上确界的域 | [28](#chapter/28/guide) |
| Dedekind 切割 | 有理数的非空真子集，向下封闭且无最大元 | [29](#chapter/29/guide) |
| 等价 Cauchy 序列 | 两序列之差趋零；构造实数时识别为同一个对象 | [29](#chapter/29/guide) |
| 同构 | 双射且保持相应运算；集合之间的一一对应本身不够 | [30](#chapter/30/guide) |

## 8. 用定义消除四类常见歧义

**最大值与最大点。** 一个是函数输出，一个是取得该输出的输入；最大点可能不唯一。

**正、非负、严格递增、非减。** 这些词是否允许等号，决定反例是否成立。原书凸性章节也区分严格与非严格条件，阅读时应以明确不等式为准。

**实可微与复可微。** 复平面可看成两个实坐标，但一个复导数要求全部方向共享同一个复线性近似，条件强得多。

**收敛与可求和。** 本书通常把级数可求和用于通常的部分和极限；Cesàro、Abel 可求和是另有定义的推广，必须写明采用哪一种。

[回到课程地图](#map) · [开始复习卡片](#review)
