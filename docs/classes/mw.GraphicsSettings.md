[设置](../groups/设置.设置.md) / GraphicsSettings

# GraphicsSettings <Badge type="tip" text="Class" /> <Score text="GraphicsSettings" />

图片画质设置

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
       //设置CPU和GPU的画质等级
       let cpu = mw.GraphicsLevel.Low1;
       let gpu = mw.GraphicsLevel.Low2;
       GraphicsSettings.setGraphicsCPULevel(cpu);
       GraphicsSettings.setGraphicsGPULevel(gpu);

       //获取当前CPU画质等级
       let cpulevel = GraphicsSettings.getCPULevel();
       //获取当前GPU画质等级
       let gpulevel = GraphicsSettings.getGPULevel();
       //获取默认CPU画质等级
       let Defaultcpulevel = GraphicsSettings.getDefaultCPULevel();
       //获取默认GPU画质等级
       let Defaultcgpulevel = GraphicsSettings.getDefaultGPULevel();
   }
}
```

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[occlusionCullingEnabled](mw.GraphicsSettings.md#occlusioncullingenabled)**(): `boolean` <Badge type="tip" text="client" />  |
| :-----|
| 获取是否开启遮挡剔除(遮挡剔除开启后能一定程度上降低DraCall，具体效果取决于场景物体相互遮挡的程度, 但是可能会导致物体从被剔除切换到不被剔除时延迟3帧才渲染)|

### Methods <Score text="Methods" /> 

## Accessors

### occlusionCullingEnabled <Score text="occlusionCullingEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **occlusionCullingEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **occlusionCullingEnabled**(`Enabled`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启遮挡剔除(遮挡剔除开启后能一定程度上降低DraCall，具体效果取决于场景物体相互遮挡的程度, 但是可能会导致物体从被剔除切换到不被剔除时延迟3帧才渲染)

#### Returns

| `boolean` | 当前是否开启遮挡剔除。如果返回值为undefined，请检查是否在客户端调用 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置遮挡剔除(遮挡剔除开启后能一定程度上降低DraCall，具体效果取决于场景物体相互遮挡的程度, 但是可能会导致物体从被剔除切换到不被剔除时延迟3帧才渲染)

#### Parameters

| `Enabled` `boolean` | 是否开启遮挡剔除 |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods
