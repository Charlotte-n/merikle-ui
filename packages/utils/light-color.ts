export function lightenColor(color: string, percent: number) {
  // 将颜色字符串转换为 RGB 数组
  const rgb = color.match(/\d+/g).map(Number);

  // 计算淡化后的颜色值
  const newColor = rgb.map((value) =>
    Math.round(value + (255 - value) * (percent / 100)),
  );

  // 返回新颜色字符串
  return `rgb(${newColor.join(",")})`;
}
