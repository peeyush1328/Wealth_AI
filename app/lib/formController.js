export const addAccountFields = [
  {
    name: "name",
    type: "text",
    label: "Account Name",
    placeholder: "e.g., Main Checking",
  },
  {
    name: "type",
    type: "select",
    label: "Account Type",
    options: [
      { value: "CURRENT", label: "Current" },
      { value: "SAVINGS", label: "Savings" },
    ],
  },
  {
    name: "balance",
    type: "number",
    label: "Initial Balance",
    placeholder: "0.00",
  },
  { name: "isDefault", type: "switch", label: "Set as default account" },
];
