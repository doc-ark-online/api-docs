[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / Stance

# Class: Stance

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).Stance

**`Author`**

任雨辰

**`Description`**

姿态

**`Network Status`**

usage:双端

## Hierarchy

- **`Stance`**

  ↳ [`SubStance`](Gameplay.Gameplay.SubStance.md)

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.Stance.md#constructor)

### Methods

- [play](Gameplay.Gameplay.Stance.md#play)
- [playInternal](Gameplay.Gameplay.Stance.md#playinternal)
- [stop](Gameplay.Gameplay.Stance.md#stop)
- [stopInternal](Gameplay.Gameplay.Stance.md#stopinternal)

## Constructors

### constructor

• **new Stance**(`character`, `sync`)

**`Description`**

构造函数

**`Effect`**

双端函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | usage:角色 |
| `sync` | `boolean` | usage:是否自动同步 |

#### Defined in

Gameplay/index.d.ts:1465

## Methods

### play

▸ **play**(): `boolean`

**`Description`**

播放姿态

**`Effect`**

可选同步

#### Returns

`boolean`

是否执行成功

#### Defined in

Gameplay/index.d.ts:1471

___

### playInternal

▸ `Protected` **playInternal**(): `boolean`

**`Description`**

播放姿态的内部实现

**`Effect`**

调用端生效

#### Returns

`boolean`

是否执行成功

#### Defined in

Gameplay/index.d.ts:1477

___

### stop

▸ **stop**(): `boolean`

**`Description`**

停止姿态

**`Effect`**

可选同步

#### Returns

`boolean`

是否执行成功

#### Defined in

Gameplay/index.d.ts:1483

___

### stopInternal

▸ **stopInternal**(): `boolean`

**`Description`**

停止姿态的内部实现

**`Effect`**

调用端生效

#### Returns

`boolean`

是否执行成功

#### Defined in

Gameplay/index.d.ts:1489
