[数据处理](../groups/数据处理.数据处理.md) / DataStorageResultCode

# DataStorageResultCode <Badge type="tip" text="Enumeration" /> <Score text="DataStorageResultCode" />

数据储存返回代码

## Table of contents

### Enumeration Members <Score text="Enumeration" /> 
| **[DataLock](mw.DataStorageResultCode.md#datalock)** = ``410``  |
| :----- |
| **[DataNotExist](mw.DataStorageResultCode.md#datanotexist)** = ``1016`` |
| **[Failure](mw.DataStorageResultCode.md#failure)** = ``400`` |
| **[GameIdError](mw.DataStorageResultCode.md#gameiderror)** = ``1011`` |
| **[KeyValueError](mw.DataStorageResultCode.md#keyvalueerror)** = ``1010`` |
| **[OnlyClientCall](mw.DataStorageResultCode.md#onlyclientcall)** = ``403`` |
| **[OnlyServerCall](mw.DataStorageResultCode.md#onlyservercall)** = ``402`` |
| **[ParametersException](mw.DataStorageResultCode.md#parametersexception)** = ``1012`` |
| **[RequestIntervalTooClose](mw.DataStorageResultCode.md#requestintervaltooclose)** = ``423`` |
| **[RequestMethodNotSupported](mw.DataStorageResultCode.md#requestmethodnotsupported)** = ``405`` |
| **[RequestTooFrequent](mw.DataStorageResultCode.md#requesttoofrequent)** = ``424`` |
| **[ResourceException](mw.DataStorageResultCode.md#resourceexception)** = ``1400`` |
| **[ServerException](mw.DataStorageResultCode.md#serverexception)** = ``1964`` |
| **[Success](mw.DataStorageResultCode.md#success)** = ``200`` |
| **[SystemException](mw.DataStorageResultCode.md#systemexception)** = ``1999`` |
| **[TimeOut](mw.DataStorageResultCode.md#timeout)** = ``408`` |

## Enumeration Members

### DataLock <Score text="DataLock" /> 

• **DataLock** = ``410``

某条key获取数据异常时数据被锁定，再次获取此key的数据正常时会解锁

___

### DataNotExist <Score text="DataNotExist" /> 

• **DataNotExist** = ``1016``

数据不存在,服务端通用异常状态码，在数据存储中常见于没有授权数据

___

### Failure <Score text="Failure" /> 

• **Failure** = ``400``

未知错误失败

___

### GameIdError <Score text="GameIdError" /> 

• **GameIdError** = ``1011``

gameId格式错误或后端传参错误

___

### KeyValueError <Score text="KeyValueError" /> 

• **KeyValueError** = ``1010``

key或者value格式错误(或后端参数校验失败)，key大小不能大于50字节，value大小不能大于64kb，且本地存储的总数据大小不可以超过5mb

___

### OnlyClientCall <Score text="OnlyClientCall" /> 

• **OnlyClientCall** = ``403``

非法调用 只可客户端调用

___

### OnlyServerCall <Score text="OnlyServerCall" /> 

• **OnlyServerCall** = ``402``

非法调用 只可服务端调用

___

### ParametersException <Score text="ParametersException" /> 

• **ParametersException** = ``1012``

参数不符合业务所需参数格式

___

### RequestIntervalTooClose <Score text="RequestIntervalTooClose" /> 

• **RequestIntervalTooClose** = ``423``

请求间隔错误

___

### RequestMethodNotSupported <Score text="RequestMethodNotSupported" /> 

• **RequestMethodNotSupported** = ``405``

请求Method错误

___

### RequestTooFrequent <Score text="RequestTooFrequent" /> 

• **RequestTooFrequent** = ``424``

请求频率过高

___

### ResourceException <Score text="ResourceException" /> 

• **ResourceException** = ``1400``

没有访问对应资源的权限

___

### ServerException <Score text="ServerException" /> 

• **ServerException** = ``1964``

服务端调用的远程服务异常

___

### Success <Score text="Success" /> 

• **Success** = ``200``

操作成功

___

### SystemException <Score text="SystemException" /> 

• **SystemException** = ``1999``

系统异常

___

### TimeOut <Score text="TimeOut" /> 

• **TimeOut** = ``408``

请求超时未回调
