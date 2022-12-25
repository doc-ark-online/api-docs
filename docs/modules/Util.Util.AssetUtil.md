[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Util](Util.md) / [Util](Util.Util.md) / AssetUtil

# Namespace: AssetUtil

[Util](Util.md).[Util](Util.Util.md).AssetUtil

## Table of contents

### Functions

- [asyncDownloadAsset](Util.Util.AssetUtil.md#asyncdownloadasset)
- [isAssetExist](Util.Util.AssetUtil.md#isassetexist)
- [isAssetLoaded](Util.Util.AssetUtil.md#isassetloaded)
- [loadAsset](Util.Util.AssetUtil.md#loadasset)

## Functions

### asyncDownloadAsset

▸ **asyncDownloadAsset**(`InAssetId`): `Promise`<`boolean`\>

**`Description`**

资源下载

**`Effect`**

调用端生效

#### Parameters

| Name        | Type     | Description     |
| :---------- | :------- | :-------------- |
| `InAssetId` | `string` | usage:资源 Guid |

#### Returns

`Promise`<`boolean`\>

下载失败将返回 false

#### Defined in

Util/index.d.ts:31

---

### isAssetExist

▸ **isAssetExist**(`InAssetId`): `boolean`

**`Description`**

资源是否存在

**`Effect`**

调用端生效

#### Parameters

| Name        | Type     | Description     |
| :---------- | :------- | :-------------- |
| `InAssetId` | `string` | usage:资源 Guid |

#### Returns

`boolean`

不存在将返回 false

#### Defined in

Util/index.d.ts:10

---

### isAssetLoaded

▸ **isAssetLoaded**(`InAssetId`): `boolean`

**`Description`**

资源是否加载

**`Effect`**

调用端生效

#### Parameters

| Name        | Type     | Description     |
| :---------- | :------- | :-------------- |
| `InAssetId` | `string` | usage:资源 Guid |

#### Returns

`boolean`

未加载将返回 false

#### Defined in

Util/index.d.ts:17

---

### loadAsset

▸ **loadAsset**(`InAssetId`): `boolean`

**`Description`**

资源加载

**`Effect`**

调用端生效

#### Parameters

| Name        | Type     | Description     |
| :---------- | :------- | :-------------- |
| `InAssetId` | `string` | usage:资源 Guid |

#### Returns

`boolean`

未加载成功将返回 false

#### Defined in

Util/index.d.ts:24
