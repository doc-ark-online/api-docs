[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / VirtualJoystickPanel

# Class: VirtualJoystickPanel

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).VirtualJoystickPanel

**`Author`**

jie.wu

**`Description`**

摇杆

**`Network Status`**

usage:客户端

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`VirtualJoystickPanel`**

## Table of contents

### Constructors

- [constructor](UI.UI.VirtualJoystickPanel.md#constructor)

### Accessors

- [activeOpacity](UI.UI.VirtualJoystickPanel.md#activeopacity)
- [autoSizeEnable](UI.UI.VirtualJoystickPanel.md#autosizeenable)
- [backgroundDisabledImageId](UI.UI.VirtualJoystickPanel.md#backgrounddisabledimageid)
- [backgroundImageDesigner](UI.UI.VirtualJoystickPanel.md#backgroundimagedesigner)
- [backgroundImageId](UI.UI.VirtualJoystickPanel.md#backgroundimageid)
- [backgroundImageSize](UI.UI.VirtualJoystickPanel.md#backgroundimagesize)
- [backgroundTouchImageId](UI.UI.VirtualJoystickPanel.md#backgroundtouchimageid)
- [cachedGeometry](UI.UI.VirtualJoystickPanel.md#cachedgeometry)
- [center](UI.UI.VirtualJoystickPanel.md#center)
- [centerDisableImageId](UI.UI.VirtualJoystickPanel.md#centerdisableimageid)
- [centerImageDesigner](UI.UI.VirtualJoystickPanel.md#centerimagedesigner)
- [centerImageId](UI.UI.VirtualJoystickPanel.md#centerimageid)
- [centerImageSize](UI.UI.VirtualJoystickPanel.md#centerimagesize)
- [centerTouchImage](UI.UI.VirtualJoystickPanel.md#centertouchimage)
- [constraints](UI.UI.VirtualJoystickPanel.md#constraints)
- [controlByMouseEnable](UI.UI.VirtualJoystickPanel.md#controlbymouseenable)
- [controlType](UI.UI.VirtualJoystickPanel.md#controltype)
- [desiredSize](UI.UI.VirtualJoystickPanel.md#desiredsize)
- [enable](UI.UI.VirtualJoystickPanel.md#enable)
- [guid](UI.UI.VirtualJoystickPanel.md#guid)
- [inActiveOpacity](UI.UI.VirtualJoystickPanel.md#inactiveopacity)
- [inputScale](UI.UI.VirtualJoystickPanel.md#inputscale)
- [isHovered](UI.UI.VirtualJoystickPanel.md#ishovered)
- [isLocationFixed](UI.UI.VirtualJoystickPanel.md#islocationfixed)
- [name](UI.UI.VirtualJoystickPanel.md#name)
- [onInputDir](UI.UI.VirtualJoystickPanel.md#oninputdir)
- [onJoyStickDown](UI.UI.VirtualJoystickPanel.md#onjoystickdown)
- [onJoyStickUp](UI.UI.VirtualJoystickPanel.md#onjoystickup)
- [paintSpaceGeometry](UI.UI.VirtualJoystickPanel.md#paintspacegeometry)
- [parent](UI.UI.VirtualJoystickPanel.md#parent)
- [position](UI.UI.VirtualJoystickPanel.md#position)
- [renderOpacity](UI.UI.VirtualJoystickPanel.md#renderopacity)
- [renderScale](UI.UI.VirtualJoystickPanel.md#renderscale)
- [renderShear](UI.UI.VirtualJoystickPanel.md#rendershear)
- [renderTransformAngle](UI.UI.VirtualJoystickPanel.md#rendertransformangle)
- [renderTransformPivot](UI.UI.VirtualJoystickPanel.md#rendertransformpivot)
- [size](UI.UI.VirtualJoystickPanel.md#size)
- [slot](UI.UI.VirtualJoystickPanel.md#slot)
- [tickSpaceGeometry](UI.UI.VirtualJoystickPanel.md#tickspacegeometry)
- [timeUntilInactive](UI.UI.VirtualJoystickPanel.md#timeuntilinactive)
- [timeUntilReset](UI.UI.VirtualJoystickPanel.md#timeuntilreset)
- [transform](UI.UI.VirtualJoystickPanel.md#transform)
- [visibility](UI.UI.VirtualJoystickPanel.md#visibility)
- [visible](UI.UI.VirtualJoystickPanel.md#visible)
- [zOrder](UI.UI.VirtualJoystickPanel.md#zorder)

### Methods

- [destroyObject](UI.UI.VirtualJoystickPanel.md#destroyobject)
- [equal](UI.UI.VirtualJoystickPanel.md#equal)
- [invalidateLayoutAndVolatility](UI.UI.VirtualJoystickPanel.md#invalidatelayoutandvolatility)
- [resetJoyStick](UI.UI.VirtualJoystickPanel.md#resetjoystick)
- [setVisibility](UI.UI.VirtualJoystickPanel.md#setvisibility)
- [newObject](UI.UI.VirtualJoystickPanel.md#newobject)
- [newObjectAndAdd](UI.UI.VirtualJoystickPanel.md#newobjectandadd)

## Constructors

### constructor

• **new VirtualJoystickPanel**()

#### Inherited from

[Widget](UI.UI.Widget.md).[constructor](UI.UI.Widget.md#constructor)

## Accessors

### activeOpacity

• `get` **activeOpacity**(): `number`

**`Description`**

返回激活时的透明度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回激活时的透明度

#### Defined in

UI/index.d.ts:4640

• `set` **activeOpacity**(`Value`): `void`

**`Description`**

设置激活时的透明度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:透明度 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4646

---

### autoSizeEnable

• `get` **autoSizeEnable**(): `boolean`

**`Description`**

获取是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否自动设置大小

#### Inherited from

Widget.autoSizeEnable

#### Defined in

UI/index.d.ts:4987

• `set` **autoSizeEnable**(`autoSize`): `void`

**`Description`**

设置是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description            |
| :--------- | :-------- | :--------------------- |
| `autoSize` | `boolean` | usage:是否自动设置大小 |

#### Returns

`void`

#### Inherited from

Widget.autoSizeEnable

#### Defined in

UI/index.d.ts:4981

---

### backgroundDisabledImageId

• `get` **backgroundDisabledImageId**(): `string`

**`Description`**

返回背景图片禁用状态图片 id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回背景图片禁用状态图片 id

#### Defined in

UI/index.d.ts:4724

• `set` **backgroundDisabledImageId**(`id`): `void`

**`Description`**

设置背景图片禁用状态图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description   |
| :--- | :------- | :------------ |
| `id` | `string` | usage:资源 id |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4730

---

### backgroundImageDesigner

• `get` **backgroundImageDesigner**(): [`JoystickStyleDesigner`](UI.UI.JoystickStyleDesigner.md)

**`Description`**

返回输入的背景贴图设置，包括 普通的 点击的 不启用的

**`Effect`**

只在客户端调用生效

#### Returns

[`JoystickStyleDesigner`](UI.UI.JoystickStyleDesigner.md)

返回输入的背景贴图设置，包括 普通的 点击的 不启用的

#### Defined in

UI/index.d.ts:4526

• `set` **backgroundImageDesigner**(`inImage`): `void`

**`Description`**

设置输入的背景贴图设置，包括 普通的 点击的 不启用的

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                                      | Description        |
| :-------- | :-------------------------------------------------------- | :----------------- |
| `inImage` | [`JoystickStyleDesigner`](UI.UI.JoystickStyleDesigner.md) | usage:背景贴图设置 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4520

---

### backgroundImageId

• `get` **backgroundImageId**(): `string`

**`Description`**

返回中心图片普通状态图片 id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回中心图片普通状态图片 id

#### Defined in

UI/index.d.ts:4700

• `set` **backgroundImageId**(`id`): `void`

**`Description`**

设置背景图片普通状态图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description   |
| :--- | :------- | :------------ |
| `id` | `string` | usage:资源 id |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4706

---

### backgroundImageSize

• `get` **backgroundImageSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

摇杆背景图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

摇杆背景图片大小

#### Defined in

UI/index.d.ts:4580

• `set` **backgroundImageSize**(`inSize`): `void`

**`Description`**

摇杆背景图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description            |
| :------- | :-------------------------------- | :--------------------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:摇杆背景图片大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4586

---

### backgroundTouchImageId

• `get` **backgroundTouchImageId**(): `string`

**`Description`**

返回背景图片按压状态图片 id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回背景图片按压状态图片 id

#### Defined in

UI/index.d.ts:4712

• `set` **backgroundTouchImageId**(`id`): `void`

**`Description`**

设置背景图片按压状态图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description   |
| :--- | :------- | :------------ |
| `id` | `string` | usage:资源 id |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4718

---

### cachedGeometry

• `get` **cachedGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取上一次的 GetTickSpaceGeometry

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回上一次的 GetTickSpaceGeometry

#### Inherited from

Widget.cachedGeometry

#### Defined in

UI/index.d.ts:4897

---

### center

• `get` **center**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

返回输入的是摇杆中心位置， 不符合预期会返回默认值

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

回输入的是摇杆中心位置， 不符合预期会返回默认值

#### Defined in

UI/index.d.ts:4556

• `set` **center**(`inValue`): `void`

**`Description`**

设置输入的中心位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                              | Description        |
| :-------- | :-------------------------------- | :----------------- |
| `inValue` | [`Vector2`](Type.Type.Vector2.md) | usage:新的中心位置 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4562

---

### centerDisableImageId

• `get` **centerDisableImageId**(): `string`

**`Description`**

返回中心图片禁用状态图片 id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回中心图片禁用状态图片 id

#### Defined in

UI/index.d.ts:4688

• `set` **centerDisableImageId**(`id`): `void`

**`Description`**

设置中心图片禁用状态图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description   |
| :--- | :------- | :------------ |
| `id` | `string` | usage:资源 id |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4694

---

### centerImageDesigner

• `get` **centerImageDesigner**(): [`JoystickStyleDesigner`](UI.UI.JoystickStyleDesigner.md)

**`Description`**

返回输入的中心贴图设置，包括 普通的 点击的 不启用的

**`Effect`**

只在客户端调用生效

#### Returns

[`JoystickStyleDesigner`](UI.UI.JoystickStyleDesigner.md)

返回中心贴图设置

#### Defined in

UI/index.d.ts:4508

• `set` **centerImageDesigner**(`inImage`): `void`

**`Description`**

设置输入的中心贴图设置，包括 普通的 点击的 不启用的

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                                      | Description        |
| :-------- | :-------------------------------------------------------- | :----------------- |
| `inImage` | [`JoystickStyleDesigner`](UI.UI.JoystickStyleDesigner.md) | usage:中心贴图设置 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4514

---

### centerImageId

• `get` **centerImageId**(): `string`

**`Description`**

返回中心图片普通状态图片 id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回中心图片普通状态图片 id

#### Defined in

UI/index.d.ts:4664

• `set` **centerImageId**(`id`): `void`

**`Description`**

设置中心图片普通状态图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description   |
| :--- | :------- | :------------ |
| `id` | `string` | usage:资源 id |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4670

---

### centerImageSize

• `get` **centerImageSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

摇杆按钮图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

摇杆按钮图片大小

#### Defined in

UI/index.d.ts:4568

• `set` **centerImageSize**(`inSize`): `void`

**`Description`**

摇杆按钮图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description            |
| :------- | :-------------------------------- | :--------------------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:摇杆按钮图片大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4574

---

### centerTouchImage

• `get` **centerTouchImage**(): `string`

**`Description`**

返回中心图片按压状态图片 id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回中心图片按压状态图片 id

#### Defined in

UI/index.d.ts:4676

• `set` **centerTouchImage**(`id`): `void`

**`Description`**

置中心图片按压状态图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description   |
| :--- | :------- | :------------ |
| `id` | `string` | usage:资源 id |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4682

---

### constraints

• `get` **constraints**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\>

**`Description`**

获取控件的布局

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\>

控件的布局

#### Inherited from

Widget.constraints

#### Defined in

UI/index.d.ts:4939

• `set` **constraints**(`ininconstraints`): `void`

**`Description`**

设置控件的布局

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                                                  | Description      |
| :---------------- | :---------------------------------------------------- | :--------------- |
| `ininconstraints` | [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md) | usage:控件的布局 |

#### Returns

`void`

#### Inherited from

Widget.constraints

#### Defined in

UI/index.d.ts:4933

---

### controlByMouseEnable

• `get` **controlByMouseEnable**(): `boolean`

**`Description`**

获取是否被鼠标控制，只作用于 PC 端

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否被鼠标控制

#### Defined in

UI/index.d.ts:4532

• `set` **controlByMouseEnable**(`controlByMouse`): `void`

**`Description`**

设置是否被鼠标控制，只作用于 PC 端

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type      | Description           |
| :--------------- | :-------- | :-------------------- |
| `controlByMouse` | `boolean` | usage: 是否被鼠标控制 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4538

---

### controlType

• `get` **controlType**(): [`CameraControlType`](../enums/UI.UI.CameraControlType.md)

**`Description`**

返回输入的是摇杆类型， 不符合预期会返回默认值

**`Effect`**

只在客户端调用生效

#### Returns

[`CameraControlType`](../enums/UI.UI.CameraControlType.md)

返回输入的摇杆类型

#### Defined in

UI/index.d.ts:4544

• `set` **controlType**(`NewControlType`): `void`

**`Description`**

设置输入的摇杆类型，人物的移动和技能摇杆的移动类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                                       | Description    |
| :--------------- | :--------------------------------------------------------- | :------------- |
| `NewControlType` | [`CameraControlType`](../enums/UI.UI.CameraControlType.md) | usage:摇杆类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4550

---

### desiredSize

• `get` **desiredSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取期望大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回期望大小

#### Inherited from

Widget.desiredSize

#### Defined in

UI/index.d.ts:4831

---

### enable

• `get` **enable**(): `boolean`

**`Description`**

是否可用

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

Widget.enable

#### Defined in

UI/index.d.ts:4807

• `set` **enable**(`isEnable`): `void`

**`Description`**

设置可用性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description          |
| :--------- | :-------- | :------------------- |
| `isEnable` | `boolean` | usage:可用性 boolean |

#### Returns

`void`

返回设置结果

#### Inherited from

Widget.enable

#### Defined in

UI/index.d.ts:4814

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取控件 GUID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

控件 GUID

#### Inherited from

Widget.guid

#### Defined in

UI/index.d.ts:4915

---

### inActiveOpacity

• `get` **inActiveOpacity**(): `number`

**`Description`**

返回未激活时的透明度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回未激活时的透明度

#### Defined in

UI/index.d.ts:4652

• `set` **inActiveOpacity**(`Value`): `void`

**`Description`**

设置未激活时的透明度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:透明度 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4658

---

### inputScale

• `get` **inputScale**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

返回输入的输入比例

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回输入的输入比例

#### Defined in

UI/index.d.ts:4592

• `set` **inputScale**(`inScale`): `void`

**`Description`**

设置输入的输入比例

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                              | Description        |
| :-------- | :-------------------------------- | :----------------- |
| `inScale` | [`Vector2`](Type.Type.Vector2.md) | usage:新的输入比例 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4598

---

### isHovered

• `get` **isHovered**(): `boolean`

**`Description`**

是否是 hovered

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

Widget.isHovered

#### Defined in

UI/index.d.ts:4820

---

### isLocationFixed

• `get` **isLocationFixed**(): `boolean`

**`Description`**

拖动后，是否固定摇杆位置

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Defined in

UI/index.d.ts:4604

• `set` **isLocationFixed**(`enable`): `void`

**`Description`**

拖动后，是否固定摇杆位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type      | Description            |
| :------- | :-------- | :--------------------- |
| `enable` | `boolean` | usage:是否固定摇杆位置 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4610

---

### name

• `get` **name**(): `string`

**`Description`**

获取名字

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回名字

#### Inherited from

Widget.name

#### Defined in

UI/index.d.ts:4783

• `set` **name**(`name`): `void`

**`Description`**

设定名字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`void`

#### Inherited from

Widget.name

#### Defined in

UI/index.d.ts:4777

---

### onInputDir

• `get` **onInputDir**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`vec`: [`Vector2`](Type.Type.Vector2.md)) => `void`\>

**`Description`**

输入移动事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`vec`: [`Vector2`](Type.Type.Vector2.md)) => `void`\>

输入移动事件

#### Defined in

UI/index.d.ts:4485

---

### onJoyStickDown

• `get` **onJoyStickDown**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

摇杆按下事件的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

按下摇杆事件的代理

#### Defined in

UI/index.d.ts:4496

---

### onJoyStickUp

• `get` **onJoyStickUp**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

摇杆抬起事件的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

抬起摇杆事件的代理

#### Defined in

UI/index.d.ts:4502

---

### paintSpaceGeometry

• `get` **paintSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于渲染 Widget 的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于渲染 Widget 的几何信息

#### Inherited from

Widget.paintSpaceGeometry

#### Defined in

UI/index.d.ts:4909

---

### parent

• `get` **parent**(): [`Widget`](UI.UI.Widget.md)

**`Description`**

获取父节点

**`Effect`**

只在客户端调用生效

#### Returns

[`Widget`](UI.UI.Widget.md)

返回父节点

#### Inherited from

Widget.parent

#### Defined in

UI/index.d.ts:4764

---

### position

• `get` **position**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\>

**`Description`**

获取控件的位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`Vector2`](Type.Type.Vector2.md)\>

控件的位置

#### Inherited from

Widget.position

#### Defined in

UI/index.d.ts:4951

• `set` **position**(`inFigmaPosition`): `void`

**`Description`**

设置控件的位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                              | Description      |
| :---------------- | :-------------------------------- | :--------------- |
| `inFigmaPosition` | [`Vector2`](Type.Type.Vector2.md) | usage:控件的位置 |

#### Returns

`void`

#### Inherited from

Widget.position

#### Defined in

UI/index.d.ts:4945

---

### renderOpacity

• `get` **renderOpacity**(): `number`

**`Description`**

获取渲染透明度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回渲染透明度

#### Inherited from

Widget.renderOpacity

#### Defined in

UI/index.d.ts:4891

• `set` **renderOpacity**(`InOpacity`): `void`

**`Description`**

设置渲染透明度 0 ~ 1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type     | Description  |
| :---------- | :------- | :----------- |
| `InOpacity` | `number` | usage:透明度 |

#### Returns

`void`

#### Inherited from

Widget.renderOpacity

#### Defined in

UI/index.d.ts:4885

---

### renderScale

• `get` **renderScale**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染缩放

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染缩放

#### Inherited from

Widget.renderScale

#### Defined in

UI/index.d.ts:4879

• `set` **renderScale**(`scale`): `void`

**`Description`**

设置渲染缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description    |
| :------ | :-------------------------------- | :------------- |
| `scale` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染缩放 |

#### Returns

`void`

#### Inherited from

Widget.renderScale

#### Defined in

UI/index.d.ts:4873

---

### renderShear

• `get` **renderShear**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染错切形变

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染错切形变

#### Inherited from

Widget.renderShear

#### Defined in

UI/index.d.ts:4867

• `set` **renderShear**(`shear`): `void`

**`Description`**

设置渲染错切形变

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description        |
| :------ | :-------------------------------- | :----------------- |
| `shear` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染错切形变 |

#### Returns

`void`

#### Inherited from

Widget.renderShear

#### Defined in

UI/index.d.ts:4861

---

### renderTransformAngle

• `get` **renderTransformAngle**(): `number`

**`Description`**

获取渲染的角度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回渲染角度

#### Inherited from

Widget.renderTransformAngle

#### Defined in

UI/index.d.ts:4843

• `set` **renderTransformAngle**(`o`): `void`

**`Description`**

设置渲染的角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description    |
| :--- | :------- | :------------- |
| `o`  | `number` | usage:渲染角度 |

#### Returns

`void`

#### Inherited from

Widget.renderTransformAngle

#### Defined in

UI/index.d.ts:4837

---

### renderTransformPivot

• `get` **renderTransformPivot**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染锚点

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染锚点

#### Inherited from

Widget.renderTransformPivot

#### Defined in

UI/index.d.ts:4855

• `set` **renderTransformPivot**(`Pivot`): `void`

**`Description`**

设置渲染锚点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description    |
| :------ | :-------------------------------- | :------------- |
| `Pivot` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染锚点 |

#### Returns

`void`

#### Inherited from

Widget.renderTransformPivot

#### Defined in

UI/index.d.ts:4849

---

### size

• `get` **size**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

FVector2D

#### Inherited from

Widget.size

#### Defined in

UI/index.d.ts:4963

• `set` **size**(`inSize`): `void`

**`Description`**

设置控件的大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description    |
| :------- | :-------------------------------- | :------------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:输入大小 |

#### Returns

`void`

#### Inherited from

Widget.size

#### Defined in

UI/index.d.ts:4957

---

### slot

• `get` **slot**(): [`UISlot`](UI.UI.UISlot.md)

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

获取插槽

**`Effect`**

只在客户端调用生效

#### Returns

[`UISlot`](UI.UI.UISlot.md)

返回插槽

#### Inherited from

Widget.slot

#### Defined in

UI/index.d.ts:4771

---

### tickSpaceGeometry

• `get` **tickSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于驱动 Widget Tick 的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于驱动 Widget Tick 的几何信息

#### Inherited from

Widget.tickSpaceGeometry

#### Defined in

UI/index.d.ts:4903

---

### timeUntilInactive

• `get` **timeUntilInactive**(): `number`

**`Description`**

进入未激活状态的时间

**`Effect`**

只在客户端调用生效

#### Returns

`number`

进入未激活状态的时间，以秒为单位

#### Defined in

UI/index.d.ts:4616

• `set` **timeUntilInactive**(`Value`): `void`

**`Description`**

进入未激活状态的时间

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `Value` | `number` | usage:进入未激活状态的时间，以秒为单位 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4622

---

### timeUntilReset

• `get` **timeUntilReset**(): `number`

**`Description`**

释放摇杆后的复位时间

**`Effect`**

只在客户端调用生效

#### Returns

`number`

复位时间 以秒为单位

#### Defined in

UI/index.d.ts:4628

• `set` **timeUntilReset**(`Value`): `void`

**`Description`**

释放摇杆后的复位时间

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     | Description               |
| :------ | :------- | :------------------------ |
| `Value` | `number` | usage:复位时间 以秒为单位 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4634

---

### transform

• `get` **transform**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

**`Description`**

得到控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

控件的大小和位置

#### Inherited from

Widget.transform

#### Defined in

UI/index.d.ts:4927

• `set` **transform**(`inTransform`): `void`

**`Description`**

设置控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                  | Description    |
| :------------ | :------------------------------------ | :------------- |
| `inTransform` | [`UITransform`](UI.UI.UITransform.md) | usage:大小位置 |

#### Returns

`void`

#### Inherited from

Widget.transform

#### Defined in

UI/index.d.ts:4921

---

### visibility

• `get` **visibility**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

**`Description`**

获取可见性

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

返回可见性

#### Inherited from

Widget.visibility

#### Defined in

UI/index.d.ts:4795

• `set` **visibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                   | Description  |
| :----------- | :----------------------------------------------------- | :----------- |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | usage:可见性 |

#### Returns

`void`

#### Inherited from

Widget.visibility

#### Defined in

UI/index.d.ts:4789

---

### visible

• `get` **visible**(): `boolean`

**`Description`**

是否可见

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

Widget.visible

#### Defined in

UI/index.d.ts:4801

---

### zOrder

• `get` **zOrder**(): `number`

**`Description`**

获取 zorder

**`Effect`**

只在客户端调用生效

#### Returns

`number`

zorder

#### Inherited from

Widget.zOrder

#### Defined in

UI/index.d.ts:4975

• `set` **zOrder**(`InZOrder`): `void`

**`Description`**

设置 zoder

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description          |
| :--------- | :------- | :------------------- |
| `InZOrder` | `number` | usage:值越大在越上层 |

#### Returns

`void`

#### Inherited from

Widget.zOrder

#### Defined in

UI/index.d.ts:4969

## Methods

### destroyObject

▸ **destroyObject**(): `void`

**`Description`**

立刻移除并销毁 不可以在使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Inherited from

[Widget](UI.UI.Widget.md).[destroyObject](UI.UI.Widget.md#destroyobject)

#### Defined in

UI/index.d.ts:4751

---

### equal

▸ **equal**(`that`): `boolean`

**`Description`**

判断是不是同一个对象

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type                        | Description                  |
| :----- | :-------------------------- | :--------------------------- |
| `that` | [`Widget`](UI.UI.Widget.md) | usage:需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

#### Inherited from

[Widget](UI.UI.Widget.md).[equal](UI.UI.Widget.md#equal)

#### Defined in

UI/index.d.ts:4758

---

### invalidateLayoutAndVolatility

▸ **invalidateLayoutAndVolatility**(): `void`

**`Description`**

立刻触发重新渲染的和排布计算

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Inherited from

[Widget](UI.UI.Widget.md).[invalidateLayoutAndVolatility](UI.UI.Widget.md#invalidatelayoutandvolatility)

#### Defined in

UI/index.d.ts:4825

---

### resetJoyStick

▸ **resetJoyStick**(): `void`

**`Description`**

强制重置摇杆 - 例如在操控摇杆的时候隐藏其父类节点,这时候摇杆重新显示后无法成功重置

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

UI/index.d.ts:4490

---

### setVisibility

▸ **setVisibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                   | Description  |
| :----------- | :----------------------------------------------------- | :----------- |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | usage:可见性 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:4479

---

### newObject

▸ `Static` **newObject**(`Outer?`, `InName?`): [`VirtualJoystickPanel`](UI.UI.VirtualJoystickPanel.md)

**`Description`**

创建 MWVirtualJoystickPanelDesigner 控件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                                |
| :-------- | :-------------------------- | :----------------------------------------- |
| `Outer?`  | [`Widget`](UI.UI.Widget.md) | usage:创建控件的外 Outer 对象 default:null |
| `InName?` | `string`                    | usage:创建控件的名称 default:null          |

#### Returns

[`VirtualJoystickPanel`](UI.UI.VirtualJoystickPanel.md)

返回创建的控件

#### Defined in

UI/index.d.ts:4460

---

### newObjectAndAdd

▸ `Static` **newObjectAndAdd**(`InCanvas?`, `Outer?`, `InName?`): [`VirtualJoystickPanel`](UI.UI.VirtualJoystickPanel.md)

**`Description`**

创建 TouchPad 控件 当 Outer 和 InName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type                        | Description                                |
| :---------- | :-------------------------- | :----------------------------------------- |
| `InCanvas?` | [`Canvas`](UI.UI.Canvas.md) | usage:父节点 default:null                  |
| `Outer?`    | [`Widget`](UI.UI.Widget.md) | usage:创建控件的外 Outer 对象 default:null |
| `InName?`   | `string`                    | usage: 创建控件的名称 default: null        |

#### Returns

[`VirtualJoystickPanel`](UI.UI.VirtualJoystickPanel.md)

返回创建的对象

#### Defined in

UI/index.d.ts:4469
