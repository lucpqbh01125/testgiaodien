
export function useBarTime(today, yesterday) {
  const change = ((today - yesterday) / yesterday) * 100;

  const color =
    change > 0 ? "#74c015" : change < 0 ? "#f87171" : "#a1a1aa";

  const rotation = change < 0 ? "rotate(180deg)" : "none";

  return { change, color, rotation };
}
