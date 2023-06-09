import { useState } from 'react'
import Header from './components/header'
import IconNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';
import { generarId} from './helpers';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 300)
  }

  const guardarGasto = gasto => {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);

    setAnimarModal(false);

    setTimeout(() => {
        setModal(false);
    }, 500)
  }

  return (
    <div className={modal ? "fijar" : ""}>
      <Header 
      gastos = {gastos}
      presupuesto={presupuesto} 
      setPresupuesto={setPresupuesto} 
      isValid={isValid}
      setIsValid={setIsValid}/>

      {isValid && (
        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
            src={IconNuevoGasto}
            alt='icono nuevo gasto'
            onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      
      {modal && (<Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} guardarGasto={guardarGasto}/> )}
    </div>

    
  )
}

export default App
