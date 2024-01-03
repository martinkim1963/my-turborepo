"use client"

import { useEffect, useRef, useState } from "react"

export const DataGrid = () => {

  const [grid, setGrid] = useState(<div></div>)
  const gridRef = useRef<any>()

  useEffect(() => {
    setGrid(<lux-data-grid target="test-grid" ref={(r: any) => {
      const grid = r.data.getGrid()
      gridRef.current = grid
    }} />)

  }, [])
  return (<div style={{ height: "200px", width: "100%", background: 'white' }}>
    <div style={{ width: "100%", height: "200px", border: "1px solid red", }} id="test-grid" />
    {grid}
    <button onClick={() => {
      if (gridRef.current) {
        gridRef.current.provider.addRow({
          이름: '백화현',
          소속: '플랫폼사업부문 개발6Unit 개발4Cell',
          직급: '주임연구원',
          what: '팀원',
          이메일: 'yi@duzon.com',
        })
      }
    }}>test</button>
  </div>)
}