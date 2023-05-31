[Avatar](../groups/Avatar.Avatar.md) / Character

# Character <Badge type="tip" text="Class" /> <Score text="Character" />

角色基类,派生自GameObject,在GameObject的基础上提供对角色的高级封装,是玩家角色跟非玩家角色的基类,该对象是基类,无法使用构造函数创建此对象.主要功能分三大块:形象设置,动画,移动.
形象设置上,角色目前可以选择 V1人形,V2人形,四足,自定义形象等.
动画上,可以使用高度封装的姿态对象和直接播放动画.
移动功能上,支持对角色的基础移动属性进行查询和更改,比如移动速度,转向速度,移动控制模式等,还提供了地面移动,空中移动,水中移动的模式切换.

## Hierarchy

- [`Pawn`](Gameplay.Pawn.md)

  ↳ **`Character`**

## Table of contents

| Properties |
| :-----|
| **[onMovementStateChanged](Gameplay.Character.md#onmovementstatechanged)**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged) <br> 移动状态切换时的回调|
| **[onStyleCompleted](Gameplay.Character.md#onstylecompleted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnStyleCompleted`](../modules/Gameplay.Gameplay.md#onstylecompleted)\> <br> 外观加载完成委托|
| **[onStyleItemsChanged](Gameplay.Character.md#onstyleitemschanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnStyleItemsChanged`](../modules/Gameplay.Gameplay.md#onstyleitemschanged)\> <br> |

| Accessors |
| :-----|
| **[airControl](Gameplay.Character.md#aircontrol)**(): `number` <br> 空中灵活度|
| **[airControlBoostMultiplier](Gameplay.Character.md#aircontrolboostmultiplier)**(): `number` <br> 下落控制提升乘数|
| **[airControlBoostVelocityThreshold](Gameplay.Character.md#aircontrolboostvelocitythreshold)**(): `number` <br> 下落控制提升速率阈值|
| **[animationMode](Gameplay.Character.md#animationmode)**(): [`AnimationMode`](../enums/Gameplay.AnimationMode.md) <br> 动画播放模式|
| **[brakingDecelerationFalling](Gameplay.Character.md#brakingdecelerationfalling)**(): `number` <br> 下落制动速率|
| **[brakingDecelerationFlying](Gameplay.Character.md#brakingdecelerationflying)**(): `number` <br> 飞行制动速率|
| **[brakingDecelerationSwimming](Gameplay.Character.md#brakingdecelerationswimming)**(): `number` <br> 游泳制动速率|
| **[brakingDecelerationWalking](Gameplay.Character.md#brakingdecelerationwalking)**(): `number` <br> 行走制动速率|
| **[cameraSystem](Gameplay.Character.md#camerasystem)**(): [`CameraSystem`](Gameplay.Gameplay.CameraSystem.md) <br> (仅主角)获得摄像机系统|
| **[canJumpOutOfWater](Gameplay.Character.md#canjumpoutofwater)**(): `boolean` <br> 可以跳出水面|
| **[canSetAppearanceData](Gameplay.Character.md#cansetappearancedata)**(): `boolean` <br> 是否可以设置角色形象数据|
| **[canStandOn](Gameplay.Character.md#canstandon)**(): `boolean` <br> 是否可站立|
| **[capsuleCorrectionEnabled](Gameplay.Character.md#capsulecorrectionenabled)**(): `boolean` <br> 使用胶囊体修正|
| **[collisionEnable](Gameplay.Character.md#collisionenable)**(): `boolean` <br> 是否开启碰撞|
| **[collisionExtent](Gameplay.Character.md#collisionextent)**(): [`Vector`](Type.Vector.md) <br> 碰撞形状大小|
| **[collisionShape](Gameplay.Character.md#collisionshape)**(): [`CustomShapeType`](../enums/Gameplay.CustomShapeType.md) <br> 碰撞形状|
| **[collisionWithOtherCharacterEnabled](Gameplay.Character.md#collisionwithothercharacterenabled)**(): `boolean` <br> 启用与角色的碰撞|
| **[crouchEnabled](Gameplay.Character.md#crouchenabled)**(): `boolean` <br> 启用下蹲能力|
| **[crouchedHeight](Gameplay.Character.md#crouchedheight)**(): `number` <br> 下蹲时碰撞盒高度|
| **[currentBasicStance](Gameplay.Character.md#currentbasicstance)**(): [`BasicStance`](Gameplay.BasicStance.md) <br> 当前正在播放的基础姿态|
| **[currentStance](Gameplay.Character.md#currentstance)**(): [`Stance`](Gameplay.Stance.md) <br> 当前正在播放的二级姿态|
| **[displayName](Gameplay.Character.md#displayname)**(): `string` <br> 角色名称|
| **[forceUpdateMovement](Gameplay.Character.md#forceupdatemovement)**(`value`: `boolean`): `void` <br> 强制更新移动|
| **[gravityScale](Gameplay.Character.md#gravityscale)**(): `number` <br> 重力倍率|
| **[groundFriction](Gameplay.Character.md#groundfriction)**(): `number` <br> 地面摩檫力|
| **[headUIVisible](Gameplay.Character.md#headuivisible)**(): `boolean` <br> 头顶UI是否可见|
| **[headUIVisibleRange](Gameplay.Character.md#headuivisiblerange)**(): `number` <br> 头顶UI可见距离|
| **[isCrouching](Gameplay.Character.md#iscrouching)**(): `boolean` <br> 是否正在蹲下|
| **[isJumping](Gameplay.Character.md#isjumping)**(): `boolean` <br> 正在跳跃|
| **[isMoving](Gameplay.Character.md#ismoving)**(): `boolean` <br> 正在移动|
| **[jumpEnabled](Gameplay.Character.md#jumpenabled)**(): `boolean` <br> 启用跳跃能力|
| **[jumpMaxCount](Gameplay.Character.md#jumpmaxcount)**(): `number` <br> 最大可跳跃次数|
| **[maxAcceleration](Gameplay.Character.md#maxacceleration)**(): `number` <br> 最大加速度|
| **[maxFallingSpeed](Gameplay.Character.md#maxfallingspeed)**(): `number` <br> 最大下落速度|
| **[maxFlySpeed](Gameplay.Character.md#maxflyspeed)**(): `number` <br> 最大飞行速度|
| **[maxJumpHeight](Gameplay.Character.md#maxjumpheight)**(): `number` <br> 最大跳跃高度|
| **[maxStepHeight](Gameplay.Character.md#maxstepheight)**(): `number` <br> 最大可跨越高度|
| **[maxSwimSpeed](Gameplay.Character.md#maxswimspeed)**(): `number` <br> 最大游泳速度|
| **[maxWalkSpeed](Gameplay.Character.md#maxwalkspeed)**(): `number` <br> 最大行走速度|
| **[maxWalkSpeedCrouched](Gameplay.Character.md#maxwalkspeedcrouched)**(): `number` <br> 最大蹲伏行走速度|
| **[moveFacingDirection](Gameplay.Character.md#movefacingdirection)**(): [`MoveFacingDirection`](../enums/Gameplay.MoveFacingDirection.md) <br> 运动面朝方向|
| **[movementAxisDirection](Gameplay.Character.md#movementaxisdirection)**(): [`Vector`](Type.Vector.md) <br> 运动时依据的轴方向|
| **[movementDirection](Gameplay.Character.md#movementdirection)**(): [`MovementDirection`](../enums/Gameplay.MovementDirection.md) <br> 运动正方向|
| **[movementEnabled](Gameplay.Character.md#movementenabled)**(): `boolean` <br> 启用移动能力|
| **[movementType](Gameplay.Character.md#movementtype)**(): [`MovementType`](../enums/Gameplay.MovementType.md) <br> 移动模式|
| **[outOfWaterVerticalSpeed](Gameplay.Character.md#outofwaterverticalspeed)**(): `number` <br> 出水时垂直方向速度|
| **[overheadUI](Gameplay.Character.md#overheadui)**(): [`UIWidget`](Gameplay.UIWidget.md) <br> 获取头顶UIWidget|
| **[physicsEnabled](Gameplay.Character.md#physicsenabled)**(): `boolean` <br> 获取角色物理状态|
| **[ragdollEnabled](Gameplay.Character.md#ragdollenabled)**(): `boolean` <br> 启用布娃娃|
| **[rotateRate](Gameplay.Character.md#rotaterate)**(): `number` <br> 最大转向速度|
| **[separateBrakingFrictionEnabled](Gameplay.Character.md#separatebrakingfrictionenabled)**(): `boolean` <br> 启用单独制动摩擦|
| **[serverCalculateEnable](Gameplay.Character.md#servercalculateenable)**(`enable`: `boolean`): `void` <br> 开/关NPC的功能,现包含(角色的网络同步，角色移动)未来可能会添加其他计算|
| **[style](Gameplay.Character.md#style)**(): [`StyleConfig`](Gameplay.StyleConfig.md) <br> 角色外观|
| **[styleReady](Gameplay.Character.md#styleready)**(): `boolean` <br> 角色外观准备状态|
| **[velocity](Gameplay.Character.md#velocity)**(): [`Vector`](Type.Vector.md) <br> 当前移动速度|
| **[walkableFloorAngle](Gameplay.Character.md#walkablefloorangle)**(): `number` <br> 可行走的最大角度|


::: details 点击查看继承
| Accessors |
| :-----|
| **[customTimeDilation](Gameplay.Pawn.md#customtimedilation)**(): `number` <br> 膨胀时间速度|
| **[player](Gameplay.Pawn.md#player)**(): [`Player`](Gameplay.Player.md) <br> 玩家对象|
:::


| Methods |
| :-----|
| **[addImpulse](Gameplay.Character.md#addimpulse)**(`Vector`: [`Vector`](Type.Vector.md), `ignoreMass?`: `boolean`): `void` <br> 添加冲量|
| **[addMovement](Gameplay.Character.md#addmovement)**(`direction`: [`Vector`](Type.Vector.md)): `void` <br> 沿着给定的方向向量添加移动输入|
| **[attachToSlot](Gameplay.Character.md#attachtoslot)**(`gameObject`: `GameObject`, `slotName`: [`SlotType`](../enums/Gameplay.SlotType.md)): `void` <br> 将物体附着到人物角色的指定插槽|
| **[clearStyle](Gameplay.Character.md#clearstyle)**(`appearance?`: `boolean`, `slotAndItem?`: `boolean`): `void` <br> 清空外观数据|
| **[crouch](Gameplay.Character.md#crouch)**(`isCrouch`: `boolean`): `void` <br> 下蹲|
| **[detachAttachmentsFromSlot](Gameplay.Character.md#detachattachmentsfromslot)**(`slot?`: [`SlotType`](../enums/Gameplay.SlotType.md)): `void` <br> 将角色插槽附着的对象全部分离|
| **[detachFromSlot](Gameplay.Character.md#detachfromslot)**(`gameObject`: `GameObject`): `void` <br> 将物体从插槽中分离|
| **[getSlotWorldPosition](Gameplay.Character.md#getslotworldposition)**(`slotName`: [`SlotType`](../enums/Gameplay.SlotType.md)): [`Vector`](Type.Vector.md) <br> 获取角色插槽的世界坐标|
| **[getStyleData](Gameplay.Character.md#getstyledata)**(): [`StyleConfig`](Gameplay.StyleConfig.md) <br> 获取外观数据|
| **[getVertexPosition](Gameplay.Character.md#getvertexposition)**(`index`: `number`): [`Vector`](Type.Vector.md) <br> 通过头部模型顶点index实时获取顶点位置|
| **[jump](Gameplay.Character.md#jump)**(): `void` <br> 跳跃|
| **[loadAnimation](Gameplay.Character.md#loadanimation)**(`assetId`: `string`): [`Animation`](Gameplay.Animation.md) <br> 加载动画|
| **[loadBasicStance](Gameplay.Character.md#loadbasicstance)**(`assetId`: `string`): [`BasicStance`](Gameplay.BasicStance.md) <br> 加载基础姿态|
| **[loadStance](Gameplay.Character.md#loadstance)**(`assetId`: `string`): [`Stance`](Gameplay.Stance.md) <br> 加载姿态|
| **[lookAt](Gameplay.Character.md#lookat)**(`target`: [`Vector`](Type.Vector.md)): `void` <br> 角色面朝目标点|
| **[setCollisionShapeAndExtent](Gameplay.Character.md#setcollisionshapeandextent)**(`shapeType`: [`CustomShapeType`](../enums/Gameplay.CustomShapeType.md), `collisionExtent`: [`Vector`](Type.Vector.md)): `void` <br> 设置不同形状不同大小的碰撞体|
| **[setCustomTimeDilation](Gameplay.Character.md#setcustomtimedilation)**(`Time`: `number`): `void` <br> 设置当前角色对象膨胀时间速度说明：对象膨胀速度默认为1，当膨胀时间速度设置小于1时，对象的运行时间会比正常世界的运行时间减慢，膨胀时间速度最小值0.1。|
| **[setServerMovementEnable](Gameplay.Character.md#setservermovementenable)**(`value`: `boolean`): `void` <br> 开/关NPC的移动计算|
| **[setStyle](Gameplay.Character.md#setstyle)**(`data`: `string` \): `void` <br> 设置外观数据|
| **[swimDown](Gameplay.Character.md#swimdown)**(`speed`: `number`): `void` <br> 水中下潜|
| **[swimUp](Gameplay.Character.md#swimup)**(`speed`: `number`): `void` <br> 水中上浮|
| **[switchToFlying](Gameplay.Character.md#switchtoflying)**(): `void` <br> 切换为飞行状态|
| **[switchToSwimming](Gameplay.Character.md#switchtoswimming)**(): `void` <br> 切换为游泳状态|
| **[switchToWalking](Gameplay.Character.md#switchtowalking)**(): `void` <br> 切换为行走状态|
| **[syncStyle](Gameplay.Character.md#syncstyle)**(): `void` <br> 同步外观数据|


::: details 点击查看继承
| Methods |
| :-----|
| **[setOutline](Gameplay.Pawn.md#setoutline)**(`enabled`: `boolean`, `color?`: [`LinearColor`](Type.LinearColor.md), `width?`: `number`, `depthOffset?`: `number`, `clampValue?`: `number`, `cameraPosition?`: `boolean`, `silhouetteOnly?`: `boolean`): `void` <br> 添加描边效果|
| **[setPostProcessOutline](Gameplay.Pawn.md#setpostprocessoutline)**(`enabled`: `boolean`, `color?`: [`LinearColor`](Type.LinearColor.md), `width?`: `number`): `void` <br> 添加后处理描边|
:::


## Properties

### onMovementStateChanged <Score text="onMovementStateChanged" /> 

• **onMovementStateChanged**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged) 

移动状态切换时的回调


::: warning Precautions

当角色移动状态切换时执行绑定函数

:::

使用示例:提供按键方法切换角色移动模式并给角色切换不同道具
```ts
@Core.Class
export default class CharacterMoveModeExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "23060,86749";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let item: GameObject = null;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 给角色【移动模式切换】委托添加一个函数：打印当前移动模式，根据模式切换道具
            myCharacter.onMovementModeChanged.add((mode) => {
                switch (mode) {
                    case 0:
                        item.destroy();
                        item = null;
                        break;
                    case 1:
                        item.destroy();
                        item = Core.GameObject.spawn({guid: "23060"});
                        item.parent = myCharacter;
                        break;
                    case 2:
                        item.destroy();
                        item = Core.GameObject.spawn({guid: "86749"});
                        item.parent = myCharacter;
                        item.relativeLocation = new Type.Vector(0, 0, -100);
                        item.relativeRotation = new Type.Rotation(0, 0, -90);
                        break;
                    default:
                        break;
                }
            });
            // 添加一个按键方法：键盘“1”，角色切换为行走
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToWalking();
            });
            // 添加一个按键方法：键盘“2”，角色生成喷气背包，切换为飞行
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.switchToFlying();
            });
            // 添加一个按键方法：键盘“3”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.switchToSwimming();
            });
        }
    }
}
```

___

### onStyleCompleted <Score text="onStyleCompleted" /> 

• **onStyleCompleted**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnStyleCompleted`](../modules/Gameplay.Gameplay.md#onstylecompleted)\> 

外观加载完成委托


::: warning Precautions

当角色对象外观加载完成时执行绑定函数

:::

使用示例:以不同方式设置角色外观，清空外观，同步外观。外观切换完成时播放换装特效。判断外观是否加载完成播放对应动画。
```ts
@Core.Class
export default class CharacterStyleExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.styleReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            // 给【角色换装完成】委托添加函数
            myCharacter.onStyleCompleted.add(() => {
                EffectService.getInstance().playEffectOnPlayer("161245", myCharacter, SlotType.Root);
            });
            // 获取角色默认外观风格
            let defaultStyle = myCharacter.getStyleData();
            // 添加一个按键方法：按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.setStyle(defaultStyle);
            });
            // 添加一个按键方法：按下键盘“2”，更换角色外观
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style基础：角色模板为二次元男
                    myCharacter.style.advance.base.characterSetting.switchCharacter = CharacterTemplate.AnimeMale;
                    // 修改角色style头部：头大小为2倍
                    myCharacter.style.advance.headFeatures.head.headOverallScale = 2;
                    // 修改角色style体型：身高为2倍
                    myCharacter.style.advance.bodyFeatures.body.height = 2;
                    // 修改角色style化妆：腮红为75674
                    myCharacter.style.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发：前发为57731，后发为63910
                    myCharacter.style.advance.hair.frontHair.style = "57731";
                    myCharacter.style.advance.hair.backHair.style = "63910";
                    // 修改角色style：上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.style.advance.clothing.upperCloth.style = "58694";
                    myCharacter.style.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.style.advance.clothing.gloves.style = "60384";
                    myCharacter.style.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法：按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.syncStyle();
            });
            // 添加一个按键方法：按下键盘“4”，解析角色外观文件并应用
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                let style = Character.resovleStyle("136183");
                myCharacter.setStyle(style);
            });
            // 添加一个按键方法：按下键盘“5”，清空角色外观
            InputUtil.onKeyDown(Type.Keys.Five, () => {
                myCharacter.clearStyle();
            });
        }
    }
}
```

___

### onStyleItemsChanged <Score text="onStyleItemsChanged" /> 

• **onStyleItemsChanged**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnStyleItemsChanged`](../modules/Gameplay.Gameplay.md#onstyleitemschanged)\>

## Accessors

### airControl <Score text="airControl" /> 

• `get` **airControl**(): `number` 

空中灵活度


::: warning Precautions

角色在空中时, 控制水平方向移动的灵活度；范围:0~1, 0表示不能控制, 1表示能按地面最大移动速率完全控制

:::

使用示例:设置下落相关属性并提供按键方法使角色跳跃后查看下落效果
```ts
@Core.Class
export default class CharacterFallExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置下落属性
            myCharacter.maxFallingSpeed = 1024;
// 最大下落速度为1024
            myCharacter.brakingDecelerationFalling = 100;
// 下落制动速率为100
            myCharacter.airControl = 0.5;
// 按地面移动速率的0.5倍控制下落过程
            myCharacter.airControlBoostMultiplier = 2;
// 下落速度小于阈值时【airControl】乘2
            myCharacter.airControlBoostVelocityThreshold = 512;
// 下落速度阈值512
            myCharacter.gravityScale = 2;
// 2倍重力
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxJumpHeight = 1004;
                myCharacter.jump();
            });
        }
    }
}
```

#### Returns

`number`

• `set` **airControl**(`InAirControl`): `void` 

空中灵活度


::: warning Precautions

角色在空中时, 控制水平方向移动的灵活度；范围:0~1, 0表示不能控制, 1表示能按地面最大移动速率完全控制

:::

使用示例:设置下落相关属性并提供按键方法使角色跳跃后查看下落效果
```ts
@Core.Class
export default class CharacterFallExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置下落属性
            myCharacter.maxFallingSpeed = 1024;
// 最大下落速度为1024
            myCharacter.brakingDecelerationFalling = 100;
// 下落制动速率为100
            myCharacter.airControl = 0.5;
// 按地面移动速率的0.5倍控制下落过程
            myCharacter.airControlBoostMultiplier = 2;
// 下落速度小于阈值时【airControl】乘2
            myCharacter.airControlBoostVelocityThreshold = 512;
// 下落速度阈值512
            myCharacter.gravityScale = 2;
// 2倍重力
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxJumpHeight = 1005;
                myCharacter.jump();
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InAirControl` | `number` |


___

### airControlBoostMultiplier <Score text="airControlBoostMultiplier" /> 

• `get` **airControlBoostMultiplier**(): `number` 

下落控制提升乘数


::: warning Precautions

当角色空中水平移动速率比airControlBoostVelocityThreshold小时, 对airControl效果加倍的倍数范围:大于等于0的数字, 取0时, 不会对airControl效果加倍, 无论取值多大, airControl最大值都被限制为1

:::

使用示例:设置下落相关属性并提供按键方法使角色跳跃后查看下落效果
```ts
@Core.Class
export default class CharacterFallExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置下落属性
            myCharacter.maxFallingSpeed = 1024;
// 最大下落速度为1024
            myCharacter.brakingDecelerationFalling = 100;
// 下落制动速率为100
            myCharacter.airControl = 0.5;
// 按地面移动速率的0.5倍控制下落过程
            myCharacter.airControlBoostMultiplier = 2;
// 下落速度小于阈值时【airControl】乘2
            myCharacter.airControlBoostVelocityThreshold = 512;
// 下落速度阈值512
            myCharacter.gravityScale = 2;
// 2倍重力
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxJumpHeight = 1006;
                myCharacter.jump();
            });
        }
    }
}
```

#### Returns

`number`

• `set` **airControlBoostMultiplier**(`InAirControlBoostMultiplier`): `void` 

下落控制提升乘数


::: warning Precautions

当角色空中水平移动速率比airControlBoostVelocityThreshold小时, 对airControl效果加倍的倍数范围:大于等于0的数字, 取0时, 不会对airControl效果加倍, 无论取值多大, airControl最大值都被限制为1

:::

使用示例:设置下落相关属性并提供按键方法使角色跳跃后查看下落效果
```ts
@Core.Class
export default class CharacterFallExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置下落属性
            myCharacter.maxFallingSpeed = 1024;
// 最大下落速度为1024
            myCharacter.brakingDecelerationFalling = 100;
// 下落制动速率为100
            myCharacter.airControl = 0.5;
// 按地面移动速率的0.5倍控制下落过程
            myCharacter.airControlBoostMultiplier = 2;
// 下落速度小于阈值时【airControl】乘2
            myCharacter.airControlBoostVelocityThreshold = 512;
// 下落速度阈值512
            myCharacter.gravityScale = 2;
// 2倍重力
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxJumpHeight = 1007;
                myCharacter.jump();
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InAirControlBoostMultiplier` | `number` |


___

### airControlBoostVelocityThreshold <Score text="airControlBoostVelocityThreshold" /> 

• `get` **airControlBoostVelocityThreshold**(): `number` 

下落控制提升速率阈值


::: warning Precautions

下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照airControlBoostMultiplier的值对airControl效果进行加倍；范围: 大于等于0

:::

使用示例:设置下落相关属性并提供按键方法使角色跳跃后查看下落效果
```ts
@Core.Class
export default class CharacterFallExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置下落属性
            myCharacter.maxFallingSpeed = 1024;
// 最大下落速度为1024
            myCharacter.brakingDecelerationFalling = 100;
// 下落制动速率为100
            myCharacter.airControl = 0.5;
// 按地面移动速率的0.5倍控制下落过程
            myCharacter.airControlBoostMultiplier = 2;
// 下落速度小于阈值时【airControl】乘2
            myCharacter.airControlBoostVelocityThreshold = 512;
// 下落速度阈值512
            myCharacter.gravityScale = 2;
// 2倍重力
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxJumpHeight = 1008;
                myCharacter.jump();
            });
        }
    }
}
```

#### Returns

`number`

• `set` **airControlBoostVelocityThreshold**(`InAirControlBoostVelocityThreshold`): `void` 

下落控制提升速率阈值


::: warning Precautions

下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照airControlBoostMultiplier的值对airControl效果进行加倍；范围: 大于等于0

:::

使用示例:设置下落相关属性并提供按键方法使角色跳跃后查看下落效果
```ts
@Core.Class
export default class CharacterFallExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置下落属性
            myCharacter.maxFallingSpeed = 1024;
// 最大下落速度为1024
            myCharacter.brakingDecelerationFalling = 100;
// 下落制动速率为100
            myCharacter.airControl = 0.5;
// 按地面移动速率的0.5倍控制下落过程
            myCharacter.airControlBoostMultiplier = 2;
// 下落速度小于阈值时【airControl】乘2
            myCharacter.airControlBoostVelocityThreshold = 512;
// 下落速度阈值512
            myCharacter.gravityScale = 2;
// 2倍重力
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxJumpHeight = 1009;
                myCharacter.jump();
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InAirControlBoostVelocityThreshold` | `number` |


___

### animationMode <Score text="animationMode" /> 

• `get` **animationMode**(): [`AnimationMode`](../enums/Gameplay.AnimationMode.md) 

动画播放模式


::: warning Precautions

角色的动画播放模式。Auto表示提供默认基础姿态，由默认动画状态机播放角色动画。Custom表示角色动画由用户自定义，不提供姿态,默认下没有任何动作。需要用户自行编写动画状态机控制动画播放。

:::

使用示例:提供按键方法切换角色动画模式并播放三连击动画查看效果。
```ts
@Core.Class
export default class CharacterAnimationModeExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "29744";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 加载三连击动画
            let tripleHitAnimation = myCharacter.loadAnimation("29744");
            // 添加一个按键方法：键盘“1”，角色切换角色动画模式
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.animationMode = (myCharacter.animationMode + 1) % 2;
                console.log("当前角色动画模式 " + AnimationMode[myCharacter.animationMode]);
            });
            // 添加一个按键方法：按下键盘“2”，角色播放/停止三连击动画
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(tripleHitAnimation.isPlaying) {
                    tripleHitAnimation.stop();
                } else {
                    tripleHitAnimation.play();
                }
            });
        }
    }
}
```

#### Returns

[`AnimationMode`](../enums/Gameplay.AnimationMode.md)

• `set` **animationMode**(`mode`): `void` 

动画播放模式


::: warning Precautions

角色的动画播放模式。Auto表示提供默认基础姿态，由默认动画状态机播放角色动画。Custom表示角色动画由用户自定义，不提供姿态,默认下没有任何动作。需要用户自行编写动画状态机控制动画播放。

:::

使用示例:提供按键方法切换角色动画模式并播放三连击动画查看效果。
```ts
@Core.Class
export default class CharacterAnimationModeExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "29744";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 加载三连击动画
            let tripleHitAnimation = myCharacter.loadAnimation("29744");
            // 添加一个按键方法：键盘“1”，角色切换角色动画模式
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.animationMode = (myCharacter.animationMode + 1) % 2;
                console.log("当前角色动画模式 " + AnimationMode[myCharacter.animationMode]);
            });
            // 添加一个按键方法：按下键盘“3”，角色播放/停止三连击动画
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(tripleHitAnimation.isPlaying) {
                    tripleHitAnimation.stop();
                } else {
                    tripleHitAnimation.play();
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`AnimationMode`](../enums/Gameplay.AnimationMode.md) |


___

### brakingDecelerationFalling <Score text="brakingDecelerationFalling" /> 

• `get` **brakingDecelerationFalling**(): `number` 

下落制动速率


::: warning Precautions

角色在下落状态下移动时受到的减速度

:::

使用示例:设置下落相关属性并提供按键方法使角色跳跃后查看下落效果
```ts
@Core.Class
export default class CharacterFallExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置下落属性
            myCharacter.maxFallingSpeed = 1024;
// 最大下落速度为1024
            myCharacter.brakingDecelerationFalling = 100;
// 下落制动速率为100
            myCharacter.airControl = 0.5;
// 按地面移动速率的0.5倍控制下落过程
            myCharacter.airControlBoostMultiplier = 2;
// 下落速度小于阈值时【airControl】乘2
            myCharacter.airControlBoostVelocityThreshold = 512;
// 下落速度阈值512
            myCharacter.gravityScale = 2;
// 2倍重力
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxJumpHeight = 1002;
                myCharacter.jump();
            });
        }
    }
}
```

#### Returns

`number`

• `set` **brakingDecelerationFalling**(`InBrakingDecelerationFalling`): `void` 

下落制动速率


::: warning Precautions

角色在下落状态下移动时受到的减速度

:::

使用示例:设置下落相关属性并提供按键方法使角色跳跃后查看下落效果
```ts
@Core.Class
export default class CharacterFallExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置下落属性
            myCharacter.maxFallingSpeed = 1024;
// 最大下落速度为1024
            myCharacter.brakingDecelerationFalling = 100;
// 下落制动速率为100
            myCharacter.airControl = 0.5;
// 按地面移动速率的0.5倍控制下落过程
            myCharacter.airControlBoostMultiplier = 2;
// 下落速度小于阈值时【airControl】乘2
            myCharacter.airControlBoostVelocityThreshold = 512;
// 下落速度阈值512
            myCharacter.gravityScale = 2;
// 2倍重力
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxJumpHeight = 1003;
                myCharacter.jump();
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationFalling` | `number` |


___

### brakingDecelerationFlying <Score text="brakingDecelerationFlying" /> 

• `get` **brakingDecelerationFlying**(): `number` 

飞行制动速率


::: warning Precautions

角色在空中移动时受到的减速度

:::

使用示例:添加按键方法使角色切换飞行状态，加速飞行和上升飞行。通过修改飞行相关属性和使用姿态和动画的播放适配对应的飞行动作。
```ts
@Core.Class
export default class CharacterFlyExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 加载喷射加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：键盘“1”，角色切换为飞行
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToFlying();
            });
            // 添加一个按键方法：按下键盘“2”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放飞行动画，修改飞行速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxFlySpeed = 2000;
                    myCharacter.brakingDecelerationFlying = 5000;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原飞行速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxFlySpeed = 500;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.addMovement(new Type.Vector(0, 0, 5));
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxFlySpeed = 500;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 2000);
                    // 2.2秒后还原角色飞行制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationFlying = 300;
                    }, 2201);
            });
        }
    }
}
```

#### Returns

`number`

• `set` **brakingDecelerationFlying**(`InBrakingDecelerationFlying`): `void` 

飞行制动速率


::: warning Precautions

角色在空中移动时受到的减速度

:::

使用示例:添加按键方法使角色切换飞行状态，加速飞行和上升飞行。通过修改飞行相关属性和使用姿态和动画的播放适配对应的飞行动作。
```ts
@Core.Class
export default class CharacterFlyExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 加载喷射加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：键盘“1”，角色切换为飞行
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToFlying();
            });
            // 添加一个按键方法：按下键盘“2”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放飞行动画，修改飞行速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxFlySpeed = 2000;
                    myCharacter.brakingDecelerationFlying = 5000;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原飞行速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxFlySpeed = 500;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.addMovement(new Type.Vector(0, 0, 5));
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxFlySpeed = 500;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 2000);
                    // 2.2秒后还原角色飞行制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationFlying = 300;
                    }, 2202);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationFlying` | `number` |


___

### brakingDecelerationSwimming <Score text="brakingDecelerationSwimming" /> 

• `get` **brakingDecelerationSwimming**(): `number` 

游泳制动速率


::: warning Precautions

角色在游泳状态下移动时受到的减速度

:::

使用示例:生成拱形容器并适配游泳区域，添加按键方法使角色切换游泳状态，加速游泳和上浮游泳。通过修改游泳相关属性和使用姿态和动画的播放适配对应的游泳动作。
```ts
@Core.Class
export default class CharacterSwimExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "60830,53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            Core.GameObject.spawn({guid: "60830", transform: new Type.Transform(new Type.Vector(600, 0, 0), new Type.Rotation(0, 0, 90), new Type.Vector(20, 20, 20))});
            Core.GameObject.spawn({guid: "SwimmingVolume", transform: new Type.Transform(new Type.Vector(675, 0, 975), new Type.Rotation(0, 0, 90), new Type.Vector(10, 20, 20))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 600;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：按下键盘“1”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法：按住键盘“Up”，角色上浮
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCharacter.swimUp(5);
            });
            // 添加一个按键方法：按住键盘“Down”，角色下潜
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCharacter.swimDown(5);
            });
            // 添加一个按键方法：按下键盘“空格”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.SpaceBar, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原游泳速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.swimUp(10)
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1000);
                    // 2.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1202);
            });
        }
    }
}
```

#### Returns

`number`

• `set` **brakingDecelerationSwimming**(`InBrakingDecelerationSwimming`): `void` 

游泳制动速率


::: warning Precautions

角色在游泳状态下移动时受到的减速度

:::

使用示例:生成拱形容器并适配游泳区域，添加按键方法使角色切换游泳状态，加速游泳和上浮游泳。通过修改游泳相关属性和使用姿态和动画的播放适配对应的游泳动作。
```ts
@Core.Class
export default class CharacterSwimExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "60830,53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            Core.GameObject.spawn({guid: "60830", transform: new Type.Transform(new Type.Vector(600, 0, 0), new Type.Rotation(0, 0, 90), new Type.Vector(20, 20, 20))});
            Core.GameObject.spawn({guid: "SwimmingVolume", transform: new Type.Transform(new Type.Vector(675, 0, 975), new Type.Rotation(0, 0, 90), new Type.Vector(10, 20, 20))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 600;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：按下键盘“1”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法：按住键盘“Up”，角色上浮
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCharacter.swimUp(5);
            });
            // 添加一个按键方法：按住键盘“Down”，角色下潜
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCharacter.swimDown(5);
            });
            // 添加一个按键方法：按下键盘“空格”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.SpaceBar, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原游泳速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.swimUp(10)
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1000);
                    // 2.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1203);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationSwimming` | `number` |


___

### brakingDecelerationWalking <Score text="brakingDecelerationWalking" /> 

• `get` **brakingDecelerationWalking**(): `number` 

行走制动速率


::: warning Precautions

角色在行走时受到的减速度。仅在启用单独制动摩擦时生效。

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“1”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

#### Returns

`number`

• `set` **brakingDecelerationWalking**(`InBrakingDecelerationWalking`): `void` 

行走制动速率


::: warning Precautions

角色在行走时受到的减速度。仅在启用单独制动摩擦时生效。

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“2”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationWalking` | `number` |


___

### cameraSystem <Score text="cameraSystem" /> 

• `get` **cameraSystem**(): [`CameraSystem`](Gameplay.Gameplay.CameraSystem.md)

(仅主角)获得摄像机系统

#### Returns

[`CameraSystem`](Gameplay.Gameplay.CameraSystem.md)

___

### canJumpOutOfWater <Score text="canJumpOutOfWater" /> 

• `get` **canJumpOutOfWater**(): `boolean` 

可以跳出水面


::: warning Precautions

角色通过是否swimUp接口上浮到水面时是否可以跳出水面。true表示可以跳出水面，false表示不可以跳出水面，只会浮在水中。

:::

使用示例:生成拱形容器并适配游泳区域，添加按键方法使角色切换游泳状态，加速游泳和上浮游泳。通过修改游泳相关属性和使用姿态和动画的播放适配对应的游泳动作。
```ts
@Core.Class
export default class CharacterSwimExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "60830,53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            Core.GameObject.spawn({guid: "60830", transform: new Type.Transform(new Type.Vector(600, 0, 0), new Type.Rotation(0, 0, 90), new Type.Vector(20, 20, 20))});
            Core.GameObject.spawn({guid: "SwimmingVolume", transform: new Type.Transform(new Type.Vector(675, 0, 975), new Type.Rotation(0, 0, 90), new Type.Vector(10, 20, 20))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 600;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：按下键盘“1”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法：按住键盘“Up”，角色上浮
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCharacter.swimUp(5);
            });
            // 添加一个按键方法：按住键盘“Down”，角色下潜
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCharacter.swimDown(5);
            });
            // 添加一个按键方法：按下键盘“空格”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.SpaceBar, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原游泳速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.swimUp(10)
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1000);
                    // 2.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1200);
            });
        }
    }
}
```

#### Returns

`boolean`

• `set` **canJumpOutOfWater**(`value`): `void` 

可以跳出水面


::: warning Precautions

角色通过是否swimUp接口上浮到水面时是否可以跳出水面。true表示可以跳出水面，false表示不可以跳出水面，只会浮在水中。

:::

使用示例:生成拱形容器并适配游泳区域，添加按键方法使角色切换游泳状态，加速游泳和上浮游泳。通过修改游泳相关属性和使用姿态和动画的播放适配对应的游泳动作。
```ts
@Core.Class
export default class CharacterSwimExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "60830,53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            Core.GameObject.spawn({guid: "60830", transform: new Type.Transform(new Type.Vector(600, 0, 0), new Type.Rotation(0, 0, 90), new Type.Vector(20, 20, 20))});
            Core.GameObject.spawn({guid: "SwimmingVolume", transform: new Type.Transform(new Type.Vector(675, 0, 975), new Type.Rotation(0, 0, 90), new Type.Vector(10, 20, 20))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 600;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：按下键盘“1”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法：按住键盘“Up”，角色上浮
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCharacter.swimUp(5);
            });
            // 添加一个按键方法：按住键盘“Down”，角色下潜
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCharacter.swimDown(5);
            });
            // 添加一个按键方法：按下键盘“空格”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.SpaceBar, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原游泳速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.swimUp(10)
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1000);
                    // 2.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1201);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### canSetAppearanceData <Score text="canSetAppearanceData" /> 

• `get` **canSetAppearanceData**(): `boolean`

是否可以设置角色形象数据

#### Returns

`boolean`

___

### canStandOn <Score text="canStandOn" /> 

• `get` **canStandOn**(): `boolean` 

是否可站立


::: warning Precautions

角色是否可以被其他玩家站立。true表示其他角色可以站到玩家头上。false表示其他角色不可以站到玩家头上。

:::

使用示例:提供按键方法切换当前角色的碰撞属性并生成默认角色与当前角色产生碰撞交互查看效果。
```ts
@Core.Class
export default class CharacterCollisionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性
            myCharacter.capsuleCorrectionEnabled = true;
            // 添加一个按键方法：按下键盘“1”，开启/关闭角色与其他角色的碰撞并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.collisionWithOtherCharacterEnabled = !myCharacter.collisionWithOtherCharacterEnabled;
                console.log("当前角色与其他角色碰撞 " + myCharacter.collisionWithOtherCharacterEnabled);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.canStandOn = !myCharacter.canStandOn;
                console.log("当前角色可被站立 " + myCharacter.canStandOn);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Type.Vector(50, 50, 165));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```

#### Returns

`boolean`

true 其他角色可以站到玩家头上  false 其他角色不可以站到玩家头上

• `set` **canStandOn**(`CanStepUpOn`): `void` 

是否可站立


::: warning Precautions

角色是否可以被其他玩家站立。true表示其他角色可以站到玩家头上。false表示其他角色不可以站到玩家头上。

:::

使用示例:提供按键方法切换当前角色的碰撞属性并生成默认角色与当前角色产生碰撞交互查看效果。
```ts
@Core.Class
export default class CharacterCollisionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性
            myCharacter.capsuleCorrectionEnabled = true;
            // 添加一个按键方法：按下键盘“1”，开启/关闭角色与其他角色的碰撞并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.collisionWithOtherCharacterEnabled = !myCharacter.collisionWithOtherCharacterEnabled;
                console.log("当前角色与其他角色碰撞 " + myCharacter.collisionWithOtherCharacterEnabled);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.canStandOn = !myCharacter.canStandOn;
                console.log("当前角色可被站立 " + myCharacter.canStandOn);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Type.Vector(50, 50, 166));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `CanStepUpOn` | `boolean` |


___

### capsuleCorrectionEnabled <Score text="capsuleCorrectionEnabled" /> 

• `get` **capsuleCorrectionEnabled**(): `boolean` 

使用胶囊体修正


::: warning Precautions

角色当前是否使用胶囊体修。true代表应用角色编辑中的数据自动计算胶囊体大小。false代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。

:::

使用示例:提供按键方法切换当前角色的碰撞属性并生成默认角色与当前角色产生碰撞交互查看效果。
```ts
@Core.Class
export default class CharacterCollisionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性
            myCharacter.capsuleCorrectionEnabled = true;
            // 添加一个按键方法：按下键盘“1”，开启/关闭角色与其他角色的碰撞并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.collisionWithOtherCharacterEnabled = !myCharacter.collisionWithOtherCharacterEnabled;
                console.log("当前角色与其他角色碰撞 " + myCharacter.collisionWithOtherCharacterEnabled);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.canStandOn = !myCharacter.canStandOn;
                console.log("当前角色可被站立 " + myCharacter.canStandOn);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Type.Vector(50, 50, 162));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```

#### Returns

`boolean`

• `set` **capsuleCorrectionEnabled**(`usedCapsuleCorrection`): `void` 

使用胶囊体修正


::: warning Precautions

角色当前是否使用胶囊体修。true代表应用角色编辑中的数据自动计算胶囊体大小。false代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。

:::

使用示例:提供按键方法切换当前角色的碰撞属性并生成默认角色与当前角色产生碰撞交互查看效果。
```ts
@Core.Class
export default class CharacterCollisionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性
            myCharacter.capsuleCorrectionEnabled = true;
            // 添加一个按键方法：按下键盘“1”，开启/关闭角色与其他角色的碰撞并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.collisionWithOtherCharacterEnabled = !myCharacter.collisionWithOtherCharacterEnabled;
                console.log("当前角色与其他角色碰撞 " + myCharacter.collisionWithOtherCharacterEnabled);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.canStandOn = !myCharacter.canStandOn;
                console.log("当前角色可被站立 " + myCharacter.canStandOn);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Type.Vector(50, 50, 163));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `usedCapsuleCorrection` | `boolean` |


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

碰撞形状大小


::: warning Precautions

角色碰撞盒形状的大小，决定角色与场景对象交互时检测碰撞范围的大小。

:::

使用示例:提供按键方法切换当前角色的碰撞属性并生成默认角色与当前角色产生碰撞交互查看效果。
```ts
@Core.Class
export default class CharacterCollisionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性
            myCharacter.capsuleCorrectionEnabled = true;
            // 添加一个按键方法：按下键盘“1”，开启/关闭角色与其他角色的碰撞并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.collisionWithOtherCharacterEnabled = !myCharacter.collisionWithOtherCharacterEnabled;
                console.log("当前角色与其他角色碰撞 " + myCharacter.collisionWithOtherCharacterEnabled);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.canStandOn = !myCharacter.canStandOn;
                console.log("当前角色可被站立 " + myCharacter.canStandOn);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Type.Vector(50, 50, 161));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```

#### Returns

[`Vector`](Type.Vector.md)

___

### collisionShape <Score text="collisionShape" /> 

• `get` **collisionShape**(): [`CustomShapeType`](../enums/Gameplay.CustomShapeType.md) 

碰撞形状


::: warning Precautions

角色碰撞盒的形状，决定角色与场景对象交互时检测碰撞范围的形状。

:::

使用示例:提供按键方法切换当前角色的碰撞属性并生成默认角色与当前角色产生碰撞交互查看效果。
```ts
@Core.Class
export default class CharacterCollisionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性
            myCharacter.capsuleCorrectionEnabled = true;
            // 添加一个按键方法：按下键盘“1”，开启/关闭角色与其他角色的碰撞并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.collisionWithOtherCharacterEnabled = !myCharacter.collisionWithOtherCharacterEnabled;
                console.log("当前角色与其他角色碰撞 " + myCharacter.collisionWithOtherCharacterEnabled);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.canStandOn = !myCharacter.canStandOn;
                console.log("当前角色可被站立 " + myCharacter.canStandOn);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Type.Vector(50, 50, 160));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```

#### Returns

[`CustomShapeType`](../enums/Gameplay.CustomShapeType.md)

___

### collisionWithOtherCharacterEnabled <Score text="collisionWithOtherCharacterEnabled" /> 

• `get` **collisionWithOtherCharacterEnabled**(): `boolean` 

启用与角色的碰撞


::: warning Precautions

角色当前是否可以与其他角色产生碰撞。true表示角色可以与其他角色碰撞，false表示角色不能与其他角色产生碰撞。

:::

使用示例:提供按键方法切换当前角色的碰撞属性并生成默认角色与当前角色产生碰撞交互查看效果。
```ts
@Core.Class
export default class CharacterCollisionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性
            myCharacter.capsuleCorrectionEnabled = true;
            // 添加一个按键方法：按下键盘“1”，开启/关闭角色与其他角色的碰撞并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.collisionWithOtherCharacterEnabled = !myCharacter.collisionWithOtherCharacterEnabled;
                console.log("当前角色与其他角色碰撞 " + myCharacter.collisionWithOtherCharacterEnabled);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.canStandOn = !myCharacter.canStandOn;
                console.log("当前角色可被站立 " + myCharacter.canStandOn);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Type.Vector(50, 50, 163));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```

#### Returns

`boolean`

• `set` **collisionWithOtherCharacterEnabled**(`value`): `void`

启用与角色的碰撞

::: warning Precautions

角色当前是否可以与其他角色产生碰撞。true表示角色可以与其他角色碰撞，false表示角色不能与其他角色产生碰撞。

:::

使用示例:提供按键方法切换当前角色的碰撞属性并生成默认角色与当前角色产生碰撞交互查看效果。
```ts
@Core.Class
export default class CharacterCollisionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性
            myCharacter.capsuleCorrectionEnabled = true;
            // 添加一个按键方法：按下键盘“1”，开启/关闭角色与其他角色的碰撞并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.collisionWithOtherCharacterEnabled = !myCharacter.collisionWithOtherCharacterEnabled;
                console.log("当前角色与其他角色碰撞 " + myCharacter.collisionWithOtherCharacterEnabled);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.canStandOn = !myCharacter.canStandOn;
                console.log("当前角色可被站立 " + myCharacter.canStandOn);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Type.Vector(50, 50, 164));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### crouchEnabled <Score text="crouchEnabled" /> 

• `get` **crouchEnabled**(): `boolean` 

启用下蹲能力


::: warning Precautions

当前角色是否启用下蹲能力。true表示角色可以下蹲，false表示角色不可下蹲。

:::

使用示例:生成草丛和拱门并添加触发器，角色进入草丛蹲下，离开站起。修改角色下蹲相关属性并提供按键方法启用/禁用下蹲能力。
```ts
@Core.Class
export default class CharacterCrouchExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "54834,36851";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成草丛和拱门
            Core.GameObject.spawn({guid: "54834", transform: new Type.Transform(new Type.Vector(300, 0, 0), Type.Rotation.zero, new Type.Vector(2, 2, 2))});
            Core.GameObject.spawn({guid: "36851", transform: new Type.Transform(new Type.Vector(300, 210, 0), new Type.Rotation(0, 0, 90), new Type.Vector(2, 1, 2))});
            // 生成触发器并添加委托函数：进入触发器的角色蹲下，离开触发器站起
            let tri = Core.GameObject.spawn({guid: "Trigger", transform: new Type.Transform(new Type.Vector(300, 0, 50), Type.Rotation.zero, new Type.Vector(2, 2, 1))}) as Gameplay.Trigger;
            tri.onEnter.add((character: Character) => {
                character.crouch(true);
                setTimeout(() => {
                    console.log("当前角色下蹲 " + character.isCrouching);
                }, 500);
            });
            tri.onLeave.add((character: Character) => {
                character.crouch(false);
                console.log("当前角色下蹲 " + character.isCrouching);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 地面蹲伏行走时的最大移动速度100
            myCharacter.maxWalkSpeedCrouched = 100;
            // 下蹲后高度为100
            myCharacter.crouchedHeight = 100;
            // 添加一个按键方法：按下键盘“1”，启用/禁用下蹲能力
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.crouchEnabled = !myCharacter.crouchEnabled;
                console.log("当前角色是否能下蹲 " + myCharacter.crouchEnabled);
            });
        }
    }
}
```

#### Returns

`boolean`

• `set` **crouchEnabled**(`canCrouch`): `void` 

启用下蹲能力


::: warning Precautions

当前角色是否启用下蹲能力。true表示角色可以下蹲，false表示角色不可下蹲。

:::

使用示例:生成草丛和拱门并添加触发器，角色进入草丛蹲下，离开站起。修改角色下蹲相关属性并提供按键方法启用/禁用下蹲能力。
```ts
@Core.Class
export default class CharacterCrouchExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "54834,36851";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成草丛和拱门
            Core.GameObject.spawn({guid: "54834", transform: new Type.Transform(new Type.Vector(300, 0, 0), Type.Rotation.zero, new Type.Vector(2, 2, 2))});
            Core.GameObject.spawn({guid: "36851", transform: new Type.Transform(new Type.Vector(300, 210, 0), new Type.Rotation(0, 0, 90), new Type.Vector(2, 1, 2))});
            // 生成触发器并添加委托函数：进入触发器的角色蹲下，离开触发器站起
            let tri = Core.GameObject.spawn({guid: "Trigger", transform: new Type.Transform(new Type.Vector(300, 0, 50), Type.Rotation.zero, new Type.Vector(2, 2, 1))}) as Gameplay.Trigger;
            tri.onEnter.add((character: Character) => {
                character.crouch(true);
                setTimeout(() => {
                    console.log("当前角色下蹲 " + character.isCrouching);
                }, 500);
            });
            tri.onLeave.add((character: Character) => {
                character.crouch(false);
                console.log("当前角色下蹲 " + character.isCrouching);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 地面蹲伏行走时的最大移动速度100
            myCharacter.maxWalkSpeedCrouched = 100;
            // 下蹲后高度为100
            myCharacter.crouchedHeight = 100;
            // 添加一个按键方法：按下键盘“2”，启用/禁用下蹲能力
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.crouchEnabled = !myCharacter.crouchEnabled;
                console.log("当前角色是否能下蹲 " + myCharacter.crouchEnabled);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `canCrouch` | `boolean` |


___

### crouchedHeight <Score text="crouchedHeight" /> 

• `get` **crouchedHeight**(): `number` 

下蹲时碰撞盒高度


::: warning Precautions

角色下蹲状态下，碰撞盒的高度。

:::

使用示例:生成草丛和拱门并添加触发器，角色进入草丛蹲下，离开站起。修改角色下蹲相关属性并提供按键方法启用/禁用下蹲能力。
```ts
@Core.Class
export default class CharacterCrouchExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "54834,36851";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成草丛和拱门
            Core.GameObject.spawn({guid: "54834", transform: new Type.Transform(new Type.Vector(300, 0, 0), Type.Rotation.zero, new Type.Vector(2, 2, 2))});
            Core.GameObject.spawn({guid: "36851", transform: new Type.Transform(new Type.Vector(300, 210, 0), new Type.Rotation(0, 0, 90), new Type.Vector(2, 1, 2))});
            // 生成触发器并添加委托函数：进入触发器的角色蹲下，离开触发器站起
            let tri = Core.GameObject.spawn({guid: "Trigger", transform: new Type.Transform(new Type.Vector(300, 0, 50), Type.Rotation.zero, new Type.Vector(2, 2, 1))}) as Gameplay.Trigger;
            tri.onEnter.add((character: Character) => {
                character.crouch(true);
                setTimeout(() => {
                    console.log("当前角色下蹲 " + character.isCrouching);
                }, 500);
            });
            tri.onLeave.add((character: Character) => {
                character.crouch(false);
                console.log("当前角色下蹲 " + character.isCrouching);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 地面蹲伏行走时的最大移动速度100
            myCharacter.maxWalkSpeedCrouched = 100;
            // 下蹲后高度为100
            myCharacter.crouchedHeight = 100;
            // 添加一个按键方法：按下键盘“1”，启用/禁用下蹲能力
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.crouchEnabled = !myCharacter.crouchEnabled;
                console.log("当前角色是否能下蹲 " + myCharacter.crouchEnabled);
            });
        }
    }
}
```

#### Returns

`number`

• `set` **crouchedHeight**(`InCrouchedHeight`): `void` 

下蹲时碰撞盒高度


::: warning Precautions

角色下蹲状态下，碰撞盒的高度。

:::

使用示例:生成草丛和拱门并添加触发器，角色进入草丛蹲下，离开站起。修改角色下蹲相关属性并提供按键方法启用/禁用下蹲能力。
```ts
@Core.Class
export default class CharacterCrouchExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "54834,36851";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成草丛和拱门
            Core.GameObject.spawn({guid: "54834", transform: new Type.Transform(new Type.Vector(300, 0, 0), Type.Rotation.zero, new Type.Vector(2, 2, 2))});
            Core.GameObject.spawn({guid: "36851", transform: new Type.Transform(new Type.Vector(300, 210, 0), new Type.Rotation(0, 0, 90), new Type.Vector(2, 1, 2))});
            // 生成触发器并添加委托函数：进入触发器的角色蹲下，离开触发器站起
            let tri = Core.GameObject.spawn({guid: "Trigger", transform: new Type.Transform(new Type.Vector(300, 0, 50), Type.Rotation.zero, new Type.Vector(2, 2, 1))}) as Gameplay.Trigger;
            tri.onEnter.add((character: Character) => {
                character.crouch(true);
                setTimeout(() => {
                    console.log("当前角色下蹲 " + character.isCrouching);
                }, 500);
            });
            tri.onLeave.add((character: Character) => {
                character.crouch(false);
                console.log("当前角色下蹲 " + character.isCrouching);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 地面蹲伏行走时的最大移动速度100
            myCharacter.maxWalkSpeedCrouched = 100;
            // 下蹲后高度为100
            myCharacter.crouchedHeight = 100;
            // 添加一个按键方法：按下键盘“2”，启用/禁用下蹲能力
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.crouchEnabled = !myCharacter.crouchEnabled;
                console.log("当前角色是否能下蹲 " + myCharacter.crouchEnabled);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InCrouchedHeight` | `number` |


___

### currentBasicStance <Score text="currentBasicStance" /> 

• `get` **currentBasicStance**(): [`BasicStance`](Gameplay.BasicStance.md)

当前正在播放的基础姿态

#### Returns

[`BasicStance`](Gameplay.BasicStance.md)

___

### currentStance <Score text="currentStance" /> 

• `get` **currentStance**(): [`Stance`](Gameplay.Stance.md)

当前正在播放的二级姿态

#### Returns

[`Stance`](Gameplay.Stance.md)


### displayName <Score text="displayName" /> 

• `get` **displayName**(): `string`

角色名称

::: warning Precautions

会显示在角色头顶UI上

:::

#### Returns

`string`

• `set` **displayName**(`inName`): `void`

角色名称

::: warning Precautions

会显示在角色头顶UI上

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `inName` | `string` |


___

### forceUpdateMovement <Score text="forceUpdateMovement" /> 

• `set` **forceUpdateMovement**(`value`): `void` 

强制更新移动


::: warning Precautions

角色当前是否启用强制更新移动，true表示角色会因碰撞被动位移，false表示角色不会因碰撞被动位移。

:::

使用示例:场景中生成移动的立方体，提供按键方法启用/禁用角色强制更新移动
```ts
@Core.Class
export default class CharacterForceMovementExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "7669";
    // 声明变量
    cube: Core.GameObject;
    stride: Type.Vector;
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 移动步长：Y轴单位距离
            this.stride = new Type.Vector(0, 1, 0);
            // 在前方生成一个立方体，并在onUpdate里左右移动
            let spawnTransform = new Type.Transform(new Type.Vector(200, 0, 0), Type.Rotation.zero, Type.Vector.one);
            this.cube = Core.GameObject.spawn({guid: "7669", transform: spawnTransform});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法：按下键盘“1”，启用/禁用【强制更新移动】
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.forceUpdateMovement = !myCharacter.forceUpdateMovement;
                console.log("当前角色是否强制更新移动: "+ myCharacter.forceUpdateMovement);
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 当立方体不为空时按步长每帧更新立方体世界坐标（左右移动）
            if(this.cube) {
                this.cube.worldLocation = this.cube.worldLocation.add(new Type.Vector(0,1,0));
                // 当立方体y轴世界坐标绝对值超过1000时，步长取反
                if(Math.abs(this.cube.worldLocation.y) > 1000) {
                    this.stride.multiply(-1);
                }
            }
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |



### gravityScale <Score text="gravityScale" /> 

• `get` **gravityScale**(): `number` 

重力倍率


::: warning Precautions

重力倍率；范围0~10, 过大和过小的值都会被限制。

:::

使用示例:设置下落相关属性并提供按键方法使角色跳跃后查看下落效果
```ts
@Core.Class
export default class CharacterFallExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置下落属性
            myCharacter.maxFallingSpeed = 1024;
// 最大下落速度为1024
            myCharacter.brakingDecelerationFalling = 100;
// 下落制动速率为100
            myCharacter.airControl = 0.5;
// 按地面移动速率的0.5倍控制下落过程
            myCharacter.airControlBoostMultiplier = 2;
// 下落速度小于阈值时【airControl】乘2
            myCharacter.airControlBoostVelocityThreshold = 512;
// 下落速度阈值512
            myCharacter.gravityScale = 2;
// 2倍重力
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxJumpHeight = 1009;
                myCharacter.jump();
            });
        }
    }
}
```

#### Returns

`number`

• `set` **gravityScale**(`newGravityScale`): `void` 

重力倍率


::: warning Precautions

重力倍率；范围0~10, 过大和过小的值都会被限制。

:::

使用示例:设置下落相关属性并提供按键方法使角色跳跃后查看下落效果
```ts
@Core.Class
export default class CharacterFallExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置下落属性
            myCharacter.maxFallingSpeed = 1024;
// 最大下落速度为1024
            myCharacter.brakingDecelerationFalling = 100;
// 下落制动速率为100
            myCharacter.airControl = 0.5;
// 按地面移动速率的0.5倍控制下落过程
            myCharacter.airControlBoostMultiplier = 2;
// 下落速度小于阈值时【airControl】乘2
            myCharacter.airControlBoostVelocityThreshold = 512;
// 下落速度阈值512
            myCharacter.gravityScale = 2;
// 2倍重力
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxJumpHeight = 1010;
                myCharacter.jump();
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `newGravityScale` | `number` |


___

### groundFriction <Score text="groundFriction" /> 

• `get` **groundFriction**(): `number` 

地面摩檫力


::: warning Precautions

角色在地面上受到的摩擦力大小。在开启单独制动摩擦时该值不生效。

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“1”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

#### Returns

`number`

• `set` **groundFriction**(`inGroundFriction`): `void` 

地面摩檫力


::: warning Precautions

角色在地面上受到的摩擦力大小。在开启单独制动摩擦时该值不生效。

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“2”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

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

是否正在蹲下


::: warning Precautions

角色当前的下蹲状态。true表示正在下蹲，false表示不在下蹲。

:::

使用示例:生成草丛和拱门并添加触发器，角色进入草丛蹲下，离开站起。修改角色下蹲相关属性并提供按键方法启用/禁用下蹲能力。
```ts
@Core.Class
export default class CharacterCrouchExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "54834,36851";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成草丛和拱门
            Core.GameObject.spawn({guid: "54834", transform: new Type.Transform(new Type.Vector(300, 0, 0), Type.Rotation.zero, new Type.Vector(2, 2, 2))});
            Core.GameObject.spawn({guid: "36851", transform: new Type.Transform(new Type.Vector(300, 210, 0), new Type.Rotation(0, 0, 90), new Type.Vector(2, 1, 2))});
            // 生成触发器并添加委托函数：进入触发器的角色蹲下，离开触发器站起
            let tri = Core.GameObject.spawn({guid: "Trigger", transform: new Type.Transform(new Type.Vector(300, 0, 50), Type.Rotation.zero, new Type.Vector(2, 2, 1))}) as Gameplay.Trigger;
            tri.onEnter.add((character: Character) => {
                character.crouch(true);
                setTimeout(() => {
                    console.log("当前角色下蹲 " + character.isCrouching);
                }, 500);
            });
            tri.onLeave.add((character: Character) => {
                character.crouch(false);
                console.log("当前角色下蹲 " + character.isCrouching);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 地面蹲伏行走时的最大移动速度100
            myCharacter.maxWalkSpeedCrouched = 100;
            // 下蹲后高度为100
            myCharacter.crouchedHeight = 100;
            // 添加一个按键方法：按下键盘“3”，启用/禁用下蹲能力
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.crouchEnabled = !myCharacter.crouchEnabled;
                console.log("当前角色是否能下蹲 " + myCharacter.crouchEnabled);
            });
        }
    }
}
```

#### Returns

`boolean`

___

### isJumping <Score text="isJumping" /> 

• `get` **isJumping**(): `boolean` 

正在跳跃


::: warning Precautions

当前角色的跳跃状态。true表示正在跳跃，false表示不在跳跃。

:::

使用示例:修改角色跳跃相关属性并提供按键方法使角色跳跃和启用/禁用跳跃能力
```ts
@Core.Class
export default class CharacterJumpExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置跳跃属性
            myCharacter.maxJumpHeight = 300;
// 最大跳跃高度为300
            myCharacter.jumpMaxCount = 3;
// 最高三连跳
            // 添加一个按键方法：按下键盘“1”，角色跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jump();
                setTimeout(() => {
                    console.log("当前角色是否在跳跃 " + myCharacter.isJumping);
                }, 100);
            });
            // 添加一个按键方法：按下键盘“4”，启用/禁用跳跃能力。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jumpEnabled = !myCharacter.jumpEnabled;
                console.log("当前角色跳跃能力 " + myCharacter.jumpEnabled);
            });
        }
    }
}
```

#### Returns

`boolean`

___

### isMoving <Score text="isMoving" /> 

• `get` **isMoving**(): `boolean` 

正在移动


::: warning Precautions

当前角色是否移动状态。true表示正在移动，角色速度不为0。false表示未移动，角色速度为0。

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“1”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

#### Returns

`boolean`

___

### jumpEnabled <Score text="jumpEnabled" /> 

• `get` **jumpEnabled**(): `boolean` 

启用跳跃能力


::: warning Precautions

当前角色是否可以跳跃。true表示角色可以跳跃，false表示角色不可跳跃。

:::

使用示例:修改角色跳跃相关属性并提供按键方法使角色跳跃和启用/禁用跳跃能力
```ts
@Core.Class
export default class CharacterJumpExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置跳跃属性
            myCharacter.maxJumpHeight = 300;
// 最大跳跃高度为300
            myCharacter.jumpMaxCount = 3;
// 最高三连跳
            // 添加一个按键方法：按下键盘“1”，角色跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jump();
                setTimeout(() => {
                    console.log("当前角色是否在跳跃 " + myCharacter.isJumping);
                }, 100);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用跳跃能力。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jumpEnabled = !myCharacter.jumpEnabled;
                console.log("当前角色跳跃能力 " + myCharacter.jumpEnabled);
            });
        }
    }
}
```

#### Returns

`boolean`

• `set` **jumpEnabled**(`value`): `void` 

启用跳跃能力


::: warning Precautions

当前角色是否可以跳跃。true表示角色可以跳跃，false表示角色不可跳跃。

:::

使用示例:修改角色跳跃相关属性并提供按键方法使角色跳跃和启用/禁用跳跃能力
```ts
@Core.Class
export default class CharacterJumpExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置跳跃属性
            myCharacter.maxJumpHeight = 300;
// 最大跳跃高度为300
            myCharacter.jumpMaxCount = 3;
// 最高三连跳
            // 添加一个按键方法：按下键盘“1”，角色跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jump();
                setTimeout(() => {
                    console.log("当前角色是否在跳跃 " + myCharacter.isJumping);
                }, 100);
            });
            // 添加一个按键方法：按下键盘“3”，启用/禁用跳跃能力。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jumpEnabled = !myCharacter.jumpEnabled;
                console.log("当前角色跳跃能力 " + myCharacter.jumpEnabled);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### jumpMaxCount <Score text="jumpMaxCount" /> 

• `get` **jumpMaxCount**(): `number` 

最大可跳跃次数


::: warning Precautions

角色能够执行跳跃的最大次数。

:::

使用示例:修改角色跳跃相关属性并提供按键方法使角色跳跃和启用/禁用跳跃能力
```ts
@Core.Class
export default class CharacterJumpExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置跳跃属性
            myCharacter.maxJumpHeight = 300;
// 最大跳跃高度为300
            myCharacter.jumpMaxCount = 3;
// 最高三连跳
            // 添加一个按键方法：按下键盘“1”，角色跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jump();
                setTimeout(() => {
                    console.log("当前角色是否在跳跃 " + myCharacter.isJumping);
                }, 100);
            });
            // 添加一个按键方法：按下键盘“7”，启用/禁用跳跃能力。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jumpEnabled = !myCharacter.jumpEnabled;
                console.log("当前角色跳跃能力 " + myCharacter.jumpEnabled);
            });
        }
    }
}
```

#### Returns

`number`

• `set` **jumpMaxCount**(`InJumpMaxCount`): `void` 

最大可跳跃次数


::: warning Precautions

角色能够执行跳跃的最大次数。

:::

使用示例:修改角色跳跃相关属性并提供按键方法使角色跳跃和启用/禁用跳跃能力
```ts
@Core.Class
export default class CharacterJumpExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置跳跃属性
            myCharacter.maxJumpHeight = 300;
// 最大跳跃高度为300
            myCharacter.jumpMaxCount = 3;
// 最高三连跳
            // 添加一个按键方法：按下键盘“1”，角色跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jump();
                setTimeout(() => {
                    console.log("当前角色是否在跳跃 " + myCharacter.isJumping);
                }, 100);
            });
            // 添加一个按键方法：按下键盘“8”，启用/禁用跳跃能力。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jumpEnabled = !myCharacter.jumpEnabled;
                console.log("当前角色跳跃能力 " + myCharacter.jumpEnabled);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InJumpMaxCount` | `number` |



### maxAcceleration <Score text="maxAcceleration" /> 

• `get` **maxAcceleration**(): `number` 

最大加速度


::: warning Precautions

角色移动时，角色可以达到的最大加速度

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“1”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

#### Returns

`number`

• `set` **maxAcceleration**(`InMaxAcceleration`): `void` 

最大加速度


::: warning Precautions

角色移动时，角色可以达到的最大加速度

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“2”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxAcceleration` | `number` |


___

### maxFallingSpeed <Score text="maxFallingSpeed" /> 

• `get` **maxFallingSpeed**(): `number` 

最大下落速度


::: warning Precautions

角色在下落状态下移动时，角色可达到的最大移动速度

:::

使用示例:设置下落相关属性并提供按键方法使角色跳跃后查看下落效果
```ts
@Core.Class
export default class CharacterFallExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置下落属性
            myCharacter.maxFallingSpeed = 1024;
// 最大下落速度为1024
            myCharacter.brakingDecelerationFalling = 100;
// 下落制动速率为100
            myCharacter.airControl = 0.5;
// 按地面移动速率的0.5倍控制下落过程
            myCharacter.airControlBoostMultiplier = 2;
// 下落速度小于阈值时【airControl】乘2
            myCharacter.airControlBoostVelocityThreshold = 512;
// 下落速度阈值512
            myCharacter.gravityScale = 2;
// 2倍重力
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxJumpHeight = 1000;
                myCharacter.jump();
            });
        }
    }
}
```

#### Returns

`number`

• `set` **maxFallingSpeed**(`speed`): `void` 

最大下落速度


::: warning Precautions

角色在下落状态下移动时，角色可达到的最大移动速度

:::

使用示例:设置下落相关属性并提供按键方法使角色跳跃后查看下落效果
```ts
@Core.Class
export default class CharacterFallExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置下落属性
            myCharacter.maxFallingSpeed = 1024;
// 最大下落速度为1024
            myCharacter.brakingDecelerationFalling = 100;
// 下落制动速率为100
            myCharacter.airControl = 0.5;
// 按地面移动速率的0.5倍控制下落过程
            myCharacter.airControlBoostMultiplier = 2;
// 下落速度小于阈值时【airControl】乘2
            myCharacter.airControlBoostVelocityThreshold = 512;
// 下落速度阈值512
            myCharacter.gravityScale = 2;
// 2倍重力
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxJumpHeight = 1001;
                myCharacter.jump();
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `speed` | `number` |


___

### maxFlySpeed <Score text="maxFlySpeed" /> 

• `get` **maxFlySpeed**(): `number` 

最大飞行速度


::: warning Precautions

角色在飞行状态下进行移动时，角色可达到的最大移动速度

:::

使用示例:添加按键方法使角色切换飞行状态，加速飞行和上升飞行。通过修改飞行相关属性和使用姿态和动画的播放适配对应的飞行动作。
```ts
@Core.Class
export default class CharacterFlyExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 加载喷射加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：键盘“1”，角色切换为飞行
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToFlying();
            });
            // 添加一个按键方法：按下键盘“2”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放飞行动画，修改飞行速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxFlySpeed = 2000;
                    myCharacter.brakingDecelerationFlying = 5000;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原飞行速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxFlySpeed = 500;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.addMovement(new Type.Vector(0, 0, 5));
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxFlySpeed = 500;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 2000);
                    // 2.2秒后还原角色飞行制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationFlying = 300;
                    }, 2200);
            });
        }
    }
}
```

#### Returns

`number`

• `set` **maxFlySpeed**(`InMaxFlySpeed`): `void` 

最大飞行速度


::: warning Precautions

角色在飞行状态下进行移动时，角色可达到的最大移动速度

:::

使用示例:添加按键方法使角色切换飞行状态，加速飞行和上升飞行。通过修改飞行相关属性和使用姿态和动画的播放适配对应的飞行动作。
```ts
@Core.Class
export default class CharacterFlyExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 加载喷射加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：键盘“1”，角色切换为飞行
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToFlying();
            });
            // 添加一个按键方法：按下键盘“2”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放飞行动画，修改飞行速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxFlySpeed = 2000;
                    myCharacter.brakingDecelerationFlying = 5000;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原飞行速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxFlySpeed = 500;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.addMovement(new Type.Vector(0, 0, 5));
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxFlySpeed = 500;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 2000);
                    // 2.2秒后还原角色飞行制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationFlying = 300;
                    }, 2201);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxFlySpeed` | `number` |


___

### maxJumpHeight <Score text="maxJumpHeight" /> 

• `get` **maxJumpHeight**(): `number` 

最大跳跃高度


::: warning Precautions

角色跳跃时，从起跳位置到最高位置的距离。该值受重力影响。

:::

使用示例:修改角色跳跃相关属性并提供按键方法使角色跳跃和启用/禁用跳跃能力
```ts
@Core.Class
export default class CharacterJumpExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置跳跃属性
            myCharacter.maxJumpHeight = 300;
// 最大跳跃高度为300
            myCharacter.jumpMaxCount = 3;
// 最高三连跳
            // 添加一个按键方法：按下键盘“1”，角色跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jump();
                setTimeout(() => {
                    console.log("当前角色是否在跳跃 " + myCharacter.isJumping);
                }, 100);
            });
            // 添加一个按键方法：按下键盘“5”，启用/禁用跳跃能力。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jumpEnabled = !myCharacter.jumpEnabled;
                console.log("当前角色跳跃能力 " + myCharacter.jumpEnabled);
            });
        }
    }
}
```

#### Returns

`number`

• `set` **maxJumpHeight**(`InMaxJumpHeight`): `void` 

最大跳跃高度


::: warning Precautions

角色跳跃时，从起跳位置到最高位置的距离。该值受重力影响。

:::

使用示例:修改角色跳跃相关属性并提供按键方法使角色跳跃和启用/禁用跳跃能力
```ts
@Core.Class
export default class CharacterJumpExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置跳跃属性
            myCharacter.maxJumpHeight = 300;
