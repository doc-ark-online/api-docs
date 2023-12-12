[玩法](../groups/玩法.玩法.md) / Trigger

# Trigger <Badge type="tip" text="Class" /> <Score text="Trigger" />

触发器

当与触发器交互时，可以触发事件。所有触发器都差不多，区别在于形状不同——有盒体和球体——触发器通过这些形状来判断其他对象是否碰撞并激活了它。

触发器是一个很有用的工具。你可以使用触发器实现很多有趣的玩法，比如创建一个脚本放在放在触发器子级，同时在触发器子级放置一个金币模型，使用 onEnter 事件，完成角色进入触发器范围，金币消失的效果。

::: warning Precautions

各端运行，无自动同步

:::

<span style="font-size: 14px;">
使用示例: 将如下脚本挂载至对象管理器触发器下。
</span>

```ts
@Component
export default class TriggerExample extends Script {
    //当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        // 获取当前脚本所挂载的触发器
        let Trigger = this.gameObject as Trigger
        // 对进入触发器事件进行绑定
        Trigger.onEnter.add((obj) => {
            // 输出Log
            console.log("OnEnter:" + obj.name);
        });
        // 对离开触发器事件进行绑定
        Trigger.onLeave.add((obj) => {
            // 输出Log
            console.log("OnLeave:" + obj.name);
        });
    }
}
```

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`Trigger`**

## Table of contents

