[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / UIWidget

# Class: UIWidget

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).UIWidget

**`Author`**

baoqiang.han

**`Description`**

世界 UI 组件

**`Network Status`**

usage:客户端

## Hierarchy

- `GameObject`

  ↳ **`UIWidget`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.UIWidget.md#constructor)

### Accessors

- [cylinderArcAngle](Gameplay.Gameplay.UIWidget.md#cylinderarcangle)
- [distanceScaleFactor](Gameplay.Gameplay.UIWidget.md#distancescalefactor)
- [drawSize](Gameplay.Gameplay.UIWidget.md#drawsize)
- [forwardVector](Gameplay.Gameplay.UIWidget.md#forwardvector)
- [geometryMode](Gameplay.Gameplay.UIWidget.md#geometrymode)
- [guid](Gameplay.Gameplay.UIWidget.md#guid)
- [headUIMaxVisibleDistance](Gameplay.Gameplay.UIWidget.md#headuimaxvisibledistance)
- [hideByDistanceEnable](Gameplay.Gameplay.UIWidget.md#hidebydistanceenable)
- [interaction](Gameplay.Gameplay.UIWidget.md#interaction)
- [isEnemy](Gameplay.Gameplay.UIWidget.md#isenemy)
- [lockStatus](Gameplay.Gameplay.UIWidget.md#lockstatus)
- [name](Gameplay.Gameplay.UIWidget.md#name)
- [netStatus](Gameplay.Gameplay.UIWidget.md#netstatus)
- [occlusionEnable](Gameplay.Gameplay.UIWidget.md#occlusionenable)
- [parent](Gameplay.Gameplay.UIWidget.md#parent)
- [pivot](Gameplay.Gameplay.UIWidget.md#pivot)
- [relativeLocation](Gameplay.Gameplay.UIWidget.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.UIWidget.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.UIWidget.md#relativescale)
- [rightVector](Gameplay.Gameplay.UIWidget.md#rightvector)
- [scaledByDistanceEnable](Gameplay.Gameplay.UIWidget.md#scaledbydistanceenable)
- [selfOcclusion](Gameplay.Gameplay.UIWidget.md#selfocclusion)
- [staticStatus](Gameplay.Gameplay.UIWidget.md#staticstatus)
- [tag](Gameplay.Gameplay.UIWidget.md#tag)
- [transform](Gameplay.Gameplay.UIWidget.md#transform)
- [upVector](Gameplay.Gameplay.UIWidget.md#upvector)
- [useUpdate](Gameplay.Gameplay.UIWidget.md#useupdate)
- [visible](Gameplay.Gameplay.UIWidget.md#visible)
- [widgetSpace](Gameplay.Gameplay.UIWidget.md#widgetspace)
- [worldLocation](Gameplay.Gameplay.UIWidget.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.UIWidget.md#worldrotation)
- [worldScale](Gameplay.Gameplay.UIWidget.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.UIWidget.md#adddestroycallback)
- [asyncGetScriptByName](Gameplay.Gameplay.UIWidget.md#asyncgetscriptbyname)
- [attachToGameObject](Gameplay.Gameplay.UIWidget.md#attachtogameobject)
- [clone](Gameplay.Gameplay.UIWidget.md#clone)
- [deleteDestroyCallback](Gameplay.Gameplay.UIWidget.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.UIWidget.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.UIWidget.md#detachfromgameobject)
- [getBoundingBoxSize](Gameplay.Gameplay.UIWidget.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.UIWidget.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.UIWidget.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.UIWidget.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.UIWidget.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.UIWidget.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.UIWidget.md#getcollision)
- [getForwardVector](Gameplay.Gameplay.UIWidget.md#getforwardvector)
- [getRelativeLocation](Gameplay.Gameplay.UIWidget.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.UIWidget.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.UIWidget.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.UIWidget.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.UIWidget.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.UIWidget.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.UIWidget.md#getscripts)
- [getSourceAssetGuid](Gameplay.Gameplay.UIWidget.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.UIWidget.md#gettransform)
- [getUI](Gameplay.Gameplay.UIWidget.md#getui)
- [getUpVector](Gameplay.Gameplay.UIWidget.md#getupvector)
- [getVisibility](Gameplay.Gameplay.UIWidget.md#getvisibility)
- [getWorldLocation](Gameplay.Gameplay.UIWidget.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.UIWidget.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.UIWidget.md#getworldscale)
- [isRunningClient](Gameplay.Gameplay.UIWidget.md#isrunningclient)
- [onDestroy](Gameplay.Gameplay.UIWidget.md#ondestroy)
- [onStart](Gameplay.Gameplay.UIWidget.md#onstart)
- [onUpdate](Gameplay.Gameplay.UIWidget.md#onupdate)
- [ready](Gameplay.Gameplay.UIWidget.md#ready)
- [refresh](Gameplay.Gameplay.UIWidget.md#refresh)
- [setCollision](Gameplay.Gameplay.UIWidget.md#setcollision)
- [setLocationAndRotation](Gameplay.Gameplay.UIWidget.md#setlocationandrotation)
- [setRelativeLocation](Gameplay.Gameplay.UIWidget.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.UIWidget.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.UIWidget.md#setrelativescale)
- [setTargetUIWidget](Gameplay.Gameplay.UIWidget.md#settargetuiwidget)
- [setTransform](Gameplay.Gameplay.UIWidget.md#settransform)
- [setUI](Gameplay.Gameplay.UIWidget.md#setui)
- [setVisibility](Gameplay.Gameplay.UIWidget.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.UIWidget.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.UIWidget.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.UIWidget.md#setworldscale)
- [asyncFind](Gameplay.Gameplay.UIWidget.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.UIWidget.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.UIWidget.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.UIWidget.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.UIWidget.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.UIWidget.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.UIWidget.md#spawngameobject)

## Constructors

### constructor

• **new UIWidget**()

#### Inherited from

Core.GameObject.constructor

## Accessors

### cylinderArcAngle

• `get` **cylinderArcAngle**(): `number`

**`Description`**

获取圆柱体弧形角度

#### Returns

`number`

角度

#### Defined in

Gameplay/index.d.ts:10345

• `set` **cylinderArcAngle**(`inCylinderArcAngle`): `void`

**`Description`**

设置圆柱体弧形角度

#### Parameters

| Name                 | Type     | Description |
| :------------------- | :------- | :---------- |
| `inCylinderArcAngle` | `number` | usage:角度  |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10350

---

### distanceScaleFactor

• `get` **distanceScaleFactor**(): `number`

**`Description`**

获取缩放距离系数

#### Returns

`number`

距离系数

#### Defined in

Gameplay/index.d.ts:10415

• `set` **distanceScaleFactor**(`Value`): `void`

**`Description`**

设置缩放距离系数

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `Value` | `number` | usage:距离系数 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10420

---

### drawSize

• `get` **drawSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取实际渲染大小

#### Returns

[`Vector2`](Type.Type.Vector2.md)

渲染大小 2D

#### Defined in

Gameplay/index.d.ts:10315

• `set` **drawSize**(`newSize`): `void`

**`Description`**

设置实际渲染大小

#### Parameters

| Name      | Type                              | Description       |
| :-------- | :-------------------------------- | :---------------- |
| `newSize` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染大小 2D |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10320

---

### forwardVector

• `get` **forwardVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.forwardVector

#### Defined in

Core/index.d.ts:409

---

### geometryMode

• `get` **geometryMode**(): [`WidgetGeometryMode`](../enums/Gameplay.Gameplay.WidgetGeometryMode.md)

**`Description`**

获取几何体模式

#### Returns

[`WidgetGeometryMode`](../enums/Gameplay.Gameplay.WidgetGeometryMode.md)

几何体模式枚举

#### Defined in

Gameplay/index.d.ts:10335

• `set` **geometryMode**(`inGeometryMode`): `void`

**`Description`**

设置几何体模式

#### Parameters

| Name             | Type                                                                     | Description          |
| :--------------- | :----------------------------------------------------------------------- | :------------------- |
| `inGeometryMode` | [`WidgetGeometryMode`](../enums/Gameplay.Gameplay.WidgetGeometryMode.md) | usage:几何体模式枚举 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10340

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的 guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

#### Inherited from

Core.GameObject.guid

#### Defined in

Core/index.d.ts:39

---

### headUIMaxVisibleDistance

• `get` **headUIMaxVisibleDistance**(): `number`

**`Description`**

获取最大头顶 UI 可见距离

#### Returns

`number`

可见距离

#### Defined in

Gameplay/index.d.ts:10355

• `set` **headUIMaxVisibleDistance**(`Value`): `void`

**`Description`**

设置最大头顶 UI 可见距离

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `Value` | `number` | usage:可见距离 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10360

---

### hideByDistanceEnable

• `get` **hideByDistanceEnable**(): `boolean`

**`Description`**

获取是否启用最大可见距离

#### Returns

`boolean`

true：开启

#### Defined in

Gameplay/index.d.ts:10385

• `set` **hideByDistanceEnable**(`Value`): `void`

**`Description`**

设置是否启用最大可见距离

#### Parameters

| Name    | Type      | Description  |
| :------ | :-------- | :----------- |
| `Value` | `boolean` | usage:布尔值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10390

---

### interaction

• `get` **interaction**(): `boolean`

**`Description`**

获取世界 UI 交互状态

**`Precautions`**

对世界 UI，头顶 UI 生效

**`Effect`**

客户端生效

#### Returns

`boolean`

是否可交互

#### Defined in

Gameplay/index.d.ts:10283

• `set` **interaction**(`inInteraction`): `void`

**`Description`**

设置世界 UI 交互状态

**`Precautions`**

对世界 UI，头顶 UI 生效

**`Effect`**

客户端生效

#### Parameters

| Name            | Type      | Description      |
| :-------------- | :-------- | :--------------- |
| `inInteraction` | `boolean` | usage:是否可交互 |

#### Returns

`void`

是否设置成功

#### Defined in

Gameplay/index.d.ts:10276

---

### isEnemy

• `get` **isEnemy**(): `boolean`

**`Description`**

获取是否作为敌方玩家，敌方玩家不显示头顶 UI

#### Returns

`boolean`

布尔值

#### Defined in

Gameplay/index.d.ts:10395

• `set` **isEnemy**(`Value`): `void`

**`Description`**

设置是否作为敌方玩家，敌方玩家不显示头顶 UI

#### Parameters

| Name    | Type      | Description  |
| :------ | :-------- | :----------- |
| `Value` | `boolean` | usage:布尔值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10400

---

### lockStatus

• `get` **lockStatus**(): `boolean`

**`Description`**

获取对象是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.lockStatus

#### Defined in

Core/index.d.ts:456

• `set` **lockStatus**(`v`): `void`

**`Description`**

设置对象是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.lockStatus

#### Defined in

Core/index.d.ts:451

---

### name

• `get` **name**(): `string`

**`Description`**

返回当前物体名称

**`Effect`**

调用端生效

#### Returns

`string`

名称

#### Inherited from

Core.GameObject.name

#### Defined in

Core/index.d.ts:171

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description          |
| :----- | :------- | :------------------- |
| `name` | `string` | usage:需要设置的名称 |

#### Returns

`void`

#### Inherited from

Core.GameObject.name

#### Defined in

Core/index.d.ts:177

---

### netStatus

• `get` **netStatus**(): [`NetStatus`](../enums/Type.Type.NetStatus.md)

**`Description`**

获取当前物体同步状态

**`Effect`**

调用端生效

#### Returns

[`NetStatus`](../enums/Type.Type.NetStatus.md)

Type.NetStatus

#### Inherited from

Core.GameObject.netStatus

#### Defined in

Core/index.d.ts:513

---

### occlusionEnable

• `get` **occlusionEnable**(): `boolean`

**`Description`**

获取是否可被遮挡

#### Returns

`boolean`

true：可被遮挡

#### Defined in

Gameplay/index.d.ts:10365

• `set` **occlusionEnable**(`Value`): `void`

**`Description`**

设置是否可被遮挡

#### Parameters

| Name    | Type      | Description  |
| :------ | :-------- | :----------- |
| `Value` | `boolean` | usage:布尔值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10370

---

### parent

• `get` **parent**(): `GameObject`

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

`GameObject`

父物体

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:462

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name        | Type         |
| :---------- | :----------- |
| `newParent` | `GameObject` |

#### Returns

`void`

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:467

---

### pivot

• `get` **pivot**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取锚点位置

#### Returns

[`Vector2`](Type.Type.Vector2.md)

位置信息

#### Defined in

Gameplay/index.d.ts:10325

• `set` **pivot**(`position`): `void`

**`Description`**

设置锚点位置

#### Parameters

| Name       | Type                              | Description    |
| :--------- | :-------------------------------- | :------------- |
| `position` | [`Vector2`](Type.Type.Vector2.md) | usage:位置信息 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10330

---

### relativeLocation

• `get` **relativeLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:308

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置  |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:314

---

### relativeRotation

• `get` **relativeRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:334

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转  |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:340

---

### relativeScale

• `get` **relativeScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:360

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description |
| :------ | :------------------------------ | :---------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:缩放  |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:366

---

### rightVector

• `get` **rightVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.rightVector

#### Defined in

Core/index.d.ts:423

---

### scaledByDistanceEnable

• `get` **scaledByDistanceEnable**(): `boolean`

**`Description`**

获取是否开启近大远小

#### Returns

`boolean`

true：开启

#### Defined in

Gameplay/index.d.ts:10375

• `set` **scaledByDistanceEnable**(`Value`): `void`

**`Description`**

设置是否开启近大远小

#### Parameters

| Name    | Type      | Description  |
| :------ | :-------- | :----------- |
| `Value` | `boolean` | usage:布尔值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10380

---

### selfOcclusion

• `get` **selfOcclusion**(): `boolean`

**`Description`**

获取是否可被自己遮挡

#### Returns

`boolean`

布尔值

#### Defined in

Gameplay/index.d.ts:10405

• `set` **selfOcclusion**(`Value`): `void`

**`Description`**

设置是否可被自己遮挡

#### Parameters

| Name    | Type      | Description  |
| :------ | :-------- | :----------- |
| `Value` | `boolean` | usage:布尔值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10410

---

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取对象是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.staticStatus

#### Defined in

Core/index.d.ts:446

---

### tag

• `get` **tag**(): `string`

**`Description`**

获取当前物体的 Tag

**`Effect`**

调用端生效

#### Returns

`string`

Tag

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:189

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的 Tag

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `tag` | `string` | usage:Tag   |

#### Returns

`void`

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:183

---

### transform

• `get` **transform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体 transform

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

transform

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:209

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description              |
| :---------- | :------------------------------------ | :----------------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:要设置的 transform |

#### Returns

`void`

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:215

---

### upVector

• `get` **upVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.upVector

#### Defined in

Core/index.d.ts:396

---

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

获取对象是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:441

• `set` **useUpdate**(`v`): `void`

**`Description`**

设置对象是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:436

---

### visible

• `get` **visible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api 重构 replacement:getVisibility()

**`Description`**

获取当前物体是否显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

#### Inherited from

Core.GameObject.visible

#### Defined in

Core/index.d.ts:507

---

### widgetSpace

• `get` **widgetSpace**(): [`WidgetSpaceMode`](../enums/Gameplay.Gameplay.WidgetSpaceMode.md)

**`Description`**

获取显示方式

#### Returns

[`WidgetSpaceMode`](../enums/Gameplay.Gameplay.WidgetSpaceMode.md)

显示方式枚举

#### Defined in

Gameplay/index.d.ts:10305

• `set` **widgetSpace**(`newSpace`): `void`

**`Description`**

设置显示方式

#### Parameters

| Name       | Type                                                               | Description    |
| :--------- | :----------------------------------------------------------------- | :------------- |
| `newSpace` | [`WidgetSpaceMode`](../enums/Gameplay.Gameplay.WidgetSpaceMode.md) | usage:显示方式 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10310

---

### worldLocation

• `get` **worldLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:234

• `set` **worldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:239

---

### worldRotation

• `get` **worldRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

#### Inherited from

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:258

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description            |
| :--------- | :---------------------------------- | :--------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:264

---

### worldScale

• `get` **worldScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:283

• `set` **worldScale**(`v`): `void`

**`Description`**

设置物体的是世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:288

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description    |
| :--------- | :-------------------------------- | :------------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

Core.GameObject.addDestroyCallback

#### Defined in

Core/index.d.ts:627

---

### asyncGetScriptByName

▸ **asyncGetScriptByName**(`name`): `Promise`<`Script`\>

**`Description`**

异步获得当前物体下的指定脚本 客户端不维系父子关系

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`Promise`<`Script`\>

Script

#### Inherited from

Core.GameObject.asyncGetScriptByName

#### Defined in

Core/index.d.ts:574

---

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name  | Type         | Description |
| :---- | :----------- | :---------- |
| `obj` | `GameObject` | usage:物体  |

#### Returns

`void`

#### Inherited from

Core.GameObject.attachToGameObject

#### Defined in

Core/index.d.ts:594

---

### clone

▸ **clone**(`inReplicates?`): `GameObject`

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                 |
| :-------------- | :-------- | :-------------------------- |
| `inReplicates?` | `boolean` | usage:是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

#### Inherited from

Core.GameObject.clone

#### Defined in

Core/index.d.ts:554

---

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description    |
| :--------- | :-------------------------------- | :------------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

Core.GameObject.deleteDestroyCallback

#### Defined in

Core/index.d.ts:633

---

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

Core.GameObject.destroy

#### Defined in

Core/index.d.ts:150

---

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

Core.GameObject.detachFromGameObject

#### Defined in

Core/index.d.ts:599

---

### getBoundingBoxSize

▸ **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体包围盒大小

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name                      | Type                            | Description                                        |
| :------------------------ | :------------------------------ | :------------------------------------------------- |
| `nonColliding?`           | `boolean`                       | usage:表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean`                       | usage:如果为 true，则递归子物体 default:false      |
| `outer?`                  | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null      |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

Core.GameObject.getBoundingBoxSize

#### Defined in

Core/index.d.ts:609

---

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取 GameObject 边界

**`Effect`**

调用端生效

#### Parameters

| Name                      | Type                            | Description                                      |
| :------------------------ | :------------------------------ | :----------------------------------------------- |
| `onlyCollidingComponents` | `boolean`                       | usage:是否只包含有碰撞的组件。                   |
| `OriginOuter`             | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 GameObject 的中心点坐标。 |
| `BoxExtentOuter`          | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 GameObject 尺寸的一半。   |
| `includeFromChildActors?` | `boolean`                       | usage:是否递归包含子物体 default:undefined       |

#### Returns

`void`

#### Inherited from

Core.GameObject.getBounds

#### Defined in

Core/index.d.ts:198

---

### getChildByGuid

▸ **getChildByGuid**(`guid`): `GameObject`

**`Description`**

根据 Guid 查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

`GameObject`

查找的物体

#### Inherited from

Core.GameObject.getChildByGuid

#### Defined in

Core/index.d.ts:547

---

### getChildByName

▸ **getChildByName**(`name`): `GameObject`

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名称  |

#### Returns

`GameObject`

查找的物体

#### Inherited from

Core.GameObject.getChildByName

#### Defined in

Core/index.d.ts:540

---

### getChildren

▸ **getChildren**(): `GameObject`[]

**`Description`**

获取 Children，客户端不维系父子关系。推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`GameObject`[]

Array`<GameObject>`

#### Inherited from

Core.GameObject.getChildren

#### Defined in

Core/index.d.ts:533

---

### getChildrenBoxCenter

▸ **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

Core.GameObject.getChildrenBoxCenter

#### Defined in

Core/index.d.ts:621

---

### getCollision

▸ **getCollision**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

**`Description`**

返回碰撞状态

**`Effect`**

调用端生效

#### Returns

[`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

碰撞状态

#### Inherited from

Core.GameObject.getCollision

#### Defined in

Core/index.d.ts:484

---

### getForwardVector

▸ **getForwardVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.getForwardVector

#### Defined in

Core/index.d.ts:417

---

### getRelativeLocation

▸ **getRelativeLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

Core.GameObject.getRelativeLocation

#### Defined in

Core/index.d.ts:322

---

### getRelativeRotation

▸ **getRelativeRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                | Description                                     |
| :------- | :---------------------------------- | :---------------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

Core.GameObject.getRelativeRotation

#### Defined in

Core/index.d.ts:348

---

### getRelativeScale

▸ **getRelativeScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

Core.GameObject.getRelativeScale

#### Defined in

Core/index.d.ts:374

---

### getRightVector

▸ **getRightVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.getRightVector

#### Defined in

Core/index.d.ts:431

---

### getScriptByGuid

▸ **getScriptByGuid**(`guid`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

`Script`

Script

#### Inherited from

Core.GameObject.getScriptByGuid

#### Defined in

Core/index.d.ts:581

---

### getScriptByName

▸ **getScriptByName**(`name`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`Script`

Script

#### Inherited from

Core.GameObject.getScriptByName

#### Defined in

Core/index.d.ts:567

---

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array`<Script>`

#### Inherited from

Core.GameObject.getScripts

#### Defined in

Core/index.d.ts:560

---

### getSourceAssetGuid

▸ **getSourceAssetGuid**(): `string`

**`Description`**

获取当前物体使用资源的 GUID

**`Effect`**

调用端生效

#### Returns

`string`

资源的 GUID

#### Inherited from

Core.GameObject.getSourceAssetGuid

#### Defined in

Core/index.d.ts:639

---

### getTransform

▸ **getTransform**(`outer?`): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体 Transform

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                  | Description                                      |
| :------- | :------------------------------------ | :----------------------------------------------- |
| `outer?` | [`Transform`](Type.Type.Transform.md) | usage:接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

#### Inherited from

Core.GameObject.getTransform

#### Defined in

Core/index.d.ts:223

---

### getUI

▸ **getUI**(): [`UserWidget`](UI.UI.UserWidget.md)

**`Description`**

获取 UI 对象

**`Effect`**

客户端生效

#### Returns

[`UserWidget`](UI.UI.UserWidget.md)

UI 对象

#### Defined in

Gameplay/index.d.ts:10295

---

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.getUpVector

#### Defined in

Core/index.d.ts:403

---

### getVisibility

▸ **getVisibility**(): `boolean`

**`Description`**

获取 GameObject 是否被显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

#### Inherited from

Core.GameObject.getVisibility

#### Defined in

Core/index.d.ts:490

---

### getWorldLocation

▸ **getWorldLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象\

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

#### Inherited from

Core.GameObject.getWorldLocation

#### Defined in

Core/index.d.ts:247

---

### getWorldRotation

▸ **getWorldRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                                | Description                                     |
| :------- | :---------------------------------- | :---------------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

#### Inherited from

Core.GameObject.getWorldRotation

#### Defined in

Core/index.d.ts:272

---

### getWorldScale

▸ **getWorldScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

#### Inherited from

Core.GameObject.getWorldScale

#### Defined in

Core/index.d.ts:296

---

### isRunningClient

▸ **isRunningClient**(): `boolean`

**`Description`**

是否为客户端

**`Effect`**

调用端生效

#### Returns

`boolean`

true 为客户端

#### Inherited from

Core.GameObject.isRunningClient

#### Defined in

Core/index.d.ts:50

---

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

Core.GameObject.onDestroy

#### Defined in

Core/index.d.ts:18

---

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

Core.GameObject.onStart

#### Defined in

Core/index.d.ts:13

---

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为 false,不会执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description                  |
| :--- | :------- | :--------------------------- |
| `dt` | `number` | usage:与上一帧的延迟 单位:秒 |

#### Returns

`void`

#### Inherited from

Core.GameObject.onUpdate

#### Defined in

Core/index.d.ts:24

---

### ready

▸ **ready**(): `Promise`<[`UIWidget`](Gameplay.Gameplay.UIWidget.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`UIWidget`](Gameplay.Gameplay.UIWidget.md)\>

准备好的对象

#### Inherited from

Core.GameObject.ready

#### Defined in

Core/index.d.ts:126

---

### refresh

▸ **refresh**(): `void`

**`Description`**

请求重新绘制

**`Effect`**

客户端生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10300

---

### setCollision

▸ **setCollision**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置碰撞状态

**`Effect`**

调用端生效

**`Precautions`**

建议双端物体设置碰撞，单端物体设置碰撞可能会导致拉扯的情况

#### Parameters

| Name                   | Type                                                                                                                   | Description                                                      |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) | usage: 碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean`                                                                                                              | usage: 是否传递给子节点 default: false                           |

#### Returns

`void`

#### Inherited from

Core.GameObject.setCollision

#### Defined in

Core/index.d.ts:475

---

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description    |
| :--------- | :---------------------------------- | :------------- |
| `location` | [`Vector`](Type.Type.Vector.md)     | usage:世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:世界旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setLocationAndRotation

#### Defined in

Core/index.d.ts:387

---

### setRelativeLocation

▸ **setRelativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置  |

#### Returns

`void`

#### Inherited from

Core.GameObject.setRelativeLocation

#### Defined in

Core/index.d.ts:328

---

### setRelativeRotation

▸ **setRelativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转  |

#### Returns

`void`

#### Inherited from

Core.GameObject.setRelativeRotation

#### Defined in

Core/index.d.ts:354

---

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description            |
| :------ | :------------------------------ | :--------------------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:要设置的相对缩放 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setRelativeScale

#### Defined in

Core/index.d.ts:380

---

### setTargetUIWidget

▸ **setTargetUIWidget**(`uiUserWidget`): `void`

**`Description`**

设置 UI

**`Effect`**

客户端生效

#### Parameters

| Name           | Type                                | Description   |
| :------------- | :---------------------------------- | :------------ |
| `uiUserWidget` | [`UserWidget`](UI.UI.UserWidget.md) | usage:UI 对象 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10426

---

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description     |
| :---------- | :------------------------------------ | :-------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:transform |

#### Returns

`void`

#### Inherited from

Core.GameObject.setTransform

#### Defined in

Core/index.d.ts:229

---

### setUI

▸ **setUI**(`guid`): `void`

**`Description`**

通过 guid 设置 UI

**`Effect`**

客户端生效

#### Parameters

| Name   | Type     | Description      |
| :----- | :------- | :--------------- |
| `guid` | `string` | usage:UI 的 Guid |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10289

---

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置 GameObject 是否被显示

**`Effect`**

调用端生效

#### Parameters

| Name                   | Type                                                     | Description                         |
| :--------------------- | :------------------------------------------------------- | :---------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | usage:状态                          |
| `propagateToChildren?` | `boolean`                                                | usage: 是否设置子物体 default:false |

#### Returns

`void`

#### Inherited from

Core.GameObject.setVisibility

#### Defined in

Core/index.d.ts:497

---

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description             |
| :--- | :------------------------------ | :---------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage: 要设置的世界坐标 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setWorldLocation

#### Defined in

Core/index.d.ts:253

---

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description            |
| :--------- | :---------------------------------- | :--------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setWorldRotation

#### Defined in

Core/index.d.ts:278

---

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description            |
| :--- | :------------------------------ | :--------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage:要设置的世界缩放 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setWorldScale

#### Defined in

Core/index.d.ts:302

---

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<`GameObject`\>

**`Description`**

通过 guid 异步查找 GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 guid |

#### Returns

`Promise`<`GameObject`\>

Guid 对应的物体

#### Inherited from

Core.GameObject.asyncFind

#### Defined in

Core/index.d.ts:165

---

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                           |
| :-------------- | :-------- | :------------------------------------ |
| `assetId`       | `string`  | usage:资源的 GUID                     |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

`Promise`<`GameObject`\>

构造的 GameObject

#### Inherited from

Core.GameObject.asyncSpawnGameObject

#### Defined in

Core/index.d.ts:142

---

### find

▸ `Static` **find**(`guid`): `GameObject`

**`Description`**

通过 Guid 查找 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 Guid |

#### Returns

`GameObject`

Guid 对应的物体

#### Inherited from

Core.GameObject.find

#### Defined in

Core/index.d.ts:157

---

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[]

**`Description`**

通过自定义 Tag 获取 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `InTag` | `string` | usage:自定义 Tag |

#### Returns

`GameObject`[]

Array`<GameObject>`

#### Inherited from

Core.GameObject.findGameObjectByTag

#### Defined in

Core/index.d.ts:588

---

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): `GameObject`

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

#### Inherited from

Core.GameObject.getGameObjectByName

#### Defined in

Core/index.d.ts:527

---

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

`GameObject`[]

返回所有查找到的对象

#### Inherited from

Core.GameObject.getGameObjectsByName

#### Defined in

Core/index.d.ts:520

---

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject`

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                           |
| :-------------- | :-------- | :------------------------------------ |
| `assetId`       | `string`  | usage:资源的 GUID                     |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

`GameObject`

构造的 GameObject

#### Inherited from

Core.GameObject.spawnGameObject

#### Defined in

Core/index.d.ts:134
