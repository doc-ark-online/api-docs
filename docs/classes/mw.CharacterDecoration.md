[角色系统](../groups/角色系统.角色系统.md) / CharacterDecoration

# CharacterDecoration <Badge type="tip" text="Class" /> <Score text="CharacterDecoration" />

角色挂件插槽

除了可以随意的更换人物衣服，脸，身体，还可以在给人物增加更多装饰物。

CharacterDecoration 如何使用呢？

CharacterDescription 在 CharacterDescription 高级人形配置有留有 slotAndDecoration 参数：

- slotOffset：一个可选的只读属性，表示插槽位置和方向的信息。

- decoration：一个可选的只读属性，表示物品的信息。是一个 CharacterDecoration 自定义类型，包含有关物品的附加装饰信息。

可通过索引访问，添加左侧栏中已有资源的装饰物，如武器戒指光环等。使用详情请看下方接口及示例代码。

仅客户端存在。

## Hierarchy

- `Array`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: `Readonly`<[`Transform`](mw.Transform.md)\>  }`\>

  ↳ **`CharacterDecoration`**

## Table of contents

### Properties <Score text="Properties" /> 

### Methods <Score text="Methods" /> 
| **[add](mw.CharacterDecoration.md#add)**(`decoration`: `string`  [`GameObject`](mw.GameObject.md), `attachmentOffset?`: [`Transform`](mw.Transform.md)): `number`   |
| :-----|
| 向当前外观插槽中添加一个挂件|
| **[clear](mw.CharacterDecoration.md#clear)**(`isDestroy?`: `boolean`): `void`   |
| 清空当前外观插槽的所有挂件|
| **[delete](mw.CharacterDecoration.md#delete)**(`attachmentElement`: `number`  [`GameObject`](mw.GameObject.md), `isDestroy?`: `boolean`): `void`   |
| 从当前插槽中删除一个挂件|

## Properties

## Methods

___

### add <Score text="add" /> 

• **add**(`decoration`, `attachmentOffset?`): `number` 

向当前外观插槽中添加一个挂件

#### Parameters

| `decoration` `string`  [`GameObject`](mw.GameObject.md) | 挂件 |
| :------ | :------ |
| `attachmentOffset?` [`Transform`](mw.Transform.md) | 挂件transform信息  <br> default: null |

#### Returns

| `number` | 插槽的 index |
| :------ | :------ |

::: warning Precautions

挂件只支持模型对象

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"60858"拖入优先加载栏。创建一个名为"Example_CharacterDecoration_Add"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件。按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件。按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件。代码如下：
</span>

```ts
@Component
export default class Example_CharacterDecoration_Add extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法:按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.add("60858", new Transform(new Vector(0, 0, MathUtil.randomInt(0, 100)), Rotation.zero, Vector.one.multiply(0.1)));
                }
            });
            // 添加一个按键方法:按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.delete(ring, true);
                    }
                }
            });
            // 添加一个按键方法:按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.clear(true);
                }
            });
        }
    }
}
```

___

### clear <Score text="clear" /> 

• **clear**(`isDestroy?`): `void` 

清空当前外观插槽的所有挂件

#### Parameters

| `isDestroy?` `boolean` | 是否销毁  <br> default: false |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例:将使用到的资源:"60858"拖入优先加载栏。创建一个名为"Example_CharacterDecoration_Clear"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件。按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件。按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件。代码如下：
</span>

```ts
@Component
export default class Example_CharacterDecoration_Clear extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法:按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.add("60858", new Transform(new Vector(0, 0, MathUtil.randomInt(0, 100)), Rotation.zero, Vector.one.multiply(0.1)));
                }
            });
            // 添加一个按键方法:按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.delete(ring, true);
                    }
                }
            });
            // 添加一个按键方法:按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.clear(true);
                }
            });
        }
    }
}
```

___

### delete <Score text="delete" /> 

• **delete**(`attachmentElement`, `isDestroy?`): `void` 

从当前插槽中删除一个挂件

#### Parameters

| `attachmentElement` `number`  [`GameObject`](mw.GameObject.md) | 挂件 |
| :------ | :------ |
| `isDestroy?` `boolean` | 是否销毁  <br> default: false |


<span style="font-size: 14px;">
使用示例:将使用到的资源:"60858"拖入优先加载栏。创建一个名为"Example_CharacterDecoration_Delete"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件。按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件。按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件。代码如下：
</span>

```ts
@Component
export default class Example_CharacterDecoration_Delete extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 添加一个按键方法:按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.add("60858", new Transform(new Vector(0, 0, MathUtil.randomInt(0, 100)), Rotation.zero, Vector.one.multiply(0.1)));
                }
            });
            // 添加一个按键方法:按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.delete(ring, true);
                    }
                }
            });
            // 添加一个按键方法:按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidSlotType.Rings].decoration.clear(true);
                }
            });
        }
    }
}
```
