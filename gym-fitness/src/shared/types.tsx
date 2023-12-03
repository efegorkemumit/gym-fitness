export enum SelectedPage{
    Home="home",
    Benefits="benefits",
    OurClasses="ourclasses",
    ContactUs="contactUs"
}
export interface BenefitTypes{
    icon:JSX.Element;
    title:string;
    description:string;

}

export interface ClassType{
    name:String;
    description:string;
    image:string

}