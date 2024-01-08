[基础类型](../groups/基础类型.基础类型.md) / Vector2

# Vector2 <Badge type="tip" text="Class" /> <Score text="Vector2" />

二维向量

------------------

线性代数非常适用于游戏开发，这里会有一些简短而实用的介绍。如果已经很熟悉可以直接跳过。

这不是一个关于线性代数的正式教科书。我们会只看它如何应用于游戏开发。如果想更广泛地了解数学，请参阅 https://www.khanacademy.org/math/linear-algebra

:cactus: 坐标系 （2D）

在二维空间中，坐标是使用水平轴（x） 和 垂直轴（y）。2D 空间中的特定位置被写成一对值，例如 (9, 5)

![向量](https://cdn.233xyx.com/online/2M66j1byeXgB1702205275997.png)

注意：如果您不熟悉计算机图形学，那么 y正轴指向下方而不是上方。因为您可能是在数学课上学到的是指向上方。然而，这在大多数计算机图形学应用时 y 正轴指向下方。

这样，二维平面上的任意位置都可以用一对数字来标识。 然而，我们也可以将位置 (9, 5) 视为距 (0, 0) 点或原点的偏移量。 绘制一个从原点指向该点的箭头：

![向量](https://cdn.233xyx.com/online/4GeEUZRD9Pqn1702205289749.png)

这是一个向量。 向量代表了很多有用的信息。 除了告诉我们该点位于 (9, 5) 之外，我们还可以将其视为角度 θ (theta) 和长度（或大小）m。 在这种情况下，箭头是一个位置向量 - 它表示空间中相对于原点的位置。

关于向量需要考虑的一个非常重要的一点是它们仅表示相对方向和大小。没有向量位置的概念。以下两个向量是相同的：

![向量](https://cdn.233xyx.com/online/sFlOQ30Ssysd1702205305115.png)

两个向量都表示某个起点右侧 9 个单位和下方 5 个单位的点。 无论您在平面上的哪个位置绘制矢量，它始终表示相对方向和大小。

:cactus: 向量运算

您可以使用任一方法（x 和 y 坐标或角度和大小）来引用向量，但为了方便起见，程序员通常使用坐标表示法。 例如，

<span style="font-size: 14px;">
使用示例: 创建一个名为 NewExample 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，按键“F”，按钮会移动到（900,500）的位置。
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
         if (!SystemUtil.isClient()) return;
         this.test();
     }

     private async test(): `Promise`<`void`\> {
         let btn = new ButtonUI();

         InputUtil.onKeyDown(Keys.F, async () => {
             let result = new Vector2(900,500)
             if (result) {
                 btn.button.position = result;
             }
         })
     }

 }

 class ButtonUI {
     public button: StaleButton;

     constructor(fun: Function = null) {
         this.creatUI(fun);
     }

     private creatUI(fun: Function = null) {
         // 创建一个UI对象
         let ui = UserWidget.newObject();
         // 将UI添加到屏幕上
         ui.addToViewport(1);
         // 创建一个画布组件
         let rootCanvas = Canvas.newObject();
         rootCanvas.size = new Vector2(1920, 1080);
         rootCanvas.position = Vector2.zero;
         // 将Ui的根画布设置为rootCanvas
         ui.rootContent = rootCanvas;
         // 在（0,0）点创建一个按钮
         this.button = StaleButton.newObject(rootCanvas);
         this.button.position = new Vector2(0, 0);
         this.button.size = new Vector2(100, 100);
         this.button.setNormalImageColorDecimal(0,255,0,255)
         this.button.text = "btn";
         this.button.transitionEnable = true;
         this.button.pressedImagColor = LinearColor.red;
         this.button.visibility = SlateVisibility.Visible;

         this.button.onClicked.add(() => {
             if (fun) {
                 fun();
             }
         })
     }
 }
```

1. 向量成员

向量的各个组成部分可以通过名称直接访问。

<span style="font-size: 14px;">
使用示例: 访问向量
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(9, 5);
        console.log("x:" +a.x+ "  y:"+a.y);
     }
}
```

2. 添加向量

当两个向量相加或相减时，相应的分量相加或相减：

<span style="font-size: 14px;">
使用示例: 两向量相加
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8,2);
        let b = new Vector2(3,3);
        let result = Vector2.add(a,b);
        console.log(result);
     }
}
```

注意，添加 a + b 会得到与 b + a 相同的结果。

3. 标量乘法

向量表示方向和大小。 仅代表大小的值称为标量。 标量在编辑器中使用 float 类型。

向量可以乘以标量：

<span style="font-size: 14px;">
使用示例: a * b
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8,2);
        let result = Vector2.multiply(a,3);
        // X=24, Y=6
        console.log(result);
     }
}
```

