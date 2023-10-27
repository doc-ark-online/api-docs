[INPUT](../groups/Core.INPUT.md) / TouchInputUtil

# TouchInputUtil <Badge type="tip" text="Class" /> <Score text="TouchInputUtil" />

<span class="content-big">

玩家从可触摸设备获取的数据信息，包含触摸手指数量，触摸位置(屏幕像素)和当前触摸状态(点击/滑动/离开)

</span>

<span style="font-size: 14px;">

使用示例:创建一个名为"InputInputExample"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,触摸屏幕，你将看从Log看到相关结果.代码如下:

</span>

```ts
@Component
export default class TouchInputExample extends Script {
    protected onStart(): void {
         let touch = new TouchInputUtil();
         touch.onTouchBegin.add((index, location, state) => {
         console.log("TouchBegin", index, location.toString(), state);
         });
         touch.onTouchMove.add((index, location, state) => {
         console.log("TouchMove", index, location.toString(), state);
         });
         touch.onTouchEnd.add((index, location, state) => {
         console.log("TouchEnd", index, location.toString(), state);
         });
    }
}
```

## Table of contents

### Properties <Score text="Properties" /> 
| **[listeners](mw.TouchInputUtil.md#listeners)**: [`EventListener`](mw.EventListener.md)[]  |
| :----- |
| **[onTouch](mw.TouchInputUtil.md#ontouch)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\>  |
| 触摸事件|
| **[onTouchBegin](mw.TouchInputUtil.md#ontouchbegin)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\>  |
| 触摸开始事件|
| **[onTouchEnd](mw.TouchInputUtil.md#ontouchend)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\>  |
| 触摸结束事件|
| **[onTouchMove](mw.TouchInputUtil.md#ontouchmove)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\>  |
| 触摸移动事件|
| **[instance](mw.TouchInputUtil.md#instance)**: `any` |

### Methods <Score text="Methods" /> 
| **[addListener](mw.TouchInputUtil.md#addlistener)**(`listener`): `void`  |
| :----- |
| **[getTouchVectorArray](mw.TouchInputUtil.md#gettouchvectorarray)**(): [`Vector`](mw.Vector.md)[]  |
| 获取屏幕手指数的数组|
| **[getInstance](mw.TouchInputUtil.md#getinstance)**(): [`TouchInputUtil`](mw.TouchInputUtil.md) |

## Properties

### listeners <Score text="listeners" /> 

• **listeners**: [`EventListener`](mw.EventListener.md)[]

___

### onTouch <Score text="onTouch" /> 

• **onTouch**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\>

触摸事件

___

### onTouchBegin <Score text="onTouchBegin" /> 

• **onTouchBegin**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\>

触摸开始事件

___

### onTouchEnd <Score text="onTouchEnd" /> 

• **onTouchEnd**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\>

触摸结束事件

___

### onTouchMove <Score text="onTouchMove" /> 

• **onTouchMove**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\>

触摸移动事件

___

### instance <Score text="instance" /> 

▪ `Static` `Private` **instance**: `any`

## Methods

### addListener <Score text="addListener" /> 

• **addListener**(`listener`): `void`

___

### getTouchVectorArray <Score text="getTouchVectorArray" /> 

• **getTouchVectorArray**(): [`Vector`](mw.Vector.md)[] <Badge type="tip" text="client" />

获取屏幕手指数的数组

#### Returns

| [`Vector`](mw.Vector.md)[] | 当前Touch数组 |
| :------ | :------ |



#### Parameters

| `listener` | [`EventListener`](mw.EventListener.md) |
| :------ | :------ |



### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`TouchInputUtil`](mw.TouchInputUtil.md)

#### Returns

| [`TouchInputUtil`](mw.TouchInputUtil.md) |  |
| :------ | :------ |
