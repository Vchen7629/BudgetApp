import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { SpendingGoalChart } from './spendingradial';

const GoalDisplay: React.FC<{ data: any }> = ({ data }) => {
  const [goalValue, setGoalValue] = useState(1000)
  const [goalAmount, setGoalAmount] = useState(0)

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setGoalValue(Number(value))
  }

  function handleAddNewSavingsGoal() {
    setGoalAmount(goalValue)
    toast.success("Successfully added new savings goal")
  }

  return (
    <div className='bg-white rounded-lg shadow-md p-4'>
      <div className="flex h-[15vh]">
        <div className='flex-col'>
          <h2 className="text-xl font-bold mb-4">Your Spending Goals</h2>

          {/* have savings goal amount and savings goal progress here */}

          <h2 className="text-xl font-bold mb-4 text-red-500">${goalAmount}</h2>
          {/* green or red depending on over or under amount */}
        </div>
      
        <div className='flex h-[30vh]'>
          <div className='h-[100%] space-y-[2vh]'>
            <div className='px-2'>
              <h1 className='text-lg font-bold mb-4'>Enter a savings Goal</h1>
              <div className='space-x-2 flex'>
                <Input value={goalValue} onChange={handleInputChange} type="number" placeholder="New Goal" className="w-[82%] border-2 z-0 border-gray-400 text-gray-400"/>
                <button onClick={handleAddNewSavingsGoal} className='flex text-center items-center bg-green-400 px-2 rounded-lg'>
                  <Plus className='text-white w-4'/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <SpendingGoalChart data={data} goalAmount={goalAmount}/>  
      </div>
    </div>
  );
};

export default GoalDisplay;