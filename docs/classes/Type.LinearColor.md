[Type](../modules/Type.Type.md) / LinearColor

# LinearColor <Badge type="tip" text="Class" /> <Score text="LinearColor" />

线性RGBA颜色

## Table of contents

| Accessors |
| :-----|
| **[a](Type.LinearColor.md#a)**(): `number` <br> 获取当前 LinearColor 的 a 值|
| **[b](Type.LinearColor.md#b)**(): `num[b](Type.LinearColor.md#b)er` <br> 获取当前 LinearColor 的 b 值|
| **[g](Type.LinearColor.md#g)**(): `number` <br> 获取当前 LinearColor 的 g 值|
| **[r](Type.LinearColor.md#r)**(): `numbe[r](Type.LinearColor.md#r)` <br> 获取当前 LinearColor 的 r 值|
| **[black](Type.LinearColor.md#black)**(): [`LinearColor`](Type.LinearColor.md) <br> 黑色 (0, 0, 0, 1)|
| **[blue](Type.LinearColor.md#blue)**(): [`LinearColor`](Type.LinearColor.md) <br> 蓝色 (0, 0, 1, 1)|
| **[gray](Type.LinearColor.md#gray)**(): [`LinearColor`](Type.LinearColor.md) <br> 灰色 (0.5, 0.5, 0.5, 1)|
| **[green](Type.LinearColor.md#green)**(): [`LinearColor`](Type.LinearColor.md) <br> 绿色 (0, 1, 0, 1)|
| **[red](Type.LinearColor.md#red)**(): [`LinearColor`](Type.LinearColor.md) <br> 红色 (1, 0, 0, 1)|
| **[white](Type.LinearColor.md#white)**(): [`LinearColor`](Type.LinearColor.md) <br> 白色 (1, 1, 1, 1)|
| **[yellow](Type.LinearColor.md#yellow)**(): [`LinearColor`](Type.LinearColor.md) <br> 黄色 (1, 1, 0, 1)|

| Methods |
| :-----|
| **[addition](Type.LinearColor.md#addition)**([`LinearColor`](Type.LinearColor.md), [`LinearColor`](Type.LinearColor.md)): [`LinearColor`](Type.LinearColor.md) <br> 颜色值相加|
| **[division](Type.LinearColor.md#division)**([`LinearColor`](Type.LinearColor.md), [`LinearColor`](Type.LinearColor.md)): [`LinearColor`](Type.LinearColor.md) <br> 颜色值相除|
| **[equality](Type.LinearColor.md#equality)**([`LinearColor`](Type.LinearColor.md), `number`): `boolean` <br> 判断两个颜色值是否相等|
| **[fromString](Type.LinearColor.md#fromstring)**(`string`): [`LinearColor`](Type.LinearColor.md) <br> 用数据生成一个新的对象|
| **[inequality](Type.LinearColor.md#inequality)**([`LinearColor`](Type.LinearColor.md), `number`): `boolean` <br> 判断两个颜色值是否不相等|
| **[multiply](Type.LinearColor.md#multiply)**([`LinearColor`](Type.LinearColor.md), [`LinearColor`](Type.LinearColor.md)): [`LinearColor`](Type.LinearColor.md) <br> 颜色值相乘|
| **[subtraction](Type.LinearColor.md#subtraction)**([`LinearColor`](Type.LinearColor.md), [`LinearColor`](Type.LinearColor.md)): [`LinearColor`](Type.LinearColor.md) <br> 颜色值相减|
| **[toString](Type.LinearColor.md#tostring)**(): `string` <br> 以字符串的形式输出对象属性|
| **[colorHexToLinearColor](Type.LinearColor.md#colorhextolinearcolor)**(`string`, [`LinearColor`](Type.LinearColor.md)): [`LinearColor`](Type.LinearColor.md) <br> 将 HexColor 转化为 LinearColor|
| **[colorHsvToLinearColor](Type.LinearColor.md#colorhsvtolinearcolor)**(`number`, `number`, `number`, [`LinearColor`](Type.LinearColor.md)): [`LinearColor`](Type.LinearColor.md) <br> 将 HsvColor 转化为 LinearColor|
| **[colorToLinearColor](Type.LinearColor.md#colortolinearcolor)**(`number`, `number`, `number`, `number`, [`LinearColor`](Type.LinearColor.md)): [`LinearColor`](Type.LinearColor.md) <br> 转换 Color|
| **[fromString](Type.LinearColor.md#fromstring-1)**(`string`): [`LinearColor`](Type.LinearColor.md) <br> 用数据生成一个新的对象|
| **[makeFromHSV](Type.LinearColor.md#makefromhsv)**(`number`, `number`, `number`, [`LinearColor`](Type.LinearColor.md)): [`LinearColor`](Type.LinearColor.md) <br> 将字节色调饱和度亮度转换为 LinearColor|
| **[random](Type.LinearColor.md#random)**([`LinearColor`](Type.LinearColor.md)): [`LinearColor`](Type.LinearColor.md) <br> 返回具有随机 RGB 值和 Alpha 为 1.0 的新颜色|

用给定的 r, g, b 值构建一个新的 Color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | r |
| `g` | `number` | g |
| `b` | `number` | b |

• **new LinearColor**(`r`, `g`, `b`, `a`)

用给定的 r, g, b ,a 值构建一个新的 Color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | r |
| `g` | `number` | g |
| `b` | `number` | b |
| `a` | `number` | a |

• **new LinearColor**(`v`)

用给定的 Vector 对象构建一个新的 LinearColor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Vector.md) | Vector 对象 |

• **new LinearColor**(`c`)

用给定的 LinearColor 构建一个新的 LinearColor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`LinearColor`](Type.LinearColor.md) | Vector 对象 |

## Accessors

### a <Score text="a" /> 

• `get` **a**(): `number`

获取当前 LinearColor 的 a 值

#### Returns

`number`

• `set` **a**(`v`): `void`

设置当前 LinearColor 的 a 值

::: warning Precautions

颜色值的有效范围是 0.0 <= value <= 1.0

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |


___

### b <Score text="b" /> 

• `get` **b**(): `number`

获取当前 LinearColor 的 b 值

#### Returns

`number`

• `set` **b**(`v`): `void`

设置当前 LinearColor 的 b 值

::: warning Precautions

颜色值的有效范围是 0.0 <= value <= 1.0

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |


___

### g <Score text="g" /> 

• `get` **g**(): `number`

获取当前 LinearColor 的 g 值

#### Returns

`number`

• `set` **g**(`v`): `void`

设置当前 LinearColor 的 g 值 颜色值的有效范围是

::: warning Precautions

0.0 <= value <= 1.0

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |


___

### r <Score text="r" /> 

• `get` **r**(): `number`

获取当前 LinearColor 的 r 值

#### Returns

`number`

• `set` **r**(`v`): `void`

设置当前 LinearColor 的 r 值

::: warning Precautions

颜色值的有效范围是 0.0 <= value <= 1.0

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |


___

### black <Score text="black" /> 

• `Static` `get` **black**(): [`LinearColor`](Type.LinearColor.md)

黑色 (0, 0, 0, 1)

#### Returns

[`LinearColor`](Type.LinearColor.md)

___

### blue <Score text="blue" /> 

• `Static` `get` **blue**(): [`LinearColor`](Type.LinearColor.md)

蓝色 (0, 0, 1, 1)

#### Returns

[`LinearColor`](Type.LinearColor.md)

___

### gray <Score text="gray" /> 

• `Static` `get` **gray**(): [`LinearColor`](Type.LinearColor.md)

灰色 (0.5, 0.5, 0.5, 1)

#### Returns

[`LinearColor`](Type.LinearColor.md)

___

### green <Score text="green" /> 

• `Static` `get` **green**(): [`LinearColor`](Type.LinearColor.md)

绿色 (0, 1, 0, 1)

#### Returns

[`LinearColor`](Type.LinearColor.md)

___

### red <Score text="red" /> 

• `Static` `get` **red**(): [`LinearColor`](Type.LinearColor.md)

红色 (1, 0, 0, 1)

#### Returns

[`LinearColor`](Type.LinearColor.md)

___

### white <Score text="white" /> 

• `Static` `get` **white**(): [`LinearColor`](Type.LinearColor.md)

白色 (1, 1, 1, 1)

#### Returns

[`LinearColor`](Type.LinearColor.md)

___

### yellow <Score text="yellow" /> 

• `Static` `get` **yellow**(): [`LinearColor`](Type.LinearColor.md)

黄色 (1, 1, 0, 1)

#### Returns

[`LinearColor`](Type.LinearColor.md)

## Methods

### addition <Score text="addition" /> 

• **addition**(`linearColorB`, `outer?`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

颜色值相加


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `linearColorB` | [`LinearColor`](Type.LinearColor.md) | 相加的颜色B |
| `outer?` | [`LinearColor`](Type.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

___

### division <Score text="division" /> 

• **division**(`linearColorB`, `outer?`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

颜色值相除


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `linearColorB` | [`LinearColor`](Type.LinearColor.md) | 相除的颜色B |
| `outer?` | [`LinearColor`](Type.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

___

### equality <Score text="equality" /> 

• **equality**(`linearColorB`, `epsilon?`): `boolean` <Badge type="tip" text="other" />

判断两个颜色值是否相等


::: warning Precautions

相等返回true，不相等返回false

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `linearColorB` | [`LinearColor`](Type.LinearColor.md) | 对比的颜色B |
| `epsilon?` | `number` | 最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

是否相等

___

### fromString <Score text="fromString" /> 

• **fromString**(`str`): `void` <Badge type="tip" text="other" />

用数据填充对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 数据字符串 |


___

### inequality <Score text="inequality" /> 

• **inequality**(`linearColorB`, `epsilon?`): `boolean` <Badge type="tip" text="other" />

判断两个颜色值是否不相等


::: warning Precautions

不相等返回true，相等返回false

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `linearColorB` | [`LinearColor`](Type.LinearColor.md) | 对比的颜色B |
| `epsilon?` | `number` | 最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

是否相等

___

### multiply <Score text="multiply" /> 

• **multiply**(`linearColorB`, `outer?`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

颜色值相乘


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `linearColorB` | [`LinearColor`](Type.LinearColor.md) | 相乘的颜色B |
| `outer?` | [`LinearColor`](Type.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

___

### subtraction <Score text="subtraction" /> 

• **subtraction**(`linearColorB`, `outer?`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

颜色值相减


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `linearColorB` | [`LinearColor`](Type.LinearColor.md) | 相减的颜色B |
| `outer?` | [`LinearColor`](Type.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

___

### toString <Score text="toString" /> 

• **toString**(): `string` <Badge type="tip" text="other" />

以字符串的形式输出对象属性


#### Returns

`string`

对象属性字符串

___

### colorHexToLinearColor <Score text="colorHexToLinearColor" /> 

• `Static` **colorHexToLinearColor**(`inColorHex`, `outer?`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

将 HexColor 转化为 LinearColor


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColorHex` | `string` | HexColor 字符串 |
| `outer?` | [`LinearColor`](Type.LinearColor.md) | 接收转化后的 LinearColor 的对象 default:null |

#### Returns

[`LinearColor`](Type.LinearColor.md)

LinerColor 对象

___

### colorHsvToLinearColor <Score text="colorHsvToLinearColor" /> 

• `Static` **colorHsvToLinearColor**(`h`, `s`, `v`, `outer?`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

将 HsvColor 转化为 LinearColor


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `h` | `number` | 色调 |
| `s` | `number` | 饱和度 |
| `v` | `number` | 明度 |
| `outer?` | [`LinearColor`](Type.LinearColor.md) | 接收转换结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

___

### colorToLinearColor <Score text="colorToLinearColor" /> 

• `Static` **colorToLinearColor**(`r`, `g`, `b`, `a?`, `outer?`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

转换 Color


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | r(0 ~255) |
| `g` | `number` | g(0 ~255) |
| `b` | `number` | b(0 ~255) |
| `a?` | `number` | a(0 ~255) default:255 |
| `outer?` | [`LinearColor`](Type.LinearColor.md) | 接收转换结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

___

### fromString <Score text="fromString" /> 

• `Static` **fromString**(`jsonStr`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

用数据生成一个新的对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jsonStr` | `string` | 数据字符串 |

#### Returns

[`LinearColor`](Type.LinearColor.md)

新的 LinearColor 类型对象

___

### makeFromHSV <Score text="makeFromHSV" /> 

• `Static` **makeFromHSV**(`h`, `s`, `v`, `outer?`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

将字节色调饱和度亮度转换为 LinearColor


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `h` | `number` | 色调 |
| `s` | `number` | 饱和度 |
| `v` | `number` | 明度 |
| `outer?` | [`LinearColor`](Type.LinearColor.md) | 接收转换结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

___

### random <Score text="random" /> 

• `Static` **random**(`outer?`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

返回具有随机 RGB 值和 Alpha 为 1.0 的新颜色


::: warning Precautions

建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`LinearColor`](Type.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象
