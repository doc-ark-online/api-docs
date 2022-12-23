[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HitResult

# Class: HitResult

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HitResult

**`Author`**

Sunxiangkun

**`Description`**

命中结果

**`Network Status`**

usage:双端

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HitResult.md#constructor)

### Properties

- [blockingHit](Gameplay.Gameplay.HitResult.md#blockinghit)
- [boneName](Gameplay.Gameplay.HitResult.md#bonename)
- [distance](Gameplay.Gameplay.HitResult.md#distance)
- [gameObject](Gameplay.Gameplay.HitResult.md#gameobject)
- [impactNormal](Gameplay.Gameplay.HitResult.md#impactnormal)
- [impactPoint](Gameplay.Gameplay.HitResult.md#impactpoint)
- [location](Gameplay.Gameplay.HitResult.md#location)
- [normal](Gameplay.Gameplay.HitResult.md#normal)
- [time](Gameplay.Gameplay.HitResult.md#time)
- [traceEnd](Gameplay.Gameplay.HitResult.md#traceend)
- [traceStart](Gameplay.Gameplay.HitResult.md#tracestart)

## Constructors

### constructor

• **new HitResult**()

## Properties

### blockingHit

• **blockingHit**: `boolean`

**`Description`**

是否击中了物体，如果发生了碰撞则为 true, 否则为 false

#### Defined in

Gameplay/index.d.ts:2288

___

### boneName

• **boneName**: `string`

**`Description`**

碰撞的骨骼名称

#### Defined in

Gameplay/index.d.ts:2324

___

### distance

• **distance**: `number`

**`Description`**

距离，traceStart到location的距离

#### Defined in

Gameplay/index.d.ts:2296

___

### gameObject

• **gameObject**: [`GameObject`](Core.Core.GameObject.md)

**`Description`**

命中的GameObject

#### Defined in

Gameplay/index.d.ts:2328

___

### impactNormal

• **impactNormal**: [`Vector`](Type.Type.Vector.md)

**`Description`**

接触点的法线

#### Defined in

Gameplay/index.d.ts:2312

___

### impactPoint

• **impactPoint**: [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞发生的接触点

#### Defined in

Gameplay/index.d.ts:2304

___

### location

• **location**: [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞发生的位置点

#### Defined in

Gameplay/index.d.ts:2300

___

### normal

• **normal**: [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞位置法线

#### Defined in

Gameplay/index.d.ts:2308

___

### time

• **time**: `number`

**`Description`**

时间

#### Defined in

Gameplay/index.d.ts:2292

___

### traceEnd

• **traceEnd**: [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞检测的终点位置

#### Defined in

Gameplay/index.d.ts:2320

___

### traceStart

• **traceStart**: [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞检测的起点位置

#### Defined in

Gameplay/index.d.ts:2316
