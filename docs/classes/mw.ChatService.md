[服务](../groups/服务.服务.md) / ChatService

# ChatService <Badge type="tip" text="Class" /> <Score text="ChatService" />

聊天服务

语音聊天功能需要在mobile端才可生效，pie没有效果。可以使用手机端测试。

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[onVoiceStatusChange](mw.ChatService.md#onvoicestatuschange)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`userId`: `string`, `lastVolume`: `number`, `currentVolume`: `number`, `isOpenAudio`: `boolean`) => `void`\> <Badge type="tip" text="client" />  |
| :-----|
| 每次语音回调|
| **[voiceChatEnabled](mw.ChatService.md#voicechatenabled)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取是否既不能听也不能说功能，false为否既不能听也不能说；true为既可以听也可以说。|

### Methods <Score text="Methods" /> 
| **[getUserCanChat](mw.ChatService.md#getusercanchat)**(`userId`: `string`): `Promise`<`boolean`\>  |
| :-----|
| 获取指定用户聊天权限|
| **[asyncBroadcastMessage](mw.ChatService.md#asyncbroadcastmessage)**(`type`: [`MessageType`](../enums/mw.MessageType.md), `content`: `string`): `Promise`<[`BroadcastMessageResult`](../modules/Core.mw.md#broadcastmessageresult)\> <Badge type="tip" text="server" />  |
| 发送富文本消息到聊天窗口中，禁止回调中调用该接口。|
| **[asyncCloseMic](mw.ChatService.md#asyncclosemic)**(): `Promise`<`boolean`\> <Badge type="tip" text="client" />  |
| 关闭自己的语音。|
| **[asyncMuteAll](mw.ChatService.md#asyncmuteall)**(): `Promise`<`boolean`\> <Badge type="tip" text="client" />  |
| 一键屏蔽所有玩家的语音。|
| **[asyncMutePlayer](mw.ChatService.md#asyncmuteplayer)**(`userId`: `string`): `Promise`<`boolean`\> <Badge type="tip" text="other" />  |
| 屏蔽指定玩家的语音。|
| **[asyncOpenMic](mw.ChatService.md#asyncopenmic)**(): `Promise`<`boolean`\> <Badge type="tip" text="client" />  |
| 打开自己的语音。|
| **[asyncSendMessage](mw.ChatService.md#asyncsendmessage)**(`content`: `string`): `Promise`<[`BroadcastMessageResult`](../modules/Core.mw.md#broadcastmessageresult)\> <Badge type="tip" text="client" />  |
| 发送快捷语消息，自动携带发送者名称。与聊天框中输入语言一致。不支持富文本。|
| **[asyncUnmuteAll](mw.ChatService.md#asyncunmuteall)**(): `Promise`<`boolean`\> <Badge type="tip" text="client" />  |
| 一键打开所有玩家的语音。|
| **[asyncUnmutePlayer](mw.ChatService.md#asyncunmuteplayer)**(`userId`: `string`): `Promise`<`boolean`\> <Badge type="tip" text="client" />  |
| 打开指定玩家的语音。|
| **[asyncsetUserCanChat](mw.ChatService.md#asyncsetusercanchat)**(`userId`: `string`, `canChat`: `boolean`): `Promise`<`boolean`\>  |
| 设置指定用户聊天权限|
| **[sendAudio](mw.ChatService.md#sendaudio)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `openAudio`: `boolean`, `openId`: `string`): `void` |

## Accessors

### onVoiceStatusChange <Score text="onVoiceStatusChange" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **onVoiceStatusChange**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`userId`: `string`, `lastVolume`: `number`, `currentVolume`: `number`, `isOpenAudio`: `boolean`) => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


每次语音回调

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`userId`: `string`, `lastVolume`: `number`, `currentVolume`: `number`, `isOpenAudio`: `boolean`) => `void`\> | 玩家语音是否设置成功。 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### voiceChatEnabled <Score text="voiceChatEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **voiceChatEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **voiceChatEnabled**(`voice`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否既不能听也不能说功能，false为否既不能听也不能说；true为既可以听也可以说。

note: 开启语音功能，接口才可生效

#### Returns

| `boolean` | 玩家语音是否设置成功。 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置既不能听也不能说功能，false为否既不能听也不能说；true为既可以听也可以说。

note: 开启语音功能，接口才可生效

#### Parameters

| `voice` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

玩家语音是否设置成功。

## Methods

### getUserCanChat <Score text="getUserCanChat" /> 

• **getUserCanChat**(`userId`): `Promise`<`boolean`\>

获取指定用户聊天权限

#### Parameters

| `userId` | `string` |
| :------ | :------ |

#### Returns

| `Promise`<`boolean`\> |  |
| :------ | :------ |

___

### asyncBroadcastMessage <Score text="asyncBroadcastMessage" /> 

• `Static` **asyncBroadcastMessage**(`type`, `content`): `Promise`<[`BroadcastMessageResult`](../modules/Core.mw.md#broadcastmessageresult)\> <Badge type="tip" text="server" />

发送富文本消息到聊天窗口中，禁止回调中调用该接口。

#### Parameters

| `type` [`MessageType`](../enums/mw.MessageType.md) | 发送消息类型 |
| :------ | :------ |
| `content` `string` | 消息内容 |

#### Returns

| `Promise`<[`BroadcastMessageResult`](../modules/Core.mw.md#broadcastmessageresult)\> | 发送消息的结果 |
| :------ | :------ |

限制每个ds消息发送从第一个消息发送开始计时60秒内最多发送60条消息。定时器清空计数后下一次发送消息再次开始计数。

note: 开启聊天框聊天功能，接口才可生效

<span style="font-size: 14px;">
使用示例:创建一个名为"messageExample"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，你将在场景中看到在聊天框中显示富文本字体的效果。代码如下：
</span>

```ts
@Component
export default class NewExample extends Script {

    protected onStart(): void {
        if (SystemUtil.isClient()){
            this.test();
        }
        if(SystemUtil.isServer()){
            Event.addClientListener("bro_two",()=>{
                ChatService.asyncBroadcastMessage(MessageType.Room,"bro").then(()=>{
                    console.log("asyncBroadcastMessage is called");
                });
            });
        }
        
        if(SystemUtil.isClient()){
            Event.addLocalListener("bro",()=>{
                Event.dispatchToServer("bro_two");
            });
        }
    }

    private async test(): Promise<void> {
        let btn = new ButtonUI();
        InputUtil.onKeyDown(Keys.F, async () => {
            let playerPos = Player.localPlayer.character.worldTransform.position;
            let result = InputUtil.projectWorldPositionToWidgetPosition(playerPos);
            if (result) {
                btn.button.position = result.screenPosition;
            }
        })
    }

}

class ButtonUI {
    public button: StaleButton;
    public buttonTwo: StaleButton;

    constructor(fun: Function = null) {
        this.creatUI(fun);
    }

    private creatUI(fun: Function = null) {
        // 创建一个UI对象
        let ui = UserWidget.newObject();
        // 将UI添加到屏幕上
        ui.addToViewport(1);
        // 创建一个画布组件
        let rootCanvas = Canvas.newObject();
        rootCanvas.size = new Vector2(1920, 1080);
        rootCanvas.position = Vector2.zero;
        // 将Ui的根画布设置为rootCanvas
        ui.rootContent = rootCanvas;
        // 创建一个按钮
        this.button = StaleButton.newObject(rootCanvas);
        this.button.position = new Vector2(1000, 310);
        this.button.size = new Vector2(200, 50);
        this.button.text = "SendMes";
        this.button.transitionEnable = true;
        this.button.pressedImagColor = LinearColor.red;
        this.button.visibility = SlateVisibility.Visible;
        this.button.onClicked.add(() => {
            console.log("btn ")
            ChatService.asyncSendMessage("hello").then(()=>{
                console.log("asyncSendMessage is called");
            });
            if (fun) {
                fun();
            }
        });
        this.buttonTwo = StaleButton.newObject(rootCanvas);
        this.buttonTwo.position = new Vector2(1700, 310);
        this.buttonTwo.size = new Vector2(150, 50);
        this.buttonTwo.text = "BroMes";
        this.buttonTwo.transitionEnable = true;
        this.buttonTwo.pressedImagColor = LinearColor.red;
        this.buttonTwo.visibility = SlateVisibility.Visible;
        this.buttonTwo.onClicked.add(() => {
            console.log("btn ")
            Event.dispatchToLocal("bro");
            if (fun) {
                fun();
            }
        });

    }
}
```

___

### asyncCloseMic <Score text="asyncCloseMic" /> 

• `Static` **asyncCloseMic**(): `Promise`<`boolean`\> <Badge type="tip" text="client" />

关闭自己的语音。

#### Returns

| `Promise`<`boolean`\> | 语音是否设置成功。 |
| :------ | :------ |

note: 开启语音功能，接口才可生效

<span style="font-size: 14px;">
使用示例:创建一个名为"NewScript"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，可屏蔽所有玩家语音，无法在editor模式下调试。代码如下：
</span>

```ts
@Component
 export default class NewScript extends Script {

     protected onStart(): void {
         ChatService.asyncCloseMic().then(()=>{console.log("asyncCloseMic")});
     }
 }
```

___

### asyncMuteAll <Score text="asyncMuteAll" /> 

• `Static` **asyncMuteAll**(): `Promise`<`boolean`\> <Badge type="tip" text="client" />

一键屏蔽所有玩家的语音。

#### Returns

| `Promise`<`boolean`\> | 玩家语音是否设置成功。 |
| :------ | :------ |

note: 开启语音功能，接口才可生效

<span style="font-size: 14px;">
使用示例:创建一个名为"NewScript"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，可屏蔽所有玩家语音，无法在editor模式下调试。代码如下：
</span>

```ts
@Component
 export default class NewScript extends Script {

     protected onStart(): void {
         ChatService.asyncMuteAll().then(()=>{console.log("asyncMuteAll")});
     }
 }
```

___

### asyncMutePlayer <Score text="asyncMutePlayer" /> 

• `Static` **asyncMutePlayer**(`userId`): `Promise`<`boolean`\> <Badge type="tip" text="other" />

屏蔽指定玩家的语音。

#### Parameters

| `userId` | `string` |
| :------ | :------ |

#### Returns

| `Promise`<`boolean`\> | 玩家语音是否设置成功。 |
| :------ | :------ |

note: 开启语音功能，接口才可生效

<span style="font-size: 14px;">
使用示例:创建一个名为"NewScript"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，可屏蔽所有玩家语音，无法在editor模式下调试。代码如下：
</span>

```ts
@Component
 export default class NewScript extends Script {

     protected onStart(): void {
         ChatService.asyncMutePlayer(Player.localPlayer.userId).then(()=>{console.log("asyncMutePlayer")});
     }
 }
```

___

### asyncOpenMic <Score text="asyncOpenMic" /> 

• `Static` **asyncOpenMic**(): `Promise`<`boolean`\> <Badge type="tip" text="client" />

打开自己的语音。

#### Returns

| `Promise`<`boolean`\> | 语音是否设置成功。 |
| :------ | :------ |

note: 开启语音功能，接口才可生效

<span style="font-size: 14px;">
使用示例:创建一个名为"NewScript"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，可屏蔽所有玩家语音，无法在editor模式下调试。代码如下：
</span>

```ts
@Component
 export default class NewScript extends Script {

     protected onStart(): void {
         ChatService.asyncOpenMic().then(()=>{console.log("asyncOpenMic")});
     }
 }
```

___

### asyncSendMessage <Score text="asyncSendMessage" /> 

• `Static` **asyncSendMessage**(`content`): `Promise`<[`BroadcastMessageResult`](../modules/Core.mw.md#broadcastmessageresult)\> <Badge type="tip" text="client" />

发送快捷语消息，自动携带发送者名称。与聊天框中输入语言一致。不支持富文本。

#### Parameters

| `content` `string` | 消息内容 |
| :------ | :------ |

#### Returns

| `Promise`<[`BroadcastMessageResult`](../modules/Core.mw.md#broadcastmessageresult)\> | 发送消息的结果 |
| :------ | :------ |

note: 开启聊天框聊天功能，接口才可生效

<span style="font-size: 14px;">
使用示例:创建一个名为"messageExample"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，你将在场景中看到在聊天框中显示"MetaWorld is funny"的效果。代码如下：
</span>

```ts
@Component
 export default class messageExample extends Script {

     protected onStart(): void {
          let content = "MetaWorld is funny";
          ChatService.asyncBroadcastMessage(content);
     }
 }
```

___

### asyncUnmuteAll <Score text="asyncUnmuteAll" /> 

• `Static` **asyncUnmuteAll**(): `Promise`<`boolean`\> <Badge type="tip" text="client" />

一键打开所有玩家的语音。

#### Returns

| `Promise`<`boolean`\> | 语音是否设置成功。 |
| :------ | :------ |

note: 开启语音功能，接口才可生效

<span style="font-size: 14px;">
使用示例:创建一个名为"NewScript"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，可屏蔽所有玩家语音，无法在editor模式下调试。代码如下：
</span>

```ts
@Component
 export default class NewScript extends Script {

     protected onStart(): void {
         ChatService.asyncUnmuteAll().then(()=>{console.log("asyncUnmuteAll")});
     }
 }
```

___

### asyncUnmutePlayer <Score text="asyncUnmutePlayer" /> 

• `Static` **asyncUnmutePlayer**(`userId`): `Promise`<`boolean`\> <Badge type="tip" text="client" />

打开指定玩家的语音。

#### Parameters

| `userId` | `string` |
| :------ | :------ |

#### Returns

| `Promise`<`boolean`\> | 语音是否设置成功。 |
| :------ | :------ |

note: 开启语音功能，接口才可生效

<span style="font-size: 14px;">
使用示例:创建一个名为"NewScript"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，可屏蔽所有玩家语音，无法在editor模式下调试。代码如下：
</span>

```ts
@Component
 export default class NewScript extends Script {

     protected onStart(): void {
         ChatService.asyncUnmutePlayer(Player.localPlayer.userId).then(()=>{console.log("asyncUnmutePlayer")});
     }
 }
```

___

### asyncsetUserCanChat <Score text="asyncsetUserCanChat" /> 

• `Static` **asyncsetUserCanChat**(`userId`, `canChat`): `Promise`<`boolean`\>

设置指定用户聊天权限

#### Parameters

| `userId` | `string` |
| :------ | :------ |
| `canChat` | `boolean` |

#### Returns

| `Promise`<`boolean`\> |  |
| :------ | :------ |

___

### sendAudio <Score text="sendAudio" /> 

• `Static` **sendAudio**(`resp`, `openAudio`, `openId`): `void`

#### Parameters

| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) |
| :------ | :------ |
| `openAudio` | `boolean` |
| `openId` | `string` |

