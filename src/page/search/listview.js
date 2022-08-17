import { Link } from "react-router-dom";

export default function ListViewSearch({children}) {
  return (
    <div className='flex flex-row mt-2'>
    <div className='w-20 h-20 bg-gray-700 rounded-lg'></div>
    <div className='ml-4'>
      <p className='font-bold text-lg'>{children}</p>
      <p className='font-light text-xs text-gray-400'>Jl. Kamboja 6, Jakarta Selatan</p>
      <hr/>
      <div className="bg-green-800 rounded-md  p-1 mt-1 mr-2 w-24 text-right shadow-lg">
        <p className=' text-sm  text-center font-light text-white'>Open</p>
        </div>
    </div>
  </div>
  )
}
