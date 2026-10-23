window.PARTS=['序曲','基础','导数与积分','无穷序列与无穷级数','尾声'];
window.COURSE=[
[1,'数的基本性质','Basic Properties of Numbers',0,22,39],
[2,'各种各样的数','Numbers of Various Sorts',0,40,55],
[3,'函数','Functions',1,58,74],[4,'图像','Graphs',1,75,108],
[5,'极限','Limits',1,109,133],[6,'连续函数','Continuous Functions',1,134,140],
[7,'三个困难的定理','Three Hard Theorems',1,141,151],[8,'最小上界','Least Upper Bounds',1,152,165],
[9,'导数','Derivatives',2,168,186],[10,'求导','Differentiation',2,187,206],
[11,'导数的意义','Significance of the Derivative',2,207,248],[12,'反函数','Inverse Functions',2,249,271],
[13,'积分','Integrals',2,272,303],[14,'微积分基本定理','The Fundamental Theorem of Calculus',2,304,321],
[15,'三角函数','The Trigonometric Functions',2,322,342],[16,'π 是无理数','π Is Irrational',2,343,348],
[17,'行星运动','Planetary Motion',2,349,357],[18,'对数与指数函数','The Logarithm and Exponential Functions',2,358,381],
[19,'初等函数的积分','Integration in Elementary Terms',2,382,427],[20,'多项式逼近','Approximation by Polynomial Functions',3,430,460],
[21,'e 是超越数','e Is Transcendental',3,461,470],[22,'无穷序列','Infinite Sequences',3,471,489],
[23,'无穷级数','Infinite Series',3,490,517],[24,'一致收敛与幂级数','Uniform Convergence and Power Series',3,518,544],
[25,'复数','Complex Numbers',3,545,559],[26,'复函数','Complex Functions',3,560,573],
[27,'复幂级数','Complex Power Series',3,574,597],[28,'域','Fields',4,600,606],
[29,'实数的构造','Construction of the Real Numbers',4,607,619],[30,'实数的唯一性','Uniqueness of the Real Numbers',4,620,627]
].map(([id,title,en,part,start,end])=>({id,title,en,part,start,end,star:[16,17,21].includes(id)}));
window.APPENDICES=[
{chapter:3,title:'有序对',en:'Ordered Pairs',start:73,end:74,body:'“先后顺序”必须编码到集合中。用 (a,b)={{a},{a,b}} 定义有序对后，要证明 (a,b)=(c,d) 当且仅当 a=c 且 b=d。笛卡尔积 A×B 是所有这样的对；函数的图可以定义成其中具有唯一输出的子集。这样，函数不再依赖箭头的直觉。',question:'为什么直接用 {a,b} 不能定义有序对？',answer:'因为 {a,b}={b,a}，会丢失顺序。'},
{chapter:4,title:'向量',en:'Vectors',start:94,end:98,body:'把有方向的位移写成坐标对，定义加法与数乘。长度来自勾股定理，内积把坐标运算和夹角联系起来。证明三角不等式时，关键是 Cauchy–Schwarz 不等式；不要把向量的加法误当作长度的加法。',question:'什么时候 |u+v|=|u|+|v|？',answer:'一个向量为零，或者两个非零向量方向相同。'},
{chapter:4,title:'圆锥曲线',en:'The Conic Sections',start:99,end:102,body:'椭圆、双曲线与抛物线可由距离条件定义。将几何定义转成坐标方程时，每次平方都要记录符号条件，最后核对得到的点仍满足原来的距离关系。平移坐标可以把一般方程化到以中心或顶点为参照的标准形式。',question:'椭圆的两个焦点重合会得到什么？',answer:'到同一点的距离为常数，得到圆。'},
{chapter:4,title:'极坐标',en:'Polar Coordinates',start:103,end:108,body:'x=r cos θ，y=r sin θ。一个点可以有多组极坐标，因此参数图像要同时考虑周期、负半径和原点的非唯一表示。画 r=f(θ) 时先跟踪角度和距离，再把点连接起来；不要把极坐标方程直接当作直角坐标函数。',question:'(r,θ) 与 (−r,θ+π) 是否表示同一点？',answer:'是。代入 x、y 的转换公式即可验证。'},
{chapter:8,title:'一致连续',en:'Uniform Continuity',start:163,end:165,body:'普通连续允许 δ 依赖点 a；一致连续要求同一个 δ 对整个定义域内的点对都有效。闭区间上的连续函数一致连续，是完备性带来的全局结论。x² 在实线上连续却不一致连续：远处相距很近的输入也可能产生很大的输出差。',question:'1/x 在 (0,1) 上一致连续吗？',answer:'不一致连续。例如 xₙ=1/n，yₙ=1/(n+1)，输入差趋零而函数值差恒为 1。'},
{chapter:11,title:'凸性与凹性',en:'Convexity and Concavity',start:238,end:248,body:'凸性的几何定义是图像位于任意两点连线的下方。对于可微函数，导数单调递增与凸性相关；对于二阶可微函数，f″≥0 是一个方便的判别。区分严格凸与处处 f″>0：严格凸函数可能在孤立点二阶导数为零。',question:'x⁴ 在 0 处二阶导数为零，是否妨碍其严格凸性？',answer:'不妨碍。x⁴ 的一阶导数 4x³ 严格递增。'},
{chapter:12,title:'曲线的参数表示',en:'Parametric Representation of Curves',start:263,end:271,body:'曲线可以由一对函数 x(t)、y(t) 描述。dy/dx=y′(t)/x′(t) 只在 x′(t)≠0 时可直接使用。切向量给出运动方向；改变参数速度可以保留同一条几何轨迹。遇到零速度点时应回到差商或重新参数化。',question:'同一个圆的顺时针与逆时针参数式有什么不同？',answer:'几何点集相同，但参数增长时的方向相反；例如 (cos t,sin t) 与 (cos t,−sin t)。'},
{chapter:13,title:'黎曼和',en:'Riemann Sums',start:301,end:303,body:'在每个子区间任选采样点，将函数值乘以区间宽度后求和。可积函数的黎曼和在网格趋零时收敛到相同积分，与采样点选择无关。上、下和提供夹逼，说明任意采样的近似为什么都有效。',question:'等分并取中点是黎曼积分定义中唯一允许的方法吗？',answer:'不是。网格趋零的任意分割、任意采样点都必须趋于同一积分值。'},
{chapter:19,title:'积分的多种几何用途',en:'The Cosmopolitan Integral',start:421,end:427,body:'弧长、体积与旋转曲面面积都可以从“小段近似再求和”的原则推导。弧长的微元是 √(1+f′²)dx；绕 x 轴旋转的曲面面积含有 2π|f| 与弧长微元。公式不是记号游戏，首先说明每一小块近似为什么正确及取极限需要什么光滑性。',question:'旋转曲面面积为什么不能只积 2πf(x)dx？',answer:'因为斜的小段长度不是 dx，而是 √(1+f′(x)²)dx。'}
];
