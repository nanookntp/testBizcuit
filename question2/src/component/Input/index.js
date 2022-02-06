function Input(props) {
  console.log(props.data);
  return (
    <div className="row">
      <label
        className="col-sm-2 col-form-label"
        style={{ display: "inline-block" }}
      >
        {props.data.key}
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          readOnly
        //   itemID={props.key}
          className="form-control form-control-sm"
          id="staticEmail"
          value={props.data.value}
          style={{ display: "inline-block" }}
        />
      </div>
    </div>
  );
}

export default Input;
