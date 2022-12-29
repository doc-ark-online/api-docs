[Gameplay](../modules/Gameplay.Gameplay.md) / UIWidget

# UIWidget <Badge type="tip" text="Class" />

**`Description`**

世界UI组件

## Hierarchy

- `GameObject`

  ↳ **`UIWidget`**

## Table of contents

| Accessors |
| :-----|
| **[cylinderArcAngle](Gameplay.Gameplay.UIWidget.md#cylinderarcangle)**(): `number` <br> 获取圆柱体弧形角度|
| **[distanceScaleFactor](Gameplay.Gameplay.UIWidget.md#distancescalefactor)**(): `number` <br> 获取缩放距离系数|
| **[drawSize](Gameplay.Gameplay.UIWidget.md#drawsize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取实际渲染大小|
| **[forwardVector](Gameplay.Gameplay.UIWidget.md#forwardvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[geometryMode](Gameplay.Gameplay.UIWidget.md#geometrymode)**(): [`WidgetGeometryMode`](../enums/Gameplay.Gameplay.WidgetGeometryMode.md) <br> 获取几何体模式|
| **[guid](Gameplay.Gameplay.UIWidget.md#guid)**(): `string` <br> 获取对象的guid（唯一标识一个对象的字符串）。|
| **[headUIMaxVisibleDistance](Gameplay.Gameplay.UIWidget.md#headuimaxvisibledistance)**(): `number` <br> 获取最大头顶UI可见距离|
| **[hideByDistanceEnable](Gameplay.Gameplay.UIWidget.md#hidebydistanceenable)**(): `boolean` <br> 获取是否启用最大可见距离|
| **[interaction](Gameplay.Gameplay.UIWidget.md#interaction)**(): `boolean` <br> 获取世界UI交互状态|
| **[isEnemy](Gameplay.Gameplay.UIWidget.md#isenemy)**(): `boolean` <br> 获取是否作为敌方玩家，敌方玩家不显示头顶UI|
| **[lockStatus](Gameplay.Gameplay.UIWidget.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[name](Gameplay.Gameplay.UIWidget.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.Gameplay.UIWidget.md#netstatus)**(): [`NetStatus`](../enums/Type.Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[occlusionEnable](Gameplay.Gameplay.UIWidget.md#occlusionenable)**(): `boolean` <br> 获取是否可被遮挡|
| **[parent](Gameplay.Gameplay.UIWidget.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[pivot](Gameplay.Gameplay.UIWidget.md#pivot)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取锚点位置|
| **[relativeLocation](Gameplay.Gameplay.UIWidget.md#relativelocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.Gameplay.UIWidget.md#relativerotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.Gameplay.UIWidget.md#relativescale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.Gameplay.UIWidget.md#rightvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[scaledByDistanceEnable](Gameplay.Gameplay.UIWidget.md#scaledbydistanceenable)**(): `boolean` <br> 获取是否开启近大远小|
| **[selfOcclusion](Gameplay.Gameplay.UIWidget.md#selfocclusion)**(): `boolean` <br> 获取是否可被自己遮挡|
| **[staticStatus](Gameplay.Gameplay.UIWidget.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.Gameplay.UIWidget.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.Gameplay.UIWidget.md#transform)**(): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.Gameplay.UIWidget.md#upvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.Gameplay.UIWidget.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[visible](Gameplay.Gameplay.UIWidget.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[widgetSpace](Gameplay.Gameplay.UIWidget.md#widgetspace)**(): [`WidgetSpaceMode`](../enums/Gameplay.Gameplay.WidgetSpaceMode.md) <br> 获取显示方式|
| **[worldLocation](Gameplay.Gameplay.UIWidget.md#worldlocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.Gameplay.UIWidget.md#worldrotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.Gameplay.UIWidget.md#worldscale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|

| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.Gameplay.UIWidget.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.Gameplay.UIWidget.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachToGameObject](Gameplay.Gameplay.UIWidget.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.Gameplay.UIWidget.md#clone)**(`boolean`): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.Gameplay.UIWidget.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.Gameplay.UIWidget.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](Gameplay.Gameplay.UIWidget.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.Gameplay.UIWidget.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.Gameplay.UIWidget.md#getbounds)**(`boolean`, [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.Gameplay.UIWidget.md#getchildbyguid)**(`string`): `GameObject` <br> 根据Guid查找子物体|
| **[getChildByName](Gameplay.Gameplay.UIWidget.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.Gameplay.UIWidget.md#getchildren)**(): `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.Gameplay.UIWidget.md#getchildrenboxcenter)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.Gameplay.UIWidget.md#getcollision)**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.Gameplay.UIWidget.md#getforwardvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.Gameplay.UIWidget.md#getrelativelocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.Gameplay.UIWidget.md#getrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.Gameplay.UIWidget.md#getrelativescale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.Gameplay.UIWidget.md#getrightvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.Gameplay.UIWidget.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.Gameplay.UIWidget.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.Gameplay.UIWidget.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.Gameplay.UIWidget.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.Gameplay.UIWidget.md#gettransform)**([`Transform`](Type.Type.Transform.md)): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体Transform|
| **[getUI](Gameplay.Gameplay.UIWidget.md#getui)**(): [`UserWidget`](UI.UI.UserWidget.md) <br> 获取UI对象|
| **[getUpVector](Gameplay.Gameplay.UIWidget.md#getupvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.Gameplay.UIWidget.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.Gameplay.UIWidget.md#getworldlocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.Gameplay.UIWidget.md#getworldrotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.Gameplay.UIWidget.md#getworldscale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.Gameplay.UIWidget.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.Gameplay.UIWidget.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onStart](Gameplay.Gameplay.UIWidget.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.Gameplay.UIWidget.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.Gameplay.UIWidget.md#ready)**(): `Promise`<[`UIWidget`](Gameplay.Gameplay.UIWidget.md)\> <br> GameObject准备好后返回|
| **[refresh](Gameplay.Gameplay.UIWidget.md#refresh)**(): `void` <br> 请求重新绘制|
| **[setCollision](Gameplay.Gameplay.UIWidget.md#setcollision)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.Gameplay.UIWidget.md#setlocationandrotation)**([`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.Gameplay.UIWidget.md#setrelativelocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.Gameplay.UIWidget.md#setrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.Gameplay.UIWidget.md#setrelativescale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTargetUIWidget](Gameplay.Gameplay.UIWidget.md#settargetuiwidget)**([`UserWidget`](UI.UI.UserWidget.md)): `void` <br> 设置UI|
| **[setTransform](Gameplay.Gameplay.UIWidget.md#settransform)**([`Transform`](Type.Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setUI](Gameplay.Gameplay.UIWidget.md#setui)**(`string`): `void` <br> 通过guid设置UI|
| **[setVisibility](Gameplay.Gameplay.UIWidget.md#setvisibility)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md), `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.Gameplay.UIWidget.md#setworldlocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.Gameplay.UIWidget.md#setworldrotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.Gameplay.UIWidget.md#setworldscale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.Gameplay.UIWidget.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawnGameObject](Gameplay.Gameplay.UIWidget.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.Gameplay.UIWidget.md#find)**(`string`): `GameObject` <br> 通过Guid查找GameObject|
| **[findGameObjectByTag](Gameplay.Gameplay.UIWidget.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.Gameplay.UIWidget.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.Gameplay.UIWidget.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawnGameObject](Gameplay.Gameplay.UIWidget.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject|

## Accessors

### cylinderArcAngle

• `get` **cylinderArcAngle**(): `number`

**`Description`**

获取圆柱体弧形角度

#### Returns

`number`

角度

• `set` **cylinderArcAngle**(`inCylinderArcAngle`): `void`

**`Description`**

设置圆柱体弧形角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inCylinderArcAngle` | `number` | 角度 |

#### Returns

`void`

___

### distanceScaleFactor

• `get` **distanceScaleFactor**(): `number`

**`Description`**

获取缩放距离系数

#### Returns

`number`

距离系数

• `set` **distanceScaleFactor**(`Value`): `void`

**`Description`**

设置缩放距离系数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 距离系数 |

#### Returns

`void`

___

### drawSize

• `get` **drawSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取实际渲染大小

#### Returns

[`Vector2`](Type.Type.Vector2.md)

渲染大小2D

• `set` **drawSize**(`newSize`): `void`

**`Description`**

设置实际渲染大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSize` | [`Vector2`](Type.Type.Vector2.md) | 渲染大小2D |

#### Returns

`void`

___

### forwardVector

• `get` **forwardVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### geometryMode

• `get` **geometryMode**(): [`WidgetGeometryMode`](../enums/Gameplay.Gameplay.WidgetGeometryMode.md)

**`Description`**

获取几何体模式

#### Returns

[`WidgetGeometryMode`](../enums/Gameplay.Gameplay.WidgetGeometryMode.md)

几何体模式枚举

• `set` **geometryMode**(`inGeometryMode`): `void`

**`Description`**

设置几何体模式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGeometryMode` | [`WidgetGeometryMode`](../enums/Gameplay.Gameplay.WidgetGeometryMode.md) | 几何体模式枚举 |

#### Returns

`void`

___

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

___

### headUIMaxVisibleDistance

• `get` **headUIMaxVisibleDistance**(): `number`

**`Description`**

获取最大头顶UI可见距离

#### Returns

`number`

可见距离

• `set` **headUIMaxVisibleDistance**(`Value`): `void`

**`Description`**

设置最大头顶UI可见距离

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 可见距离 |

#### Returns

`void`

___

### hideByDistanceEnable

• `get` **hideByDistanceEnable**(): `boolean`

**`Description`**

获取是否启用最大可见距离

#### Returns

`boolean`

true：开启

• `set` **hideByDistanceEnable**(`Value`): `void`

**`Description`**

设置是否启用最大可见距离

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |

#### Returns

`void`

___

### interaction

• `get` **interaction**(): `boolean`

**`Description`**

获取世界UI交互状态

**`Precautions`**

对世界UI，头顶UI生效

**`Effect`**

客户端生效

#### Returns

`boolean`

是否可交互

• `set` **interaction**(`inInteraction`): `void`

**`Description`**

设置世界UI交互状态

**`Precautions`**

对世界UI，头顶UI生效

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inInteraction` | `boolean` | 是否可交互 |

#### Returns

`void`

是否设置成功

___

### isEnemy

• `get` **isEnemy**(): `boolean`

**`Description`**

获取是否作为敌方玩家，敌方玩家不显示头顶UI

#### Returns

`boolean`

布尔值

• `set` **isEnemy**(`Value`): `void`

**`Description`**

设置是否作为敌方玩家，敌方玩家不显示头顶UI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |

#### Returns

`void`

___

### lockStatus

• `get` **lockStatus**(): `boolean`

**`Description`**

获取对象是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

• `set` **lockStatus**(`v`): `void`

**`Description`**

设置对象是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

___

### name

• `get` **name**(): `string`

**`Description`**

返回当前物体名称

**`Effect`**

调用端生效

#### Returns

`string`

名称

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 需要设置的名称 |

#### Returns

`void`

___

### netStatus

• `get` **netStatus**(): [`NetStatus`](../enums/Type.Type.NetStatus.md)

**`Description`**

获取当前物体同步状态

**`Effect`**

调用端生效

#### Returns

[`NetStatus`](../enums/Type.Type.NetStatus.md)

Type.NetStatus

___

### occlusionEnable

• `get` **occlusionEnable**(): `boolean`

**`Description`**

获取是否可被遮挡

#### Returns

`boolean`

true：可被遮挡

• `set` **occlusionEnable**(`Value`): `void`

**`Description`**

设置是否可被遮挡

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |

#### Returns

`void`

___

### parent

• `get` **parent**(): `GameObject`

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

`GameObject`

父物体

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | `GameObject` |

#### Returns

`void`

___

### pivot

• `get` **pivot**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取锚点位置

#### Returns

[`Vector2`](Type.Type.Vector2.md)

位置信息

• `set` **pivot**(`position`): `void`

**`Description`**

设置锚点位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`Vector2`](Type.Type.Vector2.md) | 位置信息 |

#### Returns

`void`

___

### relativeLocation

• `get` **relativeLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | 位置 |

#### Returns

`void`

___

### relativeRotation

• `get` **relativeRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转 |

#### Returns

`void`

___

### relativeScale

• `get` **relativeScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | 缩放 |

#### Returns

`void`

___

### rightVector

• `get` **rightVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### scaledByDistanceEnable

• `get` **scaledByDistanceEnable**(): `boolean`

**`Description`**

获取是否开启近大远小

#### Returns

`boolean`

true：开启

• `set` **scaledByDistanceEnable**(`Value`): `void`

**`Description`**

设置是否开启近大远小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |

#### Returns

`void`

___

### selfOcclusion

• `get` **selfOcclusion**(): `boolean`

**`Description`**

获取是否可被自己遮挡

#### Returns

`boolean`

布尔值

• `set` **selfOcclusion**(`Value`): `void`

**`Description`**

设置是否可被自己遮挡

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |

#### Returns

`void`

___

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取对象是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

___

### tag

• `get` **tag**(): `string`

**`Description`**

获取当前物体的Tag

**`Effect`**

调用端生效

#### Returns

`string`

Tag

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的Tag

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | Tag |

#### Returns

`void`

___

### transform

• `get` **transform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体transform

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

transform

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | 要设置的transform |

#### Returns

`void`

___

### upVector

• `get` **upVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

获取对象是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

• `set` **useUpdate**(`v`): `void`

**`Description`**

设置对象是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

___

### visible

• `get` **visible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api重构 replacement:getVisibility()

**`Description`**

获取当前物体是否显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

___

### widgetSpace

• `get` **widgetSpace**(): [`WidgetSpaceMode`](../enums/Gameplay.Gameplay.WidgetSpaceMode.md)

**`Description`**

获取显示方式

#### Returns

[`WidgetSpaceMode`](../enums/Gameplay.Gameplay.WidgetSpaceMode.md)

显示方式枚举

• `set` **widgetSpace**(`newSpace`): `void`

**`Description`**

设置显示方式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpace` | [`WidgetSpaceMode`](../enums/Gameplay.Gameplay.WidgetSpaceMode.md) | 显示方式 |

#### Returns

`void`

___

### worldLocation

• `get` **worldLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

• `set` **worldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

___

### worldRotation

• `get` **worldRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

___

### worldScale

• `get` **worldScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

• `set` **worldScale**(`v`): `void`

**`Description`**

设置物体的是世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体Destroy事件回调

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |

#### Returns

`void`

___

### asyncGetScriptByName

▸ **asyncGetScriptByName**(`name`): `Promise`<`Script`\>

**`Description`**

异步获得当前物体下的指定脚本 客户端不维系父子关系

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`Promise`<`Script`\>

Script

___

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` | 物体 |

#### Returns

`void`

___

### clone

▸ **clone**(`inReplicates?`): `GameObject`

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inReplicates?` | `boolean` | 是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

___

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体Destroy事件回调

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |

#### Returns

`void`

___

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

___

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

___

### getBoundingBoxSize

▸ **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体包围盒大小

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nonColliding?` | `boolean` | 表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean` | 如果为 true，则递归子物体 default:false |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

___

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取GameObject边界

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onlyCollidingComponents` | `boolean` | 是否只包含有碰撞的组件。 |
| `OriginOuter` | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为GameObject的中心点坐标。 |
| `BoxExtentOuter` | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为GameObject尺寸的一半。 |
| `includeFromChildActors?` | `boolean` | 是否递归包含子物体 default:undefined |

#### Returns

`void`

___

### getChildByGuid

▸ **getChildByGuid**(`guid`): `GameObject`

**`Description`**

根据Guid查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | guid |

#### Returns

`GameObject`

查找的物体

___

### getChildByName

▸ **getChildByName**(`name`): `GameObject`

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名称 |

#### Returns

`GameObject`

查找的物体

___

### getChildren

▸ **getChildren**(): `GameObject`[]

**`Description`**

获取Children，客户端不维系父子关系。推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`GameObject`[]

Array`<GameObject>`

___

### getChildrenBoxCenter

▸ **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

___

### getCollision

▸ **getCollision**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

**`Description`**

返回碰撞状态

**`Effect`**

调用端生效

#### Returns

[`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

碰撞状态

___

### getForwardVector

▸ **getForwardVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### getRelativeLocation

▸ **getRelativeLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

___

### getRelativeRotation

▸ **getRelativeRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

___

### getRelativeScale

▸ **getRelativeScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

___

### getRightVector

▸ **getRightVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### getScriptByGuid

▸ **getScriptByGuid**(`guid`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | guid |

#### Returns

`Script`

Script

___

### getScriptByName

▸ **getScriptByName**(`name`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`Script`

Script

___

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array`<Script>`

___

### getSourceAssetGuid

▸ **getSourceAssetGuid**(): `string`

**`Description`**

获取当前物体使用资源的GUID

**`Effect`**

调用端生效

#### Returns

`string`

资源的GUID

___

### getTransform

▸ **getTransform**(`outer?`): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体Transform

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Transform`](Type.Type.Transform.md) | 接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

___

### getUI

▸ **getUI**(): [`UserWidget`](UI.UI.UserWidget.md)

**`Description`**

获取UI对象

**`Effect`**

客户端生效

#### Returns

[`UserWidget`](UI.UI.UserWidget.md)

UI对象

___

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### getVisibility

▸ **getVisibility**(): `boolean`

**`Description`**

获取GameObject是否被显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

___

### getWorldLocation

▸ **getWorldLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象\

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

___

### getWorldRotation

▸ **getWorldRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

___

### getWorldScale

▸ **getWorldScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

___

### isRunningClient

▸ **isRunningClient**(): `boolean`

**`Description`**

是否为客户端

**`Effect`**

调用端生效

#### Returns

`boolean`

true为客户端

___

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

___

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

___

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | 与上一帧的延迟 单位:秒 |

#### Returns

`void`

___

### ready

▸ **ready**(): `Promise`<[`UIWidget`](Gameplay.Gameplay.UIWidget.md)\>

**`Description`**

GameObject准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`UIWidget`](Gameplay.Gameplay.UIWidget.md)\>

准备好的对象

___

### refresh

▸ **refresh**(): `void`

**`Description`**

请求重新绘制

**`Effect`**

客户端生效

#### Returns

`void`

___

### setCollision

▸ **setCollision**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置碰撞状态

**`Effect`**

调用端生效

**`Precautions`**

建议双端物体设置碰撞，单端物体设置碰撞可能会导致拉扯的情况

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) |  碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean` |  是否传递给子节点 default: false |

#### Returns

`void`

___

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | 世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 世界旋转 |

#### Returns

`void`

___

### setRelativeLocation

▸ **setRelativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | 位置 |

#### Returns

`void`

___

### setRelativeRotation

▸ **setRelativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转 |

#### Returns

`void`

___

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | 要设置的相对缩放 |

#### Returns

`void`

___

### setTargetUIWidget

▸ **setTargetUIWidget**(`uiUserWidget`): `void`

**`Description`**

设置UI

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uiUserWidget` | [`UserWidget`](UI.UI.UserWidget.md) | UI对象 |

#### Returns

`void`

___

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | transform |

#### Returns

`void`

___

### setUI

▸ **setUI**(`guid`): `void`

**`Description`**

通过guid设置UI

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | UI的Guid |

#### Returns

`void`

___

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置GameObject是否被显示

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | 状态 |
| `propagateToChildren?` | `boolean` |  是否设置子物体 default:false |

#### Returns

`void`

___

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |  要设置的世界坐标 |

#### Returns

`void`

___

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

___

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | 要设置的世界缩放 |

#### Returns

`void`

___

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<`GameObject`\>

**`Description`**

通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 物体的guid |

#### Returns

`Promise`<`GameObject`\>

Guid对应的物体

___

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 资源的GUID |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`Promise`<`GameObject`\>

构造的GameObject

___

### find

▸ `Static` **find**(`guid`): `GameObject`

**`Description`**

通过Guid查找GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 物体的Guid |

#### Returns

`GameObject`

Guid对应的物体

___

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[]

**`Description`**

通过自定义Tag获取GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTag` | `string` | 自定义Tag |

#### Returns

`GameObject`[]

Array`<GameObject>`

___

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): `GameObject`

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

___

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`GameObject`[]

返回所有查找到的对象

___

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject`

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 资源的GUID |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`GameObject`

构造的GameObject
