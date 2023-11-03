[DATATYPE](../groups/DATATYPE.DATATYPE.md) / TeleportStatus

# TeleportStatus <Badge type="tip" text="Enumeration" /> <Score text="TeleportStatus" />

传送状态

## Table of contents

### Enumeration Members <Score text="Enumeration" /> 
| **[error](mw.TeleportStatus.md#error)** = ``"[error](mw.TeleportStatus.md#error)"``  |
| :----- |
| **[ignored](mw.TeleportStatus.md#ignored)** = ``"[ignored](mw.TeleportStatus.md#ignored)"`` |
| **[success](mw.TeleportStatus.md#success)** = ``"[success](mw.TeleportStatus.md#success)"`` |
| **[timeout](mw.TeleportStatus.md#timeout)** = ``"[timeout](mw.TeleportStatus.md#timeout)"`` |

## Enumeration Members

### error <Score text="error" /> 

• **error** = ``"error"``

出错。表示传送服务有报错，或者提供的数据不符合要求。

___

### ignored <Score text="ignored" /> 

• **ignored** = ``"ignored"``

已经有相同参数的请求在处理中，本次请求被忽略。请等待之前请求完成或者超时后再重试

___

### success <Score text="success" /> 

• **success** = ``"success"``

成功。表示传送依赖的服务均正常，会继续完成传送过程。

___

### timeout <Score text="timeout" /> 

• **timeout** = ``"timeout"``

超时。表示传送依赖的服务没回调，可能是网络波动导致的，可以重新发起传送。
