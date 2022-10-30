// import { useParams } from 'react-router-dom'
const Service = (props) => {
    let { id } = useParams()
    const service = props.services.find(service => service.id.toString() === id)
    return (
        <>
            <h3>{service.name}</h3>
            <h3>{service.price}</h3>
            <h3>{service.description}</h3>
        </>
    )
}

export default Service
