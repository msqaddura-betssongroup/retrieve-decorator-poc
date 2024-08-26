export const enum GamingAppCommand {
  GetCrossSellFeatureStatus = 'gaming:crossSell:getFeatureStatus',
  ToggleCrossSellFeatureStatus = 'gaming:crossSell:toggleFeatureStatus',
  GetGameCollectionId = 'gaming:gameCollection:getSlug',
}
export interface GamingAppContract {
  [GamingAppCommand.GetCrossSellFeatureStatus]: {
    onSuccess: (enabled: boolean) => void;
  };
  [GamingAppCommand.ToggleCrossSellFeatureStatus]: {
    onSuccess: (enabled: boolean) => void;
    onError?: () => void;
  };
  [GamingAppCommand.GetGameCollectionId]: {
    slug: string;
    onSuccess: (id: string) => void;
    onError?: () => void;
  };
}

export const enum AccountAppCommand {
  /**
   * Registration Actions
   */
  RegistrationStartJourney = 'account:session:registration-start-journey',
  RegistrationStartJourneySkipNavigation = 'account:session:registration-start-journey-no-route-action',
  RegistrationExitJourney = 'account:session:registration-exit-journey',
  RegistrationStart = 'account:session:registration-start',
  RegistrationStartWithMetamask = 'account:session:registration-start:metamask',
  RegistrationSuccess = 'account:session:registration:success',
  RegistrationError = 'account:session:registration:error',

  /**
   * Login Actions
   */
  LoginStartJourney = 'account:session:login-start-journey',
  LoginStartJourneySkipNavigation = 'account:session:login-start-journey-no-route-action',
  LoginPostRegistration = 'account:session:login-start-journey:post-registration',
  LoginExitJourney = 'account:session:login-exit-journey',
  LoginSuccess = 'account:session:login:success',
  LoginError = 'account:session:login:error',
  LoginWithMetamask = 'account:session:login:metamask',
  LoginWithMetamaskError = 'account:session:login:metamask:error',
  LogoutStart = 'account:session:logout:start',
  CreateWallets = 'account:session:create-crypto-wallets',

  SetSession = 'account:user:setSession',
  SetAutomaticSessionManagementEnabled = 'account:user:setAutomaticSessionManagementEnabled',

  GetCustomer = 'account:customer-management:getCustomer',
  SetCustomer = 'account:customer-management:setCustomer',
  FetchCustomer = 'account:customer-management:fetchCustomer',
  GetCustomerDetails = 'account:customer-management:getCustomerDetails',
  CustomerUpdated = 'account:customer-management:customerUpdated',
  GetNotificationsInfo = 'account:oms:getNotificationsInfo',

  /**
   * Forgot Password Actions, this where user has forgotten password
   */
  StartForgotPasswordJourney = 'account:forgot-password:start-journey',
  SubmitForgotPassword = 'account:forgot-password:submit',
  SubmitForgotPasswordSuccess = 'account:forgot-password:submit:success',
  ForgotPasswordExitJourney = 'account:forgot-password:exit-journey',

  /**
   * Bank ID Authentication
   */
  InitBankIdAuth = 'account:bank-id:initAuth',
  GetBankIdAuthorizationStatus = 'account:bank-id:getStatus',
  CancelAuthorization = 'account:bank-id:cancelAuth',
  EnableBankIdPolling = 'account:bank-id:enablePolling',

  // TODO: Change Actions that are not needed by other MFEs to INTERNAL

  /**
   * Pnp Actions
   */

  PnpStartDeposit = 'account:session:pnp-start-journey',
  PnpStartAuth = 'account:session:pnp-start-bankid-auth',
  PnpStartAuthOtherDevice = 'account:session:pnp-start-bankid-auth-on-other-device',
  PnpInitiated = 'account:session:pnp-initiated',
  PnpCompleted = 'account:session:pnp-completed',
  TogglePnpJourneyError = 'account:session:pnp-journey-error',
  HandlePnpError = 'account:session:handle-pnp-error',
  BankIdAuthenticated = 'account:session:bank-id-authenticated',
  BankIdFailed = 'account:session:bank-id-failed',
  PnpRegistrationStart = 'account:session:pnp-registration-started',
  PnpRegistrationSubmit = 'account:session:pnp-registration-submitted',
  PnpShowWelcomeMessage = 'account:session:pnp-show-welcome-message',
  PnpUserVerified = 'account:session:pnp-user-verified',
  DepositLimitsUpdated = 'account:session:deposit-limits-updated',
  DepositLimitsNoticeAcked = 'account:session:deposit-limits-notice-acknowledged',
  PnpDepositCompleted = 'account:session:pnp-deposit-completed',
  CancelSwishDeposit = 'account:session:cancel-swish-deposit',
  RestartDeposit = 'account:session:restart-deposit',
  PnpGetPaymentMethod = 'account:session:pnp-get-payment-method',
  PnpStartBottomBarDeposit = 'account:session:pnp-start-journey-from-bottom-bar',

  /**
   * Pnp Prompts
   */
  PROMPT_registerOrContinue = 'account:prompt:register-or-continue',
  REPLY_registerOrContinueLogin = 'account:reply:register-or-continue:login',
  REPLY_registerOrContinueReg = 'account:reply:register-or-continue:reg',

  PROMPT_flowType = 'account:prompt:flow-type',
  REPLY_flowTypeWithDeposit = 'account:reply:flowType:deposit',
  REPLY_flowTypeWithoutDep = 'account:reply:flowType:without-deposit',

  PROMPT_userSpar = 'account:prompt:user-spar',
  REPLY_userSparFullData = 'account:reply:user-spar:full-data',
  REPLY_userSparPartialData = 'account:reply:user-spar:partial-data',

  PROMPT_depositLimits = 'account:prompt:deposit-limits',
  REPLY_depositLimitsSet = 'account:reply:deposit-limits-set',
  REPLY_depositLimitsNotSet = 'account:reply:deposit-limits-not-set',

  PROMPT_depositLimitsExceeded = 'account:prompt:deposit-limits-exceeded',
  REPLY_depositLimitsExceededYes = 'account:reply:deposit-limits-exceeded-yes',
  REPLY_depositLimitsExceededNo = 'account:reply:deposit-limits-exceeded-no',

  PROMPT_depositMethod = 'account:prompt:deposit-method',
  REPLY_depositMethodSwish = 'account:reply:deposit-method-swish',
  REPLY_depositMethodTrustly = 'account:reply:deposit-limits-trustly',

  PROMPT_loggedIn = 'account:prompt:logged-in',
  REPLY_loggedInYes = 'account:reply:logged-in-yes',
  REPLY_loggedInNo = 'account:reply:logged-in-no',

  PROMPT_showVerifiedScreen = 'account:prompt:show-verified-screen',
  REPLY_showVerifiedScreenNo = 'account:reply:show-verfied-screen-no',
  REPLY_showVerifiedScreenYes = 'account:reply:show-verfied-screen-yes',

  PROMPT_isAuthenticated = 'account:prompt:is-authenticated',
  REPLY_isAuthenticatedYes = 'account:reply:is-authenticated-yes',
  REPLY_isAuthenticatedNo = 'account:reply:is-authenticated-no',

  PROMPT_showWelcomeScreen = 'account:prompt:show-welcome-screen',
  REPLY_showWelcomeScreenYes = 'account:reply:show-welcome-screen-yes',
  REPLY_showWelcomeScreenNo = 'account:reply:show-welcome-screen-no',

  /**
   * Affiliate
   */
  ProcessAffiliateData = 'account:affiliate:processAffiliateData',

  GetRewards = 'account:reward:getRewards',
}
export interface AccountAppContract {
  [AccountAppCommand.RegistrationStartJourney]: void;
  [AccountAppCommand.RegistrationStartJourneySkipNavigation]: void;
  [AccountAppCommand.LoginPostRegistration]: void;
  [AccountAppCommand.RegistrationExitJourney]: void;
  [AccountAppCommand.RegistrationSuccess]: void;

