[数据处理](../groups/数据处理.数据处理.md) / MemoryStorageResultCode

# MemoryStorageResultCode <Badge type="tip" text="Enumeration" /> <Score text="MemoryStorageResultCode" />

数据存储

内存存储结果状态码

## Table of contents

### Enumeration Members <Score text="Enumeration" /> 
| **[Failure](mw.MemoryStorageResultCode.md#failure)** = ``400``  |
| :----- |
| **[GameStuctureCountLimitExceeded](mw.MemoryStorageResultCode.md#gamestucturecountlimitexceeded)** = ``103`` |
| **[KeyNotFound](mw.MemoryStorageResultCode.md#keynotfound)** = ``401`` |
| **[KeyValueError](mw.MemoryStorageResultCode.md#keyvalueerror)** = ``1010`` |
| **[LisenServerNotAvailable](mw.MemoryStorageResultCode.md#lisenservernotavailable)** = ``603`` |
| **[OnlyServerCall](mw.MemoryStorageResultCode.md#onlyservercall)** = ``402`` |
| **[RateLimitExceeded](mw.MemoryStorageResultCode.md#ratelimitexceeded)** = ``100`` |
| **[RequestTooFrequent](mw.MemoryStorageResultCode.md#requesttoofrequent)** = ``424`` |
| **[SetTimeoutError](mw.MemoryStorageResultCode.md#settimeouterror)** = ``1070`` |
| **[StructureKeyCountLimitExceeded](mw.MemoryStorageResultCode.md#structurekeycountlimitexceeded)** = ``101`` |
| **[StructureTotalSizeLimitExceeded](mw.MemoryStorageResultCode.md#structuretotalsizelimitexceeded)** = ``102`` |
| **[Success](mw.MemoryStorageResultCode.md#success)** = ``200`` |
| **[TimeOut](mw.MemoryStorageResultCode.md#timeout)** = ``408`` |
| **[TooEarlyCall](mw.MemoryStorageResultCode.md#tooearlycall)** = ``403`` |

## Enumeration Members

### Failure <Score text="Failure" /> 

• **Failure** = ``400``

未知错误失败

___

### GameStuctureCountLimitExceeded <Score text="GameStuctureCountLimitExceeded" /> 

• **GameStuctureCountLimitExceeded** = ``103``

游戏创建的数据结构数量超出上限

___

### KeyNotFound <Score text="KeyNotFound" /> 

• **KeyNotFound** = ``401``

没有找到该键

___

### KeyValueError <Score text="KeyValueError" /> 

• **KeyValueError** = ``1010``

key或者value格式错误，或者大小超出限制，key大小不能大于128字节，value大小不能大于32kb

___

### LisenServerNotAvailable <Score text="LisenServerNotAvailable" /> 

• **LisenServerNotAvailable** = ``603``

不允许lisenServer调用

___

### OnlyServerCall <Score text="OnlyServerCall" /> 

• **OnlyServerCall** = ``402``

该接口只允许服务端调用

___

### RateLimitExceeded <Score text="RateLimitExceeded" /> 

• **RateLimitExceeded** = ``100``

API请求速率超出限制

___

### RequestTooFrequent <Score text="RequestTooFrequent" /> 

• **RequestTooFrequent** = ``424``

请求过于频繁

___

### SetTimeoutError <Score text="SetTimeoutError" /> 

• **SetTimeoutError** = ``1070``

设置超时超过了3888000秒

___

### StructureKeyCountLimitExceeded <Score text="StructureKeyCountLimitExceeded" /> 

• **StructureKeyCountLimitExceeded** = ``101``

单个数据结构kv数量超出上限

___

### StructureTotalSizeLimitExceeded <Score text="StructureTotalSizeLimitExceeded" /> 

• **StructureTotalSizeLimitExceeded** = ``102``

单个数据结构占用内存超出上限

___

### Success <Score text="Success" /> 

• **Success** = ``200``

操作成功

___

### TimeOut <Score text="TimeOut" /> 

• **TimeOut** = ``408``

请求超时

___

### TooEarlyCall <Score text="TooEarlyCall" /> 

• **TooEarlyCall** = ``403``

调用过早，MemoryStorage未初始化完成
