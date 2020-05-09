export const StorageKeys = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  PROFILE: 'PROFILE',
  ORGANIZATION: 'ORGANIZATION',
  SIDEBAR_OPEN: 'SIDEBAR_OPEN'
};

export const Role = {
  VERIFIED_FREELANCER: 'Verified Freelancer',
  PENDING_FREELANCER: 'Pending Freelancer',
  CUSTOMER: 'Customer'
};

export const TaskStatus = {
  REQUESTED: 'Requested',
  PENDING_APPROVAL: 'Pending Approval',
  PAID: 'Paid',
  IN_PROGRESS: 'In Progress',
  COMPLETE: 'Complete'
};

export const TaskActions = {
  FREELANCER_ACCEPT_TASK: 'freelancerAcceptTask',
  FREELANCER_WITHDRAW_TASK: 'freelancerWithdrawTask',
  FREELANCER_ARRIVE_TASK: 'freelancerArriveTask',
  FREELANCER_COMPLETE_TASK: 'completeTask',
  CUSTOMER_ACCEPT_FREELANCER: 'customerAcceptFreelancer',
  CUSTOMER_REJECT_FREELANCER: 'customerRejectFreelancer',
  CUSTOMER_UPDATE_TASK: 'customerUpdateTask',
  CUSTOMER_CANCEL_TASK: 'customerCancelTask',
  CUSTOMER_COMPLETE_TASK: 'customerCompleteTask'
};
