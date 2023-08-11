/**
 * Access level for viewers
 */
export enum AccessState {
  /** All viewers */
  viewer = 0,

  /** Followers only */
  follower = 1,

  /** Subscribers only */
  subscriber = 2,

  /** VIPs only */
  vip = 3,

  /** Moderators only */
  moderator = 4,

  /** Broadcaster only */
  broadcaster = 5,
}

/**
 * Commands provided by the extension to VS Code
 */
export enum Commands {
  /** Attempt to sign in to Twitch to get an OAuth token */
  twitchSignIn = "twitchThemer.signIn",

  /** Forget the users OAuth token and disconnects from Twitch chat */
  twitchSignOut = "twitchThemer.signOut",

  /** Toggles connection on/off to Twitch chat */
  toggleChat = "twitchThemer.toggleChat",
}

/**
 * Keys for values stored in stored variables
 */
export enum ExtensionKeys {
  /** Key for access token */
  account = "vscode-twitch-themer-account",

  /** Key for current auth'd user's id */
  userId = "vscode-twitch-themer-user-id",

  /** Key for current auth'd user's login */
  userLogin = "vscode-twitch-themer-user-login",
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
  loggedOut,
}

/**
 * Represents the reasons why a theme isn't available
 */
export enum ThemeNotAvailableReasons {
  /** Could not find the extension on the Visual Studio Marketplace using the given extension id */
  notFound = "not found",
  /** Occurs if the API failed to match any repository for the extension on Visual Studio Marketplace */
  noRepositoryFound = "no repository found",
  /** Occurs when the API fails to download the package.json from the Github repo for the extension */
  packageJsonNotDownloaded = "package.json could not be downloaded",
  /** Occurs when the API cannot find any theme contributions within the package.json from the Github repository */
  noThemesContributed = "no themes contributed within package.json",
  /** Occurs when the JSON.parse function cannot parse the JSON retrieved from Github repository */
  packageJsonMalformed = "the package.json could not be parsed",
  /** Occurs when the request to retrieve the extension from the VS Code marketplace fails */
  marketplaceRequestFailed = "the request to the Visual Studio Marketplace failed",
}

/** */
export enum LogLevel {
  info = "info",
  warn = "warn",
  error = "error",
  debug = "debug",
}

export const twitchScopes = ["chat:read", "chat:edit"];