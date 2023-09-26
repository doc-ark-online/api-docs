[SETTINGS](../groups/Core.SETTINGS.md) / ScriptingSettings

# ScriptingSettings <Badge type="tip" text="Class" /> <Score text="ScriptingSettings" />

<p class="content-big">

全局的脚本配置信息

</p>

<p style="font-size: 14px;">

使用示例:创建一个名为"ClassExample"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，你将在Log中看到对应方法调用信息。代码如下：

</p>

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

### Constructors <Score text="Constructors" /> 
| **new ScriptingSettings**()  |
| :----- |

### Methods <Score text="Methods" /> 
| **[setGlobalAsyncTimeout](mw.ScriptingSettings.md#setglobalasynctimeout)**(`timeout`: `number`): `void`  |
| :-----|
| 设置异步回调超时时间，单位毫秒，默认10000|

## Methods

### setGlobalAsyncTimeout <Score text="setGlobalAsyncTimeout" /> 

• `Static` **setGlobalAsyncTimeout**(`timeout`): `void` 

设置异步回调超时时间，单位毫秒，默认10000

#### Parameters

| `timeout` `number` | 超时时间 |
| :------ | :------ |



<p style="font-size: 14px;">

使用示例:调用方法

</p>

```ts
ScriptingSettings.setGlobalAsyncTimeout(1000 * 10);
const obj = await GameObject.asyncFind("场景中的物体Guid");
```
