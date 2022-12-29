[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2Shape

# IHumanoidV2Shape <Badge type="tip" text="Interface" />

**`Description`**

人形对象 V2 形体修改

## Implemented by

- [`HumanoidV2Shape`](../classes/Gameplay.Gameplay.HumanoidV2Shape.md)

## Table of contents

| Methods                                                                                                                                                   |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[getBreastHorizontalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#getbreasthorizontalposition)**(): `number` <br> 调整胸部左右位置                    |
| **[getBreastLength](Gameplay.Gameplay.IHumanoidV2Shape.md#getbreastlength)**(): `number` <br> 调整胸部长度                                                |
| **[getBreastScale](Gameplay.Gameplay.IHumanoidV2Shape.md#getbreastscale)**(): `number` <br> 调整胸部整体大小；                                            |
| **[getBreastStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#getbreaststretch)**(): `number` <br> 获取胸部拉伸                                              |
| **[getBreastVerticalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#getbreastverticalposition)**(): `number` <br> 调整胸部上下位置                        |
| **[getBrowGap](Gameplay.Gameplay.IHumanoidV2Shape.md#getbrowgap)**(): `number` <br> 获取眉间距                                                            |
| **[getBrowHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#getbrowheight)**(): `number` <br> 获取眉毛上下移动                                                |
| **[getBrowInboardShape](Gameplay.Gameplay.IHumanoidV2Shape.md#getbrowinboardshape)**(): `number` <br> 获取眉毛内侧角度                                    |
| **[getBrowOutsideShape](Gameplay.Gameplay.IHumanoidV2Shape.md#getbrowoutsideshape)**(): `number` <br> 获取眉毛外侧形状                                    |
| **[getBrowRotation](Gameplay.Gameplay.IHumanoidV2Shape.md#getbrowrotation)**(): `number` <br> 获取眉毛角度                                                |
| **[getCanthusHorizontalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#getcanthushorizontalposition)**(): `number` <br> 获取眼角左右移动                  |
| **[getCanthusVerticalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#getcanthusverticalposition)**(): `number` <br> 获取外眼角上下移动                    |
| **[getCharacterHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#getcharacterheight)**(): `number` <br> 获取角色身高                                          |
| **[getCheekBoneRange](Gameplay.Gameplay.IHumanoidV2Shape.md#getcheekbonerange)**(): `number` <br> 获取颧骨前后移动                                        |
| **[getCheekBoneWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getcheekbonewidth)**(): `number` <br> 获取颧骨横向宽度                                        |
| **[getCheekHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#getcheekheight)**(): `number` <br> 获取脸颊上下移动                                              |
| **[getCheekRange](Gameplay.Gameplay.IHumanoidV2Shape.md#getcheekrange)**(): `number` <br> 获取脸颊前后移动                                                |
| **[getCheekWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getcheekwidth)**(): `number` <br> 获取脸颊宽度                                                    |
| **[getEarRoll](Gameplay.Gameplay.IHumanoidV2Shape.md#getearroll)**(): `number` <br> 调整耳朵左右旋转                                                      |
| **[getEarScale](Gameplay.Gameplay.IHumanoidV2Shape.md#getearscale)**(): `number` <br> 调整耳朵大小                                                        |
| **[getEarYaw](Gameplay.Gameplay.IHumanoidV2Shape.md#getearyaw)**(): `number` <br> 调整耳朵前后旋转                                                        |
| **[getEyesGap](Gameplay.Gameplay.IHumanoidV2Shape.md#geteyesgap)**(): `number` <br> 获取眼睛间距                                                          |
| **[getEyesHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#geteyesheight)**(): `number` <br> 获取眼睛上下移动                                                |
| **[getEyesLength](Gameplay.Gameplay.IHumanoidV2Shape.md#geteyeslength)**(): `number` <br> 眼睛长度                                                        |
| **[getEyesRange](Gameplay.Gameplay.IHumanoidV2Shape.md#geteyesrange)**(): `number` <br> 获取眼睛前后移动                                                  |
| **[getEyesRotation](Gameplay.Gameplay.IHumanoidV2Shape.md#geteyesrotation)**(): `number` <br> 获取眼睛角度                                                |
| **[getEyesWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#geteyeswidth)**(): `number` <br> 获取眼睛左右宽度                                                  |
| **[getFaceWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getfacewidth)**(): `number` <br> 调整头部整体宽度                                                  |
| **[getGroinThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#getgrointhickness)**(): `number` <br> 获取胯宽度前后                                          |
| **[getGroinWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getgroinwidth)**(): `number` <br> 获取胯宽度左右                                                  |
| **[getHeadScale](Gameplay.Gameplay.IHumanoidV2Shape.md#getheadscale)**(): `number` <br> 获取角色头部大小                                                  |
| **[getJawLength](Gameplay.Gameplay.IHumanoidV2Shape.md#getjawlength)**(): `number` <br> 调整下巴长度                                                      |
| **[getJawRange](Gameplay.Gameplay.IHumanoidV2Shape.md#getjawrange)**(): `number` <br> 调整下巴前后移动                                                    |
| **[getJawSmooth](Gameplay.Gameplay.IHumanoidV2Shape.md#getjawsmooth)**(): `number` <br> 调整下巴圆度                                                      |
| **[getJawVertexHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#getjawvertexheight)**(): `number` <br> 调整下巴尖上下移动                                    |
| **[getJawVertexRange](Gameplay.Gameplay.IHumanoidV2Shape.md#getjawvertexrange)**(): `number` <br> 调整下巴尖前后移动                                      |
| **[getJawVertexWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getjawvertexwidth)**(): `number` <br> 调整下巴尖宽度                                          |
| **[getLowerArmsStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#getlowerarmsstretch)**(): `number` <br> 获取小臂的拉伸                                      |
| **[getLowerArmsThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#getlowerarmsthickness)**(): `number` <br> 获取小臂前后方向的宽度                          |
| **[getLowerArmsWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getlowerarmswidth)**(): `number` <br> 获取小臂左右方向的宽度                                  |
| **[getLowerFaceRange](Gameplay.Gameplay.IHumanoidV2Shape.md#getlowerfacerange)**(): `number` <br> 获取下半脸前后                                          |
| **[getLowerFaceWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getlowerfacewidth)**(): `number` <br> 获取下半脸的宽度                                        |
| **[getLowerJawRange](Gameplay.Gameplay.IHumanoidV2Shape.md#getlowerjawrange)**(): `number` <br> 调整下颚骨前后移动                                        |
| **[getLowerJawWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getlowerjawwidth)**(): `number` <br> 调整下颚骨宽度                                            |
| **[getLowerMouthThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#getlowermouththickness)**(): `number` <br> 获取下嘴唇薄厚                                |
| **[getLowerStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#getlowerstretch)**(): `number` <br> 调整耳朵下部拉伸                                            |
| **[getMouthHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#getmouthheight)**(): `number` <br> 获取嘴巴上下位置                                              |
| **[getMouthRange](Gameplay.Gameplay.IHumanoidV2Shape.md#getmouthrange)**(): `number` <br> 获取嘴巴前后移动                                                |
| **[getMouthShape](Gameplay.Gameplay.IHumanoidV2Shape.md#getmouthshape)**(): `number` <br> 调整嘴巴形状                                                    |
| **[getMouthWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getmouthwidth)**(): `number` <br> 获取嘴巴宽度                                                    |
| **[getNeckStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#getneckstretch)**(): `number` <br> 获取脖子拉伸                                                  |
| **[getNeckThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#getneckthickness)**(): `number` <br> 获取脖子前后的宽度                                        |
| **[getNeckWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getneckwidth)**(): `number` <br> 调整脖子的左右宽度                                                |
| **[getNoseHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#getnoseheight)**(): `number` <br> 获取鼻梁高度                                                    |
| **[getNoseProtrusion](Gameplay.Gameplay.IHumanoidV2Shape.md#getnoseprotrusion)**(): `number` <br> 获取鼻尖长度                                            |
| **[getNoseVerticalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#getnoseverticalposition)**(): `number` <br> 获取鼻子上下移动                            |
| **[getPupilHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#getpupilheight)**(): `number` <br> 获取瞳孔高度                                                  |
| **[getPupilHorizontalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#getpupilhorizontalposition)**(): `number` <br> 获取瞳孔左右位置                      |
| **[getPupilVerticalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#getpupilverticalposition)**(): `number` <br> 获取瞳孔上下位置                          |
| **[getPupilWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getpupilwidth)**(): `number` <br> 获取瞳孔宽度                                                    |
| **[getRibThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#getribthickness)**(): `number` <br> 获取肋骨的前后宽度                                          |
| **[getRibWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getribwidth)**(): `number` <br> 获取肋骨的左右宽度                                                  |
| **[getShankScaleX](Gameplay.Gameplay.IHumanoidV2Shape.md#getshankscalex)**(): `number` <br> 获取小腿粗细左右                                              |
| **[getShankScaleZ](Gameplay.Gameplay.IHumanoidV2Shape.md#getshankscalez)**(): `number` <br> 获取小腿粗细前后                                              |
| **[getShankStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#getshankstretch)**(): `number` <br> 获取小腿拉伸                                                |
| **[getShoulderArmThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#getshoulderarmthickness)**(): `number` <br> 获取肩膀的前后宽度                          |
| **[getShoulderArmWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getshoulderarmwidth)**(): `number` <br> 获取肩膀的左右宽度                                  |
| **[getShoulderThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#getshoulderthickness)**(): `number` <br> 获取肩膀的前后宽度                                |
| **[getShoulderWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getshoulderwidth)**(): `number` <br> 获取肩膀的宽度                                            |
| **[getThighStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#getthighstretch)**(): `number` <br> 获取大腿拉伸                                                |
| **[getThighThicknessX](Gameplay.Gameplay.IHumanoidV2Shape.md#getthighthicknessx)**(): `number` <br> 获取大腿粗细左右                                      |
| **[getThighThicknessZ](Gameplay.Gameplay.IHumanoidV2Shape.md#getthighthicknessz)**(): `number` <br> 获取大腿粗细前后                                      |
| **[getUpperArmsStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#getupperarmsstretch)**(): `number` <br> 获取大臂的拉伸                                      |
| **[getUpperArmsThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#getupperarmsthickness)**(): `number` <br> 获取大臂前后方向的宽度                          |
| **[getUpperArmsWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getupperarmswidth)**(): `number` <br> 获取大臂左右方向的宽度                                  |
| **[getUpperFaceRange](Gameplay.Gameplay.IHumanoidV2Shape.md#getupperfacerange)**(): `number` <br> 调整上半脸前后移动                                      |
| **[getUpperMouthThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#getuppermouththickness)**(): `number` <br> 获取上嘴唇薄厚                                |
| **[getUpperStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#getupperstretch)**(): `number` <br> 调整耳朵上部拉伸                                            |
| **[getWaistStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#getwaiststretch)**(): `number` <br> 获取腰部拉伸                                                |
| **[getWaistThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#getwaistthickness)**(): `number` <br> 获取腰的前后宽度                                        |
| **[getWaistWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#getwaistwidth)**(): `number` <br> 获取腰的左右宽度                                                |
| **[setBreastHorizontalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#setbreasthorizontalposition)**(`number`, `boolean`): `void` <br> 调整胸部左右位置   |
| **[setBreastLength](Gameplay.Gameplay.IHumanoidV2Shape.md#setbreastlength)**(`number`, `boolean`): `void` <br> 调整胸部长度                               |
| **[setBreastScale](Gameplay.Gameplay.IHumanoidV2Shape.md#setbreastscale)**(`number`, `boolean`): `void` <br> 调整胸部整体大小；                           |
| **[setBreastStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#setbreaststretch)**(`number`, `boolean`): `void` <br> 设置胸部拉伸                             |
| **[setBreastVerticalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#setbreastverticalposition)**(`number`, `boolean`): `void` <br> 调整胸部上下位置       |
| **[setBrowGap](Gameplay.Gameplay.IHumanoidV2Shape.md#setbrowgap)**(`number`, `boolean`): `void` <br> 设置眉间距                                           |
| **[setBrowHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#setbrowheight)**(`number`, `boolean`): `void` <br> 设置眉毛上下移动                               |
| **[setBrowInboardShape](Gameplay.Gameplay.IHumanoidV2Shape.md#setbrowinboardshape)**(`number`, `boolean`): `void` <br> 设置眉毛内侧角度                   |
| **[setBrowOutsideShape](Gameplay.Gameplay.IHumanoidV2Shape.md#setbrowoutsideshape)**(`number`, `boolean`): `void` <br> 设置眉毛外侧形状                   |
| **[setBrowRotation](Gameplay.Gameplay.IHumanoidV2Shape.md#setbrowrotation)**(`number`, `boolean`): `void` <br> 设置眉毛角度                               |
| **[setCanthusHorizontalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#setcanthushorizontalposition)**(`number`, `boolean`): `void` <br> 设置眼角左右移动 |
| **[setCanthusVerticalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#setcanthusverticalposition)**(`number`, `boolean`): `void` <br> 设置外眼角上下移动   |
| **[setCharacterHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#setcharacterheight)**(`number`, `boolean`): `void` <br> 设置角色身高                         |
| **[setCheekBoneRange](Gameplay.Gameplay.IHumanoidV2Shape.md#setcheekbonerange)**(`number`, `boolean`): `void` <br> 设置颧骨前后移动                       |
| **[setCheekBoneWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setcheekbonewidth)**(`number`, `boolean`): `void` <br> 设置颧骨横向宽度                       |
| **[setCheekHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#setcheekheight)**(`number`, `boolean`): `void` <br> 设置脸颊上下移动                             |
| **[setCheekRange](Gameplay.Gameplay.IHumanoidV2Shape.md#setcheekrange)**(`number`, `boolean`): `void` <br> 设置脸颊前后移动                               |
| **[setCheekWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setcheekwidth)**(`number`, `boolean`): `void` <br> 设置脸颊宽度                                   |
| **[setEarRoll](Gameplay.Gameplay.IHumanoidV2Shape.md#setearroll)**(`number`, `boolean`): `void` <br> 调整耳朵左右旋转                                     |
| **[setEarScale](Gameplay.Gameplay.IHumanoidV2Shape.md#setearscale)**(`number`, `boolean`): `void` <br> 调整耳朵大小                                       |
| **[setEarYaw](Gameplay.Gameplay.IHumanoidV2Shape.md#setearyaw)**(`number`, `boolean`): `void` <br> 调整耳朵前后旋转                                       |
| **[setEyesGap](Gameplay.Gameplay.IHumanoidV2Shape.md#seteyesgap)**(`number`, `boolean`): `void` <br> 设置眼睛间距                                         |
| **[setEyesHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#seteyesheight)**(`number`, `boolean`): `void` <br> 设置眼睛上下移动                               |
| **[setEyesLength](Gameplay.Gameplay.IHumanoidV2Shape.md#seteyeslength)**(`number`, `boolean`): `void` <br> 眼睛长度                                       |
| **[setEyesRange](Gameplay.Gameplay.IHumanoidV2Shape.md#seteyesrange)**(`number`, `boolean`): `void` <br> 设置眼睛前后移动                                 |
| **[setEyesRotation](Gameplay.Gameplay.IHumanoidV2Shape.md#seteyesrotation)**(`number`, `boolean`): `void` <br> 设置眼睛角度                               |
| **[setEyesWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#seteyeswidth)**(`number`, `boolean`): `void` <br> 设置眼睛左右宽度                                 |
| **[setFaceWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setfacewidth)**(`number`, `boolean`): `void` <br> 调整头部整体宽度                                 |
| **[setGroinThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#setgrointhickness)**(`number`, `boolean`): `void` <br> 设置胯宽度前后                         |
| **[setGroinWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setgroinwidth)**(`number`, `boolean`): `void` <br> 设置胯宽度左右                                 |
| **[setHeadScale](Gameplay.Gameplay.IHumanoidV2Shape.md#setheadscale)**(`number`, `boolean`): `void` <br> 设置角色头部大小                                 |
| **[setJawLength](Gameplay.Gameplay.IHumanoidV2Shape.md#setjawlength)**(`number`, `boolean`): `void` <br> 调整下巴长度                                     |
| **[setJawRange](Gameplay.Gameplay.IHumanoidV2Shape.md#setjawrange)**(`number`, `boolean`): `void` <br> 调整下巴前后移动                                   |
| **[setJawSmooth](Gameplay.Gameplay.IHumanoidV2Shape.md#setjawsmooth)**(`number`, `boolean`): `void` <br> 调整下巴圆度                                     |
| **[setJawVertexHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#setjawvertexheight)**(`number`, `boolean`): `void` <br> 调整下巴尖上下移动                   |
| **[setJawVertexRange](Gameplay.Gameplay.IHumanoidV2Shape.md#setjawvertexrange)**(`number`, `boolean`): `void` <br> 调整下巴尖前后移动                     |
| **[setJawVertexWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setjawvertexwidth)**(`number`, `boolean`): `void` <br> 调整下巴尖宽度                         |
| **[setLowerArmsStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#setlowerarmsstretch)**(`number`, `boolean`): `void` <br> 设置小臂的拉伸                     |
| **[setLowerArmsThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#setlowerarmsthickness)**(`number`, `boolean`): `void` <br> 设置小臂前后方向的宽度         |
| **[setLowerArmsWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setlowerarmswidth)**(`number`, `boolean`): `void` <br> 设置小臂左右方向的宽度                 |
| **[setLowerFaceRange](Gameplay.Gameplay.IHumanoidV2Shape.md#setlowerfacerange)**(`number`, `boolean`): `void` <br> 设置下半脸前后                         |
| **[setLowerFaceWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setlowerfacewidth)**(`number`, `boolean`): `void` <br> 设置下半脸的宽度                       |
| **[setLowerJawRange](Gameplay.Gameplay.IHumanoidV2Shape.md#setlowerjawrange)**(`number`, `boolean`): `void` <br> 调整下颚骨前后移动                       |
| **[setLowerJawWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setlowerjawwidth)**(`number`, `boolean`): `void` <br> 调整下颚骨宽度                           |
| **[setLowerMouthThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#setlowermouththickness)**(`number`, `boolean`): `void` <br> 设置下嘴唇薄厚               |
| **[setLowerStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#setlowerstretch)**(`number`, `boolean`): `void` <br> 调整耳朵下部拉伸                           |
| **[setMouthHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#setmouthheight)**(`number`, `boolean`): `void` <br> 设置嘴巴上下位置                             |
| **[setMouthRange](Gameplay.Gameplay.IHumanoidV2Shape.md#setmouthrange)**(`number`, `boolean`): `void` <br> 设置嘴巴前后移动                               |
| **[setMouthShape](Gameplay.Gameplay.IHumanoidV2Shape.md#setmouthshape)**(`number`, `boolean`): `void` <br> 调整嘴巴形状                                   |
| **[setMouthWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setmouthwidth)**(`number`, `boolean`): `void` <br> 设置嘴巴宽度                                   |
| **[setNeckStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#setneckstretch)**(`number`, `boolean`): `void` <br> 设置脖子拉伸                                 |
| **[setNeckThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#setneckthickness)**(`number`, `boolean`): `void` <br> 设置脖子前后的宽度                       |
| **[setNeckWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setneckwidth)**(`number`, `boolean`): `void` <br> 调整脖子的左右宽度                               |
| **[setNoseHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#setnoseheight)**(`number`, `boolean`): `void` <br> 设置鼻梁高度                                   |
| **[setNoseProtrusion](Gameplay.Gameplay.IHumanoidV2Shape.md#setnoseprotrusion)**(`number`, `boolean`): `void` <br> 设置鼻尖长度                           |
| **[setNoseVerticalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#setnoseverticalposition)**(`number`, `boolean`): `void` <br> 设置鼻子上下移动           |
| **[setPupilHeight](Gameplay.Gameplay.IHumanoidV2Shape.md#setpupilheight)**(`number`, `boolean`): `void` <br> 设置瞳孔高度                                 |
| **[setPupilHorizontalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#setpupilhorizontalposition)**(`number`, `boolean`): `void` <br> 设置瞳孔左右位置     |
| **[setPupilVerticalPosition](Gameplay.Gameplay.IHumanoidV2Shape.md#setpupilverticalposition)**(`number`, `boolean`): `void` <br> 设置瞳孔上下位置         |
| **[setPupilWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setpupilwidth)**(`number`, `boolean`): `void` <br> 设置瞳孔宽度                                   |
| **[setRibThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#setribthickness)**(`number`, `boolean`): `void` <br> 设置肋骨的前后宽度                         |
| **[setRibWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setribwidth)**(`number`, `boolean`): `void` <br> 设置肋骨的左右宽度                                 |
| **[setShankScaleX](Gameplay.Gameplay.IHumanoidV2Shape.md#setshankscalex)**(`number`, `boolean`): `void` <br> 设置小腿粗细左右                             |
| **[setShankScaleZ](Gameplay.Gameplay.IHumanoidV2Shape.md#setshankscalez)**(`number`, `boolean`): `void` <br> 设置小腿粗细前后                             |
| **[setShankStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#setshankstretch)**(`number`, `boolean`): `void` <br> 设置小腿拉伸                               |
| **[setShoulderArmThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#setshoulderarmthickness)**(`number`, `boolean`): `void` <br> 设置肩膀的前后宽度         |
| **[setShoulderArmWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setshoulderarmwidth)**(`number`, `boolean`): `void` <br> 设置肩膀的左右宽度                 |
| **[setShoulderThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#setshoulderthickness)**(`number`, `boolean`): `void` <br> 设置肩膀的前后宽度               |
| **[setShoulderWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setshoulderwidth)**(`number`, `boolean`): `void` <br> 设置肩膀的宽度                           |
| **[setThighStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#setthighstretch)**(`number`, `boolean`): `void` <br> 设置大腿拉伸                               |
| **[setThighThicknessX](Gameplay.Gameplay.IHumanoidV2Shape.md#setthighthicknessx)**(`number`, `boolean`): `void` <br> 设置大腿粗细左右                     |
| **[setThighThicknessZ](Gameplay.Gameplay.IHumanoidV2Shape.md#setthighthicknessz)**(`number`, `boolean`): `void` <br> 设置大腿粗细前后                     |
| **[setUpperArmsStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#setupperarmsstretch)**(`number`, `boolean`): `void` <br> 设置大臂的拉伸                     |
| **[setUpperArmsThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#setupperarmsthickness)**(`number`, `boolean`): `void` <br> 设置大臂前后方向的宽度         |
| **[setUpperArmsWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setupperarmswidth)**(`number`, `boolean`): `void` <br> 设置大臂左右方向的宽度                 |
| **[setUpperFaceRange](Gameplay.Gameplay.IHumanoidV2Shape.md#setupperfacerange)**(`number`, `boolean`): `void` <br> 调整上半脸前后移动                     |
| **[setUpperMouthThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#setuppermouththickness)**(`number`, `boolean`): `void` <br> 设置上嘴唇薄厚               |
| **[setUpperStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#setupperstretch)**(`number`, `boolean`): `void` <br> 调整耳朵上部拉伸                           |
| **[setWaistStretch](Gameplay.Gameplay.IHumanoidV2Shape.md#setwaiststretch)**(`number`, `boolean`): `void` <br> 设置腰部拉伸                               |
| **[setWaistThickness](Gameplay.Gameplay.IHumanoidV2Shape.md#setwaistthickness)**(`number`, `boolean`): `void` <br> 设置腰的前后宽度                       |
| **[setWaistWidth](Gameplay.Gameplay.IHumanoidV2Shape.md#setwaistwidth)**(`number`, `boolean`): `void` <br> 设置腰的左右宽度                               |

## Methods

### getBreastHorizontalPosition

▸ **getBreastHorizontalPosition**(): `number`

**`Description`**

调整胸部左右位置

**`Effect`**

客户端

#### Returns

`number`

值

---

### getBreastLength

▸ **getBreastLength**(): `number`

**`Description`**

调整胸部长度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getBreastScale

▸ **getBreastScale**(): `number`

**`Description`**

调整胸部整体大小；

**`Effect`**

客户端

#### Returns

`number`

值

---

### getBreastStretch

▸ **getBreastStretch**(): `number`

**`Description`**

获取胸部拉伸

**`Effect`**

客户端

#### Returns

`number`

值

---

### getBreastVerticalPosition

▸ **getBreastVerticalPosition**(): `number`

**`Description`**

调整胸部上下位置

**`Effect`**

客户端

#### Returns

`number`

值

---

### getBrowGap

▸ **getBrowGap**(): `number`

**`Description`**

获取眉间距

**`Effect`**

客户端

#### Returns

`number`

值

---

### getBrowHeight

▸ **getBrowHeight**(): `number`

**`Description`**

获取眉毛上下移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getBrowInboardShape

▸ **getBrowInboardShape**(): `number`

**`Description`**

获取眉毛内侧角度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getBrowOutsideShape

▸ **getBrowOutsideShape**(): `number`

**`Description`**

获取眉毛外侧形状

**`Effect`**

客户端

#### Returns

`number`

值

---

### getBrowRotation

▸ **getBrowRotation**(): `number`

**`Description`**

获取眉毛角度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getCanthusHorizontalPosition

▸ **getCanthusHorizontalPosition**(): `number`

**`Description`**

获取眼角左右移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getCanthusVerticalPosition

▸ **getCanthusVerticalPosition**(): `number`

**`Description`**

获取外眼角上下移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getCharacterHeight

▸ **getCharacterHeight**(): `number`

**`Description`**

获取角色身高

**`Effect`**

客户端

#### Returns

`number`

值

---

### getCheekBoneRange

▸ **getCheekBoneRange**(): `number`

**`Description`**

获取颧骨前后移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getCheekBoneWidth

▸ **getCheekBoneWidth**(): `number`

**`Description`**

获取颧骨横向宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getCheekHeight

▸ **getCheekHeight**(): `number`

**`Description`**

获取脸颊上下移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getCheekRange

▸ **getCheekRange**(): `number`

**`Description`**

获取脸颊前后移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getCheekWidth

▸ **getCheekWidth**(): `number`

**`Description`**

获取脸颊宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getEarRoll

▸ **getEarRoll**(): `number`

**`Description`**

调整耳朵左右旋转

**`Effect`**

客户端

#### Returns

`number`

值

---

### getEarScale

▸ **getEarScale**(): `number`

**`Description`**

调整耳朵大小

**`Effect`**

客户端

#### Returns

`number`

值

---

### getEarYaw

▸ **getEarYaw**(): `number`

**`Description`**

调整耳朵前后旋转

**`Effect`**

客户端

#### Returns

`number`

值

---

### getEyesGap

▸ **getEyesGap**(): `number`

**`Description`**

获取眼睛间距

**`Effect`**

客户端

#### Returns

`number`

值

---

### getEyesHeight

▸ **getEyesHeight**(): `number`

**`Description`**

获取眼睛上下移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getEyesLength

▸ **getEyesLength**(): `number`

**`Description`**

眼睛长度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getEyesRange

▸ **getEyesRange**(): `number`

**`Description`**

获取眼睛前后移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getEyesRotation

▸ **getEyesRotation**(): `number`

**`Description`**

获取眼睛角度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getEyesWidth

▸ **getEyesWidth**(): `number`

**`Description`**

获取眼睛左右宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getFaceWidth

▸ **getFaceWidth**(): `number`

**`Description`**

调整头部整体宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getGroinThickness

▸ **getGroinThickness**(): `number`

**`Description`**

获取胯宽度前后

**`Effect`**

客户端

#### Returns

`number`

值

---

### getGroinWidth

▸ **getGroinWidth**(): `number`

**`Description`**

获取胯宽度左右

**`Effect`**

客户端

#### Returns

`number`

值

---

### getHeadScale

▸ **getHeadScale**(): `number`

**`Description`**

获取角色头部大小

**`Effect`**

客户端调用

**`Effect`**

客户端

#### Returns

`number`

值

---

### getJawLength

▸ **getJawLength**(): `number`

**`Description`**

调整下巴长度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getJawRange

▸ **getJawRange**(): `number`

**`Description`**

调整下巴前后移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getJawSmooth

▸ **getJawSmooth**(): `number`

**`Description`**

调整下巴圆度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getJawVertexHeight

▸ **getJawVertexHeight**(): `number`

**`Description`**

调整下巴尖上下移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getJawVertexRange

▸ **getJawVertexRange**(): `number`

**`Description`**

调整下巴尖前后移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getJawVertexWidth

▸ **getJawVertexWidth**(): `number`

**`Description`**

调整下巴尖宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getLowerArmsStretch

▸ **getLowerArmsStretch**(): `number`

**`Description`**

获取小臂的拉伸

**`Effect`**

客户端

#### Returns

`number`

值

---

### getLowerArmsThickness

▸ **getLowerArmsThickness**(): `number`

**`Description`**

获取小臂前后方向的宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getLowerArmsWidth

▸ **getLowerArmsWidth**(): `number`

**`Description`**

获取小臂左右方向的宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getLowerFaceRange

▸ **getLowerFaceRange**(): `number`

**`Description`**

获取下半脸前后

**`Effect`**

客户端

#### Returns

`number`

值

---

### getLowerFaceWidth

▸ **getLowerFaceWidth**(): `number`

**`Description`**

获取下半脸的宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getLowerJawRange

▸ **getLowerJawRange**(): `number`

**`Description`**

调整下颚骨前后移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getLowerJawWidth

▸ **getLowerJawWidth**(): `number`

**`Description`**

调整下颚骨宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getLowerMouthThickness

▸ **getLowerMouthThickness**(): `number`

**`Description`**

获取下嘴唇薄厚

**`Effect`**

客户端

#### Returns

`number`

值

---

### getLowerStretch

▸ **getLowerStretch**(): `number`

**`Description`**

调整耳朵下部拉伸

**`Effect`**

客户端

#### Returns

`number`

值

---

### getMouthHeight

▸ **getMouthHeight**(): `number`

**`Description`**

获取嘴巴上下位置

**`Effect`**

客户端

#### Returns

`number`

值

---

### getMouthRange

▸ **getMouthRange**(): `number`

**`Description`**

获取嘴巴前后移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getMouthShape

▸ **getMouthShape**(): `number`

**`Description`**

调整嘴巴形状

**`Effect`**

客户端

#### Returns

`number`

值

---

### getMouthWidth

▸ **getMouthWidth**(): `number`

**`Description`**

获取嘴巴宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getNeckStretch

▸ **getNeckStretch**(): `number`

**`Description`**

获取脖子拉伸

**`Effect`**

客户端

#### Returns

`number`

值

---

### getNeckThickness

▸ **getNeckThickness**(): `number`

**`Description`**

获取脖子前后的宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getNeckWidth

▸ **getNeckWidth**(): `number`

**`Description`**

调整脖子的左右宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getNoseHeight

▸ **getNoseHeight**(): `number`

**`Description`**

获取鼻梁高度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getNoseProtrusion

▸ **getNoseProtrusion**(): `number`

**`Description`**

获取鼻尖长度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getNoseVerticalPosition

▸ **getNoseVerticalPosition**(): `number`

**`Description`**

获取鼻子上下移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getPupilHeight

▸ **getPupilHeight**(): `number`

**`Description`**

获取瞳孔高度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getPupilHorizontalPosition

▸ **getPupilHorizontalPosition**(): `number`

**`Description`**

获取瞳孔左右位置

**`Effect`**

客户端

#### Returns

`number`

值

---

### getPupilVerticalPosition

▸ **getPupilVerticalPosition**(): `number`

**`Description`**

获取瞳孔上下位置

**`Effect`**

客户端

#### Returns

`number`

值

---

### getPupilWidth

▸ **getPupilWidth**(): `number`

**`Description`**

获取瞳孔宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getRibThickness

▸ **getRibThickness**(): `number`

**`Description`**

获取肋骨的前后宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getRibWidth

▸ **getRibWidth**(): `number`

**`Description`**

获取肋骨的左右宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getShankScaleX

▸ **getShankScaleX**(): `number`

**`Description`**

获取小腿粗细左右

**`Effect`**

客户端

#### Returns

`number`

值

---

### getShankScaleZ

▸ **getShankScaleZ**(): `number`

**`Description`**

获取小腿粗细前后

**`Effect`**

客户端

#### Returns

`number`

值

---

### getShankStretch

▸ **getShankStretch**(): `number`

**`Description`**

获取小腿拉伸

**`Effect`**

客户端

#### Returns

`number`

值

---

### getShoulderArmThickness

▸ **getShoulderArmThickness**(): `number`

**`Description`**

获取肩膀的前后宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getShoulderArmWidth

▸ **getShoulderArmWidth**(): `number`

**`Description`**

获取肩膀的左右宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getShoulderThickness

▸ **getShoulderThickness**(): `number`

**`Description`**

获取肩膀的前后宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getShoulderWidth

▸ **getShoulderWidth**(): `number`

**`Description`**

获取肩膀的宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getThighStretch

▸ **getThighStretch**(): `number`

**`Description`**

获取大腿拉伸

**`Effect`**

客户端

#### Returns

`number`

值

---

### getThighThicknessX

▸ **getThighThicknessX**(): `number`

**`Description`**

获取大腿粗细左右

**`Effect`**

客户端

#### Returns

`number`

值

---

### getThighThicknessZ

▸ **getThighThicknessZ**(): `number`

**`Description`**

获取大腿粗细前后

**`Effect`**

客户端

#### Returns

`number`

值

---

### getUpperArmsStretch

▸ **getUpperArmsStretch**(): `number`

**`Description`**

获取大臂的拉伸

**`Effect`**

客户端

#### Returns

`number`

值

---

### getUpperArmsThickness

▸ **getUpperArmsThickness**(): `number`

**`Description`**

获取大臂前后方向的宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getUpperArmsWidth

▸ **getUpperArmsWidth**(): `number`

**`Description`**

获取大臂左右方向的宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getUpperFaceRange

▸ **getUpperFaceRange**(): `number`

**`Description`**

调整上半脸前后移动

**`Effect`**

客户端

#### Returns

`number`

值

---

### getUpperMouthThickness

▸ **getUpperMouthThickness**(): `number`

**`Description`**

获取上嘴唇薄厚

**`Effect`**

客户端

#### Returns

`number`

值

---

### getUpperStretch

▸ **getUpperStretch**(): `number`

**`Description`**

调整耳朵上部拉伸

**`Effect`**

客户端

#### Returns

`number`

值

---

### getWaistStretch

▸ **getWaistStretch**(): `number`

**`Description`**

获取腰部拉伸

**`Effect`**

客户端

#### Returns

`number`

值

---

### getWaistThickness

▸ **getWaistThickness**(): `number`

**`Description`**

获取腰的前后宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### getWaistWidth

▸ **getWaistWidth**(): `number`

**`Description`**

获取腰的左右宽度

**`Effect`**

客户端

#### Returns

`number`

值

---

### setBreastHorizontalPosition

▸ **setBreastHorizontalPosition**(`value`, `sync`): `void`

**`Description`**

调整胸部左右位置

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setBreastLength

▸ **setBreastLength**(`value`, `sync`): `void`

**`Description`**

调整胸部长度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setBreastScale

▸ **setBreastScale**(`value`, `sync`): `void`

**`Description`**

调整胸部整体大小；

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setBreastStretch

▸ **setBreastStretch**(`value`, `sync`): `void`

**`Description`**

设置胸部拉伸

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setBreastVerticalPosition

▸ **setBreastVerticalPosition**(`value`, `sync`): `void`

**`Description`**

调整胸部上下位置

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setBrowGap

▸ **setBrowGap**(`value`, `sync`): `void`

**`Description`**

设置眉间距

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setBrowHeight

▸ **setBrowHeight**(`value`, `sync`): `void`

**`Description`**

设置眉毛上下移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setBrowInboardShape

▸ **setBrowInboardShape**(`value`, `sync`): `void`

**`Description`**

设置眉毛内侧角度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setBrowOutsideShape

▸ **setBrowOutsideShape**(`value`, `sync`): `void`

**`Description`**

设置眉毛外侧形状

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setBrowRotation

▸ **setBrowRotation**(`value`, `sync`): `void`

**`Description`**

设置眉毛角度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setCanthusHorizontalPosition

▸ **setCanthusHorizontalPosition**(`value`, `sync`): `void`

**`Description`**

设置眼角左右移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setCanthusVerticalPosition

▸ **setCanthusVerticalPosition**(`value`, `sync`): `void`

**`Description`**

设置外眼角上下移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setCharacterHeight

▸ **setCharacterHeight**(`value`, `sync`): `void`

**`Description`**

设置角色身高

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setCheekBoneRange

▸ **setCheekBoneRange**(`value`, `sync`): `void`

**`Description`**

设置颧骨前后移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setCheekBoneWidth

▸ **setCheekBoneWidth**(`value`, `sync`): `void`

**`Description`**

设置颧骨横向宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setCheekHeight

▸ **setCheekHeight**(`value`, `sync`): `void`

**`Description`**

设置脸颊上下移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setCheekRange

▸ **setCheekRange**(`value`, `sync`): `void`

**`Description`**

设置脸颊前后移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setCheekWidth

▸ **setCheekWidth**(`value`, `sync`): `void`

**`Description`**

设置脸颊宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setEarRoll

▸ **setEarRoll**(`value`, `sync`): `void`

**`Description`**

调整耳朵左右旋转

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setEarScale

▸ **setEarScale**(`value`, `sync`): `void`

**`Description`**

调整耳朵大小

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setEarYaw

▸ **setEarYaw**(`value`, `sync`): `void`

**`Description`**

调整耳朵前后旋转

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setEyesGap

▸ **setEyesGap**(`value`, `sync`): `void`

**`Description`**

设置眼睛间距

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setEyesHeight

▸ **setEyesHeight**(`value`, `sync`): `void`

**`Description`**

设置眼睛上下移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setEyesLength

▸ **setEyesLength**(`value`, `sync`): `void`

**`Description`**

眼睛长度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setEyesRange

▸ **setEyesRange**(`value`, `sync`): `void`

**`Description`**

设置眼睛前后移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setEyesRotation

▸ **setEyesRotation**(`value`, `sync`): `void`

**`Description`**

设置眼睛角度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setEyesWidth

▸ **setEyesWidth**(`value`, `sync`): `void`

**`Description`**

设置眼睛左右宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setFaceWidth

▸ **setFaceWidth**(`value`, `sync`): `void`

**`Description`**

调整头部整体宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setGroinThickness

▸ **setGroinThickness**(`value`, `sync`): `void`

**`Description`**

设置胯宽度前后

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setGroinWidth

▸ **setGroinWidth**(`value`, `sync`): `void`

**`Description`**

设置胯宽度左右

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setHeadScale

▸ **setHeadScale**(`value`, `sync`): `void`

**`Description`**

设置角色头部大小

**`Effect`**

sync = false:客户端;
sync = true:双端调用

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setJawLength

▸ **setJawLength**(`value`, `sync`): `void`

**`Description`**

调整下巴长度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setJawRange

▸ **setJawRange**(`value`, `sync`): `void`

**`Description`**

调整下巴前后移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setJawSmooth

▸ **setJawSmooth**(`value`, `sync`): `void`

**`Description`**

调整下巴圆度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setJawVertexHeight

▸ **setJawVertexHeight**(`value`, `sync`): `void`

**`Description`**

调整下巴尖上下移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setJawVertexRange

▸ **setJawVertexRange**(`value`, `sync`): `void`

**`Description`**

调整下巴尖前后移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setJawVertexWidth

▸ **setJawVertexWidth**(`value`, `sync`): `void`

**`Description`**

调整下巴尖宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setLowerArmsStretch

▸ **setLowerArmsStretch**(`value`, `sync`): `void`

**`Description`**

设置小臂的拉伸

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setLowerArmsThickness

▸ **setLowerArmsThickness**(`value`, `sync`): `void`

**`Description`**

设置小臂前后方向的宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setLowerArmsWidth

▸ **setLowerArmsWidth**(`value`, `sync`): `void`

**`Description`**

设置小臂左右方向的宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setLowerFaceRange

▸ **setLowerFaceRange**(`value`, `sync`): `void`

**`Description`**

设置下半脸前后

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setLowerFaceWidth

▸ **setLowerFaceWidth**(`value`, `sync`): `void`

**`Description`**

设置下半脸的宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setLowerJawRange

▸ **setLowerJawRange**(`value`, `sync`): `void`

**`Description`**

调整下颚骨前后移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setLowerJawWidth

▸ **setLowerJawWidth**(`value`, `sync`): `void`

**`Description`**

调整下颚骨宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setLowerMouthThickness

▸ **setLowerMouthThickness**(`value`, `sync`): `void`

**`Description`**

设置下嘴唇薄厚

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setLowerStretch

▸ **setLowerStretch**(`value`, `sync`): `void`

**`Description`**

调整耳朵下部拉伸

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setMouthHeight

▸ **setMouthHeight**(`value`, `sync`): `void`

**`Description`**

设置嘴巴上下位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setMouthRange

▸ **setMouthRange**(`value`, `sync`): `void`

**`Description`**

设置嘴巴前后移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setMouthShape

▸ **setMouthShape**(`value`, `sync`): `void`

**`Description`**

调整嘴巴形状

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setMouthWidth

▸ **setMouthWidth**(`value`, `sync`): `void`

**`Description`**

设置嘴巴宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setNeckStretch

▸ **setNeckStretch**(`value`, `sync`): `void`

**`Description`**

设置脖子拉伸

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setNeckThickness

▸ **setNeckThickness**(`value`, `sync`): `void`

**`Description`**

设置脖子前后的宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setNeckWidth

▸ **setNeckWidth**(`value`, `sync`): `void`

**`Description`**

调整脖子的左右宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setNoseHeight

▸ **setNoseHeight**(`value`, `sync`): `void`

**`Description`**

设置鼻梁高度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setNoseProtrusion

▸ **setNoseProtrusion**(`value`, `sync`): `void`

**`Description`**

设置鼻尖长度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setNoseVerticalPosition

▸ **setNoseVerticalPosition**(`value`, `sync`): `void`

**`Description`**

设置鼻子上下移动

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setPupilHeight

▸ **setPupilHeight**(`value`, `sync`): `void`

**`Description`**

设置瞳孔高度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setPupilHorizontalPosition

▸ **setPupilHorizontalPosition**(`value`, `sync`): `void`

**`Description`**

设置瞳孔左右位置

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setPupilVerticalPosition

▸ **setPupilVerticalPosition**(`value`, `sync`): `void`

**`Description`**

设置瞳孔上下位置

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setPupilWidth

▸ **setPupilWidth**(`value`, `sync`): `void`

**`Description`**

设置瞳孔宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setRibThickness

▸ **setRibThickness**(`value`, `sync`): `void`

**`Description`**

设置肋骨的前后宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setRibWidth

▸ **setRibWidth**(`value`, `sync`): `void`

**`Description`**

设置肋骨的左右宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setShankScaleX

▸ **setShankScaleX**(`value`, `sync`): `void`

**`Description`**

设置小腿粗细左右

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setShankScaleZ

▸ **setShankScaleZ**(`value`, `sync`): `void`

**`Description`**

设置小腿粗细前后

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setShankStretch

▸ **setShankStretch**(`value`, `sync`): `void`

**`Description`**

设置小腿拉伸

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setShoulderArmThickness

▸ **setShoulderArmThickness**(`value`, `sync`): `void`

**`Description`**

设置肩膀的前后宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setShoulderArmWidth

▸ **setShoulderArmWidth**(`value`, `sync`): `void`

**`Description`**

设置肩膀的左右宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setShoulderThickness

▸ **setShoulderThickness**(`value`, `sync`): `void`

**`Description`**

设置肩膀的前后宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setShoulderWidth

▸ **setShoulderWidth**(`value`, `sync`): `void`

**`Description`**

设置肩膀的宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setThighStretch

▸ **setThighStretch**(`value`, `sync`): `void`

**`Description`**

设置大腿拉伸

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setThighThicknessX

▸ **setThighThicknessX**(`value`, `sync`): `void`

**`Description`**

设置大腿粗细左右

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setThighThicknessZ

▸ **setThighThicknessZ**(`value`, `sync`): `void`

**`Description`**

设置大腿粗细前后

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setUpperArmsStretch

▸ **setUpperArmsStretch**(`value`, `sync`): `void`

**`Description`**

设置大臂的拉伸

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setUpperArmsThickness

▸ **setUpperArmsThickness**(`value`, `sync`): `void`

**`Description`**

设置大臂前后方向的宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setUpperArmsWidth

▸ **setUpperArmsWidth**(`value`, `sync`): `void`

**`Description`**

设置大臂左右方向的宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setUpperFaceRange

▸ **setUpperFaceRange**(`value`, `sync`): `void`

**`Description`**

调整上半脸前后移动

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setUpperMouthThickness

▸ **setUpperMouthThickness**(`value`, `sync`): `void`

**`Description`**

设置上嘴唇薄厚

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setUpperStretch

▸ **setUpperStretch**(`value`, `sync`): `void`

**`Description`**

调整耳朵上部拉伸

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setWaistStretch

▸ **setWaistStretch**(`value`, `sync`): `void`

**`Description`**

设置腰部拉伸

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setWaistThickness

▸ **setWaistThickness**(`value`, `sync`): `void`

**`Description`**

设置腰的前后宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setWaistWidth

▸ **setWaistWidth**(`value`, `sync`): `void`

**`Description`**

设置腰的左右宽度

-

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `value` | `number`  | 值                      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`
