[SOCIAL](../groups/Core.SOCIAL.md) / ChatService

# ChatService <Badge type="tip" text="Class" /> <Score text="ChatService" />

<p class="content-big">

聊天服务

</p>

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new ChatService**()  |
| :----- |

### Methods <Score text="Methods" /> 
| **[asyncBroadcastMessage](mw.ChatService.md#asyncbroadcastmessage)**(`type`: [`MessageType`](../enums/mw.MessageType.md), `content`: `string`): `Promise`<[`BroadcastMessageResult`](../modules/Core.mw.md#broadcastmessageresult)\>  |
| :-----|
| 发送富文本消息到聊天窗口中，禁止回调中调用该接口。|
| **[asyncSendMessage](mw.ChatService.md#asyncsendmessage)**(`content`: `string`): `Promise`<[`BroadcastMessageResult`](../modules/Core.mw.md#broadcastmessageresult)\>  |
| 发送快捷语消息，自动携带发送者名称。与聊天框中输入语言一致。不支持富文本。|

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


<p style="font-size: 14px;">

使用示例:创建一个名为"messageExample"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，你将在场景中看到在聊天框中显示富文本字体的效果。代码如下：

</p>

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


<p style="font-size: 14px;">

使用示例:创建一个名为"messageExample"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，你将在场景中看到在聊天框中显示"MetaWorld is funny"的效果。代码如下：

</p>

```
@Component
 export default class messageExample extends Script {

     protected onStart(): void {
          let content = "MetaWorld is funny";
          RoomService.getInstance().asyncBroadcastMessage(content);
     }
 }
```ts
