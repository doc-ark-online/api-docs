[Gameplay](../modules/Gameplay.Gameplay.md) / SmoothSync

# SmoothSync <Badge type="tip" text="Class" /> 

**`Description`**

平滑组件

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`SmoothSync`**

## Table of contents

| Accessors |
| :-----|
| **[extrapolationTimeLint](Gameplay.SmoothSync.md#extrapolationtimelint)**(): `number` <br> 获取一个非拥有的对象可以推测到未来多长时间|
| **[positionSnapThreshold](Gameplay.SmoothSync.md#positionsnapthreshold)**(): `number` <br> 如果一个同步对象的位置超过目标位置的positionSnapThreshold单位，它将立即跳到目标位置而不是线性插值。|
| **[rotationSnapThreshold](Gameplay.SmoothSync.md#rotationsnapthreshold)**(): `number` <br> 如果一个同步对象的旋转大于目标旋转的rotationSnapThreshold，它将立即跳转到目标旋转而不是线性插值|
| **[scaleSnapThreshold](Gameplay.SmoothSync.md#scalesnapthreshold)**(): `number` <br> 如果一个同步对象的规模超过目标规模的scaleSnapThreshold单位，它将立即跳转到目标规模而不是线性插值。|
| **[sceneComponentToSync](Gameplay.SmoothSync.md#scenecomponenttosync)**(`GameObject`): `void` <br> 设置在平滑同步上要同步的物体|
| **[sendRate](Gameplay.SmoothSync.md#sendrate)**(): `number` <br> 获取每秒发送网络更新的次数|
| **[syncPositionEnable](Gameplay.SmoothSync.md#syncpositionenable)**(): `boolean` <br> 获取是否同步位置|
| **[syncRotationEnable](Gameplay.SmoothSync.md#syncrotationenable)**(): `boolean` <br> 获取是否同步旋转|
| **[syncScaleEnable](Gameplay.SmoothSync.md#syncscaleenable)**(): `boolean` <br> 获取是否同步缩放|
| **[timeSmoothing](Gameplay.SmoothSync.md#timesmoothing)**(): `number` <br> 获取要花多少时间才能使所有者平滑|


::: details 点击查看继承
| Accessors |
| :-----|
| **[forwardVector](Gameplay.GameObject.md#forwardvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[guid](Gameplay.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[lockStatus](Gameplay.GameObject.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[name](Gameplay.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.GameObject.md#netstatus)**(): [`NetStatus`](../enums/Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.GameObject.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[relativeLocation](Gameplay.GameObject.md#relativelocation)**(): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.GameObject.md#relativerotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.GameObject.md#relativescale)**(): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.GameObject.md#rightvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.GameObject.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.GameObject.md#transform)**(): [`Transform`](Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.GameObject.md#upvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[visible](Gameplay.GameObject.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[worldLocation](Gameplay.GameObject.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.GameObject.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.GameObject.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.GameObject.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.GameObject.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachToGameObject](Gameplay.GameObject.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.GameObject.md#clone)**(`boolean`): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.GameObject.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](Gameplay.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.GameObject.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.GameObject.md#getbounds)**(`boolean`, [`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.GameObject.md#getchildbyguid)**(`string`): `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.GameObject.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.GameObject.md#getchildren)**(): `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.GameObject.md#getchildrenboxcenter)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.GameObject.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.GameObject.md#getforwardvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.GameObject.md#getrelativelocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.GameObject.md#getrelativerotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.GameObject.md#getrelativescale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.GameObject.md#getrightvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.GameObject.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.GameObject.md#gettransform)**([`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.GameObject.md#getupvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.GameObject.md#getworldlocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.GameObject.md#getworldrotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.GameObject.md#getworldscale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onStart](Gameplay.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.GameObject.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.GameObject.md#ready)**(): `Promise`<[`GameObject`](Gameplay.GameObject.md)\> <br> GameObject准备好后返回|
| **[setCollision](Gameplay.GameObject.md#setcollision)**([`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.GameObject.md#setlocationandrotation)**([`Vector`](Type.Vector.md), [`Rotation`](Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.GameObject.md#setrelativelocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.GameObject.md#setrelativerotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.GameObject.md#setrelativescale)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.GameObject.md#settransform)**([`Transform`](Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.GameObject.md#setvisibility)**([`PropertyStatus`](../enums/Type.PropertyStatus.md), `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.GameObject.md#setworldlocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.GameObject.md#setworldrotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.GameObject.md#setworldscale)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.GameObject.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawnGameObject](Gameplay.GameObject.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.GameObject.md#find)**(`string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawnGameObject](Gameplay.GameObject.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject|
:::


## Accessors

### extrapolationTimeLint  

• `get` **extrapolationTimeLint**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取一个非拥有的对象可以推测到未来多长时间


#### Returns

`number`

extrapolationTimeLint

• `set` **extrapolationTimeLint**(`value`): `void` <Badge type="tip" text="other" />

**`Description`**

设置一个非拥有的对象可以推测到未来多长时间


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 时间 |



### positionSnapThreshold  

• `get` **positionSnapThreshold**(): `number`

**`Description`**

如果一个同步对象的位置超过目标位置的positionSnapThreshold单位，它将立即跳到目标位置而不是线性插值。 <Badge type="tip" text="other" />


#### Returns

`number`

positionSnapThreshold

• `set` **positionSnapThreshold**(`value`): `void`

**`Description`**

设置positionSnapThreshold值 <Badge type="tip" text="other" />


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置positionSnapThreshold值 |



### rotationSnapThreshold  

• `get` **rotationSnapThreshold**(): `number`

**`Description`**

如果一个同步对象的旋转大于目标旋转的rotationSnapThreshold，它将立即跳转到目标旋转而不是线性插值 <Badge type="tip" text="other" />


#### Returns

`number`

rotationSnapThreshold

• `set` **rotationSnapThreshold**(`value`): `void` <Badge type="tip" text="other" />

**`Description`**

设置RotationSnapThreshold值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置RotationSnapThreshold值 |


___

### scaleSnapThreshold  

• `get` **scaleSnapThreshold**(): `number`

**`Description`**

如果一个同步对象的规模超过目标规模的scaleSnapThreshold单位，它将立即跳转到目标规模而不是线性插值。 <Badge type="tip" text="other" />


#### Returns

`number`

scaleSnapThreshold值

• `set` **scaleSnapThreshold**(`value`): `void` <Badge type="tip" text="other" />

**`Description`**

设置ScaleSnapThreshold值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置ScaleSnapThreshold值 |


___

### sceneComponentToSync  

• `set` **sceneComponentToSync**(`object`): `void` <Badge type="tip" text="other" />

**`Description`**

设置在平滑同步上要同步的物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `GameObject` | 使用平滑组件的物体 |


___

### sendRate  

• `get` **sendRate**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取每秒发送网络更新的次数


#### Returns

`number`

每秒发送网络更新的次数

• `set` **sendRate**(`value`): `void` <Badge type="tip" text="other" />

**`Description`**

设置每秒发送网络更新的次数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置每秒发送网络更新的次数 |



### syncPositionEnable  

• `get` **syncPositionEnable**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取是否同步位置


#### Returns

`boolean`

true : 同步位置

false : 不同步位置

• `set` **syncPositionEnable**(`value`): `void` <Badge type="tip" text="other" />

**`Description`**

设置是否同步位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否同步位置 |


___

### syncRotationEnable  

• `get` **syncRotationEnable**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取是否同步旋转


#### Returns

`boolean`

true : 同步旋转，false : 不同步旋转

• `set` **syncRotationEnable**(`value`): `void` <Badge type="tip" text="other" />

**`Description`**

设置是否同步旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 设置是否同步旋转 |


___

### syncScaleEnable  

• `get` **syncScaleEnable**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取是否同步缩放


#### Returns

`boolean`

true : 同步缩放

false : 不同步缩放

• `set` **syncScaleEnable**(`value`): `void` <Badge type="tip" text="other" />

**`Description`**

设置是否同步缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 设置是否同步缩放 |



### timeSmoothing  

• `get` **timeSmoothing**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取要花多少时间才能使所有者平滑


#### Returns

`number`

要花费的时间

• `set` **timeSmoothing**(`value`): `void`

**`Description`**

设置timeSmoothing值 <Badge type="tip" text="other" />


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置timeSmoothing值 |



## Methods