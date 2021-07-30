// import React, { useState } from "react";
// import {
//   Dropdown,
//   FormControl,
//   HelperText,
//   IDropdownItem,
//   Label,
// } from "@component";
// import { Story } from "@storybook/react";
// import { GuidelineViewer } from "@storybook-uitk";

// export default {
//   title: "Components/Dropdown",
//   component: Dropdown,
//   argTypes: {
//     className: {
//       description: "Optional classname applied to component root",
//       type: { name: "string", required: false, summary: "string" },
//       control: {
//         type: null,
//       },
//     },
//     items: {
//       description: `Array of dropdown items. Click [here](https://github.optum.com/UIToolkit/uitoolkit-react/blob/${BRANCH_NAME}/src/component/Dropdown/types.ts#L1) for the type definition.`,
//       type: { name: "string", required: true, summary: "IDropdownItem[]" },
//       control: {
//         type: null,
//       },
//     },
//     placeholderText: {
//       description: "Text to use as dropdown placeholder",
//       type: { name: "string", required: false, summary: "string" },
//       defaultValue: { summary: "Please Select" },
//       control: {
//         type: null,
//       },
//     },
//     error: {
//       description: "Whether the dropdown is in error state",
//       type: { name: "string", required: false, summary: "null | string" },
//       control: {
//         type: null,
//       },
//     },
//     disabled: {
//       description: "Whether the dropdown is disabled",
//       type: { name: "string", required: false, summary: "boolean" },
//       control: {
//         type: null,
//       },
//     },
//     required: {
//       description: "Whether the dropdown is required",
//       type: { name: "string", required: false, summary: "boolean" },
//       control: {
//         type: null,
//       },
//     },
//     value: {
//       description: "Selected value of the single context dropdown",
//       type: { name: "string", required: false, summary: "IDropdownItem" },
//       control: {
//         type: null,
//       },
//     },
//     initialValues: {
//       description: "Array of initial values of the multi context dropdown",
//       type: { name: "string", required: false, summary: "IDropdownItem" },
//       control: {
//         type: null,
//       },
//     },
//     onChange: {
//       description: "Function called on dropdown change",
//       type: {
//         name: "string",
//         required: false,
//         summary: "onSingleDropdownChange | onMultiDropdownChange",
//       },
//       control: {
//         type: null,
//       },
//     },
//     onBlur: {
//       description: "Function called on dropdown menu blur",
//       type: { name: "string", required: false, summary: "() => void" },
//       control: {
//         type: null,
//       },
//     },
//     fieldsetLabel: {
//       description: "Label for fieldset in multi-select dropdown",
//       type: { name: "string", required: false, summary: "() => void" },
//       control: {
//         type: null,
//       },
//     },
//     selectAllLabel: {
//       description: "Provided label for dropdown select all",
//       type: { name: "string", required: false, summary: "string" },
//       defaultValue: { summary: "Select All" },
//       control: {
//         type: null,
//       },
//     },
//     selectedText: {
//       description:
//         "Provided, visually hidden selected text for button used for a11y",
//       type: { name: "string", required: false, summary: "string" },
//       defaultValue: { summary: "selected" },
//       control: {
//         type: null,
//       },
//     },
//     buttonDescriptiveText: {
//       description:
//         "Provided, visually hidden descriptive text for button used for a11y",
//       type: { name: "string", required: false, summary: "string" },
//       defaultValue: {
//         summary:
//           "Press enter or space to expand the list and use tab key to navigate through the list",
//       },
//       control: {
//         type: null,
//       },
//     },
//   },
// };

// const countries: IDropdownItem[] = [
//   { id: "1", label: "England", value: "ENG" },
//   { id: "2", label: "Ireland", value: "EIR" },
//   { id: "3", label: "Scotland", value: "SCOT" },
//   { id: "4", label: "France", value: "FRANC" },
//   { id: "5", label: "Germany", value: "GER" },
// ];

// const groupedCountries: IDropdownItem[] = [
//   { id: "1", label: 'England', value: 'ENG' },
//   { id: "2", label: 'Scotland', value: 'SCOT' },
//   {
//     id: "3",
//     label: 'Ireland',
//     value: [
//       { id: "4", label: 'Dublin', value: 'DUB' },
//       { id: "5", label: 'Meath', value: 'MEA' },
//       { id: "6", label: 'Westmeath', value: 'WM' },
//     ],
//   },
//   { id: "7", label: 'Spain', value: 'SPN' },
//   {
//     id: "8",
//     label: 'France',
//     value: [
//       { id: "9", label: 'Paris', value: 'PAR' },
//       { id: "10", label: 'Nice', value: 'NIC' },
//     ],
//   },
//   { id: "11", label: 'Germany', value: 'GER' },
// ];

