[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2MaterialStyle

# IHumanoidV2MaterialStyle <Badge type="tip" text="Interface" /> 

**`Description`**

人形对象V2材质风格

## Implemented by

- [`HumanoidV2`](../classes/Gameplay.HumanoidV2.md)

## Table of contents

| Methods |
| :-----|
| **[getBodyTattooColor](Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoocolor)**(`number`): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取纹身颜色|
| **[getBodyTattooPositionX](Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositionx)**(`number`): `number` <br> 获取纹身位置左右偏移|
| **[getBodyTattooPositionY](Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositiony)**(`number`): `number` <br> 获取身体纹身位置上下位置|
| **[getBodyTattooRotation](Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoorotation)**(`number`): `number` <br> 获取纹身旋转值|
| **[getBodyTattooType](Gameplay.IHumanoidV2MaterialStyle.md#getbodytattootype)**(`number`): `string` <br> 获取纹身贴图 GUID|
| **[getBodyTattooZoom](Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoozoom)**(`number`): `number` <br> 获取身体纹身位置缩放|
| **[getSkinColor](Gameplay.IHumanoidV2MaterialStyle.md#getskincolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 设置皮肤颜色|
| **[getSkinTexture](Gameplay.IHumanoidV2MaterialStyle.md#getskintexture)**(): `string` <br> 获取皮肤贴图|
| **[setBodyTattooColor](Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoocolor)**(`number`, [`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 身体纹身颜色|
| **[setBodyTattooPositionX](Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositionx)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置左右偏移|
| **[setBodyTattooPositionY](Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositiony)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置上下位置|
| **[setBodyTattooRotation](Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoorotation)**(`number`, `number`, `boolean`): `void` <br> 身体纹旋转|
| **[setBodyTattooType](Gameplay.IHumanoidV2MaterialStyle.md#setbodytattootype)**(`number`, `string`, `boolean`): `void` <br> 身体纹身种类|
| **[setBodyTattooZoom](Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoozoom)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置缩放|
| **[setSkinColor](Gameplay.IHumanoidV2MaterialStyle.md#setskincolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置皮肤颜色|
| **[setSkinTexture](Gameplay.IHumanoidV2MaterialStyle.md#setskintexture)**(`string`, `boolean`): `void` <br> 设置皮肤贴图|

## Methods

### getBodyTattooColor  

▸ **getBodyTattooColor**(`index`): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取纹身颜色

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

纹身颜色

___

### getBodyTattooPositionX  

▸ **getBodyTattooPositionX**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取纹身位置左右偏移

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |

#### Returns

`number`

纹身左右位置偏移值

___

### getBodyTattooPositionY  

▸ **getBodyTattooPositionY**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取身体纹身位置上下位置

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |

#### Returns

`number`

纹身上线位置值

___

### getBodyTattooRotation  

▸ **getBodyTattooRotation**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取纹身旋转值

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |

#### Returns

`number`

纹身旋转值

___

### getBodyTattooType  

▸ **getBodyTattooType**(`index`): `string` <Badge type="tip" text="other" />

**`Description`**

获取纹身贴图 GUID

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |

#### Returns

`string`

纹身贴图GUID

___

### getBodyTattooZoom  

▸ **getBodyTattooZoom**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取身体纹身位置缩放

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |

#### Returns

`number`

纹身缩放值

___

### getSkinColor  

▸ **getSkinColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

设置皮肤颜色

客户端生效

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getSkinTexture  

▸ **getSkinTexture**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取皮肤贴图

客户端生效

#### Returns

`string`

皮肤贴图GUID

___

### setBodyTattooColor  

▸ **setBodyTattooColor**(`index`, `color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

身体纹身颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  纹身index |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) |  颜色值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setBodyTattooPositionX  

▸ **setBodyTattooPositionX**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

身体纹身位置左右偏移

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` | 偏移值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setBodyTattooPositionY  

▸ **setBodyTattooPositionY**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

身体纹身位置上下位置

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` | 偏移值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setBodyTattooRotation  

▸ **setBodyTattooRotation**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

身体纹旋转

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` | 旋转值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setBodyTattooType  

▸ **setBodyTattooType**(`index`, `GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

身体纹身种类

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |
| `GUID` | `string` | 类型贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setBodyTattooZoom  

▸ **setBodyTattooZoom**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

身体纹身位置缩放

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` |  缩放值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setSkinColor  

▸ **setSkinColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置皮肤颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) |  颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setSkinTexture  

▸ **setSkinTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置皮肤贴图

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | true 同步; false 不同步 |