将向量乘以正标量不会改变其方向，只会改变其大小。 与负标量相乘会产生相反方向的向量。 这就是缩放向量的方法。

4. 单位向量

大小为 1 的向量称为单位向量。 它们有时也称为方向向量或法线。 当您需要跟踪方向时，单位向量很有用。

5. 归一化

向量归一化意味着将其长度减小到 1，同时保留其方向。 这是通过将其每个分量除以其大小来完成的。 这是一个常见的操作，为此提供了一个专用的 normalized() 方法：

<span style="font-size: 14px;">
使用示例: 对 a 向量实现归一化。
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8,2);
        let result = Vector2.normalize(a);
        console.log(result);
     }
}
```

由于归一化涉及除以向量的长度，因此无法对长度为 0 的向量进行归一化。尝试这样做通常会导致错误。

6. 反射

单位向量的常见用途是表示法线。 法向量是垂直于表面排列的单位向量，定义其方向。 它们通常用于照明、碰撞和其他涉及表面的操作。

<span style="font-size: 14px;">
使用示例: 求反射向量。
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8,2);
        let b = new Vector2(1,0);
        let result = Vector2.reflect(a,b);
        console.log(result);
     }
}
```

7. 点积

点积是向量数学中最重要的概念之一，但经常被误解。 点积是对两个向量进行的运算，返回一个标量。 与同时包含大小和方向的矢量不同，标量值仅具有大小。

点积的公式有两种常见形式：

![向量](https://cdn.233xyx.com/online/AYfSoe4KVjln1702282916803.png)

数学符号 ||A|| 表示向量A的大小，Ax表示向量A的x分量。

在大多数情况下，使用内置的 dot 方法是最简单的。 请注意，两个向量的顺序并不重要：

<span style="font-size: 14px;">
使用示例: 求点积。
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8,2);
        let b = new Vector2(1,0);
        let result = Vector2.dot(a,b);
        console.log(result);
     }
}
```

点积在与单位向量一起使用时最有用，使第一个公式简化为 cos(θ)。 这意味着我们可以使用点积来告诉我们有关两个向量之间的角度的信息：

![向量](https://cdn.233xyx.com/online/C6pivp2QKPEY1702282932425.png)

使用单位向量时，结果将始终介于 -1 (180°) 和 1 (0°) 之间。

8. 叉积

与点积一样，叉积是对两个向量的运算。 然而，叉积的结果是一个方向垂直于两者的向量。 其大小取决于它们的相对角度。 如果两个向量平行，则它们的叉积的结果将是零向量。

![向量](https://cdn.233xyx.com/online/REfjRp03JU4A1702282944437.png)

叉积计算如下：

<span style="font-size: 14px;">
使用示例: 求叉积。
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8,2);
        let b = new Vector2(1,0);
        let result1 = Vector2.cross(a,b);
        let result2 = Vector2.cross(b,a);
        console.log(result1);
        console.log(result2);
     }
}
```

顺序很重要。 cross(a,b) 不会给出与 cross(b,a) 相同的结果。 所得向量指向相反的方向。

## Table of contents

