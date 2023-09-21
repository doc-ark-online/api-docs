[TYPE](../groups/Core.TYPE.md) / LinearColor

# LinearColor <Badge type="tip" text="Class" /> <Score text="LinearColor" />

<p class="content-big"> 线性RGBA颜色，r, g, b颜色值的有效范围是 0.0 <= value <= 1.0 </p>

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new LinearColor**(`r`: `number`, `g`: `number`, `b`: `number`)  |
| :-----|
| 用给定的 LinearColor 构建一个新的 LinearColor|

### Accessors <Score text="Accessors" /> 
| **[a](mw.LinearColor.md#a)**(): `number`  |
| :-----|
| 设置当前 LinearColor 的 a 值|
| **[b](mw.LinearColor.md#b)**(): `num[b](mw.LinearColor.md#b)er`  |
| 设置当前 LinearColor 的 b 值|
| **[g](mw.LinearColor.md#g)**(): `number`  |
| 设置当前 LinearColor 的 g 值 颜色值的有效范围是|
| **[r](mw.LinearColor.md#r)**(): `numbe[r](mw.LinearColor.md#r)`  |
| 设置当前 LinearColor 的 r 值|
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
| **[addition](mw.LinearColor.md#addition)**(`linearColorB`: [`LinearColor`](mw.LinearColor.md), `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)  |
| :-----|
| 颜色值相加|
| **[clone](mw.LinearColor.md#clone)**(): [`LinearColor`](mw.LinearColor.md)  |
| 克隆当前线性颜色|
| **[division](mw.LinearColor.md#division)**(`linearColorB`: [`LinearColor`](mw.LinearColor.md), `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)  |
| 颜色值相除|
| **[equality](mw.LinearColor.md#equality)**(`linearColorB`: [`LinearColor`](mw.LinearColor.md), `epsilon?`: `number`): `boolean`  |
| 判断两个颜色值是否相等|
| **[fromString](mw.LinearColor.md#fromstring)**(`jsonStr`: `string`): [`LinearColor`](mw.LinearColor.md)  |
| 用数据生成一个新的对象|
| **[inequality](mw.LinearColor.md#inequality)**(`linearColorB`: [`LinearColor`](mw.LinearColor.md), `epsilon?`: `number`): `boolean`  |
| 判断两个颜色值是否不相等|
| **[multiply](mw.LinearColor.md#multiply)**(`linearColorB`: [`LinearColor`](mw.LinearColor.md), `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)  |
| 颜色值相乘|
| **[subtraction](mw.LinearColor.md#subtraction)**(`linearColorB`: [`LinearColor`](mw.LinearColor.md), `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)  |
| 颜色值相减|
| **[toString](mw.LinearColor.md#tostring)**(): `string`  |
| 以字符串的形式输出对象属性|
| **[colorHexToLinearColor](mw.LinearColor.md#colorhextolinearcolor)**(`inColorHex`: `string`, `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)  |
| 将 HexColor 转化为 LinearColor|
| **[colorHsvToLinearColor](mw.LinearColor.md#colorhsvtolinearcolor)**(`h`: `number`, `s`: `number`, `v`: `number`, `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)  |
| 将 HsvColor 转化为 LinearColor|
| **[colorToLinearColor](mw.LinearColor.md#colortolinearcolor)**(`r`: `number`, `g`: `number`, `b`: `number`, `a?`: `number`, `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)  |
| 转换 Color|
| **[fromString](mw.LinearColor.md#fromstring-1)**(`jsonStr`: `string`): [`LinearColor`](mw.LinearColor.md)  |
| 用数据生成一个新的对象|
| **[makeFromHSV](mw.LinearColor.md#makefromhsv)**(`h`: `number`, `s`: `number`, `v`: `number`, `outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)  |
| 将字节色调饱和度亮度转换为 LinearColor|
| **[random](mw.LinearColor.md#random)**(`outer?`: [`LinearColor`](mw.LinearColor.md)): [`LinearColor`](mw.LinearColor.md)  |
| 返回具有随机 RGB 值和 Alpha 为 1.0 的新颜色|

用给定的 r, g, b 值构建一个新的 Color

#### Parameters

| `r` `number` | r 颜色值的有效范围是 0.0 <= value <= 1.0 |
| :------ | :------ |
| `g` `number` | g 颜色值的有效范围是 0.0 <= value <= 1.0 |
| `b` `number` | b 颜色值的有效范围是 0.0 <= value <= 1.0 |

• **new LinearColor**(`r`, `g`, `b`, `a`)

用给定的 r, g, b ,a 值构建一个新的 Color

#### Parameters

| `r` `number` | r 颜色值的有效范围是 0.0 <= value <= 1.0 |
| :------ | :------ |
| `g` `number` | g 颜色值的有效范围是 0.0 <= value <= 1.0 |
| `b` `number` | b 颜色值的有效范围是 0.0 <= value <= 1.0 |
| `a` `number` | a 颜色值的有效范围是 0.0 <= value <= 1.0 |

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

::: warning Precautions

颜色值的有效范围是 0.0 <= value <= 1.0

:::

#### Parameters

| `v` | `number` |
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

::: warning Precautions

颜色值的有效范围是 0.0 <= value <= 1.0

:::

#### Parameters

| `v` | `number` |
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

::: warning Precautions

0.0 <= value <= 1.0

:::

#### Parameters

| `v` | `number` |
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

::: warning Precautions

颜色值的有效范围是 0.0 <= value <= 1.0

:::

#### Parameters

| `v` | `number` |
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
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

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
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

___

### equality <Score text="equality" /> 

• **equality**(`linearColorB`, `epsilon?`): `boolean` 

判断两个颜色值是否相等

#### Parameters

| `linearColorB` [`LinearColor`](mw.LinearColor.md) | 对比的颜色B |
| :------ | :------ |
| `epsilon?` `number` | 最小误差数 default:mw.MathUtil.EPSILON |

#### Returns

| `boolean` | 是否相等 |
| :------ | :------ |


::: warning Precautions

相等返回true，不相等返回false

:::

___

### fromString <Score text="fromString" /> 

• **fromString**(`str`): `void` 

用数据填充对象

#### Parameters

| `jsonStr` `string` | 数据字符串 |
| :------ | :------ |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 新的 LinearColor 类型对象 |
| :------ | :------ |


___

### inequality <Score text="inequality" /> 

• **inequality**(`linearColorB`, `epsilon?`): `boolean` 

判断两个颜色值是否不相等

#### Parameters

| `linearColorB` [`LinearColor`](mw.LinearColor.md) | 对比的颜色B |
| :------ | :------ |
| `epsilon?` `number` | 最小误差数 default:mw.MathUtil.EPSILON |

#### Returns

| `boolean` | 是否相等 |
| :------ | :------ |


::: warning Precautions

不相等返回true，相等返回false

:::

___

### multiply <Score text="multiply" /> 

• **multiply**(`linearColorB`, `outer?`): [`LinearColor`](mw.LinearColor.md) 

颜色值相乘

#### Parameters

| `linearColorB` [`LinearColor`](mw.LinearColor.md) | 相乘的颜色B |
| :------ | :------ |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

___

### subtraction <Score text="subtraction" /> 

• **subtraction**(`linearColorB`, `outer?`): [`LinearColor`](mw.LinearColor.md) 

颜色值相减

#### Parameters

| `linearColorB` [`LinearColor`](mw.LinearColor.md) | 相减的颜色B |
| :------ | :------ |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

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

| `inColorHex` `string` | HexColor 字符串 |
| :------ | :------ |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收转化后的 LinearColor 的对象 default:null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | LinerColor 对象 |
| :------ | :------ |


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

___

### colorHsvToLinearColor <Score text="colorHsvToLinearColor" /> 

• `Static` **colorHsvToLinearColor**(`h`, `s`, `v`, `outer?`): [`LinearColor`](mw.LinearColor.md) 

将 HsvColor 转化为 LinearColor

#### Parameters

| `h` `number` | 色调 |
| :------ | :------ |
| `s` `number` | 饱和度 |
| `v` `number` | 明度 |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收转换结果的 LinearColor 对象 default:null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

___

### colorToLinearColor <Score text="colorToLinearColor" /> 

• `Static` **colorToLinearColor**(`r`, `g`, `b`, `a?`, `outer?`): [`LinearColor`](mw.LinearColor.md) 

转换 Color

#### Parameters

| `r` `number` | r(0 ~255) |
| :------ | :------ |
| `g` `number` | g(0 ~255) |
| `b` `number` | b(0 ~255) |
| `a?` `number` | a(0 ~255) default:255 |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收转换结果的 LinearColor 对象 default:null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |


___

### fromString <Score text="fromString" /> 

• `Static` **fromString**(`jsonStr`): [`LinearColor`](mw.LinearColor.md) 

用数据生成一个新的对象


#### Parameters

| `jsonStr` `string` | 数据字符串 |
| :------ | :------ |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 新的 LinearColor 类型对象 |
| :------ | :------ |

___

### makeFromHSV <Score text="makeFromHSV" /> 

• `Static` **makeFromHSV**(`h`, `s`, `v`, `outer?`): [`LinearColor`](mw.LinearColor.md) 

将字节色调饱和度亮度转换为 LinearColor

#### Parameters

| `h` `number` | 色调 |
| :------ | :------ |
| `s` `number` | 饱和度 |
| `v` `number` | 明度 |
| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收转换结果的 LinearColor 对象 default:null |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

___

### random <Score text="random" /> 

• `Static` **random**(`outer?`): [`LinearColor`](mw.LinearColor.md) 

返回具有随机 RGB 值和 Alpha 为 1.0 的新颜色

#### Parameters

| `outer?` [`LinearColor`](mw.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |
| :------ | :------ |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象 |
| :------ | :------ |


::: warning Precautions

建议传入 outer 来减少 new 对象
