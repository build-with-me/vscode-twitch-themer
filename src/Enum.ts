/**
 * Access level for viewers
 */
export enum AccessState {
  /** All viewers */
  Viewers = 0,

  /** Followers only */
  Followers = 1,

  /** Subscribers only */
  Subscribers = 2,

  /** VIPs only */
  VIPs = 3,

  /** Moderators only */
  Moderators = 4,

  /** Broadcaster only */
  Broadcaster = 5,
}

/**
 * Commands provided by the extension to VS Code
 */
export enum Commands {
  /** Attempt to sign in to Twitch to get an OAuth token */
  twitchSignIn = 'twitchThemer.signIn',

  /** Forget the users OAuth token and disconnects from Twitch chat */
  twitchSignOut = 'twitchThemer.signOut',

  /** Toggles connection on/off to Twitch chat */
  toggleChat = 'twitchThemer.toggleChat'
}

/**
 * Keys for values stored in stored variables
 */
export enum ExtensionKeys {
  /** Key for access token */
  account = 'vscode-twitch-themer-account',

  /** Key for current auth'd user's id */
  userId = 'vscode-twitch-themer-user-id',

  /** Key for current auth'd user's login */
  userLogin = 'vscode-twitch-themer-user-login'
}

/**
 * Statuses that represent the state of the extension, authentication & chat
 */
export enum TwitchClientStatus {
  /** Extension is attempting to authenticate with Twitch */
  loggingIn,

  /** User is authenticated with Twitch, but not connected to Twitch chat */
  loggedIn,

  /** User is authenticated and connected to Twitch chat */
  chatConnected,

  /** User is not authenticated and not connected to Twitch chat */
  loggedOut
}

/**
 * Represents if user is the broadcaster, moderator or viewer
 */
export enum UserLevel {
  /** Viewer only */
  viewer = 0,

  /** Follower */
  follower = 1,

  /** Subscriber */
  subscriber = 2,

  /** VIP */
  vip = 3,

  /** Moderator */
  moderator = 4,

  /** Broadcaster */
  broadcaster = 5,
}

/**
 * Represents the reasons why a theme isn't available
 */
export enum ThemeNotAvailableReasons {
  /** Could not find the extension on the Visual Studio Marketplace using the given extension id */
  notFound = 'not found',
  /** Occures if the API failed to match any repository for the extension on Visual Studio Markplace */
  noRepositoryFound = 'no repository found',
  /** Occures when the API fails to download the package.json from the Github repo for the extension */
  packageJsonNotDownload = 'package.json could not be downloaded',
  /** Occures when the API cannot find any theme contributions within the package.json from the Github repository */
  noThemesContributed = 'no themes contributed within package.json',
  /** Occures when the JSON.parse function cannot parse the JSON retrieved from Github repository */
  packageJsonMalformed = 'the package.json could not be parsed'
}

/** */
export enum LogLevel {
  'Information' = 'info',
  'Warning' = 'warn',
  'Error' = 'error',
  'Debug' = 'debug'
}