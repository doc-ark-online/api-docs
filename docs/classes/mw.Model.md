[GAMEPLAY](../groups/Core.GAMEPLAY.md) / Model

# Model <Badge type="tip" text="Class" /> <Score text="Model" />

<span class="content-big">

物理模拟与材质设置

</span>

<span class="content-big">

-------------------------

</span>

<span class="content-big">

在游戏中添加物理效果有助于提升场景的沉浸感，因为这能促使玩家相信他们的确在与模拟内容进行交互，并且能以某种方式得到反馈。

</span>

<span class="content-big">

物理模拟 如何工作呢？

</span>

<span class="content-big">

Model的属性定义了静态模型具有物理特性，其中较为重要的是：

</span>

<span class="content-big">

- 静态模型实例 physicsEnabled 属性为 True 可开启物理模拟。

</span>

<span class="content-big">

- mass 属性表示重力的大小。

</span>

<span class="content-big">

- friction 属性表示摩擦力的大小。

</span>

<span class="content-big">

- restitution 属性表示弹力。

</span>

<span class="content-big">

- lockPosition 属性表示约束，约束哪个轴指在这个轴向不会发生变动。

</span>

<span class="content-big">

材质如何自定义设置呢？

</span>

<span class="content-big">

材质 是可以应用到网格物体静态模型上的资源，用它可控制场景的可视外观。

</span>

<span class="content-big">

- setMaterial 方法更换静态模型材质，传入左侧材质资源ID。

</span>

<span class="content-big">

- setStaticMeshAsset 方法更换静态模型，传入左侧静态模型资源ID。

</span>

::: warning Precautions

物理相关接口目前版本不支持证多端同步

:::

<span style="font-size: 14px;">

使用示例:创建一个名为"ModelExample"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你可以通过F1键，在场景中动态生成模型并模拟物理.代码如下:

</span>

```ts
@Component
export default class ModelExample extends Script {
    //当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if(SystemUtil.isClient())
            {
                InputUtil.onKeyDown(Keys.F1,()=>{
                    // F1键 通知服务器执行事件
                    mw.Event.dispatchToServer("Model");
                });
            }
        if(SystemUtil.isServer()){
            mw.Event.addClientListener("Model",()=>{
                let box = GameObject.spawn("197386",{
                    transform:new Transform(new Vector(500,0,100),new Rotation(0,0,0),new Vector(1,1,1)),
                    replicates:true
                }) as Model;
                // 控制质量
                box.massEnabled = true;
                // 设置质量
                box.mass = 200;
                // 使用质量
                box.gravityEnabled = true;
                // 设置摩擦力
                box.friction = 0.1;
                // 设置弹力
                box.restitution = 1;
                // 开启物理模拟
                box.physicsEnabled = true;
            });
        }
    }
}
```

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`Model`**

## Table of contents

