import { ReactComponent as Arrow } from 'assets/images/caret_down.svg';

export function Accordion(prop: any) {
  return (
    <div
      className="col-12"
      style={{
        display: 'flex',
        alignItems: 'center',
        background: '#FFFFFF',
        boxShadow: '4px 4px 25px 4px rgba(154, 202, 245, 0.25)',
        borderRadius: '8px',
      }}
    >
      <Arrow className="col-1" />
      <span className="col-11 sub-header2">{prop.text}</span>
    </div>
  );
}
