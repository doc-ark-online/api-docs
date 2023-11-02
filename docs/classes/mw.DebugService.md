[DEBUGGING](../groups/DEBUGGING.DEBUGGING.md) / DebugService

# DebugService <Badge type="tip" text="Class" /> <Score text="DebugService" />

**`Instance`**

debug调试服务

## Table of contents

### Methods <Score text="Methods" /> 
| **[getHeapStatistics](mw.DebugService.md#getheapstatistics)**(): `HeapStatistics`  |
| :-----|
| 获取当前项目所有TS脚本内存占用|

## Methods

### getHeapStatistics <Score text="getHeapStatistics" /> 

• `Static` **getHeapStatistics**(): `HeapStatistics` 

获取当前项目所有TS脚本内存占用

#### Returns

| `HeapStatistics` | HeapStatistics 内存数据 |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例:创建一个名为DebugExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，客户端及服务端日志会每2秒输出ts内存的使用情况
</span>

```ts
@Component
export default class DebugExample extends Script {

    protected onStart(): void {
        TimeUtil.setInterval(() => {
            const heapStatistics = DebugService.getHeapStatistics();
            console.log("---------当前ts内存使用情况---------");
            console.log("总堆大小", heapStatistics.totalHeapSize);
            console.log("可执行的总堆大小", heapStatistics.totalHeapSizeExecutable);
            console.log("已使用堆大小", heapStatistics.usedHeapSize);
            console.log("动态分配的内存", heapStatistics.memoryAllocated ? heapStatistics.memoryAllocated : 0);
            console.log("动态内存分配峰值 ", heapStatistics.peakMemoryAllocated ? heapStatistics.peakMemoryAllocated : 0);
        }, 2);
    }
}
```
