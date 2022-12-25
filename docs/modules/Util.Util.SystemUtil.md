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

Util/index.d.ts:623

---

### isPIE

• `Const` **isPIE**: `boolean`

**`Description`**

判定当前程序的运行环境是否为 PIE

**`Effect`**

调用端生效

#### Defined in

Util/index.d.ts:618

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

Util/index.d.ts:635

---

### getDefaultGraphicsCPULevel

▸ **getDefaultGraphicsCPULevel**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

**`Description`**

获取默认 CPU 画质等级

**`Effect`**

只在客户端调用生效

#### Returns

[`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

默认画质等级

#### Defined in

Util/index.d.ts:665

---

### getDefaultGraphicsGPULevel

▸ **getDefaultGraphicsGPULevel**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

**`Description`**

获取默认 GPU 画质等级

**`Effect`**

只在客户端调用生效

#### Returns

[`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

默认画质等级

#### Defined in

Util/index.d.ts:671

---

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

Util/index.d.ts:647

---

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

Util/index.d.ts:641

---

### getGameId

▸ **getGameId**(): `string`

**`Description`**

获取当前游戏 GameId

**`Effect`**

调用端生效

#### Returns

`string`

当前游戏 GameId

#### Defined in

Util/index.d.ts:689

---

### getGraphicsCPULevel

▸ **getGraphicsCPULevel**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

**`Description`**

获取当前 CPU 画质等级

**`Effect`**

只在客户端调用生效

#### Returns

[`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

画质等级

#### Defined in

Util/index.d.ts:653

---

### getGraphicsGPULevel

▸ **getGraphicsGPULevel**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

**`Description`**

获取当前 GPU 画质等级

**`Effect`**

只在客户端调用生效

#### Returns

[`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)

画质等级

#### Defined in

Util/index.d.ts:659

---

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

Util/index.d.ts:695

---

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

Util/index.d.ts:607

---

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

Util/index.d.ts:629

---

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

Util/index.d.ts:613

---

### setGraphicsCPULevel

▸ **setGraphicsCPULevel**(`CPULevel`): `void`

**`Description`**

设置当前 CPU 画质等级

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                   | Description        |
| :--------- | :----------------------------------------------------- | :----------------- |
| `CPULevel` | [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md) | usage:CPU 画质等级 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:677

---

### setGraphicsGPULevel

▸ **setGraphicsGPULevel**(`GPULevel`): `void`

**`Description`**

设置当前 GPU 画质等级

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                   | Description        |
| :--------- | :----------------------------------------------------- | :----------------- |
| `GPULevel` | [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md) | usage:GPU 画质等级 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:683
