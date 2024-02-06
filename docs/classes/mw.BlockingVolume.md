[玩法](../groups/玩法.玩法.md) / BlockingVolume

# BlockingVolume <Badge type="tip" text="Class" /> <Score text="BlockingVolume" />

禁行区

用于控制角色是否可以进出此区域。

::: warning Precautions

该对象各端生成，通行许可由服务器同步到客户端

:::

<span style="font-size: 14px;">
使用示例:创建一个名为"BlockingVolExample"的脚本，放置在对象栏中，打开脚本，输入以下代码，替换GUID保存，运行游戏，你将可以通过该GUID对应的禁行区。代码如下：
</span>

```ts
@Component
export default class BlockingVolExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        // 获取当前玩家
        let player = await mw.Player.asyncGetLocalPlayer();
        // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
        let blockingVolume = await GameObject.asyncFindGameObjectById(`GUID`) as BlockingVolume;
        if(SystemUtil.isClient())
        {
            mw.InputUtil.onKeyDown(Keys.F1,()=>{
                // F1键 通知服务器执行事件 参数传入当前玩家
                mw.Event.dispatchToServer(`AddPlayerPassable`,player);
            })
        }
        if(SystemUtil.isServer()){
            // 侦听客户端通知
            mw.Event.addClientListener(`AddPlayerPassable`,(player : Player)=>{
            // 玩家角色添加通行许可
            blockingVolume.addPassableTarget(player.character);
            })
        }
    }
}
```

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`BlockingVolume`**

## Table of contents

### Properties <Score text="Properties" /> 


::: details click
### Properties <Score text="Properties" /> 
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>   |
| :-----|
| 物体销毁后事件回调|
:::


### Accessors <Score text="Accessors" /> 


::: details click
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
:::


### Methods <Score text="Methods" /> 
| **[addPassableTarget](mw.BlockingVolume.md#addpassabletarget)**(`target`: [`GameObject`](mw.GameObject.md)): `void` <Badge type="tip" text="other" />  |
| :-----|
| 为目标添加通过该区域的权限|
| **[clear](mw.BlockingVolume.md#clear)**(): `void` <Badge type="tip" text="other" />  |
| 重置禁行区|
| **[getTargetPassable](mw.BlockingVolume.md#gettargetpassable)**(`target`: [`GameObject`](mw.GameObject.md)): `boolean`   |
| 获得目标通过该区域的权限|
| **[removePassableTarget](mw.BlockingVolume.md#removepassabletarget)**(`target`: [`GameObject`](mw.GameObject.md)): `void` <Badge type="tip" text="other" />  |
| 移除目标通过该区域的权限|
| **[unblockAll](mw.BlockingVolume.md#unblockall)**(): `void` <Badge type="tip" text="other" />  |
| 开放禁行区|


::: details click
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

## Accessors

## Methods

___

### addPassableTarget <Score text="addPassableTarget" /> 

• **addPassableTarget**(`target`): `void` <Badge type="tip" text="other" />

为目标添加通过该区域的权限

#### Parameters

| `target` [`GameObject`](mw.GameObject.md) | GameObject |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例: 针对此禁行区为其他GameObject添加通行许可
</span>

```ts
 // 获取当前玩家
 let player =  Player.localPlayer;
 // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFindGameObjectById(`GUID`) as BlockingVolume;
 if(SystemUtil.isClient())
 {
     InputUtil.onKeyDown(Keys.F1,()=>{
         // F1键 通知服务器执行事件 参数传入当前玩家
         mw.Event.dispatchToServer(`AddPlayerPassable`,player);
     })
 }
 if(SystemUtil.isServer()){
     // 侦听客户端通知
     mw.Event.addClientListener(`AddPlayerPassable`,(player : Player)=>{
     // 玩家角色添加通行许可
     blockingVolume.addPassableTarget(player.character);
     })
 }
```

___

### clear <Score text="clear" /> 

• **clear**(): `void` <Badge type="tip" text="other" />

重置禁行区


<span style="font-size: 14px;">
使用示例: 重置该禁行区发布的所有通行许可
</span>

```ts
  // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFindGameObjectById(`GUID`) as BlockingVolume;
 if(SystemUtil.isClient())
 {
     InputUtil.onKeyDown(Keys.F4,()=>{
         // F4键 通知服务器执行事件
         mw.Event.dispatchToServer(`Clear`);
     })
 }
 if(SystemUtil.isServer()){
     // 侦听客户端通知
     mw.Event.addClientListener(`Clear`,()=>{
     // 重置该禁行区通行许可
     blockingVolume.clear();
     })
 }
```

___

### getTargetPassable <Score text="getTargetPassable" /> 

• **getTargetPassable**(`target`): `boolean` 

获得目标通过该区域的权限

#### Parameters

| `target` [`GameObject`](mw.GameObject.md) | GameObject |
| :------ | :------ |

#### Returns

| `boolean` | bool |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例: 获取此禁行区对某GameObject的通行许可
</span>

```ts
 // 获取当前玩家
 let player = Player.localPlayer;
 // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFindGameObjectById(`GUID`) as BlockingVolume;
 InputUtil.onKeyDown(Keys.F3,()=>{
     // F3键 获取玩家角色的通行权限
     blockingVolume.getTargetPassable(player.character);
 })
```

___

### removePassableTarget <Score text="removePassableTarget" /> 

• **removePassableTarget**(`target`): `void` <Badge type="tip" text="other" />

移除目标通过该区域的权限

#### Parameters

| `target` [`GameObject`](mw.GameObject.md) | GameObject |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例: 针对此禁行区为其他GameObject移除通行许可
</span>

```ts
 // 获取当前玩家
 let player =  Player.localPlayer;
 // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFindGameObjectById(`GUID`) as BlockingVolume;
 if(SystemUtil.isClient())
 {
     InputUtil.onKeyDown(Keys.F2,()=>{
         // F2键 通知服务器执行事件 参数传入当前玩家
         mw.Event.dispatchToServer(`RemovePlayerPassable`,player);
     })
 }
 if(SystemUtil.isServer()){
     // 侦听客户端通知
     mw.Event.addClientListener(`RemovePlayerPassable`,(player : Player)=>{
     // 玩家角色移除通行许可
     blockingVolume.removePassableTarget(player.character);
     })
 }
```

___

### unblockAll <Score text="unblockAll" /> 

• **unblockAll**(): `void` <Badge type="tip" text="other" />

开放禁行区


<span style="font-size: 14px;">
使用示例: 开放该禁行区
</span>

```ts
 // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncSpawn<BlockingVolume>(`BlockingVolume`);
 if(SystemUtil.isClient())
 {
     InputUtil.onKeyDown(Keys.F5,()=>{
         // F5键 通知服务器执行事件
         mw.Event.dispatchToServer(`UnblockAll`);
     })
 }
 if(SystemUtil.isServer()){
     // 侦听客户端通知
     mw.Event.addClientListener(`UnblockAll`,()=>{
     // 该禁行区开放通行
     blockingVolume.unblockAll();
     })
 }
```
