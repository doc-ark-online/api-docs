[Type](../modules/Type.Type.md) / LinearColor

# LinearColor <Badge type="tip" text="Class" />

**`Description`**

线性 RGBA 颜色

## Table of contents

| Accessors                                                                                                           |
| :------------------------------------------------------------------------------------------------------------------ |
| **[a](Type.Type.LinearColor.md#a)**(): `number` <br> 获取当前 LinearColor 的 a 值                                   |
| **[b](Type.Type.LinearColor.md#b)**(): `num[b](Type.Type.LinearColor.md#b)er` <br> 获取当前 LinearColor 的 b 值     |
| **[g](Type.Type.LinearColor.md#g)**(): `number` <br> 获取当前 LinearColor 的 g 值                                   |
| **[r](Type.Type.LinearColor.md#r)**(): `numbe[r](Type.Type.LinearColor.md#r)` <br> 获取当前 LinearColor 的 r 值     |
| **[black](Type.Type.LinearColor.md#black)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 黑色 (0, 0, 0, 1)     |
| **[blue](Type.Type.LinearColor.md#blue)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 蓝色 (0, 0, 1, 1)       |
| **[gray](Type.Type.LinearColor.md#gray)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 灰色 (0.5, 0.5, 0.5, 1) |
| **[green](Type.Type.LinearColor.md#green)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 绿色 (0, 1, 0, 1)     |
| **[red](Type.Type.LinearColor.md#red)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 红色 (1, 0, 0, 1)         |
| **[white](Type.Type.LinearColor.md#white)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 白色 (1, 1, 1, 1)     |
| **[yellow](Type.Type.LinearColor.md#yellow)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 黄色 (1, 1, 0, 1)   |

| Methods                                                                                                                                                                                                                             |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[addition](Type.Type.LinearColor.md#addition)**([`LinearColor`](Type.Type.LinearColor.md), [`LinearColor`](Type.Type.LinearColor.md)): [`LinearColor`](Type.Type.LinearColor.md) <br> 颜色值相加                                  |
| **[division](Type.Type.LinearColor.md#division)**([`LinearColor`](Type.Type.LinearColor.md), [`LinearColor`](Type.Type.LinearColor.md)): [`LinearColor`](Type.Type.LinearColor.md) <br> 颜色值相除                                  |
| **[equality](Type.Type.LinearColor.md#equality)**([`LinearColor`](Type.Type.LinearColor.md), `number`): `boolean` <br> 判断两个颜色值是否相等                                                                                       |
| **[fromString](Type.Type.LinearColor.md#fromstring)**(`string`): [`LinearColor`](Type.Type.LinearColor.md) <br> 用数据生成一个新的对象                                                                                              |
| **[inequality](Type.Type.LinearColor.md#inequality)**([`LinearColor`](Type.Type.LinearColor.md), `number`): `boolean` <br> 判断两个颜色值是否不相等                                                                                 |
| **[multiply](Type.Type.LinearColor.md#multiply)**([`LinearColor`](Type.Type.LinearColor.md), [`LinearColor`](Type.Type.LinearColor.md)): [`LinearColor`](Type.Type.LinearColor.md) <br> 颜色值相乘                                  |
| **[subtraction](Type.Type.LinearColor.md#subtraction)**([`LinearColor`](Type.Type.LinearColor.md), [`LinearColor`](Type.Type.LinearColor.md)): [`LinearColor`](Type.Type.LinearColor.md) <br> 颜色值相减                            |
| **[toString](Type.Type.LinearColor.md#tostring)**(): `string` <br> 以字符串的形式输出对象属性                                                                                                                                       |
| **[colorHexToLinearColor](Type.Type.LinearColor.md#colorhextolinearcolor)**(`string`, [`LinearColor`](Type.Type.LinearColor.md)): [`LinearColor`](Type.Type.LinearColor.md) <br> 将 HexColor 转化为 LinearColor                     |
| **[colorHsvToLinearColor](Type.Type.LinearColor.md#colorhsvtolinearcolor)**(`number`, `number`, `number`, [`LinearColor`](Type.Type.LinearColor.md)): [`LinearColor`](Type.Type.LinearColor.md) <br> 将 HsvColor 转化为 LinearColor |
| **[colorToLinearColor](Type.Type.LinearColor.md#colortolinearcolor)**(`number`, `number`, `number`, `number`, [`LinearColor`](Type.Type.LinearColor.md)): [`LinearColor`](Type.Type.LinearColor.md) <br> 转换 Color                 |
| **[fromString](Type.Type.LinearColor.md#fromstring-1)**(`string`): [`LinearColor`](Type.Type.LinearColor.md) <br> 用数据生成一个新的对象                                                                                            |
| **[makeFromHSV](Type.Type.LinearColor.md#makefromhsv)**(`number`, `number`, `number`, [`LinearColor`](Type.Type.LinearColor.md)): [`LinearColor`](Type.Type.LinearColor.md) <br> 将字节色调饱和度亮度转换为 LinearColor             |
| **[random](Type.Type.LinearColor.md#random)**([`LinearColor`](Type.Type.LinearColor.md)): [`LinearColor`](Type.Type.LinearColor.md) <br> 返回具有随机 RGB 值和 Alpha 为 1.0 的新颜色                                                |

**`Description`**

用给定的 r, g, b 值构建一个新的 Color

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `r`  | `number` | r           |
| `g`  | `number` | g           |
| `b`  | `number` | b           |

• **new LinearColor**(`r`, `g`, `b`, `a`)

**`Description`**

用给定的 r, g, b ,a 值构建一个新的 Color

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `r`  | `number` | r           |
| `g`  | `number` | g           |
| `b`  | `number` | b           |
| `a`  | `number` | a           |

• **new LinearColor**(`v`)

**`Description`**

用给定的 Vector 对象构建一个新的 LinearColor

#### Parameters

| Name | Type                            | Description |
| :--- | :------------------------------ | :---------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | Vector 对象 |

• **new LinearColor**(`c`)

**`Description`**

用给定的 LinearColor 构建一个新的 LinearColor

#### Parameters

| Name | Type                                      | Description |
| :--- | :---------------------------------------- | :---------- |
| `c`  | [`LinearColor`](Type.Type.LinearColor.md) | Vector 对象 |

## Accessors

### a

• `get` **a**(): `number`

**`Description`**

获取当前 LinearColor 的 a 值

#### Returns

`number`

• `set` **a**(`v`): `void`

**`Description`**

设置当前 LinearColor 的 a 值

**`Precautions`**

颜色值的有效范围是 0.0 <= value <= 1.0

#### Parameters

| Name | Type     |
| :--- | :------- |
| `v`  | `number` |

#### Returns

`void`

---

### b

• `get` **b**(): `number`

**`Description`**

获取当前 LinearColor 的 b 值

#### Returns

`number`

• `set` **b**(`v`): `void`

**`Description`**

设置当前 LinearColor 的 b 值

**`Precautions`**

颜色值的有效范围是 0.0 <= value <= 1.0

#### Parameters

| Name | Type     |
| :--- | :------- |
| `v`  | `number` |

#### Returns

`void`

---

### g

• `get` **g**(): `number`

**`Description`**

获取当前 LinearColor 的 g 值

#### Returns

`number`

• `set` **g**(`v`): `void`

**`Description`**

设置当前 LinearColor 的 g 值 颜色值的有效范围是

**`Precautions`**

0.0 <= value <= 1.0

#### Parameters

| Name | Type     |
| :--- | :------- |
| `v`  | `number` |

#### Returns

`void`

---

### r

• `get` **r**(): `number`

**`Description`**

获取当前 LinearColor 的 r 值

#### Returns

`number`

• `set` **r**(`v`): `void`

**`Description`**

设置当前 LinearColor 的 r 值

**`Precautions`**

颜色值的有效范围是 0.0 <= value <= 1.0

#### Parameters

| Name | Type     |
| :--- | :------- |
| `v`  | `number` |

#### Returns

`void`

---

### black

• `Static` `get` **black**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

黑色 (0, 0, 0, 1)

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

---

### blue

• `Static` `get` **blue**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

蓝色 (0, 0, 1, 1)

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

---

### gray

• `Static` `get` **gray**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

灰色 (0.5, 0.5, 0.5, 1)

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

---

### green

• `Static` `get` **green**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

绿色 (0, 1, 0, 1)

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

---

### red

• `Static` `get` **red**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

红色 (1, 0, 0, 1)

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

---

### white

• `Static` `get` **white**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

白色 (1, 1, 1, 1)

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

---

### yellow

• `Static` `get` **yellow**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

黄色 (1, 1, 0, 1)

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

## Methods

### addition

▸ **addition**(`linearColorB`, `outer?`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

颜色值相加

**`Effect`**

调用端生效

**`Precautions`**

建议传入 outer 来减少 new 对象

#### Parameters

| Name           | Type                                      | Description                              |
| :------------- | :---------------------------------------- | :--------------------------------------- |
| `linearColorB` | [`LinearColor`](Type.Type.LinearColor.md) | 相加的颜色 B                             |
| `outer?`       | [`LinearColor`](Type.Type.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

---

### division

▸ **division**(`linearColorB`, `outer?`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

颜色值相除

**`Effect`**

调用端生效

**`Precautions`**

建议传入 outer 来减少 new 对象

#### Parameters

| Name           | Type                                      | Description                              |
| :------------- | :---------------------------------------- | :--------------------------------------- |
| `linearColorB` | [`LinearColor`](Type.Type.LinearColor.md) | 相除的颜色 B                             |
| `outer?`       | [`LinearColor`](Type.Type.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

---

### equality

▸ **equality**(`linearColorB`, `epsilon?`): `boolean`

**`Description`**

判断两个颜色值是否相等

**`Effect`**

调用端生效

**`Precautions`**

相等返回 true，不相等返回 false

#### Parameters

| Name           | Type                                      | Description                              |
| :------------- | :---------------------------------------- | :--------------------------------------- |
| `linearColorB` | [`LinearColor`](Type.Type.LinearColor.md) | 对比的颜色 B                             |
| `epsilon?`     | `number`                                  | 最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

是否相等

---

### fromString

▸ **fromString**(`str`): `void`

**`Description`**

用数据填充对象

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `str` | `string` | 数据字符串  |

#### Returns

`void`

---

### inequality

▸ **inequality**(`linearColorB`, `epsilon?`): `boolean`

**`Description`**

判断两个颜色值是否不相等

**`Effect`**

调用端生效

**`Precautions`**

不相等返回 true，相等返回 false

#### Parameters

| Name           | Type                                      | Description                              |
| :------------- | :---------------------------------------- | :--------------------------------------- |
| `linearColorB` | [`LinearColor`](Type.Type.LinearColor.md) | 对比的颜色 B                             |
| `epsilon?`     | `number`                                  | 最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

是否相等

---

### multiply

▸ **multiply**(`linearColorB`, `outer?`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

颜色值相乘

**`Effect`**

调用端生效

**`Precautions`**

建议传入 outer 来减少 new 对象

#### Parameters

| Name           | Type                                      | Description                              |
| :------------- | :---------------------------------------- | :--------------------------------------- |
| `linearColorB` | [`LinearColor`](Type.Type.LinearColor.md) | 相乘的颜色 B                             |
| `outer?`       | [`LinearColor`](Type.Type.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

---

### subtraction

▸ **subtraction**(`linearColorB`, `outer?`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

颜色值相减

**`Effect`**

调用端生效

**`Precautions`**

建议传入 outer 来减少 new 对象

#### Parameters

| Name           | Type                                      | Description                              |
| :------------- | :---------------------------------------- | :--------------------------------------- |
| `linearColorB` | [`LinearColor`](Type.Type.LinearColor.md) | 相减的颜色 B                             |
| `outer?`       | [`LinearColor`](Type.Type.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

---

### toString

▸ **toString**(): `string`

**`Description`**

以字符串的形式输出对象属性

**`Effect`**

调用端生效

#### Returns

`string`

对象属性字符串

---

### colorHexToLinearColor

▸ `Static` **colorHexToLinearColor**(`inColorHex`, `outer?`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

将 HexColor 转化为 LinearColor

**`Effect`**

调用端生效

**`Precautions`**

建议传入 outer 来减少 new 对象

#### Parameters

| Name         | Type                                      | Description                                  |
| :----------- | :---------------------------------------- | :------------------------------------------- |
| `inColorHex` | `string`                                  | HexColor 字符串                              |
| `outer?`     | [`LinearColor`](Type.Type.LinearColor.md) | 接收转化后的 LinearColor 的对象 default:null |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

LinerColor 对象

---

### colorHsvToLinearColor

▸ `Static` **colorHsvToLinearColor**(`h`, `s`, `v`, `outer?`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

将 HsvColor 转化为 LinearColor

**`Effect`**

调用端生效

**`Precautions`**

建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                      | Description                                  |
| :------- | :---------------------------------------- | :------------------------------------------- |
| `h`      | `number`                                  | 色调                                         |
| `s`      | `number`                                  | 饱和度                                       |
| `v`      | `number`                                  | 明度                                         |
| `outer?` | [`LinearColor`](Type.Type.LinearColor.md) | 接收转换结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

---

### colorToLinearColor

▸ `Static` **colorToLinearColor**(`r`, `g`, `b`, `a?`, `outer?`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

转换 Color

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                                      | Description                                  |
| :------- | :---------------------------------------- | :------------------------------------------- |
| `r`      | `number`                                  | r(0 ~255)                                    |
| `g`      | `number`                                  | g(0 ~255)                                    |
| `b`      | `number`                                  | b(0 ~255)                                    |
| `a?`     | `number`                                  | a(0 ~255) default:255                        |
| `outer?` | [`LinearColor`](Type.Type.LinearColor.md) | 接收转换结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

---

### fromString

▸ `Static` **fromString**(`jsonStr`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

用数据生成一个新的对象

**`Effect`**

调用端生效

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `jsonStr` | `string` | 数据字符串  |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

新的 LinearColor 类型对象

---

### makeFromHSV

▸ `Static` **makeFromHSV**(`h`, `s`, `v`, `outer?`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

将字节色调饱和度亮度转换为 LinearColor

**`Effect`**

调用端生效

**`Precautions`**

建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                      | Description                                  |
| :------- | :---------------------------------------- | :------------------------------------------- |
| `h`      | `number`                                  | 色调                                         |
| `s`      | `number`                                  | 饱和度                                       |
| `v`      | `number`                                  | 明度                                         |
| `outer?` | [`LinearColor`](Type.Type.LinearColor.md) | 接收转换结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象

---

### random

▸ `Static` **random**(`outer?`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

返回具有随机 RGB 值和 Alpha 为 1.0 的新颜色

**`Effect`**

调用端生效

**`Precautions`**

建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                      | Description                              |
| :------- | :---------------------------------------- | :--------------------------------------- |
| `outer?` | [`LinearColor`](Type.Type.LinearColor.md) | 接收结果的 LinearColor 对象 default:null |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

如果 outer 不为空, 返回 outer, 否则返回一个新的 LinearColor 对象
