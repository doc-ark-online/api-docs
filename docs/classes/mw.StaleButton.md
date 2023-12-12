[界面](../groups/界面.界面.md) / StaleButton

# StaleButton <Badge type="tip" text="Class" /> <Score text="StaleButton" />

文本按钮

<span style="font-size: 14px;">
使用示例:创建一个名为"NewScript"的脚本，放置在对象管理器对象子级中，打开脚本，输入以下代码保存，运行游戏，屏幕显示一个按钮。
</span>

```ts
@Component
export default class NewScript extends Script {

    protected onStart(): void {
        if(SystemUtil.isClient()){
            if(SystemUtil.isClient()){
                let mainui = UIService.create(UI_Main);
                UIService.showUI(mainui);
                UIService.canvas.addChild(mainui.button);
            }
        }
    }
}
class UI_Main extends UIScript {

    button: StaleButton = undefined;

    public onAwake() {
        let size = WindowUtil.getViewportSize();

        this.button = StaleButton.newObject();
        this.button.transform = new UITransform(size.x/2,size.y/2,size.x / 14, size.y / 20);

        this.button.size = new Vector2(size.x / 14, size.y / 20);
        this.button.text = "StaleButton";
        this.button.fontSize = 18;
        this.button.transitionEnable = true;
        InputUtil.bindButton(Keys.X, this.button);
        this.button.setPressedImageColorDecimal(200, 200, 200, 255);
        this.button.onClicked.add(() => {
            // 当按下按钮执行以下逻辑
            console.log("The \"StaleButton\" button was pressed ~");
        });
    }
}
```

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`StaleButton`**

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[clickMethod](mw.StaleButton.md#clickmethod)**(`inClickMethod`: [`ButtonClickMethod`](../enums/mw.ButtonClickMethod.md)): `void` <Badge type="tip" text="client" />  |
| :-----|
| 设置点击模式|
| **[contentColor](mw.StaleButton.md#contentcolor)**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />  |
| 设置字体内容颜色|
| **[disableImageColor](mw.StaleButton.md#disableimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />  |
| 设置禁用图片颜色|
| **[disableImageDrawType](mw.StaleButton.md#disableimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />  |
| 设置禁用图片绘制类型|
| **[disableImageGuid](mw.StaleButton.md#disableimageguid)**(): `string` <Badge type="tip" text="client" />  |
| 设置不可用图片ID|
| **[disableImageMargin](mw.StaleButton.md#disableimagemargin)**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />  |
| 设置禁用图片边距|
| **[disableImageSize](mw.StaleButton.md#disableimagesize)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 设置禁用图片大小|
| **[focusable](mw.StaleButton.md#focusable)**(): `boolean` <Badge type="tip" text="client" />  |
| 设置是否获取输入焦点|
| **[fontColor](mw.StaleButton.md#fontcolor)**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />  |
| 设置字体颜色|
| **[fontLetterSpace](mw.StaleButton.md#fontletterspace)**(): `number` <Badge type="tip" text="client" />  |
| 设置字体间距|
| **[fontSize](mw.StaleButton.md#fontsize)**(): `number` <Badge type="tip" text="client" />  |
| 设置字体大小|
| **[glyph](mw.StaleButton.md#glyph)**(): [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) <Badge type="tip" text="client" />  |
| 设置字体字形|
| **[normalImageColor](mw.StaleButton.md#normalimagecolor)**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />  |
| 设置普通图片颜色|
| **[normalImageDrawType](mw.StaleButton.md#normalimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />  |
| 设置普通图片绘制类型|
| **[normalImageGuid](mw.StaleButton.md#normalimageguid)**(): `string` <Badge type="tip" text="client" />  |
| 设置正常图片ID|
| **[normalImageMargin](mw.StaleButton.md#normalimagemargin)**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />  |
| 设置普通图片边距|
| **[normalImageSize](mw.StaleButton.md#normalimagesize)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 设置图片大小|
| **[onClicked](mw.StaleButton.md#onclicked)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />  |
| 点击事件|
| **[onHovered](mw.StaleButton.md#onhovered)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />  |
| 悬浮事件|
| **[onPressed](mw.StaleButton.md#onpressed)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />  |
| 按下事件|
| **[onReleased](mw.StaleButton.md#onreleased)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />  |
| 释放事件|
| **[onUnhovered](mw.StaleButton.md#onunhovered)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />  |
| 未悬浮事件|
| **[outlineColor](mw.StaleButton.md#outlinecolor)**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />  |
| 设置字体描边颜色|
| **[outlineSize](mw.StaleButton.md#outlinesize)**(): `number` <Badge type="tip" text="client" />  |
| 设置字体描边宽度|
| **[pressMethod](mw.StaleButton.md#pressmethod)**(`inPressMethod`: [`ButtonPressMethod`](../enums/mw.ButtonPressMethod.md)): `void` <Badge type="tip" text="client" />  |
| 设置按压模式|
| **[pressedImagColor](mw.StaleButton.md#pressedimagcolor)**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />  |
| 设置按压图片颜色|
| **[pressedImageDrawType](mw.StaleButton.md#pressedimagedrawtype)**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />  |
| 设置按压图片绘制类型|
| **[pressedImageGuid](mw.StaleButton.md#pressedimageguid)**(): `string` <Badge type="tip" text="client" />  |
| 设置按下图片ID|
| **[pressedImageMargin](mw.StaleButton.md#pressedimagemargin)**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />  |
| 设置按压图片边距|
| **[pressedImageSize](mw.StaleButton.md#pressedimagesize)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 设置按压图片大小|
| **[shadowColor](mw.StaleButton.md#shadowcolor)**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />  |
| 设置字体阴影颜色|
| **[shadowOffset](mw.StaleButton.md#shadowoffset)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 设置字体阴影偏移|
| **[strikethroughEnable](mw.StaleButton.md#strikethroughenable)**(): `boolean` <Badge type="tip" text="client" />  |
| 设置是否开启字体删除线|
| **[text](mw.StaleButton.md#text)**(): `string` <Badge type="tip" [text](mw.StaleButton.md#text)="client" />  |
| 设置按钮文字|
| **[textAlign](mw.StaleButton.md#textalign)**(): [`TextJustify`](../enums/mw.TextJustify.md) <Badge type="tip" text="client" />  |
| 设置字体对齐方式|
| **[textVerticalAlign](mw.StaleButton.md#textverticalalign)**(): [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) <Badge type="tip" text="client" />  |
| 设置字体垂直对齐方式|
| **[touchMethod](mw.StaleButton.md#touchmethod)**(`inTouchMethod`: [`ButtonTouchMethod`](../enums/mw.ButtonTouchMethod.md)): `void` <Badge type="tip" text="client" />  |
| 设置触摸模式|
| **[transitionEnable](mw.StaleButton.md#transitionenable)**(): `boolean` <Badge type="tip" text="client" />  |
| 是否套用不同的按下方案|
| **[underlineEnable](mw.StaleButton.md#underlineenable)**(): `boolean` <Badge type="tip" text="client" />  |
| 设置是否开启字体下划线|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[autoSizeEnable](mw.Widget.md#autosizeenable)**(): `boolean` <Badge type="tip" text="client" />  |
| :-----|
| 设置是否自动设置大小|
| **[cachedGeometry](mw.Widget.md#cachedgeometry)**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />  |
| 获取上一次的GetTickSpaceGeometry|
| **[constraints](mw.Widget.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](mw.UIConstraintAnchors.md)\> <Badge type="tip" text="client" />  |
| 设置控件的布局|
| **[desiredSize](mw.Widget.md#desiredsize)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取期望大小|
| **[enable](mw.Widget.md#enable)**(): `boolean` <Badge type="tip" text="client" />  |
| 设置可用性|
| **[guid](mw.Widget.md#guid)**(): `string` <Badge type="tip" text="client" />  |
| 获取控件GUID|
| **[isHovered](mw.Widget.md#ishovered)**(): `boolean` <Badge type="tip" text="client" />  |
| 是否是hovered|
| **[name](mw.Widget.md#name)**(): `string` <Badge type="tip" text="client" />  |
| 设定名字|
| **[paintSpaceGeometry](mw.Widget.md#paintspacegeometry)**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />  |
| 获取最后一次用于渲染Widget的几何信息|
| **[parent](mw.Widget.md#parent)**(): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 获取父节点|
| **[position](mw.Widget.md#position)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <Badge type="tip" text="client" />  |
| 设置控件的位置|
| **[renderOpacity](mw.Widget.md#renderopacity)**(): `number` <Badge type="tip" text="client" />  |
| 设置渲染透明度 0 ~ 1|
| **[renderScale](mw.Widget.md#renderscale)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 设置渲染缩放|
| **[renderShear](mw.Widget.md#rendershear)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 设置渲染错切形变|
| **[renderTransformAngle](mw.Widget.md#rendertransformangle)**(): `number` <Badge type="tip" text="client" />  |
| 设置渲染的角度|
| **[renderTransformPivot](mw.Widget.md#rendertransformpivot)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 设置渲染锚点|
| **[size](mw.Widget.md#size)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 设置控件的大小|
| **[tickSpaceGeometry](mw.Widget.md#tickspacegeometry)**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />  |
| 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](mw.Widget.md#transform)**(): `Readonly`<[`UITransform`](mw.UITransform.md)\> <Badge type="tip" text="client" />  |
| 设置控件的大小和位置|
| **[visibility](mw.Widget.md#visibility)**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <Badge type="tip" text="client" />  |
| 设置可见性|
| **[visible](mw.Widget.md#visible)**(): `boolean` <Badge type="tip" text="client" />  |
| 是否可见|
| **[zOrder](mw.Widget.md#zorder)**(): `number` <Badge type="tip" text="client" />  |
| 设置zoder|
:::


### Methods <Score text="Methods" /> 
| **[isPressed](mw.StaleButton.md#ispressed)**(): `boolean` <Badge type="tip" text="client" />  |
| :-----|
| 是否按下|
| **[setDisableImageColorByHex](mw.StaleButton.md#setdisableimagecolorbyhex)**(`inHexString`: `string`): `void` <Badge type="tip" text="client" />  |
| 设置不可用颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setDisableImageColorDecimal](mw.StaleButton.md#setdisableimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <Badge type="tip" text="client" />  |
| 设置不可用颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setFontColorByHex](mw.StaleButton.md#setfontcolorbyhex)**(`inHexString`: `string`): `void` <Badge type="tip" text="client" />  |
| 设置字体颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setFontColorDecimal](mw.StaleButton.md#setfontcolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <Badge type="tip" text="client" />  |
| 设置字体颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setNormalImageColorByHex](mw.StaleButton.md#setnormalimagecolorbyhex)**(`inHexString`: `string`): `void` <Badge type="tip" text="client" />  |
| 设置正常颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setNormalImageColorDecimal](mw.StaleButton.md#setnormalimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <Badge type="tip" text="client" />  |
| 设置正常颜色,指定R、G、B、A设置颜色 0 ~255|
| **[setPressedImageColorByHex](mw.StaleButton.md#setpressedimagecolorbyhex)**(`inHexString`: `string`): `void` <Badge type="tip" text="client" />  |
| 设置按下颜色,指定Hex的颜色文本设定颜色 #05050505|
| **[setPressedImageColorDecimal](mw.StaleButton.md#setpressedimagecolordecimal)**(`R`: `number`, `G`: `number`, `B`: `number`, `A`: `number`): `void` <Badge type="tip" text="client" />  |
| 设置按下颜色,指定R、G、B、A设置颜色 0 ~255|
| **[newObject](mw.StaleButton.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`StaleButton`](mw.StaleButton.md) <Badge type="tip" text="client" />  |
| 当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void` <Badge type="tip" text="client" />  |
| :-----|
| 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean` <Badge type="tip" text="client" />  |
| 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <Badge type="tip" text="client" />  |
| 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void` <Badge type="tip" text="client" />  |
| 立刻移除并添加到根节点 可以再使用|
:::


## Accessors

___

### clickMethod <Score text="clickMethod" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **clickMethod**(`inClickMethod`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置点击模式

#### Parameters

| `inClickMethod` [`ButtonClickMethod`](../enums/mw.ButtonClickMethod.md) | 点击模式 |
| :------ | :------ |


点击模式选择


</td>
</tr></tbody>
</table>

___

### contentColor <Score text="contentColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **contentColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **contentColor**(`inContentColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置字体内容颜色

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 字体内容颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体内容颜色

#### Parameters

| `inContentColor` [`LinearColor`](mw.LinearColor.md) | 颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### disableImageColor <Score text="disableImageColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **disableImageColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **disableImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取禁用图片颜色

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 禁用图片颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置禁用图片颜色

#### Parameters

| `inColor` [`LinearColor`](mw.LinearColor.md) | 输入的颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### disableImageDrawType <Score text="disableImageDrawType" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **disableImageDrawType**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **disableImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取禁用图片绘制类型

#### Returns

| [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 禁用图片绘制类型 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置禁用图片绘制类型

#### Parameters

| `inDrawType` [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | void |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### disableImageGuid <Score text="disableImageGuid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **disableImageGuid**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **disableImageGuid**(`inGuid`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取禁用图片ID

#### Returns

| `string` | 禁用图片ID |
| :------ | :------ |


</td>
<td style="text-align: left">


设置不可用图片ID

#### Parameters

| `inGuid` | `string` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### disableImageMargin <Score text="disableImageMargin" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **disableImageMargin**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **disableImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取禁用图片边距

#### Returns

| [`Margin`](mw.Margin.md) | 禁用图片边距 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置禁用图片边距

#### Parameters

| `inMargin` [`Margin`](mw.Margin.md) | 边距 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### disableImageSize <Score text="disableImageSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **disableImageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **disableImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取禁用图片大小

#### Returns

| [`Vector2`](mw.Vector2.md) | 禁用图片大小 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置禁用图片大小

#### Parameters

| `inSize` [`Vector2`](mw.Vector2.md) | 大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### focusable <Score text="focusable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **focusable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **focusable**(`inFocus`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否获取输入焦点

#### Returns

| `boolean` | 是否获取输入焦点 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否获取输入焦点

#### Parameters

| `inFocus` `boolean` | 是否获取输入焦点 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### fontColor <Score text="fontColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **fontColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **fontColor**(`inColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体颜色

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 字体颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体颜色

#### Parameters

| `inColor` [`LinearColor`](mw.LinearColor.md) | 字体颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### fontLetterSpace <Score text="fontLetterSpace" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **fontLetterSpace**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **fontLetterSpace**(`fontLetterSpace`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体间距

#### Returns

| `number` | 字体间距 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体间距

#### Parameters

| `fontLetterSpace` `number` | 间距 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### fontSize <Score text="fontSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **fontSize**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **fontSize**(`FontSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体大小

#### Returns

| `number` | 字体大小 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体大小

#### Parameters

| `FontSize` `number` | 大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### glyph <Score text="glyph" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **glyph**(): [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **glyph**(`inGlyph`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体字形

#### Returns

| [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) | 字体字形 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体字形

#### Parameters

| `inGlyph` [`UIFontGlyph`](../enums/mw.UIFontGlyph.md) | 字体字形的类型 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### normalImageColor <Score text="normalImageColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalImageColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **normalImageColor**(`inColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取普通图片颜色

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 普通图片颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置普通图片颜色

#### Parameters

| `inColor` [`LinearColor`](mw.LinearColor.md) |  普通图片颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### normalImageDrawType <Score text="normalImageDrawType" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalImageDrawType**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **normalImageDrawType**(`inDrawType`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取普通图片绘制类型

#### Returns

| [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 普通图片绘制类型 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置普通图片绘制类型

#### Parameters

| `inDrawType` [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 绘制类型 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### normalImageGuid <Score text="normalImageGuid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalImageGuid**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **normalImageGuid**(`inGuid`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取普通图片ID

#### Returns

| `string` | 普通图片ID |
| :------ | :------ |


</td>
<td style="text-align: left">


设置正常图片ID

#### Parameters

| `inGuid` | `string` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### normalImageMargin <Score text="normalImageMargin" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalImageMargin**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **normalImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取普通图片边距

#### Returns

| [`Margin`](mw.Margin.md) | 边距 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置普通图片边距

#### Parameters

| `inMargin` [`Margin`](mw.Margin.md) | 普通图片边距 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### normalImageSize <Score text="normalImageSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalImageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **normalImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取图片大小

#### Returns

| [`Vector2`](mw.Vector2.md) | 普通图片大小 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置图片大小

#### Parameters

| `inSize` [`Vector2`](mw.Vector2.md) | 设置的图片大小，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### onClicked <Score text="onClicked" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onClicked**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


点击事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 返回事件的代理 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onHovered <Score text="onHovered" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onHovered**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


悬浮事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 返回事件的代理 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onPressed <Score text="onPressed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onPressed**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


按下事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 返回事件的代理 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onReleased <Score text="onReleased" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onReleased**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


释放事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 返回事件的代理 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onUnhovered <Score text="onUnhovered" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onUnhovered**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


未悬浮事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 返回事件的代理 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### outlineColor <Score text="outlineColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **outlineColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **outlineColor**(`inOutlineColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体描边颜色

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 字体描边颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体描边颜色

#### Parameters

| `inOutlineColor` [`LinearColor`](mw.LinearColor.md) | 描边颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### outlineSize <Score text="outlineSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **outlineSize**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **outlineSize**(`inOutlineSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体描边宽度

#### Returns

| `number` | 字体描边宽度 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体描边宽度

#### Parameters

| `inOutlineSize` `number` | 设置的大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### pressMethod <Score text="pressMethod" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **pressMethod**(`inPressMethod`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置按压模式

#### Parameters

| `inPressMethod` [`ButtonPressMethod`](../enums/mw.ButtonPressMethod.md) | 按压模式 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### pressedImagColor <Score text="pressedImagColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **pressedImagColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **pressedImagColor**(`inColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按压图片颜色

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 按压图片颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置按压图片颜色

#### Parameters

| `inColor` [`LinearColor`](mw.LinearColor.md) | 按压的颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### pressedImageDrawType <Score text="pressedImageDrawType" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **pressedImageDrawType**(): [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **pressedImageDrawType**(`inDrawTYpe`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按压图片绘制类型

#### Returns

| [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 按压图片绘制类型 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置按压图片绘制类型

#### Parameters

| `inDrawTYpe` [`SlateBrushDrawType`](../enums/mw.SlateBrushDrawType.md) | 绘制类型 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### pressedImageGuid <Score text="pressedImageGuid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **pressedImageGuid**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **pressedImageGuid**(`inGuid`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按下图片ID

#### Returns

| `string` | 按下图片ID |
| :------ | :------ |


</td>
<td style="text-align: left">


设置按下图片ID

#### Parameters

| `inGuid` | `string` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### pressedImageMargin <Score text="pressedImageMargin" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **pressedImageMargin**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **pressedImageMargin**(`inMargin`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按压图片边距

#### Returns

| [`Margin`](mw.Margin.md) | 按压图片边距 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置按压图片边距

#### Parameters

| `inMargin` [`Margin`](mw.Margin.md) | 边距 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### pressedImageSize <Score text="pressedImageSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **pressedImageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **pressedImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按压图片大小

#### Returns

| [`Vector2`](mw.Vector2.md) | 按压图片大小 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置按压图片大小

#### Parameters

| `inSize` [`Vector2`](mw.Vector2.md) | size |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### shadowColor <Score text="shadowColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **shadowColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **shadowColor**(`inShadowColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体阴影颜色

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 字体阴影颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体阴影颜色

#### Parameters

| `inShadowColor` [`LinearColor`](mw.LinearColor.md) | 输入的颜色，Type.LinearColor类型，数据范围0~1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### shadowOffset <Score text="shadowOffset" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **shadowOffset**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **shadowOffset**(`inOffset`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体阴影偏移

#### Returns

| [`Vector2`](mw.Vector2.md) | 字体阴影偏移 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体阴影偏移

#### Parameters

| `inOffset` [`Vector2`](mw.Vector2.md) | 阴影偏移量 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### strikethroughEnable <Score text="strikethroughEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **strikethroughEnable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **strikethroughEnable**(`inEnableStrikethrough`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启字体删除线

#### Returns

| `boolean` | 是否开启字体删除线 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启字体删除线

#### Parameters

| `inEnableStrikethrough` `boolean` | 是否开启 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### text <Score text="text" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **text**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **text**(`InString`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按钮文字

#### Returns

| `string` | 返回文字 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置按钮文字

#### Parameters

| `InString` `string` | 文字 |
| :------ | :------ |


新文本


</td>
</tr></tbody>
</table>

___

### textAlign <Score text="textAlign" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **textAlign**(): [`TextJustify`](../enums/mw.TextJustify.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **textAlign**(`InTextJustify`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体对齐方式

#### Returns

| [`TextJustify`](../enums/mw.TextJustify.md) | 字体对齐方式 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体对齐方式

#### Parameters

| `InTextJustify` [`TextJustify`](../enums/mw.TextJustify.md) | 对齐方式的枚举 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### textVerticalAlign <Score text="textVerticalAlign" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **textVerticalAlign**(): [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **textVerticalAlign**(`inTextVerticalJustify`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取字体垂直对齐方式

#### Returns

| [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) | 字体垂直对齐方式 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置字体垂直对齐方式

#### Parameters

| `inTextVerticalJustify` [`TextVerticalJustify`](../enums/mw.TextVerticalJustify.md) | 对齐方式 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### touchMethod <Score text="touchMethod" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **touchMethod**(`inTouchMethod`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置触摸模式

#### Parameters

| `inTouchMethod` [`ButtonTouchMethod`](../enums/mw.ButtonTouchMethod.md) | Touch模式选择 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### transitionEnable <Score text="transitionEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **transitionEnable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **transitionEnable**(`inBoolean`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取按钮是否启用过度模式,按下是否有效果

#### Returns

| `boolean` | 按钮是否启用过度模式 |
| :------ | :------ |


</td>
<td style="text-align: left">


是否套用不同的按下方案

#### Parameters

| `inBoolean` `boolean` | 是否套用不同的按下方案 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### underlineEnable <Score text="underlineEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **underlineEnable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **underlineEnable**(`inEnableUnderline`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回是否开启字体下划线

#### Returns

| `boolean` | 获取是否开启字体下划线 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启字体下划线

#### Parameters

| `inEnableUnderline` `boolean` | 设置是否开启下划线 |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

___

### isPressed <Score text="isPressed" /> 

• **isPressed**(): `boolean` <Badge type="tip" text="client" />

是否按下

#### Returns

| `boolean` | 返回按钮是否按下 |
| :------ | :------ |

___

### setDisableImageColorByHex <Score text="setDisableImageColorByHex" /> 

• **setDisableImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置不可用颜色,指定Hex的颜色文本设定颜色 #05050505

#### Parameters

| `inHexString` `string` | 颜色字符串 |
| :------ | :------ |


___

### setDisableImageColorDecimal <Score text="setDisableImageColorDecimal" /> 

• **setDisableImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置不可用颜色,指定R、G、B、A设置颜色 0 ~255

#### Parameters

| `R` `number` | 颜色R值，数据范围0~255 |
| :------ | :------ |
| `G` `number` | 颜色G值，数据范围0~255 |
| `B` `number` | 颜色B值，数据范围0~255 |
| `A` `number` | 颜色透明度，数据范围0~255 |


___

### setFontColorByHex <Score text="setFontColorByHex" /> 

• **setFontColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置字体颜色,指定Hex的颜色文本设定颜色 #05050505

#### Parameters

| `inHexString` `string` | Hex颜色字符串 |
| :------ | :------ |


___

### setFontColorDecimal <Score text="setFontColorDecimal" /> 

• **setFontColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置字体颜色,指定R、G、B、A设置颜色 0 ~255

#### Parameters

| `R` `number` | 字体R值，数据范围0~255 |
| :------ | :------ |
| `G` `number` | 字体G值，数据范围0~255 |
| `B` `number` | 字体B值，数据范围0~255 |
| `A` `number` | 字体透明度，数据范围0~255 |


___

### setNormalImageColorByHex <Score text="setNormalImageColorByHex" /> 

• **setNormalImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置正常颜色,指定Hex的颜色文本设定颜色 #05050505

#### Parameters

| `inHexString` `string` | 颜色字符串 |
| :------ | :------ |


___

### setNormalImageColorDecimal <Score text="setNormalImageColorDecimal" /> 

• **setNormalImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置正常颜色,指定R、G、B、A设置颜色 0 ~255

#### Parameters

| `R` `number` | 颜色R值，数据范围0~255 |
| :------ | :------ |
| `G` `number` | 颜色G值，数据范围0~255 |
| `B` `number` | 颜色B值，数据范围0~255 |
| `A` `number` | 颜色透明度，数据范围0~255 |


___

### setPressedImageColorByHex <Score text="setPressedImageColorByHex" /> 

• **setPressedImageColorByHex**(`inHexString`): `void` <Badge type="tip" text="client" />

设置按下颜色,指定Hex的颜色文本设定颜色 #05050505

#### Parameters

| `inHexString` `string` | 颜色字符串 |
| :------ | :------ |


___

### setPressedImageColorDecimal <Score text="setPressedImageColorDecimal" /> 

• **setPressedImageColorDecimal**(`R`, `G`, `B`, `A`): `void` <Badge type="tip" text="client" />

设置按下颜色,指定R、G、B、A设置颜色 0 ~255

#### Parameters

| `R` `number` | 颜色R值，数据范围0~255 |
| :------ | :------ |
| `G` `number` | 颜色G值，数据范围0~255 |
| `B` `number` | 颜色B值，数据范围0~255 |
| `A` `number` | 颜色透明度，数据范围0~255 |


___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`StaleButton`](mw.StaleButton.md) <Badge type="tip" text="client" />

创建 StaleButton 控件

#### Parameters

| `parent?` [`Canvas`](mw.Canvas.md) | 创建控件的父级 Canvas 对象 default:null |
| :------ | :------ |
| `inName?` `string` | 创建控件的名称 default:null |

#### Returns

| [`StaleButton`](mw.StaleButton.md) | 返回创建的对象 |
| :------ | :------ |

当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁
