import './Breadcrumb.scss';
import { Breadcrumbs, Typography, Link, LinkProps } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const breadcrumbNameMap: { [key: string]: string } = {
  'home': 'Trang chủ',
  'subjectmanagement' : 'Quản lý môn học', 
  'subjectmanagement/subject-list': 'Danh sách môn học',
  'privatefile': 'Tệp riêng tư',
  'exambank': 'Ngân hàng đề thi',
  'notify': 'Thông báo',
  'system': 'Cài đặt hệ thống',
};

const LinkRouter = (props: LinkRouterProps) => <Link {...props} component={RouterLink as any} />;

export const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x: any) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `${pathnames.slice(0, index + 1).join('/')}`;
        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
};
