import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as More } from 'assets/images/more_vertical.svg';

export default function SubjectItem(props : any) {
  return (
    <tr className="content">
      <td>{props.courseId}</td>
      <td>
        <Link to={"/subject-list/" + props.slug}>{props.courseName}</Link>
      </td>
      <td>{props.teacher}</td>
      <td>{props.docPending}</td>
      <td className={props.status ? 'active' : 'status'}>{props.status ? 'Đã phê duyệt' : 'Chờ phê duyệt'}</td>
      <td>{props.date}</td>
      <td className="tab">
        <More className="mid-icon" />
        <div className="tab-menu">
          <ul>
            <li>
              <span className="content">Xem trước</span>
            </li>
            <li>
              <span className="content">Đổi tên</span>
            </li>
            <li>
              <span className="content">Tải xuống</span>
            </li>
            <li>
              <span className="content">Xóa</span>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
}
