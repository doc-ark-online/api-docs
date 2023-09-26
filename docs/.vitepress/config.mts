import type { DefaultTheme } from 'metaapp-prodigytech-doc-theme'
import { dealConfigSidebar, dealItem } from '../../utils'
import { defineConfigWithTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  // {
  //   text: 'Index',
  //   collapsible: false,
  //   // collapsed: false,
  //   items: dealItem('groups')
  // },
  {
    text: 'Index',
    items: [
      { text: '介绍', link: '/index.md' },
      { text: '开始使用', link: '/start.md' },
      { text: 'Enums', link: '/enums.md' },
      { text: 'Interfaces', link: '/interfaces.md' },
      { text: 'Classes', link: '/classes.md' }
    ]
  },
  ...[
    // core
    {
      text: 'Core',
      link: '',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'GameObject',
          link: '/classes/mw.GameObject.md',
          collapsed: true, // true 是折叠
          collapsible: true, // true 后面有加减号
          items: [
            {
              text: 'GameObjectInfo',
              link: '/interfaces/mw.GameObjectInfo.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'Scripts',
          link: '/groups/SCRIPTING.SCRIPTING.md',
          collapsed: false,
          collapsible: false
        }
      ]
    },
    //type
    {
      text: 'Type',
      link: '/groups/TYPE.TYPE.md',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'Action',
          link: '/classes/mw.Action.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'Action1',
              link: '/classes/mw.Action1.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'Action2',
              link: '/classes/mw.Action2.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'Action3',
              link: '/classes/mw.Action3.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'Delegate',
          link: '/classes/mw.Delegate.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'MulticastDelegate<T>',
              link: '/classes/mw.MulticastDelegate.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'MulticastGameObjectDelegate',
              link: '/classes/mw.MulticastGameObjectDelegate.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'Transform',
          link: '/classes/mw.Transform.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'Vector',
              link: '/classes/mw.Vector.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'Vector2',
              link: '/classes/mw.Vector2.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'Vector4',
              link: '/classes/mw.Vector4.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'Rotation',
              link: '/classes/mw.Rotation.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'Matrix3x3',
              link: '/classes/mw.Matrix3x3.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'Matrix4x4',
              link: '/classes/mw.Matrix4x4.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'Quaternion',
              link: '/classes/mw.Quaternion.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'Event',
          link: '/classes/mw.Event.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'EventListener',
              link: '/classes/mw.EventListener.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'LinearColor',
          link: '/classes/mw.LinearColor.md',
          collapsed: false,
          collapsible: false
        },
        {
          text: 'Gizmo',
          link: '/classes/mw.Gizmo.md',
          collapsed: false,
          collapsible: false
        }
      ]
    },
    //avatar
    {
      text: 'Avatar',
      link: '/groups/AVATAR.AVATAR.md',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'Pawn',
          link: '/classes/mw.Pawn.md'
        },
        {
          text: 'Character',
          link: '/classes/mw.Character.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'CharacterDecoration',
              link: '/classes/mw.CharacterDecoration.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'CharacterDescription',
              link: '/classes/mw.CharacterDescription.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'Player',
          link: '/classes/mw.Player.md'
        }
      ]
    },
    //animation
    {
      text: 'Animation',
      link: '/groups/ANIMATIONS.ANIMATIONS.md',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'Animation',
          link: '/classes/mw.Animation.md',
          collapsed: false,
          collapsible: false
        },
        {
          text: 'Stance',
          link: '/classes/mw.Stance.md',
          collapsed: false,
          collapsible: false
        },
        {
          text: 'SubStance',
          link: '/classes/mw.SubStance.md',
          collapsed: false,
          collapsible: false
        }
      ]
    },
    //gameplay
    {
      text: 'Gameplay',
      link: '/groups/GAMEPLAY.GAMEPLAY.md',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'HotWeapon',
          link: '/classes/mw.HotWeapon.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'HotWeaponAccuracyOfFireComponent',
              link: '/classes/mw.HotWeaponAccuracyOfFireComponent.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'HotWeaponAimComponent',
              link: '/classes/mw.HotWeaponAimComponent.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'HotWeaponFireComponent',
              link: '/classes/mw.HotWeaponFireComponent.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'HotWeaponLoadComponent',
              link: '/classes/mw.HotWeaponLoadComponent.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'HotWeaponRecoilForceComponent',
              link: '/classes/mw.HotWeaponRecoilForceComponent.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'HotWeaponReloadComponent',
              link: '/classes/mw.HotWeaponReloadComponent.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'AdvancedVehicle',
          link: '/classes/mw.AdvancedVehicle.md'
        },
        {
          text: 'Physics',
          link: '/groups/PHYSICS.PHYSICS.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'Impulse',
              link: '/classes/mw.Impulse.md'
            },
            {
              text: 'IntegratedMover',
              link: '/classes/mw.IntegratedMover.md'
            },
            {
              text: 'PhysicsThruster',
              link: '/classes/mw.PhysicsThruster.md'
            }
          ]
        },
        {
          text: 'Camera',
          link: '/classes/mw.Camera.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'CameraShakeInfo',
              link: '/interfaces/mw.CameraShakeInfo.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'SpringArm',
              link: '/classes/mw.SpringArm.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'Navigation',
          link: '/classes/mw.Navigation.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'NavModifierVolume',
              link: '/classes/mw.NavModifierVolume.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'Model',
          link: '/classes/mw.Model.md',
          collapsed: false,
          collapsible: false
        },
        {
          text: 'ObjectLauncher',
          link: '/classes/mw.ObjectLauncher.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'ProjectileInst ',
              link: '/classes/mw.ProjectileInst.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'ProjectileMovement',
          link: '/classes/mw.ProjectileMovement.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'ProjectileMovementConfig',
              link: '/interfaces/mw.ProjectileMovementConfig.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'Interactor',
          link: '/classes/mw.Interactor.md',
          collapsed: false,
          collapsible: false
        },
        {
          text: 'SwimmingVolume',
          link: '/classes/mw.SwimmingVolume.md',
          collapsed: false,
          collapsible: false
        },
        {
          text: 'Trigger',
          link: '/classes/mw.Trigger.md',
          collapsed: false,
          collapsible: false
        },
        {
          text: 'MaterialInstance',
          link: '/classes/mw.MaterialInstance.md',
          collapsed: false,
          collapsible: false
        }
      ]
    },
    //sence
    {
      text: 'Scene',
      link: '',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'Effect',
          link: '/classes/mw.Effect.md'
        },
        {
          text: 'EffectService',
          link: '/classes/mw.EffectService.md',
          collapsed: false,
          collapsible: false
        },
        {
          text: 'Lighting',
          link: '/classes/mw.Lighting.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'Fog',
              link: '/classes/mw.Fog.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'Lighting',
              link: '/classes/mw.Lighting.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'PostProcess',
              link: '/classes/mw.PostProcess.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'PostProcessConfig',
              link: '/classes/mw.PostProcessConfig.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'Skybox',
              link: '/classes/mw.Skybox.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'Sound',
          link: '/classes/mw.Sound.md'
        },
        {
          text: 'SoundService',
          link: '/classes/mw.SoundService.md',
          collapsed: false,
          collapsible: false
        }
      ]
    },
    //service
    {
      text: 'Service',
      link: '',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'DebugService',
          link: '/classes/mw.DebugService.md'
        },
        {
          text: 'Monetization',
          link: '',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'AdsService',
              link: '/classes/mw.AdsService.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'PurchaseService',
              link: '/classes/mw.PurchaseService.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'Social',
          link: '',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'AccountService',
              link: '/classes/mw.AccountService.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'ChatService',
              link: '/classes/mw.ChatService.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'RoomService',
              link: '/classes/mw.RoomService.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'RouteService',
              link: '/classes/mw.RouteService.md',
              collapsed: false,
              collapsible: false
            }
          ]
        }
      ]
    },
    //settings
    {
      text: 'Settings',
      link: '/groups/SETTINGS.SETTINGS.md',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'AvatarSettings',
          link: '/classes/mw.AvatarSettings.md'
        },
        {
          text: 'EnvironmentSettings',
          link: '/classes/mw.EnvironmentSettings.md',
          collapsed: false,
          collapsible: false
        },
        {
          text: 'GraphicsSettings',
          link: '/classes/mw.GraphicsSettings.md',
          collapsed: false,
          collapsible: false
        },
        {
          text: 'RoomSettings',
          link: '/classes/mw.RoomSettings.md',
          collapsed: false,
          collapsible: false
        },
        {
          text: 'ScriptingSettings',
          link: '/classes/mw.ScriptingSettings.md',
          collapsed: false,
          collapsible: false
        }
      ]
    },
    //data
    {
      text: 'Data',
      link: '/groups/DATA.DATA.md',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'DataStorage',
          link: '/classes/mw.DataStorage.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'DataStorageResult',
              link: '/interfaces/mw.DataStorageResult.md',
              collapsed: false,
              collapsible: false
            }
          ]
        }
      ]
    },
    //input
    {
      text: 'Input',
      link: '/groups/INPUT.INPUT.md',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'InputUtil',
          link: '/classes/mw.InputUtil.md'
        },
        {
          text: 'GestureDelegate',
          link: '/classes/mw.GestureDelegate.md'
        },
        {
          text: 'ConvertScreenResult ',
          link: '/classes/mw.ConvertScreenResult.md'
        }
      ]
    },
    //utility
    {
      text: 'Utility',
      link: '/groups/UTILITY.UTILITY.md',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'AssetUtil',
          link: '/classes/mw.AssetUtil.md'
        },
        {
          text: 'MathUtil',
          link: '/classes/mw.MathUtil.md'
        },
        {
          text: 'QueryUtil ',
          link: '/classes/mw.QueryUtil.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'HitResult',
              link: '/classes/mw.HitResult.md'
            }
          ]
        },
        {
          text: 'ScreenUtil ',
          link: '/classes/mw.ScreenUtil.md'
        },
        {
          text: 'SelectionUtil',
          link: '/classes/mw.SelectionUtil.md'
        },
        {
          text: 'StringUtil  ',
          link: '/classes/mw.StringUtil.md'
        },
        {
          text: 'SystemUtil',
          link: '/classes/mw.SystemUtil.md'
        },
        {
          text: 'TimeUtil',
          link: '/classes/mw.TimeUtil.md'
        },
        {
          text: 'WindowUtil ',
          link: '/classes/mw.WindowUtil.md'
        },
        {
          text: 'TweenUtil ',
          link: '/classes/mw.TweenUtil.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'Tween',
              link: '/classes/mw.Tween.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'TweenGroup',
              link: '/classes/mw.TweenGroup.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'TweenSequence',
              link: '/classes/mw.TweenSequence.md',
              collapsed: false,
              collapsible: false
            }
          ]
        },
        {
          text: 'Localization ',
          link: '',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'LanguageUtil',
              link: '/classes/mw.LanguageUtil.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'LocaleUtil',
              link: '/classes/mw.LocaleUtil.md',
              collapsed: false,
              collapsible: false
            }
          ]
        }
      ]
    },
    //UI
    {
      text: 'UI',
      link: '/groups/UI.UI.md',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'Widget ',
          link: '/classes/mw.Widget.md',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'ColorPick',
              link: '/classes/mw.ColorPick.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'Image',
              link: '/classes/mw.Image.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'InputBox',
              link: '/classes/mw.InputBox.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'MaskButton',
              link: '/classes/mw.MaskButton.md'
            },
            {
              text: 'PanelWidget',
              link: '/classes/mw.PanelWidget.md',
              collapsed: true,
              collapsible: true,
              items: [
                {
                  text: 'Button',
                  link: '/classes/mw.Button.md',
                  collapsed: false,
                  collapsible: false
                },
                {
                  text: 'Canvas',
                  link: '/classes/mw.Canvas.md',
                  collapsed: false,
                  collapsible: false
                },
                {
                  text: 'ScrollBox',
                  link: '/classes/mw.ScrollBox.md',
                  collapsed: false,
                  collapsible: false
                }
              ]
            },
            {
              text: 'ProgressBar',
              link: '/classes/mw.ProgressBar.md'
            },
            {
              text: 'StaleButton',
              link: '/classes/mw.StaleButton.md'
            },
            {
              text: 'TextBlock',
              link: '/classes/mw.TextBlock.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'TouchPad',
              link: '/classes/mw.TouchPad.md',
              collapsed: false,
              collapsible: false
            },
            {
              text: 'UserWidget',
              link: '/classes/mw.UserWidget.md',
              collapsed: true,
              collapsible: true,
              items: [
                {
                  text: 'UserWidgetPrefab',
                  link: '/classes/mw.UserWidgetPrefab.md',
                  collapsed: false,
                  collapsible: false
                }
              ]
            },
            {
              text: 'VirtualJoystickPanel',
              link: '/classes/mw.VirtualJoystickPanel.md'
            }
          ]
        },
        {
          text: 'AssetIconData',
          link: '/classes/mw.AssetIconData.md'
        },
        {
          text: 'CharacterEvent',
          link: '/classes/mw.CharacterEvent.md'
        },
        {
          text: 'DragDropOperation ',
          link: '/classes/mw.DragDropOperation.md'
        },
        {
          text: 'DragDropPayLoad',
          link: '/classes/mw.DragDropPayLoad.md'
        },
        {
          text: 'EventReply  ',
          link: '/classes/mw.EventReply.md'
        },
        {
          text: 'Geometry',
          link: '/classes/mw.Geometry.md'
        },
        {
          text: 'InputEvent',
          link: '/classes/mw.InputEvent.md'
        },
        {
          text: 'JoystickStyleDesigner ',
          link: '/classes/mw.JoystickStyleDesigner.md'
        },
        {
          text: 'KeyEvent ',
          link: '/classes/mw.KeyEvent.md'
        },
        {
          text: 'Margin ',
          link: '/classes/mw.Margin.md'
        },
        {
          text: 'PointerEvent ',
          link: '/classes/mw.PointerEvent.md'
        },
        {
          text: 'SlateBrushWithGuid ',
          link: '/classes/mw.SlateBrushWithGuid.md'
        },
        {
          text: 'SlateColor ',
          link: '/classes/mw.SlateColor.md'
        },
        {
          text: 'StaleButton ',
          link: '/classes/mw.StaleButton.md'
        },
        {
          text: 'TabGroup<T> ',
          link: '/classes/mw.TabGroup.md'
        },
        {
          text: 'UIChildCollation ',
          link: '/classes/mw.UIChildCollation.md'
        },
        {
          text: 'UIConstraintAnchors ',
          link: '/classes/mw.UIConstraintAnchors.md'
        },
        {
          text: 'UIFontInfo ',
          link: '/classes/mw.UIFontInfo.md'
        },
        {
          text: 'UIHugContent ',
          link: '/classes/mw.UIHugContent.md'
        },
        {
          text: 'UILayout ',
          link: '/classes/mw.UILayout.md'
        },
        {
          text: 'UIObject ',
          link: '/classes/mw.UIObject.md'
        },
        {
          text: 'UIScript ',
          link: '/classes/mw.UIScript.md'
        },
        {
          text: 'UIService ',
          link: '/classes/mw.UIService.md'
        },
        {
          text: 'UITransform ',
          link: '/classes/mw.UITransform.md'
        },
        {
          text: 'UIWidget ',
          link: '/classes/mw.UIWidget.md'
        },
        {
          text: 'VirtualJoystickPanel ',
          link: '/classes/mw.VirtualJoystickPanel.md'
        }
      ]
    },
    //Extension
    {
      text: 'Extextion',
      link: '/groups/EXTENSION.EXTENSION.md',
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: 'BaseView',
          link: '/classes/mwext.BaseView.md'
        },
        {
          text: 'BasePanel',
          link: '/classes/mwext.BasePanel.md'
        },
        {
          text: 'DataCenterC ',
          link: '/classes/mwext.DataCenterC.md'
        },
        {
          text: 'DataCenterS ',
          link: '/classes/mwext.DataCenterS.md'
        },
        {
          text: 'GameObjPool ',
          link: '/classes/mwext.GameObjPool.md'
        },
        {
          text: 'LeaderboardItemPanelBase ',
          link: '/classes/mwext.LeaderboardItemPanelBase.md'
        },
        {
          text: 'LeaderboardMainPanelBase ',
          link: '/classes/mwext.LeaderboardMainPanelBase.md'
        },
        {
          text: 'LeaderboardModule ',
          link: '/classes/mwext.LeaderboardModule.md'
        },
        {
          text: 'LeaderboardModuleBaseC',
          link: '/classes/mwext.LeaderboardModuleBaseC.md'
        },
        {
          text: 'LeaderboardModuleBaseS',
          link: '/classes/mwext.LeaderboardModuleBaseS.md'
        },
        {
          text: 'ModuleC',
          link: '/classes/mwext.ModuleC.md'
        },
        {
          text: 'ModuleS',
          link: '/classes/mwext.ModuleS.md'
        },
        {
          text: 'ModuleService',
          link: '/classes/mwext.ModuleService.md'
        },
        {
          text: 'ObjPool',
          link: '/classes/mwext.ObjPool.md'
        },
        {
          text: 'Subdata',
          link: '/classes/mwext.Subdata.md'
        }
      ]
    }
  ]
  // ...dealConfigSidebar()
]

