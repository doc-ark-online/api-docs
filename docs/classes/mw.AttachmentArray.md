[Avatar](../groups/Core.Avatar.md) / AttachmentArray

# AttachmentArray <Badge type="tip" text="Class" /> <Score text="AttachmentArray" />

单个插槽对应的挂件物体数组

## Hierarchy

- `Array`<`{ `attachmentAssetId`: `string` ; `attachmentGameObject?`: [`GameObject`](mw.GameObject.md) ; `attachmentOffset?`: [`Transform`](mw.Transform.md)  }`\>

  ↳ **`AttachmentArray`**

## Table of contents

| Properties |
| :-----|

| Methods |
| :-----|
| **[add](mw.AttachmentArray.md#add)**(`val`: `Object`): `void` <br> 向当前外观插槽中添加一个挂件|
| **[clear](mw.AttachmentArray.md#clear)**(`isDestroy?`: `boolean`): `void` <br> 清空当前外观插槽的所有挂件|
| **[delete](mw.AttachmentArray.md#delete)**(`attachmentGameObject`: [`GameObject`](mw.GameObject.md), `isDestroy?`: `boolean`): `void` <br> 从当前插槽中删除一个挂件|

### add <Score text="add" /> 

• **add**(`val`): `void` 

向当前外观插槽中添加一个挂件


::: warning Precautions

挂件只支持模型对象

:::

使用示例:提供按键方法，给角色插槽添加，删除，清空挂件
```ts
@Core.Class
export default class CharacterStyleExample extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14521,35391,161245,60858";
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
            // 给【外观加载完成】委托添加函数，
            myCharacter.onStyleCompleted.add(() => {
                EffectService.getInstance().playEffectOnPlayer("161245", myCharacter, SlotType.Root);
            });
            // 获取角色默认外观风格
            let defaultStyle = myCharacter.getStyleData();
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.setStyle(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，给角色插槽【头顶光圈】添加1个挂件60858
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.add({attachmentAssetId: "60858", attachmentOffset: new Transform(new Vector(0, 0, MathUtil.randomInt(0, 100)), Rotation.zero, Vector.one.multiply(0.1))});
                }
            });
            // 添加一个按键方法:按下键盘“3”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.delete(ring);
                    }
                }
            });
            // 添加一个按键方法:按下键盘“4”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.clear();
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `Object` | 挂件 |
| `val.attachmentAssetId` | `string` | - |
| `val.attachmentGameObject?` | [`GameObject`](mw.GameObject.md) | - |
| `val.attachmentOffset?` | [`Transform`](mw.Transform.md) | - |


___

### clear <Score text="clear" /> 

• **clear**(`isDestroy?`): `void` 

清空当前外观插槽的所有挂件


使用示例:提供按键方法，给角色插槽添加，删除，清空挂件
```ts
@Core.Class
export default class CharacterStyleExample extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14521,35391,161245,60858";
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
            // 给【外观加载完成】委托添加函数，
            myCharacter.onStyleCompleted.add(() => {
                EffectService.getInstance().playEffectOnPlayer("161245", myCharacter, SlotType.Root);
            });
            // 获取角色默认外观风格
            let defaultStyle = myCharacter.getStyleData();
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.setStyle(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，给角色插槽【头顶光圈】添加1个挂件60858
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.add({attachmentAssetId: "60858", attachmentOffset: new Transform(new Vector(0, 0, MathUtil.randomInt(0, 100)), Rotation.zero, Vector.one.multiply(0.1))});
                }
            });
            // 添加一个按键方法:按下键盘“3”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.delete(ring);
                    }
                }
            });
            // 添加一个按键方法:按下键盘“4”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV4) {
                    myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.clear();
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isDestroy?` | `boolean` | 是否删除 default:false |


___

### delete <Score text="delete" /> 

• **delete**(`attachmentGameObject`, `isDestroy?`): `void` 

从当前插槽中删除一个挂件


使用示例:提供按键方法，给角色插槽添加，删除，清空挂件
```ts
@Core.Class
export default class CharacterStyleExample extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "14521,35391,161245,60858";
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
            // 给【外观加载完成】委托添加函数，
            myCharacter.onStyleCompleted.add(() => {
                EffectService.getInstance().playEffectOnPlayer("161245", myCharacter, SlotType.Root);
            });
            // 获取角色默认外观风格
            let defaultStyle = myCharacter.getStyleData();
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.setStyle(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，给角色插槽【头顶光圈】添加1个挂件60858
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.add({attachmentAssetId: "60858", attachmentOffset: new Transform(new Vector(0, 0, MathUtil.randomInt(0, 100)), Rotation.zero, Vector.one.multiply(0.1))});
                }
            });
            // 添加一个按键方法:按下键盘“3”，删除角色插槽【头顶光圈】的第一个挂件
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    let ring = myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment[0].attachmentGameObject;
                    if(ring) {
                        myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.delete(ring);
                    }
                }
            });
            // 添加一个按键方法:按下键盘“4”，删除角色插槽【头顶光圈】的所有挂件
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV3) {
                    myCharacter.style.advance.slotAndAttachment.slot[SlotType.Rings].attachment.clear();
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
| `isDestroy?` | `boolean` | 是否删除 default:false |

