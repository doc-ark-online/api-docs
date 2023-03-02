[Util](Util.Util.md) / AssetUtil

# AssetUtil <Badge type="tip" text="Namespace" /> <Score text="AssetUtil" />

## Table of contents

| Functions |
| :-----|
| **[asyncDownloadAsset](Util.AssetUtil.md#asyncdownloadasset)**(`string`): `Promise`<`boolean`\> <br> 资源下载|
| **[isAssetExist](Util.AssetUtil.md#isassetexist)**(`string`): `boolean` <br> 资源是否存在|
| **[isAssetLoaded](Util.AssetUtil.md#isassetloaded)**(`string`): `boolean` <br> 资源是否加载|
| **[loadAsset](Util.AssetUtil.md#loadasset)**(`string`): `boolean` <br> 资源加载|

## Functions

### asyncDownloadAsset <Score text="asyncDownloadAsset" /> 

• **asyncDownloadAsset**(`InAssetId`): `Promise`<`boolean`\> <Badge type="tip" text="other" />

资源下载


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`Promise`<`boolean`\>

下载失败将返回false

___

### isAssetExist <Score text="isAssetExist" /> 

• **isAssetExist**(`InAssetId`): `boolean` <Badge type="tip" text="other" />

资源是否存在与当前工程

::: warning Precautions

判断资源是否存在工程中,也可以直接打开工程生成的NewLevel文件查看资源的guid是否在文件中
（拖入场景、优先加载这两个操作会向NewLevel添加对应资源的guid）

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`boolean`

不存在将返回false

___

### isAssetLoaded <Score text="isAssetLoaded" /> 

• **isAssetLoaded**(`InAssetId`): `boolean` <Badge type="tip" text="other" />

资源是否加载


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`boolean`

未加载将返回false

___

### loadAsset <Score text="loadAsset" /> 

• **loadAsset**(`InAssetId`): `boolean` <Badge type="tip" text="other" />

资源加载


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`boolean`

未加载成功将返回false
