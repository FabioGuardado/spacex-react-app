import React from 'react';

// Styled components
import { DataComponent, SecondaryItem } from './UI/DetailsComponents';

const Dragon = ({data}) => {
    return ( 
        <DataComponent>
            <h1>{data.name}</h1>
            <div>
                <h4>General facts</h4>
                <ul>
                    <li><span>Type:</span> {data.type}</li>
                    <li><span>First flight:</span> {data.first_flight}</li>
                    <li><span>Crew capacity:</span> {data.crew_capacity}</li>
                    <li><span>Height:</span> {data.height_w_trunk.meters} m</li>
                    <li><span>Dry mass:</span> {data.dry_mass_kg} kg</li>
                </ul>

                <h4>Thrusters</h4>
                <SecondaryItem>
                    <ul>
                    {
                        data.thrusters.map(thruster => (
                            <li className="dragon-thruster" key={thruster.type} >
                                <h6>{thruster.type}</h6>
                                <p><span>Amount: </span> {thruster.amount}</p>
                                <p><span>Thrust: </span> {thruster.thrust.kN} kN</p>
                                <p><span className="fuel">Fuel: </span> <span className="fuel-info">{`${thruster.fuel_1} / ${thruster.fuel_2}`}</span></p>
                            </li>
                        ))
                    }
                    </ul>
                </SecondaryItem>

                <h4>Heat Shield</h4>
                <ul>
                    <li><span>Material:</span> {data.heat_shield.material}</li>
                    <li><span>Temperature:</span> {data.heat_shield.temp_degrees}° F</li>
                    <li><span>Partner:</span> {data.heat_shield.dev_partner}</li>
                </ul>

            </div>
        </DataComponent>
     );
}
 
export default Dragon;