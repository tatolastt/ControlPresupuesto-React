import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

function Header({presupuesto, setPresupuesto, isValid, setIsValid, gastos}) {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValid ? (<ControlPresupuesto 
        presupuesto={presupuesto}
        gastos={gastos}
        /> 
        ) : (<NuevoPresupuesto  
            presupuesto={presupuesto} 
            setPresupuesto={setPresupuesto} 
            setIsValid={setIsValid} />)
        }
    </header>
  )
}

export default Header

