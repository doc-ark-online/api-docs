[数据处理](../groups/数据处理.数据处理.md) / MemoryStorageSortedMap

# MemoryStorageSortedMap <Badge type="tip" text="Class" /> <Score text="MemoryStorageSortedMap" />

数据存储

MemoryStorageSortedMap

## Table of contents

### Methods <Score text="Methods" /> 
| **[asyncGetData](mw.MemoryStorageSortedMap.md#asyncgetdata)**(`key`: `string`): `Promise`<[`SortedMapGetDataResult`](../interfaces/mw.SortedMapGetDataResult.md)\> <Badge type="tip" text="server" />  |
| :-----|
| 获得键对应项的值和排序键|
| **[asyncGetRangeData](mw.MemoryStorageSortedMap.md#asyncgetrangedata)**(`isAscending`: `boolean`, `count`: `number`, `lowerSortKey?`: `string`  `number`, `upperSortKey?`: `string`  `number`): `Promise`<[`SortedMapGetRangeDataResult`](../interfaces/mw.SortedMapGetRangeDataResult.md)\> <Badge type="tip" text="server" />  |
| 获得键和排序键范围内的项的值和排序键|
| **[asyncGetRank](mw.MemoryStorageSortedMap.md#asyncgetrank)**(`key`: `string`, `isAscending`: `boolean`): `Promise`<[`SortedMapGetRankResult`](../interfaces/mw.SortedMapGetRankResult.md)\> <Badge type="tip" text="server" />  |
| 获取键在排序映射中的位置|
| **[asyncRemoveData](mw.MemoryStorageSortedMap.md#asyncremovedata)**(`key`: `string`): `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> <Badge type="tip" text="server" />  |
| 删除项|
| **[asyncSetData](mw.MemoryStorageSortedMap.md#asyncsetdata)**(`key`: `string`, `value`: `any`, `sortKey`: `string`  `number`, `expiration?`: `number`): `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> <Badge type="tip" text="server" />  |
| 添加项或覆盖项|

## Methods

### asyncGetData <Score text="asyncGetData" /> 

• **asyncGetData**(`key`): `Promise`<[`SortedMapGetDataResult`](../interfaces/mw.SortedMapGetDataResult.md)\> <Badge type="tip" text="server" />

获得键对应项的值和排序键

#### Parameters

| `key` `string` | 键名称 <br>.SaveStringToFile range: max:128Byte |
| :------ | :------ |

#### Returns

| `Promise`<[`SortedMapGetDataResult`](../interfaces/mw.SortedMapGetDataResult.md)\> | 排序映射数据结果 |
| :------ | :------ |

___

### asyncGetRangeData <Score text="asyncGetRangeData" /> 

• **asyncGetRangeData**(`isAscending`, `count`, `lowerSortKey?`, `upperSortKey?`): `Promise`<[`SortedMapGetRangeDataResult`](../interfaces/mw.SortedMapGetRangeDataResult.md)\> <Badge type="tip" text="server" />

获得键和排序键范围内的项的值和排序键

#### Parameters

| `isAscending` `boolean` | 输出数据的排序方向，为true时升序排列，为false时倒序排列 |
| :------ | :------ |
| `count` `number` | 获得数据的量 <br> range: <max:200> type: number |
| `lowerSortKey?` `string`  `number` | 区间的下限，可以限定sortKey <br> default:"" |
| `upperSortKey?` `string`  `number` | 区间的上限，可以限定sortKey <br> default:"" |

#### Returns

| `Promise`<[`SortedMapGetRangeDataResult`](../interfaces/mw.SortedMapGetRangeDataResult.md)\> | 范围排序映射数据结果 |
| :------ | :------ |

___

### asyncGetRank <Score text="asyncGetRank" /> 

• **asyncGetRank**(`key`, `isAscending`): `Promise`<[`SortedMapGetRankResult`](../interfaces/mw.SortedMapGetRankResult.md)\> <Badge type="tip" text="server" />

获取键在排序映射中的位置

#### Parameters

| `key` `string` | 键名称 <br> range: max:128Byte |
| :------ | :------ |
| `isAscending` `boolean` | 输出数据的排序方向，为true时升序排列，为false时倒序排列 |

#### Returns

| `Promise`<[`SortedMapGetRankResult`](../interfaces/mw.SortedMapGetRankResult.md)\> | 键在排序映射中的位置结果 |
| :------ | :------ |

___

### asyncRemoveData <Score text="asyncRemoveData" /> 

• **asyncRemoveData**(`key`): `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> <Badge type="tip" text="server" />

删除项

#### Parameters

| `key` `string` | 键名称 <br> range: max:128Byte |
| :------ | :------ |

#### Returns

| `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> | 状态码 |
| :------ | :------ |

___

### asyncSetData <Score text="asyncSetData" /> 

• **asyncSetData**(`key`, `value`, `sortKey`, `expiration?`): `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> <Badge type="tip" text="server" />

添加项或覆盖项

#### Parameters

| `key` `string` | 键名称 <br> range: max:128Byte |
| :------ | :------ |
| `value` `any` | 值 <br> range: max:32KB |
| `sortKey` `string`  `number` | 用于排序的键，必须为数字或者字符串 <br> range: max:128Byte |
| `expiration?` `number` | 该项的过期时间，以秒为单位，过期后该项自动从排序映射中删除 <br> default: 259200 range: max:2592000 type: number |

#### Returns

| `Promise`<[`MemoryStorageResultCode`](../enums/mw.MemoryStorageResultCode.md)\> | 状态码 |
| :------ | :------ |
