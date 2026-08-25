export interface CompleteToolAnnotations {
  readonly readOnlyHint: boolean;
  readonly destructiveHint: boolean;
  readonly idempotentHint: boolean;
  readonly openWorldHint: boolean;
}

export type MutationToolAnnotations = CompleteToolAnnotations & {
  readonly readOnlyHint: false;
  readonly openWorldHint: false;
};

export const READ_ONLY_TOOL_ANNOTATIONS = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
} as const satisfies CompleteToolAnnotations;

export const NON_DESTRUCTIVE_MUTATION_TOOL_ANNOTATIONS = {
  readOnlyHint: false,
  destructiveHint: false,
  idempotentHint: false,
  openWorldHint: false,
} as const satisfies MutationToolAnnotations;

export const IDEMPOTENT_MUTATION_TOOL_ANNOTATIONS = {
  readOnlyHint: false,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
} as const satisfies MutationToolAnnotations;

export const DESTRUCTIVE_MUTATION_TOOL_ANNOTATIONS = {
  readOnlyHint: false,
  destructiveHint: true,
  idempotentHint: false,
  openWorldHint: false,
} as const satisfies MutationToolAnnotations;

export const IDEMPOTENT_DESTRUCTIVE_MUTATION_TOOL_ANNOTATIONS = {
  readOnlyHint: false,
  destructiveHint: true,
  idempotentHint: true,
  openWorldHint: false,
} as const satisfies MutationToolAnnotations;
