[Gameplay](../modules/Gameplay.Gameplay.md) / CharacterBase

# CharacterBase <Badge type="tip" text="Class" /> <Score text="CharacterBase" />

**`Groups`**

AVATAR

角色基类,派生自GameObject,在GameObject的基础上提供对角色的高级封装,是玩家角色跟非玩家角色的基类,该对象是基类,无法使用构造函数创建此对象.主要功能分三大块:形象设置,动画,移动.
             形象设置上,角色目前可以选择 V1人形,V2人形,四足,自定义形象等.
             动画上,可以使用高度封装的姿态对象和直接播放动画.
             移动功能上,支持对角色的基础移动属性进行查询和更改,比如移动速度,转向速度,移动控制模式等,还提供了地面移动,空中移动,水中移动的模式切换.

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`CharacterBase`**

  ↳↳ [`AICharacter`](Gameplay.AICharacter.md)

  ↳↳ [`Character`](Gameplay.Character.md)

  ↳↳ [`Humanoid`](Gameplay.Humanoid.md)

  ↳↳ [`NPC`](Gameplay.NPC.md)

## Table of contents

| Properties |
| :-----|
| **[onMeshChanged](Gameplay.CharacterBase.md#onmeshchanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[onMovementStateChanged](Gameplay.CharacterBase.md#onmovementstatechanged)**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged) <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[onSetAppearanceDataCompleted](Gameplay.CharacterBase.md#onsetappearancedatacompleted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\> <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[onTextureChanged](Gameplay.CharacterBase.md#ontexturechanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[player](Gameplay.CharacterBase.md#player)**: [`Player`](Gameplay.Player.md) <br> 角色在空中时, 控制水平方向移动的灵活度|

| Accessors |
| :-----|
| **[airControl](Gameplay.CharacterBase.md#aircontrol)**(): `number` <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[airControlBoostMultiplier](Gameplay.CharacterBase.md#aircontrolboostmultiplier)**(): `number` <br> 当角色空中水平移动速率比airControlBoostVelocityThreshold小时, 对airControl效果加倍的倍数|
| **[airControlBoostVelocityThreshold](Gameplay.CharacterBase.md#aircontrolboostvelocitythreshold)**(): `number` <br> 下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照airControlBoostMultiplier的值对airControl效果进行加倍|
| **[animationMode](Gameplay.CharacterBase.md#animationmode)**(): [`AnimationMode`](../enums/Gameplay.AnimationMode.md) <br> 动画播放模式|
| **[animationStance](Gameplay.CharacterBase.md#animationstance)**(): `string` <br> 动画姿态|
| [appearance](Gameplay.CharacterBase.md#appearance) |
| **[appearanceType](Gameplay.CharacterBase.md#appearancetype)**(): [`AppearanceType`](../enums/Gameplay.AppearanceType.md) <br> 形象类型|
| **[baseShadowLocationOffset](Gameplay.CharacterBase.md#baseshadowlocationoffset)**(): [`Vector2`](Type.Vector2.md) <br> 模拟阴影相对于角色脚底中心的位置偏移|
| **[baseShadowMaxVisibleHeight](Gameplay.CharacterBase.md#baseshadowmaxvisibleheight)**(): `number` <br> 模拟阴影可见的最大离地高度|
| **[baseShadowScale](Gameplay.CharacterBase.md#baseshadowscale)**(): [`Vector2`](Type.Vector2.md) <br> 模拟阴影的缩放|
| **[basicStance](Gameplay.CharacterBase.md#basicstance)**(): `string` <br> 基础姿态|
| **[basicStanceAimOffsetEnable](Gameplay.CharacterBase.md#basicstanceaimoffsetenable)**(): `boolean` <br> 是否基础姿态的开启瞄准偏移|
| **[brakingDecelerationFalling](Gameplay.CharacterBase.md#brakingdecelerationfalling)**(): `number` <br> 下落制动速率|
| **[brakingDecelerationFlying](Gameplay.CharacterBase.md#brakingdecelerationflying)**(): `number` <br> 飞行制动速率|
| **[brakingDecelerationSwimming](Gameplay.CharacterBase.md#brakingdecelerationswimming)**(): `number` <br> 游泳制动速率|
| **[brakingDecelerationWalking](Gameplay.CharacterBase.md#brakingdecelerationwalking)**(): `number` <br> 行走制动速率|
| **[canSetAppearanceData](Gameplay.CharacterBase.md#cansetappearancedata)**(): `boolean` <br> 是否可以设置角色形象数据|
| **[canStepUpOn](Gameplay.CharacterBase.md#canstepupon)**(): `boolean` <br> 获取组件是否可以被玩家站立|
| **[capsuleHalfHeight](Gameplay.CharacterBase.md#capsulehalfheight)**(): `number` <br> 胶囊体半高|
| **[capsuleRadius](Gameplay.CharacterBase.md#capsuleradius)**(): `number` <br> 胶囊体半径|
| **[characterName](Gameplay.CharacterBase.md#charactername)**(): `string` <br> 角色名称|
| **[collisionEnable](Gameplay.CharacterBase.md#collisionenable)**(): `boolean` <br> 是否开启碰撞|
| **[collisionExtent](Gameplay.CharacterBase.md#collisionextent)**(): [`Vector`](Type.Vector.md) <br> 碰撞形状的大小|
| **[collisionShape](Gameplay.CharacterBase.md#collisionshape)**(): [`CustomShapeType`](../enums/Gameplay.CustomShapeType.md) <br> 碰撞形状|
| **[collisionWithOtherCharacterEnable](Gameplay.CharacterBase.md#collisionwithothercharacterenable)**(): `boolean` <br> 能否与其他角色发生碰撞|
| **[crouchEnable](Gameplay.CharacterBase.md#crouchenable)**(): `boolean` <br> 启用/禁用下蹲能力|
| **[crouchedHeight](Gameplay.CharacterBase.md#crouchedheight)**(): `number` <br> 下蹲时胶囊体的高度|
| **[forceUpdateMovement](Gameplay.CharacterBase.md#forceupdatemovement)**(`value`: `boolean`): `void` <br> 启用/禁用强制更新移动|
| **[gravityScale](Gameplay.CharacterBase.md#gravityscale)**(): `number` <br> 重力倍率|
| **[groundFriction](Gameplay.CharacterBase.md#groundfriction)**(): `number` <br> 地面摩檫力|
| **[headUIVisible](Gameplay.CharacterBase.md#headuivisible)**(): `boolean` <br> 头顶UI是否可见|
| **[headUIVisibleRange](Gameplay.CharacterBase.md#headuivisiblerange)**(): `number` <br> 头顶UI可见距离|
| **[isCrouching](Gameplay.CharacterBase.md#iscrouching)**(): `boolean` <br> 是否处于下蹲状态|
| **[isJumping](Gameplay.CharacterBase.md#isjumping)**(): `boolean` <br> 是否正在跳跃|
| **[isMoving](Gameplay.CharacterBase.md#ismoving)**(): `boolean` <br> 是否正在移动|
| **[jumpEnable](Gameplay.CharacterBase.md#jumpenable)**(): `boolean` <br> 启用/禁用跳跃能力|
| **[jumpMaxCount](Gameplay.CharacterBase.md#jumpmaxcount)**(): `number` <br> 最大可跳跃次数|
| **[jumpingOutOfWaterEnable](Gameplay.CharacterBase.md#jumpingoutofwaterenable)**(): `boolean` <br> 是否可以跳出水面|


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
| **[find](Gameplay.GameObject.md#find)**(`GUID`: `string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`InTag`: `string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`name`: `string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawn](Gameplay.GameObject.md#spawn)**<`T`: extends `GameObject`<`T`\>\>(`[spawn](Gameplay.GameObject.md#spawn)Info`): `T`: extends `GameObject`<`T`\> <br> 构造一个 GameObject|
:::


## Properties

### onLoadAppearanceDataAllCompleted <Score text="onLoadAppearanceDataAllCompleted" /> 

• **onLoadAppearanceDataAllCompleted**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\>

加载完角色形象数据后的回调

___

### onMeshChanged <Score text="onMeshChanged" /> 

• **onMeshChanged**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

角色模型切换成功广播

___

### onMovementStateChanged <Score text="onMovementStateChanged" /> 

• **onMovementStateChanged**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged)

移动状态切换时的回调

___

### onSetAppearanceDataCompleted <Score text="onSetAppearanceDataCompleted" /> 

• **onSetAppearanceDataCompleted**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\>

设置一个角色编辑API成功后的回调

___

### onTextureChanged <Score text="onTextureChanged" /> 

• **onTextureChanged**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

角色贴图切换成功广播

___

### player <Score text="player" /> 

• **player**: [`Player`](Gameplay.Player.md)

玩家对象

## Accessors

### airControl <Score text="airControl" /> 

• `get` **airControl**(): `number`

角色在空中时, 控制水平方向移动的灵活度

::: warning Precautions

范围:0~1, 0表示不能控制, 1表示能按地面最大移动速率完全控制

:::

#### Returns

`number`

• `set` **airControl**(`InAirControl`): `void`

角色在空中时, 控制水平方向移动的灵活度

::: warning Precautions

范围:0~1, 0表示不能控制, 1表示能按地面最大移动速率完全控制

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `InAirControl` | `number` |


___

### airControlBoostMultiplier <Score text="airControlBoostMultiplier" /> 

• `get` **airControlBoostMultiplier**(): `number`

当角色空中水平移动速率比airControlBoostVelocityThreshold小时, 对airControl效果加倍的倍数

::: warning Precautions

范围:大于等于0的数字, 取0时, 不会对airControl效果加倍, 无论取值多大, airControl最大值都被限制为1

:::

#### Returns

`number`

• `set` **airControlBoostMultiplier**(`InAirControlBoostMultiplier`): `void`

当角色空中水平移动速率比airControlBoostVelocityThreshold小时, 对airControl效果加倍的倍数

::: warning Precautions

范围:大于等于0的数字, 取0时, 不会对airControl效果加倍, 无论取值多大, airControl最大值都被限制为1

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `InAirControlBoostMultiplier` | `number` |


___

### airControlBoostVelocityThreshold <Score text="airControlBoostVelocityThreshold" /> 

• `get` **airControlBoostVelocityThreshold**(): `number`

下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照airControlBoostMultiplier的值对airControl效果进行加倍

::: warning Precautions

范围: 大于等于0

:::

#### Returns

`number`

• `set` **airControlBoostVelocityThreshold**(`InAirControlBoostVelocityThreshold`): `void`

下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照airControlBoostMultiplier的值对airControl效果进行加倍

::: warning Precautions

范围: 大于等于0

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `InAirControlBoostVelocityThreshold` | `number` |


___

### animationMode <Score text="animationMode" /> 

• `get` **animationMode**(): [`AnimationMode`](../enums/Gameplay.AnimationMode.md)

动画播放模式

#### Returns

[`AnimationMode`](../enums/Gameplay.AnimationMode.md)

• `set` **animationMode**(`mode`): `void`

动画播放模式

::: warning Precautions

Auto 提供基础姿态，表现为边走边播动画，Custom自定义模式，不提供姿态,默认下没有任何动作，需要自行编写状态控制动画播放。

:::

使用示例: 应用
```ts
// Auto
 Gameplay.asyncGetCurrentPlayer().then((player) => {
  let Anim = player.character.playAnimation(animGUID);
  Anim = player.character.loadAnimation(animGUID);
});

//Custom 动画状态机
export class EasyAnimState{

 public stateTag:string;

 private anim:Gameplay.Animation;

 public stateCheckCallback:(anim:Gameplay.Animation,stateTag:string)=>string;

 constructor(tag:string,anim:Gameplay.Animation,stateChange:(anim:Gameplay.Animation,stateTag:string)=>string) {
    this.stateTag = tag;
    this.anim = anim;
    this.stateCheckCallback = stateChange;
 }

 public enter(){
   this.anim.play();
 }

 public exit(){
  this.anim.stop();
 }

 public check():string{
   return this.stateCheckCallback(this.anim,this.stateTag);
 }
}

export class EasyAnimStateMachine{
private statesMap:Map<string,EasyAnimState>;

private currentState:EasyAnimState;

public startTag:string;

private timerId:number = undefined;

private updateRate:number;

public load(states:EasyAnimState[],startTag:string,updateRate = 33){
 if(this.timerId != undefined){
      console.warn("State Machine is Running");
      this.stop();
 }

 this.statesMap = new Map<string,EasyAnimState>();
 this.startTag = startTag;
 this.updateRate = updateRate;
 states.forEach((state)=>{
     this.statesMap.set(state.stateTag ,state);
 });

 this.timerId = undefined;
}

public start(){
  if(this.timerId != undefined){
      console.warn("State Machine is Running");
  }
  if(this.statesMap){
      if(this.statesMap.has(this.startTag)){
         this.currentState = this.statesMap.get(this.startTag);
         this.currentState.enter();
          this.timerId = setInterval(()=>{
             this.update();
         },this.updateRate);
     }else{
         console.log("error start tag " + this.startTag);
     }
 }
}

private update(){
 if(this.currentState && this.currentState.check){
     let nextState =  this.currentState.check();
     if(this.statesMap.has(nextState)){
         this.currentState.exit();
         this.currentState = this.statesMap.get(nextState);
         this.currentState.enter();
         console.log("change State: " + nextState);
     }
 }
}

public stop(){
   if(this.timerId == undefined){
      return;
  }

  clearInterval(this.timerId);
  this.currentState.exit();
  this.currentState = undefined;
  console.log("stop State Machine");
 }
}

@Core.Class
export default class Test extends Core.Script {
    stateMachine:EasyAnimStateMachine
    character:Gameplay.CharacterBase
    pressT = false;
    protected onStart(): void {
        if(Util.SystemUtil.isClient()) {
            Gameplay.asyncGetCurrentPlayer().then((player)=>{
                InputUtil.onKeyDown(Type.Keys.T,()=>{
                    this.pressT = true;
                });

                this.pressT = false;
                this.character = player.character;
                this.character.animationMode = Gameplay.AnimationMode.Custom;
                setTimeout(() => {
                    const animIdle = this.character.loadAnimation("47769");
                    animIdle.loop = 0
                    const stateIdle = new EasyAnimState("Idle",animIdle,
                    (anim:Gameplay.Animation,stateTag:string)=>{
                        if(this.pressT){
                            this.pressT = false;
                            return "Hello";
                        }

                        if(this.character.velocity.length > 0.1 && (this.character.velocity.x!=0 || this.character.velocity.y!=0)){
                            return "Walk";
                        }
                        return "";
                    });

                    const animAWalk = this.character.loadAnimation("33567");
                    animAWalk.loop = 0;
                    const stateWalk = new EasyAnimState("Walk",animAWalk,
                    (anim:Gameplay.Animation,stateTag:string)=>{
                        if(this.pressT){
                            this.pressT = false;
                            return "Hello";
                        }

                        if(this.character.velocity.length < 0.1){
                            return "Idle";
                        }
                        return "";
                    });

                    const animHello = this.character.loadAnimation("29755");
                    const stateHello = new EasyAnimState("Hello",animHello,
                     (anim:Gameplay.Animation,stateTag:string)=>{

                        if(this.pressT){
                            this.pressT = false;
                            anim.play();
                            return "";
                        }

                        if(this.character.velocity.length > 0.1 &&  (this.character.velocity.x!=0 || this.character.velocity.y!=0)){
                            return "Walk";
                        }

                        if(anim.isPlaying == false){
                            if( this.character.velocity.length < 0.1){
                                return "Idle";
                            }else{
                                return "Walk";
                            }
                        }
                        return "";
                    });

                    this.stateMachine = new EasyAnimStateMachine();
                    this.stateMachine.load([stateIdle,stateWalk,stateHello],"Idle");
                    Events.addLocalListener("start",()=>{
                        this.pressT = false;
                        this.stateMachine.start();
                    })
                    Events.addLocalListener("stop",()=>{
                        this.stateMachine.stop();
                    })
                }, 500);
            })
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`AnimationMode`](../enums/Gameplay.AnimationMode.md) |


___

### animationStance <Score text="animationStance" /> 

• `get` **animationStance**(): `string`

动画姿态

::: warning Precautions

动画姿态是更多样的预制动画状态机, 它可以和基础姿态进行上下半身的动画混合, 传入动画姿态资源的GUID进行动画姿态的切换, 传入空字符串时, 清除动画姿态

:::

#### Returns

`string`

• `set` **animationStance**(`StanceGUID`): `void`

动画姿态

::: warning Precautions

动画姿态是更多样的预制动画状态机, 它可以和基础姿态进行上下半身的动画混合, 传入动画姿态资源的GUID进行动画姿态的切换, 传入空字符串时, 清除动画姿态

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `StanceGUID` | `string` |


___

### appearanceType <Score text="appearanceType" /> 

• `get` **appearanceType**(): [`AppearanceType`](../enums/Gameplay.AppearanceType.md)

形象类型

::: warning Precautions

自动同步

:::

#### Returns

[`AppearanceType`](../enums/Gameplay.AppearanceType.md)

• `set` **appearanceType**(`type`): `void`

形象类型

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`AppearanceType`](../enums/Gameplay.AppearanceType.md) |


___

### baseShadowLocationOffset <Score text="baseShadowLocationOffset" /> 

• `get` **baseShadowLocationOffset**(): [`Vector2`](Type.Vector2.md)

模拟阴影相对于角色脚底中心的位置偏移

#### Returns

[`Vector2`](Type.Vector2.md)

• `set` **baseShadowLocationOffset**(`InLocationOffset`): `void`

模拟阴影相对于角色脚底中心的位置偏移

#### Parameters

| Name | Type |
| :------ | :------ |
| `InLocationOffset` | [`Vector2`](Type.Vector2.md) |


___

### baseShadowMaxVisibleHeight <Score text="baseShadowMaxVisibleHeight" /> 

• `get` **baseShadowMaxVisibleHeight**(): `number`

模拟阴影可见的最大离地高度

#### Returns

`number`

• `set` **baseShadowMaxVisibleHeight**(`InHeight`): `void`

模拟阴影可见的最大离地高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InHeight` | `number` |


___

### baseShadowScale <Score text="baseShadowScale" /> 

• `get` **baseShadowScale**(): [`Vector2`](Type.Vector2.md)

模拟阴影的缩放

#### Returns

[`Vector2`](Type.Vector2.md)

• `set` **baseShadowScale**(`InScale`): `void`

模拟阴影的缩放

#### Parameters

| Name | Type |
| :------ | :------ |
| `InScale` | [`Vector2`](Type.Vector2.md) |


___

### basicStance <Score text="basicStance" /> 

• `get` **basicStance**(): `string`

基础姿态

::: warning Precautions

基础姿态是一个预制的基本动画状态机, 包含行走, 跳跃, 飞行等基本动画, 传入基础姿态资源的GUID进行基础姿态的切换

:::

#### Returns

`string`

• `set` **basicStance**(`InBasicStance`): `void`

基础姿态

::: warning Precautions

基础姿态是一个预制的基本动画状态机, 包含行走, 跳跃, 飞行等基本动画, 传入基础姿态资源的GUID进行基础姿态的切换

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBasicStance` | `string` |


___

### basicStanceAimOffsetEnable <Score text="basicStanceAimOffsetEnable" /> 

• `get` **basicStanceAimOffsetEnable**(): `boolean`

是否基础姿态的开启瞄准偏移

#### Returns

`boolean`

• `set` **basicStanceAimOffsetEnable**(`InbEnableAimOffset`): `void`

是否基础姿态的开启瞄准偏移

#### Parameters

| Name | Type |
| :------ | :------ |
| `InbEnableAimOffset` | `boolean` |


___

### brakingDecelerationFalling <Score text="brakingDecelerationFalling" /> 

• `get` **brakingDecelerationFalling**(): `number`

下落制动速率

#### Returns

`number`

• `set` **brakingDecelerationFalling**(`InBrakingDecelerationFalling`): `void`

下落制动速率

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationFalling` | `number` |


___

### brakingDecelerationFlying <Score text="brakingDecelerationFlying" /> 

• `get` **brakingDecelerationFlying**(): `number`

飞行制动速率

#### Returns

`number`

• `set` **brakingDecelerationFlying**(`InBrakingDecelerationFlying`): `void`

飞行制动速率

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationFlying` | `number` |


___

### brakingDecelerationSwimming <Score text="brakingDecelerationSwimming" /> 

• `get` **brakingDecelerationSwimming**(): `number`

游泳制动速率

#### Returns

`number`

• `set` **brakingDecelerationSwimming**(`InBrakingDecelerationSwimming`): `void`

游泳制动速率

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationSwimming` | `number` |


___

### brakingDecelerationWalking <Score text="brakingDecelerationWalking" /> 

• `get` **brakingDecelerationWalking**(): `number`

行走制动速率

#### Returns

`number`

• `set` **brakingDecelerationWalking**(`InBrakingDecelerationWalking`): `void`

行走制动速率

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationWalking` | `number` |


___

### canSetAppearanceData <Score text="canSetAppearanceData" /> 

• `get` **canSetAppearanceData**(): `boolean`

是否可以设置角色形象数据

#### Returns

`boolean`

___

### canStepUpOn <Score text="canStepUpOn" /> 

• `get` **canStepUpOn**(): `boolean` 

获取组件是否可以被玩家站立


#### Returns

`boolean`

true 其他角色可以站到玩家头上  false 其他角色不可以站到玩家头上

• `set` **canStepUpOn**(`CanStepUpOn`): `void` <Badge type="tip" text="server" />

设置组件是否可以被玩家站立


#### Parameters

| Name | Type |
| :------ | :------ |
| `CanStepUpOn` | `boolean` |


___

### capsuleHalfHeight <Score text="capsuleHalfHeight" /> 

• `get` **capsuleHalfHeight**(): `number`

胶囊体半高

#### Returns

`number`

• `set` **capsuleHalfHeight**(`InCapsuleHalfHeight`): `void`

胶囊体半高

#### Parameters

| Name | Type |
| :------ | :------ |
| `InCapsuleHalfHeight` | `number` |


___

### capsuleRadius <Score text="capsuleRadius" /> 

• `get` **capsuleRadius**(): `number`

胶囊体半径

#### Returns

`number`

• `set` **capsuleRadius**(`InCapsuleRadius`): `void`

胶囊体半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `InCapsuleRadius` | `number` |


___

### characterName <Score text="characterName" /> 

• `get` **characterName**(): `string`

角色名称

::: warning Precautions

会显示在角色头顶UI上

:::

#### Returns

`string`

• `set` **characterName**(`inCharacterName`): `void`

角色名称

::: warning Precautions

会显示在角色头顶UI上

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `inCharacterName` | `string` |


___

### collisionEnable <Score text="collisionEnable" /> 

• `get` **collisionEnable**(): `boolean`

是否开启碰撞

::: warning Precautions

如果关闭碰撞, 角色将无法执行移动相关逻辑

:::

#### Returns

`boolean`

• `set` **collisionEnable**(`InbEnableCollision`): `void`

是否开启碰撞

#### Parameters

| Name | Type |
| :------ | :------ |
| `InbEnableCollision` | `boolean` |


___

### collisionExtent <Score text="collisionExtent" /> 

• `get` **collisionExtent**(): [`Vector`](Type.Vector.md)

碰撞形状的大小

#### Returns

[`Vector`](Type.Vector.md)

___

### collisionShape <Score text="collisionShape" /> 

• `get` **collisionShape**(): [`CustomShapeType`](../enums/Gameplay.CustomShapeType.md)

碰撞形状

#### Returns

[`CustomShapeType`](../enums/Gameplay.CustomShapeType.md)

___

### collisionWithOtherCharacterEnable <Score text="collisionWithOtherCharacterEnable" /> 

• `get` **collisionWithOtherCharacterEnable**(): `boolean`

能否与其他角色发生碰撞

#### Returns

`boolean`

• `set` **collisionWithOtherCharacterEnable**(`value`): `void`

能否与其他角色发生碰撞

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### crouchEnable <Score text="crouchEnable" /> 

• `get` **crouchEnable**(): `boolean`

启用/禁用下蹲能力

#### Returns

`boolean`

• `set` **crouchEnable**(`canCrouch`): `void`

启用/禁用下蹲能力

#### Parameters

| Name | Type |
| :------ | :------ |
| `canCrouch` | `boolean` |


___

### crouchedHeight <Score text="crouchedHeight" /> 

• `get` **crouchedHeight**(): `number`

下蹲时胶囊体的高度

#### Returns

`number`

• `set` **crouchedHeight**(`InCrouchedHeight`): `void`

下蹲时胶囊体的高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InCrouchedHeight` | `number` |


___

### forceUpdateMovement <Score text="forceUpdateMovement" /> 

• `set` **forceUpdateMovement**(`value`): `void` 

启用/禁用强制更新移动


#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |



### gravityScale <Score text="gravityScale" /> 

• `get` **gravityScale**(): `number`

重力倍率

::: warning Precautions

范围0~10, 过大和过小的值都会被限制

:::

#### Returns

`number`

• `set` **gravityScale**(`newGravityScale`): `void`

重力倍率

#### Parameters

| Name | Type |
| :------ | :------ |
| `newGravityScale` | `number` |


___

### groundFriction <Score text="groundFriction" /> 

• `get` **groundFriction**(): `number`

地面摩檫力

#### Returns

`number`

• `set` **groundFriction**(`inGroundFriction`): `void`

地面摩檫力

#### Parameters

| Name | Type |
| :------ | :------ |
| `inGroundFriction` | `number` |



### headUIVisible <Score text="headUIVisible" /> 

• `get` **headUIVisible**(): `boolean`

头顶UI是否可见

#### Returns

`boolean`

• `set` **headUIVisible**(`isVisible`): `void`

头顶UI是否可见

#### Parameters

| Name | Type |
| :------ | :------ |
| `isVisible` | `boolean` |


___

### headUIVisibleRange <Score text="headUIVisibleRange" /> 

• `get` **headUIVisibleRange**(): `number`

头顶UI可见距离

#### Returns

`number`

• `set` **headUIVisibleRange**(`VisibleDistance`): `void`

头顶UI可见距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `VisibleDistance` | `number` |


___

### isCrouching <Score text="isCrouching" /> 

• `get` **isCrouching**(): `boolean`

是否处于下蹲状态

#### Returns

`boolean`

___

### isJumping <Score text="isJumping" /> 

• `get` **isJumping**(): `boolean`

是否正在跳跃

#### Returns

`boolean`

___

### isMoving <Score text="isMoving" /> 

• `get` **isMoving**(): `boolean`

是否正在移动

#### Returns

`boolean`

___

### jumpEnable <Score text="jumpEnable" /> 

• `get` **jumpEnable**(): `boolean`

启用/禁用跳跃能力

#### Returns

`boolean`

• `set` **jumpEnable**(`value`): `void`

启用/禁用跳跃能力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### jumpMaxCount <Score text="jumpMaxCount" /> 

• `get` **jumpMaxCount**(): `number`

最大可跳跃次数

#### Returns

`number`

• `set` **jumpMaxCount**(`InJumpMaxCount`): `void`

最大可跳跃次数

#### Parameters

| Name | Type |
| :------ | :------ |
| `InJumpMaxCount` | `number` |


___

### jumpingOutOfWaterEnable <Score text="jumpingOutOfWaterEnable" /> 

• `get` **jumpingOutOfWaterEnable**(): `boolean`

是否可以跳出水面

#### Returns

`boolean`

• `set` **jumpingOutOfWaterEnable**(`value`): `void`

是否可以跳出水面

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### locallyVisible <Score text="locallyVisible" /> 

• `get` **locallyVisible**(): `boolean`

**`Deprecated`**

since:020 reason:api重构 replacement:getVisibility()

是否可见(本地设置)

#### Returns

`boolean`
