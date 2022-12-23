[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / AssetStance

# Class: AssetStance

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).AssetStance

**`Author`**

任雨辰

**`Description`**

预制资源姿态

**`Network Status`**

usage:双端

## Hierarchy

- [`SubStance`](Gameplay.Gameplay.SubStance.md)

  ↳ **`AssetStance`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.AssetStance.md#constructor)

### Accessors

- [blendMode](Gameplay.Gameplay.AssetStance.md#blendmode)

### Methods

- [play](Gameplay.Gameplay.AssetStance.md#play)
- [playInternal](Gameplay.Gameplay.AssetStance.md#playinternal)
- [stop](Gameplay.Gameplay.AssetStance.md#stop)
- [stopInternal](Gameplay.Gameplay.AssetStance.md#stopinternal)

## Constructors

### constructor

• **new AssetStance**(`character`, `sync`)

**`Description`**

构造函数

**`Effect`**

双端函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | usage:角色 |
| `sync` | `boolean` | usage:是否自动同步 |

#### Overrides

[SubStance](Gameplay.Gameplay.SubStance.md).[constructor](Gameplay.Gameplay.SubStance.md#constructor)

#### Defined in

Gameplay/index.d.ts:1519

## Accessors

### blendMode

• `get` **blendMode**(): [`StanceBlendMode`](../enums/Gameplay.Gameplay.StanceBlendMode.md)

**`Description`**

混合模式

**`Precautions`**

无法对正常播放的姿态进行修改

#### Returns

[`StanceBlendMode`](../enums/Gameplay.Gameplay.StanceBlendMode.md)

#### Inherited from

SubStance.blendMode

#### Defined in

Gameplay/index.d.ts:1501

• `set` **blendMode**(`newBlendMode`): `void`

**`Description`**

混合模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `newBlendMode` | [`StanceBlendMode`](../enums/Gameplay.Gameplay.StanceBlendMode.md) |

#### Returns

`void`

#### Inherited from

SubStance.blendMode

#### Defined in

Gameplay/index.d.ts:1505

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

#### Inherited from

[SubStance](Gameplay.Gameplay.SubStance.md).[play](Gameplay.Gameplay.SubStance.md#play)

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

#### Inherited from

[SubStance](Gameplay.Gameplay.SubStance.md).[playInternal](Gameplay.Gameplay.SubStance.md#playinternal)

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

#### Inherited from

[SubStance](Gameplay.Gameplay.SubStance.md).[stop](Gameplay.Gameplay.SubStance.md#stop)

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

#### Inherited from

[SubStance](Gameplay.Gameplay.SubStance.md).[stopInternal](Gameplay.Gameplay.SubStance.md#stopinternal)

#### Defined in

Gameplay/index.d.ts:1489
