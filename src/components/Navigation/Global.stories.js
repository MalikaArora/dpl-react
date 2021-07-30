// import React from "react";
// import {
//   Header as HeaderComponent,
//   HeaderProps,
//   Button,
//   Navigation,
//   NavType,
// } from "@component";
// import UhcLogoWithProductName from "../../svg/uhc-logos/uhc-u-logo.svg";
// import UhcSolasLogo from "../../svg/uhc-logos/UHC_Solas_BrandLogo.svg";
// import UhcProductName from "../../svg/uhc-logos/UHC_Solas_ProductName.svg";
// import Logo from "../../svg/Logo.svg";
// import ProductName from "../../svg/ProductName.svg";
// import LogoWithProductName from "../../svg/LogoWithProductName.svg";
// import { Link, useLocation } from "react-router-dom";
// import StoryRouter from "storybook-react-router";
// import styled, { css } from "styled-components";
// import { useGlobals } from "@storybook/client-api";
// import { Home, HealthProfile, Phone, DirectMail } from "@uitk/react-icons";
// import { LinkProps } from "../Navigation/types";
// import {
//   getNativeProps,
//   anchorProperties,
//   buttonProperties,
// } from "../../utility/getNativeProps";
// import { Story } from "@storybook/react";
// import { GuidelineViewer } from "@storybook-uitk";

 
// const CurrentRouteWrapper = styled.div`
//   padding: ${props => props.theme.spacingSM} 0;
// `;

// const CurrentRoute = styled.span`
//   margin-left: ${props => props.theme.spacingXS};
// `;

// const CurrentRouteContainer: React.FC = () => (
//   <CurrentRouteWrapper>
//     <strong>Current Route:</strong>
//     <CurrentRoute>{useCurrentRoute()}</CurrentRoute>
//   </CurrentRouteWrapper>
// );

// const Route: React.FC<LinkProps> = item => {
//   const { children, label, url } = item;

//   if (label === "Dark" || label === "Light") {
//     const buttonProps = getNativeProps(item, buttonProperties);
//     return <button {...buttonProps}>{children}</button>;
//   }

//   const anchorProps = getNativeProps(item, anchorProperties);

//   return (
//     <Link to={url} {...anchorProps}>
//       {children}
//     </Link>
//   );
// };

// const ContextDecorator = (story: any, context: any) => {
//   const [globals, setGlobals] = useGlobals();
//   return story({ ...context, globals, setGlobals });
// };

// export default {
//   title: "Components/Navigation",
//   component: HeaderComponent,
//   decorators: [ContextDecorator, StoryRouter()],
//   argTypes: {
//     globalNavigation: {
//       name: "globalNavigation",
//       type: { name: "string", required: false },
//       description: `Config for global navigation. Click [here](https://github.optum.com/UIToolkit/uitoolkit-react/blob/${BRANCH_NAME}/src/component/Navigation/types.ts#L63) for the type definition.`,
//       // overrides don't work unless you add this line!
//       // see: https://github.com/storybookjs/storybook/issues/12353
//       control: {
//         type: null,
//       },
//     },
//     horizontalNavigation: {
//       name: "horizontalNavigation",
//       type: { name: "string", required: false },
//       description: `Config for horizontal navigation. Click [here](https://github.optum.com/UIToolkit/uitoolkit-react/blob/${BRANCH_NAME}/src/component/Navigation/types.ts#L63) for the type definition.`,
//       // overrides don't work unless you add this line!
//       // see: https://github.com/storybookjs/storybook/issues/12353
//       control: {
//         type: null,
//       },
//     },
//     verticalNavigation: {
//       name: "verticalNavigation",
//       type: { name: "string", required: false },
//       description: `Config for vertical navigation. Click [here](https://github.optum.com/UIToolkit/uitoolkit-react/blob/${BRANCH_NAME}/src/component/Navigation/types.ts#L63) for the type definition.`,
//       // overrides don't work unless you add this line!
//       // see: https://github.com/storybookjs/storybook/issues/12353
//       control: {
//         type: null,
//       },
//     },
//     logoContent: {
//       control: {
//         type: null,
//       },
//     },
//     className: {
//       control: {
//         type: null,
//       },
//     },
//     skipLink: {
//       control: {
//         type: null,
//       },
//     },
//   },
// };

