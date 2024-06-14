import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HomeContent from './HomeContent';
import EmergenciaContent from './EmergenciaContent';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Manipulador de seleção
  const handleSelect = (selectedKey) => {
    setActiveTab(selectedKey);
  };

  return (
    <div>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#home">Soft Health</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#">Login</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Nav variant="tabs" activeKey={activeTab} onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="emergencia">Emergência</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Agendar Consultas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Resutado Consultas
          </Nav.Link>
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
