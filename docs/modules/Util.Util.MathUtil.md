[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Util](Util.md) / [Util](Util.Util.md) / MathUtil

# Namespace: MathUtil

[Util](Util.md).[Util](Util.Util.md).MathUtil

## Table of contents

### Variables

- [D2R](Util.Util.MathUtil.md#d2r)
- [DBL_DECIMAL_DIG](Util.Util.MathUtil.md#dbl_decimal_dig)
- [DBL_DIG](Util.Util.MathUtil.md#dbl_dig)
- [DBL_EPSILON](Util.Util.MathUtil.md#dbl_epsilon)
- [DBL_HAS_SUBNORM](Util.Util.MathUtil.md#dbl_has_subnorm)
- [DBL_MANT_DIG](Util.Util.MathUtil.md#dbl_mant_dig)
- [DBL_MAX](Util.Util.MathUtil.md#dbl_max)
- [DBL_MAX_10_EXP](Util.Util.MathUtil.md#dbl_max_10_exp)
- [DBL_MAX_EXP](Util.Util.MathUtil.md#dbl_max_exp)
- [DBL_MIN](Util.Util.MathUtil.md#dbl_min)
- [DBL_MIN_10_EXP](Util.Util.MathUtil.md#dbl_min_10_exp)
- [DBL_MIN_EXP](Util.Util.MathUtil.md#dbl_min_exp)
- [DBL_RADIX](Util.Util.MathUtil.md#dbl_radix)
- [DBL_TRUE_MIN](Util.Util.MathUtil.md#dbl_true_min)
- [EPSILON](Util.Util.MathUtil.md#epsilon)
- [FLOAT_NON_FRACTIONAL](Util.Util.MathUtil.md#float_non_fractional)
- [FLT_DECIMAL_DIG](Util.Util.MathUtil.md#flt_decimal_dig)
- [FLT_DIG](Util.Util.MathUtil.md#flt_dig)
- [FLT_EPSILON](Util.Util.MathUtil.md#flt_epsilon)
- [FLT_GUARD](Util.Util.MathUtil.md#flt_guard)
- [FLT_HAS_SUBNORM](Util.Util.MathUtil.md#flt_has_subnorm)
- [FLT_MANT_DIG](Util.Util.MathUtil.md#flt_mant_dig)
- [FLT_MAX](Util.Util.MathUtil.md#flt_max)
- [FLT_MAX_10_EXP](Util.Util.MathUtil.md#flt_max_10_exp)
- [FLT_MAX_EXP](Util.Util.MathUtil.md#flt_max_exp)
- [FLT_MIN](Util.Util.MathUtil.md#flt_min)
- [FLT_MIN_10_EXP](Util.Util.MathUtil.md#flt_min_10_exp)
- [FLT_MIN_EXP](Util.Util.MathUtil.md#flt_min_exp)
- [FLT_NORMALIZE](Util.Util.MathUtil.md#flt_normalize)
- [FLT_RADIX](Util.Util.MathUtil.md#flt_radix)
- [FLT_TRUE_MIN](Util.Util.MathUtil.md#flt_true_min)
- [HALF_PI](Util.Util.MathUtil.md#half_pi)
- [INV_PI](Util.Util.MathUtil.md#inv_pi)
- [R2D](Util.Util.MathUtil.md#r2d)
- [SIGN_BIT](Util.Util.MathUtil.md#sign_bit)

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

Util/index.d.ts:270

---

### DBL_DECIMAL_DIG

• `Const` **DBL_DECIMAL_DIG**: `17`

**`Description`**

序列化/反序列化浮点值所要求的十进制精度 (double)

#### Defined in

Util/index.d.ts:158

---

### DBL_DIG

• `Const` **DBL_DIG**: `15`

**`Description`**

文本的往返转换中保留而不会因舍入或溢出发生改变的的十进制位数 (double)

#### Defined in

Util/index.d.ts:162

---

### DBL_EPSILON

• `Const` **DBL_EPSILON**: `2.220446049250313e-16`

**`Description`**

1 和大于 1 的最小浮点数之间的差值。(double)

#### Defined in

Util/index.d.ts:166

---

### DBL_HAS_SUBNORM

• `Const` **DBL_HAS_SUBNORM**: `1`

**`Description`**

指明类型是否支持非正规数值：-1 为不确定，0 为不支持，1 为支持。 (double)

#### Defined in

Util/index.d.ts:170

---

### DBL_MANT_DIG

• `Const` **DBL_MANT_DIG**: `53`

**`Description`**

有效数字（尾数）的位数(double)

#### Defined in

Util/index.d.ts:174

---

### DBL_MAX

• `Const` **DBL_MAX**: `1.7976931348623157e+308`

**`Description`**

最大的有效浮点数的值（为正数），也即浮点数的最大值。(double)

#### Defined in

Util/index.d.ts:178

---

### DBL_MAX_10_EXP

• `Const` **DBL_MAX_10_EXP**: `308`

**`Description`**

分别为能够使 10 的该整数减一次幂为可表示的有限的最大正整数 (double)

#### Defined in

Util/index.d.ts:182

---

### DBL_MAX_EXP

• `Const` **DBL_MAX_EXP**: `1024`

**`Description`**

最大二进制指数 (double)

#### Defined in

Util/index.d.ts:186

---

### DBL_MIN

• `Const` **DBL_MIN**: `2.2250738585072014e-308`

**`Description`**

最小规格化正数值 (double)

#### Defined in

Util/index.d.ts:190

---

### DBL_MIN_10_EXP

• `Const` **DBL_MIN_10_EXP**: `-307`

**`Description`**

能够使 10 的该整数减一次幂为规格化的最小负整数 (double)

#### Defined in

Util/index.d.ts:194

---

### DBL_MIN_EXP

• `Const` **DBL_MIN_EXP**: `-1021`

**`Description`**

能够使 FLT_RADIX 的该整数减一次幂为规格化的最小负整数 (double)

#### Defined in

Util/index.d.ts:198

---

### DBL_RADIX

• `Const` **DBL_RADIX**: `2`

**`Description`**

基数(进制)(double)

#### Defined in

Util/index.d.ts:202

---

### DBL_TRUE_MIN

• `Const` **DBL_TRUE_MIN**: `5e-324`

**`Description`**

最小正数值(double)

#### Defined in

Util/index.d.ts:206

---

### EPSILON

• `Const` **EPSILON**: `1e-7`

**`Description`**

最小误差数

#### Defined in

Util/index.d.ts:294

---

### FLOAT_NON_FRACTIONAL

• `Const` **FLOAT_NON_FRACTIONAL**: `8388608`

**`Description`**

所有大于或等于此值的单精度浮点数都没有小数

#### Defined in

Util/index.d.ts:290

---

### FLT_DECIMAL_DIG

• `Const` **FLT_DECIMAL_DIG**: `9`

**`Description`**

序列化/反序列化浮点值所要求的十进制精度 (float)

#### Defined in

Util/index.d.ts:210

---

### FLT_DIG

• `Const` **FLT_DIG**: `6`

**`Description`**

文本的往返转换中保留而不会因舍入或溢出发生改变的的十进制位数 (float)

#### Defined in

Util/index.d.ts:214

---

### FLT_EPSILON

• `Const` **FLT_EPSILON**: `1.192092896e-7`

**`Description`**

1 和大于 1 的最小浮点数之间的差值。(float)

#### Defined in

Util/index.d.ts:218

---

### FLT_GUARD

• `Const` **FLT_GUARD**: `0`

**`Description`**

算术结果中是否使用保护位(例如 0)

#### Defined in

Util/index.d.ts:226

---

### FLT_HAS_SUBNORM

• `Const` **FLT_HAS_SUBNORM**: `1`

**`Description`**

指明类型是否支持非正规数值：-1 为不确定，0 为不支持，1 为支持。

#### Defined in

Util/index.d.ts:222

---

### FLT_MANT_DIG

• `Const` **FLT_MANT_DIG**: `24`

**`Description`**

有效数字（尾数）的位数 (float)

#### Defined in

Util/index.d.ts:230

---

### FLT_MAX

• `Const` **FLT_MAX**: `3.402823466e+38`

**`Description`**

最大的有效浮点数的值(为正数)，也即浮点数的最大值。(float)

#### Defined in

Util/index.d.ts:234

---

### FLT_MAX_10_EXP

• `Const` **FLT_MAX_10_EXP**: `38`

**`Description`**

转换成十进制形式后，规格化浮点数的指数的最大值（为正数）。 (float)

#### Defined in

Util/index.d.ts:238

---

### FLT_MAX_EXP

• `Const` **FLT_MAX_EXP**: `128`

**`Description`**

最大二进制指数 (float)

#### Defined in

Util/index.d.ts:242

---

### FLT_MIN

• `Const` **FLT_MIN**: `1.175494351e-38`

**`Description`**

最小正规值 (float)

#### Defined in

Util/index.d.ts:246

---

### FLT_MIN_10_EXP

• `Const` **FLT_MIN_10_EXP**: `-37`

**`Description`**

最小十进制指数 (float)

#### Defined in

Util/index.d.ts:250

---

### FLT_MIN_EXP

• `Const` **FLT_MIN_EXP**: `-125`

**`Description`**

最小二进制指数 (float)

#### Defined in

Util/index.d.ts:254

---

### FLT_NORMALIZE

• `Const` **FLT_NORMALIZE**: `0`

**`Description`**

指示应始终规范化浮点数。

#### Defined in

Util/index.d.ts:258

---

### FLT_RADIX

• `Const` **FLT_RADIX**: `2`

**`Description`**

基数(进制)(float)

#### Defined in

Util/index.d.ts:262

---

### FLT_TRUE_MIN

• `Const` **FLT_TRUE_MIN**: `1.401298464e-45`

**`Description`**

最小正数值 (float)

#### Defined in

Util/index.d.ts:266

---

### HALF_PI

• `Const` **HALF_PI**: `1.57079632679`

**`Description`**

PI/2

#### Defined in

Util/index.d.ts:282

---

### INV_PI

• `Const` **INV_PI**: `0.31830988618`

**`Description`**

1/PI

#### Defined in

Util/index.d.ts:278

---

### R2D

• `Const` **R2D**: `number`

**`Description`**

弧度转换角度参数

#### Defined in

Util/index.d.ts:274

---

### SIGN_BIT

• `Const` **SIGN_BIT**: `number`

**`Description`**

字节偏移

#### Defined in

Util/index.d.ts:286

## Functions

### clamp

▸ **clamp**(`a`, `min`, `max`): `number`

**`Description`**

数值 a 在最小值和最大值之间，包括最小值和最大值

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description  |
| :---- | :------- | :----------- |
| `a`   | `number` | usage:数值 a |
| `min` | `number` | usage:最小值 |
| `max` | `number` | usage:最大值 |

#### Returns

`number`

计算结果

#### Defined in

Util/index.d.ts:348

---

### cos

▸ **cos**(`a`): `number`

**`Description`**

计算 cos 值

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description          |
| :--- | :------- | :------------------- |
| `a`  | `number` | usage:待机算的数值 a |

#### Returns

`number`

cos 值

#### Defined in

Util/index.d.ts:308

---

### degreesToRadians

▸ **degreesToRadians**(`a`): `number`

**`Description`**

根据输入的度数返回弧度值

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `a`  | `number` | usage:度数  |

#### Returns

`number`

弧度值

#### Defined in

Util/index.d.ts:322

---

### fmod

▸ **fmod**(`x`, `y`): `number`

**`Description`**

返回 数值 x 除以 数值 y 的余数

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description  |
| :--- | :------- | :----------- |
| `x`  | `number` | usage:数值 x |
| `y`  | `number` | usage:数值 y |

#### Returns

`number`

数值 x 除以 数值 y 的余数

#### Defined in

Util/index.d.ts:356

---

### lerp

▸ **lerp**(`a`, `b`, `alpha`): `number`

**`Description`**

基于 alpha 在 数值 a 和 数值 b 之间线性插值

**`Effect`**

调用端生效

**`Precautions`**

alpha=0 时 数值 a 的 100% 和 alpha=1 时 数值 b 的 100%

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `a`     | `number` | usage:数值 a |
| `b`     | `number` | usage:数值 b |
| `alpha` | `number` | usage:插值   |

#### Returns

`number`

计算结果

#### Defined in

Util/index.d.ts:339

---

### radiansToDegrees

▸ **radiansToDegrees**(`a`): `number`

**`Description`**

根据输入的弧度值返回度数

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description  |
| :--- | :------- | :----------- |
| `a`  | `number` | usage:弧度值 |

#### Returns

`number`

度数

#### Defined in

Util/index.d.ts:329

---

### randomFloat

▸ **randomFloat**(`min`, `max`): `number`

**`Description`**

获取随机范围内浮点数[包含 min, 不包含 max)

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description  |
| :---- | :------- | :----------- |
| `min` | `number` | usage:最小值 |
| `max` | `number` | usage:最大值 |

#### Returns

`number`

随机范围内的浮点数

#### Defined in

Util/index.d.ts:364

---

### randomInt

▸ **randomInt**(`min`, `max`): `number`

**`Description`**

获取随机范围内整数[包含 min, 不包含 max)

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description  |
| :---- | :------- | :----------- |
| `min` | `number` | usage:最小值 |
| `max` | `number` | usage:最大值 |

#### Returns

`number`

随机范围内的整数

#### Defined in

Util/index.d.ts:372

---

### sin

▸ **sin**(`a`): `number`

**`Description`**

计算 sin 值

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description          |
| :--- | :------- | :------------------- |
| `a`  | `number` | usage:待机算的数值 a |

#### Returns

`number`

sin 值

#### Defined in

Util/index.d.ts:301

---

### tan

▸ **tan**(`a`): `number`

**`Description`**

计算 tan 值

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description          |
| :--- | :------- | :------------------- |
| `a`  | `number` | usage:待机算的数值 a |

#### Returns

`number`

tan 值

#### Defined in

Util/index.d.ts:315
