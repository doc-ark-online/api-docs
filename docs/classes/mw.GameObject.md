[GAMEPLAY](../groups/Core.GAMEPLAY.md) / GameObject

# GameObject <Badge type="tip" text="Class" /> <Score text="GameObject" />

GameObject的基类

使用示例:创建一个名为"GameObjectExample"的脚本,在场景中放置模型正方体、圆柱、圆台，父子关系树为：正方体/圆柱/圆台,并把GameObjectExample脚本挂载给正方体.代码如下:
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

  ↳↳ [`PostProcessObject`](mw.PostProcessObject.md)

  ↳↳ [`SkyBox`](mw.SkyBox.md)

  ↳↳ [`Sound`](mw.Sound.md)

  ↳↳ [`SwimmingVolume`](mw.SwimmingVolume.md)

  ↳↳ [`Trigger`](mw.Trigger.md)

  ↳↳ [`UIWidget`](mw.UIWidget.md)

  ↳↳ [`WheeledVehicle4W`](mw.WheeledVehicle4W.md)

  ↳↳ [`HotWeapon`](mw.HotWeapon.md)

  ↳↳ [`Interactor`](mw.Interactor.md)

  ↳↳ [`PointLight`](mw.PointLight.md)

  ↳↳ [`NavModifierVolume`](mw.NavModifierVolume.md)

  ↳↳ [`PhysicsFulcrum`](mw.PhysicsFulcrum.md)

  ↳↳ [`Impulse`](mw.Impulse.md)

  ↳↳ [`IntegratedMover`](mw.IntegratedMover.md)

  ↳↳ [`PhysicsThruster`](mw.PhysicsThruster.md)

  ↳↳ [`ProjectileInst`](mw.ProjectileInst.md)

  ↳↳ [`ObjectLauncher`](mw.ObjectLauncher.md)

  ↳↳ [`UIObject`](mw.UIObject.md)

## Table of contents

| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|

