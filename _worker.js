export default {
  fetch: (request, env) => env.worker.fetch(request),
};
