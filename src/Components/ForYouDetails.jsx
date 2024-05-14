import React, { useContext } from 'react';
import { Context } from './Context/Context';
import { useParams } from 'react-router-dom';
import CardDetails from './CardDetails';

export default function ForYouDetails() {
    const { data } = useContext(Context);
    const { id } = useParams();

    const itemForYouDetails = data.filter(x => x.id == id);
    const item1 = itemForYouDetails[0];

    return (
        <div>
            {item1 && (
                <CardDetails
                    name={item1.name}
                    data={item1.data}
                    img={item1.img}
                    location={item1.location}
                    key={item1.id}
                />
            )}
        </div>
    );
}