  [AccountAppCommand.LoginStartJourney]: void;
  [AccountAppCommand.LoginStartJourneySkipNavigation]: void;
  [AccountAppCommand.LoginExitJourney]: void;
  [AccountAppCommand.LoginError]: any;
  [AccountAppCommand.LoginWithMetamask]: void;
  [AccountAppCommand.LoginWithMetamaskError]: string;
  [AccountAppCommand.PnpUserVerified]: void;
  [AccountAppCommand.DepositLimitsUpdated]: void;
  [AccountAppCommand.DepositLimitsNoticeAcked]: void;

  [AccountAppCommand.PnpDepositCompleted]: void;
  [AccountAppCommand.CancelSwishDeposit]: void;
  [AccountAppCommand.RestartDeposit]: void;
  [AccountAppCommand.PnpGetPaymentMethod]: void;
  [AccountAppCommand.PnpRegistrationSubmit]: void;
  [AccountAppCommand.PnpShowWelcomeMessage]: void;
  [AccountAppCommand.PnpStartDeposit]: void;
  [AccountAppCommand.PnpInitiated]: void;
  [AccountAppCommand.PnpCompleted]: void;

  [AccountAppCommand.PnpStartAuthOtherDevice]: void;

  [AccountAppCommand.HandlePnpError]: any;

