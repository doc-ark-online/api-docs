[GAMEPLAY](../groups/Core.GAMEPLAY.md) / BlockingVolume

# BlockingVolume <Badge type="tip" text="Class" /> <Score text="BlockingVolume" />

禁行区，用于控制个角色是否可以进出此区域，角色可站立，默认阻挡

::: warning Precautions

该对象各端生成，通行许可由服务器同步到客户端

:::

使用示例:请尽量放置在场景中，通过动态查找获取。不推荐动态生成，不支持重叠使用。
创建一个名为"BlockingVolExample"的脚本,放置在对象栏中,打开脚本,输入以下代码，替换GUID保存,运行游戏,你将可以通过该GUID对应的禁行区.代码如下:
```ts
@Component
export default class BlockingVolExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        // 获取当前玩家
        let player =  mw.Player.asyncGetLocalPlayer()[0];
        // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
        let blockingVolume = await GameObject.asyncFind(`GUID`) as BlockingVolume;
        if(SystemUtil.isClient())
        {
            mw.InputUtil.onKeyDown(Keys.F1,()=>{
                // F1键 通知服务器执行事件 参数传入当前玩家
                mw.Event.dispatchEventToServer(`AddPlayerPassable`,player);
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

| Properties |
| :-----|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体销毁后事件回调|
:::


| Accessors |
| :-----|


::: details 点击查看继承
| Accessors |
| :-----|
| **[gameObjectId](mw.GameObject.md#gameobjectid)**(): `string` <br> 获取物体的唯一标识（唯一标识一个对象的字符串）。|
| **[isReady](mw.GameObject.md#isready)**(): `boolean` <br> 当前物体状态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体本地变换|
| **[name](mw.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md) <br> 获取当前父物体|
| **[tag](mw.GameObject.md#tag)**(): `string` <br> 获取当前物体的标签|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体世界变换|
:::


| Methods |
| :-----|
| **[addPassableTarget](mw.BlockingVolume.md#addpassabletarget)**(`target`: [`GameObject`](mw.GameObject.md)): `void` <br> 为目标添加通过该区域的权限|
| **[clear](mw.BlockingVolume.md#clear)**(): `void` <br> 重置禁行区|
| **[getTargetPassable](mw.BlockingVolume.md#gettargetpassable)**(`target`: [`GameObject`](mw.GameObject.md)): `boolean` <br> 获得目标通过该区域的权限|
| **[removePassableTarget](mw.BlockingVolume.md#removepassabletarget)**(`target`: [`GameObject`](mw.GameObject.md)): `void` <br> 移除目标通过该区域的权限|
| **[unblockAll](mw.BlockingVolume.md#unblockall)**(): `void` <br> 开放禁行区|


::: details 点击查看继承
| Methods |
| :-----|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 物体准备好后返回|
| **[clone](mw.GameObject.md#clone)**(`gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): [`GameObject`](mw.GameObject.md) <br> 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[getBoundingBoxExtent](mw.GameObject.md#getboundingboxextent)**(`nonColliding?`: `boolean`, `includeFromChild?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `originOuter`: [`Vector`](mw.Vector.md), `boxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChild?`: `boolean`): `void` <br> 获取物体边界|
| **[getChildByGameObjectId](mw.GameObject.md#getchildbygameobjectid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据gameObjectId查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): [`GameObject`](mw.GameObject.md)[] <br> 获取子物体|
| **[getChildrenBoundingBoxCenter](mw.GameObject.md#getchildrenboundingboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找所有的子物体|
| **[getScript](mw.GameObject.md#getscript)**(`id`: `string`): [`Script`](mw.Script.md) <br> 获得当前物体下的指定脚本|
| **[getScriptByName](mw.GameObject.md#getscriptbyname)**(`name`: `string`): [`Script`](mw.Script.md) <br> 获得当前物体下的指定脚本|
| **[getScripts](mw.GameObject.md#getscripts)**(): [`Script`](mw.Script.md)[] <br> 获得当前物体下的所有脚本|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean` <br> 获取物体是否被显示|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: `boolean` \, `propagateToChildren?`: `boolean`): `void` <br> 设置物体是否被显示|
| **[asyncFindGameObjectById](mw.GameObject.md#asyncfindgameobjectbyid)**(`gameObjectId`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过gameObjectId异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings.setGlobalAsyncOverTime(1000 * 10);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\> <br> 异步构造一个物体，资源不存在会先去下载资源再去创建|
| **[findGameObjectById](mw.GameObject.md#findgameobjectbyid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过gameObjectId查找物体|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过自定义标签获取物体|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\> <br> 构造一个物体|
:::


## Accessors

## Methods

### addPassableTarget <Score text="addPassableTarget" /> 

• **addPassableTarget**(`target`): `void` <Badge type="tip" text="other" />

为目标添加通过该区域的权限

调用端自动广播

使用示例: 针对此禁行区为其他GameObject添加通行许可
```ts
 // 获取当前玩家
 let player =  asyncGetCurrentPlayer()[0];
 // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFind(`GUID`) as BlockingVolume;
 if(SystemUtil.isClient())
 {
     InputUtil.onKeyDown(Keys.F1,()=>{
         // F1键 通知服务器执行事件 参数传入当前玩家
         mw.Event.dispatchEventToServer(`AddPlayerPassable`,player);
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`GameObject`](mw.GameObject.md) | GameObject |


___

### clear <Score text="clear" /> 

• **clear**(): `void` <Badge type="tip" text="other" />

重置禁行区

调用端自动广播

使用示例: 重置该禁行区发布的所有通行许可
```ts
  // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFind(`GUID`) as BlockingVolume;
 if(SystemUtil.isClient())
 {
     InputUtil.onKeyDown(Keys.F4,()=>{
         // F4键 通知服务器执行事件
         mw.Event.dispatchEventToServer(`Clear`);
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


使用示例: 获取此禁行区对某GameObject的通行许可
```ts
 // 获取当前玩家
 let player =  asyncGetCurrentPlayer()[0];
 // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFind(`GUID`) as BlockingVolume;
 InputUtil.onKeyDown(Keys.F3,()=>{
     // F3键 获取玩家角色的通行权限
     blockingVolume.getTargetPassable(player.character);
 })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`GameObject`](mw.GameObject.md) | GameObject |

#### Returns

`boolean`

bool

___

### removePassableTarget <Score text="removePassableTarget" /> 

• **removePassableTarget**(`target`): `void` <Badge type="tip" text="other" />

移除目标通过该区域的权限

调用端自动广播

使用示例: 针对此禁行区为其他GameObject移除通行许可
```ts
 // 获取当前玩家
 let player =  asyncGetCurrentPlayer()[0];
 // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFind(`GUID`) as BlockingVolume;
 if(SystemUtil.isClient())
 {
     InputUtil.onKeyDown(Keys.F2,()=>{
         // F2键 通知服务器执行事件 参数传入当前玩家
         mw.Event.dispatchEventToServer(`RemovePlayerPassable`,player);
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`GameObject`](mw.GameObject.md) | GameObject |


___

### unblockAll <Score text="unblockAll" /> 

• **unblockAll**(): `void` <Badge type="tip" text="other" />

开放禁行区

调用端自动广播

使用示例: 开放该禁行区
```ts
 // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFind(`GUID`) as BlockingVolume;
 if(SystemUtil.isClient())
 {
     InputUtil.onKeyDown(Keys.F5,()=>{
         // F5键 通知服务器执行事件
         mw.Event.dispatchEventToServer(`UnblockAll`);
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
