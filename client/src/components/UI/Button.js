import className from 'classnames'

const Button = ({children, primary, secondary, warning, ...rest}) => {
  const classes = className(rest.className, 'btn', {
    'btn--full': primary,
    'btn--outline': secondary,
    'border-yellow bg-yellow text-white': warning,
  })

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  )

}

export default Button;