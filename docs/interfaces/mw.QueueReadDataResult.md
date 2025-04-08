[数据处理](../groups/数据处理.数据处理.md) / QueueReadDataResult

# QueueReadDataResult <Badge type="tip" text="Interface" /> <Score text="QueueReadDataResult" />

数据存储

队列数据结果

## Table of contents

### Properties <Score text="Properties" /> 
| **[code](mw.QueueReadDataResult.md#code)**: [`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)  |
| :-----|
| 状态码|
| **[id](mw.QueueReadDataResult.md#id)**: `string`  |
| 用于给 asyncRemoveData 调用的字符串id，用于指向读取出来的队列项|
| **[values](mw.QueueReadDataResult.md#values)**: `any`[]  |
| 读取出来的队列项的值的数组|

## Properties

### code <Score text="code" /> 

• **code**: [`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)

状态码

___

### id <Score text="id" /> 

• **id**: `string`

用于给 asyncRemoveData 调用的字符串id，用于指向读取出来的队列项

___

### values <Score text="values" /> 

• **values**: `any`[]

读取出来的队列项的值的数组
