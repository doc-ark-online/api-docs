[TYPE](../groups/Core.TYPE.md) / Action

# Action <Badge type="tip" text="Class" /> <Score text="Action" />

任意参数的代理

使用示例:创建一个名为ActionExample的脚本，放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”将看到代理被调用的效果,按下键盘“2”会看到代理被移除的效果，代码如下：
```ts
@Component
export default class ActionExample extends Script {
    private readonly action:Action = new Action;
    private readonly action1:Action1<number> = new Action1();
    private readonly action2:Action2<number, string> = new Action2();

    protected onStart(): void {
        // 添加Action的监听
        this.action.add(() => {
            console.log("action");
        });
        // 添加Action1的监听
        this.action1.add(this.onAction1, this);
        // 添加Action2的监听
        this.action2.add(this.onAction2, this);

        // 按下键盘的1键触发各个Action
        InputUtil.onKeyDown(Keys.One, () => {
            this.action.call();
            this.action1.call(1);
            this.action2.call(1, "testString");
        });
        // 按下键盘的2键移除各个Action的监听，移除后再触发不会执行
        InputUtil.onKeyDown(Keys.Two, () => {
            this.action1.remove(this.onAction1, this);
            this.action2.remove(this.onAction2, this);
        });
    }
    // Action1的监听函数
    private onAction1(a: number) {
        console.log("onAction1", a);
    }
    // Action2的监听函数
    private onAction2(a: number, b: string) {
        console.log("onAction2", a, b);
    }
}
```

## Hierarchy

- **`Action`**

  ↳ [`Action1`](mw.Action1.md)

  ↳ [`Action2`](mw.Action2.md)

  ↳ [`Action3`](mw.Action3.md)

## Table of contents

| Accessors |
| :-----|
| **[count](mw.Action.md#count)**(): `number` <br> 监听方法的数量|

| Methods |
| :-----|
| **[add](mw.Action.md#add)**(`fn`: `Function`, `thisArg?`: `any`): `number` <br> 添加一个监听方法(有重复过滤)|
| **[call](mw.Action.md#call)**(`...params`: `any`): `void` <br> 执行|
| **[clear](mw.Action.md#clear)**(): `void` <br> 清除所有监听|
| **[includes](mw.Action.md#includes)**(`fn`: `Function`, `thisArg`: `any`): `boolean` <br> 判断是否包含某个监听方法|
| **[remove](mw.Action.md#remove)**(`fn`: `number` \, `thisArg?`: `any`): `void` <br> 移除一个监听方法|

## Accessors

### count <Score text="count" /> 

• `get` **count**(): `number` 

监听方法的数量


#### Returns

`number`

## Methods

### add <Score text="add" /> 

• **add**(`fn`, `thisArg?`): `number` 

添加一个监听方法(有重复过滤)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` |  方法 |
| `thisArg?` | `any` |  域 default: undefined |

#### Returns

`number`

本次监听的唯一标识，可用于remove。如果返回-1，则说明这个方法之前添加过，不会重复添加

___

### call <Score text="call" /> 

• **call**(`...params`): `void` 

执行


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...params` | `any` |  参数序列 |


___

### clear <Score text="clear" /> 

• **clear**(): `void` 

清除所有监听



___

### includes <Score text="includes" /> 

• **includes**(`fn`, `thisArg`): `boolean` 

判断是否包含某个监听方法


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `Function` |  方法 |
| `thisArg` | `any` |  域 |

#### Returns

`boolean`

结果

___

### remove <Score text="remove" /> 

• **remove**(`fn`, `thisArg?`): `void` 

移除一个监听方法


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `number` \| `Function` |  方法\|监听唯一标识 |
| `thisArg?` | `any` |  域，fn为number时不用写 default: undefined |

