import React, { useEffect, useState } from 'react';
import CallApi from '../../util/apiCalls';
import GeneralAdmissionPicker from '../generalAdmissionPicker/generalAdmissionPicker';

const GeneralAdmissionAreas = ({ areaIds, bookingLimit }) => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const initialiseAreas = async () => {
      areaIds?.forEach(async id => {
        const area = await CallApi(`ga-areas/${id}`);
        setAreas(prevAreas => [...prevAreas, area]);
      });
    }
    initialiseAreas();
  }, [areaIds]);

  return (
    <div>
      {areas.map((area, index) => {
        return (
          <GeneralAdmissionPicker key={index} areaInfo={area} bookingLimit={bookingLimit} />
        );
      })}
    </div>
  )
}

export default GeneralAdmissionAreas