  [AccountAppCommand.BankIdFailed]: void;

  [AccountAppCommand.PROMPT_registerOrContinue]: void;
  [AccountAppCommand.REPLY_registerOrContinueLogin]: void;
  [AccountAppCommand.REPLY_registerOrContinueReg]: void;

  [AccountAppCommand.PROMPT_flowType]: void;
  [AccountAppCommand.REPLY_flowTypeWithoutDep]: void;
  [AccountAppCommand.REPLY_flowTypeWithDeposit]: void;

  [AccountAppCommand.PROMPT_userSpar]: void;
  [AccountAppCommand.REPLY_userSparFullData]: void;
  [AccountAppCommand.REPLY_userSparPartialData]: void;

  [AccountAppCommand.PROMPT_depositLimits]: void;
  [AccountAppCommand.REPLY_depositLimitsSet]: void;
  [AccountAppCommand.REPLY_depositLimitsNotSet]: void;

  [AccountAppCommand.PROMPT_depositMethod]: void;
  [AccountAppCommand.REPLY_depositMethodSwish]: void;
  [AccountAppCommand.REPLY_depositMethodTrustly]: void;

  [AccountAppCommand.PROMPT_loggedIn]: void;
  [AccountAppCommand.REPLY_loggedInYes]: void;
  [AccountAppCommand.REPLY_loggedInNo]: void;

  [AccountAppCommand.PROMPT_showVerifiedScreen]: void;
  [AccountAppCommand.REPLY_showVerifiedScreenYes]: void;
  [AccountAppCommand.REPLY_showVerifiedScreenNo]: void;

  [AccountAppCommand.PROMPT_isAuthenticated]: void;
  [AccountAppCommand.REPLY_isAuthenticatedYes]: void;
  [AccountAppCommand.REPLY_isAuthenticatedNo]: void;

  [AccountAppCommand.PROMPT_showWelcomeScreen]: void;
  [AccountAppCommand.REPLY_showWelcomeScreenYes]: void;
  [AccountAppCommand.REPLY_showWelcomeScreenNo]: void;

  [AccountAppCommand.PROMPT_depositLimitsExceeded]: void;
  [AccountAppCommand.REPLY_depositLimitsExceededYes]: void;
  [AccountAppCommand.REPLY_depositLimitsExceededNo]: void;

  [AccountAppCommand.SetAutomaticSessionManagementEnabled]: {
    automaticSessionManagementEnabled: boolean;
  };

  [AccountAppCommand.StartForgotPasswordJourney]: void;
  [AccountAppCommand.SubmitForgotPassword]: {
    email: string;
    callback: () => void;
  };
  [AccountAppCommand.SubmitForgotPasswordSuccess]: void;
  [AccountAppCommand.ForgotPasswordExitJourney]: void;

  [AccountAppCommand.ProcessAffiliateData]: void;
}

export const enum AccountAppValue {
  SessionToken = 'appAccount.sessionToken',
  SessionCustomerId = 'appAccount.sessionCustomerId',
  SessionStartTimestamp = 'appAccount.sessionStartTimestamp',
  IsAuthenticated = 'appAccount.isAuthenticated',
  PnPJourneyDepositDetails = 'appAccount.pnPJourneyDepositDetails',
  GetCustomerAllowedActions = 'GetCustomerAllowedActions',
  CustomerRegCountry = 'appAccount.customerRegCountry',
  PnPJourneyStepSlug = 'appAccount.pnpJourneyHeaderTitleKey',
  PnPJourneyInitiated = 'appAccount.pnpJourneyInitiated',
}
export interface AccountAppValueContract {
  [AccountAppValue.IsAuthenticated]: boolean;
  [AccountAppValue.SessionToken]: string | undefined;
  [AccountAppValue.SessionCustomerId]: string | undefined;
  [AccountAppValue.SessionStartTimestamp]: number | undefined;
  [AccountAppValue.CustomerRegCountry]: string | undefined;
  [AccountAppValue.PnPJourneyStepSlug]: string | undefined;
  [AccountAppValue.PnPJourneyInitiated]: boolean | undefined;
}

export type Contracts = AccountAppContract;
export type ValuesContracts = AccountAppValueContract;
