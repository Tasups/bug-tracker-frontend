import { PieChart } from 'react-minimal-pie-chart';

import orange from '../../images/orange.jpg'
import blue from '../../images/blue.jpg'


const TixByType = () => {
  return(
    <section className="tix-card">
      <h4>Tickets by Type</h4>
      <div className="tix-card-color-legend">
        <div>
          <img src={blue} alt=""/><p> - Feature</p>
        </div>
        <div>
          <img src={orange} alt=""/><p> - Issue</p>
        </div>
      </div>
      <div className="tix-graph">
        <PieChart
          data={[
            { title: 'Feature', value: 5, color: '#241bf2' },
            { title: 'Issue', value: 2, color: '#f28a1b' },
          ]}
          radius={45}
          lineWidth={25}
          paddingAngle={10}
          animate
          animationDuration={1050}
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

export default TixByType;