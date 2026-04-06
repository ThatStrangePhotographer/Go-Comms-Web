export default function Dashboard() {
  const systemStats = [
    { label: "RADIOS ACTIVE", value: "18" },
    { label: "OPERATORS", value: "3" },
    { label: "CHANNELS", value: "6" },
    { label: "INCIDENTS", value: "2" },
  ];

  const operators = [
    { name: "Operator 1", status: "ACTIVE", channel: "CH 1" },
    { name: "Operator 2", status: "ACTIVE", channel: "CH 3" },
    { name: "Operator 3", status: "STANDBY", channel: "—" },
  ];

  const channels = [
    { name: "CH 1", usage: "High", colour: "bg-green-500" },
    { name: "CH 2", usage: "Medium", colour: "bg-yellow-500" },
    { name: "CH 3", usage: "Low", colour: "bg-blue-500" },
    { name: "CH 4", usage: "Idle", colour: "bg-gray-500" },
  ];

  const incidents = [
    { time: "14:32", text: "Lost child reported near main gate." },
    { time: "15:10", text: "Medical assist requested at Zone B." },
  ];

  return (
    <main className="w-full bg-black text-white min-h-screen py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-widest mb-12 text-center">
          OPERATIONS DASHBOARD
        </h1>

        {/* SYSTEM STATUS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {systemStats.map((stat, i) => (
            <div
              key={i}
              className="border border-white/10 bg-white/5 rounded-lg p-6 text-center"
            >
              <p className="text-xs tracking-widest opacity-70 mb-2">
                {stat.label}
              </p>
              <p className="text-3xl font-bold tracking-wide">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* OPERATORS PANEL */}
          <div className="border border-white/10 bg-white/5 rounded-lg p-8">
            <h2 className="text-xl font-semibold tracking-wide mb-6">
              OPERATORS
            </h2>

            <div className="flex flex-col gap-4">
              {operators.map((op, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border border-white/10 rounded-md p-4 bg-black/40"
                >
                  <div>
                    <p className="font-semibold tracking-wide">{op.name}</p>
                    <p className="text-xs opacity-60">Channel: {op.channel}</p>
                  </div>

                  <span
                    className={`text-xs tracking-widest ${
                      op.status === "ACTIVE"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {op.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CHANNEL USAGE PANEL */}
          <div className="border border-white/10 bg-white/5 rounded-lg p-8">
            <h2 className="text-xl font-semibold tracking-wide mb-6">
              CHANNEL USAGE
            </h2>

            <div className="flex flex-col gap-4">
              {channels.map((ch, i) => (
                <div key={i} className="flex items-center justify-between">
                  <p className="tracking-wide">{ch.name}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs opacity-70">{ch.usage}</span>
                    <span className={`w-3 h-3 rounded-full ${ch.colour}`}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INCIDENT LOG */}
          <div className="border border-white/10 bg-white/5 rounded-lg p-8">
            <h2 className="text-xl font-semibold tracking-wide mb-6">
              INCIDENT LOG
            </h2>

            <div className="flex flex-col gap-4">
              {incidents.map((inc, i) => (
                <div
                  key={i}
                  className="border border-white/10 rounded-md p-4 bg-black/40"
                >
                  <p className="text-xs text-green-400 tracking-widest mb-1">
                    {inc.time}
                  </p>
                  <p className="text-sm opacity-80">{inc.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
