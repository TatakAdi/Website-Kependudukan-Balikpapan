import React from "react";

function RegulasiBox(props) {
  return (
    <tr class="odd:bg-white even:bg-gray-50">
      <td class="p-3 border border-gray-200">{props.JudulSurat}</td>
    </tr>
  );
}

export default RegulasiBox;
