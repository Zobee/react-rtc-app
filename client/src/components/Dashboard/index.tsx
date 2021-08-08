import Sidebar from "../Sidebar"
import { IdProp } from "../../interfaces/idInterface"
const Dashboard:React.FC<IdProp> = ({id}) => {
  return (
    <div className='d-flex' style={{ height: "100vh"}}>
      <Sidebar id={id}/>
    </div>
  )
}

export default Dashboard
