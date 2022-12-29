[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2MaterialStyle

# IHumanoidV2MaterialStyle <Badge type="tip" text="Interface" />

**`Description`**

人形对象 V2 材质风格

## Implemented by

- [`HumanoidV2`](../classes/Gameplay.Gameplay.HumanoidV2.md)

## Table of contents

| Methods                                                                                                                                                                                         |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[getBodyTattooColor](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoocolor)**(`number`): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取纹身颜色                    |
| **[getBodyTattooPositionX](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositionx)**(`number`): `number` <br> 获取纹身位置左右偏移                                                |
| **[getBodyTattooPositionY](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositiony)**(`number`): `number` <br> 获取身体纹身位置上下位置                                            |
| **[getBodyTattooRotation](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoorotation)**(`number`): `number` <br> 获取纹身旋转值                                                        |
| **[getBodyTattooType](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattootype)**(`number`): `string` <br> 获取纹身贴图 guid                                                             |
| **[getBodyTattooZoom](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoozoom)**(`number`): `number` <br> 获取身体纹身位置缩放                                                          |
| **[getSkinColor](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getskincolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 设置皮肤颜色                                        |
| **[getSkinTexture](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getskintexture)**(): `string` <br> 获取皮肤贴图                                                                                |
| **[setBodyTattooColor](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoocolor)**(`number`, [`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 身体纹身颜色 |
| **[setBodyTattooPositionX](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositionx)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置左右偏移                             |
| **[setBodyTattooPositionY](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositiony)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置上下位置                             |
| **[setBodyTattooRotation](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoorotation)**(`number`, `number`, `boolean`): `void` <br> 身体纹旋转                                         |
| **[setBodyTattooType](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattootype)**(`number`, `string`, `boolean`): `void` <br> 身体纹身种类                                               |
| **[setBodyTattooZoom](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoozoom)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置缩放                                           |
| **[setSkinColor](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setskincolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置皮肤颜色                       |
| **[setSkinTexture](Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setskintexture)**(`string`, `boolean`): `void` <br> 设置皮肤贴图                                                               |

## Methods

### getBodyTattooColor

▸ **getBodyTattooColor**(`index`): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取纹身颜色

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | 纹身 Index  |

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

纹身颜色

---

### getBodyTattooPositionX

▸ **getBodyTattooPositionX**(`index`): `number`

**`Description`**

获取纹身位置左右偏移

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | 纹身 index  |

#### Returns

`number`

纹身左右位置偏移值

---

### getBodyTattooPositionY

▸ **getBodyTattooPositionY**(`index`): `number`

**`Description`**

获取身体纹身位置上下位置

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | 纹身 index  |

#### Returns

`number`

纹身上线位置值

---

### getBodyTattooRotation

▸ **getBodyTattooRotation**(`index`): `number`

**`Description`**

获取纹身旋转值

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | 纹身 index  |

#### Returns

`number`

纹身旋转值

---

### getBodyTattooType

▸ **getBodyTattooType**(`index`): `string`

**`Description`**

获取纹身贴图 guid

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | 纹身 Index  |

#### Returns

`string`

纹身贴图 guid

---

### getBodyTattooZoom

▸ **getBodyTattooZoom**(`index`): `number`

**`Description`**

获取身体纹身位置缩放

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | 纹身 index  |

#### Returns

`number`

纹身缩放值

---

### getSkinColor

▸ **getSkinColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

设置皮肤颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

---

### getSkinTexture

▸ **getSkinTexture**(): `string`

**`Description`**

获取皮肤贴图

**`Effect`**

客户端生效

#### Returns

`string`

皮肤贴图 guid

---

### setBodyTattooColor

▸ **setBodyTattooColor**(`index`, `color`, `sync`): `void`

**`Description`**

身体纹身颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description             |
| :------ | :--------------------------------------------------- | :---------------------- |
| `index` | `number`                                             | 纹身 index              |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色值                  |
| `sync`  | `boolean`                                            | true 同步; false 不同步 |

#### Returns

`void`

---

### setBodyTattooPositionX

▸ **setBodyTattooPositionX**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹身位置左右偏移

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 纹身 Index              |
| `value` | `number`  | 偏移值                  |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setBodyTattooPositionY

▸ **setBodyTattooPositionY**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹身位置上下位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 纹身 Index              |
| `value` | `number`  | 偏移值                  |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setBodyTattooRotation

▸ **setBodyTattooRotation**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹旋转

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 纹身 Index              |
| `value` | `number`  | 旋转值                  |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setBodyTattooType

▸ **setBodyTattooType**(`index`, `guid`, `sync`): `void`

**`Description`**

身体纹身种类

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 纹身 index              |
| `guid`  | `string`  | 类型贴图 guid           |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setBodyTattooZoom

▸ **setBodyTattooZoom**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹身位置缩放

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 纹身 Index              |
| `value` | `number`  | 缩放值                  |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setSkinColor

▸ **setSkinColor**(`color`, `sync`): `void`

**`Description`**

设置皮肤颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description             |
| :------ | :--------------------------------------------------- | :---------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色                    |
| `sync`  | `boolean`                                            | true 同步; false 不同步 |

#### Returns

`void`

---

### setSkinTexture

▸ **setSkinTexture**(`guid`, `sync`): `void`

**`Description`**

设置皮肤贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description             |
| :----- | :-------- | :---------------------- |
| `guid` | `string`  | 模型 Guid               |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`
