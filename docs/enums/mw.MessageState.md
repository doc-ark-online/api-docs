[Datatype](../groups/Core.Datatype.md) / MessageState

# MessageState <Badge type="tip" text="Enumeration" /> <Score text="MessageState" />

发送消息的状态

## Table of contents

| Enumeration Members |
| :-----|
| **[ContentError](mw.MessageState.md#contenterror)** = ``3307002`` <br> |
| **[Error](mw.MessageState.md#error)** = ``-1`` <br> |
| **[LabelError](mw.MessageState.md#labelerror)** = ``3307003`` <br> |
| **[SizeError](mw.MessageState.md#sizeerror)** = ``3307004`` <br> |
| **[Success](mw.MessageState.md#success)** = ``200`` <br> |

## Enumeration Members

### ContentError <Score text="ContentError" /> 

• **ContentError** = ``3307002``

要发送的文本有违规内容

___

### Error <Score text="Error" /> 

• **Error** = ``-1``

其它原因导致发送失败

___

### LabelError <Score text="LabelError" /> 

• **LabelError** = ``3307003``

文档中有错误的富文本标签

___

### SizeError <Score text="SizeError" /> 

• **SizeError** = ``3307004``

发送的文本中纯文字的长度大于规定长度

___

### Success <Score text="Success" /> 

• **Success** = ``200``

消息发送成功
