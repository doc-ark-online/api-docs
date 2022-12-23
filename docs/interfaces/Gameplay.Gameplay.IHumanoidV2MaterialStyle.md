[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2MaterialStyle

# Interface: IHumanoidV2MaterialStyle

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).IHumanoidV2MaterialStyle

**`Description`**

人形对象V2材质风格

**`Author`**

邓广

## Implemented by

- [`HumanoidV2`](../classes/Gameplay.Gameplay.HumanoidV2.md)

## Table of contents

### Methods

- [getBodyTattooColor](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoocolor)
- [getBodyTattooPositionX](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositionx)
- [getBodyTattooPositionY](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositiony)
- [getBodyTattooRotation](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoorotation)
- [getBodyTattooType](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattootype)
- [getBodyTattooZoom](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoozoom)
- [getSkinColor](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getskincolor)
- [getSkinTexture](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getskintexture)
- [setBodyTattooColor](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoocolor)
- [setBodyTattooPositionX](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositionx)
- [setBodyTattooPositionY](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositiony)
- [setBodyTattooRotation](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoorotation)
- [setBodyTattooType](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattootype)
- [setBodyTattooZoom](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoozoom)
- [setSkinColor](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setskincolor)
- [setSkinTexture](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setskintexture)

## Methods

### getBodyTattooColor

▸ **getBodyTattooColor**(`index`): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取纹身颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | usage:纹身Index |

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

纹身颜色

#### Defined in

Gameplay/index.d.ts:3609

___

### getBodyTattooPositionX

▸ **getBodyTattooPositionX**(`index`): `number`

**`Description`**

获取纹身位置左右偏移

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | usage:纹身index |

#### Returns

`number`

纹身左右位置偏移值

#### Defined in

Gameplay/index.d.ts:3644

___

### getBodyTattooPositionY

▸ **getBodyTattooPositionY**(`index`): `number`

**`Description`**

获取身体纹身位置上下位置

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | usage:纹身index |

#### Returns

`number`

纹身上线位置值

#### Defined in

Gameplay/index.d.ts:3661

___

### getBodyTattooRotation

▸ **getBodyTattooRotation**(`index`): `number`

**`Description`**

获取纹身旋转值

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | usage:纹身index |

#### Returns

`number`

纹身旋转值

#### Defined in

Gameplay/index.d.ts:3695

___

### getBodyTattooType

▸ **getBodyTattooType**(`index`): `string`

**`Description`**

获取纹身贴图 guid

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | usage:纹身Index |

#### Returns

`string`

纹身贴图guid

#### Defined in

Gameplay/index.d.ts:3627

___

### getBodyTattooZoom

▸ **getBodyTattooZoom**(`index`): `number`

**`Description`**

获取身体纹身位置缩放

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | usage:纹身index |

#### Returns

`number`

纹身缩放值

#### Defined in

Gameplay/index.d.ts:3678

___

### getSkinColor

▸ **getSkinColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

设置皮肤颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3573

___

### getSkinTexture

▸ **getSkinTexture**(): `string`

**`Description`**

获取皮肤贴图

**`Effect`**

客户端生效

#### Returns

`string`

皮肤贴图guid

#### Defined in

Gameplay/index.d.ts:3588

___

### setBodyTattooColor

▸ **setBodyTattooColor**(`index`, `color`, `sync`): `void`

**`Description`**

身体纹身颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | usage: 纹身index |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage: 颜色值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3598

___

### setBodyTattooPositionX

▸ **setBodyTattooPositionX**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹身位置左右偏移

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | usage:纹身Index |
| `value` | `number` | usage:偏移值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3637

___

### setBodyTattooPositionY

▸ **setBodyTattooPositionY**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹身位置上下位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | usage:纹身Index |
| `value` | `number` | usage:偏移值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3654

___

### setBodyTattooRotation

▸ **setBodyTattooRotation**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹旋转

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | usage:纹身Index |
| `value` | `number` | usage:旋转值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3688

___

### setBodyTattooType

▸ **setBodyTattooType**(`index`, `guid`, `sync`): `void`

**`Description`**

身体纹身种类

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | usage:纹身index |
| `guid` | `string` | usage:类型贴图guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3619

___

### setBodyTattooZoom

▸ **setBodyTattooZoom**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹身位置缩放

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | usage:纹身Index |
| `value` | `number` | usage: 缩放值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3671

___

### setSkinColor

▸ **setSkinColor**(`color`, `sync`): `void`

**`Description`**

设置皮肤颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage: 颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3567

___

### setSkinTexture

▸ **setSkinTexture**(`guid`, `sync`): `void`

**`Description`**

设置皮肤贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:模型Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3582