// function useCurrentRoute() {
//   const { pathname: route } = useLocation();
//   return route;
// }

// const LogoContent: React.FC<{ context: any }> = ({ context }) => {
//   return (
//     <>
//       <img
//         src={context.theme === "uhcSolas" ? UhcSolasLogo : Logo}
//         className="uitk-header__logo uitk-header__logo--small"
//         alt="logo"
//       />
//       <img
//         src={context.theme === "uhcSolas" ? UhcProductName : ProductName}
//         className="uitk-header__logo uitk-header__logo--small uitk-header__product-name"
//         alt="product name"
//       />
//       <img
//         src={
//           context.theme === "uhcSolas"
//             ? UhcLogoWithProductName
//             : LogoWithProductName
//         }
//         className="uitk-header__logo uitk-header__logo--medium uitk-header__logo--large"
//         alt="logo with product name"
//       />
//     </>
//   );
// };

// const App = styled.div<{ hasVerticalNav: boolean }>`
//   ${props =>
//     props.hasVerticalNav &&
//     css`
//       height: 100vh;
//       @media only screen and (min-width: 980px) {
//         display: flex;
//         flex-wrap: wrap;
//       }
//     `}
// `;

// const AppContent = styled.div`
//   margin: ${props => props.theme.spacingM} ${props => props.theme.spacingLG};
// `;

// const StoryFn: React.FC<HeaderProps & { globals: any }> = ({
//   globals,
//   ...headerProps
// }) => {
//   const hasVerticalNav = Boolean(headerProps.verticalNavigation);
//   return (
//     <App hasVerticalNav={hasVerticalNav}>
//       <HeaderComponent
//         logoContent={<LogoContent context={globals} />}
//         skipLink={{ id: "main" }}
//         {...headerProps}
//       />
//       {(headerProps.globalNavigation ||
//         headerProps.horizontalNavigation ||
//         headerProps.verticalNavigation) && (
//         <AppContent>
//           <CurrentRouteContainer />
//           <main tabIndex={-1} id="main">
//             <h1>Main Content</h1>
//             <Button onPress={() => alert("click")}>Focusable Button</Button>
//           </main>
//         </AppContent>
//       )}
//     </App>
//   );
// };

// const Template: Story<HeaderProps> = (args, { globals }) => {
//   return <StoryFn {...args} globals={globals} />;
// };

// const headerSource = `
// import React from "react";
// import { Header } from '@uitk/react';
// import { SmallLogo, MediumLogo, LargeLogo } from './logos';

// export default () => (
//     <Header
//         logoContent={
//             <>
//                 <img
//                     src={SmallLogo}
//                     className="uitk-header__logo uitk-header__logo--small"
//                     alt="logo"
//                 />
//                 <img
//                     src={MedimumLogo}
//                     className="uitk-header__logo uitk-header__logo--small uitk-header__product-name"
//                     alt="product name"
//                 />
//                 <img
//                     src={LargeLogo}
//                     className="uitk-header__logo uitk-header__logo--medium uitk-header__logo--large"
//                     alt="logo with product name"
//                 />
//             </>
//         }
//     />
// );
// `;

// export const Header = Template.bind({});
// Header.args = {};
// Header.parameters = {
//   docs: {
//     source: {
//       code: headerSource,
//       language: "tsx",
//     },
//   },
// };

// export const Global_Navigation = Template.bind({});

