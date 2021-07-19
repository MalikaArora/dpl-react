import LoadingState from "@avrc/loading-state";

export default {
    title: 'Loading state'
}


export const Example = () => {
  const error = 'Data not found'; // bool or string value
  const hasLoaded = true;
  const isLoading = true;

  return (
    <LoadingState error={error} loading={isLoading}>
      {hasLoaded && <div>Data from API</div>}
    </LoadingState>
  );
}