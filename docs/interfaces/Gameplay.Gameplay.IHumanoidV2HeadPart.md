[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2HeadPart

# Interface: IHumanoidV2HeadPart

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).IHumanoidV2HeadPart

**`Description`**

人形对象V2部位

**`Author`**

邓广

## Hierarchy

- [`IPart`](Gameplay.Gameplay.IPart.md)

  ↳ **`IHumanoidV2HeadPart`**

## Implemented by

- [`HumanoidV2HeadPart`](../classes/Gameplay.Gameplay.HumanoidV2HeadPart.md)

## Table of contents

### Methods

- [characterFaceShadow](Gameplay.Gameplay.IHumanoidV2HeadPart.md#characterfaceshadow)
- [getBlushColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getblushcolor)
- [getBlushTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getblushtexture)
- [getBrowColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getbrowcolor)
- [getBrowTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getbrowtexture)
- [getEyeHighLightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyehighlightcolor)
- [getEyeHighLightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyehighlighttexture)
- [getEyeLashColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyelashcolor)
- [getEyeLashTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyelashtexture)
- [getEyeShadowColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyeshadowcolor)
- [getEyeShadowTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyeshadowtexture)
- [getEyeTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyetexture)
- [getFacialTattooColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoocolor)
- [getFacialTattooPositionX](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoopositionx)
- [getFacialTattooPositionY](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoopositiony)
- [getFacialTattooRotation](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoorotation)
- [getFacialTattooType](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattootype)
- [getFacialTattooZoom](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoozoom)
- [getLeftEyeColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlefteyecolor)
- [getLipstickColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlipstickcolor)
- [getLipstickTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlipsticktexture)
- [getLowerEyeHighLightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlowereyehighlightcolor)
- [getLowerEyeHighLightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlowereyehighlighttexture)
- [getMesh](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getmesh)
- [getPupilColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilcolor)
- [getPupilPositionX](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilpositionx)
- [getPupilPositionY](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilpositiony)
- [getPupilRotate](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilrotate)
- [getPupilScale](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilscale)
- [getPupilTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupiltexture)
- [getRightEyeColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getrighteyecolor)
- [getUpperEyeHighLightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getuppereyehighlightcolor)
- [getUpperEyeHighLightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getuppereyehighlighttexture)
- [setBlushColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setblushcolor)
- [setBlushTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setblushtexture)
- [setBrowColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setbrowcolor)
- [setBrowTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setbrowtexture)
- [setEyeHighLightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyehighlightcolor)
- [setEyeHighLightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyehighlighttexture)
- [setEyeLashColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyelashcolor)
- [setEyeLashTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyelashtexture)
- [setEyeShadowColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyeshadowcolor)
- [setEyeShadowTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyeshadowtexture)
- [setEyeTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyetexture)
- [setFacialTattooColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoocolor)
- [setFacialTattooPositionX](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoopositionx)
- [setFacialTattooPositionY](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoopositiony)
- [setFacialTattooRotation](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoorotation)
- [setFacialTattooType](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattootype)
- [setFacialTattooZoom](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoozoom)
- [setLeftEyeColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlefteyecolor)
- [setLipstickColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlipstickcolor)
- [setLipstickTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlipsticktexture)
- [setLowerEyeHighLightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlowereyehighlightcolor)
- [setLowerEyeHighLightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlowereyehighlighttexture)
- [setMesh](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setmesh)
- [setPupilColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilcolor)
- [setPupilPositionX](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilpositionx)
- [setPupilPositionY](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilpositiony)
- [setPupilRotate](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilrotate)
- [setPupilScale](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilscale)
- [setPupilTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupiltexture)
- [setRightEyeColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setrighteyecolor)
- [setUpperEyeHighLightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setuppereyehighlightcolor)
- [setUpperEyeHighLightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setuppereyehighlighttexture)

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
| `directLightRotator` | [`Rotation`](../classes/Type.Type.Rotation.md) | usage:平行光方向 |
| `traceDistance` | `number` | usage:检测距离 default:默认检测距离 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3065

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

#### Defined in

Gameplay/index.d.ts:3384

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

#### Defined in

Gameplay/index.d.ts:3369

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

#### Defined in

Gameplay/index.d.ts:3550

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

#### Defined in

Gameplay/index.d.ts:3535

___

### getEyeHighLightColor

▸ **getEyeHighLightColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取眼睛高光颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3144

___

### getEyeHighLightTexture

▸ **getEyeHighLightTexture**(): `string`

**`Description`**

获取眼睛高光形状

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Returns

`string`

guid

#### Defined in

Gameplay/index.d.ts:3129

___

### getEyeLashColor

▸ **getEyeLashColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取睫毛颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3174

___

### getEyeLashTexture

▸ **getEyeLashTexture**(): `string`

**`Description`**

获取睫毛

**`Effect`**

客户端

#### Returns

`string`

guid

#### Defined in

Gameplay/index.d.ts:3159

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

#### Defined in

Gameplay/index.d.ts:3354

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

#### Defined in

Gameplay/index.d.ts:3339

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

#### Defined in

Gameplay/index.d.ts:3083

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
| `index` | `number` | usage:纹身索引 |

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3452

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
| `index` | `number` | usage:纹身索引 |

#### Returns

`number`

值

#### Defined in

Gameplay/index.d.ts:3469

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
| `index` | `number` | usage:纹身索引 |

#### Returns

`number`

值

#### Defined in

Gameplay/index.d.ts:3486

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
| `index` | `number` | usage:纹身索引 |

#### Returns

`number`

值

#### Defined in

Gameplay/index.d.ts:3503

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
| `index` | `number` | usage:纹身索引 |

#### Returns

`string`

guid

#### Defined in

Gameplay/index.d.ts:3431

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
| `index` | `number` | usage:纹身索引 |

#### Returns

`number`

值

#### Defined in

Gameplay/index.d.ts:3520

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

#### Defined in

Gameplay/index.d.ts:3098

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

#### Defined in

Gameplay/index.d.ts:3414

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

#### Defined in

Gameplay/index.d.ts:3399

___

### getLowerEyeHighLightColor

▸ **getLowerEyeHighLightColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取上高光颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3234

___

### getLowerEyeHighLightTexture

▸ **getLowerEyeHighLightTexture**(): `string`

**`Description`**

获取下高光种类

**`Effect`**

客户端

#### Returns

`string`

下高光guid

#### Defined in

Gameplay/index.d.ts:3219

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

#### Inherited from

[IPart](Gameplay.Gameplay.IPart.md).[getMesh](Gameplay.Gameplay.IPart.md#getmesh)

#### Defined in

Gameplay/index.d.ts:2644

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

#### Defined in

Gameplay/index.d.ts:3264

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

#### Defined in

Gameplay/index.d.ts:3279

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

#### Defined in

Gameplay/index.d.ts:3294

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

#### Defined in

Gameplay/index.d.ts:3324

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

#### Defined in

Gameplay/index.d.ts:3309

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

#### Defined in

Gameplay/index.d.ts:3249

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

#### Defined in

Gameplay/index.d.ts:3113

___

### getUpperEyeHighLightColor

▸ **getUpperEyeHighLightColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取上高光颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3204

___

### getUpperEyeHighLightTexture

▸ **getUpperEyeHighLightTexture**(): `string`

**`Description`**

获取上高光种类

**`Effect`**

客户端

#### Returns

`string`

guid

#### Defined in

Gameplay/index.d.ts:3189

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
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3378

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
| `guid` | `string` | usage:贴图Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3363

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
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3544

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
| `guid` | `string` | usage:贴图Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3529

___

### setEyeHighLightColor

▸ **setEyeHighLightColor**(`color`, `sync`): `void`

**`Description`**

设置眼睛高光颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3138

___

### setEyeHighLightTexture

▸ **setEyeHighLightTexture**(`guid`, `sync`): `void`

**`Description`**

设置眼睛高光形状

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:贴图Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3122

___

### setEyeLashColor

▸ **setEyeLashColor**(`color`, `sync`): `void`

**`Description`**

设置睫毛颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3168

___

### setEyeLashTexture

▸ **setEyeLashTexture**(`guid`, `sync`): `void`

**`Description`**

设置睫毛

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:贴图Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3153

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
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3348

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
| `guid` | `string` | usage:贴图Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3333

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
| `guid` | `string` | usage:贴图Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3077

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
| `index` | `number` | usage:纹身索引 |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3441

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
| `index` | `number` | usage:纹身索引 |
| `value` | `number` | usage:值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3462

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
| `index` | `number` | usage:纹身索引 |
| `value` | `number` | usage:值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3479

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
| `index` | `number` | usage:纹身索引 |
| `value` | `number` | usage:值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3496

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
| `index` | `number` | usage:纹身索引 |
| `guid` | `string` | usage:贴图Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3424

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
| `index` | `number` | usage:纹身索引 |
| `value` | `number` | usage:值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3513

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
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3092

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
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3408

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
| `guid` | `string` | usage:贴图Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3393

___

### setLowerEyeHighLightColor

▸ **setLowerEyeHighLightColor**(`color`, `sync`): `void`

**`Description`**

设置下高光颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3228

___

### setLowerEyeHighLightTexture

▸ **setLowerEyeHighLightTexture**(`guid`, `sync`): `void`

**`Description`**

设置下高光种类

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage: 值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3213

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
| `guid` | `string` | usage:模型Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Inherited from

[IPart](Gameplay.Gameplay.IPart.md).[setMesh](Gameplay.Gameplay.IPart.md#setmesh)

#### Defined in

Gameplay/index.d.ts:2638

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
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3258

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
| `value` | `number` | usage:值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3273

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
| `value` | `number` | usage:值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3288

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
| `value` | `number` | usage:值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3318

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
| `value` | `number` | usage:值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3303

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
| `guid` | `string` | usage:贴图Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3243

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
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3107

___

### setUpperEyeHighLightColor

▸ **setUpperEyeHighLightColor**(`color`, `sync`): `void`

**`Description`**

设置上高光颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3198

___

### setUpperEyeHighLightTexture

▸ **setUpperEyeHighLightTexture**(`guid`, `sync`): `void`

**`Description`**

设置上高光种类

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:guid值 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3183
