[Gameplay](../groups/Gameplay.Gameplay.md) / InteractiveObject

# InteractiveObject <Badge type="tip" text="Class" /> <Score text="InteractiveObject" />

交互物功能对象 V2

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`InteractiveObject`**

## Table of contents

| Properties |
| :-----|
| **[onInteractiveEnded](Gameplay.InteractiveObject.md#oninteractiveended)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 是否自动激活|
| **[onInteractiveStarted](Gameplay.InteractiveObject.md#oninteractivestarted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 是否自动激活|
| **[onInteractiveTimeout](Gameplay.InteractiveObject.md#oninteractivetimeout)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 是否自动激活|

| Accessors |
| :-----|
| **[autoInteractMode](Gameplay.InteractiveObject.md#autointeractmode)**(): `boolean` <br> 是否自动激活|
| **[endInteractiveLocation](Gameplay.InteractiveObject.md#endinteractivelocation)**(): [`Vector`](Type.Vector.md) <br> 结束交互的相对位置，退出交互后角色刷新在这里|
| **[endInteractiveRotation](Gameplay.InteractiveObject.md#endinteractiverotation)**(): [`Rotation`](Type.Rotation.md) <br> 结束交互的相对旋转，退出交互后角色朝向|
| **[interactiveSlot](Gameplay.InteractiveObject.md#interactiveslot)**(): [`InteractiveSlot`](../enums/Gameplay.InteractiveSlot.md) <br> 交互物插槽|
| **[interactiveStance](Gameplay.InteractiveObject.md#interactivestance)**(): `string` <br> 交互动画姿态资源 id|
| **[interactiveTrigger](Gameplay.InteractiveObject.md#interactivetrigger)**(): `string` <br> 交互物触发器 GUID|
| **[maxInteractiveDuration](Gameplay.InteractiveObject.md#maxinteractiveduration)**(): `number` <br> 最大交互时间，超过该时间自动退出交互|


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
| **[visible](Gameplay.GameObject.md#visible)**(): `boolean` <br> 获取当前物体是否显示|
| **[worldLocation](Gameplay.GameObject.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.GameObject.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.GameObject.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
:::


| Methods |
| :-----|
| **[endInteract](Gameplay.InteractiveObject.md#endinteract)**(`endLoc?`: [`Vector`](Type.Vector.md), `endRot?`: [`Rotation`](Type.Rotation.md), `newStance?`: `string`): `boolean` <br> 结束交互|
| **[getBoundTrigger](Gameplay.InteractiveObject.md#getboundtrigger)**(): ``null`` \| [`Trigger`](Gameplay.Trigger.md) <br> 获取绑定的触发器|
| **[getInteractCharacter](Gameplay.InteractiveObject.md#getinteractcharacter)**(): [`CharacterBase`](Gameplay.CharacterBase.md) <br> 获取正在交互的角色|
| **[getInteractiveStatus](Gameplay.InteractiveObject.md#getinteractivestatus)**(): `boolean` <br> 获取该交互物的交互状态|
| **[startInteract](Gameplay.InteractiveObject.md#startinteract)**(`newCharObj`: [`CharacterBase`](Gameplay.CharacterBase.md), `newSlot?`: [`InteractiveSlot`](../enums/Gameplay.InteractiveSlot.md), `newStance?`: `string`): `boolean` <br> 开始交互|


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
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
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
| **[asyncSpawnGameObject](Gameplay.GameObject.md#asyncspawngameobject)**(`assetId`: `string`, `inReplicates?`: `boolean`, `transform?`: [`Transform`](Type.Transform.md)): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.GameObject.md#find)**(`GUID`: `string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`InTag`: `string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`name`: `string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawn](Gameplay.GameObject.md#spawn)**<`T`: extends `GameObject`<`T`\>\>(`[spawn](Gameplay.GameObject.md#spawn)Info`): `T`: extends `GameObject`<`T`\> <br> 构造一个 GameObject|
| **[spawnGameObject](Gameplay.GameObject.md#spawngameobject)**(`assetId`: `string`, `inReplicates?`: `boolean`, `transform?`: [`Transform`](Type.Transform.md)): `GameObject` <br> 构造一个 GameObject|
:::


## Properties

### onInteractiveEnded <Score text="onInteractiveEnded" /> 

• **onInteractiveEnded**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

交互结束时执行绑定函数

::: warning Precautions

会自动广播，若是双端对象，则可以在任意客户端调用

:::

___

### onInteractiveStarted <Score text="onInteractiveStarted" /> 

• **onInteractiveStarted**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

交互开始时执行绑定函数

::: warning Precautions

会自动广播，若是双端对象，则可以在任意客户端调用

:::

___

### onInteractiveTimeout <Score text="onInteractiveTimeout" /> 

• **onInteractiveTimeout**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

交互超时时执行绑定函数

::: warning Precautions

会自动广播，若是双端对象，则可以在任意客户端调用

:::

## Accessors

### autoInteractMode <Score text="autoInteractMode" /> 

• `get` **autoInteractMode**(): `boolean`

是否自动激活

**`Notes`**

不自动激活的情况下，可以考虑监听自动生成的 Trigger （通过 getBoundTrigger() 获取）的事件

#### Returns

`boolean`

• `set` **autoInteractMode**(`value`): `void`

是否自动激活

**`Notes`**

不自动激活的情况下，可以考虑监听自动生成的 Trigger （通过 getBoundTrigger() 获取）的事件

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### endInteractiveLocation <Score text="endInteractiveLocation" /> 

• `get` **endInteractiveLocation**(): [`Vector`](Type.Vector.md)

结束交互的相对位置，退出交互后角色刷新在这里

#### Returns

[`Vector`](Type.Vector.md)

• `set` **endInteractiveLocation**(`value`): `void`

结束交互的相对位置，退出交互后角色刷新在这里

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector`](Type.Vector.md) |


___

### endInteractiveRotation <Score text="endInteractiveRotation" /> 

• `get` **endInteractiveRotation**(): [`Rotation`](Type.Rotation.md)

结束交互的相对旋转，退出交互后角色朝向

#### Returns

[`Rotation`](Type.Rotation.md)

• `set` **endInteractiveRotation**(`value`): `void`

结束交互的相对旋转，退出交互后角色朝向

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Rotation`](Type.Rotation.md) |



### interactiveSlot <Score text="interactiveSlot" /> 

• `get` **interactiveSlot**(): [`InteractiveSlot`](../enums/Gameplay.InteractiveSlot.md)

交互物插槽

#### Returns

[`InteractiveSlot`](../enums/Gameplay.InteractiveSlot.md)

• `set` **interactiveSlot**(`slot`): `void`

交互物插槽

#### Parameters

| Name | Type |
| :------ | :------ |
| `slot` | [`InteractiveSlot`](../enums/Gameplay.InteractiveSlot.md) |


___

### interactiveStance <Score text="interactiveStance" /> 

• `get` **interactiveStance**(): `string`

交互动画姿态资源 id

#### Returns

`string`

• `set` **interactiveStance**(`assetGuid`): `void`

交互动画姿态资源 id

#### Parameters

| Name | Type |
| :------ | :------ |
| `assetGuid` | `string` |


___

### interactiveTrigger <Score text="interactiveTrigger" /> 

• `get` **interactiveTrigger**(): `string`

交互物触发器 GUID

#### Returns

`string`

• `set` **interactiveTrigger**(`guid`): `void`

交互物触发器 GUID

::: warning Precautions

此方法没有规避重复触发

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `guid` | `string` |



### maxInteractiveDuration <Score text="maxInteractiveDuration" /> 

• `get` **maxInteractiveDuration**(): `number`

最大交互时间，超过该时间自动退出交互

::: warning Precautions

该值为0时不自动退出。单位 s

:::

#### Returns

`number`

• `set` **maxInteractiveDuration**(`value`): `void`

最大交互时间，超过该时间自动退出交互

::: warning Precautions

该值为0时不自动退出。单位 s

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |



## Methods

### endInteract <Score text="endInteract" /> 

• **endInteract**(`endLoc?`, `endRot?`, `newStance?`): `boolean` <Badge type="tip" text="other" />

结束交互

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endLoc?` | [`Vector`](Type.Vector.md) |  结束位置 default: 属性 endInteractiveLocation |
| `endRot?` | [`Rotation`](Type.Rotation.md) |  结束旋转量 default: 属性 endInteractiveRotation |
| `newStance?` | `string` |  新姿态，default: 以属性玩家开始交互前的姿态为准 |

#### Returns

`boolean`

true 触发了结束交互逻辑

___

### getBoundTrigger <Score text="getBoundTrigger" /> 

• **getBoundTrigger**(): ``null`` \| [`Trigger`](Gameplay.Trigger.md) 

获取绑定的触发器


#### Returns

``null`` \| [`Trigger`](Gameplay.Trigger.md)

已绑定的 Box Trigger


### getInteractCharacter <Score text="getInteractCharacter" /> 

• **getInteractCharacter**(): [`CharacterBase`](Gameplay.CharacterBase.md) 

获取正在交互的角色


#### Returns

[`CharacterBase`](Gameplay.CharacterBase.md)

true：为交互中

___

### getInteractiveStatus <Score text="getInteractiveStatus" /> 

• **getInteractiveStatus**(): `boolean` 

获取该交互物的交互状态


#### Returns

`boolean`

true：为交互中


### startInteract <Score text="startInteract" /> 

• **startInteract**(`newCharObj`, `newSlot?`, `newStance?`): `boolean` <Badge type="tip" text="other" />

开始交互

::: warning Precautions

建议客户端调用

:::

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newCharObj` | [`CharacterBase`](Gameplay.CharacterBase.md) |  要交互的角色（可以是玩家，也可以是AI） |
| `newSlot?` | [`InteractiveSlot`](../enums/Gameplay.InteractiveSlot.md) |  交互插槽，不传默认以属性 interactiveSlot 为准 default: 属性 interactiveSlot |
| `newStance?` | `string` |  交互姿态，不传默认以属性 interactiveStance 为准 default: 属性 interactiveStance |

#### Returns

`boolean`

是否成功交互
