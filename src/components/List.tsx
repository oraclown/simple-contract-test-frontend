import React from "react"
import { IState as IProps } from '../App'
import List from '@material-ui/core/List' 
import ListItem from '@material-ui/core/ListItem' 
import ListItemText from '@material-ui/core/ListItemText'


const CustomList: React.FC<IProps> = ({ requestedData }) => {

    const renderList = () => {
        return requestedData.map((data) => {
            return (
                <ListItem className='ListItem'>
                    <ListItemText primary={ data.time } className='ListItemText'/>
                    <ListItemText primary={ data.smartContractData } className='ListItemText'/>
                    <ListItemText primary={ data.note } className='ListItemText'/>
                </ListItem>
            )
        })
    }
    return (
        <List className='List'>
            { renderList() }
        </List>
    )
}

export default CustomList