[Avatar](../groups/Avatar.Avatar.md) / StaticMesh

# StaticMesh <Badge type="tip" text="Class" /> <Score text="StaticMesh" />

**`Groups`**

GAMEPLAY

StaticMeshActor相关接口主为要物理参数设置接口与材质参数设置接口

::: warning Precautions

物理相关接口目前版本不支持证多端同步

:::

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`StaticMesh`**

## Table of contents

| Accessors |
| :-----|
| **[angularDamping](Gameplay.StaticMesh.md#angulardamping)**(): `number` <br> 角阻尼|
| **[applyImpulseOnDamage](Gameplay.StaticMesh.md#applyimpulseondamage)**(): `boolean` <br> 在伤害上应用冲量|
| **[gravityEnable](Gameplay.StaticMesh.md#gravityenable)**(): `boolean` <br> 获取是否启用重力|
| **[ignoreRadialForce](Gameplay.StaticMesh.md#ignoreradialforce)**(): `boolean` <br> 获取是否忽视径向力|
| **[ignoreRadialImpulse](Gameplay.StaticMesh.md#ignoreradialimpulse)**(): `boolean` <br> 获取是否忽视径向冲量|
| **[isSimulatingPhysics](Gameplay.StaticMesh.md#issimulatingphysics)**(): `boolean` <br> 获取是否模拟物理|
| **[linerDamping](Gameplay.StaticMesh.md#linerdamping)**(): `number` <br> 获取线性阻尼|
| **[lockPositionX](Gameplay.StaticMesh.md#lockpositionx)**(): `boolean` <br> 获取是否约束位置X|
| **[lockPositionY](Gameplay.StaticMesh.md#lockpositiony)**(): `boolean` <br> 获取是否约束位置Y|
| **[lockPositionZ](Gameplay.StaticMesh.md#lockpositionz)**(): `boolean` <br> 获取是否约束位置Z|
| **[lockRotationX](Gameplay.StaticMesh.md#lockrotationx)**(): `boolean` <br> 获取是否约束旋转X|
| **[lockRotationY](Gameplay.StaticMesh.md#lockrotationy)**(): `boolean` <br> 获取是否约束旋转Y|
| **[lockRotationZ](Gameplay.StaticMesh.md#lockrotationz)**(): `boolean` <br> 获取是否约束旋转Z|
| **[massEnable](Gameplay.StaticMesh.md#massenable)**(): `boolean` <br> 获取是否使用质量|
| **[massInKg](Gameplay.StaticMesh.md#massinkg)**(): `number` <br> 获取质量大小|


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
| **[createMaterialInstance](Gameplay.StaticMesh.md#creatematerialinstance)**(`Index`: `number`): `void` <br> 创建材质实例|
| **[getMaterialColor](Gameplay.StaticMesh.md#getmaterialcolor)**(`Index`: `number`): [`LinearColor`](Type.LinearColor.md) <br> 获取材质颜色,暂时注释材质颜色问题后续有待解决,当前版本获取会失败|
| **[resetMaterial](Gameplay.StaticMesh.md#resetmaterial)**(): `void` <br> 还原物体材质|
| **[setCullDistance](Gameplay.StaticMesh.md#setculldistance)**(`inCullDistance`: `number`): `void` <br> 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[setMaterial](Gameplay.StaticMesh.md#setmaterial)**(`MaterialGUID`: `string`): `void` <br> 设置物体材质|
| **[setMaterialColor](Gameplay.StaticMesh.md#setmaterialcolor)**(`Index`: `number`, `InColor`: [`LinearColor`](Type.LinearColor.md)): `void` <br> 设置材质颜色|
| **[setOutlineAndColor](Gameplay.StaticMesh.md#setoutlineandcolor)**(`Enable`: `boolean`, `ColorIndex`: `number`): `void` <br> 设置对象描边及描边颜色，需要场景中存在后处理对象。|
| **[setStaticMeshAsset](Gameplay.StaticMesh.md#setstaticmeshasset)**(`InAssetGuid`: `string`): `void` <br> 设置静态网格资源|


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
| **[getCollision](Gameplay.GameObject.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.GameObject.md#getforwardvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.GameObject.md#getrelativelocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.GameObject.md#getrelativerotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.GameObject.md#getrelativescale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.GameObject.md#getrightvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
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
| **[setCollision](Gameplay.GameObject.md#setcollision)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `propagateToChildren?`: `boolean`): `void` <br> 设置碰撞状态|
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


## Accessors

### angularDamping <Score text="angularDamping" /> 

• `get` **angularDamping**(): `number`

角阻尼

#### Returns

`number`

• `set` **angularDamping**(`value`): `void`

设置角阻尼

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



### gravityEnable <Score text="gravityEnable" /> 

• `get` **gravityEnable**(): `boolean`

获取是否启用重力

#### Returns

`boolean`

• `set` **gravityEnable**(`value`): `void`

是否启用重力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |



### ignoreRadialForce <Score text="ignoreRadialForce" /> 

• `get` **ignoreRadialForce**(): `boolean`

获取是否忽视径向力

#### Returns

`boolean`

• `set` **ignoreRadialForce**(`value`): `void`

设置是否忽视径向力

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

忽视径向冲量

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

设置模拟物理状态

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

设置线性阻尼

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

设置是否约束位置X

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

设置是否约束位置Y

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

设置是否约束位置Z

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

设置是否约束旋转X

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

设置是否约束旋转Y

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

约束旋转Z

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |



### massEnable <Score text="massEnable" /> 

• `get` **massEnable**(): `boolean`

获取是否使用质量

#### Returns

`boolean`

• `set` **massEnable**(`value`): `void`

是否启用质量

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

设置质量大小

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |



## Methods

### createMaterialInstance <Score text="createMaterialInstance" /> 

• **createMaterialInstance**(`Index`): `void` 

创建材质实例


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 第几个材质 |



### getMaterialColor <Score text="getMaterialColor" /> 

• **getMaterialColor**(`Index`): [`LinearColor`](Type.LinearColor.md) 

获取材质颜色,暂时注释材质颜色问题后续有待解决,当前版本获取会失败


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 第几个材质 |

#### Returns

[`LinearColor`](Type.LinearColor.md)

获取的颜色


### resetMaterial <Score text="resetMaterial" /> 

• **resetMaterial**(): `void` 

还原物体材质




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



### setMaterial <Score text="setMaterial" /> 

• **setMaterial**(`MaterialGUID`): `void` 

设置物体材质


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `MaterialGUID` | `string` |  材质ID default: |


• **setMaterial**(`MaterialGUID`, `Transparency`, `isTransparent`): `void` 

设置物体材质


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `MaterialGUID` | `string` |  材质ID |
| `Transparency` | `number` |  透明度 default: 0.8 |
| `isTransparent` | `boolean` |  是否透明 default: false |


___

### setMaterialColor <Score text="setMaterialColor" /> 

• **setMaterialColor**(`Index`, `InColor`): `void` 

设置材质颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 第几个材质 |
| `InColor` | [`LinearColor`](Type.LinearColor.md) | 要赋值的颜色 |


___

### setOutlineAndColor <Score text="setOutlineAndColor" /> 

• **setOutlineAndColor**(`Enable`, `ColorIndex`): `void` 

设置对象描边及描边颜色，需要场景中存在后处理对象。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Enable` | `boolean` |  是否开启描边 default: |
| `ColorIndex` | `number` |  设置描边颜色，与后处理中颜色Index对应，-1为无颜色 default: |



### setStaticMeshAsset <Score text="setStaticMeshAsset" /> 

• **setStaticMeshAsset**(`InAssetGuid`): `void` 

设置静态网格资源


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetGuid` | `string` |  资源GUID default: |

