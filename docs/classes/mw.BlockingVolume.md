[Gameplay](../groups/Core.Gameplay.md) / BlockingVolume

# BlockingVolume <Badge type="tip" text="Class" /> <Score text="BlockingVolume" />

禁行区，用于控制个角色是否可以进出此区域，角色可站立，默认阻挡

::: warning Precautions

该对象各端生成，通行许可由服务器同步到客户端

:::

使用示例:请尽量放置在场景中，通过动态查找获取。不推荐动态生成，不支持重叠使用。
创建一个名为"BlockingVolExample"的脚本,放置在对象栏中,打开脚本,输入以下代码，替换GUID保存,运行游戏,你将可以通过该GUID对应的禁行区.代码如下:
```ts
@Core.Class
export default class BlockingVolExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        // 获取当前玩家
        let player =  asyncGetCurrentPlayer()[0];
        // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
        let blockingVolume = await GameObject.asyncFind(`GUID`) as BlockingVolume;
        if(Util.SystemUtil.isClient())
        {
            InputUtil.onKeyDown(Type.Keys.F1,()=>{
                // F1键 通知服务器执行事件 参数传入当前玩家
                dispatchToServer(`AddPlayerPassable`,player);
            })
        }
        if(Util.SystemUtil.isServer()){
            // 侦听客户端通知
            addClientListener(`AddPlayerPassable`,(player : Player)=>{
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

  ↳↳ [`BlockingArea`](Core.mw.BlockingArea.md)

## Table of contents

| Properties |
| :-----|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
:::


| Accessors |
| :-----|


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
| **[addPassableTarget](mw.BlockingVolume.md#addpassabletarget)**(`Target`: [`GameObject`](mw.GameObject.md)): `void` <br> 为目标添加通过该区域的权限|
| **[clear](mw.BlockingVolume.md#clear)**(): `void` <br> 重置禁行区|
| **[getTargetPassable](mw.BlockingVolume.md#gettargetpassable)**(`Target`: [`GameObject`](mw.GameObject.md)): `boolean` <br> 获得目标通过该区域的权限|
| **[removePassableTarget](mw.BlockingVolume.md#removepassabletarget)**(`Target`: [`GameObject`](mw.GameObject.md)): `void` <br> 移除目标通过该区域的权限|
| **[unblockAll](mw.BlockingVolume.md#unblockall)**(): `void` <br> 开放禁行区|


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


## Accessors

## Methods

### addPassableTarget <Score text="addPassableTarget" /> 

• **addPassableTarget**(`Target`): `void` <Badge type="tip" text="other" />

为目标添加通过该区域的权限

调用端自动广播

使用示例: 针对此禁行区为其他GameObject添加通行许可
```ts
 // 获取当前玩家
 let player =  asyncGetCurrentPlayer()[0];
 // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFind(`GUID`) as BlockingVolume;
 if(Util.SystemUtil.isClient())
 {
     InputUtil.onKeyDown(Type.Keys.F1,()=>{
         // F1键 通知服务器执行事件 参数传入当前玩家
         dispatchToServer(`AddPlayerPassable`,player);
     })
 }
 if(Util.SystemUtil.isServer()){
     // 侦听客户端通知
     addClientListener(`AddPlayerPassable`,(player : Player)=>{
     // 玩家角色添加通行许可
     blockingVolume.addPassableTarget(player.character);
     })
 }
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Target` | [`GameObject`](mw.GameObject.md) | GameObject |


___

### clear <Score text="clear" /> 

• **clear**(): `void` <Badge type="tip" text="other" />

重置禁行区

调用端自动广播

使用示例: 重置该禁行区发布的所有通行许可
```ts
  // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFind(`GUID`) as BlockingVolume;
 if(Util.SystemUtil.isClient())
 {
     InputUtil.onKeyDown(Type.Keys.F4,()=>{
         // F4键 通知服务器执行事件
         dispatchToServer(`Clear`);
     })
 }
 if(Util.SystemUtil.isServer()){
     // 侦听客户端通知
     addClientListener(`Clear`,()=>{
     // 重置该禁行区通行许可
     blockingVolume.clear();
     })
 }
```


___

### getTargetPassable <Score text="getTargetPassable" /> 

• **getTargetPassable**(`Target`): `boolean` 

获得目标通过该区域的权限


使用示例: 获取此禁行区对某GameObject的通行许可
```ts
 // 获取当前玩家
 let player =  asyncGetCurrentPlayer()[0];
 // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFind(`GUID`) as BlockingVolume;
 InputUtil.onKeyDown(Type.Keys.F3,()=>{
     // F3键 获取玩家角色的通行权限
     blockingVolume.getTargetPassable(player.character);
 })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Target` | [`GameObject`](mw.GameObject.md) | GameObject |

#### Returns

`boolean`

bool

___

### removePassableTarget <Score text="removePassableTarget" /> 

• **removePassableTarget**(`Target`): `void` <Badge type="tip" text="other" />

移除目标通过该区域的权限

调用端自动广播

使用示例: 针对此禁行区为其他GameObject移除通行许可
```ts
 // 获取当前玩家
 let player =  asyncGetCurrentPlayer()[0];
 // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFind(`GUID`) as BlockingVolume;
 if(Util.SystemUtil.isClient())
 {
     InputUtil.onKeyDown(Type.Keys.F2,()=>{
         // F2键 通知服务器执行事件 参数传入当前玩家
         dispatchToServer(`RemovePlayerPassable`,player);
     })
 }
 if(Util.SystemUtil.isServer()){
     // 侦听客户端通知
     addClientListener(`RemovePlayerPassable`,(player : Player)=>{
     // 玩家角色移除通行许可
     blockingVolume.removePassableTarget(player.character);
     })
 }
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Target` | [`GameObject`](mw.GameObject.md) | GameObject |


___

### unblockAll <Score text="unblockAll" /> 

• **unblockAll**(): `void` <Badge type="tip" text="other" />

开放禁行区

调用端自动广播

使用示例: 开放该禁行区
```ts
 // GUID根据实际情况填写，可在编辑器对象管理器内右键复制对象ID
 let blockingVolume = await GameObject.asyncFind(`GUID`) as BlockingVolume;
 if(Util.SystemUtil.isClient())
 {
     InputUtil.onKeyDown(Type.Keys.F5,()=>{
         // F5键 通知服务器执行事件
         dispatchToServer(`UnblockAll`);
     })
 }
 if(Util.SystemUtil.isServer()){
     // 侦听客户端通知
     addClientListener(`UnblockAll`,()=>{
     // 该禁行区开放通行
     blockingVolume.unblockAll();
     })
 }
```

