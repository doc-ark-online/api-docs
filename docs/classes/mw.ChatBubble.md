[SOCIAL](../groups/SOCIAL.SOCIAL.md) / ChatBubble

# ChatBubble <Badge type="tip" text="Class" /> <Score text="ChatBubble" />

聊天头顶气泡

1. 什么是头顶气泡？

- 物体或角色头顶上出现的气泡通常称为「对话气泡」或「漫画气泡」。这种视觉效果被用来表示物体或角色正在说话、思考或传达信息。

- 对话气泡通常包含文字、图标或表情符号，以传达物体或角色的语言、情绪或意图。

- 它们可以呈现为云状气泡，矩形气泡或其他形状，具体样式根据游戏的艺术风格和设计决策而定。(目前可以修改气泡或文字大小颜色等，暂未支持气泡皮肤样式功能，之后会暴露接口DIY气泡样式)

通过在游戏中使用对话气泡，开发者可以更生动地展示物体或角色之间的交互和对话，更好地理解故事情节、任务提示或角色的个性特点。

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[bubbleBackgroundColor](mw.ChatBubble.md#bubblebackgroundcolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| :-----|
| 获取气泡背景颜色|
| **[bubbleDisplayDistance](mw.ChatBubble.md#bubbledisplaydistance)**(): `number`  |
| 获取气泡间隔距离|
| **[bubbleDuration](mw.ChatBubble.md#bubbleduration)**(): `number`  |
| 获取气泡持续时长|
| **[bubbleEnabled](mw.ChatBubble.md#bubbleenabled)**(): `boolean`  |
| 获取是否开启气泡功能的布尔值。|
| **[bubblePositionOffset](mw.ChatBubble.md#bubblepositionoffset)**(): [`Vector`](mw.Vector.md)  |
| 获取气泡位置偏移|
| **[bubbleTextColor](mw.ChatBubble.md#bubbletextcolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 获取气泡文字颜色|
| **[bubbleTextFont](mw.ChatBubble.md#bubbletextfont)**(): [`UIFontGlyph`](../enums/mw.UIFontGlyph.md)  |
| 获取气泡文字字体|
| **[bubbleTextSize](mw.ChatBubble.md#bubbletextsize)**(): `number`  |
| 获取气泡文字大小|
| **[maxParallelBubbles](mw.ChatBubble.md#maxparallelbubbles)**(): `number`  |
| 获取说话时头顶气泡共存数量。|
| **[onChatBubbleDisplay](mw.ChatBubble.md#onchatbubbledisplay)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`message`: `string`, `parent`: [`GameObject`](mw.GameObject.md)) => `void`\>  |
| 当发出某一段文字时触发的委托|
| **[onMessageReceive](mw.ChatBubble.md#onmessagereceive)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`mesage`: `string`) => `void`\>  |
| 当收到某一段文字时触发的委托|

### Methods <Score text="Methods" /> 
| **[displayChatBubbble](mw.ChatBubble.md#displaychatbubbble)**(`parent`: [`GameObject`](mw.GameObject.md), `message`: `string`): `void`  |
| :-----|
| 显示气泡|

## Accessors

### bubbleBackgroundColor <Score text="bubbleBackgroundColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **bubbleBackgroundColor**(): [`LinearColor`](mw.LinearColor.md)

</th>
<th style="text-align: left">

• `Static` `set` **bubbleBackgroundColor**(`color`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取气泡背景颜色


#### Returns

| [`LinearColor`](mw.LinearColor.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置气泡背景颜色

#### Parameters

| `color` | [`LinearColor`](mw.LinearColor.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为 NewScript 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，正方体头顶显示气泡。
</span>

```ts
@Component
export default class NewScript extends Script {
    protected onStart(): void {
        if(SystemUtil.isClient()){
            UIService.show(newUI);
        }
    }
}

class newUI extends UIScript{
    button:StaleButton;
    protected onStart() {

        this.canUpdate = false;
        this.layer = UILayerScene;

        this.button = StaleButton.newObject(this.rootCanvas);
        this.button.text = "button";
        this.button.visibility = SlateVisibility.Visible;
        this.button.onClicked.add(async ()=>{
            ChatBubble.bubbleBackgroundColor = LinearColor.green;
        });
    }
}
```
___

### bubbleDisplayDistance <Score text="bubbleDisplayDistance" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **bubbleDisplayDistance**(): `number`

</th>
<th style="text-align: left">

• `Static` `set` **bubbleDisplayDistance**(`num`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取气泡间隔距离


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置气泡间隔距离

#### Parameters

| `num` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为 NewScript 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，正方体头顶显示气泡。
</span>

```ts
@Component
export default class NewScript extends Script {
    protected onStart(): void {
        if(SystemUtil.isClient()){
            UIService.show(newUI);
        }
    }
}

class newUI extends UIScript{
    button:StaleButton;
    protected onStart() {

        this.canUpdate = false;
        this.layer = UILayerScene;

        this.button = StaleButton.newObject(this.rootCanvas);
        this.button.text = "button";
        this.button.visibility = SlateVisibility.Visible;
        this.button.onClicked.add(async ()=>{
            ChatBubble.bubbleDisplayDistance = 100;
        });
    }
}
```
___

### bubbleDuration <Score text="bubbleDuration" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **bubbleDuration**(): `number`

</th>
<th style="text-align: left">

• `Static` `set` **bubbleDuration**(`time`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取气泡持续时长


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置气泡持续时长

#### Parameters

| `time` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为 NewScript 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，正方体头顶显示气泡。
</span>

```ts
@Component
export default class NewScript extends Script {
    protected onStart(): void {
        if(SystemUtil.isClient()){
            UIService.show(newUI);
        }
    }
}

class newUI extends UIScript{
    button:StaleButton;
    protected onStart() {

        this.canUpdate = false;
        this.layer = UILayerScene;

        this.button = StaleButton.newObject(this.rootCanvas);
        this.button.text = "button";
        this.button.visibility = SlateVisibility.Visible;
        this.button.onClicked.add(async ()=>{
            ChatBubble.bubbleDuration = 1;
        });
    }
}
```
___

### bubbleEnabled <Score text="bubbleEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **bubbleEnabled**(): `boolean`

</th>
<th style="text-align: left">

• `Static` `set` **bubbleEnabled**(`enable`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启气泡功能的布尔值。


#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启气泡功能。

这是一个总开关，当开启时，物体或者角色说话时才会有气泡效果。

#### Parameters

| `enable` `boolean` | 是否开启气泡功能。<br> 默认为 false 关闭的状态。是使用角色聊天气泡功能，需要设置为 true 。 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为 NewScript 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，正方体头顶显示气泡。
</span>

```ts
@Component
export default class NewScript extends Script {
    protected onStart(): void {
        if(SystemUtil.isClient()){
            UIService.show(newUI);
        }
    }
}

class newUI extends UIScript{
    button:StaleButton;
    protected onStart() {

        this.canUpdate = false;
        this.layer = UILayerScene;

        this.button = StaleButton.newObject(this.rootCanvas);
        this.button.text = "button";
        this.button.visibility = SlateVisibility.Visible;
        this.button.onClicked.add(async ()=>{
            ChatBubble.bubbleEnabled = true;
        });
    }
}
```
___

### bubblePositionOffset <Score text="bubblePositionOffset" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **bubblePositionOffset**(): [`Vector`](mw.Vector.md)

</th>
<th style="text-align: left">

• `Static` `set` **bubblePositionOffset**(`num`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取气泡位置偏移


#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置气泡位置偏移

#### Parameters

| `num` | [`Vector`](mw.Vector.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为 NewScript 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，正方体头顶显示气泡。
</span>

```ts
@Component
export default class NewScript extends Script {
    protected onStart(): void {
        if(SystemUtil.isClient()){
            UIService.show(newUI);
        }
    }
}

class newUI extends UIScript{
    button:StaleButton;
    protected onStart() {

        this.canUpdate = false;
        this.layer = UILayerScene;

        this.button = StaleButton.newObject(this.rootCanvas);
        this.button.text = "button";
        this.button.visibility = SlateVisibility.Visible;
        this.button.onClicked.add(async ()=>{
            ChatBubble.bubblePositionOffset = new Vector(0,0,50);
        });
    }
}
```
___

### bubbleTextColor <Score text="bubbleTextColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **bubbleTextColor**(): [`LinearColor`](mw.LinearColor.md)

</th>
<th style="text-align: left">

• `Static` `set` **bubbleTextColor**(`color`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取气泡文字颜色


#### Returns

| [`LinearColor`](mw.LinearColor.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置气泡文字颜色

#### Parameters

| `color` | [`LinearColor`](mw.LinearColor.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为 NewScript 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，正方体头顶显示气泡。
</span>

```ts
@Component
export default class NewScript extends Script {
    protected onStart(): void {
        if(SystemUtil.isClient()){
            UIService.show(newUI);
        }
    }
}

class newUI extends UIScript{
    button:StaleButton;
    protected onStart() {

        this.canUpdate = false;
        this.layer = UILayerScene;

        this.button = StaleButton.newObject(this.rootCanvas);
        this.button.text = "button";
        this.button.visibility = SlateVisibility.Visible;
        this.button.onClicked.add(async ()=>{
            ChatBubble.bubbleTextColor = LinearColor.red;
        });
    }
}
```
___

### bubbleTextFont <Score text="bubbleTextFont" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **bubbleTextFont**(): [`UIFontGlyph`](../enums/mw.UIFontGlyph.md)

</th>
<th style="text-align: left">

• `Static` `set` **bubbleTextFont**(`textFont`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取气泡文字字体


#### Returns

| [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置气泡文字字体

#### Parameters

| `textFont` | [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为 NewScript 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，正方体头顶显示气泡。
</span>

```ts
@Component
export default class NewScript extends Script {
    protected onStart(): void {
        if(SystemUtil.isClient()){
            UIService.show(newUI);
        }
    }
}

class newUI extends UIScript{
    button:StaleButton;
    protected onStart() {

        this.canUpdate = false;
        this.layer = UILayerScene;

        this.button = StaleButton.newObject(this.rootCanvas);
        this.button.text = "button";
        this.button.visibility = SlateVisibility.Visible;
        this.button.onClicked.add(async ()=>{
            ChatBubble.bubbleTextFont = UIFontGlyph.BoldItalics;
        });
    }
}
```
___

### bubbleTextSize <Score text="bubbleTextSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **bubbleTextSize**(): `number`

</th>
<th style="text-align: left">

• `Static` `set` **bubbleTextSize**(`size`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取气泡文字大小


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置气泡文字大小

#### Parameters

| `size` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为 NewScript 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，正方体头顶显示气泡。
</span>

```ts
@Component
export default class NewScript extends Script {
    protected onStart(): void {
        if(SystemUtil.isClient()){
            UIService.show(newUI);
        }
    }
}

class newUI extends UIScript{
    button:StaleButton;
    protected onStart() {

        this.canUpdate = false;
        this.layer = UILayerScene;

        this.button = StaleButton.newObject(this.rootCanvas);
        this.button.text = "button";
        this.button.visibility = SlateVisibility.Visible;
        this.button.onClicked.add(async ()=>{
            ChatBubble.bubbleTextSize = 30;
        });
    }
}
```
___

### maxParallelBubbles <Score text="maxParallelBubbles" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **maxParallelBubbles**(): `number`

</th>
<th style="text-align: left">

• `Static` `set` **maxParallelBubbles**(`num`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取说话时头顶气泡共存数量。

如果number=5，意味着可以同时存在五个气泡。

默认是三个气泡共存。


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置说话时头顶气泡共存数量。

可以根据自己的喜好设置气泡共存数量。

#### Parameters

| `num` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:创建一个名为 NewScript 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，正方体头顶显示气泡。
</span>

```ts
@Component
export default class NewScript extends Script {
    protected onStart(): void {
        if(SystemUtil.isClient()){
            UIService.show(newUI);
        }
    }
}

class newUI extends UIScript{
    button:StaleButton;
    protected onStart() {

        this.canUpdate = false;
        this.layer = UILayerScene;

        this.button = StaleButton.newObject(this.rootCanvas);
        this.button.text = "button";
        this.button.visibility = SlateVisibility.Visible;
        this.button.onClicked.add(async ()=>{
            ChatBubble.maxParallelBubbles = 1;
        });
    }
}
```
___

### onChatBubbleDisplay <Score text="onChatBubbleDisplay" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **onChatBubbleDisplay**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`message`: `string`, `parent`: [`GameObject`](mw.GameObject.md)) => `void`\>

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当发出某一段文字时触发的委托

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`message`: `string`, `parent`: [`GameObject`](mw.GameObject.md)) => `void`\> |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onMessageReceive <Score text="onMessageReceive" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **onMessageReceive**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`mesage`: `string`) => `void`\>

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当收到某一段文字时触发的委托

#### Returns

</td>
</tr></tbody>
</table>

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`mesage`: `string`) => `void`\> |  |
| :------ | :------ |

## Methods

### displayChatBubbble <Score text="displayChatBubbble" /> 

• `Static` **displayChatBubbble**(`parent`, `message`): `void`

显示气泡

#### Parameters

| `parent` | [`GameObject`](mw.GameObject.md) |
| :------ | :------ |
| `message` | `string` |


<span style="font-size: 14px;">
使用示例:创建一个名为 NewScript 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，正方体头顶显示气泡。
</span>

```ts
@Component
export default class NewScript extends Script {
    protected onStart(): void {
        if(SystemUtil.isClient()){
            UIService.show(newUI);
        }
    }
}

class newUI extends UIScript{
    button:StaleButton;
    protected onStart() {

        this.canUpdate = false;
        this.layer = UILayerScene;

        this.button = StaleButton.newObject(this.rootCanvas);
        this.button.text = "button";
        this.button.visibility = SlateVisibility.Visible;
        this.button.onClicked.add(async ()=>{
            let cube = GameObject.asyncFindGameObjectById("0AB6A7D9");
            ChatBubble.displayChatBubbble(await cube, "hello");
        });
    }
}
```
