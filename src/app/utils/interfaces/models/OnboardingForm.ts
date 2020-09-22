export interface OnboardingFormComponent {
  component: string;
  options: {
    requiredToggle: boolean;
    placeholder: string;
    label: string;
    name: string;
    index: number;
  };
}

export interface OnboardingFormHeader {
  formTitle: string;
  formDescription: string;
}

export interface OnboardingForm {
  formHeader: OnboardingFormHeader;
  formComponents: OnboardingFormComponent[];
}
