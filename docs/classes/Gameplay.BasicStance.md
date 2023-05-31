[Animations](../groups/Animations.Animations.md) / BasicStance

# BasicStance <Badge type="tip" text="Class" /> <Score text="BasicStance" />

基础姿态

## Hierarchy

- [`IStanceBase`](Gameplay.IStanceBase.md)

  ↳ **`BasicStance`**

## Table of contents

| Accessors |
| :-----|
| **[aimOffsetEnabled](Gameplay.BasicStance.md#aimoffsetenabled)**(): `boolean` <br> 启用瞄准偏移|
| **[assetId](Gameplay.BasicStance.md#assetid)**(): `string` <br> 资源GUID|

| Methods |
| :-----|
| **[play](Gameplay.BasicStance.md#play)**(): `boolean` <br> 播放姿态|
| **[stop](Gameplay.BasicStance.md#stop)**(): `boolean` <br> 停止姿态|

## Accessors

### aimOffsetEnabled <Score text="aimOffsetEnabled" /> 

• `get` **aimOffsetEnabled**(): `boolean` 

启用瞄准偏移


::: warning Precautions

角色是否启用瞄准偏移。true表示启用，false表示禁用。瞄准偏移用于创建多方向武器瞄准混合结构，然后叠加应用到默认的瞄准姿势。

:::

使用示例:提供按键启用/禁用瞄准偏移并播放一个瞄准姿态查看效果。
```ts
@Core.Class
export default class CharacterAimOffsetExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "4172";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 加载持枪瞄准姿态
            let aimStance = myCharacter.loadStance("4172");
            let isPlaying = false;
            // 添加一个按键方法：键盘“1”，角色切换【启用瞄准偏移】
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.basicStanceAimOffsetEnabled = !myCharacter.basicStanceAimOffsetEnabled;
                console.log("当前角色是否开启瞄准偏移 " + myCharacter.basicStanceAimOffsetEnabled);
            });
            // 添加一个按键方法：按下键盘“2”，角色播放/停止瞄准姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(isPlaying) {
                    aimStance.stop();
                } else {
                    aimStance.play();
                }
            });
        }
    }
}
```

#### Returns

`boolean`

• `set` **aimOffsetEnabled**(`value`): `void`

启用瞄准偏移

::: warning Precautions

角色是否启用瞄准偏移。true表示启用，false表示禁用。瞄准偏移用于创建多方向武器瞄准混合结构，然后叠加应用到默认的瞄准姿势。

:::

使用示例:提供按键启用/禁用瞄准偏移并播放一个瞄准姿态查看效果。
```ts
@Core.Class
export default class CharacterAimOffsetExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "4172";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 加载持枪瞄准姿态
            let aimStance = myCharacter.loadStance("4172");
            let isPlaying = false;
            // 添加一个按键方法：键盘“1”，角色切换【启用瞄准偏移】
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCharacter.basicStanceAimOffsetEnabled = !myCharacter.basicStanceAimOffsetEnabled;
                console.log("当前角色是否开启瞄准偏移 " + myCharacter.basicStanceAimOffsetEnabled);
            });
            // 添加一个按键方法：按下键盘“3”，角色播放/停止瞄准姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(isPlaying) {
                    aimStance.stop();
                } else {
                    aimStance.play();
                }
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

### assetId <Score text="assetId" /> 

• `get` **assetId**(): `string`

资源GUID

#### Returns

`string`

## Methods

### play <Score text="play" /> 

• **play**(): `boolean` 

播放姿态


::: warning Precautions

播放这个姿态对象, 并返回执行结果. 这个操作是否会自动同步多端, 取决于调用端，服务端广播生效，客户端本地生效。

:::

使用示例:给角色加载一个写实女性基础姿态和一个二次元女性基础姿态（默认），提供按键方法控制播放和停止。
```ts
@Core.Class
export default class StanceExample extends Core.Script {
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

#### Returns

`boolean`

播放结果

___

### stop <Score text="stop" /> 

• **stop**(): `boolean` 

停止姿态


::: warning Precautions

播放这个姿态对象, 并返回执行结果. 这个操作是否会自动同步多端, 取决于调用端，服务端广播生效，客户端本地生效。

:::

使用示例:给角色加载一个写实女性基础姿态和一个二次元女性基础姿态（默认），提供按键方法控制播放和停止。
```ts
@Core.Class
export default class StanceExample extends Core.Script {
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
            // 添加一个按键方法：按下键盘“5”，停止播放写实女性基础姿态
            InputUtil.onKeyDown(Type.Keys.Four, () => {
                animeWomanStance.stop();
            });
        }
    }
}
```

#### Returns

`boolean`

停止结果
