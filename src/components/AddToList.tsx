import React, { useState } from 'react'
import { IState as Props, getCurrentDT } from '../App'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


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
            <TextField
                placeholder='Note'
                className='AddToList-input'
                value={input.note}
                onChange={handleChange}
                name='note'
            />
            <Button onClick={handleClick}>Add to list</Button>
        </div>
    )
}

export default AddToList