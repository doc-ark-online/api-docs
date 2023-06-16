[Gameplay](../groups/Core.Gameplay.md) / Model

# Model <Badge type="tip" text="Class" /> <Score text="Model" />

接口主要为物理参数设置接口与材质参数设置接口

::: warning Precautions

物理相关接口目前版本不支持证多端同步

:::

使用示例:创建一个名为"MeshExample"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你可以通过F1键，在场景中动态生成模型并模拟物理.代码如下:
```ts
@Core.Class
export default class MeshExample extends Script {
    //当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if(Util.SystemUtil.isClient())
            {
                InputUtil.onKeyDown(Type.Keys.F1,()=>{
                    // F1键 通知服务器执行事件
                    dispatchToServer("SpawnMesh");
                });
            }
        if(Util.SystemUtil.isServer()){
            addClientListener("SpawnMesh",()=>{
                let box = GameObject.spawn({
                guid:"7669",
                transform:new Transform(new Vector(500,0,100),new Rotation(0,0,0),new Vector(1,1,1)),
                replicates:true
                }) as Model;
                // 控制质量
                box.massEnable = true;
                // 设置质量
                box.massInKg = 200;
                // 使用质量
                box.gravityEnable = true;
                // 设置摩擦力
                box.friction = 0.1;
                // 设置弹力
                box.restitution = 1;
                // 开启物理模拟
                box.isSimulatingPhysics = true;
            });
        }
    }
}
```

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`Model`**

  ↳↳ [`Mesh`](Core.mw.Mesh.md)

## Table of contents

