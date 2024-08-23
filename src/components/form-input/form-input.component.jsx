import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
    {/* 以下は、input -> label の並び順（cssで ~ を用いてinputの直後の兄弟としてlabelを選択したいから）だが、
    cssでgroupのpositionをrelative, labelをabsoluteにすることで、見た目は label -> input の順になっている。
    しかもinputをクリックした際に、labelが更に上方へ移動する仕組み */}
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
