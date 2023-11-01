[GAMEPLAY](../groups/GAMEPLAY.GAMEPLAY.md) / Interactor

# Interactor <Badge type="tip" text="Class" /> <Score text="Interactor" />

交互物，请保证交互前动画资源已加载，否则可能导致位置错误或者其他不可预料的表现

<span style="font-size: 14px;">

使用示例:创建一个名为"InteractorSample"的脚本,放置在对象管理器某一交互物的子级中,打开脚本,输入以下代码保存,在本地资源库中搜索4175动画资源,拖入对象管理器中的优先加载目录。运行游戏,你将在场景中看到一个交互物的效果,玩家可以和此交互物进行交互,代码如下:

</span>

```ts
 @Component
export default class InteractorSample extends Script {
    protected async onStart(): Promise<void> {
        const interObj = this.gameObject as Interactor;
        // 开始交互回调
        interObj.onEnter.add(() => {
            console.log("onEnter")
            console.log("onEnter ", interObj.getCurrentCharacter())
            console.log("onEnter ", interObj.occupied)
        })
        interObj.slot = HumanoidSlotType.Buttocks;
        interObj.animationId = "4175";

        // 结束交互回调
        interObj.onLeave.add(() => {
            console.log("onLeave")
        })
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                interObj.enter(getCurrentPlayer().character, HumanoidSlotType.Buttocks, "4175");
            })
            InputUtil.onKeyDown(Keys.Two, () => {
                // 不传退出交互时会自动回到交互前的坐标和旋转
                interObj.leave();
            })
        }
    }
}
```

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`Interactor`**

## Table of contents