// const globalNavigationConfig = {
//   linkAs: Route,
//   links: [
//     {
//       label: "Home",
//       icon: <Home />,
//       links: [
//         { label: "My Account", url: "/account" },
//         {
//           label: "My Orders",
//           icon: <DirectMail />,
//           links: [
//             { label: "Delivered", url: "/delivered" },
//             { label: "Pending", url: "/pending" },
//             {
//               label: "Archived",
//               links: [
//                 {
//                   label: "2018",
//                   url: "/2018",
//                 },
//                 {
//                   label: "2019",
//                   url: "/2019",
//                 },
//                 {
//                   label: "2020",
//                   url: "/2020",
//                 },
//               ],
//             },
//           ],
//         },
//         { label: "My Profile", url: "/profile", icon: <HealthProfile /> },
//       ],
//     },
//     {
//       label: "About",
//       links: [
//         {
//           label: "History",
//           url: "/history",
//         },
//         {
//           label: "Locations",
//           links: [
//             {
//               label: "Europe",
//               url: "/eu",
//             },
//             {
//               label: "U.S",
//               url: "/us",
//             },
//           ],
//         },
//       ],
//     },
//     { label: "Contact", url: "/contact", icon: <Phone /> },
//   ],
// };

// Global_Navigation.args = {
//   useLocation: useCurrentRoute,
//   globalNavigation: globalNavigationConfig,
// };

// const globalNavigationSource = `
// import React from "react";
// import { Header, Button } from '@uitk/react';
// import { SmallLogo, MediumLogo, LargeLogo } from './logos';
// import {
//   getNativeProps,
//   anchorProperties,
// } from "@uitk/react";
// import { LinkProps } from "@uitk/react/types";
// import { Link, useLocation } from "react-router-dom";

// // create hook to return the current route
// function useCurrentRoute() {
//   const { pathname: route } = useLocation();
//   return route;
// }

// // define our custom link so client side routing works
// const Route: React.FC<LinkProps> = item => {
//   const { children, label, url } = item;

//   // get the native anchor attributes of the link item so we can prop spread
//   const anchorProps = getNativeProps(item, anchorProperties);

//   return (
//     <Link to={url} {...anchorProps}>
//       {children}
//     </Link>
//   );
// };

// // define our navigation config
// // Note: do not define this in the body of a function component unless you give
// //       it a stable identity via useRef
// const globalNavigationConfig = {
//   linkAs: Route,
//   links: [
//     {
//       label: "Home",
//       links: [
//         { label: "My Account", url: "/account" },
//         {
//           label: "My Orders",
//           links: [
//             { label: "Delivered", url: "/delivered" },
//             { label: "Pending", url: "/pending" },
//             {
//               label: "Archived",
//               links: [
//                 {
//                   label: "2018",
//                   url: "/2018",
//                 },
//                 {
//                   label: "2019",
//                   url: "/2019",
//                 },
//                 {
//                   label: "2020",
//                   url: "/2020",
//                 },
//               ],
//             },
//           ],
//         },
//         { label: "My Profile", url: "/profile" },
//       ],
//     },
//     {
//       label: "About",
//       links: [
//         {
//           label: "History",
//           url: "/history",
//         },
//         {
//           label: "Locations",
//           links: [
//             {
//               label: "Europe",
//               url: "/eu",
//             },
//             {
//               label: "U.S",
//               url: "/us",
//             },
//           ],
//         },
//       ],
//     },
//     { label: "Contact", url: "/contact" },
//   ],
// };

// export default () => (
//     <>
//         <Header
//             logoContent={
//                 <>
//                     <img
//                         src={SmallLogo}
//                         className="uitk-header__logo uitk-header__logo--small"
//                         alt="logo"
//                     />
//                     <img
//                         src={MediumLogo}
//                         className="uitk-header__logo uitk-header__logo--small uitk-header__product-name"
//                         alt="product name"
//                     />
//                     <img
//                         src={LargeLogo}
//                         className="uitk-header__logo uitk-header__logo--medium uitk-header__logo--large"
//                         alt="logo with product name"
//                     />
//                 </>
//             }
//             globalNavigation={globalNavigationConfig}
//             useLocation={useCurrentRoute}
//             skipLink={{ id: 'main' }}
//         />
//         <main id="main">
//             <h1>Main Content</h1>
//             <Button onPress={() => alert("click")}>Focusable Button</Button>
//         </main>
//     </>
// );
// `;

