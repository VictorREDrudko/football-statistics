// Gets the sorting type for national teams from URL parameters
export const getSortType = (searchParams: URLSearchParams) => {
  return searchParams.get('sort') || 'alphabet';
};