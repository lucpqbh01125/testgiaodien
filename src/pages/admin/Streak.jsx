import { Box, Typography } from "@mui/material";

const days = [
  { label: "T2", done: true },
  { label: "T3", done: true },
  { label: "T4", done: true },
  { label: "T5", done: true },
  { label: "T6", done: true },
  { label: "T7", done: false },
  { label: "CN", done: false },
];

export default function WeekStreak() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "336px",
        height: "56px", // 24 + 32
        gap: "0px", // có thể set 4px nếu muốn cách ra nhẹ
      }}
    >
      {/* Hàng label */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "336px",
          height: "24px",
        }}
      >
        {days.map((d, i) => (
          <Typography
            key={i}
            sx={{
              width: "48px",
              height: "24px",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "24px",
              textAlign: "center",
              color: d.done ? "#FA9300" : "#6E6E6E",
            }}
          >
            {d.label}
          </Typography>
        ))}
      </Box>

      {/* Hàng vòng tròn */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "336px",
          height: "32px",
        }}
      >
        {days.map((d, i) => (
          <Box
            key={i}
            sx={{
              width: "48px",
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: d.done ? "#FA9300" : "#E6E6E6",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {d.done && (
                <span
                  className="material-symbols-outlined"
                  style={{
                    color: "white",
                    fontSize: "24px",
                    fontWeight: 500,
                  }}
                >
                  check
                </span>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
