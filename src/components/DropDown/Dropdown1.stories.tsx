// import React from "react";
// import { FormControl, HelperText, Label } from '../../';
// import { Dropdown } from "./Dropdown.component.tsx";

// export default {
//   title: "Components/Dropdown - dev",
// };

// const countries = [
//   { id: "1", label: "England", value: "ENG" },
//   { id: "2", label: "Ireland", value: "EIR" },
//   { id: "3", label: "Greece", value: "GRE" },
//   { id: "4", label: "Sweden", value: "SWE" },
//   { id: "5", label: "Scotland", value: "SCOT" },
//   { id: "6", label: "France", value: "FRANC" },
//   { id: "7", label: "Germany", value: "GER" },
//   { id: "8", label: "Switzerland", value: "SWI" },
// ];


// export const DisabledSingle: React.FC = () => {

//   return (
//     <div className="grid">
//       <div className="row">
//         <div className="col">
//           <FormControl id={"disabled-single-dropdown"} disabled>
//             <Label>My Label</Label>
//             <HelperText>My Helper Text</HelperText>
//             <Dropdown type="single" items={countries} />
//           </FormControl>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const DisabledMulti: React.FC = () => {

//   return (
//     <div className="grid">
//       <div className="row">
//         <div className="col">
//           <FormControl id={"disabled-multi-dropdown"} disabled>
//             <Label>My Label</Label>
//             <HelperText>My Helper Text</HelperText>
//             <Dropdown type="multi" items={countries} fieldsetLabel="Countries" />
//           </FormControl>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const Placeholder: React.FC = () => {
//   return (
//     <div className="grid">
//       <div className="row">
//         <div className="col">
//           <FormControl id={"placeholder-dropdown"}>
//             <Label>My Label</Label>
//             <HelperText>My Helper Text</HelperText>
//             <Dropdown type="single" items={countries} placeholderText="Dropdown placeholder"/>
//           </FormControl>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const CharacterNavigation: React.FC = () => {
//   return (
//     <div className="grid">
//       <div className="row">
//         <div className="col">
//           <FormControl id={"character-nav-dropdown"}>
//             <Label>My Label</Label>
//             <HelperText>My Helper Text</HelperText>
//             <Dropdown type="multi" items={countries} fieldsetLabel="Countries"/>
//           </FormControl>
//         </div>
//       </div>
//     </div>
//   );
// };
