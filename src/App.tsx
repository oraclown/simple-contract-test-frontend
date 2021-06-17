import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export function getCurrentDT() {
  let today = new Date()
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let currentDT = date + "_" + time
  return currentDT
}


function getSmartContractData() {
  return 42
}


export interface IState {
  requestedData: {
    time: string
    smartContractData: number
    note?: string
  }[]
}


function App() {

  const [requestedData, setRequestedData] = useState<IState["requestedData"]>([
    {
      time: getCurrentDT(),
      smartContractData: getSmartContractData(),
      note: "cool, it's working.."
    },
    {
      time: getCurrentDT(),
      smartContractData: getSmartContractData(),
    }
  ])



  return (
    <div className="App">
      <h1>Info retrieved from smart contract:</h1>
      <List requestedData={requestedData}/>
      <AddToList 
        requestedData={requestedData} 
        setRequestedData={setRequestedData}
      />
    </div>
  );
}

export default App;
