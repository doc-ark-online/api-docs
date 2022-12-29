[DataStorage](../modules/DataStorage.DataStorage.md) / DataStorageResultCode

# DataStorageResultCode <Badge type="tip" text="Enumeration" />

**`Description`**

数据储存返回代码

## Table of contents

| Enumeration Members                                                                                                               |
| :-------------------------------------------------------------------------------------------------------------------------------- |
| **[ExceededSizeLimit](DataStorage.DataStorage.DataStorageResultCode.md#exceededsizelimit)** = `2` <br> 数据保存失败：文件大小过大 |
| **[Failure](DataStorage.DataStorage.DataStorageResultCode.md#failure)** = `400` <br> 未知错误失败                                 |
| **[KeyValueError](DataStorage.DataStorage.DataStorageResultCode.md#keyvalueerror)** = `1010` <br> key 或者 Value 格式错误         |
| **[OnlyServerCall](DataStorage.DataStorage.DataStorageResultCode.md#onlyservercall)** = `3` <br> 非法调用 只可服务器端调用        |
| **[RequestIntervalTooClose](DataStorage.DataStorage.DataStorageResultCode.md#requestintervaltooclose)** = `423` <br> 请求间隔错误 |
| **[RequestTooFrequent](DataStorage.DataStorage.DataStorageResultCode.md#requesttoofrequent)** = `424` <br> 请求频率过高           |
| **[Success](DataStorage.DataStorage.DataStorageResultCode.md#success)** = `200` <br> 操作成功                                     |

## Enumeration Members

### ExceededSizeLimit

• **ExceededSizeLimit** = `2`

数据保存失败：文件大小过大

---

### Failure

• **Failure** = `400`

未知错误失败

---

### KeyValueError

• **KeyValueError** = `1010`

key 或者 Value 格式错误

---

### OnlyServerCall

• **OnlyServerCall** = `3`

非法调用 只可服务器端调用

---

### RequestIntervalTooClose

• **RequestIntervalTooClose** = `423`

请求间隔错误

---

### RequestTooFrequent

• **RequestTooFrequent** = `424`

请求频率过高

---

### Success

• **Success** = `200`

操作成功
