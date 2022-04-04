export function removeFilter(key) {
  const url    = new URL(window.location);
  const filter = url.searchParams;

  if (filter.getAll(key).length) {
    filter.delete(key);
  }
  window.history.pushState({ }, '', url);
}

export default {
  removeFilter,
};
