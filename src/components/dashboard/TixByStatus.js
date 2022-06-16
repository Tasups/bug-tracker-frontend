import { PieChart } from 'react-minimal-pie-chart';

import orange from '../../images/orange.jpg'
import blue from '../../images/blue.jpg'


const TixByStatus = () => {
  return(
    <section className="tix-card">
      <h4>Tickets by Status</h4>
      <div className="tix-card-color-legend">
        <div>
          <img src={orange} alt="open"/><p> - Open</p> 
        </div>
        <div>
          <img src={blue} alt="closed"/><p> - Closed</p>
        </div>
      </div>
      <div className="tix-graph">
        <PieChart
          data={[
            { title: 'Open', value: 7, color: '#f28a1b' },
            { title: 'Closed', value: 5, color: '#241bf2' },
          ]}
          radius={45}
          lineWidth={25}
          paddingAngle={10}
          animate
          animationDuration={1500}
          label={({ dataEntry }) => dataEntry.value}
          labelPosition={60}
          labelStyle={{
            fontSize: '0.5rem',
            fontFamily: 'sans-serif',
            fontWeight: 600
          }}
        />
      </div>
    </section>
    )
}

export default TixByStatus;