// Global_Navigation.parameters = {
//   docs: {
//     source: {
//       code: globalNavigationSource,
//       language: "tsx",
//     },
//   },
// };

// export const Horizontal_Navigation = Template.bind({});

// const horizontalNavigationConfig = {
//   linkAs: Route,
//   links: [
//     {
//       label: "Home",
//       icon: <Home />,
//       links: [
//         { label: "My Account", url: "/account" },
//         {
//           label: "My Orders",
//           icon: <DirectMail />,
//           links: [
//             { label: "Delivered", url: "/delivered" },
//             { label: "Pending", url: "/pending" },
//             {
//               label: "Archived",
//               links: [
//                 {
//                   label: "2018",
//                   url: "/2018",
//                 },
//                 {
//                   label: "2019",
//                   url: "/2019",
//                 },
//                 {
//                   label: "2020",
//                   url: "/2020",
//                 },
//               ],
//             },
//           ],
//         },
//         { label: "My Profile", url: "/profile", icon: <HealthProfile /> },
//       ],
//     },
//     {
//       label: "About",
//       links: [
//         {
//           label: "History",
//           url: "/history",
//         },
//         {
//           label: "Locations",
//           links: [
//             {
//               label: "Europe",
//               url: "/eu",
//             },
//             {
//               label: "U.S",
//               url: "/us",
//             },
//           ],
//         },
//       ],
//     },
//     { label: "Contact", url: "/contact", icon: <Phone /> },
//   ],
// };

// Horizontal_Navigation.args = {
//   useLocation: useCurrentRoute,
//   horizontalNavigation: horizontalNavigationConfig,
// };

// const horizontalNavigationSource = `
// import React from "react";
// import { Header, Button } from '@uitk/react';
// import { SmallLogo, MediumLogo, LargeLogo } from './logos';
// import {
//   getNativeProps,
//   anchorProperties,
// } from "@uitk/react";
// import { LinkProps } from "@uitk/react/types";
// import { Link, useLocation } from "react-router-dom";

// // create hook to return the current route
// function useCurrentRoute() {
//   const { pathname: route } = useLocation();
//   return route;
// }

// // define our custom link so client side routing works
// const Route: React.FC<LinkProps> = item => {
//   const { children, label, url } = item;

//   // get the native anchor attributes of the link item so we can prop spread
//   const anchorProps = getNativeProps(item, anchorProperties);

//   return (
//     <Link to={url} {...anchorProps}>
//       {children}
//     </Link>
//   );
// };

// // define our navigation config
// // Note: do not define this in the body of a function component unless you give
// //       it a stable identity via useRef
// const horizontalNavigationConfig = {
//   linkAs: Route,
//   links: [
//     {
//       label: "Home",
//       links: [
//         { label: "My Account", url: "/account" },
//         {
//           label: "My Orders",
//           links: [
//             { label: "Delivered", url: "/delivered" },
//             { label: "Pending", url: "/pending" },
//             {
//               label: "Archived",
//               links: [
//                 {
//                   label: "2018",
//                   url: "/2018",
//                 },
//                 {
//                   label: "2019",
//                   url: "/2019",
//                 },
//                 {
//                   label: "2020",
//                   url: "/2020",
//                 },
//               ],
//             },
//           ],
//         },
//         { label: "My Profile", url: "/profile" },
//       ],
//     },
//     {
//       label: "About",
//       links: [
//         {
//           label: "History",
//           url: "/history",
//         },
//         {
//           label: "Locations",
//           links: [
//             {
//               label: "Europe",
//               url: "/eu",
//             },
//             {
//               label: "U.S",
//               url: "/us",
//             },
//           ],
//         },
//       ],
//     },
//     { label: "Contact", url: "/contact" },
//   ],
// };

