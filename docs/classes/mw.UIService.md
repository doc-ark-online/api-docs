[UI](../groups/Core.UI.md) / UIService

# UIService <Badge type="tip" text="Class" /> <Score text="UIService" />

**`Instance`**

UI管理类，可以继承此类，自带一个全局UI作为UI的总节点。
需要在全局调用，否则会自动在第一个UI生成时自动生成一个默认的管理类.

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Properties |
| :-----|
| **[allPanels](mw.UIService.md#allpanels)**: [`UIScript`](mw.UIScript.md)[] <br> 所有创建过的Panel|
| **[createPanelMap](mw.UIService.md#createpanelmap)**: `Map`<`string`, [`UIScript`](mw.UIScript.md)[]\> <br> 所有创建过的管理好的 panels|
| **[logUIInfo](mw.UIService.md#loguiinfo)**: `boolean` <br> 是否dump GameUI Log 信息|
| **[uniquePanel](mw.UIService.md#uniquepanel)**: [`UIScript`](mw.UIScript.md) <br> 独占Panel|

| Accessors |
| :-----|
| **[canvas](mw.UIService.md#canvas)**(): [`Canvas`](mw.Canvas.md) <br> 全局所有UI的根canvas|
| **[instance](mw.UIService.md#instance)**(): [`UIService`](mw.UIService.md) <br> 获取UIService单例|
| **[uiLogInfoEnable](mw.UIService.md#uiloginfoenable)**(): `boolean` <br> 获取允许定时输出UIService中管理到的UI的信息|

| Methods |
| :-----|
| **[destroy](mw.UIService.md#destroy)**(): `void` <br> 销毁该单列，也会销毁所有的UI,需要重新创建才能管理UI|
| **[dumpUIData](mw.UIService.md#dumpuidata)**(): `void` <br> 打印所有管理到的UI信息|
| **[init](mw.UIService.md#init)**(): `void` <br> 初始化UIManger|
| **[addUILayerMap](mw.UIService.md#adduilayermap)**(`layer`: `number`, `startZOrder`: `number`): `void` <br> 添加UI的管理层|
| **[create](mw.UIService.md#create)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(`PanelClass`: () => `T`): `T`: extends [`UIScript`](mw.UIScript.md)<`T`\> <br> 创建一个界面|
| **[destroyUI](mw.UIService.md#destroyui)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(`PanelClass`: () => `T`): `void` <br> 销毁一个界面,相当于DestroyObject|
| **[getAllUI](mw.UIService.md#getallui)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(`PanelClass`: () => `T`): `T`: extends [`UIScript`](mw.UIScript.md)<`T`\>[] <br> 根据界面类获取界面的所有对象|
| **[getInstance](mw.UIService.md#getinstance)**<`T`: extends [`UIService`](mw.UIService.md)<`T`\>\>(`ManagerClass`: () => `T`): `T`: extends [`UIService`](mw.UIService.md)<`T`\> <br> 获取UIService子类ManagerClass单例，如果是第一次调用会创建一个ManagerClass的单例供全局使用|
| **[getUI](mw.UIService.md#getui)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(`PanelClass`: () => `T`, `bNeedNew?`: `boolean`): `T`: extends [`UIScript`](mw.UIScript.md)<`T`\> <br> 根据界面类获取界面的对象|
| **[getUILayer](mw.UIService.md#getuilayer)**(`panel`: [`UIScript`](mw.UIScript.md)): `number` <br> 获取一个UI的层级|
| **[hide](mw.UIService.md#hide)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(`PanelClass`: () => `T`): `T`: extends [`UIScript`](mw.UIScript.md)<`T`\> <br> 隐藏一个界面，只是隐藏界面设置为Collapsed|
| **[hideUI](mw.UIService.md#hideui)**(`panel`: [`UIScript`](mw.UIScript.md)): `boolean` <br> 移除一个显示的界面,只是隐藏界面设置为Collapsed|
| **[isShown](mw.UIService.md#isshown)**(`panel`: [`UIScript`](mw.UIScript.md)): `boolean` <br> 判断界面是否处于显示状态,需要位于层类显示并且是可见的|
| **[setAllMiddleAndBottomPanelVisible](mw.UIService.md#setallmiddleandbottompanelvisible)**(`value`: `boolean`): `void` <br> 设置Middle和Bottom层所有Panel的可见性|
| **[show](mw.UIService.md#show)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(`PanelClass`: () => `T`, `...params`: `any`[]): `T`: extends [`UIScript`](mw.UIScript.md)<`T`\> <br> 显示一个界面，会把界面添加到界面上，从原有父节点移除|
| **[showUI](mw.UIService.md#showui)**(`panel`: [`UIScript`](mw.UIScript.md), `layer?`: `number`, `...params`: `any`[]): [`UIScript`](mw.UIScript.md) <br> 显示一个界面,会把界面添加到界面上，从原有父节点移除|

## Properties

### allPanels <Score text="allPanels" /> 

• `Protected` **allPanels**: [`UIScript`](mw.UIScript.md)[]

所有创建过的Panel

___

### createPanelMap <Score text="createPanelMap" /> 

• `Protected` **createPanelMap**: `Map`<`string`, [`UIScript`](mw.UIScript.md)[]\>

所有创建过的管理好的 panels

___

### logUIInfo <Score text="logUIInfo" /> 

• `Protected` **logUIInfo**: `boolean`

是否dump GameUI Log 信息

___

### uniquePanel <Score text="uniquePanel" /> 

• `Protected` **uniquePanel**: [`UIScript`](mw.UIScript.md)

独占Panel

## Accessors

### canvas <Score text="canvas" /> 

• `Static` `get` **canvas**(): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />

全局所有UI的根canvas


#### Returns

[`Canvas`](mw.Canvas.md)

根canvas

___

### instance <Score text="instance" /> 

• `Static` `get` **instance**(): [`UIService`](mw.UIService.md) <Badge type="tip" text="client" />

获取UIService单例


#### Returns

[`UIService`](mw.UIService.md)

返回获取UIService单例的对象

___

### uiLogInfoEnable <Score text="uiLogInfoEnable" /> 

• `Static` `get` **uiLogInfoEnable**(): `boolean` <Badge type="tip" text="client" />

获取允许定时输出UIService中管理到的UI的信息


#### Returns

`boolean`

是否允许

• `Static` `set` **uiLogInfoEnable**(`enable`): `void` <Badge type="tip" text="client" />

允许定时输出UIService中管理到的UI的信息


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | 运行与否 |


## Methods

### destroy <Score text="destroy" /> 

• **destroy**(): `void` <Badge type="tip" text="client" />

销毁该单列，也会销毁所有的UI,需要重新创建才能管理UI



___

### dumpUIData <Score text="dumpUIData" /> 

• **dumpUIData**(): `void` <Badge type="tip" text="client" />

打印所有管理到的UI信息



___

### init <Score text="init" /> 

• `Protected` **init**(): `void` <Badge type="tip" text="client" />

初始化UIManger



___

### addUILayerMap <Score text="addUILayerMap" /> 

• `Static` `Protected` **addUILayerMap**(`layer`, `startZOrder`): `void` <Badge type="tip" text="client" />

添加UI的管理层


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | `number` | layer的序列号 |
| `startZOrder` | `number` | 该层开始的zOrder |


___

### create <Score text="create" /> 

• `Static` **create**<`T`\>(`PanelClass`): `T` <Badge type="tip" text="client" />

创建一个界面


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | 界面的类 |

#### Returns

`T`

返回创建的UI行为脚本

___

### destroyUI <Score text="destroyUI" /> 

• `Static` **destroyUI**<`T`\>(`PanelClass`): `void` <Badge type="tip" text="client" />

销毁一个界面,相当于DestroyObject


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | 销毁界面 |


___

### getAllUI <Score text="getAllUI" /> 

• `Static` **getAllUI**<`T`\>(`PanelClass`): `T`[] <Badge type="tip" text="client" />

根据界面类获取界面的所有对象


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | 界面类型 |

#### Returns

`T`[]

界面对象数组,没有的话返回空

___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**<`T`\>(`ManagerClass`): `T` <Badge type="tip" text="client" />

获取UIService子类ManagerClass单例，如果是第一次调用会创建一个ManagerClass的单例供全局使用


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIService`](mw.UIService.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ManagerClass` | () => `T` | 子类 |

#### Returns

`T`

返回获取UIService子类ManagerClass单例的对象

___

### getUI <Score text="getUI" /> 

• `Static` **getUI**<`T`\>(`PanelClass`, `bNeedNew?`): `T` <Badge type="tip" text="client" />

根据界面类获取界面的对象


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | 界面类型 |
| `bNeedNew?` | `boolean` | 没有找到的有缓存的UI界面时，是否需要新建一个 default:true |

#### Returns

`T`

界面对象

___

### getUILayer <Score text="getUILayer" /> 

• `Static` **getUILayer**(`panel`): `number` <Badge type="tip" text="client" />

获取一个UI的层级


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panel` | [`UIScript`](mw.UIScript.md) | GameUI |

#### Returns

`number`

UI的层级

___

### hide <Score text="hide" /> 

• `Static` **hide**<`T`\>(`PanelClass`): `T` <Badge type="tip" text="client" />

隐藏一个界面，只是隐藏界面设置为Collapsed


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | 界面的类 |

#### Returns

`T`

返回隐藏的UI行为类(这个参数可以传递给界面的onHide方法)

___

### hideUI <Score text="hideUI" /> 

• `Static` **hideUI**(`panel`): `boolean` <Badge type="tip" text="client" />

移除一个显示的界面,只是隐藏界面设置为Collapsed


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panel` | [`UIScript`](mw.UIScript.md) | 界面 |

#### Returns

`boolean`

是否移除成功

___

### isShown <Score text="isShown" /> 

• `Static` `Protected` **isShown**(`panel`): `boolean` <Badge type="tip" text="other" />

判断界面是否处于显示状态,需要位于层类显示并且是可见的

只在客户端调用生效，只能用于检测通过showUI展示的界面，其他建议使用visible/visibility

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panel` | [`UIScript`](mw.UIScript.md) | 界面 |

#### Returns

`boolean`

是否显示

___

### setAllMiddleAndBottomPanelVisible <Score text="setAllMiddleAndBottomPanelVisible" /> 

• `Static` **setAllMiddleAndBottomPanelVisible**(`value`): `void` <Badge type="tip" text="client" />

设置Middle和Bottom层所有Panel的可见性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 显隐值 |


___

### show <Score text="show" /> 

• `Static` **show**<`T`\>(`PanelClass`, `...params`): `T` <Badge type="tip" text="client" />

显示一个界面，会把界面添加到界面上，从原有父节点移除


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | 界面的类如果类没有UI绑定，会创建一个默认的空UI |
| `...params` | `any`[] | 显示参数(这个参数可以传递给界面的onShow方法) |

#### Returns

`T`

显示的界面

___

### showUI <Score text="showUI" /> 

• `Static` **showUI**(`panel`, `layer?`, `...params`): [`UIScript`](mw.UIScript.md) <Badge type="tip" text="client" />

显示一个界面,会把界面添加到界面上，从原有父节点移除


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panel` | [`UIScript`](mw.UIScript.md) | 界面 |
| `layer?` | `number` | 图层 default:UILayer.UILayerMiddle |
| `...params` | `any`[] | 显示参数(这个参数可以传递给界面的onShow方法) |

#### Returns

[`UIScript`](mw.UIScript.md)

显示的界面
