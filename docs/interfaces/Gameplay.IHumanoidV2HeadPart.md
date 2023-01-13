[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2HeadPart

# IHumanoidV2HeadPart <Badge type="tip" text="Interface" /> <Score text="IHumanoidV2HeadPart" />

人形对象V2部位

## Hierarchy

- [`IPart`](Gameplay.IPart.md)

  ↳ **`IHumanoidV2HeadPart`**

## Implemented by

- [`HumanoidV2HeadPart`](../classes/Gameplay.HumanoidV2HeadPart.md)

## Table of contents

| Methods |
| :-----|
| **[characterFaceShadow](Gameplay.IHumanoidV2HeadPart.md#characterfaceshadow)**([`Rotation`](../classes/Type.Rotation.md), `number`): `void` <br> 设置模型|
| **[getBlushColor](Gameplay.IHumanoidV2HeadPart.md#getblushcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取腮红颜色|
| **[getBlushTexture](Gameplay.IHumanoidV2HeadPart.md#getblushtexture)**(): `string` <br> 获取腮红贴图|
| **[getBrowColor](Gameplay.IHumanoidV2HeadPart.md#getbrowcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取眉毛颜色|
| **[getBrowTexture](Gameplay.IHumanoidV2HeadPart.md#getbrowtexture)**(): `string` <br> 获取眉毛|
| **[getEyeHighlightColor](Gameplay.IHumanoidV2HeadPart.md#geteyehighlightcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取眼睛高光颜色|
| **[getEyeHighlightTexture](Gameplay.IHumanoidV2HeadPart.md#geteyehighlighttexture)**(): `string` <br> 获取眼睛高光形状|
| **[getEyeShadowColor](Gameplay.IHumanoidV2HeadPart.md#geteyeshadowcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取眼影颜色|
| **[getEyeShadowTexture](Gameplay.IHumanoidV2HeadPart.md#geteyeshadowtexture)**(): `string` <br> 获取眼影贴图|
| **[getEyeTexture](Gameplay.IHumanoidV2HeadPart.md#geteyetexture)**(): `string` <br> 获取眼睛贴图|
| **[getEyelashColor](Gameplay.IHumanoidV2HeadPart.md#geteyelashcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取睫毛颜色|
| **[getEyelashTexture](Gameplay.IHumanoidV2HeadPart.md#geteyelashtexture)**(): `string` <br> 获取睫毛|
| **[getFacialTattooColor](Gameplay.IHumanoidV2HeadPart.md#getfacialtattoocolor)**(`number`): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取面部纹身颜色|
| **[getFacialTattooPositionX](Gameplay.IHumanoidV2HeadPart.md#getfacialtattoopositionx)**(`number`): `number` <br> 获取面部纹身左右位置|
| **[getFacialTattooPositionY](Gameplay.IHumanoidV2HeadPart.md#getfacialtattoopositiony)**(`number`): `number` <br> 获取面部纹身上下位置|
| **[getFacialTattooRotation](Gameplay.IHumanoidV2HeadPart.md#getfacialtattoorotation)**(`number`): `number` <br> 获取面部纹身旋转|
| **[getFacialTattooType](Gameplay.IHumanoidV2HeadPart.md#getfacialtattootype)**(`number`): `string` <br> 获取面部纹身种类贴图|
| **[getFacialTattooZoom](Gameplay.IHumanoidV2HeadPart.md#getfacialtattoozoom)**(`number`): `number` <br> 获取面部纹身缩放|
| **[getLeftEyeColor](Gameplay.IHumanoidV2HeadPart.md#getlefteyecolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取左眼睛颜色|
| **[getLipstickColor](Gameplay.IHumanoidV2HeadPart.md#getlipstickcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取唇膏颜色|
| **[getLipstickTexture](Gameplay.IHumanoidV2HeadPart.md#getlipsticktexture)**(): `string` <br> 获取唇膏贴图|
| **[getLowerEyeHighlightColor](Gameplay.IHumanoidV2HeadPart.md#getlowereyehighlightcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取上高光颜色|
| **[getLowerEyeHighlightTexture](Gameplay.IHumanoidV2HeadPart.md#getlowereyehighlighttexture)**(): `string` <br> 获取下高光种类|
| **[getPupilColor](Gameplay.IHumanoidV2HeadPart.md#getpupilcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取眼睛瞳孔花纹颜色|
| **[getPupilPositionX](Gameplay.IHumanoidV2HeadPart.md#getpupilpositionx)**(): `number` <br> 获取瞳孔左右位置|
| **[getPupilPositionY](Gameplay.IHumanoidV2HeadPart.md#getpupilpositiony)**(): `number` <br> 获取瞳孔上下位置|
| **[getPupilRotate](Gameplay.IHumanoidV2HeadPart.md#getpupilrotate)**(): `number` <br> 获取瞳孔旋转|
| **[getPupilScale](Gameplay.IHumanoidV2HeadPart.md#getpupilscale)**(): `number` <br> 获取瞳孔大小缩放|
| **[getPupilTexture](Gameplay.IHumanoidV2HeadPart.md#getpupiltexture)**(): `string` <br> 获取眼睛瞳孔花纹|
| **[getRightEyeColor](Gameplay.IHumanoidV2HeadPart.md#getrighteyecolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取右眼睛颜色|
| **[getUpperEyeHighlightColor](Gameplay.IHumanoidV2HeadPart.md#getuppereyehighlightcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取上高光颜色|
| **[getUpperEyeHighlightTexture](Gameplay.IHumanoidV2HeadPart.md#getuppereyehighlighttexture)**(): `string` <br> 获取上高光种类|
| **[setBlushColor](Gameplay.IHumanoidV2HeadPart.md#setblushcolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置腮红颜色|
| **[setBlushTexture](Gameplay.IHumanoidV2HeadPart.md#setblushtexture)**(`string`, `boolean`): `void` <br> 设置腮红贴图|
| **[setBrowColor](Gameplay.IHumanoidV2HeadPart.md#setbrowcolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置眉毛颜色|
| **[setBrowTexture](Gameplay.IHumanoidV2HeadPart.md#setbrowtexture)**(`string`, `boolean`): `void` <br> 设置眉毛|
| **[setEyeHighlightColor](Gameplay.IHumanoidV2HeadPart.md#seteyehighlightcolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置眼睛高光颜色|
| **[setEyeHighlightTexture](Gameplay.IHumanoidV2HeadPart.md#seteyehighlighttexture)**(`string`, `boolean`): `void` <br> 设置眼睛高光形状|
| **[setEyeShadowColor](Gameplay.IHumanoidV2HeadPart.md#seteyeshadowcolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置眼影颜色|
| **[setEyeShadowTexture](Gameplay.IHumanoidV2HeadPart.md#seteyeshadowtexture)**(`string`, `boolean`): `void` <br> 设置眼影贴图|
| **[setEyeTexture](Gameplay.IHumanoidV2HeadPart.md#seteyetexture)**(`string`, `boolean`): `void` <br> 设置眼睛贴图|
| **[setEyelashColor](Gameplay.IHumanoidV2HeadPart.md#seteyelashcolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置睫毛颜色|
| **[setEyelashTexture](Gameplay.IHumanoidV2HeadPart.md#seteyelashtexture)**(`string`, `boolean`): `void` <br> 设置睫毛|
| **[setFacialTattooColor](Gameplay.IHumanoidV2HeadPart.md#setfacialtattoocolor)**(`number`, [`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置面部纹身颜色|
| **[setFacialTattooPositionX](Gameplay.IHumanoidV2HeadPart.md#setfacialtattoopositionx)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身左右位置|
| **[setFacialTattooPositionY](Gameplay.IHumanoidV2HeadPart.md#setfacialtattoopositiony)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身上下位置|
| **[setFacialTattooRotation](Gameplay.IHumanoidV2HeadPart.md#setfacialtattoorotation)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身旋转|
| **[setFacialTattooType](Gameplay.IHumanoidV2HeadPart.md#setfacialtattootype)**(`number`, `string`, `boolean`): `void` <br> 设置面部纹身种类贴图|
| **[setFacialTattooZoom](Gameplay.IHumanoidV2HeadPart.md#setfacialtattoozoom)**(`number`, `number`, `boolean`): `void` <br> 设置面部纹身缩放|
| **[setLeftEyeColor](Gameplay.IHumanoidV2HeadPart.md#setlefteyecolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置左眼睛颜色|
| **[setLipstickColor](Gameplay.IHumanoidV2HeadPart.md#setlipstickcolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置唇膏颜色|
| **[setLipstickTexture](Gameplay.IHumanoidV2HeadPart.md#setlipsticktexture)**(`string`, `boolean`): `void` <br> 设置唇膏贴图|
| **[setLowerEyeHighlightColor](Gameplay.IHumanoidV2HeadPart.md#setlowereyehighlightcolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置下高光颜色|
| **[setLowerEyeHighlightTexture](Gameplay.IHumanoidV2HeadPart.md#setlowereyehighlighttexture)**(`string`, `boolean`): `void` <br> 设置下高光种类|
| **[setPupilColor](Gameplay.IHumanoidV2HeadPart.md#setpupilcolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置眼睛瞳孔花纹颜色|
| **[setPupilPositionX](Gameplay.IHumanoidV2HeadPart.md#setpupilpositionx)**(`number`, `boolean`): `void` <br> 设置瞳孔左右位置|
| **[setPupilPositionY](Gameplay.IHumanoidV2HeadPart.md#setpupilpositiony)**(`number`, `boolean`): `void` <br> 设置瞳孔上下位置|
| **[setPupilRotate](Gameplay.IHumanoidV2HeadPart.md#setpupilrotate)**(`number`, `boolean`): `void` <br> 设置瞳孔旋转|
| **[setPupilScale](Gameplay.IHumanoidV2HeadPart.md#setpupilscale)**(`number`, `boolean`): `void` <br> 设置瞳孔大小缩放|
| **[setPupilTexture](Gameplay.IHumanoidV2HeadPart.md#setpupiltexture)**(`string`, `boolean`): `void` <br> 设置眼睛瞳孔花纹|
| **[setRightEyeColor](Gameplay.IHumanoidV2HeadPart.md#setrighteyecolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置右眼睛颜色|
| **[setUpperEyeHighlightColor](Gameplay.IHumanoidV2HeadPart.md#setuppereyehighlightcolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置上高光颜色|
| **[setUpperEyeHighlightTexture](Gameplay.IHumanoidV2HeadPart.md#setuppereyehighlighttexture)**(`string`, `boolean`): `void` <br> 设置上高光种类|


::: details 点击查看继承
| Methods |
| :-----|
| **[getMesh](Gameplay.IPart.md#getmesh)**(): `string` <br> 获取部位模型|
| **[setMesh](Gameplay.IPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置部位模型|
:::


## Methods

### characterFaceShadow <Score text="characterFaceShadow" /> 

▸ **characterFaceShadow**(`directLightRotator`, `traceDistance`): `void` <Badge type="tip" text="other" />

设置模型

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `directLightRotator` | [`Rotation`](../classes/Type.Rotation.md) | 平行光方向 |
| `traceDistance` | `number` | 检测距离 default:默认检测距离 |


___

### getBlushColor <Score text="getBlushColor" /> 

▸ **getBlushColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

获取腮红颜色

客户端

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getBlushTexture <Score text="getBlushTexture" /> 

▸ **getBlushTexture**(): `string` <Badge type="tip" text="other" />

获取腮红贴图

客户端

#### Returns

`string`

GUID

___

### getBrowColor <Score text="getBrowColor" /> 

▸ **getBrowColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

获取眉毛颜色

客户端

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getBrowTexture <Score text="getBrowTexture" /> 

▸ **getBrowTexture**(): `string` <Badge type="tip" text="other" />

获取眉毛

客户端

#### Returns

`string`

GUID

___

### getEyeHighlightColor <Score text="getEyeHighlightColor" /> 

▸ **getEyeHighlightColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

获取眼睛高光颜色

客户端

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getEyeHighlightTexture <Score text="getEyeHighlightTexture" /> 

▸ **getEyeHighlightTexture**(): `string` <Badge type="tip" text="other" />

获取眼睛高光形状

sync = false:客户端;
sync = true:双端

#### Returns

`string`

GUID

___

### getEyeShadowColor <Score text="getEyeShadowColor" /> 

▸ **getEyeShadowColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

获取眼影颜色

客户端

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getEyeShadowTexture <Score text="getEyeShadowTexture" /> 

▸ **getEyeShadowTexture**(): `string` <Badge type="tip" text="other" />

获取眼影贴图

客户端

#### Returns

`string`

GUID

___

### getEyeTexture <Score text="getEyeTexture" /> 

▸ **getEyeTexture**(): `string` <Badge type="tip" text="other" />

获取眼睛贴图

客户端

#### Returns

`string`

GUID

___

### getEyelashColor <Score text="getEyelashColor" /> 

▸ **getEyelashColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

获取睫毛颜色

客户端

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getEyelashTexture <Score text="getEyelashTexture" /> 

▸ **getEyelashTexture**(): `string` <Badge type="tip" text="other" />

获取睫毛

客户端

#### Returns

`string`

GUID

___

### getFacialTattooColor <Score text="getFacialTattooColor" /> 

▸ **getFacialTattooColor**(`index`): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

获取面部纹身颜色

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getFacialTattooPositionX <Score text="getFacialTattooPositionX" /> 

▸ **getFacialTattooPositionX**(`index`): `number` <Badge type="tip" text="other" />

获取面部纹身左右位置

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`number`

值

___

### getFacialTattooPositionY <Score text="getFacialTattooPositionY" /> 

▸ **getFacialTattooPositionY**(`index`): `number` <Badge type="tip" text="other" />

获取面部纹身上下位置

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`number`

值

___

### getFacialTattooRotation <Score text="getFacialTattooRotation" /> 

▸ **getFacialTattooRotation**(`index`): `number` <Badge type="tip" text="other" />

获取面部纹身旋转

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`number`

值

___

### getFacialTattooType <Score text="getFacialTattooType" /> 

▸ **getFacialTattooType**(`index`): `string` <Badge type="tip" text="other" />

获取面部纹身种类贴图

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`string`

GUID

___

### getFacialTattooZoom <Score text="getFacialTattooZoom" /> 

▸ **getFacialTattooZoom**(`index`): `number` <Badge type="tip" text="other" />

获取面部纹身缩放

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |

#### Returns

`number`

值

___

### getLeftEyeColor <Score text="getLeftEyeColor" /> 

▸ **getLeftEyeColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

获取左眼睛颜色

客户端

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getLipstickColor <Score text="getLipstickColor" /> 

▸ **getLipstickColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

获取唇膏颜色

客户端

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getLipstickTexture <Score text="getLipstickTexture" /> 

▸ **getLipstickTexture**(): `string` <Badge type="tip" text="other" />

获取唇膏贴图

客户端

#### Returns

`string`

GUID

___

### getLowerEyeHighlightColor <Score text="getLowerEyeHighlightColor" /> 

▸ **getLowerEyeHighlightColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

获取上高光颜色

客户端

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getLowerEyeHighlightTexture <Score text="getLowerEyeHighlightTexture" /> 

▸ **getLowerEyeHighlightTexture**(): `string` <Badge type="tip" text="other" />

获取下高光种类

客户端

#### Returns

`string`

下高光GUID


### getPupilColor <Score text="getPupilColor" /> 

▸ **getPupilColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

获取眼睛瞳孔花纹颜色

客户端

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getPupilPositionX <Score text="getPupilPositionX" /> 

▸ **getPupilPositionX**(): `number` <Badge type="tip" text="other" />

获取瞳孔左右位置

客户端

#### Returns

`number`

左右位置值

___

### getPupilPositionY <Score text="getPupilPositionY" /> 

▸ **getPupilPositionY**(): `number` <Badge type="tip" text="other" />

获取瞳孔上下位置

客户端

#### Returns

`number`

上下位置值

___

### getPupilRotate <Score text="getPupilRotate" /> 

▸ **getPupilRotate**(): `number` <Badge type="tip" text="other" />

获取瞳孔旋转

客户端

#### Returns

`number`

瞳孔旋转值

___

### getPupilScale <Score text="getPupilScale" /> 

▸ **getPupilScale**(): `number` <Badge type="tip" text="other" />

获取瞳孔大小缩放

客户端

#### Returns

`number`

大小缩放值

___

### getPupilTexture <Score text="getPupilTexture" /> 

▸ **getPupilTexture**(): `string` <Badge type="tip" text="other" />

获取眼睛瞳孔花纹

客户端

#### Returns

`string`

GUID

___

### getRightEyeColor <Score text="getRightEyeColor" /> 

▸ **getRightEyeColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

获取右眼睛颜色

客户端

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getUpperEyeHighlightColor <Score text="getUpperEyeHighlightColor" /> 

▸ **getUpperEyeHighlightColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

获取上高光颜色

客户端

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getUpperEyeHighlightTexture <Score text="getUpperEyeHighlightTexture" /> 

▸ **getUpperEyeHighlightTexture**(): `string` <Badge type="tip" text="other" />

获取上高光种类

客户端

#### Returns

`string`

GUID

___

### setBlushColor <Score text="setBlushColor" /> 

▸ **setBlushColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

设置腮红颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setBlushTexture <Score text="setBlushTexture" /> 

▸ **setBlushTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

设置腮红贴图

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setBrowColor <Score text="setBrowColor" /> 

▸ **setBrowColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

设置眉毛颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setBrowTexture <Score text="setBrowTexture" /> 

▸ **setBrowTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

设置眉毛

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setEyeHighlightColor <Score text="setEyeHighlightColor" /> 

▸ **setEyeHighlightColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

设置眼睛高光颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setEyeHighlightTexture <Score text="setEyeHighlightTexture" /> 

▸ **setEyeHighlightTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

设置眼睛高光形状

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setEyeShadowColor <Score text="setEyeShadowColor" /> 

▸ **setEyeShadowColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

设置眼影颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setEyeShadowTexture <Score text="setEyeShadowTexture" /> 

▸ **setEyeShadowTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

设置眼影贴图

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setEyeTexture <Score text="setEyeTexture" /> 

▸ **setEyeTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

设置眼睛贴图

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setEyelashColor <Score text="setEyelashColor" /> 

▸ **setEyelashColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

设置睫毛颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setEyelashTexture <Score text="setEyelashTexture" /> 

▸ **setEyelashTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

设置睫毛

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setFacialTattooColor <Score text="setFacialTattooColor" /> 

▸ **setFacialTattooColor**(`index`, `color`, `sync`): `void` <Badge type="tip" text="other" />

设置面部纹身颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setFacialTattooPositionX <Score text="setFacialTattooPositionX" /> 

▸ **setFacialTattooPositionX**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

设置面部纹身左右位置

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setFacialTattooPositionY <Score text="setFacialTattooPositionY" /> 

▸ **setFacialTattooPositionY**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

设置面部纹身上下位置

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setFacialTattooRotation <Score text="setFacialTattooRotation" /> 

▸ **setFacialTattooRotation**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

设置面部纹身旋转

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setFacialTattooType <Score text="setFacialTattooType" /> 

▸ **setFacialTattooType**(`index`, `GUID`, `sync`): `void` <Badge type="tip" text="other" />

设置面部纹身种类贴图

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setFacialTattooZoom <Score text="setFacialTattooZoom" /> 

▸ **setFacialTattooZoom**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

设置面部纹身缩放

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身索引 |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setLeftEyeColor <Score text="setLeftEyeColor" /> 

▸ **setLeftEyeColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

设置左眼睛颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setLipstickColor <Score text="setLipstickColor" /> 

▸ **setLipstickColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

设置唇膏颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setLipstickTexture <Score text="setLipstickTexture" /> 

▸ **setLipstickTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

设置唇膏贴图

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setLowerEyeHighlightColor <Score text="setLowerEyeHighlightColor" /> 

▸ **setLowerEyeHighlightColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

设置下高光颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setLowerEyeHighlightTexture <Score text="setLowerEyeHighlightTexture" /> 

▸ **setLowerEyeHighlightTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

设置下高光种类

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  值 |
| `sync` | `boolean` | true 同步; false 不同步 |



### setPupilColor <Score text="setPupilColor" /> 

▸ **setPupilColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

设置眼睛瞳孔花纹颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setPupilPositionX <Score text="setPupilPositionX" /> 

▸ **setPupilPositionX**(`value`, `sync`): `void` <Badge type="tip" text="other" />

设置瞳孔左右位置

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setPupilPositionY <Score text="setPupilPositionY" /> 

▸ **setPupilPositionY**(`value`, `sync`): `void` <Badge type="tip" text="other" />

设置瞳孔上下位置

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setPupilRotate <Score text="setPupilRotate" /> 

▸ **setPupilRotate**(`value`, `sync`): `void` <Badge type="tip" text="other" />

设置瞳孔旋转

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setPupilScale <Score text="setPupilScale" /> 

▸ **setPupilScale**(`value`, `sync`): `void` <Badge type="tip" text="other" />

设置瞳孔大小缩放

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setPupilTexture <Score text="setPupilTexture" /> 

▸ **setPupilTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

设置眼睛瞳孔花纹

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setRightEyeColor <Score text="setRightEyeColor" /> 

▸ **setRightEyeColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

设置右眼睛颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setUpperEyeHighlightColor <Score text="setUpperEyeHighlightColor" /> 

▸ **setUpperEyeHighlightColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

设置上高光颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 值 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setUpperEyeHighlightTexture <Score text="setUpperEyeHighlightTexture" /> 

▸ **setUpperEyeHighlightTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

设置上高光种类

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | GUID值 |
| `sync` | `boolean` | true 同步; false 不同步 |

