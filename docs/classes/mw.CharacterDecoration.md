[AVATAR](../groups/Core.AVATAR.md) / CharacterDecoration

# CharacterDecoration <Badge type="tip" text="Class" /> <Score text="CharacterDecoration" />

单个插槽对应的挂件物体数组

## Hierarchy

- `Array`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`\>

  ↳ **`CharacterDecoration`**

## Table of contents

| Properties |
| :-----|

| Methods |
| :-----|
| **[add](mw.CharacterDecoration.md#add)**(`decoration`: `string` \, `attachmentOffset?`: [`Transform`](mw.Transform.md)): `void` <br> 向当前外观插槽中添加一个挂件|
| **[clear](mw.CharacterDecoration.md#clear)**(`isDestroy?`: `boolean`): `void` <br> 清空当前外观插槽的所有挂件|
| **[delete](mw.CharacterDecoration.md#delete)**(`attachmentGameObject`: [`GameObject`](mw.GameObject.md), `isDestroy?`: `boolean`): `void` <br> 从当前插槽中删除一个挂件|

### add <Score text="add" /> 

• **add**(`decoration`, `attachmentOffset?`): `void` 

向当前外观插槽中添加一个挂件


::: warning Precautions

挂件只支持模型对象

:::

使用示例:将使用到的资源:"60858"拖入优先加载栏。创建一个名为"Example_CharacterDecoration_Add"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件。按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件。按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件。代码如下:
```ts
@Class
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
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidType.Rings].decoration.add("60858", new Transform(new Vector(0, 0, MathUtil.randomInt(0, 100)), Rotation.zero, Vector.one.multiply(0.1)));
                }
            });
            // 添加一个按键方法:按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.description.advance.slotAndDecoration.slot[HumanoidType.Rings].decoration[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.description.advance.slotAndDecoration.slot[HumanoidType.Rings].decoration.delete(ring, true);
                    }
                }
            });
            // 添加一个按键方法:按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidType.Rings].decoration.clear(true);
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decoration` | `string` \| [`GameObject`](mw.GameObject.md) | 挂件 |
| `attachmentOffset?` | [`Transform`](mw.Transform.md) | 挂件transform信息 default:null |


___

### clear <Score text="clear" /> 

• **clear**(`isDestroy?`): `void` 

清空当前外观插槽的所有挂件


使用示例:将使用到的资源:"60858"拖入优先加载栏。创建一个名为"Example_CharacterDecoration_Clear"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件。按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件。按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件。代码如下:
```ts
@Class
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
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidType.Rings].decoration.add("60858", new Transform(new Vector(0, 0, MathUtil.randomInt(0, 100)), Rotation.zero, Vector.one.multiply(0.1)));
                }
            });
            // 添加一个按键方法:按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.description.advance.slotAndDecoration.slot[HumanoidType.Rings].decoration[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.description.advance.slotAndDecoration.slot[HumanoidType.Rings].decoration.delete(ring, true);
                    }
                }
            });
            // 添加一个按键方法:按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidType.Rings].decoration.clear(true);
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isDestroy?` | `boolean` | 是否销毁 default:false |


___

### delete <Score text="delete" /> 

• **delete**(`attachmentGameObject`, `isDestroy?`): `void` 

从当前插槽中删除一个挂件


使用示例:将使用到的资源:"60858"拖入优先加载栏。创建一个名为"Example_CharacterDecoration_Delete"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，给角色插槽【头顶光圈】添加1个挂件。按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件。按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件。代码如下:
```ts
@Class
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
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidType.Rings].decoration.add("60858", new Transform(new Vector(0, 0, MathUtil.randomInt(0, 100)), Rotation.zero, Vector.one.multiply(0.1)));
                }
            });
            // 添加一个按键方法:按下键盘“2”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.description.advance.slotAndDecoration.slot[HumanoidType.Rings].decoration[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.description.advance.slotAndDecoration.slot[HumanoidType.Rings].decoration.delete(ring, true);
                    }
                }
            });
            // 添加一个按键方法:按下键盘“3”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.description.advance.slotAndDecoration.slot[HumanoidType.Rings].decoration.clear(true);
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachmentGameObject` | [`GameObject`](mw.GameObject.md) | 挂件 |
| `isDestroy?` | `boolean` | 是否销毁 default:false |