### Properties <Score text="Properties" /> 
| **[onEnter](mw.Trigger.md#onenter)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`gameObject`: [`GameObject`](mw.GameObject.md)) => `void`\>  |
| :-----|
| 进入触发器事件|
| **[onLeave](mw.Trigger.md#onleave)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`gameObject`: [`GameObject`](mw.GameObject.md)) => `void`\>  |
| 离开触发器事件|


::: details 点击查看继承
### Properties <Score text="Properties" /> 
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>   |
| :-----|
| 物体销毁后事件回调|
:::


### Accessors <Score text="Accessors" /> 
| **[enabled](mw.Trigger.md#enabled)**(): `boolean`  |
| :-----|
| 是否已启用|
| **[shape](mw.Trigger.md#shape)**(): [`TriggerShapeType`](../enums/mw.TriggerShapeType.md)  |
| 触发器形状|
| **[shapeExtent](mw.Trigger.md#shapeextent)**(): [`Vector`](mw.Vector.md)  |
| 触发器形状，当形状为 Box 时，大小为 Vector；当形状为 Sphere 时，大小取参数的 Z 轴的值|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[assetId](mw.GameObject.md#assetid)**(): `string`   |
| :-----|
| 获取当前物体使用资源的GUID|
| **[gameObjectId](mw.GameObject.md#gameobjectid)**(): `string`   |
| 获取物体的唯一标识（唯一标识一个对象的字符串）。|
| **[isReady](mw.GameObject.md#isready)**(): `boolean`   |
| 当前物体状态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md)   |
| 当前物体本地变换|
| **[name](mw.GameObject.md#name)**(): `string`   |
| 设置物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md)   |
| 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md)   |
| 设置父物体|
| **[tag](mw.GameObject.md#tag)**(): `string`   |
| 设置当前物体的标签|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md)   |
| 当前物体世界变换|
:::


### Methods <Score text="Methods" /> 
| **[checkInArea](mw.Trigger.md#checkinarea)**(`gameObject`: [`GameObject`](mw.GameObject.md)): `boolean`   |
| :-----|
| 判断指定对象是否在触发器区域|
| **[setBoxExtent](mw.Trigger.md#setboxextent)**(`InBoxExtent`: [`Vector`](mw.Vector.md), `updateOverlaps?`: `boolean`): `void`   |
| 设置立方体触发器大小|
| **[setSphereRadius](mw.Trigger.md#setsphereradius)**(`InSphereRadius`: `number`, `updateOverlaps?`: `boolean`): `void`   |
| 设置球形触发器大小|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[addComponent](mw.GameObject.md#addcomponent)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor`: (...`args`: `unknown`[]) => `T`: extends [`Script`](mw.Script.md)<`T`\>, `bInReplicates?`: `boolean`): `T`: extends [`Script`](mw.Script.md)<`T`\>  |
| :-----|
| 添加一个脚本组件|
| **[addScriptToObject](mw.GameObject.md#addscripttoobject)**(`script`: [`Script`](mw.Script.md)): `void`   |
| 附加脚本|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\>   |
| 物体准备好后返回|
| **[clone](mw.GameObject.md#clone)**(`gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): [`GameObject`](mw.GameObject.md)   |
| 复制对象|
| **[delScriptFromObject](mw.GameObject.md#delscriptfromobject)**(`script`: [`Script`](mw.Script.md)): `void`   |
| 移除脚本|
| **[destroy](mw.GameObject.md#destroy)**(): `void`   |
| 删除对象|
| **[getBoundingBoxExtent](mw.GameObject.md#getboundingboxextent)**(`nonColliding?`: `boolean`, `includeFromChild?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `originOuter`: [`Vector`](mw.Vector.md), `boxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChild?`: `boolean`): `void`   |
| 获取物体边界|
| **[getChildByGameObjectId](mw.GameObject.md#getchildbygameobjectid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md)   |
| 根据gameObjectId查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)   |
| 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md)   |
| 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): [`GameObject`](mw.GameObject.md)[]   |
| 获取子物体|
| **[getChildrenBoundingBoxCenter](mw.GameObject.md#getchildrenboundingboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[]   |
| 通过名字查找所有的子物体|
| **[getComponent](mw.GameObject.md#getcomponent)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor?`): `T`: extends [`Script`](mw.Script.md)<`T`\> |
| **[getComponentPropertys](mw.GameObject.md#getcomponentpropertys)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor`: (...`args`: `unknown`[]) => `T`: extends [`Script`](mw.Script.md)<`T`\>): `Map`<`string`, `IPropertyOptions`\>  |
| 获取脚本组件属性|
| **[getComponents](mw.GameObject.md#getcomponents)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor?`): `T`: extends [`Script`](mw.Script.md)<`T`\>[] |
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean`   |
| 获取物体是否被显示|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: `boolean`  [`PropertyStatus`](../enums/mw.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void`   |
| 设置物体是否被显示|
| **[asyncFindGameObjectById](mw.GameObject.md#asyncfindgameobjectbyid)**(`gameObjectId`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>   |
| 通过gameObjectId异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings.setGlobalAsyncOverTime(1000 * 10);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>   |
| 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>   |
| 异步构造一个物体，资源不存在会先去下载资源再去创建|
| **[findGameObjectById](mw.GameObject.md#findgameobjectbyid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md)   |
| 通过gameObjectId查找物体|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)   |
| 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[]   |
| 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[]   |
| 通过自定义标签获取物体|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md)   |
| 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\>   |
| 构造一个物体|
:::


## Properties

___

### onEnter <Score text="onEnter" /> 

• **onEnter**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`gameObject`: [`GameObject`](mw.GameObject.md)) => `void`\>

进入触发器事件

___

### onLeave <Score text="onLeave" /> 

• **onLeave**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`gameObject`: [`GameObject`](mw.GameObject.md)) => `void`\>

离开触发器事件

## Accessors

___

### enabled <Score text="enabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **enabled**(): `boolean`

</th>
<th style="text-align: left">

• `set` **enabled**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否已启用

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


是否已启用

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### shape <Score text="shape" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **shape**(): [`TriggerShapeType`](../enums/mw.TriggerShapeType.md)

</th>
<th style="text-align: left">

• `set` **shape**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


触发器形状

#### Returns

| [`TriggerShapeType`](../enums/mw.TriggerShapeType.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


触发器形状

#### Parameters

| `value` | [`TriggerShapeType`](../enums/mw.TriggerShapeType.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### shapeExtent <Score text="shapeExtent" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **shapeExtent**(): [`Vector`](mw.Vector.md)

</th>
<th style="text-align: left">

• `set` **shapeExtent**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


触发器形状，当形状为 Box 时，大小为 Vector；当形状为 Sphere 时，大小取返回值的 Z 轴的值

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


触发器形状，当形状为 Box 时，大小为 Vector；当形状为 Sphere 时，大小取参数的 Z 轴的值

#### Parameters

| `value` | [`Vector`](mw.Vector.md) |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

___

### checkInArea <Score text="checkInArea" /> 

• **checkInArea**(`gameObject`): `boolean` 

判断指定对象是否在触发器区域

#### Parameters

| `gameObject` [`GameObject`](mw.GameObject.md) | 传入需判断的对象 |
| :------ | :------ |

#### Returns

| `boolean` | true:为在触发器范围内 |
| :------ | :------ |

___

### setBoxExtent <Score text="setBoxExtent" /> 

• **setBoxExtent**(`InBoxExtent`, `updateOverlaps?`): `void` 

设置立方体触发器大小

#### Parameters

| `InBoxExtent` [`Vector`](mw.Vector.md) | 盒体长宽高 |
| :------ | :------ |
| `updateOverlaps?` `boolean` | 是否刷新 default:true |


___

### setSphereRadius <Score text="setSphereRadius" /> 

• **setSphereRadius**(`InSphereRadius`, `updateOverlaps?`): `void` 

设置球形触发器大小

#### Parameters

| `InSphereRadius` `number` | 球体半径 |
| :------ | :------ |
| `updateOverlaps?` `boolean` | 是否刷新 default:true |