// 最大跳跃高度为300
            myCharacter.jumpMaxCount = 3;
// 最高三连跳
            // 添加一个按键方法：按下键盘“1”，角色跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jump();
                setTimeout(() => {
                    console.log("当前角色是否在跳跃 " + myCharacter.isJumping);
                }, 100);
            });
            // 添加一个按键方法：按下键盘“6”，启用/禁用跳跃能力。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jumpEnabled = !myCharacter.jumpEnabled;
                console.log("当前角色跳跃能力 " + myCharacter.jumpEnabled);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxJumpHeight` | `number` |


___

### maxStepHeight <Score text="maxStepHeight" /> 

• `get` **maxStepHeight**(): `number` 

最大可跨越高度


::: warning Precautions

角色跨越台阶时，台阶的最大高度 ，大于等于该高度角色均无法跨越。

:::

使用示例:创建5个不同高度的立方体和创建5个不同坡度的锥体，提供按键方法修改最大可跨越高度和可行走的最大角度。
```ts
@Core.Class
export default class CharacterStepAndStandExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "7667,7669";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
         // 下列代码仅在服务端执行
         if(SystemUtil.isServer()) {
            // 创建5个不同高度的立方体：10，20，40，80，160
            let cubeHeight = [10, 20, 40, 80, 160];
            for (let i = 0;
i < cubeHeight.length;
i++) {
                Core.GameObject.spawn({guid: "7669", transform: new Type.Transform(new Type.Vector(250 * i, -500, 0), Type.Rotation.zero, new Type.Vector(2, 2, cubeHeight[i]))});
            }
            // 创建5个不同坡度的锥体:0，30，45，60，90
            let coneAngle = [0, 30, 45, 60, 90];
            for (let i = 0;
i < coneAngle.length;
i++) {
                Core.GameObject.spawn({guid: "7667", transform: new Type.Transform(new Type.Vector(250 * i, 500, 0), Type.Rotation.zero, new Type.Vector(2, 2, Math.tan(coneAngle[i] * Math.PI / 180)))});
            }
         }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法：按下键盘“1”，角色最大可跨越高度增加10
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxStepHeight += 10;
                console.log("角色最大可跨越高度：" + myCharacter.maxStepHeight);
            });
            // 添加一个按键方法：按下键盘“2”，角色最大可跨越高度减小10
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.maxStepHeight -= 10;
                console.log("角色最大可跨越高度：" + myCharacter.maxStepHeight);
            });
            // 添加一个按键方法：按下键盘“3”，角色可行走的最大角度增加5
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.walkableFloorAngle += 5;
                console.log("可行走的最大角度：" + myCharacter.walkableFloorAngle);
            });
            // 添加一个按键方法：按下键盘“4”，角色可行走的最大角度减小5
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                myCharacter.walkableFloorAngle -= 5;
                console.log("可行走的最大角度：" + myCharacter.walkableFloorAngle);
            });
        }
    }
}
```

#### Returns

`number`

• `set` **maxStepHeight**(`InMaxStepHeight`): `void` 

最大可跨越高度


::: warning Precautions

角色跨越台阶时，台阶的最大高度 ，大于等于该高度角色均无法跨越。

:::

使用示例:创建5个不同高度的立方体和创建5个不同坡度的锥体，提供按键方法修改最大可跨越高度和可行走的最大角度。
```ts
@Core.Class
export default class CharacterStepAndStandExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "7667,7669";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
         // 下列代码仅在服务端执行
         if(SystemUtil.isServer()) {
            // 创建5个不同高度的立方体：10，20，40，80，160
            let cubeHeight = [10, 20, 40, 80, 160];
            for (let i = 0;
i < cubeHeight.length;
i++) {
                Core.GameObject.spawn({guid: "7669", transform: new Type.Transform(new Type.Vector(250 * i, -500, 0), Type.Rotation.zero, new Type.Vector(2, 2, cubeHeight[i]))});
            }
            // 创建5个不同坡度的锥体:0，30，45，60，90
            let coneAngle = [0, 30, 45, 60, 90];
            for (let i = 0;
i < coneAngle.length;
i++) {
                Core.GameObject.spawn({guid: "7667", transform: new Type.Transform(new Type.Vector(250 * i, 500, 0), Type.Rotation.zero, new Type.Vector(2, 2, Math.tan(coneAngle[i] * Math.PI / 180)))});
            }
         }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法：按下键盘“1”，角色最大可跨越高度增加10
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxStepHeight += 10;
                console.log("角色最大可跨越高度：" + myCharacter.maxStepHeight);
            });
            // 添加一个按键方法：按下键盘“2”，角色最大可跨越高度减小10
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.maxStepHeight -= 10;
                console.log("角色最大可跨越高度：" + myCharacter.maxStepHeight);
            });
            // 添加一个按键方法：按下键盘“3”，角色可行走的最大角度增加5
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.walkableFloorAngle += 5;
                console.log("可行走的最大角度：" + myCharacter.walkableFloorAngle);
            });
            // 添加一个按键方法：按下键盘“4”，角色可行走的最大角度减小5
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                myCharacter.walkableFloorAngle -= 6;
                console.log("可行走的最大角度：" + myCharacter.walkableFloorAngle);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxStepHeight` | `number` |


___

### maxSwimSpeed <Score text="maxSwimSpeed" /> 

• `get` **maxSwimSpeed**(): `number` 

最大游泳速度


::: warning Precautions

角色在游泳状态下进行移动时，角色可达到的最大移动速度

:::

使用示例:生成拱形容器并适配游泳区域，添加按键方法使角色切换游泳状态，加速游泳和上浮游泳。通过修改游泳相关属性和使用姿态和动画的播放适配对应的游泳动作。
```ts
@Core.Class
export default class CharacterSwimExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "60830,53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            Core.GameObject.spawn({guid: "60830", transform: new Type.Transform(new Type.Vector(600, 0, 0), new Type.Rotation(0, 0, 90), new Type.Vector(20, 20, 20))});
            Core.GameObject.spawn({guid: "SwimmingVolume", transform: new Type.Transform(new Type.Vector(675, 0, 975), new Type.Rotation(0, 0, 90), new Type.Vector(10, 20, 20))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 600;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：按下键盘“1”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法：按住键盘“Up”，角色上浮
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCharacter.swimUp(5);
            });
            // 添加一个按键方法：按住键盘“Down”，角色下潜
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCharacter.swimDown(5);
            });
            // 添加一个按键方法：按下键盘“空格”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.SpaceBar, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原游泳速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.swimUp(10)
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1000);
                    // 2.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1200);
            });
        }
    }
}
```

#### Returns

`number`

• `set` **maxSwimSpeed**(`InMaxSwimSpeed`): `void` 

最大游泳速度


::: warning Precautions

角色在游泳状态下进行移动时，角色可达到的最大移动速度

:::

使用示例:生成拱形容器并适配游泳区域，添加按键方法使角色切换游泳状态，加速游泳和上浮游泳。通过修改游泳相关属性和使用姿态和动画的播放适配对应的游泳动作。
```ts
@Core.Class
export default class CharacterSwimExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "60830,53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            Core.GameObject.spawn({guid: "60830", transform: new Type.Transform(new Type.Vector(600, 0, 0), new Type.Rotation(0, 0, 90), new Type.Vector(20, 20, 20))});
            Core.GameObject.spawn({guid: "SwimmingVolume", transform: new Type.Transform(new Type.Vector(675, 0, 975), new Type.Rotation(0, 0, 90), new Type.Vector(10, 20, 20))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 600;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：按下键盘“1”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法：按住键盘“Up”，角色上浮
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCharacter.swimUp(5);
            });
            // 添加一个按键方法：按住键盘“Down”，角色下潜
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCharacter.swimDown(5);
            });
            // 添加一个按键方法：按下键盘“空格”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.SpaceBar, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原游泳速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.swimUp(10)
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1000);
                    // 2.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1201);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxSwimSpeed` | `number` |


