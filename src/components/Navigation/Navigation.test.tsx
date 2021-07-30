import React from "react";
import { Navigation } from "./";
import { NavType, LinkProps } from "../Navigation/types";
import { renderWithTheme } from "@test-util";
import { Home } from "@uitk/react-icons";
import { Link, useLocation } from "react-router-dom";
import { screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BREAKPOINT_SIZES } from "@constant";
import { act } from "react-dom/test-utils";

describe("Navigation", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
    act(() => {
      // @ts-ignore
      window.innerWidth = parseInt(BREAKPOINT_SIZES.LARGE);
    });
  });
  test("it renders global nav variant", () => {
    renderWithTheme(
      <Navigation
        isDesktop={true}
        useLocation={() => ""}
        variant={NavType.GLOBAL}
        config={{ links: [{ label: "home", url: "/home" }] }}
        data-testid={"nav"}
      />
    );
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });

  test("it renders horizontal nav variant", () => {
    renderWithTheme(
      <Navigation
        isDesktop={true}
        useLocation={() => ""}
        variant={NavType.HORIZONTAL}
        config={{ links: [{ label: "home", url: "/home" }] }}
        data-testid={"nav"}
      />
    );
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });

  test("it renders vertical nav variant", () => {
    renderWithTheme(
      <Navigation
        isDesktop={true}
        useLocation={() => ""}
        variant={NavType.VERTICAL}
        config={{
          links: [
            {
              label: "home",
              links: [
                {
                  label: "account",
                  icon: <Home />,
                  links: [
                    {
                      label: "security",
                      url: "/security",
                    },
                  ],
                },
              ],
            },
          ],
        }}
        data-testid={"nav"}
      />
    );
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });

  test("it renders with icons", () => {
    renderWithTheme(
      <Navigation
        isDesktop={true}
        useLocation={() => ""}
        variant={NavType.GLOBAL}
        config={{ links: [{ label: "home", url: "/home", icon: <Home /> }] }}
        data-testid={"nav"}
      />
    );
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });

  test("when linkAs option is set links are rendered using provided component", () => {
    const MyCustomLink: React.FC<LinkProps> = ({ children, url }) => (
      <a data-testid="custom-link" href={url}>
        {children}
      </a>
    );
    renderWithTheme(
      <Navigation
        isDesktop={true}
        useLocation={() => ""}
        variant={NavType.GLOBAL}
        config={{
          linkAs: MyCustomLink,
          links: [{ label: "home", url: "/home", icon: <Home /> }],
        }}
        data-testid={"nav"}
      />
    );

    expect(screen.getByTestId("custom-link")).toBeInTheDocument();
    expect(screen.getByTestId("custom-link")).toHaveTextContent("home");
  });

  test("it handles route updates", () => {
    act(() => {
      // @ts-ignore
      window.innerWidth = parseInt(BREAKPOINT_SIZES.SMALL);
    });
    const Route: React.FC<LinkProps> = ({
      active,
      children,
      url,
      ...unhandledProps
    }) => {
      return (
        <Link to={url} {...unhandledProps}>
          {children}
        </Link>
      );
    };

    function useCurrentRoute() {
      const { pathname: route } = useLocation();
      return route;
    }

    renderWithTheme(
      <Navigation
        isDesktop={false}
        useLocation={useCurrentRoute}
        variant={NavType.GLOBAL}
        config={{
          linkAs: Route,
          links: [
            {
              label: "home",
              links: [
                {
                  label: "settings",
                  url: "/settings",
                },
              ],
            },
          ],
        }}
      />,
      { memoryRouter: true }
    );

    expect(screen.getByText("home").closest("button")).toHaveAttribute(
      "aria-expanded",
      "false"
    );

    userEvent.click(screen.getByText("home"));

    expect(screen.getByText("home").closest("button")).toHaveAttribute(
      "aria-expanded",
      "true"
    );
    expect(screen.getByText("settings").closest("a")).not.toHaveAttribute(
      "aria-current"
    );

    userEvent.click(screen.getByText("settings"), { button: 0 });

    expect(screen.getByText("settings").closest("a")).toHaveAttribute(
      "aria-current"
    );
  });

  test("Clicking outside the nav closes it on desktop view (large breakpoint)", () => {
    const MyCustomLink: React.FC<LinkProps> = ({ children, url }) => (
      <a data-testid="custom-link" href={url}>
        {children}
      </a>
    );
    renderWithTheme(
      <div data-testid="document">
        <Navigation
          isDesktop={true}
          useLocation={() => ""}
          variant={NavType.GLOBAL}
          config={{
            linkAs: MyCustomLink,
            links: [
              {
                label: "home",
                links: [
                  {
                    label: "settings",
                    links: [{ label: "security", url: "/security" }],
                  },
                ],
              },
            ],
          }}
          data-testid={"nav"}
        />
      </div>
    );

    expect(screen.getByText("home").closest("button")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    userEvent.click(screen.getByText("home"));
    expect(screen.getByText("home").closest("button")).toHaveAttribute(
      "aria-expanded",
      "true"
    );
    userEvent.click(screen.getByText("settings"));
    expect(screen.getByText("settings").closest("button")).toHaveAttribute(
      "aria-expanded",
      "true"
    );
    userEvent.click(screen.getByTestId("document"));
    expect(screen.getByText("home").closest("button")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  test("Esc closes nav and triggers focus on parent of open path on desktop view (large breakpoint)", () => {
    const MyCustomLink: React.FC<LinkProps> = ({ children, url }) => (
      <a data-testid="custom-link" href={url}>
        {children}
      </a>
    );
    renderWithTheme(
      <Navigation
        isDesktop={true}
        useLocation={() => ""}
        variant={NavType.GLOBAL}
        config={{
          linkAs: MyCustomLink,
          links: [
            {
              label: "home",
              links: [
                {
                  label: "settings",
                  links: [{ label: "security", url: "/security" }],
                },
              ],
            },
          ],
        }}
        data-testid={"nav"}
      />
    );

    expect(screen.getByText("home").closest("button")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    userEvent.click(screen.getByText("home"));
    expect(screen.getByText("home").closest("button")).toHaveAttribute(
      "aria-expanded",
      "true"
    );
    userEvent.click(screen.getByText("settings"));
    expect(screen.getByText("settings").closest("button")).toHaveAttribute(
      "aria-expanded",
      "true"
    );
    userEvent.type(screen.getByText("settings"), "{esc}");
    expect(screen.getByText("home").closest("button")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    expect(screen.getByText("home").closest("button")).toHaveFocus();
  });

  test("root parent panel trigger gains focus after link is clicked on global nav variant desktop view", () => {
    const Route: React.FC<LinkProps> = ({
      active,
      children,
      url,
      ...unhandledProps
    }) => {
      return (
        <Link to={url} {...unhandledProps}>
          {children}
        </Link>
      );
    };

    function useCurrentRoute() {
      const { pathname: route } = useLocation();
      return route;
    }

    renderWithTheme(
      <Navigation
        isDesktop={false}
        useLocation={useCurrentRoute}
        variant={NavType.GLOBAL}
        config={{
          linkAs: Route,
          links: [
            {
              label: "home",
              links: [
                {
                  label: "settings",
                  url: "/settings",
                },
              ],
            },
          ],
        }}
      />,
      { memoryRouter: true }
    );

    userEvent.click(screen.getByText("home"));
    userEvent.click(screen.getByText("settings"));
    expect(screen.getByText("home").closest("button")).toHaveFocus();
  });

  test("root parent panel trigger gains focus after link is clicked on horizontal nav desktop view", () => {
    const Route: React.FC<LinkProps> = ({
      active,
      children,
      url,
      ...unhandledProps
    }) => {
      return (
        <Link to={url} {...unhandledProps}>
          {children}
        </Link>
      );
    };

    function useCurrentRoute() {
      const { pathname: route } = useLocation();
      return route;
    }

    renderWithTheme(
      <Navigation
        isDesktop={false}
        useLocation={useCurrentRoute}
        variant={NavType.HORIZONTAL}
        config={{
          linkAs: Route,
          links: [
            {
              label: "home",
              links: [
                {
                  label: "settings",
                  url: "/settings",
                },
              ],
            },
          ],
        }}
      />,
      { memoryRouter: true }
    );

    userEvent.click(screen.getByText("home"));
    userEvent.click(screen.getByText("settings"));
    expect(screen.getByText("home").closest("button")).toHaveFocus();
  });

  test("Top level links retain focus after being clicked desktop view", () => {
    const Route: React.FC<LinkProps> = ({
      active,
      children,
      url,
      ...unhandledProps
    }) => {
      return (
        <Link to={url} {...unhandledProps}>
          {children}
        </Link>
      );
    };

    function useCurrentRoute() {
      const { pathname: route } = useLocation();
      return route;
    }

    renderWithTheme(
      <Navigation
        isDesktop={false}
        useLocation={useCurrentRoute}
        variant={NavType.GLOBAL}
        config={{
          linkAs: Route,
          links: [
            {
              label: "home",
              links: [
                {
                  label: "settings",
                  url: "/settings",
                },
              ],
            },
            {
              label: "contact",
              url: "/contact",
            },
          ],
        }}
      />,
      { memoryRouter: true }
    );

    userEvent.click(screen.getByText("home"));
    userEvent.click(screen.getByText("contact").closest("a"));
    expect(screen.getByText("contact").closest("a")).toHaveFocus();
  });

  test("root parent panel trigger does not gain focus after link is clicked on vertical nav desktop view", () => {
    const Route: React.FC<LinkProps> = ({
      active,
      children,
      url,
      ...unhandledProps
    }) => {
      return (
        <Link to={url} {...unhandledProps}>
          {children}
        </Link>
      );
    };

    function useCurrentRoute() {
      const { pathname: route } = useLocation();
      return route;
    }

    renderWithTheme(
      <Navigation
        isDesktop={false}
        useLocation={useCurrentRoute}
        variant={NavType.VERTICAL}
        config={{
          linkAs: Route,
          links: [
            {
              label: "home",
              links: [
                {
                  label: "settings",
                  url: "/settings",
                },
              ],
            },
          ],
        }}
      />,
      { memoryRouter: true }
    );

    userEvent.click(screen.getByText("home"));
    userEvent.click(screen.getByText("settings").closest("a"));
    expect(screen.getByText("settings").closest("a")).toHaveFocus();
  });
});
