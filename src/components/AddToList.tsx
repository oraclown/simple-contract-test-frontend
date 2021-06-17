import React, { useState } from 'react'
import { IState as Props, getCurrentDT } from '../App'


interface IProps {
    requestedData: Props['requestedData']
    setRequestedData: React.Dispatch<React.SetStateAction<Props['requestedData']>>
}


const AddToList: React.FC<IProps> = ({ setRequestedData, requestedData}) => {

    const [input, setInput] = useState({
        time: "",
        smartContractData: 42,
        note: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        setRequestedData([
            ...requestedData,
            {
                time: getCurrentDT(),
                smartContractData: input.smartContractData,
                note: input.note
            }
        ])

        setInput({
            time: "",
            smartContractData: 42,
            note: ""
        })
    }

    return (
        <div className='AddToList'>
            <textarea 
                placeholder='Note'
                className='AddToList-input'
                value={input.note}
                onChange={handleChange}
                name='note'
            />
            <button
                className='AddToList-btn'
                onClick={handleClick}
            >
                Add to list
            </button>
        </div>
    )
}

export default AddToList