___

### maxWalkSpeed <Score text="maxWalkSpeed" /> 

• `get` **maxWalkSpeed**(): `number` 

最大行走速度


::: warning Precautions

角色移动时，角色可以达到的最大速度

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“3”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

#### Returns

`number`

• `set` **maxWalkSpeed**(`InMaxWalkSpeed`): `void` 

最大行走速度


::: warning Precautions

角色移动时，角色可以达到的最大速度

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“4”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxWalkSpeed` | `number` |


___

### maxWalkSpeedCrouched <Score text="maxWalkSpeedCrouched" /> 

• `get` **maxWalkSpeedCrouched**(): `number` 

最大蹲伏行走速度


::: warning Precautions

角色在下蹲状态下移动时，角色可达到的最大移动速度

:::

使用示例:生成草丛和拱门并添加触发器，角色进入草丛蹲下，离开站起。修改角色下蹲相关属性并提供按键方法启用/禁用下蹲能力。
```ts
@Core.Class
export default class CharacterCrouchExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "54834,36851";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成草丛和拱门
            Core.GameObject.spawn({guid: "54834", transform: new Type.Transform(new Type.Vector(300, 0, 0), Type.Rotation.zero, new Type.Vector(2, 2, 2))});
            Core.GameObject.spawn({guid: "36851", transform: new Type.Transform(new Type.Vector(300, 210, 0), new Type.Rotation(0, 0, 90), new Type.Vector(2, 1, 2))});
            // 生成触发器并添加委托函数：进入触发器的角色蹲下，离开触发器站起
            let tri = Core.GameObject.spawn({guid: "Trigger", transform: new Type.Transform(new Type.Vector(300, 0, 50), Type.Rotation.zero, new Type.Vector(2, 2, 1))}) as Gameplay.Trigger;
            tri.onEnter.add((character: Character) => {
                character.crouch(true);
                setTimeout(() => {
                    console.log("当前角色下蹲 " + character.isCrouching);
                }, 500);
            });
            tri.onLeave.add((character: Character) => {
                character.crouch(false);
                console.log("当前角色下蹲 " + character.isCrouching);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 地面蹲伏行走时的最大移动速度100
            myCharacter.maxWalkSpeedCrouched = 100;
            // 下蹲后高度为100
            myCharacter.crouchedHeight = 100;
            // 添加一个按键方法：按下键盘“1”，启用/禁用下蹲能力
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.crouchEnabled = !myCharacter.crouchEnabled;
                console.log("当前角色是否能下蹲 " + myCharacter.crouchEnabled);
            });
        }
    }
}
```

#### Returns

`number`

• `set` **maxWalkSpeedCrouched**(`maxSpeed`): `void` 

最大蹲伏行走速度


::: warning Precautions

角色在下蹲状态下移动时，角色可达到的最大移动速度

:::

使用示例:生成草丛和拱门并添加触发器，角色进入草丛蹲下，离开站起。修改角色下蹲相关属性并提供按键方法启用/禁用下蹲能力。
```ts
@Core.Class
export default class CharacterCrouchExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "54834,36851";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成草丛和拱门
            Core.GameObject.spawn({guid: "54834", transform: new Type.Transform(new Type.Vector(300, 0, 0), Type.Rotation.zero, new Type.Vector(2, 2, 2))});
            Core.GameObject.spawn({guid: "36851", transform: new Type.Transform(new Type.Vector(300, 210, 0), new Type.Rotation(0, 0, 90), new Type.Vector(2, 1, 2))});
            // 生成触发器并添加委托函数：进入触发器的角色蹲下，离开触发器站起
            let tri = Core.GameObject.spawn({guid: "Trigger", transform: new Type.Transform(new Type.Vector(300, 0, 50), Type.Rotation.zero, new Type.Vector(2, 2, 1))}) as Gameplay.Trigger;
            tri.onEnter.add((character: Character) => {
                character.crouch(true);
                setTimeout(() => {
                    console.log("当前角色下蹲 " + character.isCrouching);
                }, 500);
            });
            tri.onLeave.add((character: Character) => {
                character.crouch(false);
                console.log("当前角色下蹲 " + character.isCrouching);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 地面蹲伏行走时的最大移动速度100
            myCharacter.maxWalkSpeedCrouched = 100;
            // 下蹲后高度为100
            myCharacter.crouchedHeight = 100;
            // 添加一个按键方法：按下键盘“2”，启用/禁用下蹲能力
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.crouchEnabled = !myCharacter.crouchEnabled;
                console.log("当前角色是否能下蹲 " + myCharacter.crouchEnabled);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxSpeed` | `number` |


___

### moveFacingDirection <Score text="moveFacingDirection" /> 

• `get` **moveFacingDirection**(): [`MoveFacingDirection`](../enums/Gameplay.MoveFacingDirection.md) 

运动面朝方向


::: warning Precautions

角色模型运动时朝向的方向。1. 始终朝向移动方向：主角模型面朝方向始终朝向移动方向。2. 始终朝向固定方向：主角模型面朝方向始终朝向固定方向。3. 始终朝向控制器方向：主角模型面朝方向始终朝向控制器

:::

使用示例:提供按键方法切换角色运动面朝方向和角色的运动时依据的正方向（并提供定轴方向）查看不同模式效果。
```ts
@Core.Class
export default class CharacterDirectionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置定轴方向
            myCharacter.movementAxisDirection = new Type.Vector(1, 0, 0);
            // 打印当前角色的运动轴和面朝方向
            console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
            // 添加一个按键方法：按下键盘“1”，切换角色的运动面朝方向
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.moveFacingDirection = (myCharacter.moveFacingDirection + 1) % 3;
                console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            });
            // 添加一个按键方法：按下键盘“2”，切换角色的运动时依据的正方向
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.movementDirection = (myCharacter.movementDirection + 1) % 3;
                console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
                if(myCharacter.movementDirection == 0) {
                    console.log("定轴方向 " + myCharacter.movementAxisDirection);
                }
            });
        }
    }
}
```

#### Returns

[`MoveFacingDirection`](../enums/Gameplay.MoveFacingDirection.md)

• `set` **moveFacingDirection**(`InMoveFacingDirection`): `void` 

运动面朝方向


::: warning Precautions

角色模型运动时朝向的方向。1. 始终朝向移动方向：主角模型面朝方向始终朝向移动方向。2. 始终朝向固定方向：主角模型面朝方向始终朝向固定方向。3. 始终朝向控制器方向：主角模型面朝方向始终朝向控制器

:::

使用示例:提供按键方法切换角色运动面朝方向和角色的运动时依据的正方向（并提供定轴方向）查看不同模式效果。
```ts
@Core.Class
export default class CharacterDirectionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置定轴方向
            myCharacter.movementAxisDirection = new Type.Vector(1, 0, 0);
            // 打印当前角色的运动轴和面朝方向
            console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
            // 添加一个按键方法：按下键盘“1”，切换角色的运动面朝方向
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.moveFacingDirection = (myCharacter.moveFacingDirection + 1) % 3;
                console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            });
            // 添加一个按键方法：按下键盘“2”，切换角色的运动时依据的正方向
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.movementDirection = (myCharacter.movementDirection + 1) % 3;
                console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
                if(myCharacter.movementDirection == 1) {
                    console.log("定轴方向 " + myCharacter.movementAxisDirection);
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMoveFacingDirection` | [`MoveFacingDirection`](../enums/Gameplay.MoveFacingDirection.md) |


___

### movementAxisDirection <Score text="movementAxisDirection" /> 

• `get` **movementAxisDirection**(): [`Vector`](Type.Vector.md) 

运动时依据的轴方向


::: warning Precautions

只有当前的MovementDirection为AxisDirection时有效

:::

使用示例:提供按键方法切换角色运动面朝方向和角色的运动时依据的正方向（并提供定轴方向）查看不同模式效果。
```ts
@Core.Class
export default class CharacterDirectionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置定轴方向
            myCharacter.movementAxisDirection = new Type.Vector(1, 0, 0);
            // 打印当前角色的运动轴和面朝方向
            console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
            // 添加一个按键方法：按下键盘“1”，切换角色的运动面朝方向
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.moveFacingDirection = (myCharacter.moveFacingDirection + 1) % 3;
                console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            });
            // 添加一个按键方法：按下键盘“2”，切换角色的运动时依据的正方向
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.movementDirection = (myCharacter.movementDirection + 1) % 3;
                console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
                if(myCharacter.movementDirection == 4) {
                    console.log("定轴方向 " + myCharacter.movementAxisDirection);
                }
            });
        }
    }
}
```

#### Returns

[`Vector`](Type.Vector.md)

• `set` **movementAxisDirection**(`InMovementAxisDirection`): `void` 

运动时依据的轴方向


::: warning Precautions

只有当前的MovementDirection为AxisDirection时有效

:::

使用示例:提供按键方法切换角色运动面朝方向和角色的运动时依据的正方向（并提供定轴方向）查看不同模式效果。
```ts
@Core.Class
export default class CharacterDirectionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置定轴方向
            myCharacter.movementAxisDirection = new Type.Vector(1, 0, 0);
            // 打印当前角色的运动轴和面朝方向
            console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
            // 添加一个按键方法：按下键盘“1”，切换角色的运动面朝方向
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.moveFacingDirection = (myCharacter.moveFacingDirection + 1) % 3;
                console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            });
            // 添加一个按键方法：按下键盘“2”，切换角色的运动时依据的正方向
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.movementDirection = (myCharacter.movementDirection + 1) % 3;
                console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
                if(myCharacter.movementDirection == 5) {
                    console.log("定轴方向 " + myCharacter.movementAxisDirection);
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMovementAxisDirection` | [`Vector`](Type.Vector.md) |


___

### movementDirection <Score text="movementDirection" /> 

• `get` **movementDirection**(): [`MovementDirection`](../enums/Gameplay.MovementDirection.md) 

运动正方向


::: warning Precautions

角色运动时依据的正方向。1. 控制器方向, 就以控制器坐标系为轴;
2. 如果是定轴方向，就以世界坐标系中movementAxisDirection为轴;
3. 如果是视线方向, 就以相机坐标系的为轴. 在玩家相机不存在Z轴旋转时, 控制器方向和视线方向效果一致, 人形对象的控制器方向和视线方向效果永远一致

:::

使用示例:提供按键方法切换角色运动面朝方向和角色的运动时依据的正方向（并提供定轴方向）查看不同模式效果。
```ts
@Core.Class
export default class CharacterDirectionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置定轴方向
            myCharacter.movementAxisDirection = new Type.Vector(1, 0, 0);
            // 打印当前角色的运动轴和面朝方向
            console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
            // 添加一个按键方法：按下键盘“1”，切换角色的运动面朝方向
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.moveFacingDirection = (myCharacter.moveFacingDirection + 1) % 3;
                console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            });
            // 添加一个按键方法：按下键盘“2”，切换角色的运动时依据的正方向
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.movementDirection = (myCharacter.movementDirection + 1) % 3;
                console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
                if(myCharacter.movementDirection == 2) {
                    console.log("定轴方向 " + myCharacter.movementAxisDirection);
                }
            });
        }
    }
}
```

#### Returns

[`MovementDirection`](../enums/Gameplay.MovementDirection.md)

• `set` **movementDirection**(`InMovementDirection`): `void` 

运动正方向


::: warning Precautions

角色运动时依据的正方向。1. 控制器方向, 就以控制器坐标系为轴;
2. 如果是定轴方向，就以世界坐标系中movementAxisDirection为轴;
3. 如果是视线方向, 就以相机坐标系的为轴. 在玩家相机不存在Z轴旋转时, 控制器方向和视线方向效果一致, 人形对象的控制器方向和视线方向效果永远一致

:::

使用示例:提供按键方法切换角色运动面朝方向和角色的运动时依据的正方向（并提供定轴方向）查看不同模式效果。
```ts
@Core.Class
export default class CharacterDirectionExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置定轴方向
            myCharacter.movementAxisDirection = new Type.Vector(1, 0, 0);
            // 打印当前角色的运动轴和面朝方向
            console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
            // 添加一个按键方法：按下键盘“1”，切换角色的运动面朝方向
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.moveFacingDirection = (myCharacter.moveFacingDirection + 1) % 3;
                console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            });
            // 添加一个按键方法：按下键盘“2”，切换角色的运动时依据的正方向
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.movementDirection = (myCharacter.movementDirection + 1) % 3;
                console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
                if(myCharacter.movementDirection == 3) {
                    console.log("定轴方向 " + myCharacter.movementAxisDirection);
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMovementDirection` | [`MovementDirection`](../enums/Gameplay.MovementDirection.md) |


___

### movementEnabled <Score text="movementEnabled" /> 

• `get` **movementEnabled**(): `boolean` 

启用移动能力


::: warning Precautions

角色当前是否启用移动能力，true表示角色可以移动，false表示角色不可移动。

:::

使用示例:提供按键方法启用/禁用角色的移动能力
```ts
@Core.Class
export default class CharacterMoveExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法：按下键盘“1”，启用/禁用 角色的移动能力
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.movementEnabled = !myCharacter.movementEnabled;
                console.log("当前角色是否可以移动: "+ myCharacter.movementEnabled);
            });
        }
    }
}
```

#### Returns

`boolean`

• `set` **movementEnabled**(`value`): `void` 

启用移动能力


::: warning Precautions

角色当前是否启用移动能力，true表示角色可以移动，false表示角色不可移动。

:::

使用示例:提供按键方法启用/禁用角色的移动能力
```ts
@Core.Class
export default class CharacterMoveExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法：按下键盘“2”，启用/禁用 角色的移动能力
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.movementEnabled = !myCharacter.movementEnabled;
                console.log("当前角色是否可以移动: "+ myCharacter.movementEnabled);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### movementType <Score text="movementType" /> 

