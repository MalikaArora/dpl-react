import WindowEvent, { useWindowEvent } from "@avrc/window-event";

export default {
    title: 'Window Event - avrc',
}

// export const Example = () => {
//     return <div></div>;
// }
function resizeHandler() {
  console.log("resize");
}

export const Example = () => {
  return (
    <WindowEvent type="resize" handler={resizeHandler} invokeImmediately>
      <div />
    </WindowEvent>
    // <div></div>
  );
}

function ExampleHook() {
  useWindowEvent("resize", resizeHandler, {
    invokeImmediately: true,
  });

  return <div />;
}