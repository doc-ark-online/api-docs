[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / Optimization

# Class: Optimization

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).Optimization

**`Author`**

song.zhang

**`Description`**

控制一些优化项的开启关闭

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.Optimization.md#constructor)

### Methods

- [enableOptimization](Gameplay.Gameplay.Optimization.md#enableoptimization)

## Constructors

### constructor

• **new Optimization**()

## Methods

### enableOptimization

▸ `Static` **enableOptimization**(`isEnable`): `void`

**`Description`**

开启或关闭角色优化(角色裁剪、动画更新率降低等)

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description                  |
| :--------- | :-------- | :--------------------------- |
| `isEnable` | `boolean` | usage:是否开启或关闭角色优化 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:13356