### Properties <Score text="Properties" /> 
| **[onEnter](mw.Interactor.md#onenter)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| :-----|
| 交互开始时执行绑定函数。通常与 enter 成对使用，使用示例详见方法 enter 中示例代码。|
| **[onLeave](mw.Interactor.md#onleave)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| 交互结束时执行绑定函数。通常与 leave 成对使用，使用示例详见方法 leave 中示例代码。|


::: details 点击查看继承
### Properties <Score text="Properties" /> 
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| :-----|
| 物体销毁后事件回调|
:::


### Accessors <Score text="Accessors" /> 
| **[animationId](mw.Interactor.md#animationid)**(): `string`  |
| :-----|
| 交互动画资源 id|
| **[occupied](mw.Interactor.md#occupied)**(): `boolean`  |
| 该交互物的交互状态|
| **[slot](mw.Interactor.md#slot)**(): [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md)  |
| 交互物插槽|


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
| **[enter](mw.Interactor.md#enter)**(`character`: [`Character`](mw.Character.md), `slot?`: [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md), `animationId?`: `string`): `boolean`  |
| :-----|
| 开始交互，请保证交互前动画资源已加载，否则可能导致位置错误或者其他不可预料的表现|
| **[getCurrentCharacter](mw.Interactor.md#getcurrentcharacter)**(): [`Character`](mw.Character.md)  |
| 获取正在交互的角色|
| **[leave](mw.Interactor.md#leave)**(`position?`: [`Vector`](mw.Vector.md), `rotation?`: [`Rotation`](mw.Rotation.md), `animationId?`: `string`): `boolean`  |
| 结束交互。通常与 enter 成对使用，使用示例详见方法 enter 中示例代码。|


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
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: `boolean`  [`PropertyStatus`](../enums/mw.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void`  |
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

### onEnter <Score text="onEnter" /> 

• **onEnter**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

交互开始时执行绑定函数。通常与 enter 成对使用，使用示例详见方法 enter 中示例代码。

::: warning Precautions

会自动广播，若是双端对象，则可以在任意客户端调用

:::

___

### onLeave <Score text="onLeave" /> 

• **onLeave**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

交互结束时执行绑定函数。通常与 leave 成对使用，使用示例详见方法 leave 中示例代码。

::: warning Precautions

会自动广播，若是双端对象，则可以在任意客户端调用

:::

## Accessors

### animationId <Score text="animationId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **animationId**(): `string`

</th>
<th style="text-align: left">

• `set` **animationId**(`assetGuid`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


交互动画资源 id

#### Returns

| `string` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


交互动画资源 id

#### Parameters

| `assetGuid` | `string` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### occupied <Score text="occupied" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **occupied**(): `boolean`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


该交互物的交互状态

#### Returns

| `boolean` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### slot <Score text="slot" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **slot**(): [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md)

</th>
<th style="text-align: left">

• `set` **slot**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


交互物插槽

#### Returns

| [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


交互物插槽

#### Parameters

| `value` | [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md) |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

___

### enter <Score text="enter" /> 

• **enter**(`character`, `slot?`, `animationId?`): `boolean` <Badge type="tip" text="other" />

开始交互，请保证交互前动画资源已加载，否则可能导致位置错误或者其他不可预料的表现

#### Parameters

| `character` [`Character`](mw.Character.md) |  要交互的角色（可以是玩家，也可以是AI） |
| :------ | :------ |
| `slot?` [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md) |  交互插槽，不传默认以属性 slot 为准 default: 属性 slot |
| `animationId?` `string` |  交互姿态，不传默认以属性 animationId 为准 default: 属性 animationId |

#### Returns

| `boolean` | 是否成功交互，异步逻辑，返回值不代表已经完成交互，如需确保已经完成交互，请使用 onEnter 委托 |
| :------ | :------ |

调用端自动广播

<span style="font-size: 14px;">

使用示例:创建一个名为"InteractorStartEndSample"的脚本,放置在对象管理器某一交互物的子级中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个交互物的效果,玩家可以和此交互物进行交互,代码如下:

</span>

```ts
@Component
export default class InteractorStartEndSample extends Script {
    protected async onStart(): Promise<void> {
        const interObj = this.gameObject as Interactor;
        // 开始交互回调
        interObj.onEnter.add(() => {
            console.log("onEnter")
        })
        // 结束交互回调
        interObj.onLeave.add(() => {
            console.log("onLeave")
        })
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                interObj.enter(getCurrentPlayer().character, HumanoidSlotType.Buttocks, "4175");
            })
            InputUtil.onKeyDown(Keys.Two, () => {
                // 不传退出交互时会自动回到交互前的坐标和旋转
                interObj.leave();
            })
        }
    }
}
```

___

### getCurrentCharacter <Score text="getCurrentCharacter" /> 

• **getCurrentCharacter**(): [`Character`](mw.Character.md) 

获取正在交互的角色

#### Returns

| [`Character`](mw.Character.md) | true：为交互中 |
| :------ | :------ |


<span style="font-size: 14px;">

使用示例:创建一个名为"InteractorGetInteractCharacterSample"的脚本,放置在对象管理器某一交互物的子级中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个交互物的效果,玩家可以和此交互物进行交互,代码如下:

</span>

```ts
@Component
export default class InteractorGetInteractCharacterSample extends Script {
    protected async onStart(): Promise<void> {
        const interObj = this.gameObject as Interactor;
        // 开始交互回调
        interObj.onEnter.add(() => {
            console.log(`onEnter status: ${interObj.getCurrentCharacter()}`)
        })
        // 省略开始交互代码
    }
}
```

___

### leave <Score text="leave" /> 

• **leave**(`position?`, `rotation?`, `animationId?`): `boolean` <Badge type="tip" text="other" />

结束交互。通常与 enter 成对使用，使用示例详见方法 enter 中示例代码。

#### Parameters

| `position?` [`Vector`](mw.Vector.md) |  结束位置 default: 玩家开始交互前的坐标为准 |
| :------ | :------ |
| `rotation?` [`Rotation`](mw.Rotation.md) |  结束旋转量 default: 玩家开始交互前的旋转为准，如果玩家开始前的姿态是倾斜的，内部不会纠正 |
| `animationId?` `string` |  新姿态，default: 玩家开始交互前的姿态（动画会转姿态） |

#### Returns

| `boolean` | true 代表触发了结束交互逻辑，异步操作，返回值不能代表结束交互逻辑已经成功，如需保证结束交互逻辑完成才执行时，请使用 onLeave 委托 |
| :------ | :------ |

调用端自动广播
