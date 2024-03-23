import { reactive, h } from 'vue'
import { renderIcon } from '../../../utils'
import { icon } from '../../../plugins'
import { RouterLink } from 'vue-router'
import { PageEnum } from '../../../enums/pageEnum'

const { TvOutlineIcon, SquareIcon, HomeIcon, AlbumsIcon } = icon.ionicons5
const { DevicesIcon, CloudServiceManagement, Dashboard, TableSplitIcon,DataTableReferenceIcon } = icon.carbon
const {FileExcelOutlined,FileExcelTwotone,FileExcelFilled}  = icon.antd

export const expandedKeys = () => ['all-project']

export const menuOptionsInit = () => {
    const t = window['$t']
    return reactive([
        {
            label: () =>
                h(
                    RouterLink,
                    {
                        to: {
                            name: PageEnum.BASE_HOME_NAME,
                        }
                    },
                    { default: () => t('global.home') }
                ),
            key: 'go-back-home',
            icon: renderIcon(HomeIcon)
        },
        {
            label: () => h('span', null, { default: () => t('project.project') }),
            key: 'all-project',
            icon: renderIcon(DevicesIcon),
            children: [
                {
                    label: () =>
                        h(
                            RouterLink,
                            {
                                to: {
                                    name: PageEnum.PROJECT_MUSIC_NAME,
                                }
                            },
                            { default: () => t('project.music') }
                        ),
                    key: PageEnum.PROJECT_MUSIC_NAME,
                    icon: renderIcon(TvOutlineIcon)
                },
                {
                    label: () =>
                        h(
                            RouterLink,
                            {
                                to: {
                                    name: 'Test',
                                }
                            },
                            { default: () => '测试' }
                        ),
                    key: 'Test',
                    icon: renderIcon(SquareIcon)
                },
            ]
        }, {
            label: () => h('span', null, { default: () => t('project.admin') }),
            key: 'project-admin',
            icon: renderIcon(CloudServiceManagement),
            children: [
                {
                    label: () =>
                        h(
                            RouterLink,
                            {
                                to: {
                                    name: PageEnum.ADMIN_DASHBOARD_NAME,
                                }
                            },
                            { default: () => t('project.dashboard') }
                        ),
                    key: 'admin-dashboard',
                    icon: renderIcon(Dashboard)
                },
                {
                    label: () => h('span', null, { default: () => t('project.components_demo') }),
                    key: 'components_demo',
                    icon: renderIcon(AlbumsIcon),
                    children: [
                        {
                            label: () => h(
                                RouterLink,
                                {
                                    to: {
                                        name: PageEnum.ADMIN_COMPONENTS_TINYCME_NAME
                                    }
                                },
                                { default: () => t('project.tiny_mce') }
                            ),
                            key: 'tiny_mce'
                        },
                        {
                            label: () => h(
                                RouterLink,
                                {
                                    to: {
                                        name: PageEnum.ADMIN_COMPONENTS_MARKDOWN_NAME
                                    }
                                },
                                { default: () => t('project.markdown') }
                            ),
                            key: 'markdown'
                        },
                        {
                            label: () => h(
                                RouterLink,
                                {
                                    to: {
                                        name: PageEnum.ADMIN_COMPONENTS_SCROLLING_NAME
                                    }
                                },
                                { default: () => t('project.scrolling') }
                            ),
                            key: 'scrolling'
                        },
                    ]
                },
                {
                    label: () => h('span', null, { default: () => t('admin.excel') }),
                    key: 'project-excel',
                    icon: renderIcon(FileExcelOutlined),
                    children:[
                        {
                            label: () =>
                                h(
                                    RouterLink,
                                    {
                                        to: {
                                            name: PageEnum.EXCEL_EXPORT_NAME,
                                        }
                                    },
                                    { default: () => t('admin.export_excel') }
                                ),
                            key: 'export_excel',
                            icon: renderIcon(FileExcelTwotone)
                        },
                        {
                            label: () =>
                                h(
                                    RouterLink,
                                    {
                                        to: {
                                            name: PageEnum.EXCEL_EXPORT_SELECT_NAME,
                                        }
                                    },
                                    { default: () => t('admin.select_excel') }
                                ),
                            key: 'select_excel',
                            icon: renderIcon(FileExcelFilled)
                        },
                        {
                            label: () =>
                                h(
                                    RouterLink,
                                    {
                                        to: {
                                            name: PageEnum.EXCEL_EXPORT_MERGE_NAME,
                                        }
                                    },
                                    { default: () => t('admin.merge_excel') }
                                ),
                            key: 'merge_excel',
                            icon: renderIcon(FileExcelOutlined)
                        },
                        {
                            label: () =>
                                h(
                                    RouterLink,
                                    {
                                        to: {
                                            name: PageEnum.EXCEL_UPLOAD_NAME,
                                        }
                                    },
                                    { default: () => t('admin.upload_excel') }
                                ),
                            key: 'upload_excel',
                            icon: renderIcon(FileExcelTwotone)
                        },
                    ]
                },
                {
                    label: () => h('span', null, { default: () => t('admin.table') }),
                    key: 'project-table',
                    icon: renderIcon(TableSplitIcon),
                    children: [
                        {
                            label: () =>
                                h(
                                    RouterLink,
                                    {
                                        to: {
                                            name: PageEnum.TABLE_DRAG_NAME
                                        }
                                    },
                                    { default: () => t('admin.table_drag') }
                                ),
                            key: 'table_drag',
                            icon: renderIcon(DataTableReferenceIcon)
                        },
                    ]
                }
            ]
        },
    ])
}