[Util](Util.Util.md) / SystemUtil

# SystemUtil <Badge type="tip" text="Namespace" /> 

## Table of contents

| Variables |
| :-----|
| **[currentPlatform](Util.SystemUtil.md#currentplatform)**: `string` <br> 判定当前程序的运行平台|
| **[isPIE](Util.SystemUtil.md#ispie)**: `boolean` <br> 判定当前程序的运行环境是否为PIE|

| Functions |
| :-----|
| **[getCurrentEnv](Util.SystemUtil.md#getcurrentenv)**(): `string` <br> 获取当前环境|
| **[getDefaultGraphicsCPULevel](Util.SystemUtil.md#getdefaultgraphicscpulevel)**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <br> 获取默认CPU画质等级|
| **[getDefaultGraphicsGPULevel](Util.SystemUtil.md#getdefaultgraphicsgpulevel)**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <br> 获取默认GPU画质等级|
| **[getEditorVersion](Util.SystemUtil.md#geteditorversion)**(): `string` <br> 获取编辑器版本号|
| **[getFullEditorVersion](Util.SystemUtil.md#getfulleditorversion)**(): `string` <br> 获取完整编辑器版本号|
| **[getGameId](Util.SystemUtil.md#getgameid)**(): `string` <br> 获取当前游戏GameId|
| **[getGraphicsCPULevel](Util.SystemUtil.md#getgraphicscpulevel)**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <br> 获取当前CPU画质等级|
| **[getGraphicsGPULevel](Util.SystemUtil.md#getgraphicsgpulevel)**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <br> 获取当前GPU画质等级|
| **[getVersion](Util.SystemUtil.md#getversion)**(): `string` <br> 获取当前游戏版本|
| **[isClient](Util.SystemUtil.md#isclient)**(): `boolean` <br> 是否客户端运行|
| **[isMobile](Util.SystemUtil.md#ismobile)**(): `boolean` <br> 判断当前是否是移动端|
| **[isServer](Util.SystemUtil.md#isserver)**(): `boolean` <br> 是否服务器运行|
| **[setGraphicsCPULevel](Util.SystemUtil.md#setgraphicscpulevel)**([`GraphicsLevel`](../enums/Type.GraphicsLevel.md)): `void` <br> 设置当前CPU画质等级|
| **[setGraphicsGPULevel](Util.SystemUtil.md#setgraphicsgpulevel)**([`GraphicsLevel`](../enums/Type.GraphicsLevel.md)): `void` <br> 设置当前GPU画质等级|

## Variables

### currentPlatform  

• `Const` **currentPlatform**: `string` <Badge type="tip" text="other" />

**`Description`**

判定当前程序的运行平台


___

### isPIE  

• `Const` **isPIE**: `boolean` <Badge type="tip" text="other" />

**`Description`**

判定当前程序的运行环境是否为PIE


## Functions

### getCurrentEnv  

▸ **getCurrentEnv**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取当前环境


#### Returns

`string`

当前环境

___

### getDefaultGraphicsCPULevel  

▸ **getDefaultGraphicsCPULevel**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <Badge type="tip" text="other" />

**`Description`**

获取默认CPU画质等级


#### Returns

[`GraphicsLevel`](../enums/Type.GraphicsLevel.md)

默认画质等级

___

### getDefaultGraphicsGPULevel  

▸ **getDefaultGraphicsGPULevel**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <Badge type="tip" text="other" />

**`Description`**

获取默认GPU画质等级


#### Returns

[`GraphicsLevel`](../enums/Type.GraphicsLevel.md)

默认画质等级

___

### getEditorVersion  

▸ **getEditorVersion**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取编辑器版本号


#### Returns

`string`

当前编辑器版本号

___

### getFullEditorVersion  

▸ **getFullEditorVersion**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取完整编辑器版本号


#### Returns

`string`

当前完整编辑器版本号

___

### getGameId  

▸ **getGameId**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取当前游戏GameId


#### Returns

`string`

当前游戏GameId

___

### getGraphicsCPULevel  

▸ **getGraphicsCPULevel**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <Badge type="tip" text="other" />

**`Description`**

获取当前CPU画质等级


#### Returns

[`GraphicsLevel`](../enums/Type.GraphicsLevel.md)

画质等级

___

### getGraphicsGPULevel  

▸ **getGraphicsGPULevel**(): [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) <Badge type="tip" text="other" />

**`Description`**

获取当前GPU画质等级


#### Returns

[`GraphicsLevel`](../enums/Type.GraphicsLevel.md)

画质等级

___

### getVersion  

▸ **getVersion**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取当前游戏版本


#### Returns

`string`

当前游戏版本

___

### isClient  

▸ **isClient**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

是否客户端运行


#### Returns

`boolean`

是否客户端运行

___

### isMobile  

▸ **isMobile**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

判断当前是否是移动端


#### Returns

`boolean`

是否是移动端

___

### isServer  

▸ **isServer**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

是否服务器运行


#### Returns

`boolean`

是否服务器运行

___

### setGraphicsCPULevel  

▸ **setGraphicsCPULevel**(`CPULevel`): `void` <Badge type="tip" text="other" />

**`Description`**

设置当前CPU画质等级


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `CPULevel` | [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) | CPU画质等级 |


___

### setGraphicsGPULevel  

▸ **setGraphicsGPULevel**(`GPULevel`): `void` <Badge type="tip" text="other" />

**`Description`**

设置当前GPU画质等级


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GPULevel` | [`GraphicsLevel`](../enums/Type.GraphicsLevel.md) | GPU画质等级 |

