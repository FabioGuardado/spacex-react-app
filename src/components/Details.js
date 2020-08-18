import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';

//Props
import WikiLogo from '../img/wikipedia-logo.png';

//Components
import Loader from './UI/Loader';
import Rocket from './Rocket'
import Dragon from './Dragon'
import { Description } from './UI/DetailsComponents';

const Details = (props) => {
    
    //State
    const [result, setResult] = useState({});
    const [proceso, setProceso] = useState(true);


    useEffect(() => {
        const ConsultarAPI = async () => {
            //Extracting "match" of props
            const { match } = props;

            const URL = `https://api.spacexdata.com/v4/${match.params.project}/${match.params.id}`;
            const response = await Axios.get(URL);
            setResult(response.data);

            setProceso(false);

        }

        if(proceso) {
            ConsultarAPI();
        }

        //eslint-disable-next-line
    }, [proceso]);

    const evaluateResult = (data) => {
        if (result) {
            if(result.type === "capsule") {
               return  <Dragon data={data} />;
            } else if (result.type === "rocket") {
                return  <Rocket data={data} />;
            } else {
                return null;
            }
        }
    }

    
    return (
        <Fragment>
            {
                !result 
                ? 
                    <Loader /> 
                :
                    <div className="wrapper">
                        <div className="details-grid">
                            <Description>
                                <div className="image-project">
                                    <img src={result.flickr_images} alt={result.name}/>
                                    <div className="wikipedia">
                                        <a href={result.wikipedia}><img src={WikiLogo} alt="Articulo en Wikipedia"/></a>
                                    </div>
                                </div>
                                <p>{result.description}</p>
                            </Description>
                            {evaluateResult(result)}
                        </div>
                    </div>
            }
        </Fragment>
    );
}
 
export default Details;