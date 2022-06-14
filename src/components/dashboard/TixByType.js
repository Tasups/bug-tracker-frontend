import { PieChart } from 'react-minimal-pie-chart';

const TixByType = () => {
  return(
    <section className="tix-card">
      <h4>Tickets by Type</h4>
      <div className="tix-card-color-legend">
        <p>Feature</p>
        <p>Issue</p>
      </div>
      <div className="tix-graph">
        <PieChart
          data={[
            { title: 'Feature', value: 5, color: 'rgba(36,27,242, 0.5)' },
            { title: 'Issue', value: 2, color: 'rgba(36,27,242, 1)' },
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