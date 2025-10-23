import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

const data = [
  { subject: 'Login', A: 10, B: 8, C: 6, D: 7, E: 5, F: 9 },
  { subject: 'Hoàn thành', A: 10, B: 9, C: 7, D: 8, E: 6, F: 7 },
  { subject: 'Tương tác', A: 7, B: 6, C: 8, D: 5, E: 7, F: 6 },
  { subject: 'Thảo luận', A: 6, B: 5, C: 7, D: 6, E: 4, F: 5 },
  { subject: 'Nộp bài', A: 5, B: 4, C: 6, D: 5, E: 3, F: 4 },
];

export default function ChuyenCanChart() {
    const radarKeys = ['A', 'B', 'C', 'D', 'E', 'F'];
  return (
    <Card sx={{ width: 349, height: 390 }}>
      <CardContent className="chartnhen-container">
        <Typography variant="h6" gutterBottom>
          Điểm chuyên cần
        </Typography>
        <ResponsiveContainer width="100%" height={290}>
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="subject"
              tick={({ x, y, payload }) => {
                const label = payload.value;
                let first = label;
                let second = '';
                const words = label.split(' ');
                if (words.length >= 2) {
                  first = words[0];
                  second = words.slice(1).join(' ');
                }

                return (
                  <text x={x} y={y} textAnchor="middle" fontSize={12}>
                    <tspan x={x} dy={0}>
                      {first}
                    </tspan>
                    {second && (
                      <tspan x={x} dy={14}>
                        {second}
                      </tspan>
                    )}
                  </text>
                );
              }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 10]}
              tickCount={6}
              tick={{ fill: 'black', fontSize: 12 }}
            />
            <Radar
              name="Điểm"
              dataKey="A"
              stroke="#9DEA3D"
              fill="#9DEA3D"
              fillOpacity={0.4}
              label={({ x, y, value }) => (
                <text x={x} y={y - 10} textAnchor="middle" fill="black" fontSize={12}>
                  {value}
                </text>
              )}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
