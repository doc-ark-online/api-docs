[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2HeadPart

# HumanoidV2HeadPart <Badge type="tip" text="Class" />

**`Description`**

人形对象V2头部位接口

## Implements

- [`IHumanoidV2HeadPart`](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md)

## Table of contents

| Methods |
| :-----|
| **[characterFaceShadow](Gameplay.Gameplay.HumanoidV2HeadPart.md#characterfaceshadow)**([`Rotation`](Type.Type.Rotation.md), `number`): `void` <br> 设置模型|
| **[getBlushColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#getblushcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取腮红颜色|
| **[getBlushTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#getblushtexture)**(): `string` <br> 获取腮红贴图|
| **[getBrowColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#getbrowcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取眉毛颜色|
| **[getBrowTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#getbrowtexture)**(): `string` <br> 获取眉毛|
| **[getEyeHighlightColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#geteyehighlightcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取眼睛高光颜色|
| **[getEyeHighlightTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#geteyehighlighttexture)**(): `string` <br> 获取眼睛高光形状|
| **[getEyeShadowColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#geteyeshadowcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取眼影颜色|
| **[getEyeShadowTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#geteyeshadowtexture)**(): `string` <br> 获取眼影贴图|
| **[getEyeTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#geteyetexture)**(): `string` <br> 获取眼睛贴图|
| **[getEyelashColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#geteyelashcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取睫毛颜色|
| **[getEyelashTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#geteyelashtexture)**(): `string` <br> 获取睫毛|
| **[getFacialTattooColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#getfacialtattoocolor)**(`number`): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取面部纹身颜色|
| **[getFacialTattooPositionX](Gameplay.Gameplay.HumanoidV2HeadPart.md#getfacialtattoopositionx)**(`number`): `number` <br> 获取面部纹身左右位置|
| **[getFacialTattooPositionY](Gameplay.Gameplay.HumanoidV2HeadPart.md#getfacialtattoopositiony)**(`number`): `number` <br> 获取面部纹身上下位置|
| **[getFacialTattooRotation](Gameplay.Gameplay.HumanoidV2HeadPart.md#getfacialtattoorotation)**(`number`): `number` <br> 获取面部纹身旋转|
| **[getFacialTattooType](Gameplay.Gameplay.HumanoidV2HeadPart.md#getfacialtattootype)**(`number`): `string` <br> 获取面部纹身种类贴图|
| **[getFacialTattooZoom](Gameplay.Gameplay.HumanoidV2HeadPart.md#getfacialtattoozoom)**(`number`): `number` <br> 获取面部纹身缩放|
| **[getHeadPatternColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#getheadpatterncolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取头部花纹颜色|
| **[getHeadPatternTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#getheadpatterntexture)**(): `string` <br> 获取头部花纹贴图|
| **[getLeftEyeColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#getlefteyecolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取左眼睛颜色|
| **[getLipstickColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#getlipstickcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取唇膏颜色|
| **[getLipstickTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#getlipsticktexture)**(): `string` <br> 获取唇膏贴图|
| **[getLowerEyeHighlightColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#getlowereyehighlightcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取上高光颜色|
| **[getLowerEyeHighlightTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#getlowereyehighlighttexture)**(): `string` <br> 获取下高光种类|
| **[getMesh](Gameplay.Gameplay.HumanoidV2HeadPart.md#getmesh)**(): `string` <br> 获取头部模型|
| **[getPupilColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#getpupilcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取眼睛瞳孔花纹颜色|
| **[getPupilPositionX](Gameplay.Gameplay.HumanoidV2HeadPart.md#getpupilpositionx)**(): `number` <br> 获取瞳孔左右位置|
| **[getPupilPositionY](Gameplay.Gameplay.HumanoidV2HeadPart.md#getpupilpositiony)**(): `number` <br> 获取瞳孔上下位置|
| **[getPupilRotate](Gameplay.Gameplay.HumanoidV2HeadPart.md#getpupilrotate)**(): `number` <br> 获取瞳孔旋转|
| **[getPupilScale](Gameplay.Gameplay.HumanoidV2HeadPart.md#getpupilscale)**(): `number` <br> 获取瞳孔大小缩放|
| **[getPupilTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#getpupiltexture)**(): `string` <br> 获取眼睛瞳孔花纹|
| **[getRightEyeColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#getrighteyecolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取右眼睛颜色|
| **[getUpperEyeHighlightColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#getuppereyehighlightcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取上高光颜色|
| **[getUpperEyeHighlightTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#getuppereyehighlighttexture)**(): `string` <br> 获取上高光种类|
| **[setBlushColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#setblushcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置腮红颜色|
| **[setBlushTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#setblushtexture)**(`string`, `boolean`): `void` <br> 设置腮红贴图|
| **[setBrowColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#setbrowcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置眉毛颜色|
| **[setBrowTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#setbrowtexture)**(`string`, `boolean`): `void` <br> 设置眉毛|
| **[setEyeHighlightColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#seteyehighlightcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置眼睛高光颜色|
| **[setEyeHighlightTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#seteyehighlighttexture)**(`string`, `boolean`): `void` <br> 设置眼睛高光形状|
| **[setEyeShadowColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#seteyeshadowcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置眼影颜色|
| **[setEyeShadowTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#seteyeshadowtexture)**(`string`, `boolean`): `void` <br> 设置眼影贴图|
| **[setEyeTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#seteyetexture)**(`string`, `boolean`): `void` <br> 设置眼睛贴图|
| **[setEyelashColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#seteyelashcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置睫毛颜色|
| **[setEyelashTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#seteyelashtexture)**(`string`, `boolean`): `void` <br> 设置睫毛|
| **[setFacialTattooColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#setfacialtattoocolor)**(`number`, [`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置面部纹身颜色|
| **[setFacialTattooPositionX](Gameplay.Gameplay.HumanoidV2HeadPart.md#setfacialtattoopositionx)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身左右位置|
| **[setFacialTattooPositionY](Gameplay.Gameplay.HumanoidV2HeadPart.md#setfacialtattoopositiony)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身上下位置|
| **[setFacialTattooRotation](Gameplay.Gameplay.HumanoidV2HeadPart.md#setfacialtattoorotation)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身旋转|
| **[setFacialTattooType](Gameplay.Gameplay.HumanoidV2HeadPart.md#setfacialtattootype)**(`number`, `string`, `boolean`): `void` <br> 设置面部纹身种类贴图|
| **[setFacialTattooZoom](Gameplay.Gameplay.HumanoidV2HeadPart.md#setfacialtattoozoom)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身缩放|
| **[setHeadPatternColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#setheadpatterncolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置头部花纹颜色|
| **[setHeadPatternTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#setheadpatterntexture)**(`string`, `boolean`): `void` <br> 设置头部花纹贴图|
| **[setLeftEyeColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#setlefteyecolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置左眼睛颜色|
| **[setLipstickColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#setlipstickcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置唇膏颜色|
| **[setLipstickTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#setlipsticktexture)**(`string`, `boolean`): `void` <br> 设置唇膏贴图|
| **[setLowerEyeHighlightColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#setlowereyehighlightcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置下高光颜色|
| **[setLowerEyeHighlightTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#setlowereyehighlighttexture)**(`string`, `boolean`): `void` <br> 设置下高光种类|
| **[setMesh](Gameplay.Gameplay.HumanoidV2HeadPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置头部模型|
| **[setPupilColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#setpupilcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置眼睛瞳孔花纹颜色|
| **[setPupilPositionX](Gameplay.Gameplay.HumanoidV2HeadPart.md#setpupilpositionx)**(`number`, `boolean`): `void` <br> 设置瞳孔左右位置|
| **[setPupilPositionY](Gameplay.Gameplay.HumanoidV2HeadPart.md#setpupilpositiony)**(`number`, `boolean`): `void` <br> 设置瞳孔上下位置|
| **[setPupilRotate](Gameplay.Gameplay.HumanoidV2HeadPart.md#setpupilrotate)**(`number`, `boolean`): `void` <br> 设置瞳孔旋转|
| **[setPupilScale](Gameplay.Gameplay.HumanoidV2HeadPart.md#setpupilscale)**(`number`, `boolean`): `void` <br> 设置瞳孔大小缩放|
| **[setPupilTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#setpupiltexture)**(`string`, `boolean`): `void` <br> 设置眼睛瞳孔花纹|
| **[setRightEyeColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#setrighteyecolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置右眼睛颜色|
| **[setUpperEyeHighlightColor](Gameplay.Gameplay.HumanoidV2HeadPart.md#setuppereyehighlightcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置上高光颜色|
| **[setUpperEyeHighlightTexture](Gameplay.Gameplay.HumanoidV2HeadPart.md#setuppereyehighlighttexture)**(`string`, `boolean`): `void` <br> 设置上高光种类|

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
| `directLightRotator` | [`Rotation`](Type.Type.Rotation.md) | 平行光方向 |
| `traceDistance` | `number` | 检测距离 default:默认检测距离 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[characterFaceShadow](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#characterfaceshadow)

___

### getBlushColor

▸ **getBlushColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取腮红颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getBlushColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getblushcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getBlushTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getblushtexture)

___

### getBrowColor

▸ **getBrowColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取眉毛颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getBrowColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getbrowcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getBrowTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getbrowtexture)

___

### getEyeHighlightColor

▸ **getEyeHighlightColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取眼睛高光颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getEyeHighlightColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyehighlightcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getEyeHighlightTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyehighlighttexture)

___

### getEyeShadowColor

▸ **getEyeShadowColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取眼影颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getEyeShadowColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyeshadowcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getEyeShadowTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyeshadowtexture)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getEyeTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyetexture)

___

### getEyelashColor

▸ **getEyelashColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取睫毛颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getEyelashColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyelashcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getEyelashTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyelashtexture)

___

### getFacialTattooColor

▸ **getFacialTattooColor**(`index`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取面部纹身颜色

**`Effect`**

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getFacialTattooColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoocolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getFacialTattooPositionX](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoopositionx)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getFacialTattooPositionY](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoopositiony)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getFacialTattooRotation](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoorotation)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getFacialTattooType](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattootype)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getFacialTattooZoom](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoozoom)

___

### getHeadPatternColor

▸ **getHeadPatternColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取头部花纹颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色值

___

### getHeadPatternTexture

▸ **getHeadPatternTexture**(): `string`

**`Description`**

获取头部花纹贴图

**`Effect`**

客户端

#### Returns

`string`

guid

___

### getLeftEyeColor

▸ **getLeftEyeColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取左眼睛颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getLeftEyeColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlefteyecolor)

___

### getLipstickColor

▸ **getLipstickColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取唇膏颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getLipstickColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlipstickcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getLipstickTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlipsticktexture)

___

### getLowerEyeHighlightColor

▸ **getLowerEyeHighlightColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取上高光颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getLowerEyeHighlightColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlowereyehighlightcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getLowerEyeHighlightTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlowereyehighlighttexture)

___

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取头部模型

**`Effect`**

双端

#### Returns

`string`

模型Guid

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getMesh](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getmesh)

___

### getPupilColor

▸ **getPupilColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取眼睛瞳孔花纹颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getPupilColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getPupilPositionX](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilpositionx)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getPupilPositionY](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilpositiony)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getPupilRotate](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilrotate)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getPupilScale](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilscale)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getPupilTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupiltexture)

___

### getRightEyeColor

▸ **getRightEyeColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取右眼睛颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getRightEyeColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getrighteyecolor)

___

### getUpperEyeHighlightColor

▸ **getUpperEyeHighlightColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取上高光颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getUpperEyeHighlightColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getuppereyehighlightcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[getUpperEyeHighlightTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#getuppereyehighlighttexture)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setBlushColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setblushcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setBlushTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setblushtexture)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setBrowColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setbrowcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setBrowTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setbrowtexture)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setEyeHighlightColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyehighlightcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setEyeHighlightTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyehighlighttexture)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setEyeShadowColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyeshadowcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setEyeShadowTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyeshadowtexture)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setEyeTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyetexture)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setEyelashColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyelashcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setEyelashTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyelashtexture)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setFacialTattooColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoocolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setFacialTattooPositionX](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoopositionx)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setFacialTattooPositionY](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoopositiony)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setFacialTattooRotation](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoorotation)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setFacialTattooType](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattootype)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setFacialTattooZoom](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoozoom)

___

### setHeadPatternColor

▸ **setHeadPatternColor**(`color`, `sync`): `void`

**`Description`**

设置头部花纹颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setHeadPatternTexture

▸ **setHeadPatternTexture**(`textureGuid`, `sync`): `void`

**`Description`**

设置头部花纹贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `textureGuid` | `string` | 贴图GUID |
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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setLeftEyeColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlefteyecolor)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setLipstickColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlipstickcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setLipstickTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlipsticktexture)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setLowerEyeHighlightColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlowereyehighlightcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setLowerEyeHighlightTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlowereyehighlighttexture)

___

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置头部模型

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setMesh](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setmesh)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setPupilColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setPupilPositionX](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilpositionx)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setPupilPositionY](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilpositiony)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setPupilRotate](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilrotate)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setPupilScale](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilscale)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setPupilTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupiltexture)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setRightEyeColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setrighteyecolor)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setUpperEyeHighlightColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setuppereyehighlightcolor)

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

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md).[setUpperEyeHighlightTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2HeadPart.md#setuppereyehighlighttexture)
