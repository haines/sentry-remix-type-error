# Incompatible type in `@sentry/remix`

The type of the second argument to `wrapRemixHandleError` in `@sentry/remix` is incompatible with that of Remix's `handleError` function:

```console
$ npx tsc
entry.server.tsx:12:31 - error TS2345: Argument of type 'ActionFunctionArgs | LoaderFunctionArgs' is not assignable to parameter of type 'DataFunctionArgs'.
  Type 'ActionFunctionArgs' is not assignable to type 'DataFunctionArgs'.
    Types of property 'request' are incompatible.
      Type 'Request' is not assignable to type 'RemixRequest'.
        Type 'Request' is not assignable to type 'Record<string | symbol, RemixRequestState>'.
          Index signature for type 'string' is missing in type 'Request'.

12   wrapRemixHandleError(error, args);
                                 ~~~~

entry.server.tsx:19:31 - error TS2345: Argument of type 'import("./node_modules/@remix-run/server-runtime/dist/routeModules").DataFunctionArgs' is not assignable to parameter of type 'import("./node_modules/@sentry/remix/types/utils/vendor/types").DataFunctionArgs'.
  Types of property 'request' are incompatible.
    Type 'Request' is not assignable to type 'RemixRequest'.

19   wrapRemixHandleError(error, args);
                                 ~~~~
```
