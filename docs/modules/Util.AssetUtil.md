[Util](Util.Util.md) / AssetUtil

# AssetUtil <Badge type="tip" text="Namespace" /> 

## Table of contents

| Functions |
| :-----|
| **[asyncDownloadAsset](Util.AssetUtil.md#asyncdownloadasset)**(`string`): `Promise`<`boolean`\> <br> 资源下载|
| **[isAssetExist](Util.AssetUtil.md#isassetexist)**(`string`): `boolean` <br> 资源是否存在|
| **[isAssetLoaded](Util.AssetUtil.md#isassetloaded)**(`string`): `boolean` <br> 资源是否加载|
| **[loadAsset](Util.AssetUtil.md#loadasset)**(`string`): `boolean` <br> 资源加载|

## Functions

### asyncDownloadAsset  

▸ **asyncDownloadAsset**(`InAssetId`): `Promise`<`boolean`\> <Badge type="tip" text="other" />

**`Description`**

资源下载


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`Promise`<`boolean`\>

下载失败将返回false

___

### isAssetExist  

▸ **isAssetExist**(`InAssetId`): `boolean` <Badge type="tip" text="other" />

**`Description`**

资源是否存在


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`boolean`

不存在将返回false

___

### isAssetLoaded  

▸ **isAssetLoaded**(`InAssetId`): `boolean` <Badge type="tip" text="other" />

**`Description`**

资源是否加载


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`boolean`

未加载将返回false

___

### loadAsset  

▸ **loadAsset**(`InAssetId`): `boolean` <Badge type="tip" text="other" />

**`Description`**

资源加载


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`boolean`

未加载成功将返回false
