import React from "react"


interface IProps {
    requestedData: {
      time: string
      smartContractData: number
      note?: string
    }[]
  }


const List: React.FC<IProps> = ({ requestedData }) => {
    return (
        <div>
            I am a list
        </div>
    )
}

export default List