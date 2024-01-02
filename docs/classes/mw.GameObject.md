[基类](../groups/基类.基类.md) / GameObject

# GameObject <Badge type="tip" text="Class" /> <Score text="GameObject" />

场景中所有实体的基类

Model、Pawn、Camera、AdvancedVehicle、BlockingVolume等逻辑对象均继承自GameObject。

提供复制删除物体，查找获取物体、子物体、脚本等功能。

<span style="font-size: 14px;">
使用示例:创建一个名为"GameObjectExample"的脚本，在场景中放置模型正方体、圆柱、圆台，父子关系树为：正方体/圆柱/圆台,并把GameObjectExample脚本挂载给正方体。代码如下：
</span>

```ts
@Component
export default class GameObjectExample extends Script {
    protected onStart(): void {
        let obj: GameObject = this.gameObject;
        console.log(`obj.name = ${obj.name}`);
        console.log(`obj.tag = ${obj.tag}`);
        console.log(`obj.worldTransform = ${obj.worldTransform}`);
        console.log(`obj.localTransform = ${obj.localTransform}`);
        let children = obj.getChildren();
        children.forEach(child => {
            console.log(`obj child = ${child.name}`);
        });
        let path = "正方体/圆柱"
        let cylinderObj = GameObject.getGameObjectByPath(path);
        console.log(`getGameObjectByPath = ${cylinderObj ? cylinderObj.name : "undefined"}`);
        path = "圆柱/圆台"
        cylinderObj = obj.getChildByPath(path);
        console.log(`getChildByPath = ${cylinderObj ? cylinderObj.name : "undefined"}`);
        cylinderObj.onDestroyDelegate.add(()=>{
            console.log(`destroyDelegate 1 = ${cylinderObj ? cylinderObj.name : "undefined"}`);
        });
        cylinderObj.onDestroyDelegate.add(()=>{
            console.log(`destroyDelegate 2 = ${cylinderObj ? cylinderObj.name : "undefined"}`);
        });
        cylinderObj.destroy();
    }
}
```

## Hierarchy

- `Base`

  ↳ **`GameObject`**

  ↳↳ [`Model`](mw.Model.md)

  ↳↳ [`Pawn`](mw.Pawn.md)

  ↳↳ [`Camera`](mw.Camera.md)

  ↳↳ [`AdvancedVehicle`](mw.AdvancedVehicle.md)

  ↳↳ [`BlockingVolume`](mw.BlockingVolume.md)

  ↳↳ [`Effect`](mw.Effect.md)

  ↳↳ [`Sound`](mw.Sound.md)

  ↳↳ [`SwimmingVolume`](mw.SwimmingVolume.md)

  ↳↳ [`Trigger`](mw.Trigger.md)

  ↳↳ [`UIWidget`](mw.UIWidget.md)

  ↳↳ [`HotWeapon`](mw.HotWeapon.md)

  ↳↳ [`Interactor`](mw.Interactor.md)

  ↳↳ [`NavModifierVolume`](mw.NavModifierVolume.md)

  ↳↳ [`Impulse`](mw.Impulse.md)

  ↳↳ [`IntegratedMover`](mw.IntegratedMover.md)

  ↳↳ [`PhysicsThruster`](mw.PhysicsThruster.md)

  ↳↳ [`ProjectileInst`](mw.ProjectileInst.md)

  ↳↳ [`ObjectLauncher`](mw.ObjectLauncher.md)

  ↳↳ [`UIObject`](mw.UIObject.md)

## Table of contents

### Properties <Score text="Properties" /> 
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>   |
| :-----|
| 物体销毁后事件回调|

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
| 返回当前物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md)   |
| 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md)   |
| 获取当前父物体|
| **[tag](mw.GameObject.md#tag)**(): `string`   |
| 获取当前物体的标签|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md)   |
| 当前物体世界变换|

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

## Properties

### onDestroyDelegate <Score text="onDestroyDelegate" /> 

• **onDestroyDelegate**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> 

物体销毁后事件回调

## Accessors

### assetId <Score text="assetId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **assetId**(): `string` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前物体使用资源的GUID

#### Returns

| `string` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### gameObjectId <Score text="gameObjectId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **gameObjectId**(): `string` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取物体的唯一标识（唯一标识一个对象的字符串）。

#### Returns

| `string` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### isReady <Score text="isReady" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isReady**(): `boolean` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当前物体状态

#### Returns

| `boolean` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### localTransform <Score text="localTransform" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **localTransform**(): [`Transform`](mw.Transform.md) 

</th>
<th style="text-align: left">

