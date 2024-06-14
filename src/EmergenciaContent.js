import React from 'react';

const EmergenciaContent = () => {
  return (
    <div className='container-emergency'>
      <div className='header-emergency'>
        Hospitais com vaga
      </div>
      <div className="emergency">
        <div className="emergency_capacity">
          <div className="hospital_name">UPA Albert Sabin</div>
          <div className="capacity">15/30</div>
        </div>
        <div className="address">Endereço: R. Carlos Klemtz, 1883</div>
      </div>
      <div className="emergency">
        <div className="emergency_capacity">
          <div className="hospital_name">UPA Campo Comprido</div>
          <div className="capacity">30/30</div>
        </div>
        <div className="address">Endereço: R. Monsenhor Ivo Zanlorenzi, 3495</div>
      </div>
      <div className="emergency">
        <div className="emergency_capacity">
          <div className="hospital_name">UPA Pinheirinho</div>
          <div className="capacity">28/30</div>
        </div>
        <div className="address">Endereço: R. León Nicolas, 1995</div>
      </div>
      <div className="emergency">
        <div className="emergency_capacity">
          <div className="hospital_name">UPA Boa Vista</div>
          <div className="capacity">15/30</div>
        </div>
        <div className="address">Endereço: Av. Paraná, 3654</div>
      </div>
    </div>
    
  );
};

export default EmergenciaContent;
