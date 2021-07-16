import LoadingState from "@avrc/loading-state";

export default {
    title: 'Loading state'
}


export const Example = () => {
  const error = false; // bool or string value
  const hasLoaded = false;
  const isLoading = false;

  return (
    <LoadingState error={error} loading={isLoading}>
      {hasLoaded && <div>Data from API</div>}
    </LoadingState>
  );
}