[设置](../groups/设置.设置.md) / SettingService

# SettingService <Badge type="tip" text="Class" /> <Score text="SettingService" />

设置面板相关API

## Table of contents

### Methods <Score text="Methods" /> 
| **[collapseSettingPanel](mw.SettingService.md#collapsesettingpanel)**(): `void` <Badge type="tip" text="client" />  |
| :-----|
| 收起设置面板，如果设置面板入口隐藏，可以通过此接口收起设置面板|
| **[promptSettingPanel](mw.SettingService.md#promptsettingpanel)**(): `void` <Badge type="tip" text="client" />  |
| 展示设置面板，如果设置面板入口隐藏，可以通过此接口展示设置面板|
| **[setSettingButtonVisible](mw.SettingService.md#setsettingbuttonvisible)**(`visible`: `boolean`): `void` <Badge type="tip" text="client" />  |
| 控制设置面板入口显隐|

## Methods

### collapseSettingPanel <Score text="collapseSettingPanel" /> 

• `Static` **collapseSettingPanel**(): `void` <Badge type="tip" text="client" />

收起设置面板，如果设置面板入口隐藏，可以通过此接口收起设置面板


___

### promptSettingPanel <Score text="promptSettingPanel" /> 

• `Static` **promptSettingPanel**(): `void` <Badge type="tip" text="client" />

展示设置面板，如果设置面板入口隐藏，可以通过此接口展示设置面板


___

### setSettingButtonVisible <Score text="setSettingButtonVisible" /> 

• `Static` **setSettingButtonVisible**(`visible`): `void` <Badge type="tip" text="client" />

控制设置面板入口显隐

#### Parameters

| `visible` `boolean` |  是否显示设置面板入口 |
| :------ | :------ |


::: warning Precautions

游戏中提供给玩家的退出按钮在设置面板中，如果设置面板入口隐藏，玩家将无法退出游戏。使用此接口时请注意游戏退出逻辑。
