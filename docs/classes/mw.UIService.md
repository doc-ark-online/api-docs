[UI](../groups/Core.UI.md) / UIService

# UIService <Badge type="tip" text="Class" /> <Score text="UIService" />

**`Instance`**

<span class="content-big">

UI管理类，可以继承此类，自带一个全局UI作为UI的总节点。

</span>
需要在全局调用，否则会自动在第一个UI生成时自动生成一个默认的管理类.

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new UIService**()  |
| :----- |

### Properties <Score text="Properties" /> 
| **[allPanels](mw.UIService.md#allpanels)**: [`UIScript`](mw.UIScript.md)[]  |
| :-----|
| 所有创建过的Panel|
| **[createPanelMap](mw.UIService.md#createpanelmap)**: `Map`<`string`, [`UIScript`](mw.UIScript.md)[]\>  |
| 所有创建过的管理好的 panels|
| **[logUIInfo](mw.UIService.md#loguiinfo)**: `boolean`  |
| 是否dump GameUI Log 信息|
| **[uniquePanel](mw.UIService.md#uniquepanel)**: [`UIScript`](mw.UIScript.md)  |
| 独占Panel|

### Accessors <Score text="Accessors" /> 
| **[canvas](mw.UIService.md#canvas)**(): [`Canvas`](mw.Canvas.md)  |
| :-----|
| 全局所有UI的根canvas|
| **[uiLogInfoEnable](mw.UIService.md#uiloginfoenable)**(): `boolean`  |
| 允许定时输出UIService中管理到的UI的信息|

### Methods <Score text="Methods" /> 
| **[dumpUIData](mw.UIService.md#dumpuidata)**(): `void`  |
| :-----|
| 打印所有管理到的UI信息|
| **[init](mw.UIService.md#init)**(): `void`  |
| 初始化UIManger|
| **[addUILayerMap](mw.UIService.md#adduilayermap)**(`layer`: `number`, `startZOrder`: `number`): `void`  |
| 添加UI的管理层|
| **[create](mw.UIService.md#create)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(`PanelClass`: () => `T`: extends [`UIScript`](mw.UIScript.md)<`T`\>): `T`: extends [`UIScript`](mw.UIScript.md)<`T`\>  |
| 创建一个界面|
| **[destroy](mw.UIService.md#destroy)**(): `void`  |
| 销毁该服务，也会销毁所有的UI,再次使用该服务器会重新初始化|
| **[destroyUI](mw.UIService.md#destroyui)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(`PanelClass`: () => `T`: extends [`UIScript`](mw.UIScript.md)<`T`\>): `void`  |
| 销毁一个界面,相当于DestroyObject|
| **[getAllUI](mw.UIService.md#getallui)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(`PanelClass`: () => `T`: extends [`UIScript`](mw.UIScript.md)<`T`\>): `T`: extends [`UIScript`](mw.UIScript.md)<`T`\>[]  |
| 根据界面类获取界面的所有对象|
| **[getUI](mw.UIService.md#getui)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(`PanelClass`: () => `T`: extends [`UIScript`](mw.UIScript.md)<`T`\>, `bNeedNew?`: `boolean`): `T`: extends [`UIScript`](mw.UIScript.md)<`T`\>  |
| 根据界面类获取界面的对象|
| **[getUILayer](mw.UIService.md#getuilayer)**(`panel`: [`UIScript`](mw.UIScript.md)): `number`  |
| 获取一个UI的层级|
| **[hide](mw.UIService.md#hide)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(`PanelClass`: () => `T`: extends [`UIScript`](mw.UIScript.md)<`T`\>): `T`: extends [`UIScript`](mw.UIScript.md)<`T`\>  |
| 隐藏一个界面，只是隐藏界面设置为Collapsed|
| **[hideUI](mw.UIService.md#hideui)**(`panel`: [`UIScript`](mw.UIScript.md)): `boolean`  |
| 移除一个显示的界面,只是隐藏界面设置为Collapsed|
| **[isShown](mw.UIService.md#isshown)**(`panel`: [`UIScript`](mw.UIScript.md)): `boolean`  |
| 判断界面是否处于显示状态,需要位于层类显示并且是可见的|
| **[setAllMiddleAndBottomPanelVisible](mw.UIService.md#setallmiddleandbottompanelvisible)**(`value`: `boolean`): `void`  |
| 设置Middle和Bottom层所有Panel的可见性|
| **[show](mw.UIService.md#show)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(`PanelClass`: () => `T`: extends [`UIScript`](mw.UIScript.md)<`T`\>, `...params`: `any`[]): `T`: extends [`UIScript`](mw.UIScript.md)<`T`\>  |
| 显示一个界面，会把界面添加到界面上，从原有父节点移除|
| **[showUI](mw.UIService.md#showui)**(`panel`: [`UIScript`](mw.UIScript.md), `layer?`: `number`, `...params`: `any`[]): [`UIScript`](mw.UIScript.md)  |
| 显示一个界面,会把界面添加到界面上，从原有父节点移除|

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

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **canvas**(): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


全局所有UI的根canvas


#### Returns

| [`Canvas`](mw.Canvas.md) | 根canvas |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### uiLogInfoEnable <Score text="uiLogInfoEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **uiLogInfoEnable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **uiLogInfoEnable**(`enable`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取允许定时输出UIService中管理到的UI的信息


#### Returns

| `boolean` | 是否允许 |
| :------ | :------ |


</td>
<td style="text-align: left">


允许定时输出UIService中管理到的UI的信息


#### Parameters

| `enable` `boolean` | 运行与否 |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

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

| `layer` `number` | layer的序列号 |
| :------ | :------ |
| `startZOrder` `number` | 该层开始的zOrder |



___

### create <Score text="create" /> 

• `Static` **create**<`T`\>(`PanelClass`): `T` <Badge type="tip" text="client" />

创建一个界面

#### Parameters

| `PanelClass` () => `T` | 界面的类 |
| :------ | :------ |

#### Returns

| `T` | 返回创建的UI行为脚本 |
| :------ | :------ |


#### Type parameters

| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |
| :------ | :------ |

___

### destroy <Score text="destroy" /> 

• `Static` **destroy**(): `void` <Badge type="tip" text="client" />

销毁该服务，也会销毁所有的UI,再次使用该服务器会重新初始化



___

### destroyUI <Score text="destroyUI" /> 

• `Static` **destroyUI**<`T`\>(`PanelClass`): `void` <Badge type="tip" text="client" />

销毁一个界面,相当于DestroyObject

#### Parameters

| `PanelClass` () => `T` | 销毁界面 |
| :------ | :------ |



#### Type parameters

| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |
| :------ | :------ |

___

### getAllUI <Score text="getAllUI" /> 

• `Static` **getAllUI**<`T`\>(`PanelClass`): `T`[] <Badge type="tip" text="client" />

根据界面类获取界面的所有对象

#### Parameters

| `PanelClass` () => `T` | 界面类型 |
| :------ | :------ |

#### Returns

| `T`[] | 界面对象数组,没有的话返回空 |
| :------ | :------ |


#### Type parameters

| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |
| :------ | :------ |

___

### getUI <Score text="getUI" /> 

• `Static` **getUI**<`T`\>(`PanelClass`, `bNeedNew?`): `T` <Badge type="tip" text="client" />

根据界面类获取界面的对象

#### Parameters

| `PanelClass` () => `T` | 界面类型 |
| :------ | :------ |
| `bNeedNew?` `boolean` | 没有找到的有缓存的UI界面时，是否需要新建一个 default:true |

#### Returns

| `T` | 界面对象 |
| :------ | :------ |


#### Type parameters

| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |
| :------ | :------ |

___

### getUILayer <Score text="getUILayer" /> 

• `Static` **getUILayer**(`panel`): `number` <Badge type="tip" text="client" />

获取一个UI的层级

#### Parameters

| `panel` [`UIScript`](mw.UIScript.md) | GameUI |
| :------ | :------ |

#### Returns

| `number` | UI的层级 |
| :------ | :------ |


___

### hide <Score text="hide" /> 

• `Static` **hide**<`T`\>(`PanelClass`): `T` <Badge type="tip" text="client" />

隐藏一个界面，只是隐藏界面设置为Collapsed

#### Parameters

| `PanelClass` () => `T` | 界面的类 |
| :------ | :------ |

#### Returns

| `T` | 返回隐藏的UI行为类(这个参数可以传递给界面的onHide方法) |
| :------ | :------ |


#### Type parameters

| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |
| :------ | :------ |

___

### hideUI <Score text="hideUI" /> 

• `Static` **hideUI**(`panel`): `boolean` <Badge type="tip" text="client" />

移除一个显示的界面,只是隐藏界面设置为Collapsed

#### Parameters

| `panel` [`UIScript`](mw.UIScript.md) | 界面 |
| :------ | :------ |

#### Returns

| `boolean` | 是否移除成功 |
| :------ | :------ |


___

### isShown <Score text="isShown" /> 

• `Static` `Protected` **isShown**(`panel`): `boolean` <Badge type="tip" text="other" />

判断界面是否处于显示状态,需要位于层类显示并且是可见的

#### Parameters

| `panel` [`UIScript`](mw.UIScript.md) | 界面 |
| :------ | :------ |

#### Returns

| `boolean` | 是否显示 |
| :------ | :------ |

只在客户端调用生效，只能用于检测通过showUI展示的界面，其他建议使用visible/visibility

___

### setAllMiddleAndBottomPanelVisible <Score text="setAllMiddleAndBottomPanelVisible" /> 

• `Static` **setAllMiddleAndBottomPanelVisible**(`value`): `void` <Badge type="tip" text="client" />

设置Middle和Bottom层所有Panel的可见性

#### Parameters

| `value` `boolean` | 显隐值 |
| :------ | :------ |



___

### show <Score text="show" /> 

• `Static` **show**<`T`\>(`PanelClass`, `...params`): `T` <Badge type="tip" text="client" />

显示一个界面，会把界面添加到界面上，从原有父节点移除

#### Parameters

| `PanelClass` () => `T` | 界面的类如果类没有UI绑定，会创建一个默认的空UI |
| :------ | :------ |
| `...params` `any`[] | 显示参数(这个参数可以传递给界面的onShow方法) |

#### Returns

| `T` | 显示的界面 |
| :------ | :------ |


#### Type parameters

| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |
| :------ | :------ |

___

### showUI <Score text="showUI" /> 

• `Static` **showUI**(`panel`, `layer?`, `...params`): [`UIScript`](mw.UIScript.md) <Badge type="tip" text="client" />

显示一个界面,会把界面添加到界面上，从原有父节点移除

#### Parameters

| `panel` [`UIScript`](mw.UIScript.md) | 界面 |
| :------ | :------ |
| `layer?` `number` | 图层 default:UILayer.UILayerMiddle |
| `...params` `any`[] | 显示参数(这个参数可以传递给界面的onShow方法) |

#### Returns

| [`UIScript`](mw.UIScript.md) | 显示的界面 |
| :------ | :------ |

