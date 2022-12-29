[Gameplay](../modules/Gameplay.Gameplay.md) / SomatotypeBase

# SomatotypeBase <Badge type="tip" text="Class" />

**`Description`**

体型基类

## Hierarchy

- **`SomatotypeBase`**

  ↳ [`HumanoidV1`](Gameplay.Gameplay.HumanoidV1.md)

  ↳ [`HumanoidV2`](Gameplay.Gameplay.HumanoidV2.md)

## Table of contents

| Properties                                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------------------------------------ |
| **[enableOutline](Gameplay.Gameplay.SomatotypeBase.md#enableoutline)**: `boolean` <br> 是否启动遮挡时角色描边                               |
| **[postProcessObj](Gameplay.Gameplay.SomatotypeBase.md#postprocessobj)**: [`PostProcess`](Gameplay.Gameplay.PostProcess.md) <br> 后处理对象 |

| Methods                                                                                                                                                                |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[enablePostProcess](Gameplay.Gameplay.SomatotypeBase.md#enablepostprocess)**(`boolean`, [`LinearColor`](Type.Type.LinearColor.md), `number`): `void` <br> 后处理开关 |
| **[setOutline](Gameplay.Gameplay.SomatotypeBase.md#setoutline)**(`boolean`): `boolean` <br> 描边开关                                                                   |
| **[setOutlineAdvance](Gameplay.Gameplay.SomatotypeBase.md#setoutlineadvance)**(`boolean`, `number`): `void` <br> 后处理描边开关                                        |

**`Description`**

构造函数

#### Parameters

| Name        | Type                                                  | Description |
| :---------- | :---------------------------------------------------- | :---------- |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | 角色        |

## Properties

### enableOutline

• `Protected` **enableOutline**: `boolean`

**`Description`**

是否启动遮挡时角色描边

---

### postProcessObj

• `Protected` **postProcessObj**: [`PostProcess`](Gameplay.Gameplay.PostProcess.md)

**`Description`**

后处理对象

## Methods

### enablePostProcess

▸ **enablePostProcess**(`usedPostProcess`, `newOutlineColor`, `newOutlineWidth`): `void`

**`Description`**

后处理开关

**`Effect`**

客户端调用生效

#### Parameters

| Name              | Type                                      | Description        |
| :---------------- | :---------------------------------------- | :----------------- |
| `usedPostProcess` | `boolean`                                 | 是否使用后处理功能 |
| `newOutlineColor` | [`LinearColor`](Type.Type.LinearColor.md) | Outline 颜色       |
| `newOutlineWidth` | `number`                                  | Outline 宽度       |

#### Returns

`void`

---

### setOutline

▸ **setOutline**(`usedOutline`): `boolean`

**`Description`**

描边开关

**`Effect`**

调用调用生效

#### Parameters

| Name          | Type      | Description      |
| :------------ | :-------- | :--------------- |
| `usedOutline` | `boolean` | 是否使用描边功能 |

#### Returns

`boolean`

是否成功

---

### setOutlineAdvance

▸ **setOutlineAdvance**(`newEnableOutline`, `newOutlineColorIndex`): `void`

**`Description`**

后处理描边开关

**`Effect`**

调用端调用生效

#### Parameters

| Name                   | Type      | Description      |
| :--------------------- | :-------- | :--------------- |
| `newEnableOutline`     | `boolean` | 是否开启描边功能 |
| `newOutlineColorIndex` | `number`  | 描边的颜色       |

#### Returns

`void`
