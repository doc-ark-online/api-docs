[Util](Util.Util.md) / MathUtil

# MathUtil <Badge type="tip" text="Namespace" />

## Table of contents

| Variables                                                                                                                                       |
| :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **[D2R](Util.Util.MathUtil.md#d2r)**: `number` <br> 角度转换弧度参数                                                                            |
| **[DBL_DECIMAL_DIG](Util.Util.MathUtil.md#dbl_decimal_dig)**: `17` <br> 序列化/反序列化浮点值所要求的十进制精度 (double)                        |
| **[DBL_DIG](Util.Util.MathUtil.md#dbl_dig)**: `15` <br> 文本的往返转换中保留而不会因舍入或溢出发生改变的的十进制位数 (double)                   |
| **[DBL_EPSILON](Util.Util.MathUtil.md#dbl_epsilon)**: `2.220446049250313e-16` <br> 1 和大于 1 的最小浮点数之间的差值。(double)                  |
| **[DBL_HAS_SUBNORM](Util.Util.MathUtil.md#dbl_has_subnorm)**: `1` <br> 指明类型是否支持非正规数值：-1 为不确定，0 为不支持，1 为支持。 (double) |
| **[DBL_MANT_DIG](Util.Util.MathUtil.md#dbl_mant_dig)**: `53` <br> 有效数字（尾数）的位数(double)                                                |
| **[DBL_MAX](Util.Util.MathUtil.md#dbl_max)**: `1.7976931348623157e+308` <br> 最大的有效浮点数的值（为正数），也即浮点数的最大值。(double)       |
| **[DBL_MAX_10_EXP](Util.Util.MathUtil.md#dbl_max_10_exp)**: `308` <br> 分别为能够使 10 的该整数减一次幂为可表示的有限的最大正整数 (double)      |
| **[DBL_MAX_EXP](Util.Util.MathUtil.md#dbl_max_exp)**: `1024` <br> 最大二进制指数 (double)                                                       |
| **[DBL_MIN](Util.Util.MathUtil.md#dbl_min)**: `2.2250738585072014e-308` <br> 最小规格化正数值 (double)                                          |
| **[DBL_MIN_10_EXP](Util.Util.MathUtil.md#dbl_min_10_exp)**: `-307` <br> 能够使 10 的该整数减一次幂为规格化的最小负整数 (double)                 |
| **[DBL_MIN_EXP](Util.Util.MathUtil.md#dbl_min_exp)**: `-1021` <br> 能够使 FLT_RADIX 的该整数减一次幂为规格化的最小负整数 (double)               |
| **[DBL_RADIX](Util.Util.MathUtil.md#dbl_radix)**: `2` <br> 基数(进制)(double)                                                                   |
| **[DBL_TRUE_MIN](Util.Util.MathUtil.md#dbl_true_min)**: `5e-324` <br> 最小正数值(double)                                                        |
| **[EPSILON](Util.Util.MathUtil.md#epsilon)**: `1e-7` <br> 最小误差数                                                                            |
| **[FLOAT_NON_FRACTIONAL](Util.Util.MathUtil.md#float_non_fractional)**: `8388608` <br> 所有大于或等于此值的单精度浮点数都没有小数               |
| **[FLT_DECIMAL_DIG](Util.Util.MathUtil.md#flt_decimal_dig)**: `9` <br> 序列化/反序列化浮点值所要求的十进制精度 (float)                          |
| **[FLT_DIG](Util.Util.MathUtil.md#flt_dig)**: `6` <br> 文本的往返转换中保留而不会因舍入或溢出发生改变的的十进制位数 (float)                     |
| **[FLT_EPSILON](Util.Util.MathUtil.md#flt_epsilon)**: `1.192092896e-7` <br> 1 和大于 1 的最小浮点数之间的差值。(float)                          |
| **[FLT_GUARD](Util.Util.MathUtil.md#flt_guard)**: `0` <br> 算术结果中是否使用保护位(例如 0)                                                     |
| **[FLT_HAS_SUBNORM](Util.Util.MathUtil.md#flt_has_subnorm)**: `1` <br> 指明类型是否支持非正规数值：-1 为不确定，0 为不支持，1 为支持。          |
| **[FLT_MANT_DIG](Util.Util.MathUtil.md#flt_mant_dig)**: `24` <br> 有效数字（尾数）的位数 (float)                                                |
| **[FLT_MAX](Util.Util.MathUtil.md#flt_max)**: `3.402823466e+38` <br> 最大的有效浮点数的值(为正数)，也即浮点数的最大值。(float)                  |
| **[FLT_MAX_10_EXP](Util.Util.MathUtil.md#flt_max_10_exp)**: `38` <br> 转换成十进制形式后，规格化浮点数的指数的最大值（为正数）。 (float)        |
| **[FLT_MAX_EXP](Util.Util.MathUtil.md#flt_max_exp)**: `128` <br> 最大二进制指数 (float)                                                         |
| **[FLT_MIN](Util.Util.MathUtil.md#flt_min)**: `1.175494351e-38` <br> 最小正规值 (float)                                                         |
| **[FLT_MIN_10_EXP](Util.Util.MathUtil.md#flt_min_10_exp)**: `-37` <br> 最小十进制指数 (float)                                                   |
| **[FLT_MIN_EXP](Util.Util.MathUtil.md#flt_min_exp)**: `-125` <br> 最小二进制指数 (float)                                                        |
| **[FLT_NORMALIZE](Util.Util.MathUtil.md#flt_normalize)**: `0` <br> 指示应始终规范化浮点数。                                                     |
| **[FLT_RADIX](Util.Util.MathUtil.md#flt_radix)**: `2` <br> 基数(进制)(float)                                                                    |
| **[FLT_TRUE_MIN](Util.Util.MathUtil.md#flt_true_min)**: `1.401298464e-45` <br> 最小正数值 (float)                                               |
| **[HALF_PI](Util.Util.MathUtil.md#half_pi)**: `1.57079632679` <br> PI/2                                                                         |
| **[INV_PI](Util.Util.MathUtil.md#inv_pi)**: `0.31830988618` <br> 1/PI                                                                           |
| **[R2D](Util.Util.MathUtil.md#r2d)**: `number` <br> 弧度转换角度参数                                                                            |
| **[SIGN_BIT](Util.Util.MathUtil.md#sign_bit)**: `number` <br> 字节偏移                                                                          |

| Functions                                                                                                                             |
| :------------------------------------------------------------------------------------------------------------------------------------ |
| **[clamp](Util.Util.MathUtil.md#clamp)**(`number`, `number`, `number`): `number` <br> 数值 a 在最小值和最大值之间，包括最小值和最大值 |
| **[cos](Util.Util.MathUtil.md#cos)**(`number`): `number` <br> 计算 cos 值                                                             |
| **[degreesToRadians](Util.Util.MathUtil.md#degreestoradians)**(`number`): `number` <br> 根据输入的度数返回弧度值                      |
| **[fmod](Util.Util.MathUtil.md#fmod)**(`number`, `number`): `number` <br> 返回 数值 x 除以 数值 y 的余数                              |
| **[lerp](Util.Util.MathUtil.md#lerp)**(`number`, `number`, `number`): `number` <br> 基于 alpha 在 数值 a 和 数值 b 之间线性插值       |
| **[radiansToDegrees](Util.Util.MathUtil.md#radianstodegrees)**(`number`): `number` <br> 根据输入的弧度值返回度数                      |
| **[randomFloat](Util.Util.MathUtil.md#randomfloat)**(`number`, `number`): `number` <br> 获取随机范围内浮点数[包含 min, 不包含 max)    |
| **[randomInt](Util.Util.MathUtil.md#randomint)**(`number`, `number`): `number` <br> 获取随机范围内整数[包含 min, 不包含 max)          |
| **[sin](Util.Util.MathUtil.md#sin)**(`number`): `number` <br> 计算 sin 值                                                             |
| **[tan](Util.Util.MathUtil.md#tan)**(`number`): `number` <br> 计算 tan 值                                                             |

## Variables

### D2R

• `Const` **D2R**: `number`

**`Description`**

角度转换弧度参数

---

### DBL_DECIMAL_DIG

• `Const` **DBL_DECIMAL_DIG**: `17`

**`Description`**

序列化/反序列化浮点值所要求的十进制精度 (double)

---

### DBL_DIG

• `Const` **DBL_DIG**: `15`

**`Description`**

文本的往返转换中保留而不会因舍入或溢出发生改变的的十进制位数 (double)

---

### DBL_EPSILON

• `Const` **DBL_EPSILON**: `2.220446049250313e-16`

**`Description`**

1 和大于 1 的最小浮点数之间的差值。(double)

---

### DBL_HAS_SUBNORM

• `Const` **DBL_HAS_SUBNORM**: `1`

**`Description`**

指明类型是否支持非正规数值：-1 为不确定，0 为不支持，1 为支持。 (double)

---

### DBL_MANT_DIG

• `Const` **DBL_MANT_DIG**: `53`

**`Description`**

有效数字（尾数）的位数(double)

---

### DBL_MAX

• `Const` **DBL_MAX**: `1.7976931348623157e+308`

**`Description`**

最大的有效浮点数的值（为正数），也即浮点数的最大值。(double)

---

### DBL_MAX_10_EXP

• `Const` **DBL_MAX_10_EXP**: `308`

**`Description`**

分别为能够使 10 的该整数减一次幂为可表示的有限的最大正整数 (double)

---

### DBL_MAX_EXP

• `Const` **DBL_MAX_EXP**: `1024`

**`Description`**

最大二进制指数 (double)

---

### DBL_MIN

• `Const` **DBL_MIN**: `2.2250738585072014e-308`

**`Description`**

最小规格化正数值 (double)

---

### DBL_MIN_10_EXP

• `Const` **DBL_MIN_10_EXP**: `-307`

**`Description`**

能够使 10 的该整数减一次幂为规格化的最小负整数 (double)

---

### DBL_MIN_EXP

• `Const` **DBL_MIN_EXP**: `-1021`

**`Description`**

能够使 FLT_RADIX 的该整数减一次幂为规格化的最小负整数 (double)

---

### DBL_RADIX

• `Const` **DBL_RADIX**: `2`

**`Description`**

基数(进制)(double)

---

### DBL_TRUE_MIN

• `Const` **DBL_TRUE_MIN**: `5e-324`

**`Description`**

最小正数值(double)

---

### EPSILON

• `Const` **EPSILON**: `1e-7`

**`Description`**

最小误差数

---

### FLOAT_NON_FRACTIONAL

• `Const` **FLOAT_NON_FRACTIONAL**: `8388608`

**`Description`**

所有大于或等于此值的单精度浮点数都没有小数

---

### FLT_DECIMAL_DIG

• `Const` **FLT_DECIMAL_DIG**: `9`

**`Description`**

序列化/反序列化浮点值所要求的十进制精度 (float)

---

### FLT_DIG

• `Const` **FLT_DIG**: `6`

**`Description`**

文本的往返转换中保留而不会因舍入或溢出发生改变的的十进制位数 (float)

---

### FLT_EPSILON

• `Const` **FLT_EPSILON**: `1.192092896e-7`

**`Description`**

1 和大于 1 的最小浮点数之间的差值。(float)

---

### FLT_GUARD

• `Const` **FLT_GUARD**: `0`

**`Description`**

算术结果中是否使用保护位(例如 0)

---

### FLT_HAS_SUBNORM

• `Const` **FLT_HAS_SUBNORM**: `1`

**`Description`**

指明类型是否支持非正规数值：-1 为不确定，0 为不支持，1 为支持。

---

### FLT_MANT_DIG

• `Const` **FLT_MANT_DIG**: `24`

**`Description`**

有效数字（尾数）的位数 (float)

---

### FLT_MAX

• `Const` **FLT_MAX**: `3.402823466e+38`

**`Description`**

最大的有效浮点数的值(为正数)，也即浮点数的最大值。(float)

---

### FLT_MAX_10_EXP

• `Const` **FLT_MAX_10_EXP**: `38`

**`Description`**

转换成十进制形式后，规格化浮点数的指数的最大值（为正数）。 (float)

---

### FLT_MAX_EXP

• `Const` **FLT_MAX_EXP**: `128`

**`Description`**

最大二进制指数 (float)

---

### FLT_MIN

• `Const` **FLT_MIN**: `1.175494351e-38`

**`Description`**

最小正规值 (float)

---

### FLT_MIN_10_EXP

• `Const` **FLT_MIN_10_EXP**: `-37`

**`Description`**

最小十进制指数 (float)

---

### FLT_MIN_EXP

• `Const` **FLT_MIN_EXP**: `-125`

**`Description`**

最小二进制指数 (float)

---

### FLT_NORMALIZE

• `Const` **FLT_NORMALIZE**: `0`

**`Description`**

指示应始终规范化浮点数。

---

### FLT_RADIX

• `Const` **FLT_RADIX**: `2`

**`Description`**

基数(进制)(float)

---

### FLT_TRUE_MIN

• `Const` **FLT_TRUE_MIN**: `1.401298464e-45`

**`Description`**

最小正数值 (float)

---

### HALF_PI

• `Const` **HALF_PI**: `1.57079632679`

**`Description`**

PI/2

---

### INV_PI

• `Const` **INV_PI**: `0.31830988618`

**`Description`**

1/PI

---

### R2D

• `Const` **R2D**: `number`

**`Description`**

弧度转换角度参数

---

### SIGN_BIT

• `Const` **SIGN_BIT**: `number`

**`Description`**

字节偏移

## Functions

### clamp

▸ **clamp**(`a`, `min`, `max`): `number`

**`Description`**

数值 a 在最小值和最大值之间，包括最小值和最大值

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `a`   | `number` | 数值 a      |
| `min` | `number` | 最小值      |
| `max` | `number` | 最大值      |

#### Returns

`number`

计算结果

---

### cos

▸ **cos**(`a`): `number`

**`Description`**

计算 cos 值

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description    |
| :--- | :------- | :------------- |
| `a`  | `number` | 待机算的数值 a |

#### Returns

`number`

cos 值

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
| `a`  | `number` | 度数        |

#### Returns

`number`

弧度值

---

### fmod

▸ **fmod**(`x`, `y`): `number`

**`Description`**

返回 数值 x 除以 数值 y 的余数

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `x`  | `number` | 数值 x      |
| `y`  | `number` | 数值 y      |

#### Returns

`number`

数值 x 除以 数值 y 的余数

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

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `a`     | `number` | 数值 a      |
| `b`     | `number` | 数值 b      |
| `alpha` | `number` | 插值        |

#### Returns

`number`

计算结果

---

### radiansToDegrees

▸ **radiansToDegrees**(`a`): `number`

**`Description`**

根据输入的弧度值返回度数

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `a`  | `number` | 弧度值      |

#### Returns

`number`

度数

---

### randomFloat

▸ **randomFloat**(`min`, `max`): `number`

**`Description`**

获取随机范围内浮点数[包含 min, 不包含 max)

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `min` | `number` | 最小值      |
| `max` | `number` | 最大值      |

#### Returns

`number`

随机范围内的浮点数

---

### randomInt

▸ **randomInt**(`min`, `max`): `number`

**`Description`**

获取随机范围内整数[包含 min, 不包含 max)

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `min` | `number` | 最小值      |
| `max` | `number` | 最大值      |

#### Returns

`number`

随机范围内的整数

---

### sin

▸ **sin**(`a`): `number`

**`Description`**

计算 sin 值

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description    |
| :--- | :------- | :------------- |
| `a`  | `number` | 待机算的数值 a |

#### Returns

`number`

sin 值

---

### tan

▸ **tan**(`a`): `number`

**`Description`**

计算 tan 值

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description    |
| :--- | :------- | :------------- |
| `a`  | `number` | 待机算的数值 a |

#### Returns

`number`

tan 值
