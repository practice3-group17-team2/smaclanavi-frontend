export type Empty = Record<string, never>;

export type Uuid = string;

export type Url = string;

export type ISO8601 = string;

export type Category = {
  uuid: Uuid;
  name: string;
};

export type OmittedGroup = {
  uuid: Uuid;
  name: string;
};
