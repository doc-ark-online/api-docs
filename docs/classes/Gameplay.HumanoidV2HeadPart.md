[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2HeadPart

# HumanoidV2HeadPart <Badge type="tip" text="Class" /> <Score text="HumanoidV2HeadPart" />

**`Description`**

人形对象V2头部位接口

## Implements

- [`IHumanoidV2HeadPart`](../interfaces/Gameplay.IHumanoidV2HeadPart.md)

## Table of contents

| Methods |
| :-----|
| **[characterFaceShadow](Gameplay.HumanoidV2HeadPart.md#characterfaceshadow)**([`Rotation`](Type.Rotation.md), `number`): `void` <br> 设置模型|
| **[getBlushColor](Gameplay.HumanoidV2HeadPart.md#getblushcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取腮红颜色|
| **[getBlushTexture](Gameplay.HumanoidV2HeadPart.md#getblushtexture)**(): `string` <br> 获取腮红贴图|
| **[getBrowColor](Gameplay.HumanoidV2HeadPart.md#getbrowcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取眉毛颜色|
| **[getBrowTexture](Gameplay.HumanoidV2HeadPart.md#getbrowtexture)**(): `string` <br> 获取眉毛|
| **[getEyeHighlightColor](Gameplay.HumanoidV2HeadPart.md#geteyehighlightcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取眼睛高光颜色|
| **[getEyeHighlightTexture](Gameplay.HumanoidV2HeadPart.md#geteyehighlighttexture)**(): `string` <br> 获取眼睛高光形状|
| **[getEyeShadowColor](Gameplay.HumanoidV2HeadPart.md#geteyeshadowcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取眼影颜色|
| **[getEyeShadowTexture](Gameplay.HumanoidV2HeadPart.md#geteyeshadowtexture)**(): `string` <br> 获取眼影贴图|
| **[getEyeTexture](Gameplay.HumanoidV2HeadPart.md#geteyetexture)**(): `string` <br> 获取眼睛贴图|
| **[getEyelashColor](Gameplay.HumanoidV2HeadPart.md#geteyelashcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取睫毛颜色|
| **[getEyelashTexture](Gameplay.HumanoidV2HeadPart.md#geteyelashtexture)**(): `string` <br> 获取睫毛|
| **[getFacialTattooColor](Gameplay.HumanoidV2HeadPart.md#getfacialtattoocolor)**(`number`): [`LinearColor`](Type.LinearColor.md) <br> 获取面部纹身颜色|
| **[getFacialTattooPositionX](Gameplay.HumanoidV2HeadPart.md#getfacialtattoopositionx)**(`number`): `number` <br> 获取面部纹身左右位置|
| **[getFacialTattooPositionY](Gameplay.HumanoidV2HeadPart.md#getfacialtattoopositiony)**(`number`): `number` <br> 获取面部纹身上下位置|
| **[getFacialTattooRotation](Gameplay.HumanoidV2HeadPart.md#getfacialtattoorotation)**(`number`): `number` <br> 获取面部纹身旋转|
| **[getFacialTattooType](Gameplay.HumanoidV2HeadPart.md#getfacialtattootype)**(`number`): `string` <br> 获取面部纹身种类贴图|
| **[getFacialTattooZoom](Gameplay.HumanoidV2HeadPart.md#getfacialtattoozoom)**(`number`): `number` <br> 获取面部纹身缩放|
| **[getHeadPatternColor](Gameplay.HumanoidV2HeadPart.md#getheadpatterncolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取头部花纹颜色|
| **[getHeadPatternTexture](Gameplay.HumanoidV2HeadPart.md#getheadpatterntexture)**(): `string` <br> 获取头部花纹贴图|
| **[getLeftEyeColor](Gameplay.HumanoidV2HeadPart.md#getlefteyecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取左眼睛颜色|
| **[getLipstickColor](Gameplay.HumanoidV2HeadPart.md#getlipstickcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取唇膏颜色|
| **[getLipstickTexture](Gameplay.HumanoidV2HeadPart.md#getlipsticktexture)**(): `string` <br> 获取唇膏贴图|
| **[getLowerEyeHighlightColor](Gameplay.HumanoidV2HeadPart.md#getlowereyehighlightcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取上高光颜色|
| **[getLowerEyeHighlightTexture](Gameplay.HumanoidV2HeadPart.md#getlowereyehighlighttexture)**(): `string` <br> 获取下高光种类|
| **[getMesh](Gameplay.HumanoidV2HeadPart.md#getmesh)**(): `string` <br> 获取头部模型|
| **[getPupilColor](Gameplay.HumanoidV2HeadPart.md#getpupilcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取眼睛瞳孔花纹颜色|
| **[getPupilPositionX](Gameplay.HumanoidV2HeadPart.md#getpupilpositionx)**(): `number` <br> 获取瞳孔左右位置|
| **[getPupilPositionY](Gameplay.HumanoidV2HeadPart.md#getpupilpositiony)**(): `number` <br> 获取瞳孔上下位置|
| **[getPupilRotate](Gameplay.HumanoidV2HeadPart.md#getpupilrotate)**(): `number` <br> 获取瞳孔旋转|
| **[getPupilScale](Gameplay.HumanoidV2HeadPart.md#getpupilscale)**(): `number` <br> 获取瞳孔大小缩放|
| **[getPupilTexture](Gameplay.HumanoidV2HeadPart.md#getpupiltexture)**(): `string` <br> 获取眼睛瞳孔花纹|
| **[getRightEyeColor](Gameplay.HumanoidV2HeadPart.md#getrighteyecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取右眼睛颜色|
| **[getUpperEyeHighlightColor](Gameplay.HumanoidV2HeadPart.md#getuppereyehighlightcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取上高光颜色|
| **[getUpperEyeHighlightTexture](Gameplay.HumanoidV2HeadPart.md#getuppereyehighlighttexture)**(): `string` <br> 获取上高光种类|
| **[setBlushColor](Gameplay.HumanoidV2HeadPart.md#setblushcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置腮红颜色|
| **[setBlushTexture](Gameplay.HumanoidV2HeadPart.md#setblushtexture)**(`string`, `boolean`): `void` <br> 设置腮红贴图|
| **[setBrowColor](Gameplay.HumanoidV2HeadPart.md#setbrowcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置眉毛颜色|
| **[setBrowTexture](Gameplay.HumanoidV2HeadPart.md#setbrowtexture)**(`string`, `boolean`): `void` <br> 设置眉毛|
| **[setEyeHighlightColor](Gameplay.HumanoidV2HeadPart.md#seteyehighlightcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置眼睛高光颜色|
| **[setEyeHighlightTexture](Gameplay.HumanoidV2HeadPart.md#seteyehighlighttexture)**(`string`, `boolean`): `void` <br> 设置眼睛高光形状|
| **[setEyeShadowColor](Gameplay.HumanoidV2HeadPart.md#seteyeshadowcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置眼影颜色|
| **[setEyeShadowTexture](Gameplay.HumanoidV2HeadPart.md#seteyeshadowtexture)**(`string`, `boolean`): `void` <br> 设置眼影贴图|
| **[setEyeTexture](Gameplay.HumanoidV2HeadPart.md#seteyetexture)**(`string`, `boolean`): `void` <br> 设置眼睛贴图|
| **[setEyelashColor](Gameplay.HumanoidV2HeadPart.md#seteyelashcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置睫毛颜色|
| **[setEyelashTexture](Gameplay.HumanoidV2HeadPart.md#seteyelashtexture)**(`string`, `boolean`): `void` <br> 设置睫毛|
| **[setFacialTattooColor](Gameplay.HumanoidV2HeadPart.md#setfacialtattoocolor)**(`number`, [`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置面部纹身颜色|
| **[setFacialTattooPositionX](Gameplay.HumanoidV2HeadPart.md#setfacialtattoopositionx)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身左右位置|
| **[setFacialTattooPositionY](Gameplay.HumanoidV2HeadPart.md#setfacialtattoopositiony)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身上下位置|
| **[setFacialTattooRotation](Gameplay.HumanoidV2HeadPart.md#setfacialtattoorotation)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身旋转|
| **[setFacialTattooType](Gameplay.HumanoidV2HeadPart.md#setfacialtattootype)**(`number`, `string`, `boolean`): `void` <br> 设置面部纹身种类贴图|
| **[setFacialTattooZoom](Gameplay.HumanoidV2HeadPart.md#setfacialtattoozoom)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身缩放|
| **[setHeadPatternColor](Gameplay.HumanoidV2HeadPart.md#setheadpatterncolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置头部花纹颜色|
| **[setHeadPatternTexture](Gameplay.HumanoidV2HeadPart.md#setheadpatterntexture)**(`string`, `boolean`): `void` <br> 设置头部花纹贴图|
| **[setLeftEyeColor](Gameplay.HumanoidV2HeadPart.md#setlefteyecolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置左眼睛颜色|
| **[setLipstickColor](Gameplay.HumanoidV2HeadPart.md#setlipstickcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置唇膏颜色|
| **[setLipstickTexture](Gameplay.HumanoidV2HeadPart.md#setlipsticktexture)**(`string`, `boolean`): `void` <br> 设置唇膏贴图|
| **[setLowerEyeHighlightColor](Gameplay.HumanoidV2HeadPart.md#setlowereyehighlightcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置下高光颜色|
| **[setLowerEyeHighlightTexture](Gameplay.HumanoidV2HeadPart.md#setlowereyehighlighttexture)**(`string`, `boolean`): `void` <br> 设置下高光种类|
| **[setMesh](Gameplay.HumanoidV2HeadPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置头部模型|
| **[setPupilColor](Gameplay.HumanoidV2HeadPart.md#setpupilcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置眼睛瞳孔花纹颜色|
| **[setPupilPositionX](Gameplay.HumanoidV2HeadPart.md#setpupilpositionx)**(`number`, `boolean`): `void` <br> 设置瞳孔左右位置|
| **[setPupilPositionY](Gameplay.HumanoidV2HeadPart.md#setpupilpositiony)**(`number`, `boolean`): `void` <br> 设置瞳孔上下位置|
| **[setPupilRotate](Gameplay.HumanoidV2HeadPart.md#setpupilrotate)**(`number`, `boolean`): `void` <br> 设置瞳孔旋转|
| **[setPupilScale](Gameplay.HumanoidV2HeadPart.md#setpupilscale)**(`number`, `boolean`): `void` <br> 设置瞳孔大小缩放|
| **[setPupilTexture](Gameplay.HumanoidV2HeadPart.md#setpupiltexture)**(`string`, `boolean`): `void` <br> 设置眼睛瞳孔花纹|
| **[setRightEyeColor](Gameplay.HumanoidV2HeadPart.md#setrighteyecolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置右眼睛颜色|
| **[setUpperEyeHighlightColor](Gameplay.HumanoidV2HeadPart.md#setuppereyehighlightcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置上高光颜色|
| **[setUpperEyeHighlightTexture](Gameplay.HumanoidV2HeadPart.md#setuppereyehighlighttexture)**(`string`, `boolean`): `void` <br> 设置上高光种类|

## Methods

### characterFaceShadow <Score text="characterFaceShadow" /> 

▸ **characterFaceShadow**(`directLightRotator`, `traceDistance`): `void` <Badge type="tip" text="other" />

**`Description`**

设置模型

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `directLightRotator` | [`Rotation`](Type.Rotation.md) | 平行光方向 |
| `traceDistance` | `number` | 检测距离 default:默认检测距离 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[characterFaceShadow](../interfaces/Gameplay.IHumanoidV2HeadPart.md#characterfaceshadow)

___

### getBlushColor <Score text="getBlushColor" /> 

▸ **getBlushColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取腮红颜色

客户端

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getBlushColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getblushcolor)

___

### getBlushTexture <Score text="getBlushTexture" /> 

▸ **getBlushTexture**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取腮红贴图

客户端

#### Returns

`string`

GUID

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getBlushTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getblushtexture)

___

### getBrowColor <Score text="getBrowColor" /> 

▸ **getBrowColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取眉毛颜色

客户端

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getBrowColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getbrowcolor)

___

### getBrowTexture <Score text="getBrowTexture" /> 

▸ **getBrowTexture**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取眉毛

客户端

#### Returns

`string`

GUID

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getBrowTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getbrowtexture)

___

### getEyeHighlightColor <Score text="getEyeHighlightColor" /> 

▸ **getEyeHighlightColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取眼睛高光颜色

客户端

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getEyeHighlightColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#geteyehighlightcolor)

___

### getEyeHighlightTexture <Score text="getEyeHighlightTexture" /> 

▸ **getEyeHighlightTexture**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取眼睛高光形状

sync = false:客户端;
sync = true:双端

#### Returns

`string`

GUID

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getEyeHighlightTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#geteyehighlighttexture)

___

### getEyeShadowColor <Score text="getEyeShadowColor" /> 

▸ **getEyeShadowColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取眼影颜色

客户端

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getEyeShadowColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#geteyeshadowcolor)

___

### getEyeShadowTexture <Score text="getEyeShadowTexture" /> 

▸ **getEyeShadowTexture**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取眼影贴图

客户端

#### Returns

`string`

GUID

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getEyeShadowTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#geteyeshadowtexture)

___

### getEyeTexture <Score text="getEyeTexture" /> 

▸ **getEyeTexture**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取眼睛贴图

客户端

#### Returns

`string`

GUID

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getEyeTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#geteyetexture)

___

### getEyelashColor <Score text="getEyelashColor" /> 

▸ **getEyelashColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取睫毛颜色

客户端

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getEyelashColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#geteyelashcolor)

___

### getEyelashTexture <Score text="getEyelashTexture" /> 

▸ **getEyelashTexture**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取睫毛

客户端

#### Returns

`string`

GUID

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getEyelashTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#geteyelashtexture)

___

### getFacialTattooColor <Score text="getFacialTattooColor" /> 

▸ **getFacialTattooColor**(`index`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取面部纹身颜色

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getFacialTattooColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getfacialtattoocolor)

___

### getFacialTattooPositionX <Score text="getFacialTattooPositionX" /> 

▸ **getFacialTattooPositionX**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取面部纹身左右位置

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getFacialTattooPositionX](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getfacialtattoopositionx)

___

### getFacialTattooPositionY <Score text="getFacialTattooPositionY" /> 

▸ **getFacialTattooPositionY**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取面部纹身上下位置

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getFacialTattooPositionY](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getfacialtattoopositiony)

___

### getFacialTattooRotation <Score text="getFacialTattooRotation" /> 

▸ **getFacialTattooRotation**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取面部纹身旋转

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getFacialTattooRotation](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getfacialtattoorotation)

___

### getFacialTattooType <Score text="getFacialTattooType" /> 

▸ **getFacialTattooType**(`index`): `string` <Badge type="tip" text="other" />

**`Description`**

获取面部纹身种类贴图

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`string`

GUID

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getFacialTattooType](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getfacialtattootype)

___

### getFacialTattooZoom <Score text="getFacialTattooZoom" /> 

▸ **getFacialTattooZoom**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取面部纹身缩放

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`number`

值

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getFacialTattooZoom](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getfacialtattoozoom)

___

### getHeadPatternColor <Score text="getHeadPatternColor" /> 

▸ **getHeadPatternColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取头部花纹颜色

客户端

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色值

___

### getHeadPatternTexture <Score text="getHeadPatternTexture" /> 

▸ **getHeadPatternTexture**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取头部花纹贴图

客户端

#### Returns

`string`

GUID

___

### getLeftEyeColor <Score text="getLeftEyeColor" /> 

▸ **getLeftEyeColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取左眼睛颜色

客户端

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getLeftEyeColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getlefteyecolor)

___

### getLipstickColor <Score text="getLipstickColor" /> 

▸ **getLipstickColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取唇膏颜色

客户端

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getLipstickColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getlipstickcolor)

___

### getLipstickTexture <Score text="getLipstickTexture" /> 

▸ **getLipstickTexture**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取唇膏贴图

客户端

#### Returns

`string`

GUID

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getLipstickTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getlipsticktexture)

___

### getLowerEyeHighlightColor <Score text="getLowerEyeHighlightColor" /> 

▸ **getLowerEyeHighlightColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取上高光颜色

客户端

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getLowerEyeHighlightColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getlowereyehighlightcolor)

___

### getLowerEyeHighlightTexture <Score text="getLowerEyeHighlightTexture" /> 

▸ **getLowerEyeHighlightTexture**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取下高光种类

客户端

#### Returns

`string`

下高光GUID

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getLowerEyeHighlightTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getlowereyehighlighttexture)

___

### getMesh <Score text="getMesh" /> 

▸ **getMesh**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取头部模型

双端

#### Returns

`string`

模型GUID

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getMesh](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getmesh)

___

### getPupilColor <Score text="getPupilColor" /> 

▸ **getPupilColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取眼睛瞳孔花纹颜色

客户端

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getPupilColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getpupilcolor)

___

### getPupilPositionX <Score text="getPupilPositionX" /> 

▸ **getPupilPositionX**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取瞳孔左右位置

客户端

#### Returns

`number`

左右位置值

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getPupilPositionX](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getpupilpositionx)

___

### getPupilPositionY <Score text="getPupilPositionY" /> 

▸ **getPupilPositionY**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取瞳孔上下位置

客户端

#### Returns

`number`

上下位置值

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getPupilPositionY](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getpupilpositiony)

___

### getPupilRotate <Score text="getPupilRotate" /> 

▸ **getPupilRotate**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取瞳孔旋转

客户端

#### Returns

`number`

瞳孔旋转值

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getPupilRotate](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getpupilrotate)

___

### getPupilScale <Score text="getPupilScale" /> 

▸ **getPupilScale**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取瞳孔大小缩放

客户端

#### Returns

`number`

大小缩放值

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getPupilScale](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getpupilscale)

___

### getPupilTexture <Score text="getPupilTexture" /> 

▸ **getPupilTexture**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取眼睛瞳孔花纹

客户端

#### Returns

`string`

GUID

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getPupilTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getpupiltexture)

___

### getRightEyeColor <Score text="getRightEyeColor" /> 

▸ **getRightEyeColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取右眼睛颜色

客户端

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getRightEyeColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getrighteyecolor)

___

### getUpperEyeHighlightColor <Score text="getUpperEyeHighlightColor" /> 

▸ **getUpperEyeHighlightColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取上高光颜色

客户端

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getUpperEyeHighlightColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getuppereyehighlightcolor)

___

### getUpperEyeHighlightTexture <Score text="getUpperEyeHighlightTexture" /> 

▸ **getUpperEyeHighlightTexture**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取上高光种类

客户端

#### Returns

`string`

GUID

#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[getUpperEyeHighlightTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#getuppereyehighlighttexture)

___

### setBlushColor <Score text="setBlushColor" /> 

▸ **setBlushColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置腮红颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setBlushColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setblushcolor)

___

### setBlushTexture <Score text="setBlushTexture" /> 

▸ **setBlushTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置腮红贴图

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setBlushTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setblushtexture)

___

### setBrowColor <Score text="setBrowColor" /> 

▸ **setBrowColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置眉毛颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setBrowColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setbrowcolor)

___

### setBrowTexture <Score text="setBrowTexture" /> 

▸ **setBrowTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置眉毛

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setBrowTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setbrowtexture)

___

### setEyeHighlightColor <Score text="setEyeHighlightColor" /> 

▸ **setEyeHighlightColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置眼睛高光颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setEyeHighlightColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#seteyehighlightcolor)

___

### setEyeHighlightTexture <Score text="setEyeHighlightTexture" /> 

▸ **setEyeHighlightTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置眼睛高光形状

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUIDUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setEyeHighlightTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#seteyehighlighttexture)

___

### setEyeShadowColor <Score text="setEyeShadowColor" /> 

▸ **setEyeShadowColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置眼影颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setEyeShadowColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#seteyeshadowcolor)

___

### setEyeShadowTexture <Score text="setEyeShadowTexture" /> 

▸ **setEyeShadowTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置眼影贴图

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setEyeShadowTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#seteyeshadowtexture)

___

### setEyeTexture <Score text="setEyeTexture" /> 

▸ **setEyeTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置眼睛贴图

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setEyeTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#seteyetexture)

___

### setEyelashColor <Score text="setEyelashColor" /> 

▸ **setEyelashColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置睫毛颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setEyelashColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#seteyelashcolor)

___

### setEyelashTexture <Score text="setEyelashTexture" /> 

▸ **setEyelashTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置睫毛

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setEyelashTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#seteyelashtexture)

___

### setFacialTattooColor <Score text="setFacialTattooColor" /> 

▸ **setFacialTattooColor**(`index`, `color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置面部纹身颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setFacialTattooColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setfacialtattoocolor)

___

### setFacialTattooPositionX <Score text="setFacialTattooPositionX" /> 

▸ **setFacialTattooPositionX**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置面部纹身左右位置

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setFacialTattooPositionX](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setfacialtattoopositionx)

___

### setFacialTattooPositionY <Score text="setFacialTattooPositionY" /> 

▸ **setFacialTattooPositionY**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置面部纹身上下位置

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setFacialTattooPositionY](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setfacialtattoopositiony)

___

### setFacialTattooRotation <Score text="setFacialTattooRotation" /> 

▸ **setFacialTattooRotation**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置面部纹身旋转

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setFacialTattooRotation](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setfacialtattoorotation)

___

### setFacialTattooType <Score text="setFacialTattooType" /> 

▸ **setFacialTattooType**(`index`, `GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置面部纹身种类贴图

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setFacialTattooType](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setfacialtattootype)

___

### setFacialTattooZoom <Score text="setFacialTattooZoom" /> 

▸ **setFacialTattooZoom**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置面部纹身缩放

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setFacialTattooZoom](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setfacialtattoozoom)

___

### setHeadPatternColor <Score text="setHeadPatternColor" /> 

▸ **setHeadPatternColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置头部花纹颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setHeadPatternTexture <Score text="setHeadPatternTexture" /> 

▸ **setHeadPatternTexture**(`textureGuid`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置头部花纹贴图

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `textureGuid` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setLeftEyeColor <Score text="setLeftEyeColor" /> 

▸ **setLeftEyeColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置左眼睛颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setLeftEyeColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setlefteyecolor)

___

### setLipstickColor <Score text="setLipstickColor" /> 

▸ **setLipstickColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置唇膏颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setLipstickColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setlipstickcolor)

___

### setLipstickTexture <Score text="setLipstickTexture" /> 

▸ **setLipstickTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置唇膏贴图

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setLipstickTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setlipsticktexture)

___

### setLowerEyeHighlightColor <Score text="setLowerEyeHighlightColor" /> 

▸ **setLowerEyeHighlightColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置下高光颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setLowerEyeHighlightColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setlowereyehighlightcolor)

___

### setLowerEyeHighlightTexture <Score text="setLowerEyeHighlightTexture" /> 

▸ **setLowerEyeHighlightTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置下高光种类

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setLowerEyeHighlightTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setlowereyehighlighttexture)

___

### setMesh <Score text="setMesh" /> 

▸ **setMesh**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置头部模型

::: warning Precautions

如果模型GUID没有预加载，则v2本地设置时异步的

:::

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setMesh](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setmesh)

___

### setPupilColor <Score text="setPupilColor" /> 

▸ **setPupilColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置眼睛瞳孔花纹颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setPupilColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setpupilcolor)

___

### setPupilPositionX <Score text="setPupilPositionX" /> 

▸ **setPupilPositionX**(`value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置瞳孔左右位置

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setPupilPositionX](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setpupilpositionx)

___

### setPupilPositionY <Score text="setPupilPositionY" /> 

▸ **setPupilPositionY**(`value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置瞳孔上下位置

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setPupilPositionY](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setpupilpositiony)

___

### setPupilRotate <Score text="setPupilRotate" /> 

▸ **setPupilRotate**(`value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置瞳孔旋转

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setPupilRotate](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setpupilrotate)

___

### setPupilScale <Score text="setPupilScale" /> 

▸ **setPupilScale**(`value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置瞳孔大小缩放

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setPupilScale](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setpupilscale)

___

### setPupilTexture <Score text="setPupilTexture" /> 

▸ **setPupilTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置眼睛瞳孔花纹

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setPupilTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setpupiltexture)

___

### setRightEyeColor <Score text="setRightEyeColor" /> 

▸ **setRightEyeColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置右眼睛颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setRightEyeColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setrighteyecolor)

___

### setUpperEyeHighlightColor <Score text="setUpperEyeHighlightColor" /> 

▸ **setUpperEyeHighlightColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置上高光颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setUpperEyeHighlightColor](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setuppereyehighlightcolor)

___

### setUpperEyeHighlightTexture <Score text="setUpperEyeHighlightTexture" /> 

▸ **setUpperEyeHighlightTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置上高光种类

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | GUID值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md).[setUpperEyeHighlightTexture](../interfaces/Gameplay.IHumanoidV2HeadPart.md#setuppereyehighlighttexture)