• `get` **movementType**(): [`MovementType`](../enums/Gameplay.MovementType.md) 

移动模式


::: warning Precautions

当前角色的移动模式。行走、游泳或飞行。

:::

使用示例:提供按键方法切换角色移动模式并给角色切换不同道具
```ts
@Core.Class
export default class CharacterMoveModeExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "23060,86749";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let item: GameObject = null;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 给角色【移动模式切换】委托添加一个函数：打印当前移动模式，根据模式切换道具
            myCharacter.onMovementModeChanged.add((mode) => {
                switch (mode) {
                    case 0:
                        item.destroy();
                        item = null;
                        break;
                    case 1:
                        item.destroy();
                        item = Core.GameObject.spawn({guid: "23060"});
                        item.parent = myCharacter;
                        break;
                    case 2:
                        item.destroy();
                        item = Core.GameObject.spawn({guid: "86749"});
                        item.parent = myCharacter;
                        item.relativeLocation = new Type.Vector(0, 0, -100);
                        item.relativeRotation = new Type.Rotation(0, 0, -90);
                        break;
                    default:
                        break;
                }
            });
            // 添加一个按键方法：键盘“1”，角色切换为行走
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToWalking();
            });
            // 添加一个按键方法：键盘“2”，角色生成喷气背包，切换为飞行
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.switchToFlying();
            });
            // 添加一个按键方法：键盘“3”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.switchToSwimming();
            });
        }
    }
}
```

