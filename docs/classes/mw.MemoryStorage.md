[数据处理](../groups/数据处理.数据处理.md) / MemoryStorage

# MemoryStorage <Badge type="tip" text="Class" /> <Score text="MemoryStorage" />

数据存储

MemoryStorage

## Table of contents

### Methods <Score text="Methods" /> 
| **[asyncRemoveSortedMap](mw.MemoryStorage.md#asyncremovesortedmap)**(`sortMap`: [`MemoryStorageSortedMap`](mw.MemoryStorageSortedMap.md)): `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> <Badge type="tip" text="server" />  |
| :-----|
| 删除排序映射|
| **[getDataSize](mw.MemoryStorage.md#getdatasize)**(`value`: `any`): `number` <Badge type="tip" text="server" />  |
| 检查value大小|
| **[getQueue](mw.MemoryStorage.md#getqueue)**(`name`: `string`, `invisibilityTimeout?`: `number`): [`MemoryStorageQueue`](mw.MemoryStorageQueue.md) <Badge type="tip" text="server" />  |
| 创建或获取队列|
| **[getSortedMap](mw.MemoryStorage.md#getsortedmap)**(`name`: `string`): [`MemoryStorageSortedMap`](mw.MemoryStorageSortedMap.md) <Badge type="tip" text="server" />  |
| 创建或获取排序映射|

## Methods

### asyncRemoveSortedMap <Score text="asyncRemoveSortedMap" /> 

• `Static` **asyncRemoveSortedMap**(`sortMap`): `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> <Badge type="tip" text="server" />

删除排序映射

#### Parameters

| `sortMap` [`MemoryStorageSortedMap`](mw.MemoryStorageSortedMap.md) | 想要删除的排序映射 |
| :------ | :------ |

#### Returns

| `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> | 状态码 |
| :------ | :------ |

___

### getDataSize <Score text="getDataSize" /> 

• `Static` **getDataSize**(`value`): `number` <Badge type="tip" text="server" />

检查value大小

#### Parameters

| `value` `any` | 任何值 |
| :------ | :------ |

#### Returns

| `number` | value的大小（如果做压缩了就是压缩后的大小），单位是字节 |
| :------ | :------ |

___

### getQueue <Score text="getQueue" /> 

• `Static` **getQueue**(`name`, `invisibilityTimeout?`): [`MemoryStorageQueue`](mw.MemoryStorageQueue.md) <Badge type="tip" text="server" />

创建或获取队列

#### Parameters

| `name` `string` | 队列名 <br> range: 字符串长度不做限制，但请设置合适的标识。 |
| :------ | :------ |
| `invisibilityTimeout?` `number` | 读取操作的可见性超时时间，以秒为单位。 default:30 range:(0, 600) type: number |

#### Returns

| [`MemoryStorageQueue`](mw.MemoryStorageQueue.md) | 队列 |
| :------ | :------ |

___

### getSortedMap <Score text="getSortedMap" /> 

• `Static` **getSortedMap**(`name`): [`MemoryStorageSortedMap`](mw.MemoryStorageSortedMap.md) <Badge type="tip" text="server" />

创建或获取排序映射

#### Parameters

| `name` `string` | 排序映射名 <br> range: 字符串长度不做限制，但请设置合适的标识。 |
| :------ | :------ |

#### Returns

| [`MemoryStorageSortedMap`](mw.MemoryStorageSortedMap.md) | 排序映射 |
| :------ | :------ |
