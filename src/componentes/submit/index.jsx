import ical from 'ical.js';
import React, { useState } from 'react';

function Submit() {
    const [jsonData, setJsonData] = useState(null);
  
    function convertICalToJson(icalData) {
        
        const jcalData = ical.parse(icalData);
        console.log(jcalData);
        const comp = new ical.Component(jcalData);
        console.log(comp);
        const vevents = comp.getAllProperties('vevent');
        console.log(vevents);
      
        const events = vevents.map((vevent) => {
            
          const event = {};
          vevent.getAllProperties().forEach((prop) => {
            event[prop.name] = prop.getFirstValue();
          });
          console.log(event);
          return event;
        });
      
        return events;
      }
      // Implementação da função convertICalToJson
  
      function handleSubmit(event) {
        event.preventDefault();
        const file = event.target[0].files[0];
        if (!file) {
          // Nenhum arquivo selecionado, lidar com isso de acordo com sua lógica
          return null;
        }
      
        const reader = new FileReader();
      
        reader.onload = () => {
          const jsonData = convertICalToJson(reader.result);
          setJsonData(jsonData);
        };
      
        reader.readAsText(file);
      }
      // Implementação da função handleSubmit
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" accept=".ics" />
          <button type="submit">Enviar</button>
        </form>
        {jsonData && (
          <div>
            <h3>Eventos Convertidos:</h3>
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
  
    export default Submit;