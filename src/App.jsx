import { LogIn, AlertCircle, Zap, Shield } from 'react-feather'
import { useToast } from './components/Toast/ToastService'
import './App.css'
// import ToastProvider from './components/Toast/ToastProvider'

function App() {
  const toast = useToast()

  const handleFail = () => {
    const id = toast.open(
      <div className='flex gap-2 bg-red-300 text-red-800 p-4 rounded-lg shadow-lg'>
        <AlertCircle size={40} />
        <div>
          <h3 className='font-bold'>Action Failed</h3>
          <p className='text-sm'>This action failed miserably</p>
        </div>
      </div>
    , 1000)
    toast.close(id)
  }

  const HandleLogin = () => {
    const id = toast.open(
      <div className='flex gap-2 bg-blue-300 text-blue-800 p-4 rounded-lg shadow-lg'>
        <Shield size={40} />
        <div>
          <h3 className='font-bold'>Authenticated</h3>
          <p className='text-sm'>You are logged in successfully</p>
        </div>
      </div>
    , 1000)
    toast.close(id)
  }

  const handleActivate = () => {
    const id = toast.open(
      <div className='flex gap-2 bg-green-300 text-green-800 p-4 rounded-lg shadow-lg'>
        <Zap size={40} />
        <div>
          <h3 className='font-bold'>Activated</h3>
          <p className='text-sm'>Item activated successfully</p>
        </div>
      </div>
    , 1000)
    toast.close(id)
  }

  return (
    // <ToastProvider >
      <main className="App">
        <button className='btn btn-danger' onClick={handleFail}>
          <AlertCircle /> Fail
        </button>
        <button className='btn btn-info' onClick={HandleLogin}>
          <LogIn /> Login
        </button>
        <button className='btn btn-success' onClick={handleActivate}>
          <Zap /> Activate
        </button>
      </main>
    // </ToastProvider>
  )
}

export default App
