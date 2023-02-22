Gui

# Gui <Badge type="tip" text="Groups" /> <Score text="Gui" />

## Table of contents
| Classes |
| :-----|
| [BasePanel](../classes/Extension.BasePanel.md) <br> 面板类的基类，可用于控制一个界面 |
| [BaseView](../classes/Extension.BaseView.md) <br> 界面类的基类 |
| [UIWidget](../classes/Gameplay.UIWidget.md) <br> 世界UI组件 |
| [AnalogInputEvent](../classes/UI.AnalogInputEvent.md) <br> 轴输入事件 |
| [AssetIconData](../classes/UI.AssetIconData.md) <br> 资源ICON信息 |
| [Button](../classes/UI.Button.md) <br> 按钮,无默认text |
| [Canvas](../classes/UI.Canvas.md) <br> 可挂载叶子节点的根节点，以及提供各种自动布局功能 |
| [CharacterEvent](../classes/UI.CharacterEvent.md) <br> 角色输入事件 |
| [ColorPick](../classes/UI.ColorPick.md) <br> 颜色选择器 |
| [DragDropOperation](../classes/UI.DragDropOperation.md) <br> UI 拖拽事件 |
| [DragDropPayLoad](../classes/UI.DragDropPayLoad.md) <br> 拖拽事件数据传递类 |
| [EventReply](../classes/UI.EventReply.md) <br> 事件回复 |
| [FocusEvent](../classes/UI.FocusEvent.md) <br> 焦点事件 |
| [Geometry](../classes/UI.Geometry.md) <br> 几何坐标信息 |
| [Image](../classes/UI.Image.md) <br> UI 图片 |
| [InputBox](../classes/UI.InputBox.md) <br> UI的输入框 |
| [InputEvent](../classes/UI.InputEvent.md) <br> 输入事件 |
| [JoystickStyleDesigner](../classes/UI.JoystickStyleDesigner.md) <br> 摇杆信息 |
| [KeyEvent](../classes/UI.KeyEvent.md) <br> 按键事件 |
| [Margin](../classes/UI.Margin.md) <br> 基础的边距，提供4个方向的数值修改 |
| [MaskButton](../classes/UI.MaskButton.md) <br> 遮罩 |
| [PanelWidget](../classes/UI.PanelWidget.md) <br> UI的PanelWidget可以挂载子节点 |
| [PointerEvent](../classes/UI.PointerEvent.md) <br> 点击或者滑动的时候传递mobile touch,鼠标,键盘信息的类 |
| [ProgressBar](../classes/UI.ProgressBar.md) <br> UI进度条 |
| [ScrollBox](../classes/UI.ScrollBox.md) <br> 滑动框 |
| [SlateBrushWithGuid](../classes/UI.SlateBrushWithGuid.md) <br> 贴图信息 |
| [SlateColor](../classes/UI.SlateColor.md) <br> UI颜色管理 |
| [StaleButton](../classes/UI.StaleButton.md) <br> 按钮 |
| [TabGroup](../classes/UI.TabGroup.md) <br> 选项卡组 |
| [TextBlock](../classes/UI.TextBlock.md) <br> UI文本 |
| [TouchPad](../classes/UI.TouchPad.md) <br> 摄像机滑动区 |
| [UIBehavior](../classes/UI.UIBehavior.md) <br> UI的驱动脚本基类 |
| [UIChildCollation](../classes/UI.UIChildCollation.md) <br> 容器自动布局子项排序规则 |
| [UIConstraintAnchors](../classes/UI.UIConstraintAnchors.md) <br> 节点对齐规则 |
| [UIFontInfo](../classes/UI.UIFontInfo.md) <br> 字体信息 |
| [UIHugContent](../classes/UI.UIHugContent.md) <br> 容器自动布局大小适应规则 |
| [UILayout](../classes/UI.UILayout.md) <br> 容器自动布局规则 |
| [UIManager](../classes/UI.UIManager.md) <br> UI管理类，可以继承此类，自带一个全局UI作为UI的总节点。 |
| [UIObject](../classes/UI.UIObject.md) <br> UI对象组件 |
| [UISlot](../classes/UI.UISlot.md) <br> UI插槽 |
| [UITransform](../classes/UI.UITransform.md) <br> 节点Transform |
| [UserWidget](../classes/UI.UserWidget.md) <br> UI控件的集合,预制体UI |
| [UserWidgetPrefab](../classes/UI.UserWidgetPrefab.md) <br> ui预制体 |
| [VirtualJoystickPanel](../classes/UI.VirtualJoystickPanel.md) <br> 摇杆 |
| [Widget](../classes/UI.Widget.md) <br> 可挂载叶子节点的根节点，以及提供各种自动布局功能 |


