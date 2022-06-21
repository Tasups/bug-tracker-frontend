import { PieChart } from 'react-minimal-pie-chart';

import yellow from '../../images/yellow.jpg'
import orange from '../../images/orange.jpg'
import blue from '../../images/blue.jpg'
import pink from '../../images/pink.jpg'


const TixByPriority = () => {
  
  return (
    <section className="tix-card">
      <h4>Tickets by Priority</h4>
      <div className="tix-card-color-legend">
        <div>
          <img src={yellow} alt="critical"/><p> - Critical</p>
        </div>
        <div>
          <img src={pink} alt="important"/><p> - Important</p>
        </div>
        <div>
          <img src={orange} alt="normal"/><p> - Normal</p>
        </div>
        <div>
          <img src={blue} alt="low"/><p> - Low</p>
        </div>
      </div>
      <div className="tix-graph">
        <PieChart
          data={[
            { title: "Critical", value: 1, color: "#f28a1b" },
            { title: "Important", value: 1, color: "#241bf2" },
            { title: "Normal", value: 2, color: "#f21be7" },
            { title: "Low", value: 3, color: "#e7f21b" },
          ]}
          radius={45}
          lineWidth={25}
          paddingAngle={10}
          animate
          animationDuration={600}
          label={({ dataEntry }) => dataEntry.value}
          labelPosition={60}
          labelStyle={{
            fontSize: "0.5rem",
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        />
      </div>
    </section>
  );
}

export default TixByPriority;