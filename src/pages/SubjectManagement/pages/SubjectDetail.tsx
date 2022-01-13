import { Accordion } from 'components/Common';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SubjectDetail.scss';

export function SubjectDetail() {
  let dataSubject = [
    {
      slug: 'ecommerce',
      courseId: '2020-6A1',
      courseName: 'Thương mại điện tử',
      teacher: 'Lớp học căn bản',
      des: 'Thương mại điện tử, hay còn gọi là e-commerce, e-comm hay EC, là sự mua bán sản phẩm hay dịch vụ trên các hệ thống điện tử như internet và các mạng máy tính',
    },
    {
      slug: 'accounting-principles',
      courseId: '2020-6B1',
      courseName: 'Nguyên lý kế toán',
      teacher: 'Lớp học căn bản',
      des: 'Thương mại điện tử, hay còn gọi là e-commerce, e-comm hay EC, là sự mua bán sản phẩm hay dịch vụ trên các hệ thống điện tử như internet và các mạng máy tính',
    },
    {
      slug: 'information-system',
      courseId: '2020-6C1',
      courseName: 'Hệ thống thông tin',
      teacher: 'Lớp học căn bản',
      des: 'Thương mại điện tử, hay còn gọi là e-commerce, e-comm hay EC, là sự mua bán sản phẩm hay dịch vụ trên các hệ thống điện tử như internet và các mạng máy tính',
    },
    {
      slug: 'commercial-law',
      courseId: '2020-7A1',
      courseName: 'Luật thương mại',
      teacher: 'Lớp học căn bản',
      des: 'Thương mại điện tử, hay còn gọi là e-commerce, e-comm hay EC, là sự mua bán sản phẩm hay dịch vụ trên các hệ thống điện tử như internet và các mạng máy tính',
    },
    {
      slug: 'bank',
      courseId: '2020-6A1',
      courseName: 'Ngân hàng',
      teacher: 'Lớp học căn bản',
      des: 'Thương mại điện tử, hay còn gọi là e-commerce, e-comm hay EC, là sự mua bán sản phẩm hay dịch vụ trên các hệ thống điện tử như internet và các mạng máy tính',
    },
  ];
  let { slug } = useParams();
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    setData(dataSubject);
  }, [slug]);

  if (data) console.log(data);
  return (
    <div>
      {data ? (
        <div className="subject">
          <div className="subject__overview">
            <h2 className="subject__overview-title">Tổng quan</h2>
            <div className="subject__overview-content">
              <div className="col-2" style={{ display: 'flex', marginRight: '64px' }}>
                <div className="col-5">
                  <span className="row menu" style={{ marginBottom: '16px' }}>
                    Mã môn học:
                  </span>
                  <span className="row menu">Môn học:</span>
                </div>
                <div className="col-7">
                  <p className="row content" style={{ marginBottom: '16px' }}>
                    {data.courseId}
                  </p>
                  <p className="row content">{data.courseName}</p>
                </div>
              </div>
              <div className="col-10" style={{ display: 'flex' }}>
                <div className="col-1">
                  <span className="row menu" style={{ marginBottom: '16px' }}>
                    Giảng viên:
                  </span>
                  <span className="row menu">Mô tả:</span>
                </div>
                <div className="col-11">
                  <p className="row content" style={{ marginBottom: '16px' }}>
                    {data.teacher}
                  </p>
                  <p className="row content">{data.des}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="topic">
            <div className="row">
              <h2 className="col-12 topic-title">Danh sách chủ đề</h2>
            </div>
            <div className="row" style={{ marginTop: '32px' }}>
              <Accordion text="Giới thiệu chung về thương mại điện tử" />
            </div>
            <div className="row" style={{ marginTop: '24px' }}>
              <Accordion text="Thương mại điện tử" />
            </div>
            <div className="row" style={{ marginTop: '24px' }}>
              <Accordion text="Thương mại điện tử" />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