#### Returns

[`MovementType`](../enums/Gameplay.MovementType.md)


### outOfWaterVerticalSpeed <Score text="outOfWaterVerticalSpeed" /> 

• `get` **outOfWaterVerticalSpeed**(): `number` 

出水时垂直方向速度


::: warning Precautions

角色出水时Z轴方向上的速度。仅在角色可以跳出水面时生效。

:::

使用示例:生成拱形容器并适配游泳区域，添加按键方法使角色切换游泳状态，加速游泳和上浮游泳。通过修改游泳相关属性和使用姿态和动画的播放适配对应的游泳动作。
```ts
@Core.Class
export default class CharacterSwimExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "60830,53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            Core.GameObject.spawn({guid: "60830", transform: new Type.Transform(new Type.Vector(600, 0, 0), new Type.Rotation(0, 0, 90), new Type.Vector(20, 20, 20))});
            Core.GameObject.spawn({guid: "SwimmingVolume", transform: new Type.Transform(new Type.Vector(675, 0, 975), new Type.Rotation(0, 0, 90), new Type.Vector(10, 20, 20))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 600;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：按下键盘“1”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法：按住键盘“Up”，角色上浮
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCharacter.swimUp(5);
            });
            // 添加一个按键方法：按住键盘“Down”，角色下潜
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCharacter.swimDown(5);
            });
            // 添加一个按键方法：按下键盘“空格”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.SpaceBar, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原游泳速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.swimUp(10)
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1000);
                    // 2.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1204);
            });
        }
    }
}
```

#### Returns

`number`

• `set` **outOfWaterVerticalSpeed**(`value`): `void` 

出水时垂直方向速度


::: warning Precautions

角色出水时Z轴方向上的速度。仅在角色可以跳出水面时生效。

:::

使用示例:生成拱形容器并适配游泳区域，添加按键方法使角色切换游泳状态，加速游泳和上浮游泳。通过修改游泳相关属性和使用姿态和动画的播放适配对应的游泳动作。
```ts
@Core.Class
export default class CharacterSwimExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "60830,53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            Core.GameObject.spawn({guid: "60830", transform: new Type.Transform(new Type.Vector(600, 0, 0), new Type.Rotation(0, 0, 90), new Type.Vector(20, 20, 20))});
            Core.GameObject.spawn({guid: "SwimmingVolume", transform: new Type.Transform(new Type.Vector(675, 0, 975), new Type.Rotation(0, 0, 90), new Type.Vector(10, 20, 20))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 600;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：按下键盘“1”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法：按住键盘“Up”，角色上浮
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCharacter.swimUp(5);
            });
            // 添加一个按键方法：按住键盘“Down”，角色下潜
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCharacter.swimDown(5);
            });
            // 添加一个按键方法：按下键盘“空格”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.SpaceBar, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原游泳速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.swimUp(10)
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1000);
                    // 2.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1205);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### overheadUI <Score text="overheadUI" /> 

• `get` **overheadUI**(): [`UIWidget`](Gameplay.UIWidget.md) <Badge type="tip" text="client" />

获取头顶UIWidget


::: warning Precautions

角色头顶UI对象

:::

使用示例:提供按键方法修改角色头顶UI为2倍大小并设置为不可遮挡
```ts
@Core.Class
export default class CharacterUIExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法：按下键盘“1”, 放大头顶UI为原来的2倍并设置成不可遮挡
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.overheadUI.drawSize = myCharacter.overheadUI.drawSize.multiply(2);
                myCharacter.overheadUI.occlusionEnable = false;
            });
        }
    }
}
```

#### Returns

[`UIWidget`](Gameplay.UIWidget.md)

头顶UIWidget对象


### physicsEnabled <Score text="physicsEnabled" /> 

• `get` **physicsEnabled**(): `boolean`

获取角色物理状态

使用示例:xxx
```ts
@Core.Class
export default class CharacterSwimExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
    }
}
```

#### Returns

`boolean`

• `set` **physicsEnabled**(`value`): `void`

设置角色物理状态

使用示例:xxx
```ts
@Core.Class
export default class CharacterSwimExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启角色物理,默认关闭以节省性能.该属性对角色射线检测功能有影响,如果需要射线检测打到具体的骨骼部位,可将physicsEnabled设置true |