// export default () => (
//     <>
//         <Header
//             logoContent={
//                 <>
//                     <img
//                         src={SmallLogo}
//                         className="uitk-header__logo uitk-header__logo--small"
//                         alt="logo"
//                     />
//                     <img
//                         src={MediumLogo}
//                         className="uitk-header__logo uitk-header__logo--small uitk-header__product-name"
//                         alt="product name"
//                     />
//                     <img
//                         src={LargeLogo}
//                         className="uitk-header__logo uitk-header__logo--medium uitk-header__logo--large"
//                         alt="logo with product name"
//                     />
//                 </>
//             }
//             horizontalNavigation={horizontalNavigationConfig}
//             useLocation={useCurrentRoute}
//             skipLink={{ id: 'main' }}
//         />
//         <main id="main">
//             <h1>Main Content</h1>
//             <Button onPress={() => alert("click")}>Focusable Button</Button>
//         </main>
//     </>
// );
// `;

// Horizontal_Navigation.parameters = {
//   docs: {
//     source: {
//       code: horizontalNavigationSource,
//       language: "tsx",
//     },
//   },
// };

// const verticalNavigationConfig = {
//   linkAs: Route,
//   links: [
//     {
//       label: "Home",
//       icon: <Home />,
//       links: [
//         { label: "My Account", url: "/account" },
//         {
//           label: "My Orders",
//           icon: <DirectMail />,
//           links: [
//             { label: "Delivered", url: "/delivered" },
//             { label: "Pending", url: "/pending" },
//             {
//               label: "Archived",
//               links: [
//                 {
//                   label: "2018",
//                   url: "/2018",
//                 },
//                 {
//                   label: "2019",
//                   url: "/2019",
//                 },
//                 {
//                   label: "2020",
//                   url: "/2020",
//                 },
//               ],
//             },
//           ],
//         },
//         { label: "My Profile", url: "/profile", icon: <HealthProfile /> },
//       ],
//     },
//     {
//       label: "About",
//       links: [
//         {
//           label: "History",
//           url: "/history",
//         },
//         {
//           label: "Locations",
//           links: [
//             {
//               label: "Europe",
//               url: "/eu",
//             },
//             {
//               label: "U.S",
//               url: "/us",
//             },
//           ],
//         },
//       ],
//     },
//     { label: "Contact", url: "/contact", icon: <Phone /> },
//   ],
// };

// const VerticalNavigationStory: React.FC = () => (
//   <App hasVerticalNav={true}>
//     <HeaderComponent
//       logoContent={
//         <>
//           <img
//             src={Logo}
//             className="uitk-header__logo uitk-header__logo--small"
//             alt="logo"
//           />
//           <img
//             src={ProductName}
//             className="uitk-header__logo uitk-header__logo--small uitk-header__product-name"
//             alt="product name"
//           />
//           <img
//             src={LogoWithProductName}
//             className="uitk-header__logo uitk-header__logo--medium uitk-header__logo--large"
//             alt="logo with product name"
//           />
//         </>
//       }
//       skipLink={{ id: "main" }}
//     />
//     <Navigation
//       useLocation={useCurrentRoute}
//       variant={NavType.VERTICAL}
//       config={verticalNavigationConfig}
//     />
//     <AppContent>
//       <CurrentRouteContainer />
//       <main tabIndex={-1} id="main">
//         <h1>Main Content</h1>
//         <Button onPress={() => alert("click")}>Focusable Button</Button>
//       </main>
//     </AppContent>
//   </App>
// );

// const VerticalNavigationTemplate: Story<any> = () => <VerticalNavigationStory />;
// export const VerticalNavigation = VerticalNavigationTemplate.bind({});

