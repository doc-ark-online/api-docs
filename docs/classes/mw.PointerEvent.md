[界面](../groups/界面.界面.md) / PointerEvent

# PointerEvent <Badge type="tip" text="Class" /> <Score text="PointerEvent" />

点击或者滑动的时候传递mobile touch,鼠标,键盘信息的类

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[isTouchEvent](mw.PointerEvent.md#istouchevent)**(): `boolean` <Badge type="tip" text="client" />  |
| :-----|
| 判断是不是触摸事件|
| **[lastScreenSpacePosition](mw.PointerEvent.md#lastscreenspaceposition)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取该事件上一次的屏幕位置|
| **[mouseWheelDelta](mw.PointerEvent.md#mousewheeldelta)**(): `number` <Badge type="tip" text="client" />  |
| 获取鼠标滚轮滑动的距离|
| **[pointerIndex](mw.PointerEvent.md#pointerindex)**(): `number` <Badge type="tip" text="client" />  |
| 返回该事件的唯一标识index|
| **[screenSpacePosition](mw.PointerEvent.md#screenspaceposition)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取触发的屏幕位置|
| **[touchPadIndex](mw.PointerEvent.md#touchpadindex)**(): `number` <Badge type="tip" text="client" />  |
| 获取触摸事件index|
| **[userIndex](mw.PointerEvent.md#userindex)**(): `number` <Badge type="tip" text="client" />  |
| 获取事件触发玩家的index|

### Methods <Score text="Methods" /> 
| **[isMouseButtonDown](mw.PointerEvent.md#ismousebuttondown)**(`MouseButton`: [`Keys`](../enums/mw.Keys.md)): `boolean` <Badge type="tip" text="client" />  |
| :-----|
| 判断是不是鼠标按键事件|
| **[toInputEvent](mw.PointerEvent.md#toinputevent)**(): `InputEvent` <Badge type="tip" text="client" />  |
| 转化为 InputEvent|

默认构造

## Accessors

### isTouchEvent <Score text="isTouchEvent" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isTouchEvent**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


判断是不是触摸事件

#### Returns

| `boolean` | 返回是否是触摸事件 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### lastScreenSpacePosition <Score text="lastScreenSpacePosition" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **lastScreenSpacePosition**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取该事件上一次的屏幕位置

#### Returns

| [`Vector2`](mw.Vector2.md) | 返回该事件上一次的屏幕位置 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### mouseWheelDelta <Score text="mouseWheelDelta" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **mouseWheelDelta**(): `number` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取鼠标滚轮滑动的距离

#### Returns

| `number` | 返回鼠标滚轮滑动距离 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### pointerIndex <Score text="pointerIndex" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **pointerIndex**(): `number` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回该事件的唯一标识index

#### Returns

| `number` | 返回该事件的唯一标识index |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### screenSpacePosition <Score text="screenSpacePosition" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **screenSpacePosition**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取触发的屏幕位置

#### Returns

| [`Vector2`](mw.Vector2.md) | 返回触发的屏幕位置 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### touchPadIndex <Score text="touchPadIndex" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **touchPadIndex**(): `number` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取触摸事件index

#### Returns

| `number` | 返回触摸事件的index |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### userIndex <Score text="userIndex" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **userIndex**(): `number` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取事件触发玩家的index

#### Returns

</td>
</tr></tbody>
</table>

| `number` | 返回事件触发玩家的index |
| :------ | :------ |

## Methods

### isMouseButtonDown <Score text="isMouseButtonDown" /> 

• **isMouseButtonDown**(`MouseButton`): `boolean` <Badge type="tip" text="client" />

判断是不是鼠标按键事件

#### Parameters

| `MouseButton` [`Keys`](../enums/mw.Keys.md) | 按键事件 |
| :------ | :------ |

#### Returns

| `boolean` | 返回是不是鼠标按键事件 |
| :------ | :------ |

___

### toInputEvent <Score text="toInputEvent" /> 

• **toInputEvent**(): `InputEvent` <Badge type="tip" text="client" />

转化为 InputEvent

#### Returns

| `InputEvent` | 返回转化后 InputEvent |
| :------ | :------ |
