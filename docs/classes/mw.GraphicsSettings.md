[SETTINGS](../groups/Core.SETTINGS.md) / GraphicsSettings

# GraphicsSettings <Badge type="tip" text="Class" /> <Score text="GraphicsSettings" />

<span class="content-big">

图片画质设置

</span>

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

### Methods <Score text="Methods" /> 
| **[getCPULevel](mw.GraphicsSettings.md#getcpulevel)**(): [`GraphicsLevel`](../enums/mw.GraphicsLevel.md)  |
| :-----|
| 获取当前CPU画质等级|
| **[getDefaultCPULevel](mw.GraphicsSettings.md#getdefaultcpulevel)**(): [`GraphicsLevel`](../enums/mw.GraphicsLevel.md)  |
| 获取默认CPU画质等级|
| **[getDefaultGPULevel](mw.GraphicsSettings.md#getdefaultgpulevel)**(): [`GraphicsLevel`](../enums/mw.GraphicsLevel.md)  |
| 获取默认GPU画质等级|
| **[getGPULevel](mw.GraphicsSettings.md#getgpulevel)**(): [`GraphicsLevel`](../enums/mw.GraphicsLevel.md)  |
| 获取当前GPU画质等级|
| **[setGraphicsCPULevel](mw.GraphicsSettings.md#setgraphicscpulevel)**(`CPULevel`: [`GraphicsLevel`](../enums/mw.GraphicsLevel.md)): `void`  |
| 设置当前CPU画质等级|
| **[setGraphicsGPULevel](mw.GraphicsSettings.md#setgraphicsgpulevel)**(`GPULevel`: [`GraphicsLevel`](../enums/mw.GraphicsLevel.md)): `void`  |
| 设置当前GPU画质等级|
| **[setGraphicsLevel](mw.GraphicsSettings.md#setgraphicslevel)**(`CPULevel`: [`GraphicsLevel`](../enums/mw.GraphicsLevel.md), `GPULevel`: [`GraphicsLevel`](../enums/mw.GraphicsLevel.md)): `void`  |
| 设置CPU和GPU的画质等级|

## Methods

### getCPULevel <Score text="getCPULevel" /> 

• `Static` **getCPULevel**(): [`GraphicsLevel`](../enums/mw.GraphicsLevel.md) <Badge type="tip" text="client" />

获取当前CPU画质等级

#### Returns

| [`GraphicsLevel`](../enums/mw.GraphicsLevel.md) | 画质等级。如果返回值为undefined，请检查是否在客户端调用 |
| :------ | :------ |


___

### getDefaultCPULevel <Score text="getDefaultCPULevel" /> 

• `Static` **getDefaultCPULevel**(): [`GraphicsLevel`](../enums/mw.GraphicsLevel.md) <Badge type="tip" text="client" />

获取默认CPU画质等级

#### Returns

| [`GraphicsLevel`](../enums/mw.GraphicsLevel.md) | 默认画质等级。如果返回值为undefined，请检查是否在客户端调用 |
| :------ | :------ |


___

### getDefaultGPULevel <Score text="getDefaultGPULevel" /> 

• `Static` **getDefaultGPULevel**(): [`GraphicsLevel`](../enums/mw.GraphicsLevel.md) <Badge type="tip" text="client" />

获取默认GPU画质等级

#### Returns

| [`GraphicsLevel`](../enums/mw.GraphicsLevel.md) | 默认画质等级。如果返回值为undefined，请检查是否在客户端调用 |
| :------ | :------ |


___

### getGPULevel <Score text="getGPULevel" /> 

• `Static` **getGPULevel**(): [`GraphicsLevel`](../enums/mw.GraphicsLevel.md) <Badge type="tip" text="client" />

获取当前GPU画质等级

#### Returns

| [`GraphicsLevel`](../enums/mw.GraphicsLevel.md) | 画质等级。如果返回值为undefined，请检查是否在客户端调用 |
| :------ | :------ |


___

### setGraphicsCPULevel <Score text="setGraphicsCPULevel" /> 

• `Static` **setGraphicsCPULevel**(`CPULevel`): `void` <Badge type="tip" text="client" />

设置当前CPU画质等级

#### Parameters

| `CPULevel` [`GraphicsLevel`](../enums/mw.GraphicsLevel.md) | CPU画质等级 |
| :------ | :------ |



___

### setGraphicsGPULevel <Score text="setGraphicsGPULevel" /> 

• `Static` **setGraphicsGPULevel**(`GPULevel`): `void` <Badge type="tip" text="client" />

设置当前GPU画质等级

#### Parameters

| `GPULevel` [`GraphicsLevel`](../enums/mw.GraphicsLevel.md) | GPU画质等级 |
| :------ | :------ |



___

### setGraphicsLevel <Score text="setGraphicsLevel" /> 

• `Static` **setGraphicsLevel**(`CPULevel`, `GPULevel`): `void` <Badge type="tip" text="client" />

设置CPU和GPU的画质等级

#### Parameters

| `CPULevel` [`GraphicsLevel`](../enums/mw.GraphicsLevel.md) | CPU画质等级 |
| :------ | :------ |
| `GPULevel` [`GraphicsLevel`](../enums/mw.GraphicsLevel.md) | GPU画质等级 |



::: warning Precautions

移动端设置的值不可超过Type.GraphicsLevel.Cinematic2,设置的值超过会被强制转为Type.GraphicsLevel.Cinematic2