export default defineConfigWithTheme<DefaultTheme.Config>({
  ignoreDeadLinks: true,
  title: 'API',
  appearance: false,
  description: '口袋方舟编辑器的API文档',
  // base: "/api-docs/",
  outDir: '../dist',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://wstatic-01-ali.233leyuan.com/xyc/metaverse-docs/tab-logo.png'
      }
    ],
    [
      'script',
      {},
      `
            var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?5629eb7e7272f7af14f1b8ef288c5f57";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
    `
    ]
  ],
  themeConfig: {
    pandora: {
      type: 'api',
      version: '027'
    },
    logo: 'https://wstatic-01-ali.233leyuan.com/xyc/metaverse-docs/kd-logo-black.svg',
    algolia: {
      appId: 'I2PHYUBLCN',
      apiKey: '62ee775311415d26549e0e30fef5aa38',
      indexName: 'api-docs_prodigytech',
      project: {
        active: 'api-docs',
        arr: [
          {
            key: 'api-docs',
            facetFilters: ['tags:api-docs'],
            name: 'API文档'
          },
          {
            key: 'product-docs',
            facetFilters: ['tags:product-docs'],
            name: '产品手册'
          },
          {
            key: 'learning-docs',
            facetFilters: ['tags:learning-docs'],
            name: '教程文档'
          },
          {
            name: '论坛',
            url: 'https://forum.ark.online/search.php?searchsubmit=yes&mod=forum&srchtxt='
          }
        ]
      },
      searchPage: 'https://search.ark.online/#/search'
    },
    feedback: 'https://github.com/prodigytech-doc/api-docs/',
    siteTitle: 'API',
    nav: [
      {
        text: '创作者',
        link: 'https://creator.ark.online/'
      },
      {
        text: '教程',
        link: 'https://learning.ark.online/'
      },
      {
        text: '产品手册',
        link: 'https://docs.ark.online/'
      },
      {
        text: '论坛',
        link: 'https://forum.ark.online/'
      },
      {
        text: '027 版本',
        items: [
          {
            text: '024 版本',
            link: 'https://api-docs-023.ark.online/',
            path: true
          },
          {
            text: '023 版本',
            link: 'https://api-docs-023.ark.online/',
            path: true
          },
          {
            text: '022 版本',
            link: 'https://api-docs-022.ark.online/',
            path: true
          }
        ]
      }
      // {
      //   text: '语言',
      //   items: [
      //     { text: '中文', link: '/item-1' },
      //     { text: '英文', link: '/item-2' }
      //   ]
      // }
    ],
    socialLinks: [
      // { link: 'https://github.com/prodigytech-doc/api-docs', icon: 'github' },
      {
        link: 'https://github.com/prodigytech-doc/api-docs/issues',
        icon: {
          svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="10" fill="#676D77"/>
          <path d="M14.5 15C15.3284 15 16 14.3284 16 13.5V6.5C16 5.67163 15.3284 5 14.5 5H5.49999C4.67163 5 4 5.67163 4 6.5V13.5C4 14.3284 4.67163 15 5.49999 15H7.74998L10.75 18V15H14.5Z" fill="white"/>
          <path d="M10.0003 13.2857C10.3553 13.2857 10.6431 12.9979 10.6431 12.6429C10.6431 12.2878 10.3553 12 10.0003 12C9.64524 12 9.35742 12.2878 9.35742 12.6429C9.35742 12.9979 9.64524 13.2857 10.0003 13.2857Z" fill="#676D77"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19627 6.55985C9.57999 6.4009 10.0022 6.35932 10.4096 6.44035C10.817 6.52137 11.1911 6.72138 11.4848 7.01507C11.7785 7.30876 11.9785 7.68295 12.0596 8.09031C12.1406 8.49767 12.099 8.91991 11.94 9.30363C11.7811 9.68735 11.5119 10.0153 11.1666 10.2461C10.9911 10.3633 10.8 10.4528 10.5999 10.5125V11C10.5999 11.3314 10.3313 11.6 9.9999 11.6C9.66853 11.6 9.3999 11.3314 9.3999 11V10.4C9.3999 9.82145 9.85795 9.47175 10.2371 9.36818C10.3301 9.34278 10.4189 9.30246 10.4999 9.24832C10.6479 9.14942 10.7633 9.00886 10.8314 8.84441C10.8995 8.67996 10.9173 8.499 10.8826 8.32441C10.8479 8.14983 10.7622 7.98947 10.6363 7.8636C10.5104 7.73773 10.3501 7.65201 10.1755 7.61729C10.0009 7.58256 9.81994 7.60038 9.65549 7.6685C9.49103 7.73662 9.35047 7.85198 9.25158 7.99998C9.15269 8.14799 9.0999 8.32199 9.0999 8.49999C9.0999 8.83137 8.83127 9.1 8.4999 9.1C8.16853 9.1 7.8999 8.83137 7.8999 8.49999C7.8999 8.08465 8.02307 7.67864 8.25382 7.3333C8.48457 6.98795 8.81254 6.71879 9.19627 6.55985ZM10.5496 10.5273C10.5496 10.5273 10.5499 10.527 10.5505 10.5268Z" fill="#676D77"/>
          </svg>
          `
        }
      }
    ],
    sidebar,
    outline: [2, 3],
    editLink: {
      pattern:
        'https://github.com/prodigytech-doc/api-docs/tree/release-027/docs/:path',
      text: '编辑'
    },
    lastUpdatedText: 'Updated Date',
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  }
})