### ragdollEnabled <Score text="ragdollEnabled" /> 

• `get` **ragdollEnabled**(): `boolean`

启用布娃娃

::: warning Precautions

角色当前是否使用布娃娃状态。true表示使用，false表示禁用。

:::

使用示例:生成一个黑洞，当角色距离角色与黑洞中心距离小于300则朝中心移动角色（吸引）。小于50角色开启布娃娃。
```ts
@Core.Class
export default class CharacterPhysicsExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "31645";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成一个循环黑洞特效
            let blackHole = Core.GameObject.spawn({guid: "31645", transform: new Type.Transform(new Type.Vector(500, 0, 50), Type.Rotation.zero, Type.Vector.one)}) as Particle;
            TimeUtil.setInterval(() => {
                blackHole.play();
            }, 5);
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色与黑洞中心距离小于300且角色没有开启布娃娃，则朝中心移动角色
            if(myCharacter.worldLocation.subtract(new Type.Vector(500, 0, 50)).length < 300 && !myCharacter.ragdollEnabled) {
                let dir = new Type.Vector(500, 0, 50).subtract(myCharacter.worldLocation).normalize();
                myCharacter.addMovement(new Type.Vector(dir.x, dir.y, 0));
            }
            // 如果角色与黑洞中心距离小于50，则开启布娃娃
            if(myCharacter.worldLocation.subtract(new Type.Vector(500, 0, 50)).length < 50) {
                myCharacter.ragdollEnabled = true;
                setTimeout(() => {
                    myCharacter.worldLocation = new Type.Vector(0, 0, 130);
                    myCharacter.ragdollEnabled = false;
                }, 2000);
            }
        }
    }
}
```

#### Returns

`boolean`

• `set` **ragdollEnabled**(`value`): `void` 

启用布娃娃


::: warning Precautions

角色当前是否使用布娃娃状态。true表示使用，false表示禁用。

:::

使用示例:生成一个黑洞，当角色距离角色与黑洞中心距离小于300则朝中心移动角色（吸引）。小于50角色开启布娃娃。
```ts
@Core.Class
export default class CharacterPhysicsExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "31645";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成一个循环黑洞特效
            let blackHole = Core.GameObject.spawn({guid: "31645", transform: new Type.Transform(new Type.Vector(500, 0, 50), Type.Rotation.zero, Type.Vector.one)}) as Particle;
            TimeUtil.setInterval(() => {
                blackHole.play();
            }, 5);
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色与黑洞中心距离小于300且角色没有开启布娃娃，则朝中心移动角色
            if(myCharacter.worldLocation.subtract(new Type.Vector(500, 0, 50)).length < 300 && !myCharacter.ragdollEnabled) {
                let dir = new Type.Vector(500, 0, 50).subtract(myCharacter.worldLocation).normalize();
                myCharacter.addMovement(new Type.Vector(dir.x, dir.y, 0));
            }
            // 如果角色与黑洞中心距离小于50，则开启布娃娃
            if(myCharacter.worldLocation.subtract(new Type.Vector(500, 0, 50)).length < 50) {
                myCharacter.ragdollEnabled = true;
                setTimeout(() => {
                    myCharacter.worldLocation = new Type.Vector(0, 0, 130);
                    myCharacter.ragdollEnabled = false;
                }, 2001);
            }
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |



### rotateRate <Score text="rotateRate" /> 

• `get` **rotateRate**(): `number` 

最大转向速度


::: warning Precautions

角色每秒旋转的最大速度。设置为负值时, 转向速度被视为无限大, 可以瞬间转向。

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“3”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

#### Returns

`number`

• `set` **rotateRate**(`InRotateRate`): `void` 

最大转向速度


::: warning Precautions

角色每秒旋转的最大速度。设置为负值时, 转向速度被视为无限大, 可以瞬间转向。

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“4”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InRotateRate` | `number` |


___

### separateBrakingFrictionEnabled <Score text="separateBrakingFrictionEnabled" /> 

• `get` **separateBrakingFrictionEnabled**(): `boolean` 

启用单独制动摩擦


::: warning Precautions

开启后使用行走制动速率进行计算摩擦效果，不开启则使用的是地面摩擦力进行计算摩擦效果。

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“3”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

#### Returns

`boolean`

• `set` **separateBrakingFrictionEnabled**(`used`): `void` 

启用单独制动摩擦


::: warning Precautions

开启后使用行走制动速率进行计算摩擦效果，不开启则使用的是地面摩擦力进行计算摩擦效果。

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“4”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `used` | `boolean` |


___

### serverCalculateEnable <Score text="serverCalculateEnable" /> 

• `set` **serverCalculateEnable**(`enable`): `void` 

开/关NPC的功能,现包含(角色的网络同步，角色移动)未来可能会添加其他计算


::: warning Precautions

(仅适用于反序列化的角色)如果场景中存在大量闲置NPC,暂时不会参与到游戏中，可使用设置false节约一些额外的性能消耗，当NPC需要参与到游戏中时设置true开启对应的功能。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  true 开启角色计算 false 关闭角色计算 |



### style <Score text="style" /> 

• `get` **style**(): [`StyleConfig`](Gameplay.StyleConfig.md) 

角色外观


::: warning Precautions

当前角色持有的外观数据，数据保存的是引用。

:::

使用示例:以不同方式设置角色外观，清空外观，同步外观。外观切换完成时播放换装特效。判断外观是否加载完成播放对应动画。
```ts
@Core.Class
export default class CharacterStyleExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.styleReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            // 给【角色换装完成】委托添加函数
            myCharacter.onStyleCompleted.add(() => {
                EffectService.getInstance().playEffectOnPlayer("161245", myCharacter, SlotType.Root);
            });
            // 获取角色默认外观风格
            let defaultStyle = myCharacter.getStyleData();
            // 添加一个按键方法：按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.setStyle(defaultStyle);
            });
            // 添加一个按键方法：按下键盘“2”，更换角色外观
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style基础：角色模板为二次元男
                    myCharacter.style.advance.base.characterSetting.switchCharacter = CharacterTemplate.AnimeMale;
                    // 修改角色style头部：头大小为2倍
                    myCharacter.style.advance.headFeatures.head.headOverallScale = 2;
                    // 修改角色style体型：身高为2倍
                    myCharacter.style.advance.bodyFeatures.body.height = 2;
                    // 修改角色style化妆：腮红为75674
                    myCharacter.style.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发：前发为57731，后发为63910
                    myCharacter.style.advance.hair.frontHair.style = "57731";
                    myCharacter.style.advance.hair.backHair.style = "63910";
                    // 修改角色style：上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.style.advance.clothing.upperCloth.style = "58694";
                    myCharacter.style.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.style.advance.clothing.gloves.style = "60384";
                    myCharacter.style.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法：按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.syncStyle();
            });
            // 添加一个按键方法：按下键盘“4”，解析角色外观文件并应用
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                let style = Character.resovleStyle("136183");
                myCharacter.setStyle(style);
            });
            // 添加一个按键方法：按下键盘“5”，清空角色外观
            InputUtil.onKeyDown(Type.Keys.Five, () => {
                myCharacter.clearStyle();
            });
        }
    }
}
```

#### Returns

[`StyleConfig`](Gameplay.StyleConfig.md)

___

### styleReady <Score text="styleReady" /> 

• `get` **styleReady**(): `boolean` <Badge type="tip" text="client" />

角色外观准备状态


::: warning Precautions

当前角色外观是否准备完毕。true表示准备完毕，false表示未准备好。

:::

使用示例:以不同方式设置角色外观，清空外观，同步外观。外观切换完成时播放换装特效。判断外观是否加载完成播放对应动画。
```ts
@Core.Class
export default class CharacterStyleExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.styleReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            // 给【角色换装完成】委托添加函数
            myCharacter.onStyleCompleted.add(() => {
                EffectService.getInstance().playEffectOnPlayer("161245", myCharacter, SlotType.Root);
            });
            // 获取角色默认外观风格
            let defaultStyle = myCharacter.getStyleData();
            // 添加一个按键方法：按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.setStyle(defaultStyle);
            });
            // 添加一个按键方法：按下键盘“2”，更换角色外观
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style基础：角色模板为二次元男
                    myCharacter.style.advance.base.characterSetting.switchCharacter = CharacterTemplate.AnimeMale;
                    // 修改角色style头部：头大小为2倍
                    myCharacter.style.advance.headFeatures.head.headOverallScale = 2;
                    // 修改角色style体型：身高为2倍
                    myCharacter.style.advance.bodyFeatures.body.height = 2;
                    // 修改角色style化妆：腮红为75674
                    myCharacter.style.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发：前发为57731，后发为63910
                    myCharacter.style.advance.hair.frontHair.style = "57731";
                    myCharacter.style.advance.hair.backHair.style = "63910";
                    // 修改角色style：上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.style.advance.clothing.upperCloth.style = "58694";
                    myCharacter.style.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.style.advance.clothing.gloves.style = "60384";
                    myCharacter.style.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法：按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.syncStyle();
            });
            // 添加一个按键方法：按下键盘“4”，解析角色外观文件并应用
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                let style = Character.resovleStyle("136183");
                myCharacter.setStyle(style);
            });
            // 添加一个按键方法：按下键盘“5”，清空角色外观
            InputUtil.onKeyDown(Type.Keys.Five, () => {
                myCharacter.clearStyle();
            });
        }
    }
}
```

#### Returns

`boolean`


### velocity <Score text="velocity" /> 

• `get` **velocity**(): [`Vector`](Type.Vector.md) 

当前移动速度


::: warning Precautions

角色当前移动的速度

:::

使用示例:修改角色行走相关属性并每帧打印角色速度
```ts
@Core.Class
export default class CharacterWalkExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色移动参数
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration // 设置角色最大加速度为原来的0.1倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate // 设置角色最大转向速度为原来的0.5倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration // 设置角色最大行走速度为原来的2倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking // 设置角色最大加速度为原来的0.1倍
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 4;
            // 添加一个按键方法：按下键盘“2”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.separateBrakingFrictionEnabled = !myCharacter.separateBrakingFrictionEnabled;
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色正在移动，打印角色的移动速度
            if(myCharacter.isMoving) {
                console.log("当前角色速度：" + myCharacter.velocity);
            }
        }
    }
}
```

#### Returns

[`Vector`](Type.Vector.md)

___

### walkableFloorAngle <Score text="walkableFloorAngle" /> 

• `get` **walkableFloorAngle**(): `number` 

可行走的最大角度


::: warning Precautions

角色站立在斜坡上时，斜坡的最大角度，超过该角度，角色将无法站立在这个斜坡上，角色会存在坠落的表现。使用范围在0-90之间。

:::

使用示例:创建5个不同高度的立方体和创建5个不同坡度的锥体，提供按键方法修改最大可跨越高度和可行走的最大角度。
```ts
@Core.Class
export default class CharacterStepAndStandExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "7667,7669";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
         // 下列代码仅在服务端执行
         if(SystemUtil.isServer()) {
            // 创建5个不同高度的立方体：10，20，40，80，160
            let cubeHeight = [10, 20, 40, 80, 160];
            for (let i = 0;
i < cubeHeight.length;
i++) {
                Core.GameObject.spawn({guid: "7669", transform: new Type.Transform(new Type.Vector(250 * i, -500, 0), Type.Rotation.zero, new Type.Vector(2, 2, cubeHeight[i]))});
            }
            // 创建5个不同坡度的锥体:0，30，45，60，90
            let coneAngle = [0, 30, 45, 60, 90];
            for (let i = 0;
i < coneAngle.length;
i++) {
                Core.GameObject.spawn({guid: "7667", transform: new Type.Transform(new Type.Vector(250 * i, 500, 0), Type.Rotation.zero, new Type.Vector(2, 2, Math.tan(coneAngle[i] * Math.PI / 180)))});
            }
         }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法：按下键盘“1”，角色最大可跨越高度增加10
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxStepHeight += 10;
                console.log("角色最大可跨越高度：" + myCharacter.maxStepHeight);
            });
            // 添加一个按键方法：按下键盘“2”，角色最大可跨越高度减小10
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.maxStepHeight -= 10;
                console.log("角色最大可跨越高度：" + myCharacter.maxStepHeight);
            });
            // 添加一个按键方法：按下键盘“3”，角色可行走的最大角度增加5
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.walkableFloorAngle += 5;
                console.log("可行走的最大角度：" + myCharacter.walkableFloorAngle);
            });
            // 添加一个按键方法：按下键盘“4”，角色可行走的最大角度减小5
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                myCharacter.walkableFloorAngle -= 7;
                console.log("可行走的最大角度：" + myCharacter.walkableFloorAngle);
            });
        }
    }
}
```

#### Returns

`number`

• `set` **walkableFloorAngle**(`InWalkableFloorAngle`): `void` 

可行走的最大角度


::: warning Precautions

角色站立在斜坡上时，斜坡的最大角度，超过该角度，角色将无法站立在这个斜坡上，角色会存在坠落的表现。使用范围在0-90之间。

:::

