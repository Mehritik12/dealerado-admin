import { CommonToolbar } from './ListToolbar'
import { CommonSearchComponent } from './ListSearchComponent'

const CommonHeader = () => {

  return (
    <>
      <div className='card-header border-0 pt-6 justify-content-end'>
        <CommonSearchComponent />
        <div className='card-toolbar'>
           <CommonToolbar />
        </div>
      </div>
    </>
  )
}

export { CommonHeader }
