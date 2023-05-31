[Avatar](../groups/Avatar.Avatar.md) / Pawn

# Pawn <Badge type="tip" text="Class" /> <Score text="Pawn" />

可以被玩家和AI控制的对象的基类

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`Pawn`**

  ↳↳ [`Character`](Gameplay.Character.md)

## Table of contents

| Accessors |
| :-----|
| **[customTimeDilation](Gameplay.Pawn.md#customtimedilation)**(): `number` <br> 膨胀时间速度|
| **[player](Gameplay.Pawn.md#player)**(): [`Player`](Gameplay.Player.md) <br> 玩家对象|


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
| **[setOutline](Gameplay.Pawn.md#setoutline)**(`enabled`: `boolean`, `color?`: [`LinearColor`](Type.LinearColor.md), `width?`: `number`, `depthOffset?`: `number`, `clampValue?`: `number`, `cameraPosition?`: `boolean`, `silhouetteOnly?`: `boolean`): `void` <br> 添加描边效果|
| **[setPostProcessOutline](Gameplay.Pawn.md#setpostprocessoutline)**(`enabled`: `boolean`, `color?`: [`LinearColor`](Type.LinearColor.md), `width?`: `number`): `void` <br> 添加后处理描边|


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

### customTimeDilation <Score text="customTimeDilation" /> 

• `get` **customTimeDilation**(): `number` 

膨胀时间速度


::: warning Precautions

Pawn对象的膨胀时间速度，修改后自身时间流速是该值乘世界时间流速。默认值是1。

:::

使用示例:修改玩家的时间膨胀速度为原来的0.5倍后跳跃
```ts
@Core.Class
export default class PawnTimeDilationExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
         // 下列代码仅在客户端执行
         if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 添加一个按键方法：按下键盘“1”，将玩家的时间膨胀速度修改为原来的0.5，并跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myself.pawn.customTimeDilation = 0.5;
                console.log("My pawn customTimeDilation: " + myself.pawn.customTimeDilation);
                // 使玩家Pawn作为角色进行跳跃
                (myself.pawn as Character).jump();
            });
        }
    }
}
```

#### Returns

`number`


### player <Score text="player" /> 

• `get` **player**(): [`Player`](Gameplay.Player.md) 

玩家对象


::: warning Precautions

控制当前Pawn对象的玩家，只读。

:::

使用示例:通过player获取玩家并打印userId和instanceId
```ts
@Core.Class
export default class PawnPlayerExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
         // 下列代码仅在客户端执行
         if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 打印玩家(自己)userId和instanceId并对比
            console.log("My userId: " + myself.userId);
            console.log("My instanceId: " + myself.instanceId);
            // 通过owner获取玩家(自己)并打印userId和instanceId并对比
            let myPawn = myself.pawn as Character;
            myPawn.animationMode = AnimationMode.Custom
            let myself_2 = myPawn.player;
            console.log("My userId: " + myself_2.userId);
            console.log("My instanceId: " + myself_2.instanceId);
        }
    }
}
```

#### Returns

[`Player`](Gameplay.Player.md)


## Methods

### setOutline <Score text="setOutline" /> 

• **setOutline**(`enabled`, `color?`, `width?`, `depthOffset?`, `clampValue?`, `cameraPosition?`, `silhouetteOnly?`): `void` <Badge type="tip" text="client" />

添加描边效果


::: warning Precautions

为Pawn对象添加描边效果，描边效果会被其他物体遮挡。

:::

使用示例:给本地玩家添加红色描边
```ts
@Core.Class
export default class PawnOutlineExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
         // 下列代码仅在客户端执行
         if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 添加一个按键方法：按下键盘“1”，给玩家Pawn添加描边（会被遮挡）
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myself.pawn.setOutline(true, Type.LinearColor.red, 1);
            });
            // 添加一个按键方法：按下键盘“2”，给玩家Pawn移除描边
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myself.pawn.setOutline(false);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | 是否开启描边 |
| `color?` | [`LinearColor`](Type.LinearColor.md) | 描边颜色 default:Type.LinearColor.black |
| `width?` | `number` | 描边宽度 default:2 |
| `depthOffset?` | `number` | 描边深度偏移 default:0 |
| `clampValue?` | `number` | 描边范围 default:0.93 |
| `cameraPosition?` | `boolean` | 是否考虑相机位置 default:false |
| `silhouetteOnly?` | `boolean` | 是否仅轮廓描边 default:true |


___

### setPostProcessOutline <Score text="setPostProcessOutline" /> 

• **setPostProcessOutline**(`enabled`, `color?`, `width?`): `void` <Badge type="tip" text="client" />

添加后处理描边


::: warning Precautions

为Pawn对象添加高级描边效果，描边效果不会被其他物体遮挡。

:::

使用示例:给本地玩家添加后处理红色描边
```ts
@Core.Class
export default class PawnPostProcessOutlineExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
         // 下列代码仅在客户端执行
         if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myself = Player.localPlayer;
            // 添加一个按键方法：按下键盘“1”，给玩家Pawn添加后处理描边（无视遮挡）
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myself.pawn.setPostProcessOutline(true, Type.LinearColor.red, 1);
            });
            // 添加一个按键方法：按下键盘“2”，给玩家Pawn移除后处理描边
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myself.pawn.setPostProcessOutline(false);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | 是否开启描边 |
| `color?` | [`LinearColor`](Type.LinearColor.md) | 描边颜色 default:Type.LinearColor.red |
| `width?` | `number` | 描边宽度 default:1 |