| Enums |
| :-----|
| [WidgetGeometryMode](../enums/Gameplay.WidgetGeometryMode.md) <br> UI形状枚举 |
| [WidgetSpaceMode](../enums/Gameplay.WidgetSpaceMode.md) <br> UI空间位置枚举 |
| [ButtonClickMethod](../enums/UI.ButtonClickMethod.md) <br> 按钮点击响应规则 |
| [ButtonPressMethod](../enums/UI.ButtonPressMethod.md) <br> 按钮按压响应规则 |
| [ButtonTouchMethod](../enums/UI.ButtonTouchMethod.md) <br> 按钮触摸响应规则 |
| [CameraControlType](../enums/UI.CameraControlType.md) <br> 相机控制模式 |
| [DragPivot](../enums/UI.DragPivot.md) <br> 拖拽的锚点 |
| [InputTextLimit](../enums/UI.InputTextLimit.md) <br> 输入框限制 |
| [MaskButtonType](../enums/UI.MaskButtonType.md) <br> 遮罩类型 |
| [MouseLockMode](../enums/UI.MouseLockMode.md) <br> 鼠标锁定模式 |
| [Orientation](../enums/UI.Orientation.md) <br> 滚动框类型 |
| [ProgressBarFillType](../enums/UI.ProgressBarFillType.md) <br> 进度条填充规则 |
| [ScrollBarDefaultLocation](../enums/UI.ScrollBarDefaultLocation.md) <br> 滚动条默认位置 |
| [SlateBrushDrawType](../enums/UI.SlateBrushDrawType.md) <br> 图片画刷绘制模式 |
| [SlateBrushTileType](../enums/UI.SlateBrushTileType.md) <br> 图片画刷填充模式 |
| [SlateColorStylingMode](../enums/UI.SlateColorStylingMode.md) <br> UI颜色应用模式 |
| [SlateVisibility](../enums/UI.SlateVisibility.md) <br> UI节点显示规则 |
| [SlideMethod](../enums/UI.SlideMethod.md) <br> 进度条滑动的方式 |
| [TextCommit](../enums/UI.TextCommit.md) <br> 输入提交模式 |
| [TextJustify](../enums/UI.TextJustify.md) <br> 文本排列对齐规则 |
| [TextVerticalJustify](../enums/UI.TextVerticalJustify.md) <br> 文本排列垂直对齐规则 |
| [UIConstraintHorizontal](../enums/UI.UIConstraintHorizontal.md) <br> 对齐策略水平规则 |
| [UIConstraintVertical](../enums/UI.UIConstraintVertical.md) <br> 对齐策略垂直规则 |
| [UIFontGlyph](../enums/UI.UIFontGlyph.md) <br> 字体类型 |
| [UIHorizontalCollation](../enums/UI.UIHorizontalCollation.md) <br> 自动布局子项布局排序 - 水平排序 |
| [UIHugContentHorizontally](../enums/UI.UIHugContentHorizontally.md) <br> 自动布局容器水平适应规则 |
| [UIHugContentVertically](../enums/UI.UIHugContentVertically.md) <br> 自动布局容器垂直适应规则 |
| [UILayoutPacket](../enums/UI.UILayoutPacket.md) <br> 自动布局节点排列规则 |
| [UILayoutType](../enums/UI.UILayoutType.md) <br> 自动布局排版规则 |
| [UIScrollBoxAnimationType](../enums/UI.UIScrollBoxAnimationType.md) <br> 滚动框动画类型 |
| [UITextHorizontalLayout](../enums/UI.UITextHorizontalLayout.md) <br> 文本框规则显示规则限制 |
| [UIVerticalCollation](../enums/UI.UIVerticalCollation.md) <br> 自动布局子项布局排序 - 垂直排序 |


