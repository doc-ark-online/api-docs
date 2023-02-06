[Service](../modules/Service.Service.md) / DebugService

# DebugService <Badge type="tip" text="Class" /> <Score text="DebugService" />

**`Instance`**

debug调试服务

::: warning Precautions

单例类，请使用instance获取对象

:::

## Table of contents

| Methods |
| :-----|
| **[getHeapStatistics](Service.DebugService.md#getheapstatistics)**(): `HeapStatistics` <br> 获取当前项目所有TS脚本内存占用|
| **[getInstance](Service.DebugService.md#getinstance)**(): [`DebugService`](Service.DebugService.md) <br> 获取debug调试服务全局实例|

## Methods

### getHeapStatistics <Score text="getHeapStatistics" /> 

• `Static` **getHeapStatistics**(): `HeapStatistics` <Badge type="tip" text="other" />

获取当前项目所有TS脚本内存占用


#### Returns

`HeapStatistics`

HeapStatistics 内存数据

___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`DebugService`](Service.DebugService.md) <Badge type="tip" text="other" />

获取debug调试服务全局实例


#### Returns

[`DebugService`](Service.DebugService.md)

debug调试服务全局实例
