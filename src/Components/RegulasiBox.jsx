import React from "react";

function RegulasiBox(props) {
  return (
    <tr className="odd:bg-white even:bg-gray-50">
      <td className="p-3 border border-gray-200 text-purple-600 hover:text-purple-400 cursor-pointer">
        <a href={props.link} target="_blank">
          {props.JudulSurat}
        </a>
      </td>
    </tr>
  );
}

export default RegulasiBox;
