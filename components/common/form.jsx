import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

// Example: Your fields config and zod schema should be provided from the parent
const FormController = ({ fields, register, errors, watch, setValue }) => {
  const renderField = (field) => {
    const { name, label, type = "text", placeholder, options, ...rest } = field;

    switch (type) {
      case "select":
        return (
          <div className="space-y-2 w-full" key={name}>
            {label && (
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={name}
              >
                {label}
              </label>
            )}
            <Select
              value={watch(name)}
              onValueChange={(val) =>
                setValue(name, val, { shouldValidate: true })
              }
            >
              <SelectTrigger className="w-full cursor-pointer" id={name}>
                {watch(name) || placeholder || "Select type"}
              </SelectTrigger>
              <SelectContent>
                {options?.map((opt) => (
                  <SelectItem
                    key={opt.value}
                    className="cursor-pointer"
                    value={opt.value}
                  >
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors[name] && (
              <span className="text-sm text-red-500">
                {errors[name]?.message}
              </span>
            )}
          </div>
        );
      case "textarea":
        return (
          <div className="space-y-2" key={name}>
            {label && (
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={name}
              >
                {label}
              </label>
            )}
            <Textarea
              id={name}
              placeholder={placeholder}
              {...register(name)}
              {...rest}
            />
            {errors[name] && (
              <span className="text-sm text-red-500">
                {errors[name]?.message}
              </span>
            )}
          </div>
        );
      case "switch":
        return (
          <div className="space-x-2 items-center flex" key={name}>
            <Switch
              id={name}
              className="cursor-pointer"
              checked={watch(name)}
              onCheckedChange={(checked) =>
                setValue(name, checked, { shouldValidate: true })
              }
              {...rest}
            />
            {label && (
              <label
                className="text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={name}
              >
                {label}
              </label>
            )}
            {errors[name] && (
              <span className="text-sm text-red-500">
                {errors[name]?.message}
              </span>
            )}
          </div>
        );
      default:
        return (
          <div className="space-y-2" key={name}>
            {label && (
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={name}
              >
                {label}
              </label>
            )}
            <Input
              id={name}
              type={type}
              placeholder={placeholder}
              {...register(name)}
              {...rest}
            />
            {errors[name] && (
              <span className="text-sm text-red-500">
                {errors[name]?.message}
              </span>
            )}
          </div>
        );
    }
  };

  return <div className="space-y-4">{fields.map(renderField)}</div>;
};

export default FormController;