// const BasicStory: React.FC = () => {
//   return (
//     <div className="grid">
//       <div className="row">
//         <div className="col">
//           <FormControl id={"basic-dropdown"}>
//             <Label>My Label</Label>
//             <HelperText>My Helper Text</HelperText>
//             <Dropdown type="single" items={countries} />
//           </FormControl>
//         </div>
//       </div>
//     </div>
//   );
// };

// const BasicTemplate: Story<any> = () => <BasicStory />;
// export const Basic = BasicTemplate.bind({});

// const basicSource = `
// import React from "react";
// import {
//   FormControl,
//   HelperText,
//   IDropdownItem,
//   Label,
//   Dropdown,
// } from "@uitk/react";

// const countries: IDropdownItem[] = [
//   { id: "1", label: "England", value: "ENG" },
//   { id: "2", label: "Ireland", value: "EIR" },
//   { id: "3", label: "Scotland", value: "SCOT" },
//   { id: "4", label: "France", value: "FRANC" },
//   { id: "5", label: "Germany", value: "GER" },
// ];

// export default () => (
//   <FormControl id={"select"}>
//     <Label>My Label</Label>
//     <HelperText>My Helper Text</HelperText>
//     <Dropdown type="single" items={countries} />
//   </FormControl>
// )
// `;

// Basic.parameters = {
//   docs: {
//     source: {
//       code: basicSource,
//       language: "tsx",
//     },
//   },
// };

// const ControlledStory: React.FC = () => {
//   const [selectedItem, setSelectedItem] = useState(countries[1]);
//   return (
//     <div className="grid">
//       <div className="row">
//         <div className="col">
//           <FormControl id={"controlled-dropdown"}>
//             <Label>My Label</Label>
//             <HelperText>My Helper Text</HelperText>
//             <Dropdown
//               type="single"
//               items={countries}
//               value={selectedItem}
//               onChange={setSelectedItem}
//             />
//           </FormControl>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ControlledTemplate: Story<any> = () => <ControlledStory />;
// export const Controlled = ControlledTemplate.bind({});

// const controlledSource = `
// import React, { useState } from "react";
// import {
//   FormControl,
//   HelperText,
//   IDropdownItem,
//   Label,
//   Dropdown,
// } from "@uitk/react";

// const countries: IDropdownItem[] = [
//   { id: "1", label: "England", value: "ENG" },
//   { id: "2", label: "Ireland", value: "EIR" },
//   { id: "3", label: "Scotland", value: "SCOT" },
//   { id: "4", label: "France", value: "FRANC" },
//   { id: "5", label: "Germany", value: "GER" },
// ];

// export default () => {
//   const [selectedItem, setSelectedItem] = useState(countries[1]);
//   return (
//     <FormControl id={"select"}>
//       <Label>My Label</Label>
//       <HelperText>My Helper Text</HelperText>
//       <Dropdown
//         type="single"
//         items={countries}
//         value={selectedItem}
//         onChange={setSelectedItem}
//       />
//     </FormControl>
//   );
// }
// `;

// Controlled.parameters = {
//   docs: {
//     source: {
//       code: controlledSource,
//       language: "tsx",
//     },
//   },
// };

// const RequiredStory: React.FC = () => {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [blurred, setBlurred] = useState(false);
//   const error = !selectedItem && blurred ? "Dropdown is required" : "";

//   return (
//     <div className="grid">
//       <div className="row">
//         <div className="col">
//           <FormControl id={"required-dropdown"} required error={error}>
//             <Label>My Label</Label>
//             <HelperText>My Helper Text</HelperText>
//             <Dropdown
//               type="single"
//               items={countries}
//               value={selectedItem}
//               onChange={setSelectedItem}
//               onBlur={() => setBlurred(true)}
//             />
//           </FormControl>
//         </div>
//       </div>
//     </div>
//   );
// };

// const RequiredTemplate: Story<any> = () => <RequiredStory />;
// export const Required = RequiredTemplate.bind({});

// const requiredSource = `
// import React, { useState } from "react";
// import {
//   FormControl,
//   HelperText,
//   IDropdownItem,
//   Label,
//   Dropdown,
// } from "@uitk/react";