• `set` **localTransform**(`transform`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当前物体本地变换

#### Returns

| [`Transform`](mw.Transform.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


当前物体本地变换

#### Parameters

| `transform` | [`Transform`](mw.Transform.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### name <Score text="name" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **name**(): `string` 

</th>
<th style="text-align: left">

• `set` **name**(`name`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回当前物体名称

#### Returns

| `string` | 名称 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置物体名称

#### Parameters

| `name` `string` | 需要设置的名称 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### netStatus <Score text="netStatus" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **netStatus**(): [`NetStatus`](../enums/mw.NetStatus.md) 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前物体同步状态

#### Returns

| [`NetStatus`](../enums/mw.NetStatus.md) | mw.NetStatus |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### parent <Score text="parent" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **parent**(): [`GameObject`](mw.GameObject.md) 

</th>
<th style="text-align: left">

• `set` **parent**(`newParent`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前父物体

#### Returns

| [`GameObject`](mw.GameObject.md) | 父物体 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置父物体

#### Parameters

| `newParent` | [`GameObject`](mw.GameObject.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### tag <Score text="tag" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **tag**(): `string` 

</th>
<th style="text-align: left">

• `set` **tag**(`tag`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前物体的标签

#### Returns

| `string` | Tag |
| :------ | :------ |


</td>
<td style="text-align: left">


设置当前物体的标签

#### Parameters

| `tag` `string` | Tag |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### worldTransform <Score text="worldTransform" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **worldTransform**(): [`Transform`](mw.Transform.md) 

</th>
<th style="text-align: left">

• `set` **worldTransform**(`transform`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当前物体世界变换

#### Returns

| [`Transform`](mw.Transform.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


当前物体世界变换

#### Parameters

| `transform` | [`Transform`](mw.Transform.md) |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

### addComponent <Score text="addComponent" /> 

• **addComponent**<`T`\>(`constructor`, `bInReplicates?`): `T`

添加一个脚本组件

#### Parameters

| `constructor` (...`args`: `unknown`[]) => `T` | ScriptComponentClass 添加脚本的类型 |
| :------ | :------ |
| `bInReplicates?` `boolean` | 是否开启同步 |

#### Returns

| `T` | T 新添加的脚本组件 |
| :------ | :------ |

#### Type parameters

| `T` | extends [`Script`](mw.Script.md)<`T`\> |
| :------ | :------ |

___

### addScriptToObject <Score text="addScriptToObject" /> 

• **addScriptToObject**(`script`): `void` 

附加脚本

#### Parameters

| `script` [`Script`](mw.Script.md) | 脚本 |
| :------ | :------ |


___

### asyncReady <Score text="asyncReady" /> 

• **asyncReady**(): `Promise`<[`GameObject`](mw.GameObject.md)\> 

物体准备好后返回

#### Returns

| `Promise`<[`GameObject`](mw.GameObject.md)\> | 准备好的对象 |
| :------ | :------ |

___

### clone <Score text="clone" /> 

• **clone**(`gameObjectInfo?`): [`GameObject`](mw.GameObject.md) 

复制对象

#### Parameters

| `gameObjectInfo?` [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md) | 克隆物体的信息 default: 选填 |
| :------ | :------ |

#### Returns

| [`GameObject`](mw.GameObject.md) | 克隆的对象 |
| :------ | :------ |

___

### delScriptFromObject <Score text="delScriptFromObject" /> 

• **delScriptFromObject**(`script`): `void` 

移除脚本

#### Parameters

| `script` [`Script`](mw.Script.md) | 脚本 |
| :------ | :------ |


___

### destroy <Score text="destroy" /> 

• **destroy**(): `void` 

删除对象


___

### getBoundingBoxExtent <Score text="getBoundingBoxExtent" /> 

• **getBoundingBoxExtent**(`nonColliding?`, `includeFromChild?`, `outer?`): [`Vector`](mw.Vector.md) 

获取物体包围盒大小

#### Parameters

| `nonColliding?` `boolean` | 表示要在边界框中包含非碰撞组件 default:false |
| :------ | :------ |
| `includeFromChild?` `boolean` | 如果为 true，则递归子物体 default:false |
| `outer?` [`Vector`](mw.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | mw.Vector |
| :------ | :------ |

::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

:::

___

### getBounds <Score text="getBounds" /> 

• **getBounds**(`onlyCollidingComponents`, `originOuter`, `boxExtentOuter`, `includeFromChild?`): `void` 

获取物体边界

#### Parameters

| `onlyCollidingComponents` `boolean` | 是否只包含有碰撞的组件。 |
| :------ | :------ |
| `originOuter` [`Vector`](mw.Vector.md) | 传出参数，设置为物体的中心点坐标。 |
| `boxExtentOuter` [`Vector`](mw.Vector.md) | 传出参数，设置为物体尺寸的一半。 |
| `includeFromChild?` `boolean` | 是否递归包含子物体 default:undefined |


___

### getChildByGameObjectId <Score text="getChildByGameObjectId" /> 

• **getChildByGameObjectId**(`gameObjectId`): [`GameObject`](mw.GameObject.md) 

根据gameObjectId查找子物体

#### Parameters

| `gameObjectId` `string` | gameObjectId |
| :------ | :------ |

#### Returns

| [`GameObject`](mw.GameObject.md) | 查找的物体 |
| :------ | :------ |

___

### getChildByName <Score text="getChildByName" /> 

• **getChildByName**(`name`): [`GameObject`](mw.GameObject.md) 

根据名称查找子物体

#### Parameters

| `name` `string` | 名称 |
| :------ | :------ |

#### Returns

| [`GameObject`](mw.GameObject.md) | 查找的物体 |
| :------ | :------ |

___

### getChildByPath <Score text="getChildByPath" /> 

• **getChildByPath**(`path`): [`GameObject`](mw.GameObject.md) 

根据路径查找子物体

#### Parameters

| `path` `string` | 路径 |
| :------ | :------ |

#### Returns

| [`GameObject`](mw.GameObject.md) | 查找的物体 |
| :------ | :------ |

___

### getChildren <Score text="getChildren" /> 

• **getChildren**(): [`GameObject`](mw.GameObject.md)[] 

获取子物体

#### Returns

| [`GameObject`](mw.GameObject.md)[] | Array`<GameObject>` |
| :------ | :------ |

___

### getChildrenBoundingBoxCenter <Score text="getChildrenBoundingBoxCenter" /> 

• **getChildrenBoundingBoxCenter**(`outer?`): [`Vector`](mw.Vector.md) 

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

#### Parameters

| `outer?` [`Vector`](mw.Vector.md) | 接收转换数据的 Vector 对象 default:null |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | mw.Vector |
| :------ | :------ |

::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

:::

___

### getChildrenByName <Score text="getChildrenByName" /> 

• **getChildrenByName**(`name`): [`GameObject`](mw.GameObject.md)[] 

通过名字查找所有的子物体

#### Parameters

| `name` `string` | 子物体名称 |
| :------ | :------ |

#### Returns

| [`GameObject`](mw.GameObject.md)[] | 符合的子物体数组 |
| :------ | :------ |

___

### getComponent <Score text="getComponent" /> 

• **getComponent**<`T`\>(`constructor?`): `T`

获取指定类型的组件

#### Type parameters

| `T` | extends [`Script`](mw.Script.md)<`T`\> |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为"NewScript1"的脚本，通过 getComponent 获取 NewScript 脚本，代码如下：
</span>

```ts
import NewScript from "./NewScript";
@Component
export default class NewScript1 extends Script {

    protected onStart(): void {
        const script = this.gameObject.getComponent(NewScript);
    }
}
```
___

### getComponentPropertys <Score text="getComponentPropertys" /> 

• **getComponentPropertys**<`T`\>(`constructor`): `Map`<`string`, `IPropertyOptions`\>

获取脚本组件属性

#### Parameters

| `constructor` (...`args`: `unknown`[]) => `T` | ScriptComponentClass 添加脚本的类型 |
| :------ | :------ |

#### Returns

| `Map`<`string`, `IPropertyOptions`\> | 组件所有属性 Map<key: IPropertyOptions> |
| :------ | :------ |

#### Type parameters

| `T` | extends [`Script`](mw.Script.md)<`T`\> |
| :------ | :------ |

#### Returns

| `T` | 脚本组件 |
| :------ | :------ |
| :------ | :------ |

#### Returns

| `Map`<`string`, `IPropertyOptions`\> | 组件所有属性 Map<key: IPropertyOptions> |
| :------ | :------ |

___

### getComponents <Score text="getComponents" /> 

• **getComponents**<`T`\>(`constructor?`): `T`[]

获取指定类型的所有组件

#### Type parameters

| `T` | extends [`Script`](mw.Script.md)<`T`\> |
| :------ | :------ |

___

### getVisibility <Score text="getVisibility" /> 

• **getVisibility**(): `boolean` 

获取物体是否被显示

#### Returns

| `boolean` | bool |
| :------ | :------ |

___

### setVisibility <Score text="setVisibility" /> 

• **setVisibility**(`status`, `propagateToChildren?`): `void` 

设置物体是否被显示

#### Parameters

| `status` `boolean`  [`PropertyStatus`](../enums/mw.PropertyStatus.md) | 状态 |
| :------ | :------ |
| `propagateToChildren?` `boolean` |  是否设置子物体 default:false |


___

### asyncFindGameObjectById <Score text="asyncFindGameObjectById" /> 

• `Static` **asyncFindGameObjectById**(`gameObjectId`): `Promise`<[`GameObject`](mw.GameObject.md)\> 

通过gameObjectId异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings.setGlobalAsyncOverTime(1000 * 10);

#### Parameters

| `gameObjectId` `string` | 物体的gameObjectId |
| :------ | :------ |

#### Returns

| `Promise`<[`GameObject`](mw.GameObject.md)\> | gameObjectId对应的物体 |
| :------ | :------ |
` 来设置

___

### asyncGetGameObjectByPath <Score text="asyncGetGameObjectByPath" /> 

• `Static` **asyncGetGameObjectByPath**(`path`): `Promise`<[`GameObject`](mw.GameObject.md)\> 

通过路径异步查找物体

#### Parameters

| `path` `string` | 物体路径 |
| :------ | :------ |

#### Returns

| `Promise`<[`GameObject`](mw.GameObject.md)\> | 路径对应的物体 |
| :------ | :------ |

___

### asyncSpawn <Score text="asyncSpawn" /> 

• `Static` **asyncSpawn**<`T`\>(`assetId`, `gameObjectInfo?`): `Promise`<`T`\> 

异步构造一个物体，资源不存在会先去下载资源再去创建

#### Parameters

| `assetId` `string` |  资源id |
| :------ | :------ |
| `gameObjectInfo?` [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md) |  构建物体的信息 default: 选填 |

#### Returns

| `Promise`<`T`\> | 构造的物体 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:调用方法
</span>

```ts
let obj = await GameObject.asyncSpawn<Model>("197386", {
    replicates: true,
    transform: new Transform()
});
```

#### Type parameters

| `T` | extends [`GameObject`](mw.GameObject.md)<`T`\> |
| :------ | :------ |

___

### findGameObjectById <Score text="findGameObjectById" /> 

• `Static` **findGameObjectById**(`gameObjectId`): [`GameObject`](mw.GameObject.md) 

通过gameObjectId查找物体

#### Parameters

| `gameObjectId` `string` | 物体的gameObjectId |
| :------ | :------ |

#### Returns

| [`GameObject`](mw.GameObject.md) | gameObjectId对应的物体 |
| :------ | :------ |

___

### findGameObjectByName <Score text="findGameObjectByName" /> 

• `Static` **findGameObjectByName**(`name`): [`GameObject`](mw.GameObject.md) 

通过名字查找物体

#### Parameters

| `name` `string` | 物体名字 |
| :------ | :------ |

#### Returns

| [`GameObject`](mw.GameObject.md) | 返回第一个查找到的对象，如有多个同名对象，随机返回一个 |
| :------ | :------ |

___

### findGameObjectsByName <Score text="findGameObjectsByName" /> 

• `Static` **findGameObjectsByName**(`name`): [`GameObject`](mw.GameObject.md)[] 

通过名字查找物体

#### Parameters

| `name` `string` | 物体名字 |
| :------ | :------ |

#### Returns

| [`GameObject`](mw.GameObject.md)[] | 返回所有查找到的对象 |
| :------ | :------ |

___

### findGameObjectsByTag <Score text="findGameObjectsByTag" /> 

• `Static` **findGameObjectsByTag**(`tag`): [`GameObject`](mw.GameObject.md)[] 

通过自定义标签获取物体

#### Parameters

| `tag` `string` | 自定义tag |
| :------ | :------ |

#### Returns

| [`GameObject`](mw.GameObject.md)[] | Array`<GameObject>` |
| :------ | :------ |

___

### getGameObjectByPath <Score text="getGameObjectByPath" /> 

• `Static` **getGameObjectByPath**(`path`): [`GameObject`](mw.GameObject.md) 

通过路径查找物体

#### Parameters

| `path` `string` | 物体路径 |
| :------ | :------ |

#### Returns

| [`GameObject`](mw.GameObject.md) | 返回第一个查找到的对象，如有多个同名对象，返回找到的第一个 |
| :------ | :------ |

___

### spawn <Score text="spawn" /> 

• `Static` **spawn**<`T`\>(`assetId`, `gameObjectInfo?`): `T` 

构造一个物体

#### Parameters

| `assetId` `string` |  资源id |
| :------ | :------ |
| `gameObjectInfo?` [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md) |  构建物体的信息 default: 选填 |

#### Returns

| `T` | 构造的物体 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:调用方法
</span>

```ts
let obj = GameObject.spawn<Model>("197386", {
 replicates: true,
 transform: new Transform()
});
```

#### Type parameters

| `T` | extends [`GameObject`](mw.GameObject.md)<`T`\> |
| :------ | :------ |
