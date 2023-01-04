[UI](../modules/UI.UI.md) / ColorPick

# ColorPick <Badge type="tip" text="Class" />

**`Description`**

颜色选择器

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`ColorPick`**

## Table of contents

| Accessors |
| :-----|
| **[color](UI.ColorPick.md#color)**([`LinearColor`](Type.LinearColor.md)): `void` <br> 设置color picker的颜色|
| **[imageGuid](UI.ColorPick.md#imageguid)**(`string`): `void` <br> 设置color picker 的图片|
| **[onColorChangeFinished](UI.ColorPick.md#oncolorchangefinished)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\> <br> 颜色改变完成时触发的函数代理|
| **[onColorChanged](UI.ColorPick.md#oncolorchanged)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\> <br> 颜色改变时触发的代理|
| **[onTouchFinished](UI.ColorPick.md#ontouchfinished)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\> <br> 点击完成时触发的代理函数|
| **[onTouchStart](UI.ColorPick.md#ontouchstart)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\> <br> 点击时触发的代理|

| Methods |
| :-----|
| **[newObject](UI.ColorPick.md#newobject)**([`Canvas`](UI.Canvas.md), `string`): [`ColorPick`](UI.ColorPick.md) <br> 创建 ColorPick 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|

## Accessors

### color

• `set` **color**(`inColor`): `void`

**`Description`**

设置color picker的颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 输入的颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`


### imageGuid

• `set` **imageGuid**(`inGuid`): `void`

**`Description`**

设置color picker 的图片

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGuid` | `string` | 输入的图片ID |

#### Returns

`void`


### onColorChangeFinished

• `get` **onColorChangeFinished**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\>

**`Description`**

颜色改变完成时触发的函数代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\>

返回事件的代理

___

### onColorChanged

• `get` **onColorChanged**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\>

**`Description`**

颜色改变时触发的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\>

返回事件的代理

___

### onTouchFinished

• `get` **onTouchFinished**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\>

**`Description`**

点击完成时触发的代理函数

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\>

返回事件的代理

___

### onTouchStart

• `get` **onTouchStart**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\>

**`Description`**

点击时触发的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\>

返回事件的代理


## Methods

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`ColorPick`](UI.ColorPick.md)

**`Description`**

创建 ColorPick 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`ColorPick`](UI.ColorPick.md)

返回创建的对象
