[设置](../groups/设置.设置.md) / EnvironmentSettings

# EnvironmentSettings <Badge type="tip" text="Class" /> <Score text="EnvironmentSettings" />

环境设置

**`Effect`**


<span style="font-size: 14px;">
使用示例:创建一个名为"ClassExample"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，你将在服务器Log中看到对应方法调用信息。代码如下：
</span>

```ts
@Component
export default class ClassExample extends Script {

    protected onStart(): void {
        this.RoomSettings();
    }

    public RoomSettings(){
        let gra = EnvironmentSettings.getGravity();
        console.log("当前重力大小：" + gra);

        //设置重力模式
        let mode = EnvironmentSettings.getGravityMode();
    }
}
```

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[deathBoundaryEnabled](mw.EnvironmentSettings.md#deathboundaryenabled)**(): `boolean`   |
| :-----|
| 是否开启死亡边界。启用后死亡边界高度限制才会生效|
| **[deathBoundaryHeight](mw.EnvironmentSettings.md#deathboundaryheight)**(): `number`   |
| 获取死亡边界高度，range: [-50000, 50000]。开启死亡边界高度功能后，角色掉落到死亡边界之下会进入死亡状态并重生，其他对象会销毁|

### Methods <Score text="Methods" /> 
| **[getGravity](mw.EnvironmentSettings.md#getgravity)**(): `number` <Badge type="tip" text="client" />  |
| :-----|
| 获取当前重力大小|
| **[getGravityMode](mw.EnvironmentSettings.md#getgravitymode)**(): [`GravityMode`](../enums/mw.GravityMode.md) <Badge type="tip" text="client" />  |
| 获取当前重力模式|
| **[setGlobalTimeDilation](mw.EnvironmentSettings.md#setglobaltimedilation)**(`timeDilation`: `number`): `void` <Badge type="tip" text="other" />  |
| 设置世界整体膨胀时间速度|

## Accessors

### deathBoundaryEnabled <Score text="deathBoundaryEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **deathBoundaryEnabled**(): `boolean` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否开启死亡边界。启用后死亡边界高度限制才会生效

#### Returns

| `boolean` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### deathBoundaryHeight <Score text="deathBoundaryHeight" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **deathBoundaryHeight**(): `number` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取死亡边界高度，range: [-50000, 50000]。开启死亡边界高度功能后，角色掉落到死亡边界之下会进入死亡状态并重生，其他对象会销毁

#### Returns

</td>
</tr></tbody>
</table>

| `number` |  |
| :------ | :------ |

## Methods

### getGravity <Score text="getGravity" /> 

• `Static` **getGravity**(): `number` <Badge type="tip" text="client" />

获取当前重力大小

#### Returns

| `number` | 重力大小。如果返回值为undefined，请检查是否在客户端调用或者是否设置重力大小 |
| :------ | :------ |

___

### getGravityMode <Score text="getGravityMode" /> 

• `Static` **getGravityMode**(): [`GravityMode`](../enums/mw.GravityMode.md) <Badge type="tip" text="client" />

获取当前重力模式

#### Returns

| [`GravityMode`](../enums/mw.GravityMode.md) | 重力模式。如果返回值为undefined，请检查是否在客户端调用或者是否设置重力模式 |
| :------ | :------ |

___

### setGlobalTimeDilation <Score text="setGlobalTimeDilation" /> 

• `Static` **setGlobalTimeDilation**(`timeDilation`): `void` <Badge type="tip" text="other" />

设置世界整体膨胀时间速度

#### Parameters

| `timeDilation` `number` | 膨胀时间速度 <br> type: 浮点数。 <br> range: 世界整体膨胀时间速度默认为 1。当膨胀时间速度设置小于 1 时，世界中所有对象的整体运行时间会开始变慢。膨胀时间速度最小值为 0.2。 单机模式可以将膨胀设置为 0 达到时间暂停的效果。 |
| :------ | :------ |

