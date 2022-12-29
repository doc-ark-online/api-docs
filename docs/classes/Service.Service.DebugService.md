[Service](../modules/Service.Service.md) / DebugService

# DebugService <Badge type="tip" text="Class" />

**`Instance`**

**`Description`**

debug 调试服务

**`Precautions`**

单例类，请使用 instance 获取对象

## Table of contents

| Methods                                                                                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[getHeapStatistics](Service.Service.DebugService.md#getheapstatistics)**(): `HeapStatistics` <br> 获取当前项目所有 TS 脚本内存占用                 |
| **[getInstance](Service.Service.DebugService.md#getinstance)**(): [`DebugService`](Service.Service.DebugService.md) <br> 获取 debug 调试服务全局实例 |

## Methods

### getHeapStatistics

▸ `Static` **getHeapStatistics**(): `HeapStatistics`

**`Description`**

获取当前项目所有 TS 脚本内存占用

**`Effect`**

调用端生效

#### Returns

`HeapStatistics`

HeapStatistics 内存数据

---

### getInstance

▸ `Static` **getInstance**(): [`DebugService`](Service.Service.DebugService.md)

**`Description`**

获取 debug 调试服务全局实例

**`Effect`**

调用端生效

#### Returns

[`DebugService`](Service.Service.DebugService.md)

debug 调试服务全局实例
