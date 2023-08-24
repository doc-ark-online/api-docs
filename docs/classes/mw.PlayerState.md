[mw](../modules/Core.mw.md) / PlayerState

# PlayerState <Badge type="tip" text="Class" /> <Score text="PlayerState" />

PlayerState基类

使用示例: 创建一个名为"PlayerStateExample"的脚本，放置在对象栏中，打开脚本，输入以下代码保存。把启动参数的玩家数量改为2，运行游戏按下R键将看到其中一个客户端收到test同步。按下P键将打印客户端的test值.
* ``` typescript
  // 服务端每个玩家进入游戏时会自动创建一个实例
  @Core.Class
  export class GamePlayerState extends mw.PlayerState {

      @Core.Property(`{replicated: true, onChanged: "onRepTest"}`)
      test = "";

      onRepTest(path: string[], value: string, oldVal: string) {
          console.log(`onRepTest path: $`{path}` value: $`{value}` oldVal: $`{oldVal}``);
      }
  }

  @Core.Class
  export default class PlayerStateExample extends mw.Script {

      protected onStart(): void {

          // 按下R建在服务端随机一个玩家修改GamePlayerState的test属性
          InputUtil.onKeyDown(Keys.R, () => this.random());

          // 按下P建打印主控端玩家GamePlayState的test属性
          InputUtil.onKeyDown(Keys.P, () => {
              const playerState = mw.getCurrentPlayer().getPlayerState(GamePlayerState);
              console.log(`test: $`{playerState.test}``);
          });

      }

      @Core.Function(Core.Server)
      random() {
          const players = mw.getAllPlayers();
          // 随机一个玩家
          const luckPlayer = players[Math.floor(Math.random() * players.length)];
          // 获取到GamePlayerState实例
          const playerState = luckPlayer.getPlayerState(GamePlayerState);
          playerState.test = `random: $`{ Math.floor(Math.random() * 100)}``;
      }
  }
```ts

## Hierarchy

- [`Script`](mw.Script.md)

  ↳ **`PlayerState`**

## Table of contents

| Accessors |
| :-----|


::: details 点击查看继承
| Accessors |
| :-----|
| **[gameObject](mw.Script.md#gameobject)**(): [`GameObject`](mw.GameObject.md) <br> 脚本对应的GameObject|
| **[name](mw.Script.md#name)**(): `string` <br> |
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroy](mw.Script.md#destroy)**(): `void` <br> |
| **[spawnScript](mw.Script.md#spawnscript)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`scriptClass`: (...`args`: `unknown`[]) => `T`, `bInReplicates?`: `boolean`): `Promise`<`T`: extends [`Script`](mw.Script.md)<`T`\>\> <br> |
:::


#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `ActorInfo` |

#### Overrides

[Script](mw.Script.md).[constructor](mw.Script.md#constructor)

## Accessors

## Methods