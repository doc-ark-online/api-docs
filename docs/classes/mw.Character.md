[AVATAR](../groups/AVATAR.AVATAR.md) / Character

# Character <Badge type="tip" text="Class" /> <Score text="Character" />

角色

什么是角色？
角色是指代表玩家游戏实体。它是游戏中能够在虚拟世界中移动、与环境和其他角色进行交互的主要对象。可以将 Character 看作是游戏中的角色扮演者，它可以是玩家控制的角色或由游戏系统控制的角色。

![角色](https://cdn.233xyx.com/online/wdCIt49Y8Iaj1700202166556.jpg)
角色具备：

角色具备哪些功能？

移动和交互。Character 具备在游戏世界中移动和与环境进行交互的能力。它可以行走、跑动、跳跃或飞行等，根据游戏规则和角色设计的不同， Character 可以执行各种动作。

功能和行为。Character 可以具备各种功能和行为。例如，一个角色可以是战士，具有攻击和防御技能；另一个角色可以是商人，负责交易和提供物品。 Character 的功能和行为由游戏开发者根据游戏需求进行定义和实现。

总的来说：
1. 控制角色移动：你可以使用它来指定角色的移动速度、方向和加速度等参数。它允许你以编程的方式控制角色的运动，例如让角色向前移动、旋转或跳跃等。并支持多种移动方式：例如，它可以实现直线运动、旋转、跳跃、游泳、蹲伏和飞行等。根据你的游戏需求，你可以选择合适的移动方式，并使用对应接口来实现。
![角色](https://athena-tob-flash.oss-cn-beijing.aliyuncs.com/online/XjhVuTWhBEkk1700475117084.png)

2. 处理物理模拟与碰撞：它可以使用物理引擎来模拟角色的重力、碰撞和惯性等效果。通过物理模拟，角色可以与游戏世界中的其他对象进行交互，并受到合理的物理影响。执行碰撞检测：它可以检测角色与墙壁、地面或其他角色的碰撞，并采取相应的行动。这有助于实现更真实和可靠的角色移动和交互。
3. 处理角色外观：可以给角色赋予各种各样的外貌。为角色选择合适的服装、装备和特征。无论是超级英雄的紧身服、中世纪骑士的盔甲还是未来战士的高科技装备，感受到角色的独特风格和个性。
4. 实现生动的动画：还能赋予角色生动的动画效果。能够让角色在游戏中跳跃、奔跑、战斗，甚至是展现出各种特殊技能和动作。
![角色](https://athena-tob-flash.oss-cn-beijing.aliyuncs.com/online/C8K9d1ViMiJ51700475133926.png)


其中比较重要的：

- addMovement 函数控制角色沿着给定方向移动。

- loadAnimation 函数将左侧动画资源加载在角色身上，使角色自如的使用多种动作。

- description 属性更改角色外观，左侧栏中提供角色大量的衣服、饰品等资源，传入资源ID字符串进行随意更换外观。

## Hierarchy

- [`Pawn`](mw.Pawn.md)

  ↳ **`Character`**

## Table of contents

### Properties <Score text="Properties" /> 
| **[onDescriptionChange](mw.Character.md#ondescriptionchange)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnDescriptionChange`](../modules/Core.mw.md#ondescriptionchange)\>  |
| :-----|
| 外观加载细节变化委托|
| **[onDescriptionComplete](mw.Character.md#ondescriptioncomplete)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnDescriptionComplete`](../modules/Core.mw.md#ondescriptioncomplete)\>  |
| 外观加载完成委托|
| **[onMovementModeChange](mw.Character.md#onmovementmodechange)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnMovementModeChange`](../modules/Core.mw.md#onmovementmodechange)\>  |
| 移动模式切换时的回调|

### Accessors <Score text="Accessors" /> 
| **[brakingDecelerationFlying](mw.Character.md#brakingdecelerationflying)**(): `number`  |
| :-----|
| 飞行制动速率|
| **[brakingDecelerationSwimming](mw.Character.md#brakingdecelerationswimming)**(): `number`  |
| 游泳制动速率|
| **[brakingDecelerationWalking](mw.Character.md#brakingdecelerationwalking)**(): `number`  |
| 行走制动速率|
| **[canJumpOutOfWater](mw.Character.md#canjumpoutofwater)**(): `boolean`  |
| 可以跳出水面|
| **[canStandOn](mw.Character.md#canstandon)**(): `boolean`  |
| 是否可站立|
| **[capsuleCorrectionEnabled](mw.Character.md#capsulecorrectionenabled)**(): `boolean`  |
| 使用胶囊体修正|
| **[characterType](mw.Character.md#charactertype)**(): [`CharacterType`](../enums/mw.CharacterType.md)  |
| 角色类型|
| **[collisionExtent](mw.Character.md#collisionextent)**(): [`Vector`](mw.Vector.md)  |
| 碰撞形状大小|
| **[collisionShape](mw.Character.md#collisionshape)**(): [`CustomShapeType`: [`CustomShapeType`](../enums/mw.CustomShapeType.md)](../enums/mw.CustomShapeType.md)  |
| 碰撞形状|
| **[collisionWithOtherCharacterEnabled](mw.Character.md#collisionwithothercharacterenabled)**(): `boolean`  |
| 启用与角色的碰撞|
| **[complexMovementEnabled](mw.Character.md#complexmovementenabled)**(): `boolean`  |
| 是否启用复杂移动策略|
| **[crouchEnabled](mw.Character.md#crouchenabled)**(): `boolean`  |
| 启用下蹲能力|
| **[crouchedHeight](mw.Character.md#crouchedheight)**(): `number`  |
| 下蹲时碰撞盒高度|
| **[currentAnimation](mw.Character.md#currentanimation)**(): [`Animation`](mw.Animation.md)  |
| 当前播放的动画对象|
| **[currentStance](mw.Character.md#currentstance)**(): [`Stance`](mw.Stance.md)  |
| 当前正在播放的基础姿态|
| **[currentSubStance](mw.Character.md#currentsubstance)**(): [`SubStance`](mw.SubStance.md)  |
| 当前正在播放的二级姿态|
| **[description](mw.Character.md#description)**(): [`CharacterDescription`](mw.CharacterDescription.md)  |
| 角色外观配置，返回值为CharacterDescription类，调用description变量可以修改角色的外观，可更改角色的外观参数详见CharacterDescription类。|
| **[displayName](mw.Character.md#displayname)**(): `string`  |
| 角色名称|
| **[driftControl](mw.Character.md#driftcontrol)**(): `number`  |
| 空中灵活度|
| **[forceUpdateMovement](mw.Character.md#forceupdatemovement)**(`value`: `boolean`): `void`  |
| 强制更新移动|
| **[gravityScale](mw.Character.md#gravityscale)**(): `number`  |
| 重力倍率|
| **[groundFriction](mw.Character.md#groundfriction)**(): `number`  |
| 地面摩檫力|
| **[groundFrictionEnabled](mw.Character.md#groundfrictionenabled)**(): `boolean`  |
| 启用单独制动摩擦|
| **[horizontalBrakingDecelerationFalling](mw.Character.md#horizontalbrakingdecelerationfalling)**(): `number`  |
| 下落制动速率|
| **[isCrouching](mw.Character.md#iscrouching)**(): `boolean`  |
| 是否正在蹲下|
| **[isDescriptionReady](mw.Character.md#isdescriptionready)**(): `boolean`  |
| 刚进入场景中角色还未加载出外观衣服等时，isDescriptionReady为false,完全加载完成后变为true。|
| **[isJumping](mw.Character.md#isjumping)**(): `boolean`  |
| 正在跳跃|
| **[isMoving](mw.Character.md#ismoving)**(): `boolean`  |
| 正在移动|
| **[jumpEnabled](mw.Character.md#jumpenabled)**(): `boolean`  |
| 启用跳跃能力|
| **[jumpMaxCount](mw.Character.md#jumpmaxcount)**(): `number`  |
| 最大可跳跃次数|
| **[maxAcceleration](mw.Character.md#maxacceleration)**(): `number`  |
| 最大加速度|
| **[maxFallingSpeed](mw.Character.md#maxfallingspeed)**(): `number`  |
| 最大下落速度|
| **[maxFlySpeed](mw.Character.md#maxflyspeed)**(): `number`  |
| 最大飞行速度|
| **[maxJumpHeight](mw.Character.md#maxjumpheight)**(): `number`  |
| 最大跳跃高度|
| **[maxStepHeight](mw.Character.md#maxstepheight)**(): `number`  |
| 最大可跨越高度|
| **[maxSwimSpeed](mw.Character.md#maxswimspeed)**(): `number`  |
| 最大游泳速度|
| **[maxWalkSpeed](mw.Character.md#maxwalkspeed)**(): `number`  |
| 最大行走速度|
| **[maxWalkSpeedCrouched](mw.Character.md#maxwalkspeedcrouched)**(): `number`  |
| 最大蹲伏行走速度|
| **[meshOffset](mw.Character.md#meshoffset)**(): [`Vector`](mw.Vector.md)  |
| 设置mesh相对角色坐标点的偏移|
| **[moveFacingDirection](mw.Character.md#movefacingdirection)**(): [`MoveFacingDirection`](../enums/mw.MoveFacingDirection.md)  |
| 运动面朝方向|
| **[movementAxisDirection](mw.Character.md#movementaxisdirection)**(): [`Vector`](mw.Vector.md)  |
| 运动时依据的轴方向|
| **[movementDirection](mw.Character.md#movementdirection)**(): [`MovementDirection`](../enums/mw.MovementDirection.md)  |
| 运动正方向|
| **[movementEnabled](mw.Character.md#movementenabled)**(): `boolean`  |
| 启用移动能力|
| **[movementMode](mw.Character.md#movementmode)**(): [`MovementMode`](../enums/mw.MovementMode.md)  |
| 移动模式|
| **[outOfWaterVerticalSpeed](mw.Character.md#outofwaterverticalspeed)**(): `number`  |
| 出水时垂直方向速度|
| **[overheadUI](mw.Character.md#overheadui)**(): [`UIWidget`](mw.UIWidget.md)  |
| 获取头顶UIWidget|
| **[physicsEnabled](mw.Character.md#physicsenabled)**(): `boolean`  |
| 设置角色物理状态|
| **[ragdollEnabled](mw.Character.md#ragdollenabled)**(): `boolean`  |
| 启用布娃娃|
| **[rotateRate](mw.Character.md#rotaterate)**(): `number`  |
| 最大转向速度|
| **[velocity](mw.Character.md#velocity)**(): [`Vector`](mw.Vector.md)  |
| 当前移动速度|
| **[walkableFloorAngle](mw.Character.md#walkablefloorangle)**(): `number`  |
| 可行走的最大角度|
| **[nameDisplayDistance](mw.Character.md#namedisplaydistance)**(): `number`  |
| 当前客户端所有角色头顶显示名称可见距离，当角色头顶显示名称可见时生效。距离为0时不可见。|
| **[nameVisible](mw.Character.md#namevisible)**(): `boolean`  |
| 当前客户端所有角色头顶显示名称是否可见，属性为true时角色头顶显示名称可见，属性为false时角色头顶显示名称不可见。|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[customTimeDilation](mw.Pawn.md#customtimedilation)**(): `number`  |
| :-----|
| 膨胀时间速度|
| **[player](mw.Pawn.md#player)**(): [`Player`](mw.Player.md)  |
| 玩家对象|
:::


### Methods <Score text="Methods" /> 
| **[addImpulse](mw.Character.md#addimpulse)**(`Vector`: [`Vector`](mw.Vector.md), `ignoreMass?`: `boolean`): `void`  |
| :-----|
| 添加冲量|
| **[addMovement](mw.Character.md#addmovement)**(`direction`: [`Vector`](mw.Vector.md)): `void`  |
| 沿着给定的方向向量添加移动输入，不会自动应用移动，由开发者在 onUpdate 事件中执行此操作。|
| **[attachToSlot](mw.Character.md#attachtoslot)**(`gameObject`: [`GameObject`](mw.GameObject.md), `slotName`: [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md)): `void`  |
| 将物体附着到人物角色的指定插槽|
| **[clearDescription](mw.Character.md#cleardescription)**(`appearance?`: `boolean`, `slotAndDecoration?`: `boolean`): `void`  |
| 清空外观数据|
| **[crouch](mw.Character.md#crouch)**(`isCrouch`: `boolean`): `void`  |
| 下蹲|
| **[detachAllFromSlot](mw.Character.md#detachallfromslot)**(`param?`: `Object`): `void`  |
| 将角色插槽附着的对象全部分离|
| **[detachFromSlot](mw.Character.md#detachfromslot)**(`gameObject`: [`GameObject`](mw.GameObject.md)): `void`  |
| 将物体从插槽中分离|
| **[getDescription](mw.Character.md#getdescription)**(): [`CharacterDescription`](mw.CharacterDescription.md)  |
| 获取外观数据|
| **[getSlotWorldPosition](mw.Character.md#getslotworldposition)**(`slotName`: [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md)): [`Vector`](mw.Vector.md)  |
| 获取角色插槽的世界坐标|
| **[getVertexPosition](mw.Character.md#getvertexposition)**(`index`: `number`): [`Vector`](mw.Vector.md)  |
| 通过头部模型顶点index实时获取顶点位置|
| **[jump](mw.Character.md#jump)**(): `void`  |
| 跳跃|
| **[loadAnimation](mw.Character.md#loadanimation)**(`assetId`: `string`): [`Animation`](mw.Animation.md)  |
| 加载动画|
| **[loadStance](mw.Character.md#loadstance)**(`assetId`: `string`): [`Stance`](mw.Stance.md)  |
| 加载基础姿态|
| **[loadSubStance](mw.Character.md#loadsubstance)**(`assetId`: `string`): [`SubStance`](mw.SubStance.md)  |
| 加载姿态|
| **[lookAt](mw.Character.md#lookat)**(`target`: [`Vector`](mw.Vector.md)): `void`  |
| 角色面朝目标点|
| **[setCollisionShapeAndExtent](mw.Character.md#setcollisionshapeandextent)**(`shapeType`: [`CustomShapeType`](../enums/mw.CustomShapeType.md), `collisionExtent`: [`Vector`](mw.Vector.md)): `void`  |
| 设置不同形状不同大小的碰撞体|
| **[setDescription](mw.Character.md#setdescription)**(`data`: `string`  `string`[]  [`CharacterDescription`](mw.CharacterDescription.md)): `void`  |
| 设置外观数据|
| **[swimDown](mw.Character.md#swimdown)**(`speed`: `number`): `void`  |
| 水中下潜|
| **[swimUp](mw.Character.md#swimup)**(`speed`: `number`): `void`  |
| 水中上浮|
| **[switchToFlying](mw.Character.md#switchtoflying)**(): `void`  |
| 切换为飞行状态|
| **[switchToSwimming](mw.Character.md#switchtoswimming)**(): `void`  |
| 切换为游泳状态|
| **[switchToWalking](mw.Character.md#switchtowalking)**(): `void`  |
| 切换为行走状态|
| **[syncDescription](mw.Character.md#syncdescription)**(`appearance?`: `boolean`, `slotAndDecoration?`: `boolean`): `void`  |
| 同步外观数据|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[setOutline](mw.Pawn.md#setoutline)**(`enabled`: `boolean`, `color?`: [`LinearColor`](mw.LinearColor.md), `width?`: `number`): `void`  |
| :-----|
| 添加描边效果|
| **[setPostProcessOutline](mw.Pawn.md#setpostprocessoutline)**(`enabled`: `boolean`, `color?`: [`LinearColor`](mw.LinearColor.md), `width?`: `number`): `void`  |
| 添加后处理描边|
:::


## Properties

### onDescriptionChange <Score text="onDescriptionChange" /> 

• **onDescriptionChange**: [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnDescriptionChange`](../modules/Core.mw.md#ondescriptionchange)\> 

外观加载细节变化委托


::: warning Precautions

当角色对象外观发生变化时执行绑定函数

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183"拖入优先加载栏。创建一个名为"Example_Character_OnDescriptionChange"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到玩家控制角色玩家外观准备未完成播放摊手的效果.给【角色外观描述完成】委托添加函数来播放换装完成特效，并保存角色初始默认外观数据。给【角色外观描述变化】委托添加函数在控制台打印当前角色外观描述变化的具体子项和索引。按下键盘“1”，重置为默认角色外观。按下键盘“2”，修改角色外观。按下键盘“3”，同步角色外观。按下键盘“4”，清空角色外观。代码如下:
</span>

```ts
@Component
export default class Example_Character_OnDescriptionChange extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.isDescriptionReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            let defaultStyle = null;
            // 给【角色外观描述完成】委托添加函数
            myCharacter.onDescriptionComplete.add(() => {
                // 播放换装完成特效
                EffectService.playOnGameObject("161245", myCharacter);
                // 获取角色默认外观风格
                if(defaultStyle == null) {
                    defaultStyle = myCharacter.getDescription();
                }
            });
            // 给【角色外观描述变化】委托添加函数
            myCharacter.onDescriptionChange.add((operationCode: number, index: number, value: unknown) => {
                console.log("Appearance Changed");
                console.log("OperationCode " + operationCode + " Index " + index);
            });
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.setDescription(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，修改角色外观
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style头部:头大小为1.5倍
                    myCharacter.description.advance.headFeatures.head.headOverallScale = 1.5;
                    // 修改角色style体型:身高为1.2倍
                    myCharacter.description.advance.bodyFeatures.body.height = 1.2;
                    // 修改角色style化妆:腮红为75674
                    myCharacter.description.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发:前发为57731，后发为63910
                    myCharacter.description.advance.hair.frontHair.style = "57731";
                    myCharacter.description.advance.hair.backHair.style = "63910";
                    // 修改角色style:上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.description.advance.clothing.upperCloth.style = "58694";
                    myCharacter.description.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.description.advance.clothing.gloves.style = "60384";
                    myCharacter.description.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法:按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.syncDescription();
            });
            // 添加一个按键方法:按下键盘“4”，清空角色外观
            InputUtil.onKeyDown(Keys.Four, () => {
                myCharacter.clearDescription();
            });
        }
    }
}
```

___

### onDescriptionComplete <Score text="onDescriptionComplete" /> 

• **onDescriptionComplete**: [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnDescriptionComplete`](../modules/Core.mw.md#ondescriptioncomplete)\> 

外观加载完成委托


::: warning Precautions

当角色对象外观加载完成时执行绑定函数

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183"拖入优先加载栏。创建一个名为"Example_Character_OnDescriptionComplete"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到玩家控制角色玩家外观准备未完成播放摊手的效果.给【角色外观描述完成】委托添加函数来播放换装完成特效，并保存角色初始默认外观数据。给【角色外观描述变化】委托添加函数在控制台打印当前角色外观描述变化的具体子项和索引。按下键盘“1”，重置为默认角色外观。按下键盘“2”，修改角色外观。按下键盘“3”，同步角色外观。按下键盘“4”，清空角色外观。代码如下:
</span>

```ts
@Component
export default class Example_Character_OnDescriptionComplete extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.isDescriptionReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            let defaultStyle = null;
            // 给【角色换装完成】委托添加函数
            myCharacter.onDescriptionComplete.add(() => {
                // 播放换装完成特效
                EffectService.playOnGameObject("161245", myCharacter, {slotType:HumanoidSlotType.Hair});
                // 获取角色默认外观风格
                if(defaultStyle == null) {
                    defaultStyle = myCharacter.getDescription();
                }
            });
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.setDescription(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，修改角色外观
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style头部:头大小为1.5倍
                    myCharacter.description.advance.headFeatures.head.headOverallScale = 1.5;
                    // 修改角色style体型:身高为1.2倍
                    myCharacter.description.advance.bodyFeatures.body.height = 1.2;
                    // 修改角色style化妆:腮红为75674
                    myCharacter.description.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发:前发为57731，后发为63910
                    myCharacter.description.advance.hair.frontHair.style = "57731";
                    myCharacter.description.advance.hair.backHair.style = "63910";
                    // 修改角色style:上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.description.advance.clothing.upperCloth.style = "58694";
                    myCharacter.description.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.description.advance.clothing.gloves.style = "60384";
                    myCharacter.description.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法:按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.syncDescription();
            });
            // 添加一个按键方法:按下键盘“4”，清空角色外观
            InputUtil.onKeyDown(Keys.Four, () => {
                myCharacter.clearDescription();
            });
        }
    }
}
```

___

### onMovementModeChange <Score text="onMovementModeChange" /> 

• **onMovementModeChange**: [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnMovementModeChange`](../modules/Core.mw.md#onmovementmodechange)\> 

移动模式切换时的回调


::: warning Precautions

当角色移动状态切换时执行绑定函数

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"23060,86749"拖入优先加载栏。创建一个名为"Example_Character_OnMovementModeChange"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中创建游泳池以便支持切换游泳状态。给角色【移动模式切换】委托添加一个函数:打印当前移动模式，看到角色根据运动模式切换道具的效果。按下键盘“1”，角色切换为行走。按下键盘“2”，角色切换为游泳(需在游泳区域内)。按下键盘“3”，角色生成喷气背包，切换为飞行。.代码如下:
</span>

```ts
@Component
export default class Example_Character_movementMode extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 创建游泳池
            let swimmingPool = GameObject.spawn("SwimmingVolume",{ transform: new Transform(new Vector(600, 0, 0), Rotation.zero, new Vector(10, 10, 1))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let item: GameObject = null;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 给角色【移动模式切换】委托添加一个函数:打印当前移动模式，根据模式切换道具
            myCharacter.onMovementModeChange.add((mode) => {
                console.log("current movementMode " + myCharacter.movementMode);
                switch (mode) {
                    case 0:
                        if(item) {
                            item.destroy();
                        }
                        item = null;
                        break;
                    case 1:
                        if(item) {
                            item.destroy();
                        }
                        item = GameObject.spawn("23060");
                        myCharacter.attachToSlot(item, HumanoidSlotType.Buttocks);
                        break;
                    case 2:
                        if(item) {
                            item.destroy();
                        }
                        item = GameObject.spawn("86749");
                        myCharacter.attachToSlot(item, HumanoidSlotType.BackOrnamental);
                        item.localTransform.position = new Vector(-5, 0, -125);
                        item.localTransform.rotation = new Rotation(0, 0, 90);
                        break;
                    default:
                        break;
                }
            });
            // 添加一个按键方法:按下键盘“1”，角色切换为行走
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.switchToWalking();
            });
            // 添加一个按键方法:按下键盘“2”，角色切换为游泳(需在游泳区域内)
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法:按下键盘“3”，角色生成喷气背包，切换为飞行
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.switchToFlying();
            });
        }
    }
}
```

## Accessors

___

### brakingDecelerationFlying <Score text="brakingDecelerationFlying" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **brakingDecelerationFlying**(): `number` 

</th>
<th style="text-align: left">

• `set` **brakingDecelerationFlying**(`InBrakingDecelerationFlying`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


飞行制动速率


::: warning Precautions

角色在空中移动时受到的减速度

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


飞行制动速率


::: warning Precautions

角色在空中移动时受到的减速度

:::

#### Parameters

| `InBrakingDecelerationFlying` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"53011,20307"拖入优先加载栏。创建一个名为"Example_BrakingDecelerationFlying"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，角色切换为飞行，按下键盘“2”，角色进行喷射加速，修改飞行制动速度。你将在场景中看到角色在加速飞行过程中飞行制动速度变化的效果.代码如下:
</span>

```ts
@Component
export default class Example_BrakingDecelerationFlying extends Script {
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
            boostAnimation.loop = 0;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadSubStance("20307");
            // 添加一个按键方法:键盘“1”，角色切换为飞行
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.switchToFlying();
            });
            // 添加一个按键方法:按下键盘“2”，角色进行喷射加速
            InputUtil.onKeyDown(Keys.Two, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放飞行动画，修改飞行速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxFlySpeed = 2000;
                    myCharacter.brakingDecelerationFlying = 5000;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作:停止动画清除姿态，还原飞行速度，清除加速周期
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
                        myCharacter.addMovement(new Vector(0, 0, 5));
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        isBoost = false;
                        clearInterval(boost_interval);
                        myCharacter.maxFlySpeed = 500;
                        boostAnimation.stop();
                        boostStance.stop();
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
___

### brakingDecelerationSwimming <Score text="brakingDecelerationSwimming" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **brakingDecelerationSwimming**(): `number` 

</th>
<th style="text-align: left">

• `set` **brakingDecelerationSwimming**(`InBrakingDecelerationSwimming`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


游泳制动速率


::: warning Precautions

角色在游泳状态下移动时受到的减速度

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


游泳制动速率


::: warning Precautions

角色在游泳状态下移动时受到的减速度

:::

#### Parameters

| `InBrakingDecelerationSwimming` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"53011,20307"拖入优先加载栏。创建一个名为"Example_BrakingDecelerationSwimming"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成拱形容器并适配游泳区域.按下键盘“1”，角色切换游泳.按下键盘“4”，角色修改游泳制动速度后进行喷射加速.你可以看到的角色游泳制动速度变化的效果.代码如下:
</span>

```ts
@Component
export default class Example_BrakingDecelerationSwimming extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            GameObject.spawn("SwimmingVolume",{transform: new Transform(new Vector(0, 0, 500), new Rotation(0, 0, 90), new Vector(20, 20, 10))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let flag = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 100;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = 10;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadSubStance("20307");
            // 添加一个按键方法:按下键盘“1”，角色切换游泳 / 行走
            InputUtil.onKeyDown(Keys.One, () => {
                if(flag) {
                    myCharacter.switchToWalking();
                } else {
                    myCharacter.switchToSwimming();
                }
                flag = !flag;
            });
            // 添加一个按键方法:按住键盘“2”，角色上浮
            InputUtil.onKeyPress(Keys.Two, () => {
                myCharacter.swimUp(10);
            });
            // 添加一个按键方法:按住键盘“3”，角色下潜
            InputUtil.onKeyPress(Keys.Three, () => {
                myCharacter.swimDown(10);
            });
            // 添加一个按键方法:按下键盘“4”，角色进行喷射加速
            InputUtil.onKeyDown(Keys.Four, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作:停止动画清除姿态，还原游泳速度，清除加速周期
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
                        myCharacter.swimUp(1)
                    }, 1);
                }
                // 1秒后执行停止加速操作
                    setTimeout(() => {
                        isBoost = false;
                        clearInterval(boost_interval);
                        myCharacter.maxSwimSpeed = 300;
                        boostAnimation.stop();
                        boostStance.stop();
                    }, 1000);
                    // 1.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1200);
            });
        }
    }
}
```
___

### brakingDecelerationWalking <Score text="brakingDecelerationWalking" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **brakingDecelerationWalking**(): `number` 

</th>
<th style="text-align: left">

• `set` **brakingDecelerationWalking**(`InBrakingDecelerationWalking`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


行走制动速率


::: warning Precautions

角色在行走时受到的减速度。仅在启用单独制动摩擦时生效。

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


行走制动速率


::: warning Precautions

角色在行走时受到的减速度。仅在启用单独制动摩擦时生效。

:::

#### Parameters

| `InBrakingDecelerationWalking` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_BrakingDecelerationWalking"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将设置角色行走制动速率为原来的0.1倍,并在场景中看到角色移动加速变快的效果.代码如下:
</span>

```ts
@Component
export default class Example_BrakingDecelerationWalking extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            this.useUpdate = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration;
            // 设置角色最大转向速度为原来的0.5倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate;
            // 设置角色最大行走速度为原来的2倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking;
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 1;
            // 添加一个按键方法：按下键盘“1”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.groundFrictionEnabled = !myCharacter.groundFrictionEnabled;
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
___

### canJumpOutOfWater <Score text="canJumpOutOfWater" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **canJumpOutOfWater**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **canJumpOutOfWater**(`value`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


可以跳出水面


::: warning Precautions

角色通过是否swimUp接口上浮到水面时是否可以跳出水面。true表示可以跳出水面，false表示不可以跳出水面，只会浮在水中。

:::


#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


可以跳出水面


::: warning Precautions

角色通过是否swimUp接口上浮到水面时是否可以跳出水面。true表示可以跳出水面，false表示不可以跳出水面，只会浮在水中。

:::

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"53011,20307"拖入优先加载栏。创建一个名为"CanJumpOutOfWater"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,设置角色可以跳出水面。在场景中生成拱形容器并适配游泳区域.按住键盘“2”，角色上浮.你可以看到的角色到达水面并跃出的效果.代码如下:
</span>

```ts
@Component
export default class CanJumpOutOfWater extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            GameObject.spawn("SwimmingVolume",{transform: new Transform(new Vector(0, 0, 500), new Rotation(0, 0, 90), new Vector(20, 20, 10))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let flag = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 100;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = 10;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadSubStance("20307");
            // 添加一个按键方法:按下键盘“1”，角色切换游泳 / 行走
            InputUtil.onKeyDown(Keys.One, () => {
                if(flag) {
                    myCharacter.switchToWalking();
                } else {
                    myCharacter.switchToSwimming();
                }
                flag = !flag;
            });
            // 添加一个按键方法:按住键盘“2”，角色上浮
            InputUtil.onKeyPress(Keys.Two, () => {
                myCharacter.swimUp(10);
            });
            // 添加一个按键方法:按住键盘“3”，角色下潜
            InputUtil.onKeyPress(Keys.Three, () => {
                myCharacter.swimDown(10);
            });
            // 添加一个按键方法:按下键盘“4”，角色进行喷射加速
            InputUtil.onKeyDown(Keys.Four, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作:停止动画清除姿态，还原游泳速度，清除加速周期
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
                        myCharacter.swimUp(1)
                    }, 1);
                }
                // 1秒后执行停止加速操作
                    setTimeout(() => {
                        isBoost = false;
                        clearInterval(boost_interval);
                        myCharacter.maxSwimSpeed = 300;
                        boostAnimation.stop();
                        boostStance.stop();
                    }, 1000);
                    // 1.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1200);
            });
        }
    }
}
```
___

### canStandOn <Score text="canStandOn" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **canStandOn**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **canStandOn**(`CanStepUpOn`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否可站立


::: warning Precautions

角色是否可以被其他玩家站立。true表示其他角色可以站到玩家头上。false表示其他角色不可以站到玩家头上。

:::


#### Returns

| `boolean` | true 其他角色可以站到玩家头上  false 其他角色不可以站到玩家头上 |
| :------ | :------ |


</td>
<td style="text-align: left">


是否可站立


::: warning Precautions

角色是否可以被其他玩家站立。true表示其他角色可以站到玩家头上。false表示其他角色不可以站到玩家头上。

:::

#### Parameters

| `CanStepUpOn` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"36851"拖入优先加载栏。创建一个名为"Example_Character_CanStandOn"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成一个NPC。按下键盘“2”，开启/关闭角色是否可被站立.可以看到NPC切换可被站立后与角色不同的交互效果.代码如下:
</span>

```ts
@Component
export default class Example_Character_CanStandOn extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成拱门带碰撞的拱门
            let arch = GameObject.spawn("36851",{transform: new Transform(new Vector(300, 210, 0), new Rotation(0, 0, 90), new Vector(2, 1, 2))}) as Model;
            arch.setCollision(CollisionStatus.On);
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性和跳跃属性
            myCharacter.capsuleCorrectionEnabled = true;
            myCharacter.maxJumpHeight = 250;
            let NPC = Player.spawnDefaultCharacter();
            NPC.worldTransform.position = new Vector(0, 100, 100);
            // 添加一个按键方法：按下键盘“1”，开启/关闭NPC与其他角色的碰撞
            InputUtil.onKeyDown(Keys.One, () => {
                NPC.collisionWithOtherCharacterEnabled = !NPC.collisionWithOtherCharacterEnabled;
                console.log("NPC与角色的碰撞 " + NPC.collisionWithOtherCharacterEnabled);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立
            InputUtil.onKeyDown(Keys.Two, () => {
                NPC.canStandOn = !NPC.canStandOn;
                console.log("NPC角色可被站立 " + NPC.canStandOn);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Keys.Three, () => {
                // 碰撞范围collisionExtent内部值全是半值，半径半高半长
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Vector(50, 50, 200));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```
___

### capsuleCorrectionEnabled <Score text="capsuleCorrectionEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **capsuleCorrectionEnabled**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **capsuleCorrectionEnabled**(`usedCapsuleCorrection`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


使用胶囊体修正


::: warning Precautions

角色当前是否使用胶囊体修。true代表应用角色编辑中的数据自动计算胶囊体大小。false代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。

:::


#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


使用胶囊体修正


::: warning Precautions

角色当前是否使用胶囊体修。true代表应用角色编辑中的数据自动计算胶囊体大小。false代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。

:::

#### Parameters

| `usedCapsuleCorrection` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"36851"拖入优先加载栏。创建一个名为"Example_Character_CapsuleCorrectionEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,设置角色碰撞修正为true，代表角色碰撞会和角色外观保持一致.代码如下:
</span>

```ts
@Component
export default class Example_Character_CapsuleCorrectionEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成拱门带碰撞的拱门
            let arch = GameObject.spawn("36851",{transform: new Transform(new Vector(300, 210, 0), new Rotation(0, 0, 90), new Vector(2, 1, 2))}) as Model;
            arch.setCollision(CollisionStatus.On);
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性和跳跃属性
            myCharacter.capsuleCorrectionEnabled = true;
            myCharacter.maxJumpHeight = 250;
            let NPC = Player.spawnDefaultCharacter();
            NPC.worldTransform.position = new Vector(0, 100, 100);
            // 添加一个按键方法：按下键盘“1”，开启/关闭NPC与其他角色的碰撞
            InputUtil.onKeyDown(Keys.One, () => {
                NPC.collisionWithOtherCharacterEnabled = !NPC.collisionWithOtherCharacterEnabled;
                console.log("NPC与角色的碰撞 " + NPC.collisionWithOtherCharacterEnabled);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立
            InputUtil.onKeyDown(Keys.Two, () => {
                NPC.canStandOn = !NPC.canStandOn;
                console.log("NPC角色可被站立 " + NPC.canStandOn);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Keys.Three, () => {
                // 碰撞范围collisionExtent内部值全是半值，半径半高半长
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Vector(50, 50, 200));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```
___

### characterType <Score text="characterType" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **characterType**(): [`CharacterType`](../enums/mw.CharacterType.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


角色类型


#### Returns

| [`CharacterType`](../enums/mw.CharacterType.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183"拖入优先加载栏。创建一个名为"Example_Character_CharacterType"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到玩家控制角色玩家外观准备未完成播放摊手的效果.给【角色外观描述完成】委托添加函数来播放换装完成特效，并保存角色初始默认外观数据。给【角色外观描述变化】委托添加函数在控制台打印当前角色外观描述变化的具体子项和索引。按下键盘“1”，重置为默认角色外观。按下键盘“2”，修改角色外观。按下键盘“3”，同步角色外观。按下键盘“4”，清空角色外观。代码如下:
</span>

```ts
@Component
export default class Example_Character_CharacterType extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.isDescriptionReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            let defaultStyle = null;
            // 给【角色外观描述完成】委托添加函数
            myCharacter.onDescriptionComplete.add(() => {
                // 播放换装完成特效
                EffectService.playOnGameObject("161245", myCharacter);
                // 获取角色默认外观风格
                if(defaultStyle == null) {
                    defaultStyle = myCharacter.getDescription();
                }
            });
            // 给【角色外观描述变化】委托添加函数
            myCharacter.onDescriptionChange.add((operationCode: number, index: number, value: unknown) => {
                console.log("Appearance Changed");
                console.log("OperationCode " + operationCode + " Index " + index);
            });
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.setDescription(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，修改角色外观
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style头部:头大小为1.5倍
                    myCharacter.description.advance.headFeatures.head.headOverallScale = 1.5;
                    // 修改角色style体型:身高为1.2倍
                    myCharacter.description.advance.bodyFeatures.body.height = 1.2;
                    // 修改角色style化妆:腮红为75674
                    myCharacter.description.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发:前发为57731，后发为63910
                    myCharacter.description.advance.hair.frontHair.style = "57731";
                    myCharacter.description.advance.hair.backHair.style = "63910";
                    // 修改角色style:上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.description.advance.clothing.upperCloth.style = "58694";
                    myCharacter.description.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.description.advance.clothing.gloves.style = "60384";
                    myCharacter.description.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法:按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.syncDescription();
            });
            // 添加一个按键方法:按下键盘“4”，清空角色外观
            InputUtil.onKeyDown(Keys.Four, () => {
                myCharacter.clearDescription();
            });
        }
    }
}
```
___

### collisionExtent <Score text="collisionExtent" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **collisionExtent**(): [`Vector`](mw.Vector.md) 

</th>
<th style="text-align: left">

• `set` **collisionExtent**(`extent`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


碰撞形状大小


::: warning Precautions

角色碰撞盒形状的大小，决定角色与场景对象交互时检测碰撞范围的大小。

:::


#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


碰撞形状大小


::: warning Precautions

角色碰撞盒形状的大小，决定角色与场景对象交互时检测碰撞范围的大小。

:::

#### Parameters

| `extent` | [`Vector`](mw.Vector.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"36851"拖入优先加载栏。创建一个名为"Example_Character_CollisionExtent"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“3”，修改角色碰撞并打印结果.你将在控制台中看到打印的当前角色碰撞形状大小.代码如下:
</span>

```ts
@Component
export default class Example_Character_CollisionExtent extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成拱门带碰撞的拱门
            let arch = GameObject.spawn("36851",{transform: new Transform(new Vector(300, 210, 0), new Rotation(0, 0, 90), new Vector(2, 1, 2))}) as Model;
            arch.setCollision(CollisionStatus.On);
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性和跳跃属性
            myCharacter.capsuleCorrectionEnabled = true;
            myCharacter.maxJumpHeight = 250;
            let NPC = Player.spawnDefaultCharacter();
            NPC.worldTransform.position = new Vector(0, 100, 100);
            // 添加一个按键方法：按下键盘“1”，开启/关闭NPC与其他角色的碰撞
            InputUtil.onKeyDown(Keys.One, () => {
                NPC.collisionWithOtherCharacterEnabled = !NPC.collisionWithOtherCharacterEnabled;
                console.log("NPC与角色的碰撞 " + NPC.collisionWithOtherCharacterEnabled);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立
            InputUtil.onKeyDown(Keys.Two, () => {
                NPC.canStandOn = !NPC.canStandOn;
                console.log("NPC角色可被站立 " + NPC.canStandOn);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Keys.Three, () => {
                // 碰撞范围collisionExtent内部值全是半值，半径半高半长
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Vector(50, 50, 200));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```
___

### collisionShape <Score text="collisionShape" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **collisionShape**(): [`CustomShapeType`](../enums/mw.CustomShapeType.md) 

</th>
<th style="text-align: left">

• `set` **collisionShape**(`CustomShapeType`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


碰撞形状


::: warning Precautions

角色碰撞盒的形状，决定角色与场景对象交互时检测碰撞范围的形状。

:::


#### Returns

| [`CustomShapeType`](../enums/mw.CustomShapeType.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


碰撞形状


::: warning Precautions

角色碰撞盒的形状，决定角色与场景对象交互时检测碰撞范围的形状。

:::

#### Parameters

| `CustomShapeType` | [`CustomShapeType`](../enums/mw.CustomShapeType.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"36851"拖入优先加载栏。创建一个名为"Example_Character_CollisionShape"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“3”，修改角色碰撞并打印结果.你将在控制台中看到打印的当前角色碰撞形状.代码如下:
</span>

```ts
@Component
export default class Example_Character_CollisionShape extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成拱门带碰撞的拱门
            let arch = GameObject.spawn("36851",{transform: new Transform(new Vector(300, 210, 0), new Rotation(0, 0, 90), new Vector(2, 1, 2))}) as Model;
            arch.setCollision(CollisionStatus.On);
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性和跳跃属性
            myCharacter.capsuleCorrectionEnabled = true;
            myCharacter.maxJumpHeight = 250;
            let NPC = Player.spawnDefaultCharacter();
            NPC.worldTransform.position = new Vector(0, 100, 100);
            // 添加一个按键方法：按下键盘“1”，开启/关闭NPC与其他角色的碰撞
            InputUtil.onKeyDown(Keys.One, () => {
                NPC.collisionWithOtherCharacterEnabled = !NPC.collisionWithOtherCharacterEnabled;
                console.log("NPC与角色的碰撞 " + NPC.collisionWithOtherCharacterEnabled);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立
            InputUtil.onKeyDown(Keys.Two, () => {
                NPC.canStandOn = !NPC.canStandOn;
                console.log("NPC角色可被站立 " + NPC.canStandOn);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Keys.Three, () => {
                // 碰撞范围collisionExtent内部值全是半值，半径半高半长
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Vector(50, 50, 200));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```
___

### collisionWithOtherCharacterEnabled <Score text="collisionWithOtherCharacterEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **collisionWithOtherCharacterEnabled**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **collisionWithOtherCharacterEnabled**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


启用与角色的碰撞


::: warning Precautions

角色当前是否可以与其他角色产生碰撞。true表示角色可以与其他角色碰撞，false表示角色不能与其他角色产生碰撞。

:::


#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


启用与角色的碰撞

::: warning Precautions

角色当前是否可以与其他角色产生碰撞。true表示角色可以与其他角色碰撞，false表示角色不能与其他角色产生碰撞。

:::

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"36851"拖入优先加载栏。创建一个名为"Example_Character_CollisionWithOtherCharacterEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成一个NPC。按下键盘“1”，开启/关闭NPC与其他角色的碰撞.可以看到NPC关闭碰撞后与角色不同的交互效果.代码如下:
</span>

```ts
@Component
export default class Example_Character_CollisionWithOtherCharacterEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成拱门带碰撞的拱门
            let arch = GameObject.spawn("36851",{transform: new Transform(new Vector(300, 210, 0), new Rotation(0, 0, 90), new Vector(2, 1, 2))}) as Model;
            arch.setCollision(CollisionStatus.On);
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性和跳跃属性
            myCharacter.capsuleCorrectionEnabled = true;
            myCharacter.maxJumpHeight = 250;
            let NPC = Player.spawnDefaultCharacter();
            NPC.worldTransform.position = new Vector(0, 100, 100);
            // 添加一个按键方法：按下键盘“1”，开启/关闭NPC与其他角色的碰撞
            InputUtil.onKeyDown(Keys.One, () => {
                NPC.collisionWithOtherCharacterEnabled = !NPC.collisionWithOtherCharacterEnabled;
                console.log("NPC与角色的碰撞 " + NPC.collisionWithOtherCharacterEnabled);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立
            InputUtil.onKeyDown(Keys.Two, () => {
                NPC.canStandOn = !NPC.canStandOn;
                console.log("NPC角色可被站立 " + NPC.canStandOn);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Keys.Three, () => {
                // 碰撞范围collisionExtent内部值全是半值，半径半高半长
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Vector(50, 50, 200));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```
___

### complexMovementEnabled <Score text="complexMovementEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **complexMovementEnabled**(): `boolean`

</th>
<th style="text-align: left">

• `set` **complexMovementEnabled**(`inValue`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否启用复杂移动策略

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


是否启用复杂移动策略

#### Parameters

| `inValue` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### crouchEnabled <Score text="crouchEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **crouchEnabled**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **crouchEnabled**(`canCrouch`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


启用下蹲能力


::: warning Precautions

当前角色是否启用下蹲能力。true表示角色可以下蹲，false表示角色不可下蹲。

:::


#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


启用下蹲能力


::: warning Precautions

当前角色是否启用下蹲能力。true表示角色可以下蹲，false表示角色不可下蹲。

:::

#### Parameters

| `canCrouch` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"54834,36851"拖入优先加载栏。创建一个名为"Example_Character_CrouchEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成草丛和拱门并添加触发器.按下键盘“1”，启用/禁用下蹲能力.你可以看到看到角色禁用下蹲能力后进入草丛无法蹲下的效果。代码如下:
</span>

```ts
@Component
export default class Example_Character_CrouchEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成草丛和拱门
            GameObject.spawn("54834",{transform: new Transform(new Vector(300, 0, 0), Rotation.zero, new Vector(2, 2, 2))});
            let arch = GameObject.spawn("36851",{transform: new Transform(new Vector(300, 210, 0), new Rotation(0, 0, 90), new Vector(2, 1, 2))}) as Model;
            arch.setCollision(CollisionStatus.On);
            // 生成触发器并添加委托函数：进入触发器的角色蹲下，离开触发器站起
            let tri = GameObject.spawn("Trigger",{transform: new Transform(new Vector(300, 0, 50), Rotation.zero, new Vector(2, 2, 1))}) as Trigger;
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
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 地面蹲伏行走时的最大移动速度100
            myCharacter.maxWalkSpeedCrouched = 100;
            // 下蹲后高度为100
            myCharacter.crouchedHeight = 100;
            // 添加一个按键方法：按下键盘“1”，启用/禁用下蹲能力
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.crouchEnabled = !myCharacter.crouchEnabled;
                console.log("当前角色是否能下蹲 " + myCharacter.crouchEnabled);
            });
        }
    }
}
```
___

### crouchedHeight <Score text="crouchedHeight" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **crouchedHeight**(): `number` 

</th>
<th style="text-align: left">

• `set` **crouchedHeight**(`InCrouchedHeight`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


下蹲时碰撞盒高度


::: warning Precautions

角色下蹲状态下，碰撞盒的高度。

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


下蹲时碰撞盒高度


::: warning Precautions

角色下蹲状态下，碰撞盒的高度。

:::

#### Parameters

| `InCrouchedHeight` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"54834,36851"拖入优先加载栏。创建一个名为"Example_Character_CrouchedHeight"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成草丛和拱门并添加触发器，并添加委托函数实现角色进入草丛蹲下，离开站起的效果。设置下蹲后高度为100。你可以看到角色蹲下后可以穿过之前不能穿过的拱门。代码如下:
</span>

```ts
@Component
export default class Example_Character_CrouchedHeight extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成草丛和拱门
            GameObject.spawn("54834",{transform: new Transform(new Vector(300, 0, 0), Rotation.zero, new Vector(2, 2, 2))});
            let arch = GameObject.spawn("36851",{transform: new Transform(new Vector(300, 210, 0), new Rotation(0, 0, 90), new Vector(2, 1, 2))}) as Model;
            arch.setCollision(CollisionStatus.On);
            // 生成触发器并添加委托函数：进入触发器的角色蹲下，离开触发器站起
            let tri = GameObject.spawn("Trigger",{transform: new Transform(new Vector(300, 0, 50), Rotation.zero, new Vector(2, 2, 1))}) as Trigger;
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
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 地面蹲伏行走时的最大移动速度100
            myCharacter.maxWalkSpeedCrouched = 100;
            // 下蹲后高度为100
            myCharacter.crouchedHeight = 100;
            // 添加一个按键方法：按下键盘“1”，启用/禁用下蹲能力
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.crouchEnabled = !myCharacter.crouchEnabled;
                console.log("当前角色是否能下蹲 " + myCharacter.crouchEnabled);
            });
        }
    }
}
```
___

### currentAnimation <Score text="currentAnimation" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **currentAnimation**(): [`Animation`](mw.Animation.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当前播放的动画对象

#### Returns

| [`Animation`](mw.Animation.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### currentStance <Score text="currentStance" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **currentStance**(): [`Stance`](mw.Stance.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当前正在播放的基础姿态


#### Returns

| [`Stance`](mw.Stance.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"39317,30274"拖入优先加载栏。创建一个名为"Example_Character_CurrentStance"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载一个二次元男性基础姿态和二次元女性基础姿态,按下键盘“1”, 切换播放二次元男性基础姿态和二次元女性基础姿态.你将在场景中看到角色不同姿态的效果.按下键盘“2”, 停止播放基础姿态.代码如下:
</span>

```ts
@Component
export default class Example_Character_CurrentStance extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个二次元男性基础姿态
            let animeManStance = myCharacter.loadStance("39317");
            console.log("animeManStance assetId " + animeManStance.assetId);
            // 给角色加载一个二次元女性基础姿态（默认）,关闭瞄准偏移
            let animeWomanStance = myCharacter.loadStance("30274");
            animeWomanStance.aimOffsetEnabled = false;
            console.log("animeWomanStance assetId " + animeWomanStance.assetId);
            // 添加一个按键方法：按下键盘“1”，切换播放二次元男性基础姿态和二次元女性基础姿态
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.currentStance == animeWomanStance) {
                    animeManStance.play();
                    // 开启瞄准偏移
                    animeManStance.aimOffsetEnabled = true;
                } else {
                    animeWomanStance.play();
                    // 关闭瞄准偏移
                    animeWomanStance.aimOffsetEnabled = false;
                }
            });
            // 添加一个按键方法：按下键盘“2”，停止播放基础姿态
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.currentStance) {
                    myCharacter.currentStance.stop();
                }
            });
        }
    }
}
```
___

### currentSubStance <Score text="currentSubStance" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **currentSubStance**(): [`SubStance`](mw.SubStance.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当前正在播放的二级姿态


#### Returns

| [`SubStance`](mw.SubStance.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"94261,14520"拖入优先加载栏。创建一个名为"Example_Character_CurrentSubStance"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载一个仅上半身的瞄准姿态和一个仅下半身的踢腿姿态,按下键盘“1”, 切换播放瞄准姿态和踢腿姿态.你将在场景中看到角色不同姿态的效果.按下键盘“2”, 停止播放姿态.代码如下:
</span>

```ts
@Component
export default class Example_Character_CurrentSubStance extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载仅上半身瞄准姿态
            let aimStance = myCharacter.loadSubStance("94261");
            aimStance.blendMode = StanceBlendMode.BlendUpper;
            console.log("aimStance assetId " + aimStance.assetId);
            // 给角色加载仅下半身踢腿姿态
            let kickStance = myCharacter.loadSubStance("14520");
            kickStance.blendMode = StanceBlendMode.BlendLower;
            console.log("kickStance assetId " + kickStance.assetId);
            // 添加一个按键方法:按下键盘“1”，切换播放瞄准姿态和踢腿姿态
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.currentSubStance == aimStance) {
                    kickStance.play();
                } else {
                    aimStance.play();
                }
            });
            // 添加一个按键方法:按下键盘“2”，停止播放姿态
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.currentSubStance) {
                    myCharacter.currentSubStance.stop();
                }
            });
        }
    }
}
```
___

### description <Score text="description" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **description**(): [`CharacterDescription`](mw.CharacterDescription.md) 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


角色外观配置，返回值为CharacterDescription类，调用description变量可以修改角色的外观，可更改角色的外观参数详见CharacterDescription类。


::: warning Precautions

当前角色持有的外观数据，数据保存的是引用。

:::


#### Returns

| [`CharacterDescription`](mw.CharacterDescription.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183"拖入优先加载栏。创建一个名为"Example_Character_Description"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到玩家控制角色玩家外观准备未完成播放摊手的效果.给【角色外观描述完成】委托添加函数来播放换装完成特效，并保存角色初始默认外观数据。给【角色外观描述变化】委托添加函数在控制台打印当前角色外观描述变化的具体子项和索引。按下键盘“1”，重置为默认角色外观。按下键盘“2”，修改角色外观。按下键盘“3”，同步角色外观。按下键盘“4”，清空角色外观。代码如下:
</span>

```ts
@Component
export default class Example_Character_Description extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.isDescriptionReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            let defaultStyle = null;
            // 给【角色外观描述完成】委托添加函数
            myCharacter.onDescriptionComplete.add(() => {
                // 播放换装完成特效
                EffectService.playOnGameObject("161245", myCharacter);
                // 获取角色默认外观风格
                if(defaultStyle == null) {
                    defaultStyle = myCharacter.getDescription();
                }
            });
            // 给【角色外观描述变化】委托添加函数
            myCharacter.onDescriptionChange.add((operationCode: number, index: number, value: unknown) => {
                console.log("Appearance Changed");
                console.log("OperationCode " + operationCode + " Index " + index);
            });
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.setDescription(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，修改角色外观
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style头部:头大小为1.5倍
                    myCharacter.description.advance.headFeatures.head.headOverallScale = 1.5;
                    // 修改角色style体型:身高为1.2倍
                    myCharacter.description.advance.bodyFeatures.body.height = 1.2;
                    // 修改角色style化妆:腮红为75674
                    myCharacter.description.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发:前发为57731，后发为63910
                    myCharacter.description.advance.hair.frontHair.style = "57731";
                    myCharacter.description.advance.hair.backHair.style = "63910";
                    // 修改角色style:上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.description.advance.clothing.upperCloth.style = "58694";
                    myCharacter.description.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.description.advance.clothing.gloves.style = "60384";
                    myCharacter.description.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法:按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.syncDescription();
            });
            // 添加一个按键方法:按下键盘“4”，清空角色外观
            InputUtil.onKeyDown(Keys.Four, () => {
                myCharacter.clearDescription();
            });
        }
    }
}
```
___

### displayName <Score text="displayName" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **displayName**(): `string`

</th>
<th style="text-align: left">

• `set` **displayName**(`inName`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


角色名称

::: warning Precautions

会显示在角色头顶UI上

:::


#### Returns

| `string` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


角色名称

::: warning Precautions

会显示在角色头顶UI上

:::

#### Parameters

| `inName` | `string` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_DisplayName"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，你将在场景中看到角色显示名称切换的效果.代码如下:
</span>

```ts
@Component
export default class Example_Character_DisplayName extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数/
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let names = ["Cali", "Lily", "Emmie"];
            let index = 0;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 打印本地玩家控制的character对象的guid和名字
            console.log("My character: " + myPlayer.character.guid + " " + myPlayer.character.displayName);
            // 添加一个按键方法：按下键盘“1”，切换角色显示名称
            InputUtil.onKeyDown(Keys.One, () => {
                myPlayer.character.displayName = names[index % 3];
                index++;
            });
        }
    }
}
```
___

### driftControl <Score text="driftControl" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **driftControl**(): `number` 

</th>
<th style="text-align: left">

• `set` **driftControl**(`InAirControl`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


空中灵活度


::: warning Precautions

角色在空中时, 控制水平方向移动的灵活度；范围:0~1, 0表示不能控制, 1表示能按地面最大移动速率完全控制

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


空中灵活度


::: warning Precautions

角色在空中时, 控制水平方向移动的灵活度；范围:0~1, 0表示不能控制, 1表示能按地面最大移动速率完全控制

:::

#### Parameters

| `InAirControl` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_DriftControl"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将设置角色空中控制系数为0.1。按下键盘“1”，角色设置跳跃高度为1000后跳跃，你可以在场景中看到超过下落速度阈值后空中角色难以控制的效果.代码如下:
</span>

```ts
@Component
export default class Example_DriftControl extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 最大下落速度为1024
            myCharacter.maxFallingSpeed = 1024;
            // 下落制动速率为10
            myCharacter.horizontalBrakingDecelerationFalling = 10;
            // 按地面移动速率的0.1倍控制下落过程
            myCharacter.driftControl = 0.1;
            // 10倍重力
            myCharacter.gravityScale = 10;
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.maxJumpHeight = 1000;
                myCharacter.jump();
            });
        }
    }
}
```
___

### forceUpdateMovement <Score text="forceUpdateMovement" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **forceUpdateMovement**(`value`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


强制更新移动


::: warning Precautions

角色当前是否启用强制更新移动，true表示角色会因碰撞被动位移，false表示角色不会因碰撞被动位移。

:::


#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"197386"拖入优先加载栏。创建一个名为"Example_Character_ForceUpdateMovement"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成一个立方体，并在onUpdate里左右移动,按下键盘“1”,启用/禁用角色【强制更新移动】，看到立方体对角色的推动效果.代码如下:
</span>

```ts
@Component
export default class Example_Character_ForceUpdateMovement extends Script {
    // 声明变量
    cube: GameObject;
    stride: Vector;
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            this.useUpdate = true;
            // 移动步长：Y轴单位距离
            this.stride = new Vector(-2, 0, 0);
            // 在前方生成一个立方体，并在onUpdate里左右移动
            let spawnTransform = new Transform(new Vector(300, 0, 0), Rotation.zero, Vector.one);
            this.cube = GameObject.spawn("197386",{transform: spawnTransform});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法：按下键盘“1”，启用/禁用【强制更新移动】
            InputUtil.onKeyDown(Keys.One, () => {
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
                this.cube.worldTransform.position = this.cube.worldTransform.position.add(this.stride);
                // 当立方体y轴世界坐标绝对值超过1000时，步长取反
                if(Math.abs(this.cube.worldTransform.position.x) > 500) {
                    this.stride.multiply(-1);
                }
            }
        }
    }
}
```
___

### gravityScale <Score text="gravityScale" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **gravityScale**(): `number` 

</th>
<th style="text-align: left">

• `set` **gravityScale**(`newGravityScale`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


重力倍率


::: warning Precautions

重力倍率；范围0~10, 过大和过小的值都会被限制。

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


重力倍率


::: warning Precautions

重力倍率；范围0~10, 过大和过小的值都会被限制。

:::

#### Parameters

| `newGravityScale` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_GravityScale"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将设置角色重力倍率为10。按下键盘“1”，角色设置跳跃高度为1000后跳跃，你可以在场景中看到十倍重力下角色下落的效果.代码如下:
</span>

```ts
@Component
export default class Example_Character_GravityScale extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 最大下落速度为1024
            myCharacter.maxFallingSpeed = 1024;
            // 下落制动速率为10
            myCharacter.horizontalBrakingDecelerationFalling = 10;
            // 按地面移动速率的0.1倍控制下落过程
            myCharacter.driftControl = 0.1;
            // 10倍重力
            myCharacter.gravityScale = 10;
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.maxJumpHeight = 1000;
                myCharacter.jump();
            });
        }
    }
}
```
___

### groundFriction <Score text="groundFriction" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **groundFriction**(): `number` 

</th>
<th style="text-align: left">

• `set` **groundFriction**(`inGroundFriction`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


地面摩檫力


::: warning Precautions

角色在地面上受到的摩擦力大小。在开启单独制动摩擦时该值不生效。

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


地面摩檫力


::: warning Precautions

角色在地面上受到的摩擦力大小。在开启单独制动摩擦时该值不生效。

:::

#### Parameters

| `inGroundFriction` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_GroundFriction"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将设置角色地面摩擦力为1,按下键盘“1”，切换角色摩擦力的来源。并在场景中看到角色移动加速变快的效果.代码如下:
</span>

```ts
@Component
export default class Example_GroundFriction extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            this.useUpdate = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration;
            // 设置角色最大转向速度为原来的0.5倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate;
            // 设置角色最大行走速度为原来的2倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration;
            // 设置角色行走制动速率为原来的0.1倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking;
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 1;
            // 添加一个按键方法:按下键盘“1”，启用/禁用地面摩擦力
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.groundFrictionEnabled = !myCharacter.groundFrictionEnabled;
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
                console.log("当前角色速度:" + myCharacter.velocity);
            }
        }
    }
}
```
___

### groundFrictionEnabled <Score text="groundFrictionEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **groundFrictionEnabled**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **groundFrictionEnabled**(`used`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


启用单独制动摩擦


::: warning Precautions

开启后使用行走制动速率进行计算摩擦效果，不开启则使用的是地面摩擦力进行计算摩擦效果。

:::


#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


启用单独制动摩擦


::: warning Precautions

开启后使用行走制动速率进行计算摩擦效果，不开启则使用的是地面摩擦力进行计算摩擦效果。

:::

#### Parameters

| `used` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_GroundFrictionEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，切换角色摩擦力的来源。并在场景中看到角色移动加速变化的效果.代码如下:
</span>

```ts
@Component
export default class Example_GroundFrictionEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            this.useUpdate = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration;
            // 设置角色最大转向速度为原来的0.5倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate;
            // 设置角色最大行走速度为原来的2倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration;
            // 设置角色行走制动速率为原来的0.1倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking;
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 1;
            // 添加一个按键方法:按下键盘“1”，启用/禁用地面摩擦力
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.groundFrictionEnabled = !myCharacter.groundFrictionEnabled;
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
                console.log("当前角色速度:" + myCharacter.velocity);
            }
        }
    }
}
```
___

### horizontalBrakingDecelerationFalling <Score text="horizontalBrakingDecelerationFalling" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **horizontalBrakingDecelerationFalling**(): `number` 

</th>
<th style="text-align: left">

• `set` **horizontalBrakingDecelerationFalling**(`InBrakingDecelerationFalling`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


下落制动速率


::: warning Precautions

角色在下落状态下移动时受到的减速度

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


下落制动速率


::: warning Precautions

角色在下落状态下移动时受到的减速度

:::

#### Parameters

| `InBrakingDecelerationFalling` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_HorizontalBrakingDecelerationFalling"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将设置角色下落制动速度为10。按下键盘“1”，角色设置跳跃高度为1000后跳跃，你可以在场景中看到比正常更慢的下落加速的效果.代码如下:
</span>

```ts
@Component
export default class Example_HorizontalBrakingDecelerationFalling extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 最大下落速度为1024
            myCharacter.maxFallingSpeed = 1024;
            // 下落制动速率为10
            myCharacter.horizontalBrakingDecelerationFalling = 10;
            // 按地面移动速率的0.1倍控制下落过程
            myCharacter.driftControl = 0.1;
            // 10倍重力
            myCharacter.gravityScale = 10;
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.maxJumpHeight = 1000;
                myCharacter.jump();
            });
        }
    }
}
```
___

### isCrouching <Score text="isCrouching" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isCrouching**(): `boolean` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否正在蹲下


::: warning Precautions

角色当前的下蹲状态。true表示正在下蹲，false表示不在下蹲。

:::


#### Returns

| `boolean` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"54834,36851"拖入优先加载栏。创建一个名为"Example_Character_IsCrouching"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成草丛和拱门并添加触发器.看到角色进入草丛蹲下，离开站起的效果,并在控制台看到打印的角色当前的蹲起状态。代码如下:
</span>

```ts
@Component
export default class Example_Character_IsCrouching extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成草丛和拱门
            GameObject.spawn("54834",{transform: new Transform(new Vector(300, 0, 0), Rotation.zero, new Vector(2, 2, 2))});
            let arch = GameObject.spawn("36851",{transform: new Transform(new Vector(300, 210, 0), new Rotation(0, 0, 90), new Vector(2, 1, 2))}) as Model;
            arch.setCollision(CollisionStatus.On);
            // 生成触发器并添加委托函数：进入触发器的角色蹲下，离开触发器站起
            let tri = GameObject.spawn("Trigger",{transform: new Transform(new Vector(300, 0, 50), Rotation.zero, new Vector(2, 2, 1))}) as Trigger;
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
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 地面蹲伏行走时的最大移动速度100
            myCharacter.maxWalkSpeedCrouched = 100;
            // 下蹲后高度为100
            myCharacter.crouchedHeight = 100;
            // 添加一个按键方法：按下键盘“1”，启用/禁用下蹲能力
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.crouchEnabled = !myCharacter.crouchEnabled;
                console.log("当前角色是否能下蹲 " + myCharacter.crouchEnabled);
            });
        }
    }
}
```
___

### isDescriptionReady <Score text="isDescriptionReady" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isDescriptionReady**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


角色外观准备状态。当前角色外观是否准备完毕。true表示准备完毕，false表示未准备好。

刚进入场景中角色还未加载出外观衣服等时，isDescriptionReady为false,完全加载完成后变为true。



#### Returns

| `boolean` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183"拖入优先加载栏。创建一个名为"Example_Character_IsDescriptionReady"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到玩家控制角色玩家外观准备未完成播放摊手的效果.给【角色外观描述完成】委托添加函数来播放换装完成特效，并保存角色初始默认外观数据。给【角色外观描述变化】委托添加函数在控制台打印当前角色外观描述变化的具体子项和索引。按下键盘“1”，重置为默认角色外观。按下键盘“2”，修改角色外观。按下键盘“3”，同步角色外观。按下键盘“4”，清空角色外观。代码如下:
</span>

```ts
@Component
export default class Example_Character_IsDescriptionReady extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.isDescriptionReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            let defaultStyle = null;
            // 给【角色外观描述完成】委托添加函数
            myCharacter.onDescriptionComplete.add(() => {
                // 播放换装完成特效
                EffectService.playOnGameObject("161245", myCharacter);
                // 获取角色默认外观风格
                if(defaultStyle == null) {
                    defaultStyle = myCharacter.getDescription();
                }
            });
            // 给【角色外观描述变化】委托添加函数
            myCharacter.onDescriptionChange.add((operationCode: number, index: number, value: unknown) => {
                console.log("Appearance Changed");
                console.log("OperationCode " + operationCode + " Index " + index);
            });
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.setDescription(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，修改角色外观
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style头部:头大小为1.5倍
                    myCharacter.description.advance.headFeatures.head.headOverallScale = 1.5;
                    // 修改角色style体型:身高为1.2倍
                    myCharacter.description.advance.bodyFeatures.body.height = 1.2;
                    // 修改角色style化妆:腮红为75674
                    myCharacter.description.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发:前发为57731，后发为63910
                    myCharacter.description.advance.hair.frontHair.style = "57731";
                    myCharacter.description.advance.hair.backHair.style = "63910";
                    // 修改角色style:上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.description.advance.clothing.upperCloth.style = "58694";
                    myCharacter.description.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.description.advance.clothing.gloves.style = "60384";
                    myCharacter.description.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法:按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.syncDescription();
            });
            // 添加一个按键方法:按下键盘“4”，清空角色外观
            InputUtil.onKeyDown(Keys.Four, () => {
                myCharacter.clearDescription();
            });
        }
    }
}
```
___

### isJumping <Score text="isJumping" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isJumping**(): `boolean` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


正在跳跃


::: warning Precautions

当前角色的跳跃状态。true表示正在跳跃，false表示不在跳跃。

:::


#### Returns

| `boolean` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_IsJumping"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏设置角色最大跳跃高度为300，最高三连跳。,按下键盘“1”，角色跳跃。按下键盘“2”，启用/禁用跳跃能力。你将在场景中看到角色禁用跳跃能力的效果。代码如下:
</span>

```ts
@Component
export default class Example_Character_IsJumping extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 最大跳跃高度为300
            myCharacter.maxJumpHeight = 300;
            // 最高三连跳
            myCharacter.jumpMaxCount = 3;
            // 添加一个按键方法:按下键盘“1”，角色跳跃。
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.jump();
                console.log("当前角色是否在跳跃 " + myCharacter.isJumping);
            });
            // 添加一个按键方法:按下键盘“2”，启用/禁用跳跃能力。
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.jumpEnabled = !myCharacter.jumpEnabled;
                console.log("当前角色跳跃能力 " + myCharacter.jumpEnabled);
            });
        }
    }
}
```
___

### isMoving <Score text="isMoving" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isMoving**(): `boolean` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


正在移动


::: warning Precautions

当前角色是否移动状态。true表示正在移动，角色速度不为0。false表示未移动，角色速度为0。

:::


#### Returns

| `boolean` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_IsMoving"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,如果角色正在移动,你将在控制台中看到打印的角色移动速度.代码如下:
</span>

```ts
@Component
export default class Example_Character_IsMoving extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            this.useUpdate = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration;
            // 设置角色最大转向速度为原来的0.5倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate;
            // 设置角色最大行走速度为原来的2倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking;
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 1;
            // 添加一个按键方法：按下键盘“1”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.groundFrictionEnabled = !myCharacter.groundFrictionEnabled;
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
___

### jumpEnabled <Score text="jumpEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **jumpEnabled**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **jumpEnabled**(`value`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


启用跳跃能力


::: warning Precautions

当前角色是否可以跳跃。true表示角色可以跳跃，false表示角色不可跳跃。

:::


#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


启用跳跃能力


::: warning Precautions

当前角色是否可以跳跃。true表示角色可以跳跃，false表示角色不可跳跃。

:::

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_JumpEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏设置角色最大跳跃高度为300，最高三连跳。,按下键盘“1”，角色跳跃。按下键盘“2”，启用/禁用跳跃能力。你将在场景中看到角色禁用跳跃能力的效果。代码如下:
</span>

```ts
@Component
export default class Example_Character_JumpEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 最大跳跃高度为300
            myCharacter.maxJumpHeight = 300;
            // 最高三连跳
            myCharacter.jumpMaxCount = 3;
            // 添加一个按键方法:按下键盘“1”，角色跳跃。
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.jump();
                console.log("当前角色是否在跳跃 " + myCharacter.isJumping);
            });
            // 添加一个按键方法:按下键盘“2”，启用/禁用跳跃能力。
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.jumpEnabled = !myCharacter.jumpEnabled;
                console.log("当前角色跳跃能力 " + myCharacter.jumpEnabled);
            });
        }
    }
}
```
___

### jumpMaxCount <Score text="jumpMaxCount" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **jumpMaxCount**(): `number` 

</th>
<th style="text-align: left">

• `set` **jumpMaxCount**(`InJumpMaxCount`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


最大可跳跃次数


::: warning Precautions

角色能够执行跳跃的最大次数。

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


最大可跳跃次数


::: warning Precautions

角色能够执行跳跃的最大次数。

:::

#### Parameters

| `InJumpMaxCount` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_jumpMaxCount"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏设置角色最大跳跃高度为300，最高三连跳。,按下键盘“1”，角色跳跃。按下键盘“2”，启用/禁用跳跃能力。你将在场景中看到角色禁用跳跃能力的效果。代码如下:
</span>

```ts
@Component
export default class Example_Character_jumpMaxCount extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 最大跳跃高度为300
            myCharacter.maxJumpHeight = 300;
            // 最高三连跳
            myCharacter.jumpMaxCount = 3;
            // 添加一个按键方法:按下键盘“1”，角色跳跃。
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.jump();
                console.log("当前角色是否在跳跃 " + myCharacter.isJumping);
            });
            // 添加一个按键方法:按下键盘“2”，启用/禁用跳跃能力。
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.jumpEnabled = !myCharacter.jumpEnabled;
                console.log("当前角色跳跃能力 " + myCharacter.jumpEnabled);
            });
        }
    }
}
```
___

### maxAcceleration <Score text="maxAcceleration" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxAcceleration**(): `number` 

</th>
<th style="text-align: left">

• `set` **maxAcceleration**(`InMaxAcceleration`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


最大加速度


::: warning Precautions

角色移动时，角色可以达到的最大加速度

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


最大加速度


::: warning Precautions

角色移动时，角色可以达到的最大加速度

:::

#### Parameters

| `InMaxAcceleration` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_MaxAcceleration"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将设置角色最大加速度为原来的0.1倍,并在场景中看到角色加速变慢的效果.代码如下:
</span>

```ts
@Component
export default class Example_Character_MaxAcceleration extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            this.useUpdate = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration;
            // 设置角色最大转向速度为原来的0.5倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate;
            // 设置角色最大行走速度为原来的2倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking;
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 1;
            // 添加一个按键方法：按下键盘“1”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.groundFrictionEnabled = !myCharacter.groundFrictionEnabled;
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
___

### maxFallingSpeed <Score text="maxFallingSpeed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxFallingSpeed**(): `number` 

</th>
<th style="text-align: left">

• `set` **maxFallingSpeed**(`speed`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


最大下落速度


::: warning Precautions

角色在下落状态下移动时，角色可达到的最大移动速度

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


最大下落速度


::: warning Precautions

角色在下落状态下移动时，角色可达到的最大移动速度

:::

#### Parameters

| `speed` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_MaxFallingSpeed"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将设置角色最大下落速度为1024。按下键盘“1”，角色设置跳跃高度为1000后跳跃，你可以在场景中看到比正常更快的下落速度的效果.代码如下:
</span>

```ts
@Component
export default class Example_MaxFallingSpeed extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 最大下落速度为1024
            myCharacter.maxFallingSpeed = 1024;
            // 下落制动速率为10
            myCharacter.horizontalBrakingDecelerationFalling = 10;
            // 按地面移动速率的0.1倍控制下落过程
            myCharacter.driftControl = 0.1;
            // 10倍重力
            myCharacter.gravityScale = 10;
            // 添加一个按键方法：按下键盘“1”，角色设置跳跃高度为1000后跳跃。
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.maxJumpHeight = 1000;
                myCharacter.jump();
            });
        }
    }
}
```
___

### maxFlySpeed <Score text="maxFlySpeed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxFlySpeed**(): `number` 

</th>
<th style="text-align: left">

• `set` **maxFlySpeed**(`InMaxFlySpeed`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


最大飞行速度


::: warning Precautions

角色在飞行状态下进行移动时，角色可达到的最大移动速度

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


最大飞行速度


::: warning Precautions

角色在飞行状态下进行移动时，角色可达到的最大移动速度

:::

#### Parameters

| `InMaxFlySpeed` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"53011,20307"拖入优先加载栏。创建一个名为"Example_MaxFlySpeed"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，角色切换为飞行，按下键盘“2”，角色进行喷射加速。你将在场景中看到角色在加速过程中最大飞行速度变化的效果.代码如下:
</span>

```ts
@Component
export default class Example_MaxFlySpeed extends Script {
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
            boostAnimation.loop = 0;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadSubStance("20307");
            // 添加一个按键方法:按下键盘“1”，角色切换为飞行
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.switchToFlying();
            });
            // 添加一个按键方法:按下键盘“2”，角色进行喷射加速
            InputUtil.onKeyDown(Keys.Two, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放飞行动画，修改飞行速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxFlySpeed = 2000;
                    myCharacter.brakingDecelerationFlying = 5000;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作:停止动画清除姿态，还原飞行速度，清除加速周期
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
                        myCharacter.addMovement(new Vector(0, 0, 5));
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        isBoost = false;
                        clearInterval(boost_interval);
                        myCharacter.maxFlySpeed = 500;
                        boostAnimation.stop();
                        boostStance.stop();
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
___

### maxJumpHeight <Score text="maxJumpHeight" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxJumpHeight**(): `number` 

</th>
<th style="text-align: left">

• `set` **maxJumpHeight**(`InMaxJumpHeight`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


最大跳跃高度


::: warning Precautions

角色跳跃时，从起跳位置到最高位置的距离。该值受重力影响。

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


最大跳跃高度


::: warning Precautions

角色跳跃时，从起跳位置到最高位置的距离。该值受重力影响。

:::

#### Parameters

| `InMaxJumpHeight` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_MaxJumpHeight"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏设置角色最大跳跃高度为300，最高三连跳。,按下键盘“1”，角色跳跃。按下键盘“2”，启用/禁用跳跃能力。你将在场景中看到角色禁用跳跃能力的效果。代码如下:
</span>

```ts
@Component
export default class Example_Character_MaxJumpHeight extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 最大跳跃高度为300
            myCharacter.maxJumpHeight = 300;
            // 最高三连跳
            myCharacter.jumpMaxCount = 3;
            // 添加一个按键方法:按下键盘“1”，角色跳跃。
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.jump();
                console.log("当前角色是否在跳跃 " + myCharacter.isJumping);
            });
            // 添加一个按键方法:按下键盘“2”，启用/禁用跳跃能力。
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.jumpEnabled = !myCharacter.jumpEnabled;
                console.log("当前角色跳跃能力 " + myCharacter.jumpEnabled);
            });
        }
    }
}
```
___

### maxStepHeight <Score text="maxStepHeight" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxStepHeight**(): `number` 

</th>
<th style="text-align: left">

• `set` **maxStepHeight**(`InMaxStepHeight`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


最大可跨越高度


::: warning Precautions

角色跨越台阶时，台阶的最大高度 ，大于等于该高度角色均无法跨越。

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


最大可跨越高度


::: warning Precautions

角色跨越台阶时，台阶的最大高度 ，大于等于该高度角色均无法跨越。

:::

#### Parameters

| `InMaxStepHeight` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"7667,197386"拖入优先加载栏。创建一个名为"Example_MaxStepHeight"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中创建5个不同高度的立方体:10，20，40，80，160.按下键盘“1”，角色最大可跨越高度增加10.按下键盘“2”，角色最大可跨越高度减小10.你将看到角色最大可跨越高度变化带来的效果.代码如下:
</span>

```ts
@Component
export default class Example_MaxStepHeight extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
         // 下列代码仅在服务端执行
         if(SystemUtil.isServer()) {
            // 创建5个不同高度的立方体：10，20，40，80，160
            let cubeHeight = [10, 20, 40, 80, 160];
            for (let i = 0; i < cubeHeight.length; i++) {
                GameObject.spawn("197386",{transform: new Transform(new Vector(250 * i, -500, 0), Rotation.zero, new Vector(2, 2, cubeHeight[i] / 100))});
            }
            // 创建5个不同坡度的锥体:1，30，45，60，89
            let coneAngle = [1, 30, 45, 60, 89];
            for (let i = 0; i < coneAngle.length; i++) {
                console.log("1111");
                GameObject.spawn("7667",{transform: new Transform(new Vector(250 * i, 500, 0), Rotation.zero, new Vector(2, 2, Math.tan(coneAngle[i] * Math.PI / 180)))});
            }
         }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法：按下键盘“1”，角色最大可跨越高度增加10
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.maxStepHeight += 10;
                console.log("角色最大可跨越高度：" + myCharacter.maxStepHeight);
            });
            // 添加一个按键方法：按下键盘“2”，角色最大可跨越高度减小10
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.maxStepHeight -= 10;
                console.log("角色最大可跨越高度：" + myCharacter.maxStepHeight);
            });
            // 添加一个按键方法：按下键盘“3”，角色可行走的最大角度增加5
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.walkableFloorAngle += 5;
                console.log("可行走的最大角度：" + myCharacter.walkableFloorAngle);
            });
            // 添加一个按键方法：按下键盘“4”，角色可行走的最大角度减小5
            InputUtil.onKeyDown(Keys.Four, () => {
                myCharacter.walkableFloorAngle -= 5;
                console.log("可行走的最大角度：" + myCharacter.walkableFloorAngle);
            });
        }
    }
}
```
___

### maxSwimSpeed <Score text="maxSwimSpeed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxSwimSpeed**(): `number` 

</th>
<th style="text-align: left">

• `set` **maxSwimSpeed**(`InMaxSwimSpeed`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


最大游泳速度


::: warning Precautions

角色在游泳状态下进行移动时，角色可达到的最大移动速度

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


最大游泳速度


::: warning Precautions

角色在游泳状态下进行移动时，角色可达到的最大移动速度

:::

#### Parameters

| `InMaxSwimSpeed` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"53011,20307"拖入优先加载栏。创建一个名为"Example_MaxSwimSpeed"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成拱形容器并适配游泳区域.按下键盘“1”，角色切换游泳.按下键盘“4”，角色修改最大游泳速度进行喷射加速.你可以看到的角色最大游泳速度变化的效果.代码如下:
</span>

```ts
@Component
export default class Example_MaxSwimSpeed extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            GameObject.spawn("SwimmingVolume",{transform: new Transform(new Vector(0, 0, 500), new Rotation(0, 0, 90), new Vector(20, 20, 10))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let flag = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 100;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = 10;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadSubStance("20307");
            // 添加一个按键方法:按下键盘“1”，角色切换游泳 / 行走
            InputUtil.onKeyDown(Keys.One, () => {
                if(flag) {
                    myCharacter.switchToWalking();
                } else {
                    myCharacter.switchToSwimming();
                }
                flag = !flag;
            });
            // 添加一个按键方法:按住键盘“2”，角色上浮
            InputUtil.onKeyPress(Keys.Two, () => {
                myCharacter.swimUp(10);
            });
            // 添加一个按键方法:按住键盘“3”，角色下潜
            InputUtil.onKeyPress(Keys.Three, () => {
                myCharacter.swimDown(10);
            });
            // 添加一个按键方法:按下键盘“4”，角色进行喷射加速
            InputUtil.onKeyDown(Keys.Four, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作:停止动画清除姿态，还原游泳速度，清除加速周期
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
                        myCharacter.swimUp(1)
                    }, 1);
                }
                // 1秒后执行停止加速操作
                    setTimeout(() => {
                        isBoost = false;
                        clearInterval(boost_interval);
                        myCharacter.maxSwimSpeed = 300;
                        boostAnimation.stop();
                        boostStance.stop();
                    }, 1000);
                    // 1.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1200);
            });
        }
    }
}
```
___

### maxWalkSpeed <Score text="maxWalkSpeed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxWalkSpeed**(): `number` 

</th>
<th style="text-align: left">

• `set` **maxWalkSpeed**(`InMaxWalkSpeed`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


最大行走速度


::: warning Precautions

角色移动时，角色可以达到的最大速度

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


最大行走速度


::: warning Precautions

角色移动时，角色可以达到的最大速度

:::

#### Parameters

| `InMaxWalkSpeed` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_MaxWalkSpeed"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将设置角色最大行走速度为原来的2倍,并在场景中看到角色移动最高速度变快的效果.代码如下:
</span>

```ts
@Component
export default class Example_MaxWalkSpeed extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            this.useUpdate = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration;
            // 设置角色最大转向速度为原来的0.5倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate;
            // 设置角色最大行走速度为原来的2倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking;
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 1;
            // 添加一个按键方法：按下键盘“1”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.groundFrictionEnabled = !myCharacter.groundFrictionEnabled;
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
___

### maxWalkSpeedCrouched <Score text="maxWalkSpeedCrouched" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxWalkSpeedCrouched**(): `number` 

</th>
<th style="text-align: left">

• `set` **maxWalkSpeedCrouched**(`maxSpeed`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


最大蹲伏行走速度


::: warning Precautions

角色在下蹲状态下移动时，角色可达到的最大移动速度

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


最大蹲伏行走速度


::: warning Precautions

角色在下蹲状态下移动时，角色可达到的最大移动速度

:::

#### Parameters

| `maxSpeed` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"54834,36851"拖入优先加载栏。创建一个名为"Example_MaxWalkSpeedCrouched"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成草丛和拱门并添加触发器，并添加委托函数实现角色进入草丛蹲下，离开站起的效果。设置地面蹲伏行走时的最大移动速度100。你可以看到角色蹲下后行走速度减慢的效果。代码如下:
</span>

```ts
@Component
export default class Example_MaxWalkSpeedCrouched extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成草丛和拱门
            GameObject.spawn("54834",{transform: new Transform(new Vector(300, 0, 0), Rotation.zero, new Vector(2, 2, 2))});
            let arch = GameObject.spawn("36851",{transform: new Transform(new Vector(300, 210, 0), new Rotation(0, 0, 90), new Vector(2, 1, 2))}) as Model;
            arch.setCollision(CollisionStatus.On);
            // 生成触发器并添加委托函数：进入触发器的角色蹲下，离开触发器站起
            let tri = GameObject.spawn("Trigger",{transform: new Transform(new Vector(300, 0, 50), Rotation.zero, new Vector(2, 2, 1))}) as Trigger;
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
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 地面蹲伏行走时的最大移动速度100
            myCharacter.maxWalkSpeedCrouched = 100;
            // 下蹲后高度为100
            myCharacter.crouchedHeight = 100;
            // 添加一个按键方法：按下键盘“1”，启用/禁用下蹲能力
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.crouchEnabled = !myCharacter.crouchEnabled;
                console.log("当前角色是否能下蹲 " + myCharacter.crouchEnabled);
            });
        }
    }
}
```
___

### meshOffset <Score text="meshOffset" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **meshOffset**(): [`Vector`](mw.Vector.md) 

</th>
<th style="text-align: left">

• `set` **meshOffset**(`offset`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取mesh相对角色坐标点的偏移


#### Returns

| [`Vector`](mw.Vector.md) | mesh相对角色坐标点的偏移 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置mesh相对角色坐标点的偏移


#### Parameters

| `offset` | [`Vector`](mw.Vector.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### moveFacingDirection <Score text="moveFacingDirection" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **moveFacingDirection**(): [`MoveFacingDirection`](../enums/mw.MoveFacingDirection.md) 

</th>
<th style="text-align: left">

• `set` **moveFacingDirection**(`InMoveFacingDirection`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


运动面朝方向


::: warning Precautions

角色模型运动时朝向的方向。1. 始终朝向移动方向:主角模型面朝方向始终朝向移动方向。2. 始终朝向固定方向:主角模型面朝方向始终朝向固定方向。3. 始终朝向控制器方向:主角模型面朝方向始终朝向控制器

:::


#### Returns

| [`MoveFacingDirection`](../enums/mw.MoveFacingDirection.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


运动面朝方向


::: warning Precautions

角色模型运动时朝向的方向。1. 始终朝向移动方向:主角模型面朝方向始终朝向移动方向。2. 始终朝向固定方向:主角模型面朝方向始终朝向固定方向。3. 始终朝向控制器方向:主角模型面朝方向始终朝向控制器

:::

#### Parameters

| `InMoveFacingDirection` | [`MoveFacingDirection`](../enums/mw.MoveFacingDirection.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_MoveFacingDirection"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，切换角色的运动面朝方向.你将在场景中看到角色不同运动面朝方向的效果并在控制台看到打印的当前角色的运动轴和面朝方向.代码如下:
</span>

```ts
@Component
export default class Example_Character_MoveFacingDirection extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置定轴方向
            myCharacter.movementAxisDirection = new Vector(1, 0, 0);
            // 打印当前角色的运动轴和面朝方向
            console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
            // 添加一个按键方法:按下键盘“1”，切换角色的运动面朝方向
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.moveFacingDirection = (myCharacter.moveFacingDirection + 1) % 3;
                console.log("当前角色的运动 " + MoveFacingDirection[myCharacter.moveFacingDirection] + " + " + MovementDirection[myCharacter.movementDirection]);
            });
            // 添加一个按键方法:按下键盘“2”，切换角色的运动时依据的正方向
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.movementDirection = (myCharacter.movementDirection + 1) % 3;
                console.log("当前角色的运动 " + MoveFacingDirection[myCharacter.moveFacingDirection] + " + " + MovementDirection[myCharacter.movementDirection]);
                if(myCharacter.movementDirection == 0) {
                    console.log("当前角色的运动 " + MoveFacingDirection[myCharacter.moveFacingDirection] + " + " + MovementDirection[myCharacter.movementDirection] + " 定轴方向 " + myCharacter.movementAxisDirection);
                }
            });
        }
    }
}
```
___

### movementAxisDirection <Score text="movementAxisDirection" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **movementAxisDirection**(): [`Vector`](mw.Vector.md) 

</th>
<th style="text-align: left">

• `set` **movementAxisDirection**(`InMovementAxisDirection`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


运动时依据的轴方向


::: warning Precautions

只有当前的MovementDirection为AxisDirection时有效

:::


#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


运动时依据的轴方向


::: warning Precautions

只有当前的MovementDirection为AxisDirection时有效

:::

#### Parameters

| `InMovementAxisDirection` | [`Vector`](mw.Vector.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_MovementAxisDirection"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,设置定轴方向(1, 0, 0)并在控制台看到打印的当前角色的运动轴.按下键盘“2”，切换角色的运动时依据的正方向，你将在场景中看到角色依据正方向修改为定轴方向时运动的效果.代码如下:
</span>

```ts
@Component
export default class Example_Character_MovementAxisDirection extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置定轴方向
            myCharacter.movementAxisDirection = new Vector(1, 0, 0);
            // 打印当前角色的运动轴和面朝方向
            console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
            // 添加一个按键方法:按下键盘“1”，切换角色的运动面朝方向
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.moveFacingDirection = (myCharacter.moveFacingDirection + 1) % 3;
                console.log("当前角色的运动 " + MoveFacingDirection[myCharacter.moveFacingDirection] + " + " + MovementDirection[myCharacter.movementDirection]);
            });
            // 添加一个按键方法:按下键盘“2”，切换角色的运动时依据的正方向
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.movementDirection = (myCharacter.movementDirection + 1) % 3;
                console.log("当前角色的运动 " + MoveFacingDirection[myCharacter.moveFacingDirection] + " + " + MovementDirection[myCharacter.movementDirection]);
                if(myCharacter.movementDirection == 0) {
                    console.log("当前角色的运动 " + MoveFacingDirection[myCharacter.moveFacingDirection] + " + " + MovementDirection[myCharacter.movementDirection] + " 定轴方向 " + myCharacter.movementAxisDirection);
                }
            });
        }
    }
}
```
___

### movementDirection <Score text="movementDirection" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **movementDirection**(): [`MovementDirection`](../enums/mw.MovementDirection.md) 

</th>
<th style="text-align: left">

• `set` **movementDirection**(`InMovementDirection`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


运动正方向


::: warning Precautions

角色运动时依据的正方向。1. 控制器方向, 就以控制器坐标系为轴;
2. 如果是定轴方向，就以世界坐标系中movementAxisDirection为轴;
3. 如果是视线方向, 就以相机坐标系的为轴. 在玩家相机不存在Z轴旋转时, 控制器方向和视线方向效果一致, 人形对象的控制器方向和视线方向效果永远一致

:::


#### Returns

| [`MovementDirection`](../enums/mw.MovementDirection.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


运动正方向


::: warning Precautions

角色运动时依据的正方向。1. 控制器方向, 就以控制器坐标系为轴;
2. 如果是定轴方向，就以世界坐标系中movementAxisDirection为轴;
3. 如果是视线方向, 就以相机坐标系的为轴. 在玩家相机不存在Z轴旋转时, 控制器方向和视线方向效果一致, 人形对象的控制器方向和视线方向效果永远一致

:::

#### Parameters

| `InMovementDirection` | [`MovementDirection`](../enums/mw.MovementDirection.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_MovementDirection"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“2”，切换角色的运动时依据的正方向.你将在场景中看到角色不同运动时依据正方向的效果并在控制台看到打印的当前角色的运动轴和依据的正方向.代码如下:
</span>

```ts
@Component
export default class Example_Character_MovementDirection extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置定轴方向
            myCharacter.movementAxisDirection = new Vector(1, 0, 0);
            // 打印当前角色的运动轴和面朝方向
            console.log("当前角色的运动面朝方向 " + MoveFacingDirection[myCharacter.moveFacingDirection]);
            console.log("当前角色的运动时依据的正方向 " + MovementDirection[myCharacter.movementDirection]);
            // 添加一个按键方法:按下键盘“1”，切换角色的运动面朝方向
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.moveFacingDirection = (myCharacter.moveFacingDirection + 1) % 3;
                console.log("当前角色的运动 " + MoveFacingDirection[myCharacter.moveFacingDirection] + " + " + MovementDirection[myCharacter.movementDirection]);
            });
            // 添加一个按键方法:按下键盘“2”，切换角色的运动时依据的正方向
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.movementDirection = (myCharacter.movementDirection + 1) % 3;
                console.log("当前角色的运动 " + MoveFacingDirection[myCharacter.moveFacingDirection] + " + " + MovementDirection[myCharacter.movementDirection]);
                if(myCharacter.movementDirection == 0) {
                    console.log("当前角色的运动 " + MoveFacingDirection[myCharacter.moveFacingDirection] + " + " + MovementDirection[myCharacter.movementDirection] + " 定轴方向 " + myCharacter.movementAxisDirection);
                }
            });
        }
    }
}
```
___

### movementEnabled <Score text="movementEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **movementEnabled**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **movementEnabled**(`value`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


启用移动能力


::: warning Precautions

角色当前是否启用移动能力，true表示角色可以移动，false表示角色不可移动。

:::


#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


启用移动能力


::: warning Precautions

角色当前是否启用移动能力，true表示角色可以移动，false表示角色不可移动。

:::

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_MovementEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，你将在场景中看到禁用角色的移动能力的效果.代码如下:
</span>

```ts
@Component
export default class Example_MovementEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法：按下键盘“1”，启用/禁用 角色的移动能力
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.movementEnabled = !myCharacter.movementEnabled;
                console.log("当前角色是否可以移动: "+ myCharacter.movementEnabled);
            });
        }
    }
}
```
___

### movementMode <Score text="movementMode" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **movementMode**(): [`MovementMode`](../enums/mw.MovementMode.md) 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


移动模式


::: warning Precautions

当前角色的移动模式。行走、游泳或飞行。

:::


#### Returns

| [`MovementMode`](../enums/mw.MovementMode.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"23060,86749"拖入优先加载栏。创建一个名为"Example_Character_movementMode"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中创建游泳池以便支持切换游泳状态。给角色【移动模式切换】委托添加一个函数:打印当前移动模式，看到角色根据运动模式切换道具的效果。按下键盘“1”，角色切换为行走。按下键盘“2”，角色切换为游泳(需在游泳区域内)。按下键盘“3”，角色生成喷气背包，切换为飞行。.代码如下:
</span>

```ts
@Component
export default class Example_Character_movementMode extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 创建游泳池
            let swimmingPool = GameObject.spawn("SwimmingVolume",{ transform: new Transform(new Vector(600, 0, 0), Rotation.zero, new Vector(10, 10, 1))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let item: GameObject = null;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 给角色【移动模式切换】委托添加一个函数:打印当前移动模式，根据模式切换道具
            myCharacter.onMovementModeChange.add((mode) => {
                console.log("current movementMode " + myCharacter.movementMode);
                switch (mode) {
                    case 0:
                        if(item) {
                            item.destroy();
                        }
                        item = null;
                        break;
                    case 1:
                        if(item) {
                            item.destroy();
                        }
                        item = GameObject.spawn("23060");
                        myCharacter.attachToSlot(item, HumanoidSlotType.Buttocks);
                        break;
                    case 2:
                        if(item) {
                            item.destroy();
                        }
                        item = GameObject.spawn("86749");
                        myCharacter.attachToSlot(item, HumanoidSlotType.BackOrnamental);
                        item.localTransform.position = new Vector(-5, 0, -125);
                        item.localTransform.rotation = new Rotation(0, 0, 90);
                        break;
                    default:
                        break;
                }
            });
            // 添加一个按键方法:按下键盘“1”，角色切换为行走
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.switchToWalking();
            });
            // 添加一个按键方法:按下键盘“2”，角色切换为游泳(需在游泳区域内)
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法:按下键盘“3”，角色生成喷气背包，切换为飞行
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.switchToFlying();
            });
        }
    }
}
```
___

### outOfWaterVerticalSpeed <Score text="outOfWaterVerticalSpeed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **outOfWaterVerticalSpeed**(): `number` 

</th>
<th style="text-align: left">

• `set` **outOfWaterVerticalSpeed**(`value`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


出水时垂直方向速度


::: warning Precautions

角色出水时Z轴方向上的速度。仅在角色可以跳出水面时生效。

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


出水时垂直方向速度


::: warning Precautions

角色出水时Z轴方向上的速度。仅在角色可以跳出水面时生效。

:::

#### Parameters

| `value` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"53011,20307"拖入优先加载栏。创建一个名为"Example_OutOfWaterVerticalSpeed "的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,设置角色可以跳出水面且出水垂直速度为100。在场景中生成拱形容器并适配游泳区域.按住键盘“2”，角色上浮.你可以看到的角色到达水面并跃出的效果.代码如下:
</span>

```ts
@Component
export default class Example_OutOfWaterVerticalSpeed  extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            GameObject.spawn("SwimmingVolume",{transform: new Transform(new Vector(0, 0, 500), new Rotation(0, 0, 90), new Vector(20, 20, 10))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let flag = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 100;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = 10;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadSubStance("20307");
            // 添加一个按键方法:按下键盘“1”，角色切换游泳 / 行走
            InputUtil.onKeyDown(Keys.One, () => {
                if(flag) {
                    myCharacter.switchToWalking();
                } else {
                    myCharacter.switchToSwimming();
                }
                flag = !flag;
            });
            // 添加一个按键方法:按住键盘“2”，角色上浮
            InputUtil.onKeyPress(Keys.Two, () => {
                myCharacter.swimUp(10);
            });
            // 添加一个按键方法:按住键盘“3”，角色下潜
            InputUtil.onKeyPress(Keys.Three, () => {
                myCharacter.swimDown(10);
            });
            // 添加一个按键方法:按下键盘“4”，角色进行喷射加速
            InputUtil.onKeyDown(Keys.Four, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作:停止动画清除姿态，还原游泳速度，清除加速周期
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
                        myCharacter.swimUp(1)
                    }, 1);
                }
                // 1秒后执行停止加速操作
                    setTimeout(() => {
                        isBoost = false;
                        clearInterval(boost_interval);
                        myCharacter.maxSwimSpeed = 300;
                        boostAnimation.stop();
                        boostStance.stop();
                    }, 1000);
                    // 1.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1200);
            });
        }
    }
}
```
___

### overheadUI <Score text="overheadUI" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **overheadUI**(): [`UIWidget`](mw.UIWidget.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取头顶UIWidget


::: warning Precautions

角色头顶UI对象

:::


#### Returns

| [`UIWidget`](mw.UIWidget.md) | 头顶UIWidget对象 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_OverheadUI"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”, 隐藏 / 显示头顶UI.你将在场景中看到UI可见性修改的效果.代码如下:
</span>

```ts
@Component
export default class Example_Character_OverheadUI extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法：按下键盘“1”, 隐藏 / 显示头顶UI
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.overheadUI.getVisibility() == true) {
                    myCharacter.overheadUI.setVisibility(PropertyStatus.Off);
                } else {
                    myCharacter.overheadUI.setVisibility(PropertyStatus.On);
                }
            });
        }
    }
}
```
___

### physicsEnabled <Score text="physicsEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **physicsEnabled**(): `boolean`

</th>
<th style="text-align: left">

• `set` **physicsEnabled**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取角色物理状态

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置角色物理状态

#### Parameters

| `value` `boolean` | 是否开启角色物理,默认关闭以节省性能.该属性对角色射线检测功能有影响,如果需要射线检测打到具体的骨骼部位,可将physicsEnabled设置true |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### ragdollEnabled <Score text="ragdollEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **ragdollEnabled**(): `boolean`

</th>
<th style="text-align: left">

• `set` **ragdollEnabled**(`value`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


启用布娃娃

::: warning Precautions

角色当前是否使用布娃娃状态。true表示使用，false表示禁用。

:::


#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


启用布娃娃


::: warning Precautions

角色当前是否使用布娃娃状态。true表示使用，false表示禁用。

:::

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"27693"拖入优先加载栏。创建一个名为"Example_Character_RagdollEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成一个循环黑洞特效.如果角色与黑洞中心距离小于300且角色没有开启布娃娃，则朝中心移动角色.如果角色与黑洞中心距离小于50，则开启布娃娃.你可以看到角色开关布娃娃的不同效果代码如下:
</span>

```ts
@Component
export default class Example_Character_RagdollEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            this.useUpdate = true;
            // 生成一个黑洞特效循环播放
            EffectService.playAtPosition("27693", new Vector(500, 0, 50), {loopCount: 0});
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
            if(myCharacter.worldTransform.position.subtract(new Vector(500, 0, 50)).length < 300 && !myCharacter.ragdollEnabled) {
                let dir = new Vector(500, 0, 50).subtract(myCharacter.worldTransform.position).normalize();
                myCharacter.addMovement(new Vector(dir.x, dir.y, 0));
            }
            // 如果角色与黑洞中心距离小于50，则开启布娃娃
            if(myCharacter.worldTransform.position.subtract(new Vector(500, 0, 50)).length < 50) {
                myCharacter.ragdollEnabled = true;
                setTimeout(() => {
                    myCharacter.worldTransform.position = new Vector(0, 0, 130);
                    myCharacter.ragdollEnabled = false;
                }, 2000);
            }
        }
    }
}
```
___

### rotateRate <Score text="rotateRate" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **rotateRate**(): `number` 

</th>
<th style="text-align: left">

• `set` **rotateRate**(`InRotateRate`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


最大转向速度


::: warning Precautions

角色每秒旋转的最大速度。设置为负值时, 转向速度被视为无限大, 可以瞬间转向。

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


最大转向速度


::: warning Precautions

角色每秒旋转的最大速度。设置为负值时, 转向速度被视为无限大, 可以瞬间转向。

:::

#### Parameters

| `InRotateRate` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_RotateRate"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将设置角色转向速度为原来的0.5倍,并在场景中看到角色转向变慢的效果.代码如下:
</span>

```ts
@Component
export default class Example_Character_RotateRate extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            this.useUpdate = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration;
            // 设置角色最大转向速度为原来的0.5倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate;
            // 设置角色最大行走速度为原来的2倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking;
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 1;
            // 添加一个按键方法：按下键盘“1”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.groundFrictionEnabled = !myCharacter.groundFrictionEnabled;
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
___

