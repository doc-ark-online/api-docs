[AVATAR](../groups/AVATAR.AVATAR.md) / HumanoidV2FrontHairPart

# HumanoidV2FrontHairPart <Badge type="tip" text="Class" /> <Score text="HumanoidV2FrontHairPart" />

人形对象V2前发部位接口

## Hierarchy

- [`HumanoidV2HairPart`](Gameplay.HumanoidV2HairPart.md)

  ↳ **`HumanoidV2FrontHairPart`**

## Table of contents

| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
| **[getAreaCount](Gameplay.HumanoidV2HairPart.md#getareacount)**(): `number` <br> 获取头发区域数量|
| **[getColor](Gameplay.HumanoidV2HairPart.md#getcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取头发颜色|
| **[getGradientColor](Gameplay.HumanoidV2HairPart.md#getgradientcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取头发渐变染色|
| **[getGradientIntensity](Gameplay.HumanoidV2HairPart.md#getgradientintensity)**(): `number` <br> 获取头发渐变区域|
| **[getHeaddressColor](Gameplay.HumanoidV2HairPart.md#getheaddresscolor)**(`index`: `number`): [`LinearColor`](Type.LinearColor.md) <br> 获取头饰颜色|
| **[getHeaddressDesignColor](Gameplay.HumanoidV2HairPart.md#getheaddressdesigncolor)**(`index`: `number`): [`LinearColor`](Type.LinearColor.md) <br> 获取头饰图案颜色|
| **[getHeaddressDesignRotation](Gameplay.HumanoidV2HairPart.md#getheaddressdesignrotation)**(`index`: `number`): `number` <br> 获取头饰图案旋转|
| **[getHeaddressDesignTexture](Gameplay.HumanoidV2HairPart.md#getheaddressdesigntexture)**(`index`: `number`): `string` <br> 获取头饰图案贴图|
| **[getHeaddressDesignZoom](Gameplay.HumanoidV2HairPart.md#getheaddressdesignzoom)**(`index`: `number`): `number` <br> 获取头饰图案缩放|
| **[getHeaddressPatternAngle](Gameplay.HumanoidV2HairPart.md#getheaddresspatternangle)**(`index`: `number`): `number` <br> 获取头饰花纹旋转|
| **[getHeaddressPatternColor](Gameplay.HumanoidV2HairPart.md#getheaddresspatterncolor)**(`index`: `number`): [`LinearColor`](Type.LinearColor.md) <br> 获取头饰花纹颜色|
| **[getHeaddressPatternHeight](Gameplay.HumanoidV2HairPart.md#getheaddresspatternheight)**(`index`: `number`): `number` <br> 获取头饰花纹纵向拉伸|
| **[getHeaddressPatternIntensity](Gameplay.HumanoidV2HairPart.md#getheaddresspatternintensity)**(`index`: `number`): `number` <br> 获取头饰花纹显示程度|
| **[getHeaddressPatternTexture](Gameplay.HumanoidV2HairPart.md#getheaddresspatterntexture)**(`index`: `number`): `string` <br> 获取头饰花纹贴图|
| **[getHeaddressPatternWidth](Gameplay.HumanoidV2HairPart.md#getheaddresspatternwidth)**(`index`: `number`): `number` <br> 获取头饰花纹横向拉伸|
| **[getHighlightColor](Gameplay.HumanoidV2HairPart.md#gethighlightcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取头发高光颜色|
| **[getHighlightMask](Gameplay.HumanoidV2HairPart.md#gethighlightmask)**(): `string` <br> 获取头发高光形状|
| **[getMesh](Gameplay.HumanoidV2HairPart.md#getmesh)**(): `string` <br> 获取前发部位模型|
| **[setColor](Gameplay.HumanoidV2HairPart.md#setcolor)**(`color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头发颜色|
| **[setGradientColor](Gameplay.HumanoidV2HairPart.md#setgradientcolor)**(`color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头发渐变染色|
| **[setGradientIntensity](Gameplay.HumanoidV2HairPart.md#setgradientintensity)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置头发渐变区域|
| **[setHeaddressColor](Gameplay.HumanoidV2HairPart.md#setheaddresscolor)**(`index`: `number`, `color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头饰颜色|
| **[setHeaddressDesignColor](Gameplay.HumanoidV2HairPart.md#setheaddressdesigncolor)**(`index`: `number`, `color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头饰图案颜色|
| **[setHeaddressDesignRotation](Gameplay.HumanoidV2HairPart.md#setheaddressdesignrotation)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰图案旋转|
| **[setHeaddressDesignTexture](Gameplay.HumanoidV2HairPart.md#setheaddressdesigntexture)**(`index`: `number`, `GUID`: `string`, `sync`: `boolean`): `void` <br> 设置头饰图案贴图|
| **[setHeaddressDesignZoom](Gameplay.HumanoidV2HairPart.md#setheaddressdesignzoom)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰图案缩放|
| **[setHeaddressPatternAngle](Gameplay.HumanoidV2HairPart.md#setheaddresspatternangle)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰花纹旋转|
| **[setHeaddressPatternColor](Gameplay.HumanoidV2HairPart.md#setheaddresspatterncolor)**(`index`: `number`, `color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头饰花纹颜色|
| **[setHeaddressPatternHeight](Gameplay.HumanoidV2HairPart.md#setheaddresspatternheight)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰花纹纵向拉伸|
| **[setHeaddressPatternIntensity](Gameplay.HumanoidV2HairPart.md#setheaddresspatternintensity)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰花纹显示程度|
| **[setHeaddressPatternTexture](Gameplay.HumanoidV2HairPart.md#setheaddresspatterntexture)**(`index`: `number`, `GUID`: `string`, `sync`: `boolean`): `void` <br> 设置头饰花纹贴图|
| **[setHeaddressPatternWidth](Gameplay.HumanoidV2HairPart.md#setheaddresspatternwidth)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰花纹横向拉伸|
| **[setHighlightColor](Gameplay.HumanoidV2HairPart.md#sethighlightcolor)**(`color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头发高光颜色|
| **[setHighlightMask](Gameplay.HumanoidV2HairPart.md#sethighlightmask)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置头发高光形状|
| **[setMesh](Gameplay.HumanoidV2HairPart.md#setmesh)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置前发部位模型|
:::

