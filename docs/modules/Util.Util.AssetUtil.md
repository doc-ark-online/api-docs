[Util](Util.Util.md) / AssetUtil

# AssetUtil <Badge type="tip" text="Namespace" />

## Table of contents

| Functions                                                                                                          |
| :----------------------------------------------------------------------------------------------------------------- |
| **[asyncDownloadAsset](Util.Util.AssetUtil.md#asyncdownloadasset)**(`string`): `Promise`<`boolean`\> <br> 资源下载 |
| **[isAssetExist](Util.Util.AssetUtil.md#isassetexist)**(`string`): `boolean` <br> 资源是否存在                     |
| **[isAssetLoaded](Util.Util.AssetUtil.md#isassetloaded)**(`string`): `boolean` <br> 资源是否加载                   |
| **[loadAsset](Util.Util.AssetUtil.md#loadasset)**(`string`): `boolean` <br> 资源加载                               |

## Functions

### asyncDownloadAsset

▸ **asyncDownloadAsset**(`InAssetId`): `Promise`<`boolean`\>

**`Description`**

资源下载

**`Effect`**

调用端生效

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `InAssetId` | `string` | 资源 Guid   |

#### Returns

`Promise`<`boolean`\>

下载失败将返回 false

---

### isAssetExist

▸ **isAssetExist**(`InAssetId`): `boolean`

**`Description`**

资源是否存在

**`Effect`**

调用端生效

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `InAssetId` | `string` | 资源 Guid   |

#### Returns

`boolean`

不存在将返回 false

---

### isAssetLoaded

▸ **isAssetLoaded**(`InAssetId`): `boolean`

**`Description`**

资源是否加载

**`Effect`**

调用端生效

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `InAssetId` | `string` | 资源 Guid   |

#### Returns

`boolean`

未加载将返回 false

---

### loadAsset

▸ **loadAsset**(`InAssetId`): `boolean`

**`Description`**

资源加载

**`Effect`**

调用端生效

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `InAssetId` | `string` | 资源 Guid   |

#### Returns

`boolean`

未加载成功将返回 false
