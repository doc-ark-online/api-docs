[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / UIBehavior

# Class: UIBehavior

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).UIBehavior

**`Author`**

jie.wu

**`Description`**

UI 的驱动脚本基类

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](UI.UI.UIBehavior.md#constructor)

### Accessors

- [canUpdate](UI.UI.UIBehavior.md#canupdate)
- [fullScreen](UI.UI.UIBehavior.md#fullscreen)
- [layer](UI.UI.UIBehavior.md#layer)
- [rootCanvas](UI.UI.UIBehavior.md#rootcanvas)
- [uiObject](UI.UI.UIBehavior.md#uiobject)
- [uiWidgetBase](UI.UI.UIBehavior.md#uiwidgetbase)
- [visible](UI.UI.UIBehavior.md#visible)

### Methods

- [destroy](UI.UI.UIBehavior.md#destroy)
- [detectDrag](UI.UI.UIBehavior.md#detectdrag)
- [detectDragIfPressed](UI.UI.UIBehavior.md#detectdragifpressed)
- [newDragDrop](UI.UI.UIBehavior.md#newdragdrop)
- [setVisible](UI.UI.UIBehavior.md#setvisible)
- [addBehavior](UI.UI.UIBehavior.md#addbehavior)
- [clearBehavior](UI.UI.UIBehavior.md#clearbehavior)
- [getBehavior](UI.UI.UIBehavior.md#getbehavior)
- [removeBehavior](UI.UI.UIBehavior.md#removebehavior)

## Constructors

### constructor

• **new UIBehavior**()

## Accessors

### canUpdate

• `get` **canUpdate**(): `boolean`

**`Description`**

是否能触发 onUpdate 函数

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

返回能否触发的标志

#### Defined in

UI/index.d.ts:2680

• `set` **canUpdate**(`bCanUpdate`): `void`

**`Description`**

设置是否能触发 onUpdate 函数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type      | Description          |
| :----------- | :-------- | :------------------- |
| `bCanUpdate` | `boolean` | usage:能否触发的标志 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2686

---

### fullScreen

• `set` **fullScreen**(`inFull`): `void`

**`Description`**

设置随父节点全屏适配,会验证父节点大小以保证跟随父节点的大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type      | Description                       |
| :------- | :-------- | :-------------------------------- |
| `inFull` | `boolean` | usage: 设置为随父节点大小全屏适配 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2709

---

### layer

• `get` **layer**(): `number`

**`Description`**

获取 UI 的 Layer 层级,显示可能会影响到 zOrder,使用 UIManager 显示 UI 时，
会根据 Layer 层级动态设置 zOrder，每一次调用都会重新计算当前 layer 的新 zOrder，确保 UI 位于当前层级的顶端

**`Effect`**

只在客户端调用生效

**`Example`**

使用示例: 一般来说，可以使用内置定义好的，也可以是自定义拓展层级

```
Extension.UIManager.Instance.show(UIBehavior,UIBehavior.layer)
// 内置定义好的层级
[
Extension.UILayerScene,  //场景层 zOrder开始于0
Extension.UILayerBottom, //底层 zOrder开始于100000
Extension.UILayerMiddle, //中层 zOrder开始于200000
Extension.UILayerOwn     //独享层(调用此层会自动隐藏Bottom和Middle层) zOrder开始于300000
Extension.UILayerTop     //顶层 zOrder开始于400000
Extension.UILayerDialog  //对话层 zOrder开始于500000
Extension.UILayerSystem  //系统层 zOrder开始于600000
Extension.UILayerError   //错误层 这个层级不可以使用，需要增加层级可以使用Extension.UIManager.Instance.addUILayerMap zOrder开始于700000
]
```

#### Returns

`number`

Layer 层级

#### Defined in

UI/index.d.ts:2763

• `set` **layer**(`inLayer`): `void`

**`Description`**

设置 UI 的所在的 Layer 层级,显示可能会影响到 zOrder,使用 UIManager 显示 UI 时，
会根据 Layer 层级动态设置 zOrder，每一次调用都会重新计算当前 layer 的新 zOrder，确保 UI 位于当前层级的顶端

**`Effect`**

只在客户端调用生效

**`Example`**

使用示例: 一般来说，可以使用内置定义好的，也可以自定义拓展层级

```
this.layer = Extension.UILayerScene;
// 内置定义好的层级
[
Extension.UILayerScene,  //场景层 zOrder开始于0
Extension.UILayerBottom, //底层 zOrder开始于100000
Extension.UILayerMiddle, //中层 zOrder开始于200000
Extension.UILayerOwn     //独享层(调用此层会自动隐藏Bottom和Middle层) zOrder开始于300000
Extension.UILayerTop     //顶层 zOrder开始于400000
Extension.UILayerDialog  //对话层 zOrder开始于500000
Extension.UILayerSystem  //系统层 zOrder开始于600000
Extension.UILayerError   //错误层 这个层级不可以使用，需要增加层级可以使用Extension.UIManager.Instance.addUILayerMap zOrder开始于700000
]
```

#### Parameters

| Name      | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `inLayer` | `number` | usage: 设置 Layer 层级 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2740

---

### rootCanvas

• `get` **rootCanvas**(): [`Canvas`](UI.UI.Canvas.md)

**`Description`**

获取 UI 的根 Canvas 节点

**`Effect`**

只在客户端调用生效

#### Returns

[`Canvas`](UI.UI.Canvas.md)

返回 canvas 节点

#### Defined in

UI/index.d.ts:2769

---

### uiObject

• `get` **uiObject**(): [`Widget`](UI.UI.Widget.md)

**`Description`**

获取脚本挂载的 UI 对象

#### Returns

[`Widget`](UI.UI.Widget.md)

脚本挂载的 UI 对象

#### Defined in

UI/index.d.ts:2668

---

### uiWidgetBase

• `get` **uiWidgetBase**(): [`UserWidget`](UI.UI.UserWidget.md)

**`Description`**

转化 UIObject 为指定 UserWidget 对象

**`Effect`**

只在客户端调用生效

#### Returns

[`UserWidget`](UI.UI.UserWidget.md)

返回转化指定 UserWidget 对象

#### Defined in

UI/index.d.ts:2674

---

### visible

• `get` **visible**(): `boolean`

**`Description`**

获取 UI 是否显示

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

返回是否可见

#### Defined in

UI/index.d.ts:2697

• `set` **visible**(`inVisible`): `void`

**`Description`**

设置 UI 是否显示,会触发绑定的脚本的 OnShow/OnHide 事件，需要传递参数的可以使用 setVisible 方法

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type      | Description                                                                |
| :---------- | :-------- | :------------------------------------------------------------------------- |
| `inVisible` | `boolean` | usage: 设置是否可见 可见设置为 SelfHitTestInvisible,不可见设置为 Collapsed |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2703

## Methods

### destroy

▸ **destroy**(): `void`

**`Description`**

销毁 UI 对象

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

UI/index.d.ts:2691

---

### detectDrag

▸ **detectDrag**(`dragKey`): [`EventReply`](UI.UI.EventReply.md)

**`Description`**

触发 DragDrop 事件的检测

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                 | Description                      |
| :-------- | :----------------------------------- | :------------------------------- |
| `dragKey` | [`Keys`](../enums/Type.Type.Keys.md) | usage:触发按键 default:Type.Keys |

#### Returns

[`EventReply`](UI.UI.EventReply.md)

返回触发的事件回复

#### Defined in

UI/index.d.ts:2776

---

### detectDragIfPressed

▸ **detectDragIfPressed**(`inPointEvent`, `dragKey`): [`EventReply`](UI.UI.EventReply.md)

**`Description`**

如果事件检测通过就触发 DragDrop 事件的回复

**`Effect`**

只在客户端调用生效

#### Parameters

| Name           | Type                                    | Description              |
| :------------- | :-------------------------------------- | :----------------------- |
| `inPointEvent` | [`PointerEvent`](UI.UI.PointerEvent.md) | usage:传递触发的事件信息 |
| `dragKey`      | [`Keys`](../enums/Type.Type.Keys.md)    | usage:触发按键           |

#### Returns

[`EventReply`](UI.UI.EventReply.md)

返回触发的事件回复

#### Defined in

UI/index.d.ts:2784

---

### newDragDrop

▸ **newDragDrop**(`inVisualWidget`, `inTag?`, `inPayLoad?`, `inPivot?`, `inOffset?`): [`DragDropOperation`](UI.UI.DragDropOperation.md)

**`Description`**

创建 DragDrop 事件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                       | Description                                               |
| :--------------- | :----------------------------------------- | :-------------------------------------------------------- |
| `inVisualWidget` | [`Widget`](UI.UI.Widget.md)                | usage:拖拽显示的 UI 控件                                  |
| `inTag?`         | `string`                                   | usage:标签文本 default:""                                 |
| `inPayLoad?`     | `any`                                      | usage:拖拽事件数据信息 default:null                       |
| `inPivot?`       | [`DragPivot`](../enums/UI.UI.DragPivot.md) | usage:拖拽显示 UI 的锚点 default:UIType.DragPivot.TopLeft |
| `inOffset?`      | [`Vector2`](Type.Type.Vector2.md)          | usage:拖拽显示 UI 相对于锚点的偏移 default:vector2(0,0)   |

#### Returns

[`DragDropOperation`](UI.UI.DragDropOperation.md)

返回触发的事件回复

#### Defined in

UI/index.d.ts:2798

---

### setVisible

▸ **setVisible**(`inVisible`, `...params`): `void`

**`Description`**

设置 UI 是否显示,会触发绑定的脚本的 OnShow/OnHide 事件，可以传递参数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type                                                                | Description                                                                                                                          |
| :---------- | :------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| `inVisible` | `boolean` \| [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | usage: 设置是否可见,如果是 boolean 类型设置为 SelfHitTestInvisible,不可见设置为 Collapsed， 否则的话就是按照枚举拉设置具体的显示类型 |
| `...params` | `any`[]                                                             | usage: 传递给 onShow 的参数                                                                                                          |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2717

---

### addBehavior

▸ `Static` **addBehavior**(`key`, `value`): `void`

**`Description`**

添加一个全局的行为记录

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     | Description     |
| :------ | :------- | :-------------- |
| `key`   | `string` | usage: 行为标记 |
| `value` | `any`    | usage: 行为值   |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2645

---

### clearBehavior

▸ `Static` **clearBehavior**(): `void`

**`Description`**

清空全局的行为记录

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

UI/index.d.ts:2656

---

### getBehavior

▸ `Static` **getBehavior**(`key`): `any`

**`Description`**

获取一个全局的行为记录

**`Effect`**

只在客户端调用生效

#### Parameters

| Name  | Type     | Description     |
| :---- | :------- | :-------------- |
| `key` | `string` | usage: 行为标记 |

#### Returns

`any`

返回一个行为

#### Defined in

UI/index.d.ts:2663

---

### removeBehavior

▸ `Static` **removeBehavior**(`key`): `void`

**`Description`**

移除一个全局的行为记录

**`Effect`**

只在客户端调用生效

#### Parameters

| Name  | Type     | Description     |
| :---- | :------- | :-------------- |
| `key` | `string` | usage: 行为标记 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2651
