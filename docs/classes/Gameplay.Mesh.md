[GAMEPLAY](../groups/GAMEPLAY.GAMEPLAY.md) / Mesh

# Mesh <Badge type="tip" text="Class" /> <Score text="Mesh" />

StaticMeshActor相关接口主为要物理参数设置接口与材质参数设置接口

::: warning Precautions

物理相关接口目前版本不支持证多端同步

:::

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`Mesh`**

  ↳↳ [`StaticMesh`](Gameplay.Gameplay.StaticMesh.md)

## Table of contents

| Properties |
| :-----|
| **[onEnter](Gameplay.Mesh.md#onenter)**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md) <br> 进入StaticMesh事件|
| **[onLeave](Gameplay.Mesh.md#onleave)**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md) <br> 离开StaticMesh事件|

| Accessors |
| :-----|
| **[angularDamping](Gameplay.Mesh.md#angulardamping)**(): `number` <br> 角阻尼|
| **[applyImpulseOnDamage](Gameplay.Mesh.md#applyimpulseondamage)**(): `boolean` <br> 在伤害上应用冲量|
| **[friction](Gameplay.Mesh.md#friction)**(): `number` <br> 获取摩擦力大小|
| **[gravityEnable](Gameplay.Mesh.md#gravityenable)**(): `boolean` <br> 获取是否启用重力|
| **[ignoreRadialForce](Gameplay.Mesh.md#ignoreradialforce)**(): `boolean` <br> 获取是否忽视径向力|
| **[ignoreRadialImpulse](Gameplay.Mesh.md#ignoreradialimpulse)**(): `boolean` <br> 获取是否忽视径向冲量|
| **[isSimulatingPhysics](Gameplay.Mesh.md#issimulatingphysics)**(): `boolean` <br> 获取是否模拟物理|
| **[linerDamping](Gameplay.Mesh.md#linerdamping)**(): `number` <br> 获取线性阻尼|
| **[lockPositionX](Gameplay.Mesh.md#lockpositionx)**(): `boolean` <br> 获取是否约束位置X|
| **[lockPositionY](Gameplay.Mesh.md#lockpositiony)**(): `boolean` <br> 获取是否约束位置Y|
| **[lockPositionZ](Gameplay.Mesh.md#lockpositionz)**(): `boolean` <br> 获取是否约束位置Z|
| **[lockRotationX](Gameplay.Mesh.md#lockrotationx)**(): `boolean` <br> 获取是否约束旋转X|
| **[lockRotationY](Gameplay.Mesh.md#lockrotationy)**(): `boolean` <br> 获取是否约束旋转Y|
| **[lockRotationZ](Gameplay.Mesh.md#lockrotationz)**(): `boolean` <br> 获取是否约束旋转Z|
| **[massEnable](Gameplay.Mesh.md#massenable)**(): `boolean` <br> 获取是否使用质量|
| **[massInKg](Gameplay.Mesh.md#massinkg)**(): `number` <br> 获取质量大小|
| **[restitution](Gameplay.Mesh.md#restitution)**(): `number` <br> 获取弹力大小|


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
| **[worldLocation](Gameplay.GameObject.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.GameObject.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.GameObject.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
:::


| Methods |
| :-----|
| **[createMaterialInstance](Gameplay.Mesh.md#creatematerialinstance)**(`Index`: `number`): `void` <br> 创建材质实例|
| **[getMaterialInstance](Gameplay.Mesh.md#getmaterialinstance)**(): [`MaterialInstance`](Gameplay.MaterialInstance.md)[] <br> 返回当前拥有的材质实例|
| **[resetMaterial](Gameplay.Mesh.md#resetmaterial)**(): `void` <br> 还原物体材质|
| **[setCullDistance](Gameplay.Mesh.md#setculldistance)**(`inCullDistance`: `number`): `void` <br> 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[setOutlineAndColor](Gameplay.Mesh.md#setoutlineandcolor)**(`Enable`: `boolean`, `ColorIndex`: `number`): `void` <br> 设置对象描边及描边颜色，需要场景中存在后处理对象。|
| **[setStaticMeshAsset](Gameplay.Mesh.md#setstaticmeshasset)**(`InAssetGuid`: `string`): `void` <br> 设置静态网格资源|


::: details 点击查看继承
| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.GameObject.md#adddestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.GameObject.md#asyncgetscriptbyname)**(`name`: `string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachComponent](Gameplay.GameObject.md#attachcomponent)**(`component`: `Component`, `isStatic?`: `boolean`): `boolean` <br> 附加组件|
| **[attachToGameObject](Gameplay.GameObject.md#attachtogameobject)**(`obj`: `GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.GameObject.md#clone)**(`spawnInfo?`: `boolean` \): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.GameObject.md#deletedestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachComponent](Gameplay.GameObject.md#detachcomponent)**(`component`: `string` \): `void` <br> 移除组件|
| **[detachFromGameObject](Gameplay.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.GameObject.md#getboundingboxsize)**(`nonColliding?`: `boolean`, `includeFromChildActors?`: `boolean`, `outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `OriginOuter`: [`Vector`](Type.Vector.md), `BoxExtentOuter`: [`Vector`](Type.Vector.md), `includeFromChildActors?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.GameObject.md#getchildbyguid)**(`GUID`: `string`): `undefined` \| `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.GameObject.md#getchildbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.GameObject.md#getchildren)**(): `undefined` \| `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.GameObject.md#getchildrenboxcenter)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getForwardVector](Gameplay.GameObject.md#getforwardvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.GameObject.md#getrelativelocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.GameObject.md#getrelativerotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.GameObject.md#getrelativescale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.GameObject.md#getrightvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本|
| **[getSourceAssetGuid](Gameplay.GameObject.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.GameObject.md#gettransform)**(`outer?`: [`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.GameObject.md#getupvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.GameObject.md#getworldlocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.GameObject.md#getworldrotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.GameObject.md#getworldscale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](Gameplay.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](Gameplay.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.GameObject.md#ready)**(): `Promise`<[`GameObject`](Gameplay.GameObject.md)\> <br> GameObject准备好后返回|
| **[setLocationAndRotation](Gameplay.GameObject.md#setlocationandrotation)**(`location`: [`Vector`](Type.Vector.md), `rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.GameObject.md#setrelativelocation)**(`location`: [`Vector`](Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.GameObject.md#setrelativerotation)**(`rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.GameObject.md#setrelativescale)**(`scale`: [`Vector`](Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.GameObject.md#settransform)**(`transform`: [`Transform`](Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.GameObject.md#setvisibility)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.GameObject.md#setworldlocation)**(`v`: [`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.GameObject.md#setworldrotation)**(`rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.GameObject.md#setworldscale)**(`v`: [`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.GameObject.md#asyncfind)**(`GUID`: `string`): `Promise`<`GameObject`\> <br> 通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawn](Gameplay.GameObject.md#asyncspawn)**<`T`: extends `GameObject`<`T`\>\>(`spawnInfo`: [`SpawnInfo`](../interfaces/Type.SpawnInfo.md)): `Promise`<`T`: extends `GameObject`<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.GameObject.md#find)**(`GUID`: `string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`InTag`: `string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`name`: `string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawn](Gameplay.GameObject.md#spawn)**<`T`: extends `GameObject`<`T`\>\>(`[spawn](Gameplay.GameObject.md#spawn)Info`): `T`: extends `GameObject`<`T`\> <br> 构造一个 GameObject|
:::


### onEnter <Score text="onEnter" /> 

• **onEnter**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md)

进入StaticMesh事件

___

### onLeave <Score text="onLeave" /> 

• **onLeave**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md)

离开StaticMesh事件

## Accessors

### angularDamping <Score text="angularDamping" /> 

• `get` **angularDamping**(): `number`

角阻尼

#### Returns

`number`

• `set` **angularDamping**(`value`): `void`

设置角阻尼，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### applyImpulseOnDamage <Score text="applyImpulseOnDamage" /> 

• `get` **applyImpulseOnDamage**(): `boolean`

在伤害上应用冲量

#### Returns

`boolean`

• `set` **applyImpulseOnDamage**(`value`): `void`

在伤害上应用冲量

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### friction <Score text="friction" /> 

• `get` **friction**(): `number`

获取摩擦力大小

#### Returns

`number`

• `set` **friction**(`value`): `void`

设置摩擦力大小，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### gravityEnable <Score text="gravityEnable" /> 

• `get` **gravityEnable**(): `boolean`

获取是否启用重力

#### Returns

`boolean`

• `set` **gravityEnable**(`value`): `void`

设置是否启用重力，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### ignoreRadialForce <Score text="ignoreRadialForce" /> 

• `get` **ignoreRadialForce**(): `boolean`

获取是否忽视径向力

#### Returns

`boolean`

• `set` **ignoreRadialForce**(`value`): `void`

设置是否忽视径向力，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### ignoreRadialImpulse <Score text="ignoreRadialImpulse" /> 

• `get` **ignoreRadialImpulse**(): `boolean`

获取是否忽视径向冲量

#### Returns

`boolean`

• `set` **ignoreRadialImpulse**(`value`): `void`

设置忽视径向冲量，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### isSimulatingPhysics <Score text="isSimulatingPhysics" /> 

• `get` **isSimulatingPhysics**(): `boolean`

获取是否模拟物理

#### Returns

`boolean`

• `set` **isSimulatingPhysics**(`value`): `void`

设置模拟物理状态，动态设置物理模拟时可能会出现异常情况，请谨慎使用

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### linerDamping <Score text="linerDamping" /> 

• `get` **linerDamping**(): `number`

获取线性阻尼

#### Returns

`number`

• `set` **linerDamping**(`value`): `void`

设置线性阻尼，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### lockPositionX <Score text="lockPositionX" /> 

• `get` **lockPositionX**(): `boolean`

获取是否约束位置X

#### Returns

`boolean`

• `set` **lockPositionX**(`value`): `void`

设置是否约束位置X，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### lockPositionY <Score text="lockPositionY" /> 

• `get` **lockPositionY**(): `boolean`

获取是否约束位置Y

#### Returns

`boolean`

• `set` **lockPositionY**(`value`): `void`

设置是否约束位置Y，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### lockPositionZ <Score text="lockPositionZ" /> 

• `get` **lockPositionZ**(): `boolean`

获取是否约束位置Z

#### Returns

`boolean`

• `set` **lockPositionZ**(`value`): `void`

设置是否约束位置Z，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### lockRotationX <Score text="lockRotationX" /> 

• `get` **lockRotationX**(): `boolean`

获取是否约束旋转X

#### Returns

`boolean`

• `set` **lockRotationX**(`value`): `void`

设置是否约束旋转X，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### lockRotationY <Score text="lockRotationY" /> 

• `get` **lockRotationY**(): `boolean`

获取是否约束旋转Y

#### Returns

`boolean`

• `set` **lockRotationY**(`value`): `void`

设置是否约束旋转Y，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### lockRotationZ <Score text="lockRotationZ" /> 

• `get` **lockRotationZ**(): `boolean`

获取是否约束旋转Z

#### Returns

`boolean`

• `set` **lockRotationZ**(`value`): `void`

设置是否约束旋转Z，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### massEnable <Score text="massEnable" /> 

• `get` **massEnable**(): `boolean`

获取是否使用质量

#### Returns

`boolean`

• `set` **massEnable**(`value`): `void`

设置是否启用质量，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### massInKg <Score text="massInKg" /> 

• `get` **massInKg**(): `number`

获取质量大小

#### Returns

`number`

• `set` **massInKg**(`value`): `void`

设置质量大小，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### restitution <Score text="restitution" /> 

• `get` **restitution**(): `number`

获取弹力大小

#### Returns

`number`

• `set` **restitution**(`value`): `void`

设置弹力大小，不建议使用，可能导致模拟异常

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |



## Methods
___

### createMaterialInstance <Score text="createMaterialInstance" /> 

• **createMaterialInstance**(`Index`): `void` 

创建材质实例


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 第几个材质 |


___

### getMaterialInstance <Score text="getMaterialInstance" /> 

• **getMaterialInstance**(): [`MaterialInstance`](Gameplay.MaterialInstance.md)[] 

返回当前拥有的材质实例


#### Returns

[`MaterialInstance`](Gameplay.MaterialInstance.md)[]

材质实例数组

___

### resetMaterial <Score text="resetMaterial" /> 

• **resetMaterial**(): `void` 

还原物体材质



___

### setCullDistance <Score text="setCullDistance" /> 

• **setCullDistance**(`inCullDistance`): `void` <Badge type="tip" text="client" />

与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)


::: warning Precautions

最终的裁剪距离会和画质等级有关

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inCullDistance` | `number` | 裁剪距离 |


___

### setOutlineAndColor <Score text="setOutlineAndColor" /> 

• **setOutlineAndColor**(`Enable`, `ColorIndex`): `void` 

设置对象描边及描边颜色，需要场景中存在后处理对象。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Enable` | `boolean` |  是否开启描边 default: |
| `ColorIndex` | `number` |  设置描边颜色，与后处理中颜色Index对应，-1为无颜色 default: |


___

### setStaticMeshAsset <Score text="setStaticMeshAsset" /> 

• **setStaticMeshAsset**(`InAssetGuid`): `void` 

设置静态网格资源


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetGuid` | `string` |  资源GUID default: |

