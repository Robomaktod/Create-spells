export interface Spell {
 name: string;
 level: string;
 school: string;
 castingTime: string;
 castingTimeAction: string;
 castingTimeDescription: string;
 duration: string;
 durationUnit: string;
 concentration: string;
 components: {
   verbal: boolean;
   somatic: boolean;
   material: boolean;
 };
 materialDescription: string;
 ritual: string;
 description: string;
 highLevel: string;
 classes: string;
 book: string;
}