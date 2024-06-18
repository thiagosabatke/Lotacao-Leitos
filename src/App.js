import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HomeContent from './HomeContent';
import EmergenciaContent from './EmergenciaContent';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleSelect = (selectedKey) => {
    setActiveTab(selectedKey);
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: '#4c8bf5' }}>
        <Container>
          <Navbar.Brand href="#home" style={{ color: 'white' }}>Soft Health</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#" style={{ color: 'white' }}>Login</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Nav variant="tabs" activeKey={activeTab} onSelect={handleSelect} style={{ backgroundColor: '#4c8bf5' }}>
        <Nav.Item>
          <Nav.Link eventKey="home" style={{ color: activeTab === 'home' ? '#2b6bc0' : 'white' }}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="emergencia" style={{ color: activeTab === 'emergencia' ? '#2b6bc0' : 'white' }}>Emergência</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled style={{ color: 'white' }}>Agendar Consultas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled style={{ color: 'white' }}>Resultado Consultas</Nav.Link>
        </Nav.Item>
      </Nav>

      <div>
        {activeTab === 'home' && <HomeContent />}
        {activeTab === 'emergencia' && <EmergenciaContent />}
      </div>
    </div>
  );
}

export default App;
