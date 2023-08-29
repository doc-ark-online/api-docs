[Util](Util.Util.md) / AssetUtil

# AssetUtil <Badge type="tip" text="Namespace" /> <Score text="AssetUtil" />

## Table of contents

| Functions |
| :-----|
| **[assetLoaded](Util.AssetUtil.md#assetloaded)**(`InAssetId`: `string`): `boolean` <br> 资源是否加载|
| **[asyncDownloadAsset](Util.AssetUtil.md#asyncdownloadasset)**(`InAssetId`: `string`): `Promise`<`boolean`\> <br> 资源下载并加载|

## Functions

### assetLoaded <Score text="assetLoaded" /> 

• **assetLoaded**(`InAssetId`): `boolean` 

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

资源下载并加载


使用示例:调用方法
```ts
AssetUtil.asyncDownloadAsset("7669").then((result: boolean) => {
    // result为true是资源加载成功;
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`Promise`<`boolean`\>

下载失败将返回false
