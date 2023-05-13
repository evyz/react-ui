import "./checkbox.css";

function Checkbox({ value, setValue, label, children, labelOptions }) {
  return (
    <div
      className='system_checkbox'
      onClick={() => {
        setValue && setValue(!value);
      }}
    >
      <input type='checkbox' checked={value} />
      <label
        style={{
          userSelect: labelOptions?.isCantSelect ? "none" : "auto",
        }}
      >
        {label ? label : children ? children : null}
      </label>
    </div>
  );
}

export default Checkbox;
