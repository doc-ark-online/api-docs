[角色系统](../groups/角色系统.角色系统.md) / CharacterDescription

# CharacterDescription <Badge type="tip" text="Class" /> <Score text="CharacterDescription" />

人形外观配置

什么是 CharacterDescription 呢？

- CharacterDescription是一个用于存储 advance 和 base 装备的 Character 描述。

- 人形外观分为高级人形和基础人形。高级人形可更改人物的服装（衬衫、裤子、裙子...)、头部（脸型、嘴巴、鼻子、头发...）等外观； 基础人形可从左侧角色/NPC中基础人形形象中选择你喜欢的整体形象。

CharacterDescription 如何使用呢？

- CharacterDescription 本质是一个嵌套的只读对象类型，用于存储一些角色设置的高级信息。这些信息按照层级结构进行组织，其中每个层级都是一个只读对象类型。

- 在 Character 类中有一个名为 description 的属性，他的返回值类型为 CharacterDescription ，使用角色类中 description 的属性调用。

- MW编辑器为您提供了大量的美术模型资源，请在左侧 美术对象-角色栏 中翻找，并标有GUID供你使用。

详情可参考下面列出的参数，开始对你的人性外观自定义修改吧~

## Table of contents

### Properties <Score text="Properties" /> 
| **[advance](mw.CharacterDescription.md#advance)**: `Object`  |
| :-----|
| 高级人形对象外观配置类 与 base 互斥|
| **[base](mw.CharacterDescription.md#base)**: `Object`  |
| 基础人形对象外观配置类 与 advance 互斥|

## Properties

### advance <Score text="advance" /> 

• `Optional` `Readonly` **advance**: `Object`

高级人形对象外观配置类 与 base 互斥

<span style="font-size: 14px;">
使用示例:以不同方式设置角色外观，清空外观，同步外观。外观切换完成时播放换装特效。判断外观是否加载完成播放对应动画。
</span>

```ts
@Component
export default class CharacterStyleExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
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
                EffectService.playOnGameObject("161245", myCharacter, HumanoidSlotType.Root);
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
                    // 修改角色style头部:头大小为1.5倍
                    myCharacter.description.advance.headFeatures.head.headOverallScale = 1.5;
                    // 修改角色style体型:身高为1.2倍
                    myCharacter.description.advance.bodyFeatures.body.height = 1.2;
                    // 修改角色style化妆:腮红为75674
                    myCharacter.description.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发:前发为57731，后发为63910
                    myCharacter.description.advance.hair.frontHair.description = "57731";
                    myCharacter.description.advance.hair.backHair.description = "63910";
                    // 修改角色style:上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.description.advance.clothing.upperCloth.description = "58694";
                    myCharacter.description.advance.clothing.lowerCloth.description = "58700";
                    myCharacter.description.advance.clothing.gloves.description = "60384";
                    myCharacter.description.advance.clothing.shoes.description = "58696";
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

| `base?` `{ `characterSetting?`: { `characterTemplate?`: [`CharacterTemplate`](../enums/mw.CharacterTemplate.md) ; `somatotype?`: [`SomatotypeV2`](../enums/mw.SomatotypeV2.md)  }`  } | **`Description`** 基础 |
| :------ | :------ |
| `base.characterSetting?` `{ `characterTemplate?`: [`CharacterTemplate`](../enums/mw.CharacterTemplate.md) ; `somatotype?`: [`SomatotypeV2`](../enums/mw.SomatotypeV2.md)  }` | **`Description`** 角色设定 |
| `base.characterSetting.characterTemplate?` [`CharacterTemplate`](../enums/mw.CharacterTemplate.md) | **`Description`** 切换角色,配置中优先执行 |
| `base.characterSetting.somatotype?` [`SomatotypeV2`](../enums/mw.SomatotypeV2.md) | **`Description`** 切换体型 |
| `bodyFeatures?` `{ `arms?`: { `forearmFrontalScale?`: `number` ; `forearmHorizontalScale?`: `number` ; `forearmVerticalScale?`: `number` ; `shoulderFrontalScale?`: `number` ; `shoulderHorizontalScale?`: `number` ; `upperArmFrontalScale?`: `number` ; `upperArmHorizontalScale?`: `number` ; `upperArmVerticalScale?`: `number`  }` ; `body?`: `{ `height?`: `number`  }` ; `breast?`: `{ `breastHorizontalShift?`: `number` ; `breastLength?`: `number` ; `breastOverallScale?`: `number` ; `breastVerticalShift?`: `number`  }` ; `chest?`: `{ `chestFrontalScale?`: `number` ; `chestHorizontalScale?`: `number` ; `chestVerticalScale?`: `number`  }` ; `feet?`: `{ `feetOverallScale?`: `number`  }` ; `hands?`: `{ `handOverallScale?`: `number`  }` ; `hips?`: `{ `hipFrontalScale?`: `number` ; `hipHorizontalScale?`: `number`  }` ; `legs?`: `{ `calfFrontalScale?`: `number` ; `calfHorizontalScale?`: `number` ; `calfVerticalScale?`: `number` ; `thighFrontalScale?`: `number` ; `thighHorizontalScale?`: `number` ; `thighVerticalScale?`: `number`  }` ; `neck?`: `{ `neckFrontalScale?`: `number` ; `neckHorizontalScale?`: `number` ; `neckVerticalScale?`: `number`  }` ; `ribs?`: `{ `ribFrontalScale?`: `number` ; `ribHorizontalScale?`: `number`  }` ; `waist?`: `{ `waistFrontalScale?`: `number` ; `waistHorizontalScale?`: `number` ; `waistVerticalScale?`: `number`  }`  } | **`Description`** 身材相关 |
| `bodyFeatures.arms?` `{ `forearmFrontalScale?`: `number` ; `forearmHorizontalScale?`: `number` ; `forearmVerticalScale?`: `number` ; `shoulderFrontalScale?`: `number` ; `shoulderHorizontalScale?`: `number` ; `upperArmFrontalScale?`: `number` ; `upperArmHorizontalScale?`: `number` ; `upperArmVerticalScale?`: `number`  }` | **`Description`** 手臂 |
| `bodyFeatures.arms.forearmFrontalScale?` `number` | **`Description`** 小臂前后缩放 |
| `bodyFeatures.arms.forearmHorizontalScale?` `number` | **`Description`** 小臂左右缩放 |
| `bodyFeatures.arms.forearmVerticalScale?` `number` | **`Description`** 小臂上下缩放 |
| `bodyFeatures.arms.shoulderFrontalScale?` `number` | **`Description`** 肩臂前后缩放 |
| `bodyFeatures.arms.shoulderHorizontalScale?` `number` | **`Description`** 肩臂左右缩放 |
| `bodyFeatures.arms.upperArmFrontalScale?` `number` | **`Description`** 大臂前后缩放 |
| `bodyFeatures.arms.upperArmHorizontalScale?` `number` | **`Description`** 大臂左右缩放 |
| `bodyFeatures.arms.upperArmVerticalScale?` `number` | **`Description`** 大臂上下缩放 |
| `bodyFeatures.body?` `{ `height?`: `number`  }` | **`Description`** 身体 |
| `bodyFeatures.body.height?` `number` | **`Description`** 身高 |
| `bodyFeatures.breast?` `{ `breastHorizontalShift?`: `number` ; `breastLength?`: `number` ; `breastOverallScale?`: `number` ; `breastVerticalShift?`: `number`  }` | **`Description`** 胸部 |
| `bodyFeatures.breast.breastHorizontalShift?` `number` | **`Description`** 胸部左右移动 |
| `bodyFeatures.breast.breastLength?` `number` | **`Description`** 胸部长度 |
| `bodyFeatures.breast.breastOverallScale?` `number` | **`Description`** 胸部整体缩放 |
| `bodyFeatures.breast.breastVerticalShift?` `number` | **`Description`** 胸部上下移动 |
| `bodyFeatures.chest?` `{ `chestFrontalScale?`: `number` ; `chestHorizontalScale?`: `number` ; `chestVerticalScale?`: `number`  }` | **`Description`** 胸腔 |
| `bodyFeatures.chest.chestFrontalScale?` `number` | **`Description`** 胸腔前后缩放 |
| `bodyFeatures.chest.chestHorizontalScale?` `number` | **`Description`** 胸腔左右缩放 |
| `bodyFeatures.chest.chestVerticalScale?` `number` | **`Description`** 胸腔上下缩放 |
| `bodyFeatures.feet?` `{ `feetOverallScale?`: `number`  }` | **`Description`** 脚 |
| `bodyFeatures.feet.feetOverallScale?` `number` | **`Description`** 脚整体缩放 |
| `bodyFeatures.hands?` `{ `handOverallScale?`: `number`  }` | **`Description`** 手 |
| `bodyFeatures.hands.handOverallScale?` `number` | **`Description`** 手整体缩放 |
| `bodyFeatures.hips?` `{ `hipFrontalScale?`: `number` ; `hipHorizontalScale?`: `number`  }` | **`Description`** 胯 |
| `bodyFeatures.hips.hipFrontalScale?` `number` | **`Description`** 胯前后缩放 |
| `bodyFeatures.hips.hipHorizontalScale?` `number` | **`Description`** 胯左右缩放 |
| `bodyFeatures.legs?` `{ `calfFrontalScale?`: `number` ; `calfHorizontalScale?`: `number` ; `calfVerticalScale?`: `number` ; `thighFrontalScale?`: `number` ; `thighHorizontalScale?`: `number` ; `thighVerticalScale?`: `number`  }` | **`Description`** 腿 |
| `bodyFeatures.legs.calfFrontalScale?` `number` | **`Description`** 小腿前后缩放 |
| `bodyFeatures.legs.calfHorizontalScale?` `number` | **`Description`** 小腿左右缩放 |
| `bodyFeatures.legs.calfVerticalScale?` `number` | **`Description`** 小腿上下缩放 |
| `bodyFeatures.legs.thighFrontalScale?` `number` | **`Description`** 大腿前后缩放 |
| `bodyFeatures.legs.thighHorizontalScale?` `number` | **`Description`** 大腿左右缩放 |
| `bodyFeatures.legs.thighVerticalScale?` `number` | **`Description`** 大腿上下缩放 |
| `bodyFeatures.neck?` `{ `neckFrontalScale?`: `number` ; `neckHorizontalScale?`: `number` ; `neckVerticalScale?`: `number`  }` | **`Description`** 脖子 |
| `bodyFeatures.neck.neckFrontalScale?` `number` | **`Description`** 脖子前后缩放 |
| `bodyFeatures.neck.neckHorizontalScale?` `number` | **`Description`** 脖子左右缩放 |
| `bodyFeatures.neck.neckVerticalScale?` `number` | **`Description`** 脖子上下缩放 |
| `bodyFeatures.ribs?` `{ `ribFrontalScale?`: `number` ; `ribHorizontalScale?`: `number`  }` | **`Description`** 肋部 |
| `bodyFeatures.ribs.ribFrontalScale?` `number` | **`Description`** 肋骨前后缩放 |
| `bodyFeatures.ribs.ribHorizontalScale?` `number` | **`Description`** 肋骨左右缩放 |
| `bodyFeatures.waist?` `{ `waistFrontalScale?`: `number` ; `waistHorizontalScale?`: `number` ; `waistVerticalScale?`: `number`  }` | **`Description`** 腰 |
| `bodyFeatures.waist.waistFrontalScale?` `number` | **`Description`** 腰部前后缩放 |
| `bodyFeatures.waist.waistHorizontalScale?` `number` | **`Description`** 腰部左右缩放 |
| `bodyFeatures.waist.waistVerticalScale?` `number` | **`Description`** 腰部上下缩放 |
| `clothing?` `{ `gloves?`: ```{ `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }```` ; `design?`: ````{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }```` ; `pattern?`: ````{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }````  }\> ; `style?`: `string`  } ; `lowerCloth?`: ```{ `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }``` ; `design?`: ````{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }```` ; `pattern?`: ````{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }````  }\> ; `style?`: `string`  } ; `shoes?`: ```{ `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }``` ; `design?`: ````{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }```` ; `pattern?`: ````{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }````  }\> ; `style?`: `string`  } ; `upperCloth?`: ```{ `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }``` ; `design?`: ````{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }```` ; `pattern?`: ````{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }````  }\> ; `style?`: `string`  }  } | **`Description`** 装扮 |
| `clothing.gloves?` `{ `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> ; `style?`: `string`  } | **`Description`** 手套 |
| `clothing.gloves.part?` `ArrayLike`<`{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> | **`Description`** 调整区域 |
| `clothing.gloves.style?` `string` | **`Description`** 手套样式 |
| `clothing.lowerCloth?` `{ `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> ; `style?`: `string`  } | **`Description`** 下装 |
| `clothing.lowerCloth.part?` `ArrayLike`<`{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> | **`Description`** 调整区域 |
| `clothing.lowerCloth.style?` `string` | **`Description`** 下装样式 |
| `clothing.shoes?` `{ `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> ; `style?`: `string`  } | **`Description`** 鞋 |
| `clothing.shoes.part?` `ArrayLike`<`{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> | **`Description`** 调整区域 |
| `clothing.shoes.style?` `string` | **`Description`** 鞋子样式 |
| `clothing.upperCloth?` `{ `part?`: `ArrayLike`<{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> ; `style?`: `string`  } | **`Description`** 上装 |
| `clothing.upperCloth.part?` `ArrayLike`<`{ `color?`: { `areaColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> | **`Description`** 调整区域 |
| `clothing.upperCloth.style?` `string` | **`Description`** 上装样式 |
| `hair?` `{ `backHair?`: `{ `accessories?`: `ArrayLike`<{ `color?`: { `accessoryColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }`` ; `design?`: ``{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designScale?`: `number` ; `designStyle?`: `string`  }`` ; `pattern?`: ``{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }``  }\> ; `color?`: ``{ `color?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `gradientArea?`: `number` ; `gradientColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }`` ; `highlight?`: ``{ `highlightStyle?`: `string`  }`` ; `style?`: `string`  } ; `frontHair?`: `{ `accessories?`: `ArrayLike`<{ `color?`: { `accessoryColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: ``{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designScale?`: `number` ; `designStyle?`: `string`  }`` ; `pattern?`: ``{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }``  }\> ; `color?`: ``{ `color?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `gradientArea?`: `number` ; `gradientColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }`` ; `highlight?`: ``{ `highlightStyle?`: `string`  }`` ; `style?`: `string`  }  } | **`Description`** 发型 |
| `hair.backHair?` `{ `accessories?`: `ArrayLike`<{ `color?`: { `accessoryColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designScale?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> ; `color?`: `{ `color?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `gradientArea?`: `number` ; `gradientColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `highlight?`: `{ `highlightStyle?`: `string`  }` ; `style?`: `string`  } | **`Description`** 后发 |
| `hair.backHair.accessories?` `ArrayLike`<`{ `color?`: { `accessoryColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designScale?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> | **`Description`** 头饰 |
| `hair.backHair.color?` `{ `color?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `gradientArea?`: `number` ; `gradientColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` | **`Description`** 颜色 |
| `hair.backHair.color.color?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 颜色 |
| `hair.backHair.color.gradientArea?` `number` | **`Description`** 渐变区域 |
| `hair.backHair.color.gradientColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 渐变颜色 |
| `hair.backHair.highlight?` `{ `highlightStyle?`: `string`  }` | **`Description`** 高光 |
| `hair.backHair.highlight.highlightStyle?` `string` | **`Description`** 高光样式 |
| `hair.backHair.style?` `string` | **`Description`** 样式 |
| `hair.frontHair?` `{ `accessories?`: `ArrayLike`<{ `color?`: { `accessoryColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designScale?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> ; `color?`: `{ `color?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `gradientArea?`: `number` ; `gradientColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `highlight?`: `{ `highlightStyle?`: `string`  }` ; `style?`: `string`  } | **`Description`** 前发 |
| `hair.frontHair.accessories?` `ArrayLike`<`{ `color?`: { `accessoryColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `design?`: `{ `designColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `designRotation?`: `number` ; `designScale?`: `number` ; `designStyle?`: `string`  }` ; `pattern?`: `{ `patternColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `patternHorizontalScale?`: `number` ; `patternRotation?`: `number` ; `patternStyle?`: `string` ; `patternVerticalScale?`: `number` ; `patternVisibility?`: `number`  }`  }\> | **`Description`** 头饰 |
| `hair.frontHair.color?` `{ `color?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `gradientArea?`: `number` ; `gradientColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` | **`Description`** 颜色 |
| `hair.frontHair.color.color?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 颜色 |
| `hair.frontHair.color.gradientArea?` `number` | **`Description`** 渐变区域 |
| `hair.frontHair.color.gradientColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 渐变颜色 |
| `hair.frontHair.highlight?` `{ `highlightStyle?`: `string`  }` | **`Description`** 高光 |
| `hair.frontHair.highlight.highlightStyle?` `string` | **`Description`** 高光样式 |
| `hair.frontHair.style?` `string` | **`Description`** 样式 |
| `headFeatures?` `{ `ears?`: { `earFrontalRotation?`: `number` ; `earHorizontalRotation?`: `number` ; `earLowerScale?`: `number` ; `earOverallScale?`: `number` ; `earUpperScale?`: `number`  }` ; `expressions?`: `{ `changeExpression?`: [`ExpressionType`](../enums/mw.ExpressionType.md)  }` ; `eyebrows?`: `{ `eyebrowBridgeFrontalShift?`: `number` ; `eyebrowFrontalShift?`: `number` ; `eyebrowHorizontalShift?`: `number` ; `eyebrowInnerVerticalShift?`: `number` ; `eyebrowOuterVerticalShift?`: `number` ; `eyebrowOverallRotation?`: `number` ; `eyebrowVerticalShift?`: `number`  }` ; `eyes?`: `{ `eyeCorners?`: { `innerEyeCornerHorizontalShift?`: `number` ; `outerEyeCornerVerticalShift?`: `number`  }` ; `overall?`: `{ `eyeFrontalShift?`: `number` ; `eyeHorizontalScale?`: `number` ; `eyeHorizontalShift?`: `number` ; `eyeOverallRotation?`: `number` ; `eyeVerticalScale?`: `number` ; `eyeVerticalShift?`: `number`  }` ; `pupils?`: `{ `pupilHorizontalScale?`: `number` ; `pupilHorizontalShift?`: `number` ; `pupilVerticalScale?`: `number` ; `pupilVerticalShift?`: `number`  }`  } ; `faceShape?`: `{ `cheek?`: { `cheekFrontalShift?`: `number` ; `cheekHorizontalScale?`: `number` ; `cheekVerticalShift?`: `number`  }` ; `cheekbone?`: `{ `cheekboneFrontalShift?`: `number` ; `cheekboneHorizontalScale?`: `number`  }` ; `chin?`: `{ `chinFrontalShift?`: `number` ; `chinTipFrontalShift?`: `number` ; `chinTipHorizontalScale?`: `number` ; `chinTipVerticalShift?`: `number`  }` ; `jawline?`: `{ `jawFrontalShift?`: `number` ; `jawHorizontalScale?`: `number` ; `jawlineRoundness?`: `number` ; `jawlineVerticalShift?`: `number`  }` ; `overall?`: `{ `faceHorizontalScale?`: `number` ; `lowerFaceFrontalShift?`: `number` ; `lowerFaceHorizontalScale?`: `number` ; `upperFaceFrontalShift?`: `number` ; `upperFaceOverallScale?`: `number` ; `upperFaceVerticalShift?`: `number`  }`  } ; `head?`: `{ `headHorizontalScale?`: `number` ; `headOverallScale?`: `number` ; `style?`: `string`  }` ; `mouth?`: `{ `lips?`: { `lowerLipThickness?`: `number` ; `upperLipThickness?`: `number`  }` ; `mouthCorners?`: `{ `mouthCornerFrontalShift?`: `number` ; `mouthCornerVerticalShift?`: `number`  }` ; `overall?`: `{ `mouthFrontalShift?`: `number` ; `mouthHorizontalScale?`: `number` ; `mouthVerticalShift?`: `number`  }`  } ; `nose?`: `{ `noseBridge?`: { `noseBridgeFrontalShift?`: `number` ; `noseBridgeHorizontalScale?`: `number`  }` ; `noseTip?`: `{ `noseTipVerticalShift?`: `number`  }` ; `nostrils?`: `{ `nostrilForntalShift?`: `number` ; `nostrilHorizontalScale?`: `number` ; `nostrilVerticalShift?`: `number`  }` ; `overall?`: `{ `noseOverallFrontalShift?`: `number` ; `noseOverallVerticalShift?`: `number`  }`  }  } | **`Description`** 头部相关 |
| `headFeatures.ears?` `{ `earFrontalRotation?`: `number` ; `earHorizontalRotation?`: `number` ; `earLowerScale?`: `number` ; `earOverallScale?`: `number` ; `earUpperScale?`: `number`  }` | **`Description`** 耳朵 |
| `headFeatures.ears.earFrontalRotation?` `number` | **`Description`** 耳朵前后旋转 |
| `headFeatures.ears.earHorizontalRotation?` `number` | **`Description`** 耳朵左右旋转 |
| `headFeatures.ears.earLowerScale?` `number` | **`Description`** 耳朵下部缩放 |
| `headFeatures.ears.earOverallScale?` `number` | **`Description`** 耳朵整体缩放 |
| `headFeatures.ears.earUpperScale?` `number` | **`Description`** 耳朵上部缩放 |
| `headFeatures.expressions?` `{ `changeExpression?`: [`ExpressionType`](../enums/mw.ExpressionType.md)  }` | **`Description`** 表情 |
| `headFeatures.expressions.changeExpression?` [`ExpressionType`](../enums/mw.ExpressionType.md) | **`Description`** 切换表情 |
| `headFeatures.eyebrows?` `{ `eyebrowBridgeFrontalShift?`: `number` ; `eyebrowFrontalShift?`: `number` ; `eyebrowHorizontalShift?`: `number` ; `eyebrowInnerVerticalShift?`: `number` ; `eyebrowOuterVerticalShift?`: `number` ; `eyebrowOverallRotation?`: `number` ; `eyebrowVerticalShift?`: `number`  }` | **`Description`** 眉毛 |
| `headFeatures.eyebrows.eyebrowBridgeFrontalShift?` `number` | **`Description`** 眉间前后移动 |
| `headFeatures.eyebrows.eyebrowFrontalShift?` `number` | **`Description`** 眉毛前后移动 |
| `headFeatures.eyebrows.eyebrowHorizontalShift?` `number` | **`Description`** 眉毛左右移动 |
| `headFeatures.eyebrows.eyebrowInnerVerticalShift?` `number` | **`Description`** 眉头上下移动 |
| `headFeatures.eyebrows.eyebrowOuterVerticalShift?` `number` | **`Description`** 眉尾上下移动 |
| `headFeatures.eyebrows.eyebrowOverallRotation?` `number` | **`Description`** 眉毛整体旋转 |
| `headFeatures.eyebrows.eyebrowVerticalShift?` `number` | **`Description`** 眉毛上下移动 |
| `headFeatures.eyes?` `{ `eyeCorners?`: { `innerEyeCornerHorizontalShift?`: `number` ; `outerEyeCornerVerticalShift?`: `number`  }` ; `overall?`: `{ `eyeFrontalShift?`: `number` ; `eyeHorizontalScale?`: `number` ; `eyeHorizontalShift?`: `number` ; `eyeOverallRotation?`: `number` ; `eyeVerticalScale?`: `number` ; `eyeVerticalShift?`: `number`  }` ; `pupils?`: `{ `pupilHorizontalScale?`: `number` ; `pupilHorizontalShift?`: `number` ; `pupilVerticalScale?`: `number` ; `pupilVerticalShift?`: `number`  }`  } | **`Description`** 眼睛 |
| `headFeatures.eyes.eyeCorners?` `{ `innerEyeCornerHorizontalShift?`: `number` ; `outerEyeCornerVerticalShift?`: `number`  }` | **`Description`** 眼角 |
| `headFeatures.eyes.eyeCorners.innerEyeCornerHorizontalShift?` `number` | **`Description`** 内眼角左右移动 |
| `headFeatures.eyes.eyeCorners.outerEyeCornerVerticalShift?` `number` | **`Description`** 外眼角上下移动 |
| `headFeatures.eyes.overall?` `{ `eyeFrontalShift?`: `number` ; `eyeHorizontalScale?`: `number` ; `eyeHorizontalShift?`: `number` ; `eyeOverallRotation?`: `number` ; `eyeVerticalScale?`: `number` ; `eyeVerticalShift?`: `number`  }` | **`Description`** 整体 |
| `headFeatures.eyes.overall.eyeFrontalShift?` `number` | **`Description`** 眼睛前后移动 |
| `headFeatures.eyes.overall.eyeHorizontalScale?` `number` | **`Description`** 眼睛左右缩放 |
| `headFeatures.eyes.overall.eyeHorizontalShift?` `number` | **`Description`** 眼睛左右移动 |
| `headFeatures.eyes.overall.eyeOverallRotation?` `number` | **`Description`** 眼睛整体旋转 |
| `headFeatures.eyes.overall.eyeVerticalScale?` `number` | **`Description`** 眼睛上下缩放 |
| `headFeatures.eyes.overall.eyeVerticalShift?` `number` | **`Description`** 眼睛上下移动 |
| `headFeatures.eyes.pupils?` `{ `pupilHorizontalScale?`: `number` ; `pupilHorizontalShift?`: `number` ; `pupilVerticalScale?`: `number` ; `pupilVerticalShift?`: `number`  }` | **`Description`** 瞳孔 |
| `headFeatures.eyes.pupils.pupilHorizontalScale?` `number` | **`Description`** 瞳孔左右缩放 |
| `headFeatures.eyes.pupils.pupilHorizontalShift?` `number` | **`Description`** 瞳孔左右移动 |
| `headFeatures.eyes.pupils.pupilVerticalScale?` `number` | **`Description`** 瞳孔上下缩放 |
| `headFeatures.eyes.pupils.pupilVerticalShift?` `number` | **`Description`** 瞳孔上下移动 |
| `headFeatures.faceShape?` `{ `cheek?`: { `cheekFrontalShift?`: `number` ; `cheekHorizontalScale?`: `number` ; `cheekVerticalShift?`: `number`  }` ; `cheekbone?`: `{ `cheekboneFrontalShift?`: `number` ; `cheekboneHorizontalScale?`: `number`  }` ; `chin?`: `{ `chinFrontalShift?`: `number` ; `chinTipFrontalShift?`: `number` ; `chinTipHorizontalScale?`: `number` ; `chinTipVerticalShift?`: `number`  }` ; `jawline?`: `{ `jawFrontalShift?`: `number` ; `jawHorizontalScale?`: `number` ; `jawlineRoundness?`: `number` ; `jawlineVerticalShift?`: `number`  }` ; `overall?`: `{ `faceHorizontalScale?`: `number` ; `lowerFaceFrontalShift?`: `number` ; `lowerFaceHorizontalScale?`: `number` ; `upperFaceFrontalShift?`: `number` ; `upperFaceOverallScale?`: `number` ; `upperFaceVerticalShift?`: `number`  }`  } | **`Description`** 脸型 |
| `headFeatures.faceShape.cheek?` `{ `cheekFrontalShift?`: `number` ; `cheekHorizontalScale?`: `number` ; `cheekVerticalShift?`: `number`  }` | **`Description`** 脸颊 |
| `headFeatures.faceShape.cheek.cheekFrontalShift?` `number` | **`Description`** 脸颊前后移动 |
| `headFeatures.faceShape.cheek.cheekHorizontalScale?` `number` | **`Description`** 脸颊左右缩放 |
| `headFeatures.faceShape.cheek.cheekVerticalShift?` `number` | **`Description`** 脸颊上下移动 |
| `headFeatures.faceShape.cheekbone?` `{ `cheekboneFrontalShift?`: `number` ; `cheekboneHorizontalScale?`: `number`  }` | **`Description`** 颧骨 |
| `headFeatures.faceShape.cheekbone.cheekboneFrontalShift?` `number` | **`Description`** 颧骨前后移动 |
| `headFeatures.faceShape.cheekbone.cheekboneHorizontalScale?` `number` | **`Description`** 颧骨左右缩放 |
| `headFeatures.faceShape.chin?` `{ `chinFrontalShift?`: `number` ; `chinTipFrontalShift?`: `number` ; `chinTipHorizontalScale?`: `number` ; `chinTipVerticalShift?`: `number`  }` | **`Description`** 下巴 |
| `headFeatures.faceShape.chin.chinFrontalShift?` `number` | **`Description`** 下巴前后移动 |
| `headFeatures.faceShape.chin.chinTipFrontalShift?` `number` | **`Description`** 下巴尖前后移动 |
| `headFeatures.faceShape.chin.chinTipHorizontalScale?` `number` | **`Description`** 下巴尖左右缩放 |
| `headFeatures.faceShape.chin.chinTipVerticalShift?` `number` | **`Description`** 下巴尖上下移动 |
| `headFeatures.faceShape.jawline?` `{ `jawFrontalShift?`: `number` ; `jawHorizontalScale?`: `number` ; `jawlineRoundness?`: `number` ; `jawlineVerticalShift?`: `number`  }` | **`Description`** 下颌 |
| `headFeatures.faceShape.jawline.jawFrontalShift?` `number` | **`Description`** 下颌前后移动 |
| `headFeatures.faceShape.jawline.jawHorizontalScale?` `number` | **`Description`** 下颌左右缩放 |
| `headFeatures.faceShape.jawline.jawlineRoundness?` `number` | **`Description`** 下颌圆度 |
| `headFeatures.faceShape.jawline.jawlineVerticalShift?` `number` | **`Description`** 下颌上下移动 |
| `headFeatures.faceShape.overall?` `{ `faceHorizontalScale?`: `number` ; `lowerFaceFrontalShift?`: `number` ; `lowerFaceHorizontalScale?`: `number` ; `upperFaceFrontalShift?`: `number` ; `upperFaceOverallScale?`: `number` ; `upperFaceVerticalShift?`: `number`  }` | **`Description`** 整体 |
| `headFeatures.faceShape.overall.faceHorizontalScale?` `number` | **`Description`** 面部左右缩放 |
| `headFeatures.faceShape.overall.lowerFaceFrontalShift?` `number` | **`Description`** 下半脸前后移动 |
| `headFeatures.faceShape.overall.lowerFaceHorizontalScale?` `number` | **`Description`** 下半脸左右缩放 |
| `headFeatures.faceShape.overall.upperFaceFrontalShift?` `number` | **`Description`** 上半脸前后移动 |
| `headFeatures.faceShape.overall.upperFaceOverallScale?` `number` | **`Description`** 上半脸整体缩放 |
| `headFeatures.faceShape.overall.upperFaceVerticalShift?` `number` | **`Description`** 上半脸上下移动 |
| `headFeatures.head?` `{ `headHorizontalScale?`: `number` ; `headOverallScale?`: `number` ; `style?`: `string`  }` | **`Description`** 头部 |
| `headFeatures.head.headHorizontalScale?` `number` | **`Description`** 头部左右缩放 |
| `headFeatures.head.headOverallScale?` `number` | **`Description`** 头部整体缩放 |
| `headFeatures.head.style?` `string` | **`Description`** 头部样式 |
| `headFeatures.mouth?` `{ `lips?`: { `lowerLipThickness?`: `number` ; `upperLipThickness?`: `number`  }` ; `mouthCorners?`: `{ `mouthCornerFrontalShift?`: `number` ; `mouthCornerVerticalShift?`: `number`  }` ; `overall?`: `{ `mouthFrontalShift?`: `number` ; `mouthHorizontalScale?`: `number` ; `mouthVerticalShift?`: `number`  }`  } | **`Description`** 嘴 |
| `headFeatures.mouth.lips?` `{ `lowerLipThickness?`: `number` ; `upperLipThickness?`: `number`  }` | **`Description`** 嘴唇 |
| `headFeatures.mouth.lips.lowerLipThickness?` `number` | **`Description`** 下嘴唇薄厚 |
| `headFeatures.mouth.lips.upperLipThickness?` `number` | **`Description`** 上嘴唇薄厚 |
| `headFeatures.mouth.mouthCorners?` `{ `mouthCornerFrontalShift?`: `number` ; `mouthCornerVerticalShift?`: `number`  }` | **`Description`** 嘴角 |
| `headFeatures.mouth.mouthCorners.mouthCornerFrontalShift?` `number` | **`Description`** 嘴角前后移动 |
| `headFeatures.mouth.mouthCorners.mouthCornerVerticalShift?` `number` | **`Description`** 嘴角上下移动 |
| `headFeatures.mouth.overall?` `{ `mouthFrontalShift?`: `number` ; `mouthHorizontalScale?`: `number` ; `mouthVerticalShift?`: `number`  }` | **`Description`** 整体 |
| `headFeatures.mouth.overall.mouthFrontalShift?` `number` | **`Description`** 嘴巴前后移动 |
| `headFeatures.mouth.overall.mouthHorizontalScale?` `number` | **`Description`** 嘴巴左右缩放 |
| `headFeatures.mouth.overall.mouthVerticalShift?` `number` | **`Description`** 嘴巴上下移动 |
| `headFeatures.nose?` `{ `noseBridge?`: { `noseBridgeFrontalShift?`: `number` ; `noseBridgeHorizontalScale?`: `number`  }` ; `noseTip?`: `{ `noseTipVerticalShift?`: `number`  }` ; `nostrils?`: `{ `nostrilForntalShift?`: `number` ; `nostrilHorizontalScale?`: `number` ; `nostrilVerticalShift?`: `number`  }` ; `overall?`: `{ `noseOverallFrontalShift?`: `number` ; `noseOverallVerticalShift?`: `number`  }`  } | **`Description`** 鼻子 |
| `headFeatures.nose.noseBridge?` `{ `noseBridgeFrontalShift?`: `number` ; `noseBridgeHorizontalScale?`: `number`  }` | **`Description`** 鼻梁 |
| `headFeatures.nose.noseBridge.noseBridgeFrontalShift?` `number` | **`Description`** 鼻梁前后移动 |
| `headFeatures.nose.noseBridge.noseBridgeHorizontalScale?` `number` | **`Description`** 鼻梁左右缩放 |
| `headFeatures.nose.noseTip?` `{ `noseTipVerticalShift?`: `number`  }` | **`Description`** 鼻尖 |
| `headFeatures.nose.noseTip.noseTipVerticalShift?` `number` | **`Description`** 鼻尖上下移动 |
| `headFeatures.nose.nostrils?` `{ `nostrilForntalShift?`: `number` ; `nostrilHorizontalScale?`: `number` ; `nostrilVerticalShift?`: `number`  }` | **`Description`** 鼻翼 |
| `headFeatures.nose.nostrils.nostrilForntalShift?` `number` | **`Description`** 鼻翼前后移动 |
| `headFeatures.nose.nostrils.nostrilHorizontalScale?` `number` | **`Description`** 鼻翼左右缩放 |
| `headFeatures.nose.nostrils.nostrilVerticalShift?` `number` | **`Description`** 鼻翼上下移动 |
| `headFeatures.nose.overall?` `{ `noseOverallFrontalShift?`: `number` ; `noseOverallVerticalShift?`: `number`  }` | **`Description`** 整体 |
| `headFeatures.nose.overall.noseOverallFrontalShift?` `number` | **`Description`** 鼻子整体前后移动 |
| `headFeatures.nose.overall.noseOverallVerticalShift?` `number` | **`Description`** 鼻子整体上下移动 |
| `makeup?` `{ `blush?`: { `blushColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `blushStyle?`: `string`  }` ; `bodyDecal?`: `ArrayLike`<``{ `decalColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `decalHorizontalShift?`: `number` ; `decalOverallRotation?`: `number` ; `decalOverallScale?`: `number` ; `decalStyle?`: `string` ; `decalVerticalShift?`: `number`  }``\> ; `coloredContacts?`: `{ `decal?`: { `pupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilHorizontalPosition?`: `number` ; `pupilSizeScale?`: `number` ; `pupilStyle?`: `string` ; `pupilVerticalPosition?`: `number`  }` ; `highlight?`: `{ `lowerHighlightColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `lowerHighlightStyle?`: `string` ; `upperHighlightColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `upperHighlightStyle?`: `string`  }` ; `style?`: `{ `leftPupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilStyle?`: `string` ; `rightPupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }`  } ; `eyeShadow?`: `{ `eyeshadowStyle?`: `string` ; `eyeshaowColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` ; `eyebrows?`: `{ `eyebrowColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `eyebrowStyle?`: `string`  }` ; `eyelashes?`: `{ `eyelashColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `eyelashStyle?`: `string`  }` ; `faceDecal?`: `ArrayLike`<``{ `decalColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `decalHorizontalShift?`: `number` ; `decalOverallRotation?`: `number` ; `decalOverallScale?`: `number` ; `decalStyle?`: `string` ; `decalVerticalShift?`: `number`  }``\> ; `headDecal?`: `{ `decalColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `decalStyle?`: `string`  }` ; `lipstick?`: `{ `lipstickColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `lipstickStyle?`: `string`  }` ; `skinTone?`: `{ `skinColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }`  } | **`Description`** 化妆 |
| `makeup.blush?` `{ `blushColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `blushStyle?`: `string`  }` | **`Description`** 腮红 |
| `makeup.blush.blushColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 腮红颜色 |
| `makeup.blush.blushStyle?` `string` | **`Description`** 腮红样式 |
| `makeup.bodyDecal?` `ArrayLike`<`{ `decalColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `decalHorizontalShift?`: `number` ; `decalOverallRotation?`: `number` ; `decalOverallScale?`: `number` ; `decalStyle?`: `string` ; `decalVerticalShift?`: `number`  }`\> | **`Description`** 身体贴花 |
| `makeup.coloredContacts?` `{ `decal?`: { `pupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilHorizontalPosition?`: `number` ; `pupilSizeScale?`: `number` ; `pupilStyle?`: `string` ; `pupilVerticalPosition?`: `number`  }` ; `highlight?`: `{ `lowerHighlightColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `lowerHighlightStyle?`: `string` ; `upperHighlightColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `upperHighlightStyle?`: `string`  }` ; `style?`: `{ `leftPupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilStyle?`: `string` ; `rightPupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }`  } | **`Description`** 美瞳 |
| `makeup.coloredContacts.decal?` `{ `pupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilHorizontalPosition?`: `number` ; `pupilSizeScale?`: `number` ; `pupilStyle?`: `string` ; `pupilVerticalPosition?`: `number`  }` | **`Description`** 贴花 |
| `makeup.coloredContacts.decal.pupilColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 瞳孔颜色 |
| `makeup.coloredContacts.decal.pupilHorizontalPosition?` `number` | **`Description`** 瞳孔左右位置 |
| `makeup.coloredContacts.decal.pupilSizeScale?` `number` | **`Description`** 瞳孔大小缩放 |
| `makeup.coloredContacts.decal.pupilStyle?` `string` | **`Description`** 瞳孔样式 |
| `makeup.coloredContacts.decal.pupilVerticalPosition?` `number` | **`Description`** 瞳孔上下位置 |
| `makeup.coloredContacts.highlight?` `{ `lowerHighlightColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `lowerHighlightStyle?`: `string` ; `upperHighlightColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `upperHighlightStyle?`: `string`  }` | **`Description`** 高光 |
| `makeup.coloredContacts.highlight.lowerHighlightColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 下高光颜色 |
| `makeup.coloredContacts.highlight.lowerHighlightStyle?` `string` | **`Description`** 下高光样式 |
| `makeup.coloredContacts.highlight.upperHighlightColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 上高光颜色 |
| `makeup.coloredContacts.highlight.upperHighlightStyle?` `string` | **`Description`** 上高光样式 |
| `makeup.coloredContacts.style?` `{ `leftPupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `pupilStyle?`: `string` ; `rightPupilColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` | **`Description`** 样式 |
| `makeup.coloredContacts.style.leftPupilColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 左瞳孔颜色，二次元风格生效 |
| `makeup.coloredContacts.style.pupilColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 瞳孔颜色, 除二次元以外风格生效 |
| `makeup.coloredContacts.style.pupilStyle?` `string` | **`Description`** 瞳孔样式 |
| `makeup.coloredContacts.style.rightPupilColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 右瞳孔颜色，二次元风格生效 |
| `makeup.eyeShadow?` `{ `eyeshadowStyle?`: `string` ; `eyeshaowColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` | **`Description`** 眼影 |
| `makeup.eyeShadow.eyeshadowStyle?` `string` | **`Description`** 眼影样式 |
| `makeup.eyeShadow.eyeshaowColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 眼影颜色 |
| `makeup.eyebrows?` `{ `eyebrowColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `eyebrowStyle?`: `string`  }` | **`Description`** 眉毛 |
| `makeup.eyebrows.eyebrowColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 眉毛颜色 |
| `makeup.eyebrows.eyebrowStyle?` `string` | **`Description`** 眉毛样式 |
| `makeup.eyelashes?` `{ `eyelashColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `eyelashStyle?`: `string`  }` | **`Description`** 睫毛 |
| `makeup.eyelashes.eyelashColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 睫毛颜色 |
| `makeup.eyelashes.eyelashStyle?` `string` | **`Description`** 睫毛样式 |
| `makeup.faceDecal?` `ArrayLike`<`{ `decalColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `decalHorizontalShift?`: `number` ; `decalOverallRotation?`: `number` ; `decalOverallScale?`: `number` ; `decalStyle?`: `string` ; `decalVerticalShift?`: `number`  }`\> | **`Description`** 脸部贴花 |
| `makeup.headDecal?` `{ `decalColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `decalStyle?`: `string`  }` | **`Description`** 头部贴花 |
| `makeup.headDecal.decalColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 贴花颜色 |
| `makeup.headDecal.decalStyle?` `string` | **`Description`** 贴花样式 |
| `makeup.lipstick?` `{ `lipstickColor?`: `string`  [`LinearColor`](mw.LinearColor.md) ; `lipstickStyle?`: `string`  }` | **`Description`** 口红 |
| `makeup.lipstick.lipstickColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 口红颜色 |
| `makeup.lipstick.lipstickStyle?` `string` | **`Description`** 口红样式 |
| `makeup.skinTone?` `{ `skinColor?`: `string`  [`LinearColor`](mw.LinearColor.md)  }` | **`Description`** 肤色 |
| `makeup.skinTone.skinColor?` `string`  [`LinearColor`](mw.LinearColor.md) | **`Description`** 肌肤颜色 |
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
    // 当脚本被实例后，会在第一帧更新前调用此函数
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
                EffectService.playOnGameObject("161245", myCharacter, HumanoidSlotType.Root);
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
                    // 修改角色style头部:头大小为1.5倍
                    myCharacter.description.advance.headFeatures.head.headOverallScale = 1.5;
                    // 修改角色style体型:身高为1.2倍
                    myCharacter.description.advance.bodyFeatures.body.height = 1.2;
                    // 修改角色style化妆:腮红为75674
                    myCharacter.description.advance.makeup.blush.blushStyle = "75674";
                    // 修改角色style头发:前发为57731，后发为63910
                    myCharacter.description.advance.hair.frontHair.description = "57731";
                    myCharacter.description.advance.hair.backHair.description = "63910";
                    // 修改角色style:上衣为58694，下衣为58700，手套为60384，鞋子为58696
                    myCharacter.description.advance.clothing.upperCloth.description = "58694";
                    myCharacter.description.advance.clothing.lowerCloth.description = "58700";
                    myCharacter.description.advance.clothing.gloves.description = "60384";
                    myCharacter.description.advance.clothing.shoes.description = "58696";
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

| `wholeBody?` `string` | **`Description`** 全身模型 |
| :------ | :------ |
