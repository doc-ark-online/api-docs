[UI](../groups/Core.UI.md) / UserWidgetPrefab

# UserWidgetPrefab <Badge type="tip" text="Class" /> <Score text="UserWidgetPrefab" />

ui预制体

## Hierarchy

- [`UserWidget`](mw.UserWidget.md)

  ↳ **`UserWidgetPrefab`**

## Table of contents

| Accessors |
| :-----|


::: details 点击查看继承
| Accessors |
| :-----|
| **[focusable](mw.UserWidget.md#focusable)**(): `boolean` <br> 获取是否响应键盘焦点事件|
| **[rootContent](mw.UserWidget.md#rootcontent)**(): [`Canvas`](mw.Canvas.md) <br> 获取根Canvas|
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
| **[addToViewport](mw.UserWidget.md#addtoviewport)**(`zOrder`: `number`): `void` <br> 添加到屏幕上|
| **[findChildByPath](mw.UserWidget.md#findchildbypath)**(`inPath`: `string`): [`Widget`](mw.Widget.md) <br> 通过相对路径查找节点|
| **[removeRootContent](mw.UserWidget.md#removerootcontent)**(): `void` <br> 移除根Canvas,会销毁根Canvas，无法再次使用|
| **[newObject](mw.UserWidget.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md)): [`UserWidget`](mw.UserWidget.md) <br> 创建 UserWidget 控件|
:::


## Methods