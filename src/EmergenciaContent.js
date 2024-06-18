import React from 'react';

const getCapacityClass = (capacity) => {
  if (capacity < 20) {
    return 'green';
  } else if (capacity >= 20 && capacity < 28) {
    return 'orange';
  } else {
    return 'red';
  }
};

const EmergenciaContent = () => {
  const hospitals = [
    { name: 'UPA Albert Sabin', capacity: 15, maxCapacity: 30, address: 'R. Carlos Klemtz, 1883' },
    { name: 'UPA Campo Comprido', capacity: 30, maxCapacity: 30, address: 'R. Monsenhor Ivo Zanlorenzi, 3495' },
    { name: 'UPA Pinheirinho', capacity: 25, maxCapacity: 30, address: 'R. León Nicolas, 1995' },
    { name: 'UPA Boa Vista', capacity: 15, maxCapacity: 30, address: 'Av. Paraná, 3654' },
  ];

  return (
    <div className='container-emergency'>
      <div className='header-emergency'>
        Hospitais com vaga
      </div>
      {hospitals.map((hospital, index) => (
        <div key={index} className="emergency">
          <div className="emergency_capacity">
            <div className="hospital_name">{hospital.name}</div>
            <div className={`capacity ${getCapacityClass(hospital.capacity)}`}>{hospital.capacity}/{hospital.maxCapacity}</div>
          </div>
          <div className="address">Endereço: {hospital.address}</div>
        </div>
      ))}
    </div>
  );
};

export default EmergenciaContent;