| Properties |
| :-----|
| **[onEnter](mw.Model.md#onenter)**: [`MulticastGameObjectDelegate`](mw.MulticastGameObjectDelegate.md) <br> 进入StaticMesh事件|
| **[onLeave](mw.Model.md#onleave)**: [`MulticastGameObjectDelegate`](mw.MulticastGameObjectDelegate.md) <br> 离开StaticMesh事件|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
| **[scriptNumberPropPathMap](mw.GameObject.md#scriptnumberproppathmap)**: `any` <br> |
| **[scriptPropPathNumberMap](mw.GameObject.md#scriptproppathnumbermap)**: `any` <br> |
:::


| Accessors |
| :-----|
| **[angularDamping](mw.Model.md#angulardamping)**(): `number` <br> 角阻尼|
| **[applyImpulseOnDamage](mw.Model.md#applyimpulseondamage)**(): `boolean` <br> 在伤害上应用冲量|
| **[friction](mw.Model.md#friction)**(): `number` <br> 获取摩擦力大小|
| **[gravityEnable](mw.Model.md#gravityenable)**(): `boolean` <br> 获取是否启用重力|
| **[ignoreRadialForce](mw.Model.md#ignoreradialforce)**(): `boolean` <br> 获取是否忽视径向力|
| **[ignoreRadialImpulse](mw.Model.md#ignoreradialimpulse)**(): `boolean` <br> 获取是否忽视径向冲量|
| **[isSimulatingPhysics](mw.Model.md#issimulatingphysics)**(): `boolean` <br> 获取是否模拟物理|
| **[linerDamping](mw.Model.md#linerdamping)**(): `number` <br> 获取线性阻尼|
| **[lockPositionX](mw.Model.md#lockpositionx)**(): `boolean` <br> 获取是否约束位置X|
| **[lockPositionY](mw.Model.md#lockpositiony)**(): `boolean` <br> 获取是否约束位置Y|
| **[lockPositionZ](mw.Model.md#lockpositionz)**(): `boolean` <br> 获取是否约束位置Z|
| **[lockRotationX](mw.Model.md#lockrotationx)**(): `boolean` <br> 获取是否约束旋转X|
| **[lockRotationY](mw.Model.md#lockrotationy)**(): `boolean` <br> 获取是否约束旋转Y|
| **[lockRotationZ](mw.Model.md#lockrotationz)**(): `boolean` <br> 获取是否约束旋转Z|
| **[massEnable](mw.Model.md#massenable)**(): `boolean` <br> 获取是否使用质量|
| **[massInKg](mw.Model.md#massinkg)**(): `number` <br> 获取质量大小|
| **[restitution](mw.Model.md#restitution)**(): `number` <br> 获取弹力大小|


::: details 点击查看继承
| Accessors |
| :-----|
| **[guid](mw.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[isLocked](mw.GameObject.md#islocked)**(): `boolean` <br> 获取对象是否锁定|
| **[isReady](mw.GameObject.md#isready)**(): `boolean` <br> 当前物体状态|
| **[isStatic](mw.GameObject.md#isstatic)**(): `boolean` <br> 获取对象是否静态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体本地transform|
| **[name](mw.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md) <br> 获取当前父物体|
| **[sourceAssetGuid](mw.GameObject.md#sourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[tag](mw.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[useUpdate](mw.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体世界transform|
:::


| Methods |
| :-----|
| **[createMaterialInstance](mw.Model.md#creatematerialinstance)**(`Index`: `number`): `void` <br> 创建材质实例|
| **[getMaterialInstance](mw.Model.md#getmaterialinstance)**(): [`MaterialInstance`](mw.MaterialInstance.md)[] <br> 返回当前拥有的材质实例|
| **[resetMaterial](mw.Model.md#resetmaterial)**(): `void` <br> 还原物体材质|
| **[setCullDistance](mw.Model.md#setculldistance)**(`inCullDistance`: `number`): `void` <br> 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[setOutlineAndColor](mw.Model.md#setoutlineandcolor)**(`Enable`: `boolean`, `ColorIndex`: `number`): `void` <br> 设置对象描边及描边颜色，需要场景中存在后处理对象。|
| **[setStaticMeshAsset](mw.Model.md#setstaticmeshasset)**(`InAssetGuid`: `string`): `void` <br> 设置静态网格资源|


::: details 点击查看继承
| Methods |
| :-----|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> GameObject准备好后返回|
| **[attachToGameObject](mw.GameObject.md#attachtogameobject)**(`obj`: [`GameObject`](mw.GameObject.md)): `void` <br> 将物体附着到指定物体上|
| **[clone](mw.GameObject.md#clone)**(`spawnInfo?`: `boolean` \): [`GameObject`](mw.GameObject.md) <br> 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](mw.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[follow](mw.GameObject.md#follow)**(`Target`: [`GameObject`](mw.GameObject.md), `Radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void` <br> 跟随目标|
| **[getBoundingBoxSize](mw.GameObject.md#getboundingboxsize)**(`nonColliding?`: `boolean`, `includeFromChildActors?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `OriginOuter`: [`Vector`](mw.Vector.md), `BoxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChildActors?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](mw.GameObject.md#getchildbyguid)**(`GUID`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 根据GUID查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): `undefined` \| [`GameObject`](mw.GameObject.md)[] <br> 获取Children|
| **[getChildrenBoxCenter](mw.GameObject.md#getchildrenboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找所有的子物体|
| **[getScriptByGuid](mw.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](mw.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](mw.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[isRunningClient](mw.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[navigateTo](mw.GameObject.md#navigateto)**(`Location`: [`Vector`](mw.Vector.md), `Radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void` <br> 向目标点进行寻路移动|
| **[onDestroy](mw.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](mw.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](mw.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](mw.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: [`PropertyStatus`](../enums/mw.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[stopFollow](mw.GameObject.md#stopfollow)**(): `void` <br> 停止跟随|
| **[stopNavigateTo](mw.GameObject.md#stopnavigateto)**(): `void` <br> 停止向目标点寻路移动|
| **[asyncFindGameObjectByGuid](mw.GameObject.md#asyncfindgameobjectbyguid)**(`guid`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`spawnInfo`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[findGameObjectByGuid](mw.GameObject.md#findgameobjectbyguid)**(`guid`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过guid查找GameObject|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过自定义tag获取GameObject|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`[spawn](mw.GameObject.md#spawn)Info`): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\> <br> 构造一个 GameObject|
:::


### onEnter <Score text="onEnter" /> 

• **onEnter**: [`MulticastGameObjectDelegate`](mw.MulticastGameObjectDelegate.md)

进入StaticMesh事件

___

### onLeave <Score text="onLeave" /> 

• **onLeave**: [`MulticastGameObjectDelegate`](mw.MulticastGameObjectDelegate.md)

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

• **getMaterialInstance**(): [`MaterialInstance`](mw.MaterialInstance.md)[] 

返回当前拥有的材质实例


#### Returns

[`MaterialInstance`](mw.MaterialInstance.md)[]

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

