[数据处理](../groups/数据处理.数据处理.md) / MemoryStorageQueue

# MemoryStorageQueue <Badge type="tip" text="Class" /> <Score text="MemoryStorageQueue" />

数据存储

MemoryStorageQueue

## Table of contents

### Methods <Score text="Methods" /> 
| **[asyncAddData](mw.MemoryStorageQueue.md#asyncadddata)**(`value`: `any`, `expiration?`: `number`, `priority?`: `number`): `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> <Badge type="tip" text="server" />  |
| :-----|
| 添加项|
| **[asyncReadData](mw.MemoryStorageQueue.md#asyncreaddata)**(`count`: `number`, `allOrNothing?`: `boolean`): `Promise`<[`QueueReadDataResult`](../interfaces/mw.QueueReadDataResult.md)\> <Badge type="tip" text="server" />  |
| 从队首读出固定数量的项|
| **[asyncRemoveData](mw.MemoryStorageQueue.md#asyncremovedata)**(`id`: `string`): `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> <Badge type="tip" text="server" />  |
| 删除项|

## Methods

### asyncAddData <Score text="asyncAddData" /> 

• **asyncAddData**(`value`, `expiration?`, `priority?`): `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> <Badge type="tip" text="server" />

添加项

#### Parameters

| `value` `any` | 值 <br> range: max:32KB |
| :------ | :------ |
| `expiration?` `number` | 该项的过期时间，以秒为单位，过期后该项自动从排序映射中删除 <br> default: 259200, range: max:2592000 type: number |
| `priority?` `number` | 队列项的优先级。<br> default:0 range:无限制 type: number |

#### Returns

| `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> | 状态码 |
| :------ | :------ |

___

### asyncReadData <Score text="asyncReadData" /> 

• **asyncReadData**(`count`, `allOrNothing?`): `Promise`<[`QueueReadDataResult`](../interfaces/mw.QueueReadDataResult.md)\> <Badge type="tip" text="server" />

从队首读出固定数量的项

#### Parameters

| `count` `number` | 需要读出的项数量 range:(0, 50000] type: number |
| :------ | :------ |
| `allOrNothing?` `boolean` | 当count数量大于队列剩余数量时，如果allOrNothing为true，则不返回任何值；如果为false，则返回剩余的所有项。 default:false |

#### Returns

| `Promise`<[`QueueReadDataResult`](../interfaces/mw.QueueReadDataResult.md)\> | 队列项数据结果 |
| :------ | :------ |

___

### asyncRemoveData <Score text="asyncRemoveData" /> 

• **asyncRemoveData**(`id`): `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> <Badge type="tip" text="server" />

删除项

#### Parameters

| `id` `string` | 由asyncReadData得到的指向要删除的数据的指针 range: 无限制 |
| :------ | :------ |

#### Returns

| `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> | 状态码 |
| :------ | :------ |
