// Used for hooks or components to manage the state of data fetching
export interface FetchState<T> {
  userData: T | null;
  isLoading: boolean;
  error: Error | null;
}
