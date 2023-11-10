[基础类型](../groups/基础类型.基础类型.md) / MulticastDelegate

# MulticastDelegate<T\> <Badge type="tip" text="Class" /> <Score text="MulticastDelegate<T\>" />

多播委托接口

**`Effect`**


<span style="font-size: 14px;">
使用示例: 创建一个名为"MultidelExample"的脚本,打开脚本,输入以下代码保存,运行游戏，打印输出 a+b:5 。
</span>

```ts
@Component
 export default class MultidelExample extends Script {

     // 示例函数，满足 DelegateFuncType 约束
     public addNumbers(a: number, b: number): number {
         let c = a + b;
         console.log("a+b:"+ c);
         return c;
     }
     protected onStart(): void {

         // 实例化 MulticastDelegate 类
         const delegateInstance = new MulticastDelegate<typeof this.addNumbers>();
         // 添加 MulticastDelegate 实例的方法
         delegateInstance.add(this.addNumbers);
         // 广播 MulticastDelegate 实例的方法
         delegateInstance.broadcast(2,3);
     }
 }
```

## Type parameters

| `T` | extends [`DelegateFuncType`](../modules/Core.mw.md#delegatefunctype) |
| :------ | :------ |

## Implements

- `MulticastDelegateInterface`<`T`\>

## Table of contents

### Methods <Score text="Methods" /> 
| **[add](mw.MulticastDelegate.md#add)**(`func`: `T`): `void`   |
| :-----|
| 添加代理事件|
| **[broadcast](mw.MulticastDelegate.md#broadcast)**(`...arg`: `Parameters`<`T`\>): `void`   |
| 触发代理事件|
| **[clear](mw.MulticastDelegate.md#clear)**(): `void`   |
| 清空代理事件（危险操作，请注意您所清空的是哪些代理事件）|
| **[remove](mw.MulticastDelegate.md#remove)**(`func`: `T`): `void`   |
| 删除代理事件|

#### Type parameters

| `T` | extends [`DelegateFuncType`](../modules/Core.mw.md#delegatefunctype) |
| :------ | :------ |

## Methods

### add <Score text="add" /> 

• **add**(`func`): `void` 

添加代理事件

#### Parameters

| `func` `T` |  事件回调函数 default |
| :------ | :------ |


#### Implementation of

MulticastDelegateInterface.add

___

### broadcast <Score text="broadcast" /> 

• **broadcast**(`...arg`): `void` 

触发代理事件

#### Parameters

| `...arg` `Parameters`<`T`\> |  参数 |
| :------ | :------ |


#### Implementation of

MulticastDelegateInterface.broadcast

___

### clear <Score text="clear" /> 

• **clear**(): `void` 

清空代理事件（危险操作，请注意您所清空的是哪些代理事件）


#### Implementation of

MulticastDelegateInterface.clear

___

### remove <Score text="remove" /> 

• **remove**(`func`): `void` 

删除代理事件

#### Parameters

| `func` `T` |  删除绑定的事件 default |
| :------ | :------ |


#### Implementation of

MulticastDelegateInterface.remove
