// import React, { useMemo, useEffect, useRef } from "react";
// import { TrackingConstants } from "@constant";
// import {
//   NavigationConfig,
//   NavigationStatePanel,
//   NavigationStateLink,
//   NavType,
//   INav,
//   IPanel,
//   IPanelItemAction,
//   IPanelItemTrigger,
//   INavigationInternalCallbacks,
//   INavigationDispatchContext,
// } from "./types";
// import styled, { css } from "styled-components";
// import { useBreakpoint } from "@hook";
// import {
//   getNativeProps,
//   anchorProperties,
//   buttonProperties,
// } from "../../utility/getNativeProps";
// import { useTracking } from "../TrackingProvider";
// import {
//   NavigationProvider,
//   getActiveStateForRoute,
//   useNavigationState,
//   useNavigationOptions,
//   useNavigationVariant,
//   useNavigationDispatch,
//   useInternalCallbacks,
//   useNavigationRefs,
//   useNavigationConfig,
//   isPanel,
// } from "./NavigationContext";
// import { useNavigationExpanded, useVerticalNavigationDefinedCallback } from "./VerticalNavigationContext";
// import { getStylesForVariant } from "./styles";
// import {
//   CaretDownCentered,
//   CaretUpCentered,
//   CaretRight,
// } from "@uitk/react-icons/esm";
// import { useButton } from "@react-aria/button";
// import { useLink } from "@react-aria/link";
// import { PressEvent } from "@react-types/shared";
// import { AriaButtonProps } from "@react-types/button";
// import classNames from "classnames";

// interface INavigationProps {
//   variant: NavType;
//   config: NavigationConfig;
//   useLocation: () => any;
//   internalCallbacks?: INavigationInternalCallbacks;
//   isDesktop?: boolean;
//   isOpen?: boolean;
// }
// /**
//  * ============================================================================
//  * Navigation
//  * ============================================================================
//  *
//  *  All navigation state is computed in the NavigationReducer.
//  *
//  *  Navigation state and API for updating it is exposed via NavigationContext.
//  *
//  *  This file consumes the context and contains all the rendering logic and
//  *  shared styles and thus is only concerned with the markup.
//  *
//  *  The navigation for all variants is divided in to three main sections:
//  *
//  *      - Panel
//  *
//  *          this corresponds to the ul element
//  *
//  *      - PanelItemAction
//  *
//  *          this corresponds to li element that contains a link or callback
//  *
//  *      - PanelItemTrigger
//  *
//  *          this corresponds to an li element that contains a button with label
//  *          that expands a child Panel
//  *
//  *
//  *  Only put styles in this file that apply to _all_ navigation variants.
//  *
//  *  Variant specific styles should reside on ./styles/{variant}/{'mobile','desktop'}.ts
//  *  and be imported dynamically via getStylesForVariant call
//  */
// export const Navigation: React.FC<INavigationProps> = React.memo(
//   ({
//     config,
//     internalCallbacks,
//     isDesktop,
//     isOpen = true,
//     useLocation,
//     variant,
//   }) => {
//     const route = useLocation();
//     const initialState = useMemo(
//       () => getActiveStateForRoute(config, { route, isDesktop }),
//       [config]
//     );
//     const { breakpoint } = useBreakpoint();

//     const isExpanded = useNavigationExpanded();

//     const verticalNavDefinedCallback = useVerticalNavigationDefinedCallback();

//     const tracker = useTracking();
//     useEffect(() => {
//       tracker.mount(TrackingConstants.components.Navigation.id);
//     }, [tracker]);

//     useEffect(() => {
//       verticalNavDefinedCallback(variant === NavType.VERTICAL);
//     }, []);

//     const openPanelButtonRef = useRef<HTMLButtonElement>(null);
//     const refs = useMemo(
//       () => ({
//         openPanelButtonRef,
//       }),
//       []
//     );

//     return (
//       <NavigationProvider
//         initialState={initialState}
//         useLocation={useLocation}
//         variant={variant}
//         internalCallbacks={internalCallbacks}
//         refs={refs}
//         config={config}
//       >
//         <NavigationContainer
//           isDesktop={breakpoint === "large"}
//           isOpen={isExpanded}
//         />
//       </NavigationProvider>
//     );
//   }
// );

// Navigation.displayName = "Navigation";

// const MenuLabel = styled.label`
//   ${({ theme: { fontFamilyBase, fontSizeH4, fontWeightH4, spacingM } }) => css`
//     display: block;
//     padding-top: ${spacingM};
//     font-size: ${fontSizeH4};
//     font-weight: ${fontWeightH4};
//     font-family: ${fontFamilyBase};
//   `}
// `;

// const _NavigationContainer: React.FC<{
//   isDesktop: boolean;
//   isOpen: boolean;
//   className?: string;
// }> = ({ className, isDesktop }) => {
//   const navRef = useRef<HTMLElement>(null);
//   const { openPanelButtonRef } = useNavigationRefs();
//   const state = useNavigationState();
//   const variant = useNavigationVariant();
//   const { closeNav } = useNavigationDispatch();

//   // on desktop close open panels when we click outside the nav
//   useEffect(() => {
//     const handleDocumentClick = (e: MouseEvent) => {
//       if (isDesktop) {
//         if (
//           navRef.current &&
//           // @ts-ignore
//           // for some reason typescript rejects type EventTarget as a valid Node type
//           // but this code works as intended
//           !navRef.current.contains(e.target) &&
//           variant !== NavType.VERTICAL
//         ) {
//           closeNav();
//         }
//       }
//     };
//     document.addEventListener("click", handleDocumentClick);
//     return () => document.removeEventListener("click", handleDocumentClick);
//   }, [closeNav, isDesktop]);

//   // on desktop close open panels when we click outside the nav
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.keyCode === 27 && isDesktop) {
//         // @ts-ignore
//         if (openPanelButtonRef.current) {
//           openPanelButtonRef.current.focus();
//           closeNav();
//         }
//       }
//     };
//     document.addEventListener("keyup", handleEsc);
//     return () => document.removeEventListener("keyup", handleEsc);
//   }, [closeNav, isDesktop]);

//   return (
//     <Nav
//       ref={navRef}
//       variant={variant}
//       isDesktop={isDesktop}
//       aria-label={`${variant.toLowerCase()}-navigation`}
//       className={classNames("uitk-navigation", className)}
//     >
//       {!isDesktop && <MenuLabel>{state.label || "Menu"}</MenuLabel>}
//       <Panel isDesktop={isDesktop} level={0} variant={variant}>
//         {state &&
//           state.links.map((item, index) =>
//             isPanel(item) ? (
//               <PanelItemTriggerContainer
//                 buttonRef={item.expanded ? openPanelButtonRef : null}
//                 key={index}
//                 level={0}
//                 parentIconOffset={0}
//                 {...item}
//               />
//             ) : (
//               <PanelItemActionContainer
//                 key={index}
//                 level={0}
//                 parentIconOffset={0}
//                 {...item}
//               />
//             )
//           )}
//       </Panel>
//     </Nav>
//   );
// };

// const secondaryNavigationOpenMobileStyles = css`
//   flex-direction: column;
//   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
//   background: ${props => props.theme.colorBackgroundResponsiveNav};
//   border-bottom: solid 4px ${props => props.theme.colorBackgroundAccentBrand};
//   border-bottom-left-radius: ${props => props.theme.borderRadiusBase};
//   border-bottom-right-radius: ${props => props.theme.borderRadiusBase};
//   padding: ${props => props.theme.spacingM};
// `;

// export const NavigationContainer = styled(_NavigationContainer)`
//   ${({ isDesktop, isOpen }) => css`
//     display: ${isOpen || isDesktop ? "flex" : "none"};
//     ${isOpen && secondaryNavigationOpenMobileStyles};
//   `}
// `;

// const navMobileStyles = css`
//   ${({ theme: { colorBackgroundResponsiveNav, colorTextGlobalNav } }) => css`
//     background: ${colorBackgroundResponsiveNav};
//     color: ${colorTextGlobalNav};
//     width: 100%;
//   `}
// `;

// const Nav = styled.nav<INav>`
//   ${({ isDesktop, variant }) => css`
//     button {
//       background: none;
//       border: none;
//       outline: none;
//       cursor: pointer;
//     }
//     /* reset for all a elements */
//     a {
//       text-decoration: none;
//     }

//     svg {
//       fill: currentColor;
//     }

//     ${!isDesktop && navMobileStyles}

//     ${getStylesForVariant(variant).navStyles}
//   `};
// `;

// const CaretWrapper = styled.div<{ level: number; variant: NavType }>`
//   ${({ variant }) => css`
//     display: inline-flex;
//     && svg {
//       fill: currentColor;
//     }
//     ${getStylesForVariant(variant).caretStyles}
//   `}
// `;

// const Caret: React.FC<{
//   level: number;
//   expanded: boolean;
//   isDesktop: boolean;
//   variant: NavType;
// }> = ({ expanded, isDesktop, level, variant }) => {
//   let caret;

//   const { panelClosedIcon, panelExpandedIcon, panelFlyoutIcon } =
//     useNavigationConfig();

//   if (!isDesktop || level === 0 || variant === NavType.VERTICAL) {
//     caret = expanded
//       ? panelExpandedIcon || <CaretUpCentered size="m" />
//       : panelClosedIcon || <CaretDownCentered size="m" />;
//   } else {
//     caret = panelFlyoutIcon || <CaretRight size="m" />;
//   }
//   return (
//     <CaretWrapper variant={variant} level={level}>
//       {caret}
//     </CaretWrapper>
//   );
// };

// const PanelItemTriggerContent = styled.span`
//   ${({ theme: { fontWeightStrong } }) => css`
//     flex-direction: column;
//     overflow-wrap: break-word;
//     &:after {
//       display: block;
//       content: attr(data-text);
//       font-weight: ${fontWeightStrong};
//       height: 0;
//       overflow: hidden;
//       visibility: hidden;
//     }
//   `}
// `;

// const PanelItemTriggerContainer: React.FC<
//   NavigationStatePanel & {
//     level: number;
//     buttonRef?: React.MutableRefObject<HTMLButtonElement>;
//     parentIconOffset: number;
//   }
// > = ({
//   active,
//   buttonRef,
//   expanded,
//   icon,
//   label,
//   level,
//   links,
//   parentIconOffset,
// }) => {
//   const variant = useNavigationVariant();
//   const { closePanel: close, openPanel: open } = useNavigationDispatch();
//   const { breakpoint } = useBreakpoint();
//   const isDesktop = breakpoint === "large";
//   const triggerHandler = expanded
//     ? () => close(label)
//     : () => open(label, variant, isDesktop);

//   const iconOffset = icon ? parentIconOffset + 1 : parentIconOffset;

//   return (
//     <PanelItemTrigger
//       key={label}
//       isDesktop={isDesktop}
//       level={level}
//       expanded={expanded}
//       active={active}
//       variant={variant}
//       parentIconOffset={parentIconOffset}
//     >
//       <PanelButton
//         aria-expanded={expanded ? true : false}
//         onPress={triggerHandler}
//         buttonRef={buttonRef}
//       >
//         <span>
//           {icon && <IconWrapper>{icon}</IconWrapper>}
//           <PanelItemTriggerContent data-text={label}>
//             {label}{" "}
//           </PanelItemTriggerContent>
//         </span>
//         <Caret
//           variant={variant}
//           level={level}
//           expanded={expanded}
//           isDesktop={isDesktop}
//         />
//       </PanelButton>
//       {expanded && (
//         <Panel level={level + 1} isDesktop={isDesktop} variant={variant}>
//           {links.map(item =>
//             isPanel(item) ? (
//               <PanelItemTriggerContainer
//                 parentIconOffset={iconOffset}
//                 key={item.label}
//                 level={level + 1}
//                 {...item}
//               />
//             ) : (
//               <PanelItemActionContainer
//                 parentIconOffset={iconOffset}
//                 key={item.label}
//                 level={level + 1}
//                 {...item}
//               />
//             )
//           )}
//         </Panel>
//       )}
//     </PanelItemTrigger>
//   );
// };

// const Panel = styled.ul<IPanel>`
//   ${({ variant }) => css`
//     margin: 0;
//     padding: 0;
//     list-style: none;
//     display: flex;
//     flex-direction: column;
//     flex-grow: 1;
//     /* make use of z-index enum */
//     z-index: 10000;
//     ${getStylesForVariant(variant).panelStyles}
//   `}
// `;

// interface PanelButtonProps {
//   onPress: (e: PressEvent) => void;
//   className?: string;
// }

// const _PanelButton: React.FC<
//   PanelButtonProps &
//     AriaButtonProps & { buttonRef?: React.MutableRefObject<HTMLButtonElement> }
// > = ({ buttonRef, children, className, ...unhandledProps }) => {
//   const internalRef = useRef();
//   const ref = buttonRef || internalRef;
//   const { buttonProps } = useButton(unhandledProps, ref);

//   return (
//     <button {...buttonProps} ref={ref} className={className}>
//       {children}
//     </button>
//   );
// };

// const PanelButton = styled(_PanelButton)`
//   display: inline-block;
//   & > span {
//     flex-grow: 1;
//   }
// `;

// type onClick = (e: React.MouseEvent<HTMLAnchorElement>) => void;
// const ActionLink: React.FC<NavigationStateLink & { onClick?: onClick }> =
//   item => {
//     const { children, url } = item;
//     const ref = useRef();
//     const { linkProps } = useLink(getNativeProps(item, anchorProperties), ref);
//     return (
//       <a {...linkProps} ref={ref} href={url}>
//         {children}
//       </a>
//     );
//   };

// const ActionButton: React.FC<NavigationStateLink & { onClick: onClick }> =
//   item => {
//     const ref = useRef();
//     const { children } = item;
//     const { buttonProps } = useButton(
//       getNativeProps(item, buttonProperties),
//       ref
//     );
//     return (
//       <button {...buttonProps} ref={ref}>
//         {children}
//       </button>
//     );
//   };

// const PanelItemActionContent = styled.span`
//   ${({ theme: { fontWeightStrong } }) => css`
//     overflow-wrap: break-word;
//     flex-direction: column;
//     &:after {
//       display: block;
//       content: attr(data-text);
//       font-weight: ${fontWeightStrong};
//       height: 0;
//       overflow: hidden;
//       visibility: hidden;
//     }
//   `}
// `;

// const handlePanelAutoClosing = (
//   variant: NavType,
//   actions: INavigationDispatchContext
// ) => {
//   if (variant === NavType.GLOBAL || variant === NavType.HORIZONTAL) {
//     actions.closeNav();
//   }
// };

// const handlePanelAutoFocusing = (
//   variant: NavType,
//   level: number,
//   openedPanelTrigger: React.MutableRefObject<any>
// ) => {
//   if (level !== 0 && variant !== NavType.VERTICAL) {
//     openedPanelTrigger?.current && openedPanelTrigger.current.focus();
//   }
// };

// const PanelItemActionContainer: React.FC<
//   NavigationStateLink & { level: number; parentIconOffset: number }
// > = item => {
//   const variant = useNavigationVariant();
//   const actions = useNavigationDispatch();
//   const { openPanelButtonRef } = useNavigationRefs();
//   const { onActionItemClick } = useInternalCallbacks();

//   const { breakpoint } = useBreakpoint();
//   const isDesktop = breakpoint === "large";

//   const { linkAs, onLinkClick } = useNavigationOptions();
//   const LinkAs = linkAs ? linkAs : item.onClick ? ActionButton : ActionLink;

//   const { level, parentIconOffset, ...itemProps } = item;
//   const { active, icon, label } = itemProps;

//   const userOnClick = itemProps.onClick ? itemProps.onClick : onLinkClick;
//   const ariaProps = itemProps.active ? { "aria-current": true } : {};

//   const onClick = (e: React.MouseEvent<HTMLElement>) => {
//     onActionItemClick && onActionItemClick(isDesktop);

//     if (isDesktop) {
//       handlePanelAutoClosing(variant, actions);
//       handlePanelAutoFocusing(variant, level, openPanelButtonRef);
//     }

//     userOnClick && userOnClick(e, itemProps);
//   };

//   return (
//     <PanelItemAction
//       key={label}
//       isDesktop={isDesktop}
//       level={level}
//       active={active}
//       variant={variant}
//       parentIconOffset={parentIconOffset}
//     >
//       <LinkAs {...itemProps} {...ariaProps} onClick={onClick}>
//         <span>
//           {icon && <IconWrapper>{icon}</IconWrapper>}
//           <PanelItemActionContent data-text={label}>
//             {label}
//           </PanelItemActionContent>
//         </span>
//       </LinkAs>
//     </PanelItemAction>
//   );
// };

// const IconWrapper = styled.span`
//   display: inline-flex;
//   align-items: center;
//   margin-right: ${props => props.theme.spacingXS};
// `;

// const PanelItemTrigger = styled.li<IPanelItemTrigger>`
//   ${({ variant }) => css`
//     ${getStylesForVariant(variant).panelItemTriggerStyles}
//   `}
// `;

// const PanelItemAction = styled.li<IPanelItemAction>`
//   ${({ variant }) => css`
//     ${getStylesForVariant(variant).panelItemActionStyles}
//   `}
// `;
