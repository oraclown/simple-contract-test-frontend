import React from "react"


interface IProps {
    requestedData: {
      time: string
      smartContractData: number
      note?: string
    }[]
  }


const List: React.FC<IProps> = ({ requestedData }) => {

    const renderList = (): JSX.Element[] => {
        return requestedData.map((data) => {
            return (
                <li className='List'>
                    <p className='List-time'>
                        { data.time }
                    </p>
                    <p className='List-smartContractData'>
                        { data.smartContractData }
                    </p>
                    <p className='List-note'>
                        { data.note }
                    </p>
                </li>
            )
        })
    }
    return (
        <ul>
            { renderList() }
        </ul>
    )
}

export default List