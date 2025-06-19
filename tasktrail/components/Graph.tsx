
'use client';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line
} from 'recharts';

const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const taskStats = [
  { name: 'Planning', tasks: 12 },
  { name: 'Tracking', tasks: 18 },
  { name: 'Management', tasks: 10 },
  { name: 'Insights', tasks: 14 },
];

const progressData = [
  { day: 'Mon', completed: 4 },
  { day: 'Tue', completed: 6 },
  { day: 'Wed', completed: 5 },
  { day: 'Thu', completed: 7 },
  { day: 'Fri', completed: 3 },
];

const pieData = [
  { name: 'Completed', value: 32 },
  { name: 'Pending', value: 16 },
  { name: 'In Progress', value: 22 },
  { name: 'Blocked', value: 8 },
];

export default function GraphPage() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-white to-slate-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        📊 TaskTrial Analytics
      </h1>

      {/* Bar Chart */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Tasks by Category</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={taskStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="tasks" fill="#8884d8" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Daily Task Completion</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="completed" stroke="#00C49F" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Task Status Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