使用示例:创建5个不同高度的立方体和创建5个不同坡度的锥体，提供按键方法修改最大可跨越高度和可行走的最大角度。
```ts
@Core.Class
export default class CharacterStepAndStandExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "7667,7669";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
         // 下列代码仅在服务端执行
         if(SystemUtil.isServer()) {
            // 创建5个不同高度的立方体：10，20，40，80，160
            let cubeHeight = [10, 20, 40, 80, 160];
            for (let i = 0;
i < cubeHeight.length;
i++) {
                Core.GameObject.spawn({guid: "7669", transform: new Type.Transform(new Type.Vector(250 * i, -500, 0), Type.Rotation.zero, new Type.Vector(2, 2, cubeHeight[i]))});
            }
            // 创建5个不同坡度的锥体:0，30，45，60，90
            let coneAngle = [0, 30, 45, 60, 90];
            for (let i = 0;
i < coneAngle.length;
i++) {
                Core.GameObject.spawn({guid: "7667", transform: new Type.Transform(new Type.Vector(250 * i, 500, 0), Type.Rotation.zero, new Type.Vector(2, 2, Math.tan(coneAngle[i] * Math.PI / 180)))});
            }
         }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法：按下键盘“1”，角色最大可跨越高度增加10
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.maxStepHeight += 10;
                console.log("角色最大可跨越高度：" + myCharacter.maxStepHeight);
            });
            // 添加一个按键方法：按下键盘“2”，角色最大可跨越高度减小10
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.maxStepHeight -= 10;
                console.log("角色最大可跨越高度：" + myCharacter.maxStepHeight);
            });
            // 添加一个按键方法：按下键盘“3”，角色可行走的最大角度增加5
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.walkableFloorAngle += 5;
                console.log("可行走的最大角度：" + myCharacter.walkableFloorAngle);
            });
            // 添加一个按键方法：按下键盘“4”，角色可行走的最大角度减小5
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                myCharacter.walkableFloorAngle -= 8;
                console.log("可行走的最大角度：" + myCharacter.walkableFloorAngle);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `InWalkableFloorAngle` | `number` |



## Methods

### addImpulse <Score text="addImpulse" /> 

• **addImpulse**(`Vector`, `ignoreMass?`): `void` <Badge type="tip" text="server" />

添加冲量


::: warning Precautions

质量固定为100, 受质量影响的算法为: 冲量按位除以质量

:::

使用示例:生成大炮，5s周期从炮口生成炮弹并发射。角色靠近大炮会移动至炮口延迟2s后发射。
```ts
@Core.Class
export default class CharacterCannonExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "122180,122182,122174,132631,75354";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成大炮模型
            let cannon_base = GameObject.spawn({guid: "122180", transform: new Type.Transform(new Type.Vector(750, 0, 0), new Type.Rotation(0, 0, -90), Type.Vector.one.multiply(2))});
            let cannon_tube  = GameObject.spawn({guid: "122182", transform: new Type.Transform(new Type.Vector(750, 0, 250), new Type.Rotation(0, 30, 90), Type.Vector.one.multiply(2))});
            // 在炮口生成交互物
            let cannon_interactor = GameObject.spawn({guid: "Interactor", transform: new Type.Transform(new Type.Vector(750, 275, 330), new Type.Rotation(0, 30, 90), Type.Vector.one)}) as Interactor;
            // 生成触发器并添加进入委托
            let cannon_trigger  = GameObject.spawn({guid: "122182", transform: new Type.Transform(new Type.Vector(750, 0, 0), new Type.Rotation(0, 30, 90), Type.Vector.one.multiply(4))}) as Trigger;
            cannon_trigger.onEnter.add((character: Character) => {
                cannon_interactor.startInteract(character, InteractiveSlot.Mouse);
                setTimeout(() => {
                    cannon_interactor.endInteract();
                    character.addImpulse(cannon_tube.getForwardVector().multiply(1000));
                    Events.dispatchToAllClient("FIRE");
                }, 2000);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 在客户端添加一个【FIRE】事件监听器，当大炮发射时播放音效特效。
            Events.addServerListener("FIRE", () => {
                EffectService.playEffectAtLocation("132631", this.cannon_ball.worldLocation)
                SoundService.playSound("75354");
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Vector` | [`Vector`](Type.Vector.md) | 应用的冲量 |
| `ignoreMass?` | `boolean` | 是否忽略质量对冲量的影响 default:false |


___

### addMovement <Score text="addMovement" /> 

• **addMovement**(`direction`): `void` 

沿着给定的方向向量添加移动输入


::: warning Precautions

效果受movementDirection属性影响。如果此时同时有用户输入效果是叠加而不是覆盖。

:::

使用示例:生成一个黑洞，当角色距离角色与黑洞中心距离小于300则朝中心移动角色（吸引）。小于50角色开启布娃娃。
```ts
@Core.Class
export default class CharacterPhysicsExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "31645";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成一个循环黑洞特效
            let blackHole = Core.GameObject.spawn({guid: "31645", transform: new Type.Transform(new Type.Vector(500, 0, 50), Type.Rotation.zero, Type.Vector.one)}) as Particle;
            TimeUtil.setInterval(() => {
                blackHole.play();
            }, 5);
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 如果角色与黑洞中心距离小于300且角色没有开启布娃娃，则朝中心移动角色
            if(myCharacter.worldLocation.subtract(new Type.Vector(500, 0, 50)).length < 300 && !myCharacter.ragdollEnabled) {
                let dir = new Type.Vector(500, 0, 50).subtract(myCharacter.worldLocation).normalize();
                myCharacter.addMovement(new Type.Vector(dir.x, dir.y, 0));
            }
            // 如果角色与黑洞中心距离小于50，则开启布娃娃
            if(myCharacter.worldLocation.subtract(new Type.Vector(500, 0, 50)).length < 50) {
                myCharacter.ragdollEnabled = true;
                setTimeout(() => {
                    myCharacter.worldLocation = new Type.Vector(0, 0, 130);
                    myCharacter.ragdollEnabled = false;
                }, 2001);
            }
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | [`Vector`](Type.Vector.md) | 输入的方向 |



### attachToSlot <Score text="attachToSlot" /> 

• **attachToSlot**(`gameObject`, `slotName`): `void` 

将物体附着到人物角色的指定插槽


::: warning Precautions

只适用于人形角色

:::

使用示例:在角色头顶生成一个光环并附加到头顶插槽，提供按键方法给角色附着装备和卸载装备。
```ts
@Core.Class
export default class CharacterSlotExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "27704,29052,111662,122953,26168";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 在角色头顶生成一个光环并附加到头顶插槽
            let halo = GameObject.spawn({guid: "27704"}) as Particle;
            myCharacter.attachToSlot(halo, SlotType.Rings);
            halo.play();
            // 添加一个按键方法：按下键盘“1”，将角色的头顶光环移除
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.detachFromSlot(halo);
                setTimeout(() => {
                    halo.destroy();
                }, 2000);
            });
            // 生成三件装备
            let sword = GameObject.spawn({guid: "29052", transform: new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one)});
            let shield = GameObject.spawn({guid: "111662", transform: new Type.Transform(new Type.Vector(300, 0, 100), Type.Rotation.zero, Type.Vector.one)});
            let spike = GameObject.spawn({guid: "122953", transform: new Type.Transform(new Type.Vector(300, 100, 100), Type.Rotation.zero, Type.Vector.one)});
            // 添加一个按键方法：按下键盘“2”，给角色插槽增加装备
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.attachToSlot(sword, SlotType.RightHand);
                myCharacter.attachToSlot(shield, SlotType.LeftHand);
                myCharacter.attachToSlot(spike, SlotType.LeftBack);
            });
            // 添加一个按键方法：按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.detachAttachmentsFromSlot();
                sword.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
                shield.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
                spike.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
            });
            // 添加一个按键方法：按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                let pos = myCharacter.getVertexPosition(0);
                if(pos) {
                    let zzz = GameObject.spawn({guid: "26168"}) as Particle;
                    zzz.worldLocation = pos;
                    setTimeout(() => {
                        zzz.destroy();
                    }, 2000);
                }
                pos = myCharacter.getSlotWorldPosition(SlotType.Rings);
                if(pos) {
                    let halo = GameObject.spawn({guid: "27704"}) as Particle;
                    halo.worldLocation = pos;
                    setTimeout(() => {
                        halo.destroy();
                    }, 2000);
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | `GameObject` |  被附着的物体 |
| `slotName` | [`SlotType`](../enums/Gameplay.SlotType.md) |  插槽名字，被附着到指定的插槽名 |


___

### clearStyle <Score text="clearStyle" /> 

• **clearStyle**(`appearance?`, `slotAndItem?`): `void` 

清空外观数据


::: warning Precautions

清空角色外观数据，此时角色不具备任何视觉表现。

:::

使用示例:以不同方式设置角色外观，清空外观，同步外观。外观切换完成时播放换装特效。判断外观是否加载完成播放对应动画。
```ts
@Core.Class
export default class CharacterStyleExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.styleReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            // 给【角色换装完成】委托添加函数
            myCharacter.onStyleCompleted.add(() => {
                EffectService.getInstance().playEffectOnPlayer("161245", myCharacter, SlotType.Root);
            });
            // 获取角色默认外观风格
            let defaultStyle = myCharacter.getStyleData();
            // 添加一个按键方法：按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.setStyle(defaultStyle);
            });
            // 添加一个按键方法：按下键盘“2”，更换角色外观
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style基础：角色模板为二次元男
                    myCharacter.style.advance.base.characterSetting.switchCharacter = CharacterTemplate.AnimeMale;
                    // 修改角色style头部：头大小为2倍
                    myCharacter.style.advance.headFeatures.head.headOverallScale = 2;
                    // 修改角色style体型：身高为2倍
                    myCharacter.style.advance.bodyFeatures.body.height = 2;
                    // 修改角色style化妆：腮红为75674
                    myCharacter.style.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发：前发为57731，后发为63910
                    myCharacter.style.advance.hair.frontHair.style = "57731";
                    myCharacter.style.advance.hair.backHair.style = "63910";
                    // 修改角色style：上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.style.advance.clothing.upperCloth.style = "58694";
                    myCharacter.style.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.style.advance.clothing.gloves.style = "60384";
                    myCharacter.style.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法：按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.syncStyle();
            });
            // 添加一个按键方法：按下键盘“4”，解析角色外观文件并应用
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                let style = Character.resovleStyle("136183");
                myCharacter.setStyle(style);
            });
            // 添加一个按键方法：按下键盘“7”，清空角色外观
            InputUtil.onKeyDown(Type.Keys.Five, () => {
                myCharacter.clearStyle();
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appearance?` | `boolean` | 是否清空形象数据 default:true |
| `slotAndItem?` | `boolean` | 是否清空插槽和物品数据 default:true |



### crouch <Score text="crouch" /> 

• **crouch**(`isCrouch`): `void` 

下蹲


使用示例:生成草丛和拱门并添加触发器，角色进入草丛蹲下，离开站起。修改角色下蹲相关属性并提供按键方法启用/禁用下蹲能力。
```ts
@Core.Class
export default class CharacterCrouchExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "54834,36851";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成草丛和拱门
            Core.GameObject.spawn({guid: "54834", transform: new Type.Transform(new Type.Vector(300, 0, 0), Type.Rotation.zero, new Type.Vector(2, 2, 2))});
            Core.GameObject.spawn({guid: "36851", transform: new Type.Transform(new Type.Vector(300, 210, 0), new Type.Rotation(0, 0, 90), new Type.Vector(2, 1, 2))});
            // 生成触发器并添加委托函数：进入触发器的角色蹲下，离开触发器站起
            let tri = Core.GameObject.spawn({guid: "Trigger", transform: new Type.Transform(new Type.Vector(300, 0, 50), Type.Rotation.zero, new Type.Vector(2, 2, 1))}) as Gameplay.Trigger;
            tri.onEnter.add((character: Character) => {
                character.crouch(true);
                setTimeout(() => {
                    console.log("当前角色下蹲 " + character.isCrouching);
                }, 500);
            });
            tri.onLeave.add((character: Character) => {
                character.crouch(false);
                console.log("当前角色下蹲 " + character.isCrouching);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 地面蹲伏行走时的最大移动速度100
            myCharacter.maxWalkSpeedCrouched = 100;
            // 下蹲后高度为100
            myCharacter.crouchedHeight = 100;
            // 添加一个按键方法：按下键盘“1”，启用/禁用下蹲能力
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.crouchEnabled = !myCharacter.crouchEnabled;
                console.log("当前角色是否能下蹲 " + myCharacter.crouchEnabled);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isCrouch` | `boolean` | 是否下蹲 |



### detachAttachmentsFromSlot <Score text="detachAttachmentsFromSlot" /> 

• **detachAttachmentsFromSlot**(`slot?`): `void` 

将角色插槽附着的对象全部分离


::: warning Precautions

如果不填入插槽则将全部插槽的附着对象分离。仅对高级人型角色生效。

:::

使用示例:在角色头顶生成一个光环并附加到头顶插槽，提供按键方法给角色附着装备和卸载装备。
```ts
@Core.Class
export default class CharacterSlotExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "27704,29052,111662,122953,26168";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 在角色头顶生成一个光环并附加到头顶插槽
            let halo = GameObject.spawn({guid: "27704"}) as Particle;
            myCharacter.attachToSlot(halo, SlotType.Rings);
            halo.play();
            // 添加一个按键方法：按下键盘“1”，将角色的头顶光环移除
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.detachFromSlot(halo);
                setTimeout(() => {
                    halo.destroy();
                }, 2000);
            });
            // 生成三件装备
            let sword = GameObject.spawn({guid: "29052", transform: new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one)});
            let shield = GameObject.spawn({guid: "111662", transform: new Type.Transform(new Type.Vector(300, 0, 100), Type.Rotation.zero, Type.Vector.one)});
            let spike = GameObject.spawn({guid: "122953", transform: new Type.Transform(new Type.Vector(300, 100, 100), Type.Rotation.zero, Type.Vector.one)});
            // 添加一个按键方法：按下键盘“2”，给角色插槽增加装备
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.attachToSlot(sword, SlotType.RightHand);
                myCharacter.attachToSlot(shield, SlotType.LeftHand);
                myCharacter.attachToSlot(spike, SlotType.LeftBack);
            });
            // 添加一个按键方法：按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.detachAttachmentsFromSlot();
                sword.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
                shield.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
                spike.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
            });
            // 添加一个按键方法：按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                let pos = myCharacter.getVertexPosition(0);
                if(pos) {
                    let zzz = GameObject.spawn({guid: "26168"}) as Particle;
                    zzz.worldLocation = pos;
                    setTimeout(() => {
                        zzz.destroy();
                    }, 2000);
                }
                pos = myCharacter.getSlotWorldPosition(SlotType.Rings);
                if(pos) {
                    let halo = GameObject.spawn({guid: "27704"}) as Particle;
                    halo.worldLocation = pos;
                    setTimeout(() => {
                        halo.destroy();
                    }, 2004);
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot?` | [`SlotType`](../enums/Gameplay.SlotType.md) | 插槽名字 default:undefined |



### detachFromSlot <Score text="detachFromSlot" /> 

• **detachFromSlot**(`gameObject`): `void` 

将物体从插槽中分离


::: warning Precautions

接触对象与角色插槽之间的挂载关系

:::

使用示例:在角色头顶生成一个光环并附加到头顶插槽，提供按键方法给角色附着装备和卸载装备。
```ts
@Core.Class
export default class CharacterSlotExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "27704,29052,111662,122953,26168";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 在角色头顶生成一个光环并附加到头顶插槽
            let halo = GameObject.spawn({guid: "27704"}) as Particle;
            myCharacter.attachToSlot(halo, SlotType.Rings);
            halo.play();
            // 添加一个按键方法：按下键盘“1”，将角色的头顶光环移除
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.detachFromSlot(halo);
                setTimeout(() => {
                    halo.destroy();
                }, 2000);
            });
            // 生成三件装备
            let sword = GameObject.spawn({guid: "29052", transform: new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one)});
            let shield = GameObject.spawn({guid: "111662", transform: new Type.Transform(new Type.Vector(300, 0, 100), Type.Rotation.zero, Type.Vector.one)});
            let spike = GameObject.spawn({guid: "122953", transform: new Type.Transform(new Type.Vector(300, 100, 100), Type.Rotation.zero, Type.Vector.one)});
            // 添加一个按键方法：按下键盘“2”，给角色插槽增加装备
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.attachToSlot(sword, SlotType.RightHand);
                myCharacter.attachToSlot(shield, SlotType.LeftHand);
                myCharacter.attachToSlot(spike, SlotType.LeftBack);
            });
            // 添加一个按键方法：按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.detachAttachmentsFromSlot();
                sword.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
                shield.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
                spike.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
            });
            // 添加一个按键方法：按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                let pos = myCharacter.getVertexPosition(0);
                if(pos) {
                    let zzz = GameObject.spawn({guid: "26168"}) as Particle;
                    zzz.worldLocation = pos;
                    setTimeout(() => {
                        zzz.destroy();
                    }, 2000);
                }
                pos = myCharacter.getSlotWorldPosition(SlotType.Rings);
                if(pos) {
                    let halo = GameObject.spawn({guid: "27704"}) as Particle;
                    halo.worldLocation = pos;
                    setTimeout(() => {
                        halo.destroy();
                    }, 2001);
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | `GameObject` | 物体GameObject |



### getSlotWorldPosition <Score text="getSlotWorldPosition" /> 

• **getSlotWorldPosition**(`slotName`): [`Vector`](Type.Vector.md) 

获取角色插槽的世界坐标


::: warning Precautions

受角色外观中插槽偏移影响，仅对高级人型角色生效。

:::

使用示例:在角色头顶生成一个光环并附加到头顶插槽，提供按键方法给角色附着装备和卸载装备。
```ts
@Core.Class
export default class CharacterSlotExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "27704,29052,111662,122953,26168";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 在角色头顶生成一个光环并附加到头顶插槽
            let halo = GameObject.spawn({guid: "27704"}) as Particle;
            myCharacter.attachToSlot(halo, SlotType.Rings);
            halo.play();
            // 添加一个按键方法：按下键盘“1”，将角色的头顶光环移除
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.detachFromSlot(halo);
                setTimeout(() => {
                    halo.destroy();
                }, 2000);
            });
            // 生成三件装备
            let sword = GameObject.spawn({guid: "29052", transform: new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one)});
            let shield = GameObject.spawn({guid: "111662", transform: new Type.Transform(new Type.Vector(300, 0, 100), Type.Rotation.zero, Type.Vector.one)});
            let spike = GameObject.spawn({guid: "122953", transform: new Type.Transform(new Type.Vector(300, 100, 100), Type.Rotation.zero, Type.Vector.one)});
            // 添加一个按键方法：按下键盘“2”，给角色插槽增加装备
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.attachToSlot(sword, SlotType.RightHand);
                myCharacter.attachToSlot(shield, SlotType.LeftHand);
                myCharacter.attachToSlot(spike, SlotType.LeftBack);
            });
            // 添加一个按键方法：按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.detachAttachmentsFromSlot();
                sword.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
                shield.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
                spike.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
            });
            // 添加一个按键方法：按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                let pos = myCharacter.getVertexPosition(0);
                if(pos) {
                    let zzz = GameObject.spawn({guid: "26168"}) as Particle;
                    zzz.worldLocation = pos;
                    setTimeout(() => {
                        zzz.destroy();
                    }, 2000);
                }
                pos = myCharacter.getSlotWorldPosition(SlotType.Rings);
                if(pos) {
                    let halo = GameObject.spawn({guid: "27704"}) as Particle;
                    halo.worldLocation = pos;
                    setTimeout(() => {
                        halo.destroy();
                    }, 2002);
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | [`SlotType`](../enums/Gameplay.SlotType.md) | 插槽名字 |

#### Returns

[`Vector`](Type.Vector.md)

坐标位置


### getStyleData <Score text="getStyleData" /> 

• **getStyleData**(): [`StyleConfig`](Gameplay.StyleConfig.md) 

获取外观数据


::: warning Precautions

该接口获取角色当前外观数据的拷贝

:::

使用示例:以不同方式设置角色外观，清空外观，同步外观。外观切换完成时播放换装特效。判断外观是否加载完成播放对应动画。
```ts
@Core.Class
export default class CharacterStyleExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.styleReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            // 给【角色换装完成】委托添加函数
            myCharacter.onStyleCompleted.add(() => {
                EffectService.getInstance().playEffectOnPlayer("161245", myCharacter, SlotType.Root);
            });
            // 获取角色默认外观风格
            let defaultStyle = myCharacter.getStyleData();
            // 添加一个按键方法：按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.setStyle(defaultStyle);
            });
            // 添加一个按键方法：按下键盘“2”，更换角色外观
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style基础：角色模板为二次元男
                    myCharacter.style.advance.base.characterSetting.switchCharacter = CharacterTemplate.AnimeMale;
                    // 修改角色style头部：头大小为2倍
                    myCharacter.style.advance.headFeatures.head.headOverallScale = 2;
                    // 修改角色style体型：身高为2倍
                    myCharacter.style.advance.bodyFeatures.body.height = 2;
                    // 修改角色style化妆：腮红为75674
                    myCharacter.style.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发：前发为57731，后发为63910
                    myCharacter.style.advance.hair.frontHair.style = "57731";
                    myCharacter.style.advance.hair.backHair.style = "63910";
                    // 修改角色style：上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.style.advance.clothing.upperCloth.style = "58694";
                    myCharacter.style.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.style.advance.clothing.gloves.style = "60384";
                    myCharacter.style.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法：按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.syncStyle();
            });
            // 添加一个按键方法：按下键盘“4”，解析角色外观文件并应用
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                let style = Character.resovleStyle("136183");
                myCharacter.setStyle(style);
            });
            // 添加一个按键方法：按下键盘“6”，清空角色外观
            InputUtil.onKeyDown(Type.Keys.Five, () => {
                myCharacter.clearStyle();
            });
        }
    }
}
```

#### Returns

[`StyleConfig`](Gameplay.StyleConfig.md)

角色外观数据的拷贝


### getVertexPosition <Score text="getVertexPosition" /> 

• **getVertexPosition**(`index`): [`Vector`](Type.Vector.md) 

通过头部模型顶点index实时获取顶点位置


::: warning Precautions

目前顶点index只能从内部工程中查看

:::

使用示例:在角色头顶生成一个光环并附加到头顶插槽，提供按键方法给角色附着装备和卸载装备。
```ts
@Core.Class
export default class CharacterSlotExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "27704,29052,111662,122953,26168";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 在角色头顶生成一个光环并附加到头顶插槽
            let halo = GameObject.spawn({guid: "27704"}) as Particle;
            myCharacter.attachToSlot(halo, SlotType.Rings);
            halo.play();
            // 添加一个按键方法：按下键盘“1”，将角色的头顶光环移除
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.detachFromSlot(halo);
                setTimeout(() => {
                    halo.destroy();
                }, 2000);
            });
            // 生成三件装备
            let sword = GameObject.spawn({guid: "29052", transform: new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one)});
            let shield = GameObject.spawn({guid: "111662", transform: new Type.Transform(new Type.Vector(300, 0, 100), Type.Rotation.zero, Type.Vector.one)});
            let spike = GameObject.spawn({guid: "122953", transform: new Type.Transform(new Type.Vector(300, 100, 100), Type.Rotation.zero, Type.Vector.one)});
            // 添加一个按键方法：按下键盘“2”，给角色插槽增加装备
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.attachToSlot(sword, SlotType.RightHand);
                myCharacter.attachToSlot(shield, SlotType.LeftHand);
                myCharacter.attachToSlot(spike, SlotType.LeftBack);
            });
            // 添加一个按键方法：按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.detachAttachmentsFromSlot();
                sword.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
                shield.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
                spike.transform = new Type.Transform(new Type.Vector(300, -100, 100), Type.Rotation.zero, Type.Vector.one);
            });
            // 添加一个按键方法：按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                let pos = myCharacter.getVertexPosition(0);
                if(pos) {
                    let zzz = GameObject.spawn({guid: "26168"}) as Particle;
                    zzz.worldLocation = pos;
                    setTimeout(() => {
                        zzz.destroy();
                    }, 2000);
                }
                pos = myCharacter.getSlotWorldPosition(SlotType.Rings);
                if(pos) {
                    let halo = GameObject.spawn({guid: "27704"}) as Particle;
                    halo.worldLocation = pos;
                    setTimeout(() => {
                        halo.destroy();
                    }, 2003);
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 模型顶点index |

#### Returns

[`Vector`](Type.Vector.md)

顶点位置


### jump <Score text="jump" /> 

• **jump**(): `void` 

跳跃


使用示例:修改角色跳跃相关属性并提供按键方法使角色跳跃和启用/禁用跳跃能力
```ts
@Core.Class
export default class CharacterJumpExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置跳跃属性
            myCharacter.maxJumpHeight = 300;
// 最大跳跃高度为300
            myCharacter.jumpMaxCount = 3;
// 最高三连跳
            // 添加一个按键方法：按下键盘“1”，角色跳跃。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jump();
                setTimeout(() => {
                    console.log("当前角色是否在跳跃 " + myCharacter.isJumping);
                }, 100);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用跳跃能力。
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.jumpEnabled = !myCharacter.jumpEnabled;
                console.log("当前角色跳跃能力 " + myCharacter.jumpEnabled);
            });
        }
    }
}
```


___

### loadAnimation <Score text="loadAnimation" /> 

• **loadAnimation**(`assetId`): [`Animation`](Gameplay.Animation.md) 

加载动画


::: warning Precautions

loadAnimation会将给定的动画加载到角色上，返回一个可播放的Animation。

:::

使用示例:给角色加载一个舞蹈动画，修改动画对象的属性并在动画完成委托绑定一个函数播放完成特效。提供按键方法控制播放，暂停，继续和停止。
```ts
@Core.Class
export default class CharacterAnimationExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14700,20380";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个舞蹈动画
            let danceAnimation = myCharacter.loadAnimation("14700");
            // 动画的属性
            console.log("动画时长 " + danceAnimation.length);
            danceAnimation.loop = 10;
// 循环播放1000次
            danceAnimation.rate = 2;
// 2倍速
            // 给【动画完成】委托添加函数，播放一个升级特效
            danceAnimation.onAnimFinished.add(() => {
                EffectService.playEffectOnPlayer("20380", myCharacter, SlotType.Root);
            });
            // 添加一个按键方法：按下键盘“1”，开始播放
            InputUtil.onKeyDown(Type.Keys.One, () => {
                danceAnimation.play();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法：按下键盘“2”，暂停播放
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                danceAnimation.pause();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法：按下键盘“3”，继续播放
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                danceAnimation.resume();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法：按下键盘“4”，停止播放
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                danceAnimation.stop();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 动画资源ID |

#### Returns

[`Animation`](Gameplay.Animation.md)

动画对象

___

### loadBasicStance <Score text="loadBasicStance" /> 

• **loadBasicStance**(`assetId`): [`BasicStance`](Gameplay.BasicStance.md) 

加载基础姿态


::: warning Precautions

loadBasicStance会将给定的基础姿态加载到角色上，返回一个可播放的BasicStance。

:::

使用示例:使用示例:给角色加载一个写实女性基础姿态和一个二次元女性基础姿态（默认），提供按键方法控制播放和停止。
```ts
@Core.Class
export default class CharacterBasicStanceExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "119837,30274";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个写实女性基础姿态和一个二次元女性基础姿态（默认）
            let realWomanStance = myCharacter.loadBasicStance("119837");
            let animeWomanStance = myCharacter.loadBasicStance("30274");
            // 姿态的属性
            realWomanStance.aimOffsetEnabled = true;
            animeWomanStance.aimOffsetEnabled = true;
            // 添加一个按键方法：按下键盘“1”，开始播放写实女性基础姿态
            InputUtil.onKeyDown(Type.Keys.One, () => {
                realWomanStance.play();
            });
            // 添加一个按键方法：按下键盘“2”，停止播放写实女性基础姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                realWomanStance.stop();
            });
            // 添加一个按键方法：按下键盘“3”，开始播放写实女性基础姿态
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                animeWomanStance.play();
            });
            // 添加一个按键方法：按下键盘“4”，停止播放写实女性基础姿态
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                animeWomanStance.stop();
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` |  基础姿态资源ID |

#### Returns

[`BasicStance`](Gameplay.BasicStance.md)

基础姿态对象

___

### loadStance <Score text="loadStance" /> 

• **loadStance**(`assetId`): [`Stance`](Gameplay.Stance.md) 

加载姿态


::: warning Precautions

loadStance会将给定的姿态加载到角色上，返回一个可播放的Stance。Stance可以分上下半身播放。

:::

使用示例:给角色加载一个上半身拳击姿态和一个下半身踢腿姿态，修改姿态对象的属性并提供按键方法控制播放和停止。
```ts
@Core.Class
export default class CharacterStanceExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "88545,20260";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个上半身拳击姿态和一个下半身踢腿姿态
            let punchingStance = myCharacter.loadStance("88545");
            let kickingStance = myCharacter.loadStance("20260");
            // 设置姿态的混合模式
            punchingStance.blendMode = StanceBlendMode.BlendUpper;
            kickingStance.blendMode = StanceBlendMode.BlendLower;
            // 添加一个按键方法：按下键盘“1”，开始播放姿态
            InputUtil.onKeyDown(Type.Keys.One, () => {
                punchingStance.play();
                kickingStance.play();
            });
            // 添加一个按键方法：按下键盘“2”，停止播放姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                punchingStance.stop();
                kickingStance.stop();
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` |  姿态资源ID或动画资源ID |

#### Returns

[`Stance`](Gameplay.Stance.md)

二级姿态对象

___

### lookAt <Score text="lookAt" /> 

• **lookAt**(`target`): `void` 

角色面朝目标点


使用示例:生成大炮，5s周期从炮口生成炮弹并发射。角色看向最新发射的炮弹。
```ts
@Core.Class
export default class CharacterCannonBallExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "122180,122182,122174,132631,75354";
    // 声明变量
    cannon_ball: GameObject;