### Properties <Score text="Properties" /> 
| **[x](mw.Vector2.md#x)**: `number`  |
| :-----|
| 向量的 x 分量|
| **[y](mw.Vector2.md#y)**: `number`  |
| 向量的 y 分量|

### Accessors <Score text="Accessors" /> 
| **[length](mw.Vector2.md#length)**(): `number`  |
| :-----|
| 计算向量的长度|
| **[magnitude](mw.Vector2.md#magnitude)**(`a`: [`Vector2`](mw.Vector2.md)): `number`   |
| 向量长度|
| **[negative](mw.Vector2.md#negative)**(): [`Vector2`](mw.Vector2.md)  |
| 返回各个分量取反的新 Vector2 对象|
| **[normalized](mw.Vector2.md#normalized)**(): [`Vector2`](mw.Vector2.md)  |
| 返回一个新的 Vector2 对象|
| **[sqrLength](mw.Vector2.md#sqrlength)**(): `number`  |
| 向量长度的平方|
| **[sqrMagnitude](mw.Vector2.md#sqrmagnitude)**(`a`: [`Vector2`](mw.Vector2.md)): `number`   |
| 向量长度平方|
| **[negOne](mw.Vector2.md#negone)**(): [`Vector2`](mw.Vector2.md)  |
| (-1, -1)|
| **[one](mw.Vector2.md#one)**(): [`Vector2`](mw.Vector2.md)  |
| (1, 1)|
| **[unitX](mw.Vector2.md#unitx)**(): [`Vector2`](mw.Vector2.md)  |
| (1, 0)|
| **[unitY](mw.Vector2.md#unity)**(): [`Vector2`](mw.Vector2.md)  |
| (0, 1)|
| **[zero](mw.Vector2.md#zero)**(): [`Vector2`](mw.Vector2.md)  |
| (0, 0)|

### Methods <Score text="Methods" /> 
| 向量相加  |
| :-----|
| outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）|
| **[clone](mw.Vector2.md#clone)**(`a`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 克隆向量 a 得到新的 Vector2 向量|
| **[divide](mw.Vector2.md#divide)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量 a 的每个分量除以标量 b|
| **[equals](mw.Vector2.md#equals)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `epsilon?`: `number`): `boolean`   |
| 判断两向量排除浮点数误差是否近似等价|
| **[fromString](mw.Vector2.md#fromstring)**(`str`: `string`, `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 通过一个字符串创建 Vector2 对象|
| **[multiply](mw.Vector2.md#multiply)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量 a 的每个分量乘以标量 b|
| **[normalize](mw.Vector2.md#normalize)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量归一化|
| **[set](mw.Vector2.md#set)**(`a`: [`Vector2`](mw.Vector2.md), `x`: `number`, `y`: `number`): [`Vector2`](mw.Vector2.md)   |
| 设置向量 a 的值|
| **[strictEquals](mw.Vector2.md#strictequals)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `boolean`   |
| 判断两向量是否相等|
| **[subtract](mw.Vector2.md#subtract)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量 a 减去向量 b|
| **[toString](mw.Vector2.md#tostring)**(): `string`  |
| 向量相加  |
| outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）|
| **[angle](mw.Vector2.md#angle)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `number`   |
| 两向量夹角角度|
| **[ceil](mw.Vector2.md#ceil)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量 a 每个元素向上取整|
| **[clamp](mw.Vector2.md#clamp)**(`v`: [`Vector2`](mw.Vector2.md), `min`: [`Vector2`](mw.Vector2.md), `max`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 设置当前向量的值, 使其各个分量都处于指定的范围内|
| **[clone](mw.Vector2.md#clone-1)**(`a`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 克隆向量 a 得到新的 Vector2 向量|
| **[copy](mw.Vector2.md#copy)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 获得指定向量的拷贝|
| **[cross](mw.Vector2.md#cross)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `number`   |
| 叉积|
| **[distance](mw.Vector2.md#distance)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `number`   |
| 两向量的欧氏距离|
| **[divide](mw.Vector2.md#divide-1)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量 a 的每个分量除以标量 b|
| **[dot](mw.Vector2.md#dot)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `number`   |
| 点积|
| **[equals](mw.Vector2.md#equals-1)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `epsilon?`: `number`): `boolean`   |
| 判断两向量排除浮点数误差是否近似等价|
| **[floor](mw.Vector2.md#floor)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量 a 每个元素向下取整|
| **[fromString](mw.Vector2.md#fromstring-1)**(`str`: `string`, `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 通过一个字符串创建 Vector2 对象|
| **[invert](mw.Vector2.md#invert)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 每个元素向量取倒数|
| **[invertSafe](mw.Vector2.md#invertsafe)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md), `epsilon?`: `number`): [`Vector2`](mw.Vector2.md)   |
| 每个元素向量取倒数|
| **[lerp](mw.Vector2.md#lerp)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `t`: `number`, `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量 a 每个元素线性插值： a + t  * (b - a)|
| **[magnitude](mw.Vector2.md#magnitude-1)**(`a`: [`Vector2`](mw.Vector2.md)): `number`   |
| 向量长度|
| **[max](mw.Vector2.md#max)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 取两个向量对应x、y元素最小值最大值|
| **[min](mw.Vector2.md#min)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 取两个向量对应x、y元素最小值|
| **[moveTowards](mw.Vector2.md#movetowards)**(`current`: [`Vector2`](mw.Vector2.md), `target`: [`Vector2`](mw.Vector2.md), `maxDistanceDelta`: `number`, `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向目标移动|
| **[multiply](mw.Vector2.md#multiply-1)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量 a 的每个分量乘以标量 b|
| **[negate](mw.Vector2.md#negate)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 每个元素向量取负|
| **[normalize](mw.Vector2.md#normalize-1)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量归一化|
| **[project](mw.Vector2.md#project)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量 a 在向量 b 上的投影|
| **[random](mw.Vector2.md#random)**(`range?`: `number`): [`Vector2`](mw.Vector2.md)   |
| 生成一个在单位圆上均匀分布的随机 Vector2 对象|
| **[reflect](mw.Vector2.md#reflect)**(`inDirection`: [`Vector2`](mw.Vector2.md), `inNormal`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 反射|
| **[rotate](mw.Vector2.md#rotate)**(`v`: [`Vector2`](mw.Vector2.md), `radians`: `number`, `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量 a 旋转某度后的向量|
| **[round](mw.Vector2.md#round)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 每个元素四舍五入取整|
| **[set](mw.Vector2.md#set-1)**(`a`: [`Vector2`](mw.Vector2.md), `x`: `number`, `y`: `number`): [`Vector2`](mw.Vector2.md)   |
| 设置向量 a 的值|
| **[signAngle](mw.Vector2.md#signangle)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `number`   |
| 向量 a 和向量 b 之间的有符号角度|
| **[sqrMagnitude](mw.Vector2.md#sqrmagnitude-1)**(`a`: [`Vector2`](mw.Vector2.md)): `number`   |
| 向量长度平方|
| **[squaredDistance](mw.Vector2.md#squareddistance)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `number`   |
| 两向量的欧氏距离平方|
| **[strictEquals](mw.Vector2.md#strictequals-1)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `boolean`   |
| 判断两向量是否相等|
| **[subtract](mw.Vector2.md#subtract-1)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量 a 减去向量 b|

用给定的 x, y 分量构建一个新的 Vector2

#### Parameters

| `x?` `number` | x分量  <br> default: 0<br> range: 不做限制<br> type: 浮点数 |
| :------ | :------ |
| `y?` `number` | y分量  <br> default: 0<br> range: 不做限制<br> type: 浮点数 |

• **new Vector2**(`f`)

用给定的 f 值设定给 x, y

#### Parameters

| `f` `number` | 给定的 f 值<br> range: 不做限制<br> type: 浮点数 |
| :------ | :------ |

## Properties

### x <Score text="x" /> 

• **x**: `number`

向量的 x 分量

___

### y <Score text="y" /> 

• **y**: `number`

向量的 y 分量

## Accessors

### length <Score text="length" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **length**(): `number`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


计算向量的长度

#### Returns

| `number` | 向量的长度 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### magnitude <Score text="magnitude" /> 

• `get` **magnitude**(): `number`

计算向量的长度

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |

#### Returns

| `number` | 向量长度 |
| :------ | :------ |


### negative <Score text="negative" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **negative**(): [`Vector2`](mw.Vector2.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回各个分量取反的新 Vector2 对象

#### Returns

| [`Vector2`](mw.Vector2.md) | 各个分量取反的新 Vector2 对象 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### normalized <Score text="normalized" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalized**(): [`Vector2`](mw.Vector2.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回一个新的 Vector2 对象

其大小为1, 但仍指向相同的方向 如果向量太小而无法归一化, 则返回 (0, 0)

#### Returns

| [`Vector2`](mw.Vector2.md) | 返回一个新的 Vector2 对象 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### sqrLength <Score text="sqrLength" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **sqrLength**(): `number`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


向量长度的平方

#### Returns

| `number` | 向量长度的平方 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### sqrMagnitude <Score text="sqrMagnitude" /> 

• `get` **sqrMagnitude**(): `number`

计算向量的长度平方

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |

#### Returns

| `number` | 向量长度平方 |
| :------ | :------ |


### negOne <Score text="negOne" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **negOne**(): [`Vector2`](mw.Vector2.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


(-1, -1)

#### Returns

| [`Vector2`](mw.Vector2.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### one <Score text="one" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **one**(): [`Vector2`](mw.Vector2.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


(1, 1)

#### Returns

| [`Vector2`](mw.Vector2.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### unitX <Score text="unitX" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **unitX**(): [`Vector2`](mw.Vector2.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


(1, 0)

#### Returns

| [`Vector2`](mw.Vector2.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### unitY <Score text="unitY" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **unitY**(): [`Vector2`](mw.Vector2.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


(0, 1)

#### Returns

| [`Vector2`](mw.Vector2.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### zero <Score text="zero" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **zero**(): [`Vector2`](mw.Vector2.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


(0, 0)

#### Returns

</td>
</tr></tbody>
</table>

| [`Vector2`](mw.Vector2.md) |  |
| :------ | :------ |

## Methods

### add <Score text="add" /> 

• **add**(`v`): [`Vector2`](mw.Vector2.md) 

加一个向量

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相加的结果 Vector2 对象 |
| :------ | :------ |

#### Parameters

| `v` [`Vector2`](mw.Vector2.md) | 相加的向量对象 |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | 修改后的自身对象 |
| :------ | :------ |

___

### clone <Score text="clone" /> 

• **clone**(): [`Vector2`](mw.Vector2.md) 



#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | 克隆得到的新 Vector2 向量 |
| :------ | :------ |
### divide <Score text="divide" /> 
| `v` `number` | 相除的向量对象<br> range: 不做限制<br> type:浮点值 |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | 修改后的自身对象 |
| :------ | :------ |

• **divide**(`v`): [`Vector2`](mw.Vector2.md) 

除以一个向量

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` `number` | 向量 b  <br> range: 不限制<br> type:浮点数 |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相除的结果 Vector2 对象 |
| :------ | :------ |

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量 a 除以向量 b

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

<span style="font-size: 14px;">
使用示例: a / b
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8,2);
        let b = new Vector2(3,4);
        let result = Vector2.multiply(a,4);
        // X=4, Y=0.5
        console.log(result);
     }
}
```

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b  <br> range: 不限制<br> type:浮点数 |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相除的结果 Vector2 对象 |
| :------ | :------ |

#### Parameters

| `v` [`Vector2`](mw.Vector2.md) | 每个分量除以的参数 |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | 修改后的自身对象 |
| :------ | :------ |

乘以一个向量

#### Parameters

| `v` [`Vector2`](mw.Vector2.md) | 相乘的向量对象 |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | 修改后的自身对象 |
| :------ | :------ |

• **multiply**(`v`): [`Vector2`](mw.Vector2.md) 

乘以一个标量

#### Parameters

| `v` `number` | 每个分量乘以的参数<br> range:不做限制<br> type:浮点数 |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | 修改后的自身对象 |
| :------ | :------ |

___

### normalize <Score text="normalize" /> 

• **normalize**(): [`Vector2`](mw.Vector2.md) 

将当前向量归一化

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 归一化后得到的 Vector2 对象 |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | 归一化后的自身对象 |
| :------ | :------ |

设置当前向量，使其与指定向量相等

#### Parameters

| `other` [`Vector2`](mw.Vector2.md) | 指定的向量 |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | `this` |
| :------ | :------ |

• **set**(`x?`, `y?`): [`Vector2`](mw.Vector2.md) 

设置当前向量的具体分量值

#### Parameters

| `x?` `number` | x 分量  <br> default: 0.0<br> range: 不做限制<br> type: 浮点数 |
| :------ | :------ |
| `y?` `number` | y 分量  <br> default: 0.0<br> range: 不做限制<br> type: 浮点数 |

#### Returns

| [`Vector2`](mw.Vector2.md) | this |
| :------ | :------ |

___

### strictEquals <Score text="strictEquals" /> 

• **strictEquals**(`other`): `boolean` 

判断当前向量是否与指定向量相等

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |

#### Returns

| `boolean` | 是否相等 |
| :------ | :------ |




___

### subtract <Score text="subtract" /> 

• **subtract**(`v`): [`Vector2`](mw.Vector2.md) 

减去一个向量

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相减的结果 Vector2 对象 |
| :------ | :------ |

#### Parameters

| `v` [`Vector2`](mw.Vector2.md) | 相减的向量对象 |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | 修改后的自身对象 |
| :------ | :------ |

___

### toString <Score text="toString" /> 

• **toString**(): `string` 



#### Returns

| `string` | 向量值字符串 |
| :------ | :------ |
### add <Score text="add" /> 

两个向量相加

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

<span style="font-size: 14px;">
使用示例: a + b
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8,2);
        let b = new Vector2(3,3);
        let result = Vector2.add(a,b);
        // X=11, Y=5
        console.log(result);
     }
}
```

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相加的结果 Vector2 对象 |
| :------ | :------ |

___

### angle <Score text="angle" /> 

• `Static` **angle**(`a`, `b`): `number` 

两向量夹角角度

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |

#### Returns

| `number` | 向量a与向量b的夹角角度 |
| :------ | :------ |

___

### ceil <Score text="ceil" /> 

• `Static` **ceil**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量 a 每个元素向上取整

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素向上取整后的 Vector2 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

<span style="font-size: 14px;">
使用示例: 向上取整示例
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8.22, 2.69);
        let result = Vector2.ceil(a);
        // X=9, Y=3
        console.log(result);
     }
}
```

___

### clamp <Score text="clamp" /> 

• `Static` **clamp**(`v`, `min`, `max`): [`Vector2`](mw.Vector2.md) 

设置当前向量的值, 使其各个分量都处于指定的范围内

#### Parameters

| `v` [`Vector2`](mw.Vector2.md) | 向量 v |
| :------ | :------ |
| `min` [`Vector2`](mw.Vector2.md) | 最小值 |
| `max` [`Vector2`](mw.Vector2.md) | 最大值 |

#### Returns

| [`Vector2`](mw.Vector2.md) | 修改后的向量v |
| :------ | :------ |

___

### clone <Score text="clone" /> 

• `Static` **clone**(`a`): [`Vector2`](mw.Vector2.md) 

克隆向量 a 得到新的 Vector2 向量

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | 克隆得到的新 Vector2 向量 |
| :------ | :------ |

___

### copy <Score text="copy" /> 

• `Static` **copy**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

获得指定向量的拷贝

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 拷贝得到的 Vector2 向量 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### cross <Score text="cross" /> 

• `Static` **cross**(`a`, `b`): `number` 

叉积

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |

#### Returns

| `number` | 叉积 |
| :------ | :------ |

::: warning Precautions

注意二维向量的叉积为与 Z 轴平行的三维向量, 此处以向量的模长表示

:::

___

### distance <Score text="distance" /> 

• `Static` **distance**(`a`, `b`): `number` 

两向量的欧氏距离

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |

#### Returns

| `number` | 两向量的欧氏距离 |
| :------ | :------ |

![向量](https://cdn.233xyx.com/online/4oQ9HXb788xI1702205317274.png)

___

### divide <Score text="divide" /> 

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量 a 的每个分量除以标量 b

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

<span style="font-size: 14px;">
使用示例: a / b
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8,2);
        let result = Vector2.multiply(a,4);
        // X=2, Y=0.5
        console.log(result);
     }
}
```

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` `number` | 向量 b  <br> range: 不限制<br> type:浮点数 |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相除的结果 Vector2 对象 |
| :------ | :------ |

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量 a 除以向量 b

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

<span style="font-size: 14px;">
使用示例: a / b
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8,2);
        let b = new Vector2(3,4);
        let result = Vector2.multiply(a,4);
        // X=4, Y=0.5
        console.log(result);
     }
}
```

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b  <br> range: 不限制<br> type:浮点数 |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相除的结果 Vector2 对象 |
| :------ | :------ |

___

### dot <Score text="dot" /> 

• `Static` **dot**(`a`, `b`): `number` 

点积

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |

#### Returns

| `number` | 点积 |
| :------ | :------ |

___

### equals <Score text="equals" /> 

• `Static` **equals**(`a`, `b`, `epsilon?`): `boolean` 

判断两向量排除浮点数误差是否近似等价

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |
| `epsilon?` `number` | 最小误差数  <br> default: MathUtil.EPSILON  <br> range: 建议传入小于 1 的值。<br> type:浮点数 |

#### Returns

| `boolean` | 是否相等 |
| :------ | :------ |

___

### floor <Score text="floor" /> 

• `Static` **floor**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量 a 每个元素向下取整

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素向下取整后的 Vector2 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### fromString <Score text="fromString" /> 

• `Static` **fromString**(`str`, `outer?`): [`Vector2`](mw.Vector2.md) 

通过一个字符串创建 Vector2 对象

#### Parameters

| `str` `string` | 传入的字符串<br> range:"0.000000,0.000000" |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 创建的 Vector2 对象 |
| :------ | :------ |

字符串格式举例："X=2,Y=3"

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

<span style="font-size: 14px;">
使用示例: 使用字符串创建一个向量
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let result = Vector2.fromString("X=2,Y=3");
        // X=2, Y=3
        console.log(result);
     }
}
```

___

### invert <Score text="invert" /> 

• `Static` **invert**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

每个元素向量取倒数

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素取倒数得到的 Vector2 对象 |
| :------ | :------ |

接近 0 时返回 Infinity。

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### invertSafe <Score text="invertSafe" /> 

• `Static` **invertSafe**(`a`, `outer?`, `epsilon?`): [`Vector2`](mw.Vector2.md) 

每个元素向量取倒数

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |
| `epsilon?` `number` | 最小误差数  <br> default: MathUtil.EPSILON  <br> range: 建议传入小于 1 的值。<br> type:浮点数 |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素取倒数得到的 Vector2 对象 |
| :------ | :------ |

接近 0 时返回 0

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### lerp <Score text="lerp" /> 

• `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量 a 每个元素线性插值： a + t  * (b - a)

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |
| `t` `number` | 插值  <br> range: [0, 1]<br> type:浮点数 |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 线性插值得到的 Vector2 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### magnitude <Score text="magnitude" /> 

• `Static` **magnitude**(`a`): `number` 

向量长度

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |

#### Returns

| `number` | 向量长度 |
| :------ | :------ |

___

### max <Score text="max" /> 

• `Static` **max**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

取两个向量对应x、y元素最小值最大值

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素取最大值后的 Vector2 对象 |
| :------ | :------ |

___

### min <Score text="min" /> 

• `Static` **min**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

取两个向量对应x、y元素最小值

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素取最小值后的 Vector2 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### moveTowards <Score text="moveTowards" /> 

• `Static` **moveTowards**(`current`, `target`, `maxDistanceDelta`, `outer?`): [`Vector2`](mw.Vector2.md) 

向目标移动

#### Parameters

| `current` [`Vector2`](mw.Vector2.md) | 当前向量 |
| :------ | :------ |
| `target` [`Vector2`](mw.Vector2.md) | 目标向量 |
| `maxDistanceDelta` `number` | 最大移动距离  <br> range: 不限制<br> type:浮点数 |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 移动后的得到的 Vector2 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### multiply <Score text="multiply" /> 

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量 a 的每个分量乘以标量 b

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` `number` | 数值 b  <br> range: 不限制<br> type:浮点数 |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相乘的结果 Vector2 对象 |
| :------ | :------ |

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量 a 乘以向量 b

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

<span style="font-size: 14px;">
使用示例: a * b
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8,2);
        let b = new Vector2(3,4);
        let result = Vector2.multiply(a,b);
        // X=24, Y=8
        console.log(result);
     }
}
```

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相乘的结果 Vector2 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

<span style="font-size: 14px;">
使用示例: a * b
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8,2);
        let result = Vector2.multiply(a,3);
        // X=24, Y=6
        console.log(result);
     }
}
```

___

### negate <Score text="negate" /> 

• `Static` **negate**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

每个元素向量取负

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素向量取负得到的 Vector2 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### normalize <Score text="normalize" /> 

• `Static` **normalize**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量归一化

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 归一化后得到的 Vector2 对象 |
| :------ | :------ |

___

### project <Score text="project" /> 

• `Static` **project**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量 a 在向量 b 上的投影

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 投影向量 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### random <Score text="random" /> 

• `Static` **random**(`range?`): [`Vector2`](mw.Vector2.md) 

生成一个在单位圆上均匀分布的随机 Vector2 对象

#### Parameters

| `range?` `number` | 范围  <br> default: 1.0  <br> range: 不限制<br> type:浮点数 |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | 得到的随机 Vector2 对象 |
| :------ | :------ |

___

### reflect <Score text="reflect" /> 

• `Static` **reflect**(`inDirection`, `inNormal`, `outer?`): [`Vector2`](mw.Vector2.md) 

反射

#### Parameters

| `inDirection` [`Vector2`](mw.Vector2.md) | 入射向量 |
| :------ | :------ |
| `inNormal` [`Vector2`](mw.Vector2.md) | 法线向量 |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 反射向量 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### rotate <Score text="rotate" /> 

• `Static` **rotate**(`v`, `radians`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量 a 旋转某度后的向量

#### Parameters

| `v` [`Vector2`](mw.Vector2.md) | 向量v |
| :------ | :------ |
| `radians` `number` | 旋转角度  <br> range: 无限制<br> type:浮点数 |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 旋转后的 Vector2 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### round <Score text="round" /> 

• `Static` **round**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

每个元素四舍五入取整

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐逐元素向量四舍五入取整后的 Vector2 对象 |
| :------ | :------ |

___

### set <Score text="set" /> 

• `Static` **set**(`a`, `x`, `y`): [`Vector2`](mw.Vector2.md) 

设置向量 a 的值

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `x` `number` | 修改的 x 值  <br> range: 不限制<br> type:浮点数 |
| `y` `number` | 修改的 y 值  <br> range: 不限制<br> type:浮点数 |

#### Returns

| [`Vector2`](mw.Vector2.md) | 修改后的 Vector2 对象 |
| :------ | :------ |

::: warning Precautions

向量 a 不能为空对象

:::

___

### signAngle <Score text="signAngle" /> 

• `Static` **signAngle**(`a`, `b`): `number` 

向量 a 和向量 b 之间的有符号角度

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |

#### Returns

| `number` | 向量 a 和向量 b 之间的有符号角度 |
| :------ | :------ |

::: warning Precautions

有符号角度的取值范围为 (-180, 180], 当前向量可以通过逆时针旋转有符号角度与指定向量同向 <br/>

:::

___

### sqrMagnitude <Score text="sqrMagnitude" /> 

• `Static` **sqrMagnitude**(`a`): `number` 

向量长度平方

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |

#### Returns

| `number` | 向量长度平方 |
| :------ | :------ |

___

### squaredDistance <Score text="squaredDistance" /> 

• `Static` **squaredDistance**(`a`, `b`): `number` 

两向量的欧氏距离平方

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |

#### Returns

| `number` | 两向量的欧氏距离平方 |
| :------ | :------ |

___

### strictEquals <Score text="strictEquals" /> 

• `Static` **strictEquals**(`a`, `b`): `boolean` 

判断两向量是否相等

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |

#### Returns

| `boolean` | 是否相等 |
| :------ | :------ |

___

### subtract <Score text="subtract" /> 

• `Static` **subtract**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量 a 减去向量 b

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

<span style="font-size: 14px;">
使用示例: a - b
</span>

```ts
@Component
 export default class NewExample extends Script {

     protected onStart(): void {
        let a = new Vector2(8,2);
        let b = new Vector2(3,3);
        let result = Vector2.subtract(a,b);
        // X=5, Y=-1
        console.log(result);
     }
}
```

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量 b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相减的结果 Vector2 对象 |
| :------ | :------ |
