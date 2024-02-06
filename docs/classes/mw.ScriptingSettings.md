[设置](../groups/设置.设置.md) / ScriptingSettings

# ScriptingSettings <Badge type="tip" text="Class" /> <Score text="ScriptingSettings" />

全局的脚本配置信息

<span style="font-size: 14px;">
使用示例:创建一个名为"ClassExample"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，你将在Log中看到对应方法调用信息。代码如下：
</span>

```ts
@Component
export default class ClassExample extends Script {

    protected onStart(): void {
       this.ScriptingSettings();
    }

    public ScriptingSettings(): void {
        // 设置当前异步查找超时时间
        ScriptingSettings.setGlobalAsyncTimeout(1000 * 10);
    }
}
```

## Table of contents

### Methods <Score text="Methods" /> 
| **[setGlobalAsyncTimeout](mw.ScriptingSettings.md#setglobalasynctimeout)**(`timeout`: `number`): `void`   |
| :-----|
| 设置异步回调超时时间|

## Methods

### setGlobalAsyncTimeout <Score text="setGlobalAsyncTimeout" /> 

• `Static` **setGlobalAsyncTimeout**(`timeout`): `void` 

设置异步回调超时时间

#### Parameters

| `timeout` `number` |  超时时间 <br> type: 浮点数。 <br> range: 单位毫秒，默认10000(10秒)。 |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例:调用方法
</span>

```ts
ScriptingSettings.setGlobalAsyncTimeout(1000 * 10);
const obj = await GameObject.asyncFindGameObjectById("场景中的物体Guid");
```
