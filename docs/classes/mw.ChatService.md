[SOCIAL](../groups/SOCIAL.SOCIAL.md) / ChatService

# ChatService <Badge type="tip" text="Class" /> <Score text="ChatService" />

聊天服务

语音聊天功能需要在mobile端才可生效，pie没有效果。可以使用手机端测试。

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[onVoiceStatusChange](mw.ChatService.md#onvoicestatuschange)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`userId`: `string`, `lastVolume`: `number`, `currentVolume`: `number`, `isOpenAudio`: `boolean`) => `void`\>  |
| :-----|
| 获取是否既不能听也不能说功能，false为否既不能听也不能说；true为既可以听也可以说。|
| **[voiceChatEnabled](mw.ChatService.md#voicechatenabled)**(): `boolean`  |
| note: 开启语音功能，接口才可生效|

### Methods <Score text="Methods" /> 
| **[asyncBroadcastMessage](mw.ChatService.md#asyncbroadcastmessage)**(`type`: [`MessageType`](../enums/mw.MessageType.md), `content`: `string`): `Promise`<[`BroadcastMessageResult`](../modules/Core.mw.md#broadcastmessageresult)\>  |
| :-----|
| note: 开启聊天框聊天功能，接口才可生效|
| **[asyncCloseMic](mw.ChatService.md#asyncclosemic)**(): `Promise`<`boolean`\>  |
| note: 开启语音功能，接口才可生效|
| **[asyncMuteAll](mw.ChatService.md#asyncmuteall)**(): `Promise`<`boolean`\>  |
| note: 开启语音功能，接口才可生效|
| **[asyncMutePlayer](mw.ChatService.md#asyncmuteplayer)**(`userId`: `string`): `Promise`<`boolean`\>  |
| note: 开启语音功能，接口才可生效|
| **[asyncOpenMic](mw.ChatService.md#asyncopenmic)**(): `Promise`<`boolean`\>  |
| note: 开启语音功能，接口才可生效|
| **[asyncSendMessage](mw.ChatService.md#asyncsendmessage)**(`content`: `string`): `Promise`<[`BroadcastMessageResult`](../modules/Core.mw.md#broadcastmessageresult)\>  |
| note: 开启聊天框聊天功能，接口才可生效|
| **[asyncUnmuteAll](mw.ChatService.md#asyncunmuteall)**(): `Promise`<`boolean`\>  |
| note: 开启语音功能，接口才可生效|
| **[asyncUnmutePlayer](mw.ChatService.md#asyncunmuteplayer)**(`userId`: `string`): `Promise`<`boolean`\>  |
| note: 开启语音功能，接口才可生效|
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


获取是否既不能听也不能说功能，false为否既不能听也不能说；true为既可以听也可以说。


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

• `Static` `set` **voiceChatEnabled**(`voice`): `void`

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

**`Effect`**


#### Parameters

| `voice` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

玩家语音是否设置成功。

## Methods

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
 export default class messageExample extends Script {

     protected onStart(): void {
          this.Mgs();
     }

     @mw.RemoteFunction(mw.Server)
     public Mgs(){
         let type: mw.MessageType.Room;
         // content内容可以是富文本格式文字。
         // 富文本可使文本实现不同字号、不同颜色等多种效果。
         // <b>以粗体显示文本。eg:We are <b>not</b> amused. =>not字体为粗体
         // <color=#ff0000ff>或<color=#red>根据参数值#rrggbbaa设置文本的颜色，分别表示颜色的红、绿、蓝和 Alpha（透明度）值，大小写都能识别.eg:We are <color=#red>colorfully</color> amused. =>colorfully字体为红色。
         // <u>以下划线显示文本。eg:We are <u>not</u> amused. =>not字体存在下划线。
         let content = "<b><color=#ff0000ff>系统提示：</color></b>恭喜玩家<b><u><color=#yellow>起个名字好难</color> </u></b>！在<u><color=#red>萌宠转转转</color></u>活动中获得活泼可爱的<u><color=#black>萌兔宝宝</color> </u> ！";
         ChatService.asyncBroadcastMessage(type,content);
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

只在客户端调用生效。

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

### sendAudio <Score text="sendAudio" /> 

• `Static` **sendAudio**(`resp`, `openAudio`, `openId`): `void`

#### Parameters

| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) |
| :------ | :------ |
| `openAudio` | `boolean` |
| `openId` | `string` |