// const countries: IDropdownItem[] = [
//   { id: "1", label: "England", value: "ENG" },
//   { id: "2", label: "Ireland", value: "EIR" },
//   { id: "3", label: "Scotland", value: "SCOT" },
//   { id: "4", label: "France", value: "FRANC" },
//   { id: "5", label: "Germany", value: "GER" },
// ];

// export default () => {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [blurred, setBlurred] = useState(false);
//   const error =
//     !selectedItem && blurred ? "Dropdown is required" : "";

//   return (
//     <FormControl id={"select"} required error={error}>
//       <Label>My Label</Label>
//       <HelperText>My Helper Text</HelperText>
//       <Dropdown
//         type="single"
//         items={countries}
//         value={selectedItem}
//         onChange={setSelectedItem}
//         onBlur={() => setBlurred(true)}
//       />
//     </FormControl>
//   );
// }
// `;

// Required.parameters = {
//   docs: {
//     source: {
//       code: requiredSource,
//       language: "tsx",
//     },
//   },
// };

// const MultiStory: React.FC = () => {
//   return (
//     <div className="grid">
//       <div className="row">
//         <div className="col">
//           <FormControl id={"multi-dropdown"}>
//             <Label>My Label</Label>
//             <HelperText>My Helper Text</HelperText>
//             <Dropdown
//               type="multi"
//               items={countries}
//               fieldsetLabel="Countries"
//             />
//           </FormControl>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MultiTemplate: Story<any> = () => <MultiStory />;
// export const Multi = MultiTemplate.bind({});

// const multiSource = `
// import React from "react";
// import {
//   FormControl,
//   HelperText,
//   IDropdownItem,
//   Label,
//   Dropdown,
// } from "@uitk/react";

// const countries: IDropdownItem[] = [
//   { id: "1", label: "England", value: "ENG" },
//   { id: "2", label: "Ireland", value: "EIR" },
//   { id: "3", label: "Scotland", value: "SCOT" },
//   { id: "4", label: "France", value: "FRANC" },
//   { id: "5", label: "Germany", value: "GER" },
// ];

// export default () => (
//   <FormControl id={"multi-dropdown"}>
//     <Label>My Label</Label>
//     <HelperText>My Helper Text</HelperText>
//     <Dropdown
//       type="multi"
//       items={countries}
//       fieldsetLabel="Countries"
//     />
//   </FormControl>
// )
// `;

// Multi.parameters = {
//   docs: {
//     source: {
//       code: multiSource,
//       language: "tsx",
//     },
//   },
// };

// const MultiControlledStory: React.FC = () => {
//   const [selectedItems, setSelectedItems] = useState([countries[1]]);
//   return (
//     <div className="grid">
//       <div className="row">
//         <div className="col">
//           <FormControl id={"multi-controlled-dropdown"}>
//             <Label>My Label</Label>
//             <HelperText>My Helper Text</HelperText>
//             <Dropdown
//               type="multi"
//               items={countries}
//               onChange={setSelectedItems}
//               initialValues={selectedItems}
//               fieldsetLabel="Countries"
//             />
//           </FormControl>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MultiControlledTemplate: Story<any> = () => <MultiControlledStory />;
// export const MultiControlled = MultiControlledTemplate.bind({});

// const multiControlledSource = `
// import React, { useState } from "react";
// import {
//   FormControl,
//   HelperText,
//   IDropdownItem,
//   Label,
//   Dropdown,
// } from "@uitk/react";

// const countries: IDropdownItem[] = [
//   { id: "1", label: "England", value: "ENG" },
//   { id: "2", label: "Ireland", value: "EIR" },
//   { id: "3", label: "Scotland", value: "SCOT" },
//   { id: "4", label: "France", value: "FRANC" },
//   { id: "5", label: "Germany", value: "GER" },
// ];

// export default () => {
//   const [selectedItems, setSelectedItems] = useState([countries[1]]);

//   return (
//     <FormControl id={"multi-controlled-dropdown"}>
//       <Label>My Label</Label>
//       <HelperText>My Helper Text</HelperText>
//       <Dropdown
//         type="multi"
//         items={countries}
//         onChange={setSelectedItems}
//         initialValues={selectedItems}
//         fieldsetLabel="Countries"
//       />
//     </FormControl>
//   );
// }
// `;

// MultiControlled.parameters = {
//   docs: {
//     source: {
//       code: multiControlledSource,
//       language: "tsx",
//     },
//   },
// };

