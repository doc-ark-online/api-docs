[TYPE](../groups/Core.TYPE.md) / Action

# Action <Badge type="tip" text="Class" /> <Score text="Action" />

<span class="content-big">

代理

</span>

<span class="content-big">

----------------------------------------

</span>

<span class="content-big">

代理是一种设计模式，它允许你创建一个中间层对象来控制对另一个对象的访问。

</span>

<span class="content-big">

代理是如何工作的呢 ?

</span>

<span class="content-big">

- 编辑器已封装好代理功能，或许与你之前使用代理方式不同，不过这种方式对于你来说或许更方便了。

</span>

<span class="content-big">

- add 方法添加需要代理的具体事务。

</span>

<span class="content-big">

- call 方法执行代理。

</span>

<span class="content-big">

为什么要使用代理 ?

</span>

<span class="content-big">

- 代理可以作为一个门卫，对对象的访问进行控制和限制。它可以验证调用者的权限、限制对敏感操作的访问或者记录访问日志等。代理模式允许你在不改变原始对象的情况下，对其进行安全增强。

</span>

<span class="content-big">

- 代理对象可以在第一次访问时负责创建或初始化真正的对象，并将后续的访问重定向到已创建的对象。

</span>

<span class="content-big">

- 等等..。

</span>

<span class="content-big">

如何通俗易懂了解代理 ?

</span>

<span class="content-big">

假设你是一个忙碌的公司老板，你需要处理很多事务，包括与客户交流、签署文件等等。但是，由于你的时间有限，你无法亲自处理所有的事务。所以你决定雇佣一名助手来帮助你处理这些事务。这名助手就是你的代理。

</span>

<span class="content-big">

代理（助手）具有与你相同的能力和职责，他可以代表你与客户进行交流、签署文件等等。当有事务需要处理时，你将任务委托给代理，代理会代替你执行相关的操作。然而，代理并不是完全取代你的存在。虽然代理可以处理大部分事务，但在某些情况下，代理需要将任务转交给你来处理。例如，当遇到特殊的请求或需要你的个人决策时，代理会将任务交还给你。

</span>

<span style="font-size: 14px;">

使用示例:创建一个名为ActionExample的脚本，放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”将看到代理被调用的效果,按下键盘“2”会看到代理被移除的效果，代码如下：

</span>

```ts
 @Component
 export default class ActionExample extends Script {
     private readonly action:Action = new Action();
     private readonly action1:Action1<number> = new Action1();
     private readonly action2:Action2<number, string> = new Action2();

     protected onStart(): void {

         // 添加Action的监听
         this.action.add(() => {
             console.log("action");
         });
         // 添加Action1的监听
         const id = this.action1.add((player: player) => {
             if(player.age = 18) {
                 console.log("sorry , only those over 18 years old can enter")
             } else {
                 // 可以对player展开具体的实现逻辑
                 player.game();
             }
         });
         // 添加Action2的监听
         this.action2.add(this.onAction2);

         // 按下键盘的1键触发各个Action
         InputUtil.onKeyDown(Keys.One, () => {
             this.action.call();
             let playerOne : multiPlayer = new multiPlayer(10.5,"Janny");
             this.action1.call(playerOne);
             this.action2.call(2,playerOne);
         });

     }
     // Action2的监听函数
     private onAction2(num: number, player: player) {
         console.log("action2");
         player.game();
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

## Hierarchy

- **`Action`**

  ↳ [`Action1`](mw.Action1.md)

  ↳ [`Action2`](mw.Action2.md)

  ↳ [`Action3`](mw.Action3.md)

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[count](mw.Action.md#count)**(): `number`  |
| :-----|
| 监听方法的数量|

### Methods <Score text="Methods" /> 
| **[add](mw.Action.md#add)**(`fn`: `Function`, `thisArg?`: `any`): `number`  |
| :-----|
| 添加一个监听方法(有重复过滤)|
| **[call](mw.Action.md#call)**(`...params`: `any`): `void`  |
| 执行|
| **[clear](mw.Action.md#clear)**(): `void`  |
| 清除所有监听|
| **[includes](mw.Action.md#includes)**(`fn`: `Function`, `thisArg`: `any`): `boolean`  |
| 判断是否包含某个监听方法|
| **[remove](mw.Action.md#remove)**(`fn`: `number`  `Function`, `thisArg?`: `any`): `void`  |
| 移除一个监听方法|

## Accessors

### count <Score text="count" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **count**(): `number` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


监听方法的数量


#### Returns

</td>
</tr></tbody>
</table>

| `number` |  |
| :------ | :------ |

## Methods

### add <Score text="add" /> 

• **add**(`fn`, `thisArg?`): `number` 

添加一个监听方法(有重复过滤)

#### Parameters

| `fn` `Function` |  方法 |
| :------ | :------ |
| `thisArg?` `any` |  域 default: undefined |

#### Returns

| `number` | 本次监听的唯一标识，可用于remove。如果返回-1，则说明这个方法之前添加过，不会重复添加 |
| :------ | :------ |


___

### call <Score text="call" /> 

• **call**(`...params`): `void` 

执行

#### Parameters

| `...params` `any` |  参数序列 |
| :------ | :------ |



<span style="font-size: 14px;">

使用示例:创建一个名为ActionExample的脚本，放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”将看到代理被调用的效果,按下键盘“2”会看到代理被移除的效果，代码如下：

</span>

```ts
@Component
export default class ActionExample extends Script {
    private readonly action:Action = new Action();
    private readonly action1:Action1<number> = new Action1();
    private readonly action2:Action2<number, string> = new Action2();

    protected onStart(): void {
        // 添加Action的监听
        this.action.add(() => {
            console.log("action");
        });
        // 添加Action1的监听
        const id = this.action1.add((num: number) => {
            console.log("onAction1", num);
        });
        // 添加Action2的监听
        this.action2.add(this.onAction2, this);

        // 按下键盘的1键触发各个Action
        InputUtil.onKeyDown(Keys.One, () => {
            this.action.call();
            this.action1.call(1);
            this.action2.call(2, "testString");
        });
        // 按下键盘的2键移除各个Action的监听，移除后再触发不会执行
        InputUtil.onKeyDown(Keys.Two, () => {
            this.action1.remove(id);
            this.action2.remove(this.onAction2, this);
        });
    }
    // Action2的监听函数
    private onAction2(num: number, str: string) {
        console.log("onAction2", num, str);
    }
}
```

___

### clear <Score text="clear" /> 

• **clear**(): `void` 

清除所有监听



___

### includes <Score text="includes" /> 

• **includes**(`fn`, `thisArg`): `boolean` 

判断是否包含某个监听方法

#### Parameters

| `fn` `Function` |  方法 |
| :------ | :------ |
| `thisArg` `any` |  域 |

#### Returns

| `boolean` | 结果 |
| :------ | :------ |


___

### remove <Score text="remove" /> 

• **remove**(`fn`, `thisArg?`): `void` 

移除一个监听方法

#### Parameters

| `fn` `number`  `Function` |  方法监听唯一标识 |
| :------ | :------ |
| `thisArg?` `any` |  域，fn为number时不用写 default: undefined |


