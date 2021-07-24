import { useParams } from 'react-router'
import Nav from '../Nav/Nav'
import Details from './Details'
import data from '../../json/data.json'
import './index.css'

export default () => {

    const { title } = useParams()

    const getHotelData = data.find(items => {
        return items.title == title.replace(/-/g, ' ')
    })
    
    return (
        <>
            <Nav />
            <Details hotelData={getHotelData} />
        </>
    )
}