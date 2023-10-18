[DATA](../groups/Core.DATA.md) / DataStorageResultCode

# DataStorageResultCode <Badge type="tip" text="Enumeration" /> <Score text="DataStorageResultCode" />

<span class="content-big">

数据储存返回代码

</span>

## Table of contents

### Enumeration Members <Score text="Enumeration" /> 
| **[Failure](mw.DataStorageResultCode.md#failure)** = ``400``  |
| :----- |
| **[GameIdError](mw.DataStorageResultCode.md#gameiderror)** = ``1011`` |
| **[KeyValueError](mw.DataStorageResultCode.md#keyvalueerror)** = ``1010`` |
| **[OnlyServerCall](mw.DataStorageResultCode.md#onlyservercall)** = ``402`` |
| **[RequestIntervalTooClose](mw.DataStorageResultCode.md#requestintervaltooclose)** = ``423`` |
| **[RequestTooFrequent](mw.DataStorageResultCode.md#requesttoofrequent)** = ``424`` |
| **[Success](mw.DataStorageResultCode.md#success)** = ``200`` |
| **[TimeOut](mw.DataStorageResultCode.md#timeout)** = ``408`` |

## Enumeration Members

### Failure <Score text="Failure" /> 

• **Failure** = ``400``

未知错误失败

___

### GameIdError <Score text="GameIdError" /> 

• **GameIdError** = ``1011``

gameId格式错误

___

### KeyValueError <Score text="KeyValueError" /> 

• **KeyValueError** = ``1010``

key或者value格式错误，key大小不能大于50字节，value大小不能大于64kb

___

### OnlyServerCall <Score text="OnlyServerCall" /> 

• **OnlyServerCall** = ``402``

非法调用 只可服务器端调用

___

### RequestIntervalTooClose <Score text="RequestIntervalTooClose" /> 

• **RequestIntervalTooClose** = ``423``

请求间隔错误

___

### RequestTooFrequent <Score text="RequestTooFrequent" /> 

• **RequestTooFrequent** = ``424``

请求频率过高

___

### Success <Score text="Success" /> 

• **Success** = ``200``

操作成功

___

### TimeOut <Score text="TimeOut" /> 

• **TimeOut** = ``408``

请求超时未回调
