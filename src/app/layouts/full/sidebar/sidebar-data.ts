import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Trang chủ',
  },
  {
    displayName: 'Danh sách chức năng',
    iconName: 'solar:widget-add-line-duotone',
    route: '/trang-chu',
  },
  {
    navCap: 'Chức năng',
    divider: true
  },
  {
    displayName: 'Môn học',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/chuc-nang/mon-hoc',
  },
  {
    displayName: 'Câu hỏi',
    iconName: 'solar:danger-circle-line-duotone',
    route: '/chuc-nang/cau-hoi',
  },
  {
    displayName: 'Đề thi',
    iconName: 'solar:bookmark-square-minimalistic-line-duotone',
    route: '/chuc-nang/de-thi',
  },
  {
    displayName: 'Dev only',
    iconName: 'solar:file-text-line-duotone',
    route: '/chuc-nang/dev-only',
  },
  {
    displayName: 'Hỗ trợ',
    iconName: 'solar:text-field-focus-line-duotone',
    route: '/chuc-nang/ho-tro',
  },
  {
    displayName: 'Cài đặt',
    iconName: 'solar:file-text-line-duotone',
    route: '/chuc-nang/cai-dat',
  },
  {
    navCap: 'Xác thực',
    divider: true
  },
  {
    displayName: 'Đăng nhập',
    iconName: 'solar:login-3-line-duotone',
    route: '/authentication/login',
  },
  {
    displayName: 'Đăng ký',
    iconName: 'solar:user-plus-rounded-line-duotone',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
    divider: true
  },
  {
    displayName: 'Icons',
    iconName: 'solar:sticker-smile-circle-2-line-duotone',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'solar:planet-3-line-duotone',
    route: '/extra/sample-page',
  },
];
