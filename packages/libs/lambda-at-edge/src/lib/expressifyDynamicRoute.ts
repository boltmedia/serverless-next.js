// converts a nextjs dynamic route /[param]/ -> /:param
// also handles catch all routes /[...param]/ -> /:param*

const expressifyDynamicRoute = (dynamicRoute: string): string => {
  // replace any catch all group first
  const expressified = dynamicRoute.replace(/\[\.\.\.(.*)]$/, ":$1*");

  // now replace other dynamic route groups and any optional routes
  return expressified.replace(/\[(.*?)]/g, ":$1").replace(/::(.*?)/, ":$1");
};

export default expressifyDynamicRoute;
