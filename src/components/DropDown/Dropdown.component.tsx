// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import classNames from "classnames";
// import { useTracking } from "../TrackingProvider";
// import { TrackingConstants } from "@constant";
// import { getUuid } from "../../utility";
// import { DropdownProps } from "./types";
// import { DropdownSingle } from "./DropdownSingle";
// import { DropdownMulti } from "./DropdownMulti";

// export { DropdownSingleProps } from "./types";

// const uuid = getUuid("dropdown");

// export const _Dropdown: React.FC<DropdownProps> & UITKComponent = ({
//   // @ts-ignore
//   "aria-describedby": describedby,
//   className,
//   id,
//   ...unhandledProps
// }) => {
//   const [defaultId] = useState(uuid);
//   const effectiveId = id || defaultId;
//   // Use Form Control describedby as labelledby for uniform screen reader performance
//   const effectiveLabelledBy = describedby
//     ? `${describedby} ${effectiveId}-text`
//     : `${effectiveId}-text`;
//   const tracker = useTracking();
//   useEffect(() => {
//     tracker.mount(TrackingConstants.components.Dropdown.id);
//   }, [tracker]);
//   return (
//     <div className={classNames("uitk-dropdown", className)}>
//       {unhandledProps.type === "single" ? (
//         <DropdownSingle
//           id={effectiveId}
//           labelledBy={effectiveLabelledBy}
//           {...unhandledProps}
//         />
//       ) : (
//         <DropdownMulti
//           id={effectiveId}
//           labelledBy={effectiveLabelledBy}
//           {...unhandledProps}
//         />
//       )}
//     </div>
//   );
// };

// export const Dropdown = styled(_Dropdown)`
//   width: 100%;
//   position: relative;
// `;

// /**
//  * Name and type definitions for the component
//  */
// Dropdown.uitkName = "Dropdown";
// Dropdown.uitkType = "FormField";

// export default Dropdown;
