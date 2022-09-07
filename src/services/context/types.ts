import { number, string } from "yup";

export type UsersArray = {
  name: string;
  age: number;
  email: string;
  tel: string;
  treatment: string;
  monthsToPay: Array<{
    month: string;
    value: number;
    paid: boolean;
    year: number;
  }>;
};

export type SingleMonth = {
  month: string;
  paid: number;
  notPaid: number;
};

export type Months = Array<{
  month: string;
  paid: number;
  notPaid: number;
}>;

export type Treatment = Array<{
  name: string;
  value: number;
}>;

export type Card = {
  card: UsersArray;
  children?: JSX.Element;
  index?: number;
};

export interface CardsContextProps {
  cardsMonthList: Months;
  users: Array<UsersArray>;
  search: string;
  setSearch: (value: string) => void;
  filterUsersByMonth: (month: string) => void;
  getUsers: () => void;
  loading: boolean;
}

export type BranchList = Array<{
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
}>;

type Commit = {
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
};

export interface CardsDetailsContextProps {
  getCommits: (owner: string, repo: string, sha: string) => void;
  loadingCommits: boolean;
  commits: Array<Commit>;
  cardDetail: BranchList;
  getOneRepo: (owner: string, repo: string) => void;
  loading: boolean;
}

export type CommitProps = Array<{
  sha: string;
  node_id: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    committer: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
    tree: {
      sha: string;
      url: string;
    };
    url: string;
    comment_count: number;
    verification: {
      verified: boolean;
      reason: string;
    };
  };
  url: string;
  html_url: string;
  comments_url: string;
  author: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  committer: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  parents: Array<{
    sha: string;
    url: string;
    html_url: string;
  }>;
}>;
