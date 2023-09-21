[UI](../groups/Core.UI.md) / KeyEvent

# KeyEvent <Badge type="tip" text="Class" /> <Score text="KeyEvent" />

<p class="content-big"> 按键事件 </p>

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new KeyEvent**()  |
| :-----|
| 默认构造|

### Methods <Score text="Methods" /> 
| **[getKey](mw.KeyEvent.md#getkey)**(): [`KeyEvent`](mw.KeyEvent.md)  |
| :-----|
| 获取按下的键|
| **[getUserIndex](mw.KeyEvent.md#getuserindex)**(): `number`  |
| 获取事件触发玩家index|
| **[toInputEvent](mw.KeyEvent.md#toinputevent)**(): [`InputEvent`](mw.InputEvent.md)  |
| 转化为 InputEvent*|

默认构造

## Methods

### getKey <Score text="getKey" /> 

• **getKey**(): [`KeyEvent`](mw.KeyEvent.md) <Badge type="tip" text="client" />

获取按下的键

#### Returns

| [`KeyEvent`](mw.KeyEvent.md) | 返回按下的键 |
| :------ | :------ |


___

### getUserIndex <Score text="getUserIndex" /> 

• **getUserIndex**(): `number` <Badge type="tip" text="client" />

获取事件触发玩家index

#### Returns

| `number` | 返回事件触发玩家index |
| :------ | :------ |


___

### toInputEvent <Score text="toInputEvent" /> 

• **toInputEvent**(): [`InputEvent`](mw.InputEvent.md) <Badge type="tip" text="client" />

转化为 InputEvent*

#### Returns

| [`InputEvent`](mw.InputEvent.md) | 返回转化后 InputEvent |
| :------ | :------ |

