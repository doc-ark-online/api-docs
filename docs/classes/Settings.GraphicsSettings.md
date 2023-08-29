[SETTINGS](../groups/SETTINGS.SETTINGS.md) / GraphicsSettings

# GraphicsSettings <Badge type="tip" text="Class" /> <Score text="GraphicsSettings" />

图片画质设置

使用示例:创建一个名为"ClassExample"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，你将在服务器Log中看到对应方法调用信息。代码如下：
```ts
@Core.Class
export default class ClassExample extends Core.Script {

   protected onStart(): void {
       this.RoomSettings();
   }

   public RoomSettings(){
       //设置CPU和GPU的画质等级
       let cpu = Type.GraphicsLevel.Low1;
       let gpu = Type.GraphicsLevel.Low2;
       Settings.GraphicsSettings.setGraphicsCPULevel(cpu);
       Settings.GraphicsSettings.setGraphicsGPULevel(gpu);

       //获取当前CPU画质等级
       let cpulevel = Settings.GraphicsSettings.getCPULevel();
       //获取当前GPU画质等级
       let gpulevel = Settings.GraphicsSettings.getGPULevel();
       //获取默认CPU画质等级
       let Defaultcpulevel = Settings.GraphicsSettings.getDefaultCPULevel();
       //获取默认GPU画质等级
       let Defaultcgpulevel = Settings.GraphicsSettings.getDefaultGPULevel();
   }
}
```

## Table of contents

| Methods |
| :-----|
| **[getCPULevel](Settings.GraphicsSettings.md#getcpulevel)**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <br> 获取当前CPU画质等级|
| **[getDefaultCPULevel](Settings.GraphicsSettings.md#getdefaultcpulevel)**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <br> 获取默认CPU画质等级|
| **[getDefaultGPULevel](Settings.GraphicsSettings.md#getdefaultgpulevel)**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <br> 获取默认GPU画质等级|
| **[getGPULevel](Settings.GraphicsSettings.md#getgpulevel)**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <br> 获取当前GPU画质等级|
| **[setGraphicsCPULevel](Settings.GraphicsSettings.md#setgraphicscpulevel)**(`CPULevel`: [`GraphicsLevel`](../enums/Type.GraphicsLevel.md)): `void` <br> 设置当前CPU画质等级|
| **[setGraphicsGPULevel](Settings.GraphicsSettings.md#setgraphicsgpulevel)**(`GPULevel`: [`GraphicsLevel`](../enums/Type.GraphicsLevel.md)): `void` <br> 设置当前GPU画质等级|
| **[setGraphicsLevel](Settings.GraphicsSettings.md#setgraphicslevel)**(`CPULevel`: [`GraphicsLevel`](../enums/Type.GraphicsLevel.md), `GPULevel`: [`GraphicsLevel`](../enums/Type.GraphicsLevel.md)): `void` <br> 设置CPU和GPU的画质等级|

## Methods

### getCPULevel <Score text="getCPULevel" /> 

• `Static` **getCPULevel**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <Badge type="tip" text="client" />

获取当前CPU画质等级


#### Returns

[`GraphicsLevel`](../enums/Type.GraphicsLevel.md)

画质等级。如果返回值为undefined，请检查是否在客户端调用

___

### getDefaultCPULevel <Score text="getDefaultCPULevel" /> 

• `Static` **getDefaultCPULevel**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <Badge type="tip" text="client" />

获取默认CPU画质等级


#### Returns

[`GraphicsLevel`](../enums/Type.GraphicsLevel.md)

默认画质等级。如果返回值为undefined，请检查是否在客户端调用

___

### getDefaultGPULevel <Score text="getDefaultGPULevel" /> 

• `Static` **getDefaultGPULevel**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <Badge type="tip" text="client" />

获取默认GPU画质等级


#### Returns

[`GraphicsLevel`](../enums/Type.GraphicsLevel.md)

默认画质等级。如果返回值为undefined，请检查是否在客户端调用

___

### getGPULevel <Score text="getGPULevel" /> 

• `Static` **getGPULevel**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <Badge type="tip" text="client" />

获取当前GPU画质等级


#### Returns

[`GraphicsLevel`](../enums/Type.GraphicsLevel.md)

画质等级。如果返回值为undefined，请检查是否在客户端调用

___

### setGraphicsCPULevel <Score text="setGraphicsCPULevel" /> 

• `Static` **setGraphicsCPULevel**(`CPULevel`): `void` <Badge type="tip" text="client" />

设置当前CPU画质等级


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `CPULevel` | [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) | CPU画质等级 |


___

### setGraphicsGPULevel <Score text="setGraphicsGPULevel" /> 

• `Static` **setGraphicsGPULevel**(`GPULevel`): `void` <Badge type="tip" text="client" />

设置当前GPU画质等级


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GPULevel` | [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) | GPU画质等级 |


___

### setGraphicsLevel <Score text="setGraphicsLevel" /> 

• `Static` **setGraphicsLevel**(`CPULevel`, `GPULevel`): `void` <Badge type="tip" text="client" />

设置CPU和GPU的画质等级


::: warning Precautions

移动端设置的值不可超过Type.GraphicsLevel.Cinematic2,设置的值超过会被强制转为Type.GraphicsLevel.Cinematic2

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `CPULevel` | [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) | CPU画质等级 |
| `GPULevel` | [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) | GPU画质等级 |

