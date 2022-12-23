[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / UIBehaviour

# Class: UIBehaviour

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).UIBehaviour

**`Author`**

wujie

**`Description`**

UI的驱动脚本基类

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](UI.UI.UIBehaviour.md#constructor)

### Accessors

- [canUpdate](UI.UI.UIBehaviour.md#canupdate)
- [fullScreen](UI.UI.UIBehaviour.md#fullscreen)
- [layer](UI.UI.UIBehaviour.md#layer)
- [rootCanvas](UI.UI.UIBehaviour.md#rootcanvas)
- [uiObject](UI.UI.UIBehaviour.md#uiobject)
- [uiWidgetBase](UI.UI.UIBehaviour.md#uiwidgetbase)
- [visible](UI.UI.UIBehaviour.md#visible)

### Methods

- [destroy](UI.UI.UIBehaviour.md#destroy)
- [detectDrag](UI.UI.UIBehaviour.md#detectdrag)
- [detectDragIfPressed](UI.UI.UIBehaviour.md#detectdragifpressed)
- [newDragDrop](UI.UI.UIBehaviour.md#newdragdrop)
- [setVisible](UI.UI.UIBehaviour.md#setvisible)
- [addBehaviour](UI.UI.UIBehaviour.md#addbehaviour)
- [clearBehaviour](UI.UI.UIBehaviour.md#clearbehaviour)
- [getBehaviour](UI.UI.UIBehaviour.md#getbehaviour)
- [removeBehaviour](UI.UI.UIBehaviour.md#removebehaviour)

## Constructors

### constructor

• **new UIBehaviour**()

## Accessors

### canUpdate

• `get` **canUpdate**(): `boolean`

**`Description`**

是否能触发onUpdate函数

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

返回能否触发的标志

#### Defined in

UI/index.d.ts:2685

• `set` **canUpdate**(`bCanUpdate`): `void`

**`Description`**

设置是否能触发onUpdate函数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bCanUpdate` | `boolean` | usage:能否触发的标志 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2691

___

### fullScreen

• `set` **fullScreen**(`inFull`): `void`

**`Description`**

设置随父节点全屏适配,会验证父节点大小以保证跟随父节点的大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inFull` | `boolean` | usage: 设置为随父节点大小全屏适配 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2714

___

### layer

• `get` **layer**(): `number`

**`Description`**

获取UI的Layer层级,显示可能会影响到zOrder,使用UIManager显示UI时，
会根据Layer层级动态设置zOrder，每一次调用都会重新计算当前layer的新zOrder，确保UI位于当前层级的顶端

**`Effect`**

只在客户端调用生效

**`Example`**

使用示例: 一般来说，可以使用内置定义好的，也可以是自定义拓展层级
```
Extension.UIManager.Instance.show(UIBehaviour,UIBehaviour.layer)
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

Layer层级

#### Defined in

UI/index.d.ts:2768

• `set` **layer**(`inLayer`): `void`

**`Description`**

设置UI的所在的Layer层级,显示可能会影响到zOrder,使用UIManager显示UI时，
会根据Layer层级动态设置zOrder，每一次调用都会重新计算当前layer的新zOrder，确保UI位于当前层级的顶端

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `inLayer` | `number` | usage: 设置Layer层级 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2745

___

### rootCanvas

• `get` **rootCanvas**(): [`Canvas`](UI.UI.Canvas.md)

**`Description`**

获取UI的根Canvas节点

**`Effect`**

只在客户端调用生效

#### Returns

[`Canvas`](UI.UI.Canvas.md)

返回canvas节点

#### Defined in

UI/index.d.ts:2774

___

### uiObject

• `get` **uiObject**(): [`Widget`](UI.UI.Widget.md)

**`Description`**

获取脚本挂载的UI对象

#### Returns

[`Widget`](UI.UI.Widget.md)

脚本挂载的UI对象

#### Defined in

UI/index.d.ts:2673

___

### uiWidgetBase

• `get` **uiWidgetBase**(): [`UserWidget`](UI.UI.UserWidget.md)

**`Description`**

转化UIObject 为指定UserWidget对象

**`Effect`**

只在客户端调用生效

#### Returns

[`UserWidget`](UI.UI.UserWidget.md)

返回转化指定UserWidget对象

#### Defined in

UI/index.d.ts:2679

___

### visible

• `get` **visible**(): `boolean`

**`Description`**

获取UI是否显示

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

返回是否可见

#### Defined in

UI/index.d.ts:2702

• `set` **visible**(`inVisible`): `void`

**`Description`**

设置UI是否显示,会触发绑定的脚本的OnShow/OnHide事件，需要传递参数的可以使用setVisible方法

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inVisible` | `boolean` | usage: 设置是否可见 可见设置为SelfHitTestInvisible,不可见设置为Collapsed |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2708

## Methods

### destroy

▸ **destroy**(): `void`

**`Description`**

销毁UI对象

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

UI/index.d.ts:2696

___

### detectDrag

▸ **detectDrag**(`dragKey`): [`EventReply`](UI.UI.EventReply.md)

**`Description`**

触发DragDrop事件的检测

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dragKey` | [`Keys`](../enums/Type.Type.Keys.md) | usage:触发按键 default:Type.Keys |

#### Returns

[`EventReply`](UI.UI.EventReply.md)

返回触发的事件回复

#### Defined in

UI/index.d.ts:2781

___

### detectDragIfPressed

▸ **detectDragIfPressed**(`inPointEvent`, `dragKey`): [`EventReply`](UI.UI.EventReply.md)

**`Description`**

如果事件检测通过就触发DragDrop事件的回复

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPointEvent` | [`PointerEvent`](UI.UI.PointerEvent.md) | usage:传递触发的事件信息 |
| `dragKey` | [`Keys`](../enums/Type.Type.Keys.md) | usage:触发按键 |

#### Returns

[`EventReply`](UI.UI.EventReply.md)

返回触发的事件回复

#### Defined in

UI/index.d.ts:2789

___

### newDragDrop

▸ **newDragDrop**(`inVisualWidget`, `inTag?`, `inPayLoad?`, `inPivot?`, `inOffset?`): [`DragDropOperation`](UI.UI.DragDropOperation.md)

**`Description`**

创建DragDrop事件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inVisualWidget` | [`Widget`](UI.UI.Widget.md) | usage:UI控件 |
| `inTag?` | `string` | usage:鼠标悬浮文本 default:"" |
| `inPayLoad?` | `any` | usage:资源ID default:null |
| `inPivot?` | [`DragPivot`](../enums/UI.UI.DragPivot.md) | usage:枢轴 default:UIType.DragPivot.TopLeft |
| `inOffset?` | [`Vector2`](Type.Type.Vector2.md) | usage:偏移 default:vector2(0,0) |

#### Returns

[`DragDropOperation`](UI.UI.DragDropOperation.md)

返回触发的事件回复

#### Defined in

UI/index.d.ts:2803

___

### setVisible

▸ **setVisible**(`inVisible`, `...params`): `void`

**`Description`**

设置UI是否显示,会触发绑定的脚本的OnShow/OnHide事件，可以传递参数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inVisible` | `boolean` \| [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | usage: 设置是否可见,如果是boolean类型设置为SelfHitTestInvisible,不可见设置为Collapsed， 否则的话就是按照枚举拉设置具体的显示类型 |
| `...params` | `any`[] | usage: 传递给onShow的参数 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2722

___

### addBehaviour

▸ `Static` **addBehaviour**(`key`, `value`): `void`

**`Description`**

添加一个全局的行为记录

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | usage: 行为标记 |
| `value` | `any` | usage: 行为值 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2650

___

### clearBehaviour

▸ `Static` **clearBehaviour**(): `void`

**`Description`**

清空全局的行为记录

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

UI/index.d.ts:2661

___

### getBehaviour

▸ `Static` **getBehaviour**(`key`): `any`

**`Description`**

获取一个全局的行为记录

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | usage: 行为标记 |

#### Returns

`any`

返回一个行为

#### Defined in

UI/index.d.ts:2668

___

### removeBehaviour

▸ `Static` **removeBehaviour**(`key`): `void`

**`Description`**

移除一个全局的行为记录

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | usage: 行为标记 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2656
