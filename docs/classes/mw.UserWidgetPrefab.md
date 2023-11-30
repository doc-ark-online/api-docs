[界面](../groups/界面.界面.md) / UserWidgetPrefab

# UserWidgetPrefab <Badge type="tip" text="Class" /> <Score text="UserWidgetPrefab" />

ui预制体

## Hierarchy

- [`UserWidget`](mw.UserWidget.md)

  ↳ **`UserWidgetPrefab`**

## Table of contents

### Accessors <Score text="Accessors" /> 


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[focusable](mw.UserWidget.md#focusable)**(): `boolean` <Badge type="tip" text="client" />  |
| :-----|
| 设置是否响应键盘焦点事件|
| **[rootContent](mw.UserWidget.md#rootcontent)**(): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />  |
| 设置UI的根Canvas|
:::


### Methods <Score text="Methods" /> 


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[addToViewport](mw.UserWidget.md#addtoviewport)**(`zOrder`: `number`): `void` <Badge type="tip" text="client" />  |
| :-----|
| 添加到屏幕上|
| **[findChildByPath](mw.UserWidget.md#findchildbypath)**(`inPath`: `string`): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 通过相对路径查找节点|
| **[removeRootContent](mw.UserWidget.md#removerootcontent)**(): `void` <Badge type="tip" text="client" />  |
| 移除根Canvas,会销毁根Canvas，无法再次使用|
| **[newObject](mw.UserWidget.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md)): [`UserWidget`](mw.UserWidget.md) <Badge type="tip" text="client" />  |
| 创建 UserWidget 控件|
:::


## Accessors

## Methods
