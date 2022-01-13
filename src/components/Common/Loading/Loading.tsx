import {ReactComponent as Load} from 'assets/images/Loading.svg'

export function Loading() {
  return (
    <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgb(143 143 143 / 50%)', display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
      <Load style={{display: 'flex', alignItems: 'center'}}/>
    </div>
  )
}
