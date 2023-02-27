import { useParams } from "react-router-dom"

function FigureDetails() {
  const { id } = useParams()

  return (
    <div>
        <h1>Figure {id}</h1>
    </div>
  )
}
export default FigureDetails;