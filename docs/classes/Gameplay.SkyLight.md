[Gameplay](../modules/Gameplay.Gameplay.md) / SkyLight

# SkyLight <Badge type="tip" text="Class" />

**`Description`**

环境光

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`SkyLight`**

## Table of contents

| Accessors |
| :-----|
| **[intensity](Gameplay.SkyLight.md#intensity)**(): `number` <br> 获取强度范围|
| **[lightColor](Gameplay.SkyLight.md#lightcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取天空光的灯光颜色|

| Methods |
| :-----|

## Accessors

### intensity

• `get` **intensity**(): `number`

**`Description`**

获取强度范围

**`Effect`**

调用端生效

#### Returns

`number`

返回强度范围值

• `set` **intensity**(`newIntensityScale`): `void`

**`Description`**

设置强度范围的值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newIntensityScale` | `number` | 新强度范围值 （0 ~ 100） |

#### Returns

`void`

___

### lightColor

• `get` **lightColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取天空光的灯光颜色

**`Effect`**

调用端生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

天空光的灯光颜色

• `set` **lightColor**(`newLightColor`): `void`

**`Description`**

设置天空光的灯光颜色

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newLightColor` | [`LinearColor`](Type.LinearColor.md) | 新灯光颜色值 |

#### Returns

`void`


## Methods