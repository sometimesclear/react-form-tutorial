import React, {Component} from 'react';

// 컴포넌트는 다른 컴포넌트에 중첨될 수 있으며 Simple component 와 Class component가 혼합될 수 있다.

// Simple Component 1
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

// Simple Component 2 // 한 줄짜리는 return의 () 생략 가능.
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

// Class Component 
// 클래스 컴포넌트에는 render() 가 포함되어야하며 return 은 하나의 상위 요소만 반환할 수 있다.
class Table extends Component {
  render() {
    const {characterData} = this.props

    return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} />
    </table>
    )
  }
}

export default Table
