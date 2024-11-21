import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Chức năng',
  },
  {
    displayName: 'Danh sách chức năng',
    iconName: 'solar:widget-add-line-duotone',
    route: '/chuc-nang',
  },
  {
    navCap: 'Chi tiết chức năng',
    divider: true
  },
  {
    displayName: 'Môn học',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/chuc-nang/mon-hoc',
  },
  {
    displayName: 'Câu hỏi',
    iconName: 'ri:question-line',
    route: '/chuc-nang/cau-hoi',
  },
  {
    displayName: 'Đề thi',
    iconName: 'healthicons:i-exam-multiple-choice-outline',
    route: '/chuc-nang/de-thi',
  },
  {
    displayName: 'Dev only',
    iconName: 'fluent:window-dev-edit-20-filled',
    route: '/chuc-nang/dev-only',
  },
  {
    displayName: 'Hỗ trợ',
    iconName: 'mdi:support',
    route: '/chuc-nang/ho-tro',
  },
  {
    displayName: 'Cài đặt',
    iconName: 'uil:setting',
    route: '/chuc-nang/cai-dat',
  },
  {
    navCap: 'Xác thực',
    divider: true
  },
  {
    displayName: 'Đăng nhập',
    iconName: 'solar:login-3-line-duotone',
    route: '/xac-thuc/dang-nhap',
  },
  {
    displayName: 'Đăng ký',
    iconName: 'solar:user-plus-rounded-line-duotone',
    route: '/xac-thuc/dang-ky',
  },
  {
    navCap: 'Phần bổ trợ',
    divider: true
  },
  {
    displayName: 'Icons',
    iconName: 'solar:sticker-smile-circle-2-line-duotone',
    route: '/phan-bo-tro/icons',
  },
  {
    displayName: 'Câu hỏi thường gặp',
    iconName: 'solar:planet-3-line-duotone',
    route: '/phan-bo-tro/cau-hoi-thuong-gap',
  },
];