| Accessors |
| :-----|
| **[gameObjectId](mw.GameObject.md#gameobjectid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[isReady](mw.GameObject.md#isready)**(): `boolean` <br> 当前物体状态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体本地transform|
| **[name](mw.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md) <br> 获取当前父物体|
| **[tag](mw.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体世界transform|

| Methods |
| :-----|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> GameObject准备好后返回|
| **[clone](mw.GameObject.md#clone)**(`gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): [`GameObject`](mw.GameObject.md) <br> 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[getBoundingBoxExtent](mw.GameObject.md#getboundingboxextent)**(`nonColliding?`: `boolean`, `includeFromChild?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `originOuter`: [`Vector`](mw.Vector.md), `boxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChild?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGameObjectId](mw.GameObject.md#getchildbygameobjectid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据GUID查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): [`GameObject`](mw.GameObject.md)[] <br> 获取Children|
| **[getChildrenBoundingBoxCenter](mw.GameObject.md#getchildrenboundingboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找所有的子物体|
| **[getScript](mw.GameObject.md#getscript)**(`id`: `string`): `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](mw.GameObject.md#getscriptbyname)**(`name`: `string`): `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](mw.GameObject.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[isRunningClient](mw.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](mw.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](mw.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](mw.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](mw.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: `boolean` \, `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[asyncFindGameObjectById](mw.GameObject.md#asyncfindgameobjectbyid)**(`gameObjectId`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过guid异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings..setGlobalAsyncOverTime(1000 * 10);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[findGameObjectById](mw.GameObject.md#findgameobjectbyid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过guid查找GameObject|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过自定义tag获取GameObject|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\> <br> 构造一个 GameObject|

## Properties

### onDestroyDelegate <Score text="onDestroyDelegate" /> 

• **onDestroyDelegate**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> 

物体Destroy事件回调


## Accessors

### gameObjectId <Score text="gameObjectId" /> 

• `get` **gameObjectId**(): `string` 

获取对象的GUID（唯一标识一个对象的字符串）。


#### Returns

`string`

___

### isReady <Score text="isReady" /> 

• `get` **isReady**(): `boolean` 

当前物体状态


#### Returns

`boolean`

___

### localTransform <Score text="localTransform" /> 

• `get` **localTransform**(): [`Transform`](mw.Transform.md) 

当前物体本地transform


#### Returns

[`Transform`](mw.Transform.md)

• `set` **localTransform**(`transform`): `void` 

当前物体本地transform


#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](mw.Transform.md) |


___

### name <Score text="name" /> 

• `get` **name**(): `string` 

返回当前物体名称


#### Returns

`string`

名称

#### Overrides

mw.Base.name

• `set` **name**(`name`): `void` 

设置物体名称


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 需要设置的名称 |


#### Overrides

mw.Base.name

___

### netStatus <Score text="netStatus" /> 

• `get` **netStatus**(): [`NetStatus`](../enums/mw.NetStatus.md) 

获取当前物体同步状态


#### Returns

[`NetStatus`](../enums/mw.NetStatus.md)

mw.NetStatus

___

### parent <Score text="parent" /> 

• `get` **parent**(): [`GameObject`](mw.GameObject.md) 

获取当前父物体


#### Returns

[`GameObject`](mw.GameObject.md)

父物体

• `set` **parent**(`newParent`): `void` 

设置父物体


#### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | [`GameObject`](mw.GameObject.md) |


___

### tag <Score text="tag" /> 

• `get` **tag**(): `string` 

获取当前物体的Tag


#### Returns

`string`

Tag

• `set` **tag**(`tag`): `void` 

设置当前物体的Tag


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | Tag |


___

### worldTransform <Score text="worldTransform" /> 

• `get` **worldTransform**(): [`Transform`](mw.Transform.md) 

当前物体世界transform


#### Returns

[`Transform`](mw.Transform.md)

• `set` **worldTransform**(`transform`): `void` 

当前物体世界transform


#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](mw.Transform.md) |


## Methods

### asyncReady <Score text="asyncReady" /> 

• **asyncReady**(): `Promise`<[`GameObject`](mw.GameObject.md)\> 

GameObject准备好后返回


#### Returns

`Promise`<[`GameObject`](mw.GameObject.md)\>

准备好的对象

___

### clone <Score text="clone" /> 

• **clone**(`gameObjectInfo?`): [`GameObject`](mw.GameObject.md) 

复制对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObjectInfo?` | [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md) | 克隆物体的信息 default: 选填 |

#### Returns

[`GameObject`](mw.GameObject.md)

克隆的对象

___

### destroy <Score text="destroy" /> 

• **destroy**(): `void` 

删除对象



___

### getBoundingBoxExtent <Score text="getBoundingBoxExtent" /> 

• **getBoundingBoxExtent**(`nonColliding?`, `includeFromChild?`, `outer?`): [`Vector`](mw.Vector.md) 

获取物体包围盒大小


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nonColliding?` | `boolean` | 表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChild?` | `boolean` | 如果为 true，则递归子物体 default:false |
| `outer?` | [`Vector`](mw.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

mw.Vector

___

### getBounds <Score text="getBounds" /> 

• **getBounds**(`onlyCollidingComponents`, `originOuter`, `boxExtentOuter`, `includeFromChild?`): `void` 

获取GameObject边界


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onlyCollidingComponents` | `boolean` | 是否只包含有碰撞的组件。 |
| `originOuter` | [`Vector`](mw.Vector.md) | 传出参数，设置为GameObject的中心点坐标。 |
| `boxExtentOuter` | [`Vector`](mw.Vector.md) | 传出参数，设置为GameObject尺寸的一半。 |
| `includeFromChild?` | `boolean` | 是否递归包含子物体 default:undefined |


___

### getChildByGameObjectId <Score text="getChildByGameObjectId" /> 

• **getChildByGameObjectId**(`gameObjectId`): [`GameObject`](mw.GameObject.md) 

根据GUID查找子物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObjectId` | `string` | GUID |

#### Returns

[`GameObject`](mw.GameObject.md)

查找的物体

___

### getChildByName <Score text="getChildByName" /> 

• **getChildByName**(`name`): [`GameObject`](mw.GameObject.md) 

根据名称查找子物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名称 |

#### Returns

[`GameObject`](mw.GameObject.md)

查找的物体

___

### getChildByPath <Score text="getChildByPath" /> 

• **getChildByPath**(`path`): [`GameObject`](mw.GameObject.md) 

根据路径查找子物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | 路径 |

#### Returns

[`GameObject`](mw.GameObject.md)

查找的物体

___

### getChildren <Score text="getChildren" /> 

• **getChildren**(): [`GameObject`](mw.GameObject.md)[] 

获取Children


#### Returns

[`GameObject`](mw.GameObject.md)[]

Array`<GameObject>`

___

### getChildrenBoundingBoxCenter <Score text="getChildrenBoundingBoxCenter" /> 

• **getChildrenBoundingBoxCenter**(`outer?`): [`Vector`](mw.Vector.md) 

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](mw.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

mw.Vector

___

### getChildrenByName <Score text="getChildrenByName" /> 

• **getChildrenByName**(`name`): [`GameObject`](mw.GameObject.md)[] 

通过名字查找所有的子物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 子物体名称 |

#### Returns

[`GameObject`](mw.GameObject.md)[]

符合的子物体数组

___

### getScript <Score text="getScript" /> 

• **getScript**(`id`): `Script` 

获得当前物体下的指定脚本


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 脚本唯一标识 |

#### Returns

`Script`

Script

___

### getScriptByName <Score text="getScriptByName" /> 

• **getScriptByName**(`name`): `Script` 

获得当前物体下的指定脚本


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`Script`

Script

___

### getScripts <Score text="getScripts" /> 

• **getScripts**(): `Script`[] 

获得当前物体下的所有脚本


#### Returns

`Script`[]

Array`<Script>`

___

### getVisibility <Score text="getVisibility" /> 

• **getVisibility**(): `boolean` 

获取GameObject是否被显示


#### Returns

`boolean`

bool

___

### isRunningClient <Score text="isRunningClient" /> 

• **isRunningClient**(): `boolean` 

是否为客户端


#### Returns

`boolean`

true为客户端

___

### onDestroy <Score text="onDestroy" /> 

• `Protected` **onDestroy**(): `void` 

周期函数 被销毁时调用



___

### onReplicated <Score text="onReplicated" /> 

• `Protected` **onReplicated**(`path`, `value`, `oldVal`): `void` 

属性被同步事件 ClientOnly


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | 属性路径 |
| `value` | `unknown` | 属性值 |
| `oldVal` | `unknown` | 同步前的值 |


___

### onStart <Score text="onStart" /> 

• `Protected` **onStart**(): `void` 

周期函数 脚本开始执行时调用



___

### onUpdate <Score text="onUpdate" /> 

• `Protected` **onUpdate**(`dt`): `void` 

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | 与上一帧的延迟 单位:秒 |


___

### setVisibility <Score text="setVisibility" /> 

• **setVisibility**(`status`, `propagateToChildren?`): `void` 

设置GameObject是否被显示


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | `boolean` \| [`PropertyStatus`](../enums/mw.PropertyStatus.md) | 状态 |
| `propagateToChildren?` | `boolean` |  是否设置子物体 default:false |


___

### asyncFindGameObjectById <Score text="asyncFindGameObjectById" /> 

• `Static` **asyncFindGameObjectById**(`gameObjectId`): `Promise`<[`GameObject`](mw.GameObject.md)\> 

通过guid异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings..setGlobalAsyncOverTime(1000 * 10);
` 来设置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObjectId` | `string` | 物体的guid |

#### Returns

`Promise`<[`GameObject`](mw.GameObject.md)\>

guid对应的物体

___

### asyncGetGameObjectByPath <Score text="asyncGetGameObjectByPath" /> 

• `Static` **asyncGetGameObjectByPath**(`path`): `Promise`<[`GameObject`](mw.GameObject.md)\> 

通过路径异步查找物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | 物体路径 |

#### Returns

`Promise`<[`GameObject`](mw.GameObject.md)\>

路径对应的物体

___

### asyncSpawn <Score text="asyncSpawn" /> 

• `Static` **asyncSpawn**<`T`\>(`assetId`, `gameObjectInfo?`): `Promise`<`T`\> 

异步构造一个 GameObject 资源不存在会先去下载资源再去创建


使用示例:调用方法
```ts
let obj = await mw.GameObject.asyncSpawn<mw.Mesh>({
    guid: "197386",
    replicates: true,
    transform: new Transform()
});
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](mw.GameObject.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` |  资源id |
| `gameObjectInfo?` | [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md) |  构建物体的信息 default: 选填 |

#### Returns

`Promise`<`T`\>

构造的GameObject

___

### findGameObjectById <Score text="findGameObjectById" /> 

• `Static` **findGameObjectById**(`gameObjectId`): [`GameObject`](mw.GameObject.md) 

通过guid查找GameObject


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObjectId` | `string` | 物体的guid |

#### Returns

[`GameObject`](mw.GameObject.md)

guid对应的物体

___

### findGameObjectByName <Score text="findGameObjectByName" /> 

• `Static` **findGameObjectByName**(`name`): [`GameObject`](mw.GameObject.md) 

通过名字查找物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

[`GameObject`](mw.GameObject.md)

返回第一个查找到的对象，如有多个同名对象，随机返回一个

___

### findGameObjectsByName <Score text="findGameObjectsByName" /> 

• `Static` **findGameObjectsByName**(`name`): [`GameObject`](mw.GameObject.md)[] 

通过名字查找物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

[`GameObject`](mw.GameObject.md)[]

返回所有查找到的对象

___

### findGameObjectsByTag <Score text="findGameObjectsByTag" /> 

• `Static` **findGameObjectsByTag**(`tag`): [`GameObject`](mw.GameObject.md)[] 

通过自定义tag获取GameObject


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | 自定义tag |

#### Returns

[`GameObject`](mw.GameObject.md)[]

Array`<GameObject>`

___

### getGameObjectByPath <Score text="getGameObjectByPath" /> 

• `Static` **getGameObjectByPath**(`path`): [`GameObject`](mw.GameObject.md) 

通过路径查找物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | 物体路径 |

#### Returns

[`GameObject`](mw.GameObject.md)

返回第一个查找到的对象，如有多个同名对象，返回找到的第一个

___

### spawn <Score text="spawn" /> 

• `Static` **spawn**<`T`\>(`assetId`, `gameObjectInfo?`): `T` 

构造一个 GameObject


使用示例:调用方法
```ts
let obj = mw.GameObject.spawn<mw.Mesh>("197386", {
 replicates: true,
 transform: new Transform()
});
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](mw.GameObject.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` |  资源id |
| `gameObjectInfo?` | [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md) |  构建物体的信息 default: 选填 |

#### Returns

`T`

构造的GameObject
