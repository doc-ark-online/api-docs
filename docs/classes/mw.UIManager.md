[Gui](../groups/Core.Gui.md) / UIManager

# UIManager <Badge type="tip" text="Class" /> <Score text="UIManager" />

**`Instance`**

UI管理类，可以继承此类，自带一个全局UI作为UI的总节点。
需要在全局调用，否则会自动在第一个UI生成时自动生成一个默认的管理类.

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Properties |
| :-----|
| **[allPanels](mw.UIManager.md#allpanels)**: [`UIBehavior`](mw.UIBehavior.md)[] <br> 所有创建过的Panel|
| **[createPanelMap](mw.UIManager.md#createpanelmap)**: `Map`<`string`, [`UIBehavior`](mw.UIBehavior.md)[]\> <br> 所有创建过的管理好的 panels|
| **[logUIInfo](mw.UIManager.md#loguiinfo)**: `boolean` <br> 是否dump GameUI Log 信息|
| **[uniquePanel](mw.UIManager.md#uniquepanel)**: [`UIBehavior`](mw.UIBehavior.md) <br> 独占Panel|

| Accessors |
| :-----|
| **[canvas](mw.UIManager.md#canvas)**(): [`Canvas`](mw.Canvas.md) <br> 全局所有UI的根canvas|
| **[uiLogInfoEnable](mw.UIManager.md#uiloginfoenable)**(): `boolean` <br> 获取允许定时输出UIManager中管理到的UI的信息|
| **[instance](mw.UIManager.md#instance)**(): [`UIManager`](mw.UIManager.md) <br> 获取UIManager单例|

| Methods |
| :-----|
| **[addUILayerMap](mw.UIManager.md#adduilayermap)**(`layer`: `number`, `startZOrder`: `number`): `void` <br> 添加UI的管理层|
| **[create](mw.UIManager.md#create)**<`T`: extends [`UIBehavior`](mw.UIBehavior.md)<`T`\>\>(`PanelClass`: () => `T`): `T`: extends [`UIBehavior`](mw.UIBehavior.md)<`T`\> <br> 创建一个界面|
| **[destroy](mw.UIManager.md#destroy)**(): `void` <br> 销毁该单列，也会销毁所有的UI,需要重新创建才能管理UI|
| **[destroyUI](mw.UIManager.md#destroyui)**<`T`: extends [`UIBehavior`](mw.UIBehavior.md)<`T`\>\>(`PanelClass`: () => `T`): `void` <br> 销毁一个界面,相当于DestroyObject|
| **[dumpUIData](mw.UIManager.md#dumpuidata)**(): `void` <br> 打印所有管理到的UI信息|
| **[getAllUI](mw.UIManager.md#getallui)**<`T`: extends [`UIBehavior`](mw.UIBehavior.md)<`T`\>\>(`PanelClass`: () => `T`): `T`: extends [`UIBehavior`](mw.UIBehavior.md)<`T`\>[] <br> 根据界面类获取界面的所有对象|
| **[getUI](mw.UIManager.md#getui)**<`T`: extends [`UIBehavior`](mw.UIBehavior.md)<`T`\>\>(`PanelClass`: () => `T`, `bNeedNew?`: `boolean`): `T`: extends [`UIBehavior`](mw.UIBehavior.md)<`T`\> <br> 根据界面类获取界面的对象|
| **[getUILayer](mw.UIManager.md#getuilayer)**(`panel`: [`UIBehavior`](mw.UIBehavior.md)): `number` <br> 获取一个UI的层级|
| **[hide](mw.UIManager.md#hide)**<`T`: extends [`UIBehavior`](mw.UIBehavior.md)<`T`\>\>(`PanelClass`: () => `T`): `T`: extends [`UIBehavior`](mw.UIBehavior.md)<`T`\> <br> 隐藏一个界面，只是隐藏界面设置为Collapsed|
| **[hideUI](mw.UIManager.md#hideui)**(`panel`: [`UIBehavior`](mw.UIBehavior.md)): `boolean` <br> 移除一个显示的界面,只是隐藏界面设置为Collapsed|
| **[init](mw.UIManager.md#init)**(): `void` <br> 初始化UIManger|
| **[isShown](mw.UIManager.md#isshown)**(`panel`: [`UIBehavior`](mw.UIBehavior.md)): `boolean` <br> 判断界面是否处于显示状态,需要位于层类显示并且是可见的|
| **[setAllMiddleAndBottomPanelVisible](mw.UIManager.md#setallmiddleandbottompanelvisible)**(`value`: `boolean`): `void` <br> 设置Middle和Bottom层所有Panel的可见性|
| **[show](mw.UIManager.md#show)**<`T`: extends [`UIBehavior`](mw.UIBehavior.md)<`T`\>\>(`PanelClass`: () => `T`, `...params`: `any`[]): `T`: extends [`UIBehavior`](mw.UIBehavior.md)<`T`\> <br> 显示一个界面，会把界面添加到界面上，从原有父节点移除|
| **[showUI](mw.UIManager.md#showui)**(`panel`: [`UIBehavior`](mw.UIBehavior.md), `layer?`: `number`, `...params`: `any`[]): [`UIBehavior`](mw.UIBehavior.md) <br> 显示一个界面,会把界面添加到界面上，从原有父节点移除|
| **[getInstance](mw.UIManager.md#getinstance)**<`T`: extends [`UIManager`](mw.UIManager.md)<`T`\>\>(`ManagerClass`: () => `T`): `T`: extends [`UIManager`](mw.UIManager.md)<`T`\> <br> 获取UIManager子类ManagerClass单例，如果是第一次调用会创建一个ManagerClass的单例供全局使用|

## Properties

### allPanels <Score text="allPanels" /> 

• `Protected` **allPanels**: [`UIBehavior`](mw.UIBehavior.md)[]

所有创建过的Panel

___

### createPanelMap <Score text="createPanelMap" /> 

• `Protected` **createPanelMap**: `Map`<`string`, [`UIBehavior`](mw.UIBehavior.md)[]\>

所有创建过的管理好的 panels

___

### logUIInfo <Score text="logUIInfo" /> 

• `Protected` **logUIInfo**: `boolean`

是否dump GameUI Log 信息

___

### uniquePanel <Score text="uniquePanel" /> 

• `Protected` **uniquePanel**: [`UIBehavior`](mw.UIBehavior.md)

独占Panel

## Accessors

### canvas <Score text="canvas" /> 

• `get` **canvas**(): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />

全局所有UI的根canvas


#### Returns

[`Canvas`](mw.Canvas.md)

根canvas

___

### uiLogInfoEnable <Score text="uiLogInfoEnable" /> 

• `get` **uiLogInfoEnable**(): `boolean` <Badge type="tip" text="client" />

获取允许定时输出UIManager中管理到的UI的信息


#### Returns

`boolean`

是否允许

• `set` **uiLogInfoEnable**(`enable`): `void` <Badge type="tip" text="client" />

允许定时输出UIManager中管理到的UI的信息


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | 运行与否 |


___

### instance <Score text="instance" /> 

• `Static` `get` **instance**(): [`UIManager`](mw.UIManager.md) <Badge type="tip" text="client" />

获取UIManager单例


#### Returns

[`UIManager`](mw.UIManager.md)

返回获取UIManager单例的对象

## Methods

### addUILayerMap <Score text="addUILayerMap" /> 

• `Protected` **addUILayerMap**(`layer`, `startZOrder`): `void` <Badge type="tip" text="client" />

添加UI的管理层


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layer` | `number` | layer的序列号 |
| `startZOrder` | `number` | 该层开始的zOrder |


___

### create <Score text="create" /> 

• **create**<`T`\>(`PanelClass`): `T` <Badge type="tip" text="client" />

创建一个界面


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehavior`](mw.UIBehavior.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | 界面的类 |

#### Returns

`T`

返回创建的UI行为脚本

___

### destroy <Score text="destroy" /> 

• **destroy**(): `void` <Badge type="tip" text="client" />

销毁该单列，也会销毁所有的UI,需要重新创建才能管理UI



___

### destroyUI <Score text="destroyUI" /> 

• **destroyUI**<`T`\>(`PanelClass`): `void` <Badge type="tip" text="client" />

销毁一个界面,相当于DestroyObject


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehavior`](mw.UIBehavior.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | 销毁界面 |


___

### dumpUIData <Score text="dumpUIData" /> 

• **dumpUIData**(): `void` <Badge type="tip" text="client" />

打印所有管理到的UI信息



___

### getAllUI <Score text="getAllUI" /> 

• **getAllUI**<`T`\>(`PanelClass`): `T`[] <Badge type="tip" text="client" />

根据界面类获取界面的所有对象


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehavior`](mw.UIBehavior.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | 界面类型 |

#### Returns

`T`[]

界面对象数组,没有的话返回空

___

### getUI <Score text="getUI" /> 

• **getUI**<`T`\>(`PanelClass`, `bNeedNew?`): `T` <Badge type="tip" text="client" />

根据界面类获取界面的对象


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehavior`](mw.UIBehavior.md)<`T`\> |

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

• **getUILayer**(`panel`): `number` <Badge type="tip" text="client" />

获取一个UI的层级


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panel` | [`UIBehavior`](mw.UIBehavior.md) | GameUI |

#### Returns

`number`

UI的层级

___

### hide <Score text="hide" /> 

• **hide**<`T`\>(`PanelClass`): `T` <Badge type="tip" text="client" />

隐藏一个界面，只是隐藏界面设置为Collapsed


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehavior`](mw.UIBehavior.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `PanelClass` | () => `T` | 界面的类 |

#### Returns

`T`

返回隐藏的UI行为类(这个参数可以传递给界面的onHide方法)

___

### hideUI <Score text="hideUI" /> 

• **hideUI**(`panel`): `boolean` <Badge type="tip" text="client" />

移除一个显示的界面,只是隐藏界面设置为Collapsed


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panel` | [`UIBehavior`](mw.UIBehavior.md) | 界面 |

#### Returns

`boolean`

是否移除成功

___

### init <Score text="init" /> 

• `Protected` **init**(): `void` <Badge type="tip" text="client" />

初始化UIManger



___

### isShown <Score text="isShown" /> 

• `Protected` **isShown**(`panel`): `boolean` <Badge type="tip" text="other" />

判断界面是否处于显示状态,需要位于层类显示并且是可见的

只在客户端调用生效，只能用于检测通过showUI展示的界面，其他建议使用visible/visibility

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panel` | [`UIBehavior`](mw.UIBehavior.md) | 界面 |

#### Returns

`boolean`

是否显示

___

### setAllMiddleAndBottomPanelVisible <Score text="setAllMiddleAndBottomPanelVisible" /> 

• **setAllMiddleAndBottomPanelVisible**(`value`): `void` <Badge type="tip" text="client" />

设置Middle和Bottom层所有Panel的可见性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 显隐值 |


___

### show <Score text="show" /> 

• **show**<`T`\>(`PanelClass`, `...params`): `T` <Badge type="tip" text="client" />

显示一个界面，会把界面添加到界面上，从原有父节点移除


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehavior`](mw.UIBehavior.md)<`T`\> |

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

• **showUI**(`panel`, `layer?`, `...params`): [`UIBehavior`](mw.UIBehavior.md) <Badge type="tip" text="client" />

显示一个界面,会把界面添加到界面上，从原有父节点移除


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panel` | [`UIBehavior`](mw.UIBehavior.md) | 界面 |
| `layer?` | `number` | 图层 default:UILayer.UILayerMiddle |
| `...params` | `any`[] | 显示参数(这个参数可以传递给界面的onShow方法) |

#### Returns

[`UIBehavior`](mw.UIBehavior.md)

显示的界面

___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**<`T`\>(`ManagerClass`): `T` <Badge type="tip" text="client" />

获取UIManager子类ManagerClass单例，如果是第一次调用会创建一个ManagerClass的单例供全局使用


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIManager`](mw.UIManager.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ManagerClass` | () => `T` | 子类 |

#### Returns

`T`

返回获取UIManager子类ManagerClass单例的对象
