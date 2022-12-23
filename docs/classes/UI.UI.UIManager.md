[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / UIManager

# Class: UIManager

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).UIManager

**`Author`**

yangwei

**`Instance`**

**`Description`**

UI管理类，可以继承此类，自带一个全局UI作为UI的总节点。
需要在全局调用，否则会自动在第一个UI生成时自动生成一个默认的管理类.

**`Precautions`**

单例类，请使用getInstance获取对象

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](UI.UI.UIManager.md#constructor)

### Properties

- [allPanels](UI.UI.UIManager.md#allpanels)
- [createPanelMap](UI.UI.UIManager.md#createpanelmap)
- [logUIInfo](UI.UI.UIManager.md#loguiinfo)
- [uniquePanel](UI.UI.UIManager.md#uniquepanel)

### Accessors

- [canvas](UI.UI.UIManager.md#canvas)
- [enableUILogInfo](UI.UI.UIManager.md#enableuiloginfo)
- [instance](UI.UI.UIManager.md#instance)

### Methods

- [addUILayerMap](UI.UI.UIManager.md#adduilayermap)
- [create](UI.UI.UIManager.md#create)
- [destroy](UI.UI.UIManager.md#destroy)
- [destroyUI](UI.UI.UIManager.md#destroyui)
- [dumpUIData](UI.UI.UIManager.md#dumpuidata)
- [getAllUI](UI.UI.UIManager.md#getallui)
- [getUI](UI.UI.UIManager.md#getui)
- [getUILayer](UI.UI.UIManager.md#getuilayer)
- [hide](UI.UI.UIManager.md#hide)
- [hideUI](UI.UI.UIManager.md#hideui)
- [init](UI.UI.UIManager.md#init)
- [isShown](UI.UI.UIManager.md#isshown)
- [setAllMiddleAndBottomPanelVisible](UI.UI.UIManager.md#setallmiddleandbottompanelvisible)
- [show](UI.UI.UIManager.md#show)
- [showUI](UI.UI.UIManager.md#showui)
- [getInstance](UI.UI.UIManager.md#getinstance)

## Constructors

### constructor

• **new UIManager**()

## Properties

### allPanels

• `Protected` **allPanels**: [`UIBehaviour`](UI.UI.UIBehaviour.md)[]

**`Description`**

所有创建过的Panel

#### Defined in

UI/index.d.ts:2941

___

### createPanelMap

• `Protected` **createPanelMap**: `Map`<`string`, [`UIBehaviour`](UI.UI.UIBehaviour.md)[]\>

**`Description`**

所有创建过的管理好的 panels

#### Defined in

UI/index.d.ts:2939

___

### logUIInfo

• `Protected` **logUIInfo**: `boolean`

**`Description`**

是否dump GameUI Log 信息

#### Defined in

UI/index.d.ts:2943

___

### uniquePanel

• `Protected` **uniquePanel**: [`UIBehaviour`](UI.UI.UIBehaviour.md)

**`Description`**

独占Panel

#### Defined in

UI/index.d.ts:2937

## Accessors

### canvas

• `get` **canvas**(): [`Canvas`](UI.UI.Canvas.md)

**`Description`**

全局所有UI的根canvas

**`Effect`**

只在客户端调用生效

#### Returns

[`Canvas`](UI.UI.Canvas.md)

根canvas

#### Defined in

UI/index.d.ts:2959

___

### enableUILogInfo

• `get` **enableUILogInfo**(): `boolean`

**`Description`**

获取允许定时输出UIManager中管理到的UI的信息

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否允许

#### Defined in

UI/index.d.ts:2971

• `set` **enableUILogInfo**(`enable`): `void`

**`Description`**

允许定时输出UIManager中管理到的UI的信息

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | usage:运行与否 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2965

___

### instance

• `Static` `get` **instance**(): [`UIManager`](UI.UI.UIManager.md)

**`Description`**

获取UIManager单例

**`Effect`**

只在客户端调用生效

#### Returns

[`UIManager`](UI.UI.UIManager.md)

返回获取UIManager单例的对象

#### Defined in

UI/index.d.ts:2928

## Methods

### addUILayerMap

▸ `Protected` **addUILayerMap**(`layer`, `startZOrder`): `void`

**`Description`**

添加UI的管理层

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | `number` | usage:layer的序列号 |
| `startZOrder` | `number` | usage:该层开始的zOrder |

#### Returns

`void`

#### Defined in

UI/index.d.ts:2978

___

### create

▸ **create**<`T`\>(`PanelClass`): `T`

**`Description`**

创建一个界面

**`Effect`**

只在客户端调用生效

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehaviour`](UI.UI.UIBehaviour.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | usage:界面的类 |

#### Returns

`T`

返回创建的UI行为脚本

#### Defined in

UI/index.d.ts:3026

___

### destroy

▸ **destroy**(): `void`

**`Description`**

销毁该单列，也会销毁所有的UI,需要重新创建才能管理UI

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

UI/index.d.ts:2983

___

### destroyUI

▸ **destroyUI**<`T`\>(`PanelClass`): `void`

**`Description`**

销毁一个界面,相当于DestroyObject

**`Effect`**

只在客户端调用生效

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehaviour`](UI.UI.UIBehaviour.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | usage:销毁界面 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:3052

___

### dumpUIData

▸ **dumpUIData**(): `void`

**`Description`**

打印所有管理到的UI信息

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

UI/index.d.ts:2953

___

### getAllUI

▸ **getAllUI**<`T`\>(`PanelClass`): `T`[]

**`Description`**

根据界面类获取界面的所有对象

**`Effect`**

只在客户端调用生效

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehaviour`](UI.UI.UIBehaviour.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | usage:界面类型 |

#### Returns

`T`[]

界面对象数组,没有的话返回空

#### Defined in

UI/index.d.ts:3019

___

### getUI

▸ **getUI**<`T`\>(`PanelClass`, `bNeedNew?`): `T`

**`Description`**

根据界面类获取界面的对象

**`Effect`**

只在客户端调用生效

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehaviour`](UI.UI.UIBehaviour.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | usage:界面类型 |
| `bNeedNew?` | `boolean` | usage:没有找到的有缓存的UI界面时，是否需要新建一个 default:true |

#### Returns

`T`

界面对象

#### Defined in

UI/index.d.ts:3007

___

### getUILayer

▸ **getUILayer**(`panel`): `number`

**`Description`**

获取一个UI的层级

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panel` | [`UIBehaviour`](UI.UI.UIBehaviour.md) | usage:GameUI |

#### Returns

`number`

UI的层级

#### Defined in

UI/index.d.ts:3072

___

### hide

▸ **hide**<`T`\>(`PanelClass`): `T`

**`Description`**

隐藏一个界面，只是隐藏界面设置为Collapsed

**`Effect`**

只在客户端调用生效

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehaviour`](UI.UI.UIBehaviour.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | usage:界面的类 |

#### Returns

`T`

返回隐藏的UI行为类(这个参数可以传递给界面的onHide方法)

#### Defined in

UI/index.d.ts:3046

___

### hideUI

▸ **hideUI**(`panel`): `boolean`

**`Description`**

移除一个显示的界面,只是隐藏界面设置为Collapsed

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panel` | [`UIBehaviour`](UI.UI.UIBehaviour.md) | usage:界面 |

#### Returns

`boolean`

是否移除成功

#### Defined in

UI/index.d.ts:2999

___

### init

▸ `Protected` **init**(): `void`

**`Description`**

初始化UIManger

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

UI/index.d.ts:2948

___

### isShown

▸ **isShown**(`panel`): `boolean`

**`Description`**

判断界面是否处于显示状态,需要位于层类显示并且是可见的

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panel` | [`UIBehaviour`](UI.UI.UIBehaviour.md) | usage:界面 |

#### Returns

`boolean`

是否显示

#### Defined in

UI/index.d.ts:3059

___

### setAllMiddleAndBottomPanelVisible

▸ **setAllMiddleAndBottomPanelVisible**(`value`): `void`

**`Description`**

设置Middle和Bottom层所有Panel的可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | usage:显隐值 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:3065

___

### show

▸ **show**<`T`\>(`PanelClass`, `...params`): `T`

**`Description`**

显示一个界面，会把界面添加到界面上，从原有父节点移除

**`Effect`**

只在客户端调用生效

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehaviour`](UI.UI.UIBehaviour.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | usage:界面的类如果类没有UI绑定，会创建一个默认的空UI |
| `...params` | `any`[] | usage:显示参数(这个参数可以传递给界面的onShow方法) |

#### Returns

`T`

显示的界面

#### Defined in

UI/index.d.ts:3034

___

### showUI

▸ **showUI**(`panel`, `layer?`, `...params`): [`UIBehaviour`](UI.UI.UIBehaviour.md)

**`Description`**

显示一个界面,会把界面添加到界面上，从原有父节点移除

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panel` | [`UIBehaviour`](UI.UI.UIBehaviour.md) | usage:界面 |
| `layer?` | `number` | usage:图层 default:UILayer.UILayerMiddle |
| `...params` | `any`[] | usage:显示参数(这个参数可以传递给界面的onShow方法) |

#### Returns

[`UIBehaviour`](UI.UI.UIBehaviour.md)

显示的界面

#### Defined in

UI/index.d.ts:2992

___

### getInstance

▸ `Static` **getInstance**<`T`\>(`ManagerClass`): `T`

**`Description`**

获取UIManager子类ManagerClass单例，如果是第一次调用会创建一个ManagerClass的单例供全局使用

**`Effect`**

只在客户端调用生效

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIManager`](UI.UI.UIManager.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ManagerClass` | () => `T` | usage:子类 |

#### Returns

`T`

返回获取UIManager子类ManagerClass单例的对象

#### Defined in

UI/index.d.ts:2935