// const MultiRequiredStory: React.FC = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [blurred, setBlurred] = useState(false);
//   const error =
//     selectedItems.length === 0 && blurred ? "Dropdown is required" : "";
//   return (
//     <div className="grid">
//       <div className="row">
//         <div className="col">
//           <FormControl id={"multi-required-dropdown"} required error={error}>
//             <Label>My Label</Label>
//             <HelperText>My Helper Text</HelperText>
//             <Dropdown
//               type="multi"
//               items={countries}
//               fieldsetLabel="Countries"
//               onBlur={() => setBlurred(true)}
//               onChange={setSelectedItems}
//             />
//           </FormControl>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MultiRequiredTemplate: Story<any> = () => <MultiRequiredStory />;
// export const MultiRequired = MultiRequiredTemplate.bind({});

// const multiRequiredSource = `
// import React, { useState } from "react";
// import {
//   FormControl,
//   HelperText,
//   IDropdownItem,
//   Label,
//   Dropdown,
// } from "@uitk/react";

// const countries: IDropdownItem[] = [
//   { id: "1", label: "England", value: "ENG" },
//   { id: "2", label: "Ireland", value: "EIR" },
//   { id: "3", label: "Scotland", value: "SCOT" },
//   { id: "4", label: "France", value: "FRANC" },
//   { id: "5", label: "Germany", value: "GER" },
// ];

// export default () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [blurred, setBlurred] = useState(false);
//   const error =
//     selectedItems.length === 0 && blurred ? "Dropdown is required" : "";

//   return (
//     <FormControl id={"multi-required-dropdown"} required error={error}>
//       <Label>My Label</Label>
//       <HelperText>My Helper Text</HelperText>
//       <Dropdown
//         type="multi"
//         items={countries}
//         fieldsetLabel="Countries"
//         onBlur={() => setBlurred(true)}
//         onChange={setSelectedItems}
//       />
//     </FormControl>
//   );
// }
// `;

// MultiRequired.parameters = {
//   docs: {
//     source: {
//       code: multiRequiredSource,
//       language: "tsx",
//     },
//   },
// };

// const MultiGroupedStory: React.FC = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   return (
//     <div className="grid">
//       <div className="row">
//         <div className="col">
//           <FormControl id={"multi-grouped-dropdown"}>
//             <Label>My Label</Label>
//             <HelperText>My Helper Text</HelperText>
//             <Dropdown
//               type="multi"
//               items={groupedCountries}
//               fieldsetLabel="Countries"
//               initialValues={selectedItems}
//               onChange={setSelectedItems}
//             />
//           </FormControl>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MultiGroupedTemplate: Story<any> = () => <MultiGroupedStory />;
// export const MultiGrouped = MultiGroupedTemplate.bind({});

// const multiGroupedSource = `
// import React, { useState } from "react";
// import {
//   FormControl,
//   HelperText,
//   IDropdownItem,
//   Label,
//   Dropdown,
// } from "@uitk/react";

// const groupedCountries: IDropdownItem[] = [
//   { id: "1", label: 'England', value: 'ENG' },
//   { id: "2", label: 'Scotland', value: 'SCOT' },
//   {
//     id: "3",
//     label: 'Ireland',
//     value: [
//       { id: "4", label: 'Dublin', value: 'DUB' },
//       { id: "5", label: 'Meath', value: 'MEA' },
//       { id: "6", label: 'Westmeath', value: 'WM' },
//     ],
//   },
//   { id: "7", label: 'Spain', value: 'SPN' },
//   {
//     id: "8",
//     label: 'France',
//     value: [
//       { id: "9", label: 'Paris', value: 'PAR' },
//       { id: "10", label: 'Nice', value: 'NIC' },
//     ],
//   },
//   { id: "11", label: 'Germany', value: 'GER' },
// ];

// export default () => {
//   const [selectedItems, setSelectedItems] = useState([]);

//   return (
//     <FormControl id={"multi-grouped-dropdown"}>
//       <Label>My Label</Label>
//       <HelperText>My Helper Text</HelperText>
//       <Dropdown
//         type="multi"
//         items={groupedCountries}
//         fieldsetLabel="Countries"
//         initialValues={selectedItems}
//         onChange={setSelectedItems}
//       />
//     </FormControl>
//   );
// }
// `;

// MultiGrouped.parameters = {
//   docs: {
//     source: {
//       code: multiGroupedSource,
//       language: "tsx",
//     },
//   },
// };

// export const Guidelines = () => <GuidelineViewer ids={["dropdown"]} />;
