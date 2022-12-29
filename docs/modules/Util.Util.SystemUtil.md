[Util](Util.Util.md) / SystemUtil

# SystemUtil <Badge type="tip" text="Namespace" />

## Table of contents

| Variables |
| :-----|
| **[currentPlatform](Util.Util.SystemUtil.md#currentplatform)**: `string` <br> 判定当前程序的运行平台|
| **[isPIE](Util.Util.SystemUtil.md#ispie)**: `boolean` <br> 判定当前程序的运行环境是否为PIE|

| Functions |
| :-----|
| **[getCurrentEnv](Util.Util.SystemUtil.md#getcurrentenv)**(): `string` <br> 获取当前环境|
| **[getDefaultGraphicsCPULevel](Util.Util.SystemUtil.md#getdefaultgraphicscpulevel)**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md) <br> 获取默认CPU画质等级|
| **[getDefaultGraphicsGPULevel](Util.Util.SystemUtil.md#getdefaultgraphicsgpulevel)**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md) <br> 获取默认GPU画质等级|
| **[getEditorVersion](Util.Util.SystemUtil.md#geteditorversion)**(): `string` <br> 获取编辑器版本号|
| **[getFullEditorVersion](Util.Util.SystemUtil.md#getfulleditorversion)**(): `string` <br> 获取完整编辑器版本号|
| **[getGameId](Util.Util.SystemUtil.md#getgameid)**(): `string` <br> 获取当前游戏GameId|
| **[getGraphicsCPULevel](Util.Util.SystemUtil.md#getgraphicscpulevel)**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md) <br> 获取当前CPU画质等级|
| **[getGraphicsGPULevel](Util.Util.SystemUtil.md#getgraphicsgpulevel)**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md) <br> 获取当前GPU画质等级|
| **[getVersion](Util.Util.SystemUtil.md#getversion)**(): `string` <br> 获取当前游戏版本|
| **[isClient](Util.Util.SystemUtil.md#isclient)**(): `boolean` <br> 是否客户端运行|
| **[isMobile](Util.Util.SystemUtil.md#ismobile)**(): `boolean` <br> 判断当前是否是移动端|
| **[isServer](Util.Util.SystemUtil.md#isserver)**(): `boolean` <br> 是否服务器运行|
| **[setGraphicsCPULevel](Util.Util.SystemUtil.md#setgraphicscpulevel)**([`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)): `void` <br> 设置当前CPU画质等级|
| **[setGraphicsGPULevel](Util.Util.SystemUtil.md#setgraphicsgpulevel)**([`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)): `void` <br> 设置当前GPU画质等级|

## Variables

### currentPlatform

• `Const` **currentPlatform**: `string`

**`Description`**

判定当前程序的运行平台

**`Effect`**

调用端生效

___

### isPIE

• `Const` **isPIE**: `boolean`

**`Description`**

判定当前程序的运行环境是否为PIE

**`Effect`**

调用端生效

## Functions

### getCurrentEnv

▸ **getCurrentEnv**(): `string`

**`Description`**

获取当前环境

**`Effect`**

调用端生效

#### Returns

`string`

当前环境

___

### getDefaultGraphicsCPULevel

▸ **getDefaultGraphicsCPULevel**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

**`Description`**

获取默认CPU画质等级

**`Effect`**

只在客户端调用生效

#### Returns

[`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

默认画质等级

___

### getDefaultGraphicsGPULevel

▸ **getDefaultGraphicsGPULevel**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

**`Description`**

获取默认GPU画质等级

**`Effect`**

只在客户端调用生效

#### Returns

[`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

默认画质等级

___

### getEditorVersion

▸ **getEditorVersion**(): `string`

**`Description`**

获取编辑器版本号

**`Effect`**

调用端生效

#### Returns

`string`

当前编辑器版本号

___

### getFullEditorVersion

▸ **getFullEditorVersion**(): `string`

**`Description`**

获取完整编辑器版本号

**`Effect`**

调用端生效

#### Returns

`string`

当前完整编辑器版本号

___

### getGameId

▸ **getGameId**(): `string`

**`Description`**

获取当前游戏GameId

**`Effect`**

调用端生效

#### Returns

`string`

当前游戏GameId

___

### getGraphicsCPULevel

▸ **getGraphicsCPULevel**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

**`Description`**

获取当前CPU画质等级

**`Effect`**

只在客户端调用生效

#### Returns

[`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

画质等级

___

### getGraphicsGPULevel

▸ **getGraphicsGPULevel**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

**`Description`**

获取当前GPU画质等级

**`Effect`**

只在客户端调用生效

#### Returns

[`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

画质等级

___

### getVersion

▸ **getVersion**(): `string`

**`Description`**

获取当前游戏版本

**`Effect`**

调用端生效

#### Returns

`string`

当前游戏版本

___

### isClient

▸ **isClient**(): `boolean`

**`Description`**

是否客户端运行

**`Effect`**

调用端生效

#### Returns

`boolean`

是否客户端运行

___

### isMobile

▸ **isMobile**(): `boolean`

**`Description`**

判断当前是否是移动端

**`Effect`**

调用端生效

#### Returns

`boolean`

是否是移动端

___

### isServer

▸ **isServer**(): `boolean`

**`Description`**

是否服务器运行

**`Effect`**

调用端生效

#### Returns

`boolean`

是否服务器运行

___

### setGraphicsCPULevel

▸ **setGraphicsCPULevel**(`CPULevel`): `void`

**`Description`**

设置当前CPU画质等级

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `CPULevel` | [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md) | CPU画质等级 |

#### Returns

`void`

___

### setGraphicsGPULevel

▸ **setGraphicsGPULevel**(`GPULevel`): `void`

**`Description`**

设置当前GPU画质等级

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GPULevel` | [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md) | GPU画质等级 |

#### Returns

`void`
