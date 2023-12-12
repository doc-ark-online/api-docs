[基础类型](../groups/基础类型.基础类型.md) / Action1

# Action1<T\> <Badge type="tip" text="Class" /> <Score text="Action1<T\>" />

一个参数的代理

<span style="font-size: 14px;">
使用示例: 一个参数的代理
</span>

```ts
@Component
export default class ActionExample extends Script {

    private readonly action1:Action1<player> = new Action1();

    protected onStart(): void {

        // 添加Action1的监听
        const id = this.action1.add((player: player) => {
            if(player.age < 18) {
                console.log("sorry , only those over 18 years old can enter")
            } else {
                // 可以对player展开具体的实现逻辑
                player.game();
            }
        });

        InputUtil.onKeyDown(Keys.One, () => {
            let playerOne : multiPlayer = new multiPlayer(10.5,"Janny");
            this.action1.call(playerOne);
        });
    }
}
class player
{
    public age:number = 2;
    public name:string = "Li";
    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }
    public game(){
        console.log("player is playing game");
    }
}
class lowPlayer extends player
{
    public game(): void {
        console.log("lowplayer is playing game");
    }
}
class multiPlayer extends player
{
    public game(): void {
        console.log("multiPlayer is playing game");
    }
}
```

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Action`](mw.Action.md)

  ↳ **`Action1`**

## Table of contents

### Accessors <Score text="Accessors" /> 


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[count](mw.Action.md#count)**(): `number`   |
| :-----|
| 监听方法的数量|
:::


### Methods <Score text="Methods" /> 


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[add](mw.Action.md#add)**(`fn`: `Function`, `thisArg?`: `any`): `number`   |
| :-----|
| 添加一个监听方法|
| **[call](mw.Action.md#call)**(`...params`: `any`): `void`   |
| 执行|
| **[clear](mw.Action.md#clear)**(): `void`   |
| 清除所有监听|
| **[includes](mw.Action.md#includes)**(`fn`: `Function`, `thisArg`: `any`): `boolean`   |
| 判断是否包含某个监听方法|
| **[remove](mw.Action.md#remove)**(`fn`: `number`  `Function`, `thisArg?`: `any`): `void`   |
| 移除一个监听方法|
:::


## Accessors

## Methods