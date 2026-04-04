export default function Style() {
  return (
    <style jsx global>{`
      .theme-literary {
        font-family: 'Serif', '宋体', 'SimSun', serif;
      }
      /* 覆盖 Notion 原生的一些样式，使其更符合书香气质 */
      .theme-literary .notion {
        color: #4A4641;
        font-family: inherit;
        line-height: 2;
      }
    `}</style>
  )
}
