import { ReactComponent as Arrow } from 'assets/images/arrow_down.svg';
import './NienKhoa.scss'
export function NienKhoa() {
  return (
    <section className="nien_khoa">
      <span className="content">Niên khóa</span>
      <span className="custom_select">
        <select id="form-control">
          <option defaultValue={2020-2021}>2020-2021</option>
          <option>2015-2016</option>
          <option>2018-2019</option>
        </select>
        <section className="arrow">
          <Arrow />
        </section>
      </span>
    </section>
  );
}