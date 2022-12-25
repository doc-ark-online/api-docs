[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / SomatotypeBase

# Class: SomatotypeBase

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).SomatotypeBase

**`Description`**

体型基类

**`Author`**

guang.deng

**`Network Status`**

usage:双端

## Hierarchy

- **`SomatotypeBase`**

  ↳ [`HumanoidV1`](Gameplay.Gameplay.HumanoidV1.md)

  ↳ [`HumanoidV2`](Gameplay.Gameplay.HumanoidV2.md)

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.SomatotypeBase.md#constructor)

### Properties

- [enableOutline](Gameplay.Gameplay.SomatotypeBase.md#enableoutline)
- [postProcessObj](Gameplay.Gameplay.SomatotypeBase.md#postprocessobj)

### Methods

- [enablePostProcess](Gameplay.Gameplay.SomatotypeBase.md#enablepostprocess)
- [setOutline](Gameplay.Gameplay.SomatotypeBase.md#setoutline)
- [setOutlineAdvance](Gameplay.Gameplay.SomatotypeBase.md#setoutlineadvance)

## Constructors

### constructor

• **new SomatotypeBase**(`character`)

**`Description`**

构造函数

#### Parameters

| Name        | Type                                                  | Description |
| :---------- | :---------------------------------------------------- | :---------- |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | usage:角色  |

#### Defined in

Gameplay/index.d.ts:2731

## Properties

### enableOutline

• `Protected` **enableOutline**: `boolean`

**`Description`**

是否启动遮挡时角色描边

#### Defined in

Gameplay/index.d.ts:2726

---

### postProcessObj

• `Protected` **postProcessObj**: [`PostProcess`](Gameplay.Gameplay.PostProcess.md)

**`Description`**

后处理对象

#### Defined in

Gameplay/index.d.ts:2722

## Methods

### enablePostProcess

▸ **enablePostProcess**(`usedPostProcess`, `newOutlineColor`, `newOutlineWidth`): `void`

**`Description`**

后处理开关

**`Effect`**

客户端调用生效

#### Parameters

| Name              | Type                                      | Description              |
| :---------------- | :---------------------------------------- | :----------------------- |
| `usedPostProcess` | `boolean`                                 | usage:是否使用后处理功能 |
| `newOutlineColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:Outline 颜色       |
| `newOutlineWidth` | `number`                                  | usage:Outline 宽度       |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2739

---

### setOutline

▸ **setOutline**(`usedOutline`): `boolean`

**`Description`**

描边开关

**`Effect`**

调用调用生效

#### Parameters

| Name          | Type      | Description            |
| :------------ | :-------- | :--------------------- |
| `usedOutline` | `boolean` | usage:是否使用描边功能 |

#### Returns

`boolean`

是否成功

#### Defined in

Gameplay/index.d.ts:2750

---

### setOutlineAdvance

▸ **setOutlineAdvance**(`newEnableOutline`, `newOutlineColorIndex`): `void`

**`Description`**

后处理描边开关

**`Effect`**

调用端调用生效

#### Parameters

| Name                   | Type      | Description            |
| :--------------------- | :-------- | :--------------------- |
| `newEnableOutline`     | `boolean` | usage:是否开启描边功能 |
| `newOutlineColorIndex` | `number`  | usage:描边的颜色       |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2757
