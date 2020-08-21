import React from 'react';

// Styled components
import { DataComponent, SecondaryItem } from './UI/DetailsComponents';

const Rocket = ({data}) => {
    return ( 
        <DataComponent>
            <h1>{data.name}</h1>
            <div>
                <h4>General facts</h4>
                <ul>
                    <li><span>Type:</span> {data.type}</li>
                    <li><span>First flight:</span> {data.first_flight}</li>
                    <li><span>Cost per launch:</span> ${data.cost_per_launch}</li>
                    <li><span>Height:</span> {data.height.meters} m</li>
                    <li><span>Mass:</span> {data.mass.kg} kg</li>
                    <li><span>Landing legs:</span> {data.landing_legs.number} of {data.landing_legs.material}</li>
                </ul>

                <h4>Engines</h4>
                <ul>
                    <li><span>Number:</span> {data.engines.number}</li>
                    <li><span>Type:</span> {data.engines.type}</li>
                    {
                        (data.engines.version) ? <li><span>Version:</span> {data.engines.version}</li> : null
                    }
                    <li><span className="fuel">Fuel: </span> {`${data.engines.propellant_1} / ${data.engines.propellant_2}`}</li>
                    <li><span>Thrust:</span> {data.engines.thrust_sea_level.kN} kN</li>
                </ul>

                <h4>Payload weights</h4>
                    <SecondaryItem>
                        <ul className="rockets-payloads">
                        {
                            data.payload_weights.map(payload => (
                                <li key={payload.id}><span>{payload.name} ({payload.id}):</span> {payload.kg} kg</li>
                            ))
                        } 
                        </ul>
                    </SecondaryItem>

            </div>
        </DataComponent>
     );
}
 
export default Rocket;