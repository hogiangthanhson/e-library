import './ButtonNoIcon.scss'

export function ButtonNoIcon(props : any) {
  return (
    <button className='button'>
      <span className='button-text'>{props.text}</span>
    </button>
  )
}
