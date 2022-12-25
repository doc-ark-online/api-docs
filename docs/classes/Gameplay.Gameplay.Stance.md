[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / Stance

# Class: Stance

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).Stance

**`Author`**

yuchen.ren

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

| Name        | Type                                                  | Description        |
| :---------- | :---------------------------------------------------- | :----------------- |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | usage:角色         |
| `sync`      | `boolean`                                             | usage:是否自动同步 |

#### Defined in

Gameplay/index.d.ts:1617

## Methods

### play

▸ **play**(): `boolean`

**`Description`**

播放这个姿态对象, 并返回执行结果

**`Effect`**

可选同步

**`Precautions`**

这个操作是否会自动同步多端, 取决于调用 Character.loadStance()时传入的 sync 参数.
返回的执行结果, 在不自动同步时多数情况下可靠;
在自动同步时完全不可靠, 总是会返回 true, 因为无法判断其他端的执行情况

#### Returns

`boolean`

是否执行成功

#### Defined in

Gameplay/index.d.ts:1626

---

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

Gameplay/index.d.ts:1632

---

### stop

▸ **stop**(): `boolean`

**`Description`**

停止这个姿态对象, 并返回执行结果

**`Effect`**

可选同步

**`Precautions`**

这个操作是否会自动同步多端, 取决于调用 Character.loadStance()时传入的 sync 参数.
返回的执行结果, 在不自动同步时多数情况下可靠;
在自动同步时完全不可靠, 总是会返回 true, 因为无法判断其他端的执行情况

#### Returns

`boolean`

是否执行成功

#### Defined in

Gameplay/index.d.ts:1641

---

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

Gameplay/index.d.ts:1647
