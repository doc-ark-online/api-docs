[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2HeadPart

# IHumanoidV2HeadPart <Badge type="tip" text="Interface" />

**`Description`**

人形对象V2部位

## Hierarchy

- [`IPart`](Gameplay.Gameplay.IPart.md)

  ↳ **`IHumanoidV2HeadPart`**

## Implemented by

- [`HumanoidV2HeadPart`](../classes/Gameplay.Gameplay.HumanoidV2HeadPart.md)

## Table of contents

| Methods |
| :-----|
| **[characterFaceShadow](Gameplay.Gameplay.IHumanoidV2HeadPart.md#characterfaceshadow)**([`Rotation`](../classes/Type.Type.Rotation.md), `number`): `void` <br> 设置模型|
| **[getBlushColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getblushcolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取腮红颜色|
| **[getBlushTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getblushtexture)**(): `string` <br> 获取腮红贴图|
| **[getBrowColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getbrowcolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取眉毛颜色|
| **[getBrowTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getbrowtexture)**(): `string` <br> 获取眉毛|
| **[getEyeHighlightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyehighlightcolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取眼睛高光颜色|
| **[getEyeHighlightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyehighlighttexture)**(): `string` <br> 获取眼睛高光形状|
| **[getEyeShadowColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyeshadowcolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取眼影颜色|
| **[getEyeShadowTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyeshadowtexture)**(): `string` <br> 获取眼影贴图|
| **[getEyeTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyetexture)**(): `string` <br> 获取眼睛贴图|
| **[getEyelashColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyelashcolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取睫毛颜色|
| **[getEyelashTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyelashtexture)**(): `string` <br> 获取睫毛|
| **[getFacialTattooColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoocolor)**(`number`): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取面部纹身颜色|
| **[getFacialTattooPositionX](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoopositionx)**(`number`): `number` <br> 获取面部纹身左右位置|
| **[getFacialTattooPositionY](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoopositiony)**(`number`): `number` <br> 获取面部纹身上下位置|
| **[getFacialTattooRotation](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoorotation)**(`number`): `number` <br> 获取面部纹身旋转|
| **[getFacialTattooType](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattootype)**(`number`): `string` <br> 获取面部纹身种类贴图|
| **[getFacialTattooZoom](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoozoom)**(`number`): `number` <br> 获取面部纹身缩放|
| **[getLeftEyeColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlefteyecolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取左眼睛颜色|
| **[getLipstickColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlipstickcolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取唇膏颜色|
| **[getLipstickTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlipsticktexture)**(): `string` <br> 获取唇膏贴图|
| **[getLowerEyeHighlightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlowereyehighlightcolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取上高光颜色|
| **[getLowerEyeHighlightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlowereyehighlighttexture)**(): `string` <br> 获取下高光种类|
| **[getMesh](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getmesh)**(): `string` <br> 获取部位模型|
| **[getPupilColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilcolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取眼睛瞳孔花纹颜色|
| **[getPupilPositionX](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilpositionx)**(): `number` <br> 获取瞳孔左右位置|
| **[getPupilPositionY](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilpositiony)**(): `number` <br> 获取瞳孔上下位置|
| **[getPupilRotate](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilrotate)**(): `number` <br> 获取瞳孔旋转|
| **[getPupilScale](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilscale)**(): `number` <br> 获取瞳孔大小缩放|
| **[getPupilTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupiltexture)**(): `string` <br> 获取眼睛瞳孔花纹|
| **[getRightEyeColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getrighteyecolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取右眼睛颜色|
| **[getUpperEyeHighlightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getuppereyehighlightcolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取上高光颜色|
| **[getUpperEyeHighlightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getuppereyehighlighttexture)**(): `string` <br> 获取上高光种类|
| **[setBlushColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setblushcolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置腮红颜色|
| **[setBlushTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setblushtexture)**(`string`, `boolean`): `void` <br> 设置腮红贴图|
| **[setBrowColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setbrowcolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置眉毛颜色|
| **[setBrowTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setbrowtexture)**(`string`, `boolean`): `void` <br> 设置眉毛|
| **[setEyeHighlightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyehighlightcolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置眼睛高光颜色|
| **[setEyeHighlightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyehighlighttexture)**(`string`, `boolean`): `void` <br> 设置眼睛高光形状|
| **[setEyeShadowColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyeshadowcolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置眼影颜色|
| **[setEyeShadowTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyeshadowtexture)**(`string`, `boolean`): `void` <br> 设置眼影贴图|
| **[setEyeTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyetexture)**(`string`, `boolean`): `void` <br> 设置眼睛贴图|
| **[setEyelashColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyelashcolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置睫毛颜色|
| **[setEyelashTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyelashtexture)**(`string`, `boolean`): `void` <br> 设置睫毛|
| **[setFacialTattooColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoocolor)**(`number`, [`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置面部纹身颜色|
| **[setFacialTattooPositionX](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoopositionx)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身左右位置|
| **[setFacialTattooPositionY](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoopositiony)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身上下位置|
| **[setFacialTattooRotation](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoorotation)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身旋转|
| **[setFacialTattooType](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattootype)**(`number`, `string`, `boolean`): `void` <br> 设置面部纹身种类贴图|
| **[setFacialTattooZoom](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoozoom)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身缩放|
| **[setLeftEyeColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlefteyecolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置左眼睛颜色|
| **[setLipstickColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlipstickcolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置唇膏颜色|
| **[setLipstickTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlipsticktexture)**(`string`, `boolean`): `void` <br> 设置唇膏贴图|
| **[setLowerEyeHighlightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlowereyehighlightcolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置下高光颜色|
| **[setLowerEyeHighlightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlowereyehighlighttexture)**(`string`, `boolean`): `void` <br> 设置下高光种类|
| **[setMesh](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置部位模型|
| **[setPupilColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilcolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置眼睛瞳孔花纹颜色|
| **[setPupilPositionX](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilpositionx)**(`number`, `boolean`): `void` <br> 设置瞳孔左右位置|
| **[setPupilPositionY](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilpositiony)**(`number`, `boolean`): `void` <br> 设置瞳孔上下位置|
| **[setPupilRotate](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilrotate)**(`number`, `boolean`): `void` <br> 设置瞳孔旋转|
| **[setPupilScale](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilscale)**(`number`, `boolean`): `void` <br> 设置瞳孔大小缩放|
| **[setPupilTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupiltexture)**(`string`, `boolean`): `void` <br> 设置眼睛瞳孔花纹|
| **[setRightEyeColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setrighteyecolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置右眼睛颜色|
| **[setUpperEyeHighlightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setuppereyehighlightcolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置上高光颜色|
| **[setUpperEyeHighlightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setuppereyehighlighttexture)**(`string`, `boolean`): `void` <br> 设置上高光种类|

## Methods

### characterFaceShadow

▸ **characterFaceShadow**(`directLightRotator`, `traceDistance`): `void`

**`Description`**

设置模型

**`Effect`**

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `directLightRotator` | [`Rotation`](../classes/Type.Type.Rotation.md) | 平行光方向 |
| `traceDistance` | `number` | 检测距离 default:默认检测距离 |

#### Returns

`void`

___

### getBlushColor

▸ **getBlushColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取腮红颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

___

### getBlushTexture

▸ **getBlushTexture**(): `string`

**`Description`**

获取腮红贴图

**`Effect`**

客户端

#### Returns

`string`

guid

___

### getBrowColor

▸ **getBrowColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取眉毛颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

___

### getBrowTexture

▸ **getBrowTexture**(): `string`

**`Description`**

获取眉毛

**`Effect`**

客户端

#### Returns

`string`

guid

___

### getEyeHighlightColor

▸ **getEyeHighlightColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取眼睛高光颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

___

### getEyeHighlightTexture

▸ **getEyeHighlightTexture**(): `string`

**`Description`**

获取眼睛高光形状

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Returns

`string`

guid

___

### getEyeShadowColor

▸ **getEyeShadowColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取眼影颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

___

### getEyeShadowTexture

▸ **getEyeShadowTexture**(): `string`

**`Description`**

获取眼影贴图

**`Effect`**

客户端

#### Returns

`string`

guid

___

### getEyeTexture

▸ **getEyeTexture**(): `string`

**`Description`**

获取眼睛贴图

**`Effect`**

客户端

#### Returns

`string`

guid

___

### getEyelashColor

▸ **getEyelashColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取睫毛颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

___

### getEyelashTexture

▸ **getEyelashTexture**(): `string`

**`Description`**

获取睫毛

**`Effect`**

客户端

#### Returns

`string`

guid

___

### getFacialTattooColor

▸ **getFacialTattooColor**(`index`): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取面部纹身颜色

**`Effect`**

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

___

### getFacialTattooPositionX

▸ **getFacialTattooPositionX**(`index`): `number`

**`Description`**

获取面部纹身左右位置

**`Effect`**

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`number`

值

___

### getFacialTattooPositionY

▸ **getFacialTattooPositionY**(`index`): `number`

**`Description`**

获取面部纹身上下位置

**`Effect`**

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`number`

值

___

### getFacialTattooRotation

▸ **getFacialTattooRotation**(`index`): `number`

**`Description`**

获取面部纹身旋转

**`Effect`**

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`number`

值

___

### getFacialTattooType

▸ **getFacialTattooType**(`index`): `string`

**`Description`**

获取面部纹身种类贴图

**`Effect`**

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`string`

guid

___

### getFacialTattooZoom

▸ **getFacialTattooZoom**(`index`): `number`

**`Description`**

获取面部纹身缩放

**`Effect`**

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`number`

值

___

### getLeftEyeColor

▸ **getLeftEyeColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取左眼睛颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

___

### getLipstickColor

▸ **getLipstickColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取唇膏颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

___

### getLipstickTexture

▸ **getLipstickTexture**(): `string`

**`Description`**

获取唇膏贴图

**`Effect`**

客户端

#### Returns

`string`

guid

___

### getLowerEyeHighlightColor

▸ **getLowerEyeHighlightColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取上高光颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

___

### getLowerEyeHighlightTexture

▸ **getLowerEyeHighlightTexture**(): `string`

**`Description`**

获取下高光种类

**`Effect`**

客户端

#### Returns

`string`

下高光guid

___

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取部位模型

**`Effect`**

双端

#### Returns

`string`

模型Guid

___

### getPupilColor

▸ **getPupilColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取眼睛瞳孔花纹颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

___

### getPupilPositionX

▸ **getPupilPositionX**(): `number`

**`Description`**

获取瞳孔左右位置

**`Effect`**

客户端

#### Returns

`number`

左右位置值

___

### getPupilPositionY

▸ **getPupilPositionY**(): `number`

**`Description`**

获取瞳孔上下位置

**`Effect`**

客户端

#### Returns

`number`

上下位置值

___

### getPupilRotate

▸ **getPupilRotate**(): `number`

**`Description`**

获取瞳孔旋转

**`Effect`**

客户端

#### Returns

`number`

瞳孔旋转值

___

### getPupilScale

▸ **getPupilScale**(): `number`

**`Description`**

获取瞳孔大小缩放

**`Effect`**

客户端

#### Returns

`number`

大小缩放值

___

### getPupilTexture

▸ **getPupilTexture**(): `string`

**`Description`**

获取眼睛瞳孔花纹

**`Effect`**

客户端

#### Returns

`string`

guid

___

### getRightEyeColor

▸ **getRightEyeColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取右眼睛颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

___

### getUpperEyeHighlightColor

▸ **getUpperEyeHighlightColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取上高光颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

___

### getUpperEyeHighlightTexture

▸ **getUpperEyeHighlightTexture**(): `string`

**`Description`**

获取上高光种类

**`Effect`**

客户端

#### Returns

`string`

guid

___

### setBlushColor

▸ **setBlushColor**(`color`, `sync`): `void`

**`Description`**

设置腮红颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setBlushTexture

▸ **setBlushTexture**(`guid`, `sync`): `void`

**`Description`**

设置腮红贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setBrowColor

▸ **setBrowColor**(`color`, `sync`): `void`

**`Description`**

设置眉毛颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setBrowTexture

▸ **setBrowTexture**(`guid`, `sync`): `void`

**`Description`**

设置眉毛

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setEyeHighlightColor

▸ **setEyeHighlightColor**(`color`, `sync`): `void`

**`Description`**

设置眼睛高光颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setEyeHighlightTexture

▸ **setEyeHighlightTexture**(`guid`, `sync`): `void`

**`Description`**

设置眼睛高光形状

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setEyeShadowColor

▸ **setEyeShadowColor**(`color`, `sync`): `void`

**`Description`**

设置眼影颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setEyeShadowTexture

▸ **setEyeShadowTexture**(`guid`, `sync`): `void`

**`Description`**

设置眼影贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setEyeTexture

▸ **setEyeTexture**(`guid`, `sync`): `void`

**`Description`**

设置眼睛贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setEyelashColor

▸ **setEyelashColor**(`color`, `sync`): `void`

**`Description`**

设置睫毛颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setEyelashTexture

▸ **setEyelashTexture**(`guid`, `sync`): `void`

**`Description`**

设置睫毛

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setFacialTattooColor

▸ **setFacialTattooColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置面部纹身颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setFacialTattooPositionX

▸ **setFacialTattooPositionX**(`index`, `value`, `sync`): `void`

**`Description`**

设置面部纹身左右位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setFacialTattooPositionY

▸ **setFacialTattooPositionY**(`index`, `value`, `sync`): `void`

**`Description`**

设置面部纹身上下位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setFacialTattooRotation

▸ **setFacialTattooRotation**(`index`, `value`, `sync`): `void`

**`Description`**

设置面部纹身旋转

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setFacialTattooType

▸ **setFacialTattooType**(`index`, `guid`, `sync`): `void`

**`Description`**

设置面部纹身种类贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setFacialTattooZoom

▸ **setFacialTattooZoom**(`index`, `value`, `sync`): `void`

**`Description`**

设置面部纹身缩放

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setLeftEyeColor

▸ **setLeftEyeColor**(`color`, `sync`): `void`

**`Description`**

设置左眼睛颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setLipstickColor

▸ **setLipstickColor**(`color`, `sync`): `void`

**`Description`**

设置唇膏颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setLipstickTexture

▸ **setLipstickTexture**(`guid`, `sync`): `void`

**`Description`**

设置唇膏贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setLowerEyeHighlightColor

▸ **setLowerEyeHighlightColor**(`color`, `sync`): `void`

**`Description`**

设置下高光颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setLowerEyeHighlightTexture

▸ **setLowerEyeHighlightTexture**(`guid`, `sync`): `void`

**`Description`**

设置下高光种类

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` |  值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置部位模型

**`Precautions`**

如果模型Guid没有预加载，则v2本地设置时异步的

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 模型Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setPupilColor

▸ **setPupilColor**(`color`, `sync`): `void`

**`Description`**

设置眼睛瞳孔花纹颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setPupilPositionX

▸ **setPupilPositionX**(`value`, `sync`): `void`

**`Description`**

设置瞳孔左右位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setPupilPositionY

▸ **setPupilPositionY**(`value`, `sync`): `void`

**`Description`**

设置瞳孔上下位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setPupilRotate

▸ **setPupilRotate**(`value`, `sync`): `void`

**`Description`**

设置瞳孔旋转

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setPupilScale

▸ **setPupilScale**(`value`, `sync`): `void`

**`Description`**

设置瞳孔大小缩放

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setPupilTexture

▸ **setPupilTexture**(`guid`, `sync`): `void`

**`Description`**

设置眼睛瞳孔花纹

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setRightEyeColor

▸ **setRightEyeColor**(`color`, `sync`): `void`

**`Description`**

设置右眼睛颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setUpperEyeHighlightColor

▸ **setUpperEyeHighlightColor**(`color`, `sync`): `void`

**`Description`**

设置上高光颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setUpperEyeHighlightTexture

▸ **setUpperEyeHighlightTexture**(`guid`, `sync`): `void`

**`Description`**

设置上高光种类

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | guid值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`
