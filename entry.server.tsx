import type {
  ActionFunctionArgs,
  DataFunctionArgs,
  LoaderFunctionArgs,
} from "@remix-run/node";
import { wrapRemixHandleError } from "@sentry/remix";

export function handleError(
  error: unknown,
  args: ActionFunctionArgs | LoaderFunctionArgs,
): void {
  wrapRemixHandleError(error, args);
}

export function handleErrorWithDeprecatedDataFunctionArgs(
  error: unknown,
  args: DataFunctionArgs,
): void {
  wrapRemixHandleError(error, args);
}
