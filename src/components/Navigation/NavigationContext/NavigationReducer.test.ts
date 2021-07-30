import {
  reducer,
  routeUpdate,
  openPanel,
  closePanel,
  closeNav,
  openNavAtActivePath,
  resetNavigationState,
  getActiveStateForRoute,
} from "./";
import { NavType } from "../types";

describe("NavigationReducer", () => {
  test("reducer returns state if action type is not recognised", () => {
    const config = {
      links: [
        {
          label: "foo",
          url: "foo",
        },
        {
          label: "bar",
          url: "bar",
        },
      ],
    };
    // @ts-ignore
    expect(reducer(config, { type: "FOO" })).toEqual(config);
  });

  test("reducer resets state if reset action is dispatched", () => {
    const config = {
      links: [
        {
          label: "foo",
          url: "foo",
        },
        {
          label: "bar",
          url: "bar",
        },
      ],
    };
    const updatedConfig = {
      links: [
        {
          label: "foo",
          url: "foo",
        },
      ],
    };

    const updatedInitialState = getActiveStateForRoute(updatedConfig, {
      isDesktop: true,
      route: "/",
    });

    // @ts-ignore
    expect(reducer(config, { type: "FOO" })).toEqual(config);
    expect(reducer(config, resetNavigationState(updatedInitialState))).toEqual(
      updatedInitialState
    );
  });

  /**
   * Route updates
   *
   * These updates happen when useLocation hook returns a new route
   */
  test("reducer computes navigation state correctly single level routes", () => {
    const config = {
      links: [
        {
          label: "foo",
          url: "foo",
        },
        {
          label: "bar",
          url: "bar",
        },
      ],
    };

    const expectedInitialState = {
      links: [
        {
          label: "foo",
          url: "foo",
          active: true,
        },
        {
          label: "bar",
          url: "bar",
          active: false,
        },
      ],
    };

    const initialState = reducer(config, routeUpdate("foo"));

    expect(initialState).toEqual(expectedInitialState);
    const expectedUpdatedState = {
      links: [
        {
          label: "foo",
          url: "foo",
          active: false,
        },
        {
          label: "bar",
          url: "bar",
          active: true,
        },
      ],
    };

    const updatedState = reducer(initialState, routeUpdate("bar"));

    expect(updatedState).toEqual(expectedUpdatedState);
  });

  test("reducer computes navigation state correctly for single set of nested routes", () => {
    const config = {
      links: [
        {
          label: "foo",
          links: [
            {
              label: "bar",
              url: "/bar",
            },
            {
              label: "baz",
              url: "/baz",
            },
          ],
        },
      ],
    };

    const expectedInitialState = {
      links: [
        {
          label: "foo",
          active: true,
          expanded: false,
          links: [
            {
              label: "bar",
              url: "/bar",
              active: false,
            },
            {
              label: "baz",
              url: "/baz",
              active: true,
            },
          ],
        },
      ],
    };

    const initialState = reducer(config, routeUpdate("/baz"));

    expect(initialState).toEqual(expectedInitialState);

    const expectedUpdatedState = {
      links: [
        {
          label: "foo",
          active: true,
          expanded: false,
          links: [
            {
              label: "bar",
              url: "/bar",
              active: true,
            },
            {
              label: "baz",
              url: "/baz",
              active: false,
            },
          ],
        },
      ],
    };

    const updatedState = reducer(initialState, routeUpdate("/bar"));

    expect(updatedState).toEqual(expectedUpdatedState);
  });

  test("active panels are expanded on mobile when computing active state for route", () => {
    const config = {
      links: [
        {
          label: "foo",
          links: [
            {
              label: "bar",
              url: "/bar",
            },
            {
              label: "baz",
              url: "/baz",
            },
          ],
        },
      ],
    };

    const expectedInitialState = {
      links: [
        {
          label: "foo",
          active: true,
          expanded: true,
          links: [
            {
              label: "bar",
              url: "/bar",
              active: false,
            },
            {
              label: "baz",
              url: "/baz",
              active: true,
            },
          ],
        },
      ],
    };

    const initialState = reducer(config, routeUpdate("/baz", false));

    expect(initialState).toEqual(expectedInitialState);
  });

  test("reducer computes navigation state correctly for multiple sets of nested routes", () => {
    const config = {
      links: [
        {
          label: "foo",
          links: [
            {
              label: "bar",
              url: "/bar",
            },
            {
              label: "baz",
              url: "/baz",
            },
          ],
        },
        {
          label: "qux",
          links: [
            {
              label: "grault",
              url: "/grault",
            },
          ],
        },
      ],
    };

    const expectedInitialState = {
      links: [
        {
          label: "foo",
          active: true,
          expanded: false,
          links: [
            {
              label: "bar",
              url: "/bar",
              active: false,
            },
            {
              label: "baz",
              url: "/baz",
              active: true,
            },
          ],
        },
        {
          label: "qux",
          active: false,
          expanded: false,
          links: [
            {
              label: "grault",
              url: "/grault",
              active: false,
            },
          ],
        },
      ],
    };

    const initialState = reducer(config, routeUpdate("/baz"));

    expect(initialState).toEqual(expectedInitialState);

    const expectedUpdatedState = {
      links: [
        {
          label: "foo",
          active: true,
          expanded: false,
          links: [
            {
              label: "bar",
              url: "/bar",
              active: true,
            },
            {
              label: "baz",
              url: "/baz",
              active: false,
            },
          ],
        },
        {
          label: "qux",
          expanded: false,
          active: false,
          links: [
            {
              label: "grault",
              url: "/grault",
              active: false,
            },
          ],
        },
      ],
    };

    const updatedState = reducer(initialState, routeUpdate("/bar"));

    expect(updatedState).toEqual(expectedUpdatedState);
  });

  test("reducer config global isActive callback is invoked when specified for computing active states", () => {
    const isActive = jest.fn((url: string, route: string) => route === url);
    const config = {
      isActive,
      links: [
        {
          label: "foo",
          url: "/foo",
        },
        {
          label: "bar",
          url: "/bar",
        },
      ],
    };

    const expectedInitialState = {
      links: [
        {
          label: "foo",
          url: "/foo",
          active: true,
        },
        {
          label: "bar",
          url: "/bar",
          active: false,
        },
      ],
    };

    const initialState = reducer(config, routeUpdate("/foo"));

    expect(initialState.links).toEqual(expectedInitialState.links);
    expect(isActive).toHaveBeenCalledTimes(1);
  });

  test("reducer config item isActive callback is invoked when specified for computing active states", () => {
    const isActive = jest.fn((url: string, route: string) => route === url);
    const config = {
      links: [
        {
          label: "foo",
          url: "/foo",
          isActive,
        },
        {
          label: "bar",
          url: "/bar",
        },
      ],
    };

    const expectedInitialState = {
      links: [
        {
          label: "foo",
          url: "/foo",
          isActive,
          active: true,
        },
        {
          label: "bar",
          url: "/bar",
          active: false,
        },
      ],
    };

    const initialState = reducer(config, routeUpdate("/foo"));

    expect(initialState.links).toEqual(expectedInitialState.links);
    expect(isActive).toHaveBeenCalledTimes(1);
  });

  /**
   * Panel updates
   *
   * These state updates happen when you trigger press of a panel button
   */
  test("open top level panel without auto-closing open siblings", () => {
    const initialState = {
      links: [
        {
          label: "home",
          links: [
            {
              label: "order",
              url: "/order",
            },
          ],
        },
        {
          label: "info",
          expanded: true,
          links: [
            {
              label: "FAQ",
              url: "/faq",
            },
          ],
        },
      ],
    };

    const expectedState = {
      links: [
        {
          label: "home",
          expanded: true,
          links: [
            {
              label: "order",
              url: "/order",
            },
          ],
        },
        {
          label: "info",
          expanded: true,
          links: [
            {
              label: "FAQ",
              url: "/faq",
            },
          ],
        },
      ],
    };

    expect(reducer(initialState, openPanel("home", NavType.GLOBAL))).toEqual(
      expectedState
    );
  });

  test("open top level panel with auto-closing open siblings after it", () => {
    const initialState = {
      links: [
        {
          label: "home",
          expanded: false,
          links: [
            {
              label: "order",
              url: "/order",
            },
          ],
        },
        {
          label: "info",
          expanded: true,
          links: [
            {
              label: "FAQ",
              url: "/faq",
            },
          ],
        },
      ],
    };

    const expectedState = {
      links: [
        {
          label: "home",
          expanded: true,
          links: [
            {
              label: "order",
              url: "/order",
            },
          ],
        },
        {
          label: "info",
          expanded: false,
          links: [
            {
              label: "FAQ",
              url: "/faq",
            },
          ],
        },
      ],
    };

    expect(
      reducer(initialState, openPanel("home", NavType.GLOBAL, true))
    ).toEqual(expectedState);
  });

  test("open top level panel with auto-closing open siblings before it", () => {
    const initialState = {
      links: [
        {
          label: "home",
          expanded: true,
          links: [
            {
              label: "order",
              url: "/order",
            },
          ],
        },
        {
          label: "info",
          expanded: false,
          links: [
            {
              label: "FAQ",
              url: "/faq",
            },
          ],
        },
      ],
    };

    const expectedState = {
      links: [
        {
          label: "home",
          expanded: false,
          links: [
            {
              label: "order",
              url: "/order",
            },
          ],
        },
        {
          label: "info",
          expanded: true,
          links: [
            {
              label: "FAQ",
              url: "/faq",
            },
          ],
        },
      ],
    };

    expect(
      reducer(initialState, openPanel("info", NavType.GLOBAL, true))
    ).toEqual(expectedState);
  });

  test("opening child panel opens that panel", () => {
    const initialState = {
      links: [
        {
          label: "home",
          expanded: true,
          links: [
            {
              label: "order",
              expanded: false,
              links: [
                {
                  label: "new",
                  url: "/new",
                  active: false,
                },
              ],
            },
          ],
        },
      ],
    };

    const expectedState = {
      links: [
        {
          label: "home",
          expanded: true,
          links: [
            {
              label: "order",
              expanded: true,
              links: [
                {
                  label: "new",
                  url: "/new",
                  active: false,
                },
              ],
            },
          ],
        },
      ],
    };

    expect(reducer(initialState, openPanel("order", NavType.GLOBAL))).toEqual(
      expectedState
    );
  });

  test("opening parent panel of active item with no siblings opens all panels to that item", () => {
    const initialState = {
      links: [
        {
          label: "home",
          expanded: false,
          links: [
            {
              label: "order",
              expanded: false,
              links: [
                {
                  label: "new",
                  url: "/new",
                  active: true,
                },
              ],
            },
          ],
        },
      ],
    };

    const expectedState = {
      links: [
        {
          label: "home",
          expanded: true,
          links: [
            {
              label: "order",
              expanded: true,
              links: [
                {
                  label: "new",
                  url: "/new",
                  active: true,
                },
              ],
            },
          ],
        },
      ],
    };

    expect(reducer(initialState, openPanel("home", NavType.GLOBAL))).toEqual(
      expectedState
    );
  });

  test("opening parent panel of active item with inactive siblings opens all panels to that item", () => {
    const initialState = {
      links: [
        {
          label: "home",
          expanded: false,
          links: [
            {
              label: "order",
              expanded: false,
              links: [
                {
                  label: "new",
                  url: "/new",
                  active: true,
                },
                {
                  label: "delivered",
                  url: "/delivered",
                  active: false,
                },
              ],
            },
          ],
        },
      ],
    };

    const expectedState = {
      links: [
        {
          label: "home",
          expanded: true,
          links: [
            {
              label: "order",
              expanded: true,
              links: [
                {
                  label: "new",
                  url: "/new",
                  active: true,
                },
                {
                  label: "delivered",
                  url: "/delivered",
                  active: false,
                },
              ],
            },
          ],
        },
      ],
    };

    expect(reducer(initialState, openPanel("home", NavType.GLOBAL))).toEqual(
      expectedState
    );
  });

  test("opening parent panel of active item with no siblings opens all panels to that item whilst auto-closing open sibling panels for certain variants", () => {
    const initialState = {
      links: [
        {
          label: "home",
          expanded: false,
          links: [
            {
              label: "order",
              expanded: false,
              links: [
                {
                  label: "new",
                  url: "/new",
                  active: true,
                },
              ],
            },
          ],
        },
        {
          label: "info",
          expanded: true,
          links: [
            {
              label: "FAQ",
              url: "/faq",
            },
          ],
        },
      ],
    };

    const expectedState = {
      links: [
        {
          label: "home",
          expanded: true,
          links: [
            {
              label: "order",
              expanded: true,
              links: [
                {
                  label: "new",
                  url: "/new",
                  active: true,
                },
              ],
            },
          ],
        },
        {
          label: "info",
          expanded: false,
          links: [
            {
              label: "FAQ",
              url: "/faq",
            },
          ],
        },
      ],
    };

    expect(
      reducer(initialState, openPanel("home", NavType.GLOBAL, true))
    ).toEqual(expectedState);
  });

  test("opening parent panel of active item with inactive siblings opens all panels to that item whilst auto-closing open sibling panels for certain variants", () => {
    const initialState = {
      links: [
        {
          label: "home",
          expanded: false,
          links: [
            {
              label: "order",
              expanded: false,
              links: [
                {
                  label: "new",
                  url: "/new",
                  active: true,
                },
                {
                  label: "delivered",
                  url: "/delivered",
                  active: false,
                },
              ],
            },
          ],
        },
        {
          label: "info",
          expanded: true,
          links: [
            {
              label: "FAQ",
              url: "/faq",
            },
          ],
        },
      ],
    };

    const expectedState = {
      links: [
        {
          label: "home",
          expanded: true,
          links: [
            {
              label: "order",
              expanded: true,
              links: [
                {
                  label: "new",
                  url: "/new",
                  active: true,
                },
                {
                  label: "delivered",
                  url: "/delivered",
                  active: false,
                },
              ],
            },
          ],
        },
        {
          label: "info",
          expanded: false,
          links: [
            {
              label: "FAQ",
              url: "/faq",
            },
          ],
        },
      ],
    };

    expect(
      reducer(initialState, openPanel("home", NavType.GLOBAL, true))
    ).toEqual(expectedState);
  });

  test("opening nav at active path should open nav to active item and close any other open panels", () => {
    const initialState = {
      links: [
        {
          label: "home",
          active: true,
          expanded: false,
          links: [
            {
              label: "order",
              active: true,
              expanded: false,
              links: [
                {
                  label: "new",
                  url: "/new",
                  active: true,
                },
              ],
            },
          ],
        },
        {
          label: "info",
          active: false,
          expanded: true,
          links: [
            {
              label: "FAQ",
              url: "/faq",
            },
          ],
        },
      ],
    };

    const expectedState = {
      links: [
        {
          label: "home",
          expanded: true,
          active: true,
          links: [
            {
              label: "order",
              active: true,
              expanded: true,
              links: [
                {
                  label: "new",
                  url: "/new",
                  active: true,
                },
              ],
            },
          ],
        },
        {
          label: "info",
          active: false,
          expanded: false,
          links: [
            {
              label: "FAQ",
              url: "/faq",
            },
          ],
        },
      ],
    };

    expect(reducer(initialState, openNavAtActivePath())).toEqual(expectedState);
  });

  test("closing panel closes the panel", () => {
    const initialState = {
      links: [
        {
          label: "home",
          expanded: true,
          links: [
            {
              label: "order",
              url: "order",
            },
          ],
        },
      ],
    };

    const expectedState = {
      links: [
        {
          label: "home",
          expanded: false,
          links: [
            {
              label: "order",
              url: "order",
            },
          ],
        },
      ],
    };

    expect(reducer(initialState, closePanel("home"))).toEqual(expectedState);
  });

  test("closing panel with open child panels also closes child panels", () => {
    const initialState = {
      links: [
        {
          label: "home",
          expanded: true,
          links: [
            {
              label: "order",
              expanded: true,
              links: [
                {
                  label: "new",
                  expanded: true,
                  links: [
                    {
                      label: "custom",
                      url: "/custom",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    const expectedState = {
      links: [
        {
          label: "home",
          expanded: false,
          links: [
            {
              label: "order",
              expanded: false,
              links: [
                {
                  label: "new",
                  expanded: false,
                  links: [
                    {
                      label: "custom",
                      url: "/custom",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(reducer(initialState, closePanel("home"))).toEqual(expectedState);
  });

  test("closing nav closes any open nav panels", () => {
    const initialState = {
      links: [
        {
          label: "home",
          expanded: true,
          links: [
            {
              label: "order",
              expanded: true,
              links: [
                {
                  label: "new",
                  expanded: true,
                  links: [
                    {
                      label: "custom",
                      url: "/custom",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "settings",
          expanded: true,
          links: [{ label: "account", url: "/account" }],
        },
      ],
    };

    const expectedState = {
      links: [
        {
          label: "home",
          expanded: false,
          links: [
            {
              label: "order",
              expanded: false,
              links: [
                {
                  label: "new",
                  expanded: false,
                  links: [
                    {
                      label: "custom",
                      url: "/custom",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "settings",
          expanded: false,
          links: [{ label: "account", url: "/account" }],
        },
      ],
    };

    expect(reducer(initialState, closeNav())).toEqual(expectedState);
  });
});
