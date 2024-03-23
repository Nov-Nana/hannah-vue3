import { PageEnum } from "../../enums/pageEnum";
import { RouteRecordRaw } from "vue-router";

export const MusicRoute: RouteRecordRaw = {
    path: PageEnum.PROJECT_MUSIC, //'/music'
    name: PageEnum.PROJECT_MUSIC_NAME,
    redirect: PageEnum.MUSIC_HOME, // '/music/home'
    component: () => import('../../views/project/muisc/index.vue'),
    meta: {
        title: 'hannah音乐',
        activeMenuName: PageEnum.PROJECT_MUSIC_NAME,
        // noKeepAlive:true
    },
    children: [
        {
            path: PageEnum.MUSIC_HOME,
            name: PageEnum.MUSIC_HOME_NAME,
            redirect: PageEnum.MUSIC_RECOMMEND,
            component: () => import('../../views/project/muisc/musicHome.vue'),
            meta: {
                title: '发现音乐',
                activeMenuName: PageEnum.PROJECT_MUSIC_NAME,
            },
            children: [
                {
                    path: PageEnum.MUSIC_RECOMMEND,
                    name: PageEnum.MUSIC_RECOMMEND_NAME,
                    component: () => import('../../views/project/muisc/musicRecommend.vue'),
                    meta: {
                        title: '个性推荐',
                    }
                },
                {
                    path: PageEnum.MUSIC_SONGLIST,
                    name: PageEnum.MUSIC_SONGLIST_NAME,
                    component: () => import('../../views/project/muisc/musicSongList.vue'),
                    meta: {
                        title: '歌单',
                    }
                },
                {
                    path: PageEnum.MUSIC_QUALITYSONGLIST,
                    name: PageEnum.MUSIC_QUALITYSONGLIST_NAME,
                    component: () => import('../../views/project/muisc/musicHighQualityList.vue'),
                    meta: {
                        title: '精品歌单',
                    }
                },
                {
                    path: PageEnum.MUSIC_SONGLIST_DETAIL,
                    name: PageEnum.MUSIC_SONGLIST_DETAIL_NAME,
                    component: () => import('../../views/project/muisc/musicSongListDetail.vue'),
                    meta: {
                        title: '歌单详情',
                    }
                },
            ]
        },
        {
            path: PageEnum.MUISC_SEARCH,
            name: PageEnum.MUISC_SEARCH_NAME,
            component: () => import('../../views/project/muisc/musicSearch.vue'),
            meta: {
                title: '个性推荐',
                activeMenuName: PageEnum.PROJECT_MUSIC_NAME,
            }
        },
    ]
}

export const AdminRoute: RouteRecordRaw = {
    path: PageEnum.PROJECT_ADMIN,
    name: PageEnum.PROJECT_ADMIN_NAME,
    meta: {
        title: '后台管理'
    },
    children: [
        {
            path: PageEnum.ADMIN_DASHBOARD,
            name: PageEnum.ADMIN_DASHBOARD_NAME,
            component: () => import('../../views/admin/dashboard/index.vue'),
            meta: {
                title: '主页'
            }
        },
        {
            path: PageEnum.ADMIN_COMPONENTS_DEMO,
            name: PageEnum.ADMIN_COMPONENTS_DEMO_NAME,
            meta: {
                title: '组件'
            },
            children: [
                {
                    path: PageEnum.ADMIN_COMPONENTS_TINYCME,
                    name: PageEnum.ADMIN_COMPONENTS_TINYCME_NAME,
                    component: () => import('../../views/admin/components-demo/TinyMCEView.vue'),
                    meta: {
                        title: '富文本'
                    }
                },
                {
                    path: PageEnum.ADMIN_COMPONENTS_MARKDOWN,
                    name: PageEnum.ADMIN_COMPONENTS_MARKDOWN_NAME,
                    component: () => import('../../views/admin/components-demo/MarkDownView.vue'),
                    meta: {
                        title: 'markdown'
                    }
                },
                {
                    path: PageEnum.ADMIN_COMPONENTS_SCROLLING,
                    name: PageEnum.ADMIN_COMPONENTS_SCROLLING_NAME,
                    component: () => import('../../views/admin/components-demo/Scrolling.vue'),
                    meta: {
                        title: 'scrolling'
                    }
                }
            ]
        }, {
            path: PageEnum.PROJECT_EXCEL,
            name: PageEnum.PROJECT_EXCEL_NAME,
            meta: {
                title: 'EXCEL'
            },
            children: [
                {
                    path: PageEnum.EXCEL_EXPORT,
                    name: PageEnum.EXCEL_EXPORT_NAME,
                    component: () => import('../../views/admin/excel/ExportExcel.vue'),
                    meta: {
                        title: '基本导出'
                    }
                },
                {
                    path: PageEnum.EXCEL_EXPORT_SELECT,
                    name: PageEnum.EXCEL_EXPORT_SELECT_NAME,
                    component: () => import('../../views/admin/excel/SelectExcel.vue'),
                    meta: {
                        title: '选中导出'
                    }
                }, 
                {
                    path: PageEnum.EXCEL_EXPORT_MERGE,
                    name: PageEnum.EXCEL_EXPORT_MERGE_NAME,
                    component: () => import('../../views/admin/excel/MergeHeader.vue'),
                    meta: {
                        title: '合并单元头'
                    }
                },
                {
                    path: PageEnum.EXCEL_UPLOAD,
                    name: PageEnum.EXCEL_UPLOAD_NAME,
                    component: () => import('../../views/admin/excel/UploadExcel.vue'),
                    meta: {
                        title: '上传Excel'
                    }
                }
            ]
        },{
            path: PageEnum.PROJECT_TABLE,
            name: PageEnum.PROJECT_TABLE_NAME,
            meta: {
                title: 'Table'
            },
            children:[
                {
                    path: PageEnum.TABLE_DRAG,
                    name: PageEnum.TABLE_DRAG_NAME,
                    component: () => import('../../views/admin/table/DraggableList.vue'),
                    meta: {
                        title: '拖拽表格'
                    }
                },
            ]
        }
    ]
}
export const testRoute: RouteRecordRaw = {
    path: '/test',
    name: 'Test',
    component: () => import('../../views/project/test.vue'),
    meta: {
        title: '项目2',
        activeMenuName: 'Test'
    }
}