### Properties <Score text="Properties" /> 
| **[onTouch](mw.Model.md#ontouch)**: [`MulticastGameObjectDelegate`](mw.MulticastGameObjectDelegate.md)  |
| :-----|
| 进入Model事件|
| **[onTouchEnd](mw.Model.md#ontouchend)**: [`MulticastGameObjectDelegate`](mw.MulticastGameObjectDelegate.md)  |
| 离开Model事件|


::: details 点击查看继承
### Properties <Score text="Properties" /> 
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| :-----|
| 物体销毁后事件回调|
:::


### Accessors <Score text="Accessors" /> 
| **[angularDamping](mw.Model.md#angulardamping)**(): `number`  |
| :-----|
| 设置角阻尼|
| **[friction](mw.Model.md#friction)**(): `number`  |
| 设置摩擦力大小|
| **[gravityEnabled](mw.Model.md#gravityenabled)**(): `boolean`  |
| 设置是否启用重力|
| **[linerDamping](mw.Model.md#linerdamping)**(): `number`  |
| 设置线性阻尼|
| **[lockPositionX](mw.Model.md#lockpositionx)**(): `boolean`  |
| 设置是否约束位置X|
| **[lockPositionY](mw.Model.md#lockpositiony)**(): `boolean`  |
| 设置是否约束位置Y|
| **[lockPositionZ](mw.Model.md#lockpositionz)**(): `boolean`  |
| 设置是否约束位置Z|
| **[lockRotationX](mw.Model.md#lockrotationx)**(): `boolean`  |
| 设置是否约束旋转X|
| **[lockRotationY](mw.Model.md#lockrotationy)**(): `boolean`  |
| 设置是否约束旋转Y|
| **[lockRotationZ](mw.Model.md#lockrotationz)**(): `boolean`  |
| 设置是否约束旋转Z|
| **[mass](mw.Model.md#mass)**(): `number`  |
| 设置质量大小|
| **[massEnabled](mw.Model.md#massenabled)**(): `boolean`  |
| 设置是否启用质量|
| **[physicsEnabled](mw.Model.md#physicsenabled)**(): `boolean`  |
| 设置模拟物理状态，动态设置物理模拟时可能会出现异常情况，请谨慎使用|
| **[restitution](mw.Model.md#restitution)**(): `number`  |
| 设置弹力大小|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[assetId](mw.GameObject.md#assetid)**(): `string`  |
| :-----|
| 获取当前物体使用资源的GUID|
| **[gameObjectId](mw.GameObject.md#gameobjectid)**(): `string`  |
| 获取物体的唯一标识（唯一标识一个对象的字符串）。|
| **[isReady](mw.GameObject.md#isready)**(): `boolean`  |
| 当前物体状态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md)  |
| 当前物体本地变换|
| **[name](mw.GameObject.md#name)**(): `string`  |
| 设置物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md)  |
| 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md)  |
| 设置父物体|
| **[tag](mw.GameObject.md#tag)**(): `string`  |
| 设置当前物体的标签|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md)  |
| 当前物体世界变换|
:::


### Methods <Score text="Methods" /> 
| **[createMaterialInstance](mw.Model.md#creatematerialinstance)**(`Index`: `number`): `void`  |
| :-----|
| 创建材质实例|
| **[getMaterialInstance](mw.Model.md#getmaterialinstance)**(): [`MaterialInstance`](mw.MaterialInstance.md)[]  |
| 返回当前拥有的材质实例|
| **[resetMaterial](mw.Model.md#resetmaterial)**(): `void`  |
| 还原物体材质|
| **[setCullDistance](mw.Model.md#setculldistance)**(`inCullDistance`: `number`): `void`  |
| 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[setMaterial](mw.Model.md#setmaterial)**(`MaterialGUID`: `string`): `void`  |
| 设置物体材质|
| **[setOutline](mw.Model.md#setoutline)**(`enabled`: `boolean`, `color?`: [`LinearColor`](mw.LinearColor.md), `width?`: `number`): `void`  |
| 设置对象描边及描边颜色，需要场景中存在后处理对象。|
| **[setPostProcessOutline](mw.Model.md#setpostprocessoutline)**(`enabled`: `boolean`, `color?`: [`LinearColor`](mw.LinearColor.md), `width?`: `number`): `void`  |
| 设置对象描边及描边颜色。|
| **[setStaticMeshAsset](mw.Model.md#setstaticmeshasset)**(`InAssetGuid`: `string`): `void`  |
| 设置静态网格资源|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\>  |
| :-----|
| 物体准备好后返回|
| **[clone](mw.GameObject.md#clone)**(`gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): [`GameObject`](mw.GameObject.md)  |
| 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void`  |
| 删除对象|
| **[getBoundingBoxExtent](mw.GameObject.md#getboundingboxextent)**(`nonColliding?`: `boolean`, `includeFromChild?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)  |
| 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `originOuter`: [`Vector`](mw.Vector.md), `boxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChild?`: `boolean`): `void`  |
| 获取物体边界|
| **[getChildByGameObjectId](mw.GameObject.md#getchildbygameobjectid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md)  |
| 根据gameObjectId查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)  |
| 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md)  |
| 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): [`GameObject`](mw.GameObject.md)[]  |
| 获取子物体|
| **[getChildrenBoundingBoxCenter](mw.GameObject.md#getchildrenboundingboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)  |
| 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[]  |
| 通过名字查找所有的子物体|
| **[getScript](mw.GameObject.md#getscript)**(`id`: `string`): [`Script`](mw.Script.md)  |
| 获得当前物体下的指定脚本|
| **[getScriptByName](mw.GameObject.md#getscriptbyname)**(`name`: `string`): [`Script`](mw.Script.md)  |
| 获得当前物体下的指定脚本|
| **[getScripts](mw.GameObject.md#getscripts)**(): [`Script`](mw.Script.md)[]  |
| 获得当前物体下的所有脚本|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean`  |
| 获取物体是否被显示|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: `boolean` \, `propagateToChildren?`: `boolean`): `void`  |
| 设置物体是否被显示|
| **[asyncFindGameObjectById](mw.GameObject.md#asyncfindgameobjectbyid)**(`gameObjectId`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>  |
| 通过gameObjectId异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings.setGlobalAsyncOverTime(1000 * 10);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>  |
| 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>  |
| 异步构造一个物体，资源不存在会先去下载资源再去创建|
| **[findGameObjectById](mw.GameObject.md#findgameobjectbyid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md)  |
| 通过gameObjectId查找物体|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)  |
| 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[]  |
| 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[]  |
| 通过自定义标签获取物体|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md)  |
| 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\>  |
| 构造一个物体|
:::


## Properties
___

### onTouch <Score text="onTouch" /> 

• **onTouch**: [`MulticastGameObjectDelegate`](mw.MulticastGameObjectDelegate.md)

进入Model事件

___

### onTouchEnd <Score text="onTouchEnd" /> 

• **onTouchEnd**: [`MulticastGameObjectDelegate`](mw.MulticastGameObjectDelegate.md)

离开Model事件

## Accessors

### angularDamping <Score text="angularDamping" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **angularDamping**(): `number`

</th>
<th style="text-align: left">

• `set` **angularDamping**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


角阻尼

#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置角阻尼

#### Parameters

| `value` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### friction <Score text="friction" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **friction**(): `number`

</th>
<th style="text-align: left">

• `set` **friction**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取摩擦力大小

#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置摩擦力大小

#### Parameters

| `value` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### gravityEnabled <Score text="gravityEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **gravityEnabled**(): `boolean`

</th>
<th style="text-align: left">

• `set` **gravityEnabled**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否启用重力

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否启用重力

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### linerDamping <Score text="linerDamping" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **linerDamping**(): `number`

</th>
<th style="text-align: left">

• `set` **linerDamping**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取线性阻尼

#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置线性阻尼

#### Parameters

| `value` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### lockPositionX <Score text="lockPositionX" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **lockPositionX**(): `boolean`

</th>
<th style="text-align: left">

• `set` **lockPositionX**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否约束位置X

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否约束位置X

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### lockPositionY <Score text="lockPositionY" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **lockPositionY**(): `boolean`

</th>
<th style="text-align: left">

• `set` **lockPositionY**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否约束位置Y

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否约束位置Y

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### lockPositionZ <Score text="lockPositionZ" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **lockPositionZ**(): `boolean`

</th>
<th style="text-align: left">

• `set` **lockPositionZ**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否约束位置Z

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否约束位置Z

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### lockRotationX <Score text="lockRotationX" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **lockRotationX**(): `boolean`

</th>
<th style="text-align: left">

• `set` **lockRotationX**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否约束旋转X

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否约束旋转X

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### lockRotationY <Score text="lockRotationY" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **lockRotationY**(): `boolean`

</th>
<th style="text-align: left">

• `set` **lockRotationY**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否约束旋转Y

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否约束旋转Y

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### lockRotationZ <Score text="lockRotationZ" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **lockRotationZ**(): `boolean`

</th>
<th style="text-align: left">

• `set` **lockRotationZ**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否约束旋转Z

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否约束旋转Z

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### mass <Score text="mass" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **mass**(): `number`

</th>
<th style="text-align: left">

• `set` **mass**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取质量大小

#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置质量大小

#### Parameters

| `value` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### massEnabled <Score text="massEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **massEnabled**(): `boolean`

</th>
<th style="text-align: left">

• `set` **massEnabled**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否使用质量

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否启用质量

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### physicsEnabled <Score text="physicsEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **physicsEnabled**(): `boolean`

</th>
<th style="text-align: left">

• `set` **physicsEnabled**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否模拟物理

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置模拟物理状态，动态设置物理模拟时可能会出现异常情况，请谨慎使用

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### restitution <Score text="restitution" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **restitution**(): `number`

</th>
<th style="text-align: left">

• `set` **restitution**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取弹力大小

#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置弹力大小

#### Parameters

| `value` | `number` |
| :------ | :------ |


</td>
</tr></tbody>
</table>



## Methods
___

### createMaterialInstance <Score text="createMaterialInstance" /> 

• **createMaterialInstance**(`Index`): `void` 

创建材质实例

#### Parameters

| `Index` `number` | 第几个材质 |
| :------ | :------ |



___

### getMaterialInstance <Score text="getMaterialInstance" /> 

• **getMaterialInstance**(): [`MaterialInstance`](mw.MaterialInstance.md)[] 

返回当前拥有的材质实例

#### Returns

| [`MaterialInstance`](mw.MaterialInstance.md)[] | 材质实例数组 |
| :------ | :------ |


___

### resetMaterial <Score text="resetMaterial" /> 

• **resetMaterial**(): `void` 

还原物体材质



___

### setCullDistance <Score text="setCullDistance" /> 

• **setCullDistance**(`inCullDistance`): `void` <Badge type="tip" text="client" />

与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)

#### Parameters

| `inCullDistance` `number` | 裁剪距离 |
| :------ | :------ |



::: warning Precautions

最终的裁剪距离会和画质等级有关

:::

___

### setMaterial <Score text="setMaterial" /> 

• **setMaterial**(`MaterialGUID`): `void`

设置物体材质

#### Parameters

| `MaterialGUID` `string` |  材质ID default: |
| :------ | :------ |


• **setMaterial**(`MaterialGUID`, `index`): `void` 

设置物体材质


#### Parameters

| `MaterialGUID` `string` |  材质ID |
| :------ | :------ |
| `index` `number` |  材质下标 |


**`Effect`**


___

### setOutline <Score text="setOutline" /> 

• **setOutline**(`enabled`, `color?`, `width?`): `void` 

设置对象描边及描边颜色，需要场景中存在后处理对象。

#### Parameters

| `enabled` `boolean` |  是否开启描边 default: |
| :------ | :------ |
| `color?` [`LinearColor`](mw.LinearColor.md) |  设置描边颜色，与后处理中颜色Index对应，-1为无颜色 default:mw.LinearColor.black |
| `width?` `number` |  设置描边宽度 default:2 |



___

### setPostProcessOutline <Score text="setPostProcessOutline" /> 

• **setPostProcessOutline**(`enabled`, `color?`, `width?`): `void` 

设置对象描边及描边颜色。

#### Parameters

| `enabled` `boolean` |  是否开启描边 default: |
| :------ | :------ |
| `color?` [`LinearColor`](mw.LinearColor.md) |  设置描边颜色，与后处理中颜色Index对应，-1为无颜色 default:mw.LinearColor.black |
| `width?` `number` |  设置描边宽度 default:2 |



___

### setStaticMeshAsset <Score text="setStaticMeshAsset" /> 

• **setStaticMeshAsset**(`InAssetGuid`): `void` 

设置静态网格资源

#### Parameters

| `InAssetGuid` `string` |  资源GUID default: |
| :------ | :------ |


