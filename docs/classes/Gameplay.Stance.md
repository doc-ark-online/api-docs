[Animations](../groups/Animations.Animations.md) / Stance

# Stance <Badge type="tip" text="Class" /> <Score text="Stance" />

二级姿态

使用示例: 在角色初始化完成后, 可以执行下面的代码, 让所有客户端的角色全身播放一个持枪的姿态.
```ts
this.stanceProxy = this.character.loadStance("49096", true);
// 修改姿态的混合模式为全身
this.stanceProxy.blendMode = Gameplay.StanceBlendMode.WholeBody;
// 播放这个姿态
this.stanceProxy.play();
// 当你想停止它时, 可以执行下面的代码
this.stanceProxy.stop();
```

## Hierarchy

- [`IStanceBase`](Gameplay.IStanceBase.md)

  ↳ **`Stance`**

## Table of contents

| Accessors |
| :-----|
| **[assetId](Gameplay.Stance.md#assetid)**(): `string` <br> 资源GUID|
| **[blendMode](Gameplay.Stance.md#blendmode)**(): [`StanceBlendMode`](../enums/Gameplay.StanceBlendMode.md) <br> 姿态的混合模式|

| Methods |
| :-----|
| **[play](Gameplay.Stance.md#play)**(): `boolean` <br> 播放姿态|
| **[stop](Gameplay.Stance.md#stop)**(): `boolean` <br> 停止这个姿态对象, 并返回执行结果|

## Accessors

### assetId <Score text="assetId" /> 

• `get` **assetId**(): `string`

资源GUID

#### Returns

`string`

___

### blendMode <Score text="blendMode" /> 

• `get` **blendMode**(): [`StanceBlendMode`](../enums/Gameplay.StanceBlendMode.md) 

姿态的混合模式


::: warning Precautions

姿态的播放位置(上半身, 下半身, 全身), 对正在播放的姿态修改时无效.
如果这个姿态是通过预制姿态资源GUID创建的, 那么它的默认值会自动从资源上获取;
如果是通过动画资源GUID创建的, 那么它的默认值为StanceBlendMode.WholeBody.

:::

使用示例:给角色加载一个上半身拳击姿态和一个下半身踢腿姿态，混合模式分别为上半身和下半身。提供按键方法控制播放和停止。
```ts
@Core.Class
export default class AnimationExample extends Core.Script {
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

#### Returns

[`StanceBlendMode`](../enums/Gameplay.StanceBlendMode.md)

• `set` **blendMode**(`newBlendMode`): `void` 

姿态的混合模式


::: warning Precautions

姿态的播放位置(上半身, 下半身, 全身), 对正在播放的姿态修改时无效.
如果这个姿态是通过预制姿态资源GUID创建的, 那么它的默认值会自动从资源上获取;
如果是通过动画资源GUID创建的, 那么它的默认值为StanceBlendMode.WholeBody.

:::

使用示例:给角色加载一个上半身拳击姿态和一个下半身踢腿姿态，混合模式分别为上半身和下半身。提供按键方法控制播放和停止。
```ts
@Core.Class
export default class AnimationExample extends Core.Script {
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
            // 添加一个按键方法：按下键盘“3”，停止播放姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                punchingStance.stop();
                kickingStance.stop();
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `newBlendMode` | [`StanceBlendMode`](../enums/Gameplay.StanceBlendMode.md) |


## Methods

### play <Score text="play" /> 

• **play**(): `boolean` 

播放姿态


::: warning Precautions

播放这个姿态对象, 并返回执行结果. 这个操作是否会自动同步多端, 取决于调用端，服务端广播生效，客户端本地生效。

:::

使用示例:给角色加载一个上半身拳击姿态和一个下半身踢腿姿态，混合模式分别为上半身和下半身。提供按键方法控制播放和停止。
```ts
@Core.Class
export default class AnimationExample extends Core.Script {
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
            // 添加一个按键方法：按下键盘“4”，停止播放姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                punchingStance.stop();
                kickingStance.stop();
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

播放这个姿态对象, 并返回执行结果. 这个操作是否会自动同步多端, 取决于调用端，服务端广播生效，客户端本地生效。

:::

使用示例:给角色加载一个上半身拳击姿态和一个下半身踢腿姿态，混合模式分别为上半身和下半身。提供按键方法控制播放和停止。
```ts
@Core.Class
export default class AnimationExample extends Core.Script {
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
            // 添加一个按键方法：按下键盘“5”，停止播放姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                punchingStance.stop();
                kickingStance.stop();
            });
        }
    }
}
```

#### Returns

`boolean`

停止结果
