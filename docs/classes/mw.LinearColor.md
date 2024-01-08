[基础类型](../groups/基础类型.基础类型.md) / LinearColor

# LinearColor <Badge type="tip" text="Class" /> <Score text="LinearColor" />

线性RGBA颜色

r, g, b 颜色值的有效范围是 0.0 <= value <= 1.0

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[a](mw.LinearColor.md#a)**(): `number`  |
| :-----|
| 获取当前 LinearColor 的 a 值|
| **[b](mw.LinearColor.md#b)**(): `num[b](mw.LinearColor.md#b)er`  |
| 获取当前 LinearColor 的 b 值|
| **[g](mw.LinearColor.md#g)**(): `number`  |
| 获取当前 LinearColor 的 g 值|
| **[r](mw.LinearColor.md#r)**(): `numbe[r](mw.LinearColor.md#r)`  |
| 获取当前 LinearColor 的 r 值|
| **[black](mw.LinearColor.md#black)**(): [`LinearColor`](mw.LinearColor.md)  |
| 黑色 (0, 0, 0, 1)|
| **[blue](mw.LinearColor.md#blue)**(): [`LinearColor`](mw.LinearColor.md)  |
| 蓝色 (0, 0, 1, 1)|
| **[gray](mw.LinearColor.md#gray)**(): [`LinearColor`](mw.LinearColor.md)  |
| 灰色 (0.5, 0.5, 0.5, 1)|
| **[green](mw.LinearColor.md#green)**(): [`LinearColor`](mw.LinearColor.md)  |
| 绿色 (0, 1, 0, 1)|
| **[red](mw.LinearColor.md#red)**(): [`LinearColor`](mw.LinearColor.md)  |
| 红色 (1, 0, 0, 1)|
| **[white](mw.LinearColor.md#white)**(): [`LinearColor`](mw.LinearColor.md)  |
| 白色 (1, 1, 1, 1)|
| **[yellow](mw.LinearColor.md#yellow)**(): [`LinearColor`](mw.LinearColor.md)  |
| 黄色 (1, 1, 0, 1)|

### Methods <Score text="Methods" /> 
| **[addition](mw.LinearColor.md#addition)**(`linearColorB`: [`LinearColor`](mw.LinearColor.md), `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)   |
| :-----|
| 颜色值相加|
| **[clone](mw.LinearColor.md#clone)**(): [`LinearColor`](mw.LinearColor.md)   |
| 克隆当前线性颜色|
| **[division](mw.LinearColor.md#division)**(`linearColorB`: [`LinearColor`](mw.LinearColor.md), `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)   |
| 颜色值相除|
| **[equality](mw.LinearColor.md#equality)**(`linearColorB`: [`LinearColor`](mw.LinearColor.md), `epsilon?`: `number`): `boolean`   |
| 判断两个颜色值是否相等|
| **[fromString](mw.LinearColor.md#fromstring)**(`jsonStr`: `string`): [`LinearColor`](mw.LinearColor.md)   |
| 用数据生成一个新的对象|
| **[inequality](mw.LinearColor.md#inequality)**(`linearColorB`: [`LinearColor`](mw.LinearColor.md), `epsilon?`: `number`): `boolean`   |
| 颜色值相乘|
| [multiply](mw.LinearColor.md#multiply)  |
| :----- |
| **[subtraction](mw.LinearColor.md#subtraction)**(`linearColorB`: [`LinearColor`](mw.LinearColor.md), `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)   |
| 颜色值相减|
| **[toString](mw.LinearColor.md#tostring)**(): `string`   |
| 以字符串的形式输出对象属性|
| **[colorHexToLinearColor](mw.LinearColor.md#colorhextolinearcolor)**(`inColorHex`: `string`, `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)   |
| 将 HexColor 转化为 LinearColor|
| **[colorHsvToLinearColor](mw.LinearColor.md#colorhsvtolinearcolor)**(`h`: `number`, `s`: `number`, `v`: `number`, `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)   |
| 将 HsvColor 转化为 LinearColor|
| **[colorToLinearColor](mw.LinearColor.md#colortolinearcolor)**(`r`: `number`, `g`: `number`, `b`: `number`, `a?`: `number`, `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)   |
| 转换当前颜色|
| **[fromString](mw.LinearColor.md#fromstring-1)**(`jsonStr`: `string`): [`LinearColor`](mw.LinearColor.md)   |
| 用数据生成一个新的对象|
| **[makeFromHSV](mw.LinearColor.md#makefromhsv)**(`h`: `number`, `s`: `number`, `v`: `number`, `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)   |
| 将字节色调饱和度亮度转换为 LinearColor|
| **[random](mw.LinearColor.md#random)**(`outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)   |
| 返回具有随机 RGB 值和 Alpha 为 1.0 的新颜色|

用给定的 r, g, b 值构建一个新的 Color

#### Parameters

| `r` `number` | r<br> range:颜色值的有效范围是 0.0 <= value <= 1.0<br> type: 浮点数 |
| :------ | :------ |
| `g` `number` | g<br> range:颜色值的有效范围是 0.0 <= value <= 1.0<br> type: 浮点数 |
| `b` `number` | b<br> range:颜色值的有效范围是 0.0 <= value <= 1.0<br> type: 浮点数 |

• **new LinearColor**(`r`, `g`, `b`, `a`)

用给定的 r, g, b, a 值构建一个新的 Color

#### Parameters

| `r` `number` | r<br> range:颜色值的有效范围是 0.0 <= value <= 1.0<br> type: 浮点数 |
| :------ | :------ |
| `g` `number` | g<br> range:颜色值的有效范围是 0.0 <= value <= 1.0<br> type: 浮点数 |
| `b` `number` | b<br> range:颜色值的有效范围是 0.0 <= value <= 1.0<br> type: 浮点数 |
| `a` `number` | a<br> range:颜色值的有效范围是 0.0 <= value <= 1.0<br> type: 浮点数 |

• **new LinearColor**(`v`)

用给定的 Vector 对象构建一个新的 LinearColor

#### Parameters

| `v` [`Vector`](mw.Vector.md) | Vector 对象 |
| :------ | :------ |

• **new LinearColor**(`c`)

用给定的 LinearColor 构建一个新的 LinearColor

#### Parameters

| `c` [`LinearColor`](mw.LinearColor.md) | Vector 对象 |
| :------ | :------ |

## Accessors

### a <Score text="a" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **a**(): `number`

</th>
<th style="text-align: left">

• `set` **a**(`v`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前 LinearColor 的 a 值

#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置当前 LinearColor 的 a 值

#### Parameters

| `v` `number` |  a<br> range: 亮度的有效范围是 0.0 <= value <= 1.0<br> type:浮点数 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### b <Score text="b" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **b**(): `number`

</th>
<th style="text-align: left">

• `set` **b**(`v`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前 LinearColor 的 b 值

#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置当前 LinearColor 的 b 值

#### Parameters

| `v` `number` |  b<br> range: 亮度的有效范围是 0.0 <= value <= 1.0<br> type:浮点数 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### g <Score text="g" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **g**(): `number`

</th>
<th style="text-align: left">

• `set` **g**(`v`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前 LinearColor 的 g 值

#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置当前 LinearColor 的 g 值 颜色值的有效范围是

#### Parameters

| `v` `number` |  g<br> range: 颜色的有效范围是 0.0 <= value <= 1.0<br> type:浮点数 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### r <Score text="r" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **r**(): `number`

</th>
<th style="text-align: left">

• `set` **r**(`v`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前 LinearColor 的 r 值

#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置当前 LinearColor 的 r 值

#### Parameters

| `v` `number` |  r<br> range: 亮度的有效范围是 0.0 <= value <= 1.0<br> type:浮点数 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### black <Score text="black" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **black**(): [`LinearColor`](mw.LinearColor.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


黑色 (0, 0, 0, 1)

#### Returns

| [`LinearColor`](mw.LinearColor.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### blue <Score text="blue" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **blue**(): [`LinearColor`](mw.LinearColor.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


蓝色 (0, 0, 1, 1)

#### Returns

| [`LinearColor`](mw.LinearColor.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### gray <Score text="gray" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **gray**(): [`LinearColor`](mw.LinearColor.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


灰色 (0.5, 0.5, 0.5, 1)

#### Returns

| [`LinearColor`](mw.LinearColor.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### green <Score text="green" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **green**(): [`LinearColor`](mw.LinearColor.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


绿色 (0, 1, 0, 1)

#### Returns

| [`LinearColor`](mw.LinearColor.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### red <Score text="red" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **red**(): [`LinearColor`](mw.LinearColor.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


红色 (1, 0, 0, 1)

#### Returns

| [`LinearColor`](mw.LinearColor.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### white <Score text="white" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **white**(): [`LinearColor`](mw.LinearColor.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


白色 (1, 1, 1, 1)

#### Returns

| [`LinearColor`](mw.LinearColor.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### yellow <Score text="yellow" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **yellow**(): [`LinearColor`](mw.LinearColor.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


黄色 (1, 1, 0, 1)

#### Returns

</td>
</tr></tbody>
</table>

| [`LinearColor`](mw.LinearColor.md) |  |
| :------ | :------ |

## Methods

### addition <Score text="addition" /> 

• **addition**(`linearColorB`, `outer?`): [`LinearColor`](mw.LinearColor.md) 

颜色值相加

#### Parameters

| `linearColorB` [`LinearColor`](mw.LinearColor.md) | 相加的颜色B |
| :------ | :------ |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收结果的 LinearColor 对象  <br> default: null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |

___

### clone <Score text="clone" /> 

• **clone**(): [`LinearColor`](mw.LinearColor.md) 

克隆当前线性颜色

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 返回一个新的线性颜色 |
| :------ | :------ |

___

### division <Score text="division" /> 

• **division**(`linearColorB`, `outer?`): [`LinearColor`](mw.LinearColor.md) 

颜色值相除

#### Parameters

| `linearColorB` [`LinearColor`](mw.LinearColor.md) | 相除的颜色B |
| :------ | :------ |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收结果的 LinearColor 对象  <br> default: null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |

___

### equality <Score text="equality" /> 

• **equality**(`linearColorB`, `epsilon?`): `boolean` 

判断两个颜色值是否相等

#### Parameters

| `linearColorB` [`LinearColor`](mw.LinearColor.md) | 对比的颜色B |
| :------ | :------ |
| `epsilon?` `number` | 最小误差数  <br> default:  mw.MathUtil.EPSILON  <br> range: 建议为小于 1 的值。  <br> type: 浮点数 |

#### Returns

| `boolean` | 是否相等。相等返回true，不相等返回false |
| :------ | :------ |

___

### fromString <Score text="fromString" /> 

• **fromString**(`str`): `void` 

用数据填充对象。

#### Parameters

| `jsonStr` `string` | 数据字符串  <br> range:"R=0.000000,G=1.000000,B=0.000000,A=-1.000000" |
| :------ | :------ |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 新的 LinearColor 类型对象。 |
| :------ | :------ |

与另一个 fromString 函数的区别为：此函数为普通函数，另一个为静态函数。

调用方式不相同。

<span style="font-size: 14px;">
使用示例: 调用方式的区别
</span>

```ts
// 此函数
let color :LinearColor;
color.fromString("R=0.000000,G=1.000000,B=0.000000,A=-1.000000");
this.button.pressedImagColor = color;

// 静态 fromString 函数
const str = "R=0.000000,G=1.000000,B=0.000000,A=-1.000000";
this.button.pressedImagColor = LinearColor.fromString(str);
```

#### Parameters

| `str` `string` | 数据字符串  <br> range: "R=0.000000,G=1.000000,B=0.000000,A=-1.000000" |
| :------ | :------ |


___

### inequality <Score text="inequality" /> 

• **inequality**(`linearColorB`, `epsilon?`): `boolean` 


#### Returns

| `boolean` | 是否相等。不相等返回 true，相等返回 false |
| :------ | :------ |

颜色值相乘

#### Parameters

| `linearColorB` [`LinearColor`](mw.LinearColor.md) | 相乘的颜色B |
| :------ | :------ |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收结果的 LinearColor 对象  <br> default: null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |

#### Parameters

| `linearColorB` [`LinearColor`](mw.LinearColor.md) | 对比的颜色B |
| :------ | :------ |
| `epsilon?` `number` | 最小误差数  <br> default:  mw.MathUtil.EPSILON  <br> range: 建议为小于 1 的值。  <br> type: 浮点数 |

#### Returns

| `boolean` | 是否相等。不相等返回 true，相等返回 false |
| :------ | :------ |

___

### subtraction <Score text="subtraction" /> 

• **subtraction**(`linearColorB`, `outer?`): [`LinearColor`](mw.LinearColor.md) 

颜色值相减

#### Parameters

| `linearColorB` [`LinearColor`](mw.LinearColor.md) | 相减的颜色B |
| :------ | :------ |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收结果的 LinearColor 对象  <br> default: null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |

___

### toString <Score text="toString" /> 

• **toString**(): `string` 

以字符串的形式输出对象属性

#### Returns

| `string` | 对象属性字符串 |
| :------ | :------ |

___

### colorHexToLinearColor <Score text="colorHexToLinearColor" /> 

• `Static` **colorHexToLinearColor**(`inColorHex`, `outer?`): [`LinearColor`](mw.LinearColor.md) 

将 HexColor 转化为 LinearColor

#### Parameters

| `inColorHex` `string` | HexColor 字符串  <br> range: HexColor 字符串长度 |
| :------ | :------ |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收转化后的 LinearColor 的对象  <br> default: null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | LinerColor 对象 |
| :------ | :------ |

___

### colorHsvToLinearColor <Score text="colorHsvToLinearColor" /> 

• `Static` **colorHsvToLinearColor**(`h`, `s`, `v`, `outer?`): [`LinearColor`](mw.LinearColor.md) 

将 HsvColor 转化为 LinearColor

#### Parameters

| `h` `number` | 色调。  <br> range:[0, 1]<br> type:浮点数 |
| :------ | :------ |
| `s` `number` | 饱和度。  <br> range:[0, 1]<br> type:浮点数 |
| `v` `number` | 亮度。  <br> range:[0, 1] 0.0(黑色)～1.0(白色)<br> type:浮点数 |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收转换结果的 LinearColor 对象  <br> default:  null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer，否则返回一个新的 LinearColor 对象 |
| :------ | :------ |

___

### colorToLinearColor <Score text="colorToLinearColor" /> 

• `Static` **colorToLinearColor**(`r`, `g`, `b`, `a?`, `outer?`): [`LinearColor`](mw.LinearColor.md) 

转换当前颜色

#### Parameters

| `r` `number` | 颜色 R 值。 <br> default: null  <br> range:[0, 255]<br> type:整数 |
| :------ | :------ |
| `g` `number` | 颜色 G 值。 <br> default: null  <br> range:[0, 255]<br> type:整数 |
| `b` `number` | 颜色 B 值。  <br> default: null  <br> range:[0, 255]<br> type:整数 |
| `a?` `number` | 颜色 透明度。 <br> default: 255  <br> range:[0, 255]<br> type:整数 |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收转换结果的 LinearColor 对象  <br> default:  null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer， 否则返回一个新的 LinearColor 对象。 |
| :------ | :------ |

___

### fromString <Score text="fromString" /> 

• `Static` **fromString**(`jsonStr`): [`LinearColor`](mw.LinearColor.md) 

用数据生成一个新的对象

传入格式为："R=0.000000,G=1.000000,B=0.000000,A=-1.000000"(绿色)

<span style="font-size: 14px;">
使用示例: 创建一个名为 NewScript 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在场景中生成一个屏幕 UI - 按钮。
</span>

```ts
 @Component
 export default class NewScript extends Script {

     protected onStart(): void {
         if(SystemUtil.isClient()){
             UIService.show(NewUIScript);
         }
     }
 }

 class NewUIScript extends UIScript {

     button:StaleButton;

     protected onStart() {
         //设置能否每帧触发onUpdate
         this.canUpdate = false;
         this.layer = UILayerMiddle;

         this.button = StaleButton.newObject(this.rootCanvas);

         this.button.text = "按下变绿";
         this.button.transitionEnable = true;
         const str = "R=0.000000,G=1.000000,B=0.000000,A=-1.000000";
         this.button.pressedImagColor = LinearColor.fromString(str);
         this.button.visibility = SlateVisibility.Visible;
         this.button.onClicked.add(() => {
             console.log("click");
         })
     }
 }
```

#### Parameters

| `jsonStr` `string` | 数据字符串  <br> range:"R=0.000000,G=1.000000,B=0.000000,A=-1.000000" |
| :------ | :------ |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 新的 LinearColor 类型对象。 |
| :------ | :------ |

___

### makeFromHSV <Score text="makeFromHSV" /> 

• `Static` **makeFromHSV**(`h`, `s`, `v`, `outer?`): [`LinearColor`](mw.LinearColor.md) 

将字节色调饱和度亮度转换为 LinearColor

#### Parameters

| `h` `number` | 色调。  <br> range:[0, 1]<br> type:浮点数 |
| :------ | :------ |
| `s` `number` | 饱和度。  <br> range:[0, 1]<br> type:浮点数 |
| `v` `number` | 亮度。  <br> range:[0, 1] 0.0(黑色)～1.0(白色)<br> type:浮点数 |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收转换结果的 LinearColor 对象  <br> default: null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |

___

### random <Score text="random" /> 

• `Static` **random**(`outer?`): [`LinearColor`](mw.LinearColor.md) 

返回具有随机 RGB 值和 Alpha 为 1.0 的新颜色

#### Parameters

| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收结果的 LinearColor 对象  <br> default: null |
| :------ | :------ |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |
