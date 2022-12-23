[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Util](Util.md) / [Util](Util.Util.md) / SystemUtil

# Namespace: SystemUtil

[Util](Util.md).[Util](Util.Util.md).SystemUtil

## Table of contents

### Variables

- [currentPlatform](Util.Util.SystemUtil.md#currentplatform)
- [isPIE](Util.Util.SystemUtil.md#ispie)

### Functions

- [getCurrentEnv](Util.Util.SystemUtil.md#getcurrentenv)
- [getDefaultGraphicsCPULevel](Util.Util.SystemUtil.md#getdefaultgraphicscpulevel)
- [getDefaultGraphicsGPULevel](Util.Util.SystemUtil.md#getdefaultgraphicsgpulevel)
- [getEditorVersion](Util.Util.SystemUtil.md#geteditorversion)
- [getFullEditorVersion](Util.Util.SystemUtil.md#getfulleditorversion)
- [getGameId](Util.Util.SystemUtil.md#getgameid)
- [getGraphicsCPULevel](Util.Util.SystemUtil.md#getgraphicscpulevel)
- [getGraphicsGPULevel](Util.Util.SystemUtil.md#getgraphicsgpulevel)
- [getVersion](Util.Util.SystemUtil.md#getversion)
- [isClient](Util.Util.SystemUtil.md#isclient)
- [isMobile](Util.Util.SystemUtil.md#ismobile)
- [isServer](Util.Util.SystemUtil.md#isserver)
- [setGraphicsCPULevel](Util.Util.SystemUtil.md#setgraphicscpulevel)
- [setGraphicsGPULevel](Util.Util.SystemUtil.md#setgraphicsgpulevel)

## Variables

### currentPlatform

• `Const` **currentPlatform**: `string`

**`Description`**

判定当前程序的运行平台

**`Effect`**

调用端生效

#### Defined in

Util/index.d.ts:411

___

### isPIE

• `Const` **isPIE**: `boolean`

**`Description`**

判定当前程序的运行环境是否为PIE

**`Effect`**

调用端生效

#### Defined in

Util/index.d.ts:406

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

#### Defined in

Util/index.d.ts:423

___

### getDefaultGraphicsCPULevel

▸ **getDefaultGraphicsCPULevel**(): [`GFXLevel`](../enums/Type.Type.GFXLevel.md)

**`Description`**

获取默认CPU画质等级

**`Effect`**

只在客户端调用生效

#### Returns

[`GFXLevel`](../enums/Type.Type.GFXLevel.md)

默认画质等级

#### Defined in

Util/index.d.ts:453

___

### getDefaultGraphicsGPULevel

▸ **getDefaultGraphicsGPULevel**(): [`GFXLevel`](../enums/Type.Type.GFXLevel.md)

**`Description`**

获取默认GPU画质等级

**`Effect`**

只在客户端调用生效

#### Returns

[`GFXLevel`](../enums/Type.Type.GFXLevel.md)

默认画质等级

#### Defined in

Util/index.d.ts:459

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

#### Defined in

Util/index.d.ts:435

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

#### Defined in

Util/index.d.ts:429

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

#### Defined in

Util/index.d.ts:477

___

### getGraphicsCPULevel

▸ **getGraphicsCPULevel**(): [`GFXLevel`](../enums/Type.Type.GFXLevel.md)

**`Description`**

获取当前CPU画质等级

**`Effect`**

只在客户端调用生效

#### Returns

[`GFXLevel`](../enums/Type.Type.GFXLevel.md)

画质等级

#### Defined in

Util/index.d.ts:441

___

### getGraphicsGPULevel

▸ **getGraphicsGPULevel**(): [`GFXLevel`](../enums/Type.Type.GFXLevel.md)

**`Description`**

获取当前GPU画质等级

**`Effect`**

只在客户端调用生效

#### Returns

[`GFXLevel`](../enums/Type.Type.GFXLevel.md)

画质等级

#### Defined in

Util/index.d.ts:447

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

#### Defined in

Util/index.d.ts:483

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

#### Defined in

Util/index.d.ts:395

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

#### Defined in

Util/index.d.ts:417

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

#### Defined in

Util/index.d.ts:401

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
| `CPULevel` | [`GFXLevel`](../enums/Type.Type.GFXLevel.md) | usage:CPU画质等级 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:465

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
| `GPULevel` | [`GFXLevel`](../enums/Type.Type.GFXLevel.md) | usage:GPU画质等级 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:471