| Modules Functions |
| :-----|
| **[absoluteToLocal](../modules/UI.UI.md#absolutetolocal)**(`geometry`: [`Geometry`](../classes/UI.UI.Geometry.md), `absolutePosition`: [`Vector2`](../classes/Type.Type.Vector2.md)): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 转化绝对坐标到相对坐标|
| **[absoluteToViewport](../modules/UI.UI.md#absolutetoviewport)**(`absoluteDesktopPosition`: [`Vector2`](../classes/Type.Type.Vector2.md), `outPixelPosition`: [`Vector2`](../classes/Type.Type.Vector2.md), `outViewportPosition`: [`Vector2`](../classes/Type.Type.Vector2.md)): `void` <br> 将桌面空间中几何图形的绝对坐标转换为本地视口坐标|
| **[assetIDChangeIconUrlRequest](../modules/UI.UI.md#assetidchangeiconurlrequest-1)**(`assets`: `string`[]): `Promise`<`void`\> <br> 异步请求资源的ICON信息|
| **[cancelDragDrop](../modules/UI.UI.md#canceldragdrop)**(): `void` <br> 中断所有的DragDrop|
| **[createUI](../modules/UI.UI.md#createui)**<`T`: extends [`UIBehavior`](../classes/UI.UI.UIBehavior.md)<`T`\>\>(`UIPrefabName`: `string`, `panelClass`: () => `T`): `T`: extends [`UIBehavior`](../classes/UI.UI.UIBehavior.md)<`T`\> <br> 创建UIPrefab|
| **[createUIByName](../modules/UI.UI.md#createuibyname)**(`UIPrefabName`: `string`): [`UserWidget`](../classes/UI.UI.UserWidget.md) <br> 创建UIPrefab|
| **[createUIByPath](../modules/UI.UI.md#createuibypath)**(`UIPath`: `string`): [`UserWidget`](../classes/UI.UI.UserWidget.md) <br> 创建UIPrefab|
| **[createUIOnlyClass](../modules/UI.UI.md#createuionlyclass)**<`T`: extends [`UIBehavior`](../classes/UI.UI.UIBehavior.md)<`T`\>\>(`panelClass`: () => `T`): `T`: extends [`UIBehavior`](../classes/UI.UI.UIBehavior.md)<`T`\> <br> 创建空的UI|
| **[endDragDrop](../modules/UI.UI.md#enddragdrop)**(`InReply`: [`EventReply`](../classes/UI.UI.EventReply.md)): `void` <br> 中断一个拖拽事件, 传入一个操作的事件|
| **[findUIBehavior](../modules/UI.UI.md#finduibehavior)**(`UI`: [`Widget`](../classes/UI.UI.Widget.md)): [`UIBehavior`](../classes/UI.UI.UIBehavior.md) <br> 获取UI脚本|
| **[getAbsoluteSize](../modules/UI.UI.md#getabsolutesize)**(`geometry`: [`Geometry`](../classes/UI.UI.Geometry.md)): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 返回绝对空间中几何图形的大小|
| **[getAssetIconDataByAssetID](../modules/UI.UI.md#getasseticondatabyassetid)**(`asset`: `string`): [`AssetIconData`](../classes/UI.UI.AssetIconData.md) <br> 获取资源的ICON信息|
| **[getCurrentMousePosition](../modules/UI.UI.md#getcurrentmouseposition)**(): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 获取当前鼠标所在的绝对位置|
| **[getDragDroppingContent](../modules/UI.UI.md#getdragdroppingcontent)**(): [`DragDropOperation`](../classes/UI.UI.DragDropOperation.md) <br> 获取当前的DragDrop事件|
| **[getLastMousePosition](../modules/UI.UI.md#getlastmouseposition)**(): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 获取上一次鼠标所在的绝对位置|
| **[getLocalSize](../modules/UI.UI.md#getlocalsize)**(`geometry`: [`Geometry`](../classes/UI.UI.Geometry.md)): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 返回局部空间中几何图形的大小|
| **[getLocalTopLeft](../modules/UI.UI.md#getlocaltopleft)**(`geometry`: [`Geometry`](../classes/UI.UI.Geometry.md)): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 返回局部空间中几何图形的局部顶部/左侧|
| **[getMousePositionOnPlatform](../modules/UI.UI.md#getmousepositiononplatform)**(): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 获取平台的鼠标光标位置。这是鼠标的绝对桌面位置。|
| **[getMousePositionOnViewport](../modules/UI.UI.md#getmousepositiononviewport)**(): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 获取平台的鼠标光标在视口控件的本地空间中的位置。|
| **[getPlayerScreenWidgetGeometry](../modules/UI.UI.md#getplayerscreenwidgetgeometry)**(`player`: [`Player`](../classes/Gameplay.Gameplay.Player.md)): [`Geometry`](../classes/UI.UI.Geometry.md) <br> 获取包含添加到“player screen”的所有控件的控件的几何形状。你可以使用这个几何图形在绝对和本地空间的控件之间转换控件。|
| **[getResolutionChanged](../modules/UI.UI.md#getresolutionchanged)**(`Delegate`: [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`x`: `number`, `y`: `number`) => `void`\>): `void` <br> 分辨率改变时的回调|
| **[getViewportScale](../modules/UI.UI.md#getviewportscale)**(): `number` <br> 获取应用于视口和所有小部件的当前DPI Scale。|
| **[getViewportSize](../modules/UI.UI.md#getviewportsize)**(): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 获取游戏视口的大小。|
| **[getViewportWidgetGeometry](../modules/UI.UI.md#getviewportwidgetgeometry)**(): [`Geometry`](../classes/UI.UI.Geometry.md) <br> 获取包含添加到“视口”中的所有控件的控件的几何形状。你可以使用这个几何图形在绝对和本地空间的控件之间转换控件。|
| **[isDragDropping](../modules/UI.UI.md#isdragdropping)**(): `boolean` <br> 判断当前是否有一个DragDrop事件|
| **[isUnderLocation](../modules/UI.UI.md#isunderlocation)**(`geometry`: [`Geometry`](../classes/UI.UI.Geometry.md), `absolutePosition`: [`Vector2`](../classes/Type.Type.Vector2.md)): `boolean` <br> 判定给定坐标是否在geometry下|
| **[localToAbsolute](../modules/UI.UI.md#localtoabsolute)**(`geometry`: [`Geometry`](../classes/UI.UI.Geometry.md), `localPosition`: [`Vector2`](../classes/Type.Type.Vector2.md)): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 将局部坐标转换为绝对坐标,绝对坐标可以是桌面空间，也可以是窗口空间，这取决于小部件层次结构的根所在的空间。|
| **[localToViewport](../modules/UI.UI.md#localtoviewport)**(`geometry`: [`Geometry`](../classes/UI.UI.Geometry.md), `localPosition`: [`Vector2`](../classes/Type.Type.Vector2.md), `outPixelPosition`: [`Vector2`](../classes/Type.Type.Vector2.md), `outViewportPosition`: [`Vector2`](../classes/Type.Type.Vector2.md)): `void` <br> 将几何体的局部坐标转换为局部视口坐标。|
| **[projectWorldLocationToWidgetPosition](../modules/UI.UI.md#projectworldlocationtowidgetposition)**(`player`: [`Player`](../classes/Gameplay.Gameplay.Player.md), `worldLocation`: [`Vector`](../classes/Type.Type.Vector.md), `outScreenPosition`: [`Vector2`](../classes/Type.Type.Vector2.md), `isPlayerViewportRelative`: `boolean`): `boolean` <br> 获取投影世界到播放器的屏幕位置，然后将其转换为控件位置，考虑任何质量缩放。|
| **[screenToViewport](../modules/UI.UI.md#screentoviewport)**(`screenPosition`: [`Vector2`](../classes/Type.Type.Vector2.md)): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 将屏幕位置(以像素为单位)转换为视口控件的本地空间。|
| **[screenToWidgetAbsolute](../modules/UI.UI.md#screentowidgetabsolute)**(`screenPosition`: [`Vector2`](../classes/Type.Type.Vector2.md), `isIncludeWindowPosition?`: `boolean`): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 将屏幕位置(像素)转换为绝对桌面程序坐标。如果bIncludeWindowPosition为真，那么这个方法也将移除游戏窗口的位置(在窗口模式下有用)。|
| **[screenToWidgetLocal](../modules/UI.UI.md#screentowidgetlocal)**(`geometry`: [`Geometry`](../classes/UI.UI.Geometry.md), `screenPosition`: [`Vector2`](../classes/Type.Type.Vector2.md), `isIncludeWindowPosition?`: `boolean`): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 将屏幕位置(以像素为单位)转换为具有给定几何形状的小部件的本地空间。如果bIncludeWindowPosition为真，那么这个方法也将移除游戏窗口的位置(在窗口模式下有用)。|
| **[setFocusToGameViewport](../modules/UI.UI.md#setfocustogameviewport)**(): `void` <br> 设置关注游戏窗口|
| **[setInputModeGameAndUI](../modules/UI.UI.md#setinputmodegameandui)**(`InWidgetToFocus?`: [`Widget`](../classes/UI.UI.Widget.md), `InMouseLockMode?`: [`MouseLockMode`](../enums/UI.UI.MouseLockMode.md), `hideCursorDuringCapture?`: `boolean`): `void` <br> 设置一个输入模式，只允许UI响应用户输入，如果UI不处理它，玩家输入/玩家控制器就有机会|
| **[setInputModeGameOnly](../modules/UI.UI.md#setinputmodegameonly)**(): `void` <br> 设置一个输入模式，只允许玩家输入/玩家控制器响应用户输入|
| **[setInputModeUIOnly](../modules/UI.UI.md#setinputmodeuionly)**(`InWidgetToFocus?`: [`Widget`](../classes/UI.UI.Widget.md), `InMouseLockMode?`: [`MouseLockMode`](../enums/UI.UI.MouseLockMode.md)): `void` <br> 设置只允许UI响应用户输入的输入模式。|
| **[transformVectorAbsoluteToLocal](../modules/UI.UI.md#transformvectorabsolutetolocal)**(`geometry`: [`Geometry`](../classes/UI.UI.Geometry.md), `absoluteVector`: [`Vector2`](../classes/Type.Type.Vector2.md)): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 转化绝对空间下矢量到局部空间下|
| **[transformVectorLocalToAbsolute](../modules/UI.UI.md#transformvectorlocaltoabsolute)**(`geometry`: [`Geometry`](../classes/UI.UI.Geometry.md), `localVector`: [`Vector2`](../classes/Type.Type.Vector2.md)): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 转化局部空间下矢量到绝对空间下|

