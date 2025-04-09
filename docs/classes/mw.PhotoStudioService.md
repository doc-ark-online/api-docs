[设置](../groups/设置.设置.md) / PhotoStudioService

# PhotoStudioService <Badge type="tip" text="Class" /> <Score text="PhotoStudioService" />

拍照组件

## Table of contents

### Methods <Score text="Methods" /> 
| **[asyncClosePhotoStudioModule](mw.PhotoStudioService.md#asyncclosephotostudiomodule)**(): `Promise`<`void`\> <Badge type="tip" text="client" />  |
| :-----|
| 打开拍照组件|
| **[asyncOpenPhotoStudioModule](mw.PhotoStudioService.md#asyncopenphotostudiomodule)**(`extraInfo?`: `any`): `Promise`<`boolean`\> <Badge type="tip" text="client" />  |
| 打开拍照组件|
| **[setEnablePhotoModule](mw.PhotoStudioService.md#setenablephotomodule)**(`state`: `boolean`): `boolean` <Badge type="tip" text="client" />  |
| 设置是否开启拍照入口|

## Methods

### asyncClosePhotoStudioModule <Score text="asyncClosePhotoStudioModule" /> 

• `Static` **asyncClosePhotoStudioModule**(): `Promise`<`void`\> <Badge type="tip" text="client" />

打开拍照组件

#### Returns

| `Promise`<`void`\> | 异步void |
| :------ | :------ |

___

### asyncOpenPhotoStudioModule <Score text="asyncOpenPhotoStudioModule" /> 

• `Static` **asyncOpenPhotoStudioModule**(`extraInfo?`): `Promise`<`boolean`\> <Badge type="tip" text="client" />

打开拍照组件

#### Parameters

| `extraInfo?` `any` |  额外的传参 default: undefined |
| :------ | :------ |

#### Returns

| `Promise`<`boolean`\> | 打开结果 |
| :------ | :------ |

___

### setEnablePhotoModule <Score text="setEnablePhotoModule" /> 

• `Static` **setEnablePhotoModule**(`state`): `boolean` <Badge type="tip" text="client" />

设置是否开启拍照入口

#### Parameters

| `state` `boolean` |  是否开启 default: true |
| :------ | :------ |

#### Returns

| `boolean` | 设置是否成功 |
| :------ | :------ |
