[角色系统](../groups/角色系统.角色系统.md) / CharacterDescription

# CharacterDescription <Badge type="tip" text="Class" /> <Score text="CharacterDescription" />

人形外观配置

-------------------------------------------------------------------------

什么是 CharacterDescription 呢？

- 它是一个用于存储 advance 和 base 配置的 Character 描述。

- 人形外观分为高级人形和基础人形。高级人形可更改人物的服装（衬衫、裤子、裙子...)、头部（脸型、嘴巴、鼻子、头发...）等外观； 基础人形是一个整体的形象，可从左侧角色/NPC中基础人形形象中选择你喜欢的资源。

CharacterDescription 如何使用呢？

- 本质是一个嵌套的只读对象类型，用于存储一些角色设置的高级信息。这些信息按照层级结构进行组织，其中每个层级都是一个只读对象类型。

- 在 Character 类中有一个名为 description 的属性，他的返回值类型为 CharacterDescription ，使用角色类中 description 的属性调用。

- 编辑器为您提供了大量的美术模型资源，请在左侧栏自助翻找，标有GUID供你使用。

详情可参考下面列出的参数，开始对你的人性外观自定义修改吧~

## Table of contents

### Properties <Score text="Properties" /> 
| **[advance](mw.CharacterDescription.md#advance)**: `Object`  |
| :-----|
| 高级人形对象外观配置类|
| **[base](mw.CharacterDescription.md#base)**: `Object`  |
| 基础人形对象外观配置类 与 advance 互斥|

## Properties

### advance <Score text="advance" /> 

• `Optional` `Readonly` **advance**: `Object`

高级人形对象外观配置类

高级人形之所以称为高级，原因是有很多可自定义部分。

1. 基础(base)部分

- 可更改角色 characterTemplate ，有八种类型（二次元男性、女性；lowpoly男性、女性；写实男性、女性；美卡男性、女性）

- 更换体型 somatotype

<span style="font-size: 14px;">
使用示例: 点击 P 键切换角色
</span>

```ts
protected onStart(): void {
    InputUtil.onKeyDown(Keys.P,()=>{
        Player.localPlayer.character.description.advance.base.characterSetting.characterTemplate = CharacterTemplate.CartoonyMale;
    })
}
```

2. 头部(headFeatures)部分

脸部在游戏中有很多用途。它可以让你个性化你的角色，就像在现实生活中一样定制你的外貌。你可以调整脸型、眼睛、嘴巴和其他特征，使你的角色与众不同，塑造一个与你自己身份和想象相符的角色，展示你独一无二的样貌。

注：脸型、眉毛、眼睛等为一级；例如脸型二级还可再细化，分为：颧骨、脸颊、下颌、下巴等。三级调整其上下左右位置等参数。下面一样。

3. 身材(bodyFeatures)部分

调整角色身材可以影响到角色的能力和特点。在一些角色扮演游戏中，身材的不同可能会影响到角色的速度、力量、耐力等属性。比如，一个高大的角色可能更具有威慑力和力量，而一个敏捷的角色可能更擅长于迅速移动和躲避攻击。通过调整角色的身材，你可以根据自己的游戏策略和喜好来优化角色的能力和特点，使其更符合你的游戏风格。

4. 化妆(makeup)部分

化妆可以让你的角色更加美丽或者独特。你可以选择不同的化妆风格，如浓妆、淡妆、霓虹风、恶魔风等，根据自己的喜好和创意来设计角色的妆容。这样的个性化定制能够让你的角色在游戏世界中脱颖而出，成为其他玩家眼中的焦点。

5. 发型(hair)部分

一个毛刺的蓝色发型可以表达出叛逆和冒险的个性，而一个典雅的束发则展现出优雅和自信。

6. 装扮(clothing)部分

选择不同的服装风格和配饰，你可以塑造出独特的角色形象。无论是时尚潮流、古典优雅还是奇幻冒险，你可以根据自己的喜好和创意来打造角色的时尚造型。

7. 插槽(clothing)部分

<span style="font-size: 14px;">
使用示例: 以不同方式设置角色外观，清空外观，同步外观。外观切换完成时播放换装特效。判断外观是否加载完成播放对应动画。
</span>

```ts
@Component
export default class CharacterStyleExample extends Script {
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.isDescriptionReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            let defaultStyle = null;
            // 给【角色换装完成】委托添加函数
            myCharacter.onDescriptionComplete.add(() => {
                // 播放换装完成特效
                EffectService.playOnGameObject("161245", myCharacter, {slotType: HumanoidSlotType.Root});
                // 获取角色默认外观风格
                defaultStyle = myCharacter.getDescription();
            });
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.setDescription(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，修改角色外观
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV2) {
                    // 头部:头大小为1.5倍
                    myCharacter.description.advance.headFeatures.head.headOverallScale = 1.5;
                    // 体型:身高为1.2倍
                    myCharacter.description.advance.bodyFeatures.body.height = 1.2;
                    // 腮红为75674
                    myCharacter.description.advance.makeup.blush.blushStyle = "75674";
                    // 前发为57731，后发为63910
                    myCharacter.description.advance.hair.frontHair.style = "57731";
                    myCharacter.description.advance.hair.backHair.style = "63910";
                    // 上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.description.advance.clothing.upperCloth.style = "58694";
                    myCharacter.description.advance.clothing.lowerCloth.style = "58700";
                    myCharacter.description.advance.clothing.gloves.style = "60384";
                    myCharacter.description.advance.clothing.shoes.style = "58696";
                }
            });
            // 添加一个按键方法:按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.syncDescription();
            });
            // 添加一个按键方法:按下键盘“4”，清空角色外观
            InputUtil.onKeyDown(Keys.Four, () => {
                myCharacter.clearDescription();
            });
        }
    }
}
```

#### Type declaration

| `base?` `{ `characterSetting?`: { `characterTemplate?`: [`CharacterTemplate`](../enums/mw.CharacterTemplate.md) ; `faceStyle?`: [`FaceStyle`](../enums/mw.FaceStyle.md) ; `somatotype?`: [`SomatotypeV2`](../enums/mw.SomatotypeV2.md)  }`  } | @description: 基础 |
| :------ | :------ |
| `base.characterSetting?` `{ `characterTemplate?`: [`CharacterTemplate`](../enums/mw.CharacterTemplate.md) ; `faceStyle?`: [`FaceStyle`](../enums/mw.FaceStyle.md) ; `somatotype?`: [`SomatotypeV2`](../enums/mw.SomatotypeV2.md)  }` | @description: 角色设定 |
| `base.characterSetting.characterTemplate?` [`CharacterTemplate`](../enums/mw.CharacterTemplate.md) | @description: 切换角色,配置中优先执行 |
| `base.characterSetting.faceStyle?` [`FaceStyle`](../enums/mw.FaceStyle.md) | @description: 基础脸型 **`Deprecated`** info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:033 reason:功能迁移 replacement: 换头功能 |
| `base.characterSetting.somatotype?` [`SomatotypeV2`](../enums/mw.SomatotypeV2.md) | @description: 切换体型 |
| `bodyFeatures?` `{ `arms?`: { `forearmFrontalScale?`: `number` ; `forearmHorizontalScale?`: `number` ; `forearmVerticalScale?`: `number` ; `shoulderFrontalScale?`: `number` ; `shoulderHorizontalScale?`: `number` ; `upperArmFrontalScale?`: `number` ; `upperArmHorizontalScale?`: `number` ; `upperArmVerticalScale?`: `number`  }` ; `body?`: `{ `height?`: `number`  }` ; `breast?`: `{ `breastHorizontalShift?`: `number` ; `breastLength?`: `number` ; `breastOverallScale?`: `number` ; `breastVerticalShift?`: `number`  }` ; `chest?`: `{ `chestFrontalScale?`: `number` ; `chestHorizontalScale?`: `number` ; `chestVerticalScale?`: `number`  }` ; `feet?`: `{ `feetOverallScale?`: `number`  }` ; `hands?`: `{ `handOverallScale?`: `number`  }` ; `hips?`: `{ `hipFrontalScale?`: `number` ; `hipHorizontalScale?`: `number`  }` ; `legs?`: `{ `calfFrontalScale?`: `number` ; `calfHorizontalScale?`: `number` ; `calfVerticalScale?`: `number` ; `thighFrontalScale?`: `number` ; `thighHorizontalScale?`: `number` ; `thighVerticalScale?`: `number`  }` ; `neck?`: `{ `neckFrontalScale?`: `number` ; `neckHorizontalScale?`: `number` ; `neckVerticalScale?`: `number`  }` ; `ribs?`: `{ `ribFrontalScale?`: `number` ; `ribHorizontalScale?`: `number`  }` ; `waist?`: `{ `waistFrontalScale?`: `number` ; `waistHorizontalScale?`: `number` ; `waistVerticalScale?`: `number`  }`  } | @description: 身体相关 |
| `bodyFeatures.arms?` `{ `forearmFrontalScale?`: `number` ; `forearmHorizontalScale?`: `number` ; `forearmVerticalScale?`: `number` ; `shoulderFrontalScale?`: `number` ; `shoulderHorizontalScale?`: `number` ; `upperArmFrontalScale?`: `number` ; `upperArmHorizontalScale?`: `number` ; `upperArmVerticalScale?`: `number`  }` | @description: 手臂 |
| `bodyFeatures.arms.forearmFrontalScale?` `number` | @description: 小臂前后缩放 |
| `bodyFeatures.arms.forearmHorizontalScale?` `number` | @description: 小臂左右缩放 |
| `bodyFeatures.arms.forearmVerticalScale?` `number` | @description: 小臂上下缩放 |
| `bodyFeatures.arms.shoulderFrontalScale?` `number` | @description: 肩臂前后缩放 |
| `bodyFeatures.arms.shoulderHorizontalScale?` `number` | @description: 肩臂左右缩放 |
| `bodyFeatures.arms.upperArmFrontalScale?` `number` | @description: 大臂前后缩放 |
| `bodyFeatures.arms.upperArmHorizontalScale?` `number` | @description: 大臂左右缩放 |
| `bodyFeatures.arms.upperArmVerticalScale?` `number` | @description: 大臂上下缩放 |
| `bodyFeatures.body?` `{ `height?`: `number`  }` | @description: 身体 |
| `bodyFeatures.body.height?` `number` | @description: 身高 |
| `bodyFeatures.breast?` `{ `breastHorizontalShift?`: `number` ; `breastLength?`: `number` ; `breastOverallScale?`: `number` ; `breastVerticalShift?`: `number`  }` | @description: 胸部 |
| `bodyFeatures.breast.breastHorizontalShift?` `number` | @description: 胸部左右移动 |
| `bodyFeatures.breast.breastLength?` `number` | @description: 胸部长度 |
| `bodyFeatures.breast.breastOverallScale?` `number` | @description: 胸部整体缩放 |
| `bodyFeatures.breast.breastVerticalShift?` `number` | @description: 胸部上下移动 |
| `bodyFeatures.chest?` `{ `chestFrontalScale?`: `number` ; `chestHorizontalScale?`: `number` ; `chestVerticalScale?`: `number`  }` | @description: 胸腔 |
| `bodyFeatures.chest.chestFrontalScale?` `number` | @description: 胸腔前后缩放 |
| `bodyFeatures.chest.chestHorizontalScale?` `number` | @description: 胸腔左右缩放 |
| `bodyFeatures.chest.chestVerticalScale?` `number` | @description: 胸腔上下缩放 |
| `bodyFeatures.feet?` `{ `feetOverallScale?`: `number`  }` | @description: 脚 |
| `bodyFeatures.feet.feetOverallScale?` `number` | @description: 脚整体缩放 |
| `bodyFeatures.hands?` `{ `handOverallScale?`: `number`  }` | @description: 手 |
| `bodyFeatures.hands.handOverallScale?` `number` | @description: 手整体缩放 |
| `bodyFeatures.hips?` `{ `hipFrontalScale?`: `number` ; `hipHorizontalScale?`: `number`  }` | @description: 胯 |
| `bodyFeatures.hips.hipFrontalScale?` `number` | @description: 胯前后缩放 |
| `bodyFeatures.hips.hipHorizontalScale?` `number` | @description: 胯左右缩放 |
| `bodyFeatures.legs?` `{ `calfFrontalScale?`: `number` ; `calfHorizontalScale?`: `number` ; `calfVerticalScale?`: `number` ; `thighFrontalScale?`: `number` ; `thighHorizontalScale?`: `number` ; `thighVerticalScale?`: `number`  }` | @description: 腿 |
| `bodyFeatures.legs.calfFrontalScale?` `number` | @description: 小腿前后缩放 |
| `bodyFeatures.legs.calfHorizontalScale?` `number` | @description: 小腿左右缩放 |
| `bodyFeatures.legs.calfVerticalScale?` `number` | @description: 小腿上下缩放 |
| `bodyFeatures.legs.thighFrontalScale?` `number` | @description: 大腿前后缩放 |
| `bodyFeatures.legs.thighHorizontalScale?` `number` | @description: 大腿左右缩放 |
| `bodyFeatures.legs.thighVerticalScale?` `number` | @description: 大腿上下缩放 |
| `bodyFeatures.neck?` `{ `neckFrontalScale?`: `number` ; `neckHorizontalScale?`: `number` ; `neckVerticalScale?`: `number`  }` | @description: 脖子 |
| `bodyFeatures.neck.neckFrontalScale?` `number` | @description: 脖子前后缩放 |
| `bodyFeatures.neck.neckHorizontalScale?` `number` | @description: 脖子左右缩放 |
| `bodyFeatures.neck.neckVerticalScale?` `number` | @description: 脖子上下缩放 |
| `bodyFeatures.ribs?` `{ `ribFrontalScale?`: `number` ; `ribHorizontalScale?`: `number`  }` | @description: 肋部 |
| `bodyFeatures.ribs.ribFrontalScale?` `number` | @description: 肋部前后缩放 |
| `bodyFeatures.ribs.ribHorizontalScale?` `number` | @description: 肋部左右缩放 |
| `bodyFeatures.waist?` `{ `waistFrontalScale?`: `number` ; `waistHorizontalScale?`: `number` ; `waistVerticalScale?`: `number`  }` | @description: 腰 |
| `bodyFeatures.waist.waistFrontalScale?` `number` | @description: 腰部前后缩放 |
| `bodyFeatures.waist.waistHorizontalScale?` `number` | @description: 腰部左右缩放 |
| `bodyFeatures.waist.waistVerticalScale?` `number` | @description: 腰部上下缩放 |
| `clothing?` `{ `gloves?`: ```{ `baseColorTexture?`: `ArrayLike`<`string`\> ; `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }```` ; `design?`: ````{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }```` ; `pattern?`: ````{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }````  }\> ; `style?`: `string`  } ; `lowerCloth?`: ```{ `baseColorTexture?`: `ArrayLike`<`string`\> ; `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }``` ; `design?`: ````{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }```` ; `pattern?`: ````{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }````  }\> ; `style?`: `string`  } ; `shoes?`: ```{ `baseColorTexture?`: `ArrayLike`<`string`\> ; `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }``` ; `design?`: ````{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }```` ; `pattern?`: ````{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }````  }\> ; `style?`: `string`  } ; `upperCloth?`: ```{ `baseColorTexture?`: `ArrayLike`<`string`\> ; `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }``` ; `design?`: ````{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }```` ; `pattern?`: ````{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }````  }\> ; `style?`: `string`  }  } | @description: 装扮相关 |
| `clothing.gloves?` `{ `baseColorTexture?`: `ArrayLike`<`string`\> ; `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> ; `style?`: `string`  } | @description: 手套 |
| `clothing.gloves.baseColorTexture?` `ArrayLike`<`string`\> | @description: 主贴图 |
| `clothing.gloves.part?` `ArrayLike`<`{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> | @description: 调整区域 |
| `clothing.gloves.style?` `string` | @description: 样式 |
| `clothing.lowerCloth?` `{ `baseColorTexture?`: `ArrayLike`<`string`\> ; `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> ; `style?`: `string`  } | @description: 下装 |
| `clothing.lowerCloth.baseColorTexture?` `ArrayLike`<`string`\> | @description: 主贴图 |
| `clothing.lowerCloth.part?` `ArrayLike`<`{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> | @description: 调整区域 |
| `clothing.lowerCloth.style?` `string` | @description: 样式 |
| `clothing.shoes?` `{ `baseColorTexture?`: `ArrayLike`<`string`\> ; `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> ; `style?`: `string`  } | @description: 鞋 |
| `clothing.shoes.baseColorTexture?` `ArrayLike`<`string`\> | @description: 主贴图 |
| `clothing.shoes.part?` `ArrayLike`<`{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> | @description: 调整区域 |
| `clothing.shoes.style?` `string` | @description: 样式 |
| `clothing.upperCloth?` `{ `baseColorTexture?`: `ArrayLike`<`string`\> ; `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> ; `style?`: `string`  } | @description: 上装 |
| `clothing.upperCloth.baseColorTexture?` `ArrayLike`<`string`\> | @description: 主贴图 |
| `clothing.upperCloth.part?` `ArrayLike`<`{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> | @description: 调整区域 |
| `clothing.upperCloth.style?` `string` | @description: 样式 |
| `dynamicAttachments?` `ArrayLike`<`{ `style?`: `string`  }`\> | @description: 动态挂件 |
| `hair?` `{ `backHair?`: `{ `accessories?`: `ArrayLike`<{ `color?`: { `accessoryColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }`` ; `design?`: ``{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designScale?`: `number` ; `designStyle?`: `string`  }`` ; `pattern?`: ``{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }``  }\> ; `baseColorTexture?`: `ArrayLike`<`string`\> ; `color?`: ``{ `color?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `gradientArea?`: `number` ; `gradientColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }`` ; `highlight?`: ``{ `highlightStyle?`: `string`  }`` ; `style?`: `string`  } ; `frontHair?`: `{ `accessories?`: `ArrayLike`<{ `color?`: { `accessoryColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: ``{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designScale?`: `number` ; `designStyle?`: `string`  }`` ; `pattern?`: ``{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }``  }\> ; `baseColorTexture?`: `ArrayLike`<`string`\> ; `color?`: ``{ `color?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `gradientArea?`: `number` ; `gradientColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }`` ; `highlight?`: ``{ `highlightStyle?`: `string`  }`` ; `style?`: `string`  }  } | @description: 发型相关 |
| `hair.backHair?` `{ `accessories?`: `ArrayLike`<{ `color?`: { `accessoryColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designScale?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> ; `baseColorTexture?`: `ArrayLike`<`string`\> ; `color?`: `{ `color?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `gradientArea?`: `number` ; `gradientColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `highlight?`: `{ `highlightStyle?`: `string`  }` ; `style?`: `string`  } | @description: 后发 |
| `hair.backHair.accessories?` `ArrayLike`<`{ `color?`: { `accessoryColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designScale?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> | @description: 头饰 |
| `hair.backHair.baseColorTexture?` `ArrayLike`<`string`\> | @description: 主贴图 |
| `hair.backHair.color?` `{ `color?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `gradientArea?`: `number` ; `gradientColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` | @description: 颜色 |
| `hair.backHair.color.color?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 后发颜色 |
| `hair.backHair.color.gradientArea?` `number` | @description: 渐变区域 |
| `hair.backHair.color.gradientColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 渐变颜色 |
| `hair.backHair.highlight?` `{ `highlightStyle?`: `string`  }` | @description: 高光 |
| `hair.backHair.highlight.highlightStyle?` `string` | @description: 高光样式 |
| `hair.backHair.style?` `string` | @description: 后发样式 |
| `hair.frontHair?` `{ `accessories?`: `ArrayLike`<{ `color?`: { `accessoryColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designScale?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> ; `baseColorTexture?`: `ArrayLike`<`string`\> ; `color?`: `{ `color?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `gradientArea?`: `number` ; `gradientColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `highlight?`: `{ `highlightStyle?`: `string`  }` ; `style?`: `string`  } | @description: 前发 |
| `hair.frontHair.accessories?` `ArrayLike`<`{ `color?`: { `accessoryColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designScale?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> | @description: 头饰 |
| `hair.frontHair.baseColorTexture?` `ArrayLike`<`string`\> | @description: 主贴图 |
| `hair.frontHair.color?` `{ `color?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `gradientArea?`: `number` ; `gradientColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` | @description: 颜色 |
| `hair.frontHair.color.color?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 颜色 |
| `hair.frontHair.color.gradientArea?` `number` | @description: 渐变区域 |
| `hair.frontHair.color.gradientColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 渐变颜色 |
| `hair.frontHair.highlight?` `{ `highlightStyle?`: `string`  }` | @description: 高光 |
| `hair.frontHair.highlight.highlightStyle?` `string` | @description: 高光样式 |
| `hair.frontHair.style?` `string` | @description: 样式 |
| `headFeatures?` `{ `ears?`: { `earFrontalRotation?`: `number` ; `earHorizontalRotation?`: `number` ; `earLowerScale?`: `number` ; `earOverallScale?`: `number` ; `earUpperScale?`: `number`  }` ; `expressions?`: `{ `changeExpression?`: [`ExpressionType`](../enums/mw.ExpressionType.md)  }` ; `eyebrows?`: `{ `eyebrowBridgeFrontalShift?`: `number` ; `eyebrowFrontalShift?`: `number` ; `eyebrowHorizontalShift?`: `number` ; `eyebrowInnerVerticalShift?`: `number` ; `eyebrowOuterVerticalShift?`: `number` ; `eyebrowOverallRotation?`: `number` ; `eyebrowVerticalShift?`: `number`  }` ; `eyes?`: `{ `eyeCorners?`: { `innerEyeCornerHorizontalShift?`: `number` ; `outerEyeCornerVerticalShift?`: `number`  }` ; `overall?`: `{ `eyeFrontalShift?`: `number` ; `eyeHorizontalScale?`: `number` ; `eyeHorizontalShift?`: `number` ; `eyeOverallRotation?`: `number` ; `eyeVerticalScale?`: `number` ; `eyeVerticalShift?`: `number`  }` ; `pupils?`: `{ `pupilHorizontalScale?`: `number` ; `pupilHorizontalShift?`: `number` ; `pupilVerticalScale?`: `number` ; `pupilVerticalShift?`: `number`  }`  } ; `faceShape?`: `{ `cheek?`: { `cheekFrontalShift?`: `number` ; `cheekHorizontalScale?`: `number` ; `cheekVerticalShift?`: `number`  }` ; `cheekbone?`: `{ `cheekboneFrontalShift?`: `number` ; `cheekboneHorizontalScale?`: `number`  }` ; `chin?`: `{ `chinFrontalShift?`: `number` ; `chinTipFrontalShift?`: `number` ; `chinTipHorizontalScale?`: `number` ; `chinTipVerticalShift?`: `number`  }` ; `jawline?`: `{ `jawFrontalShift?`: `number` ; `jawHorizontalScale?`: `number` ; `jawlineRoundness?`: `number` ; `jawlineVerticalShift?`: `number`  }` ; `overall?`: `{ `faceHorizontalScale?`: `number` ; `lowerFaceFrontalShift?`: `number` ; `lowerFaceHorizontalScale?`: `number` ; `upperFaceFrontalShift?`: `number` ; `upperFaceOverallScale?`: `number` ; `upperFaceVerticalShift?`: `number`  }`  } ; `head?`: `{ `baseColorTexture?`: `ArrayLike`<`string`\> ; `headHorizontalScale?`: `number` ; `headOverallScale?`: `number` ; `style?`: `string`  }` ; `mouth?`: `{ `lips?`: { `lowerLipThickness?`: `number` ; `upperLipThickness?`: `number`  }` ; `mouthCorners?`: `{ `mouthCornerFrontalShift?`: `number` ; `mouthCornerVerticalShift?`: `number`  }` ; `overall?`: `{ `mouthFrontalShift?`: `number` ; `mouthHorizontalScale?`: `number` ; `mouthVerticalShift?`: `number`  }`  } ; `nose?`: `{ `noseBridge?`: { `noseBridgeFrontalShift?`: `number` ; `noseBridgeHorizontalScale?`: `number`  }` ; `noseTip?`: `{ `noseTipVerticalShift?`: `number`  }` ; `nostrils?`: `{ `nostrilForntalShift?`: `number` ; `nostrilHorizontalScale?`: `number` ; `nostrilVerticalShift?`: `number`  }` ; `overall?`: `{ `noseOverallFrontalShift?`: `number` ; `noseOverallVerticalShift?`: `number`  }`  }  } | @description: 头部相关 |
| `headFeatures.ears?` `{ `earFrontalRotation?`: `number` ; `earHorizontalRotation?`: `number` ; `earLowerScale?`: `number` ; `earOverallScale?`: `number` ; `earUpperScale?`: `number`  }` | @description: 耳朵 |
| `headFeatures.ears.earFrontalRotation?` `number` | @description: 耳朵前后旋转 |
| `headFeatures.ears.earHorizontalRotation?` `number` | @description: 耳朵左右旋转 |
| `headFeatures.ears.earLowerScale?` `number` | @description: 耳朵下部缩放 |
| `headFeatures.ears.earOverallScale?` `number` | @description: 耳朵整体缩放 |
| `headFeatures.ears.earUpperScale?` `number` | @description: 耳朵上部缩放 |
| `headFeatures.expressions?` `{ `changeExpression?`: [`ExpressionType`](../enums/mw.ExpressionType.md)  }` | @description: 表情 |
| `headFeatures.expressions.changeExpression?` [`ExpressionType`](../enums/mw.ExpressionType.md) | @description: 切换表情 |
| `headFeatures.eyebrows?` `{ `eyebrowBridgeFrontalShift?`: `number` ; `eyebrowFrontalShift?`: `number` ; `eyebrowHorizontalShift?`: `number` ; `eyebrowInnerVerticalShift?`: `number` ; `eyebrowOuterVerticalShift?`: `number` ; `eyebrowOverallRotation?`: `number` ; `eyebrowVerticalShift?`: `number`  }` | @description: 眉毛 |
| `headFeatures.eyebrows.eyebrowBridgeFrontalShift?` `number` | @description: 眉间前后移动 |
| `headFeatures.eyebrows.eyebrowFrontalShift?` `number` | @description: 眉毛前后移动 |
| `headFeatures.eyebrows.eyebrowHorizontalShift?` `number` | @description: 眉毛左右移动 |
| `headFeatures.eyebrows.eyebrowInnerVerticalShift?` `number` | @description: 眉头上下移动 |
| `headFeatures.eyebrows.eyebrowOuterVerticalShift?` `number` | @description: 眉尾上下移动 |
| `headFeatures.eyebrows.eyebrowOverallRotation?` `number` | @description: 眉毛整体旋转 |
| `headFeatures.eyebrows.eyebrowVerticalShift?` `number` | @description: 眉毛上下移动 |
| `headFeatures.eyes?` `{ `eyeCorners?`: { `innerEyeCornerHorizontalShift?`: `number` ; `outerEyeCornerVerticalShift?`: `number`  }` ; `overall?`: `{ `eyeFrontalShift?`: `number` ; `eyeHorizontalScale?`: `number` ; `eyeHorizontalShift?`: `number` ; `eyeOverallRotation?`: `number` ; `eyeVerticalScale?`: `number` ; `eyeVerticalShift?`: `number`  }` ; `pupils?`: `{ `pupilHorizontalScale?`: `number` ; `pupilHorizontalShift?`: `number` ; `pupilVerticalScale?`: `number` ; `pupilVerticalShift?`: `number`  }`  } | @description: 眼睛 |
| `headFeatures.eyes.eyeCorners?` `{ `innerEyeCornerHorizontalShift?`: `number` ; `outerEyeCornerVerticalShift?`: `number`  }` | @description: 眼角 |
| `headFeatures.eyes.eyeCorners.innerEyeCornerHorizontalShift?` `number` | @description: 眼角左右移动 |
| `headFeatures.eyes.eyeCorners.outerEyeCornerVerticalShift?` `number` | @description: 眼角上下移动 |
| `headFeatures.eyes.overall?` `{ `eyeFrontalShift?`: `number` ; `eyeHorizontalScale?`: `number` ; `eyeHorizontalShift?`: `number` ; `eyeOverallRotation?`: `number` ; `eyeVerticalScale?`: `number` ; `eyeVerticalShift?`: `number`  }` | @description: 整体 |
| `headFeatures.eyes.overall.eyeFrontalShift?` `number` | @description: 眼睛前后移动 |
| `headFeatures.eyes.overall.eyeHorizontalScale?` `number` | @description: 眼睛左右缩放 |
| `headFeatures.eyes.overall.eyeHorizontalShift?` `number` | @description: 眼睛左右移动 |
| `headFeatures.eyes.overall.eyeOverallRotation?` `number` | @description: 眼睛整体旋转 |
| `headFeatures.eyes.overall.eyeVerticalScale?` `number` | @description: 眼睛上下缩放 |
| `headFeatures.eyes.overall.eyeVerticalShift?` `number` | @description: 眼睛上下移动 |
| `headFeatures.eyes.pupils?` `{ `pupilHorizontalScale?`: `number` ; `pupilHorizontalShift?`: `number` ; `pupilVerticalScale?`: `number` ; `pupilVerticalShift?`: `number`  }` | @description: 瞳孔 |
| `headFeatures.eyes.pupils.pupilHorizontalScale?` `number` | @description: 瞳孔左右缩放 |
| `headFeatures.eyes.pupils.pupilHorizontalShift?` `number` | @description: 瞳孔左右移动 |
| `headFeatures.eyes.pupils.pupilVerticalScale?` `number` | @description: 瞳孔上下缩放 |
| `headFeatures.eyes.pupils.pupilVerticalShift?` `number` | @description: 瞳孔上下移动 |
| `headFeatures.faceShape?` `{ `cheek?`: { `cheekFrontalShift?`: `number` ; `cheekHorizontalScale?`: `number` ; `cheekVerticalShift?`: `number`  }` ; `cheekbone?`: `{ `cheekboneFrontalShift?`: `number` ; `cheekboneHorizontalScale?`: `number`  }` ; `chin?`: `{ `chinFrontalShift?`: `number` ; `chinTipFrontalShift?`: `number` ; `chinTipHorizontalScale?`: `number` ; `chinTipVerticalShift?`: `number`  }` ; `jawline?`: `{ `jawFrontalShift?`: `number` ; `jawHorizontalScale?`: `number` ; `jawlineRoundness?`: `number` ; `jawlineVerticalShift?`: `number`  }` ; `overall?`: `{ `faceHorizontalScale?`: `number` ; `lowerFaceFrontalShift?`: `number` ; `lowerFaceHorizontalScale?`: `number` ; `upperFaceFrontalShift?`: `number` ; `upperFaceOverallScale?`: `number` ; `upperFaceVerticalShift?`: `number`  }`  } | @description: 脸型 |
| `headFeatures.faceShape.cheek?` `{ `cheekFrontalShift?`: `number` ; `cheekHorizontalScale?`: `number` ; `cheekVerticalShift?`: `number`  }` | @description: 脸颊 |
| `headFeatures.faceShape.cheek.cheekFrontalShift?` `number` | @description: 脸颊前后移动 |
| `headFeatures.faceShape.cheek.cheekHorizontalScale?` `number` | @description: 脸颊左右缩放 |
| `headFeatures.faceShape.cheek.cheekVerticalShift?` `number` | @description: 脸颊上下移动 |
| `headFeatures.faceShape.cheekbone?` `{ `cheekboneFrontalShift?`: `number` ; `cheekboneHorizontalScale?`: `number`  }` | @description: 颧骨 |
| `headFeatures.faceShape.cheekbone.cheekboneFrontalShift?` `number` | @description: 颧骨前后移动 |
| `headFeatures.faceShape.cheekbone.cheekboneHorizontalScale?` `number` | @description: 颧骨左右缩放 |
| `headFeatures.faceShape.chin?` `{ `chinFrontalShift?`: `number` ; `chinTipFrontalShift?`: `number` ; `chinTipHorizontalScale?`: `number` ; `chinTipVerticalShift?`: `number`  }` | @description: 下巴 |
| `headFeatures.faceShape.chin.chinFrontalShift?` `number` | @description: 下巴前后移动 |
| `headFeatures.faceShape.chin.chinTipFrontalShift?` `number` | @description: 下巴尖前后移动 |
| `headFeatures.faceShape.chin.chinTipHorizontalScale?` `number` | @description: 下巴尖左右缩放 |
| `headFeatures.faceShape.chin.chinTipVerticalShift?` `number` | @description: 下巴尖上下移动 |
| `headFeatures.faceShape.jawline?` `{ `jawFrontalShift?`: `number` ; `jawHorizontalScale?`: `number` ; `jawlineRoundness?`: `number` ; `jawlineVerticalShift?`: `number`  }` | @description: 下颌 |
| `headFeatures.faceShape.jawline.jawFrontalShift?` `number` | @description: 下颌前后移动 |
| `headFeatures.faceShape.jawline.jawHorizontalScale?` `number` | @description: 下颌左右缩放 |
| `headFeatures.faceShape.jawline.jawlineRoundness?` `number` | @description: 下颌圆度 |
| `headFeatures.faceShape.jawline.jawlineVerticalShift?` `number` | @description: 下颌上下移动 |
| `headFeatures.faceShape.overall?` `{ `faceHorizontalScale?`: `number` ; `lowerFaceFrontalShift?`: `number` ; `lowerFaceHorizontalScale?`: `number` ; `upperFaceFrontalShift?`: `number` ; `upperFaceOverallScale?`: `number` ; `upperFaceVerticalShift?`: `number`  }` | @description: 整体 |
| `headFeatures.faceShape.overall.faceHorizontalScale?` `number` | @description: 面部左右缩放 |
| `headFeatures.faceShape.overall.lowerFaceFrontalShift?` `number` | @description: 下半脸前后移动 |
| `headFeatures.faceShape.overall.lowerFaceHorizontalScale?` `number` | @description: 下半脸左右缩放 |
| `headFeatures.faceShape.overall.upperFaceFrontalShift?` `number` | @description: 上半脸前后移动 |
| `headFeatures.faceShape.overall.upperFaceOverallScale?` `number` | @description: 上半脸整体缩放 |
| `headFeatures.faceShape.overall.upperFaceVerticalShift?` `number` | @description: 上半脸上下移动 |
| `headFeatures.head?` `{ `baseColorTexture?`: `ArrayLike`<`string`\> ; `headHorizontalScale?`: `number` ; `headOverallScale?`: `number` ; `style?`: `string`  }` | @description: 头部 |
| `headFeatures.head.baseColorTexture?` `ArrayLike`<`string`\> | @description: 主贴图 |
| `headFeatures.head.headHorizontalScale?` `number` | @description: 头部左右缩放 |
| `headFeatures.head.headOverallScale?` `number` | @description: 头部整体缩放 |
| `headFeatures.head.style?` `string` | @description: 样式 |
| `headFeatures.mouth?` `{ `lips?`: { `lowerLipThickness?`: `number` ; `upperLipThickness?`: `number`  }` ; `mouthCorners?`: `{ `mouthCornerFrontalShift?`: `number` ; `mouthCornerVerticalShift?`: `number`  }` ; `overall?`: `{ `mouthFrontalShift?`: `number` ; `mouthHorizontalScale?`: `number` ; `mouthVerticalShift?`: `number`  }`  } | @description: 嘴 |
| `headFeatures.mouth.lips?` `{ `lowerLipThickness?`: `number` ; `upperLipThickness?`: `number`  }` | @description: 嘴唇 |
| `headFeatures.mouth.lips.lowerLipThickness?` `number` | @description: 下嘴唇薄厚 |
| `headFeatures.mouth.lips.upperLipThickness?` `number` | @description: 上嘴唇薄厚 |
| `headFeatures.mouth.mouthCorners?` `{ `mouthCornerFrontalShift?`: `number` ; `mouthCornerVerticalShift?`: `number`  }` | @description: 嘴角 |
| `headFeatures.mouth.mouthCorners.mouthCornerFrontalShift?` `number` | @description: 嘴角前后移动 |
| `headFeatures.mouth.mouthCorners.mouthCornerVerticalShift?` `number` | @description: 嘴角上下移动 |
| `headFeatures.mouth.overall?` `{ `mouthFrontalShift?`: `number` ; `mouthHorizontalScale?`: `number` ; `mouthVerticalShift?`: `number`  }` | @description: 整体 |
| `headFeatures.mouth.overall.mouthFrontalShift?` `number` | @description: 嘴巴前后移动 |
| `headFeatures.mouth.overall.mouthHorizontalScale?` `number` | @description: 嘴巴左右缩放 |
| `headFeatures.mouth.overall.mouthVerticalShift?` `number` | @description: 嘴巴上下移动 |
| `headFeatures.nose?` `{ `noseBridge?`: { `noseBridgeFrontalShift?`: `number` ; `noseBridgeHorizontalScale?`: `number`  }` ; `noseTip?`: `{ `noseTipVerticalShift?`: `number`  }` ; `nostrils?`: `{ `nostrilForntalShift?`: `number` ; `nostrilHorizontalScale?`: `number` ; `nostrilVerticalShift?`: `number`  }` ; `overall?`: `{ `noseOverallFrontalShift?`: `number` ; `noseOverallVerticalShift?`: `number`  }`  } | @description: 鼻子 |
| `headFeatures.nose.noseBridge?` `{ `noseBridgeFrontalShift?`: `number` ; `noseBridgeHorizontalScale?`: `number`  }` | @description: 鼻梁 |
| `headFeatures.nose.noseBridge.noseBridgeFrontalShift?` `number` | @description: 鼻梁前后移动 |
| `headFeatures.nose.noseBridge.noseBridgeHorizontalScale?` `number` | @description: 鼻梁左右缩放 |
| `headFeatures.nose.noseTip?` `{ `noseTipVerticalShift?`: `number`  }` | @description: 鼻尖 |
| `headFeatures.nose.noseTip.noseTipVerticalShift?` `number` | @description: 鼻尖上下移动 |
| `headFeatures.nose.nostrils?` `{ `nostrilForntalShift?`: `number` ; `nostrilHorizontalScale?`: `number` ; `nostrilVerticalShift?`: `number`  }` | @description: 鼻翼 |
| `headFeatures.nose.nostrils.nostrilForntalShift?` `number` | @description: 鼻翼前后移动 |
| `headFeatures.nose.nostrils.nostrilHorizontalScale?` `number` | @description: 鼻翼左右缩放 |
| `headFeatures.nose.nostrils.nostrilVerticalShift?` `number` | @description: 鼻翼上下移动 |
| `headFeatures.nose.overall?` `{ `noseOverallFrontalShift?`: `number` ; `noseOverallVerticalShift?`: `number`  }` | @description: 整体 |
| `headFeatures.nose.overall.noseOverallFrontalShift?` `number` | @description: 鼻子整体前后移动 |
| `headFeatures.nose.overall.noseOverallVerticalShift?` `number` | @description: 鼻子整体上下移动 |
| `makeup?` `{ `blush?`: { `blushColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `blushStyle?`: `string`  }` ; `bodyDecal?`: `ArrayLike`<``{ `decalColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `decalHorizontalShift?`: `number` ; `decalOverallRotation?`: `number` ; `decalOverallScale?`: `number` ; `decalStyle?`: `string` ; `decalVerticalShift?`: `number`  }``\> ; `coloredContacts?`: `{ `decal?`: { `pupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilHorizontalPosition?`: `number` ; `pupilSizeScale?`: `number` ; `pupilStyle?`: `string` ; `pupilVerticalPosition?`: `number`  }` ; `highlight?`: `{ `lowerHighlightColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `lowerHighlightStyle?`: `string` ; `upperHighlightColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `upperHighlightStyle?`: `string`  }` ; `style?`: `{ `leftPupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilStyle?`: `string` ; `rightPupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }`  } ; `eyeShadow?`: `{ `eyeshadowStyle?`: `string` ; `eyeshaowColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `eyebrows?`: `{ `eyebrowColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `eyebrowStyle?`: `string`  }` ; `eyelashes?`: `{ `eyelashColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `eyelashStyle?`: `string`  }` ; `faceDecal?`: `ArrayLike`<``{ `decalColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `decalHorizontalShift?`: `number` ; `decalOverallRotation?`: `number` ; `decalOverallScale?`: `number` ; `decalStyle?`: `string` ; `decalVerticalShift?`: `number`  }``\> ; `headDecal?`: `{ `decalColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `decalStyle?`: `string`  }` ; `lipstick?`: `{ `lipstickColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `lipstickStyle?`: `string`  }` ; `skinTone?`: `{ `skinColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }`  } | @description: 化妆 |
| `makeup.blush?` `{ `blushColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `blushStyle?`: `string`  }` | @description: 腮红 |
| `makeup.blush.blushColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 腮红颜色 |
| `makeup.blush.blushStyle?` `string` | @description: 腮红样式 |
| `makeup.bodyDecal?` `ArrayLike`<`{ `decalColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `decalHorizontalShift?`: `number` ; `decalOverallRotation?`: `number` ; `decalOverallScale?`: `number` ; `decalStyle?`: `string` ; `decalVerticalShift?`: `number`  }`\> | @description: 身体贴花 |
| `makeup.coloredContacts?` `{ `decal?`: { `pupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilHorizontalPosition?`: `number` ; `pupilSizeScale?`: `number` ; `pupilStyle?`: `string` ; `pupilVerticalPosition?`: `number`  }` ; `highlight?`: `{ `lowerHighlightColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `lowerHighlightStyle?`: `string` ; `upperHighlightColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `upperHighlightStyle?`: `string`  }` ; `style?`: `{ `leftPupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilStyle?`: `string` ; `rightPupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }`  } | @description: 美瞳 |
| `makeup.coloredContacts.decal?` `{ `pupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilHorizontalPosition?`: `number` ; `pupilSizeScale?`: `number` ; `pupilStyle?`: `string` ; `pupilVerticalPosition?`: `number`  }` | @description: 贴花 |
| `makeup.coloredContacts.decal.pupilColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 贴花颜色 |
| `makeup.coloredContacts.decal.pupilHorizontalPosition?` `number` | @description: 贴花左右移动 |
| `makeup.coloredContacts.decal.pupilSizeScale?` `number` | @description: 贴花大小缩放 |
| `makeup.coloredContacts.decal.pupilStyle?` `string` | @description: 瞳孔样式 |
| `makeup.coloredContacts.decal.pupilVerticalPosition?` `number` | @description: 贴花上下移动 |
| `makeup.coloredContacts.highlight?` `{ `lowerHighlightColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `lowerHighlightStyle?`: `string` ; `upperHighlightColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `upperHighlightStyle?`: `string`  }` | @description: 高光 |
| `makeup.coloredContacts.highlight.lowerHighlightColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 下高光颜色 |
| `makeup.coloredContacts.highlight.lowerHighlightStyle?` `string` | @description: 下高光样式 |
| `makeup.coloredContacts.highlight.upperHighlightColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 上高光颜色 |
| `makeup.coloredContacts.highlight.upperHighlightStyle?` `string` | @description: 上高光样式 |
| `makeup.coloredContacts.style?` `{ `leftPupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilStyle?`: `string` ; `rightPupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` | @description: 样式 |
| `makeup.coloredContacts.style.leftPupilColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 左瞳孔颜色 |
| `makeup.coloredContacts.style.pupilColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Deprecated`** @description: 瞳孔颜色 |
| `makeup.coloredContacts.style.pupilStyle?` `string` | @description: 瞳孔样式 |
| `makeup.coloredContacts.style.rightPupilColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 右瞳孔颜色 |
| `makeup.eyeShadow?` `{ `eyeshadowStyle?`: `string` ; `eyeshaowColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` | @description: 眼影 |
| `makeup.eyeShadow.eyeshadowStyle?` `string` | @description: 眼影样式 |
| `makeup.eyeShadow.eyeshaowColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 眼影颜色 |
| `makeup.eyebrows?` `{ `eyebrowColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `eyebrowStyle?`: `string`  }` | @description: 眉毛 |
| `makeup.eyebrows.eyebrowColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 眉毛颜色 |
| `makeup.eyebrows.eyebrowStyle?` `string` | @description: 眉毛样式 |
| `makeup.eyelashes?` `{ `eyelashColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `eyelashStyle?`: `string`  }` | @description: 睫毛 |
| `makeup.eyelashes.eyelashColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 睫毛颜色 |
| `makeup.eyelashes.eyelashStyle?` `string` | @description: 睫毛样式 |
| `makeup.faceDecal?` `ArrayLike`<`{ `decalColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `decalHorizontalShift?`: `number` ; `decalOverallRotation?`: `number` ; `decalOverallScale?`: `number` ; `decalStyle?`: `string` ; `decalVerticalShift?`: `number`  }`\> | @description: 脸部贴花 |
| `makeup.headDecal?` `{ `decalColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `decalStyle?`: `string`  }` | @description: 头部贴花 |
| `makeup.headDecal.decalColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 贴花颜色 |
| `makeup.headDecal.decalStyle?` `string` | @description: 贴花样式 |
| `makeup.lipstick?` `{ `lipstickColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `lipstickStyle?`: `string`  }` | @description: 口红 |
| `makeup.lipstick.lipstickColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 口红颜色 |
| `makeup.lipstick.lipstickStyle?` `string` | @description: 口红样式 |
| `makeup.skinTone?` `{ `skinColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` | @description: 肤色 |
| `makeup.skinTone.skinColor?` `string`  [`LinearColor`](mw.LinearColor.md) | @description: 肌肤颜色 |
| `slotAndDecoration?` `{ `slot`: `ArrayLike`<{ `decoration?`: [`CharacterDecoration`](mw.CharacterDecoration.md) ; `slotOffset?`: `Readonly`<[`Transform`](mw.Transform.md)\>  }`\>  } | 插槽和物品 |
| `slotAndDecoration.slot` `ArrayLike`<`{ `decoration?`: [`CharacterDecoration`](mw.CharacterDecoration.md) ; `slotOffset?`: `Readonly`<[`Transform`](mw.Transform.md)\>  }`\> | **`Description`** 插槽数据 |

___

### base <Score text="base" /> 

• `Optional` `Readonly` **base**: `Object`

基础人形对象外观配置类 与 advance 互斥

<span style="font-size: 14px;">
使用示例:以不同方式设置角色外观，清空外观，同步外观。外观切换完成时播放换装特效。判断外观是否加载完成播放对应动画。
</span>

```ts
@Component
export default class CharacterStyleExample extends Script {
    protected onStart(): void {
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 如果玩家外观准备完成挥手，反之摊手
            if(myCharacter.isDescriptionReady) {
                let animation = myCharacter.loadAnimation("35391");
                animation.play();
            } else {
                let animation = myCharacter.loadAnimation("14521");
                animation.play();
            }
            let defaultStyle = null;
            // 给【角色换装完成】委托添加函数
            myCharacter.onDescriptionComplete.add(() => {
                // 播放换装完成特效
                EffectService.playOnGameObject("161245", myCharacter, {slotType: HumanoidSlotType.Root});
                // 获取角色默认外观风格
                defaultStyle = myCharacter.getDescription();
            });
            // 添加一个按键方法:按下键盘“1”，重置为默认角色外观
            InputUtil.onKeyDown(Keys.One, () => {
                myCharacter.setDescription(defaultStyle);
            });
            // 添加一个按键方法:按下键盘“2”，修改角色外观
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.characterType == CharacterType.HumanoidV1) {
                    // 加载一个 V1/四足外观
                    character.description.base.wholeBody = "147807"
                }
            });
            // 添加一个按键方法:按下键盘“3”，同步角色外观
            InputUtil.onKeyDown(Keys.Three, () => {
                myCharacter.syncDescription();
            });
            // 添加一个按键方法:按下键盘“4”，清空角色外观
            InputUtil.onKeyDown(Keys.Four, () => {
                myCharacter.clearDescription();
            });
        }
    }
}
```

#### Type declaration

| `wholeBody?` `string` | @description: 全身模型 |
| :------ | :------ |
