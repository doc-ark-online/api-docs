[Animations](../groups/Core.Animations.md) / SubStance

# SubStance <Badge type="tip" text="Class" /> <Score text="SubStance" />

二级姿态

使用示例: 在角色初始化完成后, 可以执行下面的代码, 让所有客户端的角色全身播放一个持枪的姿态.
```ts
this.stanceProxy = this.character.loadSubStance("49096", true);
// 修改姿态的混合模式为全身
this.stanceProxy.blendMode = StanceBlendMode.WholeBody;
// 播放这个姿态
this.stanceProxy.play();
// 当你想停止它时, 可以执行下面的代码
this.stanceProxy.stop();
```

## Hierarchy

- [`StanceBase`](mw.StanceBase.md)

  ↳ **`SubStance`**

## Table of contents

| Accessors |
| :-----|
| **[assetId](mw.SubStance.md#assetid)**(): `string` <br> 资源GUID|
| **[blendMode](mw.SubStance.md#blendmode)**(): [`StanceBlendMode`](../enums/mw.StanceBlendMode.md) <br> 姿态的混合模式|

| Methods |
| :-----|
| **[play](mw.SubStance.md#play)**(): `boolean` <br> 播放姿态|
| **[stop](mw.SubStance.md#stop)**(): `boolean` <br> 停止这个姿态对象, 并返回执行结果|

### assetId <Score text="assetId" /> 

• `get` **assetId**(): `string`

资源GUID

使用示例:给角色加载一个上半身拳击姿态和一个下半身踢腿姿态，修改姿态对象的属性并提供按键方法控制播放和停止。
```ts
@Core.Class
export default class CharacterStanceExample extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "94261,14520";
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
            InputUtil.onKeyDown(Type.Keys.One, () => {
                if(myCharacter.currentStance == aimStance) {
                    kickStance.play();
                } else {
                    aimStance.play();
                }
            });
            // 添加一个按键方法:按下键盘“2”，停止播放姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.currentStance) {
                    myCharacter.currentStance.stop();
                }
            });
        }
    }
}
```

#### Returns

`string`

___

### blendMode <Score text="blendMode" /> 

• `get` **blendMode**(): [`StanceBlendMode`](../enums/mw.StanceBlendMode.md) 

姿态的混合模式


::: warning Precautions

姿态的播放位置(上半身, 下半身, 全身), 对正在播放的姿态修改时无效.
如果这个姿态是通过预制姿态资源GUID创建的, 那么它的默认值会自动从资源上获取;
如果是通过动画资源GUID创建的, 那么它的默认值为StanceBlendMode.WholeBody.

:::

使用示例:给角色加载一个上半身拳击姿态和一个下半身踢腿姿态，修改姿态对象的属性并提供按键方法控制播放和停止。
```ts
@Core.Class
export default class CharacterStanceExample extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "94261,14520";
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
            InputUtil.onKeyDown(Type.Keys.One, () => {
                if(myCharacter.currentStance == aimStance) {
                    kickStance.play();
                } else {
                    aimStance.play();
                }
            });
            // 添加一个按键方法:按下键盘“2”，停止播放姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.currentStance) {
                    myCharacter.currentStance.stop();
                }
            });
        }
    }
}
```

#### Returns

[`StanceBlendMode`](../enums/mw.StanceBlendMode.md)

• `set` **blendMode**(`newBlendMode`): `void` 

姿态的混合模式


::: warning Precautions

姿态的播放位置(上半身, 下半身, 全身), 对正在播放的姿态修改时无效.
如果这个姿态是通过预制姿态资源GUID创建的, 那么它的默认值会自动从资源上获取;
如果是通过动画资源GUID创建的, 那么它的默认值为StanceBlendMode.WholeBody.

:::

使用示例:给角色加载一个上半身拳击姿态和一个下半身踢腿姿态，修改姿态对象的属性并提供按键方法控制播放和停止。
```ts
@Core.Class
export default class CharacterStanceExample extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "94261,14520";
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
            InputUtil.onKeyDown(Type.Keys.One, () => {
                if(myCharacter.currentStance == aimStance) {
                    kickStance.play();
                } else {
                    aimStance.play();
                }
            });
            // 添加一个按键方法:按下键盘“2”，停止播放姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.currentStance) {
                    myCharacter.currentStance.stop();
                }
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `newBlendMode` | [`StanceBlendMode`](../enums/mw.StanceBlendMode.md) |


## Methods

### play <Score text="play" /> 

• **play**(): `boolean` 

播放姿态


::: warning Precautions

播放这个姿态对象, 并返回执行结果. 这个操作是否会自动同步多端, 取决于调用端，服务端广播生效，客户端本地生效。

:::

使用示例:给角色加载一个上半身拳击姿态和一个下半身踢腿姿态，修改姿态对象的属性并提供按键方法控制播放和停止。
```ts
@Core.Class
export default class CharacterStanceExample extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "94261,14520";
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
            InputUtil.onKeyDown(Type.Keys.One, () => {
                if(myCharacter.currentStance == aimStance) {
                    kickStance.play();
                } else {
                    aimStance.play();
                }
            });
            // 添加一个按键方法:按下键盘“2”，停止播放姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.currentStance) {
                    myCharacter.currentStance.stop();
                }
            });
        }
    }
}
```

#### Returns

`boolean`

播放结果

___

### stop <Score text="stop" /> 

• **stop**(): `boolean` 

停止这个姿态对象, 并返回执行结果


::: warning Precautions

停止这个姿态对象, 并返回执行结果. 这个操作是否会自动同步多端, 取决于调用端，服务端广播生效，客户端本地生效。

:::

使用示例:给角色加载一个上半身拳击姿态和一个下半身踢腿姿态，修改姿态对象的属性并提供按键方法控制播放和停止。
```ts
@Core.Class
export default class CharacterStanceExample extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "94261,14520";
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
            InputUtil.onKeyDown(Type.Keys.One, () => {
                if(myCharacter.currentStance == aimStance) {
                    kickStance.play();
                } else {
                    aimStance.play();
                }
            });
            // 添加一个按键方法:按下键盘“2”，停止播放姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.currentStance) {
                    myCharacter.currentStance.stop();
                }
            });
        }
    }
}
```

#### Returns

`boolean`

停止结果
