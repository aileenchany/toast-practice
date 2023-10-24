import { Zap } from 'react-feather'

// eslint-disable-next-line react/prop-types
const ToastSuccess = ({ message }) => {
  return (
    <div className='flex gap-2 bg-green-300 text-green-800 p-4 rounded-lg shadow-lg'>
        <Zap size={40} />
        <div>
          <h3 className='font-bold'>Activated</h3>
          <p className='text-sm'>{message}</p>
        </div>
      </div>
  )
}

export default ToastSuccess