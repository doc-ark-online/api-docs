[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2HeadPart

# Interface: IHumanoidV2HeadPart

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).IHumanoidV2HeadPart

**`Description`**

人形对象 V2 部位

**`Author`**

guang.deng

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
- [getEyeHighlightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyehighlightcolor)
- [getEyeHighlightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyehighlighttexture)
- [getEyeShadowColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyeshadowcolor)
- [getEyeShadowTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyeshadowtexture)
- [getEyeTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyetexture)
- [getEyelashColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyelashcolor)
- [getEyelashTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#geteyelashtexture)
- [getFacialTattooColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoocolor)
- [getFacialTattooPositionX](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoopositionx)
- [getFacialTattooPositionY](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoopositiony)
- [getFacialTattooRotation](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoorotation)
- [getFacialTattooType](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattootype)
- [getFacialTattooZoom](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getfacialtattoozoom)
- [getLeftEyeColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlefteyecolor)
- [getLipstickColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlipstickcolor)
- [getLipstickTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlipsticktexture)
- [getLowerEyeHighlightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlowereyehighlightcolor)
- [getLowerEyeHighlightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getlowereyehighlighttexture)
- [getMesh](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getmesh)
- [getPupilColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilcolor)
- [getPupilPositionX](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilpositionx)
- [getPupilPositionY](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilpositiony)
- [getPupilRotate](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilrotate)
- [getPupilScale](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupilscale)
- [getPupilTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getpupiltexture)
- [getRightEyeColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getrighteyecolor)
- [getUpperEyeHighlightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getuppereyehighlightcolor)
- [getUpperEyeHighlightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#getuppereyehighlighttexture)
- [setBlushColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setblushcolor)
- [setBlushTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setblushtexture)
- [setBrowColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setbrowcolor)
- [setBrowTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setbrowtexture)
- [setEyeHighlightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyehighlightcolor)
- [setEyeHighlightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyehighlighttexture)
- [setEyeShadowColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyeshadowcolor)
- [setEyeShadowTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyeshadowtexture)
- [setEyeTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyetexture)
- [setEyelashColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyelashcolor)
- [setEyelashTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#seteyelashtexture)
- [setFacialTattooColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoocolor)
- [setFacialTattooPositionX](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoopositionx)
- [setFacialTattooPositionY](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoopositiony)
- [setFacialTattooRotation](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoorotation)
- [setFacialTattooType](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattootype)
- [setFacialTattooZoom](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setfacialtattoozoom)
- [setLeftEyeColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlefteyecolor)
- [setLipstickColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlipstickcolor)
- [setLipstickTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlipsticktexture)
- [setLowerEyeHighlightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlowereyehighlightcolor)
- [setLowerEyeHighlightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setlowereyehighlighttexture)
- [setMesh](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setmesh)
- [setPupilColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilcolor)
- [setPupilPositionX](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilpositionx)
- [setPupilPositionY](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilpositiony)
- [setPupilRotate](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilrotate)
- [setPupilScale](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupilscale)
- [setPupilTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setpupiltexture)
- [setRightEyeColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setrighteyecolor)
- [setUpperEyeHighlightColor](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setuppereyehighlightcolor)
- [setUpperEyeHighlightTexture](Gameplay.Gameplay.IHumanoidV2HeadPart.md#setuppereyehighlighttexture)

## Methods

### characterFaceShadow

▸ **characterFaceShadow**(`directLightRotator`, `traceDistance`): `void`

**`Description`**

设置模型

**`Effect`**

客户端

#### Parameters

| Name                 | Type                                           | Description                         |
| :------------------- | :--------------------------------------------- | :---------------------------------- |
| `directLightRotator` | [`Rotation`](../classes/Type.Type.Rotation.md) | usage:平行光方向                    |
| `traceDistance`      | `number`                                       | usage:检测距离 default:默认检测距离 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3202

---

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

Gameplay/index.d.ts:3521

---

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

Gameplay/index.d.ts:3506

---

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

Gameplay/index.d.ts:3687

---

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

Gameplay/index.d.ts:3672

---

### getEyeHighlightColor

▸ **getEyeHighlightColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取眼睛高光颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3281

---

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

#### Defined in

Gameplay/index.d.ts:3266

---

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

Gameplay/index.d.ts:3491

---

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

Gameplay/index.d.ts:3476

---

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

Gameplay/index.d.ts:3220

---

### getEyelashColor

▸ **getEyelashColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取睫毛颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3311

---

### getEyelashTexture

▸ **getEyelashTexture**(): `string`

**`Description`**

获取睫毛

**`Effect`**

客户端

#### Returns

`string`

guid

#### Defined in

Gameplay/index.d.ts:3296

---

### getFacialTattooColor

▸ **getFacialTattooColor**(`index`): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取面部纹身颜色

**`Effect`**

客户端

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `index` | `number` | usage:纹身索引 |

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3589

---

### getFacialTattooPositionX

▸ **getFacialTattooPositionX**(`index`): `number`

**`Description`**

获取面部纹身左右位置

**`Effect`**

客户端

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `index` | `number` | usage:纹身索引 |

#### Returns

`number`

值

#### Defined in

Gameplay/index.d.ts:3606

---

### getFacialTattooPositionY

▸ **getFacialTattooPositionY**(`index`): `number`

**`Description`**

获取面部纹身上下位置

**`Effect`**

客户端

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `index` | `number` | usage:纹身索引 |

#### Returns

`number`

值

#### Defined in

Gameplay/index.d.ts:3623

---

### getFacialTattooRotation

▸ **getFacialTattooRotation**(`index`): `number`

**`Description`**

获取面部纹身旋转

**`Effect`**

客户端

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `index` | `number` | usage:纹身索引 |

#### Returns

`number`

值

#### Defined in

Gameplay/index.d.ts:3640

---

### getFacialTattooType

▸ **getFacialTattooType**(`index`): `string`

**`Description`**

获取面部纹身种类贴图

**`Effect`**

客户端

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `index` | `number` | usage:纹身索引 |

#### Returns

`string`

guid

#### Defined in

Gameplay/index.d.ts:3568

---

### getFacialTattooZoom

▸ **getFacialTattooZoom**(`index`): `number`

**`Description`**

获取面部纹身缩放

**`Effect`**

客户端

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `index` | `number` | usage:纹身索引 |

#### Returns

`number`

值

#### Defined in

Gameplay/index.d.ts:3657

---

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

Gameplay/index.d.ts:3235

---

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

Gameplay/index.d.ts:3551

---

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

Gameplay/index.d.ts:3536

---

### getLowerEyeHighlightColor

▸ **getLowerEyeHighlightColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取上高光颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3371

---

### getLowerEyeHighlightTexture

▸ **getLowerEyeHighlightTexture**(): `string`

**`Description`**

获取下高光种类

**`Effect`**

客户端

#### Returns

`string`

下高光 guid

#### Defined in

Gameplay/index.d.ts:3356

---

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取部位模型

**`Effect`**

双端

#### Returns

`string`

模型 Guid

#### Inherited from

[IPart](Gameplay.Gameplay.IPart.md).[getMesh](Gameplay.Gameplay.IPart.md#getmesh)

#### Defined in

Gameplay/index.d.ts:2784

---

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

Gameplay/index.d.ts:3401

---

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

Gameplay/index.d.ts:3416

---

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

Gameplay/index.d.ts:3431

---

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

Gameplay/index.d.ts:3461

---

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

Gameplay/index.d.ts:3446

---

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

Gameplay/index.d.ts:3386

---

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

Gameplay/index.d.ts:3250

---

### getUpperEyeHighlightColor

▸ **getUpperEyeHighlightColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取上高光颜色

**`Effect`**

客户端

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3341

---

### getUpperEyeHighlightTexture

▸ **getUpperEyeHighlightTexture**(): `string`

**`Description`**

获取上高光种类

**`Effect`**

客户端

#### Returns

`string`

guid

#### Defined in

Gameplay/index.d.ts:3326

---

### setBlushColor

▸ **setBlushColor**(`color`, `sync`): `void`

**`Description`**

设置腮红颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3515

---

### setBlushTexture

▸ **setBlushTexture**(`guid`, `sync`): `void`

**`Description`**

设置腮红贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:贴图 Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3500

---

### setBrowColor

▸ **setBrowColor**(`color`, `sync`): `void`

**`Description`**

设置眉毛颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3681

---

### setBrowTexture

▸ **setBrowTexture**(`guid`, `sync`): `void`

**`Description`**

设置眉毛

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:贴图 Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3666

---

### setEyeHighlightColor

▸ **setEyeHighlightColor**(`color`, `sync`): `void`

**`Description`**

设置眼睛高光颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3275

---

### setEyeHighlightTexture

▸ **setEyeHighlightTexture**(`guid`, `sync`): `void`

**`Description`**

设置眼睛高光形状

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:贴图 Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3259

---

### setEyeShadowColor

▸ **setEyeShadowColor**(`color`, `sync`): `void`

**`Description`**

设置眼影颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3485

---

### setEyeShadowTexture

▸ **setEyeShadowTexture**(`guid`, `sync`): `void`

**`Description`**

设置眼影贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:贴图 Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3470

---

### setEyeTexture

▸ **setEyeTexture**(`guid`, `sync`): `void`

**`Description`**

设置眼睛贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:贴图 Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3214

---

### setEyelashColor

▸ **setEyelashColor**(`color`, `sync`): `void`

**`Description`**

设置睫毛颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3305

---

### setEyelashTexture

▸ **setEyelashTexture**(`guid`, `sync`): `void`

**`Description`**

设置睫毛

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:贴图 Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3290

---

### setFacialTattooColor

▸ **setFacialTattooColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置面部纹身颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `index` | `number`                                             | usage:纹身索引                |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3578

---

### setFacialTattooPositionX

▸ **setFacialTattooPositionX**(`index`, `value`, `sync`): `void`

**`Description`**

设置面部纹身左右位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:纹身索引                |
| `value` | `number`  | usage:值                      |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3599

---

### setFacialTattooPositionY

▸ **setFacialTattooPositionY**(`index`, `value`, `sync`): `void`

**`Description`**

设置面部纹身上下位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:纹身索引                |
| `value` | `number`  | usage:值                      |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3616

---

### setFacialTattooRotation

▸ **setFacialTattooRotation**(`index`, `value`, `sync`): `void`

**`Description`**

设置面部纹身旋转

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:纹身索引                |
| `value` | `number`  | usage:值                      |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3633

---

### setFacialTattooType

▸ **setFacialTattooType**(`index`, `guid`, `sync`): `void`

**`Description`**

设置面部纹身种类贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:纹身索引                |
| `guid`  | `string`  | usage:贴图 Guid               |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3561

---

### setFacialTattooZoom

▸ **setFacialTattooZoom**(`index`, `value`, `sync`): `void`

**`Description`**

设置面部纹身缩放

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:纹身索引                |
| `value` | `number`  | usage:值                      |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3650

---

### setLeftEyeColor

▸ **setLeftEyeColor**(`color`, `sync`): `void`

**`Description`**

设置左眼睛颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3229

---

### setLipstickColor

▸ **setLipstickColor**(`color`, `sync`): `void`

**`Description`**

设置唇膏颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3545

---

### setLipstickTexture

▸ **setLipstickTexture**(`guid`, `sync`): `void`

**`Description`**

设置唇膏贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:贴图 Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3530

---

### setLowerEyeHighlightColor

▸ **setLowerEyeHighlightColor**(`color`, `sync`): `void`

**`Description`**

设置下高光颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:值                      |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3365

---

### setLowerEyeHighlightTexture

▸ **setLowerEyeHighlightTexture**(`guid`, `sync`): `void`

**`Description`**

设置下高光种类

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage: 值                     |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3350

---

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置部位模型

**`Precautions`**

如果模型 Guid 没有预加载，则 v2 本地设置时异步的

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:模型 Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Inherited from

[IPart](Gameplay.Gameplay.IPart.md).[setMesh](Gameplay.Gameplay.IPart.md#setmesh)

#### Defined in

Gameplay/index.d.ts:2778

---

### setPupilColor

▸ **setPupilColor**(`color`, `sync`): `void`

**`Description`**

设置眼睛瞳孔花纹颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3395

---

### setPupilPositionX

▸ **setPupilPositionX**(`value`, `sync`): `void`

**`Description`**

设置瞳孔左右位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `value` | `number`  | usage:值                      |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3410

---

### setPupilPositionY

▸ **setPupilPositionY**(`value`, `sync`): `void`

**`Description`**

设置瞳孔上下位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `value` | `number`  | usage:值                      |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3425

---

### setPupilRotate

▸ **setPupilRotate**(`value`, `sync`): `void`

**`Description`**

设置瞳孔旋转

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `value` | `number`  | usage:值                      |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3455

---

### setPupilScale

▸ **setPupilScale**(`value`, `sync`): `void`

**`Description`**

设置瞳孔大小缩放

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `value` | `number`  | usage:值                      |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3440

---

### setPupilTexture

▸ **setPupilTexture**(`guid`, `sync`): `void`

**`Description`**

设置眼睛瞳孔花纹

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:贴图 Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3380

---

### setRightEyeColor

▸ **setRightEyeColor**(`color`, `sync`): `void`

**`Description`**

设置右眼睛颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3244

---

### setUpperEyeHighlightColor

▸ **setUpperEyeHighlightColor**(`color`, `sync`): `void`

**`Description`**

设置上高光颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:值                      |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3335

---

### setUpperEyeHighlightTexture

▸ **setUpperEyeHighlightTexture**(`guid`, `sync`): `void`

**`Description`**

设置上高光种类

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:guid 值                 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3320
