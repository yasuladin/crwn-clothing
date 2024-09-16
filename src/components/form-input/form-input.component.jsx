import { FormInputLabel, Input, Group } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {/* 以下は、input -> label の並び順（cssで ~ を用いてinputの直後の兄弟としてlabelを選択したいから）だが、
    cssでgroupのpositionをrelative, labelをabsoluteにすることで、見た目は label -> input の順になっている。
    しかもinputをクリックした際に、labelが更に上方へ移動する仕組み */}
      <Input {...otherProps} />
      {label && (
        <FormInputLabel $shrink={otherProps.value?.length > 0}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
