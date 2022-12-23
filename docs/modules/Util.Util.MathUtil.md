[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Util](Util.md) / [Util](Util.Util.md) / MathUtil

# Namespace: MathUtil

[Util](Util.md).[Util](Util.Util.md).MathUtil

## Table of contents

### Variables

- [D2R](Util.Util.MathUtil.md#d2r)
- [DBL\_DECIMAL\_DIG](Util.Util.MathUtil.md#dbl_decimal_dig)
- [DBL\_DIG](Util.Util.MathUtil.md#dbl_dig)
- [DBL\_EPSILON](Util.Util.MathUtil.md#dbl_epsilon)
- [DBL\_HAS\_SUBNORM](Util.Util.MathUtil.md#dbl_has_subnorm)
- [DBL\_MANT\_DIG](Util.Util.MathUtil.md#dbl_mant_dig)
- [DBL\_MAX](Util.Util.MathUtil.md#dbl_max)
- [DBL\_MAX\_10\_EXP](Util.Util.MathUtil.md#dbl_max_10_exp)
- [DBL\_MAX\_EXP](Util.Util.MathUtil.md#dbl_max_exp)
- [DBL\_MIN](Util.Util.MathUtil.md#dbl_min)
- [DBL\_MIN\_10\_EXP](Util.Util.MathUtil.md#dbl_min_10_exp)
- [DBL\_MIN\_EXP](Util.Util.MathUtil.md#dbl_min_exp)
- [DBL\_RADIX](Util.Util.MathUtil.md#dbl_radix)
- [DBL\_TRUE\_MIN](Util.Util.MathUtil.md#dbl_true_min)
- [EPSILON](Util.Util.MathUtil.md#epsilon)
- [FLOAT\_NON\_FRACTIONAL](Util.Util.MathUtil.md#float_non_fractional)
- [FLT\_DECIMAL\_DIG](Util.Util.MathUtil.md#flt_decimal_dig)
- [FLT\_DIG](Util.Util.MathUtil.md#flt_dig)
- [FLT\_EPSILON](Util.Util.MathUtil.md#flt_epsilon)
- [FLT\_GUARD](Util.Util.MathUtil.md#flt_guard)
- [FLT\_HAS\_SUBNORM](Util.Util.MathUtil.md#flt_has_subnorm)
- [FLT\_MANT\_DIG](Util.Util.MathUtil.md#flt_mant_dig)
- [FLT\_MAX](Util.Util.MathUtil.md#flt_max)
- [FLT\_MAX\_10\_EXP](Util.Util.MathUtil.md#flt_max_10_exp)
- [FLT\_MAX\_EXP](Util.Util.MathUtil.md#flt_max_exp)
- [FLT\_MIN](Util.Util.MathUtil.md#flt_min)
- [FLT\_MIN\_10\_EXP](Util.Util.MathUtil.md#flt_min_10_exp)
- [FLT\_MIN\_EXP](Util.Util.MathUtil.md#flt_min_exp)
- [FLT\_NORMALIZE](Util.Util.MathUtil.md#flt_normalize)
- [FLT\_RADIX](Util.Util.MathUtil.md#flt_radix)
- [FLT\_TRUE\_MIN](Util.Util.MathUtil.md#flt_true_min)
- [HALF\_PI](Util.Util.MathUtil.md#half_pi)
- [INV\_PI](Util.Util.MathUtil.md#inv_pi)
- [R2D](Util.Util.MathUtil.md#r2d)
- [SIGN\_BIT](Util.Util.MathUtil.md#sign_bit)

### Functions

- [clamp](Util.Util.MathUtil.md#clamp)
- [cos](Util.Util.MathUtil.md#cos)
- [degreesToRadians](Util.Util.MathUtil.md#degreestoradians)
- [fmod](Util.Util.MathUtil.md#fmod)
- [lerp](Util.Util.MathUtil.md#lerp)
- [radiansToDegrees](Util.Util.MathUtil.md#radianstodegrees)
- [randomFloat](Util.Util.MathUtil.md#randomfloat)
- [randomInt](Util.Util.MathUtil.md#randomint)
- [sin](Util.Util.MathUtil.md#sin)
- [tan](Util.Util.MathUtil.md#tan)

## Variables

### D2R

• `Const` **D2R**: `number`

**`Description`**

角度转换弧度参数

#### Defined in

Util/index.d.ts:248

___

### DBL\_DECIMAL\_DIG

• `Const` **DBL\_DECIMAL\_DIG**: ``17``

**`Description`**

序列化/反序列化浮点值所要求的十进制精度 (double)

#### Defined in

Util/index.d.ts:136

___

### DBL\_DIG

• `Const` **DBL\_DIG**: ``15``

**`Description`**

文本的往返转换中保留而不会因舍入或溢出发生改变的的十进制位数 (double)

#### Defined in

Util/index.d.ts:140

___

### DBL\_EPSILON

• `Const` **DBL\_EPSILON**: ``2.220446049250313e-16``

**`Description`**

1 和大于 1 的最小浮点数之间的差值。(double)

#### Defined in

Util/index.d.ts:144

___

### DBL\_HAS\_SUBNORM

• `Const` **DBL\_HAS\_SUBNORM**: ``1``

**`Description`**

指明类型是否支持非正规数值：-1 为不确定，0 为不支持，1 为支持。 (double)

#### Defined in

Util/index.d.ts:148

___

### DBL\_MANT\_DIG

• `Const` **DBL\_MANT\_DIG**: ``53``

**`Description`**

有效数字（尾数）的位数(double)

#### Defined in

Util/index.d.ts:152

___

### DBL\_MAX

• `Const` **DBL\_MAX**: ``1.7976931348623157e+308``

**`Description`**

最大的有效浮点数的值（为正数），也即浮点数的最大值。(double)

#### Defined in

Util/index.d.ts:156

___

### DBL\_MAX\_10\_EXP

• `Const` **DBL\_MAX\_10\_EXP**: ``308``

**`Description`**

分别为能够使 10 的该整数减一次幂为可表示的有限的最大正整数 (double)

#### Defined in

Util/index.d.ts:160

___

### DBL\_MAX\_EXP

• `Const` **DBL\_MAX\_EXP**: ``1024``

**`Description`**

最大二进制指数 (double)

#### Defined in

Util/index.d.ts:164

___

### DBL\_MIN

• `Const` **DBL\_MIN**: ``2.2250738585072014e-308``

**`Description`**

最小规格化正数值 (double)

#### Defined in

Util/index.d.ts:168

___

### DBL\_MIN\_10\_EXP

• `Const` **DBL\_MIN\_10\_EXP**: ``-307``

**`Description`**

能够使 10 的该整数减一次幂为规格化的最小负整数 (double)

#### Defined in

Util/index.d.ts:172

___

### DBL\_MIN\_EXP

• `Const` **DBL\_MIN\_EXP**: ``-1021``

**`Description`**

能够使FLT_RADIX 的该整数减一次幂为规格化的最小负整数 (double)

#### Defined in

Util/index.d.ts:176

___

### DBL\_RADIX

• `Const` **DBL\_RADIX**: ``2``

**`Description`**

基数(进制)(double)

#### Defined in

Util/index.d.ts:180

___

### DBL\_TRUE\_MIN

• `Const` **DBL\_TRUE\_MIN**: ``5e-324``

**`Description`**

最小正数值(double)

#### Defined in

Util/index.d.ts:184

___

### EPSILON

• `Const` **EPSILON**: ``1e-7``

**`Description`**

最小误差数

#### Defined in

Util/index.d.ts:272

___

### FLOAT\_NON\_FRACTIONAL

• `Const` **FLOAT\_NON\_FRACTIONAL**: ``8388608``

**`Description`**

所有大于或等于此值的单精度浮点数都没有小数

#### Defined in

Util/index.d.ts:268

___

### FLT\_DECIMAL\_DIG

• `Const` **FLT\_DECIMAL\_DIG**: ``9``

**`Description`**

序列化/反序列化浮点值所要求的十进制精度 (float)

#### Defined in

Util/index.d.ts:188

___

### FLT\_DIG

• `Const` **FLT\_DIG**: ``6``

**`Description`**

文本的往返转换中保留而不会因舍入或溢出发生改变的的十进制位数 (float)

#### Defined in

Util/index.d.ts:192

___

### FLT\_EPSILON

• `Const` **FLT\_EPSILON**: ``1.192092896e-7``

**`Description`**

1 和大于 1 的最小浮点数之间的差值。(float)

#### Defined in

Util/index.d.ts:196

___

### FLT\_GUARD

• `Const` **FLT\_GUARD**: ``0``

**`Description`**

算术结果中是否使用保护位(例如 0)

#### Defined in

Util/index.d.ts:204

___

### FLT\_HAS\_SUBNORM

• `Const` **FLT\_HAS\_SUBNORM**: ``1``

**`Description`**

指明类型是否支持非正规数值：-1 为不确定，0 为不支持，1 为支持。

#### Defined in

Util/index.d.ts:200

___

### FLT\_MANT\_DIG

• `Const` **FLT\_MANT\_DIG**: ``24``

**`Description`**

有效数字（尾数）的位数 (float)

#### Defined in

Util/index.d.ts:208

___

### FLT\_MAX

• `Const` **FLT\_MAX**: ``3.402823466e+38``

**`Description`**

最大的有效浮点数的值(为正数)，也即浮点数的最大值。(float)

#### Defined in

Util/index.d.ts:212

___

### FLT\_MAX\_10\_EXP

• `Const` **FLT\_MAX\_10\_EXP**: ``38``

**`Description`**

转换成十进制形式后，规格化浮点数的指数的最大值（为正数）。 (float)

#### Defined in

Util/index.d.ts:216

___

### FLT\_MAX\_EXP

• `Const` **FLT\_MAX\_EXP**: ``128``

**`Description`**

最大二进制指数 (float)

#### Defined in

Util/index.d.ts:220

___

### FLT\_MIN

• `Const` **FLT\_MIN**: ``1.175494351e-38``

**`Description`**

最小正规值 (float)

#### Defined in

Util/index.d.ts:224

___

### FLT\_MIN\_10\_EXP

• `Const` **FLT\_MIN\_10\_EXP**: ``-37``

**`Description`**

最小十进制指数 (float)

#### Defined in

Util/index.d.ts:228

___

### FLT\_MIN\_EXP

• `Const` **FLT\_MIN\_EXP**: ``-125``

**`Description`**

最小二进制指数 (float)

#### Defined in

Util/index.d.ts:232

___

### FLT\_NORMALIZE

• `Const` **FLT\_NORMALIZE**: ``0``

**`Description`**

指示应始终规范化浮点数。

#### Defined in

Util/index.d.ts:236

___

### FLT\_RADIX

• `Const` **FLT\_RADIX**: ``2``

**`Description`**

基数(进制)(float)

#### Defined in

Util/index.d.ts:240

___

### FLT\_TRUE\_MIN

• `Const` **FLT\_TRUE\_MIN**: ``1.401298464e-45``

**`Description`**

最小正数值 (float)

#### Defined in

Util/index.d.ts:244

___

### HALF\_PI

• `Const` **HALF\_PI**: ``1.57079632679``

**`Description`**

PI/2

#### Defined in

Util/index.d.ts:260

___

### INV\_PI

• `Const` **INV\_PI**: ``0.31830988618``

**`Description`**

1/PI

#### Defined in

Util/index.d.ts:256

___

### R2D

• `Const` **R2D**: `number`

**`Description`**

弧度转换角度参数

#### Defined in

Util/index.d.ts:252

___

### SIGN\_BIT

• `Const` **SIGN\_BIT**: `number`

**`Description`**

字节偏移

#### Defined in

Util/index.d.ts:264

## Functions

### clamp

▸ **clamp**(`a`, `min`, `max`): `number`

**`Description`**

数值a在最小值和最大值之间，包括最小值和最大值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | usage:数值a |
| `min` | `number` | usage:最小值 |
| `max` | `number` | usage:最大值 |

#### Returns

`number`

计算结果

#### Defined in

Util/index.d.ts:326

___

### cos

▸ **cos**(`a`): `number`

**`Description`**

计算cos值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | usage:待机算的数值a |

#### Returns

`number`

cos值

#### Defined in

Util/index.d.ts:286

___

### degreesToRadians

▸ **degreesToRadians**(`a`): `number`

**`Description`**

根据输入的度数返回弧度值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | usage:度数 |

#### Returns

`number`

弧度值

#### Defined in

Util/index.d.ts:300

___

### fmod

▸ **fmod**(`x`, `y`): `number`

**`Description`**

返回 数值x 除以 数值y 的余数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | usage:数值x |
| `y` | `number` | usage:数值y |

#### Returns

`number`

数值x 除以 数值y 的余数

#### Defined in

Util/index.d.ts:334

___

### lerp

▸ **lerp**(`a`, `b`, `alpha`): `number`

**`Description`**

基于 alpha 在 数值a 和 数值b 之间线性插值

**`Effect`**

调用端生效

**`Precautions`**

alpha=0 时 数值a 的 100% 和 alpha=1 时 数值b 的 100%

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | usage:数值a |
| `b` | `number` | usage:数值b |
| `alpha` | `number` | usage:插值 |

#### Returns

`number`

计算结果

#### Defined in

Util/index.d.ts:317

___

### radiansToDegrees

▸ **radiansToDegrees**(`a`): `number`

**`Description`**

根据输入的弧度值返回度数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | usage:弧度值 |

#### Returns

`number`

度数

#### Defined in

Util/index.d.ts:307

___

### randomFloat

▸ **randomFloat**(`min`, `max`): `number`

**`Description`**

获取随机范围内浮点数[包含min, 不包含max)

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | usage:最小值 |
| `max` | `number` | usage:最大值 |

#### Returns

`number`

随机范围内的浮点数

#### Defined in

Util/index.d.ts:342

___

### randomInt

▸ **randomInt**(`min`, `max`): `number`

**`Description`**

获取随机范围内整数[包含min, 不包含max)

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | usage:最小值 |
| `max` | `number` | usage:最大值 |

#### Returns

`number`

随机范围内的整数

#### Defined in

Util/index.d.ts:350

___

### sin

▸ **sin**(`a`): `number`

**`Description`**

计算sin值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | usage:待机算的数值a |

#### Returns

`number`

sin值

#### Defined in

Util/index.d.ts:279

___

### tan

▸ **tan**(`a`): `number`

**`Description`**

计算tan值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | usage:待机算的数值a |

#### Returns

`number`

tan值

#### Defined in

Util/index.d.ts:293
