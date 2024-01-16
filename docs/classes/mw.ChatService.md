[SOCIAL](../groups/SOCIAL.SOCIAL.md) / ChatService

# ChatService <Badge type="tip" text="Class" /> <Score text="ChatService" />

聊天服务

## Table of contents

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

### asyncSendMessage <Score text="asyncSendMessage" /> 

• `Static` **asyncSendMessage**(`content`): `Promise`<[`BroadcastMessageResult`](../modules/Core.mw.md#broadcastmessageresult)\> <Badge type="tip" text="client" />

发送快捷语消息，自动携带发送者名称。与聊天框中输入语言一致。不支持富文本。

#### Parameters

| `content` `string` | 消息内容 |
| :------ | :------ |

#### Returns

| `Promise`<[`BroadcastMessageResult`](../modules/Core.mw.md#broadcastmessageresult)\> | 发送消息的结果 |
| :------ | :------ |


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
