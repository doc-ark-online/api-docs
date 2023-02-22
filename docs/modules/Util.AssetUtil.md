[Util](Util.Util.md) / AssetUtil

# AssetUtil <Badge type="tip" text="Namespace" /> <Score text="AssetUtil" />

## Table of contents

| Functions |
| :-----|
| **[assetLoaded](Util.AssetUtil.md#assetloaded)**(`InAssetId`: `string`): `boolean` <br> 资源是否加载|
| [loadAsset](Util.AssetUtil.md#loadasset) |

## Functions

### assetLoaded <Score text="assetLoaded" /> 

• **assetLoaded**(`InAssetId`): `boolean` 

**`Groups`**

UTILITY

资源是否加载


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`boolean`

未加载将返回false

___

### asyncDownloadAsset <Score text="asyncDownloadAsset" /> 

• **asyncDownloadAsset**(`InAssetId`): `Promise`<`boolean`\> 

资源下载

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`Promise`<`boolean`\>

下载失败将返回false

___