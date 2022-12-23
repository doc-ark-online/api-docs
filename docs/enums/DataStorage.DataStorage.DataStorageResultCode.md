[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [DataStorage](../modules/DataStorage.md) / [DataStorage](../modules/DataStorage.DataStorage.md) / DataStorageResultCode

# Enumeration: DataStorageResultCode

[DataStorage](../modules/DataStorage.md).[DataStorage](../modules/DataStorage.DataStorage.md).DataStorageResultCode

**`Description`**

数据储存返回代码

## Table of contents

### Enumeration Members

- [ExceededSizeLimit](DataStorage.DataStorage.DataStorageResultCode.md#exceededsizelimit)
- [Failure](DataStorage.DataStorage.DataStorageResultCode.md#failure)
- [KeyValueError](DataStorage.DataStorage.DataStorageResultCode.md#keyvalueerror)
- [OnlyServerCall](DataStorage.DataStorage.DataStorageResultCode.md#onlyservercall)
- [RequestInteralTooClose](DataStorage.DataStorage.DataStorageResultCode.md#requestinteraltooclose)
- [RequestTooFrequent](DataStorage.DataStorage.DataStorageResultCode.md#requesttoofrequent)
- [Sucess](DataStorage.DataStorage.DataStorageResultCode.md#sucess)

## Enumeration Members

### ExceededSizeLimit

• **ExceededSizeLimit** = ``2``

数据保存失败：文件大小过大

#### Defined in

DataStorage/index.d.ts:13

___

### Failure

• **Failure** = ``400``

未知错误失败

#### Defined in

DataStorage/index.d.ts:11

___

### KeyValueError

• **KeyValueError** = ``1010``

key或者Value格式错误

#### Defined in

DataStorage/index.d.ts:21

___

### OnlyServerCall

• **OnlyServerCall** = ``3``

非法调用 只可服务器端调用

#### Defined in

DataStorage/index.d.ts:15

___

### RequestInteralTooClose

• **RequestInteralTooClose** = ``423``

请求间隔错误

#### Defined in

DataStorage/index.d.ts:17

___

### RequestTooFrequent

• **RequestTooFrequent** = ``424``

请求频率过高

#### Defined in

DataStorage/index.d.ts:19

___

### Sucess

• **Sucess** = ``200``

操作成功

#### Defined in

DataStorage/index.d.ts:9
