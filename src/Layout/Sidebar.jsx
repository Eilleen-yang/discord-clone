import Select from "react-select";

const options = [
  {
    label: "Finland",
    options: [
      {
        label: "Great Hotel",
        value: "Great Hotel",
      },
      // More options
    ],
  },
  {
    label: "Sweden",
    options: [{ label: "Stockholm", value: "Stockholm" }],
  },
];

export default function Sidebar() {
  return (
    <div className="w-[30.4rem] bg-white dark:bg-[var(--main-bg-color)] text-black dark:text-white">
      <div>
        <Select
          options={options}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
        />
      </div>
      <div>
        <button>이벤트</button>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