// const verticalNavigationSource = `
// import React from "react";
// import { Header, Button, Navigation, NavType } from '@uitk/react';
// import { SmallLogo, MediumLogo, LargeLogo } from './logos';
// import {
//   getNativeProps,
//   anchorProperties,
// } from "@uitk/react";
// import { LinkProps } from "@uitk/react/types";
// import { Link, useLocation } from "react-router-dom";

// // create hook to return the current route
// function useCurrentRoute() {
//   const { pathname: route } = useLocation();
//   return route;
// }

// // define our custom link so client side routing works
// const Route: React.FC<LinkProps> = item => {
//   const { children, label, url } = item;

//   // get the native anchor attributes of the link item so we can prop spread
//   const anchorProps = getNativeProps(item, anchorProperties);

//   return (
//     <Link to={url} {...anchorProps}>
//       {children}
//     </Link>
//   );
// };

// // define our navigation config
// // Note: do not define this in the body of a function component unless you give
// //       it a stable identity via useRef
// const verticalNavigationConfig = {
//   linkAs: Route,
//   links: [
//     {
//       label: "Home",
//       links: [
//         { label: "My Account", url: "/account" },
//         {
//           label: "My Orders",
//           links: [
//             { label: "Delivered", url: "/delivered" },
//             { label: "Pending", url: "/pending" },
//             {
//               label: "Archived",
//               links: [
//                 {
//                   label: "2018",
//                   url: "/2018",
//                 },
//                 {
//                   label: "2019",
//                   url: "/2019",
//                 },
//                 {
//                   label: "2020",
//                   url: "/2020",
//                 },
//               ],
//             },
//           ],
//         },
//         { label: "My Profile", url: "/profile" },
//       ],
//     },
//     {
//       label: "About",
//       links: [
//         {
//           label: "History",
//           url: "/history",
//         },
//         {
//           label: "Locations",
//           links: [
//             {
//               label: "Europe",
//               url: "/eu",
//             },
//             {
//               label: "U.S",
//               url: "/us",
//             },
//           ],
//         },
//       ],
//     },
//     { label: "Contact", url: "/contact" },
//   ],
// };

// /**
//  * When using Sidebar navigation we need to set the following css on the parent
//  * container element of the Header component so things align correctly.
//  */
// const App = styled.div\`
//     @media only screen and (min-width: 980px) {
//         display: flex;
//         flex-wrap: wrap;
//     }
// \`;

// export default () => (
//     <App>
//         <HeaderComponent
//             logoContent={
//                 <>
//                     <img
//                       src={Logo}
//                       className="uitk-header__logo uitk-header__logo--small"
//                       alt="logo"
//                     />
//                     <img
//                       src={ProductName}
//                       className="uitk-header__logo uitk-header__logo--small uitk-header__product-name"
//                       alt="product name"
//                     />
//                     <img
//                       src={LogoWithProductName}
//                       className="uitk-header__logo uitk-header__logo--medium uitk-header__logo--large"
//                       alt="logo with product name"
//                     />
//                 </>
//             }
//             skipLink={{ id: "main" }}
//         />
//         <Navigation
//             useLocation={useCurrentRoute}
//             variant={NavType.VERTICAL}
//             config={verticalNavigationConfig}
//         />
//         <AppContent>
//             <CurrentRouteContainer />
//             <main tabIndex={-1} id="main">
//                 <h1>Main Content</h1>
//                 <Button onPress={() => alert("click")}>Focusable Button</Button>
//             </main>
//         </AppContent>
//     </App>
// );
// `;

// VerticalNavigation.parameters = {
//   docs: {
//     source: {
//       code: verticalNavigationSource,
//       language: "tsx",
//     },
//   },
// };

// export const Guidelines = () => (
//   <GuidelineViewer
//     ids={[
//       "header",
//       "global-navigation",
//       "horizontal-navigation",
//       "vertical-navigation",
//     ]}
//   />
// );