[Gameplay](../modules/Gameplay.Gameplay.md) / HitResult

# HitResult <Badge type="tip" text="Class" />

**`Description`**

命中结果

## Table of contents

| Properties                                                                                                                          |
| :---------------------------------------------------------------------------------------------------------------------------------- |
| **[blockingHit](Gameplay.Gameplay.HitResult.md#blockinghit)**: `boolean` <br> 是否击中了物体，如果发生了碰撞则为 true, 否则为 false |
| **[boneName](Gameplay.Gameplay.HitResult.md#bonename)**: `string` <br> 碰撞的骨骼名称                                               |
| **[distance](Gameplay.Gameplay.HitResult.md#distance)**: `number` <br> 距离，traceStart 到 location 的距离                          |
| **[gameObject](Gameplay.Gameplay.HitResult.md#gameobject)**: `GameObject` <br> 命中的 GameObject                                    |
| **[impactNormal](Gameplay.Gameplay.HitResult.md#impactnormal)**: [`Vector`](Type.Type.Vector.md) <br> 接触点的法线                  |
| **[impactPoint](Gameplay.Gameplay.HitResult.md#impactpoint)**: [`Vector`](Type.Type.Vector.md) <br> 碰撞发生的接触点                |
| **[location](Gameplay.Gameplay.HitResult.md#location)**: [`Vector`](Type.Type.Vector.md) <br> 碰撞发生的位置点                      |
| **[normal](Gameplay.Gameplay.HitResult.md#normal)**: [`Vector`](Type.Type.Vector.md) <br> 碰撞位置法线                              |
| **[time](Gameplay.Gameplay.HitResult.md#time)**: `number` <br> 时间                                                                 |
| **[traceEnd](Gameplay.Gameplay.HitResult.md#traceend)**: [`Vector`](Type.Type.Vector.md) <br> 碰撞检测的终点位置                    |
| **[traceStart](Gameplay.Gameplay.HitResult.md#tracestart)**: [`Vector`](Type.Type.Vector.md) <br> 碰撞检测的起点位置                |

## Properties

### blockingHit

• **blockingHit**: `boolean`

**`Description`**

是否击中了物体，如果发生了碰撞则为 true, 否则为 false

---

### boneName

• **boneName**: `string`

**`Description`**

碰撞的骨骼名称

---

### distance

• **distance**: `number`

**`Description`**

距离，traceStart 到 location 的距离

---

### gameObject

• **gameObject**: `GameObject`

**`Description`**

命中的 GameObject

---

### impactNormal

• **impactNormal**: [`Vector`](Type.Type.Vector.md)

**`Description`**

接触点的法线

---

### impactPoint

• **impactPoint**: [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞发生的接触点

---

### location

• **location**: [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞发生的位置点

---

### normal

• **normal**: [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞位置法线

---

### time

• **time**: `number`

**`Description`**

时间

---

### traceEnd

• **traceEnd**: [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞检测的终点位置

---

### traceStart

• **traceStart**: [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞检测的起点位置
