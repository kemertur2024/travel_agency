import I18nField from "./I18nField";
import TextField from "./TextField";
import TextareaField from "./TextareaField";
import SelectField from "./SelectField";
import CheckboxGroupField from "./CheckboxGroupField";
import JsonField from "./JsonField";
import ArrayField from "./ArrayField";
import ImageUploader from "./ImageUploader";

export default function FieldRenderer({
    field,
    value,
    item,
    onChange,
    setItem,
}) {
    if (field.type.startsWith("i18n")) {
        return <I18nField field={field} value={value} onChange={onChange} />;
    }

    switch (field.type) {
        case "text":
        case "number":
            return (
                <TextField field={field} value={value} onChange={onChange} />
            );

        case "textarea":
            return (
                <TextareaField
                    field={field}
                    value={value}
                    onChange={onChange}
                />
            );

        case "select":
            return (
                <SelectField field={field} value={value} onChange={onChange} />
            );

        case "checkbox-group":
            return (
                <CheckboxGroupField
                    field={field}
                    value={value}
                    setItem={setItem}
                    item={item}
                />
            );

        case "json":
            return (
                <JsonField field={field} value={value} onChange={onChange} />
            );

        case "array":
            return <ArrayField field={field} item={item} setItem={setItem} />;

        case "uploader":
            return (
                <ImageUploader
                    label={field.label}
                    folder='items'
                    images={value || []}
                    onChange={(imgs) => onChange(field, imgs)}
                />
            );

        default:
            return (
                <TextField field={field} value={value} onChange={onChange} />
            );
    }
}
