"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import DatePickerField from "./DatePickerField";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useEmployeeState } from "@/store/useEmployee";
import { states } from "@/lib/utils";
import { Dialog } from "dialog-react-library-bd";
import { useState } from "react";

export const FormSchema = z.object({
  firstname: z.string().min(2, {
    message: "firstname must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "lastname must be at least 2 characters.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  startdate: z.date({
    required_error: "A date of start is required.",
  }),
  street: z.string().min(2, {
    message: "street must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "city must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "state must be at least 2 characters.",
  }),
  "zip-code": z.coerce.number(),
  department: z.string().min(2, {
    message: "department must be at least 2 characters.",
  }),
});

export function CreateEmployeeForm() {
  const { addEmployee } = useEmployeeState();
  const [isError, setIsError] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      dob: undefined,
      startdate: undefined,
      street: "",
      city: "",
      state: "state",
      "zip-code": undefined,
      department: "department",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsError(false);
    console.log(data);

    // transform date into string for global filtering
    const { dob, startdate, ...rest } = data;
    const dobFormatted = dob.toLocaleDateString();
    const startDateFormatted = startdate.toLocaleDateString();
    const dataToSend = {
      ...rest,
      dob: dobFormatted,
      startdate: startDateFormatted,
    };
    console.log(dataToSend);

    addEmployee(dataToSend);
  }
  const onError = (error: any) => {
    setIsError(true);
    console.log(error);
  };

  return (
    <Form {...form}>
      <form className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <DatePickerField
          form={form}
          name="dob"
          label="Date of birth"
          placeholder="Pick a date"
        ></DatePickerField>
        <DatePickerField
          form={form}
          name="startdate"
          label="Start Date"
          placeholder="Pick a date"
        ></DatePickerField>

        <fieldset className="border-solid border-2  p-4">
          <legend>Address</legend>

          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input placeholder="Street" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>States</SelectLabel>
                      {states.map((state) => (
                        <SelectItem
                          key={state.abbreviation}
                          value={state.abbreviation}
                        >
                          {state.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip-code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Zip Code" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="department">Department</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Departments</SelectLabel>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Human Resources">
                      Human Resources
                    </SelectItem>
                    <SelectItem value="Legal">Legal</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      <Dialog
        triggerFn={form.handleSubmit(onSubmit, onError)}
        className={""}
        buttonClass={"text-black mt-6"}
        buttonLabel={"Submit"}
      >
        {
          // error message
          isError ? (
            <p className="text-red-500">
              There was an error creating the employee.
            </p>
          ) : (
            <p>Employee Created!</p>
          )
        }
      </Dialog>
    </Form>
  );
}

