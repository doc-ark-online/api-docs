[基础类型](../groups/基础类型.基础类型.md) / MulticastGameObjectDelegate

# MulticastGameObjectDelegate <Badge type="tip" text="Class" /> <Score text="MulticastGameObjectDelegate" />

广播代理

<span style="font-size: 14px;">
使用示例: 创建一个名为"MultidelExample"的脚本,打开脚本,输入以下代码保存,运行游戏，打印输出 5 。
</span>

```ts
 @Component
 export default class ActionExample extends Script {

     // 示例函数，满足 GameObjectDelegateFuncType 约束
     public async addNumbers(object: GameObject): `Promise`<`void`\> {
         console.log(object.gameObjectId);
     }
     protected async onStart(): `Promise`<`void`\> {

         // 实例化 MulticastGameObjectDelegate 类
         const delegateInstance = new MulticastGameObjectDelegate();
         // 添加 MulticastGameObjectDelegate 实例的方法
         delegateInstance.add(this.addNumbers);
         // 广播 MulticastGameObjectDelegate 实例的方法
         const rocket = await GameObject.asyncSpawn("162807" ,{transform: new Transform(new Vector(300, 210, 0), new Rotation(0, 0, 0), new Vector(1, 1, 1))}) as Model;
         delegateInstance.broadcast(rocket);
     }
 }
```

## Table of contents

### Methods <Score text="Methods" /> 
| **[add](mw.MulticastGameObjectDelegate.md#add)**(`func`: `GameObjectDelegateFuncType`): `void`   |
| :-----|
| 添加代理事件|
| **[broadcast](mw.MulticastGameObjectDelegate.md#broadcast)**(`obj`: [`GameObject`](mw.GameObject.md)): `void`   |
| 触发代理事件|
| **[clear](mw.MulticastGameObjectDelegate.md#clear)**(): `void`   |
| 清空代理事件（危险操作，请注意您所清空的是哪些代理事件）|
| **[remove](mw.MulticastGameObjectDelegate.md#remove)**(`func`: `GameObjectDelegateFuncType`): `void`   |
| 删除代理事件|

## Methods

### add <Score text="add" /> 

• **add**(`func`): `void` 

添加代理事件

#### Parameters

| `func` `GameObjectDelegateFuncType` |  事件回调函数 default: |
| :------ | :------ |


___

### broadcast <Score text="broadcast" /> 

• **broadcast**(`obj`): `void` 

触发代理事件

#### Parameters

| `obj` [`GameObject`](mw.GameObject.md) |  触发物体对象 |
| :------ | :------ |


___

### clear <Score text="clear" /> 

• **clear**(): `void` 

清空代理事件（危险操作，请注意您所清空的是哪些代理事件）


___

### remove <Score text="remove" /> 

• **remove**(`func`): `void` 

删除代理事件

#### Parameters

| `func` `GameObjectDelegateFuncType` |  事件回调函数 |
| :------ | :------ |

