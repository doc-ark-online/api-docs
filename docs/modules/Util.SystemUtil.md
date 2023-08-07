[Util](Util.Util.md) / SystemUtil

# SystemUtil <Badge type="tip" text="Namespace" /> <Score text="SystemUtil" />

## Table of contents

| Variables |
| :-----|
| **[currentPlatform](Util.SystemUtil.md#currentplatform)**: `string` <br> 判定当前程序的运行平台,返回值参考Type.RuntimePlatform|
| **[isPIE](Util.SystemUtil.md#ispie)**: `boolean` <br> 判定当前程序的运行环境是否为PIE|

| Functions |
| :-----|
| **[getCurrentEnv](Util.SystemUtil.md#getcurrentenv)**(): `string` <br> 获取当前环境|
| **[getEditorVersion](Util.SystemUtil.md#geteditorversion)**(): `string` <br> 获取编辑器版本号|
| **[getFullEditorVersion](Util.SystemUtil.md#getfulleditorversion)**(): `string` <br> 获取完整编辑器版本号|
| **[getGameId](Util.SystemUtil.md#getgameid)**(): `string` <br> 获取当前游戏GameId|
| **[getVersion](Util.SystemUtil.md#getversion)**(): `string` <br> 获取当前游戏版本|
| **[isClient](Util.SystemUtil.md#isclient)**(): `boolean` <br> 是否客户端运行|
| **[isMobile](Util.SystemUtil.md#ismobile)**(): `boolean` <br> 判断当前是否是移动端|
| **[isServer](Util.SystemUtil.md#isserver)**(): `boolean` <br> 是否服务器运行|

## Variables

### currentPlatform <Score text="currentPlatform" /> 

• `Const` **currentPlatform**: `string` 

判定当前程序的运行平台,返回值参考Type.RuntimePlatform


使用示例:调用方法
```ts
const currentPlatform = SystemUtil.currentPlatform;
console.log(`currentPlatform: ${currentPlatform}`);
// Windows
```

___

### isPIE <Score text="isPIE" /> 

• `Const` **isPIE**: `boolean` 

判定当前程序的运行环境是否为PIE


## Functions

### getCurrentEnv <Score text="getCurrentEnv" /> 

• **getCurrentEnv**(): `string` 

获取当前环境


使用示例:调用方法
```ts
const currentEnv = SystemUtil.getCurrentEnv();
console.log(`currentEnv: ${currentEnv}`);
// Online
```

#### Returns

`string`

当前环境,返回值包含(Dev/Test/Meta/Pre/Online/dev-oversea/test-oversea/pre-oversea/online-oversea/tc-sa-saopaulo-playza)

___

### getEditorVersion <Score text="getEditorVersion" /> 

• **getEditorVersion**(): `string` 

获取编辑器版本号


#### Returns

`string`

当前编辑器版本号

___

### getFullEditorVersion <Score text="getFullEditorVersion" /> 

• **getFullEditorVersion**(): `string` 

获取完整编辑器版本号


#### Returns

`string`

当前完整编辑器版本号

___

### getGameId <Score text="getGameId" /> 

• **getGameId**(): `string` 

获取当前游戏GameId


#### Returns

`string`

当前游戏GameId

___

### getVersion <Score text="getVersion" /> 

• **getVersion**(): `string` 

获取当前游戏版本


#### Returns

`string`

当前游戏版本

___

### isClient <Score text="isClient" /> 

• **isClient**(): `boolean` 

是否客户端运行


#### Returns

`boolean`

是否客户端运行

___

### isMobile <Score text="isMobile" /> 

• **isMobile**(): `boolean` 

判断当前是否是移动端


#### Returns

`boolean`

是否是移动端

___

### isServer <Score text="isServer" /> 

• **isServer**(): `boolean` 

是否服务器运行


#### Returns

`boolean`

是否服务器运行
