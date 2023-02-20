[Util](Util.Util.md) / AssetUtil

# AssetUtil <Badge type="tip" text="Namespace" /> <Score text="AssetUtil" />

## Table of contents

| Functions |
| :-----|
| **[assetLoaded](Util.AssetUtil.md#assetloaded)**(`string`): `boolean` <br> UTILITY|
| **[asyncDownloadAsset](Util.AssetUtil.md#asyncdownloadasset)**(`string`): `Promise`<`boolean`\> <br> 资源下载|
| **[isAssetExist](Util.AssetUtil.md#isassetexist)**(`string`): `boolean` <br> 资源是否存在|
| **[isAssetLoaded](Util.AssetUtil.md#isassetloaded)**(`string`): `boolean` <br> 资源是否加载|
| **[loadAsset](Util.AssetUtil.md#loadasset)**(`string`): `boolean` <br> 资源加载|

## Functions

### assetLoaded <Score text="assetLoaded" /> 

• **assetLoaded**(`InAssetId`): `boolean` <Badge type="tip" text="other" />

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

• **asyncDownloadAsset**(`InAssetId`): `Promise`<`boolean`\> <Badge type="tip" text="other" />

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

### isAssetExist <Score text="isAssetExist" /> 

• **isAssetExist**(`InAssetId`): `boolean` <Badge type="tip" text="other" />

资源是否存在

**`Groups`**

UTILITY


**`Deprecated`**

since:022 reason:接口废弃,预计v0.24.0移除该接口 replacement:assetLoaded

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

**`Groups`**

UTILITY


**`Deprecated`**

since:022 reason:接口废弃,预计v0.24.0移除该接口 replacement:assetLoaded

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

**`Groups`**

UTILITY


**`Deprecated`**

since:022 reason:接口废弃,预计v0.24.0移除该接口 replacement:asyncDownloadAsset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`boolean`

未加载成功将返回false
