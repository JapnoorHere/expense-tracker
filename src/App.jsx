import React, { useState } from 'react'
import './App.css'
const App = () => {


  const [title,setTitle] = useState('');
  const [amount,setAmount] = useState('');
  const [expense,setExpense] = useState([]);

  const handleTitle = (e)=>{
    setTitle(e.target.value);
  }
  
  const handleAmount = (e)=>{
    setAmount(e.target.value);
  }


  const addExpense = ()=>{
    if(!title && !amount) return;
    const newExpense = {
      id : expense.length + 1,
      title : title,
      amount : amount
    }
    setExpense([
      ...expense,
      newExpense
    ])

    setTitle('')
    setAmount('')

    for(let ee of expense){
      console.log(ee);
    }


  }

  const deleteExpense = (id)=>{
    setExpense(expense.filter((e)=>e.id !== id))
  }

  return (
    <div>
      <div className='main'>
        <h1>Expense Tracker</h1>
        <div className='container'>
          <div className='input-container'>
          <input placeholder='Expense' value={title} className='title' onChange={handleTitle}/>  
          <input placeholder='Amount' value={amount} className='amount' onChange={handleAmount}/>
          <button className='addBtn' onClick={addExpense}>Add Expense</button>  
          </div>
          <ul className='expense-list'>{
            expense.map((e)=>{
            return <li key={e.id}> 
              <p className='show-expense'>{e.title}</p>
              <p className='show-amount'>${e.amount}</p>
              <button className='deleteBtn' onClick={()=> deleteExpense(e.id)}>Delete</button>
            </li>

            })
          }
          </ul>
        </div>  
      </div>   
    </div>
  )
}

export default App
