[Avatar](../groups/Avatar.Avatar.md) / IHumanoidV2Shape

# IHumanoidV2Shape <Badge type="tip" text="Interface" /> <Score text="IHumanoidV2Shape" />

人形对象V2形体修改

## Implemented by

- [`HumanoidV2Shape`](../classes/Gameplay.HumanoidV2Shape.md)

## Table of contents

| Methods |
| :-----|
| **[getBreastHorizontalPosition](Gameplay.IHumanoidV2Shape.md#getbreasthorizontalposition)**(): `number` <br> 调整胸部左右位置|
| **[getBreastLength](Gameplay.IHumanoidV2Shape.md#getbreastlength)**(): `number` <br> 调整胸部长度|
| **[getBreastScale](Gameplay.IHumanoidV2Shape.md#getbreastscale)**(): `number` <br> 调整胸部整体大小；|
| **[getBreastStretch](Gameplay.IHumanoidV2Shape.md#getbreaststretch)**(): `number` <br> 获取胸部拉伸|
| **[getBreastVerticalPosition](Gameplay.IHumanoidV2Shape.md#getbreastverticalposition)**(): `number` <br> 调整胸部上下位置|
| **[getBrowGap](Gameplay.IHumanoidV2Shape.md#getbrowgap)**(): `number` <br> 获取眉间距|
| **[getBrowHeight](Gameplay.IHumanoidV2Shape.md#getbrowheight)**(): `number` <br> 获取眉毛上下移动|
| **[getBrowInboardShape](Gameplay.IHumanoidV2Shape.md#getbrowinboardshape)**(): `number` <br> 获取眉毛内侧角度|
| **[getBrowOutsideShape](Gameplay.IHumanoidV2Shape.md#getbrowoutsideshape)**(): `number` <br> 获取眉毛外侧形状|
| **[getBrowRotation](Gameplay.IHumanoidV2Shape.md#getbrowrotation)**(): `number` <br> 获取眉毛角度|
| **[getCanthusHorizontalPosition](Gameplay.IHumanoidV2Shape.md#getcanthushorizontalposition)**(): `number` <br> 获取眼角左右移动|
| **[getCanthusVerticalPosition](Gameplay.IHumanoidV2Shape.md#getcanthusverticalposition)**(): `number` <br> 获取外眼角上下移动|
| **[getCharacterHeight](Gameplay.IHumanoidV2Shape.md#getcharacterheight)**(): `number` <br> 获取角色身高|
| **[getCheekBoneRange](Gameplay.IHumanoidV2Shape.md#getcheekbonerange)**(): `number` <br> 获取颧骨前后移动|
| **[getCheekBoneWidth](Gameplay.IHumanoidV2Shape.md#getcheekbonewidth)**(): `number` <br> 获取颧骨横向宽度|
| **[getCheekHeight](Gameplay.IHumanoidV2Shape.md#getcheekheight)**(): `number` <br> 获取脸颊上下移动|
| **[getCheekRange](Gameplay.IHumanoidV2Shape.md#getcheekrange)**(): `number` <br> 获取脸颊前后移动|
| **[getCheekWidth](Gameplay.IHumanoidV2Shape.md#getcheekwidth)**(): `number` <br> 获取脸颊宽度|
| **[getEarRoll](Gameplay.IHumanoidV2Shape.md#getearroll)**(): `number` <br> 调整耳朵左右旋转|
| **[getEarScale](Gameplay.IHumanoidV2Shape.md#getearscale)**(): `number` <br> 调整耳朵大小|
| **[getEarYaw](Gameplay.IHumanoidV2Shape.md#getearyaw)**(): `number` <br> 调整耳朵前后旋转|
| **[getEyesGap](Gameplay.IHumanoidV2Shape.md#geteyesgap)**(): `number` <br> 获取眼睛间距|
| **[getEyesHeight](Gameplay.IHumanoidV2Shape.md#geteyesheight)**(): `number` <br> 获取眼睛上下移动|
| **[getEyesLength](Gameplay.IHumanoidV2Shape.md#geteyeslength)**(): `number` <br> 眼睛长度|
| **[getEyesRange](Gameplay.IHumanoidV2Shape.md#geteyesrange)**(): `number` <br> 获取眼睛前后移动|
| **[getEyesRotation](Gameplay.IHumanoidV2Shape.md#geteyesrotation)**(): `number` <br> 获取眼睛角度|
| **[getEyesWidth](Gameplay.IHumanoidV2Shape.md#geteyeswidth)**(): `number` <br> 获取眼睛左右宽度|
| **[getFaceWidth](Gameplay.IHumanoidV2Shape.md#getfacewidth)**(): `number` <br> 调整头部整体宽度|
| **[getGroinThickness](Gameplay.IHumanoidV2Shape.md#getgrointhickness)**(): `number` <br> 获取胯宽度前后|
| **[getGroinWidth](Gameplay.IHumanoidV2Shape.md#getgroinwidth)**(): `number` <br> 获取胯宽度左右|
| **[getHeadScale](Gameplay.IHumanoidV2Shape.md#getheadscale)**(): `number` <br> 获取角色头部大小|
| **[getJawLength](Gameplay.IHumanoidV2Shape.md#getjawlength)**(): `number` <br> 调整下巴长度|
| **[getJawRange](Gameplay.IHumanoidV2Shape.md#getjawrange)**(): `number` <br> 调整下巴前后移动|
| **[getJawSmooth](Gameplay.IHumanoidV2Shape.md#getjawsmooth)**(): `number` <br> 调整下巴圆度|
| **[getJawVertexHeight](Gameplay.IHumanoidV2Shape.md#getjawvertexheight)**(): `number` <br> 调整下巴尖上下移动|
| **[getJawVertexRange](Gameplay.IHumanoidV2Shape.md#getjawvertexrange)**(): `number` <br> 调整下巴尖前后移动|
| **[getJawVertexWidth](Gameplay.IHumanoidV2Shape.md#getjawvertexwidth)**(): `number` <br> 调整下巴尖宽度|
| **[getLowerArmsStretch](Gameplay.IHumanoidV2Shape.md#getlowerarmsstretch)**(): `number` <br> 获取小臂的拉伸|
| **[getLowerArmsThickness](Gameplay.IHumanoidV2Shape.md#getlowerarmsthickness)**(): `number` <br> 获取小臂前后方向的宽度|
| **[getLowerArmsWidth](Gameplay.IHumanoidV2Shape.md#getlowerarmswidth)**(): `number` <br> 获取小臂左右方向的宽度|
| **[getLowerFaceRange](Gameplay.IHumanoidV2Shape.md#getlowerfacerange)**(): `number` <br> 获取下半脸前后|
| **[getLowerFaceWidth](Gameplay.IHumanoidV2Shape.md#getlowerfacewidth)**(): `number` <br> 获取下半脸的宽度|
| **[getLowerJawRange](Gameplay.IHumanoidV2Shape.md#getlowerjawrange)**(): `number` <br> 调整下颚骨前后移动|
| **[getLowerJawWidth](Gameplay.IHumanoidV2Shape.md#getlowerjawwidth)**(): `number` <br> 调整下颚骨宽度|
| **[getLowerMouthThickness](Gameplay.IHumanoidV2Shape.md#getlowermouththickness)**(): `number` <br> 获取下嘴唇薄厚|
| **[getLowerStretch](Gameplay.IHumanoidV2Shape.md#getlowerstretch)**(): `number` <br> 调整耳朵下部拉伸|
| **[getMouthHeight](Gameplay.IHumanoidV2Shape.md#getmouthheight)**(): `number` <br> 获取嘴巴上下位置|
| **[getMouthRange](Gameplay.IHumanoidV2Shape.md#getmouthrange)**(): `number` <br> 获取嘴巴前后移动|
| **[getMouthShape](Gameplay.IHumanoidV2Shape.md#getmouthshape)**(): `number` <br> 调整嘴巴形状|
| **[getMouthWidth](Gameplay.IHumanoidV2Shape.md#getmouthwidth)**(): `number` <br> 获取嘴巴宽度|
| **[getNeckStretch](Gameplay.IHumanoidV2Shape.md#getneckstretch)**(): `number` <br> 获取脖子拉伸|
| **[getNeckThickness](Gameplay.IHumanoidV2Shape.md#getneckthickness)**(): `number` <br> 获取脖子前后的宽度|
| **[getNeckWidth](Gameplay.IHumanoidV2Shape.md#getneckwidth)**(): `number` <br> 调整脖子的左右宽度|
| **[getNoseHeight](Gameplay.IHumanoidV2Shape.md#getnoseheight)**(): `number` <br> 获取鼻梁高度|
| **[getNoseProtrusion](Gameplay.IHumanoidV2Shape.md#getnoseprotrusion)**(): `number` <br> 获取鼻尖长度|
| **[getNoseVerticalPosition](Gameplay.IHumanoidV2Shape.md#getnoseverticalposition)**(): `number` <br> 获取鼻子上下移动|
| **[getPupilHeight](Gameplay.IHumanoidV2Shape.md#getpupilheight)**(): `number` <br> 获取瞳孔高度|
| **[getPupilHorizontalPosition](Gameplay.IHumanoidV2Shape.md#getpupilhorizontalposition)**(): `number` <br> 获取瞳孔左右位置|
| **[getPupilVerticalPosition](Gameplay.IHumanoidV2Shape.md#getpupilverticalposition)**(): `number` <br> 获取瞳孔上下位置|
| **[getPupilWidth](Gameplay.IHumanoidV2Shape.md#getpupilwidth)**(): `number` <br> 获取瞳孔宽度|
| **[getRibThickness](Gameplay.IHumanoidV2Shape.md#getribthickness)**(): `number` <br> 获取肋骨的前后宽度|
| **[getRibWidth](Gameplay.IHumanoidV2Shape.md#getribwidth)**(): `number` <br> 获取肋骨的左右宽度|
| **[getShankScaleX](Gameplay.IHumanoidV2Shape.md#getshankscalex)**(): `number` <br> 获取小腿粗细左右|
| **[getShankScaleZ](Gameplay.IHumanoidV2Shape.md#getshankscalez)**(): `number` <br> 获取小腿粗细前后|
| **[getShankStretch](Gameplay.IHumanoidV2Shape.md#getshankstretch)**(): `number` <br> 获取小腿拉伸|
| **[getShoulderArmThickness](Gameplay.IHumanoidV2Shape.md#getshoulderarmthickness)**(): `number` <br> 获取肩膀的前后宽度|
| **[getShoulderArmWidth](Gameplay.IHumanoidV2Shape.md#getshoulderarmwidth)**(): `number` <br> 获取肩膀的左右宽度|
| **[getShoulderThickness](Gameplay.IHumanoidV2Shape.md#getshoulderthickness)**(): `number` <br> 获取肩膀的前后宽度|
| **[getShoulderWidth](Gameplay.IHumanoidV2Shape.md#getshoulderwidth)**(): `number` <br> 获取肩膀的宽度|
| **[getThighStretch](Gameplay.IHumanoidV2Shape.md#getthighstretch)**(): `number` <br> 获取大腿拉伸|
| **[getThighThicknessX](Gameplay.IHumanoidV2Shape.md#getthighthicknessx)**(): `number` <br> 获取大腿粗细左右|
| **[getThighThicknessZ](Gameplay.IHumanoidV2Shape.md#getthighthicknessz)**(): `number` <br> 获取大腿粗细前后|
| **[getUpperArmsStretch](Gameplay.IHumanoidV2Shape.md#getupperarmsstretch)**(): `number` <br> 获取大臂的拉伸|
| **[getUpperArmsThickness](Gameplay.IHumanoidV2Shape.md#getupperarmsthickness)**(): `number` <br> 获取大臂前后方向的宽度|
| **[getUpperArmsWidth](Gameplay.IHumanoidV2Shape.md#getupperarmswidth)**(): `number` <br> 获取大臂左右方向的宽度|
| **[getUpperFaceRange](Gameplay.IHumanoidV2Shape.md#getupperfacerange)**(): `number` <br> 调整上半脸前后移动|
| **[getUpperMouthThickness](Gameplay.IHumanoidV2Shape.md#getuppermouththickness)**(): `number` <br> 获取上嘴唇薄厚|
| **[getUpperStretch](Gameplay.IHumanoidV2Shape.md#getupperstretch)**(): `number` <br> 调整耳朵上部拉伸|
| **[getWaistStretch](Gameplay.IHumanoidV2Shape.md#getwaiststretch)**(): `number` <br> 获取腰部拉伸|
| **[getWaistThickness](Gameplay.IHumanoidV2Shape.md#getwaistthickness)**(): `number` <br> 获取腰的前后宽度|
| **[getWaistWidth](Gameplay.IHumanoidV2Shape.md#getwaistwidth)**(): `number` <br> 获取腰的左右宽度|
| **[setBreastHorizontalPosition](Gameplay.IHumanoidV2Shape.md#setbreasthorizontalposition)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整胸部左右位置|
| **[setBreastLength](Gameplay.IHumanoidV2Shape.md#setbreastlength)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整胸部长度|
| **[setBreastScale](Gameplay.IHumanoidV2Shape.md#setbreastscale)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整胸部整体大小；|
| **[setBreastStretch](Gameplay.IHumanoidV2Shape.md#setbreaststretch)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置胸部拉伸|
| **[setBreastVerticalPosition](Gameplay.IHumanoidV2Shape.md#setbreastverticalposition)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整胸部上下位置|
| **[setBrowGap](Gameplay.IHumanoidV2Shape.md#setbrowgap)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置眉间距|
| **[setBrowHeight](Gameplay.IHumanoidV2Shape.md#setbrowheight)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置眉毛上下移动|
| **[setBrowInboardShape](Gameplay.IHumanoidV2Shape.md#setbrowinboardshape)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置眉毛内侧角度|
| **[setBrowOutsideShape](Gameplay.IHumanoidV2Shape.md#setbrowoutsideshape)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置眉毛外侧形状|
| **[setBrowRotation](Gameplay.IHumanoidV2Shape.md#setbrowrotation)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置眉毛角度|
| **[setCanthusHorizontalPosition](Gameplay.IHumanoidV2Shape.md#setcanthushorizontalposition)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置眼角左右移动|
| **[setCanthusVerticalPosition](Gameplay.IHumanoidV2Shape.md#setcanthusverticalposition)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置外眼角上下移动|
| **[setCharacterHeight](Gameplay.IHumanoidV2Shape.md#setcharacterheight)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置角色身高|
| **[setCheekBoneRange](Gameplay.IHumanoidV2Shape.md#setcheekbonerange)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置颧骨前后移动|
| **[setCheekBoneWidth](Gameplay.IHumanoidV2Shape.md#setcheekbonewidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置颧骨横向宽度|
| **[setCheekHeight](Gameplay.IHumanoidV2Shape.md#setcheekheight)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置脸颊上下移动|
| **[setCheekRange](Gameplay.IHumanoidV2Shape.md#setcheekrange)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置脸颊前后移动|
| **[setCheekWidth](Gameplay.IHumanoidV2Shape.md#setcheekwidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置脸颊宽度|
| **[setEarRoll](Gameplay.IHumanoidV2Shape.md#setearroll)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整耳朵左右旋转|
| **[setEarScale](Gameplay.IHumanoidV2Shape.md#setearscale)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整耳朵大小|
| **[setEarYaw](Gameplay.IHumanoidV2Shape.md#setearyaw)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整耳朵前后旋转|
| **[setEyesGap](Gameplay.IHumanoidV2Shape.md#seteyesgap)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置眼睛间距|
| **[setEyesHeight](Gameplay.IHumanoidV2Shape.md#seteyesheight)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置眼睛上下移动|
| **[setEyesLength](Gameplay.IHumanoidV2Shape.md#seteyeslength)**(`value`: `number`, `sync`: `boolean`): `void` <br> 眼睛长度|
| **[setEyesRange](Gameplay.IHumanoidV2Shape.md#seteyesrange)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置眼睛前后移动|
| **[setEyesRotation](Gameplay.IHumanoidV2Shape.md#seteyesrotation)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置眼睛角度|
| **[setEyesWidth](Gameplay.IHumanoidV2Shape.md#seteyeswidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置眼睛左右宽度|
| **[setFaceWidth](Gameplay.IHumanoidV2Shape.md#setfacewidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整头部整体宽度|
| **[setGroinThickness](Gameplay.IHumanoidV2Shape.md#setgrointhickness)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置胯宽度前后|
| **[setGroinWidth](Gameplay.IHumanoidV2Shape.md#setgroinwidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置胯宽度左右|
| **[setHeadScale](Gameplay.IHumanoidV2Shape.md#setheadscale)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置角色头部大小|
| **[setJawLength](Gameplay.IHumanoidV2Shape.md#setjawlength)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整下巴长度|
| **[setJawRange](Gameplay.IHumanoidV2Shape.md#setjawrange)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整下巴前后移动|
| **[setJawSmooth](Gameplay.IHumanoidV2Shape.md#setjawsmooth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整下巴圆度|
| **[setJawVertexHeight](Gameplay.IHumanoidV2Shape.md#setjawvertexheight)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整下巴尖上下移动|
| **[setJawVertexRange](Gameplay.IHumanoidV2Shape.md#setjawvertexrange)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整下巴尖前后移动|
| **[setJawVertexWidth](Gameplay.IHumanoidV2Shape.md#setjawvertexwidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整下巴尖宽度|
| **[setLowerArmsStretch](Gameplay.IHumanoidV2Shape.md#setlowerarmsstretch)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置小臂的拉伸|
| **[setLowerArmsThickness](Gameplay.IHumanoidV2Shape.md#setlowerarmsthickness)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置小臂前后方向的宽度|
| **[setLowerArmsWidth](Gameplay.IHumanoidV2Shape.md#setlowerarmswidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置小臂左右方向的宽度|
| **[setLowerFaceRange](Gameplay.IHumanoidV2Shape.md#setlowerfacerange)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置下半脸前后|
| **[setLowerFaceWidth](Gameplay.IHumanoidV2Shape.md#setlowerfacewidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置下半脸的宽度|
| **[setLowerJawRange](Gameplay.IHumanoidV2Shape.md#setlowerjawrange)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整下颚骨前后移动|
| **[setLowerJawWidth](Gameplay.IHumanoidV2Shape.md#setlowerjawwidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整下颚骨宽度|
| **[setLowerMouthThickness](Gameplay.IHumanoidV2Shape.md#setlowermouththickness)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置下嘴唇薄厚|
| **[setLowerStretch](Gameplay.IHumanoidV2Shape.md#setlowerstretch)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整耳朵下部拉伸|
| **[setMouthHeight](Gameplay.IHumanoidV2Shape.md#setmouthheight)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置嘴巴上下位置|
| **[setMouthRange](Gameplay.IHumanoidV2Shape.md#setmouthrange)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置嘴巴前后移动|
| **[setMouthShape](Gameplay.IHumanoidV2Shape.md#setmouthshape)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整嘴巴形状|
| **[setMouthWidth](Gameplay.IHumanoidV2Shape.md#setmouthwidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置嘴巴宽度|
| **[setNeckStretch](Gameplay.IHumanoidV2Shape.md#setneckstretch)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置脖子拉伸|
| **[setNeckThickness](Gameplay.IHumanoidV2Shape.md#setneckthickness)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置脖子前后的宽度|
| **[setNeckWidth](Gameplay.IHumanoidV2Shape.md#setneckwidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整脖子的左右宽度|
| **[setNoseHeight](Gameplay.IHumanoidV2Shape.md#setnoseheight)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置鼻梁高度|
| **[setNoseProtrusion](Gameplay.IHumanoidV2Shape.md#setnoseprotrusion)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置鼻尖长度|
| **[setNoseVerticalPosition](Gameplay.IHumanoidV2Shape.md#setnoseverticalposition)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置鼻子上下移动|
| **[setPupilHeight](Gameplay.IHumanoidV2Shape.md#setpupilheight)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置瞳孔高度|
| **[setPupilHorizontalPosition](Gameplay.IHumanoidV2Shape.md#setpupilhorizontalposition)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置瞳孔左右位置|
| **[setPupilVerticalPosition](Gameplay.IHumanoidV2Shape.md#setpupilverticalposition)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置瞳孔上下位置|
| **[setPupilWidth](Gameplay.IHumanoidV2Shape.md#setpupilwidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置瞳孔宽度|
| **[setRibThickness](Gameplay.IHumanoidV2Shape.md#setribthickness)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置肋骨的前后宽度|
| **[setRibWidth](Gameplay.IHumanoidV2Shape.md#setribwidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置肋骨的左右宽度|
| **[setShankScaleX](Gameplay.IHumanoidV2Shape.md#setshankscalex)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置小腿粗细左右|
| **[setShankScaleZ](Gameplay.IHumanoidV2Shape.md#setshankscalez)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置小腿粗细前后|
| **[setShankStretch](Gameplay.IHumanoidV2Shape.md#setshankstretch)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置小腿拉伸|
| **[setShoulderArmThickness](Gameplay.IHumanoidV2Shape.md#setshoulderarmthickness)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置肩膀的前后宽度|
| **[setShoulderArmWidth](Gameplay.IHumanoidV2Shape.md#setshoulderarmwidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置肩膀的左右宽度|
| **[setShoulderThickness](Gameplay.IHumanoidV2Shape.md#setshoulderthickness)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置肩膀的前后宽度|
| **[setShoulderWidth](Gameplay.IHumanoidV2Shape.md#setshoulderwidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置肩膀的宽度|
| **[setThighStretch](Gameplay.IHumanoidV2Shape.md#setthighstretch)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置大腿拉伸|
| **[setThighThicknessX](Gameplay.IHumanoidV2Shape.md#setthighthicknessx)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置大腿粗细左右|
| **[setThighThicknessZ](Gameplay.IHumanoidV2Shape.md#setthighthicknessz)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置大腿粗细前后|
| **[setUpperArmsStretch](Gameplay.IHumanoidV2Shape.md#setupperarmsstretch)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置大臂的拉伸|
| **[setUpperArmsThickness](Gameplay.IHumanoidV2Shape.md#setupperarmsthickness)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置大臂前后方向的宽度|
| **[setUpperArmsWidth](Gameplay.IHumanoidV2Shape.md#setupperarmswidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置大臂左右方向的宽度|
| **[setUpperFaceRange](Gameplay.IHumanoidV2Shape.md#setupperfacerange)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整上半脸前后移动|
| **[setUpperMouthThickness](Gameplay.IHumanoidV2Shape.md#setuppermouththickness)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置上嘴唇薄厚|
| **[setUpperStretch](Gameplay.IHumanoidV2Shape.md#setupperstretch)**(`value`: `number`, `sync`: `boolean`): `void` <br> 调整耳朵上部拉伸|
| **[setWaistStretch](Gameplay.IHumanoidV2Shape.md#setwaiststretch)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置腰部拉伸|
| **[setWaistThickness](Gameplay.IHumanoidV2Shape.md#setwaistthickness)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置腰的前后宽度|
| **[setWaistWidth](Gameplay.IHumanoidV2Shape.md#setwaistwidth)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置腰的左右宽度|

## Methods

### getBreastHorizontalPosition <Score text="getBreastHorizontalPosition" /> 

• **getBreastHorizontalPosition**(): `number` <Badge type="tip" text="client" />

调整胸部左右位置


#### Returns

`number`

值

___

### getBreastLength <Score text="getBreastLength" /> 

• **getBreastLength**(): `number` <Badge type="tip" text="client" />

调整胸部长度


#### Returns

`number`

值

___

### getBreastScale <Score text="getBreastScale" /> 

• **getBreastScale**(): `number` <Badge type="tip" text="client" />

调整胸部整体大小；


#### Returns

`number`

值

___

### getBreastStretch <Score text="getBreastStretch" /> 

• **getBreastStretch**(): `number` <Badge type="tip" text="client" />

获取胸部拉伸


#### Returns

`number`

值

___

### getBreastVerticalPosition <Score text="getBreastVerticalPosition" /> 

• **getBreastVerticalPosition**(): `number` <Badge type="tip" text="client" />

调整胸部上下位置


#### Returns

`number`

值

___

### getBrowGap <Score text="getBrowGap" /> 

• **getBrowGap**(): `number` <Badge type="tip" text="client" />

获取眉间距


#### Returns

`number`

值

___

### getBrowHeight <Score text="getBrowHeight" /> 

• **getBrowHeight**(): `number` <Badge type="tip" text="client" />

获取眉毛上下移动


#### Returns

`number`

值

___

### getBrowInboardShape <Score text="getBrowInboardShape" /> 

• **getBrowInboardShape**(): `number` <Badge type="tip" text="client" />

获取眉毛内侧角度


#### Returns

`number`

值

___

### getBrowOutsideShape <Score text="getBrowOutsideShape" /> 

• **getBrowOutsideShape**(): `number` <Badge type="tip" text="client" />

获取眉毛外侧形状


#### Returns

`number`

值

___

### getBrowRotation <Score text="getBrowRotation" /> 

• **getBrowRotation**(): `number` <Badge type="tip" text="client" />

获取眉毛角度


#### Returns

`number`

值

___

### getCanthusHorizontalPosition <Score text="getCanthusHorizontalPosition" /> 

• **getCanthusHorizontalPosition**(): `number` <Badge type="tip" text="client" />

获取眼角左右移动


#### Returns

`number`

值

___

### getCanthusVerticalPosition <Score text="getCanthusVerticalPosition" /> 

• **getCanthusVerticalPosition**(): `number` <Badge type="tip" text="client" />

获取外眼角上下移动


#### Returns

`number`

值

___

### getCharacterHeight <Score text="getCharacterHeight" /> 

• **getCharacterHeight**(): `number` <Badge type="tip" text="client" />

获取角色身高


#### Returns

`number`

值

___

### getCheekBoneRange <Score text="getCheekBoneRange" /> 

• **getCheekBoneRange**(): `number` <Badge type="tip" text="client" />

获取颧骨前后移动


#### Returns

`number`

值

___

### getCheekBoneWidth <Score text="getCheekBoneWidth" /> 

• **getCheekBoneWidth**(): `number` <Badge type="tip" text="client" />

获取颧骨横向宽度


#### Returns

`number`

值

___

### getCheekHeight <Score text="getCheekHeight" /> 

• **getCheekHeight**(): `number` <Badge type="tip" text="client" />

获取脸颊上下移动


#### Returns

`number`

值

___

### getCheekRange <Score text="getCheekRange" /> 

• **getCheekRange**(): `number` <Badge type="tip" text="client" />

获取脸颊前后移动


#### Returns

`number`

值

___

### getCheekWidth <Score text="getCheekWidth" /> 

• **getCheekWidth**(): `number` <Badge type="tip" text="client" />

获取脸颊宽度


#### Returns

`number`

值

___

### getEarRoll <Score text="getEarRoll" /> 

• **getEarRoll**(): `number` <Badge type="tip" text="client" />

调整耳朵左右旋转


#### Returns

`number`

值

___

### getEarScale <Score text="getEarScale" /> 

• **getEarScale**(): `number` <Badge type="tip" text="client" />

调整耳朵大小


#### Returns

`number`

值

___

### getEarYaw <Score text="getEarYaw" /> 

• **getEarYaw**(): `number` <Badge type="tip" text="client" />

调整耳朵前后旋转


#### Returns

`number`

值

___

### getEyesGap <Score text="getEyesGap" /> 

• **getEyesGap**(): `number` <Badge type="tip" text="client" />

获取眼睛间距


#### Returns

`number`

值

___

### getEyesHeight <Score text="getEyesHeight" /> 

• **getEyesHeight**(): `number` <Badge type="tip" text="client" />

获取眼睛上下移动


#### Returns

`number`

值

___

### getEyesLength <Score text="getEyesLength" /> 

• **getEyesLength**(): `number` <Badge type="tip" text="client" />

眼睛长度


#### Returns

`number`

值

___

### getEyesRange <Score text="getEyesRange" /> 

• **getEyesRange**(): `number` <Badge type="tip" text="client" />

获取眼睛前后移动


#### Returns

`number`

值

___

### getEyesRotation <Score text="getEyesRotation" /> 

• **getEyesRotation**(): `number` <Badge type="tip" text="client" />

获取眼睛角度


#### Returns

`number`

值

___

### getEyesWidth <Score text="getEyesWidth" /> 

• **getEyesWidth**(): `number` <Badge type="tip" text="client" />

获取眼睛左右宽度


#### Returns

`number`

值

___

### getFaceWidth <Score text="getFaceWidth" /> 

• **getFaceWidth**(): `number` <Badge type="tip" text="client" />

调整头部整体宽度


#### Returns

`number`

值

___

### getGroinThickness <Score text="getGroinThickness" /> 

• **getGroinThickness**(): `number` <Badge type="tip" text="client" />

获取胯宽度前后


#### Returns

`number`

值

___

### getGroinWidth <Score text="getGroinWidth" /> 

• **getGroinWidth**(): `number` <Badge type="tip" text="client" />

获取胯宽度左右


#### Returns

`number`

值

___

### getHeadScale <Score text="getHeadScale" /> 

• **getHeadScale**(): `number` <Badge type="tip" text="client" />

获取角色头部大小

**`Effect`**



#### Returns

`number`

值

___

### getJawLength <Score text="getJawLength" /> 

• **getJawLength**(): `number` <Badge type="tip" text="client" />

调整下巴长度


#### Returns

`number`

值

___

### getJawRange <Score text="getJawRange" /> 

• **getJawRange**(): `number` <Badge type="tip" text="client" />

调整下巴前后移动


#### Returns

`number`

值

___

### getJawSmooth <Score text="getJawSmooth" /> 

• **getJawSmooth**(): `number` <Badge type="tip" text="client" />

调整下巴圆度


#### Returns

`number`

值

___

### getJawVertexHeight <Score text="getJawVertexHeight" /> 

• **getJawVertexHeight**(): `number` <Badge type="tip" text="client" />

调整下巴尖上下移动


#### Returns

`number`

值

___

### getJawVertexRange <Score text="getJawVertexRange" /> 

• **getJawVertexRange**(): `number` <Badge type="tip" text="client" />

调整下巴尖前后移动


#### Returns

`number`

值

___

### getJawVertexWidth <Score text="getJawVertexWidth" /> 

• **getJawVertexWidth**(): `number` <Badge type="tip" text="client" />

调整下巴尖宽度


#### Returns

`number`

值

___

### getLowerArmsStretch <Score text="getLowerArmsStretch" /> 

• **getLowerArmsStretch**(): `number` <Badge type="tip" text="client" />

获取小臂的拉伸


#### Returns

`number`

值

___

### getLowerArmsThickness <Score text="getLowerArmsThickness" /> 

• **getLowerArmsThickness**(): `number` <Badge type="tip" text="client" />

获取小臂前后方向的宽度


#### Returns

`number`

值

___

### getLowerArmsWidth <Score text="getLowerArmsWidth" /> 

• **getLowerArmsWidth**(): `number` <Badge type="tip" text="client" />

获取小臂左右方向的宽度


#### Returns

`number`

值

___

### getLowerFaceRange <Score text="getLowerFaceRange" /> 

• **getLowerFaceRange**(): `number` <Badge type="tip" text="client" />

获取下半脸前后


#### Returns

`number`

值

___

### getLowerFaceWidth <Score text="getLowerFaceWidth" /> 

• **getLowerFaceWidth**(): `number` <Badge type="tip" text="client" />

获取下半脸的宽度


#### Returns

`number`

值

___

### getLowerJawRange <Score text="getLowerJawRange" /> 

• **getLowerJawRange**(): `number` <Badge type="tip" text="client" />

调整下颚骨前后移动


#### Returns

`number`

值

___

### getLowerJawWidth <Score text="getLowerJawWidth" /> 

• **getLowerJawWidth**(): `number` <Badge type="tip" text="client" />

调整下颚骨宽度


#### Returns

`number`

值

___

### getLowerMouthThickness <Score text="getLowerMouthThickness" /> 

• **getLowerMouthThickness**(): `number` <Badge type="tip" text="client" />

获取下嘴唇薄厚


#### Returns

`number`

值

___

### getLowerStretch <Score text="getLowerStretch" /> 

• **getLowerStretch**(): `number` <Badge type="tip" text="client" />

调整耳朵下部拉伸


#### Returns

`number`

值

___

### getMouthHeight <Score text="getMouthHeight" /> 

• **getMouthHeight**(): `number` <Badge type="tip" text="client" />

获取嘴巴上下位置


#### Returns

`number`

值

___

### getMouthRange <Score text="getMouthRange" /> 

• **getMouthRange**(): `number` <Badge type="tip" text="client" />

获取嘴巴前后移动


#### Returns

`number`

值

___

### getMouthShape <Score text="getMouthShape" /> 

• **getMouthShape**(): `number` <Badge type="tip" text="client" />

调整嘴巴形状


#### Returns

`number`

值

___

### getMouthWidth <Score text="getMouthWidth" /> 

• **getMouthWidth**(): `number` <Badge type="tip" text="client" />

获取嘴巴宽度


#### Returns

`number`

值

___

### getNeckStretch <Score text="getNeckStretch" /> 

• **getNeckStretch**(): `number` <Badge type="tip" text="client" />

获取脖子拉伸


#### Returns

`number`

值

___

### getNeckThickness <Score text="getNeckThickness" /> 

• **getNeckThickness**(): `number` <Badge type="tip" text="client" />

获取脖子前后的宽度


#### Returns

`number`

值

___

### getNeckWidth <Score text="getNeckWidth" /> 

• **getNeckWidth**(): `number` <Badge type="tip" text="client" />

调整脖子的左右宽度


#### Returns

`number`

值

___

### getNoseHeight <Score text="getNoseHeight" /> 

• **getNoseHeight**(): `number` <Badge type="tip" text="client" />

获取鼻梁高度


#### Returns

`number`

值

___

### getNoseProtrusion <Score text="getNoseProtrusion" /> 

• **getNoseProtrusion**(): `number` <Badge type="tip" text="client" />

获取鼻尖长度


#### Returns

`number`

值

___

### getNoseVerticalPosition <Score text="getNoseVerticalPosition" /> 

• **getNoseVerticalPosition**(): `number` <Badge type="tip" text="client" />

获取鼻子上下移动


#### Returns

`number`

值

___

### getPupilHeight <Score text="getPupilHeight" /> 

• **getPupilHeight**(): `number` <Badge type="tip" text="client" />

获取瞳孔高度


#### Returns

`number`

值

___

### getPupilHorizontalPosition <Score text="getPupilHorizontalPosition" /> 

• **getPupilHorizontalPosition**(): `number` <Badge type="tip" text="client" />

获取瞳孔左右位置


#### Returns

`number`

值

___

### getPupilVerticalPosition <Score text="getPupilVerticalPosition" /> 

• **getPupilVerticalPosition**(): `number` <Badge type="tip" text="client" />

获取瞳孔上下位置


#### Returns

`number`

值

___

### getPupilWidth <Score text="getPupilWidth" /> 

• **getPupilWidth**(): `number` <Badge type="tip" text="client" />

获取瞳孔宽度


#### Returns

`number`

值

___

### getRibThickness <Score text="getRibThickness" /> 

• **getRibThickness**(): `number` <Badge type="tip" text="client" />

获取肋骨的前后宽度


#### Returns

`number`

值

___

### getRibWidth <Score text="getRibWidth" /> 

• **getRibWidth**(): `number` <Badge type="tip" text="client" />

获取肋骨的左右宽度


#### Returns

`number`

值

___

### getShankScaleX <Score text="getShankScaleX" /> 

• **getShankScaleX**(): `number` <Badge type="tip" text="client" />

获取小腿粗细左右


#### Returns

`number`

值

___

### getShankScaleZ <Score text="getShankScaleZ" /> 

• **getShankScaleZ**(): `number` <Badge type="tip" text="client" />

获取小腿粗细前后


#### Returns

`number`

值

___

### getShankStretch <Score text="getShankStretch" /> 

• **getShankStretch**(): `number` <Badge type="tip" text="client" />

获取小腿拉伸


#### Returns

`number`

值

___

### getShoulderArmThickness <Score text="getShoulderArmThickness" /> 

• **getShoulderArmThickness**(): `number` <Badge type="tip" text="client" />

获取肩膀的前后宽度


#### Returns

`number`

值

___

### getShoulderArmWidth <Score text="getShoulderArmWidth" /> 

• **getShoulderArmWidth**(): `number` <Badge type="tip" text="client" />

获取肩膀的左右宽度


#### Returns

`number`

值

___

### getShoulderThickness <Score text="getShoulderThickness" /> 

• **getShoulderThickness**(): `number` <Badge type="tip" text="client" />

获取肩膀的前后宽度


#### Returns

`number`

值

___

### getShoulderWidth <Score text="getShoulderWidth" /> 

• **getShoulderWidth**(): `number` <Badge type="tip" text="client" />

获取肩膀的宽度


#### Returns

`number`

值

___

### getThighStretch <Score text="getThighStretch" /> 

• **getThighStretch**(): `number` <Badge type="tip" text="client" />

获取大腿拉伸


#### Returns

`number`

值

___

### getThighThicknessX <Score text="getThighThicknessX" /> 

• **getThighThicknessX**(): `number` <Badge type="tip" text="client" />

获取大腿粗细左右


#### Returns

`number`

值

___

### getThighThicknessZ <Score text="getThighThicknessZ" /> 

• **getThighThicknessZ**(): `number` <Badge type="tip" text="client" />

获取大腿粗细前后


#### Returns

`number`

值

___

### getUpperArmsStretch <Score text="getUpperArmsStretch" /> 

• **getUpperArmsStretch**(): `number` <Badge type="tip" text="client" />

获取大臂的拉伸


#### Returns

`number`

值

___

### getUpperArmsThickness <Score text="getUpperArmsThickness" /> 

• **getUpperArmsThickness**(): `number` <Badge type="tip" text="client" />

获取大臂前后方向的宽度


#### Returns

`number`

值

___

### getUpperArmsWidth <Score text="getUpperArmsWidth" /> 

• **getUpperArmsWidth**(): `number` <Badge type="tip" text="client" />

获取大臂左右方向的宽度


#### Returns

`number`

值

___

### getUpperFaceRange <Score text="getUpperFaceRange" /> 

• **getUpperFaceRange**(): `number` <Badge type="tip" text="client" />

调整上半脸前后移动


#### Returns

`number`

值

___

### getUpperMouthThickness <Score text="getUpperMouthThickness" /> 

• **getUpperMouthThickness**(): `number` <Badge type="tip" text="client" />

获取上嘴唇薄厚


#### Returns

`number`

值

___

### getUpperStretch <Score text="getUpperStretch" /> 

• **getUpperStretch**(): `number` <Badge type="tip" text="client" />

调整耳朵上部拉伸


#### Returns

`number`

值

___

### getWaistStretch <Score text="getWaistStretch" /> 

• **getWaistStretch**(): `number` <Badge type="tip" text="client" />

获取腰部拉伸


#### Returns

`number`

值

___

### getWaistThickness <Score text="getWaistThickness" /> 

• **getWaistThickness**(): `number` <Badge type="tip" text="client" />

获取腰的前后宽度


#### Returns

`number`

值

___

### getWaistWidth <Score text="getWaistWidth" /> 

• **getWaistWidth**(): `number` <Badge type="tip" text="client" />

获取腰的左右宽度


#### Returns

`number`

值

___

### setBreastHorizontalPosition <Score text="setBreastHorizontalPosition" /> 

• **setBreastHorizontalPosition**(`value`, `sync`): `void` 

调整胸部左右位置

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBreastLength <Score text="setBreastLength" /> 

• **setBreastLength**(`value`, `sync`): `void` 

调整胸部长度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBreastScale <Score text="setBreastScale" /> 

• **setBreastScale**(`value`, `sync`): `void` 

调整胸部整体大小；

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBreastStretch <Score text="setBreastStretch" /> 

• **setBreastStretch**(`value`, `sync`): `void` 

设置胸部拉伸

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBreastVerticalPosition <Score text="setBreastVerticalPosition" /> 

• **setBreastVerticalPosition**(`value`, `sync`): `void` 

调整胸部上下位置

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效
 *

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBrowGap <Score text="setBrowGap" /> 

• **setBrowGap**(`value`, `sync`): `void` 

设置眉间距

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBrowHeight <Score text="setBrowHeight" /> 

• **setBrowHeight**(`value`, `sync`): `void` 

设置眉毛上下移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBrowInboardShape <Score text="setBrowInboardShape" /> 

• **setBrowInboardShape**(`value`, `sync`): `void` 

设置眉毛内侧角度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBrowOutsideShape <Score text="setBrowOutsideShape" /> 

• **setBrowOutsideShape**(`value`, `sync`): `void` 

设置眉毛外侧形状

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBrowRotation <Score text="setBrowRotation" /> 

• **setBrowRotation**(`value`, `sync`): `void` 

设置眉毛角度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setCanthusHorizontalPosition <Score text="setCanthusHorizontalPosition" /> 

• **setCanthusHorizontalPosition**(`value`, `sync`): `void` 

设置眼角左右移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setCanthusVerticalPosition <Score text="setCanthusVerticalPosition" /> 

• **setCanthusVerticalPosition**(`value`, `sync`): `void` 

设置外眼角上下移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setCharacterHeight <Score text="setCharacterHeight" /> 

• **setCharacterHeight**(`value`, `sync`): `void` 

设置角色身高

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setCheekBoneRange <Score text="setCheekBoneRange" /> 

• **setCheekBoneRange**(`value`, `sync`): `void` 

设置颧骨前后移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setCheekBoneWidth <Score text="setCheekBoneWidth" /> 

• **setCheekBoneWidth**(`value`, `sync`): `void` 

设置颧骨横向宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setCheekHeight <Score text="setCheekHeight" /> 

• **setCheekHeight**(`value`, `sync`): `void` 

设置脸颊上下移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setCheekRange <Score text="setCheekRange" /> 

• **setCheekRange**(`value`, `sync`): `void` 

设置脸颊前后移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setCheekWidth <Score text="setCheekWidth" /> 

• **setCheekWidth**(`value`, `sync`): `void` 

设置脸颊宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setEarRoll <Score text="setEarRoll" /> 

• **setEarRoll**(`value`, `sync`): `void` 

调整耳朵左右旋转

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setEarScale <Score text="setEarScale" /> 

• **setEarScale**(`value`, `sync`): `void` 

调整耳朵大小

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setEarYaw <Score text="setEarYaw" /> 

• **setEarYaw**(`value`, `sync`): `void` 

调整耳朵前后旋转

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setEyesGap <Score text="setEyesGap" /> 

• **setEyesGap**(`value`, `sync`): `void` 

设置眼睛间距

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setEyesHeight <Score text="setEyesHeight" /> 

• **setEyesHeight**(`value`, `sync`): `void` 

设置眼睛上下移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setEyesLength <Score text="setEyesLength" /> 

• **setEyesLength**(`value`, `sync`): `void` 

眼睛长度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setEyesRange <Score text="setEyesRange" /> 

• **setEyesRange**(`value`, `sync`): `void` 

设置眼睛前后移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setEyesRotation <Score text="setEyesRotation" /> 

• **setEyesRotation**(`value`, `sync`): `void` 

设置眼睛角度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setEyesWidth <Score text="setEyesWidth" /> 

• **setEyesWidth**(`value`, `sync`): `void` 

设置眼睛左右宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setFaceWidth <Score text="setFaceWidth" /> 

• **setFaceWidth**(`value`, `sync`): `void` 

调整头部整体宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setGroinThickness <Score text="setGroinThickness" /> 

• **setGroinThickness**(`value`, `sync`): `void` 

设置胯宽度前后

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setGroinWidth <Score text="setGroinWidth" /> 

• **setGroinWidth**(`value`, `sync`): `void` 

设置胯宽度左右

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setHeadScale <Score text="setHeadScale" /> 

• **setHeadScale**(`value`, `sync`): `void`  

设置角色头部大小


::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setJawLength <Score text="setJawLength" /> 

• **setJawLength**(`value`, `sync`): `void` 

调整下巴长度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setJawRange <Score text="setJawRange" /> 

• **setJawRange**(`value`, `sync`): `void` 

调整下巴前后移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setJawSmooth <Score text="setJawSmooth" /> 

• **setJawSmooth**(`value`, `sync`): `void` 

调整下巴圆度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setJawVertexHeight <Score text="setJawVertexHeight" /> 

• **setJawVertexHeight**(`value`, `sync`): `void` 

调整下巴尖上下移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setJawVertexRange <Score text="setJawVertexRange" /> 

• **setJawVertexRange**(`value`, `sync`): `void` 

调整下巴尖前后移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setJawVertexWidth <Score text="setJawVertexWidth" /> 

• **setJawVertexWidth**(`value`, `sync`): `void` 

调整下巴尖宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setLowerArmsStretch <Score text="setLowerArmsStretch" /> 

• **setLowerArmsStretch**(`value`, `sync`): `void` 

设置小臂的拉伸

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setLowerArmsThickness <Score text="setLowerArmsThickness" /> 

• **setLowerArmsThickness**(`value`, `sync`): `void` 

设置小臂前后方向的宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setLowerArmsWidth <Score text="setLowerArmsWidth" /> 

• **setLowerArmsWidth**(`value`, `sync`): `void` 

设置小臂左右方向的宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setLowerFaceRange <Score text="setLowerFaceRange" /> 

• **setLowerFaceRange**(`value`, `sync`): `void` 

设置下半脸前后

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setLowerFaceWidth <Score text="setLowerFaceWidth" /> 

• **setLowerFaceWidth**(`value`, `sync`): `void` 

设置下半脸的宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setLowerJawRange <Score text="setLowerJawRange" /> 

• **setLowerJawRange**(`value`, `sync`): `void` 

调整下颚骨前后移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setLowerJawWidth <Score text="setLowerJawWidth" /> 

• **setLowerJawWidth**(`value`, `sync`): `void` 

调整下颚骨宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setLowerMouthThickness <Score text="setLowerMouthThickness" /> 

• **setLowerMouthThickness**(`value`, `sync`): `void` 

设置下嘴唇薄厚

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setLowerStretch <Score text="setLowerStretch" /> 

• **setLowerStretch**(`value`, `sync`): `void` 

调整耳朵下部拉伸

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setMouthHeight <Score text="setMouthHeight" /> 

• **setMouthHeight**(`value`, `sync`): `void` 

设置嘴巴上下位置

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setMouthRange <Score text="setMouthRange" /> 

• **setMouthRange**(`value`, `sync`): `void` 

设置嘴巴前后移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setMouthShape <Score text="setMouthShape" /> 

• **setMouthShape**(`value`, `sync`): `void` 

调整嘴巴形状

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setMouthWidth <Score text="setMouthWidth" /> 

• **setMouthWidth**(`value`, `sync`): `void` 

设置嘴巴宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setNeckStretch <Score text="setNeckStretch" /> 

• **setNeckStretch**(`value`, `sync`): `void` 

设置脖子拉伸

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setNeckThickness <Score text="setNeckThickness" /> 

• **setNeckThickness**(`value`, `sync`): `void` 

设置脖子前后的宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setNeckWidth <Score text="setNeckWidth" /> 

• **setNeckWidth**(`value`, `sync`): `void` 

调整脖子的左右宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setNoseHeight <Score text="setNoseHeight" /> 

• **setNoseHeight**(`value`, `sync`): `void` 

设置鼻梁高度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setNoseProtrusion <Score text="setNoseProtrusion" /> 

• **setNoseProtrusion**(`value`, `sync`): `void` 

设置鼻尖长度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setNoseVerticalPosition <Score text="setNoseVerticalPosition" /> 

• **setNoseVerticalPosition**(`value`, `sync`): `void` 

设置鼻子上下移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setPupilHeight <Score text="setPupilHeight" /> 

• **setPupilHeight**(`value`, `sync`): `void` 

设置瞳孔高度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setPupilHorizontalPosition <Score text="setPupilHorizontalPosition" /> 

• **setPupilHorizontalPosition**(`value`, `sync`): `void` 

设置瞳孔左右位置

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setPupilVerticalPosition <Score text="setPupilVerticalPosition" /> 

• **setPupilVerticalPosition**(`value`, `sync`): `void` 

设置瞳孔上下位置

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setPupilWidth <Score text="setPupilWidth" /> 

• **setPupilWidth**(`value`, `sync`): `void` 

设置瞳孔宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setRibThickness <Score text="setRibThickness" /> 

• **setRibThickness**(`value`, `sync`): `void` 

设置肋骨的前后宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setRibWidth <Score text="setRibWidth" /> 

• **setRibWidth**(`value`, `sync`): `void` 

设置肋骨的左右宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setShankScaleX <Score text="setShankScaleX" /> 

• **setShankScaleX**(`value`, `sync`): `void` 

设置小腿粗细左右

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setShankScaleZ <Score text="setShankScaleZ" /> 

• **setShankScaleZ**(`value`, `sync`): `void` 

设置小腿粗细前后

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setShankStretch <Score text="setShankStretch" /> 

• **setShankStretch**(`value`, `sync`): `void` 

设置小腿拉伸

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setShoulderArmThickness <Score text="setShoulderArmThickness" /> 

• **setShoulderArmThickness**(`value`, `sync`): `void` 

设置肩膀的前后宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setShoulderArmWidth <Score text="setShoulderArmWidth" /> 

• **setShoulderArmWidth**(`value`, `sync`): `void` 

设置肩膀的左右宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setShoulderThickness <Score text="setShoulderThickness" /> 

• **setShoulderThickness**(`value`, `sync`): `void` 

设置肩膀的前后宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setShoulderWidth <Score text="setShoulderWidth" /> 

• **setShoulderWidth**(`value`, `sync`): `void` 

设置肩膀的宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setThighStretch <Score text="setThighStretch" /> 

• **setThighStretch**(`value`, `sync`): `void` 

设置大腿拉伸

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setThighThicknessX <Score text="setThighThicknessX" /> 

• **setThighThicknessX**(`value`, `sync`): `void` 

设置大腿粗细左右

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setThighThicknessZ <Score text="setThighThicknessZ" /> 

• **setThighThicknessZ**(`value`, `sync`): `void` 

设置大腿粗细前后

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setUpperArmsStretch <Score text="setUpperArmsStretch" /> 

• **setUpperArmsStretch**(`value`, `sync`): `void` 

设置大臂的拉伸

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setUpperArmsThickness <Score text="setUpperArmsThickness" /> 

• **setUpperArmsThickness**(`value`, `sync`): `void` 

设置大臂前后方向的宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setUpperArmsWidth <Score text="setUpperArmsWidth" /> 

• **setUpperArmsWidth**(`value`, `sync`): `void` 

设置大臂左右方向的宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setUpperFaceRange <Score text="setUpperFaceRange" /> 

• **setUpperFaceRange**(`value`, `sync`): `void` 

调整上半脸前后移动

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setUpperMouthThickness <Score text="setUpperMouthThickness" /> 

• **setUpperMouthThickness**(`value`, `sync`): `void` 

设置上嘴唇薄厚

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setUpperStretch <Score text="setUpperStretch" /> 

• **setUpperStretch**(`value`, `sync`): `void` 

调整耳朵上部拉伸

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setWaistStretch <Score text="setWaistStretch" /> 

• **setWaistStretch**(`value`, `sync`): `void` 

设置腰部拉伸

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setWaistThickness <Score text="setWaistThickness" /> 

• **setWaistThickness**(`value`, `sync`): `void` 

设置腰的前后宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setWaistWidth <Score text="setWaistWidth" /> 

• **setWaistWidth**(`value`, `sync`): `void` 

设置腰的左右宽度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |

