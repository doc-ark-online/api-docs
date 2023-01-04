[Gameplay](../modules/Gameplay.Gameplay.md) / Trigger

# Trigger <Badge type="tip" text="Class" />

**`Description`**

触发器

**`Precautions`**

各端运行，无自动同步

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`Trigger`**

## Table of contents

| Properties |
| :-----|
| **[onEnter](Gameplay.Trigger.md#onenter)**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md) <br> 进入触发器事件|
| **[onLeave](Gameplay.Trigger.md#onleave)**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md) <br> 离开触发器事件|

| Accessors |
| :-----|

| Methods |
| :-----|
| **[isBoxShape](Gameplay.Trigger.md#isboxshape)**(): `boolean` <br> 判断当前触发器区域是否为盒体|
| **[isInArea](Gameplay.Trigger.md#isinarea)**(`GameObject`): `boolean` <br> 判断指定对象是否在触发器区域|
| **[isSphereShape](Gameplay.Trigger.md#issphereshape)**(): `boolean` <br> 判断当前触发器区域是否为球体|
| **[setBoxExtent](Gameplay.Trigger.md#setboxextent)**([`Vector`](Type.Vector.md), `boolean`): `void` <br> 设置立方体触发器大小|
| **[setCollisionEnabled](Gameplay.Trigger.md#setcollisionenabled)**(`boolean`): `void` <br> 设置触发器是否激活|
| **[setSphereRadius](Gameplay.Trigger.md#setsphereradius)**(`number`, `boolean`): `void` <br> 设置球形触发器大小|
| **[toggleTriggerShape](Gameplay.Trigger.md#toggletriggershape)**(): `void` <br> 切换触发器形状|

## Properties

### onEnter

• **onEnter**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md)

**`Description`**

进入触发器事件

___

### onLeave

• **onLeave**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md)

**`Description`**

离开触发器事件

## Accessors

## Methods

### isBoxShape

▸ **isBoxShape**(): `boolean`

**`Description`**

判断当前触发器区域是否为盒体

**`Effect`**

调用端生效

#### Returns

`boolean`

true:触发器是盒体

___

### isInArea

▸ **isInArea**(`gameObject`): `boolean`

**`Description`**

判断指定对象是否在触发器区域

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | `GameObject` | 传入需判断的对象 |

#### Returns

`boolean`

true:为在触发器范围内


### isSphereShape

▸ **isSphereShape**(): `boolean`

**`Description`**

判断当前触发器区域是否为球体

**`Effect`**

调用端生效

#### Returns

`boolean`

true:触发器是球体


### setBoxExtent

▸ **setBoxExtent**(`InBoxExtent`, `updateOverlaps?`): `void`

**`Description`**

设置立方体触发器大小

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InBoxExtent` | [`Vector`](Type.Vector.md) | 盒体长宽高 |
| `updateOverlaps?` | `boolean` | 是否刷新 default:true |

#### Returns

`void`


### setCollisionEnabled

▸ **setCollisionEnabled**(`enable`): `void`

**`Description`**

设置触发器是否激活

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | 是否激活 |

#### Returns

`void`


### setSphereRadius

▸ **setSphereRadius**(`InSphereRadius`, `updateOverlaps?`): `void`

**`Description`**

设置球形触发器大小

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InSphereRadius` | `number` | 球体半径 |
| `updateOverlaps?` | `boolean` | 是否刷新 default:true |

#### Returns

`void`


### toggleTriggerShape

▸ **toggleTriggerShape**(): `void`

**`Description`**

切换触发器形状

**`Effect`**

调用端生效

#### Returns

`void`
