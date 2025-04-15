import { useEffect, useState } from 'react'
import './App.css'
import { fetchData } from './helper';
import { Consumption, ConsumptionLog } from './types';
import { ConsumptionItem } from './components/ConsumptionItem';

function App() {
  const [consumptions, setConsumptions] = useState<Consumption[] | undefined>([]);
  const [currentDate, setCurrentDate] = useState<Date | undefined>();

  useEffect(() => {
    const loadData = async() => {
      try {
        const data = await fetchData<ConsumptionLog>('../src/data/consumption_log_1.json');
      
        if(data) {
          setConsumptions(data.consumptions);
          setCurrentDate(data.date);
        } else {
          console.log("Kon data niet laden");
        }
      } catch (error) {
        console.log("foutmelding");
      }
    }
    loadData();
  }, []);

  return (
    <div id="consumptions-list">
      <header>
        <h1>{"" + currentDate}</h1>
      </header>
      {consumptions && consumptions.map((consumption) => (
        <ConsumptionItem consumption={consumption} />
      ))}
  </div>
  )
}

export default App
