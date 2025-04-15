import { Consumption } from "../types"
import "./ConsumptionItem.css";

export const ConsumptionItem = ({consumption}: { consumption: Consumption }) => {

    const containerClassName = `consumption-item-container ${consumption.type === 'drinken' ? 'drink-item' : consumption.type === 'eten' ? 'food-item' : ''}`;

  return (
    <div className={containerClassName}>
        <p className="timestamp">{consumption.consumed_at}</p>
        <p className="name">{consumption.name}</p>     
    </div>
  )
}
