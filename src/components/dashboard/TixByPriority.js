import { PieChart } from 'react-minimal-pie-chart';


const TixByPriority = () => {
  
  return (
    <section className="tix-card">
      <h4>Tickets by Priority</h4>
      <div className="tix-card-color-legend">
        <p style={{ color: "rgba(36,27,242, 1)", fontWeight: "bold" }}>
          Critical
        </p>
        <p style={{ color: "rgba(36,27,242, 0.75)", fontWeight: "bold" }}>
          Important
        </p>
        <p style={{ color: "rgba(36,27,242, 0.5)", fontWeight: "bold" }}>
          Normal
        </p>
        <p style={{ color: "rgba(36,27,242, 0.25)", fontWeight: "bold" }}>
          Low
        </p>
      </div>
      <div className="tix-graph">
        <PieChart
          data={[
            { title: "Critical", value: 1, color: "rgba(36,27,242, 1)" },
            { title: "Important", value: 1, color: "rgba(36,27,242, 0.75)" },
            { title: "Normal", value: 2, color: "rgba(36,27,242, 0.5)" },
            { title: "Low", value: 3, color: "rgba(36,27,242, 0.25)" },
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