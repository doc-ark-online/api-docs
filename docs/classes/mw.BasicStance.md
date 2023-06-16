[Animations](../groups/Core.Animations.md) / BasicStance

# BasicStance <Badge type="tip" text="Class" /> <Score text="BasicStance" />

基础姿态

## Hierarchy

- [`IStanceBase`](mw.IStanceBase.md)

  ↳ **`BasicStance`**

## Table of contents

| Accessors |
| :-----|
| **[aimOffsetEnabled](mw.BasicStance.md#aimoffsetenabled)**(): `boolean` <br> 启用瞄准偏移|
| **[assetId](mw.BasicStance.md#assetid)**(): `string` <br> 资源GUID|

| Methods |
| :-----|
| **[play](mw.BasicStance.md#play)**(): `boolean` <br> 播放姿态|
| **[stop](mw.BasicStance.md#stop)**(): `boolean` <br> 停止姿态|

### aimOffsetEnabled <Score text="aimOffsetEnabled" /> 

• `get` **aimOffsetEnabled**(): `boolean` 

启用瞄准偏移


::: warning Precautions

角色是否启用瞄准偏移。true表示启用，false表示禁用。瞄准偏移用于创建多方向武器瞄准混合结构，然后叠加应用到默认的瞄准姿势。

:::

使用示例:给角色加载一个二次元男性基础姿态和一个二次元女性基础姿态（默认），提供按键方法控制播放和停止。
```ts
@Core.Class
export default class CharacterBasicStanceExample extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "39317,30274";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个二次元男性基础姿态
            let animeManStance = myCharacter.loadBasicStance("39317");
            console.log("animeManStance assetId " + animeManStance.assetId);
            // 给角色加载一个二次元女性基础姿态（默认）,关闭瞄准偏移
            let animeWomanStance = myCharacter.loadBasicStance("30274");
            animeWomanStance.aimOffsetEnabled = false;
            console.log("animeWomanStance assetId " + animeWomanStance.assetId);
            // 添加一个按键方法:按下键盘“1”，切换播放二次元男性基础姿态和二次元女性基础姿态
            InputUtil.onKeyDown(Type.Keys.One, () => {
                if(myCharacter.currentBasicStance == animeWomanStance) {
                    animeManStance.play();
                    // 开启瞄准偏移
                    animeManStance.aimOffsetEnabled = true;
                } else {
                    animeWomanStance.play();
                    // 关闭瞄准偏移
                    animeWomanStance.aimOffsetEnabled = false;
                }
            });
            // 添加一个按键方法:按下键盘“2”，停止播放基础姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.currentBasicStance) {
                    myCharacter.currentBasicStance.stop();
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

使用示例:给角色加载一个二次元男性基础姿态和一个二次元女性基础姿态（默认），提供按键方法控制播放和停止。
```ts
@Core.Class
export default class CharacterBasicStanceExample extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "39317,30274";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个二次元男性基础姿态
            let animeManStance = myCharacter.loadBasicStance("39317");
            console.log("animeManStance assetId " + animeManStance.assetId);
            // 给角色加载一个二次元女性基础姿态（默认）,关闭瞄准偏移
            let animeWomanStance = myCharacter.loadBasicStance("30274");
            animeWomanStance.aimOffsetEnabled = false;
            console.log("animeWomanStance assetId " + animeWomanStance.assetId);
            // 添加一个按键方法:按下键盘“1”，切换播放二次元男性基础姿态和二次元女性基础姿态
            InputUtil.onKeyDown(Type.Keys.One, () => {
                if(myCharacter.currentBasicStance == animeWomanStance) {
                    animeManStance.play();
                    // 开启瞄准偏移
                    animeManStance.aimOffsetEnabled = true;
                } else {
                    animeWomanStance.play();
                    // 关闭瞄准偏移
                    animeWomanStance.aimOffsetEnabled = false;
                }
            });
            // 添加一个按键方法:按下键盘“2”，停止播放基础姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.currentBasicStance) {
                    myCharacter.currentBasicStance.stop();
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

使用示例:给角色加载一个二次元男性基础姿态和一个二次元女性基础姿态（默认），提供按键方法控制播放和停止。
```ts
@Core.Class
export default class CharacterBasicStanceExample extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "39317,30274";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个二次元男性基础姿态
            let animeManStance = myCharacter.loadBasicStance("39317");
            console.log("animeManStance assetId " + animeManStance.assetId);
            // 给角色加载一个二次元女性基础姿态（默认）,关闭瞄准偏移
            let animeWomanStance = myCharacter.loadBasicStance("30274");
            animeWomanStance.aimOffsetEnabled = false;
            console.log("animeWomanStance assetId " + animeWomanStance.assetId);
            // 添加一个按键方法:按下键盘“1”，切换播放二次元男性基础姿态和二次元女性基础姿态
            InputUtil.onKeyDown(Type.Keys.One, () => {
                if(myCharacter.currentBasicStance == animeWomanStance) {
                    animeManStance.play();
                    // 开启瞄准偏移
                    animeManStance.aimOffsetEnabled = true;
                } else {
                    animeWomanStance.play();
                    // 关闭瞄准偏移
                    animeWomanStance.aimOffsetEnabled = false;
                }
            });
            // 添加一个按键方法:按下键盘“2”，停止播放基础姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.currentBasicStance) {
                    myCharacter.currentBasicStance.stop();
                }
            });
        }
    }
}
```

#### Returns

`string`

## Methods

### play <Score text="play" /> 

• **play**(): `boolean` 

播放姿态


::: warning Precautions

播放这个姿态对象, 并返回执行结果. 这个操作是否会自动同步多端, 取决于调用端，服务端广播生效，客户端本地生效。

:::

使用示例:给角色加载一个二次元男性基础姿态和一个二次元女性基础姿态（默认），提供按键方法控制播放和停止。
```ts
@Core.Class
export default class CharacterBasicStanceExample extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "39317,30274";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个二次元男性基础姿态
            let animeManStance = myCharacter.loadBasicStance("39317");
            console.log("animeManStance assetId " + animeManStance.assetId);
            // 给角色加载一个二次元女性基础姿态（默认）,关闭瞄准偏移
            let animeWomanStance = myCharacter.loadBasicStance("30274");
            animeWomanStance.aimOffsetEnabled = false;
            console.log("animeWomanStance assetId " + animeWomanStance.assetId);
            // 添加一个按键方法:按下键盘“1”，切换播放二次元男性基础姿态和二次元女性基础姿态
            InputUtil.onKeyDown(Type.Keys.One, () => {
                if(myCharacter.currentBasicStance == animeWomanStance) {
                    animeManStance.play();
                    // 开启瞄准偏移
                    animeManStance.aimOffsetEnabled = true;
                } else {
                    animeWomanStance.play();
                    // 关闭瞄准偏移
                    animeWomanStance.aimOffsetEnabled = false;
                }
            });
            // 添加一个按键方法:按下键盘“2”，停止播放基础姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.currentBasicStance) {
                    myCharacter.currentBasicStance.stop();
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

停止姿态


::: warning Precautions

停止这个姿态对象, 并返回执行结果. 这个操作是否会自动同步多端, 取决于调用端，服务端广播生效，客户端本地生效。

:::

使用示例:给角色加载一个二次元男性基础姿态和一个二次元女性基础姿态（默认），提供按键方法控制播放和停止。
```ts
@Core.Class
export default class CharacterBasicStanceExample extends Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "39317,30274";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个二次元男性基础姿态
            let animeManStance = myCharacter.loadBasicStance("39317");
            console.log("animeManStance assetId " + animeManStance.assetId);
            // 给角色加载一个二次元女性基础姿态（默认）,关闭瞄准偏移
            let animeWomanStance = myCharacter.loadBasicStance("30274");
            animeWomanStance.aimOffsetEnabled = false;
            console.log("animeWomanStance assetId " + animeWomanStance.assetId);
            // 添加一个按键方法:按下键盘“1”，切换播放二次元男性基础姿态和二次元女性基础姿态
            InputUtil.onKeyDown(Type.Keys.One, () => {
                if(myCharacter.currentBasicStance == animeWomanStance) {
                    animeManStance.play();
                    // 开启瞄准偏移
                    animeManStance.aimOffsetEnabled = true;
                } else {
                    animeWomanStance.play();
                    // 关闭瞄准偏移
                    animeWomanStance.aimOffsetEnabled = false;
                }
            });
            // 添加一个按键方法:按下键盘“2”，停止播放基础姿态
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                if(myCharacter.currentBasicStance) {
                    myCharacter.currentBasicStance.stop();
                }
            });
        }
    }
}
```

#### Returns

`boolean`

停止结果