// 炮弹对象
    stride: Type.Vector;
// 步长
    displacement: Type.Vector;
// 位移
    currentTime: number;
// 炮弹运动时间
    currentPos: Type.Vector;
// 炮弹当前位置
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成大炮模型
            let cannon_base = GameObject.spawn({guid: "122180", transform: new Type.Transform(new Type.Vector(750, -750, 0), new Type.Rotation(0, 0, -90), Type.Vector.one.multiply(2))});
            let cannon_tube  = GameObject.spawn({guid: "122182", transform: new Type.Transform(new Type.Vector(750, -750, 250), new Type.Rotation(0, 30, 90), Type.Vector.one.multiply(2))});
            // 5s周期从炮口生成炮弹
            TimeUtil.setInterval(() => {
                this.cannon_ball = GameObject.spawn({guid: "122174", transform: new Type.Transform(new Type.Vector(750, -480, 330), Type.Rotation.zero, Type.Vector.one.multiply(3))});
                this.displacement = Type.Vector.multiply(cannon_tube.getForwardVector(), 1000, this.displacement);
                this.currentTime = 0;
                this.currentPos = this.cannon_ball.worldLocation.clone();
                setTimeout(() => {
                    this.cannon_ball.destroy();
                    this.cannon_ball = null;
                }, 3000);
                Events.dispatchToAllClient("LOOK", this.cannon_ball.guid);
            }, 5);
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 在客户端添加一个【Look】事件监听器，当炮弹生成时获取炮弹对象，并播放音效特效。
            Events.addServerListener("LOOK", (guid: string) => {
                this.cannon_ball = Core.GameObject.find(guid);
                EffectService.playEffectAtLocation("132631", this.cannon_ball.worldLocation)
                SoundService.playSound("75354");
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            if(this.cannon_ball) {
                // 计算当前帧弹药移动步长
                this.stride = Type.Vector.multiply(this.displacement, dt, this.stride);
                // 添加重力
                this.stride.z -= (50 * 9.8 * (Math.pow(this.currentTime + dt, 2) - Math.pow(this.currentTime, 2)));
                this.cannon_ball.worldRotation = this.stride.toRotation();
                this.currentTime += dt;
                // 计算出当前更新位置
                this.currentPos.x += this.stride.x;
                this.currentPos.y += this.stride.y;
                this.currentPos.z += this.stride.z;
                // 更新弹药实体位置
                this.cannon_ball.worldLocation = this.currentPos;
            }
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            if(this.cannon_ball) {
                // 获取当前客户端的玩家(自己)
                let myPlayer = Player.localPlayer;
                // 获取当前玩家控制的角色
                let myCharacter = myPlayer.character;
                // 看向炮弹
                myCharacter.lookAt(this.cannon_ball.worldLocation);
            }
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Vector`](Type.Vector.md) | 目标点 |



### setCollisionShapeAndExtent <Score text="setCollisionShapeAndExtent" /> 

• **setCollisionShapeAndExtent**(`shapeType`, `collisionExtent`): `void` 

设置不同形状不同大小的碰撞体


使用示例: 碰撞示例
```ts
@Core.Class
export default class CharacterExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性
            myCharacter.capsuleCorrectionEnabled = true;
            // 添加一个按键方法：按下键盘“1”，开启/关闭角色与其他角色的碰撞并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.collisionWithOtherCharacterEnabled = !myCharacter.collisionWithOtherCharacterEnabled;
                console.log("当前角色与其他角色碰撞 " + myCharacter.collisionWithOtherCharacterEnabled);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立并在头顶生成一个角色检测效果
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.canStandOn = !myCharacter.canStandOn;
                console.log("当前角色可被站立 " + myCharacter.canStandOn);
                let otherCharacter = Player.spawnDefaultCharacter();
                otherCharacter.worldLocation = myCharacter.worldLocation.add(new Type.Vector(0, 0, 200));
                setTimeout(() => {
                    otherCharacter.destroy();
                }, 2000);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Type.Vector(50, 50, 160));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shapeType` | [`CustomShapeType`](../enums/Gameplay.CustomShapeType.md) | 启用的碰撞形状 |
| `collisionExtent` | [`Vector`](Type.Vector.md) | 启用的碰撞形状 |


___

### setCustomTimeDilation <Score text="setCustomTimeDilation" /> 

• **setCustomTimeDilation**(`Time`): `void` <Badge type="tip" text="other" />

设置当前角色对象膨胀时间速度说明：对象膨胀速度默认为1，当膨胀时间速度设置小于1时，对象的运行时间会比正常世界的运行时间减慢，膨胀时间速度最小值0.1。

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Time` | `number` |  膨胀倍数 |



### setServerMovementEnable <Score text="setServerMovementEnable" /> 

• **setServerMovementEnable**(`value`): `void` 

开/关NPC的移动计算


::: warning Precautions

(仅适用于反序列化的角色)场景中有大量处于站立不需要移动的ai,设置false减少移动计算带来的性能消耗

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` |  true 开启角色移动计算 flase 关闭角色移动计算 |


___

### setStyle <Score text="setStyle" /> 

• **setStyle**(`data`): `void` 

设置外观数据


::: warning Precautions

setStyle设置角色的外观，可以传入StyleConfig对象 / 角色外观文件的数组 / 挂件数据文件的guid。

:::

使用示例:以不同方式设置角色外观，清空外观，同步外观。外观切换完成时播放换装特效。判断外观是否加载完成播放对应动画。
```ts
@Core.Class
export default class CharacterStyleExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.styleReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            // 给【角色换装完成】委托添加函数
            myCharacter.onStyleCompleted.add(() => {
                EffectService.getInstance().playEffectOnPlayer("161245", myCharacter, SlotType.Root);
            });
            // 获取角色默认外观风格
            let defaultStyle = myCharacter.getStyleData();
            // 添加一个按键方法：按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.setStyle(defaultStyle);
            });
            // 添加一个按键方法：按下键盘“2”，更换角色外观
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style基础：角色模板为二次元男
                    myCharacter.style.advance.base.characterSetting.switchCharacter = CharacterTemplate.AnimeMale;
                    // 修改角色style头部：头大小为2倍
                    myCharacter.style.advance.headFeatures.head.headOverallScale = 2;
                    // 修改角色style体型：身高为2倍
                    myCharacter.style.advance.bodyFeatures.body.height = 2;
                    // 修改角色style化妆：腮红为75674
                    myCharacter.style.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发：前发为57731，后发为63910
                    myCharacter.style.advance.hair.frontHair.style = "57731";
                    myCharacter.style.advance.hair.backHair.style = "63910";
                    // 修改角色style：上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.style.advance.clothing.upperCloth.style = "58694";
                    myCharacter.style.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.style.advance.clothing.gloves.style = "60384";
                    myCharacter.style.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法：按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.syncStyle();
            });
            // 添加一个按键方法：按下键盘“4”，解析角色外观文件并应用
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                let style = Character.resovleStyle("136183");
                myCharacter.setStyle(style);
            });
            // 添加一个按键方法：按下键盘“5”，清空角色外观
            InputUtil.onKeyDown(Type.Keys.Five, () => {
                myCharacter.clearStyle();
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `string`[] \| [`StyleConfig`](Gameplay.StyleConfig.md) | 外观数据 |



### swimDown <Score text="swimDown" /> 

• **swimDown**(`speed`): `void` 

水中下潜


::: warning Precautions

不能超过MaxSwimSpeed(游泳最大速度)

:::

使用示例:生成拱形容器并适配游泳区域，添加按键方法使角色切换游泳状态，加速游泳和上浮游泳。通过修改游泳相关属性和使用姿态和动画的播放适配对应的游泳动作。
```ts
@Core.Class
export default class CharacterSwimExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "60830,53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            Core.GameObject.spawn({guid: "60830", transform: new Type.Transform(new Type.Vector(600, 0, 0), new Type.Rotation(0, 0, 90), new Type.Vector(20, 20, 20))});
            Core.GameObject.spawn({guid: "SwimmingVolume", transform: new Type.Transform(new Type.Vector(675, 0, 975), new Type.Rotation(0, 0, 90), new Type.Vector(10, 20, 20))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 600;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：按下键盘“1”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法：按住键盘“Up”，角色上浮
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCharacter.swimUp(5);
            });
            // 添加一个按键方法：按住键盘“Down”，角色下潜
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCharacter.swimDown(5);
            });
            // 添加一个按键方法：按下键盘“空格”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.SpaceBar, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原游泳速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.swimUp(10)
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1000);
                    // 2.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1200);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speed` | `number` | 下潜速度 |


___

### swimUp <Score text="swimUp" /> 

• **swimUp**(`speed`): `void` 

水中上浮


::: warning Precautions

不能超过MaxSwimSpeed(游泳最大速度)

:::

使用示例:生成拱形容器并适配游泳区域，添加按键方法使角色切换游泳状态，加速游泳和上浮游泳。通过修改游泳相关属性和使用姿态和动画的播放适配对应的游泳动作。
```ts
@Core.Class
export default class CharacterSwimExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "60830,53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            Core.GameObject.spawn({guid: "60830", transform: new Type.Transform(new Type.Vector(600, 0, 0), new Type.Rotation(0, 0, 90), new Type.Vector(20, 20, 20))});
            Core.GameObject.spawn({guid: "SwimmingVolume", transform: new Type.Transform(new Type.Vector(675, 0, 975), new Type.Rotation(0, 0, 90), new Type.Vector(10, 20, 20))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 600;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：按下键盘“1”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法：按住键盘“Up”，角色上浮
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCharacter.swimUp(5);
            });
            // 添加一个按键方法：按住键盘“Down”，角色下潜
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCharacter.swimDown(5);
            });
            // 添加一个按键方法：按下键盘“空格”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.SpaceBar, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原游泳速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.swimUp(10)
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1000);
                    // 2.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1200);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speed` | `number` | 上浮速度 |


___

### switchToFlying <Score text="switchToFlying" /> 

• **switchToFlying**(): `void` 

切换为飞行状态


使用示例:添加按键方法使角色切换飞行状态，加速飞行和上升飞行。通过修改飞行相关属性和使用姿态和动画的播放适配对应的飞行动作。
```ts
@Core.Class
export default class CharacterFlyExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 加载喷射加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：键盘“1”，角色切换为飞行
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToFlying();
            });
            // 添加一个按键方法：按下键盘“2”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放飞行动画，修改飞行速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxFlySpeed = 2000;
                    myCharacter.brakingDecelerationFlying = 5000;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原飞行速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxFlySpeed = 500;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.addMovement(new Type.Vector(0, 0, 5));
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxFlySpeed = 500;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 2000);
                    // 2.2秒后还原角色飞行制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationFlying = 300;
                    }, 2201);
            });
        }
    }
}
```


___

### switchToSwimming <Score text="switchToSwimming" /> 

• **switchToSwimming**(): `void` 

切换为游泳状态


::: warning Precautions

仅在游泳区域中生效

:::

使用示例:生成拱形容器并适配游泳区域，添加按键方法使角色切换游泳状态，加速游泳和上浮游泳。通过修改游泳相关属性和使用姿态和动画的播放适配对应的游泳动作。
```ts
@Core.Class
export default class CharacterSwimExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "60830,53011,20307";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            Core.GameObject.spawn({guid: "60830", transform: new Type.Transform(new Type.Vector(600, 0, 0), new Type.Rotation(0, 0, 90), new Type.Vector(20, 20, 20))});
            Core.GameObject.spawn({guid: "SwimmingVolume", transform: new Type.Transform(new Type.Vector(675, 0, 975), new Type.Rotation(0, 0, 90), new Type.Vector(10, 20, 20))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 600;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = true;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：按下键盘“1”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法：按住键盘“Up”，角色上浮
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCharacter.swimUp(5);
            });
            // 添加一个按键方法：按住键盘“Down”，角色下潜
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCharacter.swimDown(5);
            });
            // 添加一个按键方法：按下键盘“空格”，角色进行喷射加速
            InputUtil.onKeyDown(Type.Keys.SpaceBar, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作：停止动画清除姿态，还原游泳速度，清除加速周期
                    boost_interval = setInterval(() => {
                        if(!myCharacter.isMoving) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1);
                // 如果当前角色静止，修改角色为上升姿态，设置加速周期，每帧上升5个单位
                } else {
                    boostStance.play();
                    boost_interval = setInterval(() => {
                        myCharacter.swimUp(10)
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        if(isBoost) {
                            isBoost = false;
                            clearInterval(boost_interval);
                            myCharacter.maxSwimSpeed = 300;
                            boostAnimation.stop();
                            boostStance.stop();
                        }
                    }, 1000);
                    // 2.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1200);
            });
        }
    }
}
```


___

### switchToWalking <Score text="switchToWalking" /> 

• **switchToWalking**(): `void` 

切换为行走状态


使用示例:提供按键方法切换角色移动模式并给角色切换不同道具
```ts
@Core.Class
export default class CharacterMoveModeExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "23060,86749";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let item: GameObject = null;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 给角色【移动模式切换】委托添加一个函数：打印当前移动模式，根据模式切换道具
            myCharacter.onMovementModeChanged.add((mode) => {
                switch (mode) {
                    case 0:
                        item.destroy();
                        item = null;
                        break;
                    case 1:
                        item.destroy();
                        item = Core.GameObject.spawn({guid: "23060"});
                        item.parent = myCharacter;
                        break;
                    case 2:
                        item.destroy();
                        item = Core.GameObject.spawn({guid: "86749"});
                        item.parent = myCharacter;
                        item.relativeLocation = new Type.Vector(0, 0, -100);
                        item.relativeRotation = new Type.Rotation(0, 0, -90);
                        break;
                    default:
                        break;
                }
            });
            // 添加一个按键方法：键盘“1”，角色切换为行走
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.switchToWalking();
            });
            // 添加一个按键方法：键盘“2”，角色生成喷气背包，切换为飞行
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCharacter.switchToFlying();
            });
            // 添加一个按键方法：键盘“3”，角色切换为游泳
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.switchToSwimming();
            });
        }
    }
}
```


___

### syncStyle <Score text="syncStyle" /> 

• **syncStyle**(): `void` <Badge type="tip" text="client" />

同步外观数据


::: warning Precautions

角色在客户端设置外观后只会更换本地角色的外观，其他客户端角色外观未修改。通过该接口可以将本地外观广播至其他客户端。

:::

使用示例:以不同方式设置角色外观，清空外观，同步外观。外观切换完成时播放换装特效。判断外观是否加载完成播放对应动画。
```ts
@Core.Class
export default class CharacterStyleExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.styleReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            // 给【角色换装完成】委托添加函数
            myCharacter.onStyleCompleted.add(() => {
                EffectService.getInstance().playEffectOnPlayer("161245", myCharacter, SlotType.Root);
            });
            // 获取角色默认外观风格
            let defaultStyle = myCharacter.getStyleData();
            // 添加一个按键方法：按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.setStyle(defaultStyle);
            });
            // 添加一个按键方法：按下键盘“2”，更换角色外观
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style基础：角色模板为二次元男
                    myCharacter.style.advance.base.characterSetting.switchCharacter = CharacterTemplate.AnimeMale;
                    // 修改角色style头部：头大小为2倍
                    myCharacter.style.advance.headFeatures.head.headOverallScale = 2;
                    // 修改角色style体型：身高为2倍
                    myCharacter.style.advance.bodyFeatures.body.height = 2;
                    // 修改角色style化妆：腮红为75674
                    myCharacter.style.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发：前发为57731，后发为63910
                    myCharacter.style.advance.hair.frontHair.style = "57731";
                    myCharacter.style.advance.hair.backHair.style = "63910";
                    // 修改角色style：上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.style.advance.clothing.upperCloth.style = "58694";
                    myCharacter.style.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.style.advance.clothing.gloves.style = "60384";
                    myCharacter.style.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法：按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCharacter.syncStyle();
            });
            // 添加一个按键方法：按下键盘“4”，解析角色外观文件并应用
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                let style = Character.resovleStyle("136183");
                myCharacter.setStyle(style);
            });
            // 添加一个按键方法：按下键盘“8”，清空角色外观
            InputUtil.onKeyDown(Type.Keys.Five, () => {
                myCharacter.clearStyle();
            });
        }
    }
}
```