### velocity <Score text="velocity" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **velocity**(): [`Vector`](mw.Vector.md) 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当前移动速度


::: warning Precautions

角色当前移动的速度

:::


#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_Velocity"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,如果角色正在移动,你将在控制台中看到打印的角色移动速度.代码如下:
</span>

```ts
@Component
export default class Example_Character_Velocity extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            this.useUpdate = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.maxAcceleration = 0.1 * myCharacter.maxAcceleration;
            // 设置角色最大转向速度为原来的0.5倍
            myCharacter.rotateRate = 0.5 * myCharacter.rotateRate;
            // 设置角色最大行走速度为原来的2倍
            myCharacter.maxWalkSpeed = 2 * myCharacter.maxAcceleration;
            // 设置角色最大加速度为原来的0.1倍
            myCharacter.brakingDecelerationWalking = 0.1 * myCharacter.brakingDecelerationWalking;
            // 设置角色摩擦力参数
            myCharacter.brakingDecelerationWalking = myCharacter.maxWalkSpeed * 0.5;
            myCharacter.groundFriction = 1;
            // 添加一个按键方法：按下键盘“1”，切换角色摩擦力的来源
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.groundFrictionEnabled = !myCharacter.groundFrictionEnabled;
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
___

### walkableFloorAngle <Score text="walkableFloorAngle" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **walkableFloorAngle**(): `number` 

</th>
<th style="text-align: left">

• `set` **walkableFloorAngle**(`InWalkableFloorAngle`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


可行走的最大角度


::: warning Precautions

角色站立在斜坡上时，斜坡的最大角度，超过该角度，角色将无法站立在这个斜坡上，角色会存在坠落的表现。使用范围在0-90之间。

:::


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


可行走的最大角度


::: warning Precautions

角色站立在斜坡上时，斜坡的最大角度，超过该角度，角色将无法站立在这个斜坡上，角色会存在坠落的表现。使用范围在0-90之间。

:::

#### Parameters

| `InWalkableFloorAngle` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"7667,197386"拖入优先加载栏。创建一个名为"Example_WalkableFloorAngle"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中创建5个不同坡度的锥体:1，30，45，60，89.按下键盘“3”，角色可行走的最大角度增加5.按下键盘“4”，角色可行走的最大角度减小5.你将看到角色可行走的最大角度变化带来的效果.代码如下:
</span>

```ts
@Component
export default class Example_WalkableFloorAngle extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
         // 下列代码仅在服务端执行
         if(SystemUtil.isServer()) {
            // 创建5个不同高度的立方体：10，20，40，80，160
            let cubeHeight = [10, 20, 40, 80, 160];
            for (let i = 0; i < cubeHeight.length; i++) {
                GameObject.spawn("197386",{transform: new Transform(new Vector(250 * i, -500, 0), Rotation.zero, new Vector(2, 2, cubeHeight[i] / 100))});
            }
            // 创建5个不同坡度的锥体:1，30，45，60，89
            let coneAngle = [1, 30, 45, 60, 89];
            for (let i = 0; i < coneAngle.length; i++) {
                console.log("1111");
                GameObject.spawn("7667",{transform: new Transform(new Vector(250 * i, 500, 0), Rotation.zero, new Vector(2, 2, Math.tan(coneAngle[i] * Math.PI / 180)))});
            }
         }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法：按下键盘“1”，角色最大可跨越高度增加10
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.maxStepHeight += 10;
                console.log("角色最大可跨越高度：" + myCharacter.maxStepHeight);
            });
            // 添加一个按键方法：按下键盘“2”，角色最大可跨越高度减小10
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.maxStepHeight -= 10;
                console.log("角色最大可跨越高度：" + myCharacter.maxStepHeight);
            });
            // 添加一个按键方法：按下键盘“3”，角色可行走的最大角度增加5
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.walkableFloorAngle += 5;
                console.log("可行走的最大角度：" + myCharacter.walkableFloorAngle);
            });
            // 添加一个按键方法：按下键盘“4”，角色可行走的最大角度减小5
            InputUtil.onKeyDown(Keys.Four, () => {
                myCharacter.walkableFloorAngle -= 5;
                console.log("可行走的最大角度：" + myCharacter.walkableFloorAngle);
            });
        }
    }
}
```
___

### nameDisplayDistance <Score text="nameDisplayDistance" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **nameDisplayDistance**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **nameDisplayDistance**(`range`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当前客户端所有角色头顶显示名称可见距离，当角色头顶显示名称可见时生效。距离为0时不可见。


::: warning Precautions

显示名称可见距离

:::

#### Returns

| `number` | 显示名称可见距离 |
| :------ | :------ |


</td>
<td style="text-align: left">


当前客户端所有角色头顶显示名称可见距离，当角色头顶显示名称可见时生效。距离为0时不可见。


::: warning Precautions

显示名称可见距离

:::

#### Parameters

| `range` | `number` |
| :------ | :------ |


显示名称可见距离


</td>
</tr></tbody>
</table>

___

### nameVisible <Score text="nameVisible" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **nameVisible**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **nameVisible**(`isVisible`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当前客户端所有角色头顶显示名称是否可见，属性为true时角色头顶显示名称可见，属性为false时角色头顶显示名称不可见。


::: warning Precautions

显示名称可见性

:::

#### Returns

| `boolean` | 显示名称是否可见 |
| :------ | :------ |


</td>
<td style="text-align: left">


当前客户端所有角色头顶显示名称是否可见，属性为true时角色头顶显示名称可见，属性为false时角色头顶显示名称不可见。


::: warning Precautions

显示名称可见性

:::

#### Parameters

| `isVisible` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

显示名称是否可见

## Methods

### addImpulse <Score text="addImpulse" /> 

• **addImpulse**(`Vector`, `ignoreMass?`): `void` <Badge type="tip" text="server" />

添加冲量

#### Parameters

| `Vector` [`Vector`](mw.Vector.md) | 应用的冲量 |
| :------ | :------ |
| `ignoreMass?` `boolean` | 是否忽略质量对冲量的影响 default:false |



::: warning Precautions

质量固定为100, 受质量影响的算法为: 冲量按位除以质量

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"122180,122182,132631,75354"拖入优先加载栏。创建一个名为"Example_Character_AddImpulse"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成一个生成大炮模型。在大炮附加生成一个触发器并添加进入委托，当角色进入范围后向服务器发送【发射】事件.如果角色进入触发器则，你可以看到角色添加一个冲量被大炮发射出去的效果。代码如下:
</span>

```ts
@Component
export default class Example_Character_AddImpulse extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成大炮模型
            let cannon_base = GameObject.spawn("122180",{transform: new Transform(new Vector(750, 0, 0), new Rotation(0, 0, -90), Vector.one.multiply(2))});
            let cannon_tube  = GameObject.spawn("122182",{transform: new Transform(new Vector(750, 0, 250), new Rotation(0, 30, 90), Vector.one.multiply(2))});
            // 在服务端添加一个【Launch】事件监听器，给角色添加冲量
            mw.Event.addClientListener("Launch", (player) => {
                player.character.addImpulse(new Vector(0, 1, 1).multiply(1000), true);
            });
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成触发器并添加进入委托，当角色进入范围后向服务器发送【发射】事件
            let cannon_trigger  = GameObject.spawn("Trigger",{transform: new Transform(new Vector(750, 0, 0), new Rotation(0, 30, 90), Vector.one.multiply(4))}) as Trigger;
            cannon_trigger.onEnter.add((character: Character) => {
                character.worldTransform.position = new Vector(750, 275, 330);
                // 向服务器派发【Launch】事件
                mw.Event.dispatchEventToServer("Launch");
                // 播放音效特效。
                EffectService.playAtPosition("132631", new Vector(750, 275, 330))
                SoundService.playSound("75354");
            });
        }
    }
}
```

___

### addMovement <Score text="addMovement" /> 

• **addMovement**(`direction`): `void` 

沿着给定的方向向量添加移动输入，不会自动应用移动，由开发者在 onUpdate 事件中执行此操作。

#### Parameters

| `direction` [`Vector`](mw.Vector.md) | 输入的方向 |
| :------ | :------ |



::: warning Precautions

效果受movementDirection属性影响。如果此时同时有用户输入效果是叠加而不是覆盖。

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"27693"拖入优先加载栏。创建一个名为"Example_Character_AddMovement"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成一个循环黑洞特效.如果角色与黑洞中心距离小于300且角色没有开启布娃娃，则朝中心移动角色.如果角色与黑洞中心距离小于50，则开启布娃娃.你可以看到角色开关布娃娃的不同效果代码如下:
</span>

```ts
@Component
export default class Example_Character_AddMovement extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            this.useUpdate = true;
            // 生成一个黑洞特效循环播放
            EffectService.playAtPosition("27693", new Vector(500, 0, 50), {loopCount: 0});
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
            if(myCharacter.worldTransform.position.subtract(new Vector(500, 0, 50)).length < 300 && !myCharacter.ragdollEnabled) {
                let dir = new Vector(500, 0, 50).subtract(myCharacter.worldTransform.position).normalize();
                myCharacter.addMovement(new Vector(dir.x, dir.y, 0));
            }
            // 如果角色与黑洞中心距离小于50，则开启布娃娃
            if(myCharacter.worldTransform.position.subtract(new Vector(500, 0, 50)).length < 50) {
                myCharacter.ragdollEnabled = true;
                setTimeout(() => {
                    myCharacter.worldTransform.position = new Vector(0, 0, 130);
                    myCharacter.ragdollEnabled = false;
                }, 2000);
            }
        }
    }
}
```

___

### attachToSlot <Score text="attachToSlot" /> 

• **attachToSlot**(`gameObject`, `slotName`): `void` 

将物体附着到人物角色的指定插槽

#### Parameters

| `gameObject` [`GameObject`](mw.GameObject.md) |  被附着的物体 |
| :------ | :------ |
| `slotName` [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md) |  插槽名字，被附着到指定的插槽名 |



::: warning Precautions

只适用于人形角色

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"27704,29052,118149,122953,26168"拖入优先加载栏。创建一个名为"Example_Character_AttachToSlot"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏.按下键盘“1”，添加 / 移除角色的头顶光环。按下键盘“2”，给角色插槽装备模型。按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除。按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效。代码如下:
</span>

```ts
@Component
export default class Example_Character_AttachToSlot extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            let halo = null;
            // 添加一个按键方法：按下键盘“1”，添加 / 移除角色的头顶光环
            InputUtil.onKeyDown(Keys.One, () => {
                if(halo) {
                    myCharacter.detachFromSlot(halo);
                    setTimeout(() => {
                        halo.destroy();
                        halo = null;
                    }, 1000);
                } else {
                    // 在角色头顶生成一个光环并附加到头顶插槽
                    halo = GameObject.spawn("27704") as Effect;
                    myCharacter.attachToSlot(halo, HumanoidSlotType.Rings);
                    halo.play();
                }
            });
            // 生成三件装备
            let sword = GameObject.spawn("29052",{transform: new Transform(new Vector(300, -100, 100), Rotation.zero, Vector.one)});
            let shield = GameObject.spawn("118149",{transform: new Transform(new Vector(300, 0, 100), Rotation.zero, Vector.one)});
            let spike = GameObject.spawn("122953",{transform: new Transform(new Vector(300, 100, 100), Rotation.zero, Vector.one)});
            // 添加一个按键方法：按下键盘“2”，给角色插槽增加装备
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.attachToSlot(sword, HumanoidSlotType.RightHand);
                myCharacter.attachToSlot(shield, HumanoidSlotType.LeftHand);
                myCharacter.attachToSlot(spike, HumanoidSlotType.LeftBack);
            });
            // 添加一个按键方法：按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.detachAllFromSlot();
                sword.worldTransform = new Transform(new Vector(300, -100, 100), Rotation.zero, Vector.one);
                shield.worldTransform = new Transform(new Vector(300, 0, 100), Rotation.zero, Vector.one);
                spike.worldTransform = new Transform(new Vector(300, 100, 100), Rotation.zero, Vector.one);
            });
            // 添加一个按键方法：按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效
            InputUtil.onKeyDown(Keys.Four, () => {
                let pos = myCharacter.getVertexPosition(0);
                if(pos) {
                    let zzz = GameObject.spawn("26168") as Effect;
                    zzz.worldTransform.position = pos;
                    zzz.play(() => {
                        zzz.destroy();
                    });
                }
                pos = myCharacter.getSlotWorldPosition(HumanoidSlotType.Rings);
                if(pos) {
                    let zzz = GameObject.spawn("26168") as Effect;
                    zzz.worldTransform.position = pos;
                    zzz.play(() => {
                        zzz.destroy();
                    });
                }
            });
        }
    }
}
```

___

### clearDescription <Score text="clearDescription" /> 

• **clearDescription**(`appearance?`, `slotAndDecoration?`): `void` 

清空外观数据

#### Parameters

| `appearance?` `boolean` | 是否清空形象数据 default:true |
| :------ | :------ |
| `slotAndDecoration?` `boolean` | 是否清空插槽和物品数据 default:true |



::: warning Precautions

清空角色外观数据，此时角色不具备任何视觉表现。

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183"拖入优先加载栏。创建一个名为"Example_Character_ClearDescription"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到玩家控制角色玩家外观准备未完成播放摊手的效果.给【角色外观描述完成】委托添加函数来播放换装完成特效，并保存角色初始默认外观数据。给【角色外观描述变化】委托添加函数在控制台打印当前角色外观描述变化的具体子项和索引。按下键盘“1”，重置为默认角色外观。按下键盘“2”，修改角色外观。按下键盘“3”，同步角色外观。按下键盘“4”，清空角色外观。代码如下:
</span>

```ts
@Component
export default class Example_Character_ClearDescription extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.isDescriptionReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            let defaultStyle = null;
            // 给【角色外观描述完成】委托添加函数
            myCharacter.onDescriptionComplete.add(() => {
                // 播放换装完成特效
                EffectService.playOnGameObject("161245", myCharacter);
                // 获取角色默认外观风格
                if(defaultStyle == null) {
                    defaultStyle = myCharacter.getDescription();
                }
            });
            // 给【角色外观描述变化】委托添加函数
            myCharacter.onDescriptionChange.add((operationCode: number, index: number, value: unknown) => {
                console.log("Appearance Changed");
                console.log("OperationCode " + operationCode + " Index " + index);
            });
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.setDescription(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，修改角色外观
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style头部:头大小为1.5倍
                    myCharacter.description.advance.headFeatures.head.headOverallScale = 1.5;
                    // 修改角色style体型:身高为1.2倍
                    myCharacter.description.advance.bodyFeatures.body.height = 1.2;
                    // 修改角色style化妆:腮红为75674
                    myCharacter.description.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发:前发为57731，后发为63910
                    myCharacter.description.advance.hair.frontHair.style = "57731";
                    myCharacter.description.advance.hair.backHair.style = "63910";
                    // 修改角色style:上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.description.advance.clothing.upperCloth.style = "58694";
                    myCharacter.description.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.description.advance.clothing.gloves.style = "60384";
                    myCharacter.description.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法:按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.syncDescription();
            });
            // 添加一个按键方法:按下键盘“4”，清空角色外观
            InputUtil.onKeyDown(Keys.Four, () => {
                myCharacter.clearDescription();
            });
        }
    }
}
```

___

### crouch <Score text="crouch" /> 

• **crouch**(`isCrouch`): `void` 

下蹲

#### Parameters

| `isCrouch` `boolean` | 是否下蹲 |
| :------ | :------ |



<span style="font-size: 14px;">
使用示例:将使用到的资源:"54834,36851"拖入优先加载栏。创建一个名为"Example_Character_Crouch"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成草丛和拱门并添加触发器，并添加委托函数实现角色进入草丛蹲下，离开站起的效果。设置地面蹲伏行走时的最大移动速度100。你可以看到角色蹲下后行走速度减慢的效果。代码如下:
</span>

```ts
@Component
export default class Example_Character_Crouch extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成草丛和拱门
            GameObject.spawn("54834",{transform: new Transform(new Vector(300, 0, 0), Rotation.zero, new Vector(2, 2, 2))});
            let arch = GameObject.spawn("36851",{transform: new Transform(new Vector(300, 210, 0), new Rotation(0, 0, 90), new Vector(2, 1, 2))});
            arch.setCollision(CollisionStatus.On);
            // 生成触发器并添加委托函数：进入触发器的角色蹲下，离开触发器站起
            let tri = GameObject.spawn("Trigger",{transform: new Transform(new Vector(300, 0, 50), Rotation.zero, new Vector(2, 2, 1))}) as mw.Trigger;
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
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 地面蹲伏行走时的最大移动速度100
            myCharacter.maxWalkSpeedCrouched = 100;
            // 下蹲后高度为100
            myCharacter.crouchedHeight = 100;
            // 添加一个按键方法：按下键盘“1”，启用/禁用下蹲能力
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.crouchEnabled = !myCharacter.crouchEnabled;
                console.log("当前角色是否能下蹲 " + myCharacter.crouchEnabled);
            });
        }
    }
}
```

___

### detachAllFromSlot <Score text="detachAllFromSlot" /> 

• **detachAllFromSlot**(`param?`): `void` 

将角色插槽附着的对象全部分离

#### Parameters

| `param?` `Object` | 插槽数据 default:null |
| :------ | :------ |
| `param.isDestroy?` `boolean` | - |
| `param.slotName?` [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md) | - |



::: warning Precautions

如果不填入插槽则将全部插槽的附着对象分离。仅对高级人型角色生效。

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"27704,29052,118149,122953,26168"拖入优先加载栏。创建一个名为"Example_Character_DetachAllFromSlot"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏.按下键盘“1”，添加 / 移除角色的头顶光环。按下键盘“2”，给角色插槽装备模型。按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除。按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效。代码如下:
</span>

```ts
@Component
export default class Example_Character_DetachAllFromSlot extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            let halo = null;
            // 添加一个按键方法：按下键盘“1”，添加 / 移除角色的头顶光环
            InputUtil.onKeyDown(Keys.One, () => {
                if(halo) {
                    myCharacter.detachFromSlot(halo);
                    setTimeout(() => {
                        halo.destroy();
                        halo = null;
                    }, 1000);
                } else {
                    // 在角色头顶生成一个光环并附加到头顶插槽
                    halo = GameObject.spawn("27704") as Effect;
                    myCharacter.attachToSlot(halo, HumanoidSlotType.Rings);
                    halo.play();
                }
            });
            // 生成三件装备
            let sword = GameObject.spawn("29052",{transform: new Transform(new Vector(300, -100, 100), Rotation.zero, Vector.one)});
            let shield = GameObject.spawn("118149",{transform: new Transform(new Vector(300, 0, 100), Rotation.zero, Vector.one)});
            let spike = GameObject.spawn("122953",{transform: new Transform(new Vector(300, 100, 100), Rotation.zero, Vector.one)});
            // 添加一个按键方法：按下键盘“2”，给角色插槽增加装备
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.attachToSlot(sword, HumanoidSlotType.RightHand);
                myCharacter.attachToSlot(shield, HumanoidSlotType.LeftHand);
                myCharacter.attachToSlot(spike, HumanoidSlotType.LeftBack);
            });
            // 添加一个按键方法：按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.detachAllFromSlot();
                sword.worldTransform = new Transform(new Vector(300, -100, 100), Rotation.zero, Vector.one);
                shield.worldTransform = new Transform(new Vector(300, 0, 100), Rotation.zero, Vector.one);
                spike.worldTransform = new Transform(new Vector(300, 100, 100), Rotation.zero, Vector.one);
            });
            // 添加一个按键方法：按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效
            InputUtil.onKeyDown(Keys.Four, () => {
                let pos = myCharacter.getVertexPosition(0);
                if(pos) {
                    let zzz = GameObject.spawn("26168") as Effect;
                    zzz.worldTransform.position = pos;
                    zzz.play(() => {
                        zzz.destroy();
                    });
                }
                pos = myCharacter.getSlotWorldPosition(HumanoidSlotType.Rings);
                if(pos) {
                    let zzz = GameObject.spawn("26168") as Effect;
                    zzz.worldTransform.position = pos;
                    zzz.play(() => {
                        zzz.destroy();
                    });
                }
            });
        }
    }
}
```

___

### detachFromSlot <Score text="detachFromSlot" /> 

• **detachFromSlot**(`gameObject`): `void` 

将物体从插槽中分离

#### Parameters

| `gameObject` [`GameObject`](mw.GameObject.md) | 物体GameObject |
| :------ | :------ |



::: warning Precautions

接触对象与角色插槽之间的挂载关系

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"27704,29052,118149,122953,26168"拖入优先加载栏。创建一个名为"Example_Character_DetachFromSlot"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏.按下键盘“1”，添加 / 移除角色的头顶光环。按下键盘“2”，给角色插槽装备模型。按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除。按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效。代码如下:
</span>

```ts
@Component
export default class Example_Character_DetachFromSlot extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            let halo = null;
            // 添加一个按键方法：按下键盘“1”，添加 / 移除角色的头顶光环
            InputUtil.onKeyDown(Keys.One, () => {
                if(halo) {
                    myCharacter.detachFromSlot(halo);
                    setTimeout(() => {
                        halo.destroy();
                        halo = null;
                    }, 1000);
                } else {
                    // 在角色头顶生成一个光环并附加到头顶插槽
                    halo = GameObject.spawn("27704") as Effect;
                    myCharacter.attachToSlot(halo, HumanoidSlotType.Rings);
                    halo.play();
                }
            });
            // 生成三件装备
            let sword = GameObject.spawn("29052",{transform: new Transform(new Vector(300, -100, 100), Rotation.zero, Vector.one)});
            let shield = GameObject.spawn("118149",{transform: new Transform(new Vector(300, 0, 100), Rotation.zero, Vector.one)});
            let spike = GameObject.spawn("122953",{transform: new Transform(new Vector(300, 100, 100), Rotation.zero, Vector.one)});
            // 添加一个按键方法：按下键盘“2”，给角色插槽增加装备
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.attachToSlot(sword, HumanoidSlotType.RightHand);
                myCharacter.attachToSlot(shield, HumanoidSlotType.LeftHand);
                myCharacter.attachToSlot(spike, HumanoidSlotType.LeftBack);
            });
            // 添加一个按键方法：按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.detachAllFromSlot();
                sword.worldTransform = new Transform(new Vector(300, -100, 100), Rotation.zero, Vector.one);
                shield.worldTransform = new Transform(new Vector(300, 0, 100), Rotation.zero, Vector.one);
                spike.worldTransform = new Transform(new Vector(300, 100, 100), Rotation.zero, Vector.one);
            });
            // 添加一个按键方法：按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效
            InputUtil.onKeyDown(Keys.Four, () => {
                let pos = myCharacter.getVertexPosition(0);
                if(pos) {
                    let zzz = GameObject.spawn("26168") as Effect;
                    zzz.worldTransform.position = pos;
                    zzz.play(() => {
                        zzz.destroy();
                    });
                }
                pos = myCharacter.getSlotWorldPosition(HumanoidSlotType.Rings);
                if(pos) {
                    let zzz = GameObject.spawn("26168") as Effect;
                    zzz.worldTransform.position = pos;
                    zzz.play(() => {
                        zzz.destroy();
                    });
                }
            });
        }
    }
}
```

___

### getDescription <Score text="getDescription" /> 

• **getDescription**(): [`CharacterDescription`](mw.CharacterDescription.md) 

获取外观数据

#### Returns

| [`CharacterDescription`](mw.CharacterDescription.md) | 角色外观数据的拷贝 |
| :------ | :------ |


::: warning Precautions

该接口获取角色当前外观数据的拷贝

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183"拖入优先加载栏。创建一个名为"Example_Character_GetDescription"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到玩家控制角色玩家外观准备未完成播放摊手的效果.给【角色外观描述完成】委托添加函数来播放换装完成特效，并保存角色初始默认外观数据。给【角色外观描述变化】委托添加函数在控制台打印当前角色外观描述变化的具体子项和索引。按下键盘“1”，重置为默认角色外观。按下键盘“2”，修改角色外观。按下键盘“3”，同步角色外观。按下键盘“4”，清空角色外观。代码如下:
</span>

```ts
@Component
export default class Example_Character_GetDescription extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.isDescriptionReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            let defaultStyle = null;
            // 给【角色外观描述完成】委托添加函数
            myCharacter.onDescriptionComplete.add(() => {
                // 播放换装完成特效
                EffectService.playOnGameObject("161245", myCharacter);
                // 获取角色默认外观风格
                if(defaultStyle == null) {
                    defaultStyle = myCharacter.getDescription();
                }
            });
            // 给【角色外观描述变化】委托添加函数
            myCharacter.onDescriptionChange.add((operationCode: number, index: number, value: unknown) => {
                console.log("Appearance Changed");
                console.log("OperationCode " + operationCode + " Index " + index);
            });
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.setDescription(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，修改角色外观
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style头部:头大小为1.5倍
                    myCharacter.description.advance.headFeatures.head.headOverallScale = 1.5;
                    // 修改角色style体型:身高为1.2倍
                    myCharacter.description.advance.bodyFeatures.body.height = 1.2;
                    // 修改角色style化妆:腮红为75674
                    myCharacter.description.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发:前发为57731，后发为63910
                    myCharacter.description.advance.hair.frontHair.style = "57731";
                    myCharacter.description.advance.hair.backHair.style = "63910";
                    // 修改角色style:上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.description.advance.clothing.upperCloth.style = "58694";
                    myCharacter.description.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.description.advance.clothing.gloves.style = "60384";
                    myCharacter.description.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法:按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.syncDescription();
            });
            // 添加一个按键方法:按下键盘“4”，清空角色外观
            InputUtil.onKeyDown(Keys.Four, () => {
                myCharacter.clearDescription();
            });
        }
    }
}
```

___

### getSlotWorldPosition <Score text="getSlotWorldPosition" /> 

• **getSlotWorldPosition**(`slotName`): [`Vector`](mw.Vector.md) 

获取角色插槽的世界坐标

#### Parameters

| `slotName` [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md) | 插槽名字 |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | 坐标位置 |
| :------ | :------ |


::: warning Precautions

受角色外观中插槽偏移影响，仅对高级人型角色生效。

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"27704,29052,118149,122953,26168"拖入优先加载栏。创建一个名为"Example_Character_GetSlotWorldPosition"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏.按下键盘“1”，添加 / 移除角色的头顶光环。按下键盘“2”，给角色插槽装备模型。按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除。按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效。代码如下:
</span>

```ts
@Component
export default class Example_Character_GetSlotWorldPosition extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            let halo = null;
            // 添加一个按键方法：按下键盘“1”，添加 / 移除角色的头顶光环
            InputUtil.onKeyDown(Keys.One, () => {
                if(halo) {
                    myCharacter.detachFromSlot(halo);
                    setTimeout(() => {
                        halo.destroy();
                        halo = null;
                    }, 1000);
                } else {
                    // 在角色头顶生成一个光环并附加到头顶插槽
                    halo = GameObject.spawn("27704") as Effect;
                    myCharacter.attachToSlot(halo, HumanoidSlotType.Rings);
                    halo.play();
                }
            });
            // 生成三件装备
            let sword = GameObject.spawn("29052",{transform: new Transform(new Vector(300, -100, 100), Rotation.zero, Vector.one)});
            let shield = GameObject.spawn("118149",{transform: new Transform(new Vector(300, 0, 100), Rotation.zero, Vector.one)});
            let spike = GameObject.spawn("122953",{transform: new Transform(new Vector(300, 100, 100), Rotation.zero, Vector.one)});
            // 添加一个按键方法：按下键盘“2”，给角色插槽增加装备
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.attachToSlot(sword, HumanoidSlotType.RightHand);
                myCharacter.attachToSlot(shield, HumanoidSlotType.LeftHand);
                myCharacter.attachToSlot(spike, HumanoidSlotType.LeftBack);
            });
            // 添加一个按键方法：按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.detachAllFromSlot();
                sword.worldTransform = new Transform(new Vector(300, -100, 100), Rotation.zero, Vector.one);
                shield.worldTransform = new Transform(new Vector(300, 0, 100), Rotation.zero, Vector.one);
                spike.worldTransform = new Transform(new Vector(300, 100, 100), Rotation.zero, Vector.one);
            });
            // 添加一个按键方法：按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效
            InputUtil.onKeyDown(Keys.Four, () => {
                let pos = myCharacter.getVertexPosition(0);
                if(pos) {
                    let zzz = GameObject.spawn("26168") as Effect;
                    zzz.worldTransform.position = pos;
                    zzz.play(() => {
                        zzz.destroy();
                    });
                }
                pos = myCharacter.getSlotWorldPosition(HumanoidSlotType.Rings);
                if(pos) {
                    let zzz = GameObject.spawn("26168") as Effect;
                    zzz.worldTransform.position = pos;
                    zzz.play(() => {
                        zzz.destroy();
                    });
                }
            });
        }
    }
}
```

___

### getVertexPosition <Score text="getVertexPosition" /> 

• **getVertexPosition**(`index`): [`Vector`](mw.Vector.md) 

通过头部模型顶点index实时获取顶点位置

#### Parameters

| `index` `number` | 模型顶点index |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | 顶点位置 |
| :------ | :------ |


::: warning Precautions

目前顶点index只能从内部工程中查看

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"27704,29052,118149,122953,26168"拖入优先加载栏。创建一个名为"Example_Character_GetVertexPosition"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏.按下键盘“1”，添加 / 移除角色的头顶光环。按下键盘“2”，给角色插槽装备模型。按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除。按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效。代码如下:
</span>

```ts
@Component
export default class Example_Character_GetVertexPosition extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            let halo = null;
            // 添加一个按键方法：按下键盘“1”，添加 / 移除角色的头顶光环
            InputUtil.onKeyDown(Keys.One, () => {
                if(halo) {
                    myCharacter.detachFromSlot(halo);
                    setTimeout(() => {
                        halo.destroy();
                        halo = null;
                    }, 1000);
                } else {
                    // 在角色头顶生成一个光环并附加到头顶插槽
                    halo = GameObject.spawn("27704") as Effect;
                    myCharacter.attachToSlot(halo, HumanoidSlotType.Rings);
                    halo.play();
                }
            });
            // 生成三件装备
            let sword = GameObject.spawn("29052",{transform: new Transform(new Vector(300, -100, 100), Rotation.zero, Vector.one)});
            let shield = GameObject.spawn("118149",{transform: new Transform(new Vector(300, 0, 100), Rotation.zero, Vector.one)});
            let spike = GameObject.spawn("122953",{transform: new Transform(new Vector(300, 100, 100), Rotation.zero, Vector.one)});
            // 添加一个按键方法：按下键盘“2”，给角色插槽增加装备
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.attachToSlot(sword, HumanoidSlotType.RightHand);
                myCharacter.attachToSlot(shield, HumanoidSlotType.LeftHand);
                myCharacter.attachToSlot(spike, HumanoidSlotType.LeftBack);
            });
            // 添加一个按键方法：按下键盘“3”，将角色左手，右手，左背的插槽挂载的对象全部移除
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.detachAllFromSlot();
                sword.worldTransform = new Transform(new Vector(300, -100, 100), Rotation.zero, Vector.one);
                shield.worldTransform = new Transform(new Vector(300, 0, 100), Rotation.zero, Vector.one);
                spike.worldTransform = new Transform(new Vector(300, 100, 100), Rotation.zero, Vector.one);
            });
            // 添加一个按键方法：按下键盘“4”，在角色头顶顶点0位置和头顶UI位置分别生成一个特效
            InputUtil.onKeyDown(Keys.Four, () => {
                let pos = myCharacter.getVertexPosition(0);
                if(pos) {
                    let zzz = GameObject.spawn("26168") as Effect;
                    zzz.worldTransform.position = pos;
                    zzz.play(() => {
                        zzz.destroy();
                    });
                }
                pos = myCharacter.getSlotWorldPosition(HumanoidSlotType.Rings);
                if(pos) {
                    let zzz = GameObject.spawn("26168") as Effect;
                    zzz.worldTransform.position = pos;
                    zzz.play(() => {
                        zzz.destroy();
                    });
                }
            });
        }
    }
}
```

___

### jump <Score text="jump" /> 

• **jump**(): `void` 

跳跃



<span style="font-size: 14px;">
使用示例:创建一个名为"Example_Character_Jump"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏设置角色最大跳跃高度为300，最高三连跳。,按下键盘“1”，角色跳跃。按下键盘“2”，启用/禁用跳跃能力。你将在场景中看到角色禁用跳跃能力的效果。代码如下:
</span>

```ts
@Component
export default class Example_Character_Jump extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 最大跳跃高度为300
            myCharacter.maxJumpHeight = 300;
            // 最高三连跳
            myCharacter.jumpMaxCount = 3;
            // 添加一个按键方法：按下键盘“1”，角色跳跃。
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.jump();
                console.log("当前角色是否在跳跃 " + myCharacter.isJumping);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用跳跃能力。
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.jumpEnabled = !myCharacter.jumpEnabled;
                console.log("当前角色跳跃能力 " + myCharacter.jumpEnabled);
            });
        }
    }
}
```

___

### loadAnimation <Score text="loadAnimation" /> 

• **loadAnimation**(`assetId`): [`Animation`](mw.Animation.md) 

加载动画

#### Parameters

| `assetId` `string` | 动画资源ID |
| :------ | :------ |

#### Returns

| [`Animation`](mw.Animation.md) | 动画对象 |
| :------ | :------ |


::: warning Precautions

loadAnimation会将给定的动画加载到角色上，返回一个可播放的Animation。

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"14700,20380"拖入优先加载栏。创建一个名为"Example_Character_LoadAnimation"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载舞蹈动画,并修改循环次数为10，播放速度为2倍。给【动画完成】委托添加函数，播放一个升级特效。按下键盘“1”, 开始播放动画.按下键盘“2”, 暂停播放动画.按下键盘“3”, 继续播放动画.按下键盘“4”, 停止播放动画.代码如下:
</span>

```ts
@Component
export default class Example_Character_LoadAnimation extends Script {
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
            // 循环播放10次
            danceAnimation.loop = 10;
            // 2倍播放速度
            danceAnimation.speed = 2;
            // 给【动画完成】委托添加函数，播放一个升级特效
            danceAnimation.onFinish.add(() => {
                EffectService.playOnGameObject("20380", myCharacter, {slotType: HumanoidSlotType.Root});
            });
            // 添加一个按键方法:按下键盘“1”，开始播放
            InputUtil.onKeyDown(Keys.One, () => {
                danceAnimation.play();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“2”，暂停播放
            InputUtil.onKeyDown(Keys.Two, () => {
                danceAnimation.pause();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“3”，继续播放
            InputUtil.onKeyDown(Keys.Three, () => {
                danceAnimation.resume();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“4”，停止播放
            InputUtil.onKeyDown(Keys.Four, () => {
                danceAnimation.stop();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
        }
    }
}
```

___

### loadStance <Score text="loadStance" /> 

• **loadStance**(`assetId`): [`Stance`](mw.Stance.md) 

加载基础姿态

#### Parameters

| `assetId` `string` |  基础姿态资源ID |
| :------ | :------ |

#### Returns

| [`Stance`](mw.Stance.md) | 基础姿态对象 |
| :------ | :------ |


::: warning Precautions

loadStance会将给定的基础姿态加载到角色上，返回一个可播放的BasicStance。

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"39317,30274"拖入优先加载栏。创建一个名为"Example_Character_LoadStance"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载一个二次元男性基础姿态和二次元女性基础姿态,按下键盘“1”, 切换播放二次元男性基础姿态和二次元女性基础姿态.你将在场景中看到角色不同姿态的效果.按下键盘“2”, 停止播放基础姿态.代码如下:
</span>

```ts
@Component
export default class Example_Character_LoadStance extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个二次元男性基础姿态
            let animeManStance = myCharacter.loadStance("39317");
            console.log("animeManStance assetId " + animeManStance.assetId);
            // 给角色加载一个二次元女性基础姿态（默认）,关闭瞄准偏移
            let animeWomanStance = myCharacter.loadStance("30274");
            animeWomanStance.aimOffsetEnabled = false;
            console.log("animeWomanStance assetId " + animeWomanStance.assetId);
            // 添加一个按键方法：按下键盘“1”，切换播放二次元男性基础姿态和二次元女性基础姿态
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.currentStance == animeWomanStance) {
                    animeManStance.play();
                    // 开启瞄准偏移
                    animeManStance.aimOffsetEnabled = true;
                } else {
                    animeWomanStance.play();
                    // 关闭瞄准偏移
                    animeWomanStance.aimOffsetEnabled = false;
                }
            });
            // 添加一个按键方法：按下键盘“2”，停止播放基础姿态
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.currentStance) {
                    myCharacter.currentStance.stop();
                }
            });
        }
    }
}
```

___

### loadSubStance <Score text="loadSubStance" /> 

• **loadSubStance**(`assetId`): [`SubStance`](mw.SubStance.md) 

加载姿态

#### Parameters

| `assetId` `string` |  姿态资源ID或动画资源ID |
| :------ | :------ |

#### Returns

| [`SubStance`](mw.SubStance.md) | 二级姿态对象 |
| :------ | :------ |


::: warning Precautions

loadSubStance会将给定的姿态加载到角色上，返回一个可播放的Stance。Stance可以分上下半身播放。

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"94261,14520"拖入优先加载栏。创建一个名为"Example_Character_LoadSubStance"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载一个仅上半身的瞄准姿态和一个仅下半身的踢腿姿态,按下键盘“1”, 切换播放瞄准姿态和踢腿姿态.你将在场景中看到角色不同姿态的效果.按下键盘“2”, 停止播放姿态.代码如下:
</span>

```ts
@Component
export default class Example_Character_LoadSubStance extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载仅上半身瞄准姿态
            let aimStance = myCharacter.loadSubStance("94261");
            aimStance.blendMode = StanceBlendMode.BlendUpper;
            console.log("aimStance assetId " + aimStance.assetId);
            // 给角色加载仅下半身踢腿姿态
            let kickStance = myCharacter.loadSubStance("14520");
            kickStance.blendMode = StanceBlendMode.BlendLower;
            console.log("kickStance assetId " + kickStance.assetId);
            // 添加一个按键方法:按下键盘“1”，切换播放瞄准姿态和踢腿姿态
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.currentSubStance == aimStance) {
                    kickStance.play();
                } else {
                    aimStance.play();
                }
            });
            // 添加一个按键方法:按下键盘“2”，停止播放姿态
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.currentSubStance) {
                    myCharacter.currentSubStance.stop();
                }
            });
        }
    }
}
```

___

### lookAt <Score text="lookAt" /> 

• **lookAt**(`target`): `void` 

角色面朝目标点

#### Parameters

| `target` [`Vector`](mw.Vector.md) | 目标点 |
| :------ | :------ |



<span style="font-size: 14px;">
使用示例:将使用到的资源:"122180,122182,122174,132631,75354"拖入优先加载栏。创建一个名为"Example_Character_LookAt"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成一个生成大炮模型，5s周期从炮口生成炮弹并发射。在客户端添加一个【Look】事件监听器，当炮弹生成时获取炮弹对象，并播放音效特效。当炮弹发射时，角色会看向炮弹，你可以看到角色一直面朝炮弹的效果。代码如下:
</span>

```ts
@Component
export default class Example_Character_LookAt extends Script {
    // 声明变量
    cannon_ball: GameObject;
    stride: Vector;
    displacement: Vector;
    currentTime: number;
    currentPos: Vector;
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        this.useUpdate = true;
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成大炮模型
            let cannon_base = GameObject.spawn("122180",{transform: new Transform(new Vector(750, -750, 0), new Rotation(0, 0, -90), Vector.one.multiply(2))});
            let cannon_tube  = GameObject.spawn("122182",{transform: new Transform(new Vector(750, -750, 250), new Rotation(0, 30, 90), Vector.one.multiply(2))});
            // 5s周期从炮口生成炮弹
            TimeUtil.setInterval(() => {
                this.cannon_ball = GameObject.spawn("122174",{transform: new Transform(new Vector(750, -480, 330), Rotation.zero, Vector.one.multiply(3))});
                this.displacement = Vector.multiply(cannon_tube.worldTransform.getForwardVector(), 1000, this.displacement);
                this.currentTime = 0;
                this.currentPos = this.cannon_ball.worldTransform.position.clone();
                setTimeout(() => {
                    this.cannon_ball.destroy();
                    this.cannon_ball = null;
                }, 3000);
                mw.Event.dispatchEventToAllClient("LOOK", this.cannon_ball.guid);
            }, 5);
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 在客户端添加一个【Look】事件监听器，当炮弹生成时获取炮弹对象，并播放音效特效。
            mw.Event.addServerListener("LOOK", (guid: string) => {
                setTimeout(() => {
                    this.cannon_ball = GameObject.findGameObjectByGuid(guid);
                    EffectService.playAtPosition("132631", this.cannon_ball.worldTransform.position)
                    SoundService.playSound("75354");
                }, 100);
            });
        }
    }
    // 周期函数每帧执行，此函数执行需要将this.useUpdate赋值为true，dt是当前帧与上一帧的延迟（秒）
    protected onUpdate(dt: number): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            if(this.cannon_ball) {
                // 计算当前帧弹药移动步长
                this.stride = Vector.multiply(this.displacement, dt, this.stride);
                // 添加重力
                this.stride.z -= (50 * 9.8 * (Math.pow(this.currentTime + dt, 2) - Math.pow(this.currentTime, 2)));
                this.cannon_ball.worldTransform.rotation = this.stride.toRotation();
                this.currentTime += dt;
                // 计算出当前更新位置
                this.currentPos.x += this.stride.x;
                this.currentPos.y += this.stride.y;
                this.currentPos.z += this.stride.z;
                // 更新弹药实体位置
                this.cannon_ball.worldTransform.position = this.currentPos;
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
                myCharacter.lookAt(this.cannon_ball.worldTransform.position);
            }
        }
    }
}
```

___

### setCollisionShapeAndExtent <Score text="setCollisionShapeAndExtent" /> 

• **setCollisionShapeAndExtent**(`shapeType`, `collisionExtent`): `void` 

设置不同形状不同大小的碰撞体

#### Parameters

| `shapeType` [`CustomShapeType`](../enums/mw.CustomShapeType.md) | 碰撞形状 |
| :------ | :------ |
| `collisionExtent` [`Vector`](mw.Vector.md) | 碰撞形状大小 |



<span style="font-size: 14px;">
使用示例:将使用到的资源:"36851"拖入优先加载栏。创建一个名为"Example_Character_SetCollisionShapeAndExtent"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏生成拱门带碰撞的拱门和单端NPC展示角色碰撞效果.按下键盘“1”，开启/关闭NPC与其他角色的碰撞。按下键盘“2”，开启/关闭NPC是否可被站立。按下键盘“3”，修改角色碰撞形状和大小并打印结果。
</span>

```ts
@Component
export default class Example_Character_SetCollisionShapeAndExtent extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 生成拱门带碰撞的拱门
            let arch = GameObject.spawn("36851",{transform: new Transform(new Vector(300, 210, 0), new Rotation(0, 0, 90), new Vector(2, 1, 2))}) as Model;
            arch.setCollision(CollisionStatus.On);
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置角色碰撞属性和跳跃属性
            myCharacter.capsuleCorrectionEnabled = true;
            myCharacter.maxJumpHeight = 250;
            // 生成单端NPC展示角色碰撞
            let NPC = Player.spawnDefaultCharacter();
            NPC.worldTransform.position = new Vector(0, 100, 100);
            // 添加一个按键方法：按下键盘“1”，开启/关闭NPC与其他角色的碰撞
            InputUtil.onKeyDown(Keys.One, () => {
                NPC.collisionWithOtherCharacterEnabled = !NPC.collisionWithOtherCharacterEnabled;
                console.log("NPC与角色的碰撞 " + NPC.collisionWithOtherCharacterEnabled);
            });
            // 添加一个按键方法：按下键盘“2”，开启/关闭角色是否可被站立
            InputUtil.onKeyDown(Keys.Two, () => {
                NPC.canStandOn = !NPC.canStandOn;
                console.log("NPC角色可被站立 " + NPC.canStandOn);
            });
            // 添加一个按键方法：按下键盘“3”，修改角色碰撞并打印结果
            InputUtil.onKeyDown(Keys.Three, () => {
                // 碰撞范围collisionExtent内部值全是半值，半径半高半长
                myCharacter.setCollisionShapeAndExtent(CustomShapeType.Box, new Vector(50, 50, 200));
                console.log("当前角色碰撞 " + myCharacter.collisionShape + " " + myCharacter.collisionExtent);
            });
        }
    }
}
```

___

### setDescription <Score text="setDescription" /> 

• **setDescription**(`data`): `void` 

设置外观数据

#### Parameters

| `data` `string`  `string`[]  [`CharacterDescription`](mw.CharacterDescription.md) | 外观数据 |
| :------ | :------ |



::: warning Precautions

setStyle设置角色的外观，可以传入CharacterDescription对象 / 角色外观文件的数组 / 挂件数据文件的guid。

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183"拖入优先加载栏。创建一个名为"Example_Character_SetDescription"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到玩家控制角色玩家外观准备未完成播放摊手的效果.给【角色外观描述完成】委托添加函数来播放换装完成特效，并保存角色初始默认外观数据。给【角色外观描述变化】委托添加函数在控制台打印当前角色外观描述变化的具体子项和索引。按下键盘“1”，重置为默认角色外观。按下键盘“2”，修改角色外观。按下键盘“3”，同步角色外观。按下键盘“4”，清空角色外观。代码如下:
</span>

```ts
@Component
export default class Example_Character_SetDescription extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.isDescriptionReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            let defaultStyle = null;
            // 给【角色外观描述完成】委托添加函数
            myCharacter.onDescriptionComplete.add(() => {
                // 播放换装完成特效
                EffectService.playOnGameObject("161245", myCharacter);
                // 获取角色默认外观风格
                if(defaultStyle == null) {
                    defaultStyle = myCharacter.getDescription();
                }
            });
            // 给【角色外观描述变化】委托添加函数
            myCharacter.onDescriptionChange.add((operationCode: number, index: number, value: unknown) => {
                console.log("Appearance Changed");
                console.log("OperationCode " + operationCode + " Index " + index);
            });
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.setDescription(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，修改角色外观
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style头部:头大小为1.5倍
                    myCharacter.description.advance.headFeatures.head.headOverallScale = 1.5;
                    // 修改角色style体型:身高为1.2倍
                    myCharacter.description.advance.bodyFeatures.body.height = 1.2;
                    // 修改角色style化妆:腮红为75674
                    myCharacter.description.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发:前发为57731，后发为63910
                    myCharacter.description.advance.hair.frontHair.style = "57731";
                    myCharacter.description.advance.hair.backHair.style = "63910";
                    // 修改角色style:上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.description.advance.clothing.upperCloth.style = "58694";
                    myCharacter.description.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.description.advance.clothing.gloves.style = "60384";
                    myCharacter.description.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法:按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.syncDescription();
            });
            // 添加一个按键方法:按下键盘“4”，清空角色外观
            InputUtil.onKeyDown(Keys.Four, () => {
                myCharacter.clearDescription();
            });
        }
    }
}
```

___

### swimDown <Score text="swimDown" /> 

• **swimDown**(`speed`): `void` 

水中下潜

#### Parameters

| `speed` `number` | 下潜速度 |
| :------ | :------ |



::: warning Precautions

不能超过MaxSwimSpeed(游泳最大速度)

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"53011,20307"拖入优先加载栏。创建一个名为"Example_Character_SwimDown"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成拱形容器并适配游泳区域.按下键盘“1”，角色切换游泳.按下键盘“4”，角色修改最大游泳速度进行喷射加速.你可以看到的角色最大游泳速度变化的效果.代码如下:
</span>

```ts
@Component
export default class Example_Character_SwimDown extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            GameObject.spawn("SwimmingVolume",{transform: new Transform(new Vector(0, 0, 500), new Rotation(0, 0, 90), new Vector(20, 20, 10))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let flag = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 100;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = 10;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：按下键盘“1”，角色切换游泳 / 行走
            InputUtil.onKeyDown(Keys.One, () => {
                if(flag) {
                    myCharacter.switchToWalking();
                } else {
                    myCharacter.switchToSwimming();
                }
                flag = !flag;
            });
            // 添加一个按键方法：按住键盘“2”，角色上浮
            InputUtil.onKeyPress(Keys.Two, () => {
                myCharacter.swimUp(10);
            });
            // 添加一个按键方法：按住键盘“3”，角色下潜
            InputUtil.onKeyPress(Keys.Three, () => {
                myCharacter.swimDown(10);
            });
            // 添加一个按键方法：按下键盘“4”，角色进行喷射加速
            InputUtil.onKeyDown(Keys.Four, () => {
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
                        myCharacter.swimUp(1)
                    }, 1);
                }
                // 1秒后执行停止加速操作
                    setTimeout(() => {
                        isBoost = false;
                        clearInterval(boost_interval);
                        myCharacter.maxSwimSpeed = 300;
                        boostAnimation.stop();
                        boostStance.stop();
                    }, 1000);
                    // 1.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1200);
            });
        }
    }
}
```

___

### swimUp <Score text="swimUp" /> 

• **swimUp**(`speed`): `void` 

水中上浮

#### Parameters

| `speed` `number` | 上浮速度 |
| :------ | :------ |



::: warning Precautions

不能超过MaxSwimSpeed(游泳最大速度)

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"53011,20307"拖入优先加载栏。创建一个名为"Example_Character_SwimUp"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成拱形容器并适配游泳区域.按下键盘“1”，角色切换游泳.按下键盘“4”，角色修改最大游泳速度进行喷射加速.你可以看到的角色最大游泳速度变化的效果.代码如下:
</span>

```ts
@Component
export default class Example_Character_SwimUp extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            GameObject.spawn("SwimmingVolume",{transform: new Transform(new Vector(0, 0, 500), new Rotation(0, 0, 90), new Vector(20, 20, 10))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let flag = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 100;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = 10;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：按下键盘“1”，角色切换游泳 / 行走
            InputUtil.onKeyDown(Keys.One, () => {
                if(flag) {
                    myCharacter.switchToWalking();
                } else {
                    myCharacter.switchToSwimming();
                }
                flag = !flag;
            });
            // 添加一个按键方法：按住键盘“2”，角色上浮
            InputUtil.onKeyPress(Keys.Two, () => {
                myCharacter.swimUp(10);
            });
            // 添加一个按键方法：按住键盘“3”，角色下潜
            InputUtil.onKeyPress(Keys.Three, () => {
                myCharacter.swimDown(10);
            });
            // 添加一个按键方法：按下键盘“4”，角色进行喷射加速
            InputUtil.onKeyDown(Keys.Four, () => {
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
                        myCharacter.swimUp(1)
                    }, 1);
                }
                // 1秒后执行停止加速操作
                    setTimeout(() => {
                        isBoost = false;
                        clearInterval(boost_interval);
                        myCharacter.maxSwimSpeed = 300;
                        boostAnimation.stop();
                        boostStance.stop();
                    }, 1000);
                    // 1.2秒后还原角色游泳制动速度
                    setTimeout(() => {
                        myCharacter.brakingDecelerationSwimming = 4096
                    }, 1200);
            });
        }
    }
}
```

___

### switchToFlying <Score text="switchToFlying" /> 

• **switchToFlying**(): `void` 

切换为飞行状态



<span style="font-size: 14px;">
使用示例:将使用到的资源:"53011,20307"拖入优先加载栏。创建一个名为"Example_Character_SwitchToFlying"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，角色切换为飞行，按下键盘“2”，角色进行喷射加速。你将在场景中看到角色在加速过程中最大飞行速度变化的效果.代码如下:
</span>

```ts
@Component
export default class Example_Character_SwitchToFlying extends Script {
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
            boostAnimation.loop = 0;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadStance("20307");
            // 添加一个按键方法：键盘“1”，角色切换为飞行
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.switchToFlying();
            });
            // 添加一个按键方法：按下键盘“2”，角色进行喷射加速
            InputUtil.onKeyDown(Keys.Two, () => {
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
                        myCharacter.addMovement(new Vector(0, 0, 5));
                    }, 1);
                }
                // 2秒后执行停止加速操作
                    setTimeout(() => {
                        isBoost = false;
                        clearInterval(boost_interval);
                        myCharacter.maxFlySpeed = 500;
                        boostAnimation.stop();
                        boostStance.stop();
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

___

### switchToSwimming <Score text="switchToSwimming" /> 

• **switchToSwimming**(): `void` 

切换为游泳状态



::: warning Precautions

仅在游泳区域中生效 !

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"53011,20307"拖入优先加载栏。创建一个名为"Example_Character_SwitchToSwimming"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成拱形容器并适配游泳区域.按下键盘“1”，角色切换游泳.按下键盘“4”，角色修改最大游泳速度进行喷射加速.你可以看到的角色最大游泳速度变化的效果.代码如下:
</span>

```ts
@Component
export default class Example_Character_SwitchToSwimming extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 生成拱形容器并适配游泳区域
            GameObject.spawn("SwimmingVolume",{transform: new Transform(new Vector(0, 0, 500), new Rotation(0, 0, 90), new Vector(20, 20, 10))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let flag = true;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 设置游泳属性
            myCharacter.canJumpOutOfWater = true;
            myCharacter.outOfWaterVerticalSpeed = 100;
            // 加载加速动画
            let boostAnimation = myCharacter.loadAnimation("53011");
            boostAnimation.loop = 10;
            let isBoost = false
            // 加载上升姿态
            let boostStance = myCharacter.loadSubStance("20307");
            // 添加一个按键方法:按下键盘“1”，角色切换游泳 / 行走
            InputUtil.onKeyDown(Keys.One, () => {
                if(flag) {
                    myCharacter.switchToWalking();
                } else {
                    myCharacter.switchToSwimming();
                }
                flag = !flag;
            });
            // 添加一个按键方法:按住键盘“2”，角色上浮
            InputUtil.onKeyPress(Keys.Two, () => {
                myCharacter.swimUp(10);
            });
            // 添加一个按键方法:按住键盘“3”，角色下潜
            InputUtil.onKeyPress(Keys.Three, () => {
                myCharacter.swimDown(10);
            });
            // 添加一个按键方法:按下键盘“4”，角色进行喷射加速
            InputUtil.onKeyDown(Keys.Four, () => {
                if(isBoost) return;
                let boost_interval = 0;
                if(myCharacter.isMoving) {
                    // 播放游泳动画，修改游泳速度和制动速度
                    boostAnimation.play();
                    myCharacter.maxSwimSpeed = 600;
                    myCharacter.brakingDecelerationSwimming = 4096;
                    // 设置加速周期，每帧检查角色是否移动，当角色停止移动时,执行停止加速操作:停止动画清除姿态，还原游泳速度，清除加速周期
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
                        myCharacter.swimUp(1)
                    }, 1);
                }
                // 1秒后执行停止加速操作
                    setTimeout(() => {
                        isBoost = false;
                        clearInterval(boost_interval);
                        myCharacter.maxSwimSpeed = 300;
                        boostAnimation.stop();
                        boostStance.stop();
                    }, 1000);
                    // 1.2秒后还原角色游泳制动速度
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



<span style="font-size: 14px;">
使用示例:将使用到的资源:"23060,86749"拖入优先加载栏。创建一个名为"Example_Character_movementMode"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中创建游泳池以便支持切换游泳状态。给角色【移动模式切换】委托添加一个函数:打印当前移动模式，看到角色根据运动模式切换道具的效果。按下键盘“1”，角色切换为行走。按下键盘“2”，角色切换为游泳(需在游泳区域内)。按下键盘“3”，角色生成喷气背包，切换为飞行。.代码如下:
</span>

```ts
@Component
export default class Example_Character_movementMode extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在服务端执行
        if(SystemUtil.isServer()) {
            // 创建游泳池
            let swimmingPool = GameObject.spawn("SwimmingVolume",{ transform: new Transform(new Vector(600, 0, 0), Rotation.zero, new Vector(10, 10, 1))});
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            let item: GameObject = null;
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 给角色【移动模式切换】委托添加一个函数:打印当前移动模式，根据模式切换道具
            myCharacter.onMovementModeChange.add((mode) => {
                console.log("current movementMode " + myCharacter.movementMode);
                switch (mode) {
                    case 0:
                        if(item) {
                            item.destroy();
                        }
                        item = null;
                        break;
                    case 1:
                        if(item) {
                            item.destroy();
                        }
                        item = GameObject.spawn("23060");
                        myCharacter.attachToSlot(item, HumanoidSlotType.Buttocks);
                        break;
                    case 2:
                        if(item) {
                            item.destroy();
                        }
                        item = GameObject.spawn("86749");
                        myCharacter.attachToSlot(item, HumanoidSlotType.BackOrnamental);
                        item.localTransform.position = new Vector(-5, 0, -125);
                        item.localTransform.rotation = new Rotation(0, 0, 90);
                        break;
                    default:
                        break;
                }
            });
            // 添加一个按键方法:按下键盘“1”，角色切换为行走
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.switchToWalking();
            });
            // 添加一个按键方法:按下键盘“2”，角色切换为游泳(需在游泳区域内)
            InputUtil.onKeyDown(Keys.Two, () => {
                myCharacter.switchToSwimming();
            });
            // 添加一个按键方法:按下键盘“3”，角色生成喷气背包，切换为飞行
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.switchToFlying();
            });
        }
    }
}
```

___

### syncDescription <Score text="syncDescription" /> 

• **syncDescription**(`appearance?`, `slotAndDecoration?`): `void` <Badge type="tip" text="client" />

同步外观数据

#### Parameters

| `appearance?` `boolean` | 角色同步 default:true |
| :------ | :------ |
| `slotAndDecoration?` `boolean` | 插槽和装饰同步 default:true |



::: warning Precautions

角色在客户端设置外观后只会更换本地角色的外观，其他客户端角色外观未修改。通过该接口可以将本地外观广播至其他客户端。

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"14521,35391,161245,75674,57731,63910,58694,58700,60384,58696,136183"拖入优先加载栏。创建一个名为"Example_Character_SyncDescription"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到玩家控制角色玩家外观准备未完成播放摊手的效果.给【角色外观描述完成】委托添加函数来播放换装完成特效，并保存角色初始默认外观数据。给【角色外观描述变化】委托添加函数在控制台打印当前角色外观描述变化的具体子项和索引。按下键盘“1”，重置为默认角色外观。按下键盘“2”，修改角色外观。按下键盘“3”，同步角色外观。按下键盘“4”，清空角色外观。代码如下:
</span>

```ts
@Component
export default class Example_Character_SyncDescription extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.isDescriptionReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            let defaultStyle = null;
            // 给【角色外观描述完成】委托添加函数
            myCharacter.onDescriptionComplete.add(() => {
                // 播放换装完成特效
                EffectService.playOnGameObject("161245", myCharacter);
                // 获取角色默认外观风格
                if(defaultStyle == null) {
                    defaultStyle = myCharacter.getDescription();
                }
            });
            // 给【角色外观描述变化】委托添加函数
            myCharacter.onDescriptionChange.add((operationCode: number, index: number, value: unknown) => {
                console.log("Appearance Changed");
                console.log("OperationCode " + operationCode + " Index " + index);
            });
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.setDescription(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，修改角色外观
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 修改角色style头部:头大小为1.5倍
                    myCharacter.description.advance.headFeatures.head.headOverallScale = 1.5;
                    // 修改角色style体型:身高为1.2倍
                    myCharacter.description.advance.bodyFeatures.body.height = 1.2;
                    // 修改角色style化妆:腮红为75674
                    myCharacter.description.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发:前发为57731，后发为63910
                    myCharacter.description.advance.hair.frontHair.style = "57731";
                    myCharacter.description.advance.hair.backHair.style = "63910";
                    // 修改角色style:上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.description.advance.clothing.upperCloth.style = "58694";
                    myCharacter.description.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.description.advance.clothing.gloves.style = "60384";
                    myCharacter.description.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法:按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.syncDescription();
            });
            // 添加一个按键方法:按下键盘“4”，清空角色外观
            InputUtil.onKeyDown(Keys.Four, () => {
                myCharacter.clearDescription();
            });
        }
    }
}
```
