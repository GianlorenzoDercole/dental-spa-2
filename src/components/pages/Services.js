// import { Link} from 'react-router-com

export default function Services(props) {
    const servicesArr = props.servicesArr.map((service, i) => {
        return <li key={`service-${i}`}>
                    <Link to={`/services/${service.id}`}>{service.name}</Link>
                </li>
    })
    return (
        <div>
            <h3>services</h3>
            <ul>
                {servicesArr}
            </ul>
        </div>
    )
}
