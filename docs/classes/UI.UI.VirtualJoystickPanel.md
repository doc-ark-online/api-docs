[UI](../modules/UI.UI.md) / VirtualJoystickPanel

# VirtualJoystickPanel <Badge type="tip" text="Class" />

**`Description`**

摇杆

## Hierarchy

- [`Widget`](UI.UI.Widget.md)

  ↳ **`VirtualJoystickPanel`**

## Table of contents

| Accessors                                                                                                                                                                                                  |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[activeOpacity](UI.UI.VirtualJoystickPanel.md#activeopacity)**(): `number` <br> 返回激活时的透明度                                                                                                       |
| **[autoSizeEnable](UI.UI.VirtualJoystickPanel.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小                                                                                                  |
| **[backgroundDisabledImageId](UI.UI.VirtualJoystickPanel.md#backgrounddisabledimageid)**(): `string` <br> 返回背景图片禁用状态图片 id                                                                      |
| **[backgroundImageDesigner](UI.UI.VirtualJoystickPanel.md#backgroundimagedesigner)**(): [`JoystickStyleDesigner`](UI.UI.JoystickStyleDesigner.md) <br> 返回输入的背景贴图设置，包括 普通的 点击的 不启用的 |
| **[backgroundImageId](UI.UI.VirtualJoystickPanel.md#backgroundimageid)**(): `string` <br> 返回中心图片普通状态图片 id                                                                                      |
| **[backgroundImageSize](UI.UI.VirtualJoystickPanel.md#backgroundimagesize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 摇杆背景图片大小                                                                    |
| **[backgroundTouchImageId](UI.UI.VirtualJoystickPanel.md#backgroundtouchimageid)**(): `string` <br> 返回背景图片按压状态图片 id                                                                            |
| **[cachedGeometry](UI.UI.VirtualJoystickPanel.md#cachedgeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取上一次的 GetTickSpaceGeometry                                                               |
| **[center](UI.UI.VirtualJoystickPanel.md#center)**(): [`Vector2`](Type.Type.Vector2.md) <br> 返回输入的是摇杆中心位置， 不符合预期会返回默认值                                                             |
| **[centerDisableImageId](UI.UI.VirtualJoystickPanel.md#centerdisableimageid)**(): `string` <br> 返回中心图片禁用状态图片 id                                                                                |
| **[centerImageDesigner](UI.UI.VirtualJoystickPanel.md#centerimagedesigner)**(): [`JoystickStyleDesigner`](UI.UI.JoystickStyleDesigner.md) <br> 返回输入的中心贴图设置，包括 普通的 点击的 不启用的         |
| **[centerImageId](UI.UI.VirtualJoystickPanel.md#centerimageid)**(): `string` <br> 返回中心图片普通状态图片 id                                                                                              |
| **[centerImageSize](UI.UI.VirtualJoystickPanel.md#centerimagesize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 摇杆按钮图片大小                                                                            |
| **[centerTouchImage](UI.UI.VirtualJoystickPanel.md#centertouchimage)**(): `string` <br> 返回中心图片按压状态图片 id                                                                                        |
| **[constraints](UI.UI.VirtualJoystickPanel.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\> <br> 获取控件的布局                                                     |
| **[controlByMouseEnable](UI.UI.VirtualJoystickPanel.md#controlbymouseenable)**(): `boolean` <br> 获取是否被鼠标控制，只作用于 PC 端                                                                        |
| **[controlType](UI.UI.VirtualJoystickPanel.md#controltype)**(): [`CameraControlType`](../enums/UI.UI.CameraControlType.md) <br> 返回输入的是摇杆类型， 不符合预期会返回默认值                              |
| **[desiredSize](UI.UI.VirtualJoystickPanel.md#desiredsize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取期望大小                                                                                        |
| **[enable](UI.UI.VirtualJoystickPanel.md#enable)**(): `boolean` <br> 是否可用                                                                                                                              |
| **[guid](UI.UI.VirtualJoystickPanel.md#guid)**(): `string` <br> 获取控件 GUID                                                                                                                              |
| **[inActiveOpacity](UI.UI.VirtualJoystickPanel.md#inactiveopacity)**(): `number` <br> 返回未激活时的透明度                                                                                                 |
| **[inputScale](UI.UI.VirtualJoystickPanel.md#inputscale)**(): [`Vector2`](Type.Type.Vector2.md) <br> 返回输入的输入比例                                                                                    |
| **[isHovered](UI.UI.VirtualJoystickPanel.md#ishovered)**(): `boolean` <br> 是否是 hovered                                                                                                                  |
| **[isLocationFixed](UI.UI.VirtualJoystickPanel.md#islocationfixed)**(): `boolean` <br> 拖动后，是否固定摇杆位置                                                                                            |
| **[name](UI.UI.VirtualJoystickPanel.md#name)**(): `string` <br> 获取名字                                                                                                                                   |
| **[onInputDir](UI.UI.VirtualJoystickPanel.md#oninputdir)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`vec`: [`Vector2`](Type.Type.Vector2.md)) => `void`\> <br> 输入移动事件               |
| **[onJoyStickDown](UI.UI.VirtualJoystickPanel.md#onjoystickdown)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\> <br> 摇杆按下事件的代理                                         |
| **[onJoyStickUp](UI.UI.VirtualJoystickPanel.md#onjoystickup)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\> <br> 摇杆抬起事件的代理                                             |
| **[paintSpaceGeometry](UI.UI.VirtualJoystickPanel.md#paintspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于渲染 Widget 的几何信息                                                  |
| **[parent](UI.UI.VirtualJoystickPanel.md#parent)**(): [`Widget`](UI.UI.Widget.md) <br> 获取父节点                                                                                                          |
| **[position](UI.UI.VirtualJoystickPanel.md#position)**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\> <br> 获取控件的位置                                                                               |
| **[renderOpacity](UI.UI.VirtualJoystickPanel.md#renderopacity)**(): `number` <br> 获取渲染透明度                                                                                                           |
| **[renderScale](UI.UI.VirtualJoystickPanel.md#renderscale)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染缩放                                                                                        |
| **[renderShear](UI.UI.VirtualJoystickPanel.md#rendershear)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染错切形变                                                                                    |
| **[renderTransformAngle](UI.UI.VirtualJoystickPanel.md#rendertransformangle)**(): `number` <br> 获取渲染的角度                                                                                             |
| **[renderTransformPivot](UI.UI.VirtualJoystickPanel.md#rendertransformpivot)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染锚点                                                                      |
| **[size](UI.UI.VirtualJoystickPanel.md#size)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取大小                                                                                                          |
| **[slot](UI.UI.VirtualJoystickPanel.md#slot)**(): [`UISlot`](UI.UI.UISlot.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息                                            |
| **[tickSpaceGeometry](UI.UI.VirtualJoystickPanel.md#tickspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于驱动 Widget Tick 的几何信息                                               |
| **[timeUntilInactive](UI.UI.VirtualJoystickPanel.md#timeuntilinactive)**(): `number` <br> 进入未激活状态的时间                                                                                             |
| **[timeUntilReset](UI.UI.VirtualJoystickPanel.md#timeuntilreset)**(): `number` <br> 释放摇杆后的复位时间                                                                                                   |
| **[transform](UI.UI.VirtualJoystickPanel.md#transform)**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\> <br> 得到控件的大小和位置                                                                   |
| **[visibility](UI.UI.VirtualJoystickPanel.md#visibility)**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) <br> 获取可见性                                                                       |
| **[visible](UI.UI.VirtualJoystickPanel.md#visible)**(): `boolean` <br> 是否可见                                                                                                                            |
| **[zOrder](UI.UI.VirtualJoystickPanel.md#zorder)**(): `number` <br> 获取 zorder                                                                                                                            |

| Methods                                                                                                                                                                                                                                                                           |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[destroyObject](UI.UI.VirtualJoystickPanel.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用                                                                                                                                                                       |
| **[equal](UI.UI.VirtualJoystickPanel.md#equal)**([`Widget`](UI.UI.Widget.md)): `boolean` <br> 判断是不是同一个对象                                                                                                                                                                |
| **[invalidateLayoutAndVolatility](UI.UI.VirtualJoystickPanel.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算                                                                                                                                      |
| **[resetJoyStick](UI.UI.VirtualJoystickPanel.md#resetjoystick)**(): `void` <br> 强制重置摇杆 - 例如在操控摇杆的时候隐藏其父类节点,这时候摇杆重新显示后无法成功重置                                                                                                                |
| **[setVisibility](UI.UI.VirtualJoystickPanel.md#setvisibility)**([`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)): `void` <br> 设置可见性                                                                                                                                  |
| **[newObject](UI.UI.VirtualJoystickPanel.md#newobject)**([`Widget`](UI.UI.Widget.md), `string`): [`VirtualJoystickPanel`](UI.UI.VirtualJoystickPanel.md) <br> 创建 MWVirtualJoystickPanelDesigner 控件                                                                            |
| **[newObjectAndAdd](UI.UI.VirtualJoystickPanel.md#newobjectandadd)**([`Canvas`](UI.UI.Canvas.md), [`Widget`](UI.UI.Widget.md), `string`): [`VirtualJoystickPanel`](UI.UI.VirtualJoystickPanel.md) <br> 创建 TouchPad 控件 当 Outer 和 InName 与已有的对象相同时，旧的对象会被销毁 |

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

• `set` **activeOpacity**(`Value`): `void`

**`Description`**

设置激活时的透明度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `Value` | `number` | 透明度      |

#### Returns

`void`

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

• `set` **autoSizeEnable**(`autoSize`): `void`

**`Description`**

设置是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description      |
| :--------- | :-------- | :--------------- |
| `autoSize` | `boolean` | 是否自动设置大小 |

#### Returns

`void`

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

• `set` **backgroundDisabledImageId**(`id`): `void`

**`Description`**

设置背景图片禁用状态图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `id` | `string` | 资源 id     |

#### Returns

`void`

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

• `set` **backgroundImageDesigner**(`inImage`): `void`

**`Description`**

设置输入的背景贴图设置，包括 普通的 点击的 不启用的

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                                      | Description  |
| :-------- | :-------------------------------------------------------- | :----------- |
| `inImage` | [`JoystickStyleDesigner`](UI.UI.JoystickStyleDesigner.md) | 背景贴图设置 |

#### Returns

`void`

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

• `set` **backgroundImageId**(`id`): `void`

**`Description`**

设置背景图片普通状态图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `id` | `string` | 资源 id     |

#### Returns

`void`

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

• `set` **backgroundImageSize**(`inSize`): `void`

**`Description`**

摇杆背景图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description      |
| :------- | :-------------------------------- | :--------------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | 摇杆背景图片大小 |

#### Returns

`void`

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

• `set` **backgroundTouchImageId**(`id`): `void`

**`Description`**

设置背景图片按压状态图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `id` | `string` | 资源 id     |

#### Returns

`void`

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

• `set` **center**(`inValue`): `void`

**`Description`**

设置输入的中心位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                              | Description  |
| :-------- | :-------------------------------- | :----------- |
| `inValue` | [`Vector2`](Type.Type.Vector2.md) | 新的中心位置 |

#### Returns

`void`

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

• `set` **centerDisableImageId**(`id`): `void`

**`Description`**

设置中心图片禁用状态图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `id` | `string` | 资源 id     |

#### Returns

`void`

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

• `set` **centerImageDesigner**(`inImage`): `void`

**`Description`**

设置输入的中心贴图设置，包括 普通的 点击的 不启用的

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                                      | Description  |
| :-------- | :-------------------------------------------------------- | :----------- |
| `inImage` | [`JoystickStyleDesigner`](UI.UI.JoystickStyleDesigner.md) | 中心贴图设置 |

#### Returns

`void`

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

• `set` **centerImageId**(`id`): `void`

**`Description`**

设置中心图片普通状态图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `id` | `string` | 资源 id     |

#### Returns

`void`

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

• `set` **centerImageSize**(`inSize`): `void`

**`Description`**

摇杆按钮图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description      |
| :------- | :-------------------------------- | :--------------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | 摇杆按钮图片大小 |

#### Returns

`void`

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

• `set` **centerTouchImage**(`id`): `void`

**`Description`**

置中心图片按压状态图片 id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `id` | `string` | 资源 id     |

#### Returns

`void`

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

• `set` **constraints**(`ininconstraints`): `void`

**`Description`**

设置控件的布局

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                                                  | Description |
| :---------------- | :---------------------------------------------------- | :---------- |
| `ininconstraints` | [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md) | 控件的布局  |

#### Returns

`void`

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

• `set` **controlByMouseEnable**(`controlByMouse`): `void`

**`Description`**

设置是否被鼠标控制，只作用于 PC 端

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type      | Description    |
| :--------------- | :-------- | :------------- |
| `controlByMouse` | `boolean` | 是否被鼠标控制 |

#### Returns

`void`

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

• `set` **controlType**(`NewControlType`): `void`

**`Description`**

设置输入的摇杆类型，人物的移动和技能摇杆的移动类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                                       | Description |
| :--------------- | :--------------------------------------------------------- | :---------- |
| `NewControlType` | [`CameraControlType`](../enums/UI.UI.CameraControlType.md) | 摇杆类型    |

#### Returns

`void`

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

• `set` **enable**(`isEnable`): `void`

**`Description`**

设置可用性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description    |
| :--------- | :-------- | :------------- |
| `isEnable` | `boolean` | 可用性 boolean |

#### Returns

`void`

返回设置结果

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

• `set` **inActiveOpacity**(`Value`): `void`

**`Description`**

设置未激活时的透明度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `Value` | `number` | 透明度      |

#### Returns

`void`

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

• `set` **inputScale**(`inScale`): `void`

**`Description`**

设置输入的输入比例

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                              | Description  |
| :-------- | :-------------------------------- | :----------- |
| `inScale` | [`Vector2`](Type.Type.Vector2.md) | 新的输入比例 |

#### Returns

`void`

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

• `set` **isLocationFixed**(`enable`): `void`

**`Description`**

拖动后，是否固定摇杆位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type      | Description      |
| :------- | :-------- | :--------------- |
| `enable` | `boolean` | 是否固定摇杆位置 |

#### Returns

`void`

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

• `set` **name**(`name`): `void`

**`Description`**

设定名字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | 名字        |

#### Returns

`void`

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

• `set` **position**(`inFigmaPosition`): `void`

**`Description`**

设置控件的位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                              | Description |
| :---------------- | :-------------------------------- | :---------- |
| `inFigmaPosition` | [`Vector2`](Type.Type.Vector2.md) | 控件的位置  |

#### Returns

`void`

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

• `set` **renderOpacity**(`InOpacity`): `void`

**`Description`**

设置渲染透明度 0 ~ 1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `InOpacity` | `number` | 透明度      |

#### Returns

`void`

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

• `set` **renderScale**(`scale`): `void`

**`Description`**

设置渲染缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description |
| :------ | :-------------------------------- | :---------- |
| `scale` | [`Vector2`](Type.Type.Vector2.md) | 渲染缩放    |

#### Returns

`void`

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

• `set` **renderShear**(`shear`): `void`

**`Description`**

设置渲染错切形变

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description  |
| :------ | :-------------------------------- | :----------- |
| `shear` | [`Vector2`](Type.Type.Vector2.md) | 渲染错切形变 |

#### Returns

`void`

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

• `set` **renderTransformAngle**(`o`): `void`

**`Description`**

设置渲染的角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `o`  | `number` | 渲染角度    |

#### Returns

`void`

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

• `set` **renderTransformPivot**(`Pivot`): `void`

**`Description`**

设置渲染锚点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description |
| :------ | :-------------------------------- | :---------- |
| `Pivot` | [`Vector2`](Type.Type.Vector2.md) | 渲染锚点    |

#### Returns

`void`

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

• `set` **size**(`inSize`): `void`

**`Description`**

设置控件的大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | 输入大小    |

#### Returns

`void`

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

• `set` **timeUntilInactive**(`Value`): `void`

**`Description`**

进入未激活状态的时间

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     | Description                      |
| :------ | :------- | :------------------------------- |
| `Value` | `number` | 进入未激活状态的时间，以秒为单位 |

#### Returns

`void`

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

• `set` **timeUntilReset**(`Value`): `void`

**`Description`**

释放摇杆后的复位时间

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     | Description         |
| :------ | :------- | :------------------ |
| `Value` | `number` | 复位时间 以秒为单位 |

#### Returns

`void`

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

• `set` **transform**(`inTransform`): `void`

**`Description`**

设置控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                  | Description |
| :------------ | :------------------------------------ | :---------- |
| `inTransform` | [`UITransform`](UI.UI.UITransform.md) | 大小位置    |

#### Returns

`void`

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

• `set` **visibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                   | Description |
| :----------- | :----------------------------------------------------- | :---------- |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | 可见性      |

#### Returns

`void`

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

• `set` **zOrder**(`InZOrder`): `void`

**`Description`**

设置 zoder

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description    |
| :--------- | :------- | :------------- |
| `InZOrder` | `number` | 值越大在越上层 |

#### Returns

`void`

## Methods

### destroyObject

▸ **destroyObject**(): `void`

**`Description`**

立刻移除并销毁 不可以在使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

---

### equal

▸ **equal**(`that`): `boolean`

**`Description`**

判断是不是同一个对象

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type                        | Description            |
| :----- | :-------------------------- | :--------------------- |
| `that` | [`Widget`](UI.UI.Widget.md) | 需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

---

### invalidateLayoutAndVolatility

▸ **invalidateLayoutAndVolatility**(): `void`

**`Description`**

立刻触发重新渲染的和排布计算

**`Effect`**

只在客户端调用生效

#### Returns

`void`

---

### resetJoyStick

▸ **resetJoyStick**(): `void`

**`Description`**

强制重置摇杆 - 例如在操控摇杆的时候隐藏其父类节点,这时候摇杆重新显示后无法成功重置

**`Effect`**

只在客户端调用生效

#### Returns

`void`

---

### setVisibility

▸ **setVisibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                   | Description |
| :----------- | :----------------------------------------------------- | :---------- |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | 可见性      |

#### Returns

`void`

---

### newObject

▸ `Static` **newObject**(`Outer?`, `InName?`): [`VirtualJoystickPanel`](UI.UI.VirtualJoystickPanel.md)

**`Description`**

创建 MWVirtualJoystickPanelDesigner 控件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                          |
| :-------- | :-------------------------- | :----------------------------------- |
| `Outer?`  | [`Widget`](UI.UI.Widget.md) | 创建控件的外 Outer 对象 default:null |
| `InName?` | `string`                    | 创建控件的名称 default:null          |

#### Returns

[`VirtualJoystickPanel`](UI.UI.VirtualJoystickPanel.md)

返回创建的控件

---

### newObjectAndAdd

▸ `Static` **newObjectAndAdd**(`InCanvas?`, `Outer?`, `InName?`): [`VirtualJoystickPanel`](UI.UI.VirtualJoystickPanel.md)

**`Description`**

创建 TouchPad 控件 当 Outer 和 InName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type                        | Description                          |
| :---------- | :-------------------------- | :----------------------------------- |
| `InCanvas?` | [`Canvas`](UI.UI.Canvas.md) | 父节点 default:null                  |
| `Outer?`    | [`Widget`](UI.UI.Widget.md) | 创建控件的外 Outer 对象 default:null |
| `InName?`   | `string`                    | 创建控件的名称 default: null         |

#### Returns

[`VirtualJoystickPanel`](UI.UI.VirtualJoystickPanel.md)

返回创建的对象
